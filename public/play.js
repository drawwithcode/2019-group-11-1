//PLAY

//variables
var socket;
var playersNumber = 0;

function setup() {


    // Create a new connection using socket.io (imported in index.html)
    socket = io();
    // Define which function should be called when a new message
    // comes from the server with type "mouseBroadcast"
    socket.on('mouseBroadcast', newDrawing)


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



// Callback function called when a new message comes from the server
// Data parameters will contain the received data
function newDrawing(data){
	console.log('received:', data)
	noStroke();
	fill('yellow');
	ellipse(data.x, data.y, 20);

}

function mouseDragged() {
	console.log('sending: ',mouseX, mouseY);
	noStroke();
	fill(255);

	// create an object containing the mouse position
	var data = {
		x: mouseX,
		y: mouseY
	}
	// send the object to server,
	// tag it as "mouse" event
	socket.emit('mouse', data)

	ellipse(mouseX, mouseY, 20)
}



//fixed screen when you touch it
function touchMoved() {
  return false;
}

//function to resize the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
