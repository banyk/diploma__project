/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_chooseClub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/chooseClub */ \"./src/modules/chooseClub.js\");\n/* harmony import */ var _modules_showPopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/showPopup */ \"./src/modules/showPopup.js\");\n/* harmony import */ var _modules_arrowUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/arrowUp */ \"./src/modules/arrowUp.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_sendFormOnPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sendFormOnPage */ \"./src/modules/sendFormOnPage.js\");\n/* harmony import */ var _modules_maskPhone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/maskPhone */ \"./src/modules/maskPhone.js\");\n/* harmony import */ var _modules_validateInputs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/validateInputs */ \"./src/modules/validateInputs.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_mainSlider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/mainSlider */ \"./src/modules/mainSlider.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_chooseClub__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n\r\n(0,_modules_showPopup__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n\r\n(0,_modules_arrowUp__WEBPACK_IMPORTED_MODULE_2__.default)();\r\n\r\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_3__.default)();\r\n\r\n(0,_modules_sendFormOnPage__WEBPACK_IMPORTED_MODULE_4__.default)();\r\n\r\n(0,_modules_maskPhone__WEBPACK_IMPORTED_MODULE_5__.default)('input[type=\"tel\"]');\r\n\r\n(0,_modules_validateInputs__WEBPACK_IMPORTED_MODULE_6__.default)();\r\n\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_7__.default)();\r\n\r\n(0,_modules_mainSlider__WEBPACK_IMPORTED_MODULE_8__.default)();\n\n//# sourceURL=webpack://glo/./src/index.js?");

/***/ }),

/***/ "./src/modules/arrowUp.js":
/*!********************************!*\
  !*** ./src/modules/arrowUp.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst arrowUp = () => {\r\n\twindow.addEventListener('scroll', () => {\r\n\t\tconst offsetTop = window.pageYOffset;\r\n\t\tconst headerMain = document.querySelector('.header-main');\r\n\t\tconst headerOffset = headerMain.offsetHeight;\r\n\t\tconst toTopBtn = document.getElementById('totop');\r\n\r\n\t\tif (offsetTop > headerOffset) {\r\n\t\t\ttoTopBtn.style.display = 'block';\r\n\t\t} else {\r\n\t\t\ttoTopBtn.style.display = 'none';\r\n\t\t}\r\n\t});\r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrowUp);\n\n//# sourceURL=webpack://glo/./src/modules/arrowUp.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = () => {\r\n\r\n\tconst mozaikaPrice = [1990, 9900, 13900, 19900],\r\n\t\tschelkovoPrice = [2999, 14990, 21990, 24990];\r\n\r\n\tconst formOrder = document.getElementById('card_order');\r\n\tconst price = formOrder.querySelector('#price-total');\r\n\tconst promo = formOrder.querySelector('input[name=\"promo\"]');\r\n\tconst months = formOrder.querySelectorAll('div.time>input[type=\"radio\"]');\r\n\tconst mozaika = formOrder.querySelector('#card_leto_mozaika');\r\n\tconst schelkovo = formOrder.querySelector('#card_leto_schelkovo');\r\n\r\n\tconst countPrice = () => {\r\n\t\tif (mozaika.checked) {\r\n\t\t\tmonths.forEach((item, i) => {\r\n\t\t\t\titem.dataset.monthPrice = mozaikaPrice[i];\r\n\t\t\t});\r\n\t\t}\r\n\t\tif (schelkovo.checked) {\r\n\t\t\tmonths.forEach((item, i) => {\r\n\t\t\t\titem.dataset.monthPrice = schelkovoPrice[i];\r\n\t\t\t});\r\n\t\t}\r\n\r\n\t\tlet value;\r\n\t\tmonths.forEach((radio, i) => {\r\n\t\t\tif (radio.checked) {\r\n\t\t\t\tvalue = radio.getAttribute('data-month-price');\r\n\t\t\t}\r\n\t\t});\r\n\r\n\t\tif (promo.value === 'ТЕЛО2019') {\r\n\t\t\tprice.textContent = Math.floor(value * (1 - 30 / 100));\r\n\t\t} else {\r\n\t\t\tprice.textContent = value;\r\n\t\t}\r\n\r\n\t};\r\n\r\n\tformOrder.addEventListener('input', event => {\r\n\t\tconst target = event.target;\r\n\r\n\t\tif (target.matches('input[type=\"radio\"]') || target.matches('input[name=\"promo\"]')) {\r\n\t\t\ttry {\r\n\t\t\t\tcountPrice();\r\n\t\t\t} catch (e) {\r\n\t\t\t\tconsole.log('Ошибка:', e);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\r\n\t});\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://glo/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/chooseClub.js":
/*!***********************************!*\
  !*** ./src/modules/chooseClub.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst chooseClub = () => {\r\n\r\n\tdocument.addEventListener('click', event => {\r\n\t\tconst target = event.target;\r\n\t\tconst clubSelect = target.closest('.club-select'),\r\n\t\t\tclubList = document.querySelector('.clubs-list>ul');\r\n\t\tif (clubSelect) {\r\n\t\t\tclubList.style.display = 'block';\r\n\t\t}\r\n\t\tif (!clubSelect) {\r\n\t\t\tclubList.style.display = 'none';\r\n\t\t}\r\n\t});\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chooseClub);\n\n//# sourceURL=webpack://glo/./src/modules/chooseClub.js?");

/***/ }),

