let a = "Sagar";
console.log(a);

// require("./add.js");
// require("./sub.js");

const add = require("./add");
var sum = add(10 ,20);
console.log(sum);

const sub = require("./sub");
var sub2 = sub(10, 20);
console.log(sub2);
