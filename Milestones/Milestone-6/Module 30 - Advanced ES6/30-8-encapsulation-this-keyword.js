// 🔒 Encapsulation কি?

// 👉 Encapsulation হলো OOP এর একটা concept যেখানে data (variables) এবং সেই data ব্যবহার করার methods একসাথে রেখে বাইরে থেকে direct access বন্ধ (hide) করা হয়।

// সহজভাবে:
// 👉 Data hide করে শুধু controlled way তে access দেওয়া = Encapsulation 🔐

// ⚡ One-line Summary:

// 👉 this = current object
// 👉 Encapsulation = data hide + secure access


// ==========================
// 1. THIS KEYWORD
// ==========================

const person = {
  name: "Rahim",

  showName: function () {
    console.log(this.name);
  }
};

person.showName();   // output: Rahim

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showInfo() {
    console.log(this);            // full object
  }
}

const s1 = new Student("Karim", 22);
s1.showInfo();




// ==========================
// 2. ENCAPSULATION
// ==========================

class BankAccount {
  #balance = 0; // private property (encapsulation)

  deposit(amount) {
    this.#balance += amount;
    console.log("Deposited:", amount);
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();

acc.deposit(500);
console.log(acc.getBalance());

//  console.log(acc.#balance); // error ❌ 👉 কারণ #balance private