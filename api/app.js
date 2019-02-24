
import cheerio from 'cheerio';
import WebController from './controllers/WebController'


let url =  "https://www.alcampo.es/compra-online/register";
//let url =  "http://www.whatsmyipaddress.net";
console.log(`Web: ${url}`);

var web = new WebController(url);

web.view();

//module.exports = app;
