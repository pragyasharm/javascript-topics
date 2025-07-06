let arr = [1, 2, 3, 4, 5];

let arrFilter = arr.filter((item) => item > 2);
console.log(arrFilter);

// filter polyfill
Array.prototype.myFilter = function (callBackFn) {
  let arr = [];
  for (i = 0; i < this.length; i++) {
    let value = callBackFn(this[i], i);
    if (value) {
      arr.push(this[i]);
    }
  }
  return arr;
};

let arrMyFilter = arr.filter((item) => item > 2);
console.log(arrMyFilter);
