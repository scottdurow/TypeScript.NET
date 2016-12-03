!function(t,e){if("object"==typeof module&&"object"==typeof module.exports){var n=e(require,exports);void 0!==n&&(module.exports=n)}else"function"==typeof define&&define.amd&&define(t,e)}(["require","exports","../System/Compare","../System/Collections/Array/copy","../System/Collections/Array/Compare","../System/Collections/Enumeration/Enumerator","../System/Collections/Enumeration/Enumerator","../System/Collections/Enumeration/EmptyEnumerator","../System/Types","../System/Integer","../System/Functions","../System/Collections/Enumeration/ArrayEnumerator","../System/Collections/Enumeration/EnumeratorBase","../System/Collections/Dictionaries/Dictionary","../System/Collections/Queue","../System/Disposable/dispose","../System/Disposable/DisposableBase","../System/Collections/Enumeration/UnsupportedEnumerableException","../System/Disposable/ObjectDisposedException","../System/Collections/Sorting/KeySortedContext","../System/Exceptions/ArgumentNullException","../System/Exceptions/ArgumentOutOfRangeException","../System/Collections/Enumeration/IndexEnumerator","../System/Collections/Enumeration/IteratorEnumerator","../System/Collections/Array/initialize","../System/Random","../System/Collections/Enumeration/InfiniteEnumerator","../extends"],function(t,e){"use strict";function n(){return 0}function r(){return 1}function o(t){return null!=t}function i(){return m.EmptyEnumerator}function u(t,e){if(e){if(!e.moveNext())return D.dispose(e),null;t.enqueue(e)}return e}function s(t,e){void 0===e&&(e=null);var n=new O.KeySortedContext(e,t.keySelector,t.order,t.comparer);return t.parent?s(t.parent,n):n}function a(t){if(t)throw new B.ObjectDisposedException("Enumerable");return!0}function c(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return f(t,e)}function f(t,e){var n=c.fromAny(t);if(!n)throw new A.UnsupportedEnumerableException;return e&&e.length?n.merge(e):n}/*!
     * @author electricessence / https://github.com/electricessence/
     * Original: http://linqjs.codeplex.com/
     * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
     */
var p=t("../System/Compare"),l=t("../System/Collections/Array/copy"),y=t("../System/Collections/Array/Compare"),h=t("../System/Collections/Enumeration/Enumerator"),d=t("../System/Collections/Enumeration/Enumerator"),m=t("../System/Collections/Enumeration/EmptyEnumerator"),v=t("../System/Types"),E=t("../System/Integer"),w=t("../System/Functions"),g=t("../System/Collections/Enumeration/ArrayEnumerator"),I=t("../System/Collections/Enumeration/EnumeratorBase"),N=t("../System/Collections/Dictionaries/Dictionary"),x=t("../System/Collections/Queue"),D=t("../System/Disposable/dispose"),b=t("../System/Disposable/DisposableBase"),A=t("../System/Collections/Enumeration/UnsupportedEnumerableException"),B=t("../System/Disposable/ObjectDisposedException"),O=t("../System/Collections/Sorting/KeySortedContext"),R=t("../System/Exceptions/ArgumentNullException"),S=t("../System/Exceptions/ArgumentOutOfRangeException"),_=t("../System/Collections/Enumeration/IndexEnumerator"),k=t("../System/Collections/Enumeration/IteratorEnumerator"),C=t("../System/Collections/Array/initialize"),q=t("../System/Random"),F=t("../System/Collections/Enumeration/InfiniteEnumerator"),T=t("../extends"),M=T["default"],j={},K=void 0,L=null,z=function(t){function e(){return t.apply(this,arguments)||this}return M(e,t),e.prototype.Greater=function(t,e){return t>e?t:e},e.prototype.Lesser=function(t,e){return t<e?t:e},e}(w.Functions),U=Object.freeze(new z),G=function(t){function e(e,n){var r=t.call(this,n)||this;return r._enumeratorFactory=e,r._isEndless=!0,r._disposableObjectName="InfiniteLinqEnumerable",r}return M(e,t),Object.defineProperty(e.prototype,"isEndless",{get:function(){return this._isEndless},enumerable:!0,configurable:!0}),e.prototype.getEnumerator=function(){return this.throwIfDisposed(),this._enumeratorFactory()},e.prototype._onDispose=function(){t.prototype._onDispose.call(this),this._enumeratorFactory=null},e.prototype.asEnumerable=function(){var t=this;return t.throwIfDisposed(),new e(function(){return t.getEnumerator()})},e.prototype.doAction=function(t,e,n,r){void 0===n&&(n=this.isEndless);var o=this;o.throwIfDisposed();var i=n||void 0;if(!t)throw new R.ArgumentNullException("action");return new V(function(){var n,u=0;return new I.EnumeratorBase(function(){a(!t),e&&e(),u=0,n=o.getEnumerator()},function(e){for(a(!t);n.moveNext();){var o=n.current,i=t(o,u++);if(i===!1||0===i)return e.yieldBreak();if(2!==i)return e.yieldReturn(o)}return r&&r(u),!1},function(){D.dispose(n)},i)},function(){t=L},i)},e.prototype.force=function(){this.throwIfDisposed(),this.doAction(n).getEnumerator().moveNext()},e.prototype.skip=function(t){var n=this;return n.throwIfDisposed(),isFinite(t)?(E.Integer.assert(t,"count"),this.where(function(e,n){return n>=t})):new e(i)},e.prototype.take=function(t){if(!(t>0))return c.empty();var e=this;if(e.throwIfDisposed(),!isFinite(t))throw new S.ArgumentOutOfRangeException("count",t,"Must be finite.");return E.Integer.assert(t,"count"),e.doAction(function(e,n){return n<t},null,!1)},e.prototype.elementAt=function(t){var e=this.elementAtOrDefault(t,j);if(e===j)throw new S.ArgumentOutOfRangeException("index",t,"is greater than or equal to the number of elements in source");return e},e.prototype.elementAtOrDefault=function(t,e){var n=this;n.throwIfDisposed(),E.Integer.assertZeroOrGreater(t,"index");var r=t;return D.using(this.getEnumerator(),function(t){for(var n=0;t.moveNext();){if(n==r)return t.current;n++}return e})},e.prototype.first=function(){var t=this.firstOrDefault(j);if(t===j)throw new Error("first:The sequence is empty.");return t},e.prototype.firstOrDefault=function(t){var e=this;return e.throwIfDisposed(),D.using(this.getEnumerator(),function(e){return e.moveNext()?e.current:t})},e.prototype.single=function(){var t=this;return t.throwIfDisposed(),D.using(this.getEnumerator(),function(t){if(t.moveNext()){var e=t.current;if(!t.moveNext())return e;throw new Error("single:sequence contains more than one element.")}throw new Error("single:The sequence is empty.")})},e.prototype.singleOrDefault=function(t){var e=this;return e.throwIfDisposed(),D.using(this.getEnumerator(),function(e){if(e.moveNext()){var n=e.current;if(!e.moveNext())return n}return t})},e.prototype.any=function(){var t=this;return t.throwIfDisposed(),D.using(this.getEnumerator(),function(t){return t.moveNext()})},e.prototype.isEmpty=function(){return!this.any()},e.prototype.traverseDepthFirst=function(t,e){void 0===e&&(e=U.Identity);var n=this,r=!n.throwIfDisposed(),o=n._isEndless;return new V(function(){var i,u,s=[];return new I.EnumeratorBase(function(){a(r),i=n.getEnumerator(),u=0},function(n){for(a(r);;){if(i.moveNext()){var o=e(i.current,u);s[u++]=i;var f=t(i.current),p=!v.Type.isString(f)&&c.fromAny(f);return i=p?p.getEnumerator():m.EmptyEnumerator,n.yieldReturn(o)}if(0==u)return!1;i.dispose(),i=s[--u],s.length=u}},function(){try{D.dispose(i)}finally{D.dispose.these(s)}},o)},function(){r=!0},o)},e.prototype.flatten=function(){return this.selectMany(function(t){var e=!v.Type.isString(t)&&c.fromAny(t);return e?e.flatten():[t]})},e.prototype.pairwise=function(t){var e=this;if(e.throwIfDisposed(),!t)throw new R.ArgumentNullException("selector");var n;return this.select(function(e,r){var o=r?t(n,e,r):L;return n=e,o}).skip(1)},e.prototype.scan=function(t,e){var n=this;if(n.throwIfDisposed(),!t)throw new R.ArgumentNullException("func");return e===K?this.select(function(n,r){return e=r?t(e,n,r):n}):this.select(function(n,r){return e=t(e,n,r)})},e.prototype.select=function(t){return this._filterSelected(t)},e.prototype._selectMany=function(t,e){var n=this;if(n.throwIfDisposed(),!t)throw new R.ArgumentNullException("collectionSelector");var r=n._isEndless;return e||(e=function(t,e){return e}),new V(function(){var o,i,u=0;return new I.EnumeratorBase(function(){a(!t),o=n.getEnumerator(),i=K,u=0},function(n){if(a(!t),i===K&&!o.moveNext())return!1;do{if(!i){var r=t(o.current,u++);if(!r)continue;i=h.from(r)}if(i.moveNext())return n.yieldReturn(e(o.current,i.current));i.dispose(),i=null}while(o.moveNext());return!1},function(){D.dispose(o,i),o=L,i=null},r)},function(){t=L},r)},e.prototype.selectMany=function(t,e){return this._selectMany(t,e)},e.prototype._filterSelected=function(t,e){void 0===t&&(t=U.Identity);var n=this,r=!n.throwIfDisposed();if(!t)throw new R.ArgumentNullException("selector");return new V(function(){var o,i=0;return new I.EnumeratorBase(function(){a(!t),i=0,o=n.getEnumerator()},function(n){for(a(r);o.moveNext();){var u=i++,s=t(o.current,u);if(!e||e(s,u++))return n.yieldReturn(s)}return!1},function(){D.dispose(o)},n._isEndless)},function(){r=!1},n._isEndless)},e.prototype.choose=function(t){return void 0===t&&(t=U.Identity),this._filterSelected(t,o)},e.prototype.where=function(t){return this._filterSelected(U.Identity,t)},e.prototype.nonNull=function(){return this.where(function(t){return null!=t&&t!=K})},e.prototype.ofType=function(t){var e;switch(t){case Number:e=v.Type.NUMBER;break;case String:e=v.Type.STRING;break;case Boolean:e=v.Type.BOOLEAN;break;case Function:e=v.Type.FUNCTION;break;default:return this.where(function(e){return e instanceof t})}return this.where(function(t){return o(t)&&typeof t===e})},e.prototype.except=function(t,e){var n=this,r=!n.throwIfDisposed(),o=n._isEndless;return new V(function(){var i,u;return new I.EnumeratorBase(function(){a(r),i=n.getEnumerator(),u=new N.Dictionary(e),t&&h.forEach(t,function(t){u.addByKeyValue(t,!0)})},function(t){for(a(r);i.moveNext();){var e=i.current;if(!u.containsKey(e))return u.addByKeyValue(e,!0),t.yieldReturn(e)}return!1},function(){D.dispose(i),u.clear()},o)},function(){r=!0},o)},e.prototype.distinct=function(t){return this.except(L,t)},e.prototype.distinctUntilChanged=function(t){void 0===t&&(t=U.Identity);var e=this,n=!e.throwIfDisposed(),r=e._isEndless;return new V(function(){var o,i,u=!0;return new I.EnumeratorBase(function(){a(n),o=e.getEnumerator()},function(e){for(a(n);o.moveNext();){var r=t(o.current);if(u)u=!1;else if(p.areEqual(i,r))continue;return i=r,e.yieldReturn(o.current)}return!1},function(){D.dispose(o)},r)},function(){n=!0},r)},e.prototype.defaultIfEmpty=function(t){var e=this,n=!e.throwIfDisposed(),r=e._isEndless;return new V(function(){var o,i;return new I.EnumeratorBase(function(){i=!0,a(n),o=e.getEnumerator()},function(e){return a(n),o.moveNext()?(i=!1,e.yieldReturn(o.current)):!!i&&(i=!1,e.yieldReturn(t))},function(){D.dispose(o)},r)},null,r)},e.prototype.zip=function(t,e){var n=this;return n.throwIfDisposed(),new V(function(){var r,o,i=0;return new I.EnumeratorBase(function(){i=0,r=n.getEnumerator(),o=h.from(t)},function(t){return r.moveNext()&&o.moveNext()&&t.yieldReturn(e(r.current,o.current,i++))},function(){D.dispose(r,o)})})},e.prototype.zipMultiple=function(t,e){var n=this;return n.throwIfDisposed(),t.length?new V(function(){var r,o,i,u=0;return new I.EnumeratorBase(function(){r=new x.Queue(t),u=0,o=n.getEnumerator(),i=L},function(t){if(o.moveNext())for(;;){for(;!i;){if(!r.count)return t.yieldBreak();var n=r.dequeue();n&&(i=h.from(n))}if(i.moveNext())return t.yieldReturn(e(o.current,i.current,u++));i.dispose(),i=L}return t.yieldBreak()},function(){D.dispose(o,r)})}):c.empty()},e.prototype.join=function(t,e,n,r,o){void 0===o&&(o=U.Identity);var i=this;return new V(function(){var u,s,a,f=0;return new I.EnumeratorBase(function(){u=i.getEnumerator(),s=c.from(t).toLookup(n,U.Identity,o)},function(t){for(;;){if(a){var n=a[f++];if(n!==K)return t.yieldReturn(r(u.current,n));a=null,f=0}if(!u.moveNext())return t.yieldBreak();var o=e(u.current);a=s.get(o)}},function(){D.dispose(u),a=null,u=L,s=L})})},e.prototype.groupJoin=function(t,e,n,r,o){void 0===o&&(o=U.Identity);var i=this;return new V(function(){var u,s;return new I.EnumeratorBase(function(){u=i.getEnumerator(),s=c.from(t).toLookup(n,U.Identity,o)},function(t){return u.moveNext()&&t.yieldReturn(r(u.current,s.get(e(u.current))))},function(){D.dispose(u),u=L,s=L})})},e.prototype.merge=function(t){var e=this,n=e._isEndless;return t&&0!=t.length?new V(function(){var r,o;return new I.EnumeratorBase(function(){r=e.getEnumerator(),o=new x.Queue(t)},function(t){for(;;){for(;!r&&o.tryDequeue(function(t){r=h.from(t)}););if(r&&r.moveNext())return t.yieldReturn(r.current);{if(!r)return t.yieldBreak();r.dispose(),r=L}}},function(){D.dispose(r,o)},n)},null,n):e},e.prototype.concat=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this.merge(t)},e.prototype.union=function(t,e){void 0===e&&(e=U.Identity);var n=this,r=n._isEndless;return new V(function(){var o,i,u;return new I.EnumeratorBase(function(){o=n.getEnumerator(),u=new N.Dictionary(e)},function(e){var n;if(i===K){for(;o.moveNext();)if(n=o.current,!u.containsKey(n))return u.addByKeyValue(n,null),e.yieldReturn(n);i=h.from(t)}for(;i.moveNext();)if(n=i.current,!u.containsKey(n))return u.addByKeyValue(n,null),e.yieldReturn(n);return!1},function(){D.dispose(o,i)},r)},null,r)},e.prototype.insertAt=function(t,e){E.Integer.assertZeroOrGreater(t,"index");var n=t,r=this;r.throwIfDisposed();var o=r._isEndless;return new V(function(){var t,i,u=0,s=!1;return new I.EnumeratorBase(function(){u=0,t=r.getEnumerator(),i=h.from(e),s=!1},function(e){return u==n&&(s=!0,i.moveNext())?e.yieldReturn(i.current):t.moveNext()?(u++,e.yieldReturn(t.current)):!s&&i.moveNext()&&e.yieldReturn(i.current)},function(){D.dispose(t,i)},o)},null,o)},e.prototype.alternateMultiple=function(t){var e=this,n=e._isEndless;return new V(function(){var r,o,i,u;return new I.EnumeratorBase(function(){u=new g.ArrayEnumerator(c.toArray(t)),i=e.getEnumerator();var n=i.moveNext();o=n?1:0,n&&(r=i.current)},function(t){switch(o){case 0:return t.yieldBreak();case 2:if(u.moveNext())return t.yieldReturn(u.current);u.reset(),o=1}var e=r,n=i.moveNext();return o=n?2:0,n&&(r=i.current),t.yieldReturn(e)},function(){D.dispose(i,u)},n)},null,n)},e.prototype.alternateSingle=function(t){return this.alternateMultiple(c.make(t))},e.prototype.alternate=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this.alternateMultiple(t)},e.prototype.catchError=function(t){var e=this,n=!e.throwIfDisposed();return new V(function(){var r;return new I.EnumeratorBase(function(){try{a(n),r=e.getEnumerator()}catch(t){}},function(e){try{if(a(n),r.moveNext())return e.yieldReturn(r.current)}catch(o){t(o)}return!1},function(){D.dispose(r)})})},e.prototype.finallyAction=function(t){var e=this,n=!e.throwIfDisposed();return new V(function(){var r;return new I.EnumeratorBase(function(){a(n),r=e.getEnumerator()},function(t){return a(n),!!r.moveNext()&&t.yieldReturn(r.current)},function(){try{D.dispose(r)}finally{t()}})})},e.prototype.buffer=function(t){if(t<1||!isFinite(t))throw new Error("Invalid buffer size.");E.Integer.assert(t,"size");var e,n=this,r=n._isEndless;return new V(function(){var o;return new I.EnumeratorBase(function(){o=n.getEnumerator()},function(n){var r=C.initialize(t);for(e=0;e<t&&o.moveNext();)r[e++]=o.current;return r.length=e,!!e&&n.yieldReturn(r)},function(){D.dispose(o)},r)},null,r)},e.prototype.share=function(){var t=this;t.throwIfDisposed();var e;return new V(function(){return e||(e=t.getEnumerator())},function(){D.dispose(e)},t._isEndless)},e}(b.DisposableBase);e.InfiniteLinqEnumerable=G;var V=function(t){function e(e,n,r){var o=t.call(this,e,n)||this;return o._isEndless=r,o._disposableObjectName="Enumerable",o}return M(e,t),e.prototype.asEnumerable=function(){var t=this;return t.throwIfDisposed(),new e(function(){return t.getEnumerator()})},e.prototype.skip=function(e){return t.prototype.skip.call(this,e)},e.prototype.skipWhile=function(t){return this.throwIfDisposed(),this.doAction(function(e,n){return t(e,n)?2:1})},e.prototype.takeWhile=function(t){if(this.throwIfDisposed(),!t)throw new R.ArgumentNullException("predicate");return this.doAction(function(e,n){return t(e,n)?1:0},null,null)},e.prototype.takeUntil=function(t,e){if(this.throwIfDisposed(),!t)throw new R.ArgumentNullException("predicate");if(!e)return this.doAction(function(e,n){return t(e,n)?0:1},null,null);var n=!1;return this.doAction(function(e,r){return n?0:(n=t(e,r),1)},function(){n=!1},null)},e.prototype.traverseBreadthFirst=function(t,n){void 0===n&&(n=U.Identity);var r=this,o=!r.throwIfDisposed(),i=r._isEndless;return new e(function(){var e,u,s,f=0;return new I.EnumeratorBase(function(){a(o),e=r.getEnumerator(),f=0,u=[],s=0},function(r){for(a(o);;){if(e.moveNext())return u[s++]=e.current,r.yieldReturn(n(e.current,f));if(!s)return r.yieldBreak();var i=c.from(u).selectMany(t);if(!i.any())return r.yieldBreak();f++,u=[],s=0,e.dispose(),e=i.getEnumerator()}},function(){D.dispose(e),u.length=0},i)},function(){o=!0},i)},e.prototype.forEach=function(t,e){void 0===e&&(e=1/0);var n=this;if(n.throwIfDisposed(),!t)throw new R.ArgumentNullException("action");return d.throwIfEndless(n.isEndless),e>0?D.using(n.getEnumerator(),function(r){d.throwIfEndless(!isFinite(e)&&r.isEndless);for(var o=0;e>o&&n.throwIfDisposed()&&r.moveNext()&&t(r.current,o++)!==!1;);return o}):0},e.prototype.toArray=function(t){return t?this.where(t).toArray():this.copyTo([])},e.prototype.copyTo=function(t,e,n){if(void 0===e&&(e=0),void 0===n&&(n=1/0),this.throwIfDisposed(),!t)throw new R.ArgumentNullException("target");return E.Integer.assertZeroOrGreater(e),h.forEach(this,function(n,r){t[r+e]=n},n),t},e.prototype.toLookup=function(t,e,n){void 0===e&&(e=U.Identity),void 0===n&&(n=U.Identity);var r=new N.Dictionary(n);return this.forEach(function(n,o){var i=t(n,o),u=e(n,o),s=r.getValue(i);s!==K?s.push(u):r.addByKeyValue(i,[u])}),new W(r)},e.prototype.toMap=function(t,e){var n={};return this.forEach(function(r,o){n[t(r,o)]=e(r,o)}),n},e.prototype.toDictionary=function(t,e,n){void 0===n&&(n=U.Identity);var r=new N.Dictionary(n);return this.forEach(function(n,o){return r.addByKeyValue(t(n,o),e(n,o))}),r},e.prototype.toJoinedString=function(t,e){return void 0===t&&(t=""),void 0===e&&(e=U.Identity),this.select(e).toArray().join(t)},e.prototype.takeExceptLast=function(t){void 0===t&&(t=1);var n=this;if(!(t>0))return n;if(!isFinite(t))return c.empty();E.Integer.assert(t,"count");var r=t;return new e(function(){var t,e;return new I.EnumeratorBase(function(){t=n.getEnumerator(),e=new x.Queue},function(n){for(;t.moveNext();)if(e.enqueue(t.current),e.count>r)return n.yieldReturn(e.dequeue());return!1},function(){D.dispose(t,e)})})},e.prototype.skipToLast=function(t){if(!(t>0))return c.empty();var e=this;return isFinite(t)?(E.Integer.assert(t,"count"),e.reverse().take(t).reverse()):e},e.prototype.select=function(e){return t.prototype.select.call(this,e)},e.prototype.selectMany=function(t,e){return this._selectMany(t,e)},e.prototype.choose=function(t){return void 0===t&&(t=U.Identity),this._filterSelected(t,o)},e.prototype.reverse=function(){var t=this,n=!t.throwIfDisposed();return d.throwIfEndless(t._isEndless),new e(function(){var e,r=0;return new I.EnumeratorBase(function(){a(n),t.throwIfDisposed(),e=t.toArray(),r=e.length},function(t){return!!r&&t.yieldReturn(e[--r])},function(){e.length=0})},function(){n=!0})},e.prototype.shuffle=function(){var t=this,n=!t.throwIfDisposed();return d.throwIfEndless(t._isEndless),new e(function(){var e,r,o;return new I.EnumeratorBase(function(){a(n),e=t.toArray(),r=o=e.length},function(t){if(!o)return t.yieldBreak();var n=q.Random.integer(o),r=e[n];return e[n]=e[--o],e[o]=L,o%32==0&&(e.length=o),t.yieldReturn(r)},function(){e.length=0})},function(){n=!0})},e.prototype.count=function(t){var e=0;return this.forEach(t?function(n,r){t(n,r)&&++e}:function(){++e}),e},e.prototype.all=function(t){if(!t)throw new R.ArgumentNullException("predicate");var e=!0;return this.forEach(function(n,r){if(!t(n,r))return e=!1,!1}),e},e.prototype.every=function(t){return this.all(t)},e.prototype.any=function(e){if(!e)return t.prototype.any.call(this);var n=!1;return this.forEach(function(t,r){return n=e(t,r),!n}),n},e.prototype.some=function(t){return this.any(t)},e.prototype.contains=function(t,e){if(e){var n=e(t);return this.any(function(t){return p.areEqual(e(t),n)})}return this.any(function(e){return p.areEqual(e,t)})},e.prototype.indexOf=function(t,e){var n=-1;return this.forEach(e?function(r,o){if(p.areEqual(e(r,o),e(t,o),!0))return n=o,!1}:function(e,r){if(p.areEqual(e,t,!0))return n=r,!1}),n},e.prototype.lastIndexOf=function(t,e){var n=-1;return this.forEach(e?function(r,o){p.areEqual(e(r,o),e(t,o),!0)&&(n=o)}:function(e,r){p.areEqual(e,t,!0)&&(n=r)}),n},e.prototype.intersect=function(t,n){var r=this;if(r.throwIfDisposed(),!t)throw new R.ArgumentNullException("second");var o=r.isEndless;return new e(function(){var e,i,u;return new I.EnumeratorBase(function(){a(!t),e=r.getEnumerator(),i=new N.Dictionary(n),u=new N.Dictionary(n),h.forEach(t,function(t){i.addByKeyValue(t,!0)})},function(t){for(;e.moveNext();){var n=e.current;if(!u.containsKey(n)&&i.containsKey(n))return u.addByKeyValue(n,!0),t.yieldReturn(n)}return t.yieldBreak()},function(){D.dispose(e,i,u)},o)},function(){t=L},o)},e.prototype.sequenceEqual=function(t,e){return void 0===e&&(e=p.areEqual),this.throwIfDisposed(),D.using(this.getEnumerator(),function(n){return D.using(h.from(t),function(t){for(d.throwIfEndless(n.isEndless&&t.isEndless);n.moveNext();)if(!t.moveNext()||!e(n.current,t.current))return!1;return!t.moveNext()})})},e.prototype.ofType=function(e){return this.throwIfDisposed(),t.prototype.ofType.call(this,e)},e.prototype.orderBy=function(t){return void 0===t&&(t=U.Identity),this.throwIfDisposed(),new Z(this,t,1)},e.prototype.orderUsing=function(t){return this.throwIfDisposed(),new Z(this,null,1,null,t)},e.prototype.orderUsingReversed=function(t){return this.throwIfDisposed(),new Z(this,null,(-1),null,t)},e.prototype.orderByDescending=function(t){return void 0===t&&(t=U.Identity),this.throwIfDisposed(),new Z(this,t,(-1))},e.prototype.buffer=function(e){return t.prototype.buffer.call(this,e)},e.prototype.groupBy=function(t,n,r){var o=this;return n||(n=U.Identity),new e(function(){return o.toLookup(t,n,r).getEnumerator()})},e.prototype.partitionBy=function(t,n,r,o){void 0===r&&(r=function(t,e){return new J(t,e)}),void 0===o&&(o=U.Identity);var i=this;return n||(n=U.Identity),new e(function(){var e,u,s,c,f;return new I.EnumeratorBase(function(){if(a(!n),e=i.getEnumerator(),e.moveNext()){var r=e.current;u=t(r),s=o(u),c=[n(r)],f=1}else c=null},function(i){if(a(!n),!c)return i.yieldBreak();for(var l,y;(l=e.moveNext())&&(y=e.current,p.areEqual(s,o(t(y))));)c[f++]=n(y);var h=r(u,c);return l?(y=e.current,u=t(y),s=o(u),c=[n(y)],f=1):c=null,i.yieldReturn(h)},function(){D.dispose(e),c=null})},function(){n=L})},e.prototype.flatten=function(){return t.prototype.flatten.call(this)},e.prototype.pairwise=function(e){return t.prototype.pairwise.call(this,e)},e.prototype.aggregate=function(t,e){return this.forEach(function(n,r){e=r?t(e,n,r):n}),e},e.prototype.average=function(t){void 0===t&&(t=v.Type.numberOrNaN);var e=0,n=this.sum(function(n,r){return e++,t(n,r)});return isNaN(n)||!e?NaN:n/e},e.prototype.max=function(){return this.aggregate(U.Greater)},e.prototype.min=function(){return this.aggregate(U.Lesser)},e.prototype.maxBy=function(t){return void 0===t&&(t=U.Identity),this.aggregate(function(e,n){return t(e)>t(n)?e:n})},e.prototype.minBy=function(t){return void 0===t&&(t=U.Identity),this.aggregate(function(e,n){return t(e)<t(n)?e:n})},e.prototype.sum=function(t){void 0===t&&(t=v.Type.numberOrNaN);var e=0,n=0;return this.forEach(function(r,o){var i=t(r,o);return isNaN(i)?(e=NaN,!1):void(isFinite(i)?e+=i:n+=i>0?1:-1)}),isNaN(e)?NaN:n?n*(1/0):e},e.prototype.product=function(t){void 0===t&&(t=v.Type.numberOrNaN);var e=1,n=!1;return this.forEach(function(r,o){n=!0;var i=t(r,o);return isNaN(i)?(e=NaN,!1):0==i?(e=0,!1):void(e*=i)}),n&&isNaN(e)?NaN:e},e.prototype.quotient=function(t){void 0===t&&(t=v.Type.numberOrNaN);var e=0,n=NaN;return this.forEach(function(r,o){var i=t(r,o);if(e++,1===e)n=i;else{if(isNaN(i)||0===i||!isFinite(i))return n=NaN,!1;n/=i}}),1===e&&(n=NaN),n},e.prototype.last=function(){var t=this;t.throwIfDisposed();var e=K,n=!1;if(t.forEach(function(t){n=!0,e=t}),!n)throw new Error("last:No element satisfies the condition.");return e},e.prototype.lastOrDefault=function(t){var e=this;e.throwIfDisposed();var n=K,r=!1;return e.forEach(function(t){r=!0,n=t}),r?n:t},e.prototype.memoize=function(){var t,n,r=this,o=!r.throwIfDisposed();return new e(function(){var e=0;return new I.EnumeratorBase(function(){a(o),n||(n=r.getEnumerator()),t||(t=[]),e=0},function(r){a(o);var i=e++;return i>=t.length?!!n.moveNext()&&r.yieldReturn(t[i]=n.current):r.yieldReturn(t[i])})},function(){o=!0,t&&(t.length=0),t=L,D.dispose(n),n=L})},e.prototype.throwWhenEmpty=function(){return this.doAction(r,null,this.isEndless,function(t){if(!t)throw"Collection is empty."})},e}(G);e.LinqEnumerable=V;var Q=function(t){function e(e,n){var r=t.call(this,e,n,!1)||this;return r._disposableObjectName="FiniteEnumerable",r}return M(e,t),e}(V);e.FiniteEnumerable=Q;var P=function(t){function e(e){var n=t.call(this,function(){return r.throwIfDisposed(),new g.ArrayEnumerator(function(){return r.throwIfDisposed("The underlying ArrayEnumerable was disposed.","ArrayEnumerator"),r._source})})||this,r=n;return r._disposableObjectName="ArrayEnumerable",r._source=e,n}return M(e,t),e.prototype._onDispose=function(){t.prototype._onDispose.call(this),this._source=L},Object.defineProperty(e.prototype,"source",{get:function(){return this._source},enumerable:!0,configurable:!0}),e.prototype.toArray=function(){var t=this;return t.throwIfDisposed(),h.toArray(t._source)},e.prototype.asEnumerable=function(){var t=this;return t.throwIfDisposed(),new e(this._source)},e.prototype.forEach=function(t,e){void 0===e&&(e=1/0);var n=this;return n.throwIfDisposed(),h.forEach(n._source,t,e)},e.prototype.any=function(e){var n=this;n.throwIfDisposed();var r=n._source,o=r.length;return!!o&&(!e||t.prototype.any.call(this,e))},e.prototype.count=function(e){var n=this;n.throwIfDisposed();var r=n._source,o=r.length;return o&&(e?t.prototype.count.call(this,e):o)},e.prototype.elementAtOrDefault=function(t,e){var n=this;n.throwIfDisposed(),E.Integer.assertZeroOrGreater(t,"index");var r=n._source;return t<r.length?r[t]:e},e.prototype.last=function(){var e=this;e.throwIfDisposed();var n=e._source,r=n.length;return r?n[r-1]:t.prototype.last.call(this)},e.prototype.lastOrDefault=function(t){var e=this;e.throwIfDisposed();var n=e._source,r=n.length;return r?n[r-1]:t},e.prototype.skip=function(t){var e=this;return e.throwIfDisposed(),t>0?new V(function(){return new g.ArrayEnumerator(function(){return e._source},t)}):e},e.prototype.takeExceptLast=function(t){void 0===t&&(t=1);var e=this;return e.throwIfDisposed(),e.take(e._source.length-t)},e.prototype.skipToLast=function(t){var e=this;if(e.throwIfDisposed(),!(t>0))return c.empty();if(!isFinite(t))return e;var n=e._source?e._source.length:0;return e.skip(n-t)},e.prototype.reverse=function(){var t=this,e=!t.throwIfDisposed();return new V(function(){return t.throwIfDisposed(),new _.IndexEnumerator(function(){var n=t._source;return a(e||!n),{source:n,pointer:n.length-1,length:n.length,step:-1}})},function(){e=!0})},e.prototype.memoize=function(){return this.asEnumerable()},e.prototype.sequenceEqual=function(n,r){return void 0===r&&(r=p.areEqual),v.Type.isArrayLike(n)?y.areEqual(this.source,n,!0,r):n instanceof e?n.sequenceEqual(this.source,r):t.prototype.sequenceEqual.call(this,n,r)},e.prototype.toJoinedString=function(e,n){void 0===e&&(e=""),void 0===n&&(n=U.Identity);var r=this._source;return!n&&r instanceof Array?r.join(e):t.prototype.toJoinedString.call(this,e,n)},e}(Q),J=function(t){function e(e,n){var r=t.call(this,n)||this;return r._groupKey=e,r._disposableObjectName="Grouping",r}return M(e,t),Object.defineProperty(e.prototype,"key",{get:function(){return this._groupKey},enumerable:!0,configurable:!0}),e}(P),W=function(){function t(t){this._dictionary=t}return Object.defineProperty(t.prototype,"count",{get:function(){return this._dictionary.count},enumerable:!0,configurable:!0}),t.prototype.get=function(t){return this._dictionary.getValue(t)||null},t.prototype.contains=function(t){return this._dictionary.containsKey(t)},t.prototype.getEnumerator=function(){var t,e=this;return new I.EnumeratorBase(function(){t=e._dictionary.getEnumerator()},function(e){if(!t.moveNext())return!1;var n=t.current;return e.yieldReturn(new J(n.key,n.value))},function(){D.dispose(t),t=L})},t}(),Z=function(t){function e(e,n,r,o,i){void 0===i&&(i=p.compare);var u=t.call(this,L)||this;return u.source=e,u.keySelector=n,u.order=r,u.parent=o,u.comparer=i,d.throwIfEndless(e&&e.isEndless),u._disposableObjectName="OrderedEnumerable",u}return M(e,t),e.prototype.createOrderedEnumerable=function(t,n){return this.throwIfDisposed(),new e(this.source,t,n,this)},e.prototype.thenBy=function(t){return this.createOrderedEnumerable(t,1)},e.prototype.thenUsing=function(t){return new e(this.source,null,1,this,t)},e.prototype.thenByDescending=function(t){return this.createOrderedEnumerable(t,-1)},e.prototype.thenUsingReversed=function(t){return new e(this.source,null,(-1),this,t)},e.prototype.getEnumerator=function(){var t=this;t.throwIfDisposed();var e,n,r=0;return new I.EnumeratorBase(function(){t.throwIfDisposed(),r=0,e=c.toArray(t.source),n=s(t).generateSortedIndexes(e)},function(o){return t.throwIfDisposed(),r<n.length&&o.yieldReturn(e[n[r++]])},function(){e&&(e.length=0),e=L,n&&(n.length=0),n=L},(!1))},e.prototype._onDispose=function(){var e=this;t.prototype._onDispose.call(this),e.source=L,e.keySelector=L,e.order=L,e.parent=L},e}(Q);e.Enumerable=c,function(t){function e(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return f(t,e)}function n(t,e){if(v.Type.isObject(t)||v.Type.isString(t)){if(t instanceof G)return t;if(v.Type.isArrayLike(t))return new P(t);if(d.isEnumerable(t))return new V(function(){return t.getEnumerator()},null,t.isEndless);if(d.isEnumerator(t))return new V(function(){return t},null,t.isEndless);if(d.isIterator(t))return n(new k.IteratorEnumerator(t))}else if(v.Type.isFunction(t))return new G(function(){return new F.InfiniteEnumerator(t)});return e}function r(t){switch(t?t.length:0){case 0:return N();case 1:return f(t[0]);default:return N().merge(t)}}function o(t){return n(t)||N()}function s(t){return t instanceof V?t.toArray():h.toArray(t)}function c(t){return new G(function(){return new I.EnumeratorBase(null,function(e){return a(!t),e.yieldReturn(q.Random.select.one(t))},(!0))},function(){t.length=0,t=L})}function p(t){var e=t&&t.length;if(!e||!isFinite(e))throw new S.ArgumentOutOfRangeException("length",length);return c(l.copy(t))}function y(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(!t.length)throw new S.ArgumentOutOfRangeException("length",length);return c(t)}function m(t){return new G(function(){var e=0;return new I.EnumeratorBase(function(){e=0},function(n){return a(!t),e>=t.length&&(e=0),n.yieldReturn(t[e++])},(!0))},function(){t.length=0,t=L})}function w(t){var e=t&&t.length;if(!e||!isFinite(e))throw new S.ArgumentOutOfRangeException("length",length);return m(l.copy(t))}function g(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(!t.length)throw new S.ArgumentOutOfRangeException("length",length);return m(t)}function N(){return new Q(i)}function b(e,n){return void 0===n&&(n=1/0),n>0?isFinite(n)&&E.Integer.assert(n,"count")?new Q(function(){var t=n,r=0;return new I.EnumeratorBase(function(){r=0},function(n){return r++<t&&n.yieldReturn(e)},null,(!1))}):new V(function(){return new I.EnumeratorBase(null,function(t){return t.yieldReturn(e)},(!0))}):t.empty()}function A(t,e){if(!t)throw new R.ArgumentNullException("initializer");return new G(function(){var n;return new I.EnumeratorBase(function(){t&&(n=t())},function(e){return t?e.yieldReturn(n):e.yieldBreak()},function(){n=L,e&&e(n)},(!0))},function(){t=L,e=K})}function B(t){return b(t,1)}function O(t,e,n){if(void 0===n&&(n=1),!isFinite(t))throw new S.ArgumentOutOfRangeException("start",t,"Must be a finite number.");if(!(e>0))return N();if(!n)throw new S.ArgumentOutOfRangeException("step",n,"Must be a valid value");if(!isFinite(n))throw new S.ArgumentOutOfRangeException("step",n,"Must be a finite number.");return E.Integer.assert(e,"count"),new Q(function(){var r,o=e,i=0;return new I.EnumeratorBase(function(){i=0,r=t},function(t){var u=i++<o&&t.yieldReturn(r);return u&&i<e&&(r+=n),u},(!1))})}function _(t,e,n){return void 0===n&&(n=1),n=Math.abs(n)*-1,O(t,e,n)}function C(t,e){if(void 0===t&&(t=0),void 0===e&&(e=1),!isFinite(t))throw new S.ArgumentOutOfRangeException("start",t,"Must be a finite number.");if(!e)throw new S.ArgumentOutOfRangeException("step",e,"Must be a valid value");if(!isFinite(e))throw new S.ArgumentOutOfRangeException("step",e,"Must be a finite number.");return new G(function(){var n;return new I.EnumeratorBase(function(){n=t},function(t){var r=n;return n+=e,t.yieldReturn(r)},(!0))})}function T(t,e){return void 0===t&&(t=0),void 0===e&&(e=1),C(t,-e)}function M(t,e,n){if(void 0===n&&(n=1),isNaN(e)||!isFinite(e))throw new S.ArgumentOutOfRangeException("to",e,"Must be a finite number.");if(n&&!isFinite(n))throw new S.ArgumentOutOfRangeException("step",n,"Must be a finite non-zero number.");return n=Math.abs(n),new Q(function(){var r;return new I.EnumeratorBase(function(){r=t},t<e?function(t){var o=r<=e&&t.yieldReturn(r);return o&&(r+=n),o}:function(t){var o=r>=e&&t.yieldReturn(r);return o&&(r-=n),o},(!1))})}function j(t,e,n){if(void 0===n&&(n=""),null==t)throw new R.ArgumentNullException("input");var r=typeof t;if(r!=v.Type.STRING)throw new Error("Cannot exec RegExp matches of type '"+r+"'.");return e instanceof RegExp&&(n+=e.ignoreCase?"i":"",n+=e.multiline?"m":"",e=e.source),n.indexOf("g")===-1&&(n+="g"),new Q(function(){var r;return new I.EnumeratorBase(function(){r=new RegExp(e,n)},function(e){var n=r.exec(t);return null!=n?e.yieldReturn(n):e.yieldBreak()})})}function z(e,n){if(void 0===n&&(n=1/0),
!e)throw new R.ArgumentNullException("factory");return isNaN(n)||n<=0?t.empty():isFinite(n)&&E.Integer.assert(n,"count")?new Q(function(){var t=n,r=0;return new I.EnumeratorBase(function(){r=0},function(n){a(!e);var o=r++;return o<t&&n.yieldReturn(e(o))},(!1))},function(){e=L}):new G(function(){var t=0;return new I.EnumeratorBase(function(){t=0},function(n){return a(!e),n.yieldReturn(e(t++))},(!0))},function(){e=L})}function J(t,e,n){if(void 0===n&&(n=!1),!e)throw new R.ArgumentNullException("factory");return new G(function(){var r,o,i=0;return new I.EnumeratorBase(function(){i=0,r=t,o=!n},function(t){a(!e);var n=i++;return o?o=!1:r=e(r,n),t.yieldReturn(r)},(!0))},function(){e=L})}function W(t,e,n){return void 0===n&&(n=1/0),h.forEach(t,e,n)}function Z(t,e){return h.map(t,e)}function H(t){var e=t.takeUntil(function(t){return t==+(1/0)},!0).aggregate(U.Greater);return e===K?NaN:e}function X(t){var e=t.takeUntil(function(t){return t==-(1/0)},!0).aggregate(U.Lesser);return e===K?NaN:e}function Y(t){if(!t)throw new R.ArgumentNullException("enumerables");var e=!1;return new V(function(){var n,r,o;return new I.EnumeratorBase(function(){a(e),o=0,n=new x.Queue,r=h.from(t)},function(t){a(e);var o=null;if(r){for(;!o&&r.moveNext();){var i=r.current;o=u(n,i?h.from(i):L)}o||(r=null)}for(;!o&&n.tryDequeue(function(t){o=u(n,h.from(t))}););return o?t.yieldReturn(o.current):t.yieldBreak()},function(){D.dispose.these(n.dump()),D.dispose(r,n),r=null,n=L})},function(){e=!0})}t.from=e,t.fromAny=n,t.fromThese=r,t.fromOrEmpty=o,t.toArray=s,t._choice=c,t.choice=p,t.chooseFrom=y,t.cycle=w,t.cycleThrough=g,t.empty=N,t.repeat=b,t.repeatWithFinalize=A,t.make=B,t.range=O,t.rangeDown=_,t.toInfinity=C,t.toNegativeInfinity=T,t.rangeTo=M,t.matches=j,t.generate=z,t.unfold=J,t.forEach=W,t.map=Z,t.max=H,t.min=X,t.weave=Y}(c=e.Enumerable||(e.Enumerable={})),Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=c});
//# sourceMappingURL=Linq.js.map