import fs from 'fs';

const input = fs.readFileSync('./input', 'utf-8');
const [rightList, leftList] = input
  .split('\n')
  .reduce((acc, line) => {
    const [rightValue, leftValue] = line.split('   ');
    acc[0].push(rightValue);
    acc[1].push(leftValue.trim());
    return acc;
  }, [[], []]);
  
const rightListSorted = rightList.sort((a, b) => a - b);
const leftListSorted = leftList.sort((a, b) => a - b);

let sumOfDistances = 0;

for (let i = 0; i < rightListSorted.length; i++) {
  sumOfDistances += Math.abs(rightListSorted[i] - leftListSorted[i]);
}

console.log('Sum of distances between numbers equals: ', sumOfDistances);