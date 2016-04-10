"use strict";

// demo 1
function f1() {
  var n = 5;
  if (true) {
    var _n = 10;
  }
  console.log(n); // 5
}

// demo 2
var PI = 3.1415;
console.log(PI); // 3.1415

// PI = 3;
// console.log(PI); // TypeError: "PI" is read-only