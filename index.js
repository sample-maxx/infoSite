import http from 'http';
import fs from 'fs';
import path from 'path';

const server = http.createServer((req, res) => {
  let filePath = './infoSite/index.html';

  if (req.url === '/about'|| req.url==='/about.html') {
    filePath = './infoSite/about.html';
  }else if (req.url===''||req.url==='/' ||req.url === '/index' || req.url==='/index.html') {
    filePath = './infoSite/index.html';
  } else if (req.url === '/contact'|| req.url==='/contact-me'||req.url==='/contact.html' || req.url==='/contact-me.html') {
    filePath = './infoSite/contact-me.html';
  }else{
    filePath = './404.html';
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('File not found');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});
server.listen(8080, () => {
  console.log('Server running at http://localhost:8080');
});