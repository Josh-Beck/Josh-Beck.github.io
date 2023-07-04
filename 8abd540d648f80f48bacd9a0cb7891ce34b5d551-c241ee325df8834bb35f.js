"use strict";(self.webpackChunkJosh_Beck_github_io=self.webpackChunkJosh_Beck_github_io||[]).push([[928],{3204:function(e){const t=/[\p{Lu}]/u,r=/[\p{Ll}]/u,a=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,l=new RegExp("^"+i.source),o=new RegExp(i.source+n.source,"gu"),s=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,a,n)=>{let i=!1,l=!1,o=!1;for(let s=0;s<e.length;s++){const c=e[s];i&&t.test(c)?(e=e.slice(0,s)+"-"+e.slice(s),i=!1,o=l,l=!0,s++):l&&o&&r.test(c)?(e=e.slice(0,s-1)+"-"+e.slice(s-1),o=l,l=!1,i=!0):(i=a(c)===c&&n(c)!==c,o=l,l=n(c)===c&&a(c)!==c)}return e})(e,i,c)),e=e.replace(l,""),e=n.preserveConsecutiveUppercase?((e,t)=>(a.lastIndex=0,e.replace(a,(e=>t(e)))))(e,i):i(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,s.lastIndex=0,e.replace(o,((e,r)=>t(r))).replace(s,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,r){r.d(t,{L:function(){return g},M:function(){return k},P:function(){return E},S:function(){return q},_:function(){return o},a:function(){return l},b:function(){return u},g:function(){return d},h:function(){return s}});var a=r(7294),n=(r(3204),r(5697)),i=r.n(n);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},l.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t.indexOf(r=i[a])>=0||(n[r]=e[r]);return n}const s=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,r){const a={};let n="gatsby-image-wrapper";return"fixed"===r?(a.width=e,a.height=t):"constrained"===r&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:a}}function u(e,t,r,a,n){return void 0===n&&(n={}),l({},r,{loading:a,shouldLoad:e,"data-main-image":"",style:l({},n,{opacity:t?1:0})})}function d(e,t,r,a,n,i,o,s){const c={};i&&(c.backgroundColor=i,"fixed"===r?(c.width=a,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),s&&(c.objectPosition=s);const u=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const m=["children"],h=function(e){let{layout:t,width:r,height:n}=e;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/r*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:r,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+r+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,r=o(e,m);return a.createElement(a.Fragment,null,a.createElement(h,l({},r)),t,null)},p=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],v=function(e){let{src:t,srcSet:r,loading:n,alt:i="",shouldLoad:s}=e,c=o(e,p);return a.createElement("img",l({},c,{decoding:"async",loading:n,src:s?t:void 0,"data-src":s?void 0:t,srcSet:s?r:void 0,"data-srcset":s?void 0:r,alt:i}))},w=function(e){let{fallback:t,sources:r=[],shouldLoad:n=!0}=e,i=o(e,f);const s=i.sizes||(null==t?void 0:t.sizes),c=a.createElement(v,l({},i,t,{sizes:s,shouldLoad:n}));return r.length?a.createElement("picture",null,r.map((e=>{let{media:t,srcSet:r,type:i}=e;return a.createElement("source",{key:t+"-"+i+"-"+r,type:i,media:t,srcSet:n?r:void 0,"data-srcset":n?void 0:r,sizes:s})})),c):c};var y;v.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},w.displayName="Picture",w.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const b=["fallback"],E=function(e){let{fallback:t}=e,r=o(e,b);return t?a.createElement(w,l({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",l({},r))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(y=w.propTypes)?void 0:y.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};const k=function(e){return a.createElement(a.Fragment,null,a.createElement(w,l({},e)),a.createElement("noscript",null,a.createElement(w,l({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=w.propTypes;const x=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],L=["style","className"],C=e=>e.replace(/\n/g,""),N=function(e,t,r){for(var a=arguments.length,n=new Array(a>3?a-3:0),l=3;l<a;l++)n[l-3]=arguments[l];return e.alt||""===e.alt?i().string.apply(i(),[e,t,r].concat(n)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},j={image:i().object.isRequired,alt:N},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],M=new Set;let z,T;const A=function(e){let{as:t="div",image:n,style:i,backgroundColor:u,className:d,class:m,onStartLoad:h,onLoad:g,onError:p}=e,f=o(e,S);const{width:v,height:w,layout:y}=n,b=c(v,w,y),{style:E,className:k}=b,x=o(b,I),L=(0,a.useRef)(),C=(0,a.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(d=m);const N=function(e,t,r){let a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+r+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(y,v,w);return(0,a.useEffect)((()=>{z||(z=r.e(731).then(r.bind(r,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:r}=e;return T=t,{renderImageToString:t,swapPlaceholderImage:r}})));const e=L.current.querySelector("[data-gatsby-image-ssr]");if(e&&s())return e.complete?(null==h||h({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==h||h({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void M.add(C);if(T&&M.has(C))return;let t,a;return z.then((e=>{let{renderImageToString:r,swapPlaceholderImage:o}=e;L.current&&(L.current.innerHTML=r(l({isLoading:!0,isLoaded:M.has(C),image:n},f)),M.has(C)||(t=requestAnimationFrame((()=>{L.current&&(a=o(L.current,C,M,i,h,g,p))}))))})),()=>{t&&cancelAnimationFrame(t),a&&a()}}),[n]),(0,a.useLayoutEffect)((()=>{M.has(C)&&T&&(L.current.innerHTML=T(l({isLoading:M.has(C),isLoaded:M.has(C),image:n},f)),null==h||h({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,a.createElement)(t,l({},x,{style:l({},E,i,{backgroundColor:u}),className:k+(d?" "+d:""),ref:L,dangerouslySetInnerHTML:{__html:N},suppressHydrationWarning:!0}))},O=(0,a.memo)((function(e){return e.image?(0,a.createElement)(A,e):null}));O.propTypes=j,O.displayName="GatsbyImage";const R=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function _(e){return function(t){let{src:r,__imageData:n,__error:i}=t,s=o(t,R);return i&&console.warn(i),n?a.createElement(e,l({image:n},s)):(console.warn("Image not loaded",r),null)}}const V=_((function(e){let{as:t="div",className:r,class:n,style:i,image:s,loading:m="lazy",imgClassName:h,imgStyle:p,backgroundColor:f,objectFit:v,objectPosition:w}=e,y=o(e,x);if(!s)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(r=n),p=l({objectFit:v,objectPosition:w,backgroundColor:f},p);const{width:b,height:N,layout:j,images:S,placeholder:I,backgroundColor:M}=s,z=c(b,N,j),{style:T,className:A}=z,O=o(z,L),R={fallback:void 0,sources:[]};return S.fallback&&(R.fallback=l({},S.fallback,{srcSet:S.fallback.srcSet?C(S.fallback.srcSet):void 0})),S.sources&&(R.sources=S.sources.map((e=>l({},e,{srcSet:C(e.srcSet)})))),a.createElement(t,l({},O,{style:l({},T,i,{backgroundColor:f}),className:A+(r?" "+r:"")}),a.createElement(g,{layout:j,width:b,height:N},a.createElement(E,l({},d(I,!1,j,b,N,M,v,w))),a.createElement(k,l({"data-gatsby-image-ssr":"",className:h},y,u("eager"===m,!1,R,m,p)))))})),W=function(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),n=2;n<r;n++)a[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},B=new Set(["fixed","fullWidth","constrained"]),P={src:i().string.isRequired,alt:N,width:W,height:W,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!B.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};V.displayName="StaticImage",V.propTypes=P;const q=_(O);q.displayName="StaticImage",q.propTypes=P},1484:function(e,t,r){r.d(t,{Z:function(){return n}});var a=r(7294);function n(){return a.createElement("div",null)}},8799:function(e,t,r){r.d(t,{Z:function(){return m}});var a=r(7294);var n=a.forwardRef((function({title:e,titleId:t,...r},n){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},r),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"}))}));var i=a.forwardRef((function({title:e,titleId:t,...r},n){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},r),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"}))}));var l=a.forwardRef((function({title:e,titleId:t,...r},n){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},r),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"}))}));var o=a.forwardRef((function({title:e,titleId:t,...r},n){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},r),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",d:"M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"}))}));var s=a.forwardRef((function({title:e,titleId:t,...r},n){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},r),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"}))}));var c=a.forwardRef((function({title:e,titleId:t,...r},n){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},r),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"}))}));var u=a.forwardRef((function({title:e,titleId:t,...r},n){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},r),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"}))}));var d=a.forwardRef((function({title:e,titleId:t,...r},n){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},r),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"}))}));function m(e){return a.createElement("div",{className:"pl-7 pt-3 text-lg"},a.createElement("a",{href:e.href,className:"z-50 relative inline-flex items-center justify-start py-3 pr-12 overflow-hidden font-semibold primary-color-text transition-all duration-150 ease-in-out rounded-xl hover:pl-9 hover:pr-3 bg-opacity-0 group"},a.createElement("span",{className:"absolute bottom-0 left-0 w-0 h-full transition-all duration-100 ease-in-out primary-color-bg group-hover:w-full"}),a.createElement("span",{className:"absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12"},function(e){if("blog"===e)return a.createElement(i,{className:"h-6 w-6","aria-hidden":"true"});if("skill"===e)return a.createElement(l,{className:"h-6 w-6","aria-hidden":"true"});if("video"===e)return a.createElement(o,{className:"h-6 w-6","aria-hidden":"true"});if("home"===e)return a.createElement(s,{className:"h-6 w-6","aria-hidden":"true"});if("career"===e)return a.createElement(c,{className:"h-6 w-6","aria-hidden":"true"});if("profile"===e)return a.createElement(u,{className:"h-6 w-6","aria-hidden":"true"});if("contact"===e)return a.createElement(d,{className:"h-6 w-6","aria-hidden":"true"})}(e.icon)),a.createElement("span",{className:"absolute left-0 pl-2.5 -translate-x-12 text-white group-hover:translate-x-0 ease-out duration-150"},a.createElement(n,{className:"h-6 w-6","aria-hidden":"true"})),a.createElement("span",{className:"relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white"},e.buttonTitle)))}},6624:function(e,t,r){r.d(t,{Z:function(){return n}});var a=r(7294);function n(e){return a.createElement("div",{className:"z-50"},a.createElement("a",{key:e.name,href:e.href,target:"_blank",className:"z-50 m-1 block px-3 py-2 tertiary-color-text hover:primary-text dynamic-hover"},e.name))}},4669:function(e,t,r){r.d(t,{h:function(){return a}});const a=[{icon:"home",title:"Home",href:"/"},{icon:"profile",title:"Profile",href:"/profile"},{icon:"career",title:"Career",href:"/career"},{icon:"blog",title:"Blog",href:"/blog"},{icon:"video",title:"Presentations",href:"/video"},{icon:"contact",title:"Contact",href:"/contact"}]},4395:function(e,t,r){r.d(t,{c:function(){return o}});var a=r(7294);const n=()=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",height:"40",width:"40",className:"bi bi-linkedin",viewBox:"0 0 16 16"},a.createElement("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})),i=()=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"40",width:"40",fill:"currentColor",className:"bi bi-linkedin",viewBox:"0 0 16 16"},a.createElement("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})),l=()=>a.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",height:"40",width:"40"},a.createElement("title",null,"Hack The Box"),a.createElement("path",{d:"M11.9959.0008a1.1187 1.1187 0 00-.057.002.8993.8993 0 00-.2358.0498.9067.9067 0 00-.1652.079L1.9357 5.675a.889.889 0 00-.4444.7699c0 .006.0004.0128.0006.0192-.0002.007 0 .014 0 .0212V17.556a.889.889 0 00.469.7837l9.5983 5.5416c.018.0102.036.0197.054.0287v.002a.8568.8568 0 00.083.0348c0 .001.01.003.012.004.028.01.056.0177.085.0245.01.001.011.003.016.004.028.006.057.0112.086.0146 0 .0005.01.0009.014.001.03.003.061.005.091.005s.061-.002.091-.005c0-.0005.01-.0009.014-.001a.6831.6831 0 00.086-.0146c.01-.001.011-.002.016-.004a.9404.9404 0 00.085-.0245c0-.001.01-.003.012-.004a.8818.8818 0 00.083-.0347v-.002a1.086 1.086 0 00.054-.0287l9.5986-5.5416a.889.889 0 00.4689-.7837V6.4786c0-.009-.0006-.0172-.0008-.0258h.0003v-.008a.8886.8886 0 00-.3117-.6755c-.01-.008-.019-.0162-.029-.0241 0-.002-.01-.005-.01-.007a.8988.8988 0 00-.1074-.0705L12.4533.1267a.8872.8872 0 00-.4646-.1266zm.01 2.2523c.072 0 .1443.0187.209.056l6.5366 3.774c.2789.161.2789.5633 0 .7243l-6.5367 3.774a.4182.4182 0 01-.4182 0L5.26 6.8074c-.2788-.1609-.2789-.5633 0-.7243l6.5368-3.774a.4193.4193 0 01.209-.056zm-8.0801 6.458a.4145.4145 0 01.215.0565l6.524 3.7666a.417.417 0 01.2086.3612v7.5326c0 .3212-.3477.522-.626.3613l-6.5237-3.7666a.4172.4172 0 01-.2086-.3613V9.1288c0-.2408.1955-.414.4107-.4177zm16.1599 0c.215.004.4107.1768.4107.4177v7.5325c0 .149-.08.2868-.2087.3614l-6.5239 3.7666c-.278.1606-.6258-.0401-.6258-.3614v-7.5325c0-.149.08-.2867.2086-.3613l6.5238-3.7666a.415.415 0 01.2152-.0565z",id:"mainIconPathAttribute"})),o=[{name:a.createElement(n,null),href:"https://www.linkedin.com/in/joshuatbeck/"},{name:a.createElement(i,null),href:"https://github.com/Josh-Beck"},{name:a.createElement(l,null),href:"https://app.hackthebox.com/profile/147141"}]}}]);
//# sourceMappingURL=8abd540d648f80f48bacd9a0cb7891ce34b5d551-c241ee325df8834bb35f.js.map