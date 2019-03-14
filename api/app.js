
import cheerio from 'cheerio';
import WebController from './controllers/WebController'


let url =  "https://gafnar.com";
console.log(`Web: ${url}`);

var web = new WebController(url);

web.view();

//module.exports = app;
