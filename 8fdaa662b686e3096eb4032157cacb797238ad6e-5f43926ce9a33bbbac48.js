(self.webpackChunkJosh_Beck_github_io=self.webpackChunkJosh_Beck_github_io||[]).push([[254],{4852:function(e){"use strict";e.exports=Object.assign},4120:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(7294),o=r(471);let i=20;function a(e){switch(e){case"blog":return n.createElement(o.$GO,{size:i});case"video":return n.createElement(o.oK6,{size:i});case"career":return n.createElement(o._BR,{size:i});case"bio":return n.createElement(o.Mdg,{size:i});case"contact":return n.createElement(o.qo$,{size:i});case"arrow":return n.createElement(o.fWx,{size:i})}}function c(e){return n.createElement("div",{className:"pl-7 pt-3 text-md xl:text-lg 2xl-text-xl"},n.createElement("a",{href:e.href,className:"z-50 relative inline-flex items-center justify-start py-3 pr-12 overflow-hidden font-semibold primary-color-text transition-all duration-150 ease-in-out rounded-xl hover:pl-9 hover:pr-3 bg-opacity-0 group"},n.createElement("span",{className:"absolute bottom-0 left-0 w-0 h-full transition-all duration-100 ease-in-out primary-color-bg group-hover:w-full"}),n.createElement("span",{className:"absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12"},a(e.icon)),n.createElement("span",{className:"absolute left-0 pl-2.5 -translate-x-12 cool-button-text-color group-hover:translate-x-0 ease-out duration-150"},a("arrow")),n.createElement("span",{className:"relative w-full text-left transition-colors duration-200 ease-in-out group-hover:cool-button-text-color"},e.buttonTitle)))}},8810:function(e,t,r){"use strict";r.d(t,{Z:function(){return ye}});var n,o,i,a,c=r(7294),u=r(5697),s=r.n(u),l=r(3524),f=r.n(l),p=r(9590),d=r.n(p),h=r(4852),y=r.n(h),m="bodyAttributes",b="htmlAttributes",v="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(g).map((function(e){return g[e]})),"charset"),w="cssText",E="href",O="http-equiv",A="innerHTML",C="itemprop",S="name",j="property",k="rel",x="src",P="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",L="defer",_="encodeSpecialCharacters",M="onChangeClientState",z="titleTemplate",B=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),R=[g.NOSCRIPT,g.SCRIPT,g.STYLE],D="data-react-helmet",q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},F=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},U=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},J=function(e){var t=G(e,g.TITLE),r=G(e,z);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=G(e,I);return t||n||void 0},K=function(e){return G(e,M)||function(){}},W=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},Z=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},$=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&te("Helmet: "+e+' should be of type "Array". Instead found type "'+q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||r===k&&"canonical"===e[r].toLowerCase()||u===k&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(c)||c!==A&&c!==w&&c!==C||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][s]&&(o[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=y()({},n[c],o[c]);n[c]=u}return e}),[]).reverse()},G=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},Q=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){Q(e)}),0)}),V=function(e){return clearTimeout(e)},X="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:r.g.requestAnimationFrame||Q,ee="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||V:r.g.cancelAnimationFrame||V,te=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},re=null,ne=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;ae(g.BODY,n),ae(g.HTML,o),ie(f,p);var d={baseTag:ce(g.BASE,r),linkTags:ce(g.LINK,i),metaTags:ce(g.META,a),noscriptTags:ce(g.NOSCRIPT,c),scriptTags:ce(g.SCRIPT,s),styleTags:ce(g.STYLE,l)},h={},y={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(h[e]=r),n.length&&(y[e]=d[e].oldTags)})),t&&t(),u(e,h,y)},oe=function(e){return Array.isArray(e)?e.join(""):e},ie=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ae(g.TITLE,t)},ae=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(D),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";r.getAttribute(u)!==s&&r.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);o.length===i.length?r.removeAttribute(D):r.getAttribute(D)!==a.join(",")&&r.setAttribute(D,a.join(","))}},ce=function(e,t){var r=document.head||document.querySelector(g.HEAD),n=r.querySelectorAll(e+"["+D+"]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===A)r.innerHTML=t.innerHTML;else if(n===w)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(D,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},se=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[N[r]||r]=e[r],t}),t)},le=function(e,t,r){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[D]=!0,o=se(r,n),[c.createElement(g.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=ue(r),i=oe(t);return o?"<"+e+" "+D+'="true" '+o+">"+U(i,n)+"</"+e+">":"<"+e+" "+D+'="true">'+U(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case m:case b:return{toComponent:function(){return se(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[D]=!0,n);return Object.keys(t).forEach((function(e){var r=N[e]||e;if(r===A||r===w){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===A||e===w)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+U(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===R.indexOf(e);return t+"<"+e+" "+D+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},fe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:le(g.BASE,t,n),bodyAttributes:le(m,r,n),htmlAttributes:le(b,o,n),link:le(g.LINK,i,n),meta:le(g.META,a,n),noscript:le(g.NOSCRIPT,c,n),script:le(g.SCRIPT,u,n),style:le(g.STYLE,s,n),title:le(g.TITLE,{title:f,titleAttributes:p},n)}},pe=f()((function(e){return{baseTag:Z([E,P],e),bodyAttributes:W(m,e),defer:G(e,L),encode:G(e,_),htmlAttributes:W(b,e),linkTags:$(g.LINK,[k,E],e),metaTags:$(g.META,[S,T,O,j,C],e),noscriptTags:$(g.NOSCRIPT,[A],e),onChangeClientState:K(e),scriptTags:$(g.SCRIPT,[x,A],e),styleTags:$(g.STYLE,[w],e),title:J(e),titleAttributes:W(v,e)}}),(function(e){re&&ee(re),e.defer?re=X((function(){ne(e,(function(){re=null}))})):(ne(e),re=null)}),fe)((function(){return null})),de=(o=pe,a=i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return Y({},n,((t={})[r.type]=[].concat(n[r.type]||[],[Y({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case g.TITLE:return Y({},o,((t={})[n.type]=a,t.titleAttributes=Y({},i),t));case g.BODY:return Y({},o,{bodyAttributes:Y({},i)});case g.HTML:return Y({},o,{htmlAttributes:Y({},i)})}return Y({},o,((r={})[n.type]=Y({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=Y({},t);return Object.keys(e).forEach((function(t){var n;r=Y({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[B[r]||r]=e[r],t}),t)}(F(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=F(e,["children"]),n=Y({},r);return t&&(n=this.mapChildrenToProps(t,n)),c.createElement(o,n)},H(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);de.renderStatic=de.rewind;var he=r(220);function ye(){return c.createElement(de,null,c.createElement("meta",{charSet:"utf-8"}),c.createElement("title",null,he.jG),c.createElement("meta",{name:"description",content:he.kr}),c.createElement("meta",{name:"keywords",content:he.aQ}),c.createElement("link",{rel:"canonical",href:he._O}))}},6624:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(7294);function o(e){return n.createElement("div",{className:"z-50"},n.createElement("a",{key:e.name,href:e.href,target:"_blank",className:"z-50 m-1 block px-3 py-2 icon-color-text hover:primary-text dynamic-hover"},e.name))}},6985:function(e,t,r){"use strict";r.d(t,{A1:function(){return n},Ib:function(){return o},jo:function(){return i}});const n="Joshua Beck",o="Application Security Engineer",i="Staff Application Security Engineer for John Deere and avid cyber community supporter."},3700:function(e,t,r){"use strict";r.d(t,{h:function(){return n}});const n=[{icon:"bio",title:"Bio",href:"/profile"},{icon:"career",title:"Career",href:"/career"},{icon:"blog",title:"Blog",href:"/blog"},{icon:"video",title:"Presentations",href:"/video"},{icon:"contact",title:"Contact",href:"/contact"}]},220:function(e,t,r){"use strict";r.d(t,{_O:function(){return a},aQ:function(){return i},jG:function(){return n},kr:function(){return o}});const n="Joshua Beck",o="Joshua Beck's personal portfolio",i="blog, cyber security, application security, app sec",a="https://josh-beck.github.io"},7401:function(e,t,r){"use strict";r.d(t,{c:function(){return c}});var n=r(7294),o=r(9583),i=r(7735),a=r(6225);const c=[{name:n.createElement(o.ltd,{size:30}),href:"https://www.linkedin.com/in/joshuatbeck/"},{name:n.createElement(o.hJX,{size:30}),href:"https://github.com/Josh-Beck"},{name:n.createElement(i.Aih,{size:30}),href:"https://app.hackthebox.com/profile/147141"},{name:n.createElement(a.SIz,{size:30}),href:"https://www.youtube.com/channel/UC8X3SEfZYbLWKeO077g11cQ"}]},9590:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof a.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof a.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!i(e[s[u]],a[s[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4405:function(e,t,r){"use strict";r.d(t,{w_:function(){return s}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),a=function(){return a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function u(e){return e&&e.map((function(e,t){return n.createElement(e.tag,a({key:t},e.attr),u(e.child))}))}function s(e){return function(t){return n.createElement(l,a({attr:a({},e.attr)},t),u(e.child))}}function l(e){var t=function(t){var r,o=e.attr,i=e.size,u=e.title,s=c(e,["attr","size","title"]),l=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:r,style:a(a({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),u&&n.createElement("title",null,u),e.children)};return void 0!==i?n.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}},3524:function(e,t,r){"use strict";var n,o=r(7294),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):r&&(u=r(u))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(f,"canUseDOM",c),f}}},3611:function(e,t,r){"use strict";t.Z=r.p+"static/headShot-086683bc82766b3eac81dec296c31b51.jpg"}}]);
//# sourceMappingURL=8fdaa662b686e3096eb4032157cacb797238ad6e-5f43926ce9a33bbbac48.js.map