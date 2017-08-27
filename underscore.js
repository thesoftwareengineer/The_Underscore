const _ = module.exports = {
  first: function(array, n) {
    if (!n) {
      n = 1;
    }
    if (array instanceof Array) {
      if (n > array.length && array.length != 0) {
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
      return void 0;
    }
  },

  last: function(array, n) {
    if (!n) {
      n = 1;
    }
    if (array instanceof Array) {
      if (array.length !== 0 && array.length >= n) {
        if (n === 1) {
          return array.pop();
        }
        return array.slice(n - 1, array.length);
      }
      return void 0;
    }
  }
};
