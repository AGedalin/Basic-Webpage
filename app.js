var app = require("express").createServer();

app.get('/', function(req,res){
	res.send('My Simple Page');
});

app.listen(3000);
console.log('Listening on port 3000'); 