"use strict";

module.exports = function (app, dirname) {

  var mainRoute     = require('./main'),
      mobileRoute   = require('./mobile');

  mainRoute(app, dirname);
  mobileRoute(app, dirname);

  app.get('*', function (req, res) {
    res.status(404).sendFile(dirname + '/client/views/404.html');
  });
};
