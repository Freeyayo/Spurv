"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var r="background: #6a4313;color: white;font-size:10px;font-family: monospace;border:1px solid #6a4313;border-radius: 5px",e="%c 🐦Error from Spurv: ",t=function(n,i){void 0===i&&(i={levels:Number.POSITIVE_INFINITY});var o=i.levels?Number(i.levels):0;return Array.isArray(n)?0===o?n:n.reduce((function(r,e){return Array.isArray(e)?r.concat(t(e,{levels:o-1})):r.concat(e)}),[]):(console.log(e,r,"flatten accepts an array","and safe answer '[]' returned"),[])},n=function(){this._items={},this.length=0};n.prototype._getKeyAsString=function(r){if(void 0===r)throw new TypeError("Spurv: key is undefined");return"object"==typeof r?JSON.stringify(r):r.toString()},n.prototype.add=function(r,e){var t=this._getKeyAsString(r);t in this._items||this.length++,this._items[t]=e},n.prototype.clear=function(){this._items={},this.length=0},n.prototype.containsKey=function(r){var e=this._getKeyAsString(r);return Object.keys(this._items).includes(e)},n.prototype.containsValue=function(r){var e=this._getKeyAsString(r);return Object.values(this._items).includes(e)},n.prototype.get=function(r){var e=this._getKeyAsString(r);return this._items[e]||void 0},n.prototype.remove=function(r){var e=this._getKeyAsString(r);e in this._items&&this.length--,delete this._items[e]},n.prototype.keys=function(){return Object.keys(this._items)},n.prototype.entries=function(){return Object.entries(this._items)},n.prototype.values=function(){return Object.values(this._items)};exports.bstree=function(t){var n=function(r){var e=Object.create(null);return Object.assign(e,{val:r,left:null,right:null})},i=function(t,n){if(n.val<t.val)null===t.left?t.left=n:i(t.left,n);else{if(!(n.val>t.val))return void console.log(e,r,"you passed a duplicate value to binary search tree, Spurv ignored it");null===t.right?t.right=n:i(t.right,n)}},o=null;return Number.isNaN(Number(t))||(o=n(Number(t))),{insert:function(r){if(null===o)return o=n(r);var e=n(r);return i(o,e),o},getHead:function(){return o}}},exports.compose=function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];return function(n){return t.reduce((function(t,n){"function"==typeof n&&1===n.length||console.log(e,r,"compose accepts pure function(s) which needs only 1 argument");try{return n(t)}catch(t){console.log(e,r,t)}}),n)}},exports.deserialize=function(t){if(null===t)return null;var n=function(r){var e=Object.create(null);return Object.assign(e,{val:r,left:null,right:null})},i=function(r){return"null"===r||void 0===r?null:n(Number(r))},o=[];try{var u=t.slice(1,-1).split(","),s=u.shift();if("null"===s)return null;var l=n(Number(s));for(o.push(l);o.length;)for(var a=o.length,c=0;c<a;c++){var f=o.shift();if(f){var p=i(u.shift()),h=i(u.shift());f.left=p,f.right=h,null!==p&&o.push(p),null!==h&&o.push(h)}}return l}catch(t){console.log(e,r,"make sure you provided a valid serialized string to function deserialize"),console.log(t)}},exports.dictionary=function(){return new n},exports.factorial=function(t){if(isNaN(t)||t<0||t>170)return console.log(e,r,"number 'n'(0 <= n <= 170) expected","and safe answer '1' returned"),1;if(0===t)return 1;if(t<=99){for(var n=1,i=1;i<=t;i++)n*=i;return n}if(t>99){for(var o=BigInt(1),u=1;u<=t;u++)o*=BigInt(u);return Number(o)}},exports.flatten=t,exports.intersect=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];if(0===n.length)return[null];var o=n.reduce((function(t,n){return Array.isArray(t)&&Array.isArray(n)?t.filter((function(r){return n.includes(r)})):(console.log(e,r,"Array<number> expected","and safe answer '[]' returned"),[])}));return Array.from(new Set(t(o)))},exports.serialize=function(t){if(null===t)return null;var n=[],i=[];i.push(t);try{for(;i.length;)for(var o=i.length,u=0;u<o;u++){var s=i.shift();null!==s?(n.push(s.val),i.push(s.left),i.push(s.right)):n.push("null")}for(;"null"===n[n.length-1];)n.pop();return"["+n.toString()+"]"}catch(t){console.log(e,r,"make sure you pass a binary tree to function serialize"),console.log(t)}},exports.sortarrayby=function(r,e){void 0===e&&(e={tar:[],rev:!1});if(Array.isArray(r)&&Array.isArray(e.tar))return 0===e.tar.length?r.sort((function(r,t,n){return void 0===n&&(n=e.rev),n?r<t?1:r>t?-1:0:r<t?-1:r>t?1:0})):r.sort((function(r,t,n){void 0===n&&(n=e.rev);var i=e.tar,o=function(r){return i.reduce((function(r,e){return r[e]}),r)},u=o(r),s=o(t);return n?u<s?1:u>s?-1:0:u<s?-1:u>s?1:0}))},exports.union=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];if(0===n.length)return[null];var o=n.map((function(t){return Array.isArray(t)?t:(console.log(e,r,"Array<number> expected","and safe answer '[]' returned"),[])}));return Array.from(new Set(t(o)))};
