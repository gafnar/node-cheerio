import cheerio from 'cheerio'

class Html
{
    constructor(htmlCheerio) {
        this.htmlCheerio = htmlCheerio;
    }

    returnAttributtes(nameAttribute){
        nameAttribute = (typeof(nameAttribute)!==`undefined` )? nameAttribute : ``;
        let attributesFind = this.htmlCheerio.attr(nameAttribute);
        return (typeof(attributesFind) !== `undefined`)? attributesFind : false;
    }

    setAttributtes(nameAttribute,valueAttribute){
        this.htmlCheerio.attr(nameAttribute,valueAttribute);
    }

    getHtmlCheerio(){
        return this.htmlCheerio;
    }

    setHtmlCheerio(htmlCheerio) {
        this.htmlCheerio = htmlCheerio;
    }
}
export default Html;