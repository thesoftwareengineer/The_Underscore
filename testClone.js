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

//Test case for without(array, *values)
console.log("\nTest case for without(array, *values)");
console.log(_.without([1, 2, 1, 0, 3, 1, 4], 0, 1));
console.log(_.without([1, 2, 1, 0, 3, 1, 4]));
console.log(_.without(false));

//Test case for union(array, *values)
console.log("\nTest case for union(array, *values)");
console.log(_.union([1, 2, 1, 0, 3, 1, 4], [0], [1, [22, 1], 3]));
console.log(_.union([1, 2, 1, 0, 3, 1, 4]));
console.log(_.union([1, 2], false));

//Test case for intersection(*arrays)
console.log("\nText case for intersection(*arrays)");
console.log(_.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]));
console.log(_.intersection(undefined, [101, 2, 1, 10], [2, 1]));
console.log(_.intersection([1, 2, 3], false, [2, 1]));

//Test case for difference(*arrays)
console.log("\nText case for difference(*arrays)");
console.log(_.difference([1, 2, 3], [101, 2, 1, 10], [2, 1]));
console.log(_.difference(undefined, [101, 2, 1, 10], [2, 1]));
console.log(_.difference([1, 2, 3], false, [2, 1]));

//Test case for _.uniq(array, [isSorted], [iteratee])
console.log("\nTest case for _.uniq(array, [isSorted], [iteratee])");
console.log(_.uniq([1, 2, 1, 4, 1, 3]));
console.log(_.uniq([1, 2, 1, 4, 1, 3], true, false));
console.log(_.uniq([2, 2, 1, 4, 1, 3], true, false));
console.log(_.uniq([1, 2, 1, 4, 1, 3], false, true));
console.log(_.uniq([2, 2, 1, 4, 1, 3], true, true));
console.log(_.union([1, 1, 1, 2, 2, 2, 3, 3, 3, 10, 10, 10], true));
var list = [{
  a: 1
}, {
  a: 1,
  b: 5
}, {
  a: 1,
  c: 5
}, {
  a: 2
}, {
  a: 3
}, {
  a: 4
}, {
  a: 3
}, {
  a: 2
}];
console.log(_.uniq(list, 'a'));
console.log(_.uniq(list, 'b'));
