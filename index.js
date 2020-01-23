var buttonENTER;
var logoGDQ;
var canvas;

function preload() {
  logoGDQ = loadImage("./assets/logogdq.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");

  buttonENTER = createP('enter');
  buttonENTER.style('margin-top', "1200px");
  buttonENTER.style('color', "#415b7e");
  buttonENTER.style('font-family', "courier");
  buttonENTER.style('font-size', "100px");
  buttonENTER.style('text-align', "center");


  buttonENTER.touchStarted(clickButton);

}

function draw() {
  background(139, 215, 232);

  imageMode(CENTER);
  image(logoGDQ, windowWidth / 2, windowHeight / 2.5, logoGDQ.width / 2, logoGDQ.height / 2);
}


function clickButton() {
  var myUrl = "menu.html" 
  window.open(myUrl, "_self");
}
//fixed screen when you touch it
function touchMoved() {
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
