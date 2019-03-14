
import cheerio from 'cheerio';
import Html from './Html';
import Inputs from './Inputs';

class Forms extends Html
{
    constructor(formCheerio)
    {
        super(formCheerio);
        this.formCheerio = formCheerio;

    }

    returnInputs(){
        let inputsForm = this.formCheerio.find('input');
        const $ = cheerio.load(inputsForm);

        let inputsGroup = [];
        inputsForm.each( (i,input) => {
            inputsGroup.push(new Inputs($(input)));
        });
        return inputsGroup;
    }

    setFormCheerio(formCheerio)
    {
        this.formCheerio = formCheerio;
    }

    getFormCheerio()
    {
        return this.formCheerio;
    }



}
export default Forms;