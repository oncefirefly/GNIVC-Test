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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_inputSubmit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/inputSubmit */ \"./src/modules/inputSubmit.js\");\n\r\n\r\n(0,_modules_inputSubmit__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/cases.js":
/*!******************************!*\
  !*** ./src/modules/cases.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toGenitiveCase\": () => (/* binding */ toGenitiveCase),\n/* harmony export */   \"toDativeCase\": () => (/* binding */ toDativeCase),\n/* harmony export */   \"toAccusativeCase\": () => (/* binding */ toAccusativeCase),\n/* harmony export */   \"toInstrumentalCase\": () => (/* binding */ toInstrumentalCase),\n/* harmony export */   \"toPrepositionalCase\": () => (/* binding */ toPrepositionalCase)\n/* harmony export */ });\n/* harmony import */ var _declensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./declensions */ \"./src/modules/declensions.js\");\n/* harmony import */ var _isRuConsonant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isRuConsonant */ \"./src/modules/isRuConsonant.js\");\n\r\n\r\n\r\n\r\n\r\nconst toGenitiveCase = (word) => {\r\n    const lastLetterIndex = word.length - 1;\r\n    let splitWord = word.split('');\r\n\r\n    if ((0,_declensions__WEBPACK_IMPORTED_MODULE_0__.firstDeclension)(splitWord, lastLetterIndex)) {\r\n\r\n        splitWord[lastLetterIndex] = '(и/ы)';\r\n\r\n    } else if ((0,_declensions__WEBPACK_IMPORTED_MODULE_0__.secondDeclension)(splitWord, lastLetterIndex)) {\r\n\r\n        if ((0,_isRuConsonant__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(splitWord[lastLetterIndex]) && splitWord[lastLetterIndex] !== 'й') {\r\n            splitWord.push('(а/я)');\r\n        } else if (splitWord[lastLetterIndex] === 'й') {\r\n            splitWord[lastLetterIndex] = 'я';\r\n        } else {\r\n            splitWord[lastLetterIndex] = '(а/я)';\r\n        }\r\n\r\n    } else if ((0,_declensions__WEBPACK_IMPORTED_MODULE_0__.thirdDeclension)(splitWord, lastLetterIndex)) {\r\n\r\n        splitWord[lastLetterIndex] = 'и';\r\n\r\n    }\r\n\r\n    return splitWord.join('');\r\n};\r\n\r\nconst toDativeCase = (word) => {\r\n    const lastLetterIndex = word.length - 1;\r\n    let splitWord = word.split('');\r\n\r\n    if ((0,_declensions__WEBPACK_IMPORTED_MODULE_0__.firstDeclension)(splitWord, lastLetterIndex)) {\r\n\r\n        splitWord[lastLetterIndex] = 'e';\r\n\r\n    } else if ((0,_declensions__WEBPACK_IMPORTED_MODULE_0__.secondDeclension)(splitWord, lastLetterIndex)) {\r\n\r\n        if ((0,_isRuConsonant__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(splitWord[lastLetterIndex]) && splitWord[lastLetterIndex] !== 'й') {\r\n            splitWord.push('у');\r\n        } else if (splitWord[lastLetterIndex] === 'й') {\r\n            splitWord[lastLetterIndex] = 'ю';\r\n        } else {\r\n            splitWord[lastLetterIndex] = 'у';\r\n        }\r\n\r\n    } else if ((0,_declensions__WEBPACK_IMPORTED_MODULE_0__.thirdDeclension)(splitWord, lastLetterIndex)) {\r\n\r\n        splitWord[lastLetterIndex] = 'и';\r\n\r\n    }\r\n\r\n    return splitWord.join('');\r\n};\r\n\r\nconst toAccusativeCase = (word) => {\r\n    const lastLetterIndex = word.length - 1;\r\n    let splitWord = word.split('');\r\n\r\n    if ((0,_declensions__WEBPACK_IMPORTED_MODULE_0__.firstDeclension)(splitWord, lastLetterIndex)) {\r\n\r\n        splitWord[lastLetterIndex] = '(у/ю)';\r\n\r\n    }\r\n\r\n    return splitWord.join('');\r\n};\r\n\r\nconst toInstrumentalCase = (word) => {\r\n    const lastLetterIndex = word.length - 1;\r\n    let splitWord = word.split('');\r\n\r\n    if ((0,_declensions__WEBPACK_IMPORTED_MODULE_0__.firstDeclension)(splitWord, lastLetterIndex)) {\r\n\r\n        splitWord[lastLetterIndex] = '(ой/ей)';\r\n\r\n    } else if ((0,_declensions__WEBPACK_IMPORTED_MODULE_0__.secondDeclension)(splitWord, lastLetterIndex)) {\r\n\r\n        if ((0,_isRuConsonant__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(splitWord[lastLetterIndex]) && splitWord[lastLetterIndex] !== 'й') {\r\n            splitWord.push('ом');\r\n        } else if (splitWord[lastLetterIndex] === 'й') {\r\n            splitWord[lastLetterIndex] = 'ем';\r\n        } else {\r\n            splitWord.push('м');\r\n        }\r\n\r\n    } else if ((0,_declensions__WEBPACK_IMPORTED_MODULE_0__.thirdDeclension)(splitWord, lastLetterIndex)) {\r\n\r\n        splitWord.push('ю');\r\n\r\n    }\r\n\r\n    return splitWord.join('');\r\n};\r\n\r\nconst toPrepositionalCase = (word) => {\r\n    const lastLetterIndex = word.length - 1;\r\n    const firstLetterIndex = 0;\r\n    let splitWord = word.split('');\r\n\r\n    if ((0,_declensions__WEBPACK_IMPORTED_MODULE_0__.firstDeclension)(splitWord, lastLetterIndex)) {\r\n\r\n        splitWord[lastLetterIndex] = 'е';\r\n\r\n    } else if ((0,_declensions__WEBPACK_IMPORTED_MODULE_0__.secondDeclension)(splitWord, lastLetterIndex)) {\r\n\r\n        if ((0,_isRuConsonant__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(splitWord[lastLetterIndex]) && splitWord[lastLetterIndex] !== 'й') {\r\n            splitWord.push('е');\r\n        } else if (splitWord[lastLetterIndex] === 'й') {\r\n            splitWord[lastLetterIndex] = 'е';\r\n        } else {\r\n            splitWord[lastLetterIndex] = 'е';\r\n        }\r\n\r\n    } else if ((0,_declensions__WEBPACK_IMPORTED_MODULE_0__.thirdDeclension)(splitWord, lastLetterIndex)) {\r\n\r\n        splitWord[lastLetterIndex] = 'и';\r\n\r\n    }\r\n\r\n    if ((0,_isRuConsonant__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(splitWord[firstLetterIndex])) {\r\n        return 'о' + ' ' + splitWord.join('');\r\n    } else {\r\n        return 'об' + ' ' + splitWord.join('');\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/modules/cases.js?");

