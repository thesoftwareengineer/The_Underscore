const _ = {
  first : function(array) {
    if(array instanceOf Array) {
      if (array.length != 0) {
          return array[0];
    }
    return undefined;
  }
};

console.log(_.first({}));
console.log(_.first([]));
console.log(_.first(null));
console.log(_.first(0));
console.log(_.first(false));
