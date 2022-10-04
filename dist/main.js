/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var WeatherService;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./static/js/weathermodel.js":
/*!***********************************!*\
  !*** ./static/js/weathermodel.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CloudCover\": () => (/* binding */ CloudCover),\n/* harmony export */   \"Forecast\": () => (/* binding */ Forecast),\n/* harmony export */   \"HistoricalData\": () => (/* binding */ HistoricalData),\n/* harmony export */   \"Precipitation\": () => (/* binding */ Precipitation),\n/* harmony export */   \"Temperature\": () => (/* binding */ Temperature),\n/* harmony export */   \"Wind\": () => (/* binding */ Wind),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n﻿function ForecastCommon(time, place, from, to, unit){\r\n    function toString(){\r\n        return \"time: \" + time + \", place: \" + place + \", from: \" + from + \", to: \" + to + \", unit: \" + unit;\r\n    }\r\n    return {\r\n        time: time,\r\n        place: place,\r\n        from: from,\r\n        to: to,\r\n        unit: unit,\r\n        toString: toString\r\n    }\r\n}\r\n\r\nfunction Forecast(data){\r\n    let list = [];\r\n\r\n    for (let i = 0; i < data.length; i++) {\r\n        let temperature, precipitation, wind, cloudCover;\r\n        for(let j = 0; j < 4; j++) {\r\n            temperature = Temperature(data[i + j].type, data[i + j].time, data[i + j].place, data[i + j].from, data[i + j].to, data[i + j].unit);\r\n            precipitation = Precipitation(data[i + j].type, data[i + j].time, data[i + j].place, data[i + j].from, data[i + j].to, data[i + j].unit, data[i + j].precipitation_type);\r\n            wind = Wind(data[i + j].type, data[i + j].time, data[i + j].place, data[i + j].from, data[i + j].to, data[i + j].unit, data[i + j].direction);\r\n            cloudCover = CloudCover(data[i + j].type, data[i + j].time, data[i + j].place, data[i + j].from, data[i + j].to, data[i + j].unit);\r\n        }\r\n        list.push(temperature, precipitation, wind, cloudCover);\r\n        i+= 3;\r\n\r\n       }\r\n\r\n    function toString(){\r\n        let str = \"\";\r\n        for(const element of list) {\r\n            str += element.toString()\r\n        }\r\n        return str;\r\n    }\r\n\r\n    return {\r\n        forecast: list,\r\n        toString: toString\r\n    }\r\n}\r\n\r\nfunction HistoricalCommon(time, place, value, unit){\r\n    function toString(){\r\n        return \"time: \" + time + \", place: \" + place + \", value: \" + value + \", unit: \" + unit;\r\n    }\r\n    return {\r\n        time: time,\r\n        place: place,\r\n        value: value,\r\n        unit: unit,\r\n        toString: toString\r\n    }\r\n}\r\n\r\nfunction HistoricalDataList(data){\r\n    let list = [];\r\n    if(data !== undefined){\r\n    for(let i = 0; i < data.length; i++){\r\n        let innerList = [];\r\n        for(let j = 0; j < 4; j++) {\r\n            innerList.push(HistoricalData(data[i + j]));\r\n        }\r\n        list.push(innerList);\r\n        i+= 3;\r\n    }\r\n    }\r\n    return list;\r\n}\r\n\r\nfunction HistoricalData(data){\r\n    let common = HistoricalCommon(data.time, data.place, data.value, data.unit);\r\n    \r\n    function toString(){\r\n        return common.toString() + \", type: \" + data.type;\r\n    }\r\n    return {\r\n        type: data.type,\r\n        time: common.time,\r\n        place: common.place,\r\n        value: common.value,\r\n        unit: common.unit,\r\n        toString: toString\r\n    }\r\n}\r\n\r\n\r\nfunction Temperature(type, time, place, from, to, unit) {\r\n    let common = ForecastCommon(time, place, from, to, unit);\r\n    \r\n    function toString() {\r\n        return common.toString() + \", type: \" + type;\r\n    }\r\n    \r\n    return {\r\n        type: type,\r\n        toString: toString\r\n    }\r\n}\r\n\r\nfunction Precipitation(type, time, place, from, to, unit, precipitation_type){\r\n    let common = ForecastCommon(time, place, from, to, unit);\r\n    \r\n    function toString() {\r\n        return common.toString() + \", type: \" + type + \", precipitation_type: \" + precipitation_type;\r\n    }\r\n    \r\n    return {\r\n        type: type,\r\n        precipitation_type: precipitation_type,\r\n        toString: toString\r\n    }\r\n}\r\n\r\nfunction Wind(type, time, place, from, to, unit, directions){\r\n    let common = ForecastCommon(time, place, from, to, unit);\r\n    \r\n    function toString() {\r\n        return common.toString() + \", type: \" + type + \", direction: \" + directions;\r\n    }\r\n    \r\n    return {\r\n        type: type,\r\n        direction: directions,\r\n        toString: toString\r\n    }\r\n}\r\n    \r\nfunction CloudCover(type, time, place, from, to, unit){\r\n    let common = ForecastCommon(time, place, from, to, unit);\r\n    \r\n    function toString() {\r\n        return common.toString() + \", type: \" + type;\r\n    }\r\n    \r\n    return {\r\n        type: type,\r\n        toString: toString\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HistoricalDataList);\r\n\n\n//# sourceURL=webpack://WeatherService/./static/js/weathermodel.js?");

/***/ }),

/***/ "./static/js/weatherservice.js":
/*!*************************************!*\
  !*** ./static/js/weatherservice.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeatherDataFetch\": () => (/* binding */ getWeatherDataFetch),\n/* harmony export */   \"getWeatherDataXML\": () => (/* binding */ getWeatherDataXML),\n/* harmony export */   \"getWeatherForecastFetch\": () => (/* binding */ getWeatherForecastFetch)\n/* harmony export */ });\n/* harmony import */ var _weathermodel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weathermodel.js */ \"./static/js/weathermodel.js\");\n﻿\r\n\r\n\r\nasync function init(){\r\n\r\n}\r\nasync function getWeatherDataXML() {\r\n    const xhr = new XMLHttpRequest();\r\n    xhr.open('GET', 'http://localhost:8080/data');\r\n    xhr.onload = function () {\r\n        const jsonData = JSON.parse(xhr.responseText);\r\n        let histData = new _weathermodel_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](jsonData);\r\n        console.log(histData.toString())\r\n        return jsonData;\r\n    }\r\n    xhr.send();\r\n}\r\n\r\nfunction getWeatherDataFetch() {\r\n    fetch('http://localhost:8080/data')\r\n        .then(response => response.json())\r\n        .then(data => console.log(data)).catch(console.error)\r\n}\r\n\r\nasync function getWeatherForecastFetch(city) {\r\n    return fetch('http://localhost:8080/forecast/' + city)\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            return new _weathermodel_js__WEBPACK_IMPORTED_MODULE_0__.Forecast(data);\r\n        })\r\n        .catch(console.error)\r\n}\r\n\n\n//# sourceURL=webpack://WeatherService/./static/js/weatherservice.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./static/js/weatherservice.js");
/******/ 	WeatherService = __webpack_exports__;
/******/ 	
/******/ })()
;