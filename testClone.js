_ = require("./underscore");

// Test case for first(array, [n]);
console.log("\nTest case for first(array, [n])");
console.log(_.first([10, 1, 3, 5]));
console.log(_.first([10, 1, 3, 5], 2));
console.log(_.first([10, 1, 3, 5], 42));
console.log(_.first(false));
console.log(_.first(undefined));
console.log(_.first([]));
console.log(_.first(0));
console.log(_.first({}));

// Test case for initial(array, [n]);
console.log("\nTest case for intial(array, [n])");
console.log(_.initial([10, 1, 3, 5]));
console.log(_.initial([10, 1, 3, 5], 2));
console.log(_.initial([10, 1, 3, 5], 42));
console.log(_.initial(false));
console.log(_.initial(undefined));
console.log(_.initial([]));
console.log(_.initial(0));
console.log(_.initial({}));

// Test case for last(array, [n]);
console.log("\nTest case for last(array, [n])");
console.log(_.last([10, 1, 3, 5]));
console.log(_.last([10, 1, 3, 5], 2));
console.log(_.last([10, 1, 3, 5], 42));
console.log(_.last(false));
console.log(_.last(undefined));
console.log(_.last([]));
console.log(_.last(0));
console.log(_.last({}));

// Test case for rest(array, [n]);
console.log("\nTest case for rest(array, [n])");
console.log(_.rest([10, 1, 3, 5]));
console.log(_.rest([10, 1, 3, 5], 2));
console.log(_.rest([10, 1, 3, 5], 42));
console.log(_.rest(false));
console.log(_.rest(undefined));
console.log(_.rest([]));
console.log(_.rest(0));
console.log(_.rest({}));

// Test case for compact(array);
console.log("\nTest case for compact(array)");
console.log(_.compact([10, 1, 3, 5, NaN, '0', false]));
console.log(_.compact([10, 1, 0, 3, 5]));
console.log(_.compact([undefined, 10, 1, 3, 5]));
console.log(_.compact(false));
console.log(_.compact(undefined));
console.log(_.compact([]));
console.log(_.compact(0));
console.log(_.compact({}));

// Test case for flatten(array, [shallow]);
console.log("\nTest case for flatten(array, [shallow])");
console.log(_.flatten([10, 1, 3, 5, [12, 2, [23]]], true));
console.log(_.flatten([10, 1, 0, 3, 5]));
console.log(_.flatten([
  [undefined], 10, 1, 3, 5
]));
console.log(_.flatten(false));
console.log(_.flatten(undefined));
console.log(_.flatten([]));
console.log(_.flatten(0));
console.log(_.flatten({}));

// Test case for without(array, *values)
console.log("\nTest case for without(array, *values)");
console.log(_.without([1, 2, 1, 0, 3, 1, 4], 0, 1));
console.log(_.without([1, 2, 1, 0, 3, 1, 4]));
console.log(_.without(false));
console.log(_.without(undefined));
console.log(_.without([]));
console.log(_.without(0));
console.log(_.without({}));

// Test case for union(array, *values)
console.log("\nTest case for union(array, *values)");
console.log(_.union([1, 2, 1, 0, 3, 1, 4], [0], [1, [22, 1], 3]));
console.log(_.union([1, 2, 1, 0, 3, 1, 4]));
console.log(_.union([1, 2], false));
console.log(_.union(false));
console.log(_.union(undefined));
console.log(_.union([]));
console.log(_.union(0));
console.log(_.union({}));

// Test case for intersection(*arrays)
console.log("\nTest case for intersection(*arrays)");
console.log(_.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]));
console.log(_.intersection(undefined, [101, 2, 1, 10], [2, 1]));
console.log(_.intersection([1, 2, 3], false, [2, 1]));
console.log(_.intersection(false));
console.log(_.intersection(undefined));
console.log(_.intersection([]));
console.log(_.intersection(0));
console.log(_.intersection({}));

