_ = require("./underscore");

console.log(_);
console.log(_.first([10, 1, 3]));
console.log(_.first([10, 1, 3], 2));
console.log(_.first([10, 1, 3], 42));
console.log(_.first(false));
console.log(_.first([]));
console.log(_.first(0));
console.log(_.first({}));
