// 💡 Key Points:
// map() নতুন array return করে
// original array change করে না ❌
// loop এর মতো কাজ করে কিন্তু cleaner & shorter ✅

const numbers = [1, 2, 3, 4, 5];
const doubled = []

for(const num of numbers) {
    doubled.push(num * 2);
}

console.log(doubled);

// Using map method to achieve the same result in one line
const doubledWithMap = numbers.map(num => num * 2);
console.log(doubledWithMap);



const users = [
  {name: "Rahim"},
  {name: "Karim"},
  {name: "Jabbarali"}
];

const names = users.map(user => user.name);
const nameLengths = users.map(user => user.name.length);
const fistLetter = users.map(user => user.name[0]);

    
console.log(names); // ["Rahim", "Karim", "Jabbarali"]
console.log(nameLengths); // [5, 5, 9]
console.log(fistLetter); // ["R", "K", "J"]


// multiple operations in one map

const nameInfo = users.map(user => {
    return {
        name: user.name,       
        length: user.name.length,
        firstLetter: user.name[0]
    }
});

console.log(nameInfo);

//multiple operations in one map with implicit return
const result = numbers.map((num, index) => {
    return  num*index
});

console.log(result);





//---------------------------------------------------------------------

// ==========================
// Problem 1: Object Transform
// ==========================

const user = [
  {name: "Rahim", age: 20},
  {name: "Karim", age: 25}
];

// প্রতিটা object থেকে string বানানো
const result1 = user.map(use => `${use.name} is ${use.age} years old`);

console.log(result1);
// ["Rahim is 20 years old", "Karim is 25 years old"]


// ==========================
// Problem 2: Add New Property
// ==========================

const products = [
  {name: "Phone", price: 100},
  {name: "Laptop", price: 1000}
];

// নতুন property add করা (10% tax)
const result2 = products.map(p => ({
  ...p, // আগের সব property copy
  priceWithTax: p.price * 1.10
}));

console.log(result2);


// ==========================
// Problem 3: Nested Object Access
// ==========================

const students = [
  {name: "A", marks: {math: 80}},
  {name: "B", marks: {math: 60}}
];

// nested object থেকে value বের করা
const result3 = students.map(s => s.marks.math);

console.log(result3);
// [80, 60]


// ==========================
// Problem 4: Conditional Mapping
// ==========================

const number = [1, 2, 3, 4, 5];

// even হলে ×2, odd হলে ×3
const result4 = number.map(n => n % 2 === 0 ? n * 2 : n * 3);

console.log(result4);
// [3, 4, 9, 8, 15]


// ==========================
// Problem 5: Array → Object
// ==========================

const name = ["rahim", "karim"];

// string থেকে object বানানো
const result5 = name.map(nam => ({
  nam: name,
  length: name.length
}));

console.log(result5);


// ==========================
// Bonus Problem (Hard)
// ==========================

const orders = [
  {id: 1, items: [10, 20]},
  {id: 2, items: [5, 15]}
];

// প্রতিটা order এর total বের করা (reduce use করে)
const result6 = orders.map(order => ({
  id: order.id,
  total: order.items.reduce((sum, item) => sum + item, 0)
}));

console.log(result6);
// [{id:1, total:30}, {id:2, total:20}]