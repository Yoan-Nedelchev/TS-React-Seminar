type SumFunction = (a: number, b: number) => number;

const sumNumbers: SumFunction = (x, y) => {
  return x + y;
};

function multiplyNumbers(x: number, y: number): number {
  return x * y;
}

console.log(multiplyNumbers(5, 3));
