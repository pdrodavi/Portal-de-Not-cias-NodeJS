// classe notícias - pode-ser relacionar a uma classe java ou php

//function funciona como construtor
// variável com underline significa variável interna da classe
function NoticiasDAO(connection){
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
    // consultando noticias no banco
    this._connection.query('select * from noticias', callback);  
}

NoticiasDAO.prototype.getNoticia = function(callback){
    this._connection.query('select * from noticias WHERE id = 2', callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    // pega o json noticia gera uma string que é o conteúdo da notícia 
    //e substitui automatico no ponto de interrogação
    this._connection.query('insert into noticias set ?', noticia, callback);
}

// exportando a classe noticias pra poder usar em outros módulos
module.exports = function(){
    return NoticiasDAO;
}