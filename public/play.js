//PLAY

function preload() {
  //no = loadImage("./assets/no.png");
  moon = loadImage("./assets/moon.png")
  star = loadImage("./assets/twinkle.png")
}

var socket;

var righe = 4;
var colonne = 5;
var executed = 0;
var grid = new Array(righe);

function setup() {


  let cnv = createCanvas(640, 800);
  cnv.position((windowWidth / 2) - 400, (windowHeight / 2) - 400);
  //background(moon)
  // Create a new connection using socket.io (imported in index.html)
  socket = io();
  // Define which function should be called when a new message
  // comes from the server with type "mouseBroadcast"
  socket.on('mouseBroadcast', newDrawing);


  var xSize = 640 / righe;
  var ySize = 800 / colonne;

  stroke(255);
  strokeWeight(2)
  noFill()


  //griglia di appoggio per il controllo finale
  for (var i = 0; i < grid.length; i++) {
    grid[i] = new Array(colonne);
    for (var k = 0; k < grid.length; k++) {
      grid[i][k] = 0;
    }
  }

  //griglia di quadrati
  for (var i = 0; i < righe; i++) {
    for (var y = 0; y < colonne; y++) {

      rect(i * xSize, y * ySize, xSize, ySize);

    }
  }
}

function draw() {

}

// Callback function called when a new message comes from the server
// Data parameters will contain the received data
function newDrawing(data) {

  //POSIZIONE SBAGLIATA MA GRADIENTI INTERESSANTI
  // stroke(255);
  // strokeWeight(2)
  // noFill()


  console.log('received:', data);
  fillRectangle(data.x, data.y);

}


function mouseClicked() {

  // create an object containing the mouse position
  var data = {
    x: mouseX,
    y: mouseY
  }

  // ONLY ONE CLICK (non so perchè non funzioni con altri numeri)

  if (executed == 1) {
    alert("don't you dare!");

    return;
  }

  socket.emit('mouse', data);
  console.log('sending: ', mouseX, mouseY);

  fillRectangle(mouseX, mouseY)
  executed = 1;
}

function fillRectangle(x, y) {

  var xSize = 640 / righe;
  var ySize = 800 / colonne;

  //coloring the rectangle
  fill(255, 20, 147);
  stroke(255)

  var ascisse = parseInt(x / xSize);
  var ordinate = parseInt(y / ySize);
  rect(ascisse * xSize, ordinate * ySize, xSize, ySize);

  checkCompletition(ascisse, ordinate);
}

//controllo che tutti i valori siano a 1
function checkCompletition(x, y) {

  grid[x][y] = 1;

  for (var i = 0; i < grid.length; i++) {
    for (var y = 0; y < grid[i].length; y++) {
      if (grid[i][y] == 0) {
        return;
      }
    }
  }

  filter(BLUR, 10);
  imageMode(CENTER);
  //image(star, width / 2, height / 2, 200, 200)
  alert("Task Completed");

  //refresh!
  //location.reload();
}


//fixed screen when you touch it
function touchMoved() {
  return false;
}
