module.exports.insertNoticia = function(application, req, res){
     // renderiza a página ejs
     res.render("admin/form_add_noticia", { validacao : {}, noticia : {} });
}

module.exports.noticiasSalvar = function(application, req, res){

    // pegando requisição do post pelo req via body > bodyparser implementado no server
    var noticia = req.body;
        
    // VALIDAÇÃO DE CAMPOS - tratamento de campos com express validator
    // parametros > campo que quer validar do input e a mensagem - vem da requisição dos campos
    req.assert('titulo','Título é obrigatório').notEmpty(); // notEmpty - não pode ver vazio 
    req.assert('resumo','Resumo é obrigatório').notEmpty();
    req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10,100); // len informa tamanho do resumo
    req.assert('autor','Nome do Autor é obrigatório').notEmpty();
    req.assert('data_noticia','Data é obrigatória').notEmpty();
    req.assert('noticia','Notícia é obrigatória').notEmpty();
    // caso algum campo não atenda a validação
    var erros = req.validationErrors();
    if(erros){ // se tiver erro
        res.render("admin/form_add_noticia", {validacao: erros, noticia : noticia}); // volta pra pagina noticia informando os erros em json
        return; // return vazio para que o processo seguint não seja executado - funciona como um break
    }
    
    // recuperar conexão com banco
    // recebendo conexão, pois o auto dbConnection retorna uma variavel e o auto-load carrega ela no app
    // sendo possível a recuperação pelo construtor da função dessa classe
    var connection = application.config.dbConnection();
    
    // recuperar o model
    // acessando o modulo noticiasModel da pasta models
    var noticiasDAO = new application.app.models.NoticiasDAO(connection);
    
    // função do model salvar noticia
    noticiasDAO.salvarNoticia(noticia, function(error, result){
        // função callback pra retornar tela de noticias
        res.redirect('/noticias');
    });

}