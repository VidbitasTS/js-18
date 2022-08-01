import Todof from './Todof.js';
import Appf from './Appf.js';

export default class UIf {
    static createHTML(arrHTML) {
        const length = arrHTML.length;
        let [el, queryEl] = '';

        for (let i = 0; i < length; i++) {
            el = document.createElement(arrHTML[i].tag);
            if (arrHTML[i].dest != '' && arrHTML[i].dest != '.main') {
                queryEl = Todof.mainEl.querySelector(arrHTML[i].dest);
            } else if (arrHTML[i].dest === '.main') queryEl = document.body;

            if (arrHTML[i].methodProp)
                for (const key in arrHTML[i].methodProp[0])
                    el[key] = arrHTML[i].methodProp[0][key];

            queryEl.append(el);
        }
    }
}