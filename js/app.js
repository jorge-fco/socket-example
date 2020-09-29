/*!
	Jorge Fco.
	2020
*/
var Chat = function(){
	//
	var socket = io();

	//
	var SendMessage = function(){
		$('form').submit(function(event){
			event.preventDefault();

			// Get value
			var _value = $('#message').val();

			// Emit value
			socket.emit('chat message', _value);

			// Clean input
			$('#message').val('');

			return false;
		});

		// Show message...
		socket.on('chat message', function(msg){
			$('#messages').append($('<li>').text(msg));
		});
	}

	return{
		init: function(){
			SendMessage();
		}
	};
}();

// Run...
Chat.init();