import fs from 'fs';

function mul(a, b) {
  return a * b;
}

const input = fs.readFileSync('./input', 'utf-8');
const corrupted = input.trim();
const corruptedDos = corrupted.split('do()');

const onlyDoLines = [];

for (const corruptedDo of corruptedDos.slice(1)) {
  onlyDoLines.push( corruptedDo.split(`don't()`)[0]);
}

const regexp = /mul\(\d{1,3},\d{1,3}\)/gm;
const matches = onlyDoLines.join('').match(regexp);

let sum = 0;

for (const match of matches) {
  const [a, b] = match.slice(4, -1).split(',');
  const result = mul(Number(a), Number(b));
  sum += result;
}

console.log('Sum of results: ', sum);
