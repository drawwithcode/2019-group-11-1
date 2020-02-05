//-------INDEX

//-------variables
var buttonENTER;
var logoGDQ;
var canvas;

//-------preloading the assets
function preload() {
  logoGDQ = loadImage("./assets/logogdq.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");

  //-------button ENTER
  buttonENTER = createP('enter');
  buttonENTER.style('margin-top', "1200px");


  buttonENTER.touchStarted(clickButton);

}

function draw() {
  background(139, 215, 232);

  //-------GDQ LOGO in the center
  imageMode(CENTER);
  image(logoGDQ, windowWidth / 2, windowHeight / 2.5, logoGDQ.width / 2, logoGDQ.height / 2);
}

//-------function to open the menu page
function clickButton() {
  var myUrl = "menu.html"
  window.open(myUrl, "_self");
}

//-------fixed screen when you touch it
function touchMoved() {
  return false;
}

//-------function to resize the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
