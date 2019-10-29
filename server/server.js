var http = require('http');
var static = require('node-static');
var file = new static.Server('.', {
  cache: 0
});

function accept(request, response) {
  if (!request.url.startsWith('/data/')) {
    file.serve(request, response);

    return;
  }

  setTimeout(() => {
    file.serve(request, response);
  }, 5000);
}

http.createServer(accept).listen(3000);

console.log('Server running on port 3000');