// aplicação principal pra rodar o sistema web

// recuperando configurações do servidor da pasta config e modulo server.js
// start da aplicação
var app = require('./config/server')

// função para subir servidor pra que fique escutando na porta 3000
app.listen(3000, function(){
    // apenas uma mensagem para indicar que o servidor foi subido
    console.log("Servidor ON");
});

