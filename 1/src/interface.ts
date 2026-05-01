interface TeaRecipe  {
  water: number;
  milk: number;
}

class MasalaChai implements TeaRecipe {
    water = 12;
    milk = 10;
}

interface CupSize {
  size: "small" | "medium" | "large";
}

class Chai implements CupSize {
    size: "small" | "medium" | "large" = "medium";
}


// Union type for different tea types
// this is also called literal type
type TeaType = "masala" | "ginger" | "cardamom";

function makeTea(type: TeaType) {
    console.log(`Making ${type} chai...`);
}

type BaseChai = {teaLeaves: number}
// ? makes the property optional 
type Extra = {sugar?: number}

type MasaleChai = BaseChai & Extra

const cup : MasaleChai = {
    teaLeaves : 5,
    // sugar : 2
}

type User = {
    username : string;
    bio? : string;
}
const u1: User = {username : "Adarsh"}

const u2: User = {username : "Adarsh" , bio : "I am a chai lover"}

type config = {
    readonly appName : string;
    version : string;
}

const cfg : config = {
    appName : "ChaiApp",
    version : "1.0.0"
}

// cfg.appName = "NewChaiApp" // Error: Cannot assign to 'appName' because it is a read-only property.
