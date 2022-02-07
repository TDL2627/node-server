const http = require('http');

const server = http.createServer(function(req, res){
res.setHeader("Content-type", "application/json");
res.setHeader("Access-Control-Allow-Origin","*");
res.writeHead(200);

let dataObj = {id:26 ,name : "TDL", email:"tdl2627@gmail.com"};
let data = JSON.stringify(dataObj);
res.end(data);

});
server.listen(2627, function(){
    console.log("listening at 2627")

})