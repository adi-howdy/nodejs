const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3000;

//application gonna use express
const app = express();
//app.use(morgan('dev'));
app.use(bodyParser.json());

app.all('/dishes', (req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next(); // it will look for additional information
            // which will match for ./dishes ie to get and post
            // give below
});

app.get('/dishes', (req,res,next) => {
    res.end('sedndishes to you'); 
});


app.post('/dishes', (req,res,next) => {
    res.end( 'will add dish ' + req.body.name + ' with details ' + req.body.description); 
});


app.put('/dishes', (req,res,next) => {
    res.statusCode = 403;
    res.end('put not supported'); 
});

app.delete('/dishes', (req,res,next) => {
    res.end( 'Deleting all the dishes'); 
});


app.get('/dishes/:dishId', (req,res,next) => {
    res.end('sedndishes to you' + req.params.dishId); 
});


app.post('/dishes/:dishId', (req,res,next) => {
    res.statusCode = 403;
    res.end('put not supported' + req.params.dishId);
});


app.put('/dishes/:dishId', (req,res,next) => {
   res.write('updating the dish' + req.params.dishId);
    res.end('update ' + req.body.name + req.body.description); 
});

app.delete('/dishes/:dishId', (req,res,next) => {
    res.end( 'Deleting all the dishes' + req.param.dishId); 
});

//root folder to start with for express
app.use(express.static(__dirname+ '/public')); 


app.use((req,res,next) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>tq</h1></body></html>');
})

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server runing at http:\\${hostname}:${port}`);
})