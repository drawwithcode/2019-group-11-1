var buttonENTER;

function preload(){

}

function setup() {
  createCanvas(windowWidth,windowHeight);


  buttonENTER2 = createP('ENTER');
  buttonENTER2.position(windowWidth/2, 100);
  buttonENTER2.style('font-family', "courier");
  buttonENTER2.touchStarted(clickButton);




}

function draw() {
  background("red");
  textSize(32)
  text(frameCount, width/2, height/2)
}



function clickButton() {
  var myUrl = "page2.html" + "?" + "frame=" + frameCount


  window.open(myUrl, "_self");

}
