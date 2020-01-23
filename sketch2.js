function preload(){
  // put preload code here
}

var startingFrame;

function setup() {
  createCanvas(windowWidth,windowHeight)
  // put setup code here
  var url_string = window.location.href;
  var myUrl = new URL(url_string);
  startingFrame = Number(myUrl.searchParams.get("frame")); //string converted in a number

  var array_string = myUrl.searchParams.get("array");
  var myArray = JSON.parse(array_string);
}

function draw() {
  // put drawing code here
  background("blue");
  textSize(32)
  text(frameCount + startingFrame, width/2, height/2)
}
