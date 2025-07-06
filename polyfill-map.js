let arr = [1, 2, 3, 4];

const arrMultiple = arr.map((item) => {
  return item * 2;
});
console.log(arrMultiple);

// map polyfill
Array.prototype.myMap = function (callBackFn) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callBackFn(this[i], i));
  }
  return arr;
};

const arrMyMap = arr.myMap((item, i) => {
  return item * 2;
});

console.log(arrMyMap);
