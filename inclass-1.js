const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sum = 0;

let container = 0;
let newValue = 0;
for (let i=0; i < numbers.length; i++) {
    container = container + numbers[i];
newValue = container + sum;
}

console.log(newValue);

//cant' assign variable sum a new value (55)