/***/ }),

/***/ "./src/modules/declensions.js":
/*!************************************!*\
  !*** ./src/modules/declensions.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"firstDeclension\": () => (/* binding */ firstDeclension),\n/* harmony export */   \"secondDeclension\": () => (/* binding */ secondDeclension),\n/* harmony export */   \"thirdDeclension\": () => (/* binding */ thirdDeclension)\n/* harmony export */ });\n/* harmony import */ var _isRuConsonant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isRuConsonant */ \"./src/modules/isRuConsonant.js\");\n\r\n\r\nconst firstDeclension = (word, lastLetter) => {\r\n    return word[lastLetter] === 'а' || word[lastLetter] === 'я';\r\n};\r\n\r\nconst secondDeclension = (word, lastLetter) => {\r\n    return (0,_isRuConsonant__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(word[lastLetter]) ||\r\n        word[lastLetter] === 'о' ||\r\n        word[lastLetter] === 'е';\r\n};\r\n\r\nconst thirdDeclension = (word, lastLetter) => {\r\n    return word[lastLetter] === 'ь';\r\n};\r\n\n\n//# sourceURL=webpack:///./src/modules/declensions.js?");

/***/ }),

/***/ "./src/modules/inputSubmit.js":
/*!************************************!*\
  !*** ./src/modules/inputSubmit.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cases__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cases */ \"./src/modules/cases.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst inputSubmit = () => {\r\n    const inputText = document.querySelector('.input__area');\r\n    const inputSubmit = document.querySelector('.input__submit');\r\n    const caseWord = document.querySelectorAll('.case__word');\r\n    const casesContainer = document.querySelector('.cases__container');\r\n\r\n    inputSubmit.addEventListener('click', (event) => {\r\n        casesContainer.style.display = 'flex';\r\n\r\n        caseWord[0].textContent = (0,_cases__WEBPACK_IMPORTED_MODULE_0__.toGenitiveCase)(inputText.value);\r\n        caseWord[1].textContent = (0,_cases__WEBPACK_IMPORTED_MODULE_0__.toDativeCase)(inputText.value);\r\n        caseWord[2].textContent = (0,_cases__WEBPACK_IMPORTED_MODULE_0__.toAccusativeCase)(inputText.value);\r\n        caseWord[3].textContent = (0,_cases__WEBPACK_IMPORTED_MODULE_0__.toInstrumentalCase)(inputText.value);\r\n        caseWord[4].textContent = (0,_cases__WEBPACK_IMPORTED_MODULE_0__.toPrepositionalCase)(inputText.value);\r\n    })\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inputSubmit);\n\n//# sourceURL=webpack:///./src/modules/inputSubmit.js?");

/***/ }),

/***/ "./src/modules/isRuConsonant.js":
/*!**************************************!*\
  !*** ./src/modules/isRuConsonant.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst isRuConsonant = (letter) => {\r\n    const ruConsonants = ['б', 'в', 'г', 'д', 'ж', 'з', 'й', 'к',\r\n        'л', 'м', 'н', 'п', 'р', 'с', 'т', 'ф',\r\n        'х', 'ц', 'ч', 'ш', 'щ'];\r\n\r\n    return ruConsonants.includes(letter.toLocaleLowerCase());\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isRuConsonant);\n\n//# sourceURL=webpack:///./src/modules/isRuConsonant.js?");

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