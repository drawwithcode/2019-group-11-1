// load express library
var express = require('express');
// create the app
var app = express();
// define the port where client files will be provided
var port = process.env.PORT || 3000;
// start to listen to that port
var server = app.listen(port);
// provide static access to the files
// in the "public" folder
app.use(express.static('public'));
// load socket library
var socket = require('socket.io');
// create a socket connection
var io = socket(server);
// define which function should be called
// when a new connection is opened from client
io.on('connection', newConnection);
io.on('disconnect', newDisconnect);
// callback function: the paramenter (in this case socket)
// will contain all the information on the new connection

var count = 0;
var $ipsConnected = [];

function newConnection(socket){

	var $ipAddress = socket.handshake.address;
	if (!$ipsConnected.hasOwnProperty($ipAddress)) {
		$ipsConnected[$ipAddress] = 1;
		count++;
		socket.emit('counter', {count:count});
	}

	//when a new connection is created, print its id
	console.log('socket:', socket.id);

	//define what to do on different kind of messages
	socket.on('mouse', mouseMessage);

	function mouseMessage(data){
		socket.broadcast.emit('mouseBroadcast', data);
		console.log(data);
	}


}

function newDisconnect(socket){

  	if ($ipsConnected.hasOwnProperty($ipAddress)) {

  		delete $ipsConnected[$ipAddress];
	    count--;
	    socket.emit('counter', {count:count});

  	}
}

console.log('node server is running');
