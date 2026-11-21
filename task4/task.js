let number = -5;
console.log("Checking Positive, Negative or Zero");

if(number > 0){
    console.log(number, "is a positive number.");
}else if (number < 0){
    console.log(number,"is a negative number.");
}else {
    console.log("The number is zero.");
}



let num = 12;
console.log("\nChecking Even or Odd");

if(num % 2 === 0){
    console.log(num, "is an even number.");
}else{
    console.log(num,"is an odd number.");
}



let age = 20;
console.log("\nChecking Age Eligibility:");

if(age >= 18){
    console.log("You are eligible.");
}else{
    console.log("You are not eligible.");
}

let firstNumber = 25;
let secondNumber = 40;
console.log("\nFinding Greater Number:");

if(firstNumber > secondNumber){
    console.log(firstNumber, "is greater.");
}else if (secondNumber > firstNumber){
    console.log(secondNumber,"is greater");
}else{
    console.log("Both number are equal.")
}

let a = 50;
let b = 30;
let c = 70;
console.log("\nFinding Greatest of three Number:");

if (a > b){
    if(a > c){
        console.log(a, "is the greatest number.");
    }
    else{
        console.log(c, "is the greatest number.");
    }
}
else{
    if(b > c){
        console.log(b, "is the greatest number.");
    }else{
        console.log(c,"is the greatest number.");
    }
}

let marks = 85;
console.log("\nChecking Student Grade:");

if (marks >= 90 && marks < 100){
console.log("Grade A");
}
  else if (marks >= 80 && marks < 90){
    console.log("Grade B");
  }  
  else if (marks >= 70 && marks < 80){
    console.log("Grade D")
  }
else if (marks >= 60 && marks < 70){
    console.log("Grade D");
}
else if (marks >= 0 && marks < 60){
    console.log("Grade F");
}
else{
    console.log("Invalid marks");
}