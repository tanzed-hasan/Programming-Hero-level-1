// ==========================
// 1. DOUBLE EQUAL (==)
// ==========================

// শুধু value check করে (type ignore করে)
// এখানে implicit conversion হয় (type convert হয়)

console.log(5 == "5");   // true
console.log(true == 1);  // true
console.log(false == 0); // true


// ==========================
// 2. TRIPLE EQUAL (===)
// ==========================

// value + type দুইটাই check করে (strict)

console.log(5 === "5");   // false
console.log(true === 1);  // false
console.log(5 === 5);     // true


// ==========================
// 3. IMPLICIT CONVERSION (type coercion)
// ==========================

// JS automatically type convert করে == ব্যবহার করলে

console.log("10" + 1);   // "101" (string concat)
console.log("10" - 1);   // 9 (string → number)
console.log("5" * 2);    // 10


// ==========================
// REAL EXAMPLE
// ==========================

let a = "5";
let b = 5;

if (a == b) {
  console.log("Equal with ==");
}

if (a === b) {
  console.log("Equal with ===");
} else {
  console.log("Not equal with ===");
}