(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[92888],{2962:function(e,t,n){"use strict";n.d(t,{Iv:function(){return _},PB:function(){return h},dX:function(){return O},lX:function(){return m}});var o=n(67294),a=n(9008),r=n.n(a);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}var s=["keyOverride"],p={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},c=function(e,t,n){void 0===t&&(t=[]);var a=void 0===n?{}:n,r=a.defaultWidth,i=a.defaultHeight;return t.reduce(function(t,n,a){return t.push(o.createElement("meta",{key:"og:"+e+":0"+a,property:"og:"+e,content:n.url})),n.alt&&t.push(o.createElement("meta",{key:"og:"+e+":alt0"+a,property:"og:"+e+":alt",content:n.alt})),n.secureUrl&&t.push(o.createElement("meta",{key:"og:"+e+":secure_url0"+a,property:"og:"+e+":secure_url",content:n.secureUrl.toString()})),n.type&&t.push(o.createElement("meta",{key:"og:"+e+":type0"+a,property:"og:"+e+":type",content:n.type.toString()})),n.width?t.push(o.createElement("meta",{key:"og:"+e+":width0"+a,property:"og:"+e+":width",content:n.width.toString()})):r&&t.push(o.createElement("meta",{key:"og:"+e+":width0"+a,property:"og:"+e+":width",content:r.toString()})),n.height?t.push(o.createElement("meta",{key:"og:"+e+":height"+a,property:"og:"+e+":height",content:n.height.toString()})):i&&t.push(o.createElement("meta",{key:"og:"+e+":height"+a,property:"og:"+e+":height",content:i.toString()})),t},[])},d=function(e){var t,n,a,r,d,u=[];e.titleTemplate&&(p.templateTitle=e.titleTemplate);var m="";e.title?(m=e.title,p.templateTitle&&(m=p.templateTitle.replace(/%s/g,function(){return m}))):e.defaultTitle&&(m=e.defaultTitle),m&&u.push(o.createElement("title",{key:"title"},m));var h=e.noindex||p.noindex||e.dangerouslySetAllPagesToNoIndex,f=e.nofollow||p.nofollow||e.dangerouslySetAllPagesToNoFollow,g="";if(e.robotsProps){var y=e.robotsProps,v=y.nosnippet,E=y.maxSnippet,b=y.maxImagePreview,k=y.maxVideoPreview,T=y.noarchive,G=y.noimageindex,w=y.notranslate,_=y.unavailableAfter;g=(v?",nosnippet":"")+(E?",max-snippet:"+E:"")+(b?",max-image-preview:"+b:"")+(T?",noarchive":"")+(_?",unavailable_after:"+_:"")+(G?",noimageindex":"")+(k?",max-video-preview:"+k:"")+(w?",notranslate":"")}if(h||f?(e.dangerouslySetAllPagesToNoIndex&&(p.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(p.nofollow=!0),u.push(o.createElement("meta",{key:"robots",name:"robots",content:(h?"noindex":"index")+","+(f?"nofollow":"follow")+g}))):u.push(o.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+g})),e.description&&u.push(o.createElement("meta",{key:"description",name:"description",content:e.description})),e.themeColor&&u.push(o.createElement("meta",{key:"theme-color",name:"theme-color",content:e.themeColor})),e.mobileAlternate&&u.push(o.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach(function(e){u.push(o.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))}),e.twitter&&(e.twitter.cardType&&u.push(o.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&u.push(o.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&u.push(o.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&u.push(o.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),(null!=(t=e.openGraph)&&t.title||m)&&u.push(o.createElement("meta",{key:"og:title",property:"og:title",content:(null==(r=e.openGraph)?void 0:r.title)||m})),(null!=(n=e.openGraph)&&n.description||e.description)&&u.push(o.createElement("meta",{key:"og:description",property:"og:description",content:(null==(d=e.openGraph)?void 0:d.description)||e.description})),e.openGraph){if((e.openGraph.url||e.canonical)&&u.push(o.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var I=e.openGraph.type.toLowerCase();u.push(o.createElement("meta",{key:"og:type",property:"og:type",content:I})),"profile"===I&&e.openGraph.profile?(e.openGraph.profile.firstName&&u.push(o.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&u.push(o.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&u.push(o.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&u.push(o.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===I&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach(function(e,t){u.push(o.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))}),e.openGraph.book.isbn&&u.push(o.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&u.push(o.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach(function(e,t){u.push(o.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))})):"article"===I&&e.openGraph.article?(e.openGraph.article.publishedTime&&u.push(o.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&u.push(o.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&u.push(o.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach(function(e,t){u.push(o.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))}),e.openGraph.article.section&&u.push(o.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach(function(e,t){u.push(o.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))})):("video.movie"===I||"video.episode"===I||"video.tv_show"===I||"video.other"===I)&&e.openGraph.video&&(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach(function(e,t){e.profile&&u.push(o.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&u.push(o.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))}),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach(function(e,t){u.push(o.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))}),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach(function(e,t){u.push(o.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))}),e.openGraph.video.duration&&u.push(o.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&u.push(o.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach(function(e,t){u.push(o.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))}),e.openGraph.video.series&&u.push(o.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(p.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(p.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&u.push.apply(u,c("image",e.openGraph.images,{defaultWidth:p.defaultOpenGraphImageWidth,defaultHeight:p.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(p.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(p.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&u.push.apply(u,c("video",e.openGraph.videos,{defaultWidth:p.defaultOpenGraphVideoWidth,defaultHeight:p.defaultOpenGraphVideoHeight})),e.openGraph.audio&&u.push.apply(u,c("audio",e.openGraph.audio)),e.openGraph.locale&&u.push(o.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),(e.openGraph.siteName||e.openGraph.site_name)&&u.push(o.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.siteName||e.openGraph.site_name}))}return e.canonical&&u.push(o.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach(function(e){var t,n,a=e.keyOverride,r=l(e,s);u.push(o.createElement("meta",i({key:"meta:"+(null!=(t=null!=(n=null!=a?a:r.name)?n:r.property)?t:r.httpEquiv)},r)))}),null!=(a=e.additionalLinkTags)&&a.length&&e.additionalLinkTags.forEach(function(e){var t;u.push(o.createElement("link",i({key:"link"+(null!=(t=e.keyOverride)?t:e.href)+e.rel},e)))}),u},u=function(e){return o.createElement(r(),null,d(e))},m=function(e){var t=e.title,n=e.titleTemplate,a=e.defaultTitle,r=e.themeColor,i=e.dangerouslySetAllPagesToNoIndex,l=e.dangerouslySetAllPagesToNoFollow,s=e.description,p=e.canonical,c=e.facebook,d=e.openGraph,m=e.additionalMetaTags,h=e.twitter,f=e.defaultOpenGraphImageWidth,g=e.defaultOpenGraphImageHeight,y=e.defaultOpenGraphVideoWidth,v=e.defaultOpenGraphVideoHeight,E=e.mobileAlternate,b=e.languageAlternates,k=e.additionalLinkTags,T=e.robotsProps;return o.createElement(u,{title:t,titleTemplate:n,defaultTitle:a,themeColor:r,dangerouslySetAllPagesToNoIndex:void 0!==i&&i,dangerouslySetAllPagesToNoFollow:void 0!==l&&l,description:s,canonical:p,facebook:c,openGraph:d,additionalMetaTags:m,twitter:h,defaultOpenGraphImageWidth:f,defaultOpenGraphImageHeight:g,defaultOpenGraphVideoWidth:y,defaultOpenGraphVideoHeight:v,mobileAlternate:E,languageAlternates:b,additionalLinkTags:k,robotsProps:T})},h=function(e){var t=e.title,n=e.themeColor,a=e.noindex,r=void 0!==a&&a,i=e.nofollow,l=e.robotsProps,s=e.description,p=e.canonical,c=e.openGraph,m=e.facebook,h=e.twitter,f=e.additionalMetaTags,g=e.titleTemplate,y=e.defaultTitle,v=e.mobileAlternate,E=e.languageAlternates,b=e.additionalLinkTags,k=e.useAppDir;return o.createElement(o.Fragment,null,void 0!==k&&k?d({title:t,themeColor:n,noindex:r,nofollow:i,robotsProps:l,description:s,canonical:p,facebook:m,openGraph:c,additionalMetaTags:f,twitter:h,titleTemplate:g,defaultTitle:y,mobileAlternate:v,languageAlternates:E,additionalLinkTags:b}):o.createElement(u,{title:t,themeColor:n,noindex:r,nofollow:i,robotsProps:l,description:s,canonical:p,facebook:m,openGraph:c,additionalMetaTags:f,twitter:h,titleTemplate:g,defaultTitle:y,mobileAlternate:v,languageAlternates:E,additionalLinkTags:b}))},f=function(e,t){var n=t;return Array.isArray(n)&&1===n.length&&(n=i({},t[0])),{__html:JSON.stringify(Array.isArray(n)?n.map(function(t){return g(e,t)}):g(e,n),b)}},g=function(e,t){var n=t.id,o=i({},(void 0===n?void 0:n)?{"@id":t.id}:{},t);return delete o.id,i({"@context":"https://schema.org","@type":e},o)},y=Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"}),v=RegExp("["+Object.keys(y).join("")+"]","g"),E=function(e){return y[e]},b=function(e,t){switch(typeof t){case"object":if(null===t)return;return t;case"number":case"boolean":case"bigint":return t;case"string":return t.replace(v,E);default:return}},k=["type","keyOverride","scriptKey","scriptId","dataArray","useAppDir"];function T(e){var t=e.type,n=void 0===t?"Thing":t,a=e.keyOverride,s=e.scriptKey,p=e.scriptId,c=void 0===p?void 0:p,d=e.dataArray,u=e.useAppDir,m=l(e,k),h=function(){return o.createElement("script",{type:"application/ld+json",id:c,"data-testid":c,dangerouslySetInnerHTML:f(n,void 0===d?i({},m):d),key:"jsonld-"+s+(a?"-"+a:"")})};return void 0!==u&&u?o.createElement(h,null):o.createElement(r(),null,h())}function G(e){if("string"==typeof e)return{"@type":"Person",name:e};if(e.name){var t;return{"@type":null!=(t=null==e?void 0:e.type)?t:"Person",name:e.name,url:null==e?void 0:e.url}}}var w=["type","keyOverride","courseName","provider"];function _(e){var t=e.type,n=e.keyOverride,a=e.courseName,r=e.provider,s=i({name:a},l(e,w),{provider:function(e){if(e)return{"@type":e.type||"Organization",name:e.name,sameAs:e.url}}(r)});return o.createElement(T,i({type:void 0===t?"Course":t,keyOverride:n},s,{scriptKey:"course"}))}var I=["type","keyOverride","url","title","images","datePublished","dateModified","authorName","publisherName","publisherLogo","description","isAccessibleForFree"];function O(e){var t=e.type,n=e.keyOverride,a=e.url,r=e.title,s=e.images,p=e.datePublished,c=e.dateModified,d=e.authorName,u=e.publisherName,m=e.publisherLogo,h=e.description,f=e.isAccessibleForFree,g=l(e,I),y=i({datePublished:p,description:h,mainEntityOfPage:{"@type":"WebPage","@id":a},headline:r,image:s,dateModified:c||p,author:Array.isArray(d)?d.map(function(e){return G(e)}).filter(function(e){return!!e}):d?G(d):void 0,publisher:function(e,t){if(e)return{"@type":"Organization",name:e,logo:function(e){if(e)return{"@type":"ImageObject",url:e}}(t)}}(void 0===u?void 0:u,void 0===m?void 0:m),isAccessibleForFree:f},g);return o.createElement(T,i({type:void 0===t?"Article":t,keyOverride:n},y,{scriptKey:"article"}))}},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(77887)}])},80040:function(e,t,n){"use strict";n.d(t,{JP:function(){return i},l8:function(){return l}});var o=n(85893),a=n(67294);let r=(0,a.createContext)({}),i=e=>{let{children:t}=e,[n,i]=(0,a.useState)({x:0,y:0}),l=(0,a.useCallback)(e=>{i({x:e.clientX-window.innerWidth/2,y:e.clientY-window.innerHeight/2})},[]),s=(0,a.useMemo)(()=>()=>({x:-(n.x/15*1),y:-(n.y/15*1)}),[n]),p=(0,a.useMemo)(()=>()=>({x:n.x/15,y:n.y/15}),[n]);(0,a.useEffect)(()=>(window.addEventListener("mousemove",l),()=>{window.removeEventListener("mousemove",l)}),[l]);let c=(0,a.useMemo)(()=>({trans1:s,trans2:p}),[s,p]);return(0,o.jsx)(r.Provider,{value:c,children:t})},l=()=>(0,a.useContext)(r)},51697:function(e,t,n){"use strict";n.d(t,{aF:function(){return u},dr:function(){return d}});var o=n(85893),a=n(67294);let r="maxCourse",i="maxAuth",l=(0,a.createContext)({}),s={isLoggedIn:!1,courseProgress:[]},p=()=>{let e=localStorage.getItem(i),t=localStorage.getItem(r),n=null!==t?JSON.parse(t):[],o=null!==e&&JSON.parse(e);return{...s,isLoggedIn:o,courseProgress:n}};function c(e,t){switch(t.type){case"LOGIN":return localStorage.setItem(i,JSON.stringify(!0)),{...e,isLoggedIn:!0};case"ENROLL_COURSE":{let n=[...e.courseProgress,{course:t.payload.course,currentLesson:t.payload.lessonLink,completedLessons:[]}];return localStorage.setItem(r,JSON.stringify(n)),{...e,courseProgress:n}}case"LESSON_COMPLETE":{let n=e.courseProgress.map(e=>e.course===t.payload.course?{...e,completedLessons:[...e.completedLessons,t.payload.lesson],currentLesson:t.payload.lessonLink}:e);return localStorage.setItem(r,JSON.stringify(n)),{...e,courseProgress:n}}default:return e}}let d=e=>{let{children:t}=e,[n,r]=(0,a.useReducer)(c,s,p),i=(0,a.useMemo)(()=>({...n,setLogin:()=>{r({type:"LOGIN"})},enrolCourse:e=>{r({type:"ENROLL_COURSE",payload:e})},lessonComplete:e=>{r({type:"LESSON_COMPLETE",payload:e})}}),[n]);return(0,o.jsx)(l.Provider,{value:i,children:t})},u=()=>(0,a.useContext)(l)},49842:function(e,t){"use strict";t.Z={name:"DreamBig",titleTemplate:"Software Training Institute",description:"Training se Lekar Job Tak ka Safar"}},77887:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var o=n(85893),a=n(67294),r=n(11163),i=n(2962),l=n(49842);let s=()=>(0,o.jsx)(i.lX,{title:l.Z.name,titleTemplate:"%s - ".concat(l.Z.titleTemplate),defaultTitle:l.Z.name,description:l.Z.description,canonical:"https://maxcoach-react.pages.dev/",openGraph:{type:"website",locale:"en_IE",site_name:l.Z.name,images:[{url:"https://maxcoach-react.pages.dev/images/about/about-me/about-me-popup-video-poster.jpg",width:800,height:600,alt:"Og Image Alt"},{url:"https://maxcoach-react.pages.dev/images/about/about-me/about-me-popup-video-poster.jpg",width:900,height:800,alt:"Og Image Alt Second"}]},twitter:{handle:"@handle",site:"@site",cardType:"summary_large_image"},facebook:{appId:"1234567890"},additionalMetaTags:[{name:"viewport",content:"width=device-width, initial-scale=1 maximum-scale=1"},{name:"apple-mobile-web-app-capable",content:"yes"},{name:"theme-color",content:"#ffffff"}],additionalLinkTags:[{rel:"apple-touch-icon",href:"/icons/icon-192x192.png"},{rel:"manifest",href:"/manifest.json"}]}),p=e=>{let{children:t}=e;return(0,o.jsx)("div",{className:"tw-relative",children:t})};var c=n(9134);n(21023),n(65387),n(18119),n(69188),n(24901),n(64213);var d=n(80040),u=n(51697);let m=e=>{let{Component:t,pageProps:n}=e,i=(0,r.useRouter)(),l=t.Layout||p,m="object"==typeof n.layout?n.layout:{};return(0,a.useEffect)(()=>{document.activeElement instanceof HTMLElement&&document.activeElement.blur()},[i]),(0,a.useEffect)(()=>{document.body.className=n.className||""}),(0,o.jsx)(d.JP,{children:(0,o.jsx)(u.dr,{children:(0,o.jsxs)(l,{...m,children:[(0,o.jsx)(s,{}),(0,o.jsx)(t,{...n}),(0,o.jsx)(c.Ix,{})]})})})};var h=m},64213:function(){},21023:function(){},65387:function(){},18119:function(){},24901:function(){},69188:function(){},9008:function(e,t,n){e.exports=n(83121)},11163:function(e,t,n){e.exports=n(80880)},9134:function(e,t,n){"use strict";n.d(t,{Ix:function(){return S},Am:function(){return I}});var o=n(67294),a=function(){for(var e,t,n=0,o="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=function e(t){var n,o,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t){if(Array.isArray(t)){var r=t.length;for(n=0;n<r;n++)t[n]&&(o=e(t[n]))&&(a&&(a+=" "),a+=o)}else for(o in t)t[o]&&(a&&(a+=" "),a+=o)}return a}(e))&&(o&&(o+=" "),o+=t);return o};let r=e=>"number"==typeof e&&!isNaN(e),i=e=>"string"==typeof e,l=e=>"function"==typeof e,s=e=>i(e)||l(e)?e:null,p=e=>(0,o.isValidElement)(e)||i(e)||l(e)||r(e);function c(e){let{enter:t,exit:n,appendPosition:a=!1,collapse:r=!0,collapseDuration:i=300}=e;return function(e){let{children:l,position:s,preventExitTransition:p,done:c,nodeRef:d,isIn:u,playToast:m}=e,h=a?`${t}--${s}`:t,f=a?`${n}--${s}`:n,g=(0,o.useRef)(0);return(0,o.useLayoutEffect)(()=>{let e=d.current,t=h.split(" "),n=o=>{o.target===d.current&&(m(),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===g.current&&"animationcancel"!==o.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)},[]),(0,o.useEffect)(()=>{let e=d.current,t=()=>{e.removeEventListener("animationend",t),r?function(e,t,n){void 0===n&&(n=300);let{scrollHeight:o,style:a}=e;requestAnimationFrame(()=>{a.minHeight="initial",a.height=o+"px",a.transition=`all ${n}ms`,requestAnimationFrame(()=>{a.height="0",a.padding="0",a.margin="0",setTimeout(t,n)})})}(e,c,i):c()};u||(p?t():(g.current=1,e.className+=` ${f}`,e.addEventListener("animationend",t)))},[u]),o.createElement(o.Fragment,null,l)}}function d(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}let u=new Map,m=[],h=new Set,f=e=>h.forEach(t=>t(e)),g=()=>u.size>0;function y(e,t){var n;if(t)return!(null==(n=u.get(t))||!n.isToastActive(e));let o=!1;return u.forEach(t=>{t.isToastActive(e)&&(o=!0)}),o}function v(e,t){p(e)&&(g()||m.push({content:e,options:t}),u.forEach(n=>{n.buildToast(e,t)}))}function E(e,t){u.forEach(n=>{null!=t&&null!=t&&t.containerId?(null==t?void 0:t.containerId)===n.id&&n.toggle(e,null==t?void 0:t.id):n.toggle(e,null==t?void 0:t.id)})}function b(e){let{delay:t,isRunning:n,closeToast:r,type:i="default",hide:s,className:p,style:c,controlledProgress:d,progress:u,rtl:m,isIn:h,theme:f}=e,g=s||d&&0===u,y={...c,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused"};d&&(y.transform=`scaleX(${u})`);let v=a("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${f}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":m}),E=l(p)?p({rtl:m,type:i,defaultClassName:v}):a(v,p);return o.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":g},o.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${f} Toastify__progress-bar--${i}`}),o.createElement("div",{role:"progressbar","aria-hidden":g?"true":"false","aria-label":"notification timer",className:E,style:y,[d&&u>=1?"onTransitionEnd":"onAnimationEnd"]:d&&u<1?null:()=>{h&&r()}}))}let k=1,T=()=>""+k++;function G(e,t){return v(e,t),t.toastId}function w(e,t){return{...t,type:t&&t.type||e,toastId:t&&(i(t.toastId)||r(t.toastId))?t.toastId:T()}}function _(e){return(t,n)=>G(t,w(e,n))}function I(e,t){return G(e,w("default",t))}I.loading=(e,t)=>G(e,w("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),I.promise=function(e,t,n){let o,{pending:a,error:r,success:s}=t;a&&(o=i(a)?I.loading(a,n):I.loading(a.render,{...n,...a}));let p={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=(e,t,a)=>{if(null==t)return void I.dismiss(o);let r={type:e,...p,...n,data:a},l=i(t)?{render:t}:t;return o?I.update(o,{...r,...l}):I(l.render,{...r,...l}),a},d=l(e)?e():e;return d.then(e=>c("success",s,e)).catch(e=>c("error",r,e)),d},I.success=_("success"),I.info=_("info"),I.error=_("error"),I.warning=_("warning"),I.warn=I.warning,I.dark=(e,t)=>G(e,w("default",{theme:"dark",...t})),I.dismiss=function(e){!function(e){var t;if(g()){if(null==e||i(t=e)||r(t))u.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=u.get(e.containerId);t?t.removeToast(e.id):u.forEach(t=>{t.removeToast(e.id)})}}else m=m.filter(t=>null!=e&&t.options.toastId!==e)}(e)},I.clearWaitingQueue=function(e){void 0===e&&(e={}),u.forEach(t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()})},I.isActive=y,I.update=function(e,t){void 0===t&&(t={});let n=((e,t)=>{var n;let{containerId:o}=t;return null==(n=u.get(o||1))?void 0:n.toasts.get(e)})(e,t);if(n){let{props:o,content:a}=n,r={delay:100,...o,...t,toastId:t.toastId||e,updateId:T()};r.toastId!==e&&(r.staleId=e);let i=r.render||a;delete r.render,G(i,r)}},I.done=e=>{I.update(e,{progress:1})},I.onChange=function(e){return h.add(e),()=>{h.delete(e)}},I.play=e=>E(!0,e),I.pause=e=>E(!1,e);let O="undefined"!=typeof window?o.useLayoutEffect:o.useEffect,L=e=>{let{theme:t,type:n,isLoading:a,...r}=e;return o.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${n})`,...r})},x={info:function(e){return o.createElement(L,{...e},o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return o.createElement(L,{...e},o.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return o.createElement(L,{...e},o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return o.createElement(L,{...e},o.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return o.createElement("div",{className:"Toastify__spinner"})}},N=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:s}=function(e){var t,n;let[a,r]=(0,o.useState)(!1),[i,l]=(0,o.useState)(!1),s=(0,o.useRef)(null),p=(0,o.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:c,pauseOnHover:d,closeToast:m,onClick:h,closeOnClick:f}=e;function g(){r(!0)}function y(){r(!1)}function v(t){let n=s.current;p.canDrag&&n&&(p.didMove=!0,a&&y(),p.delta="x"===e.draggableDirection?t.clientX-p.start:t.clientY-p.start,p.start!==t.clientX&&(p.canCloseOnClick=!1),n.style.transform=`translate3d(${"x"===e.draggableDirection?`${p.delta}px, var(--y)`:`0, calc(${p.delta}px + var(--y))`},0)`,n.style.opacity=""+(1-Math.abs(p.delta/p.removalDistance)))}function E(){document.removeEventListener("pointermove",v),document.removeEventListener("pointerup",E);let t=s.current;if(p.canDrag&&p.didMove&&t){if(p.canDrag=!1,Math.abs(p.delta)>p.removalDistance)return l(!0),e.closeToast(),void e.collapseAll();t.style.transition="transform 0.2s, opacity 0.2s",t.style.removeProperty("transform"),t.style.removeProperty("opacity")}}null==(n=u.get((t={id:e.toastId,containerId:e.containerId,fn:r}).containerId||1))||n.setToggle(t.id,t.fn),(0,o.useEffect)(()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||y(),window.addEventListener("focus",g),window.addEventListener("blur",y),()=>{window.removeEventListener("focus",g),window.removeEventListener("blur",y)}},[e.pauseOnFocusLoss]);let b={onPointerDown:function(t){if(!0===e.draggable||e.draggable===t.pointerType){p.didMove=!1,document.addEventListener("pointermove",v),document.addEventListener("pointerup",E);let n=s.current;p.canCloseOnClick=!0,p.canDrag=!0,n.style.transition="none","x"===e.draggableDirection?(p.start=t.clientX,p.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(p.start=t.clientY,p.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(t){let{top:n,bottom:o,left:a,right:r}=s.current.getBoundingClientRect();"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&t.clientX>=a&&t.clientX<=r&&t.clientY>=n&&t.clientY<=o?y():g()}};return c&&d&&(b.onMouseEnter=y,e.stacked||(b.onMouseLeave=g)),f&&(b.onClick=e=>{h&&h(e),p.canCloseOnClick&&m()}),{playToast:g,pauseToast:y,isRunning:a,preventExitTransition:i,toastRef:s,eventHandlers:b}}(e),{closeButton:p,children:c,autoClose:d,onClick:m,type:h,hideProgressBar:f,closeToast:g,transition:y,position:v,className:E,style:k,bodyClassName:T,bodyStyle:G,progressClassName:w,progressStyle:_,updateId:I,role:O,progress:L,rtl:N,toastId:A,deleteToast:C,isIn:P,isLoading:S,closeOnClick:M,theme:H}=e,j=a("Toastify__toast",`Toastify__toast-theme--${H}`,`Toastify__toast--${h}`,{"Toastify__toast--rtl":N},{"Toastify__toast--close-on-click":M}),$=l(E)?E({rtl:N,position:v,type:h,defaultClassName:j}):a(j,E),D=function(e){let{theme:t,type:n,isLoading:a,icon:r}=e,i=null,s={theme:t,type:n};return!1===r||(l(r)?i=r({...s,isLoading:a}):(0,o.isValidElement)(r)?i=(0,o.cloneElement)(r,s):a?i=x.spinner():n in x&&(i=x[n](s))),i}(e),R=!!L||!d,V={closeToast:g,type:h,theme:H},W=null;return!1===p||(W=l(p)?p(V):(0,o.isValidElement)(p)?(0,o.cloneElement)(p,V):function(e){let{closeToast:t,theme:n,ariaLabel:a="close"}=e;return o.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":a},o.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(V)),o.createElement(y,{isIn:P,done:C,position:v,preventExitTransition:n,nodeRef:r,playToast:s},o.createElement("div",{id:A,onClick:m,"data-in":P,className:$,...i,style:k,ref:r},o.createElement("div",{...P&&{role:O},className:l(T)?T({type:h}):a("Toastify__toast-body",T),style:G},null!=D&&o.createElement("div",{className:a("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!S})},D),o.createElement("div",null,c)),W,o.createElement(b,{...I&&!R?{key:`pb-${I}`}:{},rtl:N,theme:H,delay:d,isRunning:t,isIn:P,closeToast:g,hide:f,type:h,style:_,className:w,controlledProgress:R,progress:L||0})))},A=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},C=c(A("bounce",!0)),P=(c(A("slide",!0)),c(A("zoom")),c(A("flip")),{position:"top-right",transition:C,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"});function S(e){let t={...P,...e},n=e.stacked,[c,h]=(0,o.useState)(!0),g=(0,o.useRef)(null),{getToastToRender:E,isToastActive:b,count:k}=function(e){let{subscribe:t,getSnapshot:n,setProps:a}=(0,o.useRef)(function(e){let t=e.containerId||1;return{subscribe(n){let a=function(e,t,n){let a=1,c=0,u=[],m=[],h=[],f=t,g=new Map,y=new Set,v=()=>{h=Array.from(g.values()),y.forEach(e=>e())},E=e=>{m=null==e?[]:m.filter(t=>t!==e),v()},b=e=>{let{toastId:t,onOpen:a,updateId:r,children:i}=e.props,s=null==r;e.staleId&&g.delete(e.staleId),g.set(t,e),m=[...m,e.props.toastId].filter(t=>t!==e.staleId),v(),n(d(e,s?"added":"updated")),s&&l(a)&&a((0,o.isValidElement)(i)&&i.props)};return{id:e,props:f,observe:e=>(y.add(e),()=>y.delete(e)),toggle:(e,t)=>{g.forEach(n=>{null!=t&&t!==n.props.toastId||l(n.toggle)&&n.toggle(e)})},removeToast:E,toasts:g,clearQueue:()=>{c-=u.length,u=[]},buildToast:(t,m)=>{var h,y;if((t=>{let{containerId:n,toastId:o,updateId:a}=t,r=g.has(o)&&null==a;return(n?n!==e:1!==e)||r})(m))return;let{toastId:k,updateId:T,data:G,staleId:w,delay:_}=m,I=()=>{E(k)},O=null==T;O&&c++;let L={...f,style:f.toastStyle,key:a++,...Object.fromEntries(Object.entries(m).filter(e=>{let[t,n]=e;return null!=n})),toastId:k,updateId:T,data:G,closeToast:I,isIn:!1,className:s(m.className||f.toastClassName),bodyClassName:s(m.bodyClassName||f.bodyClassName),progressClassName:s(m.progressClassName||f.progressClassName),autoClose:!m.isLoading&&(h=m.autoClose,y=f.autoClose,!1===h||r(h)&&h>0?h:y),deleteToast(){let e=g.get(k),{onClose:t,children:a}=e.props;l(t)&&t((0,o.isValidElement)(a)&&a.props),n(d(e,"removed")),g.delete(k),--c<0&&(c=0),u.length>0?b(u.shift()):v()}};L.closeButton=f.closeButton,!1===m.closeButton||p(m.closeButton)?L.closeButton=m.closeButton:!0===m.closeButton&&(L.closeButton=!p(f.closeButton)||f.closeButton);let x=t;(0,o.isValidElement)(t)&&!i(t.type)?x=(0,o.cloneElement)(t,{closeToast:I,toastProps:L,data:G}):l(t)&&(x=t({closeToast:I,toastProps:L,data:G}));let N={content:x,props:L,staleId:w};f.limit&&f.limit>0&&c>f.limit&&O?u.push(N):r(_)?setTimeout(()=>{b(N)},_):b(N)},setProps(e){f=e},setToggle:(e,t)=>{g.get(e).toggle=t},isToastActive:e=>m.some(t=>t===e),getSnapshot:()=>f.newestOnTop?h.reverse():h}}(t,e,f);u.set(t,a);let c=a.observe(n);return m.forEach(e=>v(e.content,e.options)),m=[],()=>{c(),u.delete(t)}},setProps(e){var n;null==(n=u.get(t))||n.setProps(e)},getSnapshot(){var e;return null==(e=u.get(t))?void 0:e.getSnapshot()}}}(e)).current;a(e);let c=(0,o.useSyncExternalStore)(t,n,n);return{getToastToRender:function(e){if(!c)return[];let t=new Map;return c.forEach(e=>{let{position:n}=e.props;t.has(n)||t.set(n,[]),t.get(n).push(e)}),Array.from(t,t=>e(t[0],t[1]))},isToastActive:y,count:null==c?void 0:c.length}}(t),{className:T,style:G,rtl:w,containerId:_}=t;function L(){n&&(h(!0),I.play())}return O(()=>{if(n){var e;let n=g.current.querySelectorAll('[data-in="true"]'),o=null==(e=t.position)?void 0:e.includes("top"),a=0,r=0;Array.from(n).reverse().forEach((e,t)=>{let n=e;n.classList.add("Toastify__toast--stacked"),t>0&&(n.dataset.collapsed=`${c}`),n.dataset.pos||(n.dataset.pos=o?"top":"bot");let i=a*(c?.2:1)+(c?0:12*t);n.style.setProperty("--y",`${o?i:-1*i}px`),n.style.setProperty("--g","12"),n.style.setProperty("--s",""+(1-(c?r:0))),a+=n.offsetHeight,r+=.025})}},[c,k,n]),o.createElement("div",{ref:g,className:"Toastify",id:_,onMouseEnter:()=>{n&&(h(!1),I.pause())},onMouseLeave:L},E((e,t)=>{let r=t.length?{...G}:{...G,pointerEvents:"none"};return o.createElement("div",{className:function(e){let t=a("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":w});return l(T)?T({position:e,rtl:w,defaultClassName:t}):a(t,s(T))}(e),style:r,key:`container-${e}`},t.map(e=>{let{content:t,props:a}=e;return o.createElement(N,{...a,stacked:n,collapseAll:L,isIn:b(a.toastId,a.containerId),style:a.style,key:`toast-${a.key}`},t)}))}))}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[49774,40179],function(){return t(6840),t(80880)}),_N_E=e.O()}]);