// Test case for difference(*arrays)
console.log("\nTest case for difference(*arrays)");
console.log(_.difference([1, 2, 3], [101, 2, 1, 10], [2, 1]));
console.log(_.difference(undefined, [101, 2, 1, 10], [2, 1]));
console.log(_.difference([1, 2, 3], false, [2, 1]));
console.log(_.difference(false));
console.log(_.difference(undefined));
console.log(_.difference([]));
console.log(_.difference(0));
console.log(_.difference({}));

// Test case for _.uniq(array, [isSorted], [iteratee])
console.log("\nTest case for _.uniq(array, [isSorted], [iteratee])");
console.log(_.uniq([1, 2, 1, 4, 1, 3]));
console.log(_.uniq([1, 2, 1, 4, 1, 3], true, false));
console.log(_.uniq([2, 2, 1, 4, 1, 3], true, false));
console.log(_.uniq([1, 2, 1, 4, 1, 3], false, true));
console.log(_.uniq([2, 2, 1, 4, 1, 3], true, true));
console.log(_.uniq([1, 1, 1, 2, 2, 2, 3, 3, 3, 10, 10, 10], true));
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
console.log(_.uniq(false));
console.log(_.uniq(undefined));
console.log(_.uniq([]));
console.log(_.uniq(0));
console.log(_.uniq({}));

// Test case for _.zip(*arrays)
console.log("\nTest case for _.zip(*arrays)");
console.log(_.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]));
console.log(_.zip(['larry', 'curly'], [30, 40, 50], [true, false, false]));
console.log(_.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false]));
console.log(_.zip(false));
console.log(_.zip(undefined));
console.log(_.zip([]));
console.log(_.zip(0));
console.log(_.zip({}));

// Test case for _.unzip(array)
console.log("\nTest case for _.unzip(array)");
console.log(_.unzip([
  ["moe", 30, true],
  ["larry", 40, false],
  ["curly", 50, false]
]));
console.log(_.unzip([
  [30, true],
  ["larry", 40, false],
  ["curly", 50, false]
]));
console.log(_.unzip([
  ["moe", 30, true],
  ["larry", 40, false],
  ["curly", 50]
]));
console.log(_.unzip(false));
console.log(_.unzip(undefined));
console.log(_.unzip([]));
console.log(_.unzip(0));
console.log(_.unzip({}));

// Test case of _.object(list, [values])
console.log("\nTest case for _.object(list, [values])");
console.log(_.object(false));
console.log(_.object(['moe', 'larry', 'curly'], [30, 40, 50]));
console.log(
  _.object([
    ['moe', 30],
    ['larry', 40],
    ['curly', 50]
  ]));
console.log(_.object(['larry', 'curly'], [30, 40, 50]));
console.log(
  _.object([
    [30],
    ['larry', 40],
    ['curly', 50]
  ]));
console.log(_.object(false));
console.log(_.object(undefined));
console.log(_.object([]));
console.log(_.object(0));
console.log(_.object({}));

// Test case of _.indexOf(array, values, [isSorted])
console.log("\nTest case of _.indexOf(array, values, [isSorted])");
console.log(_.indexOf([1, 2, 3], 2));
console.log(_.indexOf([1, 2, 3], 2, true));
console.log(_.indexOf([1, 2, 2, 5, 3], 2));
console.log(_.indexOf(false));
console.log(_.indexOf(undefined));
console.log(_.indexOf([]));
console.log(_.indexOf(0));
console.log(_.indexOf({}));

// Test case of _.lastIndexOf(array, value, [fromIndex])
console.log("\nTest case of _.lastIndexOf(array, value, [fromIndex])");
console.log(_.lastIndexOf([1, 2, 3, 1, 2, 3], 1));
console.log(_.lastIndexOf([1, 2, 3, 1, 2, 3, 2], 1, 1));
console.log(_.lastIndexOf(false));
console.log(_.lastIndexOf(undefined));
console.log(_.lastIndexOf([]));
console.log(_.lastIndexOf(0));
console.log(_.lastIndexOf({}));
