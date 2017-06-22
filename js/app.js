'use strict';

//========VARIABLES================================================================
var product1 = '';
var product2 = '';
var product3 = '';
var currentGroup = [];
var previousGroup = [];
var productName = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var productImagesParent = document.getElementById('imageSet');
var maxClicks = 0;
var productMap = {};


// =========FUNCTIONS==============================================================

function startRun() { // generate 3 random products that are non-repeating
  previousGroup = productGenerator(previousGroup);
  console.log(previousGroup);

  renderProductImage(product1);
  renderProductImage(product2);
  renderProductImage(product3);
}

startRun();

function productGenerator(previousGroup) { // generate 3 random products that are non-repeating
  // console.log(previousGroup);
  product1 = generateRandomProduct();
  while (previousGroup.includes(product1)) {
    product1 = generateRandomProduct();
  }
  console.log(product1);
  currentGroup.push(product1);
  // console.log(currentGroup);
  // console.log('======================================');
  product2 = generateRandomProduct();
  while (currentGroup.includes(product2) || previousGroup.includes(product2)) {
    product2 = generateRandomProduct();
  }
  console.log(product2);
  currentGroup.push(product2);
  // console.log(currentGroup);
  // console.log('======================================');
  product3 = generateRandomProduct();
  while (currentGroup.includes(product3) || previousGroup.includes(product3)) {
    product3 = generateRandomProduct();
  }
  console.log(product3);
  currentGroup.push(product3);
  // console.log(currentGroup);
  // console.log('======================================');

  previousGroup = currentGroup;
  // console.log(previousGroup);
  // console.log('======================================');

  // console.log('======================================');
  currentGroup = [];
  // console.log(currentGroup);
  // console.log('======================================');

  // console.log(previousGroup);
  return previousGroup;
}

function generateRandomProduct () {
  var index = Math.floor(Math.random() * productName.length);
  // console.log(index);
  return productName[index];
}

function renderProductImage (productName) {
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
  productMap[productName[i]] = new CreateProducts(productName[i]);
}

function CreateProducts (name) { // object constructor
  this.name = name;
  this.img = 'images/' + name + '.jpg';
  this.timesShown = 0;
  this.timesClicked = 0;
}

productImagesParent.addEventListener ('click', clickHandler);

function clickHandler (event) { // event handler needs to:
  if (maxClicks > 24) {
    productImagesParent.removeEventListener ('click', clickHandler);
  }
  // take click
  for (var i = 0; i < currentGroup.length; i++) { // record timesShown
    currentGroup[i].timesShown++;
  }
  var chosen = event.target.getAttribute('id');
  productMap[chosen].timesClicked++; // and record timesClicked
  productImagesParent.removeChild(productImagesParent.lastChild); // clear imageSet
  productImagesParent.removeChild(productImagesParent.lastChild);
  productImagesParent.removeChild(productImagesParent.lastChild);
  // console.log('======================================');
  // console.log(previousGroup);
  // console.log('======================================');
  startRun(); // call productGenerator for 3 more non-repeating, non-duplicating pics
  // console.log(previousGroup);
  maxClicks++;
  console.log(maxClicks);
}
