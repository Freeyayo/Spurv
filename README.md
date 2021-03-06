<!--
 * @Date: 2020-06-17 23:50:17
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-08-06 22:23:51
 * @FilePath: /spurv/Spurv/README.md
--> 
## Install

- CDN
```html
<script src="https://cdn.jsdelivr.net/npm/spurv@0.0.136/src/index.iife.js"></script>
```

- NPM
```bash
# normal
npm i spurv
# install to develope dependency
npm i spurv -D
```

- YARN
```bash
# normal
yarn add spurv
# install to develope dependency
yarn add spurv -D
```

## The Documentation
[Documentation Link](https://freeyayo.github.io/ifoo/#/)

## Playing Around 
Let's start from `factorial`. First import is from **Sprurv**
```js
import { factorial } from 'spurv';
```
If using CDN, you can have it with:
```js
const fac = $purv.factorial;
```
Then doing a simple calculation
```js
const number = 5;
factorial(5);   // ==>  120
```
It's simple, if you understand the principle of factorial, it's easy to write a function to do this job. But...once you pass a **big** (how big?🤔️) number to your function, you'll find the result always be the `Infinity`, and I can tell you the **big** number is 100
```js
const almost_big = 99;
your_factorial(almost_big);   // ==>  9.33262154439441e+155

const big = 100;
your_factorial(big);          // ==>  Infinity
```
JavaScript has MAX_SAFE_INTEGER as the limitation of ordinary calculation, it won't let you beyond the limitation. Spurv may break it
```js
factorial(100)                //  ==> 9.332621544394415e+157
factorial(101)                //  ==> 9.42594775983836e+159

// even further!
factorial(150)                //  ==> 5.713383956445855e+262

// at most 
factorial(170)                //  ==> 7.257415615307999e+306 
```
Don't worry if you pass a decimal, string or any wrong input unintentionally (or intentionally), `factorial` always return a safe number (and a warm reminder). It means that your program may still work fine but you can also get an error information