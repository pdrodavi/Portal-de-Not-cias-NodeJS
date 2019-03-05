// rota noticias
module.exports = function(application){
      
    // método get para /noticias
    application.get('/noticias', function(req,resp){
        application.app.controllers.noticias.noticias(application, req, resp);
    }); // fechamento da rota

    // método get para /noticias
    application.get('/noticia', function(req,resp){
        application.app.controllers.noticias.noticia(application, req, resp);  
    }); // fechamento da rota
    
}