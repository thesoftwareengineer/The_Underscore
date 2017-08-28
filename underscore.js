const _ = module.exports = {
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

  rest: function(array, index) {
    if (!index) {
      index = 1;
    }
    if (array instanceof Array) {
      return array.slice(index, array.length);
    }
    return [];
  },

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

  union: function() {
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

  difference: function(arrays) {
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
  }
};
