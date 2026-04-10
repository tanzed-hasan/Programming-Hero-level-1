// 🧠 Closure কি?

// 👉 Closure হলো এমন একটি feature যেখানে inner function তার outer function এর variable গুলো মনে রাখতে পারে, outer function execute শেষ হয়ে গেলেও।

// সহজভাবে:
// 👉 Function এর ভিতরের function তার “memory” ধরে রাখতে পারে = Closure 🔥

function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3