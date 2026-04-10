// ✅ reduce() কি?

// reduce() হলো JavaScript এর একটা powerful array method, যেটা array এর সব elements কে একটা single value-তে convert করে 🔥

// 👉 যেমন: sum, total, average, max, object বানানো ইত্যাদি

// 🔥 Syntax:
// array.reduce((accumulator, currentValue) => {
//     return updatedAccumulator;
// }, initialValue);

// 💡 সহজ ভাষায়:
// accumulator → আগের result জমা রাখে
// currentValue → current element
// শেষে একটা single result দেয়


const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => accumulator+currentValue)

console.log(sum); // 15

const summ = numbers.reduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log(summ);