/***/ "./src/modules/mainSlider.js":
/*!***********************************!*\
  !*** ./src/modules/mainSlider.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mainSlider = () => {\r\n\tconst slider = document.querySelector('.main-slider'),\r\n\t\tsliderItems = slider.querySelectorAll('.slide');\r\n\r\n\tlet currentSlide = 0;\r\n\r\n\tconst prevSlide = (elem, index) => {\r\n\t\telem[index].style.display = 'none';\r\n\t};\r\n\r\n\tconst nextSlide = (elem, index) => {\r\n\t\telem[index].style.display = 'flex';\r\n\t};\r\n\r\n\tconst autoPlaySlide = () => {\r\n\t\tprevSlide(sliderItems, currentSlide);\r\n\r\n\t\tcurrentSlide++;\r\n\t\tif (currentSlide >= sliderItems.length) {\r\n\t\t\tcurrentSlide = 0;\r\n\t\t}\r\n\t\tnextSlide(sliderItems, currentSlide);\r\n\t};\r\n\r\n\tconst startSlider = (time = 3000) => {\r\n\t\tsetInterval(autoPlaySlide, time);\r\n\t};\r\n\r\n\tstartSlider(3000);\r\n\r\n};\r\n\r\nconst gallerySlider = () => {\r\n\tconst slider = document.querySelector('.gallery-slider'),\r\n\t\tsliderItems = slider.querySelectorAll('.slide');\r\n\r\n\tlet currentSlide = 0,\r\n\t\tinterval;\r\n\r\n\tconst prevSlide = (elem, index, strClass) => {\r\n\r\n\t\tif (strClass) {\r\n\t\t\telem[index].classList.remove(strClass);\r\n\t\t} else {\r\n\t\t\telem[index].style.cssText = `\r\n\t\t\tdisplay: none;\r\n\t\t\t`;\r\n\t\t}\r\n\t};\r\n\r\n\tconst nextSlide = (elem, index, strClass) => {\r\n\t\tif (strClass) {\r\n\t\t\telem[index].classList.add(strClass);\r\n\t\t} else {\r\n\t\t\telem[index].style.cssText = `\r\n\t\t\tdisplay: block;\r\n\t\t\t`;\r\n\t\t}\r\n\r\n\t};\r\n\r\n\tconst createDots = num => {\r\n\r\n\t\tconst dots = document.createElement('ul');\r\n\r\n\t\tdots.classList.add('slider-dots');\r\n\t\tslider.append(dots);\r\n\t\tconst arr = [];\r\n\t\tfor (let i = 0; i <= num; i++) {\r\n\t\t\tconst dot = document.createElement('li');\r\n\t\t\tconst btn = document.createElement('button');\r\n\t\t\tdot.classList.add('dot');\r\n\t\t\tdot.append(btn);\r\n\t\t\tdots.append(dot);\r\n\t\t\tarr.push(dot);\r\n\t\t}\r\n\t\tarr[0].classList.add('slick-active');\r\n\t\treturn arr;\r\n\t};\r\n\r\n\tconst allDots = createDots(sliderItems.length - 1);\r\n\r\n\r\n\tconst createArrows = () => {\r\n\t\tconst leftArrow = document.createElement('div');\r\n\t\tconst arrowSpan = document.createElement('span');\r\n\t\tarrowSpan.textContent = '<';\r\n\t\tarrowSpan.style.cssText = `\r\n\t\tdisplay:block;\r\n\t\twidth:36px;\r\n\t\theight:37px;\r\n\t\tbackground-color:#f4c71b;\r\n\t\tborder-radius:50%;\r\n\t\ttext-align:center;\r\n\t\tpadding-top:11px;\r\n\t\t`;\r\n\r\n\t\tleftArrow.id = 'left-arrow';\r\n\t\tleftArrow.append(arrowSpan);\r\n\t\tleftArrow.classList.add('slider-arrow', 'prev');\r\n\r\n\t\tslider.append(leftArrow);\r\n\r\n\r\n\t\tconst rightArrow = document.createElement('div');\r\n\t\tconst rightArrowSpan = document.createElement('span');\r\n\t\trightArrowSpan.textContent = '>';\r\n\t\trightArrowSpan.style.cssText = `\r\n\t\tdisplay:block;\r\n\t\twidth:36px;\r\n\t\theight:37px;\r\n\t\tbackground-color:#f4c71b;\r\n\t\tborder-radius:50%;\r\n\t\ttext-align:center;\r\n\t\tpadding-top:11px;\r\n\t\t`;\r\n\r\n\t\trightArrow.id = 'right-arrow';\r\n\t\trightArrow.append(rightArrowSpan);\r\n\t\trightArrow.classList.add('slider-arrow', 'next');\r\n\r\n\t\tslider.append(rightArrow);\r\n\t};\r\n\r\n\tcreateArrows();\r\n\r\n\r\n\tconst autoPlaySlide = () => {\r\n\t\tprevSlide(sliderItems, currentSlide);\r\n\t\tprevSlide(allDots, currentSlide, 'slick-active');\r\n\r\n\t\tcurrentSlide++;\r\n\t\tif (currentSlide >= sliderItems.length) {\r\n\t\t\tcurrentSlide = 0;\r\n\t\t}\r\n\t\tnextSlide(sliderItems, currentSlide);\r\n\t\tnextSlide(allDots, currentSlide, 'slick-active');\r\n\t};\r\n\r\n\tconst startSlider = (time = 3000) => {\r\n\t\tsetInterval(autoPlaySlide, time);\r\n\t};\r\n\r\n\tconst stopSlider = () => {\r\n\t\tclearInterval(interval);\r\n\t};\r\n\r\n\tslider.addEventListener('click', event => {\r\n\t\tevent.preventDefault();\r\n\r\n\t\tconst target = event.target;\r\n\r\n\t\tconst dot = target.closest('.dot');\r\n\t\tconst arrowRight = target.closest('#right-arrow');\r\n\t\tconst arrowLeft = target.closest('#left-arrow');\r\n\r\n\t\tprevSlide(sliderItems, currentSlide);\r\n\t\tprevSlide(allDots, currentSlide, 'slick-active');\r\n\r\n\t\tif (arrowRight) {\r\n\t\t\tcurrentSlide++;\r\n\t\t} else if (arrowLeft) {\r\n\t\t\tcurrentSlide--;\r\n\t\t} else if (dot) {\r\n\t\t\tallDots.forEach((item, index) => {\r\n\t\t\t\tif (item === dot) {\r\n\t\t\t\t\tcurrentSlide = index;\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t}\r\n\r\n\t\tif (currentSlide >= sliderItems.length) {\r\n\t\t\tcurrentSlide = 0;\r\n\t\t} else if (currentSlide < 0) {\r\n\t\t\tcurrentSlide = sliderItems.length - 1;\r\n\t\t}\r\n\r\n\t\tnextSlide(sliderItems, currentSlide);\r\n\t\tnextSlide(allDots, currentSlide, 'slick-active');\r\n\r\n\t});\r\n\r\n\tstartSlider(3000);\r\n\r\n};\r\n\r\ngallerySlider();\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainSlider);\n\n//# sourceURL=webpack://glo/./src/modules/mainSlider.js?");

/***/ }),

