const http = require('http');

const server = http.createServer(function(req, res){
    if (req.url == '/data') { //check the URL of the current request
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ message: "Hello World"}));  
        res.end();  
}

});
server.listen(2627, function(){
    console.log("listening at 2627")

})