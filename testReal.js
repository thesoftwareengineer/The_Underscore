_ = require("./underscoreMin");

//**Collections test cases**//

// Test case for _.pluck(list, propertyName)
// console.log("\nTest case for _.pluck(list, propertyName)");
// console.log(_.pluck([{
//   name: "moe",
//   age: 40
// }, {
//   name: "larry",
//   age: 50
// }, {
//   name: "curly",
//   age: 60
// }], "name"));
// console.log(_.pluck([{
//   name: "moe",
//   age: 40
// }, {
//   name: "larry",
//   age: 50
// }, {
//   name: "curly",
//   age: 60
// }], "age"));
// console.log(_.pluck([{
//   name: "moe",
//   age: 40
// }, {
//   age: 50
// }, {
//   name: "curly",
//   age: 60
// }], "name"));
// console.log(_.pluck(false));
// console.log(_.pluck(undefined));
// console.log(_.pluck([]));
// console.log(_.pluck(0));
// console.log(_.pluck({}));

// Test case for _.max(list, iteratee)
// console.log("\nTest case for _.max(list, iteratee)");
// console.log(_.max([{
//   name: "moe",
//   age: 40
// }, {
//   name: "larry",
//   age: 50
// }, {
//   name: "curly",
//   age: 60
// }], function(stooge) {
//   return stooge.age;
// }));
// console.log(_.max([{
//   name: "moe",
//   age: 40
// }, {
//   name: "larry",
//   age: 50
// }, {
//   name: "curly",
//   age: 60
// }], function(stooge) {
//   return stooge.age;
// }));
// console.log(_.max([{
//   name: "moe",
//   age: 40
// }, {
//   age: 50
// }, {
//   name: "curly",
//   age: 60
// }], function(stooge) {
//   return stooge.name;
// }));
// console.log(_.max(false));
// console.log(_.max(undefined));
// console.log(_.max([]));
// console.log(_.max(0));
// console.log(_.max({}));


// Test case for _.min(list, iteratee)
// console.log("\nTest case for _.min(list, iteratee)");
// console.log(_.min([{
//   name: "moe",
//   age: 40
// }, {
//   name: "larry",
//   age: 50
// }, {
//   name: "curly",
//   age: 60
// }], function(stooge) {
//   return stooge.age;
// }));
// console.log(_.min([{
//   name: "moe",
//   age: 40
// }, {
//   name: "larry",
//   age: 50
// }, {
//   name: "curly",
//   age: 60
// }], function(stooge) {
//   return stooge.age;
// }));
// console.log(_.min([{
//   name: "moe",
//   age: 40
// }, {
//   age: 50
// }, {
//   name: "curly",
//   age: 60
// }], function(stooge) {
//   return stooge.name;
// }));
// console.log(_.min(false));
// console.log(_.min(undefined));
// console.log(_.min([]));
// console.log(_.min(0));
// console.log(_.min({}));

// Test case for _.sortBy(list, iteratee)
// console.log("\nTest case for _.sortBy(list, iteratee)");
// console.log(_.sortBy([1, 2, 3, 4, 5, 6], function(num) {
//   return Math.sin(num);
// }));
// console.log(_.sortBy([{
//   name: "moe",
//   age: 40
// }, {
//   name: "larry",
//   age: 50
// }, {
//   name: "curly",
//   age: 60
// }], "name"));
// console.log(_.sortBy(false));
// console.log(_.sortBy(undefined));
// console.log(_.sortBy([]));
// console.log(_.sortBy(0));
// console.log(_.sortBy({}));

// Test case for _.groupBy(list, iteratee)
// console.log("\nTest case for _.groupBy(list, iteratee)");
// console.log(_.groupBy([1.3, 2.1, 2.4], function(num) {
//   return Math.floor(num);
// }));
// console.log(_.groupBy(["one", "two", "three"], "length"));
// console.log(_.groupBy(false));
// console.log(_.groupBy(undefined));
// console.log(_.groupBy([]));
// console.log(_.groupBy(0));
// console.log(_.groupBy({}));

// Test case for _.indexBy(list, iteratee)
// console.log("\nTest case for _.indexBy(list, iteratee)");
// console.log(_.indexBy([{
//   name: "moe",
//   age: 40
// }, {
//   name: "larry",
//   age: 50
// }, {
//   name: "curly",
//   age: 60
// }], "age"));
// console.log(_.indexBy(false));
// console.log(_.indexBy(undefined));
// console.log(_.indexBy([]));
// console.log(_.indexBy(0));
// console.log(_.indexBy({}));

