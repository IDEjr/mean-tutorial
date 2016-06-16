"use strict";

module.exports = function (express, app, dirname) {

  /* Caminhos estáticos */
  app.use('/css',         express.static(dirname + '/client/css'));
  app.use('/js',          express.static(dirname + '/client/js'));
  app.use('/img',         express.static(dirname + '/client/img'));
  app.use('/favicon.ico', express.static(dirname + '/client/img/logo/favicon.ico'));

};
