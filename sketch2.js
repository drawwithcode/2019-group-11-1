var canvas;
var gameTitle;
var aboutTheGame;
var playTheGame;
var leaderboard;

function preload(){
  gameTitle = loadImage("./assets/2NT.png");
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");

  background(139, 215, 232);
  textSize(32)


  imageMode(CENTER);
  image(gameTitle, windowWidth/2, windowHeight/3,gameTitle.width/7, gameTitle.height/7 );


  aboutTheGame = createP('?');
  aboutTheGame.style('margin-top', "850px");
  aboutTheGame.style('color', "#415b7e");
  aboutTheGame.style('font-family', "courier");
  aboutTheGame.style('font-size', "80px");
  aboutTheGame.style('text-align', "center");

  playTheGame = createP('play');
  playTheGame.style('margin-top', "10px");
  playTheGame.style('color', "#415b7e");
  playTheGame.style('font-family', "courier");
  playTheGame.style('font-size', "80px");
  playTheGame.style('text-align', "center");

  leaderboard = createP('leaderboard');
  leaderboard.style('margin-top', "10px");
  leaderboard.style('color', "#415b7e");
  leaderboard.style('font-family', "courier");
  leaderboard.style('font-size', "80px");
  leaderboard.style('text-align', "center");

  var url_string = window.location.href;
  var myUrl = new URL(url_string);
  var array_string = myUrl.searchParams.get("array");
  var myArray = JSON.parse(array_string);
}

function draw() {


}

//fixed screen when you touch it
function touchMoved() {
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
