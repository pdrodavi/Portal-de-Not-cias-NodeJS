// rota para página principal
module.exports = function(application){
    application.get('/', function(req, res){
        application.app.controllers.home.index(application, req, res);
    });
}