var $purv=function(r){"use strict";var e="background: #6a4313;color: white;font-size:10px;font-family: monospace;border:1px solid #6a4313;border-radius: 5px",n="%c 🐦Error from Spurv: ",t=function(r,l){void 0===l&&(l={levels:Number.POSITIVE_INFINITY});var u=l.levels?Number(l.levels):0;return Array.isArray(r)?0===u?r:r.reduce((function(r,e){return Array.isArray(e)?r.concat(t(e,{levels:u-1})):r.concat(e)}),[]):(console.log(n,e,"flatten accepts an array","and safe answer '[]' returned"),[])};return r.bstree=function(r){var t=function(r){var e=Object.create(null);return Object.assign(e,{val:r,left:null,right:null})},l=function(r,t){if(t.val<r.val)null===r.left?r.left=t:l(r.left,t);else{if(!(t.val>r.val))return void console.log(n,e,"you passed a duplicate value to binary search tree, Spurv ignored it");null===r.right?r.right=t:l(r.right,t)}},u=null;return Number.isNaN(Number(r))||(u=t(Number(r))),{insert:function(r){if(null===u)return u=t(r);var e=t(r);return l(u,e),u},getHead:function(){return u}}},r.compose=function(){for(var r=[],t=arguments.length;t--;)r[t]=arguments[t];return function(t){return r.reduce((function(r,t){"function"==typeof t&&1===t.length||console.log(n,e,"compose accepts pure function(s) which needs only 1 argument");try{return t(r)}catch(r){console.log(n,e,r)}}),t)}},r.deserialize=function(r){if(null===r)return null;var t=function(r){var e=Object.create(null);return Object.assign(e,{val:r,left:null,right:null})},l=function(r){return"null"===r||void 0===r?null:t(Number(r))},u=[];try{var o=r.slice(1,-1).split(","),a=o.shift();if("null"===a)return null;var i=t(Number(a));for(u.push(i);u.length;)for(var s=u.length,c=0;c<s;c++){var f=u.shift();if(f){var v=l(o.shift()),g=l(o.shift());f.left=v,f.right=g,null!==v&&u.push(v),null!==g&&u.push(g)}}return i}catch(r){console.log(n,e,"make sure you provided a valid serialized string to function deserialize"),console.log(r)}},r.factorial=function(r){if(isNaN(r)||r<0||r>170)return console.log(n,e,"number 'n'(0 <= n <= 170) expected","and safe answer '1' returned"),1;if(0===r)return 1;if(r<=99){for(var t=1,l=1;l<=r;l++)t*=l;return t}if(r>99){for(var u=BigInt(1),o=1;o<=r;o++)u*=BigInt(o);return Number(u)}},r.flatten=t,r.intersect=function(){for(var r=[],l=arguments.length;l--;)r[l]=arguments[l];if(0===r.length)return[null];var u=r.reduce((function(r,t){return Array.isArray(r)&&Array.isArray(t)?r.filter((function(r){return t.includes(r)})):(console.log(n,e,"Array<number> expected","and safe answer '[]' returned"),[])}));return Array.from(new Set(t(u)))},r.serialize=function(r){if(null===r)return null;var t=[],l=[];l.push(r);try{for(;l.length;)for(var u=l.length,o=0;o<u;o++){var a=l.shift();null!==a?(t.push(a.val),l.push(a.left),l.push(a.right)):t.push("null")}for(;"null"===t[t.length-1];)t.pop();return"["+t.toString()+"]"}catch(r){console.log(n,e,"make sure you pass a binary tree to function serialize"),console.log(r)}},r.union=function(){for(var r=[],l=arguments.length;l--;)r[l]=arguments[l];if(0===r.length)return[null];var u=r.map((function(r){return Array.isArray(r)?r:(console.log(n,e,"Array<number> expected","and safe answer '[]' returned"),[])}));return Array.from(new Set(t(u)))},r}({});
