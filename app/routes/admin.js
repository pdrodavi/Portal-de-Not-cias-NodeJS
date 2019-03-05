// rota de inserir noticia pro admin
module.exports = function(application){

    // requisição get para pagina de inserção
    application.get('/insertNoticia', function(req, res){
        application.app.controllers.admin.insertNoticia(application, req, res);
    });

    // requisição post para salvar dados
    application.post('/noticias/salvar', function(req, res){
        application.app.controllers.admin.noticiasSalvar(application, req, res);
    });
}

