let response: any = "42"

// Type assertion to treat response as a string
let numericLength : number = (response as string).length

type Book = {
    name : string,
}

let bookString = '{"name": "The Great Gatsby"}'
let bookObject : Book = JSON.parse(bookString) as Book

console.log(bookObject)

const inputElement = document.getElementById("myInput") as HTMLInputElement  

let newValue : unknown;

newValue = "chai"
newValue = [1,2,3,4]
newValue = 2.5

// it is guard to check
if(typeof newValue === "string"){
    newValue.toUpperCase()
}


try {
    
} catch (error) {
    if (error instanceof Error) {
        console.error("An error occurred:", error.message);
    }
    console.log("Error" , error)
}

type Role = "admin" | "user" | "guest"

function redirectBasedOnRole(role: Role) {
    if(role === "admin"){
        console.log("Redirecting to admin dashboard");
        return;
    }

            if(role === "user"){
                console.log("Redirecting to user homepage");
                return;
            }

            if(role === "guest"){
                console.log("Redirecting to guest page");
                return;
            }
    role;
}


function neverReturns(): never {
    throw new Error("This function never returns");
}


let value:any = "Hello, World!";

value.tofixed(2); // This will not give an error at compile time, but will throw a runtime error because toFixed is not a function on string

let value2: unknown = "Hello, World!";
(value2 as string).toUpperCase()
if(typeof value2 === "string") {
    (value2 as string).toUpperCase(); // This will give a compile-time error because value2 is of type unknown and we cannot call methods on it without type assertion or type checking
}