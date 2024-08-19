const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const serveStaticFile = (filePath, response) => {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            response.writeHead(404);
            response.end('ERRO 404: O ARQUIVO index.html NÃO FOI ENCONTRADO!');
        } 
        else {
            response.writeHead(200);
            response.end(data);
        }
    });
};

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);

    serveStaticFile(filePath, res);
});

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
