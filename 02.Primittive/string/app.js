// let firstName = "HuXn";
// let lastName = "WebDev";
// let fullName = firstName + lastName;
// console.log(fullName);

//1. CONCATENATION
// let fullName = firstName + " " + lastName
// let fullName = firstName.concat(lastName);

//2. APPEND
// firstName += " something else"

//3. LENGTH
// console.log(firstName.length);

//4. CASES
// console.log(firstName.toUpperCase());
// console.log(firstName.toLowerCase());

//5. SLICE
// console.log(fullName.slice(0, 3));

//6. SPLIT & JOIN
// console.log(fullName.split("").join("-"));

//7. INCLUDES
// console.log(fullName.includes("HuXn"));

//8. TRIM
// console.log(fullName.trim());

// 1. Create variable name (favActorFirstName) & store your fav Actor name.
// 2. Create variable name (favActorLastName) & store the last name of (FA).
// 3. Create variable name (fullName) & concatenate (favActorFirstName, favActorLastName)
// 4. Create variable name (uppercase) & CAPITALIZE your fav actor name.
// 5. Create a variable name (message) & store `My favorite Actor Is (favActorName) & say something about your fav actor` name should be in UPPERCASE.
// 6. Now append this message to the (message variable) `his best show is Silicon Valley`.
// 7. Now Log your Message.
let favActorFirstName = "hritik";
let favActorLastName = "roshan";
let fullName = favActorFirstName.concat(favActorLastName);
console.log(fullName);
console.log(fullName.toUpperCase());
let message = `My favorite Actor Is ${fullName} & say something about your fav actor`;
message += "his best show is Silicon Valley";
console.log(message);
