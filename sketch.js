var buttonENTER;
var myImage;
var canvas;

function preload() {
  myImage = loadImage("./assets/enter.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");

  buttonENTER = createP('ENTER');
  buttonENTER.style('margin-top', "150px");
  buttonENTER.style('font-family', "courier");
  buttonENTER.style('font-size', "26px");
  buttonENTER.style('text-align', "center");


  buttonENTER.touchStarted(clickButton);

}

function draw() {
  background("red");
  textSize(32)
  textAlign(CENTER, CENTER);
  text(frameCount, width / 2, height / 2)
  

}


function clickButton() {
  var myUrl = "page2.html" + "?" + "frame=" + frameCount


  window.open(myUrl, "_self");

}
