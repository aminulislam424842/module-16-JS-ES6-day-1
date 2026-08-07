// const numbers = [15, 42, 8, 67, 23]
// const maximum = Math.max(...numbers);

// console.log(maximum);

const maximum = (nums) => {
  return Math.max(...nums);
}

const numbers = [15, 42, 8, 67, 23];
console.log(maximum(numbers));

// console.log(maximum([15, 42, 8, 67, 23]));