/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createContact(){
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');

    const phoneNumberHead = document.createElement('h2')
    phoneNumberHead.classList.add('animate')
    phoneNumberHead.textContent = 'Phone Number:'
    const phoneNumber = document.createElement('h2')
    phoneNumber.textContent = ` 📞999-888-777`
    phoneNumber.classList.add('animate')
    phoneNumber.classList.add('align')

    const eMailHead = document.createElement('h2')
    eMailHead.textContent = 'Email Address: '
    eMailHead.classList.add('animate')
    const eMail = document.createElement('h2')
    eMail.textContent = '✉ xyz@gmail.com'
    eMail.classList.add('animate')
    eMail.classList.add('align')
    
    const addressHead = document.createElement('h2')
    addressHead.textContent = 'Address: '
    addressHead.classList.add('animate')
    const address = document.createElement('h2')
    address.textContent = ' 🏠 X-Street House number : y'
    address.classList.add('animate')
    address.classList.add('align')
    
    const instaHead = document.createElement('h2')
    instaHead.textContent = 'Instagram: '
    instaHead.classList.add('animate')
    const insta = document.createElement('h2')
    insta.textContent = ' @restraunt_name'
    insta.classList.add('animate')
    insta.classList.add('align')

    contactDiv.appendChild(phoneNumberHead)
    contactDiv.appendChild(phoneNumber)
    contactDiv.appendChild(eMailHead)
    contactDiv.appendChild(eMail)
    contactDiv.appendChild(addressHead)
    contactDiv.appendChild(address)
    contactDiv.appendChild(instaHead)
    contactDiv.appendChild(insta)

    return contactDiv
}

function showContact(){
    const mainDiv = document.getElementById('main');
    mainDiv.textContent = ''
    mainDiv.appendChild(createContact());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showContact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function createHome(){
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home');
    
    const welcome = document.createElement('p');
    welcome.classList.add('welcome');
    welcome.textContent = 'Welcome to the Restraunt Name '

    const tagLine = document.createElement('p');
    tagLine.classList.add('tagline');
    tagLine.textContent = 'Best Food in the Country'

    const image = document.createElement('img');
    image.setAttribute('src','./images/home.jpg');

    const orderUs = document.createElement('p')
    orderUs.classList.add('order')
    orderUs.textContent = 'Order From Us Online and get 10% Off'
    
    homeDiv.appendChild(welcome)
    homeDiv.appendChild(tagLine)
    homeDiv.appendChild(image)
    homeDiv.appendChild(orderUs)

    return homeDiv
}

function showHome(){
    const mainDiv = document.getElementById('main');
    mainDiv.textContent = ''
    mainDiv.appendChild(createHome());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showHome);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createMenu(){
    let menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');
    
    menuDiv.appendChild(foodItem('Margarita',"Your Pizza !!" ));
    menuDiv.appendChild(foodItem('Veg Loaded Pizza',"Your Pizza !!" ));
    menuDiv.appendChild(foodItem('White Sauce Pasta',"Your Pasta !!" ));
    menuDiv.appendChild(foodItem('Red Sauce Pasta',"Your Pasta !!" ));
    menuDiv.appendChild(foodItem('Veg Burger',"Your Veb Loaded Burger with extra patty" ));
    menuDiv.appendChild(foodItem('Non Veg Burger',"Delicious Chicken Burger with extra patty" ));
    menuDiv.appendChild(foodItem('French Fries',"Your Fries !!" ));
    menuDiv.appendChild(foodItem('Grilled Sandwich',"Your Fries !!" ));

    return menuDiv
}


function foodItem(name,description){
    const food = document.createElement('div');
    food.classList.add('food-item');

    const foodName = document.createElement('h1');
    foodName.textContent = name

    const foodDescription = document.createElement('p');
    foodDescription.textContent = description

    const foodImage = document.createElement('img');
    foodImage.src = `./images/food/${name}.jpg`
    foodImage.alt = `${name}`

    food.appendChild(foodImage)
    food.appendChild(foodName)
    food.appendChild(foodDescription)

    return food

}

function showMenu(){
    const mainDiv = document.getElementById('main');
    mainDiv.textContent = ''
    mainDiv.appendChild(createMenu());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showMenu);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




const contentDiv = document.getElementById('content');
const navButtons = document.getElementsByClassName('button-nav');

function createHeader(){
    const header = document.createElement('header');
    header.classList.add = 'header';
    
    const restrauntName = document.createElement('h1');
    restrauntName.classList.add('r-name');
    restrauntName.textContent = 'Restraunt Name';
    
    header.appendChild(restrauntName);
    header.appendChild(createNav());
    
    return header
}

function createNav(){
    const navBar = document.createElement('nav');
    navBar.classList.add('navbar');
    
    const homeButton = document.createElement('button');
    homeButton.classList.add('button-nav');
    homeButton.textContent = 'Home';
    homeButton.addEventListener('click',()=>{
        selectButton(homeButton)
        ;(0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])()
    })
    
    const menuButton = document.createElement('button');
    menuButton.classList.add('button-nav');
    menuButton.textContent = 'Menu';
    menuButton.addEventListener('click',()=>{
        selectButton(menuButton)
        ;(0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])()
        const maindiv = document.getElementById('main');
        main.style.marginBottom = "4em"
    })

    const contactButton = document.createElement('button');
    contactButton.classList.add('button-nav');
    contactButton.textContent = 'Contact';
    contactButton.addEventListener('click',()=>{
        selectButton(contactButton)
        ;(0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])()
    })

    navBar.appendChild(homeButton);
    navBar.appendChild(menuButton);
    navBar.appendChild(contactButton);

    return navBar
}

