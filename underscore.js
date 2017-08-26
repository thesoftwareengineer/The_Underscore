const _ = module.exports = {
  first: function(array, n) {
    if (!n) {
        n = 1;
    }
    if (array instanceof Array) {
      if (array.length != 0 && array.length >= n) {
        if (n==1){
            return array[0];
        }
        return array.slice(0, n);
      }
      return void 0;
    }
  }
};
