// 📞 Callback function কি?

// 👉 একটা function যেটা অন্য function এর argument হিসেবে যায়
// 👉 পরে সেই function এর ভিতরে call করা হয়


// ==========================
// 1. CALLBACK FUNCTION BASIC
// ==========================

// function যেটা অন্য function এর ভিতরে argument হিসেবে যায়

function greet(name, callback) {
  console.log("Hello " + name);
  callback(); // calling callback function
}

function sayBye() {
  console.log("Bye!");
}

greet("Rahim", sayBye);


// ==========================
// 2. INLINE CALLBACK FUNCTION
// ==========================

greet("Karim", function () {
  console.log("This is inline callback");
});


// ==========================
// 3. ARROW FUNCTION CALLBACK
// ==========================

greet("Sakib", () => {
  console.log("Arrow callback function");
});


// ==========================
// 4. PASS DIFFERENT FUNCTIONS
// ==========================

function add(a, b) {
  console.log("Sum:", a + b);
}

function multiply(a, b) {
  console.log("Multiply:", a * b);
}

function calculator(a, b, operation) {
  operation(a, b); // callback execute
}

calculator(5, 3, add);       // Sum: 8
calculator(5, 3, multiply);   // Multiply: 15