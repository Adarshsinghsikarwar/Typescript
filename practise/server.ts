1;
// function sum(a: number , b:number) : number {
//     return a + b;
// }

// console.log(sum(1,2));

2;

// function greet() : void {
//     console.log("Hello, World!");
// }

3;

// function sum(...nums : number[]) : number {
//     return nums.reduce((acc, curr) => acc + curr, 0);
// }
// console.log(sum(1, 2, 3, 4));

4;

// function getNumber() : number[] {
//     return [1, 2, 3, 4, 5];
// }
// console.log(getNumber());

5;

// function getUser(): { name: string; age: number } {
//   return { name: "Alice", age: 30 };
// }
// console.log(getUser());

6;

// async function fetchData(): Promise<string> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data fetched successfully!");
//     }, 2000);
//   });
// }

// fetchData().then((message) => console.log(message));

7;

// let drink = "water"; // this is called type inference
// let cups: number | string; // this is called type annotation
// cups = Math.random() > 0.5 ? 1 : "2";

// let isAvailable: boolean = true;
// console.log(isAvailable);

// let fun: never = (() => {
//     throw new Error("This function never returns");
// })();

// let unknownValue: unknown = "This is an unknown value";
// unknownValue = 42; // This is allowed, but we can't use it without type checking

8;

// type Book = {
//     name : string,
//     writer : string,
//     publishedYear : number,
// }

// let book1 : Book = {
//     name : "The Great Gatsby",
//     writer : "F. Scott Fitzgerald",
//     publishedYear : 1925,
// }

9;

// type user = {
//   name: "Adarsh" | "Satyarth" | "Rohit";
// };

// type Role = {
//   role: "admin" | "user" | "guest";
// };

// type Employee = user & Role;

// let employee1: Employee = {
//   name: "Adarsh",
//   role: "admin",
// };

// console.log(employee1);

10;

// interface User {
//     name: string;
//     class: string;
//     section: string;
//     address: string;
// }

// class Student implements User {
//     name: string;
//     class: string;
//     section: string;
//     address: string;

//     constructor(
//         name: string,
//         className: string,
//         section: string,
//         address: string
//     ) {
//         this.name = name;
//         this.class = className;
//         this.section = section;
//         this.address = address;
//     }
// }

// let student1 = new Student("Adarsh", "10th", "A", "123 Main St");
// console.log(student1);

11;

// function delayCall(fn: ()=> void , delay:number) : void {
//     setTimeout(fn, delay);
// }

// delayCall(() => {
//     console.log("Hello, World!");
// }, 2000);

12;

interface User {
  id: number;
  name: string;
  age: number;
  email: string;
  password: string;
}

type UpdateProps = Pick<User, "name" | "age">;
type UpdatePropsOptional = Partial<UpdateProps>;

function updateUser(updatedProps: UpdatePropsOptional) {
  // Here you can implement the logic to update the user with the provided properties
  console.log("Updating user with the following properties:", updatedProps);
}

interface User1 {
  readonly name: string;
}

type user1 = Readonly<User1>;

const user1: user1 = {
  name: "Alice",
};

