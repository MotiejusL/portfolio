/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/images/explorit-v.mp4":
/*!******************************************!*\
  !*** ./src/assets/images/explorit-v.mp4 ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"e0297a59d03440e5c95dc89a5638a6f1.mp4\";\n\n//# sourceURL=webpack:///./src/assets/images/explorit-v.mp4?");

/***/ }),

/***/ "./src/assets/images/explorit-v2.webm":
/*!********************************************!*\
  !*** ./src/assets/images/explorit-v2.webm ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"990f4b6ac3d3b8b758612902317ab782.webm\";\n\n//# sourceURL=webpack:///./src/assets/images/explorit-v2.webm?");

/***/ }),

/***/ "./src/assets/images/purplebook-v.mp4":
/*!********************************************!*\
  !*** ./src/assets/images/purplebook-v.mp4 ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"059799a7e190794cd0e447f240a90fda.mp4\";\n\n//# sourceURL=webpack:///./src/assets/images/purplebook-v.mp4?");

/***/ }),

/***/ "./src/assets/images/purplebook-v2.webm":
/*!**********************************************!*\
  !*** ./src/assets/images/purplebook-v2.webm ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"18ab4c2aa8b05d701adfa1bb3cdc4e91.webm\";\n\n//# sourceURL=webpack:///./src/assets/images/purplebook-v2.webm?");

/***/ }),

/***/ "./src/assets/images/rails-icon.svg":
/*!******************************************!*\
  !*** ./src/assets/images/rails-icon.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"25a6dd09a931a0e6400129e95139a7ea.svg\";\n\n//# sourceURL=webpack:///./src/assets/images/rails-icon.svg?");

/***/ }),

/***/ "./src/assets/images/tagging-app-v.mp4":
/*!*********************************************!*\
  !*** ./src/assets/images/tagging-app-v.mp4 ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"00067c3c215e4a7bdc3fda31a10b9a2f.mp4\";\n\n//# sourceURL=webpack:///./src/assets/images/tagging-app-v.mp4?");

/***/ }),

