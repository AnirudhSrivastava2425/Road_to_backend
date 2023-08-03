const http= require('http');
const data = require('./data.json');
http.createServer(function(req, res){
    res.writeHead(200, {'content-type': 'application/json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(5000);
console.log(data);