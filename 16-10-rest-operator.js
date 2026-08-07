function sumAll(...num) {
  return num.reduce((total, n) => total + n, 0);
}
console.log(sumAll(1, 2, 3, 4, 5));