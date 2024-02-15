// The "reducer" method executes a reducer function for array element.
// The "reducer" method returns a single value: the function's accumulated result.
// The "reducer" method does not execute the function for empty array elements.
// The "reducer" method does not change the original array.

// array.reducer(function(total, currentValue, currentIndex, arr), initialValue)

// ------------------------------------
// Example 1
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((p, c) => {
//   console.log(`Previous: ${p}`);
//   console.log(`Current: ${c}`);
//   return p + c;
//   // p value: 0
//   // c value: [numbers array]

//   // reduce function will run for every item in the array, basically this is what's gonna happen
//   // 0 + 1 => 1
//   // 1 + 2 => 3
//   // 3 + 3 => 6
//   // 6 + 4 => 10
//   // 10 + 5 => 15
// }, 0);

// console.log(sum);
// ------------------------------------

// ------------------------------------
// Example 2
const people = [
  {
    name: "HuXn WebDev",
    age: 18,
  },
  {
    name: "Alex Mead",
    age: 29,
  },
  {
    name: "Brain Griffin",
    age: 40,
  },
];

// Ternary Operator
const oldestAge = people.reduce((p, c) => (c.age > p ? c.age : p), 0);
console.log(oldestAge);
// ------------------------------------

// -------------------------------------
// Example 3
// const words = [
//   "apple",
//   "banana",
//   "orange",
//   "banana",
//   "apple",
//   "orange",
//   "apple",
//   "grape",
// ];

// const wordFrequency = words.reduce((frequencyMap, word) => {
//   frequencyMap[word] = (frequencyMap[word] || 0) + 1;
//   return frequencyMap;
// }, {});

// console.log(wordFrequency);
// -------------------------------------

// -------------------------------------
// -------------------------------------
// Write a function called calculateProduct that takes an array of numbers as an argument and returns the product of all the numbers in the array.

// Write the calculateProduct function using the reduce() method to achieve this task.

// Something like this 👇
// const numbers = [2, 3, 4, 5];

// const product = calculateProduct(numbers);
// console.log(product); // 120
// -------------------------------------

// Solution
function calculateProduct(arr) {
  const product = arr.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
  );
  return product;
}

const numbers = [2, 3, 4, 5];
const product = calculateProduct(numbers);
console.log(product); // Output: 120
