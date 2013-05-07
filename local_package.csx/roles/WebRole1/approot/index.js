var http = require('http');
var url = require('url');

var fs = require('fs');

//Azure specific port address.
var port = process.env.port || 1337;

function start(route){
	function onRequest(req, response){
		var pathname = url.parse(req.url).pathname
	    
	    //For routing.
		//route(pathname, response)

		
		response.writeHead(200, { 'Content-Type': 'text/html' });

	    	//Read index from filesystem.
	    	fs.readFile('./templates/Index.html', 'utf8', function read(error, data) {
	    		if (error) {
	    			throw error;
	    		}

	    		//console.log(data.toString());
	    		response.end(data.toString());
	    	});
	}

	http.createServer(onRequest).listen(port);

	console.log('Ready.');
}

exports.start = start;