// ==========================
// 1. UNDEFINED
// ==========================

// Variable declare করা কিন্তু value না দিলে
let a;
console.log(a); // undefined

// Object property missing থাকলে
const user = { name: "Rahim" };
console.log(user.age); // undefined

// Function return না করলে
function test() {}
console.log(test()); // undefined

// Parameter না পাঠালে
function show(x) {
  console.log(x);
}
show(); // undefined

// Array index out of range
const arr = [1, 2, 3];
console.log(arr[5]); // undefined


// ==========================
// 2. NULL
// ==========================

// Null = intentionally empty value
let b = null;
console.log(b); // null

// Example: reset value
let userName = "Rahim";
userName = null;


// ==========================
// DIFFERENCE
// ==========================

console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (JS bug 😅)


// ==========================
// QUICK SUMMARY
// ==========================

// undefined → value assign করা হয়নি (system দেয়)
// null → intentionally খালি রাখা (developer দেয়)