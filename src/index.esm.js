var t=Symbol.for("relationtree_children_Symbol"),e=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return function(e){return t.reduce((function(t,e){if("function"!=typeof e||1!==e.length)throw new Error("compose accepts pure function(s) which needs only 1 argument");try{return e(t)}catch(t){throw new Error(t)}}),e)}},r=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];var n=t[0],i=n.length;return t.length-1<i?r.bind.apply(r,[null].concat(t)):n.apply(void 0,t.slice(1))},n=function(t){if(null===t)return null;var e=function(t){var e=Object.create(null);return Object.assign(e,{val:t,left:null,right:null})},r=function(t){return"null"===t||void 0===t?null:e(Number(t))},n=[];try{var i=t.slice(1,-1).split(","),o=i.shift();if("null"===o)return null;if(isNaN(Number(o)))throw new Error("check your input");var u=e(Number(o));for(n.push(u);n.length;)for(var a=n.length,s=0;s<a;s++){var h=n.shift();if(h){var l=r(i.shift()),p=r(i.shift());h.left=l,h.right=p,null!==l&&n.push(l),null!==p&&n.push(p)}}return u}catch(t){throw new Error(t)}},i=function(t,e){void 0===e&&(e={levels:Number.POSITIVE_INFINITY});var r=e.levels?Number(e.levels):0;if(!Array.isArray(t))throw new Error("flatten accepts an array and safe answer '[]' returned");return 0===r?t:t.reduce((function(t,e){return Array.isArray(e)?t.concat(i(e,{levels:r-1})):t.concat(e)}),[])},o=function(t){var e=function(t,e){if("_"===t[0]&&"_"!==t[1])throw new Error("Invalid attempt to "+e+' private "'+t+'" property')};return function(t){return new Proxy(t,{get:function(t,r){return e(r,"get"),Reflect.get(t,r)},set:function(t,r,n){return e(r,"set"),Reflect.set(t,r,n),!0}})}(t)},u=function(e,r){if(!(Array.isArray(e)&&r&&r.id&&r.parentId))throw new Error("relationTree must have two arguments: data:[] and options:{root,id,parentId}");var n=[];try{var i=e.filter((function(t,e){if(t[r.parentId]===r.root)return n.push(e),t[r.parentId]===r.root}));if(0===i.length)return;for(var o=0,a=n.length;o<a;o++)e.slice(o,1);return i.forEach((function(n){n[t]=u(e,{root:n[r.id],id:r.id,parentId:r.parentId})})),i}catch(t){throw new Error("relationTree must have two arguments: data:[] and options:{root,id,parentId}, they will be used to build the tree")}},a=function(t){if(null===t)return null;var e=[],r=[];r.push(t);try{for(;r.length;)for(var n=r.length,i=0;i<n;i++){var o=r.shift();null!==o?(e.push(o.val),r.push(o.left),r.push(o.right)):e.push("null")}for(;"null"===e[e.length-1];)e.pop();return"["+e.toString()+"]"}catch(t){throw new Error(t)}},s=function(t,e){void 0===e&&(e={tar:[],rev:!1}),e.tar||(e.tar=[]);if(!Array.isArray(t))throw new TypeError("make sure you passed an array");if(Array.isArray(e.tar))return 0===e.tar.length?t.sort((function(t,r,n){return void 0===n&&(n=e.rev),n?t<r?1:t>r?-1:0:t<r?-1:t>r?1:0})):t.sort((function(t,r,n){void 0===n&&(n=e.rev);var i=e.tar,o=function(t){return i.reduce((function(t,e){return t[e]}),t)},u=o(t),a=o(r);return n?u<a?1:u>a?-1:0:u<a?-1:u>a?1:0}))},h=function(t){if(isNaN(t)||t<0||t>170)throw new Error("number 'n'(0 <= n <= 170) expected and safe answer '1' returned");if(0===t)return 1;if(t<=99){for(var e=1,r=1;r<=t;r++)e*=r;return e}if(t>99){for(var n=BigInt(1),i=1;i<=t;i++)n*=BigInt(i);return Number(n)}},l=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];if(0===t.length)return[null];var r=t.reduce((function(t,e){if(Array.isArray(t)&&Array.isArray(e))return t.filter((function(t){return e.includes(t)}));throw new Error("Array<number> expected and safe answer '[]' returned")}));return Array.from(new Set(i(r)))},p=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];if(0===t.length)return[null];var r=t.map((function(t){if(Array.isArray(t))return t;throw new Error("Array<number> expected and safe answer '[]' returned")}));return Array.from(new Set(i(r)))},f=function(t){var e=function(t){var e=Object.create(null);return Object.assign(e,{val:t,left:null,right:null})},r=function(t,e){if(e.val<t.val)null===t.left?t.left=e:r(t.left,e);else{if(!(e.val>t.val))throw new Error("you passed a duplicate value to binary search tree, Spurv ignored it");null===t.right?t.right=e:r(t.right,e)}},n=null;return Number.isNaN(Number(t))||(n=e(Number(t))),{insert:function(t){if(null===n)return n=e(t);var i=e(t);return r(n,i),n},getHead:function(){return n}}},c=function(t){if(this._items={},this._length=0,t){if("object"!=typeof t)throw new TypeError("Spurv: initial data must be an object");for(var e in t)this.add(e,t[e])}},y={length:{configurable:!0}};y.length.get=function(){return this._length},c.prototype._getKeyAsString=function(t){if(void 0===t)throw new TypeError("Spurv: key is undefined");return"object"==typeof t?JSON.stringify(t):t.toString()},c.prototype.add=function(t,e){var r=this._getKeyAsString(t);r in this._items||this._length++,this._items[r]=e},c.prototype.clear=function(){this._items={},this._length=0},c.prototype.containsKey=function(t){var e=this._getKeyAsString(t);return Object.keys(this._items).includes(e)},c.prototype.containsValue=function(t){var e=this._getKeyAsString(t);return Object.values(this._items).includes(e)},c.prototype.get=function(t){var e=this._getKeyAsString(t);return this._items[e]||void 0},c.prototype.remove=function(t){var e=this._getKeyAsString(t);e in this._items&&this._length--,delete this._items[e]},c.prototype.keys=function(){return Object.keys(this._items)},c.prototype.entries=function(){return Object.entries(this._items)},c.prototype.values=function(){return Object.values(this._items)},Object.defineProperties(c.prototype,y);var _,g=function(t){return new c(t)};!function(t){t.Min="min",t.Max="max"}(_||(_={}));var d=function(t){void 0===t&&(t={}),this._heap=[null],this._length=0,this._type=t.type||_.Min,this._compareKey=t.compareKey||"value"},v={length:{configurable:!0}};v.length.get=function(){return this._length},d.prototype.clear=function(){this._heap=[null],this._length=0},d.prototype.delete=function(t){var e=this,r=this._heap.findIndex((function(r,n){return e._getValueAtIndex(n)===t}));r>0&&(this._swapNodes(r,this._length),this._heap.splice(-1),this._length--,this._sinkDown(r))},d.prototype.pop=function(){if(0!==this._length){var t=this._heap[1];return this._heap[1]=this._heap[this._length],this._heap.splice(-1),this._length--,this._sinkDown(1),t}},d.prototype.push=function(t){this._length++,this._heap[this._length]=this._shallowCopy(t),this._length>1&&this._bubbleUp(this._length)},d.prototype.peek=function(){return this._shallowCopy(this._heap[1])},d.prototype.toArray=function(){var t=this;return this._heap.map((function(e){return t._shallowCopy(e)}))},d.prototype._getParentIndex=function(t){if(1!==t)return Math.floor(t/2)},d.prototype._getLeftChildIndex=function(t){var e=2*t;return this._heap[e]?e:void 0},d.prototype._getRightChildIndex=function(t){var e=2*t+1;return this._heap[e]?e:void 0},d.prototype._getValueAtIndex=function(t){if(this._heap[t])return this._heap[t][this._compareKey]},d.prototype._compare=function(t,e){var r=this._getValueAtIndex(t),n=this._getValueAtIndex(e);return r===n?0:r<n?-1:1},d.prototype._bubbleUp=function(t){for(var e=t,r=this._getParentIndex(e),n=this._type===_.Min?1:-1;r&&this._compare(e,r)*n<0;)this._swapNodes(e,r),e=r,r=this._getParentIndex(e)},d.prototype._sinkDown=function(t){if(t&&this._heap[t]){var e=this._type===_.Min?1:-1,r=t,n=this._getLeftChildIndex(r),i=this._getRightChildIndex(r);n&&this._compare(r,n)*e>0&&(r=n),i&&this._compare(r,i)*e>0&&(r=i),t!==r&&(this._swapNodes(t,r),this._sinkDown(r))}},d.prototype._shallowCopy=function(t){return Object.assign({},t)},d.prototype._swapNodes=function(t,e){var r;r=[this._heap[e],this._heap[t]],this._heap[t]=r[0],this._heap[e]=r[1]},Object.defineProperties(d.prototype,v);var w=function(t){return new d(t)};export{w as binaryHeap,f as bsTree,e as compose,r as curry,n as deserialize,g as dictionary,h as factorial,i as flatten,l as intersect,o as privateMode,u as relationTree,t as rtchildren,a as serialize,s as sortArrayBy,p as union};
