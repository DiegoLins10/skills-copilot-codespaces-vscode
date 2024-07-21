// Create web server
// Create a web server that listens to port 3000 and serves the comments.json file. The comments.json file will be created manually, and you can put some comments in it.

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/comments' && req.method === 'GET') {
    const filePath = path.join(__dirname, 'comments.json');
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});