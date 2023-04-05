function ProductIdea(productName, filepath) {
  this.productName = productName;
  this.filePath = filepath;
  this.timesShown = 0;
  this.timesClicked = 0;
  // this.clicks = 0;
}
// Creating the constructor function

let productArr = [];
// let clicks = 0;
// let maxClicks = 25;
// creating an empty array to store the objects of my constructor function

let bag = new ProductIdea("bag", "images/bag.jpg");
let banana = new ProductIdea("banana", "images/banana.jpg");
let bathroom = new ProductIdea("bathroom", "images/bathroom.jpg");
let boots = new ProductIdea("boots", "images/boots.jpg");
let breakfast = new ProductIdea("breakfast", "images/breakfast.jpg");
let bubblegum = new ProductIdea("bubblegum", "images/bubblegum.jpg");
let chair = new ProductIdea("chair", "images/chair.jpg");
let cthulhu = new ProductIdea("cthulhu", "images/cthulhu.jpg");
let dogDuck = new ProductIdea("dog-duck", "images/dog-duck.jpg");
let dragon = new ProductIdea("dragon", "images/dragon.jpg");
let pen = new ProductIdea("pen", "images/pen.jpg");
let petSweep = new ProductIdea("pet-sweep", "images/pet-sweep.jpg");
let scissors = new ProductIdea("scissors", "images/scissors.jpg");
let shark = new ProductIdea("shark", "images/shark.jpg");
let sweep = new ProductIdea("sweep", "images/sweep.png");
let tauntaun = new ProductIdea("tauntaun", "images/tauntaun.jpg");
let unicorn = new ProductIdea("unicorn", "images/unicorn.jpg");
let waterCan = new ProductIdea("watercan", "images/water-can.jpg");
let wineGlass = new ProductIdea("wineglass", "images/wine-glass.jpg");
// Creating objects for the images with my constructor

productArr.push(bag);
productArr.push(banana);
productArr.push(bathroom);
productArr.push(boots);
productArr.push(breakfast);
productArr.push(bubblegum);
productArr.push(chair);
productArr.push(cthulhu);
productArr.push(dogDuck);
productArr.push(dragon);
productArr.push(pen);
productArr.push(petSweep);
productArr.push(scissors);
productArr.push(shark);
productArr.push(sweep);
productArr.push(tauntaun);
productArr.push(unicorn);
productArr.push(waterCan);
productArr.push(wineGlass);
// pushing the objects I just created into my empty array named productArr

function getRandomProducts(products) {
  let randomProducts = []; // creating a Random array where my 3 random images will be stored
  let randomIndex1 = Math.floor(Math.random() * productArr.length); // making an equation that will select a random image from the productArr
  let randomIndex2 = Math.floor(Math.random() * productArr.length); // making an equation that will select a random image from the productArr
  let randomIndex3 = Math.floor(Math.random() * productArr.length); // making an equation that will select a random image from the productArr

  while (randomIndex1 === randomIndex2 || randomIndex1 === randomIndex3) {
    // Creating a while loop so that images won't repeat
    randomIndex1 = Math.floor(Math.random() * productArr.length);
    randomIndex2 = Math.floor(Math.random() * productArr.length);
    randomIndex3 = Math.floor(Math.random() * productArr.length);
  }

  let randomProduct1 = products[randomIndex1]; //
  let randomProduct2 = products[randomIndex2];
  let randomProduct3 = products[randomIndex3];

  randomProducts.push(randomProduct1); // Pushing the results into the randomProducts array
  randomProducts.push(randomProduct2);
  randomProducts.push(randomProduct3);

  return randomProducts; // stating what I want to see when the function is done, which is what gets pushed into the empty array.
}
let randomProducts = getRandomProducts(productArr); // setting a variable to have a value of the function that generates a random product


function eventTracker(event){
    console.log("event", event.target)
  for(let i = 0; i < productArr.length; i++){
    if (productArr[i].productName === event.target.productName){
      
    }

  }

    let randomProducts = getRandomProducts(productArr);
    // while (randomProducts[0].filepath !== randomProducts[1].filePath || randomProducts[0].filePath !== randomProducts[2].filePath)
    {
      randomProducts = getRandomProducts(productArr)
    }
    displayProduct(randomProducts[0], "image1");
    displayProduct(randomProducts[1], "image2");
    displayProduct(randomProducts[2], "image3");
  };






let image1HTML = document.getElementById("image1");
image1HTML.addEventListener("click", eventTracker);
let randomProduct = randomProducts[0];
// console.log(randomProducts);

let image2HTML = document.getElementById("image2");
image2HTML.addEventListener("click", eventTracker);

let image3HTML = document.getElementById("image3");
image3HTML.addEventListener("click", eventTracker);

// function capturedClicks() {}

function displayProduct(product, imageTagId) {
  let firstRandomImageFilepath = product.filePath;
  let image = document.getElementById(imageTagId);
  image.productName = product.productName
  image.src = firstRandomImageFilepath;

  product.timesShown = product.timesShown + 1;
  // console.log(product.filePath === product.filePath)
  // console.log("product", product);
  // console.log("product.timesShown", product.timesShown);
  // console.log("product.filePath", product.filePath);
}
// console.log("I'm running for president");

displayProduct(randomProducts[0], "image1");
displayProduct(randomProducts[1], "image2");
displayProduct(randomProducts[2], "image3");

let secondRandomProduct = randomProducts[1];
