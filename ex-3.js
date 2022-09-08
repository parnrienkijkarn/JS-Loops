let numbers = [100, 20, 3, 1000];
let minNumber;

// Start coding here
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < numbers[0]) {
        // console.log(numbers[i])
        minNumber = numbers[i]
    } 
}
console.log(minNumber);