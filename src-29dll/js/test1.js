console.log("test1.js is running");

const mul = (x, y) => {
  return x * y;
};

const minus = (x, y) => {
  return x - y;
};

console.log(mul(2, 3));
console.log(minus(10, 5));

export { mul, minus };
