//-------LEADERBOARD

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");


}

//-------fixed screen when you touch it
function touchMoved() {
  return false;
}

//-------function to resize the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
