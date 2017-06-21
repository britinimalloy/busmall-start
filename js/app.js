'use strict';

console.log('Hello focus group!');
alert('Hello focus group!');

var product1 = '';
var product2 = '';
var product3 = '';
var productName = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
console.log(productName);
//var productParent = document.getElementById('imageName');
var productImagesParent = document.getElementById('imageSet');
var productArray = [];
//var currentGroup = [];
//var previousGroup = [];

// var bag = new Class {}
// bag.clicks
//
// array = [b53i5u9034580958, bannana]
//
// array[0] is the same as the bag object
// array[0].clicks is the same as bags.clicks

// =========FUNCTIONS==============================================================

function startRun() {
  product1 = generateRandomProduct();
  product2 = generateRandomProduct();
  product3 = generateRandomProduct();
  console.log(product1);

  // while (product1 ==) {
  //   //do this each time I generate a random product
  // }

  renderProductImage(product1);
  renderProductImage(product2);
  renderProductImage(product3);
}

startRun();

function generateRandomProduct () {
  var index = Math.floor(Math.random() * productName.length);
  console.log(index);
  return productName[index];
}

function renderProductImage (productName) {
  // treeImagesParent.removeChild(treeImagesParent.lastChild);
  var img = document.createElement('img');
  if (productName === 'usb') {
    img.setAttribute('src', 'images/' + productName + '.gif');
    img.setAttribute('id', productName);
  } else {
    img.setAttribute('src', 'images/' + productName + '.jpg');
    img.setAttribute('id', productName);
  }
  productImagesParent.append(img);
}

for (var i = 0; i < productName.length; i++) {
  productArray[i] = new CreateProducts(productName[i]);
  //console.log(productArray);
}

function CreateProducts (name) { // object constructor
  this.name = name;
  this.img = 'images/' + name + '.jpg';
  this.timesShown = 0;
  this.timesClicked = 0;
}
