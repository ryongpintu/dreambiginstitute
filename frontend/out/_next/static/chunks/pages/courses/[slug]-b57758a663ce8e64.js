(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[31355],{86800:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/courses/[slug]",function(){return l(7183)}])},62274:function(e,t,l){"use strict";var s=l(85893),a=l(86010),r=l(50897);let n=e=>{let{className:t,pages:l,currentPage:n,showTitle:i,title:o}=e;return(0,s.jsxs)("div",{className:(0,a.Z)("page-title-area tw-relative",i&&"tw-pt-15 tw-pb-10 md:tw-pt-20 md:tw-pb-15 lg:tw-pt-[100px] lg:tw-pb-20",!i&&"tw-pb-10 md:tw-pb-15 lg:tw-pb-20",t),children:[i&&(0,s.jsx)("div",{className:"tw-container",children:(0,s.jsx)("h1",{className:"title tw-capitalize tw-mt-5 tw-mb-0 tw-text-3xl md:tw-text-4xl lg:tw-text-5xl tw-text-center",children:o||n})}),!i&&(0,s.jsx)("h1",{className:"tw-sr-only",children:o||n}),(0,s.jsx)("div",{className:(0,a.Z)("page-breadcrumb tw-top-0 tw-left-0 tw-w-full",i&&"tw-absolute"),children:(0,s.jsx)("nav",{className:"tw-container","aria-label":"breadcrumbs",children:(0,s.jsxs)("ul",{className:"breadcrumb tw-flex tw-flex-wrap tw-py-3",children:[l.map(e=>{let{path:t,label:l}=e;return(0,s.jsx)("li",{className:"tw-text-md first:before:tw-hidden before:tw-content-['/'] before:tw-mx-3.8 before:tw-color-body",children:(0,s.jsx)(r.Z,{path:t,className:"tw-text-body tw-capitalize tw-relative before:tw-absolute before:tw-content-[''] before:-tw-bottom-1.5 before:tw-right-0 before:tw-w-0 before:tw-h-px before:tw-transition-all before:tw-bg-heading hover:tw-text-heading hover:before:tw-left-0 hover:before:tw-w-full",children:l})},l)}),(0,s.jsx)("li",{className:"tw-text-md tw-capitalize tw-text-heading first:before:tw-hidden before:tw-content-['/'] before:tw-mx-3.8 before:tw-color-body","aria-current":"page",children:n})]})})})]})};n.defaultProps={showTitle:!0},t.Z=n},67621:function(e,t,l){"use strict";var s=l(85893),a=l(67294),r=l(86010),n=l(50897);let i=(0,a.forwardRef)((e,t)=>{let{className:l,thumbnail:a,title:i,path:o,total_lectures:c}=e;return(0,s.jsxs)("div",{className:(0,r.Z)("course-card tw-flex tw-flex-wrap sm:tw-flex-nowrap sm:tw-items-center tw-h-full tw-p-5 tw-rounded tw-bg-white tw-relative","before:tw-absolute before:tw-content-[''] before:tw-inset-0 before:tw-shadow-4md before:tw-shadow-black/5 before:tw-rounded-b before:tw-transition-opacity before:tw-opacity-0","hover:before:tw-opacity-100",l),ref:t,children:[(0,s.jsxs)("div",{className:"tw-relative tw-z-1 tw-flex tw-overflow-hidden tw-rounded-full tw-w-[170px] tw-min-w-[170px] tw-h-[170px]",children:[(null==a?void 0:a.src)&&(0,s.jsx)("img",{className:"tw-w-full tw-h-full tw-object-cover",src:a.src,alt:(null==a?void 0:a.alt)||"Course",width:(null==a?void 0:a.width)||170,height:(null==a?void 0:a.height)||170,loading:(null==a?void 0:a.loading)||"lazy"}),(0,s.jsx)(n.Z,{path:o,className:"link-overlay",children:i})]}),(0,s.jsxs)("div",{className:"info tw-z-1 tw-mt-5 sm:tw-mt-0 sm:tw-pl-7.5",children:[(0,s.jsx)("h3",{className:"tw-text-xl tw-leading-normal tw-mb-0",children:(0,s.jsx)(n.Z,{path:o,children:i})}),(0,s.jsx)("ul",{className:"tw-text-sm sm:tw-text-md tw-flex tw-flex-wrap tw-mt-2.5 ",children:c&&(0,s.jsxs)("li",{className:"tw-mr-7",children:[(0,s.jsx)("i",{className:"far fa-file-alt tw-mr-2.5"}),c," Lessons"]})})]})]})});t.Z=i},24677:function(e,t,l){"use strict";var s=l(85893),a=l(67294),r=l(86010),n=l(87536),i=l(29552),o=l(64887),c=l(96432),w=l(66508),d=l(86501),u=l(62111);let m=[{label:"Select Board",value:""},{label:"JAC",value:"JAC"},{label:"CBSE",value:"CBSE"}],h=[{label:"Select  Class",value:""},{value:"ten",label:"Ten(10)"},{value:"nine",label:"Nine(9)"},{value:"eight",label:"Eight(8)"},{value:"eleven",label:"Inter of Arts"}],p=[{label:"Select Course",value:""},{value:"MS",label:"Math + Science - Fee: ₹350"},{value:"Software,Spoken Eng",label:"Software Training+ Spoken English - Fee: ₹500"},{value:"MS,Software,Spoken Eng",label:"Both(Math+Science and Software T + Spoken Eng) - Fee: 750"}],x=[{label:"Select Course",value:""},{value:"MS",label:"Math + Science - Fee: ₹250"},{value:"Software,Spoken Eng",label:"Software Training+ Spoken English - Fee: ₹500"},{value:"MS,Software,Spoken Eng",label:"Both(Math+Science and Software T + Spoken Eng) - Fee: 600"}],b=[{label:"Select Course",value:""},{value:"Arts",label:"Arts - Fee: ₹500"},{value:"Software,Spoken Eng",label:"Software Training+ Spoken English  - Fee: ₹500"},{value:"MS,Software,Spoken Eng",label:"Both(Arts and Software T + Spoken Eng) - Fee: ₹500"}],f=(0,a.forwardRef)((e,t)=>{var l,f,v,g,j;let{className:N}=e,[y,S]=(0,a.useState)(""),[C,Z]=(0,a.useState)(""),{register:E,handleSubmit:k,formState:{errors:T},reset:_}=(0,n.cI)(),F=async e=>{try{await u.Lp.post(u.np,e),d.ZP.success("Thank you! Our Team will reach you "),_()}catch(e){var t;d.ZP.error(null==e?void 0:null===(t=e.response)||void 0===t?void 0:t.data)}};return(0,s.jsxs)("form",{className:(0,r.Z)(N),ref:t,onSubmit:k(F),children:[(0,s.jsxs)("div",{className:"tw-grid tw-grid-cols-1 tw-gap-5 tw-mb-5 md:tw-grid-cols-2 md:tw-gap-7.5 md:tw-mb-7.5",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"name",className:"tw-sr-only",children:"Full Name"}),(0,s.jsx)(i.Z,{id:"name",placeholder:"Full Name *",bg:"light",feedbackText:null==T?void 0:null===(l=T.name)||void 0===l?void 0:l.message,state:(0,c.wH)(T,"name")?"error":"success",showState:!!(0,c.wH)(T,"name"),...E("name",{required:"Name is required"})})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"phone",className:"tw-sr-only",children:"Phone"}),(0,s.jsx)(i.Z,{id:"phone",type:"tel",bg:"light",placeholder:"Phone number",feedbackText:null==T?void 0:null===(f=T.phone)||void 0===f?void 0:f.message,state:(0,c.wH)(T,"phone")?"error":"success",showState:!!(0,c.wH)(T,"phone"),...E("phone",{required:"Phone is required"})})]})]}),(0,s.jsxs)("div",{className:"tw-mb-5 md:tw-mb-7.5",children:[(0,s.jsx)("label",{htmlFor:"board",className:"tw-sr-only",children:"Board"}),(0,s.jsx)(w.Z,{id:"board",placeholder:"Board *",bg:"light",options:m,feedbackText:null==T?void 0:null===(v=T.board)||void 0===v?void 0:v.message,state:(0,c.wH)(T,"board")?"error":"success",showState:!!(0,c.wH)(T,"board"),...E("board",{required:"board is required"}),onChange:e=>{let{target:t}=e;return Z(t.value)}})]}),(0,s.jsxs)("div",{className:"tw-mb-5 md:tw-mb-7.5",children:[(0,s.jsx)("label",{htmlFor:"presentClass",className:"tw-sr-only",children:"Present Class"}),(0,s.jsx)(w.Z,{id:"presentClass",placeholder:"Class *",bg:"light",options:h,feedbackText:null==T?void 0:null===(g=T.presentClass)||void 0===g?void 0:g.message,state:(0,c.wH)(T,"presentClass")?"error":"success",showState:!!(0,c.wH)(T,"presentClass"),...E("presentClass",{required:"Class is required"}),onChange:e=>{let{target:t}=e;return S(t.value)}})]}),(0,s.jsxs)("div",{className:"tw-mb-5 md:tw-mb-7.5",children:[(0,s.jsx)("label",{htmlFor:"subjectChoice",className:"tw-sr-only",children:"Subject"}),(0,s.jsx)(w.Z,{id:"subjectChoice",placeholder:"Subject *",options:"eleven"===y?b:"CBSE"===C?p:x,bg:"light",feedbackText:null==T?void 0:null===(j=T.subjectChoice)||void 0===j?void 0:j.message,state:(0,c.wH)(T,"subjectChoice")?"error":"success",showState:!!(0,c.wH)(T,"subjectChoice"),...E("subjectChoice",{required:"subject is required"})})]}),(0,s.jsx)(o.Z,{type:"submit",className:"tw-w-[180px]",children:"Submit"})]})});t.Z=f},47453:function(e,t,l){"use strict";var s=l(85893),a=l(67294),r=l(86010);let n=(0,a.forwardRef)((e,t)=>{let{className:l,title:a,subtitle:n,description:i,align:o,color:c,titleSize:w,subtitleClass:d,titleClass:u,descClass:m}=e;return(0,s.jsxs)("div",{className:(0,r.Z)("section-title tw-relative tw-z-20","center"===o&&"tw-text-center",l),ref:t,children:[n&&(0,s.jsx)("span",{className:(0,r.Z)("tw-font-medium tw-text-base tw-leading-none -tw-tracking-tightest tw-block tw-mb-2.5 tw-uppercase","A"===c&&"tw-text-secondary-light","B"===c&&"tw-text-secondary",d),dangerouslySetInnerHTML:{__html:n}}),(0,s.jsx)("h2",{className:(0,r.Z)("title tw-m-0 child:tw-text-primary child:tw-font-normal","A"===c&&"tw-text-secondary","C"===c&&"tw-text-white","large"===w&&"tw-text-4xl lg:tw-text-5xl tw-leading-heading lg:tw-leading-heading",u),dangerouslySetInnerHTML:{__html:a}}),i&&(0,s.jsx)("p",{className:(0,r.Z)("tw-mb-0 tw-mt-[25px] tw-font-medium",m,"C"===c&&"tw-text-white"),dangerouslySetInnerHTML:{__html:i}})]})});n.defaultProps={align:"center",color:"A"},t.Z=n},66508:function(e,t,l){"use strict";var s=l(85893),a=l(67294),r=l(86010),n=l(38213);let i=(0,a.forwardRef)((e,t)=>{let{className:l,bg:a,type:i,disabled:o,state:c,feedbackText:w,id:d,name:u,options:m,onChange:h,onClick:p,onBlur:x,readonly:b,showState:f,showErrorOnly:v,customStyle:g,...j}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"mt-1",children:(0,s.jsx)("select",{id:d,name:u,onChange:h,onClick:p,onBlur:x,ref:t,className:(0,r.Z)("form-control","tw-block tw-w-full tw-h-14 tw-rounded tw-py-[0.188rem] tw-px-5 tw-text-base tw-text-body tw-border tw-border-gray-200 tw-placeholder-body","nofocus"!==g&&!b&&"focus:tw-shadow-none focus:tw-outline-0 focus:tw-text-body focus:tw-bg-white focus:tw-border-primary",(b||o)&&"tw-bg-gray-300 tw-opacity-100","nofocus"!==g&&b&&"focus:tw-shadow-none focus:tw-outline-0 focus:tw-text-body",!v&&"success"===c&&"!tw-border-success",!v&&"warning"===c&&"!tw-border-warning","error"===c&&"!tw-border-danger","nofocus"!==g&&!c&&"focus:tw-border-primary","nofocus"===g&&"focus:tw-outline-0","white"===a&&"tw-bg-white","light"===a&&"tw-bg-gray-200",l),...j,children:null==m?void 0:m.map(e=>{let{label:t,value:l}=e;return(0,s.jsx)("option",{value:l,children:t},l)})})}),w&&f&&(0,s.jsx)(n.Z,{state:c,showErrorOnly:v,children:w})]})});i.displayName="Select",i.defaultProps={type:"text",showState:!0,showErrorOnly:!0},t.Z=i},49637:function(e,t,l){"use strict";var s=l(85893),a=l(86010);let r=e=>{let{space:t,bg:l,className:r,style:n,children:i}=e;return(0,s.jsx)("section",{className:(0,a.Z)(r,"top-bottom"===t&&"tw-py-15 md:tw-py-20 lg:tw-py-[100px]","top-bottom-2"===t&&"tw-py-15 md:tw-py-20 lg:tw-pt-[100px] lg:tw-pb-40","top-bottom-3"===t&&"tw-pt-[150px] tw-pb-15 md:tw-pt-[170px] md:tw-pb-20 lg:tw-pt-[190px] lg:tw-pb-[100px]","top"===t&&"tw-pt-15 md:tw-pt-20 lg:tw-pt-[100px]","top-2"===t&&"tw-pt-[150px] md:tw-pt-[170px] lg:tw-pt-[320px]","bottom"===t&&"tw-pb-15 md:tw-pb-20 lg:tw-pb-[100px]","bottom-2"===t&&"tw-mb-[70px]","bottom-3"===t&&"tw-pb-15 md:tw-pb-20 lg:tw-pb-[100px] xl:tw-pb-[160px]",l),style:n,children:i})};r.defaultProps={space:"top-bottom"},t.Z=r},89033:function(e,t,l){"use strict";var s=l(85893),a=l(12451),r=l(49637),n=l(47453),i=l(67621),o=l(68945);let c=(0,a.E)(n.Z),w=(0,a.E)(i.Z),d=e=>{let{data:{section_title:t,courses:l},space:a,bg:n,titleSize:i}=e;return(0,s.jsx)(r.Z,{className:"course-area",space:a,bg:n,children:(0,s.jsxs)("div",{className:"tw-container",children:[t&&(0,s.jsx)(c,{...t,titleSize:i,className:"tw-mb-7.5 md:tw-mb-15",initial:"offscreen",whileInView:"onscreen",viewport:{once:!0,amount:.4},variants:o.sQ}),(0,s.jsx)("div",{className:"tw-grid lg:tw-grid-cols-2 tw-gap-7.5",children:l.map(e=>(0,s.jsx)(w,{title:e.title,path:e.path,thumbnail:e.thumbnail,price:e.price,currency:e.currency,total_lectures:e.total_lectures,total_students:e.total_students,initial:"offscreen",whileInView:"onscreen",viewport:{once:!0,amount:.4},variants:o.sQ},e.path))})]})})};d.defaultProps={space:"top-bottom",bg:"tw-bg-white-catskill"},t.Z=d},7183:function(e,t,l){"use strict";l.r(t),l.d(t,{__N_SSG:function(){return F},default:function(){return P}});var s=l(85893),a=l(29309),r=l(6825),n=l(62274),i=l(67294),o=l(86010);let c=e=>{let{children:t,variant:l,className:a}=e;return(0,s.jsx)("div",{className:(0,o.Z)("tab-list tw-flex tw-flex-wrap","underline"===l&&"tw-border-b-2 tw-border-b-gray-500 tw-pb-0.5",a),role:"tablist",children:t})};c.displayName="TabList";var w=l(12451);let d=e=>{let{id:t,children:l,onClick:a,isActive:r,variant:n,className:i}=e;return(0,s.jsxs)("button",{className:(0,o.Z)("tab-nav","underline"===n&&"tw-relative tw-text-base tw-font-semibold sm:tw-text-xl sm:tw-font-bold tw-leading-snug tw-py-[9px] tw-px-[14px] lg:tw-py-[9px] lg:tw-px-6.1",!r&&"tw-text-gray-400",r&&"tw-text-heading",i),type:"button",role:"tab",id:t&&"".concat(t,"-tab"),"aria-controls":r?t&&"".concat(t,"-panel"):void 0,"aria-selected":r,onClick:a,children:[l,r&&"underline"===n?(0,s.jsx)(w.E.span,{className:"tw-absolute tw-block tw-w-full tw-h-0.5 -tw-bottom-1 tw-left-0 tw-bg-primary tw-z-1",layoutId:"underline"}):null]})};d.displayName="TabNav";var u=l(65820);let m=e=>{let{children:t,activeIdx:l,className:a}=e,r=i.Children.toArray(t),n=r.find((e,t)=>t===l);return(0,s.jsx)(u.M,{mode:"wait",children:(0,s.jsx)(w.E.div,{className:(0,o.Z)("tab-content",a),initial:{y:50,opacity:0},animate:{y:0,opacity:1},exit:{y:0,opacity:0},transition:{duration:.5,type:"spring"},children:n},l)})};m.displayName="TabContent";let h=e=>{let{children:t,className:l,id:a}=e;return(0,s.jsx)("div",{className:(0,o.Z)("tab-pane",l),role:"tabpanel",id:a&&"".concat(a,"-panel"),"aria-labelledby":a&&"".concat(a,"-tab"),children:t})};h.displayName="TabPane";let p=e=>{let{className:t,children:l,variant:a,idPrefix:r="tab"}=e,[n,c]=(0,i.useState)(0),w=e=>{c(e)},d=(e,t)=>i.Children.map(e,(e,l)=>{if(!(0,i.isValidElement)(e))return e;let s=e.props,o={...s};return"TabList"===t?(0,i.cloneElement)(e,{...o,onClick:()=>w(l),isActive:l===n,variant:a,id:"".concat(r,"-").concat(l),children:d(s.children,t)}):"TabContent"===t?(0,i.cloneElement)(e,{...o,id:"".concat(r,"-").concat(l),children:d(s.children,t)}):null}),u=i.Children.map(l,e=>{if(!(0,i.isValidElement)(e))return e;let t=e.props,l={...t},s=t.originalType||e.type,r=s.displayName||s.name;return"TabList"===r?(0,i.cloneElement)(e,{...l,variant:a,children:d(t.children,r)}):"TabContent"===r?(0,i.cloneElement)(e,{...l,activeIdx:n,children:d(t.children,r)}):(0,i.cloneElement)(e,{...l,children:t.children})});return(0,s.jsx)("div",{className:(0,o.Z)("tab",t),children:u})};var x=l(64887),b=l(85551),f=l(24677),v=l(68945);let g=(0,w.E)(f.Z),j=e=>{let{show:t,onClose:l}=e;return(0,s.jsxs)(b.u_,{show:t,onClose:l,children:[(0,s.jsxs)(b.xB,{children:[(0,s.jsx)("h4",{className:"tw-mb-0",children:"Course Enrolled"}),(0,s.jsx)(b.A3,{onClose:l,children:"x"})]}),(0,s.jsx)(b.fe,{className:"tw-p-14 tw-text-center",children:(0,s.jsx)(g,{className:"tw-max-w-[770px] tw-mx-auto",initial:"offscreen",whileInView:"onscreen",viewport:{once:!0,amount:.4},variants:v.sQ})})]})};var N=l(30651);let y=e=>{let{description:t}=e;return(0,s.jsxs)("div",{className:"course-overview tw-prose prose-h2:tw-text-xl sm:prose-h2:tw-text-3xl tw-max-w-none",children:[(0,s.jsx)("h2",{className:"title tw-mb-5",children:"Course Description"}),(0,s.jsx)(N.Z,{body:t})]})};var S=l(31615),C=l(50897),Z=l(51697);let E=e=>{let{curriculum:t,courseSlug:l}=e,{courseProgress:a}=(0,Z.aF)(),r=a.find(e=>e.course===l);return(0,s.jsx)("div",{className:"curriculum-sections",children:t.map(e=>{let{id:t,title:l,description:a,lessons:n}=e;return(0,s.jsxs)("div",{className:"tw-border tw-border-alto tw-rounded tw-mt-[50px] first:tw-mt-0",children:[(0,s.jsxs)("div",{className:"tw-py-5 tw-px-3.8 md:tw-py-[22px] md:tw-px-12",children:[(0,s.jsx)("h5",{className:"tw-text-xl tw-mb-0",children:l}),a&&(0,s.jsx)("p",{className:"tw-text-md tw-mb-0 tw-mt-[5px] tw-italic",children:a})]}),n.length>0&&(0,s.jsx)("ul",{className:"section-content",children:n.map(e=>{let t=r||"free"===e.access;return(0,s.jsx)("li",{className:"tw-text-md even:tw-bg-light-100 odd:tw-bg-white even:last:tw-rounded-b",children:(0,s.jsxs)(C.Z,{path:e.path,className:(0,o.Z)("tw-px-3.8 md:tw-pl-12 md:tw-pr-7.5 tw-min-h-[56px] tw-flex tw-flex-wrap tw-items-center",!t&&"tw-pointer-events-none"),children:[(0,s.jsxs)("span",{className:"tw-grow tw-py-2.5",children:[(0,s.jsx)("i",{className:(0,o.Z)("far tw-w-5 tw-text-md","lesson"===e.type&&"fa-file-alt","quiz"===e.type&&"fa-clock")}),e.title]}),(0,s.jsxs)("div",{className:"tw-text-right tw-flex tw-items-center tw-py-2.5",children:[(0,s.jsx)(S.Z,{className:"tw-ml-2.5",children:e.duration}),"lesson"===e.type&&"free"===e.access&&(0,s.jsx)(S.Z,{className:"tw-ml-2.5",color:"primary",children:"Preview"}),(null==e?void 0:e.video)&&(0,s.jsx)("span",{className:"tw-ml-2.5 tw-font-medium tw-px-3.8",children:(0,s.jsx)("i",{className:"far fa-video"})}),"paid"===e.access&&(0,s.jsx)("span",{className:"tw-ml-2.5 tw-font-medium tw-px-3.8",children:(0,s.jsx)("i",{className:"fas fa-lock-alt"})})]})]})},e.slug)})})]},t)})})},k=e=>{let{data:{course:t,curriculum:l}}=e,[a,r]=(0,i.useState)(!1);return(0,s.jsx)("section",{className:"course-details",children:(0,s.jsxs)("div",{className:"tw-container tw-grid lg:tw-grid-cols-3 tw-gap-12",children:[(0,s.jsx)("div",{className:"lg:tw-col-[1/3]",children:(0,s.jsxs)(p,{variant:"underline",children:[(0,s.jsxs)(c,{children:[(0,s.jsx)(d,{children:"Overview"}),(0,s.jsx)(d,{children:"Curriculam"}),(0,s.jsx)(d,{children:"Instructor"}),(0,s.jsx)(d,{children:"Reviews"})]}),(0,s.jsxs)(m,{className:"tw-mt-10 lg:tw-mt-[50px]",children:[(0,s.jsx)(h,{children:(null==t?void 0:t.description)&&(0,s.jsx)(y,{description:null==t?void 0:t.description})}),(0,s.jsx)(h,{children:l&&(0,s.jsx)(E,{curriculum:l,courseSlug:t.slug})}),(0,s.jsx)(h,{children:(0,s.jsx)("h1",{children:"We will available soon"})}),(0,s.jsx)(h,{children:(0,s.jsx)("h1",{children:"No review yet !"})})]})]})}),(0,s.jsx)("div",{className:"lg:tw-col-[3/-1]",children:(0,s.jsxs)("div",{className:"tw-sticky tw-top-24",children:[(0,s.jsx)(x.Z,{fullwidth:!0,className:"tw-mb-4",onClick:()=>r(!0),children:"Enroll Now"}),(0,s.jsx)(j,{show:a,onClose:()=>r(!1)})]})})]})})};var T=l(89033);let _=e=>{let{data:{course:t,curriculum:l,instructor:r,relatedCourses:i}}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.Z,{title:t.title,description:"Introductory CS course laying out the basics.",jsonLdType:"course",instructor:{name:r.name,path:t.path}}),(0,s.jsx)(n.Z,{pages:[{path:"/",label:"home"},{path:"/courses/lists",label:"courses"}],currentPage:t.title}),(0,s.jsx)(k,{data:{course:t,curriculum:l,instructor:r}}),i.length>0&&(0,s.jsx)(T.Z,{data:{section_title:{title:"Related Courses​"},courses:i}})]})};_.Layout=r.Z;var F=!0,P=_},62111:function(e,t,l){"use strict";l.d(t,{Lp:function(){return n},YQ:function(){return r},np:function(){return a}});var s=l(5121);let a="/users",r="/users/faculty",n=s.Z.create({baseURL:"https://services.idreambig.in/api"})}},function(e){e.O(0,[29331,12451,1320,5121,27332,31513,49774,92888,40179],function(){return e(e.s=86800)}),_N_E=e.O()}]);