(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[50277],{27484:function(t){var e,r,s,a,n,i,l,o,u,c,d,h,f,w,m,p,b,x,g,y,v;t.exports=(e="millisecond",r="second",s="minute",a="hour",n="week",i="month",l="quarter",o="year",u="date",c="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(t,e,r){var s=String(t);return!s||s.length>=e?t:""+Array(e+1-s.length).join(r)+t},(m={})[w="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||"th")+"]"}},p=function(t){return t instanceof y},b=function t(e,r,s){var a;if(!e)return w;if("string"==typeof e){var n=e.toLowerCase();m[n]&&(a=n),r&&(m[n]=r,a=n);var i=e.split("-");if(!a&&i.length>1)return t(i[0])}else{var l=e.name;m[l]=e,a=l}return!s&&a&&(w=a),a||!s&&w},x=function(t,e){if(p(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new y(r)},(g={s:f,z:function(t){var e=-t.utcOffset(),r=Math.abs(e);return(e<=0?"+":"-")+f(Math.floor(r/60),2,"0")+":"+f(r%60,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var s=12*(r.year()-e.year())+(r.month()-e.month()),a=e.clone().add(s,i),n=r-a<0,l=e.clone().add(s+(n?-1:1),i);return+(-(s+(r-a)/(n?a-l:l-a))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return({M:i,y:o,w:n,d:"day",D:u,h:a,m:s,s:r,ms:e,Q:l})[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}}).l=b,g.i=p,g.w=function(t,e){return x(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})},v=(y=function(){function t(t){this.$L=b(t.locale,null,!0),this.parse(t)}var f=t.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var s=e.match(d);if(s){var a=s[2]-1||0,n=(s[7]||"0").substring(0,3);return r?new Date(Date.UTC(s[1],a,s[3]||1,s[4]||0,s[5]||0,s[6]||0,n)):new Date(s[1],a,s[3]||1,s[4]||0,s[5]||0,s[6]||0,n)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return g},f.isValid=function(){return this.$d.toString()!==c},f.isSame=function(t,e){var r=x(t);return this.startOf(e)<=r&&r<=this.endOf(e)},f.isAfter=function(t,e){return x(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<x(t)},f.$g=function(t,e,r){return g.u(t)?this[e]:this.set(r,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,e){var l=this,c=!!g.u(e)||e,d=g.p(t),h=function(t,e){var r=g.w(l.$u?Date.UTC(l.$y,e,t):new Date(l.$y,e,t),l);return c?r:r.endOf("day")},f=function(t,e){return g.w(l.toDate()[t].apply(l.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),l)},w=this.$W,m=this.$M,p=this.$D,b="set"+(this.$u?"UTC":"");switch(d){case o:return c?h(1,0):h(31,11);case i:return c?h(1,m):h(0,m+1);case n:var x=this.$locale().weekStart||0,y=(w<x?w+7:w)-x;return h(c?p-y:p+(6-y),m);case"day":case u:return f(b+"Hours",0);case a:return f(b+"Minutes",1);case s:return f(b+"Seconds",2);case r:return f(b+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(t,n){var l,c=g.p(t),d="set"+(this.$u?"UTC":""),h=((l={}).day=d+"Date",l[u]=d+"Date",l[i]=d+"Month",l[o]=d+"FullYear",l[a]=d+"Hours",l[s]=d+"Minutes",l[r]=d+"Seconds",l[e]=d+"Milliseconds",l)[c],f="day"===c?this.$D+(n-this.$W):n;if(c===i||c===o){var w=this.clone().set(u,1);w.$d[h](f),w.init(),this.$d=w.set(u,Math.min(this.$D,w.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[g.p(t)]()},f.add=function(t,e){var l,u=this;t=Number(t);var c=g.p(e),d=function(e){var r=x(u);return g.w(r.date(r.date()+Math.round(e*t)),u)};if(c===i)return this.set(i,this.$M+t);if(c===o)return this.set(o,this.$y+t);if("day"===c)return d(1);if(c===n)return d(7);var h=((l={})[s]=6e4,l[a]=36e5,l[r]=1e3,l)[c]||1,f=this.$d.getTime()+t*h;return g.w(f,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||c;var s=t||"YYYY-MM-DDTHH:mm:ssZ",a=g.z(this),n=this.$H,i=this.$m,l=this.$M,o=r.weekdays,u=r.months,d=function(t,r,a,n){return t&&(t[r]||t(e,s))||a[r].slice(0,n)},f=function(t){return g.s(n%12||12,t,"0")},w=r.meridiem||function(t,e,r){var s=t<12?"AM":"PM";return r?s.toLowerCase():s},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:g.s(l+1,2,"0"),MMM:d(r.monthsShort,l,u,3),MMMM:d(u,l),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:d(r.weekdaysMin,this.$W,o,2),ddd:d(r.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(n),HH:g.s(n,2,"0"),h:f(1),hh:f(2),a:w(n,i,!0),A:w(n,i,!1),m:String(i),mm:g.s(i,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:a};return s.replace(h,function(t,e){return e||m[t]||a.replace(":","")})},f.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},f.diff=function(t,e,u){var c,d=g.p(e),h=x(t),f=(h.utcOffset()-this.utcOffset())*6e4,w=this-h,m=g.m(this,h);return m=((c={})[o]=m/12,c[i]=m,c[l]=m/3,c[n]=(w-f)/6048e5,c.day=(w-f)/864e5,c[a]=w/36e5,c[s]=w/6e4,c[r]=w/1e3,c)[d]||w,u?m:g.a(m)},f.daysInMonth=function(){return this.endOf(i).$D},f.$locale=function(){return m[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),s=b(t,e,!0);return s&&(r.$L=s),r},f.clone=function(){return g.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},t}()).prototype,x.prototype=v,[["$ms",e],["$s",r],["$m",s],["$H",a],["$W","day"],["$M",i],["$y",o],["$D",u]].forEach(function(t){v[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),x.extend=function(t,e){return t.$i||(t(e,y,x),t.$i=!0),x},x.locale=b,x.isDayjs=p,x.unix=function(t){return x(1e3*t)},x.en=m[w],x.Ls=m,x.p={},x)},56896:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return r(93120)}])},54564:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.suspense=function(){let t=Error(s.NEXT_DYNAMIC_NO_SSR_CODE);throw t.digest=s.NEXT_DYNAMIC_NO_SSR_CODE,t},e.NoSSR=function(t){let{children:e}=t;return e},(0,r(92648).Z)(r(67294));var s=r(92983)},37645:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){let r=n.default,a={loading:t=>{let{error:e,isLoading:r,pastDelay:s}=t;return null}};t instanceof Promise?a.loader=()=>t:"function"==typeof t?a.loader=t:"object"==typeof t&&(a=s({},a,t)),a=s({},a,e);let l=a.loader,o=()=>null!=l?l().then(i):Promise.resolve(i(()=>null));return a.loadableGenerated&&delete(a=s({},a,a.loadableGenerated)).loadableGenerated,"boolean"!=typeof a.ssr||a.ssr||(delete a.webpack,delete a.modules),r(s({},a,{loader:o}))};var s=r(6495).Z,a=r(92648).Z;a(r(67294));var n=a(r(14588));function i(t){return{default:(null==t?void 0:t.default)||t}}("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},33644:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.LoadableContext=void 0;var s=(0,r(92648).Z)(r(67294));let a=s.default.createContext(null);e.LoadableContext=a},14588:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=r(60932).Z,a=r(6495).Z,n=(0,r(92648).Z)(r(67294)),i=r(54564),l=r(33644);let o=[],u=[],c=!1;function d(t){let e=t(),r={loading:!0,loaded:null,error:null};return r.promise=e.then(t=>(r.loading=!1,r.loaded=t,t)).catch(t=>{throw r.loading=!1,r.error=t,t}),r}class h{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:t,_opts:e}=this;t.loading&&("number"==typeof e.delay&&(0===e.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},e.delay)),"number"==typeof e.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},e.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(t=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(t){this._state=a({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},t),this._callbacks.forEach(t=>t())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(t){return this._callbacks.add(t),()=>{this._callbacks.delete(t)}}constructor(t,e){this._loadFn=t,this._opts=e,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function f(t){return function(t,e){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,ssr:!0},e),a=null;function o(){if(!a){let e=new h(t,r);a={getCurrentValue:e.getCurrentValue.bind(e),subscribe:e.subscribe.bind(e),retry:e.retry.bind(e),promise:e.promise.bind(e)}}return a.promise()}if(r.lazy=n.default.lazy(s(function*(){if(r.ssr&&a){let t=a.getCurrentValue(),e=yield t.loaded;if(e)return e}return yield r.loader()})),!c){let t=r.webpack?r.webpack():r.modules;t&&u.push(e=>{for(let r of t)if(-1!==e.indexOf(r))return o()})}function d(t){!function(){o();let t=n.default.useContext(l.LoadableContext);t&&Array.isArray(r.modules)&&r.modules.forEach(e=>{t(e)})}();let e=r.loading,s=n.default.createElement(e,{isLoading:!0,pastDelay:!0,error:null}),a=r.ssr?n.default.Fragment:i.NoSSR,u=r.lazy;return n.default.createElement(n.default.Suspense,{fallback:s},n.default.createElement(a,null,n.default.createElement(u,Object.assign({},t))))}return d.preload=()=>o(),d.displayName="LoadableComponent",d}(d,t)}function w(t,e){let r=[];for(;t.length;){let s=t.pop();r.push(s(e))}return Promise.all(r).then(()=>{if(t.length)return w(t,e)})}f.preloadAll=()=>new Promise((t,e)=>{w(o).then(t,e)}),f.preloadReady=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(e=>{let r=()=>(c=!0,e());w(u,t).then(r,r)})},window.__NEXT_PRELOADREADY=f.preloadReady,e.default=f},62274:function(t,e,r){"use strict";var s=r(85893),a=r(86010),n=r(50897);let i=t=>{let{className:e,pages:r,currentPage:i,showTitle:l,title:o}=t;return(0,s.jsxs)("div",{className:(0,a.Z)("page-title-area tw-relative",l&&"tw-pt-15 tw-pb-10 md:tw-pt-20 md:tw-pb-15 lg:tw-pt-[100px] lg:tw-pb-20",!l&&"tw-pb-10 md:tw-pb-15 lg:tw-pb-20",e),children:[l&&(0,s.jsx)("div",{className:"tw-container",children:(0,s.jsx)("h1",{className:"title tw-capitalize tw-mt-5 tw-mb-0 tw-text-3xl md:tw-text-4xl lg:tw-text-5xl tw-text-center",children:o||i})}),!l&&(0,s.jsx)("h1",{className:"tw-sr-only",children:o||i}),(0,s.jsx)("div",{className:(0,a.Z)("page-breadcrumb tw-top-0 tw-left-0 tw-w-full",l&&"tw-absolute"),children:(0,s.jsx)("nav",{className:"tw-container","aria-label":"breadcrumbs",children:(0,s.jsxs)("ul",{className:"breadcrumb tw-flex tw-flex-wrap tw-py-3",children:[r.map(t=>{let{path:e,label:r}=t;return(0,s.jsx)("li",{className:"tw-text-md first:before:tw-hidden before:tw-content-['/'] before:tw-mx-3.8 before:tw-color-body",children:(0,s.jsx)(n.Z,{path:e,className:"tw-text-body tw-capitalize tw-relative before:tw-absolute before:tw-content-[''] before:-tw-bottom-1.5 before:tw-right-0 before:tw-w-0 before:tw-h-px before:tw-transition-all before:tw-bg-heading hover:tw-text-heading hover:before:tw-left-0 hover:before:tw-w-full",children:r})},r)}),(0,s.jsx)("li",{className:"tw-text-md tw-capitalize tw-text-heading first:before:tw-hidden before:tw-content-['/'] before:tw-mx-3.8 before:tw-color-body","aria-current":"page",children:i})]})})})]})};i.defaultProps={showTitle:!0},e.Z=i},20599:function(t,e,r){"use strict";var s=r(85893),a=r(67294),n=r(11163),i=r(86010),l=r(29552);let o=(0,a.forwardRef)((t,e)=>{let{className:r,bg:o}=t,[u,c]=(0,a.useState)(""),d=(0,n.useRouter)(),h=t=>{t.preventDefault(),u&&d.push({pathname:"/courses/search",query:{s:u}},void 0,{scroll:!1})};return(0,s.jsxs)("form",{className:(0,i.Z)("tw-relative",r),ref:e,onSubmit:h,children:[(0,s.jsx)("label",{htmlFor:"search",className:"tw-sr-only",children:"Search For"}),(0,s.jsx)(l.Z,{id:"search",name:"search",type:"text",placeholder:"Search...",bg:o,className:(0,i.Z)("tw-max-h-[48px] tw-pr-[50px]"),value:u,onChange:t=>c(t.target.value)}),(0,s.jsx)("button",{type:"submit","aria-label":"Search",className:"tw-absolute tw-right-0 tw-top-0 tw-w-12 tw-h-12 tw-rounded-tr tw-rounded-br tw-transition-colors tw-text-primary tw-flex tw-justify-center tw-items-center hover:tw-bg-primary hover:tw-text-white",children:(0,s.jsx)("i",{className:"fas fa-search"})})]})});e.Z=o},29309:function(t,e,r){"use strict";var s=r(85893),a=r(67294),n=r(2962),i=r(49842);let l=t=>{let{title:e,description:r,template:l,openGraph:o,jsonLdType:u,article:c,image:d,instructor:h}=t,[f,w]=(0,a.useState)("");(0,a.useEffect)(()=>{w(window.location.href)},[]);let m="article"===u&&{type:"article",...c,images:[{url:d,width:800,height:600,alt:e},{url:d,width:900,height:800,alt:e}]};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.PB,{title:e,titleTemplate:l?"".concat(e," - ").concat(l):i.Z.titleTemplate,description:r,openGraph:{url:f,title:e,description:r,...o,...m}}),"article"===u&&c&&(0,s.jsx)(n.dX,{type:"Blog",url:f,title:e,images:[d],datePublished:c.publishedTime,dateModified:c.modifiedTime,authorName:c.authors[0],description:r}),"course"===u&&h&&(0,s.jsx)(n.Iv,{courseName:e,description:"Introductory CS course laying out the basics.",provider:{name:h.name,url:f}})]})};l.defaultProps={template:i.Z.name},e.Z=l},49637:function(t,e,r){"use strict";var s=r(85893),a=r(86010);let n=t=>{let{space:e,bg:r,className:n,style:i,children:l}=t;return(0,s.jsx)("section",{className:(0,a.Z)(n,"top-bottom"===e&&"tw-py-15 md:tw-py-20 lg:tw-py-[100px]","top-bottom-2"===e&&"tw-py-15 md:tw-py-20 lg:tw-pt-[100px] lg:tw-pb-40","top-bottom-3"===e&&"tw-pt-[150px] tw-pb-15 md:tw-pt-[170px] md:tw-pb-20 lg:tw-pt-[190px] lg:tw-pb-[100px]","top"===e&&"tw-pt-15 md:tw-pt-20 lg:tw-pt-[100px]","top-2"===e&&"tw-pt-[150px] md:tw-pt-[170px] lg:tw-pt-[320px]","bottom"===e&&"tw-pb-15 md:tw-pb-20 lg:tw-pb-[100px]","bottom-2"===e&&"tw-mb-[70px]","bottom-3"===e&&"tw-pb-15 md:tw-pb-20 lg:tw-pb-[100px] xl:tw-pb-[160px]",r),style:i,children:l})};n.defaultProps={space:"top-bottom"},e.Z=n},23947:function(t,e,r){"use strict";var s=r(85893);let a=()=>(0,s.jsx)("div",{className:"tw-bg-primary tw-w-10 tw-h-10 tw-my-10 tw-mx-auto tw-animate-[rotatePlane_1.2s_infinite_ease-in-out]"});e.Z=a},15967:function(t,e,r){"use strict";r.d(e,{Z:function(){return _}});var s=r(85893),a=r(9121),n=r(67294),i=r(11163),l=r(5152),o=r.n(l),u=r(86010),c=r(26569),d=r(20599),h=r(36285),f=r(62361),w=r(50897),m=r(34977),p=r(27542);let b=o()(()=>Promise.all([r.e(78053),r.e(15504)]).then(r.bind(r,15504)),{loadableGenerated:{webpack:()=>[15504]},ssr:!1}),x=o()(()=>Promise.all([r.e(78053),r.e(84895)]).then(r.bind(r,45065)),{loadableGenerated:{webpack:()=>[45065]},ssr:!1}),g=t=>{let{shadow:e,fluid:r,transparent:a,mode:l}=t,o=(0,i.useRouter)(),[g,y]=(0,n.useState)(!1),[v,_]=(0,n.useState)(!1),{sticky:j,measuredRef:N}=(0,p.Ax)();return(0,n.useEffect)(()=>{_(!1)},[o]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("header",{className:(0,u.Z)("header",!a&&"tw-relative",a&&"tw-absolute tw-inset-0 tw-bottom-auto tw-bg-transparent"),children:[(0,s.jsx)("div",{ref:N,className:(0,u.Z)("header-inner tw-py-[19px] xl:tw-py-0 tw-z-50 tw-transition-all tw-left-0 tw-top-0 tw-w-full tw-h-auto",!j&&"tw-absolute",j&&"tw-fixed tw-shadow-3md tw-shadow-black/10 tw-animate-headerSlideDown",e&&"tw-shadow-sm tw-shadow-black/5",!a&&"tw-bg-white",a&&!j&&"tw-bg-transparent",a&&j&&"tw-bg-white",a&&j&&"light"===l&&"tw-bg-black"),children:(0,s.jsxs)("div",{className:(0,u.Z)("tw-container tw-grid tw-grid-flow-col xl:tw-grid-cols-[22%_minmax(56%,_1fr)_22%] tw-items-center",r&&"tw-max-w-full tw-px-3.8 3xl:tw-px-37"),children:[(0,s.jsx)(c.Z,{variant:l,className:"tw-max-w-[120px] sm:tw-max-w-[158px]"}),(0,s.jsx)(h.Z,{className:"tw-hidden xl:tw-block",align:"center",menu:m.Z,color:l}),(0,s.jsxs)("div",{className:"tw-flex tw-justify-end tw-items-center",children:[(0,s.jsx)(w.Z,{path:"/profile",className:(0,u.Z)("tw-inline-block tw-px-2.5 tw-py-1.5","light"===l&&"tw-text-white hover:tw-text-white","dark"===l&&"tw-text-dark-50"),"aria-label":"User Profile",children:(0,s.jsx)("i",{className:"far fa-user-circle tw-text-lg"})}),(0,s.jsx)("div",{className:"tw-hidden md:tw-block md:tw-max-w-[250px] md:tw-pl-2.5",children:(0,s.jsx)(d.Z,{bg:a?"white":"light"})}),(0,s.jsxs)("div",{className:"md:tw-hidden tw-overflow-hidden",children:[(0,s.jsx)("button",{type:"button",className:(0,u.Z)("tw-inline-block tw-px-2.5 tw-py-1.5 md:tw-hidden","light"===l&&"tw-text-white","dark"===l&&"tw-text-dark-50"),onClick:()=>y(t=>!t),"aria-label":"Search Toggle",children:(0,s.jsx)("i",{className:"far fa-search tw-text-lg"})}),(0,s.jsx)(x,{show:g,onClose:()=>y(!1)})]}),(0,s.jsx)(f.Z,{className:"tw-pl-5 xl:tw-hidden",onClick:()=>_(!0),color:l,label:"Toggle Menu"})]})]})}),(0,s.jsx)("div",{className:"tw-h-20"})]}),(0,s.jsx)(b,{isOpen:v,onClose:()=>_(!1),menu:m.Z})]})};g.defaultProps={fluid:!0,mode:"dark"};var y=r(66298);let v=t=>{let{children:e,headerShadow:r,headerFluid:n,headerMode:i,headerTransparent:l,footerMode:o}=t;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(g,{shadow:r,fluid:n,transparent:l,mode:i}),(0,s.jsx)("main",{className:"tw-relative",children:e}),(0,s.jsx)(y.Z,{mode:o}),(0,s.jsx)(a.Z,{})]})};var _=v},93120:function(t,e,r){"use strict";r.r(e),r.d(e,{__N_SSG:function(){return p},default:function(){return b}});var s=r(85893),a=r(67294),n=r(29309),i=r(11163),l=r(15967),o=r(62274),u=r(49637),c=r(51819);let d=()=>(0,s.jsx)(u.Z,{className:"profile-area",space:"bottom",children:(0,s.jsxs)("div",{className:"tw-container tw-grid tw-grid-cols-1 md:tw-grid-cols-12 tw-gap-7.5 tw-items-start lg:tw-items-center",children:[(0,s.jsx)("figure",{className:"tw-col-span-full md:tw-col-span-6 xl:tw-col-span-5",children:(0,s.jsx)("img",{className:"tw-w-full",src:"/images/profile/profile.jpeg",alt:"profile",width:470,height:470})}),(0,s.jsxs)("div",{className:"tw-col-span-full md:tw-col-[7/-1]",children:[(0,s.jsx)("h2",{className:"tw-mb-0 tw-leading-[1.42]",children:"Maggie Strickland"}),(0,s.jsx)("h3",{className:"tw-font-normal tw-text-body tw-text-h6 tw-leading-relaxed tw-mb-0",children:"/Advanced Educator"}),(0,s.jsx)("p",{className:"tw-mb-0 tw-mt-3.8",children:"Maggie is a brilliant educator, whose life was spent for computer science and love of nature. Being a female, she encountered a lot of obstacles and was forbidden to work in this field by her family. With a true spirit and talented gift, she was able to succeed and set an example for others."}),(0,s.jsx)("h4",{className:"tw-text-h5 tw-mt-9 tw-mb-2.5",children:"Contact"}),(0,s.jsxs)("div",{className:"contact-info-text",children:[(0,s.jsxs)("span",{className:"phone",children:["Phone number:"," ",(0,s.jsx)("strong",{className:"tw-text-heading",children:"(+88) - 1990 - 8668"})," "]}),(0,s.jsx)("br",{}),(0,s.jsxs)("span",{className:"email",children:["Email:"," ",(0,s.jsx)("strong",{className:"tw-text-heading",children:"maggiestrickland.instructor@gmail.com"})]})]}),(0,s.jsxs)(c.Z,{shape:"circle",variant:"outlined",color:"light",className:"tw-mt-7.5",children:[(0,s.jsx)(c.I,{href:"https://twitter.com",label:"twitter link",className:"tw-mr-3",children:(0,s.jsx)("i",{className:"fab fa-twitter"})}),(0,s.jsx)(c.I,{href:"https://facebook.com",label:"facebook link",className:"tw-mr-3",children:(0,s.jsx)("i",{className:"fab fa-facebook-f"})}),(0,s.jsx)(c.I,{href:"https://instagram.com",label:"instagram link",className:"tw-mr-3",children:(0,s.jsx)("i",{className:"fab fa-instagram"})}),(0,s.jsx)(c.I,{href:"https://pinterest.com",label:"pinterest link",className:"tw-mr-3",children:(0,s.jsx)("i",{className:"fab fa-pinterest"})}),(0,s.jsx)(c.I,{href:"https://youtube.com",label:"youtube link",className:"tw-mr-3",children:(0,s.jsx)("i",{className:"fab fa-youtube"})})]})]})]})});var h=r(23947),f=r(51697),w=r(27542);let m=()=>{let t=(0,w.b6)(),{isLoggedIn:e}=(0,f.aF)(),r=(0,i.useRouter)();return((0,a.useEffect)(()=>{e||r.push("/login-register")},[e,r]),t)?e?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.Z,{title:"Profile"}),(0,s.jsx)(o.Z,{pages:[{path:"/",label:"home"}],currentPage:"Profile",showTitle:!1}),(0,s.jsx)(d,{})]}):(0,s.jsx)("div",{className:"tw-fixed tw-bg-light-100 tw-top-0 tw-z-50 tw-w-screen tw-h-screen tw-flex tw-justify-center tw-items-center",children:(0,s.jsx)(h.Z,{})}):null};m.Layout=l.Z;var p=!0,b=m},5152:function(t,e,r){t.exports=r(37645)}},function(t){t.O(0,[29331,9809,49774,92888,40179],function(){return t(t.s=56896)}),_N_E=t.O()}]);