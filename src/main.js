import Vue from "vue";
import _ from "lodash";
import { isShow } from "./utils/dom";
import "./app";

const vm = new Vue({
  el: "#app",
  data: {
    msg: "来自Vue的message222",
  },
  // template: "<h2>{{msg}}</h2>",
});

const flag = isShow(window.document.body);

console.log(_.keys([1, 2, 3, 4, 5, 6, 77]));
console.log(flag);
console.log(1234);

import "./assets/scss/style.css";
import "./assets/scss/index.scss";

const d = document.getElementById("d");

window.obj = {
  a: 2,
};

for (const key in window.obj) {
  if (window.obj.hasOwnProperty(key)) {
    defineReactive(window.obj, key, window.obj[key]);
  }
}

function defineReactive(obj, key, value) {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: true,
    get() {
      return value;
    },
    set(newVal) {
      value = newVal;
      d.value = newVal;
    },
  });
}

d.addEventListener("input", function (e) {
  window.obj.a = e.target.value;
  console.log(window.obj, window.obj.a);
});

// if (module.hot) {
//   module.hot.accept();
//   module.hot.accept(["./app.js", "./utils"], function () {});
// }
