'use strict';

// console.log('Hello focus group!');
// alert('Hello focus group!');

//========VARIABLES================================================================
var product1 = '';
var product2 = '';
var product3 = '';
// var product4 = '';
// var product5 = '';
// var product6 = '';
var currentGroup = [];
var previousGroup = [];
var productName = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
//console.log(productName);
var productImagesParent = document.getElementById('imageSet');
var productArray = [];
//console.log(productArray);


// =========FUNCTIONS==============================================================

function startRun() { // generate 3 random products that are non-repeating
  product1 = generateRandomProduct();
  while (previousGroup.includes(product1)) {
    product1 = generateRandomProduct();
  }
  console.log(product1);
  currentGroup.push(product1);
  console.log(currentGroup);
  console.log('======================================');
  product2 = generateRandomProduct();
  while (currentGroup.includes(product2) || previousGroup.includes(product1)) {
    product2 = generateRandomProduct();
  }
  console.log(product2);
  currentGroup.push(product2);
  console.log(currentGroup);
  console.log('======================================');
  product3 = generateRandomProduct();
  while (currentGroup.includes(product3) || previousGroup.includes(product3)) {
    product3 = generateRandomProduct();
  }
  console.log(product3);
  currentGroup.push(product3);
  console.log(currentGroup);
  console.log('======================================');

  previousGroup = currentGroup;
  console.log(previousGroup);
  console.log('======================================');

  console.log('======================================');
  currentGroup = [];
  console.log(currentGroup);
  console.log('======================================');

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
