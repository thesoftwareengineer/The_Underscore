_ = require("./underscoreMin");

console.log(_.first([10, 1, 3]));
console.log(_.first(false));
console.log(_.first([]));
console.log(_.first(0));
console.log(_.first({}));

//intial() Test
console.log(_.initial([10, 1, 3]));
console.log(_.initial([10, 1, 3], 2));
console.log(_.initial(false));
console.log(_.initial([]));
console.log(_.initial(0));
console.log(_.initial({}));

//last() Test
console.log(_.last([10, 1, 3]));
console.log(_.last([10, 1, 3], 2));
console.log(_.last(false));
console.log(_.last([]));
console.log(_.last(0));
console.log(_.last({}));
