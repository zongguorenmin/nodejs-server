const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    fs.readFile('./index.html', (err, data) => {
      if (err) {
        //500エラー: index.htmlの読み込みに失敗した場合
        fs.readFile('./500.html', (err500, data500) => {
          if (err500) {
            // 500.html自体も読み込めない場合は、プレーンテキストを返す
            res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('サーバーエラー');
          } else {
            res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(data500);
          }
        });
      }
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    });
  } else if (req.url === '/about.html') {
    fs.readFile('./about.html', (err, data) => {
      if (err) {
        //500エラー: index.htmlの読み込みに失敗した場合
        fs.readFile('./500.html', (err500, data500) => {
          if (err500) {
            // 500.html自体も読み込めない場合は、プレーンテキストを返す
            res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('サーバーエラー');
          } else {
            res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(data500);
          }
        });
      }
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('ページが見つかりません');
  }
});

server.listen(3000, () => {
  console.log('http://localhost:3000 にアクセスしてみよう');
});