(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[59074],{91629:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/share-suggestions",function(){return r(97383)}])},62274:function(t,e,r){"use strict";var s=r(85893),a=r(86010),o=r(50897);let i=t=>{let{className:e,pages:r,currentPage:i,showTitle:w,title:l}=t;return(0,s.jsxs)("div",{className:(0,a.Z)("page-title-area tw-relative",w&&"tw-pt-15 tw-pb-10 md:tw-pt-20 md:tw-pb-15 lg:tw-pt-[100px] lg:tw-pb-20",!w&&"tw-pb-10 md:tw-pb-15 lg:tw-pb-20",e),children:[w&&(0,s.jsx)("div",{className:"tw-container",children:(0,s.jsx)("h1",{className:"title tw-capitalize tw-mt-5 tw-mb-0 tw-text-3xl md:tw-text-4xl lg:tw-text-5xl tw-text-center",children:l||i})}),!w&&(0,s.jsx)("h1",{className:"tw-sr-only",children:l||i}),(0,s.jsx)("div",{className:(0,a.Z)("page-breadcrumb tw-top-0 tw-left-0 tw-w-full",w&&"tw-absolute"),children:(0,s.jsx)("nav",{className:"tw-container","aria-label":"breadcrumbs",children:(0,s.jsxs)("ul",{className:"breadcrumb tw-flex tw-flex-wrap tw-py-3",children:[r.map(t=>{let{path:e,label:r}=t;return(0,s.jsx)("li",{className:"tw-text-md first:before:tw-hidden before:tw-content-['/'] before:tw-mx-3.8 before:tw-color-body",children:(0,s.jsx)(o.Z,{path:e,className:"tw-text-body tw-capitalize tw-relative before:tw-absolute before:tw-content-[''] before:-tw-bottom-1.5 before:tw-right-0 before:tw-w-0 before:tw-h-px before:tw-transition-all before:tw-bg-heading hover:tw-text-heading hover:before:tw-left-0 hover:before:tw-w-full",children:r})},r)}),(0,s.jsx)("li",{className:"tw-text-md tw-capitalize tw-text-heading first:before:tw-hidden before:tw-content-['/'] before:tw-mx-3.8 before:tw-color-body","aria-current":"page",children:i})]})})})]})};i.defaultProps={showTitle:!0},e.Z=i},64887:function(t,e,r){"use strict";var s=r(85893),a=r(86010),o=r(50897);let i=t=>{let{children:e,type:r,variant:i,color:w,size:l,shape:n,fullwidth:d,active:c,disabled:u,iconButton:h,label:b,className:m,path:g,onClick:p,hover:x}=t,f=!u&&!c&&"light"===x&&"hover:tw-bg-white hover:tw-border-white hover:tw-text-primary",y=(0,a.Z)("texted"!==i&&"tw-font-bold tw-justify-center tw-items-center tw-border tw-border-solid tw-rounded-md tw-transition-colors tw-min-w-max","texted"!==i&&!d&&"tw-inline-flex","contained"===i&&["primary"===w&&["tw-bg-primary tw-border-primary tw-text-white",!u&&!c&&"default"===x&&"hover:tw-bg-secondary hover:tw-border-secondary hover:tw-text-white",!u&&c&&"tw-bg-secondary tw-border-secondary active:tw-bg-secondary active:tw-border-secondary",f],"light"===w&&["tw-bg-light tw-border-light tw-text-heading",!u&&!c&&"default"===x&&"hover:tw-bg-primary hover:tw-border-primary hover:tw-text-white",!u&&c&&"tw-bg-primary tw-border-primary active:tw-bg-primary active:tw-border-primary",f]],"outlined"===i&&["primary"===w&&["tw-bg-transparent tw-border-primary tw-text-primary",!u&&!c&&"default"===x&&"hover:tw-bg-primary hover:tw-text-white",!u&&c&&"default"===x&&"tw-bg-primary tw-border-primary tw-text-white active:tw-bg-primary active:tw-bg-primary",f],"light"===w&&["tw-border-light tw-text-light",!u&&!c&&"default"===x&&"hover:tw-bg-primary hover:tw-border-primary hover:tw-text-white",!u&&c&&"tw-bg-primary tw-border-primary active:tw-bg-primary active:tw-border-primary",f]],!h&&"texted"!==i&&["md"===l&&"tw-text-md tw-px-7 tw-py-1 tw-min-h-[48px] md:tw-min-h-[52px] md:tw-px-10","xs"===l&&"tw-text-[13px] tw-px-5 tw-leading-[30px] tw-min-h-8"],"tw-rounded"===n&&"tw-rounded-md","ellipse"===n&&"tw-rounded-full",d&&"tw-flex tw-w-full",m);return g?(0,s.jsx)(o.Z,{path:g,className:y,onClick:p,"aria-label":b,children:e}):(0,s.jsx)("button",{type:r,className:y,onClick:p,"aria-label":b,children:e})};i.defaultProps={type:"button",variant:"contained",color:"primary",size:"md",shape:"square",fullwidth:!1,active:!1,disabled:!1,iconButton:!1,hover:"default"},i.displayName="Button",e.Z=i},58792:function(t,e,r){"use strict";var s=r(85893),a=r(67294),o=r(86010),i=r(38213);let w=(0,a.forwardRef)((t,e)=>{let{className:r,bg:a,disabled:w,state:l,feedbackText:n,id:d,name:c,onChange:u,onClick:h,onBlur:b,value:m,readonly:g,showState:p,showErrorOnly:x,customStyle:f,...y}=t;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("textarea",{disabled:w,ref:e,className:(0,o.Z)("form-control","tw-block tw-w-full tw-min-h-[120px] md:tw-min-h-[180px] lg:tw-min-h-[220px] tw-rounded tw-py-2.5 tw-px-5 tw-text-base tw-text-body tw-leading-relaxed tw-border tw-border-gray-200 tw-placeholder-body","nofocus"!==f&&!g&&"focus:tw-shadow-none focus:tw-outline-0 focus:tw-text-body focus:tw-bg-white focus:tw-border-primary",(g||w)&&"tw-bg-gray-300 tw-opacity-100","nofocus"!==f&&g&&"focus:tw-shadow-none focus:tw-outline-0 focus:tw-text-body",!x&&"success"===l&&"!tw-border-success",!x&&"warning"===l&&"!tw-border-warning","error"===l&&"!tw-border-danger","nofocus"!==f&&!l&&"focus:tw-border-blue-100","nofocus"===f&&"focus:tw-outline-0","white"===a&&"tw-bg-white","light"===a&&"tw-bg-gray-200",r),id:d,name:c,onChange:u,onClick:h,onBlur:b,value:m,readOnly:g,...y}),n&&p&&(0,s.jsx)(i.Z,{state:l,showErrorOnly:x,children:n})]})});w.displayName="Textarea ",w.defaultProps={rows:3,showState:!0,showErrorOnly:!0},e.Z=w},97383:function(t,e,r){"use strict";r.r(e),r.d(e,{__N_SSG:function(){return x},default:function(){return f}});var s=r(85893),a=r(29309),o=r(6825),i=r(62274),w=r(86010),l=r(87536),n=r(29552),d=r(58792),c=r(64887),u=r(96432),h=r(62111),b=r(86501);let m=t=>{var e,r,a;let{className:o}=t,{register:i,handleSubmit:m,formState:{errors:g},reset:p}=(0,l.cI)(),x=async t=>{try{await h.Lp.post(h.oy,t),b.ZP.success("Thank you for your valuable suggestion "),p()}catch(t){var e;b.ZP.error(null==t?void 0:null===(e=t.response)||void 0===e?void 0:e.data)}};return(0,s.jsxs)("div",{className:(0,w.Z)("tw-bg-white tw-rounded tw-py-7.5 tw-px-3.8 sm:tw-pt-14 sm:tw-pb-15 sm:tw-px-[50px] tw-shadow-2md tw-shadow-black/10",o),children:[(0,s.jsx)("h4",{className:"tw-text-[28px] tw-mb-5 sm:tw-text-[34px] sm:tw-mb-9 tw-leading-snug tw-text-center",children:"Please Share Your valuable suggestion"}),(0,s.jsxs)("form",{className:"suggestions",onSubmit:m(x),children:[(0,s.jsxs)("div",{className:"tw-grid sm:tw-grid-cols-2 tw-gap-5 tw-mb-5 lg:tw-gap-7.5 lg:tw-mb-7.5",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"name",className:"tw-sr-only",children:"Name"}),(0,s.jsx)(n.Z,{id:"name",placeholder:"Your Name *",bg:"light",feedbackText:null==g?void 0:null===(e=g.name)||void 0===e?void 0:e.message,state:(0,u.wH)(g,"name")?"error":"success",showState:!!(0,u.wH)(g,"name"),...i("name",{required:"Name is required"})})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"phone",className:"tw-sr-only",children:"phone"}),(0,s.jsx)(n.Z,{type:"phone",id:"phone",placeholder:"Your phone *",bg:"light",feedbackText:null==g?void 0:null===(r=g.phone)||void 0===r?void 0:r.message,state:(0,u.wH)(g,"phone")?"error":"success",showState:!!(0,u.wH)(g,"phone"),...i("phone",{required:"Phone is required"})})]})]}),(0,s.jsxs)("div",{className:"tw-mb-5 lg:tw-mb-7.5",children:[(0,s.jsx)("label",{htmlFor:"suggestion",className:"tw-sr-only",children:"suggestion"}),(0,s.jsx)(d.Z,{id:"suggestion",placeholder:"Your Suggestion *",bg:"light",feedbackText:null==g?void 0:null===(a=g.suggestion)||void 0===a?void 0:a.message,state:(0,u.wH)(g,"suggestion")?"error":"success",showState:!!(0,u.wH)(g,"suggestion"),...i("suggestion",{required:"Suggestion is required"})})]}),(0,s.jsx)("div",{className:"tw-mt-5 lgtw-mt-7.5 tw-text-center",children:(0,s.jsx)(c.Z,{type:"submit",className:"tw-w-[180px]",children:"Submit"})})]})]})},g=()=>(0,s.jsx)("div",{className:"tw-py-15 md:tw-py-20 lg:tw-py-[100px] tw-bg-[url('/images/bg/become-a-teache-bg.jpg')] tw-bg-cover tw-bg-fixed",children:(0,s.jsx)("div",{className:"tw-container",children:(0,s.jsx)(m,{className:"lg:tw-w-2/3 xl:tw-w-1/2 lg:tw-ml-auto"})})}),p=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.Z,{title:"Suggestions"}),(0,s.jsx)(i.Z,{pages:[{path:"/",label:"home"}],currentPage:"Suggestions",showTitle:!1}),(0,s.jsx)(g,{})]});p.Layout=o.Z;var x=!0,f=p},62111:function(t,e,r){"use strict";r.d(e,{Lp:function(){return w},YQ:function(){return o},np:function(){return a},oy:function(){return i}});var s=r(5121);let a="/users",o="/users/faculty",i="/users/add/suggestion",w=s.Z.create({baseURL:"https://services.idreambig.in/api"})}},function(t){t.O(0,[29331,1320,5121,27332,49774,92888,40179],function(){return t(t.s=91629)}),_N_E=t.O()}]);