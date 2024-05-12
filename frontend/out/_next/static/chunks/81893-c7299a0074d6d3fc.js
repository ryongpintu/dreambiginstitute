"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81893],{20599:function(t,e,r){var i=r(85893),a=r(67294),n=r(11163),o=r(86010),l=r(29552);let s=(0,a.forwardRef)((t,e)=>{let{className:r,bg:s}=t,[w,d]=(0,a.useState)(""),c=(0,n.useRouter)(),p=t=>{t.preventDefault(),w&&c.push({pathname:"/courses/search",query:{s:w}},void 0,{scroll:!1})};return(0,i.jsxs)("form",{className:(0,o.Z)("tw-relative",r),ref:e,onSubmit:p,children:[(0,i.jsx)("label",{htmlFor:"search",className:"tw-sr-only",children:"Search For"}),(0,i.jsx)(l.Z,{id:"search",name:"search",type:"text",placeholder:"Search...",bg:s,className:(0,o.Z)("tw-max-h-[48px] tw-pr-[50px]"),value:w,onChange:t=>d(t.target.value)}),(0,i.jsx)("button",{type:"submit","aria-label":"Search",className:"tw-absolute tw-right-0 tw-top-0 tw-w-12 tw-h-12 tw-rounded-tr tw-rounded-br tw-transition-colors tw-text-primary tw-flex tw-justify-center tw-items-center hover:tw-bg-primary hover:tw-text-white",children:(0,i.jsx)("i",{className:"fas fa-search"})})]})});e.Z=s},70284:function(t,e,r){var i=r(85893),a=r(67294),n=r(12064),o=r(78053);let l=(0,a.forwardRef)((t,e)=>{let{counter:r,suffix:l,title:s}=t,[w,d]=(0,a.useState)(!1),c=()=>{w||d(!0)},p=(0,a.useRef)(null);return(0,a.useEffect)(()=>{if(!w)return;let t=p.current;if(!t)return;let e=(0,n.j)(0,r,{duration:1,onUpdate(e){t.textContent=e.toFixed(3).replace(/[.,]000$/,"")}});return()=>e.stop()},[r,w]),(0,i.jsxs)("div",{className:"funfact tw-text-center",ref:e,children:[(0,i.jsxs)(o.E.div,{className:"tw-text-4xl md:tw-text-5xl tw-font-extrabold tw-leading-none tw-text-primary",onViewportEnter:c,children:[(0,i.jsx)("span",{ref:p}),l]}),(0,i.jsx)("h3",{className:"tw-text-md md:tw-text-base tw-font-bold tw-mt-2.5 md:tw-mt-[14px] tw-mb-0 tw-uppercase tw-text-secondary -tw-tracking-tightest",children:s})]})});e.Z=l},47453:function(t,e,r){var i=r(85893),a=r(67294),n=r(86010);let o=(0,a.forwardRef)((t,e)=>{let{className:r,title:a,subtitle:o,description:l,align:s,color:w,titleSize:d,subtitleClass:c,titleClass:p,descClass:m}=t;return(0,i.jsxs)("div",{className:(0,n.Z)("section-title tw-relative tw-z-20","center"===s&&"tw-text-center",r),ref:e,children:[o&&(0,i.jsx)("span",{className:(0,n.Z)("tw-font-medium tw-text-base tw-leading-none -tw-tracking-tightest tw-block tw-mb-2.5 tw-uppercase","A"===w&&"tw-text-secondary-light","B"===w&&"tw-text-secondary",c),dangerouslySetInnerHTML:{__html:o}}),(0,i.jsx)("h2",{className:(0,n.Z)("title tw-m-0 child:tw-text-primary child:tw-font-normal","A"===w&&"tw-text-secondary","C"===w&&"tw-text-white","large"===d&&"tw-text-4xl lg:tw-text-5xl tw-leading-heading lg:tw-leading-heading",p),dangerouslySetInnerHTML:{__html:a}}),l&&(0,i.jsx)("p",{className:(0,n.Z)("tw-mb-0 tw-mt-[25px] tw-font-medium",m,"C"===w&&"tw-text-white"),dangerouslySetInnerHTML:{__html:l}})]})});o.defaultProps={align:"center",color:"A"},e.Z=o},29309:function(t,e,r){var i=r(85893),a=r(67294),n=r(2962),o=r(49842);let l=t=>{let{title:e,description:r,template:l,openGraph:s,jsonLdType:w,article:d,image:c,instructor:p}=t,[m,u]=(0,a.useState)("");(0,a.useEffect)(()=>{u(window.location.href)},[]);let h="article"===w&&{type:"article",...d,images:[{url:c,width:800,height:600,alt:e},{url:c,width:900,height:800,alt:e}]};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.PB,{title:e,titleTemplate:l?"".concat(e," - ").concat(l):o.Z.titleTemplate,description:r,openGraph:{url:m,title:e,description:r,...s,...h}}),"article"===w&&d&&(0,i.jsx)(n.dX,{type:"Blog",url:m,title:e,images:[c],datePublished:d.publishedTime,dateModified:d.modifiedTime,authorName:d.authors[0],description:r}),"course"===w&&p&&(0,i.jsx)(n.Iv,{courseName:e,description:"Introductory CS course laying out the basics.",provider:{name:p.name,url:m}})]})};l.defaultProps={template:o.Z.name},e.Z=l},64887:function(t,e,r){var i=r(85893),a=r(86010),n=r(50897);let o=t=>{let{children:e,type:r,variant:o,color:l,size:s,shape:w,fullwidth:d,active:c,disabled:p,iconButton:m,label:u,className:h,path:x,onClick:y,hover:b}=t,f=!p&&!c&&"light"===b&&"hover:tw-bg-white hover:tw-border-white hover:tw-text-primary",g=(0,a.Z)("texted"!==o&&"tw-font-bold tw-justify-center tw-items-center tw-border tw-border-solid tw-rounded-md tw-transition-colors tw-min-w-max","texted"!==o&&!d&&"tw-inline-flex","contained"===o&&["primary"===l&&["tw-bg-primary tw-border-primary tw-text-white",!p&&!c&&"default"===b&&"hover:tw-bg-secondary hover:tw-border-secondary hover:tw-text-white",!p&&c&&"tw-bg-secondary tw-border-secondary active:tw-bg-secondary active:tw-border-secondary",f],"light"===l&&["tw-bg-light tw-border-light tw-text-heading",!p&&!c&&"default"===b&&"hover:tw-bg-primary hover:tw-border-primary hover:tw-text-white",!p&&c&&"tw-bg-primary tw-border-primary active:tw-bg-primary active:tw-border-primary",f]],"outlined"===o&&["primary"===l&&["tw-bg-transparent tw-border-primary tw-text-primary",!p&&!c&&"default"===b&&"hover:tw-bg-primary hover:tw-text-white",!p&&c&&"default"===b&&"tw-bg-primary tw-border-primary tw-text-white active:tw-bg-primary active:tw-bg-primary",f],"light"===l&&["tw-border-light tw-text-light",!p&&!c&&"default"===b&&"hover:tw-bg-primary hover:tw-border-primary hover:tw-text-white",!p&&c&&"tw-bg-primary tw-border-primary active:tw-bg-primary active:tw-border-primary",f]],!m&&"texted"!==o&&["md"===s&&"tw-text-md tw-px-7 tw-py-1 tw-min-h-[48px] md:tw-min-h-[52px] md:tw-px-10","xs"===s&&"tw-text-[13px] tw-px-5 tw-leading-[30px] tw-min-h-8"],"tw-rounded"===w&&"tw-rounded-md","ellipse"===w&&"tw-rounded-full",d&&"tw-flex tw-w-full",h);return x?(0,i.jsx)(n.Z,{path:x,className:g,onClick:y,"aria-label":u,children:e}):(0,i.jsx)("button",{type:r,className:g,onClick:y,"aria-label":u,children:e})};o.defaultProps={type:"button",variant:"contained",color:"primary",size:"md",shape:"square",fullwidth:!1,active:!1,disabled:!1,iconButton:!1,hover:"default"},o.displayName="Button",e.Z=o},49637:function(t,e,r){var i=r(85893),a=r(86010);let n=t=>{let{space:e,bg:r,className:n,style:o,children:l}=t;return(0,i.jsx)("section",{className:(0,a.Z)(n,"top-bottom"===e&&"tw-py-15 md:tw-py-20 lg:tw-py-[100px]","top-bottom-2"===e&&"tw-py-15 md:tw-py-20 lg:tw-pt-[100px] lg:tw-pb-40","top-bottom-3"===e&&"tw-pt-[150px] tw-pb-15 md:tw-pt-[170px] md:tw-pb-20 lg:tw-pt-[190px] lg:tw-pb-[100px]","top"===e&&"tw-pt-15 md:tw-pt-20 lg:tw-pt-[100px]","top-2"===e&&"tw-pt-[150px] md:tw-pt-[170px] lg:tw-pt-[320px]","bottom"===e&&"tw-pb-15 md:tw-pb-20 lg:tw-pb-[100px]","bottom-2"===e&&"tw-mb-[70px]","bottom-3"===e&&"tw-pb-15 md:tw-pb-20 lg:tw-pb-[100px] xl:tw-pb-[160px]",r),style:o,children:l})};n.defaultProps={space:"top-bottom"},e.Z=n},43816:function(t,e,r){var i=r(85893),a=r(78053),n=r(49637),o=r(70284),l=r(68945);let s=(0,a.E)(o.Z),w=t=>{let{data:{items:e},space:r,bg:a}=t;return(0,i.jsx)(n.Z,{className:"funfact-area",space:r,bg:a,children:(0,i.jsx)("div",{className:"tw-container tw-grid tw-gap-7.5 sm:tw-grid-cols-2 lg:tw-grid-cols-4 tw-relative tw-z-20",children:null==e?void 0:e.map(t=>(0,i.jsx)(s,{counter:t.counter,suffix:t.suffix,title:t.title,initial:"offscreen",whileInView:"onscreen",viewport:{once:!0,amount:.4},variants:l.sQ},t.id))})})};e.Z=w},15967:function(t,e,r){r.d(e,{Z:function(){return j}});var i=r(85893),a=r(9121),n=r(67294),o=r(11163),l=r(5152),s=r.n(l),w=r(86010),d=r(26569),c=r(20599),p=r(36285),m=r(62361),u=r(50897),h=r(34977),x=r(27542);let y=s()(()=>Promise.all([r.e(78053),r.e(15504)]).then(r.bind(r,15504)),{loadableGenerated:{webpack:()=>[15504]},ssr:!1}),b=s()(()=>Promise.all([r.e(78053),r.e(84895)]).then(r.bind(r,45065)),{loadableGenerated:{webpack:()=>[45065]},ssr:!1}),f=t=>{let{shadow:e,fluid:r,transparent:a,mode:l}=t,s=(0,o.useRouter)(),[f,g]=(0,n.useState)(!1),[v,j]=(0,n.useState)(!1),{sticky:N,measuredRef:Z}=(0,x.Ax)();return(0,n.useEffect)(()=>{j(!1)},[s]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("header",{className:(0,w.Z)("header",!a&&"tw-relative",a&&"tw-absolute tw-inset-0 tw-bottom-auto tw-bg-transparent"),children:[(0,i.jsx)("div",{ref:Z,className:(0,w.Z)("header-inner tw-py-[19px] xl:tw-py-0 tw-z-50 tw-transition-all tw-left-0 tw-top-0 tw-w-full tw-h-auto",!N&&"tw-absolute",N&&"tw-fixed tw-shadow-3md tw-shadow-black/10 tw-animate-headerSlideDown",e&&"tw-shadow-sm tw-shadow-black/5",!a&&"tw-bg-white",a&&!N&&"tw-bg-transparent",a&&N&&"tw-bg-white",a&&N&&"light"===l&&"tw-bg-black"),children:(0,i.jsxs)("div",{className:(0,w.Z)("tw-container tw-grid tw-grid-flow-col xl:tw-grid-cols-[22%_minmax(56%,_1fr)_22%] tw-items-center",r&&"tw-max-w-full tw-px-3.8 3xl:tw-px-37"),children:[(0,i.jsx)(d.Z,{variant:l,className:"tw-max-w-[120px] sm:tw-max-w-[158px]"}),(0,i.jsx)(p.Z,{className:"tw-hidden xl:tw-block",align:"center",menu:h.Z,color:l}),(0,i.jsxs)("div",{className:"tw-flex tw-justify-end tw-items-center",children:[(0,i.jsx)(u.Z,{path:"/profile",className:(0,w.Z)("tw-inline-block tw-px-2.5 tw-py-1.5","light"===l&&"tw-text-white hover:tw-text-white","dark"===l&&"tw-text-dark-50"),"aria-label":"User Profile",children:(0,i.jsx)("i",{className:"far fa-user-circle tw-text-lg"})}),(0,i.jsx)("div",{className:"tw-hidden md:tw-block md:tw-max-w-[250px] md:tw-pl-2.5",children:(0,i.jsx)(c.Z,{bg:a?"white":"light"})}),(0,i.jsxs)("div",{className:"md:tw-hidden tw-overflow-hidden",children:[(0,i.jsx)("button",{type:"button",className:(0,w.Z)("tw-inline-block tw-px-2.5 tw-py-1.5 md:tw-hidden","light"===l&&"tw-text-white","dark"===l&&"tw-text-dark-50"),onClick:()=>g(t=>!t),"aria-label":"Search Toggle",children:(0,i.jsx)("i",{className:"far fa-search tw-text-lg"})}),(0,i.jsx)(b,{show:f,onClose:()=>g(!1)})]}),(0,i.jsx)(m.Z,{className:"tw-pl-5 xl:tw-hidden",onClick:()=>j(!0),color:l,label:"Toggle Menu"})]})]})}),(0,i.jsx)("div",{className:"tw-h-20"})]}),(0,i.jsx)(y,{isOpen:v,onClose:()=>j(!1),menu:h.Z})]})};f.defaultProps={fluid:!0,mode:"dark"};var g=r(66298);let v=t=>{let{children:e,headerShadow:r,headerFluid:n,headerMode:o,headerTransparent:l,footerMode:s}=t;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f,{shadow:r,fluid:n,transparent:l,mode:o}),(0,i.jsx)("main",{className:"tw-relative",children:e}),(0,i.jsx)(g.Z,{mode:s}),(0,i.jsx)(a.Z,{})]})};var j=v},68945:function(t,e,r){r.d(e,{Fc:function(){return a},It:function(){return p},Ji:function(){return o},Uh:function(){return n},Zd:function(){return d},eu:function(){return l},oz:function(){return c},qX:function(){return w},sQ:function(){return i},vl:function(){return s}});let i={offscreen:{opacity:0,y:30},onscreen:{opacity:1,y:0,transition:{type:"spring",duration:1}}},a={offscreen:{opacity:0,x:-100},onscreen:{opacity:1,x:0,transition:{type:"spring",duration:1}}},n={offscreen:{opacity:0,x:100},onscreen:{opacity:1,x:0,transition:{type:"spring",duration:1}}},o={hidden:{y:"-100vh",opacity:0},visible:{y:"0",opacity:1,transition:{duration:.8,type:"tween"}},exit:{y:"-100vh",opacity:0,transition:{duration:.4,type:"tween"}}},l={hidden:{y:"100%",opacity:0},visible:{y:"0",opacity:1,transition:{duration:.5,type:"tween"}},exit:{y:"100%",opacity:0,transition:{duration:.5,type:"tween"}}},s={hidden:{opacity:0},visible:{y:0,opacity:1,transition:{duration:.4,type:"spring"}},exit:{opacity:0,transition:{duration:.4,type:"spring"}}},w={visible:{opacity:1,top:"60px",transition:{duration:.5,type:"tween"}},hidden:{opacity:0,top:"80px",transition:{duration:.5,type:"tween"}}},d={visible:{opacity:1,transition:{delay:.3,duration:.3}},hidden:{opacity:0,transition:{duration:.2}}},c={hidden:{opacity:0,transition:{duration:.5,type:"tween",when:"afterChildren"}},visible:{opacity:1,transition:{duration:.4,type:"tween",when:"beforeChildren"}}},p={hidden:{opacity:0,y:50,transition:{duration:.4,type:"tween"}},visible:{opacity:1,y:0,transition:{duration:.4,type:"tween"}}}}}]);