const f2c = (f, c) => {
  f;
  c = (f - 32) * (5 / 9);
  console.log(`Fahrenheit temperature is` + " " + f);
  console.log(`In celsius that's` + " " + c.toFixed(2));
  if (c < 0) {
    console.log("Ladno");
  } else if (c > 21 && c < 40) {
    console.log("Sredno Mlako");
  } else if (c > 40) {
    console.log("Vrukjo :D");
  }
};
f2c(150);
let numbers = {
  num1: 42,
  num2: 24,

  sum: function () {
    return this.num1 + this.num2;
  },
};
console.log(numbers["sum"]());
