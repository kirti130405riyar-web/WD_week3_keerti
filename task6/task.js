let number = 15;
console.log("Program 1: Number Checking");

if(number > 0){
    console.log(number,"is a positive number.");
}
else if (number < 0){
    console.log(number, "is a negative number.");
}
else {
    console.log("The number is zero.");
}
let num = 24;
console.log("\nProgram 2: Even or Odd");

if(num % 2 === 0){
    console.log(num, "is an even number.");
}
else{
    console.log(num, "is an odd number.");
}

let sum = 0;
console.log("\nProgram 3: Sum of Numbers");
for(let i = 1; i <= 10; i++){
    sum = sum +i;
}
console.log("Sum of number from 1 to 10:", sum);
let firstNumber = 45;
let secondNumber = 75;
let thirdNumber = 60;

console.log("\nProgram 4: Greatest Number");

if (firstNumber >= secondNumber && firstNumber >= thirdNumber){
    console.log(firstNumber, "is the greatest number.");
}
else if (secondNumber >=  firstNumber && secondNumber >= thirdNumber){
    console.log(secondNumber, "is the greatest number.");
}
else{
    console.log(thirdNumber,"is the greatest number.");
}

let tableNumber = 7;
console.log("\nProgram 5: Multiplication Table");
for (let i = 1; i<= 10; i++){
    console.log(tableNumber + "x" + i + "=" + (tableNumber*i));
}