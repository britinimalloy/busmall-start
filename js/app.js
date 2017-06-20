'use strict';

console.log('Hello focus group!');
alert('Hello focus group!');

var product = '';
var productName = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
console.log(productName);
var productParent = document.getElementById('imageName');
var productImagesParent = document.getElementById('imageSet');


// =========FUNCTIONS==============================================================

function startRun() {
  product = generateRandomProduct();
  console.log(product);
  renderName(product);
  renderProductImage(product);
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
  img.setAttribute('src', 'images/' + productName + '.jpg');
  img.setAttribute('id', productName);
  productImagesParent.append(img);
}



function CreateProducts (name) { // object constructor
  this.name = name;
  this.img = 'images/' + name + '.jpg';
  this.timesShown = 0;
  this.timesClicked = 0;
}
