// ==========================
// 1. GLOBAL SCOPE
// ==========================

// বাইরে declare করলে সব জায়গা থেকে access করা যায়

let globalVar = "I am global";

function test() {
  console.log(globalVar); // accessible
}

test();


// ==========================
// 2. BLOCK SCOPE
// ==========================

// {} এর ভিতরে declare করলে শুধু ওই block এর ভিতরেই কাজ করে

{
  let blockVar = "I am block scoped";
  console.log(blockVar); // works here
}

// console.log(blockVar); ❌ error (outside not accessible)


// let and const = block scoped
// var = block scoped না (function scoped)

if (true) {
  var x = 10;
}

console.log(x); // 10 (var leaks outside block)


// ==========================
// 3. HOISTING (simple idea)
// ==========================

// variable declaration "up" এ চলে যায় (internally)

console.log(a); // undefined (not error)
var a = 5;


// let & const hoist হয় but Temporal Dead Zone থাকে

// console.log(b); ❌ error
let b = 10;


// ==========================
// FUNCTION HOISTING
// ==========================

sayHello(); // works

function sayHello() {
  console.log("Hello!");
} 