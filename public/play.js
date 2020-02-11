//-------PLAY

//-------rooms arrays
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

//-------grid variables
var rows = 4;
var columns = 4;
var executed = 0;
var grid = new Array(rows);

//-------rects dimensions variables
var xSize;
var ySize;

var clickLimit = 1;

//-------timer variables
var timeVar;

var showTime = 0;

let minutes = 0;
let seconds = 0;
let decseconds = 0;

//-------canvas creation
function setup() {
  strokeWeight(4);
  let cnv = createCanvas(640, 640);
  cnv.position((windowWidth / 2) - 320, (windowHeight / 2) - 320);


  //-------Create a new connection using socket.io (imported in index.html)
  socket = io();

  // Define which function should be called when a new message
  // comes from the server with type "mouseBroadcast"
  socket.on('mouseBroadcast', newClick);
  socket.on('counter', handleCounter);



  xSize = 640 / rows;
  ySize = 640 / columns;

  stroke(51, 73, 108, 120);
  strokeWeight(4);
  noFill();


  //-------initialize the array, check that every value is marked "0"
  for (var i = 0; i < grid.length; i++) {
    grid[i] = new Array(columns);
    for (var k = 0; k < grid.length; k++) {
      grid[i][k] = 0;
    }
  }

  //-------square grid
  for (var i = 0; i < rows; i++) {
    for (var y = 0; y < columns; y++) {

      rect(i * xSize, y * ySize, xSize, ySize);
    }
  }
}


//-------newClick function called when a new message comes from the server
function newClick(data) {

  console.log('received:', data);
  fillRectangle(data.x, data.y);

}

//-------count connections number
function handleCounter(data) {

  document.getElementById("guests").innerHTML = data.count;
  console.log('received:', data);
  //test to verify number of connections
  if (data.count == 16) {
     //
  }

}

//-------create the "action" to emit datas
function mouseClicked() {
  //-------create an object containing the mouse position
  var data = {
    x: mouseX,
    y: mouseY
  }

  //-------only one click
  if (executed >= clickLimit) {
    //alert("Only one!");
    return;
  }

  var axis = parseInt(mouseX / xSize);
  var ordinates = parseInt(mouseY / ySize);

  if (grid[axis][ordinates] == 1) {
    //alert("Already Clicked!");
    return;
  }

  socket.emit('mouse', data);
  console.log('sending: ', mouseX, mouseY);
  fillRectangle(mouseX, mouseY);
  executed++;
}

//-------fill a square according to emitted data
function fillRectangle(x, y) {


 function timeIt() {
   decseconds++;
    if (decseconds >= 9) {
      decseconds -= 9;
      seconds++;
    }
    if (seconds >= 60){
      seconds -= 60;
      minutes++;
    }

	document.getElementById("timer").innerHTML = minutes + ":" + seconds + "." + decseconds;
  }

	//-------first iteration, time starts
	if(showTime == 0){
		showTime = 1;
		timeVar = setInterval(timeIt, 100);
		document.getElementById("timer").style.display = "block";
	}

  //-------coloring the rectangle
  fill(51, 73, 108, 120);
  stroke(255)

  var axis = parseInt(x / xSize);
  var ordinates = parseInt(y / ySize);
  rect(axis * xSize, ordinates * ySize, xSize, ySize);
  imageMode(CENTER);
  image(imageArray[Math.floor(random(imageArray.length))], axis * xSize + xSize / 2, ordinates * ySize + ySize / 2, xSize / 2, ySize / 2);


  checkCompletition(axis, ordinates);

}

//-------check that all values are marked "1"
function checkCompletition(x, y) {

  grid[x][y] = 1;

  for (var i = 0; i < grid.length; i++) {
    for (var y = 0; y < grid[i].length; y++) {
      if (grid[i][y] == 0) {
        return;
      }
    }
  }
  //-------time stops
  clearInterval(timeVar);
  imageMode(CENTER);
  fill(51, 73, 108, 120);
  rect(0, 0,  640, 640);
  //alert("YAY!");
  image(yay, width / 2, height / 2, yay.width / 5, yay.height / 5);


  //refresh!
  //location.reload();

  //console log with time + random room
  console.log(roomColors[Math.floor(random(roomColors.length))] + " " + roomNames[Math.floor(random(roomNames.length))] + " : " + timer.innerHTML);
}



//-------fixed screen when you touch it
function touchMoved() {
  return false;
}
