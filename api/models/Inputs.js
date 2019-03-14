

import Html from './Html';

class Inputs extends Html
{
    constructor(inputCheerio){
        super(inputCheerio);
        this.inputCheerio = inputCheerio;
    }

    isHidden(){
        let inputType = this.returnAttributtes(`type`);
        return (inputType == 'hidden')? true : false;
    }
}
export default Inputs;