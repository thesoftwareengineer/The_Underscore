// Recreating underscore.js libraries first attempt
// Authors: Eli D. Gonzalez & Patricio Torres
// license: MIT


// Helper function that generates a callback for
// elements in a collection. Should not be used
// outside of here.

(function() {

  //Added from orginal for compatibility with test suite
  // Baseline setup
  // --------------

  // Establish the root object, `window` (`self`) in the browser, `global`
  // on the server, or `this` in some virtual machines. We use `self`
  // instead of `window` for `WebWorker` support.
  var root = typeof self == 'object' && self.self === self && self ||
    typeof global == 'object' && global.global === global && global ||
    this || {};

  // Save the previous value of the `_` variable.
  // var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype,
    ObjProto = Object.prototype;
  var SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null;

  // Create quick reference variables for speed access to core prototypes.
  // var push = ArrayProto.push,
  //   slice = ArrayProto.slice,
  //   toString = ObjProto.toString,
  //   hasOwnProperty = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  // var nativeIsArray = Array.isArray,
  //   nativeKeys = Object.keys,
  //   nativeCreate = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  // var Ctor = function() {};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for their old module API. If we're in
  // the browser, add `_` as a global object.
  // (`nodeType` is checked to ensure that `module`
  // and `exports` are not HTML elements.)
  if (typeof exports != 'undefined' && !exports.nodeType) {
    if (typeof module != 'undefined' && !module.nodeType && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }



  // Helper function that creates predicate returning only
  // true or false.
  var genPredicate = function(predicate) {
    if (predicate instanceof Function) {
      return predicate;
    } else {
      return function(obj) {
        if (Object.keys(obj).length !== 0) {
          const idx = Object.keys(predicate)[0];
          return obj[idx] === predicate[idx];
        } else {
          return obj === predicate;
        }
      }
    }
  }

  // Generic binary search with callback and toInsert option
  var binarySearch = function(array, value, cb, toInsert) {
    if (array.length === 0) {
      return 0;
    }
    if (!cb) {
      cb = function(n) {
        return n;
      }
    }
    var min = 0;
    var max = array.length - 1;
    var curr;
    var currIdx;
    while (min <= max) {
      currIdx = (max + min) / 2 | 0;
      curr = array[currIdx];

      if (cb(curr) < cb(value)) {
        min = currIdx + 1;
      } else if (cb(curr) > cb(value)) {
        max = currIdx - 1
      } else {
        return currIdx;
      }
    }
    if (!toInsert) {
      return -1;
    } else {
      return currIdx;
    }
  }

  var randInt = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  /**Collections**/

  // Runs iteratee function on all the elements of an
  // array or object. Context can be passed in as well.
  _.each = _.forEach = function(list, iteratee, context) {
    const cb = _.iteratee(iteratee, context);
    if (list instanceof Array) {
      for (var i = 0; i < list.length; i++) {
        cb(list[i], i, list);
      }
    } else {
      const keys = Object.keys(list);
      for (var i = 0; i < keys.length; i++) {
        cb(list[keys[i]], keys[i], list);
      }
    }
    return list;
  };

  // "Plucks" all values that match key in each
  // element and returns them as an array.
  _.pluck = function(list, propertyName) {
    if (!list) {
      return [];
    }
    const plucked = [];
    for (var i = 0; i < list.length; i++) {
      plucked.push(list[i][propertyName]);
    }
    return plucked;
  };

  // Returns max on a list and uses iteratee if given.
  // If empty return -Infinity if value is non-numeric,
  // it will ignore.
  _.max = function(list, iteratee, context) {
    if (!list || Object.keys(list).length === 0) {
      return -Infinity;
    }
    if (iteratee != null) iteratee = _.iteratee(iteratee, context);
    list = list instanceof Array ? list : _.values(list);
    list = list.filter(function(elm) {
      return !isNaN(elm);
    });
    if (list.length === 0) return -Infinity;
    var max = list[0];
    for (var i = 0; i < list.length; i++) {
      const value = list[i];
      const compute = iteratee ? iteratee(value) : value;
      if (isNaN(compute)) {
        return -Infinity;
      }
      const currMax = iteratee ? iteratee(max) : max;
      if (currMax < compute) {
        max = value;
      }
    }
    return max;
  };

  // Returns min on a list and uses iteratee if given.
  // If empty return Infinity if value is non-numeric,
  // it will ignore.
  _.min = function(list, iteratee) {
      if (!list || Object.keys(list).length === 0) {
        return Infinity;
      }
      if (iteratee != null) iteratee = _.iteratee(iteratee);
      list = list instanceof Array ? list : _.values(list);
      list = list.filter(function(elm) {
        return !isNaN(elm);
      });
      if (list.length === 0) return Infinity;
      var min = list[0];
      for (var i = 0; i < list.length; i++) {
        const value = list[i];
        const compute = iteratee ? iteratee(value) : value;
        if (isNaN(compute)) {
          return Infinity;
        }
        const currmin = iteratee ? iteratee(min) : min;
        if (currmin > compute) {
          min = value;
        }
      }
      return min;
    },

    // Returns a sorted copy of list in ascending order
    // iteratee criteria.
    _.sortBy = function(list, iteratee, context) {
      if (!list) return [];
      // console.log(iteratee);
      iteratee = _.iteratee(iteratee, context);
      list = list instanceof Array ? list : _.values(list);
      const indices = this.range(list.length);
      var sorted = indices.sort(function(a, b) {
        var aVal = iteratee(list[a]);
        var bVal = iteratee(list[b]);
        if (aVal === undefined) aVal = Infinity;
        if (bVal === undefined) bVal = Infinity;
        return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
      })
      for (var i = 0; i < list.length; i++) {
        sorted[i] = list[sorted[i]];
      }
      return sorted;
    };

  //Groups sets by result from iteratee
  _.groupBy = function(list, iteratee) {
    if (!list || Object.keys(list).length === 0) return {};
    iteratee = _.iteratee(iteratee);
    const groups = {};
    var key = iteratee(list[0]);
    groups[key] = [list[0]];
    for (var i = 1; i < Object.keys(list).length; i++) {
      const newKey = iteratee(list[i]);
      if (key === newKey) {
        groups[key].push(list[i]);
      } else {
        key = newKey;
        if (groups[key] === undefined) {
          groups[newKey] = [list[i]];
        } else {
          groups[newKey].push(list[i]);
        }
      }
    }
    return groups;
  };

  // Return object with key for each object
  _.indexBy = function(list, iteratee) {
    if (!list || Object.keys(list).length === 0) return {};
    iteratee = _.iteratee(iteratee);
    const indexed = {};
    var key = iteratee(list[0]);
    indexed[key] = list[0];
    for (var i = 1; i < Object.keys(list).length; i++) {
      key = iteratee(list[i]);
      indexed[key] = list[i];
    }
    return indexed;
  };

  // Return count of number of elements that belong to a group
  // uses iteratee to choose group to which they belong.
  _.countBy = function(list, iteratee) {
    if (!list || Object.keys(list).length === 0) return {};
    iteratee = _.iteratee(iteratee);
    const counts = {};
    for (var i = 0; i < list.length; i++) {
      const key = iteratee(list[i]);
      if (counts[key] !== undefined) {
        counts[key] += 1;
      } else {
        counts[key] = 1;
      }
    }
    return counts;
  };

  // Returns shuffled copy of list.
  _.shuffle = function(list) {
    if (!list || Object.keys(list).length === 0) return [];
    return list.sort(function(a, b) {
      return randInt(-1, 2);
    });
  };

  // Return random sample of a list.
  _.sample = function(list, n) {
    if (!list || Object.keys(list).length === 0) return void 0;
    if (!n) n = 1;
    return n == 1 ? this.shuffle(list)[0] : this.shuffle(list).slice(0, n);
  };

  // Creates list from iterable types.
  _.toArray = function(list) {
    if (!list || Object.keys(list).length === 0) return [];
    // Added keys to take into account for dictionaries
    keys = Object.keys(list);
    const lst = [];
    for (var i = 0; i < keys.length; i++) {
      lst.push(list[keys[i]]);
    }
    return lst;
  };

  // Returns size of a list
  _.size = function(list) {
    if (!list || Object.keys(list).length === 0) return 0;
    return Object.keys(list).length;
  };

  _.partition = function(array, predicate) {
    if (!array || Object.keys(array).length === 0) return [
      [],
      []
    ];
    if (predicate != null) predicate = genPredicate(predicate);
    const arr1 = [];
    const arr2 = [];
    for (var i = 0; i < array.length; i++) {
      if (predicate(array[i])) {
        arr1.push(array[i]);
      } else {
        arr2.push(array[i]);
      }
    }
    return [arr1, arr2];
  };

  /**Arrays**/

  // Return first n elements in array by default n = 1
  // Also check for non array types and returns undefined for those
  _.first = function(array, n) {
    if (!n) {
      n = 1;
    }
    if (array instanceof Array) {
      if (n > array.length && array.length !== 0) {
        return array;
      }
      if (array.length >= n) {
        if (n === 1) {
          return array[0];
        }
        return array.slice(0, n);
      }
      return void 0;
    }
  };

  // Similar to first expcept that it excludes the last n
  // elements. By default n = 1. Also preforms check for
  // non array types.
  _.initial = function(array, n) {
    if (!n) {
      n = 1;
    }
    if (array instanceof Array) {
      if (array.length !== 0 && array.length >= n) {
        if (n === 1) {
          return array.slice(0, array.length - 1);
        }
        return array.slice(0, array.length - n);
      }
    }
    return [];
  };

  // Preforms the reverse of the first function by
  // including the last n elements.
  _.last = function(array, n) {
    if (!n) {
      n = 1;
    }
    if (array instanceof Array) {
      if (n > array.length && array.length !== 0) {
        return array;
      }
      if (array.length !== 0 && array.length >= n) {
        if (n === 1) {
          return array.pop();
        }
        return array.slice(n, array.length);
      }
      return void 0;
    }
  };

  // Includes all elements of array starting from index
  // i.e. index = 2 returns slice from 2 to last element
  _.rest = function(array, index) {
    if (!index) {
      index = 1;
    }
    if (array instanceof Array) {
      return array.slice(index, array.length);
    }
    return [];
  };

  // Removes all falsy values from the array.
  _.compact = function(array) {
    if (array instanceof Array) {
      return array.filter(function(n) {
        if (n) {
          return true;
        }
        return false;
      });
    }
    return [];
  };

  // This function removes all the nesting in array.
  // If the optional shallow argument is true, then
  // then only the first layer of nesting will be removed
  _.flatten = function(array, shallow) {
    var newArr = [];
    if (array instanceof Array) {
      if (shallow) {
        for (var i = 0; i < array.length; i++) {
          newArr = newArr.concat(array[i]);
        }
      } else {
        for (var i = 0; i < array.length; i++) {
          if (array[i] instanceof Array) {
            newArr = newArr.concat(this.flatten(array[i]));
          } else {
            newArr = newArr.concat(array[i]);
          }
        }
      }
    }
    return newArr;
  };

  // Takes in two arrays and filters out values based
  // on the second array.
  _.without = function(array, values) {
    var newArr = array;
    if (array instanceof Array) {
      for (var i = 1; i < arguments.length; i++) {
        const val = arguments[i];
        newArr = newArr.filter(function(n) {
          return val !== n;
        });
      }
      return newArr;
    }
    return [];
  };

  // Takes in several arrays and creates a new array
  // that creates a new array that contains elements
  // found in any of the arrays. However, array only
  // contains the same element once.
  _.union = function(arrays) {
    var arr = [];
    for (var i = 0; i < arguments.length; i++) {
      if (arguments[i] instanceof Array) {
        arr = arr.concat(arguments[i]);
      }
    }
    var newArr = [];
    for (i = 0; i < arr.length; i++) {
      if (newArr.indexOf(arr[i]) === -1) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  };

  // Takes in several arrays creates a new array
  // that contains all the values that are the
  // same in all arrays.
  _.intersection = function(arrays) {
    if (!(arrays instanceof Array)) {
      return [];
    }
    var arr = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
      const arg = arguments[i];
      if (arg instanceof Array && arr instanceof Array) {
        arr = arr.filter(function(n) {
          return arg.indexOf(n) !== -1;
        });
      } else {
        return [];
      }
    }
    return arr;
  };

  // Returns array that contains only the elements
  // of the first array that are not present in
  // the rest of the arrays.
  _.difference = function(array, others) {
    if (!(arguments[0] instanceof Array)) {
      return [];
    }
    var arr = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
      const arg = arguments[i];
      if (arg instanceof Array) {
        arr = arr.filter(function(n) {
          return arg.indexOf(n) === -1;
        });
      }
    }
    return arr;
  };

  // Gets rid of duplicates in array and returns
  // it. When is isSorted is true the creation of
  // new array is easier. There is also the
  // iteratee that can be passed as the criteria
  // for what duplicates mean.
  _.uniq = function(array, isSorted, iteratee) {
    if (!(array instanceof Array)) {
      return [];
    }
    if (typeof(isSorted) !== "boolean") {
      iteratee = isSorted;
      isSorted = false;
    }
    const unique = [];
    var seen = [];
    if (iteratee != null) iteratee = _.iteratee(iteratee);
    for (var i = 0; i < array.length; i++) {
      const value = array[i];
      const compute = iteratee ? iteratee(value) : value;
      if (isSorted) {
        if (!i || seen !== compute) {
          unique.push(value);
        }
        seen = compute;
      } else if (iteratee !== null) {
        if (seen.indexOf(compute) === -1) {
          unique.push(value);
          seen.push(compute);
        }
      } else {
        if (unique.indexOf(value) === -1) {
          unique.push(value);
        }
      }
    }
    return unique;
  };

  // Joins arrays together with their corresponding
  // postions i.e. [[first elments], [second elements],
  // ... [last elements]]
  _.zip = function(arrays) {
    if (!(arrays instanceof Array)) {
      return [];
    }
    const zipped = [];
    const args = [].slice.call(arguments);
    const length = Math.max(...args.map(function(a) {
      return a.length;
    }));
    for (var i = 0; i < length; i++) {
      const elm = []
      for (var j = 0; j < args.length; j++) {
        try {
          elm.push(args[j][i])
        } catch (e) {
          elm.push(undefined);
        }
      }
      zipped.push(elm);
    }
    return zipped;
  };

  // Opposite of zip contains new arrays
  // first which has first element of all
  // other arrays and so on...
  _.unzip = function(array) {
    if (!(array instanceof Array)) {
      return [];
    }
    const unzipped = [];
    const length = Math.max(...array.map(function(a) {
      return a.length;
    }));
    for (var i = 0; i < array.length; i++) {
      const elm = []
      for (var j = 0; j < length; j++) {
        try {
          elm.push(array[j][i])
        } catch (e) {
          elm.push(undefined);
        }
      }
      unzipped.push(elm);
    }
    return unzipped;
  };

  // Converts array into an object of key value
  // pairs. Takes single list of lists with
  // [key, values], or two list one containing
  // either keys or values.
  _.object = function(list, values) {
    if (!(list instanceof Array)) {
      return {};
    }
    const obj = {};
    for (var i = 0; i < list.length; i++) {
      if (values) {
        obj[list[i]] = values[i];
      } else {
        obj[list[i][0]] = list[i][1];
      }
    }
    return obj;
  };

  // Returns indexOf the value and returns -1
  // if values does not exist.
  _.indexOf = function(array, value, isSorted) {
    if (!(array instanceof Array)) {
      return -1;
    }
    if (isSorted) {
      return binarySearch(array, value);
    } else {
      return array.indexOf(value);
    }
  };

  // Last occurence of a value in array
  _.lastIndexOf = function(array, value, fromIndex) {
    if (!(array instanceof Array)) {
      return -1;
    }
    if (!fromIndex) fromIndex = array.length - 1;
    for (var i = fromIndex; i >= 0; i--) {
      if (array[i] == value) return i;
    }
    return -1;
  };

  // Uses binary search to return index at which value should
  // be insterted at if order is to be sorted
  _.sortedIndex = function(list, value, iteratee) {
    if (!(list instanceof Array)) {
      return 0;
    }
    if (iteratee != null) iteratee = _.iteratee(iteratee);
    return binarySearch(list, value, iteratee, true);
  };

  // Similar to indexOf, but uses predicate as search criteria
  _.findIndex = function(array, predicate) {
    if (!(array instanceof Array)) {
      return -1;
    }
    if (predicate != null) predicate = genPredicate(predicate);
    for (var i = 0; i < array.length; i++) {
      if (predicate(array[i])) {
        return i;
      }
    }
    return -1;
  };

  // Like findIndex but searches in reverse
  _.findLastIndex = function(array, predicate) {
    if (!(array instanceof Array) || array.length === 0) {
      return -1;
    }
    if (predicate != null) predicate = genPredicate(predicate);
    for (var i = array.length - 1; i >= 0; i++) {
      if (predicate(array[i])) {
        return i;
      }
    }
    return -1;
  };

  // Creates array containing number from [start, end)
  // Incrementing by step.
  _.range = function(start, stop, step) {
    if (arguments.length === 1) {
      stop = start;
      start = 0;
    }
    if (!step) {
      step = 1;
    }
    const numbers = [];
    if (step >= 1) {
      for (var i = start; i < stop; i += step) {
        numbers.push(i);
      }
    } else {
      for (var i = start; i > stop; i += step) {
        numbers.push(i);
      }
    }
    return numbers;
  };

  /**Functions**/

  // Binds function to an object and can pass arguments
  // to pre-fill some or all arguments.
  _.bind = function(func, object, ...args) {
    if (!(func instanceof Function)) throw new TypeError("Bind must be called on a function", "underscore.js");
    if (object instanceof Object) {
      object["getFunc"] = func;
      func = object.getFunc;
    }
    var args = Array.prototype.slice.call(args);
    return func.bind.apply(func, [object].concat(args));
  };

  // Binds several methods to an object run in conext invoked.
  _.bindAll = function(object, ...methods) {
    if (!object || methods.length === 0) throw new Error("bindAll must be passed function names");
    for (var i = 0; i < methods.length; i++) {
      object[methods[i]] = object[methods[i]].bind(object);
    }
    return object;
  };

  // Partially fill in arguments in a function
  _.partial = function(func) {
    var args = Array.prototype.slice.call(arguments, 1);
    const part = function() {
      if (!_.partial.placeholder) _.partial.placeholder = _;
      const length = args.length;
      var pos = 0;
      var outArgs = Array(length);
      for (var i = 0; i < length; i++) {
        outArgs[i] = args[i] === _.partial.placeholder ? arguments[pos++] : args[i];
      }
      while (pos < arguments.length) outArgs.push(arguments[pos++]);
      if (!(this instanceof part)) {
        return func.apply(this, outArgs);
      } else {
        const self = Object.create(func.prototype);
        const result = func.apply(self, outArgs);
        if ((typeof result === 'function' || typeof result === 'object' && !!result)) return result;
        return self;
      }
    }
    return part;
  };

  // Function that takes in a function and stores in results
  // in a cache so that subsequent calls can be looked up
  // instead of invoking function again.
  _.memoize = function(func, hashFunction) {
    const memoized = function() {
      const cache = memoized.cache;
      const argument = hashFunction ? hashFunction.apply(this, arguments) : Array.prototype.slice.call(arguments);
      var result = cache[argument];
      if (!cache.hasOwnProperty(argument)) {
        result = func.apply(func, arguments);
        cache[argument] = result;
      }
      return result;
    }.bind(this);
    memoized.cache = {};
    return memoized;
  };

  // Simple delay function that waits for execution of function
  // the same number of seconds.
  // delay: function(func, wait, ...args) {
  //   wait += new Date().getTime();
  //   while (new Date() < wait) {}
  //   return func.apply(func, args);
  // },

  // Second version of delay trying to use setTimeout this
  // time, inspired by what I learned from
  _.delay = function(func, wait, ...args) {
    const delayed = function() {
      return func.apply(func, args);
    }
    return setTimeout(delayed, wait);
  };

  // Defers invoking function until call stack has cleared.
  _.defer = function(func, ...args) {
    const delayed = function() {
      return func.apply(func, args);
    }
    setTimeout(delayed, 0);
  };

  // This function creates throttled verstion of Functions
  // calls original function at most once per wait.
  _.throttle = function(func, wait, options) {
    var result, context, args, timeout;
    var prev = 0;
    if (!options) options = {};

    const trailing = function() {
      prev = options.leading === false ? 0 : new Date().getTime();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };

    const throttled = function() {
      const now = new Date().getTime();
      if (!prev && options.leading === false) prev = now;
      const remaining = wait - (now - prev);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        prev = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(trailing, remaining);
      }
      return result;
    };

    throttled.cancel = function() {
      clearTimeout(timeout);
      prev = 0;
      timeout = context = args = null;
    };

    return throttled;
  };

  // Did not understand debounce so used version found in:
  // https://davidwalsh.name/function-debounce with a few
  // modification to make it more straightforward.
  // Similar to throttle except that call won't run unless
  // Wait time has passed after LAST call.
  _.debounce = function(func, wait, immediate) {
    var timeout, result;
    const debounced = function() {
      const args = arguments;
      const context = this;
      const cb = function() {
        timeout = null;
        if (!immediate) result = func.apply(context, args);
      }
      const call = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(cb, wait);
      if (call) result = func.apply(context, args);
      return result;
    }

    debounced.cancel = function() {
      clearTimeout(timeout);
      timeout = null;
    }
    return debounced;
  };

  // Version of function can only run once.
  _.once = function(func) {
    var ran = false;
    var result;
    return function() {
      if (!ran) {
        ran = true;
        result = func.apply(func, arguments);
        return result;
      } else {
        return result;
      }
    }
  };

  // Will only run function after n times.
  _.after = function(count, func) {
    var calls = count;
    return function() {
      if (calls === 1 || calls === 0) {
        return func.apply(func, arguments);
      } else {
        calls--;
        return;
      }
    }
  };

  // Opposite of the after function will
  // only run n times.
  _.before = function(count, func) {
    var calls = 1;
    return function() {
      if (calls < count) {
        calls++;
        return func.apply(func, arguments);
      } else {
        calls++;
        return;
      }
    }
  };

  // Wraps function in another function,
  // and passes it as the first argument.
  _.wrap = function(func, wrapper) {
    // return wrapper.bind.apply(wrapper, [null].concat(func));
    // Alternate way
    return _.partial(wrapper, func)
  };

  // Returns negated version of predicate function
  // simple implementation.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(predicate, arguments);
    }
  };

  _.compose = function(...func) {
    return function() {
      var i = func.length - 1;
      var mega = func[i].apply(func[i], arguments);
      for (i--; i >= 0; i--) {
        mega = func[i].call(func[i], mega);
      }
      return mega;
    }
  };

  // Generate appropriate iteratee cb function. Note: base of
  // orginal as I had no idea what this functions purpose was.
  _.iteratee = function(iteratee, context) {

    // if null return itself
    if (iteratee == null) return iteratee;
    // check if already a function and return it with context
    if (iteratee instanceof Function) {
      var cb = iteratee;
      if (context) {
        cb = function() {
          return iteratee.apply(context, arguments);
        };
      }
      return cb;
    }
    // check that keys match if iteratee is an object
    if (typeof iteratee === 'function' || typeof iteratee === 'object' && !!iteratee && !(iteratee instanceof Array)) {
      return function(obj) {
        const keys = Object.keys(iteratee);
        const attr = Object(obj);
        if (attr == null) return !keys.length;
        for (var i = 0; i < keys.length; i++) {
          if (attr[keys[i]] !== iteratee[keys[i]] || !(keys[i] in attr)) return false;
        }
        return true;
      }
    }
    // return property if it exists including deep property
    // when iteratee is an array.
    return function(obj) {
      if (iteratee instanceof Array) {
        for (var i = 0; i < iteratee.length; i++) {
          console.log(iteratee[i]);
          obj = obj[iteratee[i]];
        }
        return obj;
      }
      if (Object.keys(obj).length !== 0) {
        return obj[iteratee];
      } else {
        return void 0;
      }

    }
  };
  /**Objects**/

  _.values = function(object) {
    const keys = Object.keys(object);
    const array = Array(keys.length);
    for (var i = 0; i < keys.length; i++) {
      array[i] = object[keys[i]];
    }
    return array;
  };

  /**Utility**/

  _.identity = function(value) {
    return value;
  }

  /**Chaining**/



}.call(this));