// Test case for _.countBy(list, iteratee)
// console.log("\nTest case for _.countBy(list, iteratee)");
// console.log(_.countBy([1, 2, 3, 4, 5], function(num) {
//   return num % 2 == 0 ? "even" : "odd";
// }));
// console.log(_.countBy(false));
// console.log(_.countBy(undefined));
// console.log(_.countBy([]));
// console.log(_.countBy(0));
// console.log(_.countBy({}));

// Test case for _.shuffle(list)
// console.log("\nTest case for _.shuffle(list)");
// console.log(_.shuffle([1, 2, 3, 4, 5, 6]));
// console.log(_.shuffle(false));
// console.log(_.shuffle(undefined));
// console.log(_.shuffle([]));
// console.log(_.shuffle(0));
// console.log(_.shuffle({}));

// Test case for _.sample(list)
// console.log("\nTest case for _.sample(list)");
// console.log(_.sample([1, 2, 3, 4, 5, 6]));
// console.log(_.sample([1, 2, 3, 4, 5, 6], 3));
// console.log(_.sample(false));
// console.log(_.sample(undefined));
// console.log(_.sample([]));
// console.log(_.sample(0));
// console.log(_.sample({}));

// Test case for _.toArray(list)
// console.log("\nTest case for _.toArray(list)");
// console.log((function() {
//   return _.toArray(arguments).slice(1);
// })(1, 2, 3, 4));
// console.log(_.toArray(1, 2, 3, 4));
// console.log(_.toArray([1, 2, 3, 4]));
// console.log(_.toArray({
//   1: "a",
//   2: "b",
//   3: "c",
//   4: "d"
// }));
// console.log(_.toArray(false));
// console.log(_.toArray(undefined));
// console.log(_.toArray([]));
// console.log(_.toArray(0));
// console.log(_.toArray({}));

// Test case for _.size(list)
// console.log("\nTest case for _.size(list)");
// console.log(_.size({
//   one: 1,
//   two: 2,
//   three: 3
// }));
// console.log(_.size([1, 2, 3, 4]));
// console.log(_.size(false));
// console.log(_.size(undefined));
// console.log(_.size([]));
// console.log(_.size(0));
// console.log(_.size({}));

//Test case for _.partition(array, predicate)
// console.log("\nTest case for _.partition(array, predicate)");
// console.log(_.partition([0, 1, 2, 3, 4, 5], function(n) {
//   return n % 2 !== 0;
// }));
// console.log(_.partition([{
//   a: 1,
//   b: 1
// }, {
//   c: 1
// }, {
//   a: 1
// }, {
//   a: 2
// }], {
//   a: 1
// }));
// console.log(_.partition(false));
// console.log(_.partition(undefined));
// console.log(_.partition([]));
// console.log(_.partition(0));
// console.log(_.partition({}));

//**Arrays test cases**//

// Test case for _.first(array, [n]);
// console.log("\nTest case for _.first(array, [n])");
// console.log(_.first([10, 1, 3, 5]));
// console.log(_.first([10, 1, 3, 5], 2));
// console.log(_.first([10, 1, 3, 5], 42));
// console.log(_.first(false));
// console.log(_.first(undefined));
// console.log(_.first([]));
// console.log(_.first(0));
// console.log(_.first({}));

// Test case for _.initial(array, [n]);
// console.log("\nTest case for _.intial(array, [n])");
// console.log(_.initial([10, 1, 3, 5]));
// console.log(_.initial([10, 1, 3, 5], 2));
// console.log(_.initial([10, 1, 3, 5], 42));
// console.log(_.initial(false));
// //console.log(_.initial(undefined)); Test case returns error in original
// console.log(_.initial([]));
// console.log(_.initial(0));
// console.log(_.initial({}));

// Test case for _.last(array, [n]);
// console.log("\nTest case for _.last(array, [n])");
// console.log(_.last([10, 1, 3, 5]));
// console.log(_.last([10, 1, 3, 5], 2));
// console.log(_.last([10, 1, 3, 5], 42));
// console.log(_.last(false));
// //console.log(_.last(undefined)); Test case returns error in original
// console.log(_.last([]));
// console.log(_.last(0));
// console.log(_.last({}));

