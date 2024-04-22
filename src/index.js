

import { dropDownMenu,
        dropDownMenuFromHtml 
        } from './dropdownMenu';

import './style.css';

const menuClickContainer = document.querySelector('#menu-click')
const menuClick = dropDownMenu('Click Menu', menuClickContainer, 'click')
menuClick.newElement('Element 1')
menuClick.newElement('Element 2')
menuClick.newElement('Element 3')

const menuHoverContainer = document.querySelector('#menu-hover')
const menuHover = dropDownMenu('Hover Menu', menuHoverContainer, 'hover')
menuHover.newElement('Element 1')
menuHover.newElement('Element 2')
menuHover.newElement('Element 3')

const menuFromHtml = document.querySelector('#menu-from-html')
dropDownMenuFromHtml(menuFromHtml, 'hover')

