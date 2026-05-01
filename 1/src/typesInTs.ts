// this is called type inference

let drink = "water";
let cups: number | string;
cups = Math.random() > 0.5 ? 1 : "2";

// this is called type annotation
let food: string = "pizza";
food = "burger";
// food = 1; // this will give an error because we have annotated the type as string

// this is called type inference in functions

function add(a: number, b: number) {
  return a + b;
}

let result = add(5, 10);
console.log(result);

const nums = [1, 2, 3];
nums.map((num) => num * 2);

console.log(nums);
