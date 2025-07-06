let name = {
  first: "Neha",
  last: "Jayanti",
};
function printName(other) {
  console.log("Hello", this.first, this.last, other);
}

const printMyName = printName.bind(name, "Pragya");
printMyName();

//polyfill method of bind
Function.prototype.mybind = function (context, ...restArgs) {
  let fn = this;
  return function (...newArgs) {
    fn.apply(context, [...restArgs, ...newArgs]);
  };
};

const printMyName2 = printName.mybind(name, "Prachi");
printMyName2();
