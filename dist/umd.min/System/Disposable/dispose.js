!function(e,t){if("object"==typeof module&&"object"==typeof module.exports){var n=t(require,exports);void 0!==n&&(module.exports=n)}else"function"==typeof define&&define.amd&&define(e,t)}(["require","exports","../Types"],function(e,t){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];o(e,!1)}function r(e,t){try{return t(e)}finally{i(e,!1)}}function i(e,t){if(e&&f.Type.of(e).member("dispose").isFunction)if(t)try{e.dispose()}catch(n){return n}else e.dispose();return null}function o(e,t,n){void 0===n&&(n=0);for(var r,f=e?e.length:0;n<f;n++){var u=e[n];if(u)if(t){var s=i(u,!0);s&&(r||(r=[]),r.push(s))}else{var d=!1;try{i(u,!1),d=!0}finally{!d&&n+1<f&&o(e,!1,n+1)}if(!d)break}}return r}/*!
     * @author electricessence / https://github.com/electricessence/
     * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
     */
var f=e("../Types");t.dispose=n,function(e){function t(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];r.deferred(e)}function n(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return o(e,!0)}function r(e,t){return e&&e.length?o(e.slice(),t):void 0}e.deferred=t,e.withoutException=n,e.these=r,function(e){function t(e,t){void 0===t&&(t=0),e&&e.length&&(t>=0||(t=0),setTimeout(o,t,e.slice(),!0))}e.deferred=t}(r=e.these||(e.these={}))}(n=t.dispose||(t.dispose={})),t.using=r,Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n});
//# sourceMappingURL=dispose.js.map