var fs = require('fs');

function route(pathname, response){
	console.log('about to route a request for ' + pathname)
	
	switch(pathname){
		case '/':
			//Write the header.
	    	response.writeHead(200, { 'Content-Type': 'text/html' });

	    	//Read index from filesystem.
	    	fs.readFile('./templates/Index.html', 'utf8', function read(error, data) {
	    		if (error) {
	    			throw error;
	    		}

	    		//console.log(data.toString());
	    		response.end(data.toString());
	    	});
	    	break;

	    default:  	

	    	if (/\.(css)$/.test(pathname)){
	    		response.writeHead(200, {'Content-Type': 'text/css'});
	    			fs.readFile('./content/Site.css', 'utf8', function read(error, data) {
    				if (error) {
    					throw error;
    				}
	    				//console.log(data.toString());
    				response.end(data.toString());
    			});
	    		break;
    		}
    		else if (/\.(woff)$/.test(pathname)){
    			response.writeHead(200, {'Content-Type': 'application/x-font-woff'});
	    			fs.readFile('./content/font.woff', function read(error, data) {
    				if (error) {
    					throw error;
    				}
	    				//console.log(data.toString());
    				response.end(data);
    			});
	    		break;
    		}
    		else if (/\.(eot?)$/.test(pathname)){
    			response.writeHead(200, {'Content-Type': 'application/x-font-eot'});
	    			fs.readFile('./content/font.eot', function read(error, data) {
    				if (error) {
    					throw error;
    				}
	    				//console.log(data.toString());
    				response.end(data);
    			});
	    		break;
    		}


    		fs.exists('./templates/' + pathname + '.html', function(exists){
    			if(exists){
    				//Write the header.
	    			response.writeHead(200, { 'Content-Type': 'text/html' });

	    			//Read index from filesystem.
	    			fs.readFile('./templates/' + pathname + '.html', 'utf8', function read(error, data) {
	    				if (error) {
	    					throw error;
	    				}

	    				//console.log(data.toString());
	    				response.end(data.toString());
	    			});
	    	    }
    			else{
    				send404(response);    		
    			}
    		});    		
    	
    		break;
	}

}

function send404(response){
	response.writeHead(404, {'Content-Type': 'text/plain'});
	response.end();
}

exports.route = route;