// Test case for _.rest(array, [n]);
// console.log("\nTest case for _.rest(array, [n])");
// console.log(_.rest([10, 1, 3, 5]));
// console.log(_.rest([10, 1, 3, 5], 2));
// console.log(_.rest([10, 1, 3, 5], 42));
// console.log(_.rest(false));
// //console.log(_.rest(undefined)); Test case returns error in original
// console.log(_.rest([]));
// console.log(_.rest(0));
// console.log(_.rest({}));

// Test case for _.compact(array);
// console.log("\nTest case for _.compact(array)");
// console.log(_.compact([10, 1, 3, 5, NaN, "0", false]));
// console.log(_.compact([10, 1, 0, 3, 5]));
// console.log(_.compact([undefined, 10, 1, 3, 5]));
// console.log(_.compact(false));
// console.log(_.compact(undefined));
// console.log(_.compact([]));
// console.log(_.compact(0));
// console.log(_.compact({}));

// Test case for _.flatten(array, [shallow]);
// console.log("\nTest case for _.flatten(array, [shallow])");
// console.log(_.flatten([10, 1, 3, 5, [12, 2, [23]]], true));
// console.log(_.flatten([10, 1, 0, 3, 5]));
// console.log(_.flatten([
//   [undefined], 10, 1, 3, 5
// ]));
// console.log(_.flatten(false));
// console.log(_.flatten(undefined));
// console.log(_.flatten([]));
// console.log(_.flatten(0));
// console.log(_.flatten({}));

// Test case for _.without(array, *values)
// console.log("\nTest case for _.without(array, *values)");
// console.log(_.without([1, 2, 1, 0, 3, 1, 4], 0, 1));
// console.log(_.without([1, 2, 1, 0, 3, 1, 4]));
// console.log(_.without(false));
// console.log(_.without(undefined));
// console.log(_.without([]));
// console.log(_.without(0));
// console.log(_.without({}));

// Test case for _.union(array, *values)
// console.log("\nTest case for _.union(array, *values)");
// console.log(_.union([1, 2, 1, 0, 3, 1, 4], [0], [1, [22, 1], 3]));
// console.log(_.union([1, 2, 1, 0, 3, 1, 4]));
// console.log(_.union([1, 2], false));
// console.log(_.union(false));
// console.log(_.union(undefined));
// console.log(_.union([]));
// console.log(_.union(0));
// console.log(_.union({}));

// Test case for _.intersection(*arrays)
// console.log("\nTest case for _.intersection(*arrays)");
// console.log(_.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]));
// console.log(_.intersection(undefined, [101, 2, 1, 10], [2, 1]));
// console.log(_.intersection([1, 2, 3], false, [2, 1]));
// console.log(_.intersection(false));
// console.log(_.intersection(undefined));
// console.log(_.intersection([]));
// console.log(_.intersection(0));
// console.log(_.intersection({}));

// Test case for _.difference(*arrays)
// console.log("\nTest case for _.difference(*arrays)");
// console.log(_.difference([1, 2, 3], [101, 2, 1, 10], [2, 1]));
// console.log(_.difference(undefined, [101, 2, 1, 10], [2, 1]));
// console.log(_.difference([1, 2, 3], false, [2, 1]));
// console.log(_.difference(false));
// console.log(_.difference(undefined));
// console.log(_.difference([]));
// console.log(_.difference(0));
// console.log(_.difference({}));

// Test case for _.uniq(array, [isSorted], [iteratee])
// console.log("\nTest case for _.uniq(array, [isSorted], [iteratee])");
// console.log(_.uniq([1, 2, 1, 4, 1, 3]));
// console.log(_.uniq([1, 2, 1, 4, 1, 3], true, false));
// console.log(_.uniq([2, 2, 1, 4, 1, 3], true, false));
// console.log(_.uniq([1, 2, 1, 4, 1, 3], false, true));
// console.log(_.uniq([2, 2, 1, 4, 1, 3], true, true));
// console.log(_.uniq([1, 1, 1, 2, 2, 2, 3, 3, 3, 10, 10, 10], true));
// var list = [{
//   a: 1
// }, {
//   a: 1,
//   b: 5
// }, {
//   a: 1,
//   c: 5
// }, {
//   a: 2
// }, {
//   a: 3
// }, {
//   a: 4
// }, {
//   a: 3
// }, {
//   a: 2
// }];
// console.log(_.uniq(list, "a"));
// console.log(_.uniq(list, "b"));
// console.log(_.uniq(false));
// console.log(_.uniq(undefined));
// console.log(_.uniq([]));
// console.log(_.uniq(0));
// console.log(_.uniq({}));

