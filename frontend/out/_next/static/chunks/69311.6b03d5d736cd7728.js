"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[69311],{23947:function(e,t,n){var r=n(85893);let i=()=>(0,r.jsx)("div",{className:"tw-bg-primary tw-w-10 tw-h-10 tw-my-10 tw-mx-auto tw-animate-[rotatePlane_1.2s_infinite_ease-in-out]"});t.Z=i},69311:function(e,t,n){n.r(t);var r=n(85893),i=n(67294),a=n(86010),s=n(5152),l=n.n(s),o=n(65820),c=n(78053),u=n(27542),d=n(68945),w=n(23947);let m=l()(()=>n.e(56179).then(n.bind(n,56179)),{loadableGenerated:{webpack:()=>[56179]},ssr:!1}),p=e=>{let{videoId:t,show:n,onClose:s,className:l}=e,[p,f]=(0,i.useState)(!0),h=(0,u.sU)(n,s),x=()=>{f(!p)};return(0,r.jsx)(m,{children:(0,r.jsx)(o.M,{initial:!1,mode:"wait",onExitComplete:()=>null,children:n&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.E.div,{className:"backdrop tw-fixed tw-top-0 tw-left-0 tw-w-screen tw-h-screen tw-bg-black/60 tw-transition-opacity tw-z-50 tw-flex tw-justify-center tw-items-center",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.4,type:"spring"},tabIndex:-1}),(0,r.jsx)(c.E.div,{className:(0,a.Z)("tw-fixed tw-inset-0 tw-overflow-hidden tw-outline-0 tw-transition-opacity tw-z-[999]",l),role:"button",tabIndex:-1,ref:h,onClick:s,onKeyPress:e=>e,initial:"hidden",animate:"visible",exit:"exit",variants:d.vl,children:(0,r.jsx)("div",{className:"modal-dialog tw-relative tw-z-50 tw-w-auto tw-m-3 tw-pointer-events-none sm:tw-my-5 sm:tw-mx-auto tw-flex tw-items-center tw-min-h-[calc(100vh_-_1rem)] sm:tw-min-h-[calc(100vh_-_3.5rem)] sm:tw-max-w-[500px] lg:tw-max-w-[1000px]",children:(0,r.jsxs)("div",{className:"modal-content tw-relative tw-flex tw-flex-col tw-w-full tw-pointer-events-auto tw-bg-white tw-bg-clip-padding tw-rounded",onClick:e=>e.stopPropagation(),onKeyPress:e=>e.stopPropagation(),role:"button",tabIndex:-1,children:[p&&(0,r.jsx)("div",{className:"tw-absolute tw-inset-0 tw-flex tw-justify-center tw-items-center",children:(0,r.jsx)(w.Z,{})}),(0,r.jsx)("button",{type:"button",onClick:s,className:"tw-absolute tw-right-0 -tw-top-9 tw-w-9 tw-h-9 tw-text-white tw-bg-black tw-flex tw-items-center tw-justify-center",children:(0,r.jsx)("i",{className:"linea-arrows-circle-remove"})}),(0,r.jsx)("iframe",{className:"modal__video-style",onLoad:x,loading:"lazy",width:"800",height:"500",src:"https://www.youtube.com/embed/".concat(t),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]})})})]})})})};t.default=p},65820:function(e,t,n){n.d(t,{M:function(){return y}});var r=n(67294),i=n(49304),a=n(30404),s=n(58868);function l(){let e=(0,r.useRef)(!1);return(0,s.L)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var o=n(240),c=n(96681);class u extends r.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function d({children:e,isPresent:t}){let n=(0,r.useId)(),i=(0,r.useRef)(null),a=(0,r.useRef)({width:0,height:0,top:0,left:0});return(0,r.useInsertionEffect)(()=>{let{width:e,height:r,top:s,left:l}=a.current;if(t||!i.current||!e||!r)return;i.current.dataset.motionPopId=n;let o=document.createElement("style");return document.head.appendChild(o),o.sheet&&o.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(o)}},[t]),r.createElement(u,{isPresent:t,childRef:i,sizeRef:a},r.cloneElement(e,{ref:i}))}let w=({children:e,initial:t,isPresent:n,onExitComplete:i,custom:a,presenceAffectsLayout:s,mode:l})=>{let u=(0,c.h)(m),w=(0,r.useId)(),p=(0,r.useMemo)(()=>({id:w,initial:t,isPresent:n,custom:a,onExitComplete:e=>{for(let t of(u.set(e,!0),u.values()))if(!t)return;i&&i()},register:e=>(u.set(e,!1),()=>u.delete(e))}),s?void 0:[n]);return(0,r.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[n]),r.useEffect(()=>{n||u.size||!i||i()},[n]),"popLayout"===l&&(e=r.createElement(d,{isPresent:n},e)),r.createElement(o.O.Provider,{value:p},e)};function m(){return new Map}var p=n(25364),f=n(65411),h=n(16034);let x=e=>e.key||"",y=({children:e,custom:t,initial:n=!0,onExitComplete:o,exitBeforeEnter:c,presenceAffectsLayout:u=!0,mode:d="sync"})=>{c&&(d="wait",(0,h.O)(!1,"Replace exitBeforeEnter with mode='wait'"));let[m]=function(){let e=l(),[t,n]=(0,r.useState)(0),i=(0,r.useCallback)(()=>{e.current&&n(t+1)},[t]),s=(0,r.useCallback)(()=>a.Z_.postRender(i),[i]);return[s,t]}(),y=(0,r.useContext)(p.p).forceRender;y&&(m=y);let b=l(),v=function(e){let t=[];return r.Children.forEach(e,e=>{(0,r.isValidElement)(e)&&t.push(e)}),t}(e),g=v,E=new Set,k=(0,r.useRef)(g),j=(0,r.useRef)(new Map).current,C=(0,r.useRef)(!0);if((0,s.L)(()=>{C.current=!1,function(e,t){e.forEach(e=>{let n=x(e);t.set(n,e)})}(v,j),k.current=g}),(0,f.z)(()=>{C.current=!0,j.clear(),E.clear()}),C.current)return r.createElement(r.Fragment,null,g.map(e=>r.createElement(w,{key:x(e),isPresent:!0,initial:!!n&&void 0,presenceAffectsLayout:u,mode:d},e)));g=[...g];let P=k.current.map(x),R=v.map(x),_=P.length;for(let e=0;e<_;e++){let t=P[e];-1===R.indexOf(t)&&E.add(t)}return"wait"===d&&E.size&&(g=[]),E.forEach(e=>{if(-1!==R.indexOf(e))return;let n=j.get(e);if(!n)return;let i=P.indexOf(e),a=()=>{j.delete(e),E.delete(e);let t=k.current.findIndex(t=>t.key===e);if(k.current.splice(t,1),!E.size){if(k.current=v,!1===b.current)return;m(),o&&o()}};g.splice(i,0,r.createElement(w,{key:x(n),isPresent:!1,onExitComplete:a,custom:t,presenceAffectsLayout:u,mode:d},n))}),g=g.map(e=>{let t=e.key;return E.has(t)?e:r.createElement(w,{key:x(e),isPresent:!0,presenceAffectsLayout:u,mode:d},e)}),"production"!==i.O&&"wait"===d&&g.length>1&&console.warn('You\'re attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.'),r.createElement(r.Fragment,null,E.size?g:g.map(e=>(0,r.cloneElement)(e)))}}}]);