/***/ "./src/modules/maskPhone.js":
/*!**********************************!*\
  !*** ./src/modules/maskPhone.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction maskPhone(selector, masked = '+7 (___) ___-__-__') {\r\n\tconst elems = document.querySelectorAll(selector);\r\n\r\n\tfunction mask(event) {\r\n\t\tconst keyCode = event.keyCode;\r\n\t\tconst template = masked,\r\n\t\t\tdef = template.replace(/\\D/g, \"\"),\r\n\t\t\tval = this.value.replace(/\\D/g, \"\");\r\n\t\tlet i = 0,\r\n\t\t\tnewValue = template.replace(/[_\\d]/g, function (a) {\r\n\t\t\t\treturn i < val.length ? val.charAt(i++) || def.charAt(i) : a;\r\n\t\t\t});\r\n\t\ti = newValue.indexOf(\"_\");\r\n\t\tif (i != -1) {\r\n\t\t\tnewValue = newValue.slice(0, i);\r\n\t\t}\r\n\t\tlet reg = template.substr(0, this.value.length).replace(/_+/g,\r\n\t\t\tfunction (a) {\r\n\t\t\t\treturn \"\\\\d{1,\" + a.length + \"}\";\r\n\t\t\t}).replace(/[+()]/g, \"\\\\$&\");\r\n\t\treg = new RegExp(\"^\" + reg + \"$\");\r\n\t\tif (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {\r\n\t\t\tthis.value = newValue;\r\n\t\t}\r\n\t\tif (event.type == \"blur\" && this.value.length < 5) {\r\n\t\t\tthis.value = \"\";\r\n\t\t}\r\n\r\n\t}\r\n\r\n\tfor (const elem of elems) {\r\n\t\telem.addEventListener(\"input\", mask);\r\n\t\telem.addEventListener(\"focus\", mask);\r\n\t\telem.addEventListener(\"blur\", mask);\r\n\t}\r\n\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (maskPhone);\r\n// use\r\n\r\n// maskPhone('селектор элементов', 'маска, если маску не передать то будет работать стандартная +7 (___) ___-__-__');\n\n//# sourceURL=webpack://glo/./src/modules/maskPhone.js?");

/***/ }),

