(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[47558],{27484:function(t){var e,r,n,i,a,s,l,o,u,d,c,h,f,w,m,p,b,y,g,x,v;t.exports=(e="millisecond",r="second",n="minute",i="hour",a="week",s="month",l="quarter",o="year",u="date",d="Invalid Date",c=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},(m={})[w="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||"th")+"]"}},p=function(t){return t instanceof x},b=function t(e,r,n){var i;if(!e)return w;if("string"==typeof e){var a=e.toLowerCase();m[a]&&(i=a),r&&(m[a]=r,i=a);var s=e.split("-");if(!i&&s.length>1)return t(s[0])}else{var l=e.name;m[l]=e,i=l}return!n&&i&&(w=i),i||!n&&w},y=function(t,e){if(p(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new x(r)},(g={s:f,z:function(t){var e=-t.utcOffset(),r=Math.abs(e);return(e<=0?"+":"-")+f(Math.floor(r/60),2,"0")+":"+f(r%60,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),i=e.clone().add(n,s),a=r-i<0,l=e.clone().add(n+(a?-1:1),s);return+(-(n+(r-i)/(a?i-l:l-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return({M:s,y:o,w:a,d:"day",D:u,h:i,m:n,s:r,ms:e,Q:l})[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}}).l=b,g.i=p,g.w=function(t,e){return y(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})},v=(x=function(){function t(t){this.$L=b(t.locale,null,!0),this.parse(t)}var f=t.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(c);if(n){var i=n[2]-1||0,a=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return g},f.isValid=function(){return this.$d.toString()!==d},f.isSame=function(t,e){var r=y(t);return this.startOf(e)<=r&&r<=this.endOf(e)},f.isAfter=function(t,e){return y(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<y(t)},f.$g=function(t,e,r){return g.u(t)?this[e]:this.set(r,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,e){var l=this,d=!!g.u(e)||e,c=g.p(t),h=function(t,e){var r=g.w(l.$u?Date.UTC(l.$y,e,t):new Date(l.$y,e,t),l);return d?r:r.endOf("day")},f=function(t,e){return g.w(l.toDate()[t].apply(l.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),l)},w=this.$W,m=this.$M,p=this.$D,b="set"+(this.$u?"UTC":"");switch(c){case o:return d?h(1,0):h(31,11);case s:return d?h(1,m):h(0,m+1);case a:var y=this.$locale().weekStart||0,x=(w<y?w+7:w)-y;return h(d?p-x:p+(6-x),m);case"day":case u:return f(b+"Hours",0);case i:return f(b+"Minutes",1);case n:return f(b+"Seconds",2);case r:return f(b+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(t,a){var l,d=g.p(t),c="set"+(this.$u?"UTC":""),h=((l={}).day=c+"Date",l[u]=c+"Date",l[s]=c+"Month",l[o]=c+"FullYear",l[i]=c+"Hours",l[n]=c+"Minutes",l[r]=c+"Seconds",l[e]=c+"Milliseconds",l)[d],f="day"===d?this.$D+(a-this.$W):a;if(d===s||d===o){var w=this.clone().set(u,1);w.$d[h](f),w.init(),this.$d=w.set(u,Math.min(this.$D,w.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[g.p(t)]()},f.add=function(t,e){var l,u=this;t=Number(t);var d=g.p(e),c=function(e){var r=y(u);return g.w(r.date(r.date()+Math.round(e*t)),u)};if(d===s)return this.set(s,this.$M+t);if(d===o)return this.set(o,this.$y+t);if("day"===d)return c(1);if(d===a)return c(7);var h=((l={})[n]=6e4,l[i]=36e5,l[r]=1e3,l)[d]||1,f=this.$d.getTime()+t*h;return g.w(f,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||d;var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=g.z(this),a=this.$H,s=this.$m,l=this.$M,o=r.weekdays,u=r.months,c=function(t,r,i,a){return t&&(t[r]||t(e,n))||i[r].slice(0,a)},f=function(t){return g.s(a%12||12,t,"0")},w=r.meridiem||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:g.s(l+1,2,"0"),MMM:c(r.monthsShort,l,u,3),MMMM:c(u,l),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:c(r.weekdaysMin,this.$W,o,2),ddd:c(r.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(a),HH:g.s(a,2,"0"),h:f(1),hh:f(2),a:w(a,s,!0),A:w(a,s,!1),m:String(s),mm:g.s(s,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:i};return n.replace(h,function(t,e){return e||m[t]||i.replace(":","")})},f.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},f.diff=function(t,e,u){var d,c=g.p(e),h=y(t),f=(h.utcOffset()-this.utcOffset())*6e4,w=this-h,m=g.m(this,h);return m=((d={})[o]=m/12,d[s]=m,d[l]=m/3,d[a]=(w-f)/6048e5,d.day=(w-f)/864e5,d[i]=w/36e5,d[n]=w/6e4,d[r]=w/1e3,d)[c]||w,u?m:g.a(m)},f.daysInMonth=function(){return this.endOf(s).$D},f.$locale=function(){return m[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=b(t,e,!0);return n&&(r.$L=n),r},f.clone=function(){return g.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},t}()).prototype,y.prototype=v,[["$ms",e],["$s",r],["$m",n],["$H",i],["$W","day"],["$M",s],["$y",o],["$D",u]].forEach(function(t){v[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),y.extend=function(t,e){return t.$i||(t(e,x,y),t.$i=!0),y},y.locale=b,y.isDayjs=p,y.unix=function(t){return y(1e3*t)},y.en=m[w],y.Ls=m,y.p={},y)},5568:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/zoom-meetings/[slug]",function(){return r(42617)}])},54564:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.suspense=function(){let t=Error(n.NEXT_DYNAMIC_NO_SSR_CODE);throw t.digest=n.NEXT_DYNAMIC_NO_SSR_CODE,t},e.NoSSR=function(t){let{children:e}=t;return e},(0,r(92648).Z)(r(67294));var n=r(92983)},37645:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){let r=a.default,i={loading:t=>{let{error:e,isLoading:r,pastDelay:n}=t;return null}};t instanceof Promise?i.loader=()=>t:"function"==typeof t?i.loader=t:"object"==typeof t&&(i=n({},i,t)),i=n({},i,e);let l=i.loader,o=()=>null!=l?l().then(s):Promise.resolve(s(()=>null));return i.loadableGenerated&&delete(i=n({},i,i.loadableGenerated)).loadableGenerated,"boolean"!=typeof i.ssr||i.ssr||(delete i.webpack,delete i.modules),r(n({},i,{loader:o}))};var n=r(6495).Z,i=r(92648).Z;i(r(67294));var a=i(r(14588));function s(t){return{default:(null==t?void 0:t.default)||t}}("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},33644:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.LoadableContext=void 0;var n=(0,r(92648).Z)(r(67294));let i=n.default.createContext(null);e.LoadableContext=i},14588:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(60932).Z,i=r(6495).Z,a=(0,r(92648).Z)(r(67294)),s=r(54564),l=r(33644);let o=[],u=[],d=!1;function c(t){let e=t(),r={loading:!0,loaded:null,error:null};return r.promise=e.then(t=>(r.loading=!1,r.loaded=t,t)).catch(t=>{throw r.loading=!1,r.error=t,t}),r}class h{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:t,_opts:e}=this;t.loading&&("number"==typeof e.delay&&(0===e.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},e.delay)),"number"==typeof e.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},e.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(t=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(t){this._state=i({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},t),this._callbacks.forEach(t=>t())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(t){return this._callbacks.add(t),()=>{this._callbacks.delete(t)}}constructor(t,e){this._loadFn=t,this._opts=e,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function f(t){return function(t,e){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,ssr:!0},e),i=null;function o(){if(!i){let e=new h(t,r);i={getCurrentValue:e.getCurrentValue.bind(e),subscribe:e.subscribe.bind(e),retry:e.retry.bind(e),promise:e.promise.bind(e)}}return i.promise()}if(r.lazy=a.default.lazy(n(function*(){if(r.ssr&&i){let t=i.getCurrentValue(),e=yield t.loaded;if(e)return e}return yield r.loader()})),!d){let t=r.webpack?r.webpack():r.modules;t&&u.push(e=>{for(let r of t)if(-1!==e.indexOf(r))return o()})}function c(t){!function(){o();let t=a.default.useContext(l.LoadableContext);t&&Array.isArray(r.modules)&&r.modules.forEach(e=>{t(e)})}();let e=r.loading,n=a.default.createElement(e,{isLoading:!0,pastDelay:!0,error:null}),i=r.ssr?a.default.Fragment:s.NoSSR,u=r.lazy;return a.default.createElement(a.default.Suspense,{fallback:n},a.default.createElement(i,null,a.default.createElement(u,Object.assign({},t))))}return c.preload=()=>o(),c.displayName="LoadableComponent",c}(c,t)}function w(t,e){let r=[];for(;t.length;){let n=t.pop();r.push(n(e))}return Promise.all(r).then(()=>{if(t.length)return w(t,e)})}f.preloadAll=()=>new Promise((t,e)=>{w(o).then(t,e)}),f.preloadReady=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(e=>{let r=()=>(d=!0,e());w(u,t).then(r,r)})},window.__NEXT_PRELOADREADY=f.preloadReady,e.default=f},62274:function(t,e,r){"use strict";var n=r(85893),i=r(86010),a=r(50897);let s=t=>{let{className:e,pages:r,currentPage:s,showTitle:l,title:o}=t;return(0,n.jsxs)("div",{className:(0,i.Z)("page-title-area tw-relative",l&&"tw-pt-15 tw-pb-10 md:tw-pt-20 md:tw-pb-15 lg:tw-pt-[100px] lg:tw-pb-20",!l&&"tw-pb-10 md:tw-pb-15 lg:tw-pb-20",e),children:[l&&(0,n.jsx)("div",{className:"tw-container",children:(0,n.jsx)("h1",{className:"title tw-capitalize tw-mt-5 tw-mb-0 tw-text-3xl md:tw-text-4xl lg:tw-text-5xl tw-text-center",children:o||s})}),!l&&(0,n.jsx)("h1",{className:"tw-sr-only",children:o||s}),(0,n.jsx)("div",{className:(0,i.Z)("page-breadcrumb tw-top-0 tw-left-0 tw-w-full",l&&"tw-absolute"),children:(0,n.jsx)("nav",{className:"tw-container","aria-label":"breadcrumbs",children:(0,n.jsxs)("ul",{className:"breadcrumb tw-flex tw-flex-wrap tw-py-3",children:[r.map(t=>{let{path:e,label:r}=t;return(0,n.jsx)("li",{className:"tw-text-md first:before:tw-hidden before:tw-content-['/'] before:tw-mx-3.8 before:tw-color-body",children:(0,n.jsx)(a.Z,{path:e,className:"tw-text-body tw-capitalize tw-relative before:tw-absolute before:tw-content-[''] before:-tw-bottom-1.5 before:tw-right-0 before:tw-w-0 before:tw-h-px before:tw-transition-all before:tw-bg-heading hover:tw-text-heading hover:before:tw-left-0 hover:before:tw-w-full",children:r})},r)}),(0,n.jsx)("li",{className:"tw-text-md tw-capitalize tw-text-heading first:before:tw-hidden before:tw-content-['/'] before:tw-mx-3.8 before:tw-color-body","aria-current":"page",children:s})]})})})]})};s.defaultProps={showTitle:!0},e.Z=s},30651:function(t,e,r){"use strict";var n=r(85893),i=r(86010);let a=t=>{let{body:e,className:r}=t,a=(t,e,s)=>(0,n.jsx)("list"===t?"ul":"ol",{className:(0,i.Z)("list-group",r),children:e.map(t=>"string"==typeof t?(0,n.jsx)("li",{children:t},t):(0,n.jsxs)("li",{children:[t.text," ",a(t.type,t.content,"item-".concat(t.text))]},t.text))},s);return(0,n.jsx)("div",{className:(0,i.Z)("tw-prose prose-h2:tw-text-xl sm:prose-h2:tw-text-4xl sm:prose-h3:tw-text-3xl tw-max-w-none",r),children:e.map(t=>{let{id:e,type:r,content:i}=t;return"text"===r&&"string"==typeof i?(0,n.jsx)("p",{dangerouslySetInnerHTML:{__html:i}},e):("h3"===r||"h4"===r||"h5"===r||"blockquote"===r)&&"string"==typeof i?(0,n.jsx)(r,{dangerouslySetInnerHTML:{__html:i}},e):("order-list"===r||"list"===r)&&Array.isArray(i)?a(r,i,e):("iframe"!==r||"object"!=typeof i||Array.isArray(i)||i.src,null)})})};e.Z=a},64887:function(t,e,r){"use strict";var n=r(85893),i=r(86010),a=r(50897);let s=t=>{let{children:e,type:r,variant:s,color:l,size:o,shape:u,fullwidth:d,active:c,disabled:h,iconButton:f,label:w,className:m,path:p,onClick:b,hover:y}=t,g=!h&&!c&&"light"===y&&"hover:tw-bg-white hover:tw-border-white hover:tw-text-primary",x=(0,i.Z)("texted"!==s&&"tw-font-bold tw-justify-center tw-items-center tw-border tw-border-solid tw-rounded-md tw-transition-colors tw-min-w-max","texted"!==s&&!d&&"tw-inline-flex","contained"===s&&["primary"===l&&["tw-bg-primary tw-border-primary tw-text-white",!h&&!c&&"default"===y&&"hover:tw-bg-secondary hover:tw-border-secondary hover:tw-text-white",!h&&c&&"tw-bg-secondary tw-border-secondary active:tw-bg-secondary active:tw-border-secondary",g],"light"===l&&["tw-bg-light tw-border-light tw-text-heading",!h&&!c&&"default"===y&&"hover:tw-bg-primary hover:tw-border-primary hover:tw-text-white",!h&&c&&"tw-bg-primary tw-border-primary active:tw-bg-primary active:tw-border-primary",g]],"outlined"===s&&["primary"===l&&["tw-bg-transparent tw-border-primary tw-text-primary",!h&&!c&&"default"===y&&"hover:tw-bg-primary hover:tw-text-white",!h&&c&&"default"===y&&"tw-bg-primary tw-border-primary tw-text-white active:tw-bg-primary active:tw-bg-primary",g],"light"===l&&["tw-border-light tw-text-light",!h&&!c&&"default"===y&&"hover:tw-bg-primary hover:tw-border-primary hover:tw-text-white",!h&&c&&"tw-bg-primary tw-border-primary active:tw-bg-primary active:tw-border-primary",g]],!f&&"texted"!==s&&["md"===o&&"tw-text-md tw-px-7 tw-py-1 tw-min-h-[48px] md:tw-min-h-[52px] md:tw-px-10","xs"===o&&"tw-text-[13px] tw-px-5 tw-leading-[30px] tw-min-h-8"],"tw-rounded"===u&&"tw-rounded-md","ellipse"===u&&"tw-rounded-full",d&&"tw-flex tw-w-full",m);return p?(0,n.jsx)(a.Z,{path:p,className:x,onClick:b,"aria-label":w,children:e}):(0,n.jsx)("button",{type:r,className:x,onClick:b,"aria-label":w,children:e})};s.defaultProps={type:"button",variant:"contained",color:"primary",size:"md",shape:"square",fullwidth:!1,active:!1,disabled:!1,iconButton:!1,hover:"default"},s.displayName="Button",e.Z=s},40552:function(t,e,r){"use strict";var n=r(85893),i=r(86010);let a=t=>{let{icon:e,label:r,value:a}=t;return(0,n.jsxs)("div",{className:"tw-flex tw-items-center tw-justify-between tw-py-3.8 tw-border-t tw-border-t-gray-500 first-of-type:tw-border-0",children:[(0,n.jsxs)("h3",{className:"tw-mb-0 tw-text-h6",children:[e&&(0,n.jsx)("i",{className:(0,i.Z)(e,"tw-text-body tw-min-w-[28px] tw-mr-0.5 tw-text-center")}),r]}),(0,n.jsx)("span",{className:"tw-text-right",children:a})]})};e.Z=a},68376:function(t,e,r){"use strict";var n=r(85893);let i=t=>{let{children:e}=t;return(0,n.jsx)("div",{className:"course-info-widget tw-pt-7.5 tw-px-7.5 tw-pb-[33px] tw-bg-white tw-shadow-2sm tw-shadow-heading/10 tw-rounded",children:e})};e.Z=i},42617:function(t,e,r){"use strict";r.r(e),r.d(e,{__N_SSG:function(){return v},default:function(){return _}});var n=r(85893),i=r(29309),a=r(6825),s=r(62274),l=r(64887),o=r(68376),u=r(40552);let d=t=>{let{host:e,date:r,time:i,category:a,duration:s,timezone:d,links:c}=t;return(0,n.jsxs)(o.Z,{children:[(0,n.jsx)("h2",{className:"tw-text-h3",children:"Details"}),(0,n.jsx)(u.Z,{label:"Hosted By",value:e}),(0,n.jsx)(u.Z,{label:"Start",value:"".concat(r," ").concat(i)}),(0,n.jsx)(u.Z,{label:"Category",value:a}),(0,n.jsx)(u.Z,{label:"Duration",value:"".concat(s," Minutes")}),(0,n.jsx)(u.Z,{label:"Timezone",value:d}),(0,n.jsxs)("p",{className:"tw-border-t tw-border-t-gray-500 tw-pt-5",children:[(0,n.jsx)("strong",{className:"tw-text-heading",children:"Note"}),": Countdown time is shown based on your local timezone."]}),(0,n.jsxs)("div",{className:"tw-mt-5",children:[(0,n.jsx)(l.Z,{fullwidth:!0,className:"!tw-px-6",path:c[0],children:"Join Meeting via Zoom App"}),(0,n.jsx)(l.Z,{fullwidth:!0,className:"tw-mt-2.5",path:c[1],children:"Join via Web Browser"})]})]})};var c=r(30651),h=r(86010),f=r(5152),w=r.n(f),m=r(27542);let p=w()(()=>r.e(55729).then(r.bind(r,55729)),{loadableGenerated:{webpack:()=>[55729]},ssr:!1}),b=t=>{let{tragetDate:e,className:r,align:i}=t,[a,s,l,o]=(0,m.au)(e);return(0,n.jsxs)("div",{className:(0,h.Z)("tw-grid tw-grid-cols-2 sm:tw-grid-cols-4 tw-gap-2.5","center"===i&&"tw-mx-auto",r),children:[(0,n.jsx)(p,{value:a,type:"days"}),(0,n.jsx)(p,{value:s,type:"hours"}),(0,n.jsx)(p,{value:l,type:"mins"}),(0,n.jsx)(p,{value:o,type:"secs"})]})};b.defaultProps={align:"center"};let y=t=>{let{host:e,start_date:r,date:i,time:a,category:s,duration:l,timezone:o,thumbnail:u,links:h,body:f}=t;return(0,n.jsx)("div",{className:"zoom-meeting-details tw-pb-15 md:tw-pb-20 lg:tw-pb-[100px]",children:(0,n.jsx)("div",{className:"tw-container",children:(0,n.jsxs)("div",{className:"tw-grid tw-grid-cols-3 tw-gap-10",children:[(0,n.jsxs)("div",{className:"tw-col-span-full lg:tw-col-[1/3]",children:[(null==u?void 0:u.src)&&(0,n.jsx)("figure",{className:"tw-mb-7.5 tw-h-[400px]",children:(0,n.jsx)("img",{src:u.src,alt:(null==u?void 0:u.alt)||"zoom meeting",width:"770",className:"tw-w-full tw-h-full tw-object-cover tw-rounded"})}),(0,n.jsx)(c.Z,{body:f})]}),(0,n.jsxs)("div",{className:"tw-col-span-full lg:tw-col-[3/-1]",children:[(0,n.jsx)(b,{tragetDate:r,className:"tw-mb-[45px]"}),(0,n.jsx)(d,{host:e,date:i,time:a,category:s,duration:l,timezone:o,links:h})]})]})})})};var g=r(96432);let x=t=>{let{data:{zoomMeeting:e}}=t;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Z,{title:(0,g.fp)(e.title),openGraph:{type:"website",images:[{url:"https://maxcoach-react.pages.dev".concat(e.thumbnail.src),width:800,height:600,alt:e.title},{url:"https://maxcoach-react.pages.dev".concat(e.thumbnail.src),width:900,height:800,alt:e.title}]}}),(0,n.jsx)(s.Z,{pages:[{path:"/",label:"home"},{path:"/zoom-meetings",label:"Zoom Meetings and Webinars"}],currentPage:e.title}),(0,n.jsx)(y,{host:e.host,start_date:e.start_date,date:e.date,time:e.time,category:e.category,duration:e.duration,timezone:e.timezone,thumbnail:e.thumbnail,links:e.links,body:e.body})]})};x.Layout=a.Z;var v=!0,_=x},5152:function(t,e,r){t.exports=r(37645)}},function(t){t.O(0,[29331,27332,49774,92888,40179],function(){return t(t.s=5568)}),_N_E=t.O()}]);