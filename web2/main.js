var http = require('http');
var fs = require('fs');
var app = http.createServer(function (request, response) {
  var url = request.url;
  if (request.url == '/') {
    url = '/index.html';
  }
  if (request.url == '/favicon.ico') {
    response.writeHead(404);
    response.end();
    return;
  }
  response.writeHead(200);
  console.log(__dirname + url); // node.js는 그 경로에 해당하는 파일을 읽고, 
  response.end(fs.readFileSync(__dirname + url));//response.end 어떤 데이터를 입력하느냐에 따라 
  //사용자가 볼 수 있는것을 바꿀수 있다.

});
app.listen(3000);