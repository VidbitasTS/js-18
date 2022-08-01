'use strict';

import Appf from './class/Appf.js';
import Todof from './class/Todof.js';
import UIf from './class/UIf.js';
import { htmlDom } from './class/ArrHTML.js';
//console.log(htmlDom);

const appf = new Appf();
//const uif = new UIf();
//uif.createHTML(htmlDom);

appf.createHTML(htmlDom);