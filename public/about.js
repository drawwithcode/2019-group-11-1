//ABOUT

//variables
var pokeball;
var buttonBACK;

//preloading the assets
function preload() {
  pokeball = loadImage("./assets/pokeball.png");
}

function setup() {
  //canvas = createCanvas(windowWidth, windowHeight);
  //canvas.position(0, 0);
  //canvas.style("z-index", "-1");

  //background(139, 215, 232);

  //POKEBALL PNG
  imageMode(CENTER);
  image(pokeball, width / 2, 200, 150, 150);


  //button BACK
  buttonBACK = createP('< back');
  buttonBACK.style('margin-top', "60px");
  buttonBACK.style('margin-left', "40px");
  buttonBACK.style('color', "#415b7e");
  buttonBACK.style('font-family', "VT323");
  buttonBACK.style('font-size', "60px");
  buttonBACK.style('font-style', "italic");
  buttonBACK.style('text-align', "left");

  buttonBACK.touchStarted(clickButton);






  // var url_string = window.location.href;
  // var myUrl = new URL(url_string);
  // var array_string = myUrl.searchParams.get("array");
  // var myArray = JSON.parse(array_string);
}

//function to return to the menu page
function clickButton() {
  var myUrl = "menu.html"
  window.open(myUrl, "_self");
}



// //fixed screen when you touch it
// function touchMoved() {
//   return false;
// }

//function to resize the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
