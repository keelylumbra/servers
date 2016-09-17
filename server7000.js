var http = require('http');
var PORT = 7000;

var server = http.createServer(function (request, response){
	response.statusCode = 503;
	response.end ('You are gawgeous! Path Hit: ' + request.url);

});

server.listen (PORT, function(){
	console.log ("server listening on: http://localhost:%s", PORT);
});




var PORT2 = 7500;

var server = http.createServer(function (request, response){
	response.statusCode = 503;
	response.end ('Your butts getting big. Path Hit: ' + request.url);

});

server.listen (PORT2, function(){
	console.log ("server listening on: http://localhost:%s", PORT2);
});