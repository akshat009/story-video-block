import * as __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__ from "@wordpress/interactivity";
/******/ var __webpack_modules__ = ({

/***/ "@wordpress/interactivity"
/*!*******************************************!*\
  !*** external "@wordpress/interactivity" ***!
  \*******************************************/
(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__;

/***/ }

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ const __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	const cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	const module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	if (!(moduleId in __webpack_modules__)) {
/******/ 		delete __webpack_module_cache__[moduleId];
/******/ 		const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 		e.code = 'MODULE_NOT_FOUND';
/******/ 		throw e;
/******/ 	}
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***************************************!*\
  !*** ./src/story-video-block/view.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/interactivity */ "@wordpress/interactivity");
/**
 * Frontend behavior for the Story Video Block, built on the Interactivity
 * API. Registered as a script module (`viewScriptModule` in block.json) —
 * `@wordpress/interactivity` only works when loaded as a module, not as a
 * classic script.
 *
 * The block's `save.js` renders both the poster/play-button facade and an
 * empty (no `src`) iframe, linked together by `data-wp-*` directives below.
 * Clicking the facade sets the iframe's `src` for the first time — so the
 * embed is only fetched once the visitor actually presses play, matching
 * this block's "lazy-loaded video embeds" description.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-interactivity/
 */

(0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.store)('create-block/story-video-block', {
  state: {
    get isPlaying() {
      return (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)().isPlaying;
    },
    get isNotPlaying() {
      return !(0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)().isPlaying;
    }
  },
  actions: {
    play(event) {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      if (context.isPlaying) {
        return;
      }

      // No direct-embed URL for this provider (e.g. TikTok) — let the
      // facade's own href navigate to the original video URL instead.
      if (!context.embedUrl) {
        return;
      }
      event.preventDefault();
      context.videoSrc = context.embedUrl;
      context.isPlaying = true;
    }
  }
});
})();


//# sourceMappingURL=view.js.map