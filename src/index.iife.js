var $purv=function(r){"use strict";var o="background: #6a4313;color: white;font-size:10px;font-family: monospace;border:1px solid #6a4313;border-radius: 5px";return r.compose=function(){for(var r=[],n=arguments.length;n--;)r[n]=arguments[n];return function(n){return r.reduce((function(r,n){"function"==typeof n&&1===n.length||console.log("%c 🐦Error from Spurv: ",o,"compose accepts pure function(s) which needs only 1 argument");try{return n(r)}catch(r){console.log("%c 🐦Error from Spurv: ",o,r)}}),n)}},r.factorial=function(r){if(isNaN(r)||r<0||r>170)return console.log("%c 🐦Error from Spurv: ",o,"number 'n'(0 <= n <= 170) expected","and safe answer '1' returned"),console.trace(),1;if(0===r)return 1;if(r<=99){for(var n=1,e=1;e<=r;e++)n*=e;return n}if(r>99){for(var t=BigInt(1),c=1;c<=r;c++)t*=BigInt(c);return Number(t)}},r}({});
