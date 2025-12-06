const {XMLParser} = require('fast-xml-parser');
const x = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://pages.github.ibm.com/IBMAoT/i-tdp-architect-kit/</loc><lastmod>2022-12-02</lastmod><changefreq>daily</changefreq></url><url><loc>https://pages.github.ibm.com/IBMAoT/i-tdp-architect-kit/about/authors/</loc><lastmod>2022-12-02</lastmod><changefreq>daily</changefreq></url></urlset>';
const options = {
    ignoreDeclaration: true
};
const parser = new XMLParser(options);
const {urlset: {url}} = parser.parse(x);
console.log(url.map(i => i.loc))