var button2;

function preload(){

}

function setup() {
  createCanvas(windowWidth,windowHeight)
  button2 = createButton("hello")
button2.touchStarted(clickButton);
button2.style('background-color', "gold");
button2.position(windowWidth/2, 87);
  // put setup code here


}

function draw() {
  // put drawing code here
  background("red");
  textSize(32)
  text(frameCount, width/2, height/2)
}



function clickButton() {
  var myUrl = "page2.html" + "?" + "frame=" + frameCount


  window.open(myUrl, "_self");

}
