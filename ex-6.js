let studentsScore = {
  James: 40,
  Ann: 80,
  Joe: 52,
  Ball: 67,
  Mick: 89,
  Ole: 10,
};

// Start coding here
//ข้อ 1
let newScores = [];
let sum = 0;
for (let key in studentsScore) {
  let findScores = studentsScore[key];
  sum = sum + findScores;
}
console.log(`Average score is ${sum}`);

// ข้อ 2
// let min = newScores[0];
// let max = newScores[0];
// for (i = 0; i < newScores.length; i++) {
//   if (newScores[i] < min) {
//     min = newScores[i];
//   }
//   if (newScores[i] > max) {
//     max = newScores[i];
//   }
// }

// let lowestperson =

let findMin = Infinity;
let findMinDisplay;
let findMax = 0;
let findMaxDisplay;
for (let key in studentsScore) {
  let find = studentsScore[key];
  if (findMin > find) {
    findMin = find;
    findMinDisplay = key;
  }
  if (findMax < find) {
    findMax = find;
    findMaxDisplay = key;
  }
}

console.log(`${findMinDisplay} has the highest score, which is ${findMin} points.`);
console.log(`${findMaxDisplay} has the highest score, which is ${findMax} points.`);

