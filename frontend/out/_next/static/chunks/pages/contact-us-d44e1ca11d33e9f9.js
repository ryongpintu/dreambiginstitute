(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[48455],{87794:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact-us",function(){return r(88338)}])},62274:function(e,t,r){"use strict";var a=r(85893),n=r(86010),l=r(50897);let o=e=>{let{className:t,pages:r,currentPage:o,showTitle:s,title:i}=e;return(0,a.jsxs)("div",{className:(0,n.Z)("page-title-area tw-relative",s&&"tw-pt-15 tw-pb-10 md:tw-pt-20 md:tw-pb-15 lg:tw-pt-[100px] lg:tw-pb-20",!s&&"tw-pb-10 md:tw-pb-15 lg:tw-pb-20",t),children:[s&&(0,a.jsx)("div",{className:"tw-container",children:(0,a.jsx)("h1",{className:"title tw-capitalize tw-mt-5 tw-mb-0 tw-text-3xl md:tw-text-4xl lg:tw-text-5xl tw-text-center",children:i||o})}),!s&&(0,a.jsx)("h1",{className:"tw-sr-only",children:i||o}),(0,a.jsx)("div",{className:(0,n.Z)("page-breadcrumb tw-top-0 tw-left-0 tw-w-full",s&&"tw-absolute"),children:(0,a.jsx)("nav",{className:"tw-container","aria-label":"breadcrumbs",children:(0,a.jsxs)("ul",{className:"breadcrumb tw-flex tw-flex-wrap tw-py-3",children:[r.map(e=>{let{path:t,label:r}=e;return(0,a.jsx)("li",{className:"tw-text-md first:before:tw-hidden before:tw-content-['/'] before:tw-mx-3.8 before:tw-color-body",children:(0,a.jsx)(l.Z,{path:t,className:"tw-text-body tw-capitalize tw-relative before:tw-absolute before:tw-content-[''] before:-tw-bottom-1.5 before:tw-right-0 before:tw-w-0 before:tw-h-px before:tw-transition-all before:tw-bg-heading hover:tw-text-heading hover:before:tw-left-0 hover:before:tw-w-full",children:r})},r)}),(0,a.jsx)("li",{className:"tw-text-md tw-capitalize tw-text-heading first:before:tw-hidden before:tw-content-['/'] before:tw-mx-3.8 before:tw-color-body","aria-current":"page",children:o})]})})})]})};o.defaultProps={showTitle:!0},t.Z=o},24677:function(e,t,r){"use strict";var a=r(85893),n=r(67294),l=r(86010),o=r(87536),s=r(29552),i=r(64887),w=r(96432),c=r(66508),d=r(86501),u=r(62111);let p=[{label:"Select Board",value:""},{label:"JAC",value:"JAC"},{label:"CBSE",value:"CBSE"}],m=[{label:"Select  Class",value:""},{value:"ten",label:"Ten(10)"},{value:"nine",label:"Nine(9)"},{value:"eight",label:"Eight(8)"},{value:"eleven",label:"Inter of Arts"}],b=[{label:"Select Course",value:""},{value:"MS",label:"Math + Science - Fee: ₹350"},{value:"Software,Spoken Eng",label:"Software Training+ Spoken English - Fee: ₹500"},{value:"MS,Software,Spoken Eng",label:"Both(Math+Science and Software T + Spoken Eng) - Fee: 750"}],h=[{label:"Select Course",value:""},{value:"MS",label:"Math + Science - Fee: ₹250"},{value:"Software,Spoken Eng",label:"Software Training+ Spoken English - Fee: ₹500"},{value:"MS,Software,Spoken Eng",label:"Both(Math+Science and Software T + Spoken Eng) - Fee: 600"}],x=[{label:"Select Course",value:""},{value:"Arts",label:"Arts - Fee: ₹500"},{value:"Software,Spoken Eng",label:"Software Training+ Spoken English  - Fee: ₹500"},{value:"MS,Software,Spoken Eng",label:"Both(Arts and Software T + Spoken Eng) - Fee: ₹500"}],f=(0,n.forwardRef)((e,t)=>{var r,f,g,v,y;let{className:j}=e,[S,N]=(0,n.useState)(""),[E,C]=(0,n.useState)(""),{register:Z,handleSubmit:k,formState:{errors:F},reset:T}=(0,o.cI)(),q=async e=>{try{await u.Lp.post(u.np,e),d.ZP.success("Thank you! Our Team will reach you "),T()}catch(e){var t;d.ZP.error(null==e?void 0:null===(t=e.response)||void 0===t?void 0:t.data)}};return(0,a.jsxs)("form",{className:(0,l.Z)(j),ref:t,onSubmit:k(q),children:[(0,a.jsxs)("div",{className:"tw-grid tw-grid-cols-1 tw-gap-5 tw-mb-5 md:tw-grid-cols-2 md:tw-gap-7.5 md:tw-mb-7.5",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"name",className:"tw-sr-only",children:"Full Name"}),(0,a.jsx)(s.Z,{id:"name",placeholder:"Full Name *",bg:"light",feedbackText:null==F?void 0:null===(r=F.name)||void 0===r?void 0:r.message,state:(0,w.wH)(F,"name")?"error":"success",showState:!!(0,w.wH)(F,"name"),...Z("name",{required:"Name is required"})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"phone",className:"tw-sr-only",children:"Phone"}),(0,a.jsx)(s.Z,{id:"phone",type:"tel",bg:"light",placeholder:"Phone number",feedbackText:null==F?void 0:null===(f=F.phone)||void 0===f?void 0:f.message,state:(0,w.wH)(F,"phone")?"error":"success",showState:!!(0,w.wH)(F,"phone"),...Z("phone",{required:"Phone is required"})})]})]}),(0,a.jsxs)("div",{className:"tw-mb-5 md:tw-mb-7.5",children:[(0,a.jsx)("label",{htmlFor:"board",className:"tw-sr-only",children:"Board"}),(0,a.jsx)(c.Z,{id:"board",placeholder:"Board *",bg:"light",options:p,feedbackText:null==F?void 0:null===(g=F.board)||void 0===g?void 0:g.message,state:(0,w.wH)(F,"board")?"error":"success",showState:!!(0,w.wH)(F,"board"),...Z("board",{required:"board is required"}),onChange:e=>{let{target:t}=e;return C(t.value)}})]}),(0,a.jsxs)("div",{className:"tw-mb-5 md:tw-mb-7.5",children:[(0,a.jsx)("label",{htmlFor:"presentClass",className:"tw-sr-only",children:"Present Class"}),(0,a.jsx)(c.Z,{id:"presentClass",placeholder:"Class *",bg:"light",options:m,feedbackText:null==F?void 0:null===(v=F.presentClass)||void 0===v?void 0:v.message,state:(0,w.wH)(F,"presentClass")?"error":"success",showState:!!(0,w.wH)(F,"presentClass"),...Z("presentClass",{required:"Class is required"}),onChange:e=>{let{target:t}=e;return N(t.value)}})]}),(0,a.jsxs)("div",{className:"tw-mb-5 md:tw-mb-7.5",children:[(0,a.jsx)("label",{htmlFor:"subjectChoice",className:"tw-sr-only",children:"Subject"}),(0,a.jsx)(c.Z,{id:"subjectChoice",placeholder:"Subject *",options:"eleven"===S?x:"CBSE"===E?b:h,bg:"light",feedbackText:null==F?void 0:null===(y=F.subjectChoice)||void 0===y?void 0:y.message,state:(0,w.wH)(F,"subjectChoice")?"error":"success",showState:!!(0,w.wH)(F,"subjectChoice"),...Z("subjectChoice",{required:"subject is required"})})]}),(0,a.jsx)(i.Z,{type:"submit",className:"tw-w-[180px]",children:"Submit"})]})});t.Z=f},64887:function(e,t,r){"use strict";var a=r(85893),n=r(86010),l=r(50897);let o=e=>{let{children:t,type:r,variant:o,color:s,size:i,shape:w,fullwidth:c,active:d,disabled:u,iconButton:p,label:m,className:b,path:h,onClick:x,hover:f}=e,g=!u&&!d&&"light"===f&&"hover:tw-bg-white hover:tw-border-white hover:tw-text-primary",v=(0,n.Z)("texted"!==o&&"tw-font-bold tw-justify-center tw-items-center tw-border tw-border-solid tw-rounded-md tw-transition-colors tw-min-w-max","texted"!==o&&!c&&"tw-inline-flex","contained"===o&&["primary"===s&&["tw-bg-primary tw-border-primary tw-text-white",!u&&!d&&"default"===f&&"hover:tw-bg-secondary hover:tw-border-secondary hover:tw-text-white",!u&&d&&"tw-bg-secondary tw-border-secondary active:tw-bg-secondary active:tw-border-secondary",g],"light"===s&&["tw-bg-light tw-border-light tw-text-heading",!u&&!d&&"default"===f&&"hover:tw-bg-primary hover:tw-border-primary hover:tw-text-white",!u&&d&&"tw-bg-primary tw-border-primary active:tw-bg-primary active:tw-border-primary",g]],"outlined"===o&&["primary"===s&&["tw-bg-transparent tw-border-primary tw-text-primary",!u&&!d&&"default"===f&&"hover:tw-bg-primary hover:tw-text-white",!u&&d&&"default"===f&&"tw-bg-primary tw-border-primary tw-text-white active:tw-bg-primary active:tw-bg-primary",g],"light"===s&&["tw-border-light tw-text-light",!u&&!d&&"default"===f&&"hover:tw-bg-primary hover:tw-border-primary hover:tw-text-white",!u&&d&&"tw-bg-primary tw-border-primary active:tw-bg-primary active:tw-border-primary",g]],!p&&"texted"!==o&&["md"===i&&"tw-text-md tw-px-7 tw-py-1 tw-min-h-[48px] md:tw-min-h-[52px] md:tw-px-10","xs"===i&&"tw-text-[13px] tw-px-5 tw-leading-[30px] tw-min-h-8"],"tw-rounded"===w&&"tw-rounded-md","ellipse"===w&&"tw-rounded-full",c&&"tw-flex tw-w-full",b);return h?(0,a.jsx)(l.Z,{path:h,className:v,onClick:x,"aria-label":m,children:t}):(0,a.jsx)("button",{type:r,className:v,onClick:x,"aria-label":m,children:t})};o.defaultProps={type:"button",variant:"contained",color:"primary",size:"md",shape:"square",fullwidth:!1,active:!1,disabled:!1,iconButton:!1,hover:"default"},o.displayName="Button",t.Z=o},66508:function(e,t,r){"use strict";var a=r(85893),n=r(67294),l=r(86010),o=r(38213);let s=(0,n.forwardRef)((e,t)=>{let{className:r,bg:n,type:s,disabled:i,state:w,feedbackText:c,id:d,name:u,options:p,onChange:m,onClick:b,onBlur:h,readonly:x,showState:f,showErrorOnly:g,customStyle:v,...y}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"mt-1",children:(0,a.jsx)("select",{id:d,name:u,onChange:m,onClick:b,onBlur:h,ref:t,className:(0,l.Z)("form-control","tw-block tw-w-full tw-h-14 tw-rounded tw-py-[0.188rem] tw-px-5 tw-text-base tw-text-body tw-border tw-border-gray-200 tw-placeholder-body","nofocus"!==v&&!x&&"focus:tw-shadow-none focus:tw-outline-0 focus:tw-text-body focus:tw-bg-white focus:tw-border-primary",(x||i)&&"tw-bg-gray-300 tw-opacity-100","nofocus"!==v&&x&&"focus:tw-shadow-none focus:tw-outline-0 focus:tw-text-body",!g&&"success"===w&&"!tw-border-success",!g&&"warning"===w&&"!tw-border-warning","error"===w&&"!tw-border-danger","nofocus"!==v&&!w&&"focus:tw-border-primary","nofocus"===v&&"focus:tw-outline-0","white"===n&&"tw-bg-white","light"===n&&"tw-bg-gray-200",r),...y,children:null==p?void 0:p.map(e=>{let{label:t,value:r}=e;return(0,a.jsx)("option",{value:r,children:t},r)})})}),c&&f&&(0,a.jsx)(o.Z,{state:w,showErrorOnly:g,children:c})]})});s.displayName="Select",s.defaultProps={type:"text",showState:!0,showErrorOnly:!0},t.Z=s},79166:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var a=r(85893),n=r(37212),l=r(67294),o=r(58367),s=r(52111);let i=(0,o.createCustomEqual)(()=>({areObjectsEqual:(e,t)=>(0,s.r7)(e)||e instanceof google.maps.LatLng||(0,s.r7)(t)||t instanceof google.maps.LatLng?new google.maps.LatLng(e).equals(new google.maps.LatLng(t)):(0,o.deepEqual)(e,t)}));function w(e){let t=(0,l.useRef)();return i(e,t.current)||(t.current=e),t.current}let c=e=>{var t;let{children:r,onClick:n,...o}=e,s=(0,l.useRef)(null),[i,c]=(0,l.useState)();return(0,l.useEffect)(()=>{s.current&&!i&&c(new window.google.maps.Map(s.current,{}))},[s,i]),t=()=>{i&&i.setOptions(o)},(0,l.useEffect)(t,[i,o].map(w)),(0,l.useEffect)(()=>{i&&(["click","idle"].forEach(e=>google.maps.event.clearListeners(i,e)),n&&i.addListener("click",n))},[i,n]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{ref:s,className:"tw-w-full tw-h-full"})," ",l.Children.map(r,e=>(0,l.isValidElement)(e)?(0,l.cloneElement)(e,{map:i}):null)]})},d=e=>{let[t,r]=(0,l.useState)();return(0,l.useEffect)(()=>(t||r(new google.maps.Marker),()=>{t&&t.setMap(null)}),[t]),(0,l.useEffect)(()=>{t&&t.setOptions(e)},[t,e]),null},u=e=>(0,a.jsx)("h1",{children:e}),p=e=>{let{...t}=e;return(0,a.jsx)(n.Wrapper,{apiKey:"AIzaSyB3mMuvl8IUlviRZiizBiX7uhsdIqunx94",render:u,children:(0,a.jsx)(c,{...t,children:(0,a.jsx)(d,{position:t.center})})})};var m=p},49637:function(e,t,r){"use strict";var a=r(85893),n=r(86010);let l=e=>{let{space:t,bg:r,className:l,style:o,children:s}=e;return(0,a.jsx)("section",{className:(0,n.Z)(l,"top-bottom"===t&&"tw-py-15 md:tw-py-20 lg:tw-py-[100px]","top-bottom-2"===t&&"tw-py-15 md:tw-py-20 lg:tw-pt-[100px] lg:tw-pb-40","top-bottom-3"===t&&"tw-pt-[150px] tw-pb-15 md:tw-pt-[170px] md:tw-pb-20 lg:tw-pt-[190px] lg:tw-pb-[100px]","top"===t&&"tw-pt-15 md:tw-pt-20 lg:tw-pt-[100px]","top-2"===t&&"tw-pt-[150px] md:tw-pt-[170px] lg:tw-pt-[320px]","bottom"===t&&"tw-pb-15 md:tw-pb-20 lg:tw-pb-[100px]","bottom-2"===t&&"tw-mb-[70px]","bottom-3"===t&&"tw-pb-15 md:tw-pb-20 lg:tw-pb-[100px] xl:tw-pb-[160px]",r),style:o,children:s})};l.defaultProps={space:"top-bottom"},t.Z=l},88338:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return f},default:function(){return g}});var a=r(85893),n=r(29309),l=r(6825),o=r(62274),s=r(86010),i=r(12451),w=r(49637),c=r(79166),d=r(68945);let u=e=>{let{data:{section_title:t,items:r,location:n}}=e;return(0,a.jsx)(w.Z,{className:"contact-info-area",space:"none",children:(0,a.jsxs)("div",{className:"tw-container",children:[t&&(0,a.jsx)(i.E.h2,{className:"tw-max-w-[770px] tw-mx-auto tw-text-center tw-leading-none tw-mb-10 md:tw-mb-15",initial:"offscreen",whileInView:"onscreen",viewport:{once:!0,amount:.4},variants:d.sQ,children:t.title}),(0,a.jsx)(i.E.div,{className:"tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-x-7.5 tw-gap-y-10 tw-mb-10 md:tw-mb-15",initial:"offscreen",whileInView:"onscreen",viewport:{once:!0,amount:.4},variants:d.sQ,children:null==r?void 0:r.map(e=>{var t;return(0,a.jsxs)("div",{className:"tw-relative tw-pl-12",children:[(0,a.jsx)("i",{className:(0,s.Z)(e.icon,"tw-text-[32px] tw-text-primary tw-absolute tw-left-0 tw-top-0")}),(0,a.jsx)("h3",{className:"tw-text-lg tw-mb-3.8",children:e.title}),null===(t=e.texts)||void 0===t?void 0:t.map(e=>(0,a.jsx)("p",{className:"tw-mb-2.5 child:tw-text-heading",dangerouslySetInnerHTML:{__html:e.content}},e.id))]},e.id)})}),n&&(0,a.jsx)(i.E.div,{className:"tw-h-[300px] lg:tw-h-[400px]",initial:"offscreen",whileInView:"onscreen",viewport:{once:!0,amount:.4},variants:d.sQ,children:(0,a.jsx)(c.Z,{center:{lat:n.latitude,lng:n.longitude},zoom:14})})]})})};var p=r(24677);let m=(0,i.E)(p.Z),b=e=>{let{data:{section_title:t}}=e;return(0,a.jsx)(w.Z,{className:"contact-form-area tw-pt-2 lg:tw-pt-1",children:(0,a.jsxs)("div",{className:"tw-container",children:[t&&(0,a.jsx)(i.E.h2,{className:"tw-max-w-[600px] tw-mx-auto tw-text-center tw-leading-none tw-mb-10 md:tw-mb-15",initial:"offscreen",whileInView:"onscreen",viewport:{once:!0,amount:.4},variants:d.sQ,children:t.title}),(0,a.jsx)(m,{className:"tw-max-w-[770px] tw-mx-auto",initial:"offscreen",whileInView:"onscreen",viewport:{once:!0,amount:.4},variants:d.sQ})]})})};var h=r(96432);let x=e=>{var t;let{data:r}=e,l=(0,h.RG)(null===(t=r.page)||void 0===t?void 0:t.content,"section");return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.Z,{title:"Contact Us"}),(0,a.jsx)(o.Z,{pages:[{path:"/",label:"home"}],currentPage:"Contact Us",showTitle:!1}),(0,a.jsx)(b,{data:null==l?void 0:l["contact-form"]}),(0,a.jsx)(u,{data:null==l?void 0:l["contact-info"]})]})};x.Layout=l.Z;var f=!0,g=x},62111:function(e,t,r){"use strict";r.d(t,{Lp:function(){return o},YQ:function(){return l},np:function(){return n}});var a=r(5121);let n="/users",l="/users/faculty",o=a.Z.create({baseURL:"https://services.idreambig.in/api"})},68945:function(e,t,r){"use strict";r.d(t,{Ji:function(){return n},Zd:function(){return o},qX:function(){return l},sQ:function(){return a}});let a={offscreen:{opacity:0,y:30},onscreen:{opacity:1,y:0,transition:{type:"spring",duration:1}}},n={hidden:{y:"-100vh",opacity:0},visible:{y:"0",opacity:1,transition:{duration:.8,type:"tween"}},exit:{y:"-100vh",opacity:0,transition:{duration:.4,type:"tween"}}},l={visible:{opacity:1,top:"60px",transition:{duration:.5,type:"tween"}},hidden:{opacity:0,top:"80px",transition:{duration:.5,type:"tween"}}},o={visible:{opacity:1,transition:{delay:.3,duration:.3}},hidden:{opacity:0,transition:{duration:.2}}}}},function(e){e.O(0,[29331,12451,1320,5121,36468,27332,49774,92888,40179],function(){return e(e.s=87794)}),_N_E=e.O()}]);