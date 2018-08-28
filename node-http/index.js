// require is used to include http module in javascript
const http = require('http');
const fs = require('fs'); // allow to read file sytem
const path = require('path'); // for path in the file system

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req,res) => {
    console.log("Request for " +  req.url  + " by method " + req.method);
    var fileUrl;
    if(req.method == 'GET'){
        if(req.url == '/') 
        {
            fileUrl = '/index.html'
        }
        else{
            fileUrl = req.url;
            }
        var filePath = path.resolve('./public' + fileUrl);
        const fileExt = path.extname(filePath);

        //if file html exist it will take that html file else it will give file not found error
        if(fileExt == '.html'){
            fs.exists(filePath, (exists) => {
                if (!exists){
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    res.end('<html> <body><p>file not found</p></body></html>');
                    return;
                }
                else 
                {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');
                    fs.createReadStream(filePath).pipe(res); //create a stream of byte and send it as response
                }
            } )
        }
        else {
            res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    res.end('<html> <body><p>html file not found</p></body></html>');
                    return;
        }
    }
    else{
        res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    res.end('<html> <body><p>method not supported</p></body></html>');
                    return;
    }
    
})


//server.listen(port, hostname, () => {console.log(`Server running at http://${hostname}:${port}`)});
server.listen(port, hostname, () => {console.log(`Server running at http://${hostname}:${port}`)});