_ = require("./underscore");

//Test case for first(array, [n]);
console.log("\nTest case for first(array, [n])");
console.log(_.first([10, 1, 3, 5]));
console.log(_.first([10, 1, 3, 5], 2));
console.log(_.first([10, 1, 3, 5], 42));
console.log(_.first(false));
console.log(_.first([]));
console.log(_.first(0));
console.log(_.first({}));

//Test case for initial(array, [n]);
console.log("\nTest case for intial(array, [n])");
console.log(_.initial([10, 1, 3, 5]));
console.log(_.initial([10, 1, 3, 5], 2));
console.log(_.initial([10, 1, 3, 5], 42));
console.log(_.initial(false));
console.log(_.initial([]));
console.log(_.initial(0));
console.log(_.initial({}));

//Test case for last(array, [n]);
console.log("\nTest case for last(array, [n])");
console.log(_.last([10, 1, 3, 5]));
console.log(_.last([10, 1, 3, 5], 2));
console.log(_.last([10, 1, 3, 5], 42));
console.log(_.last(false));
console.log(_.last([]));
console.log(_.last(0));
console.log(_.last({}));

//Test case for last(array, [n]);
console.log("\nTest case for last(array, [n])");
console.log(_.rest([10, 1, 3, 5]));
console.log(_.rest([10, 1, 3, 5], 2));
console.log(_.rest([10, 1, 3, 5], 42));
console.log(_.rest(false));
console.log(_.rest([]));
console.log(_.rest(0));
console.log(_.rest({}));

//Test case for compact(array);
console.log("\nTest case for compact(array)");
console.log(_.compact([10, 1, 3, 5, NaN, '0', false]));
console.log(_.compact([10, 1, 0, 3, 5]));
console.log(_.compact([undefined, 10, 1, 3, 5]));
console.log(_.compact(false));
console.log(_.compact([]));
console.log(_.compact(0));
console.log(_.compact({}));



//Test case for flatten(array, [shallow]);
console.log("\nTest case for flatten(array, [shallow])");
console.log(_.flatten([10, 1, 3, 5, [12, 2, [23]]], true));
console.log(_.flatten([10, 1, 0, 3, 5]));
console.log(_.flatten([
  [undefined], 10, 1, 3, 5
]));
console.log(_.flatten(false));
console.log(_.flatten([]));
console.log(_.flatten(0));
console.log(_.flatten({}));

//Text case for without(array, *values)
console.log("\nTest case for without(array, *values)");
console.log(_.without([1, 2, 1, 0, 3, 1, 4], 0, 1));
console.log(_.without([1, 2, 1, 0, 3, 1, 4]));
