module.exports.noticias = function(application, req, resp){

    // recebendo conexão, pois o auto dbConnection retorna uma variavel e o auto-load carrega ela no app
    // sendo possível a recuperação pelo construtor da função dessa classe
    var connection = application.config.dbConnection();

    // acessando o modulo noticiasModel da pasta models
    var noticiasDAO = new application.app.models.NoticiasDAO(connection);
        
    // usando o get do noticias model
    noticiasDAO.getNoticias(function(error, result){
    // passando para a view noticias com a variavel noticias o result
        resp.render("noticias/noticias", {noticias: result})
    });

}

module.exports.noticia = function(application, req, resp){

    // recebendo conexão, pois o auto dbConnection retorna uma variavel e o auto-load carrega ela no app
    // sendo possível a recuperação pelo construtor da função dessa classe
    var connection = application.config.dbConnection();

    // acessando o modulo noticiasModel da pasta models
    var noticiasDAO = new application.app.models.NoticiasDAO(connection);

    // usando o get do noticias model
    noticiasDAO.getNoticia(function(error, result){
        // passando para a view noticias com a variavel noticias o result
        resp.render("noticias/noticia", {noticia: result})
    }); 
    
}