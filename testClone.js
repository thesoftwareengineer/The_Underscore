_ = require("./underscore");

console.log(_);

//Test case for first(array, [n]);
console.log("\nTest case for first(array, [n])");
console.log(_.first([10, 1, 3]));
console.log(_.first([10, 1, 3], 2));
console.log(_.first([10, 1, 3], 42));
console.log(_.first(false));
console.log(_.first([]));
console.log(_.first(0));
console.log(_.first({}));

//Test case for initial(array, [n]);
console.log("\nTest case for intial(array, [n])");
console.log(_.initial([10, 1, 3]));
console.log(_.initial([10, 1, 3], 2));
console.log(_.initial([10, 1, 3], 42));
console.log(_.initial(false));
console.log(_.initial([]));
console.log(_.initial(0));
console.log(_.initial({}));
