import request from 'request';
import cheerio from 'cheerio';
import Q from 'q';
import Forms from '../models/Forms';
import { URL } from 'url';

class WebController
{

    constructor(webUrl)
    {
        this.webUrl = webUrl;
        this.urlClass = new URL(webUrl);
        this.urlView = [];
    }



    view()
    {
        let self = this;

        let req = request.defaults({
            jar: true,
            rejectUnauthorized: false,
            followAllRedirects: true
        });

        req.get({
            url:this.webUrl,
            headers:{
            }
        }
        ,(err, resp, html) => {
            if (!err)
            {
                const $ = cheerio.load(html);

                let formsCheerio = $('form');
                formsCheerio.each((i,form) => {
                    let formCheerio = new Forms($(form));
                    let method = formCheerio.returnAttributtes(`method`);
                    let action = formCheerio.returnAttributtes(`action`);
                    let inputs = formCheerio.returnInputs();
                    let requestInputs = [];
                    let jsonData = {};
                    for(let i = 0;i<inputs.length;i++){
                        let name = inputs[i].returnAttributtes(`name`);
                        jsonData[name] = inputs[i].returnAttributtes(`value`);
                    }
                    let urlReg = new RegExp('^((https?|ftp):\/\/(www\.)?\w*)');
                    if(!urlReg.test(action))
                        action = this.urlClass.origin + action;


                    req({
                        method: method,
                        url: action,
                        form: jsonData,
                        jar: "true",
                        followAllRedirects: true
                      }, (error, response, body) => {

                            try{
                                let errors = $(body).find('.help-inline');
                                errors.each((i,error) => {
                                    console.log($(error).text());
                                });
                            }catch(error){
                                let buff = Buffer.from(body, 'base64');
                                let base64data = buff.toString('base64');
                                let text = buff.toString('ascii');
                                console.log(base64data);
                                console.log(text);
                            }
                      });
                      //return false;

                });

            }
        });
    }

    urlValid(){

    }
}


export default WebController;