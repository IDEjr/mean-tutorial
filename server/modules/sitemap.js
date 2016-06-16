"use strict";
/*
	Modulo que usa o node_module sitemap para gerar um sitemap dinâmico na hora, levando em consideração as últimas atualizações,
	para o crawler dos buscadores não necessitarem reindexar o mesmo arquivo sem alterações.
*/

module.exports = function (app, dirname) {
	var sm = require("sitemap");

	var sitemap = sm.createSitemap ({
		  hostname: 'http://exemplo.com.br',
		  cacheTime: 600000,        // 600 sec - cache purge period
		  urls: [
			{ url: '/',  						changefreq: 'daily',  priority: 1,   lastmodrealtime: true, lastmodfile: dirname + '/client/views/index.html'			},
			{ url: '/exemplo/', 		changefreq: 'daily',  priority: 0.7, lastmodrealtime: true, lastmodfile: dirname + '/client/views/exemplo.html'		}
			]
		});

	app.get('/sitemap.xml', function(req, res) {
	  sitemap.toXML( function (err, xml) {
		  if (err) {
				return res.status(500).end();
		  }

		  res.header('Content-Type', 'application/xml');
		  res.send(xml);
	  });
	});
};
