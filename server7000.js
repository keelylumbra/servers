var http = require('http');
var PORT = 7000;




var positives = ["That boob job almost looks real!", "I bet you go to the dentist more than bob does", "You dont look like you ate at golden corral last night!"]
var negatives = ["You got hit with the ugly stick real hard.", "I didnt realize that wasn't a mask!", "Whose your plastic surgeon? I just want to make sure, I don't use him.", "You look like a douchebag. And not a cute one."]




var server = http.createServer(function (request, response){
	response.statusCode = 503;
	var randomNice = positives[Math.floor(positives.length * Math.random())];
	response.end (

		(randomNice + '\n Path Hit: ' + request.url));

});

server.listen (PORT, function(){
	console.log ("server listening on: http://localhost:%s", PORT);
});




var PORT2 = 7500;

var server = http.createServer(function (request, response){
	response.statusCode = 503;
	var randomMean = negatives[Math.floor(negatives.length * Math.random())];
	response.end (


		(randomMean + ' \n Path Hit: ' + request.url));

});

server.listen (PORT2, function(){
	console.log ("server listening on: http://localhost:%s", PORT2);
});