/***/ "./src/modules/sendFormOnPage.js":
/*!***************************************!*\
  !*** ./src/modules/sendFormOnPage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendFormOnPage = () => {\r\n\r\n\tconst popupThanks = document.getElementById('thanks');\r\n\tconst popupHeader = popupThanks.querySelector('h4');\r\n\tconst popupContent = popupThanks.querySelector('p');\r\n\r\n\tconst postData = body => fetch('./server.php', {\r\n\t\tmethod: 'POST',\r\n\t\theaders: {\r\n\t\t\t'Content-Type': 'application/json'\r\n\t\t},\r\n\t\tbody: JSON.stringify(body)\r\n\t});\r\n\r\n\tconst successContent = `Ваша заявка отправлена. <br/> Мы свяжемся с вами в ближайшее время.`;\r\n\tconst messageLoad = `Идёт отправка...`;\r\n\tconst errorContent = `Что-то пошло не так.`;\r\n\tconst successHeader = 'Спасибо!';\r\n\tconst errorHeader = 'Упс!';\r\n\r\n\tconst statusMessage = document.createElement('div');\r\n\tstatusMessage.style.cssText = 'font-size: 1.5rem;';\r\n\r\n\tconst forms = document.querySelectorAll('form');\r\n\r\n\tforms.forEach(form => {\r\n\r\n\t\tlet formCheckbox;\r\n\t\tlet label;\r\n\t\tlet radioBtns;\r\n\t\tlet radioArr;\r\n\t\tif (form.id !== 'footer_form') {\r\n\t\t\tformCheckbox = form.querySelector('input[name=\"checkbox\"]');\r\n\t\t\tlabel = form.querySelector('p.personal-data>label');\r\n\t\t} else {\r\n\t\t\tradioBtns = form.querySelectorAll('input[type=\"radio\"]');\r\n\t\t}\r\n\r\n\r\n\t\tform.addEventListener('submit', event => {\r\n\t\t\tevent.preventDefault();\r\n\r\n\t\t\tconst inputs = form.querySelectorAll('input');\r\n\t\t\tlet isNotValid = false;\r\n\t\t\tinputs.forEach(input => {\r\n\t\t\t\tif (formCheckbox && !formCheckbox.checked) {\r\n\t\t\t\t\tisNotValid = true;\r\n\t\t\t\t\tlabel.style.boxShadow = '0px 0px 10px red';\r\n\t\t\t\t\tsetTimeout(() => {\r\n\t\t\t\t\t\tlabel.style.boxShadow = 'none';\r\n\t\t\t\t\t}, 4000);\r\n\t\t\t\t}\r\n\t\t\t\tif (radioBtns) {\r\n\t\t\t\t\tradioArr = [];\r\n\t\t\t\t\tradioBtns.forEach(radio => {\r\n\t\t\t\t\t\tif (radio.checked) {\r\n\t\t\t\t\t\t\tradioArr.push(radio.value);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t});\r\n\r\n\t\t\t\t\tif (radioArr.length <= 0) {\r\n\t\t\t\t\t\tisNotValid = true;\r\n\t\t\t\t\t\tstatusMessage.innerHTML = 'Выберите клуб';\r\n\t\t\t\t\t\tform.insertAdjacentElement('beforeend', statusMessage);\r\n\r\n\t\t\t\t\t\tsetTimeout(() => {\r\n\t\t\t\t\t\t\tstatusMessage.remove();\r\n\t\t\t\t\t\t}, 4000);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\tif (input.value.trim() === '' && input.getAttribute('name') !==\r\n\t\t\t\t\t'checkbox' && input.getAttribute('name') !== 'promo') {\r\n\t\t\t\t\tisNotValid = true;\r\n\t\t\t\t\tinput.style.border = '2px solid red';\r\n\t\t\t\t\tsetTimeout(() => {\r\n\t\t\t\t\t\tinput.style.border = 'none';\r\n\t\t\t\t\t}, 4000);\r\n\t\t\t\t}\r\n\t\t\t\tif (input.getAttribute('name') === 'name' && input.value.length < 2) {\r\n\t\t\t\t\tisNotValid = true;\r\n\t\t\t\t\tinput.style.border = '2px solid red';\r\n\t\t\t\t\tsetTimeout(() => {\r\n\t\t\t\t\t\tinput.style.border = 'none';\r\n\t\t\t\t\t}, 4000);\r\n\t\t\t\t}\r\n\t\t\t\tif (input.getAttribute('name') === 'phone' && input.value.length < 10) {\r\n\t\t\t\t\tisNotValid = true;\r\n\t\t\t\t\tinput.style.border = '2px solid red';\r\n\t\t\t\t\tsetTimeout(() => {\r\n\t\t\t\t\t\tinput.style.border = 'none';\r\n\t\t\t\t\t}, 4000);\r\n\t\t\t\t}\r\n\t\t\t});\r\n\r\n\t\t\tif (!isNotValid) {\r\n\t\t\t\tstatusMessage.innerHTML = messageLoad;\r\n\t\t\t\tform.insertAdjacentElement('beforeend', statusMessage);\r\n\r\n\t\t\t\tconst formData = new FormData(form);\r\n\t\t\t\tconst body = {};\r\n\t\t\t\tformData.forEach((val, key) => {\r\n\t\t\t\t\tbody[key] = val;\r\n\t\t\t\t});\r\n\r\n\t\t\t\tpostData(body).then(response => {\r\n\t\t\t\t\tif (response.status === 200) {\r\n\t\t\t\t\t\tif (form.id === 'card_order') {\r\n\t\t\t\t\t\t\tstatusMessage.style.color = '#000';\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\tstatusMessage.style.color = 'white';\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\tif (form.id === 'banner-form' || form.id === 'card_order' || form.id === 'footer_form') {\r\n\t\t\t\t\t\t\tpopupThanks.style.display = 'block';\r\n\t\t\t\t\t\t\tpopupHeader.innerHTML = successHeader;\r\n\t\t\t\t\t\t\tpopupContent.innerHTML = successContent;\r\n\t\t\t\t\t\t\tstatusMessage.remove();\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\tstatusMessage.innerHTML = successContent;\r\n\t\t\t\t\t\t\tform.insertAdjacentElement('beforeend', statusMessage);\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\tform.querySelectorAll('input').forEach(input => input.value = '');\r\n\t\t\t\t\t\tif (formCheckbox) {\r\n\t\t\t\t\t\t\tformCheckbox.checked = false;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\tif (radioBtns) {\r\n\t\t\t\t\t\t\tradioBtns.forEach(radio => {\r\n\t\t\t\t\t\t\t\tradio.checked = false;\r\n\t\t\t\t\t\t\t});\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tthrow new Error('status network is not 200');\r\n\t\t\t\t\t}\r\n\t\t\t\t}).catch(error => {\r\n\t\t\t\t\tif (form.id === 'banner-form' || form.id === 'card_order') {\r\n\t\t\t\t\t\tpopupThanks.style.display = 'block';\r\n\t\t\t\t\t\tpopupHeader.innerHTML = errorHeader;\r\n\t\t\t\t\t\tpopupContent.innerHTML = errorContent;\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tstatusMessage.innerHTML = errorContent;\r\n\t\t\t\t\t\tform.insertAdjacentElement('beforeend', statusMessage);\r\n\t\t\t\t\t}\r\n\t\t\t\t\tconsole.log(error);\r\n\t\t\t\t}).finally(() => {\r\n\t\t\t\t\tsetTimeout(() => {\r\n\t\t\t\t\t\tstatusMessage.remove();\r\n\r\n\t\t\t\t\t\tif (popupThanks.style.display === 'block') {\r\n\t\t\t\t\t\t\tpopupThanks.style.display = 'none';\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}, 4000);\r\n\t\t\t\t});\r\n\t\t\t} else {\r\n\t\t\t\treturn;\r\n\t\t\t}\r\n\t\t});\r\n\t});\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendFormOnPage);\n\n//# sourceURL=webpack://glo/./src/modules/sendFormOnPage.js?");

/***/ }),

