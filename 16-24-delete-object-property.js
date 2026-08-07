const property = (product) => {
  delete product.stock;
  return product;
};

const product = {
  name: "Laptop",
  price: 55000,
  brand: "HP",
  stock: 10
};

console.log(property(product))