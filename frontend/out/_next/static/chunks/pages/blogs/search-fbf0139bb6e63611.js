(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[27952],{27484:function(t){var e,r,i,n,a,s,o,l,d,u,c,w,h,f,p,m,b,y,x,g,v;t.exports=(e="millisecond",r="second",i="minute",n="hour",a="week",s="month",o="quarter",l="year",d="date",u="Invalid Date",c=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,w=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(t,e,r){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(r)+t},(p={})[f="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||"th")+"]"}},m=function(t){return t instanceof g},b=function t(e,r,i){var n;if(!e)return f;if("string"==typeof e){var a=e.toLowerCase();p[a]&&(n=a),r&&(p[a]=r,n=a);var s=e.split("-");if(!n&&s.length>1)return t(s[0])}else{var o=e.name;p[o]=e,n=o}return!i&&n&&(f=n),n||!i&&f},y=function(t,e){if(m(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new g(r)},(x={s:h,z:function(t){var e=-t.utcOffset(),r=Math.abs(e);return(e<=0?"+":"-")+h(Math.floor(r/60),2,"0")+":"+h(r%60,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var i=12*(r.year()-e.year())+(r.month()-e.month()),n=e.clone().add(i,s),a=r-n<0,o=e.clone().add(i+(a?-1:1),s);return+(-(i+(r-n)/(a?n-o:o-n))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return({M:s,y:l,w:a,d:"day",D:d,h:n,m:i,s:r,ms:e,Q:o})[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}}).l=b,x.i=m,x.w=function(t,e){return y(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})},v=(g=function(){function t(t){this.$L=b(t.locale,null,!0),this.parse(t)}var h=t.prototype;return h.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(x.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(c);if(i){var n=i[2]-1||0,a=(i[7]||"0").substring(0,3);return r?new Date(Date.UTC(i[1],n,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)):new Date(i[1],n,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},h.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},h.$utils=function(){return x},h.isValid=function(){return this.$d.toString()!==u},h.isSame=function(t,e){var r=y(t);return this.startOf(e)<=r&&r<=this.endOf(e)},h.isAfter=function(t,e){return y(t)<this.startOf(e)},h.isBefore=function(t,e){return this.endOf(e)<y(t)},h.$g=function(t,e,r){return x.u(t)?this[e]:this.set(r,t)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(t,e){var o=this,u=!!x.u(e)||e,c=x.p(t),w=function(t,e){var r=x.w(o.$u?Date.UTC(o.$y,e,t):new Date(o.$y,e,t),o);return u?r:r.endOf("day")},h=function(t,e){return x.w(o.toDate()[t].apply(o.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(e)),o)},f=this.$W,p=this.$M,m=this.$D,b="set"+(this.$u?"UTC":"");switch(c){case l:return u?w(1,0):w(31,11);case s:return u?w(1,p):w(0,p+1);case a:var y=this.$locale().weekStart||0,g=(f<y?f+7:f)-y;return w(u?m-g:m+(6-g),p);case"day":case d:return h(b+"Hours",0);case n:return h(b+"Minutes",1);case i:return h(b+"Seconds",2);case r:return h(b+"Milliseconds",3);default:return this.clone()}},h.endOf=function(t){return this.startOf(t,!1)},h.$set=function(t,a){var o,u=x.p(t),c="set"+(this.$u?"UTC":""),w=((o={}).day=c+"Date",o[d]=c+"Date",o[s]=c+"Month",o[l]=c+"FullYear",o[n]=c+"Hours",o[i]=c+"Minutes",o[r]=c+"Seconds",o[e]=c+"Milliseconds",o)[u],h="day"===u?this.$D+(a-this.$W):a;if(u===s||u===l){var f=this.clone().set(d,1);f.$d[w](h),f.init(),this.$d=f.set(d,Math.min(this.$D,f.daysInMonth())).$d}else w&&this.$d[w](h);return this.init(),this},h.set=function(t,e){return this.clone().$set(t,e)},h.get=function(t){return this[x.p(t)]()},h.add=function(t,e){var o,d=this;t=Number(t);var u=x.p(e),c=function(e){var r=y(d);return x.w(r.date(r.date()+Math.round(e*t)),d)};if(u===s)return this.set(s,this.$M+t);if(u===l)return this.set(l,this.$y+t);if("day"===u)return c(1);if(u===a)return c(7);var w=((o={})[i]=6e4,o[n]=36e5,o[r]=1e3,o)[u]||1,h=this.$d.getTime()+t*w;return x.w(h,this)},h.subtract=function(t,e){return this.add(-1*t,e)},h.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||u;var i=t||"YYYY-MM-DDTHH:mm:ssZ",n=x.z(this),a=this.$H,s=this.$m,o=this.$M,l=r.weekdays,d=r.months,c=function(t,r,n,a){return t&&(t[r]||t(e,i))||n[r].slice(0,a)},h=function(t){return x.s(a%12||12,t,"0")},f=r.meridiem||function(t,e,r){var i=t<12?"AM":"PM";return r?i.toLowerCase():i},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:x.s(o+1,2,"0"),MMM:c(r.monthsShort,o,d,3),MMMM:c(d,o),D:this.$D,DD:x.s(this.$D,2,"0"),d:String(this.$W),dd:c(r.weekdaysMin,this.$W,l,2),ddd:c(r.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(a),HH:x.s(a,2,"0"),h:h(1),hh:h(2),a:f(a,s,!0),A:f(a,s,!1),m:String(s),mm:x.s(s,2,"0"),s:String(this.$s),ss:x.s(this.$s,2,"0"),SSS:x.s(this.$ms,3,"0"),Z:n};return i.replace(w,function(t,e){return e||p[t]||n.replace(":","")})},h.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},h.diff=function(t,e,d){var u,c=x.p(e),w=y(t),h=(w.utcOffset()-this.utcOffset())*6e4,f=this-w,p=x.m(this,w);return p=((u={})[l]=p/12,u[s]=p,u[o]=p/3,u[a]=(f-h)/6048e5,u.day=(f-h)/864e5,u[n]=f/36e5,u[i]=f/6e4,u[r]=f/1e3,u)[c]||f,d?p:x.a(p)},h.daysInMonth=function(){return this.endOf(s).$D},h.$locale=function(){return p[this.$L]},h.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),i=b(t,e,!0);return i&&(r.$L=i),r},h.clone=function(){return x.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},t}()).prototype,y.prototype=v,[["$ms",e],["$s",r],["$m",i],["$H",n],["$W","day"],["$M",s],["$y",l],["$D",d]].forEach(function(t){v[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),y.extend=function(t,e){return t.$i||(t(e,g,y),t.$i=!0),y},y.locale=b,y.isDayjs=m,y.unix=function(t){return y(1e3*t)},y.en=p[f],y.Ls=p,y.p={},y)},73304:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs/search",function(){return r(2629)}])},54564:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.suspense=function(){let t=Error(i.NEXT_DYNAMIC_NO_SSR_CODE);throw t.digest=i.NEXT_DYNAMIC_NO_SSR_CODE,t},e.NoSSR=function(t){let{children:e}=t;return e},(0,r(92648).Z)(r(67294));var i=r(92983)},37645:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){let r=a.default,n={loading:t=>{let{error:e,isLoading:r,pastDelay:i}=t;return null}};t instanceof Promise?n.loader=()=>t:"function"==typeof t?n.loader=t:"object"==typeof t&&(n=i({},n,t)),n=i({},n,e);let o=n.loader,l=()=>null!=o?o().then(s):Promise.resolve(s(()=>null));return n.loadableGenerated&&delete(n=i({},n,n.loadableGenerated)).loadableGenerated,"boolean"!=typeof n.ssr||n.ssr||(delete n.webpack,delete n.modules),r(i({},n,{loader:l}))};var i=r(6495).Z,n=r(92648).Z;n(r(67294));var a=n(r(14588));function s(t){return{default:(null==t?void 0:t.default)||t}}("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},33644:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.LoadableContext=void 0;var i=(0,r(92648).Z)(r(67294));let n=i.default.createContext(null);e.LoadableContext=n},14588:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(60932).Z,n=r(6495).Z,a=(0,r(92648).Z)(r(67294)),s=r(54564),o=r(33644);let l=[],d=[],u=!1;function c(t){let e=t(),r={loading:!0,loaded:null,error:null};return r.promise=e.then(t=>(r.loading=!1,r.loaded=t,t)).catch(t=>{throw r.loading=!1,r.error=t,t}),r}class w{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:t,_opts:e}=this;t.loading&&("number"==typeof e.delay&&(0===e.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},e.delay)),"number"==typeof e.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},e.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(t=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(t){this._state=n({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},t),this._callbacks.forEach(t=>t())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(t){return this._callbacks.add(t),()=>{this._callbacks.delete(t)}}constructor(t,e){this._loadFn=t,this._opts=e,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function h(t){return function(t,e){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,ssr:!0},e),n=null;function l(){if(!n){let e=new w(t,r);n={getCurrentValue:e.getCurrentValue.bind(e),subscribe:e.subscribe.bind(e),retry:e.retry.bind(e),promise:e.promise.bind(e)}}return n.promise()}if(r.lazy=a.default.lazy(i(function*(){if(r.ssr&&n){let t=n.getCurrentValue(),e=yield t.loaded;if(e)return e}return yield r.loader()})),!u){let t=r.webpack?r.webpack():r.modules;t&&d.push(e=>{for(let r of t)if(-1!==e.indexOf(r))return l()})}function c(t){!function(){l();let t=a.default.useContext(o.LoadableContext);t&&Array.isArray(r.modules)&&r.modules.forEach(e=>{t(e)})}();let e=r.loading,i=a.default.createElement(e,{isLoading:!0,pastDelay:!0,error:null}),n=r.ssr?a.default.Fragment:s.NoSSR,d=r.lazy;return a.default.createElement(a.default.Suspense,{fallback:i},a.default.createElement(n,null,a.default.createElement(d,Object.assign({},t))))}return c.preload=()=>l(),c.displayName="LoadableComponent",c}(c,t)}function f(t,e){let r=[];for(;t.length;){let i=t.pop();r.push(i(e))}return Promise.all(r).then(()=>{if(t.length)return f(t,e)})}h.preloadAll=()=>new Promise((t,e)=>{f(l).then(t,e)}),h.preloadReady=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(e=>{let r=()=>(u=!0,e());f(d,t).then(r,r)})},window.__NEXT_PRELOADREADY=h.preloadReady,e.default=h},39944:function(t,e,r){"use strict";var i=r(85893),n=r(67294),a=r(86010),s=r(50897);let o=(0,n.forwardRef)((t,e)=>{let{className:r,image:n,path:o,title:l,category:d,postedAt:u,views:c}=t;return(0,i.jsxs)("div",{className:(0,a.Z)("blog-card tw-group",r),ref:e,children:[(0,i.jsxs)("div",{className:"tw-relative tw-overflow-hidden tw-rounded tw-h-[250px]",children:[(null==n?void 0:n.src)&&(0,i.jsx)("figure",{className:"tw-transition-transform tw-duration-1500 tw-h-full group-hover:tw-scale-110",children:(0,i.jsx)("img",{className:"tw-w-full tw-h-full tw-object-cover",src:n.src,alt:(null==n?void 0:n.alt)||"Event",width:n.width||480,height:n.height||250,loading:n.loading||"lazy"})}),(0,i.jsx)(s.Z,{className:"link-overlay",path:o,children:l})]}),(0,i.jsxs)("div",{className:"info tw-pt-[26px]",children:[(0,i.jsx)("div",{className:"tw-text-base tw-font-medium tw-uppercase -tw-tracking-tightest tw-leading-[1.4] tw-mb-1.5",children:(0,i.jsx)(s.Z,{path:d.path,className:"tw-text-inherit",children:d.title})}),(0,i.jsx)("h3",{className:"tw-mb-0 tw-leading-normal",children:(0,i.jsx)(s.Z,{path:o,children:l})}),(0,i.jsxs)("ul",{className:"tw-flex tw-gap-7 tw-text-gray-300 tw-text-md",children:[(0,i.jsxs)("li",{className:"tw-mt-3.8 tw-mb-0",children:[(0,i.jsx)("i",{className:"far fa-calendar tw-mr-2.5"}),u]}),(0,i.jsxs)("li",{className:"tw-mt-3.8",children:[(0,i.jsx)("i",{className:"far fa-eye tw-mr-2.5"}),c," views"]})]})]})]})});e.Z=o},62274:function(t,e,r){"use strict";var i=r(85893),n=r(86010),a=r(50897);let s=t=>{let{className:e,pages:r,currentPage:s,showTitle:o,title:l}=t;return(0,i.jsxs)("div",{className:(0,n.Z)("page-title-area tw-relative",o&&"tw-pt-15 tw-pb-10 md:tw-pt-20 md:tw-pb-15 lg:tw-pt-[100px] lg:tw-pb-20",!o&&"tw-pb-10 md:tw-pb-15 lg:tw-pb-20",e),children:[o&&(0,i.jsx)("div",{className:"tw-container",children:(0,i.jsx)("h1",{className:"title tw-capitalize tw-mt-5 tw-mb-0 tw-text-3xl md:tw-text-4xl lg:tw-text-5xl tw-text-center",children:l||s})}),!o&&(0,i.jsx)("h1",{className:"tw-sr-only",children:l||s}),(0,i.jsx)("div",{className:(0,n.Z)("page-breadcrumb tw-top-0 tw-left-0 tw-w-full",o&&"tw-absolute"),children:(0,i.jsx)("nav",{className:"tw-container","aria-label":"breadcrumbs",children:(0,i.jsxs)("ul",{className:"breadcrumb tw-flex tw-flex-wrap tw-py-3",children:[r.map(t=>{let{path:e,label:r}=t;return(0,i.jsx)("li",{className:"tw-text-md first:before:tw-hidden before:tw-content-['/'] before:tw-mx-3.8 before:tw-color-body",children:(0,i.jsx)(a.Z,{path:e,className:"tw-text-body tw-capitalize tw-relative before:tw-absolute before:tw-content-[''] before:-tw-bottom-1.5 before:tw-right-0 before:tw-w-0 before:tw-h-px before:tw-transition-all before:tw-bg-heading hover:tw-text-heading hover:before:tw-left-0 hover:before:tw-w-full",children:r})},r)}),(0,i.jsx)("li",{className:"tw-text-md tw-capitalize tw-text-heading first:before:tw-hidden before:tw-content-['/'] before:tw-mx-3.8 before:tw-color-body","aria-current":"page",children:s})]})})})]})};s.defaultProps={showTitle:!0},e.Z=s},20599:function(t,e,r){"use strict";var i=r(85893),n=r(67294),a=r(11163),s=r(86010),o=r(29552);let l=(0,n.forwardRef)((t,e)=>{let{className:r,bg:l}=t,[d,u]=(0,n.useState)(""),c=(0,a.useRouter)(),w=t=>{t.preventDefault(),d&&c.push({pathname:"/courses/search",query:{s:d}},void 0,{scroll:!1})};return(0,i.jsxs)("form",{className:(0,s.Z)("tw-relative",r),ref:e,onSubmit:w,children:[(0,i.jsx)("label",{htmlFor:"search",className:"tw-sr-only",children:"Search For"}),(0,i.jsx)(o.Z,{id:"search",name:"search",type:"text",placeholder:"Search...",bg:l,className:(0,s.Z)("tw-max-h-[48px] tw-pr-[50px]"),value:d,onChange:t=>u(t.target.value)}),(0,i.jsx)("button",{type:"submit","aria-label":"Search",className:"tw-absolute tw-right-0 tw-top-0 tw-w-12 tw-h-12 tw-rounded-tr tw-rounded-br tw-transition-colors tw-text-primary tw-flex tw-justify-center tw-items-center hover:tw-bg-primary hover:tw-text-white",children:(0,i.jsx)("i",{className:"fas fa-search"})})]})});e.Z=l},29309:function(t,e,r){"use strict";var i=r(85893),n=r(67294),a=r(2962),s=r(49842);let o=t=>{let{title:e,description:r,template:o,openGraph:l,jsonLdType:d,article:u,image:c,instructor:w}=t,[h,f]=(0,n.useState)("");(0,n.useEffect)(()=>{f(window.location.href)},[]);let p="article"===d&&{type:"article",...u,images:[{url:c,width:800,height:600,alt:e},{url:c,width:900,height:800,alt:e}]};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.PB,{title:e,titleTemplate:o?"".concat(e," - ").concat(o):s.Z.titleTemplate,description:r,openGraph:{url:h,title:e,description:r,...l,...p}}),"article"===d&&u&&(0,i.jsx)(a.dX,{type:"Blog",url:h,title:e,images:[c],datePublished:u.publishedTime,dateModified:u.modifiedTime,authorName:u.authors[0],description:r}),"course"===d&&w&&(0,i.jsx)(a.Iv,{courseName:e,description:"Introductory CS course laying out the basics.",provider:{name:w.name,url:h}})]})};o.defaultProps={template:s.Z.name},e.Z=o},64887:function(t,e,r){"use strict";var i=r(85893),n=r(86010),a=r(50897);let s=t=>{let{children:e,type:r,variant:s,color:o,size:l,shape:d,fullwidth:u,active:c,disabled:w,iconButton:h,label:f,className:p,path:m,onClick:b,hover:y}=t,x=!w&&!c&&"light"===y&&"hover:tw-bg-white hover:tw-border-white hover:tw-text-primary",g=(0,n.Z)("texted"!==s&&"tw-font-bold tw-justify-center tw-items-center tw-border tw-border-solid tw-rounded-md tw-transition-colors tw-min-w-max","texted"!==s&&!u&&"tw-inline-flex","contained"===s&&["primary"===o&&["tw-bg-primary tw-border-primary tw-text-white",!w&&!c&&"default"===y&&"hover:tw-bg-secondary hover:tw-border-secondary hover:tw-text-white",!w&&c&&"tw-bg-secondary tw-border-secondary active:tw-bg-secondary active:tw-border-secondary",x],"light"===o&&["tw-bg-light tw-border-light tw-text-heading",!w&&!c&&"default"===y&&"hover:tw-bg-primary hover:tw-border-primary hover:tw-text-white",!w&&c&&"tw-bg-primary tw-border-primary active:tw-bg-primary active:tw-border-primary",x]],"outlined"===s&&["primary"===o&&["tw-bg-transparent tw-border-primary tw-text-primary",!w&&!c&&"default"===y&&"hover:tw-bg-primary hover:tw-text-white",!w&&c&&"default"===y&&"tw-bg-primary tw-border-primary tw-text-white active:tw-bg-primary active:tw-bg-primary",x],"light"===o&&["tw-border-light tw-text-light",!w&&!c&&"default"===y&&"hover:tw-bg-primary hover:tw-border-primary hover:tw-text-white",!w&&c&&"tw-bg-primary tw-border-primary active:tw-bg-primary active:tw-border-primary",x]],!h&&"texted"!==s&&["md"===l&&"tw-text-md tw-px-7 tw-py-1 tw-min-h-[48px] md:tw-min-h-[52px] md:tw-px-10","xs"===l&&"tw-text-[13px] tw-px-5 tw-leading-[30px] tw-min-h-8"],"tw-rounded"===d&&"tw-rounded-md","ellipse"===d&&"tw-rounded-full",u&&"tw-flex tw-w-full",p);return m?(0,i.jsx)(a.Z,{path:m,className:g,onClick:b,"aria-label":f,children:e}):(0,i.jsx)("button",{type:r,className:g,onClick:b,"aria-label":f,children:e})};s.defaultProps={type:"button",variant:"contained",color:"primary",size:"md",shape:"square",fullwidth:!1,active:!1,disabled:!1,iconButton:!1,hover:"default"},s.displayName="Button",e.Z=s},49637:function(t,e,r){"use strict";var i=r(85893),n=r(86010);let a=t=>{let{space:e,bg:r,className:a,style:s,children:o}=t;return(0,i.jsx)("section",{className:(0,n.Z)(a,"top-bottom"===e&&"tw-py-15 md:tw-py-20 lg:tw-py-[100px]","top-bottom-2"===e&&"tw-py-15 md:tw-py-20 lg:tw-pt-[100px] lg:tw-pb-40","top-bottom-3"===e&&"tw-pt-[150px] tw-pb-15 md:tw-pt-[170px] md:tw-pb-20 lg:tw-pt-[190px] lg:tw-pb-[100px]","top"===e&&"tw-pt-15 md:tw-pt-20 lg:tw-pt-[100px]","top-2"===e&&"tw-pt-[150px] md:tw-pt-[170px] lg:tw-pt-[320px]","bottom"===e&&"tw-pb-15 md:tw-pb-20 lg:tw-pb-[100px]","bottom-2"===e&&"tw-mb-[70px]","bottom-3"===e&&"tw-pb-15 md:tw-pb-20 lg:tw-pb-[100px] xl:tw-pb-[160px]",r),style:s,children:o})};a.defaultProps={space:"top-bottom"},e.Z=a},23947:function(t,e,r){"use strict";var i=r(85893);let n=()=>(0,i.jsx)("div",{className:"tw-bg-primary tw-w-10 tw-h-10 tw-my-10 tw-mx-auto tw-animate-[rotatePlane_1.2s_infinite_ease-in-out]"});e.Z=n},15967:function(t,e,r){"use strict";r.d(e,{Z:function(){return v}});var i=r(85893),n=r(9121),a=r(67294),s=r(11163),o=r(5152),l=r.n(o),d=r(86010),u=r(26569),c=r(20599),w=r(36285),h=r(62361),f=r(34977),p=r(27542);let m=l()(()=>Promise.all([r.e(78053),r.e(15504)]).then(r.bind(r,15504)),{loadableGenerated:{webpack:()=>[15504]},ssr:!1}),b=l()(()=>Promise.all([r.e(78053),r.e(84895)]).then(r.bind(r,45065)),{loadableGenerated:{webpack:()=>[45065]},ssr:!1}),y=t=>{let{shadow:e,fluid:r,transparent:n,mode:o}=t,l=(0,s.useRouter)(),[y,x]=(0,a.useState)(!1),[g,v]=(0,a.useState)(!1),{sticky:_,measuredRef:j}=(0,p.Ax)();return(0,a.useEffect)(()=>{v(!1)},[l]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("header",{className:(0,d.Z)("header",!n&&"tw-relative",n&&"tw-absolute tw-inset-0 tw-bottom-auto tw-bg-transparent"),children:[(0,i.jsx)("div",{ref:j,className:(0,d.Z)("header-inner tw-py-[19px] xl:tw-py-0 tw-z-50 tw-transition-all tw-left-0 tw-top-0 tw-w-full tw-h-auto",!_&&"tw-absolute",_&&"tw-fixed tw-shadow-3md tw-shadow-black/10 tw-animate-headerSlideDown",e&&"tw-shadow-sm tw-shadow-black/5",!n&&"tw-bg-white",n&&!_&&"tw-bg-transparent",n&&_&&"tw-bg-white",n&&_&&"light"===o&&"tw-bg-black"),children:(0,i.jsxs)("div",{className:(0,d.Z)("tw-container tw-grid tw-grid-flow-col xl:tw-grid-cols-[22%_minmax(56%,_1fr)_22%] tw-items-center",r&&"tw-max-w-full tw-px-3.8 3xl:tw-px-37"),children:[(0,i.jsx)(u.Z,{variant:o,className:"tw-max-w-[120px] sm:tw-max-w-[158px]"}),(0,i.jsx)(w.Z,{className:"tw-hidden xl:tw-block",align:"center",menu:f.Z,color:o}),(0,i.jsxs)("div",{className:"tw-flex tw-justify-end tw-items-center",children:[(0,i.jsx)("div",{className:"tw-hidden md:tw-block md:tw-max-w-[250px] md:tw-pl-2.5",children:(0,i.jsx)(c.Z,{bg:n?"white":"light"})}),(0,i.jsxs)("div",{className:"md:tw-hidden tw-overflow-hidden",children:[(0,i.jsx)("button",{type:"button",className:(0,d.Z)("tw-inline-block tw-px-2.5 tw-py-1.5 md:tw-hidden","light"===o&&"tw-text-white","dark"===o&&"tw-text-dark-50"),onClick:()=>x(t=>!t),"aria-label":"Search Toggle",children:(0,i.jsx)("i",{className:"far fa-search tw-text-lg"})}),(0,i.jsx)(b,{show:y,onClose:()=>x(!1)})]}),(0,i.jsx)(h.Z,{className:"tw-pl-5 xl:tw-hidden",onClick:()=>v(!0),color:o,label:"Toggle Menu"})]})]})}),(0,i.jsx)("div",{className:"tw-h-20"})]}),(0,i.jsx)(m,{isOpen:g,onClose:()=>v(!1),menu:f.Z})]})};y.defaultProps={fluid:!0,mode:"dark"};var x=r(66298);let g=t=>{let{children:e,headerShadow:r,headerFluid:a,headerMode:s,headerTransparent:o,footerMode:l}=t;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(y,{shadow:r,fluid:a,transparent:o,mode:s}),(0,i.jsx)("main",{className:"tw-relative",children:e}),(0,i.jsx)(x.Z,{mode:l}),(0,i.jsx)(n.Z,{})]})};var v=g},2629:function(t,e,r){"use strict";r.r(e),r.d(e,{__N_SSG:function(){return x},default:function(){return g}});var i=r(85893),n=r(67294),a=r(11163),s=r(29309),o=r(23947),l=r(15967),d=r(62274),u=r(78053),c=r(49637),w=r(39944),h=r(64887),f=r(68945),p=r(27542);let m=(0,u.E)(w.Z),b=t=>{let{data:{blogs:e}}=t,{hasMore:r,itemsToShow:n,handlerLoadMore:a}=(0,p.BR)(e,6,3);return(0,i.jsxs)(c.Z,{className:"blog-area",space:"bottom",children:[(0,i.jsx)("h2",{className:"tw-sr-only",children:"Blog Section"}),(0,i.jsx)("div",{className:"tw-container",children:e.length>0?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-[30px]",children:null==n?void 0:n.map(t=>(0,i.jsx)(m,{image:t.image,title:t.title,path:t.path,category:t.category,postedAt:t.postedAt,views:t.views,initial:"offscreen",whileInView:"onscreen",viewport:{once:!0,amount:.2},variants:f.sQ},t.path))}),(0,i.jsx)("div",{className:"tw-text-center tw-mt-[50px]",children:r?(0,i.jsxs)(h.Z,{variant:"outlined",className:"tw-min-w-[250px] tw-border-gray-500",onClick:a,children:["Load More"," ",(0,i.jsx)("i",{className:"fas fa-redo tw-ml-4"})]}):(0,i.jsx)("p",{children:"No course to show"})})]}):(0,i.jsx)("h6",{children:"No Blog found"})})]})},y=t=>{let{data:e}=t,[r,l]=(0,n.useState)(!0),[u,c]=(0,n.useState)([]),w=(0,a.useRouter)(),{s:h}=w.query,f=(0,n.useCallback)(()=>{if(h){var t;let r=h.toLowerCase(),i=null===(t=e.blogs)||void 0===t?void 0:t.filter(t=>{let{title:e,category:i,content:n}=t;return e.toLowerCase().includes(r)||i.title===r||n.toLowerCase().includes(r)});c(i)}},[e.blogs,h]);if((0,n.useEffect)(()=>{f(),l(!1)},[f]),r)return(0,i.jsx)("div",{className:"tw-w-full tw-h-screen tw-flex tw-justify-center tw-items-center",children:(0,i.jsx)(o.Z,{})});let p=h?"Search results for: ".concat(h):"Search";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.Z,{title:p}),(0,i.jsx)(d.Z,{pages:[{path:"/",label:"home"}],currentPage:p}),(0,i.jsx)(b,{data:{blogs:u}})]})};y.Layout=l.Z;var x=!0,g=y},68945:function(t,e,r){"use strict";r.d(e,{Fc:function(){return n},It:function(){return w},Ji:function(){return s},Uh:function(){return a},Zd:function(){return u},eu:function(){return o},oz:function(){return c},qX:function(){return d},sQ:function(){return i},vl:function(){return l}});let i={offscreen:{opacity:0,y:30},onscreen:{opacity:1,y:0,transition:{type:"spring",duration:1}}},n={offscreen:{opacity:0,x:-100},onscreen:{opacity:1,x:0,transition:{type:"spring",duration:1}}},a={offscreen:{opacity:0,x:100},onscreen:{opacity:1,x:0,transition:{type:"spring",duration:1}}},s={hidden:{y:"-100vh",opacity:0},visible:{y:"0",opacity:1,transition:{duration:.8,type:"tween"}},exit:{y:"-100vh",opacity:0,transition:{duration:.4,type:"tween"}}},o={hidden:{y:"100%",opacity:0},visible:{y:"0",opacity:1,transition:{duration:.5,type:"tween"}},exit:{y:"100%",opacity:0,transition:{duration:.5,type:"tween"}}},l={hidden:{opacity:0},visible:{y:0,opacity:1,transition:{duration:.4,type:"spring"}},exit:{opacity:0,transition:{duration:.4,type:"spring"}}},d={visible:{opacity:1,top:"60px",transition:{duration:.5,type:"tween"}},hidden:{opacity:0,top:"80px",transition:{duration:.5,type:"tween"}}},u={visible:{opacity:1,transition:{delay:.3,duration:.3}},hidden:{opacity:0,transition:{duration:.2}}},c={hidden:{opacity:0,transition:{duration:.5,type:"tween",when:"afterChildren"}},visible:{opacity:1,transition:{duration:.4,type:"tween",when:"beforeChildren"}}},w={hidden:{opacity:0,y:50,transition:{duration:.4,type:"tween"}},visible:{opacity:1,y:0,transition:{duration:.4,type:"tween"}}}},5152:function(t,e,r){t.exports=r(37645)}},function(t){t.O(0,[29331,78053,9809,49774,92888,40179],function(){return t(t.s=73304)}),_N_E=t.O()}]);