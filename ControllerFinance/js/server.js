const express = require('express')
const server = express();

const path = require('path')
server.get('/login', function(req, res) {
       res.sendFile(__dirname + "/login.html");
       // Cria a rota para a page2 do seu site que vai ser quando vc digitar /page1
});

server.get('/index', function(req, res) {
       res.sendFile(__dirname + "index.html");
       // Cria a rota para a page2 do seu site que vai ser quando vc digitar /page2
});
server.get('/EmAberto', function(req, res) {
    res.sendFile(__dirname + "EmAberto.html");
    // Cria a rota para a page2 do seu site que vai ser quando vc digitar /page3
});
server.get('/Pagas', function(req, res) {
    res.sendFile(__dirname + "Pagas.html");
    // Cria a rota para a page2 do seu site que vai ser quando vc digitar /page4
});
server.listen(8084);
console.log('Servidor rodando na porta 8084');