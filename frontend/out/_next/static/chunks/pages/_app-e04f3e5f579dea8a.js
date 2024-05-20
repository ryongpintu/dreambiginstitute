(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[92888],{2962:function(e,t,a){"use strict";a.d(t,{Iv:function(){return O},PB:function(){return h},dX:function(){return A},lX:function(){return m}});var r=a(67294),o=a(9008),n=a.n(o);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}var s=["keyOverride"],p={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},c=function(e,t,a){void 0===t&&(t=[]);var o=void 0===a?{}:a,n=o.defaultWidth,i=o.defaultHeight;return t.reduce(function(t,a,o){return t.push(r.createElement("meta",{key:"og:"+e+":0"+o,property:"og:"+e,content:a.url})),a.alt&&t.push(r.createElement("meta",{key:"og:"+e+":alt0"+o,property:"og:"+e+":alt",content:a.alt})),a.secureUrl&&t.push(r.createElement("meta",{key:"og:"+e+":secure_url0"+o,property:"og:"+e+":secure_url",content:a.secureUrl.toString()})),a.type&&t.push(r.createElement("meta",{key:"og:"+e+":type0"+o,property:"og:"+e+":type",content:a.type.toString()})),a.width?t.push(r.createElement("meta",{key:"og:"+e+":width0"+o,property:"og:"+e+":width",content:a.width.toString()})):n&&t.push(r.createElement("meta",{key:"og:"+e+":width0"+o,property:"og:"+e+":width",content:n.toString()})),a.height?t.push(r.createElement("meta",{key:"og:"+e+":height"+o,property:"og:"+e+":height",content:a.height.toString()})):i&&t.push(r.createElement("meta",{key:"og:"+e+":height"+o,property:"og:"+e+":height",content:i.toString()})),t},[])},d=function(e){var t,a,o,n,d,u=[];e.titleTemplate&&(p.templateTitle=e.titleTemplate);var m="";e.title?(m=e.title,p.templateTitle&&(m=p.templateTitle.replace(/%s/g,function(){return m}))):e.defaultTitle&&(m=e.defaultTitle),m&&u.push(r.createElement("title",{key:"title"},m));var h=e.noindex||p.noindex||e.dangerouslySetAllPagesToNoIndex,f=e.nofollow||p.nofollow||e.dangerouslySetAllPagesToNoFollow,g="";if(e.robotsProps){var y=e.robotsProps,v=y.nosnippet,b=y.maxSnippet,k=y.maxImagePreview,w=y.maxVideoPreview,E=y.noarchive,x=y.noimageindex,G=y.notranslate,O=y.unavailableAfter;g=(v?",nosnippet":"")+(b?",max-snippet:"+b:"")+(k?",max-image-preview:"+k:"")+(E?",noarchive":"")+(O?",unavailable_after:"+O:"")+(x?",noimageindex":"")+(w?",max-video-preview:"+w:"")+(G?",notranslate":"")}if(h||f?(e.dangerouslySetAllPagesToNoIndex&&(p.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(p.nofollow=!0),u.push(r.createElement("meta",{key:"robots",name:"robots",content:(h?"noindex":"index")+","+(f?"nofollow":"follow")+g}))):u.push(r.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+g})),e.description&&u.push(r.createElement("meta",{key:"description",name:"description",content:e.description})),e.themeColor&&u.push(r.createElement("meta",{key:"theme-color",name:"theme-color",content:e.themeColor})),e.mobileAlternate&&u.push(r.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach(function(e){u.push(r.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))}),e.twitter&&(e.twitter.cardType&&u.push(r.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&u.push(r.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&u.push(r.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&u.push(r.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),(null!=(t=e.openGraph)&&t.title||m)&&u.push(r.createElement("meta",{key:"og:title",property:"og:title",content:(null==(n=e.openGraph)?void 0:n.title)||m})),(null!=(a=e.openGraph)&&a.description||e.description)&&u.push(r.createElement("meta",{key:"og:description",property:"og:description",content:(null==(d=e.openGraph)?void 0:d.description)||e.description})),e.openGraph){if((e.openGraph.url||e.canonical)&&u.push(r.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var T=e.openGraph.type.toLowerCase();u.push(r.createElement("meta",{key:"og:type",property:"og:type",content:T})),"profile"===T&&e.openGraph.profile?(e.openGraph.profile.firstName&&u.push(r.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&u.push(r.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&u.push(r.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&u.push(r.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===T&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach(function(e,t){u.push(r.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))}),e.openGraph.book.isbn&&u.push(r.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&u.push(r.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach(function(e,t){u.push(r.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))})):"article"===T&&e.openGraph.article?(e.openGraph.article.publishedTime&&u.push(r.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&u.push(r.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&u.push(r.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach(function(e,t){u.push(r.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))}),e.openGraph.article.section&&u.push(r.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach(function(e,t){u.push(r.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))})):("video.movie"===T||"video.episode"===T||"video.tv_show"===T||"video.other"===T)&&e.openGraph.video&&(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach(function(e,t){e.profile&&u.push(r.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&u.push(r.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))}),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach(function(e,t){u.push(r.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))}),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach(function(e,t){u.push(r.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))}),e.openGraph.video.duration&&u.push(r.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&u.push(r.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach(function(e,t){u.push(r.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))}),e.openGraph.video.series&&u.push(r.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(p.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(p.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&u.push.apply(u,c("image",e.openGraph.images,{defaultWidth:p.defaultOpenGraphImageWidth,defaultHeight:p.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(p.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(p.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&u.push.apply(u,c("video",e.openGraph.videos,{defaultWidth:p.defaultOpenGraphVideoWidth,defaultHeight:p.defaultOpenGraphVideoHeight})),e.openGraph.audio&&u.push.apply(u,c("audio",e.openGraph.audio)),e.openGraph.locale&&u.push(r.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),(e.openGraph.siteName||e.openGraph.site_name)&&u.push(r.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.siteName||e.openGraph.site_name}))}return e.canonical&&u.push(r.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach(function(e){var t,a,o=e.keyOverride,n=l(e,s);u.push(r.createElement("meta",i({key:"meta:"+(null!=(t=null!=(a=null!=o?o:n.name)?a:n.property)?t:n.httpEquiv)},n)))}),null!=(o=e.additionalLinkTags)&&o.length&&e.additionalLinkTags.forEach(function(e){var t;u.push(r.createElement("link",i({key:"link"+(null!=(t=e.keyOverride)?t:e.href)+e.rel},e)))}),u},u=function(e){return r.createElement(n(),null,d(e))},m=function(e){var t=e.title,a=e.titleTemplate,o=e.defaultTitle,n=e.themeColor,i=e.dangerouslySetAllPagesToNoIndex,l=e.dangerouslySetAllPagesToNoFollow,s=e.description,p=e.canonical,c=e.facebook,d=e.openGraph,m=e.additionalMetaTags,h=e.twitter,f=e.defaultOpenGraphImageWidth,g=e.defaultOpenGraphImageHeight,y=e.defaultOpenGraphVideoWidth,v=e.defaultOpenGraphVideoHeight,b=e.mobileAlternate,k=e.languageAlternates,w=e.additionalLinkTags,E=e.robotsProps;return r.createElement(u,{title:t,titleTemplate:a,defaultTitle:o,themeColor:n,dangerouslySetAllPagesToNoIndex:void 0!==i&&i,dangerouslySetAllPagesToNoFollow:void 0!==l&&l,description:s,canonical:p,facebook:c,openGraph:d,additionalMetaTags:m,twitter:h,defaultOpenGraphImageWidth:f,defaultOpenGraphImageHeight:g,defaultOpenGraphVideoWidth:y,defaultOpenGraphVideoHeight:v,mobileAlternate:b,languageAlternates:k,additionalLinkTags:w,robotsProps:E})},h=function(e){var t=e.title,a=e.themeColor,o=e.noindex,n=void 0!==o&&o,i=e.nofollow,l=e.robotsProps,s=e.description,p=e.canonical,c=e.openGraph,m=e.facebook,h=e.twitter,f=e.additionalMetaTags,g=e.titleTemplate,y=e.defaultTitle,v=e.mobileAlternate,b=e.languageAlternates,k=e.additionalLinkTags,w=e.useAppDir;return r.createElement(r.Fragment,null,void 0!==w&&w?d({title:t,themeColor:a,noindex:n,nofollow:i,robotsProps:l,description:s,canonical:p,facebook:m,openGraph:c,additionalMetaTags:f,twitter:h,titleTemplate:g,defaultTitle:y,mobileAlternate:v,languageAlternates:b,additionalLinkTags:k}):r.createElement(u,{title:t,themeColor:a,noindex:n,nofollow:i,robotsProps:l,description:s,canonical:p,facebook:m,openGraph:c,additionalMetaTags:f,twitter:h,titleTemplate:g,defaultTitle:y,mobileAlternate:v,languageAlternates:b,additionalLinkTags:k}))},f=function(e,t){var a=t;return Array.isArray(a)&&1===a.length&&(a=i({},t[0])),{__html:JSON.stringify(Array.isArray(a)?a.map(function(t){return g(e,t)}):g(e,a),k)}},g=function(e,t){var a=t.id,r=i({},(void 0===a?void 0:a)?{"@id":t.id}:{},t);return delete r.id,i({"@context":"https://schema.org","@type":e},r)},y=Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"}),v=RegExp("["+Object.keys(y).join("")+"]","g"),b=function(e){return y[e]},k=function(e,t){switch(typeof t){case"object":if(null===t)return;return t;case"number":case"boolean":case"bigint":return t;case"string":return t.replace(v,b);default:return}},w=["type","keyOverride","scriptKey","scriptId","dataArray","useAppDir"];function E(e){var t=e.type,a=void 0===t?"Thing":t,o=e.keyOverride,s=e.scriptKey,p=e.scriptId,c=void 0===p?void 0:p,d=e.dataArray,u=e.useAppDir,m=l(e,w),h=function(){return r.createElement("script",{type:"application/ld+json",id:c,"data-testid":c,dangerouslySetInnerHTML:f(a,void 0===d?i({},m):d),key:"jsonld-"+s+(o?"-"+o:"")})};return void 0!==u&&u?r.createElement(h,null):r.createElement(n(),null,h())}function x(e){if("string"==typeof e)return{"@type":"Person",name:e};if(e.name){var t;return{"@type":null!=(t=null==e?void 0:e.type)?t:"Person",name:e.name,url:null==e?void 0:e.url}}}var G=["type","keyOverride","courseName","provider"];function O(e){var t=e.type,a=e.keyOverride,o=e.courseName,n=e.provider,s=i({name:o},l(e,G),{provider:function(e){if(e)return{"@type":e.type||"Organization",name:e.name,sameAs:e.url}}(n)});return r.createElement(E,i({type:void 0===t?"Course":t,keyOverride:a},s,{scriptKey:"course"}))}var T=["type","keyOverride","url","title","images","datePublished","dateModified","authorName","publisherName","publisherLogo","description","isAccessibleForFree"];function A(e){var t=e.type,a=e.keyOverride,o=e.url,n=e.title,s=e.images,p=e.datePublished,c=e.dateModified,d=e.authorName,u=e.publisherName,m=e.publisherLogo,h=e.description,f=e.isAccessibleForFree,g=l(e,T),y=i({datePublished:p,description:h,mainEntityOfPage:{"@type":"WebPage","@id":o},headline:n,image:s,dateModified:c||p,author:Array.isArray(d)?d.map(function(e){return x(e)}).filter(function(e){return!!e}):d?x(d):void 0,publisher:function(e,t){if(e)return{"@type":"Organization",name:e,logo:function(e){if(e)return{"@type":"ImageObject",url:e}}(t)}}(void 0===u?void 0:u,void 0===m?void 0:m),isAccessibleForFree:f},g);return r.createElement(E,i({type:void 0===t?"Article":t,keyOverride:a},y,{scriptKey:"article"}))}},6840:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return a(77887)}])},80040:function(e,t,a){"use strict";a.d(t,{JP:function(){return i},l8:function(){return l}});var r=a(85893),o=a(67294);let n=(0,o.createContext)({}),i=e=>{let{children:t}=e,[a,i]=(0,o.useState)({x:0,y:0}),l=(0,o.useCallback)(e=>{i({x:e.clientX-window.innerWidth/2,y:e.clientY-window.innerHeight/2})},[]),s=(0,o.useMemo)(()=>()=>({x:-(a.x/15*1),y:-(a.y/15*1)}),[a]),p=(0,o.useMemo)(()=>()=>({x:a.x/15,y:a.y/15}),[a]);(0,o.useEffect)(()=>(window.addEventListener("mousemove",l),()=>{window.removeEventListener("mousemove",l)}),[l]);let c=(0,o.useMemo)(()=>({trans1:s,trans2:p}),[s,p]);return(0,r.jsx)(n.Provider,{value:c,children:t})},l=()=>(0,o.useContext)(n)},51697:function(e,t,a){"use strict";a.d(t,{aF:function(){return u},dr:function(){return d}});var r=a(85893),o=a(67294);let n="maxCourse",i="maxAuth",l=(0,o.createContext)({}),s={isLoggedIn:!1,courseProgress:[]},p=()=>{let e=localStorage.getItem(i),t=localStorage.getItem(n),a=null!==t?JSON.parse(t):[],r=null!==e&&JSON.parse(e);return{...s,isLoggedIn:r,courseProgress:a}};function c(e,t){switch(t.type){case"LOGIN":return localStorage.setItem(i,JSON.stringify(!0)),{...e,isLoggedIn:!0};case"ENROLL_COURSE":{let a=[...e.courseProgress,{course:t.payload.course,currentLesson:t.payload.lessonLink,completedLessons:[]}];return localStorage.setItem(n,JSON.stringify(a)),{...e,courseProgress:a}}case"LESSON_COMPLETE":{let a=e.courseProgress.map(e=>e.course===t.payload.course?{...e,completedLessons:[...e.completedLessons,t.payload.lesson],currentLesson:t.payload.lessonLink}:e);return localStorage.setItem(n,JSON.stringify(a)),{...e,courseProgress:a}}default:return e}}let d=e=>{let{children:t}=e,[a,n]=(0,o.useReducer)(c,s,p),i=(0,o.useMemo)(()=>({...a,setLogin:()=>{n({type:"LOGIN"})},enrolCourse:e=>{n({type:"ENROLL_COURSE",payload:e})},lessonComplete:e=>{n({type:"LESSON_COMPLETE",payload:e})}}),[a]);return(0,r.jsx)(l.Provider,{value:i,children:t})},u=()=>(0,o.useContext)(l)},49842:function(e,t){"use strict";t.Z={name:"DreamBig Institute",titleTemplate:"Software Training Institute",description:"Training se... Job Tak ka Safar"}},77887:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return g}});var r=a(85893),o=a(67294),n=a(11163),i=a(2962),l=a(49842);let s=()=>(0,r.jsx)(i.lX,{title:l.Z.name,titleTemplate:"%s - ".concat(l.Z.titleTemplate),defaultTitle:l.Z.name,description:l.Z.description,canonical:"https://idreambig.in/",openGraph:{type:"website",locale:"en_IE",site_name:l.Z.name,images:[{url:"https://idreambig.in/images/about/about-me/about-me-popup-video-poster.jpg",width:800,height:600,alt:"Og Image Alt"},{url:"https://idreambig.in/images/about/about-me/about-me-popup-video-poster.jpg",width:900,height:800,alt:"Og Image Alt Second"}]},facebook:{appId:"61559781692203"},additionalMetaTags:[{name:"viewport",content:"width=device-width, initial-scale=1 maximum-scale=1"},{name:"apple-mobile-web-app-capable",content:"yes"},{name:"theme-color",content:"#ffffff"}],additionalLinkTags:[{rel:"apple-touch-icon",href:"/icons/icon-192x192.png"},{rel:"manifest",href:"/manifest.json"}]}),p=e=>{let{children:t}=e;return(0,r.jsx)("div",{className:"tw-relative",children:t})};a(21023),a(65387),a(18119),a(69188),a(24901);var c=a(4298),d=a.n(c),u=a(86501),m=a(80040),h=a(51697);let f=e=>{let{Component:t,pageProps:a}=e,i=(0,n.useRouter)(),l=t.Layout||p,c="object"==typeof a.layout?a.layout:{};return(0,o.useEffect)(()=>{document.activeElement instanceof HTMLElement&&document.activeElement.blur()},[i]),(0,o.useEffect)(()=>{document.body.className=a.className||""}),(0,r.jsx)(m.JP,{children:(0,r.jsx)(h.dr,{children:(0,r.jsxs)(l,{...c,children:[(0,r.jsx)(d(),{strategy:"afterInteractive",src:"https://www.googletagmanager.com/gtag/js?id=G-6FG9FVXK93"}),(0,r.jsx)(d(),{id:"google-analytics",strategy:"afterInteractive",children:"\n                        window.dataLayer = window.dataLayer || [];\n                        function gtag(){dataLayer.push(arguments);}\n                        gtag('js', new Date());\n\n                        gtag('config', 'G-6FG9FVXK93');\n                        "}),(0,r.jsx)(s,{}),(0,r.jsx)(t,{...a}),(0,r.jsx)(u.x7,{})]})})})};var g=f},21023:function(){},65387:function(){},18119:function(){},24901:function(){},69188:function(){},9008:function(e,t,a){e.exports=a(83121)},11163:function(e,t,a){e.exports=a(80880)},4298:function(e,t,a){e.exports=a(63573)},86501:function(e,t,a){"use strict";let r,o;a.d(t,{x7:function(){return eo},ZP:function(){return en}});var n,i=a(67294);let l={data:""},s=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||l,p=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,d=/\n+/g,u=(e,t)=>{let a="",r="",o="";for(let n in e){let i=e[n];"@"==n[0]?"i"==n[1]?a=n+" "+i+";":r+="f"==n[1]?u(i,n):n+"{"+u(i,"k"==n[1]?"":t)+"}":"object"==typeof i?r+=u(i,t?t.replace(/([^,])+/g,e=>n.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=i&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=u.p?u.p(n,i):n+":"+i+";")}return a+(t&&o?t+"{"+o+"}":o)+r},m={},h=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+h(e[a]);return t}return e},f=(e,t,a,r,o)=>{var n,i;let l=h(e),s=m[l]||(m[l]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(l));if(!m[s]){let t=l!==e?e:(e=>{let t,a,r=[{}];for(;t=p.exec(e.replace(c,""));)t[4]?r.shift():t[3]?(a=t[3].replace(d," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(d," ").trim();return r[0]})(e);m[s]=u(o?{["@keyframes "+s]:t}:t,a?"":"."+s)}let f=a&&m.g?m.g:null;return a&&(m.g=m[s]),n=m[s],i=t,f?i.data=i.data.replace(f,n):-1===i.data.indexOf(n)&&(i.data=r?n+i.data:i.data+n),s},g=(e,t,a)=>e.reduce((e,r,o)=>{let n=t[o];if(n&&n.call){let e=n(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":u(e,""):!1===e?"":e}return e+r+(null==n?"":n)},"");function y(e){let t=this||{},a=e.call?e(t.p):e;return f(a.unshift?a.raw?g(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,s(t.target),t.g,t.o,t.k)}y.bind({g:1});let v,b,k,w=y.bind({k:1});function E(e,t){let a=this||{};return function(){let r=arguments;function o(n,i){let l=Object.assign({},n),s=l.className||o.className;a.p=Object.assign({theme:b&&b()},l),a.o=/ *go\d+/.test(s),l.className=y.apply(a,r)+(s?" "+s:""),t&&(l.ref=i);let p=e;return e[0]&&(p=l.as||e,delete l.as),k&&p[0]&&k(l),v(p,l)}return t?t(o):o}}var x=e=>"function"==typeof e,G=(e,t)=>x(e)?e(t):e,O=(r=0,()=>(++r).toString()),T=()=>{if(void 0===o&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");o=!e||e.matches}return o},A=new Map,I=e=>{if(A.has(e))return;let t=setTimeout(()=>{A.delete(e),S({type:4,toastId:e})},1e3);A.set(e,t)},N=e=>{let t=A.get(e);t&&clearTimeout(t)},_=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&N(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return e.toasts.find(e=>e.id===a.id)?_(e,{type:1,toast:a}):_(e,{type:0,toast:a});case 3:let{toastId:r}=t;return r?I(r):e.toasts.forEach(e=>{I(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},L=[],P={toasts:[],pausedAt:void 0},S=e=>{P=_(P,e),L.forEach(e=>{e(P)})},j={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},C=(e={})=>{let[t,a]=(0,i.useState)(P);(0,i.useEffect)(()=>(L.push(a),()=>{let e=L.indexOf(a);e>-1&&L.splice(e,1)}),[t]);let r=t.toasts.map(t=>{var a,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||j[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...t,toasts:r}},M=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||O()}),H=e=>(t,a)=>{let r=M(t,e,a);return S({type:2,toast:r}),r.id},F=(e,t)=>H("blank")(e,t);F.error=H("error"),F.success=H("success"),F.loading=H("loading"),F.custom=H("custom"),F.dismiss=e=>{S({type:3,toastId:e})},F.remove=e=>S({type:4,toastId:e}),F.promise=(e,t,a)=>{let r=F.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then(e=>(F.success(G(t.success,e),{id:r,...a,...null==a?void 0:a.success}),e)).catch(e=>{F.error(G(t.error,e),{id:r,...a,...null==a?void 0:a.error})}),e};var W=(e,t)=>{S({type:1,toast:{id:e,height:t}})},$=()=>{S({type:5,time:Date.now()})},D=e=>{let{toasts:t,pausedAt:a}=C(e);(0,i.useEffect)(()=>{if(a)return;let e=Date.now(),r=t.map(t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(a<0){t.visible&&F.dismiss(t.id);return}return setTimeout(()=>F.dismiss(t.id),a)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[t,a]);let r=(0,i.useCallback)(()=>{a&&S({type:6,time:Date.now()})},[a]),o=(0,i.useCallback)((e,a)=>{let{reverseOrder:r=!1,gutter:o=8,defaultPosition:n}=a||{},i=t.filter(t=>(t.position||n)===(e.position||n)&&t.height),l=i.findIndex(t=>t.id===e.id),s=i.filter((e,t)=>t<l&&e.visible).length;return i.filter(e=>e.visible).slice(...r?[s+1]:[0,s]).reduce((e,t)=>e+(t.height||0)+o,0)},[t]);return{toasts:t,handlers:{updateHeight:W,startPause:$,endPause:r,calculateOffset:o}}},V=E("div")`
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
`,R=E("div")`
  position: absolute;
`,X=E("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Z=E("div")`
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
`,K=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?i.createElement(Z,null,t):t:"blank"===a?null:i.createElement(X,null,i.createElement(z,{...r}),"loading"!==a&&i.createElement(R,null,"error"===a?i.createElement(V,{...r}):i.createElement(J,{...r})))},U=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,q=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,B=E("div")`
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
`,Q=(e,t)=>{let a=e.includes("top")?1:-1,[r,o]=T()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[U(a),q(a)];return{animation:t?`${w(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=i.memo(({toast:e,position:t,style:a,children:r})=>{let o=e.height?Q(e.position||t||"top-center",e.visible):{opacity:0},n=i.createElement(K,{toast:e}),l=i.createElement(Y,{...e.ariaProps},G(e.message,e));return i.createElement(B,{className:e.className,style:{...o,...a,...e.style}},"function"==typeof r?r({icon:n,message:l}):i.createElement(i.Fragment,null,n,l))});n=i.createElement,u.p=void 0,v=n,b=void 0,k=void 0;var et=({id:e,className:t,style:a,onHeightUpdate:r,children:o})=>{let n=i.useCallback(t=>{if(t){let a=()=>{r(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return i.createElement("div",{ref:n,className:t,style:a},o)},ea=(e,t)=>{let a=e.includes("top"),r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:T()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...r}},er=y`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,eo=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:r,children:o,containerStyle:n,containerClassName:l})=>{let{toasts:s,handlers:p}=D(a);return i.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:l,onMouseEnter:p.startPause,onMouseLeave:p.endPause},s.map(a=>{let n=a.position||t,l=ea(n,p.calculateOffset(a,{reverseOrder:e,gutter:r,defaultPosition:t}));return i.createElement(et,{id:a.id,key:a.id,onHeightUpdate:p.updateHeight,className:a.visible?er:"",style:l},"custom"===a.type?G(a.message,a):o?o(a):i.createElement(ee,{toast:a,position:n}))}))},en=F}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[49774,40179],function(){return t(6840),t(80880)}),_N_E=e.O()}]);