// Test case for _.zip(*arrays)
// console.log("\nTest case for _.zip(*arrays)");
// console.log(_.zip(["moe", "larry", "curly"], [30, 40, 50], [true, false, false]));
// console.log(_.zip(["larry", "curly"], [30, 40, 50], [true, false, false]));
// console.log(_.zip(["moe", "larry", "curly"], [30, 40, 50], [true, false]));
// console.log(_.zip(false));
// console.log(_.zip(undefined));
// console.log(_.zip([]));
// console.log(_.zip(0));
// console.log(_.zip({}));

// Test case for _.unzip(array)
// console.log("\nTest case for _.unzip(array)");
// console.log(_.unzip([
//   ["moe", 30, true],
//   ["larry", 40, false],
//   ["curly", 50, false]
// ]));
// console.log(_.unzip([
//   [30, true],
//   ["larry", 40, false],
//   ["curly", 50, false]
// ]));
// console.log(_.unzip([
//   ["moe", 30, true],
//   ["larry", 40, false],
//   ["curly", 50]
// ]));
// console.log(_.unzip(false));
// console.log(_.unzip(undefined));
// console.log(_.unzip([]));
// console.log(_.unzip(0));
// console.log(_.unzip({}));

// Test case of _.object(list, [values])
// console.log("\nTest case for _.object(list, [values])");
// console.log(_.object(false));
// console.log(_.object(["moe", "larry", "curly"], [30, 40, 50]));
// console.log(
//   _.object([
//     ["moe", 30],
//     ["larry", 40],
//     ["curly", 50]
//   ]));
// console.log(_.object(["larry", "curly"], [30, 40, 50]));
// console.log(
//   _.object([
//     [30],
//     ["larry", 40],
//     ["curly", 50]
//   ]));
// console.log(_.object(false));
// console.log(_.object(undefined));
// console.log(_.object([]));
// console.log(_.object(0));
// console.log(_.object({}));


// Test case of _.indexOf(array, values, [isSorted])
// console.log("\nTest case of _.indexOf(array, values, [isSorted])");
// console.log(_.indexOf([1, 2, 3], 2));
// console.log(_.indexOf([1, 1, 2, 3], 2, true));
// console.log(_.indexOf([1, 2, 2, 5, 3], 2));
// console.log(_.indexOf(false));
// console.log(_.indexOf(undefined));
// console.log(_.indexOf([]));
// console.log(_.indexOf(0));
// console.log(_.indexOf({}));

// Test case of _.lastIndexOf(array, value, [fromIndex])
// console.log("\nTest case of _.lastIndexOf(array, value, [fromIndex])");
// console.log(_.lastIndexOf([1, 2, 3, 1, 2, 3], 1));
// console.log(_.lastIndexOf([1, 2, 3, 1, 2, 3, 2], 1, 1));
// console.log(_.lastIndexOf(false));
// console.log(_.lastIndexOf(undefined));
// console.log(_.lastIndexOf([]));
// console.log(_.lastIndexOf(0));
// console.log(_.lastIndexOf({}));


// Test case of _.sortedIndex(list, value, [iteratee])
// console.log("\nTest case of _.sortedIndex(list, value, [iteratee])");
// console.log(_.sortedIndex([10, 20, 30, 40, 50], 35));
// var stooges = [{
//   name: "moe",
//   age: 40
// }, {
//   name: "curly",
//   age: 60
// }];
// console.log(_.sortedIndex(stooges, {
//   name: "larry",
//   age: 50
// }, "age"));
// console.log(_.sortedIndex(false));
// console.log(_.sortedIndex(undefined));
// console.log(_.sortedIndex([]));
// console.log(_.sortedIndex(0));
// console.log(_.sortedIndex({}));


