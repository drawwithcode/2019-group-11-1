function preload(){
  
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  // put setup code here


}

function draw() {
  // put drawing code here
  background("red");
  textSize(32)
  text(frameCount, width/2, height/2)
}

var myArray = [1,2,3,"hello!"];

function mouseClicked() { //vanilla javascript interaction
  var myUrl = "page2.html" + "?" + "frame=" + frameCount
  //myUrl =+ "&" + "array" + "=" + JSON.stringify(myArray); //+=  ---> means adding

  window.open(myUrl, "_self");

}
