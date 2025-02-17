// FUNCTION OVERLOADS

// overloads
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: string | number, b: string | number): string | number {
  if (typeof a === "string" && typeof b === "string") {
    // narrowed
    return a + b;
  } else if (typeof a === "number" && typeof b === "number") {
    //narrowed
    return a * b;
  }
  throw new Error("Parameters must be both strings or both numbers");
}

const message = combine("Hello, ", "World");
console.log(message);

const product = combine(3, 4);
console.log(product);

// const invalid = combine("Hello", 5);

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
function combineFN<T extends string | number>(a: T, b: T): T {
  if (typeof a === "string" && typeof b === "string") {
    return (a + b) as T;
  } else if (typeof a === "number" && typeof b === "number") {
    return (a * b) as T;
  }
  throw new Error("Parameters must both be strings or both be numbers");
}

const strResult = combineFN("Hello, ", "World");
console.log(strResult);

const numResult = combineFN(3, 4);
console.log(numResult);

// const invalid = combineFN("Hello", 5);
