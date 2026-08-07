// const array1 = [10, 20, 30];
// const array2 = [40, 50, 60];

// const merge = [...array1,...array2];

// console.log(merge);


const merge = (arr1, arr2) => { return [...arr1, ...arr2] };

console.log(merge([10, 20, 30], [40, 50, 60]))