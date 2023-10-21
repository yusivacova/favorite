import '@babel/polyfill';
import './index.html';
import './styles/index.scss';

import { createBurgerMenu } from './script/burger';

window.onload = function () {
  createBurgerMenu();
};
