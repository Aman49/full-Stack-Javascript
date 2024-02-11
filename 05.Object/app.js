// // ------------------------
// // JavaScript object is a non-primitive data-type that allows you to store multiple collections of data.

// // {key: value}
// // ------------------------

// // ------------------------
// // Creating Object
// let person = {
//   firstName: "HuXn",
//   lastName: "WebDev",
//   age: 18,
//   location: ["Planet", "Earth"],
//   isProgrammer: true,
// };

// // Accessing Properties
// console.log(typeof person);
// console.log(person.location[1]);
// console.log(person["isProgrammer"]);
// // console.log(person[isProgrammer]); // ERROR -> without quotes

// // Updating Properties
// console.log(person.firstName);
// console.log((person.firstName = "Sam"));

// // Add new properties
// console.log((person.isProgrammer = false));
// console.log(person);

// 1. Create object name (car)
// 2. add (type, model, color) as properties
// 3. check the type of object
// 4. Update the type property to "Toyota"
// 5. Add new property wheels
// 6. log car to the console.

let car = {
  type: "hundai",
  model: "12xm",
  color: "red",
};
console.log(car);
car.type = "Toyota";
car.wheel = 4;
console.log(car);
