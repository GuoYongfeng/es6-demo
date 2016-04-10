'use strict';

// 数组的解构赋值
let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo); // 1
console.log(bar); // 2
console.log(baz); // 3

// 对象的解构赋值
// var { foo, bar } = { foo: "aaa", bar: "bbb" };
// console.log(foo);   // "aaa"
// console.log(bar );  // "bbb"
//
// // 字符串的解构赋值
// const [a, b, c, d, e] = 'hello';
// console.log(a + b + c + e); // 'hello'
