(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[49679,85595],{20180:function(t,e,a){"use strict";var r=a(85893),i=a(67294),n=a(86010),s=a(87536),l=a(29552),o=a(38213),w=a(64887),d=a(96432);let c=(0,i.forwardRef)((t,e)=>{var a;let{className:c}=t,[p,m]=(0,i.useState)(""),{register:u,handleSubmit:x,formState:{errors:h}}=(0,s.cI)(),f=t=>{console.log(t),m("Thank you for your message!")};return(0,r.jsxs)("form",{className:(0,n.Z)("tw-relative tw-max-w-[570px] tw-flex tw-flex-wrap",c),onSubmit:x(f),ref:e,children:[(0,r.jsxs)("div",{className:"tw-flex-100 md:tw-flex-auto0",children:[(0,r.jsx)("label",{htmlFor:"newsletter_email",className:"tw-sr-only",children:"Newsletter"}),(0,r.jsx)(l.Z,{id:"newsletter_email",type:"email",placeholder:"Your E-mail",className:"tw-max-h-[52px] md:tw-rounded-br-none md:tw-rounded-tr-none md:tw-border-r-0",feedbackText:null==h?void 0:null===(a=h.newsletter_email)||void 0===a?void 0:a.message,state:(0,d.wH)(h,"newsletter_email")?"error":"success",showState:!!(0,d.wH)(h,"newsletter_email"),...u("newsletter_email",{required:"Email is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"invalid email address"}})})]}),(0,r.jsx)(w.Z,{type:"submit",className:"tw-mt-3.8 md:tw-mt-0 md:tw-rounded-bl-none md:tw-rounded-tl-none",children:"Subscribe"}),p&&(0,r.jsx)(o.Z,{state:"success",children:p})]})});e.Z=c},20599:function(t,e,a){"use strict";var r=a(85893),i=a(67294),n=a(11163),s=a(86010),l=a(29552);let o=(0,i.forwardRef)((t,e)=>{let{className:a,bg:o}=t,[w,d]=(0,i.useState)(""),c=(0,n.useRouter)(),p=t=>{t.preventDefault(),w&&c.push({pathname:"/courses/search",query:{s:w}},void 0,{scroll:!1})};return(0,r.jsxs)("form",{className:(0,s.Z)("tw-relative",a),ref:e,onSubmit:p,children:[(0,r.jsx)("label",{htmlFor:"search",className:"tw-sr-only",children:"Search For"}),(0,r.jsx)(l.Z,{id:"search",name:"search",type:"text",placeholder:"Search...",bg:o,className:(0,s.Z)("tw-max-h-[48px] tw-pr-[50px]"),value:w,onChange:t=>d(t.target.value)}),(0,r.jsx)("button",{type:"submit","aria-label":"Search",className:"tw-absolute tw-right-0 tw-top-0 tw-w-12 tw-h-12 tw-rounded-tr tw-rounded-br tw-transition-colors tw-text-primary tw-flex tw-justify-center tw-items-center hover:tw-bg-primary hover:tw-text-white",children:(0,r.jsx)("i",{className:"fas fa-search"})})]})});e.Z=o},47453:function(t,e,a){"use strict";var r=a(85893),i=a(67294),n=a(86010);let s=(0,i.forwardRef)((t,e)=>{let{className:a,title:i,subtitle:s,description:l,align:o,color:w,titleSize:d,subtitleClass:c,titleClass:p,descClass:m}=t;return(0,r.jsxs)("div",{className:(0,n.Z)("section-title tw-relative tw-z-20","center"===o&&"tw-text-center",a),ref:e,children:[s&&(0,r.jsx)("span",{className:(0,n.Z)("tw-font-medium tw-text-base tw-leading-none -tw-tracking-tightest tw-block tw-mb-2.5 tw-uppercase","A"===w&&"tw-text-secondary-light","B"===w&&"tw-text-secondary",c),dangerouslySetInnerHTML:{__html:s}}),(0,r.jsx)("h2",{className:(0,n.Z)("title tw-m-0 child:tw-text-primary child:tw-font-normal","A"===w&&"tw-text-secondary","C"===w&&"tw-text-white","large"===d&&"tw-text-4xl lg:tw-text-5xl tw-leading-heading lg:tw-leading-heading",p),dangerouslySetInnerHTML:{__html:i}}),l&&(0,r.jsx)("p",{className:(0,n.Z)("tw-mb-0 tw-mt-[25px] tw-font-medium",m,"C"===w&&"tw-text-white"),dangerouslySetInnerHTML:{__html:l}})]})});s.defaultProps={align:"center",color:"A"},e.Z=s},29309:function(t,e,a){"use strict";var r=a(85893),i=a(67294),n=a(2962),s=a(49842);let l=t=>{let{title:e,description:a,template:l,openGraph:o,jsonLdType:w,article:d,image:c,instructor:p}=t,[m,u]=(0,i.useState)("");(0,i.useEffect)(()=>{u(window.location.href)},[]);let x="article"===w&&{type:"article",...d,images:[{url:c,width:800,height:600,alt:e},{url:c,width:900,height:800,alt:e}]};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.PB,{title:e,titleTemplate:l?"".concat(e," - ").concat(l):s.Z.titleTemplate,description:a,openGraph:{url:m,title:e,description:a,...o,...x}}),"article"===w&&d&&(0,r.jsx)(n.dX,{type:"Blog",url:m,title:e,images:[c],datePublished:d.publishedTime,dateModified:d.modifiedTime,authorName:d.authors[0],description:a}),"course"===w&&p&&(0,r.jsx)(n.Iv,{courseName:e,description:"Introductory CS course laying out the basics.",provider:{name:p.name,url:m}})]})};l.defaultProps={template:s.Z.name},e.Z=l},55584:function(t,e,a){"use strict";var r=a(85893),i=a(86010);let n=t=>{let{title:e,description:a,name:n,designation:s,image:l,className:o}=t;return(0,r.jsxs)("div",{className:(0,i.Z)("testimonial tw-py-7.5 tw-px-5 md:tw-pt-[41px] md:tw-pr-7.5 md:tw-pb-9 md:tw-pl-[50px] tw-bg-white tw-rounded tw-h-full",o),children:[(0,r.jsx)("h3",{className:"tw-text-xl tw-leading-relaxed tw-mb-3.5",children:e}),(0,r.jsx)("p",{className:"tw-text-lg tw-font-medium tw-leading-relaxed",children:a}),(0,r.jsxs)("div",{className:"tw-inline-flex tw-flex-wrap tw-items-center tw-pt-1 md:tw-pt-6",children:[(null==l?void 0:l.src)&&(0,r.jsx)("div",{className:"tw-shrink-0 tw-mr-5 tw-w-[70px]",children:(0,r.jsx)("img",{className:"tw-rounded-full",src:l.src,alt:(null==l?void 0:l.alt)||n})}),(0,r.jsxs)("div",{className:"cite",children:[(0,r.jsx)("h4",{className:"tw-leading-tight tw-text-h6 tw-mb-1 tw-tracking-wider tw-uppercase",children:n}),(0,r.jsxs)("span",{className:"tw-mt-2.5 tw-text-md tw-text-gray-300",children:["/ ",s]})]})]})]})};e.Z=n},64887:function(t,e,a){"use strict";var r=a(85893),i=a(86010),n=a(50897);let s=t=>{let{children:e,type:a,variant:s,color:l,size:o,shape:w,fullwidth:d,active:c,disabled:p,iconButton:m,label:u,className:x,path:h,onClick:f,hover:g}=t,b=!p&&!c&&"light"===g&&"hover:tw-bg-white hover:tw-border-white hover:tw-text-primary",y=(0,i.Z)("texted"!==s&&"tw-font-bold tw-justify-center tw-items-center tw-border tw-border-solid tw-rounded-md tw-transition-colors tw-min-w-max","texted"!==s&&!d&&"tw-inline-flex","contained"===s&&["primary"===l&&["tw-bg-primary tw-border-primary tw-text-white",!p&&!c&&"default"===g&&"hover:tw-bg-secondary hover:tw-border-secondary hover:tw-text-white",!p&&c&&"tw-bg-secondary tw-border-secondary active:tw-bg-secondary active:tw-border-secondary",b],"light"===l&&["tw-bg-light tw-border-light tw-text-heading",!p&&!c&&"default"===g&&"hover:tw-bg-primary hover:tw-border-primary hover:tw-text-white",!p&&c&&"tw-bg-primary tw-border-primary active:tw-bg-primary active:tw-border-primary",b]],"outlined"===s&&["primary"===l&&["tw-bg-transparent tw-border-primary tw-text-primary",!p&&!c&&"default"===g&&"hover:tw-bg-primary hover:tw-text-white",!p&&c&&"default"===g&&"tw-bg-primary tw-border-primary tw-text-white active:tw-bg-primary active:tw-bg-primary",b],"light"===l&&["tw-border-light tw-text-light",!p&&!c&&"default"===g&&"hover:tw-bg-primary hover:tw-border-primary hover:tw-text-white",!p&&c&&"tw-bg-primary tw-border-primary active:tw-bg-primary active:tw-border-primary",b]],!m&&"texted"!==s&&["md"===o&&"tw-text-md tw-px-7 tw-py-1 tw-min-h-[48px] md:tw-min-h-[52px] md:tw-px-10","xs"===o&&"tw-text-[13px] tw-px-5 tw-leading-[30px] tw-min-h-8"],"tw-rounded"===w&&"tw-rounded-md","ellipse"===w&&"tw-rounded-full",d&&"tw-flex tw-w-full",x);return h?(0,r.jsx)(n.Z,{path:h,className:y,onClick:f,"aria-label":u,children:e}):(0,r.jsx)("button",{type:a,className:y,onClick:f,"aria-label":u,children:e})};s.defaultProps={type:"button",variant:"contained",color:"primary",size:"md",shape:"square",fullwidth:!1,active:!1,disabled:!1,iconButton:!1,hover:"default"},s.displayName="Button",e.Z=s},36047:function(t,e,a){"use strict";var r=a(85893),i=a(67294),n=a(50897),s=a(86010);let l=(0,i.forwardRef)((t,e)=>{let{text:a,pathText:i,path:l,className:o,size:w}=t;return(0,r.jsxs)("p",{className:(0,s.Z)("tw-font-medium tw-text-secondary-light tw-leading-relaxed","md"===w&&"tw-text-base","lg"===w&&"tw-text-lg",o),ref:e,children:[a," ",(0,r.jsxs)(n.Z,{path:l,className:(0,s.Z)("tw-font-bold tw-leading-none tw-relative tw-py-[3px] tw-text-primary","before:tw-absolute before:tw-content-[''] before:tw-w-full before:tw-scale-x-100 before:tw-origin-right before:tw-bg-gray-350 before:tw-transition-transform before:tw-duration-600 before:tw-delay-300 before:tw-ease-in-expo before:tw-bottom-0 before:tw-left-0 before:tw-h-px","after:tw-absolute after:tw-content-[''] after:tw-w-full after:tw-scale-x-0 after:tw-origin-left after:tw-bg-primary after:tw-transition-transform after:tw-duration-600 after:tw-delay-75 after:tw-ease-in-expo after:tw-bottom-0 after:tw-left-0 after:tw-h-px","hover:before:tw-scale-x-0 hover:after:tw-scale-x-100 hover:after:tw-delay-300 hover:before:tw-delay-75"),children:[i," ",(0,r.jsx)("i",{className:"fas fa-arrow-right"})]})]})});l.defaultProps={size:"lg"},e.Z=l},49637:function(t,e,a){"use strict";var r=a(85893),i=a(86010);let n=t=>{let{space:e,bg:a,className:n,style:s,children:l}=t;return(0,r.jsx)("section",{className:(0,i.Z)(n,"top-bottom"===e&&"tw-py-15 md:tw-py-20 lg:tw-py-[100px]","top-bottom-2"===e&&"tw-py-15 md:tw-py-20 lg:tw-pt-[100px] lg:tw-pb-40","top-bottom-3"===e&&"tw-pt-[150px] tw-pb-15 md:tw-pt-[170px] md:tw-pb-20 lg:tw-pt-[190px] lg:tw-pb-[100px]","top"===e&&"tw-pt-15 md:tw-pt-20 lg:tw-pt-[100px]","top-2"===e&&"tw-pt-[150px] md:tw-pt-[170px] lg:tw-pt-[320px]","bottom"===e&&"tw-pb-15 md:tw-pb-20 lg:tw-pb-[100px]","bottom-2"===e&&"tw-mb-[70px]","bottom-3"===e&&"tw-pb-15 md:tw-pb-20 lg:tw-pb-[100px] xl:tw-pb-[160px]",a),style:s,children:l})};n.defaultProps={space:"top-bottom"},e.Z=n},24268:function(t,e,a){"use strict";a.r(e),a.d(e,{SwiperSlide:function(){return l.o5}});var r=a(85893),i=a(67294),n=a(86010),s=a(88116),l=a(30719);let o=(0,i.forwardRef)((t,e)=>{let{options:a,prevIcon:i,nextIcon:o,navStyle:w,navPosition:d,shadowSize:c,dotStyle:p,dotPosition:m,children:u,className:x,navClass:h}=t,f=(null==a?void 0:a.modules)!==void 0?a.modules:[],g="prev-".concat(h||"swiper-nav"),b="next-".concat(h||"swiper-nav"),y={slidesPerView:3,spaceBetween:30,loop:!1,autoplay:{delay:2500,disableOnInteraction:!1},watchSlidesProgress:!0,autoHeight:!0,breakpoints:{},...a,modules:[s.W_,s.tl,s.s5,s.pt,...f],navigation:null!=a&&!!a.navigation&&{prevEl:".".concat(g),nextEl:".".concat(b)},pagination:null!=a&&!!a.pagination&&{clickable:!0}};return(0,r.jsxs)("div",{className:(0,n.Z)(x,"swiper-wrap tw-relative",w&&"nav-style-".concat(w),d&&"nav-position-".concat(d),p&&"dot-style-".concat(p),m&&"dot-position-".concat(m),c&&"shadow-size-".concat(c)),ref:e,children:[(0,r.jsx)(l.tq,{...y,children:u}),(null==y?void 0:y.navigation)&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{type:"button",className:"swiper-btn swiper-btn-prev ".concat(g),children:(0,r.jsx)("i",{className:(0,n.Z)(i,"icon")})}),(0,r.jsx)("button",{type:"button",className:"swiper-btn swiper-btn-next ".concat(b),children:(0,r.jsx)("i",{className:(0,n.Z)(o,"icon")})})]})]})});o.defaultProps={prevIcon:"fas fa-angle-left",nextIcon:"fas fa-angle-right",navStyle:1,dotStyle:1},e.default=o},13897:function(t,e,a){"use strict";var r=a(85893),i=a(67294),n=a(86010),s=a(5152),l=a.n(s);let o=l()(()=>a.e(69311).then(a.bind(a,69311)),{loadableGenerated:{webpack:()=>[69311]},ssr:!1}),w=t=>{let{label:e,className:a,videoId:s}=t,[l,w]=(0,i.useState)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{type:"button","aria-label":e,className:(0,n.Z)("tw-absolute tw-z-30 tw-inset-0 tw-w-full tw-flex tw-justify-center tw-items-center",a),onClick:()=>w(!0),children:(0,r.jsx)("img",{className:"icon tw-w-16 md:tw-w-auto",src:"/images/icons/icon-youtube-play.png",alt:"youtube play",loading:"lazy",width:100,height:70})}),(0,r.jsx)(o,{show:l,videoId:s,onClose:()=>w(!1)})]})};w.defaultProps={label:"Play video"},e.Z=w},72965:function(t,e,a){"use strict";var r=a(85893),i=a(67294),n=a(86010),s=a(13897);let l=(0,i.forwardRef)((t,e)=>{let{poster:a,video:i,className:l}=t;return(0,r.jsxs)("div",{className:(0,n.Z)("tw-relative tw-overflow-hidden tw-group tw-z-20 tw-rounded tw-shadow-xxl tw-shadow-black/[22%]",l),ref:e,children:[(null==a?void 0:a.src)&&(0,r.jsx)("img",{className:"tw-w-full tw-transition-transform tw-duration-1500 group-hover:tw-scale-110",src:a.src,alt:(null==a?void 0:a.alt)||"video poster",width:(null==a?void 0:a.width)||1170,height:(null==a?void 0:a.height)||620,loading:(null==a?void 0:a.loading)||"lazy"}),i&&(0,r.jsx)(s.Z,{videoId:i.videoId})]})});e.Z=l},19642:function(t,e,a){"use strict";var r=a(85893),i=a(78053),n=a(49637),s=a(36047),l=a(47453),o=a(80040),w=a(68945);let d=t=>{var e,a,d,c;let{data:{section_title:p,motto:m,images:u},space:x,bg:h,titleSize:f}=t,{trans1:g}=(0,o.l8)();return(0,r.jsx)(n.Z,{className:"about-area",space:x,bg:h,children:(0,r.jsxs)("div",{className:"tw-container tw-grid lg:tw-grid-cols-2 tw-items-center tw-gap-[50px] lg:tw-gap-7.5",children:[(0,r.jsxs)(i.E.div,{className:"lg:tw-max-w-[420px] tw-order-2 lg:tw-order-1",initial:"offscreen",whileInView:"onscreen",viewport:{once:!0,amount:.1},variants:w.sQ,children:[p&&(0,r.jsx)(l.Z,{...p,align:"left",titleSize:f}),m&&(0,r.jsx)(s.Z,{className:"tw-mt-4",size:"md",...m})]}),(0,r.jsxs)("div",{className:"tw-relative tw-order-1 lg:tw-order-2",children:[(null==u?void 0:null===(e=u[0])||void 0===e?void 0:e.src)&&(0,r.jsx)(i.E.div,{className:"tw-relative tw-z-10",initial:"offscreen",whileInView:"onscreen",viewport:{once:!0,amount:.1},variants:w.sQ,children:(0,r.jsx)("img",{src:u[0].src,alt:(null===(a=u[0])||void 0===a?void 0:a.alt)||"About One",width:570,height:360,loading:"lazy",className:"tw-rounded"})}),(null==u?void 0:null===(d=u[1])||void 0===d?void 0:d.src)&&(0,r.jsx)("div",{className:"tw-absolute tw-z-20 tw-top-[-90px] tw-right-0 3xl:tw-right-[-73px]",children:(0,r.jsx)("img",{src:u[1].src,alt:(null===(c=u[1])||void 0===c?void 0:c.alt)||"About Two",width:190,height:190,loading:"lazy",className:"tw-rounded"})}),(0,r.jsx)(i.E.div,{className:"tw-absolute tw-z-1 tw-top-[-51px] tw-left-0 lg:tw-left-[-107px]",animate:{x:g().x,y:g().y},children:(0,r.jsx)("span",{className:"tw-block -tw-indent-[99999px] tw-border-[7px] tw-border-desert tw-rounded-full tw-w-[45px] tw-h-[45px] lg:tw-w-15 lg:tw-h-15",children:"shape 1"})}),(0,r.jsx)(i.E.div,{className:"tw-absolute tw-z-1 tw-bottom-[-26px] tw-w-20 tw-left-0 lg:tw-w-auto lg:-tw-left-10",animate:{x:g().x,y:g().y},children:(0,r.jsx)("img",{src:"/images/shape-animation/about-shape-1.png",alt:""})}),(0,r.jsx)(i.E.div,{className:"tw-absolute tw-z-1 tw-right-2.5 -tw-bottom-10 tw-w-20 lg:tw-w-auto",animate:{x:g().x,y:g().y},children:(0,r.jsx)("img",{src:"/images/shape-animation/nwesletter-shape-2.png",alt:""})}),(0,r.jsx)(i.E.div,{className:"tw-absolute tw-z-1 tw-top-[-27px] tw-left-[360px] tw-w-20 lg:tw-w-auto",animate:{x:g().x,y:g().y},children:(0,r.jsx)("img",{src:"/images/shape-animation/shape-1.png",alt:""})})]})]})})};d.defaultProps={bg:"tw-bg-gray-200"},e.Z=d},87242:function(t,e,a){"use strict";var r=a(85893),i=a(78053),n=a(49637),s=a(80040),l=a(47453),o=a(20180),w=a(68945);let d=t=>{let{data:{section_title:e},space:a,bg:d}=t,{trans1:c,trans2:p}=(0,s.l8)();return(0,r.jsx)(n.Z,{className:"newsletter-area",space:a,bg:d,children:(0,r.jsxs)(i.E.div,{className:"tw-container",initial:"offscreen",whileInView:"onscreen",viewport:{once:!0,amount:.4},variants:w.sQ,children:[e&&(0,r.jsx)(l.Z,{...e}),(0,r.jsx)(o.Z,{className:"tw-mx-auto tw-mt-[50px]"}),(0,r.jsx)(i.E.div,{className:"tw-absolute tw-bottom-[50px] tw-left-[-3px] md:tw-left-0 tw-z-20",animate:{x:c().x,y:c().y},children:(0,r.jsx)("span",{className:"tw-block -tw-indent-[99999px] tw-border-[6px] tw-border-primary-light tw-rounded-full tw-w-[45px] tw-h-[45px] md:tw-border-[7px] md:tw-w-14 md:tw-h-14",children:"shape 1"})}),(0,r.jsx)(i.E.div,{className:"tw-absolute -tw-z-1 -tw-bottom-[45px] tw-right-0 tw-top-7.5 tw-w-[100px] md:tw-w-auto md:tw-right-2.5",animate:{x:c().x,y:c().y},children:(0,r.jsx)("img",{src:"/images/shape-animation/nwesletter-shape-1.png",alt:""})}),(0,r.jsx)(i.E.div,{className:"tw-absolute -tw-z-1 -tw-bottom-[-25px] tw-top-[25px] tw-right-[5px] tw-w-15 md:tw-w-auto md:tw-right-[-35px]",animate:{x:p().x,y:p().y},children:(0,r.jsx)("img",{src:"/images/shape-animation/nwesletter-shape-2.png",alt:""})})]})})};e.Z=d},68945:function(t,e,a){"use strict";a.d(e,{Fc:function(){return i},It:function(){return p},Ji:function(){return s},Uh:function(){return n},Zd:function(){return d},eu:function(){return l},oz:function(){return c},qX:function(){return w},sQ:function(){return r},vl:function(){return o}});let r={offscreen:{opacity:0,y:30},onscreen:{opacity:1,y:0,transition:{type:"spring",duration:1}}},i={offscreen:{opacity:0,x:-100},onscreen:{opacity:1,x:0,transition:{type:"spring",duration:1}}},n={offscreen:{opacity:0,x:100},onscreen:{opacity:1,x:0,transition:{type:"spring",duration:1}}},s={hidden:{y:"-100vh",opacity:0},visible:{y:"0",opacity:1,transition:{duration:.8,type:"tween"}},exit:{y:"-100vh",opacity:0,transition:{duration:.4,type:"tween"}}},l={hidden:{y:"100%",opacity:0},visible:{y:"0",opacity:1,transition:{duration:.5,type:"tween"}},exit:{y:"100%",opacity:0,transition:{duration:.5,type:"tween"}}},o={hidden:{opacity:0},visible:{y:0,opacity:1,transition:{duration:.4,type:"spring"}},exit:{opacity:0,transition:{duration:.4,type:"spring"}}},w={visible:{opacity:1,top:"60px",transition:{duration:.5,type:"tween"}},hidden:{opacity:0,top:"80px",transition:{duration:.5,type:"tween"}}},d={visible:{opacity:1,transition:{delay:.3,duration:.3}},hidden:{opacity:0,transition:{duration:.2}}},c={hidden:{opacity:0,transition:{duration:.5,type:"tween",when:"afterChildren"}},visible:{opacity:1,transition:{duration:.4,type:"tween",when:"beforeChildren"}}},p={hidden:{opacity:0,y:50,transition:{duration:.4,type:"tween"}},visible:{opacity:1,y:0,transition:{duration:.4,type:"tween"}}}},85595:function(t,e,a){var r=a(67294);function i(t){return r.createElement("svg",t,r.createElement("g",{transform:"translate(-51.000000, -1390.000000)"},r.createElement("g",{transform:"translate(-28.000000, 963.000000)"},r.createElement("path",{d:"M353.907509,817.715288 C386.112868,835.281848 455.192882,815.572841 468.907509,740.715288 C483.008804,663.747218 442.907509,661.715288 449.907509,633.715288 C478,592 483.008804,538.76355 453.907509,506.715288 C381.907509,431.715288 363.907509,521.715288 303.907509,466.715288 C279.650772,442.458551 242.907509,413.715288 189.907509,433.715288 C114.974471,461.991907 132.907509,521.005066 132.907509,563.715288 C132.907509,578.753612 85.1423289,607.023718 79.9075093,645.715288 C73.306976,694.501115 103.907509,758.715288 132.907509,780.715288 C178.907509,832.715288 249.907509,820.715288 281.907509,802.715288 C309.384918,787.259246 331.907509,805.715288 353.907509,817.715288 Z"}))))}i.defaultProps={viewBox:"0 0 395 397",version:"1.1",width:"395px",height:"397px"},t.exports=i,i.default=i}}]);