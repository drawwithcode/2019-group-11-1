//PLAY

//variables
var playersNumber = 0;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");

  background(139, 215, 232);










  // var url_string = window.location.href;
  // var myUrl = new URL(url_string);
  // var array_string = myUrl.searchParams.get("array");
  // var myArray = JSON.parse(array_string);
}


function draw(){
  background(139, 215, 232);
  textAlign(CENTER,CENTER);
  textFont('courier');
  textSize(40);
  fill(65,91,126);
  text(playersNumber + "/20",windowWidth/2 ,windowHeight/2);
}







//fixed screen when you touch it
function touchMoved() {
  return false;
}

//function to resize the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
