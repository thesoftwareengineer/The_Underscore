// Recreating underscore.js libraries first attempt
// Authors: Eli D. Gonzalez & Patricio Torres
// license: MIT

// Helper function that generates a callback for
// elements in a collection. Should not be used
// outside of here.
const genCb = function(iteratee) {
  if (iteratee instanceof Function) {
    return iteratee;
  } else {
    return function(obj) {
      if (Object.keys(obj).length !== 0) {
        return obj[iteratee]
      } else {
        return iteratee;
      }
    }
  }
}

const _ = module.exports = {

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
        return array.slice(n - 1, array.length);
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
        seen = compute
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
  }
};
