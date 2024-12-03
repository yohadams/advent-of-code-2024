import fs from 'fs';


function isReportSafe(report) {
  const levels = report.split(" ").map(Number);
  let isIncreasing = null;

  for (let i = 0; i < levels.length - 1; i++) {
      const value = levels[i] - levels[i + 1];

      if (Math.abs(value) < 1 || Math.abs(value) > 3) {
          return false; 
      }

      if (isIncreasing === null) {
          isIncreasing = value > 0;
      } else if ((isIncreasing && value < 0) || (!isIncreasing && value > 0)) {
          return false;
      }
  }

  return true;
}

function isSafeWithOneRemoval(report) {
  const levels = report.split(" ").map(Number);

  for (let i = 0; i < levels.length; i++) {
      const modifiedLevels = [...levels.slice(0, i), ...levels.slice(i + 1)];
      if (isReportSafe(modifiedLevels.join(" "))) {
          return true;
      }
  }

  return false;
}

const input = fs.readFileSync('./input', 'utf-8');
const reports = input.trim().split("\n");
let safeCount = 0;

for (const report of reports) {
    if (isReportSafe(report)) {
        safeCount++;
    } else if (isSafeWithOneRemoval(report)) {
        safeCount++;
    }
}

console.log('Number of safe reports: ', safeCount);