/***/ "./src/assets/images/tagging-app-v2.webm":
/*!***********************************************!*\
  !*** ./src/assets/images/tagging-app-v2.webm ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"03ded9825de3bd175981223f43abaa37.webm\";\n\n//# sourceURL=webpack:///./src/assets/images/tagging-app-v2.webm?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_images_rails_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/rails-icon.svg */ \"./src/assets/images/rails-icon.svg\");\n/* harmony import */ var _assets_images_rails_icon_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_rails_icon_svg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_images_purplebook_v_mp4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/purplebook-v.mp4 */ \"./src/assets/images/purplebook-v.mp4\");\n/* harmony import */ var _assets_images_purplebook_v_mp4__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_purplebook_v_mp4__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_images_purplebook_v2_webm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/purplebook-v2.webm */ \"./src/assets/images/purplebook-v2.webm\");\n/* harmony import */ var _assets_images_purplebook_v2_webm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_purplebook_v2_webm__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_images_tagging_app_v_mp4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/tagging-app-v.mp4 */ \"./src/assets/images/tagging-app-v.mp4\");\n/* harmony import */ var _assets_images_tagging_app_v_mp4__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_tagging_app_v_mp4__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_images_tagging_app_v2_webm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/tagging-app-v2.webm */ \"./src/assets/images/tagging-app-v2.webm\");\n/* harmony import */ var _assets_images_tagging_app_v2_webm__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_tagging_app_v2_webm__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _assets_images_explorit_v_mp4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/images/explorit-v.mp4 */ \"./src/assets/images/explorit-v.mp4\");\n/* harmony import */ var _assets_images_explorit_v_mp4__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_explorit_v_mp4__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _assets_images_explorit_v2_webm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/images/explorit-v2.webm */ \"./src/assets/images/explorit-v2.webm\");\n/* harmony import */ var _assets_images_explorit_v2_webm__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_explorit_v2_webm__WEBPACK_IMPORTED_MODULE_7__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n\n\n\n\n\n\n\n\ndocument.getElementById('rails-icon').src = _assets_images_rails_icon_svg__WEBPACK_IMPORTED_MODULE_1___default.a;\ndocument.getElementById('purplebook-gif-mp4').src = _assets_images_purplebook_v_mp4__WEBPACK_IMPORTED_MODULE_2___default.a;\ndocument.getElementById('purplebook-gif-webm').src = _assets_images_purplebook_v2_webm__WEBPACK_IMPORTED_MODULE_3___default.a;\ndocument.getElementById('explorit-gif-mp4').src = _assets_images_explorit_v_mp4__WEBPACK_IMPORTED_MODULE_6___default.a;\ndocument.getElementById('explorit-gif-webm').src = _assets_images_explorit_v2_webm__WEBPACK_IMPORTED_MODULE_7___default.a;\ndocument.getElementById('taggingapp-gif-mp4').src = _assets_images_tagging_app_v_mp4__WEBPACK_IMPORTED_MODULE_4___default.a;\ndocument.getElementById('taggingapp-gif-webm').src = _assets_images_tagging_app_v2_webm__WEBPACK_IMPORTED_MODULE_5___default.a;\nvar projects = document.querySelectorAll('.projects .project');\nvar blurBackground = document.querySelector('.blur-back');\nvar modal = document.querySelector('.modal');\nvar modalInner = modal.querySelector('.modal-inner');\nvar modalExit = modal.querySelector('.modal-inner .exit');\nvar submitButton = document.getElementById(\"submit\");\nvar emailIcon = document.getElementsByClassName('email-icon')[0];\nemailIcon.addEventListener('click', showEmail);\nmodalExit.addEventListener('click', exitModal);\nsubmitButton.addEventListener('click', sendMail);\n\n_toConsumableArray(projects).forEach(function (project) {\n  var readMore = project.querySelector('h6');\n  readMore.project = project;\n  readMore.addEventListener('click', showInModal);\n});\n\nfunction showInModal(event) {\n  var currentTarget = event.currentTarget;\n  var project = currentTarget.project;\n  var modalInfo = modal.querySelector('.modal-info');\n  var modalImage = modal.querySelector('.modal-image');\n  var projectInfoModal = project.getElementsByClassName('hidden-project-info')[0];\n  var projectLinks = project.getElementsByClassName('project-links')[0];\n  var projectGifModal = project.querySelector('.hidden-project-gif video');\n  var clonedProjectInfoModal = projectInfoModal.cloneNode(true);\n  var clonedProjectLinks = projectLinks.cloneNode(true);\n  var clonedProjectGifModal = projectGifModal.cloneNode(true);\n  blurBackground.style.filter = 'blur(6px)';\n  modalInner.style.boxShadow = '0 0 1px 999px rgba(0,0,0,0.1)';\n  modal.style.display = 'flex';\n  removeChildElements(modalInfo);\n  modalInfo.appendChild(clonedProjectInfoModal);\n  modalInfo.appendChild(clonedProjectLinks);\n  removeChildElements(modalImage);\n  modalImage.appendChild(clonedProjectGifModal);\n}\n\nfunction exitModal(event) {\n  blurBackground.style.filter = 'blur(0)';\n  modal.style.display = 'none';\n}\n\nfunction removeChildElements(parent) {\n  while (parent.firstChild) {\n    parent.firstChild.remove();\n  }\n}\n\nfunction sendMail() {\n  var name = document.getElementById(\"name\");\n  var message = document.getElementById(\"message\");\n  var email = document.getElementById(\"email\");\n  var messageToSend = \"\".concat(name.value, \", \").concat(email.value, \", \").concat(message.value);\n  var submitMessage = document.querySelector('.contact-form h4');\n  Email.send({\n    Host: \"smtp.elasticemail.com\",\n    Username: \"portfoliomot@gmail.com\",\n    Password: \"1efabd8c-ba80-4fdb-8a62-90f3826c943c\",\n    To: \"motiejus.labzentis@gmail.com\",\n    From: \"portfoliomot@gmail.com\",\n    Subject: \"From Portfolio Contacts\",\n    Body: messageToSend\n  }).then(function (message) {\n    if (message === 'OK') {\n      submitMessage.textContent = 'Thank you for your message';\n      submitMessage.style.color = '#008000';\n      contactMessageDisappear();\n    } else {\n      submitMessage.textContent = 'Sorry, something went wrong';\n      submitMessage.style.color = '#ff4c4c';\n      contactMessageDisappear();\n    }\n  });\n  name.value = '';\n  message.value = '';\n  email.value = '';\n}\n\nfunction contactMessageDisappear() {\n  var submitMessage = document.querySelector('.contact-form h4');\n  setTimeout(function () {\n    submitMessage.textContent = 'Feel free to get in touch with me';\n    submitMessage.style.color = '#909090';\n  }, 3000);\n}\n\nfunction showEmail(event) {\n  var currentTarget = event.currentTarget;\n  var emailContainer = document.getElementsByClassName('email-container')[0];\n  emailContainer.style.opacity = 1;\n  currentTarget.removeEventListener('click', showEmail);\n  currentTarget.addEventListener('click', hideEmail);\n}\n\nfunction hideEmail(event) {\n  var currentTarget = event.currentTarget;\n  var emailContainer = document.getElementsByClassName('email-container')[0];\n  emailContainer.style.opacity = 0;\n  currentTarget.addEventListener('click', showEmail);\n  currentTarget.removeEventListener('click', hideEmail);\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ })

/******/ });