// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  console.log(price);
  console.log(quantity);
  const subtotal = price * quantity;
  console.log(subtotal);
  product.querySelector('.subtotal span').innerHTML = subtotal; //step 5
  return subtotal; //step 5
}

function calculateAll() {

  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let multipleProducts = document.getElementsByClassName("product");
  let total = 0;

  for (i=0 ; i< multipleProducts.length; i++){
    total += updateSubtotal(multipleProducts[i]);
    
  };
  console.log("TOTAL FINAL" + total);

  // ITERATION 3
  document.querySelector('#total-value span').innerHTML = total; 
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
