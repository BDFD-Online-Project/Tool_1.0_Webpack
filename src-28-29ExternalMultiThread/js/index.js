import $ from "jquery";
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

console.log($);

// import(/*webpackChunkName:'test'*/ "./test")
//   .then(({ mul }) => {
//     console.log(mul(2, 5));
//   })
//   .catch(() => {
//     console.log("file failed");
//   });

import { mul } from "./test1";

document.getElementById("btn1").onclick = function bt1Func() {
  console.log(mul(4, 5));
};

//lazy loading: load until it neccessary
//prefetch： 需要的文件会被提前加载
document.getElementById("btn2").onclick = function btn2Func() {
  import(/*webpackChunkName: 'test', webpackPrefetch: true*/ "./test2")
    .then(({ add3 }) => {
      console.log(add3(2, 5));
    })
    .catch((err) => {
      console.log(err);
    });
};

/*
注册 serviceworker
处理兼容性问题
eslint 不认识window, navagator 全局变量需要修改package.json中eslintConfig
npm i serve -g
serve -s build 启动该服务器，将build目录下所有资源作为静态暴漏出去
*/
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(() => {
        console.log("service worker is running");
      })
      .catch(() => {
        console.log("service failed");
      });
  });
}