/***/ "./src/modules/showPopup.js":
/*!**********************************!*\
  !*** ./src/modules/showPopup.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst showPopup = () => {\r\n\r\n\tdocument.addEventListener('click', event => {\r\n\t\tconst target = event.target;\r\n\t\tconst parentPopup = target.closest('.popup');\r\n\t\tconst gift = target.closest('.fixed-gift');\r\n\r\n\t\tconst openPopup = () => {\r\n\t\t\tconst id = target.getAttribute('data-popup');\r\n\t\t\tconst popup = document.getElementById(id);\r\n\t\t\tpopup.style.display = 'block';\r\n\r\n\t\t\tif (gift) {\r\n\t\t\t\tgift.style.display = 'none';\r\n\t\t\t}\r\n\t\t};\r\n\r\n\t\tconst closePopup = () => {\r\n\t\t\tconst close = target.closest('.close-form'),\r\n\t\t\t\tcloseBtn = target.closest('.close-btn'),\r\n\t\t\t\tformWrapper = target.closest('.form-wrapper');\r\n\r\n\r\n\t\t\tif (!formWrapper || close || closeBtn) {\r\n\t\t\t\ttarget.closest('.popup').style.display = 'none';\r\n\t\t\t}\r\n\t\t};\r\n\r\n\t\tif (target.hasAttribute('data-popup')) {\r\n\t\t\topenPopup();\r\n\t\t}\r\n\r\n\t\tif (parentPopup) {\r\n\t\t\tclosePopup();\r\n\t\t}\r\n\t});\r\n\r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showPopup);\n\n//# sourceURL=webpack://glo/./src/modules/showPopup.js?");

/***/ }),

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst toggleMenu = () => {\r\n\r\n\tconst smoothScroll = target => {\r\n\t\tconst href = target.getAttribute('href');\r\n\t\tconst element = document.querySelector(href);\r\n\t\twindow.scrollTo({\r\n\t\t\tleft: 0,\r\n\t\t\ttop: element.offsetTop,\r\n\t\t\tbehavior: 'smooth'\r\n\t\t});\r\n\t};\r\n\r\n\tdocument.addEventListener('click', event => {\r\n\t\tconst target = event.target;\r\n\r\n\t\tconst menuIcon = target.closest('div.menu-button>img'),\r\n\t\t\tmenuPopup = document.querySelector('.popup-menu'),\r\n\t\t\tmenuLinks = menuPopup.querySelectorAll('ul>li>a');\r\n\r\n\t\tif (menuIcon) {\r\n\t\t\tmenuPopup.classList.remove('hidden-large');\r\n\t\t\tmenuPopup.style.display = 'flex';\r\n\t\t}\r\n\r\n\t\tif (target.matches('div.close-menu-btn>img') || target.matches('ul>li>a')) {\r\n\t\t\tmenuPopup.classList.add('hidden-large');\r\n\t\t\tmenuPopup.style.display = 'none';\r\n\t\t}\r\n\t\tmenuLinks.forEach(link => {\r\n\t\t\tlink.addEventListener('click', event => {\r\n\t\t\t\tevent.preventDefault();\r\n\t\t\t\tsmoothScroll(link);\r\n\t\t\t});\r\n\t\t});\r\n\t});\r\n};\r\n\r\n\r\n// const stickyMenu = () => {\r\n// \tif (screen.width <= 787 || document.documentElement.clientWidth <= 787) {\r\n// \t\tconst head = document.querySelector('.head');\r\n// \t\thead.style.paddingBottom = '50px';\r\n// \t\twindow.addEventListener('scroll', () => {\r\n// \t\t\tconst windowOffsetTop = window.pageYOffset;\r\n// \t\t\tconst topMenu = document.querySelector('.top-menu');\r\n// \t\t\tconst topMenuOffset = topMenu.offsetTop;\r\n\r\n\r\n\r\n// \t\t\ttopMenu.style.position = 'absolute';\r\n// \t\t\ttopMenu.style.top = '187px';\r\n\r\n// \t\t\tconsole.log(windowOffsetTop, topMenuOffset);\r\n\r\n// \t\t\tif (windowOffsetTop > topMenuOffset) {\r\n// \t\t\t\ttopMenu.style.position = 'fixed';\r\n// \t\t\t\ttopMenu.style.top = '0';\r\n// \t\t\t}\r\n// \t\t\tif (windowOffsetTop < 187) {\r\n// \t\t\t\ttopMenu.style.position = 'absolute';\r\n// \t\t\t\ttopMenu.style.top = '187px';\r\n// \t\t\t}\r\n// \t\t});\r\n// \t}\r\n// };\r\n\r\n// stickyMenu();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://glo/./src/modules/toggleMenu.js?");

/***/ }),

/***/ "./src/modules/validateInputs.js":
/*!***************************************!*\
  !*** ./src/modules/validateInputs.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validateInputs = () => {\r\n\tconst inputsName = document.querySelectorAll('input[name=\"name\"]');\r\n\r\n\tinputsName.forEach(input => {\r\n\r\n\t\tinput.addEventListener('input', () => {\r\n\t\t\tinput.value = input.value.replace(/[^А-яа-яЁё\\s]/gi, '');\r\n\t\t\tinput.value = input.value[0].toUpperCase() + input.value.substring(1).toLowerCase();\r\n\t\t});\r\n\r\n\t});\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateInputs);\n\n//# sourceURL=webpack://glo/./src/modules/validateInputs.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;