// npx tsx -b
// node index.js
// npx ts-node index.ts

// tsconfig.json

//   1. target: "ESNext",
//   2. rootDir: "./src",
//   3. outDir: "./dist",
//   4. norImplicitAny: true,

let x: number = 1;
console.log(x);

function greet(firstname: string) {
  console.log("Hello" + firstname);
}

function sum(a: number, b: number): number {
  return a + b;
}

let ans = sum(1, 2);
console.log(ans);

function delayCall(fn: () => void) {
  setTimeout(fn, 1000);
}

delayCall(function () {
  console.log("Delayed Hello");
});

function greet1(user: { firstname: string; lastname: string }) {
  console.log("Hello" + user.firstname + " " + user.lastname);
}

greet1({ firstname: "John", lastname: "Doe" });

type User = {
  firstname: string;
  lastname: string;
};

function greet2(user: User) {
  console.log("Hello" + user.firstname + " " + user.lastname);
}

greet2({ firstname: "Jane", lastname: "Smith" });

interface TodoType {
  title: string;
  description: string;
  completed: boolean;
}

interface TodoInput {
  todo: TodoType;
}

function Todo(props: TodoInput) {
  props.todo.completed = true;
  console.log(props.todo);
}

// <Todo todo={{ title: "Learn TypeScript", description: "Study the basics of TypeScript", completed: false }} />;

// type let you do union and inersection types, which are not possible with interfaces
// interface does not let you do union and intersection types, which are possible with type aliases
type StringOrNumber = string | number;

function sum1(a: StringOrNumber, b: StringOrNumber): StringOrNumber {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
}

// sum1(1, 2); // Returns 3

interface Manager {
  name: string;
  age: number;
}

interface Emplyee {
  name: string;
  department: string;
}

type TeamLead = Manager & Emplyee;

interface Address {
  city: string;
  country: string;
  pinCode: number;
}

interface User1 {
  name: string;
  age: number;
  address: Address;
}
interface Office {
  address: Address;
}

function printUserDetails(user: User1) {
  console.log("Name: " + user.name);
}

let user: User1 = {
  name: "Alice",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
    pinCode: 10001,
  },
};

printUserDetails(user);

interface People {
  name: string;
  age: number;
  // greet: () => string;
  // greet1?(): string;
}

let person: People = {
  name: "Bob",
  age: 25,
  // greet: function () {
  //   return "Hello, ";
  // },
};

class Manager implements People {
  // name: string;
  // age: number;
  // greet: () => string;

  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }
}

let user1 = new Manager("Charlie", 35);

class Shape {
  area() {
    console.log("hi i am area");
  }
}

class Reactangle extends Shape {
  width: number;
  height: number;

  constructor() {
    super();
    this.width = 0;
    this.height = 0;
  }
}

const r = new Reactangle();
r.area();

abstract class Shape1 {
  abstract area(): number;
}

// interface vs types
// create two types called User and Admin
// Create a function takes either a user or an admin as an input and returns a string saying "Welcome , [name]"

interface Admin {
  name: string;
  persmissions: string;
}
interface User3 {
  name: string;
  age: number;
}

type UserOrAdmin = User3 | Admin;

function greet3(user: UserOrAdmin) {
  return `Welcome, ${user.name}`;
}

// Arrays in Ts

// function getMax(num: number[]): number {
//   let max: number = -100000000000;
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] > max) {
//       max = num[i];
//     }
//   }
//   return max;
// }

// getMax([1,2,3])




function hello(fn: (a : number , b : number) => number) {
    fn(5, 10);
}

let result = hello((a, b) => {
    console.log("Hello from callback function", a, b);
    return a + b;
});