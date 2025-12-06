'use-strict'
const sm = require('sitemap');
const fs = require('fs');

var sitemap = sm.createSitemap ({
  hostname: 'http://example.com',
  cacheTime: 600000
});
sitemap.add({url: '/page-1/', lastmodISO: '2015-06-27T15:30:00.000Z'});
sitemap.add({url: '/page-2/', changefreq: 'monthly', priority: 0.7});

//sitemap.toXML( function(err, xml){ if (!err){ console.log(xml) } });

fs.writeFileSync("sitemap2.xml",sitemap.toString());