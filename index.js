//importing node framework
var express = require('express');
 
var app = express();


app.set('port',(process.env.PORT || 8000));

//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send('hello how are you');
});

//listen to port 3000 by default
app.listen(app.get('port'),function(){
	console.log("node app is running on port " , app.get('port'))
});
 
module.exports = app;