define(["require","exports","../../Types","../../Integer","../../Compare","../../Exceptions/ArgumentException","../../Exceptions/ArgumentNullException","../../Exceptions/ArgumentOutOfRangeException","./initialize","./copy"],function(n,e,t,r,i,o,a,u,f,c){"use strict";function l(n,e,r){void 0===r&&(r=i.areEqual);var o=n&&n.length;if(o){if(n instanceof Array&&!t.Type.isTrueNaN(e))return n.indexOf(e);for(var a=0;a<o;a++)if(r(n[a],e))return a}return-1}function g(n,e,t){return void 0===t&&(t=i.areEqual),l(n,e,t)!=-1}function s(n,e,t,r){if(!n||!n.length||0===r)return 0;if(r<0)throw new u.ArgumentOutOfRangeException("max",r,z);r||(r=1/0);for(var i=0,o=0,a=n.length;o<a&&(n[o]!==e||(n[o]=t,++i,i!=r));o++);return i}function p(n,e,t,i){if(void 0===t&&(t=0),n){if(r.Integer.assertZeroOrGreater(t,"start"),i||0===i||(i=n.length),r.Integer.assert(i,"stop"),i<t)throw new u.ArgumentOutOfRangeException("stop",i,"is less than start");for(var o=t;o<i;o++)n[o]=e}}function h(n,e,t){void 0===e&&(e=0),p(n,null,e,t)}function v(n,e,t){if(void 0===t&&(t=i.areEqual),!n)throw new a.ArgumentNullException("array",T);var r=n.length,o=!r||!g(n,e,t);return o&&(n[r]=e),o}function x(n,e){if(!n)throw new a.ArgumentNullException("array",T);if(!t.Type.isFunction(e))throw new o.ArgumentException("predicate","Must be a function.");var r=n.length;if(!t.Type.isNumber(r,!0)||r<0)throw new o.ArgumentException("array","Does not have a valid length.");if(n instanceof Array){for(var i=0;i<r;i++)if(e(n[i],i))return i}else for(var i=0;i<r;i++)if(i in n&&e(n[i],i))return i;return-1}function w(n,e){if(n&&e)for(var t=0;t<n.length&&e(n[t],t)!==!1;t++);}function E(n,e){if(n&&e)for(var t=0;t<n.length;t++)n[t]=e(n[t],t)}function m(n,e){if(!n)throw new a.ArgumentNullException("array",T);if(r.Integer.assert(e,"index"),e<0)throw new u.ArgumentOutOfRangeException("index",e,z);var t=e<n.length;return t&&n.splice(e,1),t}function O(n,e,t,r){if(void 0===r&&(r=i.areEqual),!n||!n.length||0===t)return 0;if(t<0)throw new u.ArgumentOutOfRangeException("max",t,z);var o=0;if(t&&isFinite(t)){for(var a=[],f=0,c=n.length;f<c&&(!r(n[f],e)||(a.push(f),++o,o!=t));f++);for(var f=a.length-1;f>=0;f--)n.splice(a[f],1)}else for(var f=n.length-1;f>=0;f--)r(n[f],e)&&(n.splice(f,1),++o);return o}function d(n,e){if(r.Integer.assert(e,"count"),e<0)throw new u.ArgumentOutOfRangeException("count",e,z);for(var t=f.initialize(e),i=0;i<e;i++)t[i]=n;return t}function A(n,e,t){if(void 0===t&&(t=1),isNaN(n)||!isFinite(n))throw new u.ArgumentOutOfRangeException("first",n,I);if(isNaN(e)||!isFinite(e))throw new u.ArgumentOutOfRangeException("count",e,I);if(e<0)throw new u.ArgumentOutOfRangeException("count",e,z);for(var r=f.initialize(e),i=0;i<e;i++)r[i]=n,n+=t;return r}function y(n,e,t){if(void 0===t&&(t=1),0==t)throw new u.ArgumentOutOfRangeException("step",t,b);return A(n,(e-n)/t,t)}function N(n){var e={};return n.filter(function(n){return!(n in e)&&(e[n]=!0)})}function R(n,e){void 0===e&&(e=0);for(var t=[],r=0;r<n.length;r++){var i=n[r];if(i instanceof Array){e>0&&(i=R(i,e-1));for(var o=0;o<i.length;o++)t.push(i[o])}else t.push(i)}return t}e.initialize=f.initialize,e.copy=c.copy,e.copyTo=c.copyTo;var T="Cannot be null.",b="Cannot be zero.",z="Cannot be less than zero.",I="Must be a valid finite number";e.indexOf=l,e.contains=g,e.replace=s,e.updateRange=p,e.clear=h,e.register=v,e.findIndex=x,e.forEach=w,e.applyTo=E,e.removeIndex=m,e.remove=O,e.repeat=d,e.range=A,e.rangeUntil=y,e.distinct=N,e.flatten=R});
//# sourceMappingURL=Utility.js.map