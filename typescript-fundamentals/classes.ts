class Animal { constructor(public name: string) {} move(d: number){ console.log(`${this.name} moved ${d} meters.`); } }
class Dog extends Animal { bark(){ console.log("Woof! Woof!"); } }
const dog = new Dog("Rex"); dog.bark(); dog.move(10);
