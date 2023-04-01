const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(`Server IP address: ${req.socket.localAddress}\n`);
  res.write(`Server hostname: ${req.headers.host}\n`);
  res.write(`Application version: 1.0.0\n`);
  res.end();
});

server.listen(3000, () => {
  console.log('Server started on port 3000');
});
