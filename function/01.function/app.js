// function is a block of code that perform a specific task
// It makes code reusability as same code can be used again and again
// It makes program easier to understand and make as large task is broken down into smaller sub task which can be solved seperately using functions
// It's support DRY - Do not repeat yourself
// function name(parameterIfAny) {...}

// Function Declaration
function sayHello(username) {
  console.log(`Hello ${username}`);
}

sayHello("HuXn");

// Function Expressions
const greetings = function (user) {
  console.log(`Hello ${user}`);
};

greetings("Doe");

// -------------------------
console.log(x); // ERROR
let x = 10;

// -------------------------------
// declaring a function named greet()
function greet() {
  console.log("Hello there");
}

greet(); // calling function

// -------------------------------
//   function sayHello(username) {
//     console.log(`Hello ${username}`);
//   }

//   sayHello("HuXn"); // calling function
//   // -------------------------------
//   // The return statement can be used to return the value to a function call.
//   function add(numberOne, numberTwo) {
//     return numberOne + numberTwo;
//     // console.log("Hello World"); NOTHING
//   }

//   const result = add(10, 20);
//   console.log(result);
// -------------------------------

// 1. Create function name (myFunction)
// 2. This function will take 2 parameters
// 3. Any number we pass as argument it will multiply that number.
// 4. As argument pass your favorite numbers.
// 5. log the value.

function myFunction(x, y) {
  return x * y;
}
console.log(myFunction(2, 3));
