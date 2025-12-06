const xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET","sitemap-kami.xml",true);
xmlhttp.send();
const xmlDoc = xmlhttp.responseXML;

// get urls
var urls = xmlDoc.getElementsByTagName("loc");
console.log(urls)