// import $ from "jquery";

import "../css/iconfont.css";
import "../css/index.css";
import "../css/index.less";
import "../css/a.css";
import "../css/b.css";

console.log("index.js is running...");
function add1(x, y) {
  return x + y;
}
const add2 = (x, y) => {
  return x + y;
};
console.log(add1(2, 3));
console.log(add2(3, 4));
const promise = new Promise((resolve) => {
  setTimeout(() => {
    console.log("success");
    resolve();
  }, 1000);
});
console.log(promise);
function sum(...args) {
  return args.reduce((p, c) => p + c, 0);
}
console.log(sum(1, 2, 3, 4, 5));

// console.log($);

import(/*webpackChunkName:'test'*/ "./test")
  .then(({ mul }) => {
    console.log(mul(2, 5));
  })
  .catch(() => {
    console.log("file failed");
  });
