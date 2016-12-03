define(["require","exports","../../Compare","../../Types"],function(r,n,e,t){"use strict";function o(r,n){if(r&&n&&r===n||!r&&!n)return!0;if(!r||!n)return!1;var e=r.length;return e===n.length&&(0===e||e)}function a(r,n,o){if(void 0===n&&(n=!0),void 0===o&&(o=e.areEqual),!r)throw new Error("ArgumentNullException: 'arrays' cannot be null.");if(r.length<2)throw new Error("Cannot compare a set of arrays less than 2.");t.Type.isFunction(n)&&(o=n,n=!0);for(var a=r[0],u=1,f=r.length;u<f;u++)if(!i(a,r[u],n,o))return!1;return!0}function i(r,n,a,i){void 0===a&&(a=!0),void 0===i&&(i=e.areEqual);var u=o(r,n);if(t.Type.isBoolean(u))return u;t.Type.isFunction(a)&&(i=a,a=!0);for(var f=0;f<u;f++)if(!i(r[f],n[f],a))return!1;return!0}function u(r,n){if(!r||r.length<2)return r;var e,t=r.length;t>65536?e=new Array(t):(e=[],e.length=t);for(var o=0;o<t;o++)e[o]=r[o];return e.sort(n),e}function f(r,n,a){void 0===a&&(a=e.compare);var i=o(r,n);if(t.Type.isBoolean(i))return i;r=u(r,a),n=u(n,a);for(var f=0;f<i;f++)if(0!==a(r[f],n[f]))return!1;return!0}n.areAllEqual=a,n.areEqual=i,n.areEquivalent=f});
//# sourceMappingURL=Compare.js.map