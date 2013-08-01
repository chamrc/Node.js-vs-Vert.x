var vertx = require('vertx');

vertx.createHttpServer().requestHandler(function(req) {
	req.response.write("Hello");
	vertx.setTimer(1000, function() {
		req.response.end("World!");
	});
}).listen(2000, 'localhost');