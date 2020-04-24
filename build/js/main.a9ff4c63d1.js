/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/a.css":
/*!***********************!*\
  !*** ./src/css/a.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2EuY3NzPzBiN2EiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9zcmMvY3NzL2EuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/css/a.css\n");

/***/ }),

/***/ "./src/css/b.css":
/*!***********************!*\
  !*** ./src/css/b.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2IuY3NzPzdjNDQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9zcmMvY3NzL2IuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/css/b.css\n");

/***/ }),

/***/ "./src/css/iconfont.css":
/*!******************************!*\
  !*** ./src/css/iconfont.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2ljb25mb250LmNzcz9jOWY4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vc3JjL2Nzcy9pY29uZm9udC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/css/iconfont.css\n");

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2luZGV4LmNzcz8xM2ViIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vc3JjL2Nzcy9pbmRleC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/css/index.css\n");

/***/ }),

/***/ "./src/css/index.less":
/*!****************************!*\
  !*** ./src/css/index.less ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2luZGV4Lmxlc3M/NmFhZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuL3NyYy9jc3MvaW5kZXgubGVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/css/index.less\n");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_iconfont_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/iconfont.css */ \"./src/css/iconfont.css\");\n/* harmony import */ var _css_iconfont_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_iconfont_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/index.css */ \"./src/css/index.css\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/index.less */ \"./src/css/index.less\");\n/* harmony import */ var _css_index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_index_less__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _css_a_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/a.css */ \"./src/css/a.css\");\n/* harmony import */ var _css_a_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_a_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _css_b_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/b.css */ \"./src/css/b.css\");\n/* harmony import */ var _css_b_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_b_css__WEBPACK_IMPORTED_MODULE_4__);\n// import $ from \"jquery\";\n\n\n\n\n\nconsole.log(\"index.js is running...\"); // function add1(x, y) {\n//   return x + y;\n// }\n// const add2 = (x, y) => {\n//   return x + y;\n// };\n// console.log(add1(2, 3));\n// console.log(add2(3, 4));\n// const promise = new Promise((resolve) => {\n//   setTimeout(() => {\n//     console.log(\"success\");\n//     resolve();\n//   }, 1000);\n// });\n// console.log(promise);\n// function sum(...args) {\n//   return args.reduce((p, c) => p + c, 0);\n// }\n// console.log(sum(1, 2, 3, 4, 5));\n// // console.log($);\n// import(/*webpackChunkName:'test'*/ \"./test\")\n//   .then(({ mul }) => {\n//     console.log(mul(2, 5));\n//   })\n//   .catch(() => {\n//     console.log(\"file failed\");\n//   });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/N2JhNSJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUFaLEUsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG5pbXBvcnQgXCIuLi9jc3MvaWNvbmZvbnQuY3NzXCI7XHJcbmltcG9ydCBcIi4uL2Nzcy9pbmRleC5jc3NcIjtcclxuaW1wb3J0IFwiLi4vY3NzL2luZGV4Lmxlc3NcIjtcclxuaW1wb3J0IFwiLi4vY3NzL2EuY3NzXCI7XHJcbmltcG9ydCBcIi4uL2Nzcy9iLmNzc1wiO1xyXG5cclxuY29uc29sZS5sb2coXCJpbmRleC5qcyBpcyBydW5uaW5nLi4uXCIpO1xyXG5cclxuLy8gZnVuY3Rpb24gYWRkMSh4LCB5KSB7XHJcbi8vICAgcmV0dXJuIHggKyB5O1xyXG4vLyB9XHJcbi8vIGNvbnN0IGFkZDIgPSAoeCwgeSkgPT4ge1xyXG4vLyAgIHJldHVybiB4ICsgeTtcclxuLy8gfTtcclxuLy8gY29uc29sZS5sb2coYWRkMSgyLCAzKSk7XHJcbi8vIGNvbnNvbGUubG9nKGFkZDIoMywgNCkpO1xyXG4vLyBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuLy8gICBzZXRUaW1lb3V0KCgpID0+IHtcclxuLy8gICAgIGNvbnNvbGUubG9nKFwic3VjY2Vzc1wiKTtcclxuLy8gICAgIHJlc29sdmUoKTtcclxuLy8gICB9LCAxMDAwKTtcclxuLy8gfSk7XHJcbi8vIGNvbnNvbGUubG9nKHByb21pc2UpO1xyXG4vLyBmdW5jdGlvbiBzdW0oLi4uYXJncykge1xyXG4vLyAgIHJldHVybiBhcmdzLnJlZHVjZSgocCwgYykgPT4gcCArIGMsIDApO1xyXG4vLyB9XHJcbi8vIGNvbnNvbGUubG9nKHN1bSgxLCAyLCAzLCA0LCA1KSk7XHJcblxyXG4vLyAvLyBjb25zb2xlLmxvZygkKTtcclxuXHJcbi8vIGltcG9ydCgvKndlYnBhY2tDaHVua05hbWU6J3Rlc3QnKi8gXCIuL3Rlc3RcIilcclxuLy8gICAudGhlbigoeyBtdWwgfSkgPT4ge1xyXG4vLyAgICAgY29uc29sZS5sb2cobXVsKDIsIDUpKTtcclxuLy8gICB9KVxyXG4vLyAgIC5jYXRjaCgoKSA9PiB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhcImZpbGUgZmFpbGVkXCIpO1xyXG4vLyAgIH0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ })

/******/ });