//------INSTRUCTIONS


var goToTheRoom;

function setup(){

//-------GO TO THE ROOM BUTTON
goToTheRoom = createP("go to the room!");
goToTheRoom.id("gototheroom");
goToTheRoom.touchStarted(clickButtonPlay);
}

//-------FUNCTION TO OPEN THE LEADERBOARD PAGE
function clickButtonPlay() {
  var myUrl = "play.html"
  window.open(myUrl, "_self");
}

//-------fixed screen when you touch it
function touchMoved() {
  return false;
}
