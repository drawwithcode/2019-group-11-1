//-------INDEX

//-------variables
var buttonENTER

function setup() {

  //-------button ENTER
  buttonENTER = createP('enter');
  buttonENTER.touchStarted(clickButton);

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
