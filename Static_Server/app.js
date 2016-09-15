// Requires \\

var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');

// Create Express App Object \\

var app = express();

// Application Configuration \\

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/Public'));

// Routes \\
                                                     // Part II
// app.get('/', function(req, res){                  //synchronous - BAD
//   var fileContents = fs.readFileSync('data.txt');
//   res.header('Content-Type', 'text/html');
//   res.send(fileContents);
// });
                                                    // Part III
app.get('/', function(req, res) {                   //asynchronous - GOOD
    fs.readFile('data.txt', function(err,data){
        res.header('Content-Type', 'text/html');    //executed AFTER the file is read.
        res.send(data);
    })
});
                                                    // Bonus
app.get('/:filename', function(req, res) {
    fs.readFile('./Public/' + req.params.filename, function(err,contents){
        res.header('Content-Type', 'text/html');
        res.send(contents);
    })
});

/*If you are having trouble with callbacks/asynchronous code, rember the golden rule of asynchronous programming:
Anything that depends on the result of an asynchronous call must go inside the callback.
Code that comes after the asynchronous call is executed before the callback.

$ Success! So what's different? This time we utilized the asynchronous nature of node by passing a callback to the readFile function.
This allows our code to move along normally without being blocked.
Once the file has been loaded and the content is ready, node will invoke our callback
and allow us to continue on with sending content back to the server. */

// Creating Server and Listening for Connections \\


var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);
})

//paramaterizing a route:
// ''/:filename' paramaterizing a route , whatever you put after slash, save it on a vairable called rec.params,
// then we are able to serve up that file if we need to.
