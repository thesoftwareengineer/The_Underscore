// Recreating underscore.js libraries first attempt
// Authors: Eli D. Gonzalez & Patricio Torres
// license: MIT


// Helper function that generates a callback for
// elements in a collection. Should not be used
// outside of here.
const genCb = function(iteratee) {
  if (iteratee instanceof Function) {
    return iteratee;
  } else if (iteratee === "length") {
    return function(obj) {
      return obj.length;
    }
  } else {
    return function(obj) {
      if (Object.keys(obj).length !== 0) {
        return obj[iteratee];
      } else {
        return iteratee;
      }
    }
  }
}

// Helper function that creates predicate returning only
// true or false.
const genPredicate = function(predicate) {
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
const binarySearch = function(array, value, cb, toInsert) {
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

const randInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const _ = module.exports = {

  /**Collections**/

  // "Plucks" all values that match key in each
  // element and returns them as an array.
  pluck: function(list, propertyName) {
    if (!list) {
      return [];
    }
    const plucked = [];
    for (var i = 0; i < list.length; i++) {
      plucked.push(list[i][propertyName]);
    }
    return plucked;
  },

  // Returns max on a list and uses iteratee if given.
  // If empty return -Infinity if value is non-numeric,
  // it will ignore.
  max: function(list, iteratee) {
    if (!list || !(list instanceof Array) || list.length === 0) {
      return -Infinity;
    }
    if (iteratee != null) iteratee = genCb(iteratee);
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
  },

  // Returns min on a list and uses iteratee if given.
  // If empty return Infinity if value is non-numeric,
  // it will ignore.
  min: function(list, iteratee) {
    if (!list || !(list instanceof Array) || list.length === 0) {
      return Infinity;
    }
    if (iteratee != null) iteratee = genCb(iteratee);
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
  sortBy: function(list, iteratee) {
    if (!list) return [];
    iteratee = genCb(iteratee);
    const indices = this.range(list.length);
    var sorted = indices.sort(function(a, b) {
      const aVal = iteratee(list[a]);
      const bVal = iteratee(list[b]);
      return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
    })
    for (var i = 0; i < list.length; i++) {
      sorted[i] = list[sorted[i]];
    }
    return sorted;
  },

  //Groups sets by result from iteratee
  groupBy: function(list, iteratee) {
    if (!list || Object.keys(list).length === 0) return {};
    iteratee = genCb(iteratee);
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
  },

  // Return object with key for each object
  indexBy: function(list, iteratee) {
    if (!list || Object.keys(list).length === 0) return {};
    iteratee = genCb(iteratee);
    const indexed = {};
    var key = iteratee(list[0]);
    indexed[key] = list[0];
    for (var i = 1; i < Object.keys(list).length; i++) {
      key = iteratee(list[i]);
      indexed[key] = list[i];
    }
    return indexed;
  },

  // Return count of number of elements that belong to a group
  // uses iteratee to choose group to which they belong.
  countBy: function(list, iteratee) {
    if (!list || Object.keys(list).length === 0) return {};
    iteratee = genCb(iteratee);
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
  },

  // Returns shuffled copy of list.
  shuffle: function(list) {
    if (!list || Object.keys(list).length === 0) return [];
    return list.sort(function(a, b) {
      return randInt(-1, 2);
    });
  },

  // Return random sample of a list.
  sample: function(list, n) {
    if (!list || Object.keys(list).length === 0) return void 0;
    if (!n) n = 1;
    return n == 1 ? this.shuffle(list)[0] : this.shuffle(list).slice(0, n);
  },

  // Creates list from iterable types.
  toArray: function(list) {
    if (!list || Object.keys(list).length === 0) return [];
    // Added keys to take into account for dictionaries
    keys = Object.keys(list);
    const lst = [];
    for (var i = 0; i < keys.length; i++) {
      lst.push(list[keys[i]]);
    }
    return lst;
  },

  // Returns size of a list
  size: function(list) {
    if (!list || Object.keys(list).length === 0) return 0;
    return Object.keys(list).length;
  },

  partition: function(array, predicate) {
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
  },

  /**Arrays**/

  // Return first n elements in array by default n = 1
  // Also check for non array types and returns undefined for those
  first: function(array, n) {
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
  },

  // Similar to first expcept that it excludes the last n
  // elements. By default n = 1. Also preforms check for
  // non array types.
  initial: function(array, n) {
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
  },

  // Preforms the reverse of the first function by
  // including the last n elements.
  last: function(array, n) {
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
  },

  // Includes all elements of array starting from index
  // i.e. index = 2 returns slice from 2 to last element
  rest: function(array, index) {
    if (!index) {
      index = 1;
    }
    if (array instanceof Array) {
      return array.slice(index, array.length);
    }
    return [];
  },

  // Removes all falsy values from the array.
  compact: function(array) {
    if (array instanceof Array) {
      return array.filter(function(n) {
        if (n) {
          return true;
        }
        return false;
      });
    }
    return [];
  },

  // This function removes all the nesting in array.
  // If the optional shallow argument is true, then
  // then only the first layer of nesting will be removed
  flatten: function(array, shallow) {
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
  },

  // Takes in two arrays and filters out values based
  // on the second array.
  without: function(array, values) {
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
  },

  // Takes in several arrays and creates a new array
  // that creates a new array that contains elements
  // found in any of the arrays. However, array only
  // contains the same element once.
  union: function(arrays) {
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
  },

  // Takes in several arrays creates a new array
  // that contains all the values that are the
  // same in all arrays.
  intersection: function(arrays) {
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
  },

  // Returns array that contains only the elements
  // of the first array that are not present in
  // the rest of the arrays.
  difference: function(array, others) {
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
  },

  // Gets rid of duplicates in array and returns
  // it. When is isSorted is true the creation of
  // new array is easier. There is also the
  // iteratee that can be passed as the criteria
  // for what duplicates mean.
  uniq: function(array, isSorted, iteratee) {
    if (!(array instanceof Array)) {
      return [];
    }
    if (typeof(isSorted) !== "boolean") {
      iteratee = isSorted;
      isSorted = false;
    }
    const unique = [];
    var seen = [];
    if (iteratee != null) iteratee = genCb(iteratee);
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
  },

  // Joins arrays together with their corresponding
  // postions i.e. [[first elments], [second elements],
  // ... [last elements]]
  zip: function(arrays) {
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
  },

  // Opposite of zip contains new arrays
  // first which has first element of all
  // other arrays and so on...
  unzip: function(array) {
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
  },

  // Converts array into an object of key value
  // pairs. Takes single list of lists with
  // [key, values], or two list one containing
  // either keys or values.
  object: function(list, values) {
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
  },

  // Returns indexOf the value and returns -1
  // if values does not exist.
  indexOf: function(array, value, isSorted) {
    if (!(array instanceof Array)) {
      return -1;
    }
    if (isSorted) {
      return binarySearch(array, value);
    } else {
      return array.indexOf(value);
    }
  },

  // Last occurence of a value in array
  lastIndexOf: function(array, value, fromIndex) {
    if (!(array instanceof Array)) {
      return -1;
    }
    if (!fromIndex) fromIndex = array.length - 1;
    for (var i = fromIndex; i >= 0; i--) {
      if (array[i] == value) return i;
    }
    return -1;
  },

  // Uses binary search to return index at which value should
  // be insterted at if order is to be sorted
  sortedIndex: function(list, value, iteratee) {
    if (!(list instanceof Array)) {
      return 0;
    }
    if (iteratee != null) iteratee = genCb(iteratee);
    return binarySearch(list, value, iteratee, true);
  },

  // Similar to indexOf, but uses predicate as search criteria
  findIndex: function(array, predicate) {
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
  },

  // Like findIndex but searches in reverse
  findLastIndex: function(array, predicate) {
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
  },

  // Creates array containing number from [start, end)
  // Incrementing by step.
  range: function(start, stop, step) {
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
  },

  /**Functions**/

  // Binds function to an object and can pass arguments
  // to pre-fill some or all arguments.
  bind: function(func, object, ...arg) {
    if (!(func instanceof Function)) throw new TypeError("Bind must be called on a function", "underscore.js", 650);
    object["getFunc"] = func;
    func = object.getFunc;
    if (arg.length !== 0) {
      var args = Array.apply(null, arg);
      return func.bind.apply(func, [object].concat(args));
      //return func.apply(this, arg1.slice(2, arg1.length));
    } else {
      return func.bind(object);
    }
  },

  // Binds several methods to an object run in conext invoked.
  bindAll: function(object, ...methods) {
    if (!object || methods.length === 0) throw new Error("bindAll must be passed function names");
    for (var i = 0; i < methods.length; i++) {
      object[methods[i]] = object[methods[i]].bind(object);
    }
    return object;
  }

  /**Objects**/

  /**Utility**/

  /**Chaining**/

};
