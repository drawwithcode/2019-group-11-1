//-------LEADERBOARD

//-------variables
var buttonBACK;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");

  //-------button BACK
  buttonBACK = createP('< back');
  buttonBACK.id("buttonBACK");
  buttonBACK.touchStarted(clickButton);


}

//-------function to return to the menu page
function clickButton() {
  var myUrl = "menu.html"
  window.open(myUrl, "_self");
}

//-------function to resize the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
