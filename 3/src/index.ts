// npx tsc --init
// tsc -b
// npx tsc -b 
// npm install express @types/express zod

//  interface User{
//     name: string;
//     age : number;
// }

// function sumOfAge(user1: User, user2: User) {
//     return user1.age + user2.age;
// }

// const age = sumOfAge({name: "Alice", age: 30}, {name: "Bob", age: 25});
// console.log(age);

interface User {
  id: number;
  name: string;
  age: number;
  email: string;
  password: string;
}

// type UpdateProps = Pick<User, "name" | "age" | "password">;
type UpdateProps = Pick<User, "name" | "age" | "password">;
type UpdatePropsOptional = Partial<UpdateProps>;

function updateUser(updatedProps: UpdatePropsOptional) {}

// type User1 = {
//     readonly name: string;
//     readonly age: number;
// }
type User1 = {
  readonly name: string;
  readonly age: number;
};

const user1: Readonly<User1> = {
  name: "Alice",
  age: 30,
};

// user1.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property.

type User2 = {
  id: string;
  username: string;
};

type Users = {
  [key: string]: User2;
};

const user2 = {
  "ras@qd1": {
    id: "ras@qd1",
    username: "harikrat",
  },
  "ras1de@": {
    id: "ras1de@",
    username: "harikrat",
  },
};

// record and mapped types

type User4 = Record<string, string>;

const user4: User4 = {
  name: "Alice",
  email: "alice@example.com",
};

type User5 = {
  id: string;
  username: string;
};

const users5 = new Map<string, User5>();
users5.set("ras@qd1", {
  id: "ras@qd1",
  username: "harikrat",
});
users5.set("ras1de@", {
  id: "ras1de@",
  username: "harikrat",
});

type EventType = "click" | "hover" | "scroll";
type ExecudeEvent = Exclude<EventType, "scroll">;

const handleEvent = (event: ExecudeEvent) => {
  console.log(`Handling event : ${event}`);
};

handleEvent("click");
// handleEvent("scroll"); // Error: Argument of type '"scroll"' is not assignable to parameter of type 'ExecudeEvent'.

// npm install express @types/express zod

// zod schema validation
import { z } from "zod";
import express from "express";
import email = require("zod");
import optional = require("zod");

const app = express();

const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  age: z.number().min(18, { message: "Age must be at least 18" }),
  email: z.string().email({ message: "Invalid email address" }).optional(),
});

// type finalUserProfile = {
//   name : string;
//   age : number;
//   email : string;  
// }

type FinalUserProfile = z.infer<typeof userProfileSchema>;

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody: FinalUserProfile = req.body;

  if (!success) {
    return res.status(400).json({ error: "Invalid user profile data" });
  }

  res.json({ message: "User profile updated successfully" });
});
