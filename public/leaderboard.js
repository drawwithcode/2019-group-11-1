//-------LEADERBOARD

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");


}

//-------function to resize the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
