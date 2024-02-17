// // href
// // value
// // type
// // getAttribute(attrName)
// // setAttribute(attrName, value)

// const a = document.querySelector("a");
// const input = document.querySelector("input");

// // Getting Attribute
// console.log(a);
// console.log(a.href);
// console.log(input.value);
// console.log(input.type);

// // Setting Attribute
// a.href = "https://www.google.com";
// console.log((input.value = "Hello"));
// console.log((input.type = "password"));
// console.log((input.placeholder = "Provide a strong password"));

// // **********************************
// // getAttribute(attrName)
// console.log(input.getAttribute("type"));

// // getAttribute(attrName, value)
// console.log(input.setAttribute("placeholder", "Email"));

// 1. Select the anchor tag
// 2. Use getAttribute(attrName) to check the attribute.
// 3. Select a-two & set "href" attribute
// setAttribute(attrName, value)

const a = document.querySelector("a");
console.log(a.getAttribute("href"));

let a2 = document.querySelector(".a-two");
a2.setAttribute("href", "https://www.udemy.com/user/huxn-webdev");
console.log(a2);

// Bonuse
console.log(a2.getAttribute("href"));
