/* esm.sh - esbuild bundle(postcss@8.4.31/lib/parse) esnext production */
import * as __0$ from "/v135/postcss@8.4.31/esnext/lib/container.js";
import * as __1$ from "/v135/postcss@8.4.31/esnext/lib/parser.js";
import * as __2$ from "/v135/postcss@8.4.31/esnext/lib/input.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"postcss/lib/container":return e(__0$);case"postcss/lib/parser":return e(__1$);case"postcss/lib/input":return e(__2$);default:throw new Error("module \""+n+"\" not found");}};
var m=Object.create;var u=Object.defineProperty;var S=Object.getOwnPropertyDescriptor;var w=Object.getOwnPropertyNames;var g=Object.getPrototypeOf,_=Object.prototype.hasOwnProperty;var d=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(s,t)=>(typeof require<"u"?require:s)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var C=(e,s)=>()=>(s||e((s={exports:{}}).exports,s),s.exports),y=(e,s)=>{for(var t in s)u(e,t,{get:s[t],enumerable:!0})},n=(e,s,t,i)=>{if(s&&typeof s=="object"||typeof s=="function")for(let r of w(s))!_.call(e,r)&&r!==t&&u(e,r,{get:()=>s[r],enumerable:!(i=S(s,r))||i.enumerable});return e},o=(e,s,t)=>(n(e,s,"default"),t&&n(t,s,"default")),h=(e,s,t)=>(t=e!=null?m(g(e)):{},n(s||!e||!e.__esModule?u(t,"default",{value:e,enumerable:!0}):t,e));var f=C((v,l)=>{"use strict";var x=d("postcss/lib/container"),q=d("postcss/lib/parser"),E=d("postcss/lib/input");function p(e,s){let t=new E(e,s),i=new q(t);try{i.parse()}catch(r){throw r}return i.root}l.exports=p;p.default=p;x.registerParse(p)});var a={};y(a,{default:()=>P});var Y=h(f());o(a,h(f()));var{default:c,...N}=Y,P=c!==void 0?c:N;export{P as default};
//# sourceMappingURL=parse.js.map