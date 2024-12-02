const products = [
  { price: 100, quantity: 1 },

  { price: 50, quantity: 2 },

  { price: 200, quantity: 1 },
];

function totalPriceOver(products , value = 0){
    let sum = 0;
    const filteredProducts = products.filter((product) => product.price >= value )
    .map((product) => product.quantity === product.quantity ? product.price * product.quantity : product.price);

    filteredProducts.forEach(a => {
         sum += a
    });

    return sum;
}

// .forEach(function(a) {
//     sum += a
//     console.log(sum);
// });

console.log(totalPriceOver(products, 75));
totalPriceOver(products, 75); // returns 300

// Tips:
// - Use `.filter`, `.map`, and `.forEach`