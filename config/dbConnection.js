// fazendo require do "conector do banco mysql pro javascript"
var mysql = require('mysql');

// essa configuração permite que o auto-load não execute várias instancias da conexão do banco
var connMySQL = function(){
    // retornando conexão com banco pela função
    return mysql.createConnection({
        host: 'localhost',
        user: 'root', // seu usuário
        password: '', // sua senha do banco aqui
        database: 'portal_noticias' // nome do banco
    });
}

// exportando a função de conexão com o banco
module.exports = function(){
    return connMySQL;
}

// função para verificar se está conectando ao banco
        /*
       connection.connect(function(err){
        if(!err) {
            console.log('Database is connected!');
        } else {
            resp.send(err)
            console.log('Error connecting database!', err);
        }
      });
      */