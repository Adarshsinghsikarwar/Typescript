// Union and any types in TypeScript

// Union type allows a variable to hold more than one type of value
let age: number | string = 25;
age = "twenty five"; // this is valid because age can be either a number or a string
let subs: number | string = 1000;
subs = "1000";

let apiRequestStatus: "success" | "error" | "loading";
apiRequestStatus = "success";

const orders = ["12", "20", "28", "42"];

let currentOrder: string | undefined;

for(let order of orders) {
    if(order === "28") {
        currentOrder = order;
    }
}
console.log(currentOrder)