// 1. Select element h4 which holds text of "Red" by using getElementsByTagName
// 2. Select div with the class of "green" which holds text (Green) by using getElementsByTagName
// 3. Select div with the ID of blue which holds the text "Blue" by using getElementsByClassName
// 4. Select div which has the class & Id of "yello" by using querySelector()
// 5. Select all the elements which has the class of "teal" by using querySelectorAll

let h4 = document.getElementsByTagName("h4");
console.log(h4);

let cls = document.getElementsByClassName("green");

let ids = document.getElementById("Blue");
let qu = document.querySelector(".yello");
let te = document.querySelectorAll(".teal");

console.log(cls);
console.log(ids);
console.log(qu);
console.log(te);
