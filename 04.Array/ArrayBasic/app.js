// // -----------------------------------
// // An array is an object that can store multiple values at once. For example,
// // const words = ["hello", "world", "welcome"];
// // ['string', 123, true, []]
// // -----------------------------------

// // -----------------------------------
// // empty array
// const myList = [];

// // array of numbers
// const numberArray = [2, 4, 6, 8];

// // array of strings
// const stringArray = ["eat", "work", "sleep"];

// // array with mixed data types
// // const newData = ["work", "exercise", 1, true];
// // -----------------------------------
// const newData = [
//   { task1: "exercise" },
//   [1, 2, 3],
//   function hello() {
//     console.log("hello");
//   },
// ];

// // -----------------------------------
// // ACCESSING ITEMS
// const myArray = ["h", "e", "l", "l", "o"];

// // first element
// console.log(myArray[0]); // "h"

// // second element
// console.log(myArray[1]); // "e"

// 1. Create array name (favSingers) Store 3 favorite singers.
// 2. log the first singer in that array.
// 3. Create array name (favNumbers) & store 4 fav Numbers.
// 4. Create array name (mixedArr) store ["string", ["otherarray"], 123, true]
// 5. Now Access each item in that array by using [] notation.

let favSingers = ["jubin", "Arijit", "Arfan"];
console.log(favSingers[0]);
let favNumbers = [12, 10, 23, 24];
console.log(favNumbers[2]);
let mixedArr = ["Aman", ["web", "dsa", "Aptitude"], 123, true];
console.log(mixedArr[0]);
console.log(mixedArr[1][0]);
