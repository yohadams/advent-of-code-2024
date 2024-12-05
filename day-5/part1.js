
import fs from 'fs';

//const rules = fs.readFileSync('./rules', 'utf-8').split('\n').map(r => r.trim());
//const actualization = fs.readFileSync('./actualization', 'utf-8').split('\n').map(r => r.trim());
const rules = `47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13`.split('\n').map(r => r.trim());
const actualization = `75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47`.split('\n').map(r => r.trim());

let sum = 0; 
for (let i = 0; i < actualization.length; i++) {
    const currentActualization = actualization[i].split(',');
    let isOk = true;
    for (let rule of rules) {
        const [X, Y] = rule.split('|');
        if (currentActualization.includes(X) && currentActualization.includes(Y)) {
          const xIndex = currentActualization.indexOf(X);
          const yIndex = currentActualization.indexOf(Y);
          
          const test = xIndex < yIndex;
          if (!test) {
            isOk = false;
            break;
          }
        }
    }

    console.log(`Test ${i + 1}: ${isOk ? 'OK' : 'NOK'} - ${currentActualization.length}`);
    if (isOk) {
      const middleIndex = Math.floor(currentActualization.length / 2);
      sum += parseInt(currentActualization[middleIndex], 10);
    }
}

console.log(`Sum: ${sum}`);