function selectButton(clickedButton){

    for (const button of navButtons) {
        button.classList.remove('selected');
    }

    clickedButton.classList.add('selected');
}


function createMain(){
    const main = document.createElement('div');
    main.classList.add('main');
    main.setAttribute('id','main');
    return main;
}

function createFooter(){
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const copyright = document.createElement('p');
    copyright.classList.add('copyright-text');
    copyright.textContent= "copyright © Darshika";

    footer.appendChild(copyright);

    return footer

}

contentDiv.appendChild(createHeader());
contentDiv.appendChild(createMain());
contentDiv.appendChild(createFooter());
(0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7O0FDdEQxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7O0FDbEN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxLQUFLO0FBQzFDLHVCQUF1QixLQUFLO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVE7Ozs7OztVQzdDdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjhCO0FBQ0E7QUFDTTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtEQUFRO0FBQ2hCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtEQUFRO0FBQ2hCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxREFBVztBQUNuQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0cmF1bnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RyYXVudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdHJhdW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0cmF1bnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0cmF1bnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdHJhdW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0cmF1bnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RyYXVudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKXtcclxuICAgIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhY3REaXYuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xyXG5cclxuICAgIGNvbnN0IHBob25lTnVtYmVySGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcclxuICAgIHBob25lTnVtYmVySGVhZC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlJylcclxuICAgIHBob25lTnVtYmVySGVhZC50ZXh0Q29udGVudCA9ICdQaG9uZSBOdW1iZXI6J1xyXG4gICAgY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgICBwaG9uZU51bWJlci50ZXh0Q29udGVudCA9IGAg8J+Tnjk5OS04ODgtNzc3YFxyXG4gICAgcGhvbmVOdW1iZXIuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZScpXHJcbiAgICBwaG9uZU51bWJlci5jbGFzc0xpc3QuYWRkKCdhbGlnbicpXHJcblxyXG4gICAgY29uc3QgZU1haWxIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgZU1haWxIZWFkLnRleHRDb250ZW50ID0gJ0VtYWlsIEFkZHJlc3M6ICdcclxuICAgIGVNYWlsSGVhZC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlJylcclxuICAgIGNvbnN0IGVNYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgZU1haWwudGV4dENvbnRlbnQgPSAn4pyJIHh5ekBnbWFpbC5jb20nXHJcbiAgICBlTWFpbC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlJylcclxuICAgIGVNYWlsLmNsYXNzTGlzdC5hZGQoJ2FsaWduJylcclxuICAgIFxyXG4gICAgY29uc3QgYWRkcmVzc0hlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgICBhZGRyZXNzSGVhZC50ZXh0Q29udGVudCA9ICdBZGRyZXNzOiAnXHJcbiAgICBhZGRyZXNzSGVhZC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlJylcclxuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgICBhZGRyZXNzLnRleHRDb250ZW50ID0gJyDwn4+gIFgtU3RyZWV0IEhvdXNlIG51bWJlciA6IHknXHJcbiAgICBhZGRyZXNzLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUnKVxyXG4gICAgYWRkcmVzcy5jbGFzc0xpc3QuYWRkKCdhbGlnbicpXHJcbiAgICBcclxuICAgIGNvbnN0IGluc3RhSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcclxuICAgIGluc3RhSGVhZC50ZXh0Q29udGVudCA9ICdJbnN0YWdyYW06ICdcclxuICAgIGluc3RhSGVhZC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlJylcclxuICAgIGNvbnN0IGluc3RhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgaW5zdGEudGV4dENvbnRlbnQgPSAnIEByZXN0cmF1bnRfbmFtZSdcclxuICAgIGluc3RhLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUnKVxyXG4gICAgaW5zdGEuY2xhc3NMaXN0LmFkZCgnYWxpZ24nKVxyXG5cclxuICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQocGhvbmVOdW1iZXJIZWFkKVxyXG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChwaG9uZU51bWJlcilcclxuICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoZU1haWxIZWFkKVxyXG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChlTWFpbClcclxuICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoYWRkcmVzc0hlYWQpXHJcbiAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGFkZHJlc3MpXHJcbiAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGluc3RhSGVhZClcclxuICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoaW5zdGEpXHJcblxyXG4gICAgcmV0dXJuIGNvbnRhY3REaXZcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0NvbnRhY3QoKXtcclxuICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xyXG4gICAgbWFpbkRpdi50ZXh0Q29udGVudCA9ICcnXHJcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3QoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNob3dDb250YWN0OyIsIlxyXG5mdW5jdGlvbiBjcmVhdGVIb21lKCl7XHJcbiAgICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBob21lRGl2LmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcclxuICAgIFxyXG4gICAgY29uc3Qgd2VsY29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHdlbGNvbWUuY2xhc3NMaXN0LmFkZCgnd2VsY29tZScpO1xyXG4gICAgd2VsY29tZS50ZXh0Q29udGVudCA9ICdXZWxjb21lIHRvIHRoZSBSZXN0cmF1bnQgTmFtZSAnXHJcblxyXG4gICAgY29uc3QgdGFnTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRhZ0xpbmUuY2xhc3NMaXN0LmFkZCgndGFnbGluZScpO1xyXG4gICAgdGFnTGluZS50ZXh0Q29udGVudCA9ICdCZXN0IEZvb2QgaW4gdGhlIENvdW50cnknXHJcblxyXG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywnLi9pbWFnZXMvaG9tZS5qcGcnKTtcclxuXHJcbiAgICBjb25zdCBvcmRlclVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBvcmRlclVzLmNsYXNzTGlzdC5hZGQoJ29yZGVyJylcclxuICAgIG9yZGVyVXMudGV4dENvbnRlbnQgPSAnT3JkZXIgRnJvbSBVcyBPbmxpbmUgYW5kIGdldCAxMCUgT2ZmJ1xyXG4gICAgXHJcbiAgICBob21lRGl2LmFwcGVuZENoaWxkKHdlbGNvbWUpXHJcbiAgICBob21lRGl2LmFwcGVuZENoaWxkKHRhZ0xpbmUpXHJcbiAgICBob21lRGl2LmFwcGVuZENoaWxkKGltYWdlKVxyXG4gICAgaG9tZURpdi5hcHBlbmRDaGlsZChvcmRlclVzKVxyXG5cclxuICAgIHJldHVybiBob21lRGl2XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dIb21lKCl7XHJcbiAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuICAgIG1haW5EaXYudGV4dENvbnRlbnQgPSAnJ1xyXG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaG93SG9tZTsiLCJmdW5jdGlvbiBjcmVhdGVNZW51KCl7XHJcbiAgICBsZXQgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudURpdi5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XHJcbiAgICBcclxuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoZm9vZEl0ZW0oJ01hcmdhcml0YScsXCJZb3VyIFBpenphICEhXCIgKSk7XHJcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKGZvb2RJdGVtKCdWZWcgTG9hZGVkIFBpenphJyxcIllvdXIgUGl6emEgISFcIiApKTtcclxuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoZm9vZEl0ZW0oJ1doaXRlIFNhdWNlIFBhc3RhJyxcIllvdXIgUGFzdGEgISFcIiApKTtcclxuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoZm9vZEl0ZW0oJ1JlZCBTYXVjZSBQYXN0YScsXCJZb3VyIFBhc3RhICEhXCIgKSk7XHJcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKGZvb2RJdGVtKCdWZWcgQnVyZ2VyJyxcIllvdXIgVmViIExvYWRlZCBCdXJnZXIgd2l0aCBleHRyYSBwYXR0eVwiICkpO1xyXG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChmb29kSXRlbSgnTm9uIFZlZyBCdXJnZXInLFwiRGVsaWNpb3VzIENoaWNrZW4gQnVyZ2VyIHdpdGggZXh0cmEgcGF0dHlcIiApKTtcclxuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoZm9vZEl0ZW0oJ0ZyZW5jaCBGcmllcycsXCJZb3VyIEZyaWVzICEhXCIgKSk7XHJcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKGZvb2RJdGVtKCdHcmlsbGVkIFNhbmR3aWNoJyxcIllvdXIgRnJpZXMgISFcIiApKTtcclxuXHJcbiAgICByZXR1cm4gbWVudURpdlxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZm9vZEl0ZW0obmFtZSxkZXNjcmlwdGlvbil7XHJcbiAgICBjb25zdCBmb29kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmb29kLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtaXRlbScpO1xyXG5cclxuICAgIGNvbnN0IGZvb2ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGZvb2ROYW1lLnRleHRDb250ZW50ID0gbmFtZVxyXG5cclxuICAgIGNvbnN0IGZvb2REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGZvb2REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uXHJcblxyXG4gICAgY29uc3QgZm9vZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBmb29kSW1hZ2Uuc3JjID0gYC4vaW1hZ2VzL2Zvb2QvJHtuYW1lfS5qcGdgXHJcbiAgICBmb29kSW1hZ2UuYWx0ID0gYCR7bmFtZX1gXHJcblxyXG4gICAgZm9vZC5hcHBlbmRDaGlsZChmb29kSW1hZ2UpXHJcbiAgICBmb29kLmFwcGVuZENoaWxkKGZvb2ROYW1lKVxyXG4gICAgZm9vZC5hcHBlbmRDaGlsZChmb29kRGVzY3JpcHRpb24pXHJcblxyXG4gICAgcmV0dXJuIGZvb2RcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dNZW51KCl7XHJcbiAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuICAgIG1haW5EaXYudGV4dENvbnRlbnQgPSAnJ1xyXG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaG93TWVudTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBzaG93SG9tZSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCBzaG93TWVudSBmcm9tIFwiLi9tZW51XCI7XHJcbmltcG9ydCBzaG93Q29udGFjdCBmcm9tIFwiLi9jb250YWN0XCI7XHJcblxyXG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuY29uc3QgbmF2QnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2J1dHRvbi1uYXYnKTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpe1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCA9ICdoZWFkZXInO1xyXG4gICAgXHJcbiAgICBjb25zdCByZXN0cmF1bnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIHJlc3RyYXVudE5hbWUuY2xhc3NMaXN0LmFkZCgnci1uYW1lJyk7XHJcbiAgICByZXN0cmF1bnROYW1lLnRleHRDb250ZW50ID0gJ1Jlc3RyYXVudCBOYW1lJztcclxuICAgIFxyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHJlc3RyYXVudE5hbWUpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGhlYWRlclxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOYXYoKXtcclxuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gICAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoJ25hdmJhcicpO1xyXG4gICAgXHJcbiAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1uYXYnKTtcclxuICAgIGhvbWVCdXR0b24udGV4dENvbnRlbnQgPSAnSG9tZSc7XHJcbiAgICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgIHNlbGVjdEJ1dHRvbihob21lQnV0dG9uKVxyXG4gICAgICAgIHNob3dIb21lKClcclxuICAgIH0pXHJcbiAgICBcclxuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLW5hdicpO1xyXG4gICAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9ICdNZW51JztcclxuICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgICAgc2VsZWN0QnV0dG9uKG1lbnVCdXR0b24pXHJcbiAgICAgICAgc2hvd01lbnUoKVxyXG4gICAgICAgIGNvbnN0IG1haW5kaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xyXG4gICAgICAgIG1haW4uc3R5bGUubWFyZ2luQm90dG9tID0gXCI0ZW1cIlxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1uYXYnKTtcclxuICAgIGNvbnRhY3RCdXR0b24udGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XHJcbiAgICBjb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgIHNlbGVjdEJ1dHRvbihjb250YWN0QnV0dG9uKVxyXG4gICAgICAgIHNob3dDb250YWN0KClcclxuICAgIH0pXHJcblxyXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xyXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xyXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xyXG5cclxuICAgIHJldHVybiBuYXZCYXJcclxufVxyXG5cclxuZnVuY3Rpb24gc2VsZWN0QnV0dG9uKGNsaWNrZWRCdXR0b24pe1xyXG5cclxuICAgIGZvciAoY29uc3QgYnV0dG9uIG9mIG5hdkJ1dHRvbnMpIHtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGlja2VkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNYWluKCl7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcclxuICAgIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsJ21haW4nKTtcclxuICAgIHJldHVybiBtYWluO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKXtcclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xyXG5cclxuICAgIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvcHlyaWdodC5jbGFzc0xpc3QuYWRkKCdjb3B5cmlnaHQtdGV4dCcpO1xyXG4gICAgY29weXJpZ2h0LnRleHRDb250ZW50PSBcImNvcHlyaWdodCDCqSBEYXJzaGlrYVwiO1xyXG5cclxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChjb3B5cmlnaHQpO1xyXG5cclxuICAgIHJldHVybiBmb290ZXJcclxuXHJcbn1cclxuXHJcbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xyXG5jb250ZW50RGl2LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XHJcbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xyXG5zaG93SG9tZSgpXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==