// ==========================
// MODULE: Data Types Overview
// ==========================

// JavaScript data types 2 ভাগে ভাগ করা হয়:
// 1. Primitive
// 2. Non-Primitive (Reference)


// ==========================
// 1. PRIMITIVE DATA TYPES
// ==========================

// এগুলো single value store করে
// copy করলে আলাদা value তৈরি হয় (copy by value)

let name = "Rahim";     // String
let age = 20;           // Number
let isStudent = true;   // Boolean
let x;                  // Undefined
let y = null;           // Null

// Example: copy behavior
let a = 10;
let b = a;

b = 20;

console.log(a); // 10 (unchanged)
console.log(b); // 20


// ==========================
// 2. NON-PRIMITIVE DATA TYPES
// ==========================

// এগুলো reference (memory address) store করে
// copy করলে same object share করে (copy by reference)

let person = {
  name: "Rahim",
  age: 20
};

let obj1 = { name: "Rahim" };
let obj2 = obj1;

obj2.name = "Karim";

console.log(obj1.name); // Karim (changed)


// ==========================
// TYPES OF NON-PRIMITIVE
// ==========================

// Object
let user = {
  name: "Rahim",
  age: 20
};

// Array
let numbers = [1, 2, 3];

// Function
function greet() {
  console.log("Hello");
}

