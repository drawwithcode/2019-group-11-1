//-------MENU

//variables
var aboutTheGame;
var openInstructions;
var leaderboard;
var linkToSite;

function setup() {

  //-------ABOUT BUTTON
  aboutTheGame = createP('--{ about }--');
  aboutTheGame.style('margin-top', "40px");
  aboutTheGame.touchStarted(clickButtonAbout);

  //-------PLAY BUTTON
  openInstructions = createP('--{ play }--');
  openInstructions.touchStarted(clickButtonInstructions);

  //-------LEADERBOARD BUTTON
  leaderboard = createP('--{ leaderboard }--');
  leaderboard.touchStarted(clickButtonLeaderboard);

  //-------LINK TO SITE BUTTON
  linkToSite = createP('.GDQ website.');
  linkToSite.id('linkToSite');
  linkToSite.touchStarted(clickButtonSite);
}

//-------FUNCTION TO OPEN THE ABOUT PAGE
function clickButtonAbout() {
  var myUrl = "about.html"
  window.open(myUrl, "_self");
}

//-------FUNCTION TO OPEN THE PLAY PAGE
function clickButtonInstructions() {
  var myUrl = "instructions.html"
  window.open(myUrl, "_self");
}

//-------FUNCTION TO OPEN THE LEADERBOARD PAGE
function clickButtonLeaderboard() {
  var myUrl = "leaderboard.html"
  window.open(myUrl, "_self");
}

//-------FUNCTION TO OPEN THE GDQ WEBSITE
function clickButtonSite() {
  var myUrl = "https://gamesdonequick.com/"
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
