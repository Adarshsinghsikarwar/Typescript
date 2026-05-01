// This file is for demonstrating type narrowing in TypeScript
function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `This is a ${kind} chai.`;
  } else {
    return `This is a chai with ${kind} grams of tea leaves.`;
  }
}

class KulhadChai {
  serve() {
    return `Serving Kulhad Chai,`;
  }
}

class Cutting {
  serve() {
    return `Serving Cutting Chai,`;
  }
}

function serve(chai: KulhadChai | Cutting) {
  if (chai instanceof KulhadChai) {
    return chai.serve() + " in a kulhad.";
  } else {
    return chai.serve() + " in a glass.";
  }
}

type chaiOrder = {
  type: string;
  sugar: number;
};

function isChaiOrder(obj:any): obj is chaiOrder{
    return (
        typeof obj === "object" &&
        obj !== null &&
        "type" in obj &&
        typeof obj.type === "string" &&
        "sugar" in obj &&
        typeof obj.sugar === "number"
    )
}

type MasaleCha = {type : "masale" , spiceLevel : number}

function isStringArray(arr : unknown): arr is string[] {
    return Array.isArray(arr) && arr.every(item => typeof item === "string");
}