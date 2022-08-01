import UIf from './UIf.js';
import { htmlDom } from './ArrHTML.js';

export default class Appf {
    constructor() {
        this.todoArr = [];
        this.init(htmlDom);
    }
    init(arrHTML) {
        UIf.createHTML(arrHTML);
        UIf.listener();
    }
}