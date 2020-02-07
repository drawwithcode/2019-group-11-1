//-------PLAY

var roomNames = ['mario', 'luigi', 'yoshi', 'peach', 'bowser',
  'pikachu', 'charmander', 'squirtle', 'bulbasaur', 'kirby',
  'donkey kong', 'toad', 'link', 'princess zelda', 'samus',
  'master chief', 'kratos', 'solid snake', 'lara croft', 'ezio auditore',
  'chun-li', 'duke nukem', 'mega man', 'sephiroth', 'cloud strife',
  'rayman', 'spyro', 'crash bandicoot', 'nathan drake', 'sonic the hedgehog',
  'subzero', 'scorpion', 'pacman', 'geralt of rivia', 'vault boy',
  'marcus fenix', 'pyramid head', 'wario', 'waluigi', 'dante',
  'ryu', 'agent 47', 'dovahkiin', 'mewtwo', 'diablo',
  'Z-shaped tetris block', 'paarthurnax', 'tracer', 'sora', 'mickey mouse',
  'sans', 'gordon freeman', 'metal slug', 'leon kennedy', 'creeper'
];

var roomColors = ['red', 'yellow', 'orange', 'blue', 'light blue',
  'pink', 'purple', 'lilac', 'green', 'brown',
  'black', 'white', 'grey', 'azure', 'indigo',
  'aquamarine', 'cobalt', 'magenta', 'periwinkle', 'silver',
  'gold', 'turquoise', 'teal', 'apricot', 'ivory',
  'coral', 'amber', 'amethyst', 'beige', 'orchid',
  'crimson', 'cyan', 'kaki'
];

var yay;
var imageArray = [];

//-----preloading the assets
function preload() {
  //imageArray
  imageArray[0] = loadImage("./assets/rupia.png"); // rupia
  imageArray[1] = loadImage("./assets/triforce.png"); // triforce
  imageArray[2] = loadImage("./assets/twinkle.png"); // star
  imageArray[3] = loadImage("./assets/pokeball.png"); //pokeball

  yay = loadImage("./assets/YAY.png");
}

var socket;

var righe = 4;
var colonne = 4;
var executed = 0;
var grid = new Array(righe);

var xSize;
var ySize;

var clickLimit = 1;

var myVar;

function setup() {
  strokeWeight(4);
  let cnv = createCanvas(640, 640);
  cnv.position((windowWidth / 2) - 320, (windowHeight / 2) - 320);
  //background(moon)

  //-------Create a new connection using socket.io (imported in index.html)
  socket = io();

  // Define which function should be called when a new message
  // comes from the server with type "mouseBroadcast"
  socket.on('mouseBroadcast', newDrawing);
  socket.on('counter', handleCounter);



  xSize = 640 / righe;
  ySize = 640 / colonne;

  stroke(51, 73, 108, 120);
  strokeWeight(4);
  noFill();


  //-------griglia di appoggio per il controllo finale
  for (var i = 0; i < grid.length; i++) {
    grid[i] = new Array(colonne);
    for (var k = 0; k < grid.length; k++) {
      grid[i][k] = 0;
    }
  }

  //-------griglia di quadrati
  for (var i = 0; i < righe; i++) {
    for (var y = 0; y < colonne; y++) {
      //ellipse(data.x, data.y, 20);

      rect(i * xSize, y * ySize, xSize, ySize);

    }
  }


  //-----TIMER
  let minutes = 0;
  let seconds = 0;
  let decseconds = 0;
  var timer = createP('0:00.0');
  timer.id('timer');
  timer.html(minutes + ":" + seconds + "." + decseconds);

  function timeIt() {
    decseconds++;
    timer.html(minutes + ":" + seconds + "." + decseconds);
    if (decseconds >= 9) {
      decseconds -= 9;
      seconds++;
    }
    if (seconds >= 60){
      seconds -= 60;
      minutes++;
    }
  }
  myVar = setInterval(timeIt, 100);
}


//-------Callback function called when a new message comes from the server
//-------Data parameters will contain the received data
function newDrawing(data) {


  console.log('received:', data);
  fillRectangle(data.x, data.y);

}

//Conteggio persone!
function handleCounter(data) {

  document.getElementById("guests").innerHTML = data.count;
  console.log('received:', data);

}

function draw() {
  if (guests.innerHTML = 20){
    image(yay, width / 2, height / 2, yay.width / 5, yay.height / 5);
  }
}


function mouseClicked() {
  //-------create an object containing the mouse position
  var data = {
    x: mouseX,
    y: mouseY
  }

  //-------ONLY ONE CLICK
  if (executed >= clickLimit) {
    //alert("don't you dare!");
    return;
  }

  var ascisse = parseInt(mouseX / xSize);
  var ordinate = parseInt(mouseY / ySize);

  if (grid[ascisse][ordinate] == 1) {
    //alert("Qui hai già cliccato");
    return;
  }


  socket.emit('mouse', data);
  console.log('sending: ', mouseX, mouseY);
  fillRectangle(mouseX, mouseY);
  executed++;
}

function fillRectangle(x, y) {

  //coloring the rectangle
  fill(51, 73, 108, 120);
  stroke(255)

  var ascisse = parseInt(x / xSize);
  var ordinate = parseInt(y / ySize);
  rect(ascisse * xSize, ordinate * ySize, xSize, ySize);
  imageMode(CENTER);
  image(imageArray[Math.floor(random(imageArray.length))], ascisse * xSize + xSize / 2, ordinate * ySize + ySize / 2, xSize / 2, ySize / 2);


  checkCompletition(ascisse, ordinate);

}

//-------controllo che tutti i valori siano a 1
function checkCompletition(x, y) {

  grid[x][y] = 1;

  for (var i = 0; i < grid.length; i++) {
    for (var y = 0; y < grid[i].length; y++) {
      if (grid[i][y] == 0) {
        return;
      }
    }
  }

  //filter(BLUR, 10);
  clearInterval(myVar);
  imageMode(CENTER);
  fill(51, 73, 108, 120);
  rect(0, 0,  640, 640);
  image(yay, width / 2, height / 2, yay.width / 5, yay.height / 5);
  //alert("YAY!");

  //refresh!
  //location.reload();

  //console log with time
  console.log(roomColors[Math.floor(random(roomColors.length))] + " " + roomNames[Math.floor(random(roomNames.length))] + " : " + timer.innerHTML);
}



//-------fixed screen when you touch it
function touchMoved() {
  return false;
}
