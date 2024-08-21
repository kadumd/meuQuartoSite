const http = require('http');
const fs = require('fs');
const path = require('path');
const portaDeEntrada = process.env.PORT || 3000;


const servidor = http.createServer((pedido, resposta) => {
    console.log(pedido.url)
    if (pedido.url === '/') {
        fs.readFile('frontend/view/index.html', (erro, dadosDoArquivo) => {
            if (erro) {
                console.log(erro)
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Erro no servidor!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/html' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    if (pedido.url === '/mangas') {
        fs.readFile('frontend/view/mangas.html', (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Erro no servidor!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/html' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    if (pedido.url === '/filmes') {
        fs.readFile('frontend/view/filmes.html', (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Erro no servidor!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/html' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    if (pedido.url === '/css/index.css') {
        fs.readFile('frontend/view/css/index.css', (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Erro no servidor!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/css' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    if (pedido.url === '/css/mangas.css') {
        fs.readFile('frontend/view/css/mangas.css', (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Erro no servidor!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/css' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    if (pedido.url === '/css/filmes.css') {
        fs.readFile('frontend/view/css/filmes.css', (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Erro no servidor!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/css' });
            resposta.end(dadosDoArquivo);
            return
        })
    }

    if (pedido.url === '/js/mangas.js') {
        fs.readFile('frontend/view/js/mangas.js', (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Erro no servidor!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/javascript' });
            resposta.end(dadosDoArquivo);
            return
        })
    }

    if (pedido.url === '/database/listaDeAnimes.json') {
        console.log("oi")
        fs.readFile('database/listaDeAnimes.json', (erro, dadosDoArquivo) => {
            if (erro) {
                console.log(erro)
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Erro no servidor!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'application/json' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
});

servidor.listen(portaDeEntrada, "0.0.0.0");