(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[40991,62521,85595],{20180:function(t,e,a){"use strict";var s=a(85893),l=a(67294),i=a(86010),n=a(87536),r=a(29552),o=a(38213),w=a(64887),c=a(96432);let d=(0,l.forwardRef)((t,e)=>{var a;let{className:d}=t,[m,x]=(0,l.useState)(""),{register:u,handleSubmit:p,formState:{errors:h}}=(0,n.cI)(),v=t=>{console.log(t),x("Thank you for your message!")};return(0,s.jsxs)("form",{className:(0,i.Z)("tw-relative tw-max-w-[570px] tw-flex tw-flex-wrap",d),onSubmit:p(v),ref:e,children:[(0,s.jsxs)("div",{className:"tw-flex-100 md:tw-flex-auto0",children:[(0,s.jsx)("label",{htmlFor:"newsletter_email",className:"tw-sr-only",children:"Newsletter"}),(0,s.jsx)(r.Z,{id:"newsletter_email",type:"email",placeholder:"Your E-mail",className:"tw-max-h-[52px] md:tw-rounded-br-none md:tw-rounded-tr-none md:tw-border-r-0",feedbackText:null==h?void 0:null===(a=h.newsletter_email)||void 0===a?void 0:a.message,state:(0,c.wH)(h,"newsletter_email")?"error":"success",showState:!!(0,c.wH)(h,"newsletter_email"),...u("newsletter_email",{required:"Email is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"invalid email address"}})})]}),(0,s.jsx)(w.Z,{type:"submit",className:"tw-mt-3.8 md:tw-mt-0 md:tw-rounded-bl-none md:tw-rounded-tl-none",children:"Subscribe"}),m&&(0,s.jsx)(o.Z,{state:"success",children:m})]})});e.Z=d},68708:function(t,e,a){"use strict";var s=a(85893),l=a(67294),i=a(86010),n=a(50897);let r=(0,l.forwardRef)((t,e)=>{let{image:a,title:l,description:r,path:o,pathText:w,className:c}=t;return(0,s.jsxs)("div",{ref:e,className:(0,i.Z)("image-box tw-relative tw-text-center tw-group tw-bg-white tw-pt-10 tw-pb-7.5 tw-px-5 tw-rounded","before:tw-absolute before:tw-content-[''] before:tw-z-1 before:tw-inset-0 before:tw-shadow-lg before:tw-shadow-heading/10 before:tw-rounded-b before:tw-transition-opacity before:tw-opacity-0","hover:before:tw-opacity-100",c),children:[(null==a?void 0:a.src)&&(0,s.jsx)("img",{src:a.src,alt:(null==a?void 0:a.alt)||l,className:"tw-mb-6 tw-mx-auto"}),(0,s.jsx)("h3",{className:"tw-text-secondary tw-leading-normal tw-text-xl tw-m-0",children:l}),(0,s.jsx)("p",{className:"tw-leading-relaxed tw-mt-2.5 tw-mb-[34px]",children:r}),(0,s.jsxs)("span",{className:"tw-text-md tw-font-bold tw-leading-none tw-inline-flex tw-items-center tw-py-[5px] tw-text-secondary-light tw-transition-colors tw-duration-300 group-hover:tw-text-primary",children:[w," ",(0,s.jsx)("i",{className:"fa fa-arrow-right tw-ml-3.5 tw-text-[16px]"})]}),(0,s.jsx)(n.Z,{className:"link-overlay",path:o,children:l})]})});r.displayName="ImageBox",e.Z=r},69397:function(t,e,a){"use strict";var s=a(85893),l=a(86010),i=a(62521),n=a.n(i);let r=t=>{let{className:e,color:a}=t;return(0,s.jsx)("div",{className:(0,l.Z)("bottom-shape tw-absolute -tw-bottom-px tw-left-0 tw-w-full tw-h-[70px] tw-z-1",e),children:(0,s.jsx)(n(),{className:(0,l.Z)("tw-w-full tw-h-full",a)})})};r.defaultProps={color:"tw-fill-white"},e.Z=r},24268:function(t,e,a){"use strict";a.r(e),a.d(e,{SwiperSlide:function(){return r.o5}});var s=a(85893),l=a(67294),i=a(86010),n=a(88116),r=a(30719);let o=(0,l.forwardRef)((t,e)=>{let{options:a,prevIcon:l,nextIcon:o,navStyle:w,navPosition:c,shadowSize:d,dotStyle:m,dotPosition:x,children:u,className:p,navClass:h}=t,v=(null==a?void 0:a.modules)!==void 0?a.modules:[],f="prev-".concat(h||"swiper-nav"),g="next-".concat(h||"swiper-nav"),b={slidesPerView:3,spaceBetween:30,loop:!1,autoplay:{delay:2500,disableOnInteraction:!1},watchSlidesProgress:!0,autoHeight:!0,breakpoints:{},...a,modules:[n.W_,n.tl,n.s5,n.pt,...v],navigation:null!=a&&!!a.navigation&&{prevEl:".".concat(f),nextEl:".".concat(g)},pagination:null!=a&&!!a.pagination&&{clickable:!0}};return(0,s.jsxs)("div",{className:(0,i.Z)(p,"swiper-wrap tw-relative",w&&"nav-style-".concat(w),c&&"nav-position-".concat(c),m&&"dot-style-".concat(m),x&&"dot-position-".concat(x),d&&"shadow-size-".concat(d)),ref:e,children:[(0,s.jsx)(r.tq,{...b,children:u}),(null==b?void 0:b.navigation)&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("button",{type:"button",className:"swiper-btn swiper-btn-prev ".concat(f),children:(0,s.jsx)("i",{className:(0,i.Z)(l,"icon")})}),(0,s.jsx)("button",{type:"button",className:"swiper-btn swiper-btn-next ".concat(g),children:(0,s.jsx)("i",{className:(0,i.Z)(o,"icon")})})]})]})});o.defaultProps={prevIcon:"fas fa-angle-left",nextIcon:"fas fa-angle-right",navStyle:1,dotStyle:1},e.default=o},13897:function(t,e,a){"use strict";var s=a(85893),l=a(67294),i=a(86010),n=a(5152),r=a.n(n);let o=r()(()=>a.e(69311).then(a.bind(a,69311)),{loadableGenerated:{webpack:()=>[69311]},ssr:!1}),w=t=>{let{label:e,className:a,videoId:n}=t,[r,w]=(0,l.useState)(!1);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("button",{type:"button","aria-label":e,className:(0,i.Z)("tw-absolute tw-z-30 tw-inset-0 tw-w-full tw-flex tw-justify-center tw-items-center",a),onClick:()=>w(!0),children:(0,s.jsx)("img",{className:"icon tw-w-16 md:tw-w-auto",src:"/images/icons/icon-youtube-play.png",alt:"youtube play",loading:"lazy",width:100,height:70})}),(0,s.jsx)(o,{show:r,videoId:n,onClose:()=>w(!1)})]})};w.defaultProps={label:"Play video"},e.Z=w},72965:function(t,e,a){"use strict";var s=a(85893),l=a(67294),i=a(86010),n=a(13897);let r=(0,l.forwardRef)((t,e)=>{let{poster:a,video:l,className:r}=t;return(0,s.jsxs)("div",{className:(0,i.Z)("tw-relative tw-overflow-hidden tw-group tw-z-20 tw-rounded tw-shadow-xxl tw-shadow-black/[22%]",r),ref:e,children:[(null==a?void 0:a.src)&&(0,s.jsx)("img",{className:"tw-w-full tw-transition-transform tw-duration-1500 group-hover:tw-scale-110",src:a.src,alt:(null==a?void 0:a.alt)||"video poster",width:(null==a?void 0:a.width)||1170,height:(null==a?void 0:a.height)||620,loading:(null==a?void 0:a.loading)||"lazy"}),l&&(0,s.jsx)(n.Z,{videoId:l.videoId})]})});e.Z=r},66214:function(t,e,a){"use strict";var s=a(85893),l=a(67294),i=a(25675),n=a.n(i),r=a(49637),o=a(24268),w=a(78053),c=a(68945);let d=(0,w.E)(o.default),m=t=>{let{data:{items:e},space:a,bg:i}=t,w=(0,l.useMemo)(()=>({slidesPerView:1,autoplay:!1,autoHeight:!1,breakpoints:{320:{slidesPerView:1},576:{slidesPerView:3},768:{slidesPerView:4},992:{slidesPerView:5},1200:{slidesPerView:6}}}),[]);return(0,s.jsxs)(r.Z,{className:"brand-area",space:a,bg:i,children:[(0,s.jsx)("h2",{className:"tw-sr-only",children:"Brand Area"}),(0,s.jsx)("div",{className:"tw-container",children:e&&(0,s.jsx)(d,{options:w,initial:"offscreen",whileInView:"onscreen",viewport:{once:!0,amount:.4},variants:c.sQ,children:e.map(t=>{var e,a,l,i;return(0,s.jsx)(o.SwiperSlide,{className:"tw-flex tw-justify-center tw-my-auto tw-relative",children:(0,s.jsx)(n(),{className:"fill-image tw-opacity-50 tw-transition-opacity hover:tw-opacity-100",src:null===(e=t.images)||void 0===e?void 0:null===(a=e[0])||void 0===a?void 0:a.src,alt:(null===(l=t.images)||void 0===l?void 0:null===(i=l[0])||void 0===i?void 0:i.alt)||"logo",fill:!0,sizes:"(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"})},t.id)})})})]})};m.defaultProps={space:"top-bottom"},e.Z=m},55318:function(t,e,a){"use strict";var s=a(85893),l=a(78053),i=a(49637),n=a(47453),r=a(20180),o=a(68945);let w=t=>{let{data:{section_title:e},space:a,bg:w,titleSize:c}=t;return(0,s.jsxs)(i.Z,{className:"tw-relative",space:a,bg:w,children:[(0,s.jsx)("div",{className:"tw-absolute tw-inset-0 -tw-z-1 child:tw-w-full child:tw-h-full child:tw-object-cover",children:(0,s.jsx)("img",{src:"/images/bg/subscribe-bg.jpg",alt:"newsletter BG"})}),(0,s.jsxs)(l.E.div,{className:"tw-container tw-relative",initial:"offscreen",whileInView:"onscreen",viewport:{once:!0,amount:.4},variants:o.sQ,children:[e&&(0,s.jsx)(n.Z,{...e,color:"C",titleSize:c,descClass:"tw-text-lg tw-font-medium"}),(0,s.jsx)(r.Z,{className:"tw-mx-auto tw-mt-[50px]"})]})]})};e.Z=w},37084:function(t,e,a){"use strict";a.d(e,{Z:function(){return v}});var s=a(85893),l=a(78053),i=a(49637),n=a(47453),r=a(64887),o=a(86010);let w=t=>{let{description:e,name:a,designation:l,image:i,className:n}=t;return(0,s.jsxs)("div",{className:(0,o.Z)("testimonial tw-py-11 tw-px-[26px] tw-bg-white tw-rounded tw-shadow-lg tw-shadow-heading/10 tw-text-center",n),children:[(null==i?void 0:i.src)&&(0,s.jsx)("div",{className:"tw-mb-7.5 child:tw-mx-auto",children:(0,s.jsx)("img",{src:i.src,width:(null==i?void 0:i.width)||140,height:(null==i?void 0:i.height)||140,alt:(null==i?void 0:i.alt)||a})}),(0,s.jsx)("p",{className:"tw-mb-10 tw-text-lg tw-font-medium tw-text-secondary",children:e}),(0,s.jsx)("h3",{className:"tw-tracking-wider tw-uppercase tw-text-h6 tw-mb-2.5",children:a}),(0,s.jsxs)("span",{className:"tw-text-gray-300",children:["/ ",l]})]})},c=t=>{let{title:e,className:a}=t;return(0,s.jsx)("div",{className:(0,o.Z)("tw-max-w-[270px] tw-py-7.5 tw-px-[26px] tw-bg-white tw-rounded tw-shadow-lg tw-shadow-heading/10",a),children:(0,s.jsxs)("h3",{className:"tw-text-secondary tw-text-xl",children:['"',e,'"']})})},d=t=>{let{className:e,heading:a,text:l}=t;return(0,s.jsxs)("div",{className:(0,o.Z)("tw-max-w-[210px] tw-pt-14 tw-px-[25px] tw-pb-9 tw-bg-white tw-rounded tw-shadow-lg tw-shadow-heading/10 tw-text-center",e),children:[(0,s.jsx)("h3",{className:"tw-leading-none tw-text-secondary",children:a}),(0,s.jsxs)("div",{className:"tw-text-lg tw-text-yellow-100 tw-mt-[5px] tw-mb-2.5",children:[(0,s.jsx)("span",{className:"fa fa-star tw-mx-0.5"}),(0,s.jsx)("span",{className:"fa fa-star tw-mx-0.5"}),(0,s.jsx)("span",{className:"fa fa-star tw-mx-0.5"}),(0,s.jsx)("span",{className:"fa fa-star tw-mx-0.5"}),(0,s.jsx)("span",{className:"fa fa-star tw-mx-0.5"})]}),(0,s.jsx)("p",{children:l})]})};var m=a(85595),x=a.n(m),u=a(80040),p=a(68945);let h=t=>{var e;let{data:{section_title:a,buttons:o,items:m,total_reviews:h},space:v,bg:f,titleSize:g}=t,{trans1:b,trans2:j}=(0,u.l8)();return(0,s.jsx)(i.Z,{className:"testimonial-area",space:v,bg:f,children:(0,s.jsxs)("div",{className:"tw-container tw-grid tw-grid-cols-1 md:tw-grid-cols-12 tw-gap-7.5 md:tw-gap-y-[50px]",children:[(0,s.jsxs)(l.E.div,{className:"tw-relative tw-z-1 md:tw-col-span-6 xl:tw-col-span-4",initial:"offscreen",whileInView:"onscreen",viewport:{once:!0,amount:.4},variants:p.sQ,children:[(null==m?void 0:m[0])&&(0,s.jsx)(w,{image:m[0].images[0],description:m[0].description,name:m[0].name,designation:m[0].designation,className:"tw-my-7.5"}),(null==m?void 0:m[1])&&(0,s.jsx)(c,{title:m[1].title,className:"tw-ml-auto"}),(0,s.jsx)(l.E.div,{className:"tw-absolute -tw-z-1 tw-left-[-110px] tw-bottom-[130px] tw-w-[166px] tw-h-[-110px]",animate:{x:b().x,y:b().y},children:(0,s.jsx)(x(),{className:"tw-fill-primary-light tw-w-full tw-h-full"})}),(0,s.jsx)(l.E.div,{className:"tw-absolute -tw-z-1 tw-bottom-20 tw-left-[-70px]",animate:{x:j().x,y:j().y},children:(0,s.jsx)("img",{src:"/images/shape-animation/shape-3.png",alt:"shape",loading:"lazy",width:178,height:178})})]}),(0,s.jsxs)(l.E.div,{className:"xl:tw-pr-[100px] tw-relative tw-z-1 md:tw-col-span-6 xl:tw-col-span-4",initial:"offscreen",whileInView:"onscreen",viewport:{once:!0,amount:.4},variants:p.sQ,children:[h&&(0,s.jsx)(d,{...h,className:"tw-mb-7.5"}),(null==m?void 0:m[2])&&(0,s.jsx)(w,{image:{...m[2].images[0],width:100,height:100},description:m[2].description,name:m[2].name,designation:m[2].designation,className:"tw-mb-7.5"}),(0,s.jsx)(l.E.div,{className:"tw-absolute tw-z-10 tw-top-[100px] tw-right-[50px]",animate:{x:b().x,y:b().y},children:(0,s.jsx)("span",{className:"tw-block -tw-indent-[99999px] tw-border-desert tw-rounded-full tw-border-8 tw-w-[54px] tw-h-[54px]",children:"shape 3"})}),(0,s.jsx)(l.E.div,{className:"tw-absolute -tw-z-1 -tw-right-2.5 tw-bottom-15",animate:{x:b().x,y:b().y},children:(0,s.jsx)("img",{src:"/images/shape-animation/nwesletter-shape-2.png",alt:""})})]}),(0,s.jsxs)(l.E.div,{className:"tw-self-center md:tw-col-span-12 xl:tw-col-span-4",initial:"offscreen",whileInView:"onscreen",viewport:{once:!0,amount:.4},variants:p.sQ,children:[a&&(0,s.jsx)(n.Z,{...a,align:"left",titleSize:g}),(null==o?void 0:null===(e=o[0])||void 0===e?void 0:e.content)&&(0,s.jsx)(r.Z,{...o[0],className:"tw-mt-4 lg:tw-mt-7.5",children:o[0].content})]})]})})};h.defaultProps={bg:"tw-bg-gray-200"};var v=h},62521:function(t,e,a){var s=a(67294);function l(t){return s.createElement("svg",t,s.createElement("path",{className:"elementor-shape-fill",d:"M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0"}))}l.defaultProps={viewBox:"0 0 100 100",preserveAspectRatio:"none",height:"100"},t.exports=l,l.default=l},85595:function(t,e,a){var s=a(67294);function l(t){return s.createElement("svg",t,s.createElement("g",{transform:"translate(-51.000000, -1390.000000)"},s.createElement("g",{transform:"translate(-28.000000, 963.000000)"},s.createElement("path",{d:"M353.907509,817.715288 C386.112868,835.281848 455.192882,815.572841 468.907509,740.715288 C483.008804,663.747218 442.907509,661.715288 449.907509,633.715288 C478,592 483.008804,538.76355 453.907509,506.715288 C381.907509,431.715288 363.907509,521.715288 303.907509,466.715288 C279.650772,442.458551 242.907509,413.715288 189.907509,433.715288 C114.974471,461.991907 132.907509,521.005066 132.907509,563.715288 C132.907509,578.753612 85.1423289,607.023718 79.9075093,645.715288 C73.306976,694.501115 103.907509,758.715288 132.907509,780.715288 C178.907509,832.715288 249.907509,820.715288 281.907509,802.715288 C309.384918,787.259246 331.907509,805.715288 353.907509,817.715288 Z"}))))}l.defaultProps={viewBox:"0 0 395 397",version:"1.1",width:"395px",height:"397px"},t.exports=l,l.default=l}}]);