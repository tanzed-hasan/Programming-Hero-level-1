const student = {
  name: "Tanzed",
  age: 22,
  address: {
    city: "Dhaka",
    country: "Bangladesh",
    continent: "Asia",
  },
  1: 40,
  "amar-cg": 3.30
};
const emplyee = {
  name: "Tanzed",
  age: 22,
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
  1: 40,
  "amar-cg": 3.30
};

// DOT notation
console.log(student.name);



// BRACKET notation
console.log(student["age"]);
//console.log(student[age]);          // This will cause an error because age is not defined as a variable. It should be student["age"] or student.age to access the age property correctly.
console.log(student['1']);
console.log(student[1]);                            // In JavaScript, object property keys that are numeric strings (like "1") can be accessed using either bracket notation with the string key or directly with the numeric key. Both student['1'] and student[1] will access the same property and return 40.
console.log(student["amar-cg"]);                    // console.log(student.amar-cg);          // This will cause an error due to the hyphen in the property name  



// Accessing nested properties
console.log(student.address.city);




// Optional chaining notation
console.log(student?.address?.country);      
console.log(emplyee?.address?.continent)            //The line will not throw an error even though the continent property does not exist in the emplyee object. Instead, it will return undefined.
console.log(student?.address?.continent)              
console.log(emplyee.address.continent)                  


// object distucturing
const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'}

const {price} = product;
console.log(price);

// 🧠 Object Destructuring কি?

// 👉 Object destructuring হলো JavaScript-এর একটা shortcut syntax, যেটা দিয়ে object থেকে সহজে values বের করা যায়।

// 🔥 Basic Syntax:
// const { key1, key2 } = object;