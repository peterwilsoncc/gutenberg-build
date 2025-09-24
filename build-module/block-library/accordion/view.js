import * as __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__ from "@wordpress/interactivity";
/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

;// external "@wordpress/interactivity"
var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
const interactivity_namespaceObject = x({ ["getContext"]: () => (__WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__.getContext), ["store"]: () => (__WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__.store), ["withSyncEvent"]: () => (__WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__.withSyncEvent) });
;// ./packages/block-library/build-module/accordion/view.js
/**
 * WordPress dependencies
 */

(0,interactivity_namespaceObject.store)('core/accordion', {
  state: {
    get isOpen() {
      const {
        id,
        accordionContents
      } = (0,interactivity_namespaceObject.getContext)();
      const accordionContent = accordionContents.find(item => item.id === id);
      return accordionContent ? accordionContent.isOpen : false;
    }
  },
  actions: {
    toggle: () => {
      const context = (0,interactivity_namespaceObject.getContext)();
      const {
        id,
        autoclose,
        accordionContents
      } = context;
      const accordionContent = accordionContents.find(item => item.id === id);
      if (autoclose) {
        accordionContents.forEach(item => {
          item.isOpen = item.id === id ? !accordionContent.isOpen : false;
        });
      } else {
        accordionContent.isOpen = !accordionContent.isOpen;
      }
    },
    handleKeyDown: (0,interactivity_namespaceObject.withSyncEvent)(event => {
      if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown' && event.key !== 'Home' && event.key !== 'End') {
        return;
      }
      event.preventDefault();
      const context = (0,interactivity_namespaceObject.getContext)();
      const {
        id,
        accordionContents
      } = context;
      const currentIndex = accordionContents.findIndex(item => item.id === id);
      let nextIndex;
      switch (event.key) {
        case 'ArrowUp':
          nextIndex = Math.max(0, currentIndex - 1);
          break;
        case 'ArrowDown':
          nextIndex = Math.min(currentIndex + 1, accordionContents.length - 1);
          break;
        case 'Home':
          nextIndex = 0;
          break;
        case 'End':
          nextIndex = accordionContents.length - 1;
          break;
      }
      const nextId = accordionContents[nextIndex].id;
      const nextButton = document.getElementById(nextId);
      if (nextButton) {
        nextButton.focus();
      }
    })
  },
  callbacks: {
    initAccordionContents: () => {
      const context = (0,interactivity_namespaceObject.getContext)();
      const {
        id,
        openByDefault
      } = context;
      context.accordionContents.push({
        id,
        isOpen: openByDefault
      });
    }
  }
});

