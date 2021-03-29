import polyfills from './polyfills';
import './lazyload';
import detectTouch from './detectTouch';
import setScrollbarWidth from './setScrollbarWidth';
import validation from './validation';
import customSelects from './customSelects';
import phoneMask from './phoneMask';
import onlyNumeric from './onlyNumeric';
import fileUpload from './fileUpload';
import intro from './intro';
import introNewsTabs from './introNewsTabs';
import successStories from './successStories';
import hoop from './hoop';
import menu from './menu';
import FixedFooter from './fixedFooter';
import newIntro from './newIntro';
import solutionsIntroSlider from './solutionsIntroSlider';
import solutionHoops from './solutionsHoops';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    setScrollbarWidth();
    validation();
    customSelects();
    phoneMask();
    onlyNumeric();
    fileUpload();
    // intro();
    newIntro();
    introNewsTabs();
    successStories();
    hoop();
    menu();
    solutionsIntroSlider();
    solutionHoops();
    FixedFooter();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 300)
})
