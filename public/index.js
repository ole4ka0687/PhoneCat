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
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/app.js":
/*!*************************!*\
  !*** ./frontend/app.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_phone_page_phone_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/phone-page/phone-page */ "./frontend/components/phone-page/phone-page.js");




new _components_phone_page_phone_page__WEBPACK_IMPORTED_MODULE_0__["default"]({
	el: document.querySelector('[data-component="phone-page"]')
});

/***/ }),

/***/ "./frontend/components/phone-catalogue/phone-catalogue.js":
/*!****************************************************************!*\
  !*** ./frontend/components/phone-catalogue/phone-catalogue.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhoneCatalogue; });
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.html */ "./frontend/components/phone-catalogue/template.html");




class PhoneCatalogue {
	constructor(options) {
		this._el = options.el;
		this._phones = options.phones;

		this._render();
	}

	_render() {
		this._compiledTemplate = _.template(_template_html__WEBPACK_IMPORTED_MODULE_0__["default"]);

		this._el.innerHTML = this._compiledTemplate({
			phones: this._phones,
		});
	}
}

/***/ }),

/***/ "./frontend/components/phone-catalogue/template.html":
/*!***********************************************************!*\
  !*** ./frontend/components/phone-catalogue/template.html ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"phones\">\r\n\r\n  <% phones.forEach((phone) => { %>\r\n\r\n    <li class=\"thumbnail\">\r\n      <a href=\"#!/phones/<%= phone.id %>\" class=\"thumb\">\r\n        <img alt=\"<%- phone.name %>\" src=\"<%= phone.imageUrl %>\">\r\n      </a>\r\n      <a href=\"#!/phones/<%= phone.id %>\"><%- phone.name %></a>\r\n      <p><%- phone.snippet %></p>\r\n    </li>\r\n\r\n  <% }); %>\r\n</ul>\r\n");

/***/ }),

/***/ "./frontend/components/phone-page/phone-page.js":
/*!******************************************************!*\
  !*** ./frontend/components/phone-page/phone-page.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhonePage; });
/* harmony import */ var _phone_catalogue_phone_catalogue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../phone-catalogue/phone-catalogue */ "./frontend/components/phone-catalogue/phone-catalogue.js");




class PhonePage {
	constructor(options) {
		this._el = options.el;

		this._catalogue = new _phone_catalogue_phone_catalogue__WEBPACK_IMPORTED_MODULE_0__["default"]({
			el: this._el.querySelector('[data-component="phone-catalogue"]'),
			phones: phonesFromServer,
		});
	}
}

