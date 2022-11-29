function calculateTax(amount) {
    let totalAmount = amount * .0876 + 99;
    return totalAmount;

}
let subTotal = calculateTax(99);
console.log("Your total is " + subTotal);