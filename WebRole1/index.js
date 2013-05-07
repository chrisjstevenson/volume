var http = require('http');
var url = require('url');

//Azure specific port address.
var port = process.env.port || 1337;

function start(route){
	function onRequest(req, response){
		var pathname = url.parse(req.url).pathname
	    
	    //For routing.
		route(pathname, response)
	}

	http.createServer(onRequest).listen(port);

	console.log('Ready.');
}

exports.start = start;