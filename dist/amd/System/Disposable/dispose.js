define(["require","exports","../Types"],function(e,n,t){"use strict";function r(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];f(e,!1)}function i(e,n){try{return n(e)}finally{o(e,!1)}}function o(e,n){if(e&&t.Type.of(e).member("dispose").isFunction)if(n)try{e.dispose()}catch(r){return r}else e.dispose();return null}function f(e,n,t){void 0===t&&(t=0);for(var r,i=e?e.length:0;t<i;t++){var s=e[t];if(s)if(n){var u=o(s,!0);u&&(r||(r=[]),r.push(u))}else{var c=!1;try{o(s,!1),c=!0}finally{!c&&t+1<i&&f(e,!1,t+1)}if(!c)break}}return r}n.dispose=r,function(e){function n(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];r.deferred(e)}function t(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return f(e,!0)}function r(e,n){return e&&e.length?f(e.slice(),n):void 0}e.deferred=n,e.withoutException=t,e.these=r,function(e){function n(e,n){void 0===n&&(n=0),e&&e.length&&(n>=0||(n=0),setTimeout(f,n,e.slice(),!0))}e.deferred=n}(r=e.these||(e.these={}))}(r=n.dispose||(n.dispose={})),n.using=i,Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=r});
//# sourceMappingURL=dispose.js.map