(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[89408],{27484:function(t){var e,n,r,i,a,s,o,l,u,d,c,h,w,f,p,m,b,x,y,g,v;t.exports=(e="millisecond",n="second",r="minute",i="hour",a="week",s="month",o="quarter",l="year",u="date",d="Invalid Date",c=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,w=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},(p={})[f="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||"th")+"]"}},m=function(t){return t instanceof g},b=function t(e,n,r){var i;if(!e)return f;if("string"==typeof e){var a=e.toLowerCase();p[a]&&(i=a),n&&(p[a]=n,i=a);var s=e.split("-");if(!i&&s.length>1)return t(s[0])}else{var o=e.name;p[o]=e,i=o}return!r&&i&&(f=i),i||!r&&f},x=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new g(n)},(y={s:w,z:function(t){var e=-t.utcOffset(),n=Math.abs(e);return(e<=0?"+":"-")+w(Math.floor(n/60),2,"0")+":"+w(n%60,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,s),a=n-i<0,o=e.clone().add(r+(a?-1:1),s);return+(-(r+(n-i)/(a?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return({M:s,y:l,w:a,d:"day",D:u,h:i,m:r,s:n,ms:e,Q:o})[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}}).l=b,y.i=m,y.w=function(t,e){return x(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})},v=(g=function(){function t(t){this.$L=b(t.locale,null,!0),this.parse(t)}var w=t.prototype;return w.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(y.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(c);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},w.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},w.$utils=function(){return y},w.isValid=function(){return this.$d.toString()!==d},w.isSame=function(t,e){var n=x(t);return this.startOf(e)<=n&&n<=this.endOf(e)},w.isAfter=function(t,e){return x(t)<this.startOf(e)},w.isBefore=function(t,e){return this.endOf(e)<x(t)},w.$g=function(t,e,n){return y.u(t)?this[e]:this.set(n,t)},w.unix=function(){return Math.floor(this.valueOf()/1e3)},w.valueOf=function(){return this.$d.getTime()},w.startOf=function(t,e){var o=this,d=!!y.u(e)||e,c=y.p(t),h=function(t,e){var n=y.w(o.$u?Date.UTC(o.$y,e,t):new Date(o.$y,e,t),o);return d?n:n.endOf("day")},w=function(t,e){return y.w(o.toDate()[t].apply(o.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),o)},f=this.$W,p=this.$M,m=this.$D,b="set"+(this.$u?"UTC":"");switch(c){case l:return d?h(1,0):h(31,11);case s:return d?h(1,p):h(0,p+1);case a:var x=this.$locale().weekStart||0,g=(f<x?f+7:f)-x;return h(d?m-g:m+(6-g),p);case"day":case u:return w(b+"Hours",0);case i:return w(b+"Minutes",1);case r:return w(b+"Seconds",2);case n:return w(b+"Milliseconds",3);default:return this.clone()}},w.endOf=function(t){return this.startOf(t,!1)},w.$set=function(t,a){var o,d=y.p(t),c="set"+(this.$u?"UTC":""),h=((o={}).day=c+"Date",o[u]=c+"Date",o[s]=c+"Month",o[l]=c+"FullYear",o[i]=c+"Hours",o[r]=c+"Minutes",o[n]=c+"Seconds",o[e]=c+"Milliseconds",o)[d],w="day"===d?this.$D+(a-this.$W):a;if(d===s||d===l){var f=this.clone().set(u,1);f.$d[h](w),f.init(),this.$d=f.set(u,Math.min(this.$D,f.daysInMonth())).$d}else h&&this.$d[h](w);return this.init(),this},w.set=function(t,e){return this.clone().$set(t,e)},w.get=function(t){return this[y.p(t)]()},w.add=function(t,e){var o,u=this;t=Number(t);var d=y.p(e),c=function(e){var n=x(u);return y.w(n.date(n.date()+Math.round(e*t)),u)};if(d===s)return this.set(s,this.$M+t);if(d===l)return this.set(l,this.$y+t);if("day"===d)return c(1);if(d===a)return c(7);var h=((o={})[r]=6e4,o[i]=36e5,o[n]=1e3,o)[d]||1,w=this.$d.getTime()+t*h;return y.w(w,this)},w.subtract=function(t,e){return this.add(-1*t,e)},w.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=y.z(this),a=this.$H,s=this.$m,o=this.$M,l=n.weekdays,u=n.months,c=function(t,n,i,a){return t&&(t[n]||t(e,r))||i[n].slice(0,a)},w=function(t){return y.s(a%12||12,t,"0")},f=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:y.s(o+1,2,"0"),MMM:c(n.monthsShort,o,u,3),MMMM:c(u,o),D:this.$D,DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,l,2),ddd:c(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(a),HH:y.s(a,2,"0"),h:w(1),hh:w(2),a:f(a,s,!0),A:f(a,s,!1),m:String(s),mm:y.s(s,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:i};return r.replace(h,function(t,e){return e||p[t]||i.replace(":","")})},w.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},w.diff=function(t,e,u){var d,c=y.p(e),h=x(t),w=(h.utcOffset()-this.utcOffset())*6e4,f=this-h,p=y.m(this,h);return p=((d={})[l]=p/12,d[s]=p,d[o]=p/3,d[a]=(f-w)/6048e5,d.day=(f-w)/864e5,d[i]=f/36e5,d[r]=f/6e4,d[n]=f/1e3,d)[c]||f,u?p:y.a(p)},w.daysInMonth=function(){return this.endOf(s).$D},w.$locale=function(){return p[this.$L]},w.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=b(t,e,!0);return r&&(n.$L=r),n},w.clone=function(){return y.w(this.$d,this)},w.toDate=function(){return new Date(this.valueOf())},w.toJSON=function(){return this.isValid()?this.toISOString():null},w.toISOString=function(){return this.$d.toISOString()},w.toString=function(){return this.$d.toUTCString()},t}()).prototype,x.prototype=v,[["$ms",e],["$s",n],["$m",r],["$H",i],["$W","day"],["$M",s],["$y",l],["$D",u]].forEach(function(t){v[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),x.extend=function(t,e){return t.$i||(t(e,g,x),t.$i=!0),x},x.locale=b,x.isDayjs=m,x.unix=function(t){return x(1e3*t)},x.en=p[f],x.Ls=p,x.p={},x)},54564:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.suspense=function(){let t=Error(r.NEXT_DYNAMIC_NO_SSR_CODE);throw t.digest=r.NEXT_DYNAMIC_NO_SSR_CODE,t},e.NoSSR=function(t){let{children:e}=t;return e},(0,n(92648).Z)(n(67294));var r=n(92983)},37645:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){let n=a.default,i={loading:t=>{let{error:e,isLoading:n,pastDelay:r}=t;return null}};t instanceof Promise?i.loader=()=>t:"function"==typeof t?i.loader=t:"object"==typeof t&&(i=r({},i,t)),i=r({},i,e);let o=i.loader,l=()=>null!=o?o().then(s):Promise.resolve(s(()=>null));return i.loadableGenerated&&delete(i=r({},i,i.loadableGenerated)).loadableGenerated,"boolean"!=typeof i.ssr||i.ssr||(delete i.webpack,delete i.modules),n(r({},i,{loader:l}))};var r=n(6495).Z,i=n(92648).Z;i(n(67294));var a=i(n(14588));function s(t){return{default:(null==t?void 0:t.default)||t}}("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},33644:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.LoadableContext=void 0;var r=(0,n(92648).Z)(n(67294));let i=r.default.createContext(null);e.LoadableContext=i},14588:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(60932).Z,i=n(6495).Z,a=(0,n(92648).Z)(n(67294)),s=n(54564),o=n(33644);let l=[],u=[],d=!1;function c(t){let e=t(),n={loading:!0,loaded:null,error:null};return n.promise=e.then(t=>(n.loading=!1,n.loaded=t,t)).catch(t=>{throw n.loading=!1,n.error=t,t}),n}class h{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:t,_opts:e}=this;t.loading&&("number"==typeof e.delay&&(0===e.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},e.delay)),"number"==typeof e.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},e.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(t=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(t){this._state=i({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},t),this._callbacks.forEach(t=>t())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(t){return this._callbacks.add(t),()=>{this._callbacks.delete(t)}}constructor(t,e){this._loadFn=t,this._opts=e,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function w(t){return function(t,e){let n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,ssr:!0},e),i=null;function l(){if(!i){let e=new h(t,n);i={getCurrentValue:e.getCurrentValue.bind(e),subscribe:e.subscribe.bind(e),retry:e.retry.bind(e),promise:e.promise.bind(e)}}return i.promise()}if(n.lazy=a.default.lazy(r(function*(){if(n.ssr&&i){let t=i.getCurrentValue(),e=yield t.loaded;if(e)return e}return yield n.loader()})),!d){let t=n.webpack?n.webpack():n.modules;t&&u.push(e=>{for(let n of t)if(-1!==e.indexOf(n))return l()})}function c(t){!function(){l();let t=a.default.useContext(o.LoadableContext);t&&Array.isArray(n.modules)&&n.modules.forEach(e=>{t(e)})}();let e=n.loading,r=a.default.createElement(e,{isLoading:!0,pastDelay:!0,error:null}),i=n.ssr?a.default.Fragment:s.NoSSR,u=n.lazy;return a.default.createElement(a.default.Suspense,{fallback:r},a.default.createElement(i,null,a.default.createElement(u,Object.assign({},t))))}return c.preload=()=>l(),c.displayName="LoadableComponent",c}(c,t)}function f(t,e){let n=[];for(;t.length;){let r=t.pop();n.push(r(e))}return Promise.all(n).then(()=>{if(t.length)return f(t,e)})}w.preloadAll=()=>new Promise((t,e)=>{f(l).then(t,e)}),w.preloadReady=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(e=>{let n=()=>(d=!0,e());f(u,t).then(n,n)})},window.__NEXT_PRELOADREADY=w.preloadReady,e.default=w},62274:function(t,e,n){"use strict";var r=n(85893),i=n(86010),a=n(50897);let s=t=>{let{className:e,pages:n,currentPage:s,showTitle:o,title:l}=t;return(0,r.jsxs)("div",{className:(0,i.Z)("page-title-area tw-relative",o&&"tw-pt-15 tw-pb-10 md:tw-pt-20 md:tw-pb-15 lg:tw-pt-[100px] lg:tw-pb-20",!o&&"tw-pb-10 md:tw-pb-15 lg:tw-pb-20",e),children:[o&&(0,r.jsx)("div",{className:"tw-container",children:(0,r.jsx)("h1",{className:"title tw-capitalize tw-mt-5 tw-mb-0 tw-text-3xl md:tw-text-4xl lg:tw-text-5xl tw-text-center",children:l||s})}),!o&&(0,r.jsx)("h1",{className:"tw-sr-only",children:l||s}),(0,r.jsx)("div",{className:(0,i.Z)("page-breadcrumb tw-top-0 tw-left-0 tw-w-full",o&&"tw-absolute"),children:(0,r.jsx)("nav",{className:"tw-container","aria-label":"breadcrumbs",children:(0,r.jsxs)("ul",{className:"breadcrumb tw-flex tw-flex-wrap tw-py-3",children:[n.map(t=>{let{path:e,label:n}=t;return(0,r.jsx)("li",{className:"tw-text-md first:before:tw-hidden before:tw-content-['/'] before:tw-mx-3.8 before:tw-color-body",children:(0,r.jsx)(a.Z,{path:e,className:"tw-text-body tw-capitalize tw-relative before:tw-absolute before:tw-content-[''] before:-tw-bottom-1.5 before:tw-right-0 before:tw-w-0 before:tw-h-px before:tw-transition-all before:tw-bg-heading hover:tw-text-heading hover:before:tw-left-0 hover:before:tw-w-full",children:n})},n)}),(0,r.jsx)("li",{className:"tw-text-md tw-capitalize tw-text-heading first:before:tw-hidden before:tw-content-['/'] before:tw-mx-3.8 before:tw-color-body","aria-current":"page",children:s})]})})})]})};s.defaultProps={showTitle:!0},e.Z=s},20599:function(t,e,n){"use strict";var r=n(85893),i=n(67294),a=n(11163),s=n(86010),o=n(29552);let l=(0,i.forwardRef)((t,e)=>{let{className:n,bg:l}=t,[u,d]=(0,i.useState)(""),c=(0,a.useRouter)(),h=t=>{t.preventDefault(),u&&c.push({pathname:"/courses/search",query:{s:u}},void 0,{scroll:!1})};return(0,r.jsxs)("form",{className:(0,s.Z)("tw-relative",n),ref:e,onSubmit:h,children:[(0,r.jsx)("label",{htmlFor:"search",className:"tw-sr-only",children:"Search For"}),(0,r.jsx)(o.Z,{id:"search",name:"search",type:"text",placeholder:"Search...",bg:l,className:(0,s.Z)("tw-max-h-[48px] tw-pr-[50px]"),value:u,onChange:t=>d(t.target.value)}),(0,r.jsx)("button",{type:"submit","aria-label":"Search",className:"tw-absolute tw-right-0 tw-top-0 tw-w-12 tw-h-12 tw-rounded-tr tw-rounded-br tw-transition-colors tw-text-primary tw-flex tw-justify-center tw-items-center hover:tw-bg-primary hover:tw-text-white",children:(0,r.jsx)("i",{className:"fas fa-search"})})]})});e.Z=l},57115:function(t,e,n){"use strict";var r=n(85893),i=n(50897),a=n(86010);let s=t=>{let{currentPage:e,numberOfPages:n,rootPage:s="blog",className:o}=t,l=e-1==1?"/".concat(s):"/".concat(s,"/page/").concat((e-1).toString()),u="/".concat(s,"/page/").concat((e+1).toString()),d=[];return Array.from({length:n},()=>{let t=e-1,r=e+1;switch(!0){case 1===n:break;case n<=4:d=[...Array.from({length:n},(t,e)=>e+1)];break;case 1===e:d=[1,r,"dots",n];break;case e===n:d=[1,"dots",t,n];break;case 1===t:d=[1,e,r,"dots",n];break;case r===n:d=[1,"dots",e,n];break;case 3===e:d=[1,t,e,r,"dots",n];break;case e===n-1:d=[1,"dots",t,n-1,n];break;default:d=[1,"dots",t,e,r,"dots",n]}return null}),(0,r.jsx)("nav",{"aria-label":"Page navigation",children:(0,r.jsxs)("ul",{className:(0,a.Z)("pagination tw-font-extrabold tw-uppercase tw-text-[16px] tw-text-center",o),children:[1!==e&&(0,r.jsx)("li",{className:"tw-inline-block tw-px-[5px]",children:(0,r.jsx)(i.Z,{className:"tw-block tw-text-center tw-w-12 tw-h-12 tw-leading-[48px] tw-rounded-full tw-text-gray-400 -tw-tracking-tightest hover:tw-text-heading",path:l,children:"Prev"})}),d.map(t=>(0,r.jsxs)("li",{className:"tw-inline-block tw-px-[5px]",children:["dots"===t&&(0,r.jsx)("span",{children:"..."}),"dots"!==t&&(0,r.jsxs)(i.Z,{className:(0,a.Z)("tw-block tw-text-center tw-w-12 tw-h-12 tw-leading-[48px] tw-rounded-full -tw-tracking-tightest hover:tw-text-heading",e!==t&&"tw-text-gray-400",e===t&&"tw-pointer-events-none tw-bg-gray-500 tw-text-heading"),path:"".concat(1===t?"/".concat(s):"/".concat(s,"/page/").concat(t)),children:[t," ",t===e&&(0,r.jsx)("span",{className:"tw-sr-only",children:"Current"})]})]},"page-number-".concat(t))),e!==n&&(0,r.jsx)("li",{className:"tw-inline-block tw-px-[5px]",children:(0,r.jsx)(i.Z,{className:"tw-block tw-text-center tw-w-12 tw-h-12 tw-leading-[48px] tw-rounded-full tw-text-gray-400 -tw-tracking-tightest hover:tw-text-heading",path:u,children:"Next"})})]})})};e.Z=s},29309:function(t,e,n){"use strict";var r=n(85893),i=n(67294),a=n(2962),s=n(49842);let o=t=>{let{title:e,description:n,template:o,openGraph:l,jsonLdType:u,article:d,image:c,instructor:h}=t,[w,f]=(0,i.useState)("");(0,i.useEffect)(()=>{f(window.location.href)},[]);let p="article"===u&&{type:"article",...d,images:[{url:c,width:800,height:600,alt:e},{url:c,width:900,height:800,alt:e}]};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.PB,{title:e,titleTemplate:o?"".concat(e," - ").concat(o):s.Z.titleTemplate,description:n,openGraph:{url:w,title:e,description:n,...l,...p}}),"article"===u&&d&&(0,r.jsx)(a.dX,{type:"Blog",url:w,title:e,images:[c],datePublished:d.publishedTime,dateModified:d.modifiedTime,authorName:d.authors[0],description:n}),"course"===u&&h&&(0,r.jsx)(a.Iv,{courseName:e,description:"Introductory CS course laying out the basics.",provider:{name:h.name,url:w}})]})};o.defaultProps={template:s.Z.name},e.Z=o},49637:function(t,e,n){"use strict";var r=n(85893),i=n(86010);let a=t=>{let{space:e,bg:n,className:a,style:s,children:o}=t;return(0,r.jsx)("section",{className:(0,i.Z)(a,"top-bottom"===e&&"tw-py-15 md:tw-py-20 lg:tw-py-[100px]","top-bottom-2"===e&&"tw-py-15 md:tw-py-20 lg:tw-pt-[100px] lg:tw-pb-40","top-bottom-3"===e&&"tw-pt-[150px] tw-pb-15 md:tw-pt-[170px] md:tw-pb-20 lg:tw-pt-[190px] lg:tw-pb-[100px]","top"===e&&"tw-pt-15 md:tw-pt-20 lg:tw-pt-[100px]","top-2"===e&&"tw-pt-[150px] md:tw-pt-[170px] lg:tw-pt-[320px]","bottom"===e&&"tw-pb-15 md:tw-pb-20 lg:tw-pb-[100px]","bottom-2"===e&&"tw-mb-[70px]","bottom-3"===e&&"tw-pb-15 md:tw-pb-20 lg:tw-pb-[100px] xl:tw-pb-[160px]",n),style:s,children:o})};a.defaultProps={space:"top-bottom"},e.Z=a},15967:function(t,e,n){"use strict";n.d(e,{Z:function(){return _}});var r=n(85893),i=n(9121),a=n(67294),s=n(11163),o=n(5152),l=n.n(o),u=n(86010),d=n(26569),c=n(20599),h=n(36285),w=n(62361),f=n(50897),p=n(34977),m=n(27542);let b=l()(()=>Promise.all([n.e(78053),n.e(15504)]).then(n.bind(n,15504)),{loadableGenerated:{webpack:()=>[15504]},ssr:!1}),x=l()(()=>Promise.all([n.e(78053),n.e(84895)]).then(n.bind(n,45065)),{loadableGenerated:{webpack:()=>[45065]},ssr:!1}),y=t=>{let{shadow:e,fluid:n,transparent:i,mode:o}=t,l=(0,s.useRouter)(),[y,g]=(0,a.useState)(!1),[v,_]=(0,a.useState)(!1),{sticky:$,measuredRef:j}=(0,m.Ax)();return(0,a.useEffect)(()=>{_(!1)},[l]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("header",{className:(0,u.Z)("header",!i&&"tw-relative",i&&"tw-absolute tw-inset-0 tw-bottom-auto tw-bg-transparent"),children:[(0,r.jsx)("div",{ref:j,className:(0,u.Z)("header-inner tw-py-[19px] xl:tw-py-0 tw-z-50 tw-transition-all tw-left-0 tw-top-0 tw-w-full tw-h-auto",!$&&"tw-absolute",$&&"tw-fixed tw-shadow-3md tw-shadow-black/10 tw-animate-headerSlideDown",e&&"tw-shadow-sm tw-shadow-black/5",!i&&"tw-bg-white",i&&!$&&"tw-bg-transparent",i&&$&&"tw-bg-white",i&&$&&"light"===o&&"tw-bg-black"),children:(0,r.jsxs)("div",{className:(0,u.Z)("tw-container tw-grid tw-grid-flow-col xl:tw-grid-cols-[22%_minmax(56%,_1fr)_22%] tw-items-center",n&&"tw-max-w-full tw-px-3.8 3xl:tw-px-37"),children:[(0,r.jsx)(d.Z,{variant:o,className:"tw-max-w-[120px] sm:tw-max-w-[158px]"}),(0,r.jsx)(h.Z,{className:"tw-hidden xl:tw-block",align:"center",menu:p.Z,color:o}),(0,r.jsxs)("div",{className:"tw-flex tw-justify-end tw-items-center",children:[(0,r.jsx)(f.Z,{path:"/profile",className:(0,u.Z)("tw-inline-block tw-px-2.5 tw-py-1.5","light"===o&&"tw-text-white hover:tw-text-white","dark"===o&&"tw-text-dark-50"),"aria-label":"User Profile",children:(0,r.jsx)("i",{className:"far fa-user-circle tw-text-lg"})}),(0,r.jsx)("div",{className:"tw-hidden md:tw-block md:tw-max-w-[250px] md:tw-pl-2.5",children:(0,r.jsx)(c.Z,{bg:i?"white":"light"})}),(0,r.jsxs)("div",{className:"md:tw-hidden tw-overflow-hidden",children:[(0,r.jsx)("button",{type:"button",className:(0,u.Z)("tw-inline-block tw-px-2.5 tw-py-1.5 md:tw-hidden","light"===o&&"tw-text-white","dark"===o&&"tw-text-dark-50"),onClick:()=>g(t=>!t),"aria-label":"Search Toggle",children:(0,r.jsx)("i",{className:"far fa-search tw-text-lg"})}),(0,r.jsx)(x,{show:y,onClose:()=>g(!1)})]}),(0,r.jsx)(w.Z,{className:"tw-pl-5 xl:tw-hidden",onClick:()=>_(!0),color:o,label:"Toggle Menu"})]})]})}),(0,r.jsx)("div",{className:"tw-h-20"})]}),(0,r.jsx)(b,{isOpen:v,onClose:()=>_(!1),menu:p.Z})]})};y.defaultProps={fluid:!0,mode:"dark"};var g=n(66298);let v=t=>{let{children:e,headerShadow:n,headerFluid:a,headerMode:s,headerTransparent:o,footerMode:l}=t;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(y,{shadow:n,fluid:a,transparent:o,mode:s}),(0,r.jsx)("main",{className:"tw-relative",children:e}),(0,r.jsx)(g.Z,{mode:l}),(0,r.jsx)(i.Z,{})]})};var _=v},68945:function(t,e,n){"use strict";n.d(e,{Fc:function(){return i},It:function(){return h},Ji:function(){return s},Uh:function(){return a},Zd:function(){return d},eu:function(){return o},oz:function(){return c},qX:function(){return u},sQ:function(){return r},vl:function(){return l}});let r={offscreen:{opacity:0,y:30},onscreen:{opacity:1,y:0,transition:{type:"spring",duration:1}}},i={offscreen:{opacity:0,x:-100},onscreen:{opacity:1,x:0,transition:{type:"spring",duration:1}}},a={offscreen:{opacity:0,x:100},onscreen:{opacity:1,x:0,transition:{type:"spring",duration:1}}},s={hidden:{y:"-100vh",opacity:0},visible:{y:"0",opacity:1,transition:{duration:.8,type:"tween"}},exit:{y:"-100vh",opacity:0,transition:{duration:.4,type:"tween"}}},o={hidden:{y:"100%",opacity:0},visible:{y:"0",opacity:1,transition:{duration:.5,type:"tween"}},exit:{y:"100%",opacity:0,transition:{duration:.5,type:"tween"}}},l={hidden:{opacity:0},visible:{y:0,opacity:1,transition:{duration:.4,type:"spring"}},exit:{opacity:0,transition:{duration:.4,type:"spring"}}},u={visible:{opacity:1,top:"60px",transition:{duration:.5,type:"tween"}},hidden:{opacity:0,top:"80px",transition:{duration:.5,type:"tween"}}},d={visible:{opacity:1,transition:{delay:.3,duration:.3}},hidden:{opacity:0,transition:{duration:.2}}},c={hidden:{opacity:0,transition:{duration:.5,type:"tween",when:"afterChildren"}},visible:{opacity:1,transition:{duration:.4,type:"tween",when:"beforeChildren"}}},h={hidden:{opacity:0,y:50,transition:{duration:.4,type:"tween"}},visible:{opacity:1,y:0,transition:{duration:.4,type:"tween"}}}},5152:function(t,e,n){t.exports=n(37645)}}]);