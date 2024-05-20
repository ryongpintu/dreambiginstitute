(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[92888],{2962:function(e,t,r){"use strict";r.d(t,{Iv:function(){return O},PB:function(){return h},dX:function(){return A},lX:function(){return m}});var a=r(67294),o=r(9008),n=r.n(o);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}var s=["keyOverride"],p={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},c=function(e,t,r){void 0===t&&(t=[]);var o=void 0===r?{}:r,n=o.defaultWidth,i=o.defaultHeight;return t.reduce(function(t,r,o){return t.push(a.createElement("meta",{key:"og:"+e+":0"+o,property:"og:"+e,content:r.url})),r.alt&&t.push(a.createElement("meta",{key:"og:"+e+":alt0"+o,property:"og:"+e+":alt",content:r.alt})),r.secureUrl&&t.push(a.createElement("meta",{key:"og:"+e+":secure_url0"+o,property:"og:"+e+":secure_url",content:r.secureUrl.toString()})),r.type&&t.push(a.createElement("meta",{key:"og:"+e+":type0"+o,property:"og:"+e+":type",content:r.type.toString()})),r.width?t.push(a.createElement("meta",{key:"og:"+e+":width0"+o,property:"og:"+e+":width",content:r.width.toString()})):n&&t.push(a.createElement("meta",{key:"og:"+e+":width0"+o,property:"og:"+e+":width",content:n.toString()})),r.height?t.push(a.createElement("meta",{key:"og:"+e+":height"+o,property:"og:"+e+":height",content:r.height.toString()})):i&&t.push(a.createElement("meta",{key:"og:"+e+":height"+o,property:"og:"+e+":height",content:i.toString()})),t},[])},d=function(e){var t,r,o,n,d,u=[];e.titleTemplate&&(p.templateTitle=e.titleTemplate);var m="";e.title?(m=e.title,p.templateTitle&&(m=p.templateTitle.replace(/%s/g,function(){return m}))):e.defaultTitle&&(m=e.defaultTitle),m&&u.push(a.createElement("title",{key:"title"},m));var h=e.noindex||p.noindex||e.dangerouslySetAllPagesToNoIndex,f=e.nofollow||p.nofollow||e.dangerouslySetAllPagesToNoFollow,g="";if(e.robotsProps){var y=e.robotsProps,v=y.nosnippet,b=y.maxSnippet,k=y.maxImagePreview,w=y.maxVideoPreview,E=y.noarchive,x=y.noimageindex,G=y.notranslate,O=y.unavailableAfter;g=(v?",nosnippet":"")+(b?",max-snippet:"+b:"")+(k?",max-image-preview:"+k:"")+(E?",noarchive":"")+(O?",unavailable_after:"+O:"")+(x?",noimageindex":"")+(w?",max-video-preview:"+w:"")+(G?",notranslate":"")}if(h||f?(e.dangerouslySetAllPagesToNoIndex&&(p.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(p.nofollow=!0),u.push(a.createElement("meta",{key:"robots",name:"robots",content:(h?"noindex":"index")+","+(f?"nofollow":"follow")+g}))):u.push(a.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+g})),e.description&&u.push(a.createElement("meta",{key:"description",name:"description",content:e.description})),e.themeColor&&u.push(a.createElement("meta",{key:"theme-color",name:"theme-color",content:e.themeColor})),e.mobileAlternate&&u.push(a.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach(function(e){u.push(a.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))}),e.twitter&&(e.twitter.cardType&&u.push(a.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&u.push(a.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&u.push(a.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&u.push(a.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),(null!=(t=e.openGraph)&&t.title||m)&&u.push(a.createElement("meta",{key:"og:title",property:"og:title",content:(null==(n=e.openGraph)?void 0:n.title)||m})),(null!=(r=e.openGraph)&&r.description||e.description)&&u.push(a.createElement("meta",{key:"og:description",property:"og:description",content:(null==(d=e.openGraph)?void 0:d.description)||e.description})),e.openGraph){if((e.openGraph.url||e.canonical)&&u.push(a.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var T=e.openGraph.type.toLowerCase();u.push(a.createElement("meta",{key:"og:type",property:"og:type",content:T})),"profile"===T&&e.openGraph.profile?(e.openGraph.profile.firstName&&u.push(a.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&u.push(a.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&u.push(a.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&u.push(a.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===T&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach(function(e,t){u.push(a.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))}),e.openGraph.book.isbn&&u.push(a.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&u.push(a.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach(function(e,t){u.push(a.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))})):"article"===T&&e.openGraph.article?(e.openGraph.article.publishedTime&&u.push(a.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&u.push(a.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&u.push(a.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach(function(e,t){u.push(a.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))}),e.openGraph.article.section&&u.push(a.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach(function(e,t){u.push(a.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))})):("video.movie"===T||"video.episode"===T||"video.tv_show"===T||"video.other"===T)&&e.openGraph.video&&(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach(function(e,t){e.profile&&u.push(a.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&u.push(a.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))}),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach(function(e,t){u.push(a.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))}),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach(function(e,t){u.push(a.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))}),e.openGraph.video.duration&&u.push(a.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&u.push(a.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach(function(e,t){u.push(a.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))}),e.openGraph.video.series&&u.push(a.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(p.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(p.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&u.push.apply(u,c("image",e.openGraph.images,{defaultWidth:p.defaultOpenGraphImageWidth,defaultHeight:p.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(p.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(p.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&u.push.apply(u,c("video",e.openGraph.videos,{defaultWidth:p.defaultOpenGraphVideoWidth,defaultHeight:p.defaultOpenGraphVideoHeight})),e.openGraph.audio&&u.push.apply(u,c("audio",e.openGraph.audio)),e.openGraph.locale&&u.push(a.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),(e.openGraph.siteName||e.openGraph.site_name)&&u.push(a.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.siteName||e.openGraph.site_name}))}return e.canonical&&u.push(a.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach(function(e){var t,r,o=e.keyOverride,n=l(e,s);u.push(a.createElement("meta",i({key:"meta:"+(null!=(t=null!=(r=null!=o?o:n.name)?r:n.property)?t:n.httpEquiv)},n)))}),null!=(o=e.additionalLinkTags)&&o.length&&e.additionalLinkTags.forEach(function(e){var t;u.push(a.createElement("link",i({key:"link"+(null!=(t=e.keyOverride)?t:e.href)+e.rel},e)))}),u},u=function(e){return a.createElement(n(),null,d(e))},m=function(e){var t=e.title,r=e.titleTemplate,o=e.defaultTitle,n=e.themeColor,i=e.dangerouslySetAllPagesToNoIndex,l=e.dangerouslySetAllPagesToNoFollow,s=e.description,p=e.canonical,c=e.facebook,d=e.openGraph,m=e.additionalMetaTags,h=e.twitter,f=e.defaultOpenGraphImageWidth,g=e.defaultOpenGraphImageHeight,y=e.defaultOpenGraphVideoWidth,v=e.defaultOpenGraphVideoHeight,b=e.mobileAlternate,k=e.languageAlternates,w=e.additionalLinkTags,E=e.robotsProps;return a.createElement(u,{title:t,titleTemplate:r,defaultTitle:o,themeColor:n,dangerouslySetAllPagesToNoIndex:void 0!==i&&i,dangerouslySetAllPagesToNoFollow:void 0!==l&&l,description:s,canonical:p,facebook:c,openGraph:d,additionalMetaTags:m,twitter:h,defaultOpenGraphImageWidth:f,defaultOpenGraphImageHeight:g,defaultOpenGraphVideoWidth:y,defaultOpenGraphVideoHeight:v,mobileAlternate:b,languageAlternates:k,additionalLinkTags:w,robotsProps:E})},h=function(e){var t=e.title,r=e.themeColor,o=e.noindex,n=void 0!==o&&o,i=e.nofollow,l=e.robotsProps,s=e.description,p=e.canonical,c=e.openGraph,m=e.facebook,h=e.twitter,f=e.additionalMetaTags,g=e.titleTemplate,y=e.defaultTitle,v=e.mobileAlternate,b=e.languageAlternates,k=e.additionalLinkTags,w=e.useAppDir;return a.createElement(a.Fragment,null,void 0!==w&&w?d({title:t,themeColor:r,noindex:n,nofollow:i,robotsProps:l,description:s,canonical:p,facebook:m,openGraph:c,additionalMetaTags:f,twitter:h,titleTemplate:g,defaultTitle:y,mobileAlternate:v,languageAlternates:b,additionalLinkTags:k}):a.createElement(u,{title:t,themeColor:r,noindex:n,nofollow:i,robotsProps:l,description:s,canonical:p,facebook:m,openGraph:c,additionalMetaTags:f,twitter:h,titleTemplate:g,defaultTitle:y,mobileAlternate:v,languageAlternates:b,additionalLinkTags:k}))},f=function(e,t){var r=t;return Array.isArray(r)&&1===r.length&&(r=i({},t[0])),{__html:JSON.stringify(Array.isArray(r)?r.map(function(t){return g(e,t)}):g(e,r),k)}},g=function(e,t){var r=t.id,a=i({},(void 0===r?void 0:r)?{"@id":t.id}:{},t);return delete a.id,i({"@context":"https://schema.org","@type":e},a)},y=Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"}),v=RegExp("["+Object.keys(y).join("")+"]","g"),b=function(e){return y[e]},k=function(e,t){switch(typeof t){case"object":if(null===t)return;return t;case"number":case"boolean":case"bigint":return t;case"string":return t.replace(v,b);default:return}},w=["type","keyOverride","scriptKey","scriptId","dataArray","useAppDir"];function E(e){var t=e.type,r=void 0===t?"Thing":t,o=e.keyOverride,s=e.scriptKey,p=e.scriptId,c=void 0===p?void 0:p,d=e.dataArray,u=e.useAppDir,m=l(e,w),h=function(){return a.createElement("script",{type:"application/ld+json",id:c,"data-testid":c,dangerouslySetInnerHTML:f(r,void 0===d?i({},m):d),key:"jsonld-"+s+(o?"-"+o:"")})};return void 0!==u&&u?a.createElement(h,null):a.createElement(n(),null,h())}function x(e){if("string"==typeof e)return{"@type":"Person",name:e};if(e.name){var t;return{"@type":null!=(t=null==e?void 0:e.type)?t:"Person",name:e.name,url:null==e?void 0:e.url}}}var G=["type","keyOverride","courseName","provider"];function O(e){var t=e.type,r=e.keyOverride,o=e.courseName,n=e.provider,s=i({name:o},l(e,G),{provider:function(e){if(e)return{"@type":e.type||"Organization",name:e.name,sameAs:e.url}}(n)});return a.createElement(E,i({type:void 0===t?"Course":t,keyOverride:r},s,{scriptKey:"course"}))}var T=["type","keyOverride","url","title","images","datePublished","dateModified","authorName","publisherName","publisherLogo","description","isAccessibleForFree"];function A(e){var t=e.type,r=e.keyOverride,o=e.url,n=e.title,s=e.images,p=e.datePublished,c=e.dateModified,d=e.authorName,u=e.publisherName,m=e.publisherLogo,h=e.description,f=e.isAccessibleForFree,g=l(e,T),y=i({datePublished:p,description:h,mainEntityOfPage:{"@type":"WebPage","@id":o},headline:n,image:s,dateModified:c||p,author:Array.isArray(d)?d.map(function(e){return x(e)}).filter(function(e){return!!e}):d?x(d):void 0,publisher:function(e,t){if(e)return{"@type":"Organization",name:e,logo:function(e){if(e)return{"@type":"ImageObject",url:e}}(t)}}(void 0===u?void 0:u,void 0===m?void 0:m),isAccessibleForFree:f},g);return a.createElement(E,i({type:void 0===t?"Article":t,keyOverride:r},y,{scriptKey:"article"}))}},6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(77887)}])},80040:function(e,t,r){"use strict";r.d(t,{JP:function(){return i},l8:function(){return l}});var a=r(85893),o=r(67294);let n=(0,o.createContext)({}),i=e=>{let{children:t}=e,[r,i]=(0,o.useState)({x:0,y:0}),l=(0,o.useCallback)(e=>{i({x:e.clientX-window.innerWidth/2,y:e.clientY-window.innerHeight/2})},[]),s=(0,o.useMemo)(()=>()=>({x:-(r.x/15*1),y:-(r.y/15*1)}),[r]),p=(0,o.useMemo)(()=>()=>({x:r.x/15,y:r.y/15}),[r]);(0,o.useEffect)(()=>(window.addEventListener("mousemove",l),()=>{window.removeEventListener("mousemove",l)}),[l]);let c=(0,o.useMemo)(()=>({trans1:s,trans2:p}),[s,p]);return(0,a.jsx)(n.Provider,{value:c,children:t})},l=()=>(0,o.useContext)(n)},51697:function(e,t,r){"use strict";r.d(t,{aF:function(){return u},dr:function(){return d}});var a=r(85893),o=r(67294);let n="maxCourse",i="maxAuth",l=(0,o.createContext)({}),s={isLoggedIn:!1,courseProgress:[]},p=()=>{let e=localStorage.getItem(i),t=localStorage.getItem(n),r=null!==t?JSON.parse(t):[],a=null!==e&&JSON.parse(e);return{...s,isLoggedIn:a,courseProgress:r}};function c(e,t){switch(t.type){case"LOGIN":return localStorage.setItem(i,JSON.stringify(!0)),{...e,isLoggedIn:!0};case"ENROLL_COURSE":{let r=[...e.courseProgress,{course:t.payload.course,currentLesson:t.payload.lessonLink,completedLessons:[]}];return localStorage.setItem(n,JSON.stringify(r)),{...e,courseProgress:r}}case"LESSON_COMPLETE":{let r=e.courseProgress.map(e=>e.course===t.payload.course?{...e,completedLessons:[...e.completedLessons,t.payload.lesson],currentLesson:t.payload.lessonLink}:e);return localStorage.setItem(n,JSON.stringify(r)),{...e,courseProgress:r}}default:return e}}let d=e=>{let{children:t}=e,[r,n]=(0,o.useReducer)(c,s,p),i=(0,o.useMemo)(()=>({...r,setLogin:()=>{n({type:"LOGIN"})},enrolCourse:e=>{n({type:"ENROLL_COURSE",payload:e})},lessonComplete:e=>{n({type:"LESSON_COMPLETE",payload:e})}}),[r]);return(0,a.jsx)(l.Provider,{value:i,children:t})},u=()=>(0,o.useContext)(l)},49842:function(e,t){"use strict";t.Z={name:"DreamBig Institute",titleTemplate:"Software Training Institute",description:"Training se... Job Tak ka Safar"}},77887:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var a=r(85893),o=r(67294),n=r(11163),i=r(2962),l=r(49842);let s=()=>(0,a.jsx)(i.lX,{title:l.Z.name,titleTemplate:"%s - ".concat(l.Z.titleTemplate),defaultTitle:l.Z.name,description:l.Z.description,canonical:"https://idreambig.in/",openGraph:{type:"website",locale:"en_IE",site_name:l.Z.name,images:[{url:"https://idreambig.in/images/about/about-me/about-me-popup-video-poster.jpg",width:800,height:600,alt:"Og Image Alt"},{url:"https://idreambig.in/images/about/about-me/about-me-popup-video-poster.jpg",width:900,height:800,alt:"Og Image Alt Second"}]},facebook:{appId:"61559781692203"},additionalMetaTags:[{name:"viewport",content:"width=device-width, initial-scale=1 maximum-scale=1"},{name:"apple-mobile-web-app-capable",content:"yes"},{name:"theme-color",content:"#ffffff"}],additionalLinkTags:[{rel:"apple-touch-icon",href:"/icons/icon-192x192.png"},{rel:"manifest",href:"/manifest.json"}]}),p=e=>{let{children:t}=e;return(0,a.jsx)("div",{className:"tw-relative",children:t})};r(21023),r(65387),r(18119),r(69188),r(24901);var c=r(4298),d=r.n(c),u=r(86501),m=r(80040),h=r(51697);let f=e=>{let{Component:t,pageProps:r}=e,i=(0,n.useRouter)(),l=t.Layout||p,c="object"==typeof r.layout?r.layout:{};return(0,o.useEffect)(()=>{document.activeElement instanceof HTMLElement&&document.activeElement.blur()},[i]),(0,o.useEffect)(()=>{document.body.className=r.className||""}),(0,a.jsx)(m.JP,{children:(0,a.jsx)(h.dr,{children:(0,a.jsxs)(l,{...c,children:[(0,a.jsx)(d(),{id:"gtm",strategy:"afterInteractive",children:"\n        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','GTM-MVT3ZVC4');\n      "}),(0,a.jsx)(s,{}),(0,a.jsx)(t,{...r}),(0,a.jsx)(u.x7,{})]})})})};var g=f},21023:function(){},65387:function(){},18119:function(){},24901:function(){},69188:function(){},9008:function(e,t,r){e.exports=r(83121)},11163:function(e,t,r){e.exports=r(80880)},4298:function(e,t,r){e.exports=r(63573)},86501:function(e,t,r){"use strict";let a,o;r.d(t,{x7:function(){return eo},ZP:function(){return en}});var n,i=r(67294);let l={data:""},s=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||l,p=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,d=/\n+/g,u=(e,t)=>{let r="",a="",o="";for(let n in e){let i=e[n];"@"==n[0]?"i"==n[1]?r=n+" "+i+";":a+="f"==n[1]?u(i,n):n+"{"+u(i,"k"==n[1]?"":t)+"}":"object"==typeof i?a+=u(i,t?t.replace(/([^,])+/g,e=>n.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=i&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=u.p?u.p(n,i):n+":"+i+";")}return r+(t&&o?t+"{"+o+"}":o)+a},m={},h=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+h(e[r]);return t}return e},f=(e,t,r,a,o)=>{var n,i;let l=h(e),s=m[l]||(m[l]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(l));if(!m[s]){let t=l!==e?e:(e=>{let t,r,a=[{}];for(;t=p.exec(e.replace(c,""));)t[4]?a.shift():t[3]?(r=t[3].replace(d," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(d," ").trim();return a[0]})(e);m[s]=u(o?{["@keyframes "+s]:t}:t,r?"":"."+s)}let f=r&&m.g?m.g:null;return r&&(m.g=m[s]),n=m[s],i=t,f?i.data=i.data.replace(f,n):-1===i.data.indexOf(n)&&(i.data=a?n+i.data:i.data+n),s},g=(e,t,r)=>e.reduce((e,a,o)=>{let n=t[o];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":u(e,""):!1===e?"":e}return e+a+(null==n?"":n)},"");function y(e){let t=this||{},r=e.call?e(t.p):e;return f(r.unshift?r.raw?g(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,s(t.target),t.g,t.o,t.k)}y.bind({g:1});let v,b,k,w=y.bind({k:1});function E(e,t){let r=this||{};return function(){let a=arguments;function o(n,i){let l=Object.assign({},n),s=l.className||o.className;r.p=Object.assign({theme:b&&b()},l),r.o=/ *go\d+/.test(s),l.className=y.apply(r,a)+(s?" "+s:""),t&&(l.ref=i);let p=e;return e[0]&&(p=l.as||e,delete l.as),k&&p[0]&&k(l),v(p,l)}return t?t(o):o}}var x=e=>"function"==typeof e,G=(e,t)=>x(e)?e(t):e,O=(a=0,()=>(++a).toString()),T=()=>{if(void 0===o&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");o=!e||e.matches}return o},A=new Map,N=e=>{if(A.has(e))return;let t=setTimeout(()=>{A.delete(e),j({type:4,toastId:e})},1e3);A.set(e,t)},I=e=>{let t=A.get(e);t&&clearTimeout(t)},_=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&I(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?_(e,{type:1,toast:r}):_(e,{type:0,toast:r});case 3:let{toastId:a}=t;return a?N(a):e.toasts.forEach(e=>{N(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},P=[],L={toasts:[],pausedAt:void 0},j=e=>{L=_(L,e),P.forEach(e=>{e(L)})},S={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},C=(e={})=>{let[t,r]=(0,i.useState)(L);(0,i.useEffect)(()=>(P.push(r),()=>{let e=P.indexOf(r);e>-1&&P.splice(e,1)}),[t]);let a=t.toasts.map(t=>{var r,a;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||S[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...t,toasts:a}},M=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||O()}),H=e=>(t,r)=>{let a=M(t,e,r);return j({type:2,toast:a}),a.id},W=(e,t)=>H("blank")(e,t);W.error=H("error"),W.success=H("success"),W.loading=H("loading"),W.custom=H("custom"),W.dismiss=e=>{j({type:3,toastId:e})},W.remove=e=>j({type:4,toastId:e}),W.promise=(e,t,r)=>{let a=W.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(W.success(G(t.success,e),{id:a,...r,...null==r?void 0:r.success}),e)).catch(e=>{W.error(G(t.error,e),{id:a,...r,...null==r?void 0:r.error})}),e};var $=(e,t)=>{j({type:1,toast:{id:e,height:t}})},D=()=>{j({type:5,time:Date.now()})},F=e=>{let{toasts:t,pausedAt:r}=C(e);(0,i.useEffect)(()=>{if(r)return;let e=Date.now(),a=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&W.dismiss(t.id);return}return setTimeout(()=>W.dismiss(t.id),r)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[t,r]);let a=(0,i.useCallback)(()=>{r&&j({type:6,time:Date.now()})},[r]),o=(0,i.useCallback)((e,r)=>{let{reverseOrder:a=!1,gutter:o=8,defaultPosition:n}=r||{},i=t.filter(t=>(t.position||n)===(e.position||n)&&t.height),l=i.findIndex(t=>t.id===e.id),s=i.filter((e,t)=>t<l&&e.visible).length;return i.filter(e=>e.visible).slice(...a?[s+1]:[0,s]).reduce((e,t)=>e+(t.height||0)+o,0)},[t]);return{toasts:t,handlers:{updateHeight:$,startPause:D,endPause:a,calculateOffset:o}}},V=E("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,z=E("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,J=E("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Z=E("div")`
  position: absolute;
`,R=E("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,U=E("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,X=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?i.createElement(U,null,t):t:"blank"===r?null:i.createElement(R,null,i.createElement(z,{...a}),"loading"!==r&&i.createElement(Z,null,"error"===r?i.createElement(V,{...a}):i.createElement(J,{...a})))},B=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,K=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,q=E("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Y=E("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Q=(e,t)=>{let r=e.includes("top")?1:-1,[a,o]=T()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[B(r),K(r)];return{animation:t?`${w(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=i.memo(({toast:e,position:t,style:r,children:a})=>{let o=e.height?Q(e.position||t||"top-center",e.visible):{opacity:0},n=i.createElement(X,{toast:e}),l=i.createElement(Y,{...e.ariaProps},G(e.message,e));return i.createElement(q,{className:e.className,style:{...o,...r,...e.style}},"function"==typeof a?a({icon:n,message:l}):i.createElement(i.Fragment,null,n,l))});n=i.createElement,u.p=void 0,v=n,b=void 0,k=void 0;var et=({id:e,className:t,style:r,onHeightUpdate:a,children:o})=>{let n=i.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return i.createElement("div",{ref:n,className:t,style:r},o)},er=(e,t)=>{let r=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:T()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...a}},ea=y`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,eo=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:o,containerStyle:n,containerClassName:l})=>{let{toasts:s,handlers:p}=F(r);return i.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:l,onMouseEnter:p.startPause,onMouseLeave:p.endPause},s.map(r=>{let n=r.position||t,l=er(n,p.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}));return i.createElement(et,{id:r.id,key:r.id,onHeightUpdate:p.updateHeight,className:r.visible?ea:"",style:l},"custom"===r.type?G(r.message,r):o?o(r):i.createElement(ee,{toast:r,position:n}))}))},en=W}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[49774,40179],function(){return t(6840),t(80880)}),_N_E=e.O()}]);