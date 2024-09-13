const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  proxy.web(req, res, { target: 'http://example.com' }); // Замените на целевой сервер
});

server.listen(8080, () => {
  console.log('Proxy server listening on port 8080');
});