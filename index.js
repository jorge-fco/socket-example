var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

// Connection...
io.on('connection', function(socket){
	console.log('Connected...');

	// Emit message
	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
	});

	//
	socket.on('disconnect', () => {
		console.log('Disconnected...');
	});
});

// HTTP
http.listen(port, function(){
	console.log('Listening on : '+port);
});