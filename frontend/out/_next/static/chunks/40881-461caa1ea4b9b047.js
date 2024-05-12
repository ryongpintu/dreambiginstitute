"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[40881],{91513:function(e,t,n){let r,o;n.d(t,{v:function(){return Y}});let i=new WeakMap;function l({target:e,contentRect:t,borderBoxSize:n}){var r;null===(r=i.get(e))||void 0===r||r.forEach(r=>{r({target:e,contentSize:t,get size(){return function(e,t){if(t){let{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,n)}})})}function s(e){e.forEach(l)}let f=new Set,c=e=>"function"==typeof e,a=(e,t,n)=>t-e==0?1:(n-e)/(t-e),u=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),h=()=>({time:0,x:u(),y:u()}),d={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function g(e,t,n,r){var o;let i=n[t],{length:l,position:s}=d[t],f=i.current,c=n.time;i.current=e["scroll"+s],i.scrollLength=e["scroll"+l]-e["client"+l],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=a(0,i.scrollLength,i.current);let u=r-c;i.velocity=u>50?0:(o=i.current-f,u?o*(1e3/u):0)}let p=e=>e,v=(e,t,n)=>-n*e+n*t+e;function m(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let o=a(0,t,r);e.push(v(n,1,o))}}function y(e){let t=[0];return m(t,e-1),t}let w=e=>"number"==typeof e,E=e=>Array.isArray(e)&&!w(e[0]),x=(e,t,n)=>{let r=t-e;return((n-e)%r+r)%r+e},L=(e,t,n)=>Math.min(Math.max(n,e),t),O={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},W=e=>"string"==typeof e,A={start:0,center:.5,end:1};function b(e,t,n=0){let r=0;if(void 0!==A[e]&&(e=A[e]),W(e)){let t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return w(e)&&(r=t*e),n+r}let B=[0,0],H={x:0,y:0},S=new WeakMap,z=new WeakMap,P=new WeakMap,k=e=>e===document.documentElement?window:e;var M=n(33234),T=n(96681),_=n(67294),j=n(58868);let N=()=>({scrollX:(0,M.B)(0),scrollY:(0,M.B)(0),scrollXProgress:(0,M.B)(0),scrollYProgress:(0,M.B)(0)});function Y({container:e,target:t,layoutEffect:n=!0,...l}={}){let u=(0,T.h)(N),d=n?j.L:_.useEffect;return d(()=>(function(e,t={}){var{container:n=document.documentElement}=t,l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}(t,["container"]);let u=P.get(n);u||(u=new Set,P.set(n,u));let d=h(),M=function(e,t,n,r={}){var o,i;let l=r.axis||"y";return{measure:()=>(function(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!=e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight})(e,r.target,n),update:t=>{var o;g(e,"x",o=n,t),g(e,"y",o,t),o.time=t,(r.offset||r.target)&&function(e,t,n){let{offset:r=O.All}=n,{target:o=e,axis:i="y"}=n,l="y"===i?"height":"width",s=o!==e?function(e,t){let n={x:0,y:0},r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r instanceof SVGGraphicsElement&&"getBBox"in r){let{top:e,left:t}=r.getBBox();for(n.x+=t,n.y+=e;r&&"svg"!==r.tagName;)r=r.parentNode}return n}(o,e):H,f=o===e?{width:e.scrollWidth,height:e.scrollHeight}:{width:o.clientWidth,height:o.clientHeight},c={width:e.clientWidth,height:e.clientHeight};t[i].offset.length=0;let u=!t[i].interpolate,h=r.length;for(let e=0;e<h;e++){let n=function(e,t,n,r){let o=Array.isArray(e)?e:B,i=0;return w(e)?o=[e,e]:W(e)&&(o=(e=e.trim()).includes(" ")?e.split(" "):[e,A[e]?e:"0"]),b(o[0],n,r)-b(o[1],t)}(r[e],c[l],f[l],s[i]);u||n===t[i].interpolatorOffsets[e]||(u=!0),t[i].offset[e]=n}u&&(t[i].interpolate=function(e,t=y(e.length),n=p){let r=e.length,o=r-t.length;return o>0&&m(t,o),o=>{var i;let l=0;for(;l<r-2&&!(o<t[l+1]);l++);let s=L(0,1,a(t[l],t[l+1],o)),f=(i=l,E(n)?n[x(0,n.length,i)]:n);return s=f(s),v(e[l],e[l+1],s)}}(y(h),t[i].offset),t[i].interpolatorOffsets=[...t[i].offset]),t[i].progress=t[i].interpolate(t[i].current)}(e,n,r)},notify:c(t)?()=>t(n):(o=t,i=n[l],o.pause(),o.forEachNative((e,{easing:t})=>{var n,r;if(e.updateDuration)t||(e.easing=p),e.updateDuration(1);else{let o={duration:1e3};t||(o.easing="linear"),null===(r=null===(n=e.effect)||void 0===n?void 0:n.updateTiming)||void 0===r||r.call(n,o)}}),()=>{o.currentTime=i.progress})}}(n,e,d,l);if(u.add(M),!S.has(n)){let e=()=>{let e=performance.now();for(let e of u)e.measure();for(let t of u)t.update(e);for(let e of u)e.notify()};S.set(n,e);let t=k(n);window.addEventListener("resize",e,{passive:!0}),n!==document.documentElement&&z.set(n,c(n)?(f.add(n),o||(o=()=>{let e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};f.forEach(e=>e(t))},window.addEventListener("resize",o)),()=>{f.delete(n),!f.size&&o&&(o=void 0)}):function(e,t){var n,o,l;r||"undefined"==typeof ResizeObserver||(r=new ResizeObserver(s));let f=("string"==typeof(n=e)?o?(null!==(l=o[n])&&void 0!==l||(o[n]=document.querySelectorAll(n)),n=o[n]):n=document.querySelectorAll(n):n instanceof Element&&(n=[n]),Array.from(n||[]));return f.forEach(e=>{let n=i.get(e);n||(n=new Set,i.set(e,n)),n.add(t),null==r||r.observe(e)}),()=>{f.forEach(e=>{let n=i.get(e);null==n||n.delete(t),(null==n?void 0:n.size)||null==r||r.unobserve(e)})}}(n,e)),t.addEventListener("scroll",e,{passive:!0})}let T=S.get(n),_=requestAnimationFrame(T);return()=>{var t;"function"!=typeof e&&e.stop(),cancelAnimationFrame(_);let r=P.get(n);if(!r||(r.delete(M),r.size))return;let o=S.get(n);S.delete(n),o&&(k(n).removeEventListener("scroll",o),null===(t=z.get(n))||void 0===t||t(),window.removeEventListener("resize",o))}})(({x:e,y:t})=>{u.scrollX.set(e.current),u.scrollXProgress.set(e.progress),u.scrollY.set(t.current),u.scrollYProgress.set(t.progress)},{...l,container:(null==e?void 0:e.current)||void 0,target:(null==t?void 0:t.current)||void 0}),[]),u}},23526:function(e,t,n){n.d(t,{H:function(){return h}});var r=n(64606);let o=e=>"object"==typeof e&&e.mix,i=e=>o(e)?e.mix:void 0;var l=n(67294),s=n(33234),f=n(16014),c=n(96681),a=n(58868),u=n(30404);function h(e,t,n,o){let l="function"==typeof t?t:function(...e){let t=!Array.isArray(e[0]),n=t?0:-1,o=e[0+n],l=e[1+n],s=e[2+n],f=e[3+n],c=(0,r.s)(l,s,{mixer:i(s[0]),...f});return t?c(o):c}(t,n,o);return Array.isArray(e)?d(e,l):d([e],([e])=>l(e))}function d(e,t){let n=(0,c.h)(()=>[]);return function(e,t){var n,r;let o=function(e){let t=(0,c.h)(()=>(0,s.B)(e)),{isStatic:n}=(0,l.useContext)(f._);if(n){let[,n]=(0,l.useState)(e);(0,l.useEffect)(()=>t.on("change",n),[])}return t}(t()),i=()=>o.set(t());return i(),n=()=>u.Z_.update(i,!1,!0),r=()=>u.qY.update(i),(0,a.L)(()=>{let t=e.map(e=>e.on("change",n));return()=>{t.forEach(e=>e()),r()}}),o}(e,()=>{n.length=0;let r=e.length;for(let t=0;t<r;t++)n[t]=e[t].get();return t(n)})}}}]);