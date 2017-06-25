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
var limit = 24;
// var list = document.createElement('ul');


//=========FUNCTIONS==========================================================

function startRun() { // generate 3 random products that are non-repeating
  previousGroup = productGenerator(previousGroup);
  renderProductImage(product1);
  renderProductImage(product2);
  renderProductImage(product3);
}

startRun();

function productGenerator(previousGroup) { // generate 3 random products that are non-repeating
  product1 = generateRandomProduct();
  while (previousGroup.includes(product1)) {
    product1 = generateRandomProduct();
  }
  currentGroup.push(product1);

  product2 = generateRandomProduct();
  while (currentGroup.includes(product2) || previousGroup.includes(product2)) {
    product2 = generateRandomProduct();
  }
  currentGroup.push(product2);

  product3 = generateRandomProduct();
  while (currentGroup.includes(product3) || previousGroup.includes(product3)) {
    product3 = generateRandomProduct();
  }
  currentGroup.push(product3);

  previousGroup = currentGroup;
  return previousGroup;
}

function generateRandomProduct () {
  var index = Math.floor(Math.random() * productName.length);
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

function clickHandler (event) {
  if (maxClicks > limit) {
    // renderList();
    draw();
    displayChart();
    productImagesParent.removeEventListener ('click', clickHandler);
  }

  for (var i = 0; i < currentGroup.length; i++) { // record timesShown
    productMap[currentGroup[i]].timesShown++;
  }

  currentGroup = [];

  var chosen = event.target.getAttribute('id');
  productMap[chosen].timesClicked++; // record timesClicked
  productImagesParent.removeChild(productImagesParent.lastChild); // clear imageSet
  productImagesParent.removeChild(productImagesParent.lastChild);
  productImagesParent.removeChild(productImagesParent.lastChild);

  startRun(); // call productGenerator for 3 more non-repeating, non-duplicating pics
  maxClicks++;
}

// function renderList () {
//   var parentElement = document.getElementById('productList');
//   parentElement.append(list); //set up list
//
//   for (var key in productMap) { //step through array of objects:
//     var prod = productMap[key];
//     prod.name;
//     prod.timesShown;
//     prod.timesClicked;
//     var votes = 'name: ' + prod.name + ' times shown: ' + prod.timesShown + ' times clicked: ' + prod.timesClicked;
//     var item = document.createElement('li');
//     item.textContent = votes;
//     list.appendChild(item);
//   }
// }

// ======attempt at a chart=====================================================
function displayChart () {
  var canvas = document.getElementById('chart');
  var ctx = canvas.getContext('2d');

  for (var key in productMap) { //step through array of objects:
    var prod = productMap[key];
    prod.name;
    prod.timesShown;
    prod.timesClicked;
  }

  // modeled after the demo
  var productChart = new Chart(ctx, {
    type: 'bar', // The type of chart we want to create

    // The data
    data: {
      labels: ['product names', 'times shown'],
      datasets: [{
        label: 'times clicked',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [prod.timesShown, prod.timesClicked],
      }]
    },

    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

function draw() {
  var canvas = document.getElementById('chart');
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#26b7cf';
  ctx.fillRect(10, 10, 20, 100);

  ctx.fillStyle = '#cf2663';
  ctx.fillRect(80, 10, 20, 100);

  ctx.fillText('My string', 10, 100);
}
