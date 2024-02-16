// -------------------------------------------------------

// Map is a built-in data structure introduced in (ES6) that allows you to store key-value pairs where both the keys and values can be of any data type. It is similar to an object, but with a few key differences:

// -> Keys can be of any data type: Unlike objects, where keys are limited to strings and symbols, Map allows you to use any data type as keys, including numbers, booleans, objects, and even other Map instances.

// -> Maintains insertion order: Map preserves the order of key-value pairs as they were inserted, while object keys may not be guaranteed to be in a specific order.

// -> Iteration: Map provides built-in methods for easy iteration over its elements.

// The syntax to create a Map is as follows:
// const myMap = new Map();

// You can also initialize a Map with an array of key-value pairs using the Map constructor:
// const myMap = new Map([
//   [key1, value1],
//   [key2, value2],
// ]);

// Here, key1, key2, etc., can be any data type, and value1, value2, etc., can be any value associated with the respective keys.

// Map provides various methods for managing and accessing its elements, such as set(), get(), has(), delete(), clear(), and more.

// Map is a powerful data structure in JavaScript, and it provides a flexible and efficient way to manage key-value data with various data types as keys.

// -------------------------------------------------------

const map = new Map();

const keyOne = "string";
const keyTwo = {};
const keyThree = function () {};

map.set(keyOne, "Value of key one");
map.set(keyTwo, "Value of key two");
map.set(keyThree, "Value of key three");

console.log(map.get(keyOne));
console.log(map.get(keyTwo));
console.log(map.get(keyThree));

console.log(map.keys());
console.log(map.values());
console.log(map.delete(keyTwo));
console.log(map.size);

// Iterating Over Map
for (let [key, value] of map) {
  console.log(`${key} -- ${value}`);
}

for (let key of map.keys()) {
  console.log(key);
}

for (let value of map.values()) {
  console.log(value);
}

// 1. Create a new Map
// 2. Set these properties  ("a", "b", "c")
// 3. Set these values (1, 2, 3)
// 4. Get "a" from that map
// 5. Check the size of that map
// 6. Delete the property "b" & then check the size.

let mp = new Map();
mp.set("a", 1);
mp.set("b", 2);
mp.set("c", 3);
console.log(mp.get("a"));
console.log(mp.size);
console.log(mp.delete("b"));

// ------------------------------------------
// Write a function called countCharacters that takes a string as input and returns a Map that contains each character in the string as a key and the count of occurrences of that character as the value.

// Something like this 👇
// const text = "hello";

// const characterCountMap = countCharacters(text);
// console.log(characterCountMap);

// output

function countCharacters(str) {
  const characterCountMap = new Map();

  for (const char of str) {
    const count = characterCountMap.get(char) || 0;
    characterCountMap.set(char, count + 1);
  }

  return characterCountMap;
}

// Testing the function with the example string
const text = "hello";
const characterCountMap = countCharacters(text);
console.log(characterCountMap);
// ------------------------------------------
