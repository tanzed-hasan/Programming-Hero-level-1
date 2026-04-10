// ✅ Class কি?

// 👉 Class হলো একটা blueprint (নকশা) যেটা দিয়ে object তৈরি করা হয়।



// ✅ Class এর Syntax (JavaScript)
// class ClassName {
//   constructor(parameter1, parameter2) {
//     this.property1 = parameter1;
//     this.property2 = parameter2;
//   }

//   methodName() {
//     // code here
//   }
// }
// 🧍 Object বানানোর Syntax:
// const objName = new ClassName(value1, value2);





class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  showCar() {
    console.log(this.brand + " " + this.model);
  }

  getCarInfo() {
    return `car info = ${this.brand} ${this.model}`;
  }
}

// objects
const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Tesla", "Model 3");

car1.showCar();
car2.showCar();

console.log(car1.getCarInfo());

console.log(car2.model);
car1.color = "red"; // নতুন property add করা
console.log(car1.color); 