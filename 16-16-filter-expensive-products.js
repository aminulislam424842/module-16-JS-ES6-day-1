const products = [
  { name: "Pen", price: 50 },
  { name: "Bag", price: 8000 },
  { name: "Book", price: 300 },
  { name: "OnePLus", price: 23000 },
  { name: "Laptop", price: 50000 }
];

const expensive = products.filter(x => x.price > 1000);

console.log(expensive);