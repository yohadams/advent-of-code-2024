import fs from 'fs';

function mul(a, b) {
  return a * b;
}

const input = fs.readFileSync('./input', 'utf-8');
const corruptedLines = input.trim();

const regexp = /mul\(\d{1,3},\d{1,3}\)/gm;
const matches = corruptedLines.match(regexp);

let sum = 0;

for (const match of matches) {
  const [a, b] = match.slice(4, -1).split(',');
  const result = mul(Number(a), Number(b));
  sum += result;
}

console.log('Sum of results: ', sum);