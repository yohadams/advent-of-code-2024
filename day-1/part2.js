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

let sumOfSimilarityScore = 0;

for (const leftValue of leftList) {
  const numberOfSimilarities = rightList.filter((right) => leftValue === right).length;
  sumOfSimilarityScore += leftValue * numberOfSimilarities;
}

console.log('Sum of similar scores equals: ', sumOfSimilarityScore);