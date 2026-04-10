// 🧩 Inheritance (Class-based):
// 👉 এক class অন্য class এর properties + methods use করে

// 🧠 Prototype কি?
// 👉 JavaScript-এ prototype হলো একটা hidden object যেটা অন্য object কে properties ও methods use করতে দেয়।



// ==========================
// 1. CLASS INHERITANCE
// ==========================

class Parent {
  constructor(name) {
    this.name = name;
  }

  showName() {
    console.log("Parent name:", this.name);
  }
}

// Child class inherits Parent
class Child extends Parent {
  constructor(name, age) {
    super(name); // parent constructor call
    this.age = age;
  }

  showInfo() {
    console.log("Child name:", this.name, "Age:", this.age);
  }
}

const child1 = new Child("Rahim", 20);

child1.showName(); // inherited method
child1.showInfo();
console.log("inherited property",child1.name); // inherited property


// ==========================
// 2. PROTOTYPICAL INHERITANCE
// ==========================

function Person(name) {
  this.name = name;
};

// method added to prototype
Person.prototype.showName = function () {
  console.log("Name:", this.name);
};

const p1 = new Person("Karim");

p1.showName();


function Person(name) {
  this.name = name;
}

// prototype এ method add করা
Person.prototype.sayHello = function () {
  console.log("Hello " + this.name);
};

const p2 = new Person("Rahim");

p2.sayHello();