

import './style.css';

// Dropdown menu examples
import { dropDownMenu,
        dropDownMenuFromHtml 
        } from './dropdownMenu';

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

// Image slider example
import { imageSlider } from './image-slider';

const imgSliderHost = document.querySelector('#image-slider-example')
const imgSlider = imageSlider(imgSliderHost)
import img1 from './img/img1.jpg'
const slide1 = imgSlider.addImage(img1, 'Image 1')
import img2 from './img/img2.jpg'
const slide2 = imgSlider.addImage(img2, 'Image 2')
import img3 from './img/img3.jpg'
const slide3 = imgSlider.addImage(img3, 'Image 3')
import img4 from './img/img4.jpg'
const slide4 = imgSlider.addImage(img4, 'Image 4')

imgSlider.selectImage(slide1)
imgSlider.enableAutoSlide()