"use strict";

module.exports = function (app, dirname) {

  app.get('/', function (req, res) {
    res.sendFile(dirname + '/client/views/index.html');
  });

  app.get('/exemplo', function (req, res) {
    res.sendFile(dirname + '/client/views/exemplo.html');
  });

};
