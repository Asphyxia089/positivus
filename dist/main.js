/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function toggleAccordion(element) {\r\n\tconst item = element.parentNode\r\n\tconst content = item.querySelector('.qablock__accordion-content')\r\n\tconst icon = item.querySelector('.qablock__icon')\r\n\r\n\tif (item.classList.contains('active')) {\r\n\t\titem.classList.remove('active')\r\n\t\ticon.src = './img/plusicon.png'\r\n\t} else {\r\n\t\tdocument.querySelectorAll('.accordion-item').forEach(i => {\r\n\t\t\ti.classList.remove('active')\r\n\t\t\ti.querySelector('.qablock__icon').src = './img/plusicon.png'\r\n\t\t})\r\n\r\n\t\tsetTimeout(() => {\r\n\t\t\titem.classList.add('active')\r\n\t\t\ticon.src = './img/minusicon.png'\r\n\t\t}, 10)\r\n\t}\r\n}\r\n\r\nconst iconMenu = document.querySelector('.icon-menu')\r\nconst menuBody = document.querySelector('.menu__body')\r\nif (iconMenu) {\r\n\ticonMenu.addEventListener('click', function (e) {\r\n\t\tdocument.body.classList.toggle('_lock')\r\n\t\ticonMenu.classList.toggle('_active')\r\n\t\tmenuBody.classList.toggle('_active')\r\n\t})\r\n}\r\n\r\nconst menuLinks = document.querySelectorAll('.menu__link[data-goto]')\r\nif (menuLinks.length > 0) {\r\n\tmenuLinks.forEach(menuLinks => {\r\n\t\tmenuLinks.addEventListener('click', onMenuLinkClick)\r\n\t})\r\n\tfunction onMenuLinkClick(e) {\r\n\t\tconst menuLink = e.target\r\n\t\tif (\r\n\t\t\tmenuLink.dataset.goto &&\r\n\t\t\tdocument.querySelector(menuLink.dataset.goto)\r\n\t\t) {\r\n\t\t\tconst gotoBlock = document.querySelector(menuLink.dataset.goto)\r\n\t\t\tconst gotoBlockValue =\r\n\t\t\t\tgotoBlock.getBoundingClientRect().top +\r\n\t\t\t\tscrollY -\r\n\t\t\t\tdocument.querySelector('header').offsetHeight\r\n\r\n\t\t\tif (iconMenu.classList.contains('_active')) {\r\n\t\t\t\tdocument.body.classList.remove('_lock')\r\n\t\t\t\ticonMenu.classList.remove('_active')\r\n\t\t\t\tmenuBody.classList.remove('_active')\r\n\t\t\t}\r\n\t\t\twindow.scrollTo({\r\n\t\t\t\ttop: gotoBlockValue,\r\n\t\t\t\tbehavior: 'smooth',\r\n\t\t\t})\r\n\t\t\te.preventDefault()\r\n\t\t}\r\n\t}\r\n}\r\nif (window.innerWidth <= 1051) {\r\n\tconst slider = document.querySelector('.studiesblock__body')\r\n\tlet isTouching = false\r\n\tlet startX = 0\r\n\tlet scrollLeft = 0\r\n\r\n\tslider.addEventListener('touchstart', e => {\r\n\t\tisTouching = true\r\n\t\tstartX = e.touches[0].pageX\r\n\t\tscrollLeft = slider.scrollLeft\r\n\t})\r\n\r\n\tslider.addEventListener('touchmove', e => {\r\n\t\tif (!isTouching) return\r\n\r\n\t\tconst moveX = e.touches[0].pageX\r\n\t\tconst diffX = startX - moveX\r\n\t\tslider.scrollLeft = scrollLeft + diffX // Прокручиваем слайдер\r\n\t})\r\n\r\n\tslider.addEventListener('touchend', () => {\r\n\t\tisTouching = false\r\n\t})\r\n}\r\n\r\nconst swiper = new Swiper('.swiper', {\r\n\tdirection: 'horizontal',\r\n\tnavigation: {\r\n\t\tnextEl: '.swiper-button-next',\r\n\t\tprevEl: '.swiper-button-prev',\r\n\t},\r\n\tpagination: {\r\n\t\tel: '.swiper-pagination',\r\n\t\tclickable: true,\r\n\t\trenderBullet: function (index, className) {\r\n\t\t\tvar bulletSVGs = [\r\n\t\t\t\t'<path d=\"M11.0099 2.05941L18 0L15.9604 7.0099L18 14L11.0099 11.9604L4 14L6.05941 7.0099L4 0L11.0099 2.05941Z\" fill=\"white\"/>',\r\n\t\t\t\t'<path d=\"M11.0099 2.05941L18 0L15.9604 7.0099L18 14L11.0099 11.9604L4 14L6.05941 7.0099L4 0L11.0099 2.05941Z\" fill=\"white\"/>',\r\n\t\t\t\t'<path d=\"M11.0099 2.05941L18 0L15.9604 7.0099L18 14L11.0099 11.9604L4 14L6.05941 7.0099L4 0L11.0099 2.05941Z\" fill=\"white\"/>',\r\n\t\t\t]\r\n\t\t\treturn (\r\n\t\t\t\t'<span class=\"' +\r\n\t\t\t\tclassName +\r\n\t\t\t\t'\">' +\r\n\t\t\t\t'<svg width=\"20\" height=\"20\">' +\r\n\t\t\t\tbulletSVGs[index] +\r\n\t\t\t\t'</svg>' +\r\n\t\t\t\t'</span>'\r\n\t\t\t)\r\n\t\t},\r\n\t},\r\n})\r\n\n\n//# sourceURL=webpack://positivus/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;