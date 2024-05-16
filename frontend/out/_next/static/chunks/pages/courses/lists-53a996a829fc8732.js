(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[25150],{27484:function(t){var e,n,r,i,s,a,o,l,u,d,c,f,h,w,p,m,b,y,g,x,_;t.exports=(e="millisecond",n="second",r="minute",i="hour",s="week",a="month",o="quarter",l="year",u="date",d="Invalid Date",c=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},(p={})[w="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||"th")+"]"}},m=function(t){return t instanceof x},b=function t(e,n,r){var i;if(!e)return w;if("string"==typeof e){var s=e.toLowerCase();p[s]&&(i=s),n&&(p[s]=n,i=s);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var o=e.name;p[o]=e,i=o}return!r&&i&&(w=i),i||!r&&w},y=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new x(n)},(g={s:h,z:function(t){var e=-t.utcOffset(),n=Math.abs(e);return(e<=0?"+":"-")+h(Math.floor(n/60),2,"0")+":"+h(n%60,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,a),s=n-i<0,o=e.clone().add(r+(s?-1:1),a);return+(-(r+(n-i)/(s?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return({M:a,y:l,w:s,d:"day",D:u,h:i,m:r,s:n,ms:e,Q:o})[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}}).l=b,g.i=m,g.w=function(t,e){return y(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})},_=(x=function(){function t(t){this.$L=b(t.locale,null,!0),this.parse(t)}var h=t.prototype;return h.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(c);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},h.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},h.$utils=function(){return g},h.isValid=function(){return this.$d.toString()!==d},h.isSame=function(t,e){var n=y(t);return this.startOf(e)<=n&&n<=this.endOf(e)},h.isAfter=function(t,e){return y(t)<this.startOf(e)},h.isBefore=function(t,e){return this.endOf(e)<y(t)},h.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(t,e){var o=this,d=!!g.u(e)||e,c=g.p(t),f=function(t,e){var n=g.w(o.$u?Date.UTC(o.$y,e,t):new Date(o.$y,e,t),o);return d?n:n.endOf("day")},h=function(t,e){return g.w(o.toDate()[t].apply(o.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),o)},w=this.$W,p=this.$M,m=this.$D,b="set"+(this.$u?"UTC":"");switch(c){case l:return d?f(1,0):f(31,11);case a:return d?f(1,p):f(0,p+1);case s:var y=this.$locale().weekStart||0,x=(w<y?w+7:w)-y;return f(d?m-x:m+(6-x),p);case"day":case u:return h(b+"Hours",0);case i:return h(b+"Minutes",1);case r:return h(b+"Seconds",2);case n:return h(b+"Milliseconds",3);default:return this.clone()}},h.endOf=function(t){return this.startOf(t,!1)},h.$set=function(t,s){var o,d=g.p(t),c="set"+(this.$u?"UTC":""),f=((o={}).day=c+"Date",o[u]=c+"Date",o[a]=c+"Month",o[l]=c+"FullYear",o[i]=c+"Hours",o[r]=c+"Minutes",o[n]=c+"Seconds",o[e]=c+"Milliseconds",o)[d],h="day"===d?this.$D+(s-this.$W):s;if(d===a||d===l){var w=this.clone().set(u,1);w.$d[f](h),w.init(),this.$d=w.set(u,Math.min(this.$D,w.daysInMonth())).$d}else f&&this.$d[f](h);return this.init(),this},h.set=function(t,e){return this.clone().$set(t,e)},h.get=function(t){return this[g.p(t)]()},h.add=function(t,e){var o,u=this;t=Number(t);var d=g.p(e),c=function(e){var n=y(u);return g.w(n.date(n.date()+Math.round(e*t)),u)};if(d===a)return this.set(a,this.$M+t);if(d===l)return this.set(l,this.$y+t);if("day"===d)return c(1);if(d===s)return c(7);var f=((o={})[r]=6e4,o[i]=36e5,o[n]=1e3,o)[d]||1,h=this.$d.getTime()+t*f;return g.w(h,this)},h.subtract=function(t,e){return this.add(-1*t,e)},h.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=g.z(this),s=this.$H,a=this.$m,o=this.$M,l=n.weekdays,u=n.months,c=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},h=function(t){return g.s(s%12||12,t,"0")},w=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:g.s(o+1,2,"0"),MMM:c(n.monthsShort,o,u,3),MMMM:c(u,o),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,l,2),ddd:c(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(s),HH:g.s(s,2,"0"),h:h(1),hh:h(2),a:w(s,a,!0),A:w(s,a,!1),m:String(a),mm:g.s(a,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:i};return r.replace(f,function(t,e){return e||p[t]||i.replace(":","")})},h.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},h.diff=function(t,e,u){var d,c=g.p(e),f=y(t),h=(f.utcOffset()-this.utcOffset())*6e4,w=this-f,p=g.m(this,f);return p=((d={})[l]=p/12,d[a]=p,d[o]=p/3,d[s]=(w-h)/6048e5,d.day=(w-h)/864e5,d[i]=w/36e5,d[r]=w/6e4,d[n]=w/1e3,d)[c]||w,u?p:g.a(p)},h.daysInMonth=function(){return this.endOf(a).$D},h.$locale=function(){return p[this.$L]},h.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=b(t,e,!0);return r&&(n.$L=r),n},h.clone=function(){return g.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},t}()).prototype,y.prototype=_,[["$ms",e],["$s",n],["$m",r],["$H",i],["$W","day"],["$M",a],["$y",l],["$D",u]].forEach(function(t){_[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),y.extend=function(t,e){return t.$i||(t(e,x,y),t.$i=!0),y},y.locale=b,y.isDayjs=m,y.unix=function(t){return y(1e3*t)},y.en=p[w],y.Ls=p,y.p={},y)},78868:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/courses/lists",function(){return n(44177)}])},54564:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.suspense=function(){let t=Error(r.NEXT_DYNAMIC_NO_SSR_CODE);throw t.digest=r.NEXT_DYNAMIC_NO_SSR_CODE,t},e.NoSSR=function(t){let{children:e}=t;return e},(0,n(92648).Z)(n(67294));var r=n(92983)},37645:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){let n=s.default,i={loading:t=>{let{error:e,isLoading:n,pastDelay:r}=t;return null}};t instanceof Promise?i.loader=()=>t:"function"==typeof t?i.loader=t:"object"==typeof t&&(i=r({},i,t)),i=r({},i,e);let o=i.loader,l=()=>null!=o?o().then(a):Promise.resolve(a(()=>null));return i.loadableGenerated&&delete(i=r({},i,i.loadableGenerated)).loadableGenerated,"boolean"!=typeof i.ssr||i.ssr||(delete i.webpack,delete i.modules),n(r({},i,{loader:l}))};var r=n(6495).Z,i=n(92648).Z;i(n(67294));var s=i(n(14588));function a(t){return{default:(null==t?void 0:t.default)||t}}("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},33644:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.LoadableContext=void 0;var r=(0,n(92648).Z)(n(67294));let i=r.default.createContext(null);e.LoadableContext=i},14588:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(60932).Z,i=n(6495).Z,s=(0,n(92648).Z)(n(67294)),a=n(54564),o=n(33644);let l=[],u=[],d=!1;function c(t){let e=t(),n={loading:!0,loaded:null,error:null};return n.promise=e.then(t=>(n.loading=!1,n.loaded=t,t)).catch(t=>{throw n.loading=!1,n.error=t,t}),n}class f{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:t,_opts:e}=this;t.loading&&("number"==typeof e.delay&&(0===e.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},e.delay)),"number"==typeof e.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},e.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(t=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(t){this._state=i({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},t),this._callbacks.forEach(t=>t())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(t){return this._callbacks.add(t),()=>{this._callbacks.delete(t)}}constructor(t,e){this._loadFn=t,this._opts=e,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function h(t){return function(t,e){let n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,ssr:!0},e),i=null;function l(){if(!i){let e=new f(t,n);i={getCurrentValue:e.getCurrentValue.bind(e),subscribe:e.subscribe.bind(e),retry:e.retry.bind(e),promise:e.promise.bind(e)}}return i.promise()}if(n.lazy=s.default.lazy(r(function*(){if(n.ssr&&i){let t=i.getCurrentValue(),e=yield t.loaded;if(e)return e}return yield n.loader()})),!d){let t=n.webpack?n.webpack():n.modules;t&&u.push(e=>{for(let n of t)if(-1!==e.indexOf(n))return l()})}function c(t){!function(){l();let t=s.default.useContext(o.LoadableContext);t&&Array.isArray(n.modules)&&n.modules.forEach(e=>{t(e)})}();let e=n.loading,r=s.default.createElement(e,{isLoading:!0,pastDelay:!0,error:null}),i=n.ssr?s.default.Fragment:a.NoSSR,u=n.lazy;return s.default.createElement(s.default.Suspense,{fallback:r},s.default.createElement(i,null,s.default.createElement(u,Object.assign({},t))))}return c.preload=()=>l(),c.displayName="LoadableComponent",c}(c,t)}function w(t,e){let n=[];for(;t.length;){let r=t.pop();n.push(r(e))}return Promise.all(n).then(()=>{if(t.length)return w(t,e)})}h.preloadAll=()=>new Promise((t,e)=>{w(l).then(t,e)}),h.preloadReady=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(e=>{let n=()=>(d=!0,e());w(u,t).then(n,n)})},window.__NEXT_PRELOADREADY=h.preloadReady,e.default=h},62274:function(t,e,n){"use strict";var r=n(85893),i=n(86010),s=n(50897);let a=t=>{let{className:e,pages:n,currentPage:a,showTitle:o,title:l}=t;return(0,r.jsxs)("div",{className:(0,i.Z)("page-title-area tw-relative",o&&"tw-pt-15 tw-pb-10 md:tw-pt-20 md:tw-pb-15 lg:tw-pt-[100px] lg:tw-pb-20",!o&&"tw-pb-10 md:tw-pb-15 lg:tw-pb-20",e),children:[o&&(0,r.jsx)("div",{className:"tw-container",children:(0,r.jsx)("h1",{className:"title tw-capitalize tw-mt-5 tw-mb-0 tw-text-3xl md:tw-text-4xl lg:tw-text-5xl tw-text-center",children:l||a})}),!o&&(0,r.jsx)("h1",{className:"tw-sr-only",children:l||a}),(0,r.jsx)("div",{className:(0,i.Z)("page-breadcrumb tw-top-0 tw-left-0 tw-w-full",o&&"tw-absolute"),children:(0,r.jsx)("nav",{className:"tw-container","aria-label":"breadcrumbs",children:(0,r.jsxs)("ul",{className:"breadcrumb tw-flex tw-flex-wrap tw-py-3",children:[n.map(t=>{let{path:e,label:n}=t;return(0,r.jsx)("li",{className:"tw-text-md first:before:tw-hidden before:tw-content-['/'] before:tw-mx-3.8 before:tw-color-body",children:(0,r.jsx)(s.Z,{path:e,className:"tw-text-body tw-capitalize tw-relative before:tw-absolute before:tw-content-[''] before:-tw-bottom-1.5 before:tw-right-0 before:tw-w-0 before:tw-h-px before:tw-transition-all before:tw-bg-heading hover:tw-text-heading hover:before:tw-left-0 hover:before:tw-w-full",children:n})},n)}),(0,r.jsx)("li",{className:"tw-text-md tw-capitalize tw-text-heading first:before:tw-hidden before:tw-content-['/'] before:tw-mx-3.8 before:tw-color-body","aria-current":"page",children:a})]})})})]})};a.defaultProps={showTitle:!0},e.Z=a},67621:function(t,e,n){"use strict";var r=n(85893),i=n(67294),s=n(86010),a=n(50897);let o=(0,i.forwardRef)((t,e)=>{let{className:n,thumbnail:i,title:o,path:l,total_lectures:u}=t;return(0,r.jsxs)("div",{className:(0,s.Z)("course-card tw-flex tw-flex-wrap sm:tw-flex-nowrap sm:tw-items-center tw-h-full tw-p-5 tw-rounded tw-bg-white tw-relative","before:tw-absolute before:tw-content-[''] before:tw-inset-0 before:tw-shadow-4md before:tw-shadow-black/5 before:tw-rounded-b before:tw-transition-opacity before:tw-opacity-0","hover:before:tw-opacity-100",n),ref:e,children:[(0,r.jsxs)("div",{className:"tw-relative tw-z-1 tw-flex tw-overflow-hidden tw-rounded-full tw-w-[170px] tw-min-w-[170px] tw-h-[170px]",children:[(null==i?void 0:i.src)&&(0,r.jsx)("img",{className:"tw-w-full tw-h-full tw-object-cover",src:i.src,alt:(null==i?void 0:i.alt)||"Course",width:(null==i?void 0:i.width)||170,height:(null==i?void 0:i.height)||170,loading:(null==i?void 0:i.loading)||"lazy"}),(0,r.jsx)(a.Z,{path:l,className:"link-overlay",children:o})]}),(0,r.jsxs)("div",{className:"info tw-z-1 tw-mt-5 sm:tw-mt-0 sm:tw-pl-7.5",children:[(0,r.jsx)("h3",{className:"tw-text-xl tw-leading-normal tw-mb-0",children:(0,r.jsx)(a.Z,{path:l,children:o})}),(0,r.jsx)("ul",{className:"tw-text-sm sm:tw-text-md tw-flex tw-flex-wrap tw-mt-2.5 ",children:u&&(0,r.jsxs)("li",{className:"tw-mr-7",children:[(0,r.jsx)("i",{className:"far fa-file-alt tw-mr-2.5"}),u," Lessons"]})})]})]})});e.Z=o},47453:function(t,e,n){"use strict";var r=n(85893),i=n(67294),s=n(86010);let a=(0,i.forwardRef)((t,e)=>{let{className:n,title:i,subtitle:a,description:o,align:l,color:u,titleSize:d,subtitleClass:c,titleClass:f,descClass:h}=t;return(0,r.jsxs)("div",{className:(0,s.Z)("section-title tw-relative tw-z-20","center"===l&&"tw-text-center",n),ref:e,children:[a&&(0,r.jsx)("span",{className:(0,s.Z)("tw-font-medium tw-text-base tw-leading-none -tw-tracking-tightest tw-block tw-mb-2.5 tw-uppercase","A"===u&&"tw-text-secondary-light","B"===u&&"tw-text-secondary",c),dangerouslySetInnerHTML:{__html:a}}),(0,r.jsx)("h2",{className:(0,s.Z)("title tw-m-0 child:tw-text-primary child:tw-font-normal","A"===u&&"tw-text-secondary","C"===u&&"tw-text-white","large"===d&&"tw-text-4xl lg:tw-text-5xl tw-leading-heading lg:tw-leading-heading",f),dangerouslySetInnerHTML:{__html:i}}),o&&(0,r.jsx)("p",{className:(0,s.Z)("tw-mb-0 tw-mt-[25px] tw-font-medium",h,"C"===u&&"tw-text-white"),dangerouslySetInnerHTML:{__html:o}})]})});a.defaultProps={align:"center",color:"A"},e.Z=a},49637:function(t,e,n){"use strict";var r=n(85893),i=n(86010);let s=t=>{let{space:e,bg:n,className:s,style:a,children:o}=t;return(0,r.jsx)("section",{className:(0,i.Z)(s,"top-bottom"===e&&"tw-py-15 md:tw-py-20 lg:tw-py-[100px]","top-bottom-2"===e&&"tw-py-15 md:tw-py-20 lg:tw-pt-[100px] lg:tw-pb-40","top-bottom-3"===e&&"tw-pt-[150px] tw-pb-15 md:tw-pt-[170px] md:tw-pb-20 lg:tw-pt-[190px] lg:tw-pb-[100px]","top"===e&&"tw-pt-15 md:tw-pt-20 lg:tw-pt-[100px]","top-2"===e&&"tw-pt-[150px] md:tw-pt-[170px] lg:tw-pt-[320px]","bottom"===e&&"tw-pb-15 md:tw-pb-20 lg:tw-pb-[100px]","bottom-2"===e&&"tw-mb-[70px]","bottom-3"===e&&"tw-pb-15 md:tw-pb-20 lg:tw-pb-[100px] xl:tw-pb-[160px]",n),style:a,children:o})};s.defaultProps={space:"top-bottom"},e.Z=s},89033:function(t,e,n){"use strict";var r=n(85893),i=n(12451),s=n(49637),a=n(47453),o=n(67621),l=n(68945);let u=(0,i.E)(a.Z),d=(0,i.E)(o.Z),c=t=>{let{data:{section_title:e,courses:n},space:i,bg:a,titleSize:o}=t;return(0,r.jsx)(s.Z,{className:"course-area",space:i,bg:a,children:(0,r.jsxs)("div",{className:"tw-container",children:[e&&(0,r.jsx)(u,{...e,titleSize:o,className:"tw-mb-7.5 md:tw-mb-15",initial:"offscreen",whileInView:"onscreen",viewport:{once:!0,amount:.4},variants:l.sQ}),(0,r.jsx)("div",{className:"tw-grid lg:tw-grid-cols-2 tw-gap-7.5",children:n.map(t=>(0,r.jsx)(d,{title:t.title,path:t.path,thumbnail:t.thumbnail,price:t.price,currency:t.currency,total_lectures:t.total_lectures,total_students:t.total_students,initial:"offscreen",whileInView:"onscreen",viewport:{once:!0,amount:.4},variants:l.sQ},t.path))})]})})};c.defaultProps={space:"top-bottom",bg:"tw-bg-white-catskill"},e.Z=c},44177:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return u}});var r=n(85893),i=n(29309),s=n(6825),a=n(62274),o=n(89033);let l=t=>{let{data:e}=t;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{title:"Courses we offer"}),(0,r.jsx)(a.Z,{pages:[{path:"/",label:"home"}],currentPage:"Courses"}),(0,r.jsx)(o.Z,{data:{courses:e.courses}})]})};l.Layout=s.Z;var u=!0;e.default=l},68945:function(t,e,n){"use strict";n.d(e,{Ji:function(){return i},Zd:function(){return a},qX:function(){return s},sQ:function(){return r}});let r={offscreen:{opacity:0,y:30},onscreen:{opacity:1,y:0,transition:{type:"spring",duration:1}}},i={hidden:{y:"-100vh",opacity:0},visible:{y:"0",opacity:1,transition:{duration:.8,type:"tween"}},exit:{y:"-100vh",opacity:0,transition:{duration:.4,type:"tween"}}},s={visible:{opacity:1,top:"60px",transition:{duration:.5,type:"tween"}},hidden:{opacity:0,top:"80px",transition:{duration:.5,type:"tween"}}},a={visible:{opacity:1,transition:{delay:.3,duration:.3}},hidden:{opacity:0,transition:{duration:.2}}}},5152:function(t,e,n){t.exports=n(37645)}},function(t){t.O(0,[29331,12451,27332,49774,92888,40179],function(){return t(t.s=78868)}),_N_E=t.O()}]);