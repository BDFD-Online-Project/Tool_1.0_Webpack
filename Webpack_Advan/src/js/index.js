// import add from "./add";
import count from "./count";

console.log("index.js is running ");

import("./add").then(({ default: add }) => {
  console.log(add(10, 5));
});

console.log(count(10, 5));
