var canvas;
var gameTitle;
var aboutTheGame;
var playTheGame;
var leaderboard;

function preload() {
  gameTitle = loadImage("./assets/2NT.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");

  background(139, 215, 232);
  textSize(32)


  imageMode(CENTER);
  image(gameTitle, windowWidth / 2, windowHeight / 3, gameTitle.width / 6, gameTitle.height / 6);

  aboutTheGame = createP('?');
  aboutTheGame.style('margin-top', "900px");
  // aboutTheGame.style('color', "#415b7e");
  // aboutTheGame.style('font-family', "courier");
  // aboutTheGame.style('font-size', "80px");
  // aboutTheGame.style('text-align', "center");
  aboutTheGame.touchStarted(clickButtonAbout);


  playTheGame = createP('play');
  playTheGame.touchStarted(clickButtonPlay);

  leaderboard = createP('leaderboard');
  leaderboard.touchStarted(clickButtonLeaderboard);


  var url_string = window.location.href;
  var myUrl = new URL(url_string);
  var array_string = myUrl.searchParams.get("array");
  var myArray = JSON.parse(array_string);
}

function clickButtonAbout() {
  var myUrl = "about.html"
  window.open(myUrl, "_self");
}

function clickButtonPlay() {
  var myUrl = "play.html"
  window.open(myUrl, "_self");
}

function clickButtonLeaderboard() {
  var myUrl = "leaderboard.html" 
  window.open(myUrl, "_self");
}

//fixed screen when you touch it
function touchMoved() {
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
