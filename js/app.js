'use strict';

console.log('Hello focus group!');
alert('Hello focus group!');

var product1 = '';
var product2 = '';
var product3 = '';
var productName = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
console.log(productName);
var productParent = document.getElementById('imageName');
var productImagesParent = document.getElementById('imageSet');


// =========FUNCTIONS==============================================================

function startRun() {
  product1 = generateRandomProduct(); // do this 3 times, put them into an array
  product2 = generateRandomProduct();
  product3 = generateRandomProduct();
  console.log(product1);
  renderName(product1);
  renderProductImage(product1);
  console.log(product2);
  renderName(product2);
  renderProductImage(product2);
  console.log(product3);
  renderName(product3);
  renderProductImage(product3);
}

startRun();

function generateRandomProduct () {
  var index = Math.floor(Math.random() * productName.length);
  console.log(index);
  return productName[index];
}

function renderName (productName) {
  console.log(productName);
  var h1 = document.createElement('h1');
  h1.textContent = productName;
  productParent.append(h1);
}

function renderProductImage (productName) {
  var img = document.createElement('img');
  img.setAttribute('src', 'images/' + productName + '.jpg'); // create if/else to go through for the different file types
  img.setAttribute('id', productName);
  productImagesParent.append(img);
}



function CreateProducts (name) { // object constructor
  this.name = name;
  this.img = 'images/' + name + '.jpg';
  this.timesShown = 0;
  this.timesClicked = 0;
}