const phonesFromServer = [
    {
        "age": 0, 
        "id": "motorola-xoom-with-wi-fi", 
        "imageUrl": "img/phones/motorola-xoom-with-wi-fi.0.jpg", 
        "name": "Motorola XOOM\u2122 with Wi-Fi", 
        "snippet": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
    }, 
    {
        "age": 1, 
        "id": "motorola-xoom", 
        "imageUrl": "img/phones/motorola-xoom.0.jpg", 
        "name": "MOTOROLA XOOM\u2122", 
        "snippet": "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb)."
    }, 
    {
        "age": 2, 
        "carrier": "AT&T", 
        "id": "motorola-atrix-4g", 
        "imageUrl": "img/phones/motorola-atrix-4g.0.jpg", 
        "name": "MOTOROLA ATRIX\u2122 4G", 
        "snippet": "MOTOROLA ATRIX 4G the world's most powerful smartphone."
    }, 
    {
        "age": 3, 
        "id": "dell-streak-7", 
        "imageUrl": "img/phones/dell-streak-7.0.jpg", 
        "name": "Dell Streak 7", 
        "snippet": "Introducing Dell\u2122 Streak 7. Share photos, videos and movies together. It\u2019s small enough to carry around, big enough to gather around."
    }, 
    {
        "age": 4, 
        "carrier": "Cellular South", 
        "id": "samsung-gem", 
        "imageUrl": "img/phones/samsung-gem.0.jpg", 
        "name": "Samsung Gem\u2122", 
        "snippet": "The Samsung Gem\u2122 brings you everything that you would expect and more from a touch display smart phone \u2013 more apps, more features and a more affordable price."
    }, 
    {
        "age": 5, 
        "carrier": "Dell", 
        "id": "dell-venue", 
        "imageUrl": "img/phones/dell-venue.0.jpg", 
        "name": "Dell Venue", 
        "snippet": "The Dell Venue; Your Personal Express Lane to Everything"
    }, 
    {
        "age": 6, 
        "carrier": "Best Buy", 
        "id": "nexus-s", 
        "imageUrl": "img/phones/nexus-s.0.jpg", 
        "name": "Nexus S", 
        "snippet": "Fast just got faster with Nexus S. A pure Google experience, Nexus S is the first phone to run Gingerbread (Android 2.3), the fastest version of Android yet."
    }, 
    {
        "age": 7, 
        "carrier": "Cellular South", 
        "id": "lg-axis", 
        "imageUrl": "img/phones/lg-axis.0.jpg", 
        "name": "LG Axis", 
        "snippet": "Android Powered, Google Maps Navigation, 5 Customizable Home Screens"
    }, 
    {
        "age": 8, 
        "id": "samsung-galaxy-tab", 
        "imageUrl": "img/phones/samsung-galaxy-tab.0.jpg", 
        "name": "Samsung Galaxy Tab\u2122", 
        "snippet": "Feel Free to Tab\u2122. The Samsung Galaxy Tab\u2122 brings you an ultra-mobile entertainment experience through its 7\u201d display, high-power processor and Adobe\u00ae Flash\u00ae Player compatibility."
    }, 
    {
        "age": 9, 
        "carrier": "Cellular South", 
        "id": "samsung-showcase-a-galaxy-s-phone", 
        "imageUrl": "img/phones/samsung-showcase-a-galaxy-s-phone.0.jpg", 
        "name": "Samsung Showcase\u2122 a Galaxy S\u2122 phone", 
        "snippet": "The Samsung Showcase\u2122 delivers a cinema quality experience like you\u2019ve never seen before. Its innovative 4\u201d touch display technology provides rich picture brilliance, even outdoors"
    }, 
    {
        "age": 10, 
        "carrier": "Verizon", 
        "id": "droid-2-global-by-motorola", 
        "imageUrl": "img/phones/droid-2-global-by-motorola.0.jpg", 
        "name": "DROID\u2122 2 Global by Motorola", 
        "snippet": "The first smartphone with a 1.2 GHz processor and global capabilities."
    }, 
    {
        "age": 11, 
        "carrier": "Verizon", 
        "id": "droid-pro-by-motorola", 
        "imageUrl": "img/phones/droid-pro-by-motorola.0.jpg", 
        "name": "DROID\u2122 Pro by Motorola", 
        "snippet": "The next generation of DOES."
    }, 
    {
        "age": 12, 
        "carrier": "AT&T", 
        "id": "motorola-bravo-with-motoblur", 
        "imageUrl": "img/phones/motorola-bravo-with-motoblur.0.jpg", 
        "name": "MOTOROLA BRAVO\u2122 with MOTOBLUR\u2122", 
        "snippet": "An experience to cheer about."
    }, 
    {
        "age": 13, 
        "carrier": "T-Mobile", 
        "id": "motorola-defy-with-motoblur", 
        "imageUrl": "img/phones/motorola-defy-with-motoblur.0.jpg", 
        "name": "Motorola DEFY\u2122 with MOTOBLUR\u2122", 
        "snippet": "Are you ready for everything life throws your way?"
    }, 
    {
        "age": 14, 
        "carrier": "T-Mobile", 
        "id": "t-mobile-mytouch-4g", 
        "imageUrl": "img/phones/t-mobile-mytouch-4g.0.jpg", 
        "name": "T-Mobile myTouch 4G", 
        "snippet": "The T-Mobile myTouch 4G is a premium smartphone designed to deliver blazing fast 4G speeds so that you can video chat from practically anywhere, with or without Wi-Fi."
    }, 
    {
        "age": 15, 
        "carrier": "US Cellular", 
        "id": "samsung-mesmerize-a-galaxy-s-phone", 
        "imageUrl": "img/phones/samsung-mesmerize-a-galaxy-s-phone.0.jpg", 
        "name": "Samsung Mesmerize\u2122 a Galaxy S\u2122 phone", 
        "snippet": "The Samsung Mesmerize\u2122 delivers a cinema quality experience like you\u2019ve never seen before. Its innovative 4\u201d touch display technology provides rich picture brilliance,even outdoors"
    }, 
    {
        "age": 16, 
        "carrier": "Sprint", 
        "id": "sanyo-zio", 
        "imageUrl": "img/phones/sanyo-zio.0.jpg", 
        "name": "SANYO ZIO", 
        "snippet": "The Sanyo Zio by Kyocera is an Android smartphone with a combination of ultra-sleek styling, strong performance and unprecedented value."
    }, 
    {
        "age": 17, 
        "id": "samsung-transform", 
        "imageUrl": "img/phones/samsung-transform.0.jpg", 
        "name": "Samsung Transform\u2122", 
        "snippet": "The Samsung Transform\u2122 brings you a fun way to customize your Android powered touch screen phone to just the way you like it through your favorite themed \u201cSprint ID Service Pack\u201d."
    }, 
    {
        "age": 18, 
        "id": "t-mobile-g2", 
        "imageUrl": "img/phones/t-mobile-g2.0.jpg", 
        "name": "T-Mobile G2", 
        "snippet": "The T-Mobile G2 with Google is the first smartphone built for 4G speeds on T-Mobile's new network. Get the information you need, faster than you ever thought possible."
    }, 
    {
        "age": 19, 
        "id": "motorola-charm-with-motoblur", 
        "imageUrl": "img/phones/motorola-charm-with-motoblur.0.jpg", 
        "name": "Motorola CHARM\u2122 with MOTOBLUR\u2122", 
        "snippet": "Motorola CHARM fits easily in your pocket or palm.  Includes MOTOBLUR service."
    }
]


/***/ })

/******/ });
//# sourceMappingURL=index.js.map