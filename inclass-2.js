const numbers = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
const evenNumbers = [];
const oddNumbers = [];

let findEven = 0;
let findOdd = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    evenNumbers.push(numbers[i]);
  } else if (numbers[i] % 2 !== 0) {
    oddNumbers.push(numbers[i]);
  }
}
console.log(evenNumbers);
console.log(oddNumbers);

// ต้องใช้เครื่องหมาย % ในการหาค่า Odd กับ Even
