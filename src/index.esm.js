var r="background: #6a4313;color: white;font-size:10px;font-family: monospace;border:1px solid #6a4313;border-radius: 5px",n="%c 🐦Error from Spurv: ",e=function(){for(var e=[],o=arguments.length;o--;)e[o]=arguments[o];return function(o){return e.reduce((function(e,o){"function"==typeof o&&1===o.length||console.log(n,r,"compose accepts pure function(s) which needs only 1 argument");try{return o(e)}catch(e){console.log(n,r,e)}}),o)}},o=function(e){return Array.isArray(e)?e.reduce((function(r,n){return Array.isArray(n)?r.concat(o(n)):r.concat(n)}),[]):(console.log(n,r,"flatten accepts an array","and safe answer '[]' returned"),[])},t=function(e){if(isNaN(e)||e<0||e>170)return console.log(n,r,"number 'n'(0 <= n <= 170) expected","and safe answer '1' returned"),console.trace(),1;if(0===e)return 1;if(e<=99){for(var o=1,t=1;t<=e;t++)o*=t;return o}if(e>99){for(var a=BigInt(1),c=1;c<=e;c++)a*=BigInt(c);return Number(a)}},a=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=e.map((function(e){return Array.isArray(e)?e:(console.log(n,r,"Array<number> expected","and safe answer '[]' returned"),console.trace(),[])}));return Array.from(new Set(o(a)))};export{e as compose,t as factorial,o as flatten,a as union};
