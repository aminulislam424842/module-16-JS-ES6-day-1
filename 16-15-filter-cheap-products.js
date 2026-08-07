const products = [
  { name: "Pen", price: 50 },
  { name: "Bag", price: 800 },
  { name: "Book", price: 300 },
  { name: "Laptop", price: 50000 }
];

const cheap = products.filter(x => x.price < 500);

console.log(cheap)