// Test case for _.findIndex(list, predicate)
// console.log("\nTest case for _.findIndex(list, predicate)");
// const isPrime = function(num) {
//   for (let i = 2, s = Math.sqrt(num); i <= s; i++)
//     if (num % i === 0) return false;
//   return num !== 1;
// }
// console.log(_.findIndex([4, 6, 8, 12], isPrime));
// console.log(_.findIndex([4, 6, 7, 12], isPrime));
// console.log(_.findIndex(false));
// console.log(_.findIndex(undefined));
// console.log(_.findIndex([]));
// console.log(_.findIndex(0));
// console.log(_.findIndex({}));

// Test case for _.findLastIndex(array, predicate)
// console.log("\nTest case for .findLastIndex(array, predicate)");
// var users = [{
//     "id": 1,
//     "name": "Bob",
//     "last": "Brown"
//   },
//   {
//     "id": 2,
//     "name": "Ted",
//     "last": "White"
//   },
//   {
//     "id": 3,
//     "name": "Frank",
//     "last": "James"
//   },
//   {
//     "id": 4,
//     "name": "Ted",
//     "last": "Jones"
//   }
// ];
// console.log(_.findLastIndex(users, {
//   name: "Ted"
// }));
// console.log(_.findLastIndex(false));
// console.log(_.findLastIndex(undefined));
// console.log(_.findLastIndex([]));
// console.log(_.findLastIndex(0));
// console.log(_.findLastIndex({}));

// Test case for _.range([start], stop, [step])
// console.log("\nTest case for _.range([start], stop, [step])");
// console.log(_.range(10));
// console.log(_.range(1, 11));
// console.log(_.range(0, 30, 5));
// console.log(_.range(0, -10, -1));
// console.log(_.range(false));
// console.log(_.range(undefined));
// console.log(_.range([]));
// console.log(_.range(0));
// console.log(_.range({})); underscore real cannot resolve

/**Functions test cases**/

// Test case _.bind(function, object, *agruments)
// console.log("\nTest case for _.bind(function, object, *arguments");
// const func = function(greeting) {
//   return greeting + ": " + this.name
// };
// const func1 = _.bind(func, {
//   name: "moe"
// }, "hi")
// console.log(func1());
// const func2 = _.bind(func, {
//   name: "moe"
// });
// console.log(func2("元気です"));
// console.log(func2());
// /**Note: Falsy values throw type error will leave uncomment
//    to test.**/
// // var func3 = _.bindAll(false);
// // console.log(func3());
// // var func3 = _.bindAll(undefined);
// // console.log(func3());
// // var func3 = _.bindAll([]);
// // console.log(func3());
// // func3 = _.bindAll(0);
// // console.log(func3());

// Test case for _.bindAll(object, *methodNames)
// console.log("\nTest case for _.bindAll");
// var buttonView = {
//   label: 'underscore',
//   onClick: function() {
//     console.log('clicked: ' + this.label);
//   },
//   onHover: function() {
//     console.log('hovering: ' + this.label);
//   }
// };
// _.bindAll(buttonView, 'onClick', 'onHover');
// buttonView.onClick();
// buttonView.onHover();
// /**Note: Falsy values throw type error will leave uncomment
//    to test.**/
// // var func3 = _.bindAll(false);
// // console.log(func3());
// // var func3 = _.bindAll(undefined);
// // console.log(func3());
// // var func3 = _.bindAll([]);
// // console.log(func3());
// // func3 = _.bindAll(0);
// // console.log(func3());

// Test case for _.partial(function, *arguments)
// console.log("\nTest case for _.partial(function, arguments)");
// const subtract = function(a, b) {
//   return b - a;
// };
// sub5 = _.partial(subtract, 5)
// console.log(sub5(20));
// subFrom20 = _.partial(subtract, _, 20)
// console.log(subFrom20(5));
// sub = _.partial(subtract, 20, 5);
// console.log(sub());
// const volume = function(a, b, c) {
//   //console.log(a, b, c);
//   return a * b * c;
// }
// const vol1 = _.partial(volume, 5);
// console.log(vol1(5, 5));
// const vol2 = _.partial(volume, _, _, 5);
// console.log(vol2(2, 5));
// const vol3 = _.partial(volume, 5, _, 5);
// console.log(vol3(2));
// /**Note: Falsy values throw type error will leave uncomment
//    to test.**/
// // var func3 = _.partial(false);
// // console.log(func3());
// // var func3 = _.partial(undefined);
// // console.log(func3());
// // var func3 = _.partial([]);
// // console.log(func3());
// // func3 = _.partial(0);
// // console.log(func3());

