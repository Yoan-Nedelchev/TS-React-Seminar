// string
let greeting: string = "Hello, TypeScript!";

// boolean
let isOpen: boolean = true;

// number
let count: number = 42;

// bigint
let bigCount: bigint = 9007199254740991n;

// null
let nothingHere: null = null;

// symbol
let uniqueKey: symbol = Symbol("unique");

// any (can be reassigned to any type without error)
let anything: any = "Start as a string";
anything = 42;
anything = true; // still no error
// anything.toUpperCase()

// unknown (requires type checks or assertions before usage)
let uncertain: unknown = "Could be anything";
// ivalid
// uncertain.toUpperCase()
uncertain = 99;
uncertain = "some string";
if (typeof uncertain === "string") {
  console.log(uncertain.toUpperCase());
}

// never (function that never returns; often used for errors or infinite loops)
function throwError(message: string): never {
  throw new Error(message);
}

// const impossibleString: "one" & "two" = "one";

// void (function returns no usable value)
function logMessage(msg: string): void {
  console.log(msg);
}
