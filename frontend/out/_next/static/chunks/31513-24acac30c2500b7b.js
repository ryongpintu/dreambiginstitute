"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[31513],{30651:function(t,e,r){var n=r(85893),i=r(86010);let a=t=>{let{body:e,className:r}=t,a=(t,e,o)=>(0,n.jsx)("list"===t?"ul":"ol",{className:(0,i.Z)("list-group",r),children:e.map(t=>"string"==typeof t?(0,n.jsx)("li",{children:t},t):(0,n.jsxs)("li",{children:[t.text," ",a(t.type,t.content,"item-".concat(t.text))]},t.text))},o);return(0,n.jsx)("div",{className:(0,i.Z)("tw-prose prose-h2:tw-text-xl sm:prose-h2:tw-text-4xl sm:prose-h3:tw-text-3xl tw-max-w-none",r),children:e.map(t=>{let{id:e,type:r,content:i}=t;return"text"===r&&"string"==typeof i?(0,n.jsx)("p",{dangerouslySetInnerHTML:{__html:i}},e):("h3"===r||"h4"===r||"h5"===r||"blockquote"===r)&&"string"==typeof i?(0,n.jsx)(r,{dangerouslySetInnerHTML:{__html:i}},e):("order-list"===r||"list"===r)&&Array.isArray(i)?a(r,i,e):("iframe"!==r||"object"!=typeof i||Array.isArray(i)||i.src,null)})})};e.Z=a},64887:function(t,e,r){var n=r(85893),i=r(86010),a=r(50897);let o=t=>{let{children:e,type:r,variant:o,color:l,size:s,shape:d,fullwidth:c,active:w,disabled:u,iconButton:p,label:m,className:h,path:f,onClick:x,hover:y}=t,b=!u&&!w&&"light"===y&&"hover:tw-bg-white hover:tw-border-white hover:tw-text-primary",v=(0,i.Z)("texted"!==o&&"tw-font-bold tw-justify-center tw-items-center tw-border tw-border-solid tw-rounded-md tw-transition-colors tw-min-w-max","texted"!==o&&!c&&"tw-inline-flex","contained"===o&&["primary"===l&&["tw-bg-primary tw-border-primary tw-text-white",!u&&!w&&"default"===y&&"hover:tw-bg-secondary hover:tw-border-secondary hover:tw-text-white",!u&&w&&"tw-bg-secondary tw-border-secondary active:tw-bg-secondary active:tw-border-secondary",b],"light"===l&&["tw-bg-light tw-border-light tw-text-heading",!u&&!w&&"default"===y&&"hover:tw-bg-primary hover:tw-border-primary hover:tw-text-white",!u&&w&&"tw-bg-primary tw-border-primary active:tw-bg-primary active:tw-border-primary",b]],"outlined"===o&&["primary"===l&&["tw-bg-transparent tw-border-primary tw-text-primary",!u&&!w&&"default"===y&&"hover:tw-bg-primary hover:tw-text-white",!u&&w&&"default"===y&&"tw-bg-primary tw-border-primary tw-text-white active:tw-bg-primary active:tw-bg-primary",b],"light"===l&&["tw-border-light tw-text-light",!u&&!w&&"default"===y&&"hover:tw-bg-primary hover:tw-border-primary hover:tw-text-white",!u&&w&&"tw-bg-primary tw-border-primary active:tw-bg-primary active:tw-border-primary",b]],!p&&"texted"!==o&&["md"===s&&"tw-text-md tw-px-7 tw-py-1 tw-min-h-[48px] md:tw-min-h-[52px] md:tw-px-10","xs"===s&&"tw-text-[13px] tw-px-5 tw-leading-[30px] tw-min-h-8"],"tw-rounded"===d&&"tw-rounded-md","ellipse"===d&&"tw-rounded-full",c&&"tw-flex tw-w-full",h);return f?(0,n.jsx)(a.Z,{path:f,className:v,onClick:x,"aria-label":m,children:e}):(0,n.jsx)("button",{type:r,className:v,onClick:x,"aria-label":m,children:e})};o.defaultProps={type:"button",variant:"contained",color:"primary",size:"md",shape:"square",fullwidth:!1,active:!1,disabled:!1,iconButton:!1,hover:"default"},o.displayName="Button",e.Z=o},85551:function(t,e,r){r.d(e,{u_:function(){return p},fe:function(){return h},A3:function(){return x},xB:function(){return b}});var n=r(85893),i=r(65820),a=r(12451),o=r(86010),l=r(5152),s=r.n(l),d=r(68945),c=r(27542);let w=s()(()=>r.e(56179).then(r.bind(r,56179)),{loadableGenerated:{webpack:()=>[56179]},ssr:!1}),u=t=>{let{className:e,show:r,size:l,centered:s,children:u,onClose:p}=t,m=(0,c.sU)(r,p);return(0,n.jsx)(w,{children:(0,n.jsx)(i.M,{initial:!1,mode:"wait",onExitComplete:()=>null,children:r&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.E.div,{className:(0,o.Z)("backdrop tw-fixed tw-top-0 tw-left-0 tw-w-screen tw-h-screen tw-bg-black/60 tw-transition-opacity tw-z-50"),tabIndex:-1,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}}),(0,n.jsx)(a.E.div,{ref:m,className:(0,o.Z)(e,"tw-fixed tw-inset-0 tw-overflow-hidden tw-outline-0 tw-transition-opacity tw-z-50"),role:"button",tabIndex:-1,onClick:p,onKeyPress:t=>t,variants:d.Ji,initial:"hidden",animate:"visible",exit:"exit",children:(0,n.jsx)("div",{className:(0,o.Z)("modal-dialog tw-relative tw-w-auto tw-m-2 tw-pointer-events-none sm:tw-my-5 sm:tw-mx-auto","sm"===l&&"sm:tw-max-w-[300px]","md"===l&&"sm:tw-max-w-[470px]","lg"===l&&"sm:tw-max-w-[500px] lg:tw-max-w-[800px]","xl"===l&&"sm:tw-max-w-[500px] lg:tw-max-w-[800px]",s&&"tw-flex tw-items-center tw-min-h-[calc(100vh_-_1rem)] sm:tw-min-h-[calc(100vh_-_3.5rem)]"),children:(0,n.jsx)("div",{className:"modal-content tw-relative tw-flex tw-flex-col tw-w-full tw-pointer-events-auto tw-bg-white tw-bg-clip-padding tw-rounded",onClick:t=>t.stopPropagation(),onKeyPress:t=>t.stopPropagation(),role:"button",tabIndex:0,children:u})})})]})})})};u.defaultProps={size:"md",centered:!0};var p=u;let m=t=>{let{className:e,children:r}=t;return(0,n.jsx)("div",{className:(0,o.Z)(e,"modal-body tw-relative tw-flex-auto tw-p-4"),children:r})};var h=m;let f=t=>{let{className:e,children:r,onClose:i}=t;return(0,n.jsx)("button",{type:"button",className:(0,o.Z)(e,"close tw-font-light tw-text-3xl tw-leading-none tw-bg-transparent tw-border-0 tw-appearance-none tw-text-heading tw-cursor-pointer"),onClick:i,"data-dismiss":"modal","aria-label":"Close",children:(0,n.jsx)("span",{"aria-hidden":"true",children:r})})};f.displayName="ModalClose";var x=f;let y=t=>{let{className:e,children:r}=t;return(0,n.jsx)("div",{className:(0,o.Z)(e,"modal-header tw-flex tw-items-center tw-justify-between tw-p-4 tw-border-b tw-border-b-gray-400/30 tw-rounded-tl tw-rounded-tr"),children:r})};var b=y},68945:function(t,e,r){r.d(e,{Ji:function(){return i},Zd:function(){return o},qX:function(){return a},sQ:function(){return n}});let n={offscreen:{opacity:0,y:30},onscreen:{opacity:1,y:0,transition:{type:"spring",duration:1}}},i={hidden:{y:"-100vh",opacity:0},visible:{y:"0",opacity:1,transition:{duration:.8,type:"tween"}},exit:{y:"-100vh",opacity:0,transition:{duration:.4,type:"tween"}}},a={visible:{opacity:1,top:"60px",transition:{duration:.5,type:"tween"}},hidden:{opacity:0,top:"80px",transition:{duration:.5,type:"tween"}}},o={visible:{opacity:1,transition:{delay:.3,duration:.3}},hidden:{opacity:0,transition:{duration:.2}}}},65820:function(t,e,r){r.d(e,{M:function(){return y}});var n=r(67294),i=r(49304),a=r(30404),o=r(58868);function l(){let t=(0,n.useRef)(!1);return(0,o.L)(()=>(t.current=!0,()=>{t.current=!1}),[]),t}var s=r(240),d=r(96681);class c extends n.Component{getSnapshotBeforeUpdate(t){let e=this.props.childRef.current;if(e&&t.isPresent&&!this.props.isPresent){let t=this.props.sizeRef.current;t.height=e.offsetHeight||0,t.width=e.offsetWidth||0,t.top=e.offsetTop,t.left=e.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function w({children:t,isPresent:e}){let r=(0,n.useId)(),i=(0,n.useRef)(null),a=(0,n.useRef)({width:0,height:0,top:0,left:0});return(0,n.useInsertionEffect)(()=>{let{width:t,height:n,top:o,left:l}=a.current;if(e||!i.current||!t||!n)return;i.current.dataset.motionPopId=r;let s=document.createElement("style");return document.head.appendChild(s),s.sheet&&s.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${t}px !important;
            height: ${n}px !important;
            top: ${o}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(s)}},[e]),n.createElement(c,{isPresent:e,childRef:i,sizeRef:a},n.cloneElement(t,{ref:i}))}let u=({children:t,initial:e,isPresent:r,onExitComplete:i,custom:a,presenceAffectsLayout:o,mode:l})=>{let c=(0,d.h)(p),u=(0,n.useId)(),m=(0,n.useMemo)(()=>({id:u,initial:e,isPresent:r,custom:a,onExitComplete:t=>{for(let e of(c.set(t,!0),c.values()))if(!e)return;i&&i()},register:t=>(c.set(t,!1),()=>c.delete(t))}),o?void 0:[r]);return(0,n.useMemo)(()=>{c.forEach((t,e)=>c.set(e,!1))},[r]),n.useEffect(()=>{r||c.size||!i||i()},[r]),"popLayout"===l&&(t=n.createElement(w,{isPresent:r},t)),n.createElement(s.O.Provider,{value:m},t)};function p(){return new Map}var m=r(25364),h=r(65411),f=r(16034);let x=t=>t.key||"",y=({children:t,custom:e,initial:r=!0,onExitComplete:s,exitBeforeEnter:d,presenceAffectsLayout:c=!0,mode:w="sync"})=>{d&&(w="wait",(0,f.O)(!1,"Replace exitBeforeEnter with mode='wait'"));let[p]=function(){let t=l(),[e,r]=(0,n.useState)(0),i=(0,n.useCallback)(()=>{t.current&&r(e+1)},[e]),o=(0,n.useCallback)(()=>a.Z_.postRender(i),[i]);return[o,e]}(),y=(0,n.useContext)(m.p).forceRender;y&&(p=y);let b=l(),v=function(t){let e=[];return n.Children.forEach(t,t=>{(0,n.isValidElement)(t)&&e.push(t)}),e}(t),g=v,E=new Set,j=(0,n.useRef)(g),k=(0,n.useRef)(new Map).current,C=(0,n.useRef)(!0);if((0,o.L)(()=>{C.current=!1,function(t,e){t.forEach(t=>{let r=x(t);e.set(r,t)})}(v,k),j.current=g}),(0,h.z)(()=>{C.current=!0,k.clear(),E.clear()}),C.current)return n.createElement(n.Fragment,null,g.map(t=>n.createElement(u,{key:x(t),isPresent:!0,initial:!!r&&void 0,presenceAffectsLayout:c,mode:w},t)));g=[...g];let P=j.current.map(x),N=v.map(x),R=P.length;for(let t=0;t<R;t++){let e=P[t];-1===N.indexOf(e)&&E.add(e)}return"wait"===w&&E.size&&(g=[]),E.forEach(t=>{if(-1!==N.indexOf(t))return;let r=k.get(t);if(!r)return;let i=P.indexOf(t),a=()=>{k.delete(t),E.delete(t);let e=j.current.findIndex(e=>e.key===t);if(j.current.splice(e,1),!E.size){if(j.current=v,!1===b.current)return;p(),s&&s()}};g.splice(i,0,n.createElement(u,{key:x(r),isPresent:!1,onExitComplete:a,custom:e,presenceAffectsLayout:c,mode:w},r))}),g=g.map(t=>{let e=t.key;return E.has(e)?t:n.createElement(u,{key:x(t),isPresent:!0,presenceAffectsLayout:c,mode:w},t)}),"production"!==i.O&&"wait"===w&&g.length>1&&console.warn('You\'re attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.'),n.createElement(n.Fragment,null,E.size?g:g.map(t=>(0,n.cloneElement)(t)))}}}]);