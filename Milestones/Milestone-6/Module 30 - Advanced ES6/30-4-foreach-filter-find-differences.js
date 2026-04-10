// ✅ forEach কি?

// forEach() হলো JavaScript এর একটি array method, যেটা array এর প্রতিটা element এর উপর loop চালায়।

// 👉 কিন্তু এটা নতুন array return করে না ❌
// 👉 শুধু কাজ (action) করে ✔️

// | forEach                    | map                            |
// | -------------------------- | ------------------------------ |
// | কিছু return করে না          | নতুন array return করে          |
// | শুধু loop চালায়              | transform করে নতুন array বানায়   |
// | side effect এর জন্য use হয় | data change করার জন্য use হয়   */

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.forEach((num) => num * 2);
console.log(doubled); // undefined

// forEach does not return a new array, it returns undefined. It is used for side effects, not for transforming arrays. If you want to create a new array with the transformed values, you should use the map method instead of forEach.

const squared = numbers.forEach((num) => {
  console.log(num * num); // 1 4 9 16 25
});

const fruits = ["apple", "banana", "lichu"];

fruits.forEach((fruit, index) => {
  console.log(index, fruit);
});

// ✅ 1. filter() কি?

// 👉 filter() ব্যবহার হয় condition অনুযায়ী নতুন array বানানোর জন্য

// 🔥 Syntax:
// array.filter((element) => condition);

const result = numbers.filter((n) => n > 3);

console.log(result);

// ✅ 2. find() কি?

// 👉 find() প্রথম যে element condition match করে সেটাই return করে

// 🔥 Syntax:
// array.find((element) => condition);

const resultOfFind = numbers.find((n) => n > 3);

console.log(resultOfFind);

// Real time example of map , filter and find

const cuetians = [
  { id: 1, name: "Tanzed", age: 22, marks: 70 },
  { id: 2, name: "Sabbir", age: 23, marks: 89 },
  { id: 3, name: "Shawon", age: 21, marks: 49 },
  { id: 4, name: "Shuvo", age: 24, marks: 69 },
  { id: 5, name: "Shakil", age: 22, marks: 86 },
];

const names = cuetians.map((cuetians) => cuetians.name);
const goodStudent = cuetians.filter((cuetians) => cuetians.marks > 80);
const firstboy = cuetians.find((cuetians) => (cuetians.id = 1));


console.log(names);
console.log(goodStudent);
console.log(firstboy);















