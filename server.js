var express           = require('express'),
    app               = express(),
    sitemap           = require('./server/modules/sitemap');
    routes            = require('./server/routes/index');
    paths             = require('./server/routes/paths');

var port = process.env.PORT; // 80 é a padrão do http

paths(express, app, __dirname); // Caminhos estáticos
sitemap(app, __dirname);        // Geração de sitemap
routes(app, __dirname);         // Criação de rotas de arquivos

var listener = app.listen(port, function () {
  console.log('Ouvindo na porta ' + listener.address().port);
});
