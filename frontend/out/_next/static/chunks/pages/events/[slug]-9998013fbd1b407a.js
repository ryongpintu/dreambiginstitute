(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[97942],{10285:function(t){var e,s,a,r,n,l,i,o,c,w,d,m;t.exports=(e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},s=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d\d/,r=/\d\d?/,n=/\d*[^-_:/,()\s\d]+/,l={},i=function(t){return(t=+t)+(t>68?1900:2e3)},o=function(t){return function(e){this[t]=+e}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t||"Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),s=60*e[1]+(+e[2]||0);return 0===s?0:"+"===e[0]?-s:s}(t)}],w=function(t){var e=l[t];return e&&(e.indexOf?e:e.s.concat(e.f))},d=function(t,e){var s,a=l.meridiem;if(a){for(var r=1;r<=24;r+=1)if(t.indexOf(a(r,0,e))>-1){s=r>12;break}}else s=t===(e?"pm":"PM");return s},m={A:[n,function(t){this.afternoon=d(t,!1)}],a:[n,function(t){this.afternoon=d(t,!0)}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[a,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[r,o("seconds")],ss:[r,o("seconds")],m:[r,o("minutes")],mm:[r,o("minutes")],H:[r,o("hours")],h:[r,o("hours")],HH:[r,o("hours")],hh:[r,o("hours")],D:[r,o("day")],DD:[a,o("day")],Do:[n,function(t){var e=l.ordinal,s=t.match(/\d+/);if(this.day=s[0],e)for(var a=1;a<=31;a+=1)e(a).replace(/\[|\]/g,"")===t&&(this.day=a)}],M:[r,o("month")],MM:[a,o("month")],MMM:[n,function(t){var e=w("months"),s=(w("monthsShort")||e.map(function(t){return t.slice(0,3)})).indexOf(t)+1;if(s<1)throw Error();this.month=s%12||s}],MMMM:[n,function(t){var e=w("months").indexOf(t)+1;if(e<1)throw Error();this.month=e%12||e}],Y:[/[+-]?\d+/,o("year")],YY:[a,function(t){this.year=i(t)}],YYYY:[/\d{4}/,o("year")],Z:c,ZZ:c},function(t,a,r){r.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(i=t.parseTwoDigitYear);var n=a.prototype,o=n.parse;n.parse=function(t){var a=t.date,n=t.utc,i=t.args;this.$u=n;var c=i[1];if("string"==typeof c){var w=!0===i[2],d=!0===i[3],u=i[2];d&&(u=i[2]),l=this.$locale(),!w&&u&&(l=r.Ls[u]),this.$d=function(t,a,r){try{if(["x","X"].indexOf(a)>-1)return new Date(("X"===a?1e3:1)*t);var n=(function(t){var a,r;a=t,r=l&&l.formats;for(var n=(t=a.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(t,s,a){var n=a&&a.toUpperCase();return s||r[a]||e[a]||r[n].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(t,e,s){return e||s.slice(1)})})).match(s),i=n.length,o=0;o<i;o+=1){var c=n[o],w=m[c],d=w&&w[0],u=w&&w[1];n[o]=u?{regex:d,parser:u}:c.replace(/^\[|\]$/g,"")}return function(t){for(var e={},s=0,a=0;s<i;s+=1){var r=n[s];if("string"==typeof r)a+=r.length;else{var l=r.regex,o=r.parser,c=t.slice(a),w=l.exec(c)[0];o.call(e,w),t=t.replace(w,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var s=t.hours;e?s<12&&(t.hours+=12):12===s&&(t.hours=0),delete t.afternoon}}(e),e}})(a)(t),i=n.year,o=n.month,c=n.day,w=n.hours,d=n.minutes,u=n.seconds,h=n.milliseconds,x=n.zone,f=new Date,p=c||(i||o?1:f.getDate()),b=i||f.getFullYear(),g=0;i&&!o||(g=o>0?o-1:f.getMonth());var v=w||0,j=d||0,y=u||0,N=h||0;return x?new Date(Date.UTC(b,g,p,v,j,y,N+60*x.offset*1e3)):r?new Date(Date.UTC(b,g,p,v,j,y,N)):new Date(b,g,p,v,j,y,N)}catch(t){return new Date("")}}(a,c,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),(w||d)&&a!=this.format(c)&&(this.$d=new Date("")),l={}}else if(c instanceof Array)for(var h=c.length,x=1;x<=h;x+=1){i[1]=c[x-1];var f=r.apply(this,i);if(f.isValid()){this.$d=f.$d,this.$L=f.$L,this.init();break}x===h&&(this.$d=new Date(""))}else o.call(this,t)}})},43591:function(t,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/events/[slug]",function(){return s(98535)}])},53608:function(t,e,s){"use strict";var a=s(85893),r=s(86010);let n=t=>{let{className:e,children:s,color:n}=t;return(0,a.jsx)("div",{className:(0,r.Z)("alert tw-py-2.5 tw-pr-3 tw-pl-3 tw-rounded nextIcon:tw-mr-2","light"===n&&"tw-bg-gray-200 nextIcon:tw-text-azure","warning"===n&&"tw-bg-warning-100 tw-text-heading","secondary"===n&&"tw-bg-secondary tw-text-white",e),children:s})};n.defaultProps={color:"light"},e.Z=n},58792:function(t,e,s){"use strict";var a=s(85893),r=s(67294),n=s(86010),l=s(38213);let i=(0,r.forwardRef)((t,e)=>{let{className:s,bg:r,disabled:i,state:o,feedbackText:c,id:w,name:d,onChange:m,onClick:u,onBlur:h,value:x,readonly:f,showState:p,showErrorOnly:b,customStyle:g,...v}=t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("textarea",{disabled:i,ref:e,className:(0,n.Z)("form-control","tw-block tw-w-full tw-min-h-[120px] md:tw-min-h-[180px] lg:tw-min-h-[220px] tw-rounded tw-py-2.5 tw-px-5 tw-text-base tw-text-body tw-leading-relaxed tw-border tw-border-gray-200 tw-placeholder-body","nofocus"!==g&&!f&&"focus:tw-shadow-none focus:tw-outline-0 focus:tw-text-body focus:tw-bg-white focus:tw-border-primary",(f||i)&&"tw-bg-gray-300 tw-opacity-100","nofocus"!==g&&f&&"focus:tw-shadow-none focus:tw-outline-0 focus:tw-text-body",!b&&"success"===o&&"!tw-border-success",!b&&"warning"===o&&"!tw-border-warning","error"===o&&"!tw-border-danger","nofocus"!==g&&!o&&"focus:tw-border-blue-100","nofocus"===g&&"focus:tw-outline-0","white"===r&&"tw-bg-white","light"===r&&"tw-bg-gray-200",s),id:w,name:d,onChange:m,onClick:u,onBlur:h,value:x,readOnly:f,...v}),c&&p&&(0,a.jsx)(l.Z,{state:o,showErrorOnly:b,children:c})]})});i.displayName="Textarea ",i.defaultProps={rows:3,showState:!0,showErrorOnly:!0},e.Z=i},79166:function(t,e,s){"use strict";s.d(e,{Z:function(){return h}});var a=s(85893),r=s(37212),n=s(67294),l=s(58367),i=s(52111);let o=(0,l.createCustomEqual)(()=>({areObjectsEqual:(t,e)=>(0,i.r7)(t)||t instanceof google.maps.LatLng||(0,i.r7)(e)||e instanceof google.maps.LatLng?new google.maps.LatLng(t).equals(new google.maps.LatLng(e)):(0,l.deepEqual)(t,e)}));function c(t){let e=(0,n.useRef)();return o(t,e.current)||(e.current=t),e.current}let w=t=>{var e;let{children:s,onClick:r,...l}=t,i=(0,n.useRef)(null),[o,w]=(0,n.useState)();return(0,n.useEffect)(()=>{i.current&&!o&&w(new window.google.maps.Map(i.current,{}))},[i,o]),e=()=>{o&&o.setOptions(l)},(0,n.useEffect)(e,[o,l].map(c)),(0,n.useEffect)(()=>{o&&(["click","idle"].forEach(t=>google.maps.event.clearListeners(o,t)),r&&o.addListener("click",r))},[o,r]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{ref:i,className:"tw-w-full tw-h-full"})," ",n.Children.map(s,t=>(0,n.isValidElement)(t)?(0,n.cloneElement)(t,{map:o}):null)]})},d=t=>{let[e,s]=(0,n.useState)();return(0,n.useEffect)(()=>(e||s(new google.maps.Marker),()=>{e&&e.setMap(null)}),[e]),(0,n.useEffect)(()=>{e&&e.setOptions(t)},[e,t]),null},m=t=>(0,a.jsx)("h1",{children:t}),u=t=>{let{...e}=t;return(0,a.jsx)(r.Wrapper,{apiKey:"AIzaSyB3mMuvl8IUlviRZiizBiX7uhsdIqunx94",render:m,children:(0,a.jsx)(w,{...e,children:(0,a.jsx)(d,{position:e.center})})})};var h=u},24268:function(t,e,s){"use strict";s.r(e),s.d(e,{SwiperSlide:function(){return i.o5}});var a=s(85893),r=s(67294),n=s(86010),l=s(71911),i=s(30719);let o=(0,r.forwardRef)((t,e)=>{let{options:s,prevIcon:r,nextIcon:o,navStyle:c,navPosition:w,shadowSize:d,dotStyle:m,dotPosition:u,children:h,className:x,navClass:f}=t,p=(null==s?void 0:s.modules)!==void 0?s.modules:[],b="prev-".concat(f||"swiper-nav"),g="next-".concat(f||"swiper-nav"),v={slidesPerView:3,spaceBetween:30,loop:!1,autoplay:{delay:2500,disableOnInteraction:!1},watchSlidesProgress:!0,autoHeight:!0,breakpoints:{},...s,modules:[l.W_,l.tl,l.s5,l.pt,...p],navigation:null!=s&&!!s.navigation&&{prevEl:".".concat(b),nextEl:".".concat(g)},pagination:null!=s&&!!s.pagination&&{clickable:!0}};return(0,a.jsxs)("div",{className:(0,n.Z)(x,"swiper-wrap tw-relative",c&&"nav-style-".concat(c),w&&"nav-position-".concat(w),m&&"dot-style-".concat(m),u&&"dot-position-".concat(u),d&&"shadow-size-".concat(d)),ref:e,children:[(0,a.jsx)(i.tq,{...v,children:h}),(null==v?void 0:v.navigation)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("button",{type:"button",className:"swiper-btn swiper-btn-prev ".concat(b),children:(0,a.jsx)("i",{className:(0,n.Z)(r,"icon")})}),(0,a.jsx)("button",{type:"button",className:"swiper-btn swiper-btn-next ".concat(g),children:(0,a.jsx)("i",{className:(0,n.Z)(o,"icon")})})]})]})});o.defaultProps={prevIcon:"fas fa-angle-left",nextIcon:"fas fa-angle-right",navStyle:1,dotStyle:1},e.default=o},40552:function(t,e,s){"use strict";var a=s(85893),r=s(86010);let n=t=>{let{icon:e,label:s,value:n}=t;return(0,a.jsxs)("div",{className:"tw-flex tw-items-center tw-justify-between tw-py-3.8 tw-border-t tw-border-t-gray-500 first-of-type:tw-border-0",children:[(0,a.jsxs)("h3",{className:"tw-mb-0 tw-text-h6",children:[e&&(0,a.jsx)("i",{className:(0,r.Z)(e,"tw-text-body tw-min-w-[28px] tw-mr-0.5 tw-text-center")}),s]}),(0,a.jsx)("span",{className:"tw-text-right",children:n})]})};e.Z=n},68376:function(t,e,s){"use strict";var a=s(85893);let r=t=>{let{children:e}=t;return(0,a.jsx)("div",{className:"course-info-widget tw-pt-7.5 tw-px-7.5 tw-pb-[33px] tw-bg-white tw-shadow-2sm tw-shadow-heading/10 tw-rounded",children:e})};e.Z=r},98535:function(t,e,s){"use strict";s.r(e),s.d(e,{__N_SSG:function(){return B},default:function(){return V}});var a=s(85893),r=s(29309),n=s(6825),l=s(27484),i=s.n(l),o=s(86010),c=s(5152),w=s.n(c),d=s(27542);let m=w()(()=>s.e(17548).then(s.bind(s,17548)),{loadableGenerated:{webpack:()=>[17548]},ssr:!1}),u=t=>{let{tragetDate:e,className:s,align:r}=t,[n,l,i,c]=(0,d.au)(e);return(0,a.jsxs)("div",{className:(0,o.Z)("tw-grid tw-grid-cols-2 sm:tw-grid-cols-4","center"===r&&"tw-mx-auto",s),children:[(0,a.jsx)(m,{value:n,type:"days"}),(0,a.jsx)(m,{value:l,type:"hours"}),(0,a.jsx)(m,{value:i,type:"minutes"}),(0,a.jsx)(m,{value:c,type:"seconds"})]})};u.defaultProps={align:"center"};var h=s(10285),x=s.n(h);i().extend(x());let f=t=>{let{thumbnail:e,title:s,start_date:r,start_time:n}=t;return(0,a.jsxs)("div",{className:"tw-relative tw-bg-heading tw-py-[100px] md:tw-pt-[232px] md:tw-pb-[184px] tw-max-h-[760px]",children:[(0,a.jsx)("div",{className:"tw-absolute tw-inset-0 after:tw-absolute after:tw-content-[''] after:tw-inset-0 after:tw-bg-black/40",children:(null==e?void 0:e.src)&&(0,a.jsx)("img",{className:"tw-w-full tw-h-full tw-object-cover",src:e.src,alt:(null==e?void 0:e.alt)||s,width:"1920"})}),(0,a.jsxs)("div",{className:"tw-container tw-relative tw-z-1 tw-text-white tw-text-center",children:[(0,a.jsxs)("p",{className:"tw-font-bold tw-uppercase tw-tracking-[4px] tw-mb-7",children:[i()(r).format("MMMM YY")," "]}),(0,a.jsx)("h1",{className:"tw-text-[40px] md:tw-text-5xl lg:tw-text-[56px] tw-leading-[1.15] tw-text-white tw-mb-0",children:s}),(0,a.jsx)(u,{className:"tw-max-w-[470px] tw-mt-[54px]",tragetDate:"".concat(r," ").concat(n)})]})]})};var p=s(79166),b=s(67294),g=s(64887),v=s(53608),j=s(51819);let y=t=>{let{className:e}=t,[s,r]=(0,b.useState)("");(0,b.useEffect)(()=>{r(window.location.href)},[]);let n=t=>{t.preventDefault();let e=t.currentTarget.href;window.open(e,"Twitter","toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,width=800,height=600,resizable=1")};return(0,a.jsxs)(j.Z,{shape:"circle",variant:"outlined",color:"light",tooltip:!0,className:e,children:[(0,a.jsx)(j.I,{label:"Facebook",href:"https://www.facebook.com/sharer/sharer.php?u=".concat(s),onClick:n,className:"tw-mr-2.5",children:(0,a.jsx)("i",{className:"fab fa-facebook-f"})}),(0,a.jsx)(j.I,{label:"Twitter",href:"https://twitter.com/intent/tweet?url=".concat(s),onClick:n,className:"tw-mr-2.5",children:(0,a.jsx)("i",{className:"fab fa-twitter"})}),(0,a.jsx)(j.I,{label:"Linkedin",href:"https://www.linkedin.com/shareArticle?url=".concat(s),onClick:n,className:"tw-mr-2.5",children:(0,a.jsx)("i",{className:"fab fa-linkedin"})})]})};var N=s(85551),k=s(29552);let M=t=>{let{show:e,onClose:s,date:r,title:n,thumbnail:l,remain_slot:o}=t,[c,w]=(0,b.useState)(!1);return(0,a.jsx)(N.u_,{show:e,onClose:s,children:(0,a.jsxs)(N.fe,{className:"tw-text-center tw-pt-8 tw-pb-10 tw-px-7.5",children:[(0,a.jsx)("p",{className:"tw-font-medium tw-uppercase -tw-tracking-tightest tw-mb-1.5 tw-text-primary",children:i()(r).format("MMMM DD")}),(0,a.jsx)("h3",{className:"tw-text-xl tw-mb-7",children:n}),(0,a.jsx)("div",{className:"tw-mb-7.5",children:(null==l?void 0:l.src)&&(0,a.jsx)("img",{src:l.src,alt:(null==l?void 0:l.alt)||n,width:"410",className:"tw-rounded"})}),c?(0,a.jsx)("h4",{children:"You have booked this event"}):(0,a.jsxs)("form",{children:[(0,a.jsxs)("div",{className:"tw-flex tw-items-center tw-justify-start",children:[(0,a.jsx)("label",{htmlFor:"event-count",className:"tw-mr-5 tw-text-heading tw-text-md tw-font-bold",children:"Quantity"}),(0,a.jsx)(k.Z,{id:"event-count",name:"event-count",type:"number",min:"1",max:o.toString(),className:"tw-min-h-[48px] tw-max-w-[110px]"})]}),(0,a.jsx)(g.Z,{fullwidth:!0,className:"tw-mt-7.5",onClick:()=>w(!0),children:"Book Now"})]})]})})};var Y=s(68376);let Z=t=>{let{title:e,currency:s,price:r}=t;return(0,a.jsxs)("div",{className:"course-price tw-flex tw-items-center tw-justify-between tw-mb-[7px]",children:[(0,a.jsxs)("h3",{className:"tw-mb-0 tw-text-h6",children:[(0,a.jsx)("i",{className:"far fa-money-bill-wave tw-text-body tw-min-w-[28px] tw-text-center"})," ",e]}),(0,a.jsx)("span",{className:"tw-text-right",children:(0,a.jsx)("span",{className:"tw-text-2xl tw-text-primary tw-font-extrabold",children:0===r?"Free":(0,a.jsxs)(a.Fragment,{children:[s,r,(0,a.jsx)("span",{className:"tw-text-lg",children:".00"})]})})})]})};Z.defaultProps={title:"Price"};var _=s(40552);let S=t=>{let{total_slot:e,total_booked:s,title:r,start_date:n,thumbnail:l,price:o,currency:c}=t,[w,d]=(0,b.useState)(!1),m=i()().isAfter(i()(n));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(Y.Z,{children:[(0,a.jsx)(Z,{title:"Cost",price:o,currency:c}),(0,a.jsx)(_.Z,{icon:"far fa-user-friends",label:"Total Slot:",value:e}),(0,a.jsx)(_.Z,{icon:"far fa-lock-alt",label:"Booked Slot:",value:s}),m?(0,a.jsx)(v.Z,{color:"warning",className:"tw-mt-5",children:"This event has expired"}):(0,a.jsx)(g.Z,{fullwidth:!0,className:"tw-mt-5",onClick:()=>d(!0),children:"Book Now"}),(0,a.jsx)(y,{className:"tw-mt-7 tw-justify-center"})]}),(0,a.jsx)(M,{show:w,onClose:()=>d(!1),title:r,date:n,thumbnail:l,remain_slot:e-s})]})};S.defaultProps={total_booked:0};var D=s(30651);let L=t=>{let{location:e,start_date:s,end_date:r,start_time:n,end_time:l,total_slot:o,price:c,currency:w,total_booked:d,venue:m,thumbnail:u,title:h,body:x}=t;return(0,a.jsx)("article",{className:"tw-py-15 md:tw-py-20 lg:tw-py-[100px]",children:(0,a.jsxs)("div",{className:"tw-container tw-border-b tw-border-b-gray-650 tw-pb-[50px] md:tw-pb-[70px] lg:tw-pb-[90px]",children:[(0,a.jsx)("h2",{className:"tw-text-4xl md:tw-text-[42px] lg:tw-text-5xl tw-text-center tw-mb-5",children:"About The Event"}),(0,a.jsxs)("div",{className:"tw-flex tw-flex-wrap tw-justify-center tw-items-center tw-mb-10 lg:tw-mb-15",children:[(0,a.jsxs)("div",{className:"tw-mx-3 tw-mb-[5px]",children:[(0,a.jsx)("i",{className:"fas fa-map-marker-alt tw-text-primary tw-mr-[5px]"}),(0,a.jsxs)("span",{children:[e.city,", ",e.country]})]}),(0,a.jsxs)("div",{className:"tw-mx-3 tw-mb-[5px]",children:[(0,a.jsx)("i",{className:"fal fa-calendar tw-text-primary tw-mr-[5px]"}),(0,a.jsxs)("span",{children:[i()(s).format("MMM DD, YYYY")," -"," ",i()(r).format("MMM DD, YYYY")]})]}),(0,a.jsxs)("div",{className:"tw-mx-3 tw-mb-[5px]",children:[(0,a.jsx)("i",{className:"fas fa-clock tw-text-primary tw-mr-[5px]"}),(0,a.jsxs)("span",{children:[i()("".concat(s," ").concat(n)).format("h:mm a")," ","-"," ",i()("".concat(r," ").concat(l)).format("h:mm a")]})]})]}),(0,a.jsxs)("div",{className:"tw-grid tw-grid-cols-3 tw-gap-10 tw-mb-10 lg:tw-mb-[50px]",children:[(0,a.jsxs)("div",{className:"tw-col-span-full lg:tw-col-[1/3]",children:[(0,a.jsx)("div",{className:"tw-h-[400px] lg:tw-h-[390px]",children:(0,a.jsx)(p.Z,{center:{lat:e.latitude,lng:e.longitude},zoom:14})}),(0,a.jsxs)("p",{className:"tw-mb-0 tw-mt-5 tw-text-center",children:[(0,a.jsx)("span",{className:"fas fa-map-marker-alt tw-text-primary tw-mr-1.5"}),m]})]}),(0,a.jsx)("div",{className:"tw-col-span-full lg:tw-col-[3/-1]",children:(0,a.jsx)(S,{total_slot:o,total_booked:d,title:h,thumbnail:u,start_date:s,price:c,currency:w})})]}),(0,a.jsx)(D.Z,{body:x})]})})};var E=s(24268);let C=t=>{let{className:e,name:s,designation:r,image:n}=t;return(0,a.jsxs)("div",{className:(0,o.Z)("speaker tw-text-center",e),children:[(0,a.jsx)("div",{className:"tw-mb-7 tw-w-[170px] tw-h-[170px] tw-mx-auto",children:(null==n?void 0:n.src)&&(0,a.jsx)("img",{src:n.src,alt:(null==n?void 0:n.alt)||s,width:"200",className:"tw-object-cover tw-rounded-full tw-w-full"})}),(0,a.jsx)("h3",{className:"tw-mb-1.5 tw-text-h6",children:s}),(0,a.jsxs)("p",{className:"tw-mb-0",children:["/ ",r]})]})},T={autoplay:!1,slidesPerView:1,breakpoints:{300:{slidesPerView:1},450:{slidesPerView:2},768:{slidesPerView:3},992:{slidesPerView:5}}},P=t=>{let{speakers:e}=t;return(0,a.jsxs)("div",{className:"tw-container tw-pb-15 md:tw-pb-20 lg:tw-pb-[100px] tw-border-b tw-border-b-gray-650",children:[(0,a.jsx)("h2",{className:"tw-text-4xl lg:tw-text-5xl tw-text-center tw-mb-11",children:"Our Speakers"}),e.length>0&&(0,a.jsx)(E.default,{options:T,children:e.map(t=>(0,a.jsx)(E.SwiperSlide,{children:(0,a.jsx)(C,{name:t.name,designation:t.designation,image:t.image})},t.id))}),(0,a.jsx)("p",{className:"tw-text-lg tw-max-w-[630px] tw-text-center tw-mx-auto tw-mt-[54px]",children:"Register online, get your ticket, meet up with our inspirational speakers and specialists in the field to share your ideas."})]})};var O=s(87536),A=s(58792),F=s(38213);let H=(0,b.forwardRef)((t,e)=>{let{className:s,disabled:r,id:n,name:l,label:i,checked:c,defaultChecked:w,onChange:d,onClick:m,onBlur:u,value:h,state:x,feedbackText:f,showState:p,showErrorOnly:b,...g}=t;return(0,a.jsxs)("div",{className:"custom-checkbox",children:[(0,a.jsxs)("label",{className:(0,o.Z)("tw-relative tw-block tw-leading-snug tw-pl-7 tw-cursor-pointer tw-max-w-fit",s),children:[(0,a.jsx)("input",{type:"checkbox",disabled:r,id:n,name:l,checked:c,defaultChecked:w,onChange:d,onClick:m,onBlur:u,value:h,ref:e,className:"tw-sr-only tw-peer",...g}),(0,a.jsx)("span",{className:(0,o.Z)("tw-leading-[18px] tw-w-[18px] tw-h-[18px] tw-absolute tw-left-0 tw-inline-block","before:tw-absolute before:tw-content[''] before:tw-w-full before:tw-h-full before:tw-top-px before:tw-left-0 before:tw-transition-colors before:tw-duration-300 before:tw-bg-gray-200 before:tw-border before:tw-border-gray-200 before:tw-rounded-sm",r&&"tw-opacity-50 before:tw-opacity-50 after:tw-opacity-50","after:tw-absolute after:tw-content[''] after:tw-block after:tw-bg-primary after:tw-w-2 after:tw-h-2 after:tw-top-1/2 after:tw-left-1/2 after:-tw-translate-x-1/2 after:-tw-translate-y-1/2 after:tw-scale-0 after:tw-transition-transform after:tw-duration-300 after:tw-rounded-sm after:z-10","peer-checked:after:tw-scale-100 peer-checked:before:tw-border-primary peer-checked:before:tw-bg-white peer-hover:before:tw-border-primary")}),i]}),f&&p&&(0,a.jsx)(F.Z,{state:x,showErrorOnly:b,children:f})]})});H.displayName="Checkbox";var I=s(96432);let $=t=>{var e,s,r,n;let{className:l}=t,[i,c]=(0,b.useState)(""),{register:w,handleSubmit:d,formState:{errors:m}}=(0,O.cI)(),u=t=>{console.log(t),c("Thank you for your message!")};return(0,a.jsxs)("form",{className:(0,o.Z)("tw-max-w-[770px] tw-mx-auto",l),onSubmit:d(u),children:[(0,a.jsxs)("div",{className:"tw-grid sm:tw-grid-cols-2 tw-gap-5 tw-mb-5 lg:tw-gap-7.5 lg:tw-mb-7.5",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"name",className:"tw-sr-only",children:"Name"}),(0,a.jsx)(k.Z,{id:"name",placeholder:"Your Name *",bg:"light",feedbackText:null==m?void 0:null===(e=m.name)||void 0===e?void 0:e.message,state:(0,I.wH)(m,"name")?"error":"success",showState:!!(0,I.wH)(m,"name"),...w("name",{required:"Name is required"})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"email",className:"tw-sr-only",children:"email"}),(0,a.jsx)(k.Z,{type:"email",id:"email",placeholder:"Your Email *",bg:"light",feedbackText:null==m?void 0:null===(s=m.email)||void 0===s?void 0:s.message,state:(0,I.wH)(m,"email")?"error":"success",showState:!!(0,I.wH)(m,"email"),...w("email",{required:"Email is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"invalid email address"}})})]})]}),(0,a.jsxs)("div",{className:"tw-mb-5 lg:tw-mb-7.5",children:[(0,a.jsx)("label",{htmlFor:"comment",className:"tw-sr-only",children:"comment"}),(0,a.jsx)(A.Z,{id:"comment",placeholder:"Your Comment *",bg:"light",feedbackText:null==m?void 0:null===(r=m.comment)||void 0===r?void 0:r.message,state:(0,I.wH)(m,"comment")?"error":"success",showState:!!(0,I.wH)(m,"comment"),...w("comment",{required:"Comment is required"})})]}),(0,a.jsx)(H,{className:"tw-mx-auto",id:"terms",label:"Save my name, email, and website in this browser for the next time I comment.",feedbackText:null==m?void 0:null===(n=m.terms)||void 0===n?void 0:n.message,state:(0,I.wH)(m,"terms")?"error":"success",showState:!!(0,I.wH)(m,"terms"),...w("terms")}),(0,a.jsxs)("div",{className:"tw-mt-5 lgtw-mt-7.5 tw-text-center",children:[(0,a.jsx)(g.Z,{type:"submit",className:"tw-w-[180px]",children:"Submit"}),i&&(0,a.jsx)(F.Z,{state:"success",children:i})]})]})},q=()=>(0,a.jsx)("div",{className:"tw-py-15 md:tw-py-20 lg:tw-py-[100px]",children:(0,a.jsxs)("div",{className:"tw-container",children:[(0,a.jsx)("h3",{className:"tw-text-center tw-mb-11 tw-text-4xl lg:tw-text-5xl",children:"Leave your thought here"}),(0,a.jsx)($,{})]})}),z=t=>{let{data:{event:e}}=t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Z,{title:(0,I.fp)(e.title),openGraph:{type:"article",images:[{url:"https://idreambig.in".concat(e.thumbnail.src),width:800,height:600,alt:e.title},{url:"https://idreambig.in".concat(e.thumbnail.src),width:900,height:800,alt:e.title}]}}),(0,a.jsx)(f,{thumbnail:e.thumbnail,title:e.title,start_date:e.start_date,start_time:e.start_time}),(0,a.jsx)(L,{location:e.location,start_date:e.start_date,start_time:e.start_time,end_date:e.end_date,end_time:e.end_time,total_slot:e.total_slot,price:e.price,currency:e.currency,total_booked:e.total_booked,title:e.title,venue:e.venue,thumbnail:e.thumbnail,body:e.body}),(0,a.jsx)(P,{speakers:e.speakers}),(0,a.jsx)(q,{})]})};z.Layout=n.Z;var B=!0,V=z}},function(t){t.O(0,[29331,12451,1320,30719,36468,27332,31513,49774,92888,40179],function(){return t(t.s=43591)}),_N_E=t.O()}]);