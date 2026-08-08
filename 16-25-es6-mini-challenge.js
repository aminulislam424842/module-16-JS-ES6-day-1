/*
==================================================
ES6 Mini Challenge
==================================================

Function Name Must be: calculateCartTotal

An online shopping app needs a Cart Calculator.
The function will receive product prices and a
discount percentage, then calculate the Subtotal,
Discount Amount, and Final Total.


INPUT
--------------------------------------------------
The function will receive two parameters:

- prices (Array): Prices of all products
- discount (Number): Discount percentage


RULES
--------------------------------------------------
- Calculate the Subtotal by adding all product prices.
- Calculate the Discount Amount based on the discount percentage.
- Calculate the Final Total after subtracting the discount.
- If discount is not provided, the default discount
  should be 0%.
- Try to use:
  • Rest/Spread
  • Arrow Function
  • Destructuring
  • Default Parameters
  • Template Literals


VALIDATION
--------------------------------------------------
Return "Invalid" if:

- prices is not an Array.
- Any price is not a number.
- Any price is negative.
- discount is less than 0 or greater than 100.


TEST CASES
--------------------------------------------------

Input:
[55000, 1000, 1500], 10

Output:
Subtotal: 57500, Discount: 5750, Final Total: 51750


Input:
[1000, 2000], 20

Output:
Subtotal: 3000, Discount: 600, Final Total: 2400


Input:
[500, 500]

Output:
Subtotal: 1000, Discount: 0, Final Total: 1000


Input:
[-500, 1000], 10

Output:
Invalid


Input:
[1000, 2000], 110

Output:
Invalid

==================================================
*/


const calculateCartTotal = (prices, discount=0) => {
  if (!Array.isArray(prices)){
    return "Invalid"
  }
  if (discount >100 || discount<0|| typeof discount!=="number"){
    return "Invalid"
  }

  for (let i=0;i<prices.length;i++){
    if (prices[i]<0){
      return "Invalid"
    }
    if (typeof prices[i]!=="number"){
      return "Invalid"
    }
  }

  
  const subTotal=prices.reduce((total,n)=>total+n,0);
  const discountAmount = (subTotal*discount)/100;
  const finalTotal = subTotal-discountAmount;

  return `Subtotal: ${subTotal}, Discount: ${discountAmount}, Final Total: ${finalTotal}`

}


// console.log(calculateCartTotal([-500, 1000], 10));
// console.log(calculateCartTotal([1000, 2000], 110));
// console.log(calculateCartTotal([1000, "2000"], 10));
// console.log(calculateCartTotal([1000, 2000], "11"));
// console.log(calculateCartTotal([1000, 2000], 20));
// console.log(calculateCartTotal([55000, 1000, 1500], 10));
// console.log(calculateCartTotal([500, 500]));