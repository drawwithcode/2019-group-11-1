

function preload() {

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");

  background(139, 215, 232);
  ellipseMode(CENTER);
  ellipse( width/2, height/2, 100, 100);


  var url_string = window.location.href;
  var myUrl = new URL(url_string);
  var array_string = myUrl.searchParams.get("array");
  var myArray = JSON.parse(array_string);
}



//fixed screen when you touch it
function touchMoved() {
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