// Test case for _.memoize(function, [hashFunction])
// console.log("\nTest case for _.memoize(function, [hashFunction])");
// const hash = function(n) {
//   return n;
// }
// const fibonacci = _.memoize(function(n) {
//   return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
// })
// console.time("Fib");
// console.log(fibonacci(1000), hash);
// console.timeEnd("Fib");
// console.time("Fib");
// console.log(fibonacci(1000), hash);
// console.timeEnd("Fib");
// // const falsy = _.memoize(false);
// // console.time("Falsy");
// // console.log(falsy());
// // console.timeEnd("Falsy");
// // const falsy = _.memoize(undefined);
// // console.time("Falsy");
// // console.log(falsy());
// // console.timeEnd("Falsy");
// // const falsy = _.memoize([]);
// // console.time("Falsy");
// // console.log(falsy());
// // console.timeEnd("Falsy");
// // const falsy = _.memoize(0);
// // console.time("Falsy");
// // console.log(falsy());
// // console.timeEnd("Falsy");
// // const falsy = _.memoize({});
// // console.time("Falsy");
// // console.log(falsy());
// // console.timeEnd("Falsy");


// Test case for _.delay(function, wait, *arguments)
// console.log("\nTest case for _.delay(function, wait, *arguments)");
// var log = _.bind(console.log, console);
// _.delay(log, 1000, 'logged later');
// log = _.bind(console.log, log, fibonacci(1000));
// _.delay(log, 5000);
// console.log(_.delay(false));
// console.log(_.delay(undefined));
// console.log(_.delay([]));
// console.log(_.delay(0));
// console.log(_.delay({}));

// Test case for _.defer(function, *arguments)
// console.log("\nTest case for _.defer(function, *arguments)");
// var log = _.bind(console.log, console);
// _.defer(log, 'logged later');
// log = _.bind(console.log, log, fibonacci(1000));
// _.defer(log);
// console.log(_.defer(false));
// console.log(_.defer(undefined));
// console.log(_.defer([]));
// console.log(_.defer(0));
// console.log(_.defer({}));

// Test case for _.throttle(func, wait)
// console.log("\nTest case for _.throttle(func, wait)");
// logger = _.bind(console.log, console);
// var throttled = _.throttle(logger, 10000);
// throttled("Should display before defer()")
// while (true) {
//   throttled("Should display before defer()");
// }


// Test case for _.debounce(func, wait)
// console.log("\nTest case for _.debounce(func, wait)");
// var logger = _.bind(console.log, console);
// var debounced = _.debounce(logger, 1000, true);
// debounced("Should display immediately");
// debounced = _.debounce(logger, 1000);
// debounced("Should display after 1 sec");
// Will never run
// while (true) {
//   debounced("Should display before defer()");
// }


//Test case for _.once()
// const logger = function() {
//   console.log("Printing only once");
// }
// var initialize = _.once(logger);
// initialize();
// initialize();


// Test case for _.after(count, function)
// console.log("\nTest case for _.after(count, function)");
// const logger = function() {
//   console.log("Printing after 10 times");
// }
// const count = 10;
// const print = _.after(count, logger);
// for (var i = 0; i < 20; i++) {
//   console.log(i);
//   print();
// }

// Test case for _.before(count, function)
// console.log("\nTest case for _.before(count, function)");
// const logger = function() {
//   console.log("Printing before 10 times");
// }
// const count = 10;
// const print = _.before(count, logger);
// for (var i = 0; i < 20; i++) {
//   console.log(i);
//   print();
// }

// Test case for _.wrap(function, wrapper)
// console.log("\nTest case for _.wrap(function, wrapper)");
// var hello = function(name) {
//   return "hello: " + name;
// };
// hello = _.wrap(hello, function(func) {
//   return "before, " + func("moe") + ", after";
// });
// console.log(hello());

// Test case for _.negate(predicate)
// console.log("\nTest case for _.negate(predicate)");
// const negPred = _.negate(function(val) {
//   return val;
// });
// console.log(negPred(0));
// const isFalsy = _.negate(Boolean);
// console.log(isFalsy([-2, -1, 0, 1, 2]));
