// const product = "Laptop";
// const price = 55000;
// const quantity = 2;
// const total = price*quantity;

// const summary = `Order Summary:
// Product: ${product}
// Price: ${price} BDT
// Quantity: ${quantity}
// Total: ${total} BDT`;

// console.log(summary);


const summary = (product,price,quantity) => {
  return `Order Summary:
Product: ${product}
Price: ${price} BDT
Quantity: ${quantity}
Total: ${price*quantity} BDT `
}

console.log(summary("Laptop",55000,2));