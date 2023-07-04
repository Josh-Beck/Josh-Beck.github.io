"use strict";(self.webpackChunkJosh_Beck_github_io=self.webpackChunkJosh_Beck_github_io||[]).push([[24],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,l=/[_.\- ]+/,i=new RegExp("^"+l.source),s=new RegExp(l.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const l=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):l(e);return e!==l(e)&&(e=((e,r,n)=>{let l=!1,i=!1,s=!1;for(let o=0;o<e.length;o++){const c=e[o];l&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),l=!1,s=i,i=!0,o++):i&&s&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),s=i,i=!1,l=!0):(l=r(c)===c&&n(c)!==c,s=i,i=n(c)===c&&r(c)!==c)}return e})(e,l,c)),e=e.replace(i,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,l):l(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,o.lastIndex=0,e.replace(s,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return h},M:function(){return x},P:function(){return E},S:function(){return q},_:function(){return s},a:function(){return i},b:function(){return d},g:function(){return u},h:function(){return o}});var r=a(7294),n=(a(3204),a(5697)),l=a.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t.indexOf(a=l[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function u(e,t,a,r,n,l,s,o){const c={};l&&(c.backgroundColor=l,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=l,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),o&&(c.objectPosition=o);const d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const m=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){let{children:t}=e,a=s(e,m);return r.createElement(r.Fragment,null,r.createElement(p,i({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],g=["fallback","sources","shouldLoad"],w=function(e){let{src:t,srcSet:a,loading:n,alt:l="",shouldLoad:o}=e,c=s(e,f);return r.createElement("img",i({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:l}))},v=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,l=s(e,g);const o=l.sizes||(null==t?void 0:t.sizes),c=r.createElement(w,i({},l,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:l}=e;return r.createElement("source",{key:t+"-"+l+"-"+a,type:l,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var b;w.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},v.displayName="Picture",v.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const y=["fallback"],E=function(e){let{fallback:t}=e,a=s(e,y);return t?r.createElement(v,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(b=v.propTypes)?void 0:b.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const x=function(e){return r.createElement(r.Fragment,null,r.createElement(v,i({},e)),r.createElement("noscript",null,r.createElement(v,i({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=v.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],N=["style","className"],L=e=>e.replace(/\n/g,""),j=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),i=3;i<r;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?l().string.apply(l(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},C={image:l().object.isRequired,alt:j},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],z=["style","className"],I=new Set;let A,T;const M=function(e){let{as:t="div",image:n,style:l,backgroundColor:d,className:u,class:m,onStartLoad:p,onLoad:h,onError:f}=e,g=s(e,S);const{width:w,height:v,layout:b}=n,y=c(w,v,b),{style:E,className:x}=y,k=s(y,z),N=(0,r.useRef)(),L=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(u=m);const j=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,w,v);return(0,r.useEffect)((()=>{A||(A=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return T=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=N.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==p||p({wasCached:!0}),null==h||h({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==h||h({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void I.add(L);if(T&&I.has(L))return;let t,r;return A.then((e=>{let{renderImageToString:a,swapPlaceholderImage:s}=e;N.current&&(N.current.innerHTML=a(i({isLoading:!0,isLoaded:I.has(L),image:n},g)),I.has(L)||(t=requestAnimationFrame((()=>{N.current&&(r=s(N.current,L,I,l,p,h,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{I.has(L)&&T&&(N.current.innerHTML=T(i({isLoading:I.has(L),isLoaded:I.has(L),image:n},g)),null==p||p({wasCached:!0}),null==h||h({wasCached:!0}))}),[n]),(0,r.createElement)(t,i({},k,{style:i({},E,l,{backgroundColor:d}),className:x+(u?" "+u:""),ref:N,dangerouslySetInnerHTML:{__html:j},suppressHydrationWarning:!0}))},O=(0,r.memo)((function(e){return e.image?(0,r.createElement)(M,e):null}));O.propTypes=C,O.displayName="GatsbyImage";const R=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function _(e){return function(t){let{src:a,__imageData:n,__error:l}=t,o=s(t,R);return l&&console.warn(l),n?r.createElement(e,i({image:n},o)):(console.warn("Image not loaded",a),null)}}const B=_((function(e){let{as:t="div",className:a,class:n,style:l,image:o,loading:m="lazy",imgClassName:p,imgStyle:f,backgroundColor:g,objectFit:w,objectPosition:v}=e,b=s(e,k);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),f=i({objectFit:w,objectPosition:v,backgroundColor:g},f);const{width:y,height:j,layout:C,images:S,placeholder:z,backgroundColor:I}=o,A=c(y,j,C),{style:T,className:M}=A,O=s(A,N),R={fallback:void 0,sources:[]};return S.fallback&&(R.fallback=i({},S.fallback,{srcSet:S.fallback.srcSet?L(S.fallback.srcSet):void 0})),S.sources&&(R.sources=S.sources.map((e=>i({},e,{srcSet:L(e.srcSet)})))),r.createElement(t,i({},O,{style:i({},T,l,{backgroundColor:g}),className:M+(a?" "+a:"")}),r.createElement(h,{layout:C,width:y,height:j},r.createElement(E,i({},u(z,!1,C,y,j,I,w,v))),r.createElement(x,i({"data-gatsby-image-ssr":"",className:p},b,d("eager"===m,!1,R,m,f)))))})),V=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?l().number.apply(l(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},W=new Set(["fixed","fullWidth","constrained"]),P={src:l().string.isRequired,alt:j,width:V,height:V,sizes:l().string,layout:e=>{if(void 0!==e.layout&&!W.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};B.displayName="StaticImage",B.propTypes=P;const q=_(O);q.displayName="StaticImage",q.propTypes=P},1484:function(e,t,a){a.d(t,{Z:function(){return n}});var r=a(7294);function n(){return r.createElement("div",null)}},8799:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(7294);var n=r.forwardRef((function({title:e,titleId:t,...a},n){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},a),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"}))}));var l=r.forwardRef((function({title:e,titleId:t,...a},n){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},a),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"}))}));var i=r.forwardRef((function({title:e,titleId:t,...a},n){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},a),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"}))}));var s=r.forwardRef((function({title:e,titleId:t,...a},n){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},a),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",d:"M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"}))}));var o=r.forwardRef((function({title:e,titleId:t,...a},n){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},a),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"}))}));var c=r.forwardRef((function({title:e,titleId:t,...a},n){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},a),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"}))}));var d=r.forwardRef((function({title:e,titleId:t,...a},n){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},a),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"}))}));var u=r.forwardRef((function({title:e,titleId:t,...a},n){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},a),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"}))}));function m(e){return r.createElement("div",{className:"pl-7 pt-3 text-md"},r.createElement("a",{href:e.href,className:"z-50 relative inline-flex items-center justify-start py-3 pr-12 overflow-hidden font-semibold primary-color-text transition-all duration-150 ease-in-out rounded-xl hover:pl-9 hover:pr-3 bg-opacity-0 group"},r.createElement("span",{className:"absolute bottom-0 left-0 w-0 h-full transition-all duration-100 ease-in-out primary-color-bg group-hover:w-full"}),r.createElement("span",{className:"absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12"},function(e){if("blog"===e)return r.createElement(l,{className:"h-6 w-6","aria-hidden":"true"});if("skill"===e)return r.createElement(i,{className:"h-6 w-6","aria-hidden":"true"});if("video"===e)return r.createElement(s,{className:"h-6 w-6","aria-hidden":"true"});if("home"===e)return r.createElement(o,{className:"h-6 w-6","aria-hidden":"true"});if("career"===e)return r.createElement(c,{className:"h-6 w-6","aria-hidden":"true"});if("profile"===e)return r.createElement(d,{className:"h-6 w-6","aria-hidden":"true"});if("contact"===e)return r.createElement(u,{className:"h-6 w-6","aria-hidden":"true"})}(e.icon)),r.createElement("span",{className:"absolute left-0 pl-2.5 -translate-x-12 text-white group-hover:translate-x-0 ease-out duration-150"},r.createElement(n,{className:"h-6 w-6","aria-hidden":"true"})),r.createElement("span",{className:"relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white"},e.buttonTitle)))}},6624:function(e,t,a){a.d(t,{Z:function(){return n}});var r=a(7294);function n(e){return r.createElement("div",{className:"z-50"},r.createElement("a",{key:e.name,href:e.href,target:"_blank",className:"z-50 m-1 block px-3 py-2 tertiary-color-text hover:primary-text dynamic-hover"},e.name))}},1156:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(7294),n=a(8810);const l="\nStaff Application Security Engineer for John Deere and avid cyber community supporter.";var i=a(4395),s=a(8799),o=a(1484),c=a(6624),d=a(4669),u=a(8032);function m(e){return r.createElement("div",{className:"bg-white flex flex-col h-screen justify-between antialiased"},r.createElement(n.Z,null),r.createElement("div",{className:"min-h-screen w-screen overflow-x-auto hidden lg:flex screen-background-style"},r.createElement(o.Z,null),r.createElement("div",{className:"w-1/3 absolute"},r.createElement(u.S,{src:"../content/images/jb.jpg",className:"w-[50%] m-7 ml-7 mt-16 rounded-3xl flex justify-center items-center z-50",alt:"Profile Picture",__imageData:a(7059)}),r.createElement("div",{className:"w-full text-6xl p-6 pt-0 flex primary-text"},"Joshua Beck"),r.createElement("div",{className:"w-full text-xl pl-7 flex font-bold paragraph-color-text"}," Application Security Engineer"),r.createElement("p",{className:"w-[90%] text-lg pl-7 pt-1 md:flex lg:hidden xl:flex paragraph-text"},l),r.createElement("div",{className:"flex flex-wrap w-full"},d.h.map((e=>r.createElement(s.Z,{href:e.href,icon:e.icon,buttonTitle:e.title})))),r.createElement("div",{id:"icons",className:"w-2/5 z-50 flex p-5 bottom-0 fixed justify-left"},i.c.map((e=>r.createElement(c.Z,{name:e.name,href:e.href}))))),r.createElement("div",{className:"w-full z-10 min-w-0 overflow-auto ..."},r.createElement("div",{className:"ml-[45%] mr-[10%]"},e.children))),r.createElement("div",{className:"lg:hidden screen-background-style"},r.createElement("div",{className:""},r.createElement("div",{className:"w-full text-5xl p-6 flex mt-12 text-center justify-center primary-text"},"Joshua Beck"),r.createElement("div",{className:"w-full text-3xl flex justify-center paragraph-text"}," Application Security "),r.createElement("p",{className:"w-full text-lg p-2 pt-3 mb-8 pr-3 flex justify-center items-center paragraph-text"},l)),r.createElement("div",{className:"flex flex-wrap justify-center"},d.h.map((e=>r.createElement(s.Z,{href:e.href,icon:e.icon,buttonTitle:e.title})))),e.children,r.createElement("div",{id:"icons",className:"lg:hidden flex p-5 bottom-0 justify-center"},i.c.map((e=>r.createElement(c.Z,{name:e.name,href:e.href}))))))}},4669:function(e,t,a){a.d(t,{h:function(){return r}});const r=[{icon:"home",title:"Home",href:"/"},{icon:"profile",title:"Profile",href:"/profile"},{icon:"career",title:"Career",href:"/career"},{icon:"blog",title:"Blog",href:"/blog"},{icon:"video",title:"Presentations",href:"/video"},{icon:"contact",title:"Contact",href:"/contact"}]},4395:function(e,t,a){a.d(t,{c:function(){return s}});var r=a(7294);const n=()=>r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",height:"30",width:"30",className:"bi bi-linkedin",viewBox:"0 0 16 16"},r.createElement("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})),l=()=>r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"30",width:"30",fill:"currentColor",className:"bi bi-linkedin",viewBox:"0 0 16 16"},r.createElement("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})),i=()=>r.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",height:"30",width:"30"},r.createElement("title",null,"Hack The Box"),r.createElement("path",{d:"M11.9959.0008a1.1187 1.1187 0 00-.057.002.8993.8993 0 00-.2358.0498.9067.9067 0 00-.1652.079L1.9357 5.675a.889.889 0 00-.4444.7699c0 .006.0004.0128.0006.0192-.0002.007 0 .014 0 .0212V17.556a.889.889 0 00.469.7837l9.5983 5.5416c.018.0102.036.0197.054.0287v.002a.8568.8568 0 00.083.0348c0 .001.01.003.012.004.028.01.056.0177.085.0245.01.001.011.003.016.004.028.006.057.0112.086.0146 0 .0005.01.0009.014.001.03.003.061.005.091.005s.061-.002.091-.005c0-.0005.01-.0009.014-.001a.6831.6831 0 00.086-.0146c.01-.001.011-.002.016-.004a.9404.9404 0 00.085-.0245c0-.001.01-.003.012-.004a.8818.8818 0 00.083-.0347v-.002a1.086 1.086 0 00.054-.0287l9.5986-5.5416a.889.889 0 00.4689-.7837V6.4786c0-.009-.0006-.0172-.0008-.0258h.0003v-.008a.8886.8886 0 00-.3117-.6755c-.01-.008-.019-.0162-.029-.0241 0-.002-.01-.005-.01-.007a.8988.8988 0 00-.1074-.0705L12.4533.1267a.8872.8872 0 00-.4646-.1266zm.01 2.2523c.072 0 .1443.0187.209.056l6.5366 3.774c.2789.161.2789.5633 0 .7243l-6.5367 3.774a.4182.4182 0 01-.4182 0L5.26 6.8074c-.2788-.1609-.2789-.5633 0-.7243l6.5368-3.774a.4193.4193 0 01.209-.056zm-8.0801 6.458a.4145.4145 0 01.215.0565l6.524 3.7666a.417.417 0 01.2086.3612v7.5326c0 .3212-.3477.522-.626.3613l-6.5237-3.7666a.4172.4172 0 01-.2086-.3613V9.1288c0-.2408.1955-.414.4107-.4177zm16.1599 0c.215.004.4107.1768.4107.4177v7.5325c0 .149-.08.2868-.2087.3614l-6.5239 3.7666c-.278.1606-.6258-.0401-.6258-.3614v-7.5325c0-.149.08-.2867.2086-.3613l6.5238-3.7666a.415.415 0 01.2152-.0565z",id:"mainIconPathAttribute"})),s=[{name:r.createElement(n,null),href:"https://www.linkedin.com/in/joshuatbeck/"},{name:r.createElement(l,null),href:"https://github.com/Josh-Beck"},{name:r.createElement(i,null),href:"https://app.hackthebox.com/profile/147141"}]},7059:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#383838","images":{"fallback":{"src":"/static/b5d042663adeb7873f1632aa516c002a/a11f8/jb.jpg","srcSet":"/static/b5d042663adeb7873f1632aa516c002a/6bfa0/jb.jpg 756w,\\n/static/b5d042663adeb7873f1632aa516c002a/ae2ba/jb.jpg 1512w,\\n/static/b5d042663adeb7873f1632aa516c002a/a11f8/jb.jpg 3024w","sizes":"(min-width: 3024px) 3024px, 100vw"},"sources":[{"srcSet":"/static/b5d042663adeb7873f1632aa516c002a/8e8f0/jb.webp 756w,\\n/static/b5d042663adeb7873f1632aa516c002a/ca727/jb.webp 1512w,\\n/static/b5d042663adeb7873f1632aa516c002a/08ac5/jb.webp 3024w","type":"image/webp","sizes":"(min-width: 3024px) 3024px, 100vw"}]},"width":3024,"height":3116}')}}]);
//# sourceMappingURL=b6878a801316fdca0404663f902c4ac45193a8f4-4d1b50c873c8d8cc48c5.js.map