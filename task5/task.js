console.log("Number from 1 to 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("\nEven Number from 1 to 20:");
let num = 1;
while (num <= 20) {
    if (num <= 20) {
        console.log(num);
    }
    num++;
}

console.log("\nOdd Number from 1 to 20:");
let number = 1;

do {
    if (number % 2 !== 0) {
        console.log(number);
    }
    number++;
} while (number <= 20);

let tableNumber = 5;
console.log("\nMultiplication Table of", tableNumber);

for (let i = 1; i <= 10; i++) {
    console.log(tableNumber + "x" + i + "=" + (tableNumber * i));
}

console.log("\nSum of Number from 1 to 10:");

let i = 1;
let sum = 0;

while (i <= 10) {
    sum = sum + i;
    i++;
}

console.log("Total sum:", sum);
console.log("\nNumber in Reverse Order:");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
