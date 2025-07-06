let arr = [1, 2, 3, 4, 5];

let arrReduceSum = arr.reduce((pre, curr, index) => {
  return pre + curr;
}, 0);
console.log(arrReduceSum);

Array.prototype.myReduce = function (callBackFn, initialValue) {
  let accumulated = initialValue;
  for (i = 0; i < this.length; i++) {
    accumulated = callBackFn(accumulated, this[i], i);
  }
  return accumulated;
};

let arrMyReduceSum = arr.myReduce((pre, curr, index) => {
  return pre + curr;
}, 0);
console.log(arrMyReduceSum);
