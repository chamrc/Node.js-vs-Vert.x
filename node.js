var http = require('http')

var s = http.Server(function (req, res) {
	res.write("Hello")
	setTimeout(function () {
		res.end(" world")
	}, 1000);
});

s.listen(2000);