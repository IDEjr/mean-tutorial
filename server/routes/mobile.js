"use strict";

module.exports = function (app, dirname) {
  /* Redirecionamento mobile para Google crawl bots
     Como o site já foi feito pensando em mobile, e não uma versão
     especializada para o mesmo, redireciona os links para o index
     tradicional.

     Redirect irá fazer outro get, usando o termo '/', que retornará a resposta
     contida na respectiva definição.
  */
  app.get('/m', function (req, res) {
      res.redirect('/');
  });

  app.get('/mobile', function (req, res) {
      res.redirect('/');
  });

};
