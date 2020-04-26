import "../css/index.css";

console.log("index.js is running ");

import(/* webpackChunkName: 'add' */ "./add").then(({ default: add }) => {
  console.log(add(1, 2));
});
