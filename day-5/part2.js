import fs from 'fs';

const rules = fs.readFileSync('./rules', 'utf-8').split('\n').map(r => r.trim());
const actualization = fs.readFileSync('./actualization', 'utf-8').split('\n').map(r => r.trim());

let sum = 0;

for (let i = 0; i < actualization.length; i++) {
  const currentActualization = actualization[i].split(',').map(Number);
  let isOk = true;

  for (let rule of rules) {
    const [X, Y] = rule.split('|').map(Number);
    if (currentActualization.includes(X) && currentActualization.includes(Y)) {
      const xIndex = currentActualization.indexOf(X);
      const yIndex = currentActualization.indexOf(Y);
      
      if (xIndex >= yIndex) {
        isOk = false;
        break;
      }
    }
  }

  if (!isOk) {
    console.log(`Test ${i + 1}: NOK - ${currentActualization.join(',')}`);

    const sorted = currentActualization.sort((a, b) => {
      for (let rule of rules) {
        const [X, Y] = rule.split('|').map(Number);
        if (X === a && Y === b) return -1; 
        if (X === b && Y === a) return 1;
      }
      return 0; 
    });

    console.log(`Sorted: ${sorted.join(',')}`);

    const middleIndex = Math.floor(sorted.length / 2);
    sum += sorted[middleIndex];
  }
}

console.log(`Sum: ${sum}`);