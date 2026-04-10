// ==========================
// FALSY VALUES
// ==========================

// এগুলো সবসময় false হিসেবে কাজ করে

let a1 = false;
let a2 = 0;
let a3 = "";
let a4 = null;
let a5 = undefined;
let a6 = NaN;

if (a1) console.log("true");
else console.log("false"); // false


// ==========================
// TRUTHY VALUES
// ==========================

// এগুলো সবসময় true হিসেবে কাজ করে

let b1 = "hello";   // non-empty string
let b2 = 1;         // any number except 0
let b3 = [];        // empty array
let b4 = {};        // empty object
let b5 = "0";       // string "0"

if (b1) console.log("truthy"); // truthy


// ==========================
// REAL EXAMPLE
// ==========================

let userName = "Rahim";

if (userName) {
  console.log("User exists");
} else {
  console.log("No user");
}


// ==========================
// QUICK CHECK FUNCTION
// ==========================

function check(value) {
  if (value) {
    console.log(value + " is TRUTHY");
  } else {
    console.log(value + " is FALSY");
  }
}

check(0);
check("hello");
check(null);
check([]);