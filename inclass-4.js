// Example case
let numbers = [40, 1, 23, 400, 99, 100];

function sort(numbers) {
 for (let x = 0; x < numbers.length; x++)
    for (let y = 0; y < x; y++)
      if (numbers[x] < numbers[y]) {
        let newNumber = numbers[x];
        numbers[x] = numbers[y];
        numbers[y] = newNumber;
      }
      return numbers 
    }


// ผลลัพธ์ที่ต้องได้จากการ Execute Function
let sortedNumbers = sort(numbers);
console.log(sortedNumbers); // [1, 23, 40, 99, 100, 400]
