"use strict";(self.webpackChunkJosh_Beck_github_io=self.webpackChunkJosh_Beck_github_io||[]).push([[7],{4922:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(7294),l=a(1883);function n(e){return r.createElement("div",null,r.createElement("div",{id:e.cardTitle,className:"text-2xl primary-text"},e.cardTitle),r.createElement("div",{className:"text-2xl font-bold pt-1 paragraph-color-text"},e.cardSubTitle),r.createElement("div",{className:"text-lg font-bold pt-1 paragraph-color-text"},e.cardDate),r.createElement("div",{className:"text-xl pt-3 paragraph-text"},e.cardData),r.createElement("div",{class:"px-6 pt-4"},e.skill&&e.skill.map((e=>r.createElement(l.Link,{href:"/skills#"+e},r.createElement("span",{class:"inline-block rounded-full px-3 py-1 dynamic-button font-bold text-sm mr-2 mb-2"},e))))))}let c="group items-center last:mb-20 max-w-6xl m-6 mt-16 p-6 dynamic-card";function i(e){return r.createElement("a",{href:e.href},r.createElement("div",{className:c},r.createElement("div",{className:e.video?"pl-1":""},r.createElement(n,{cardTitle:e.cardTitle,cardSubTitle:e.cardSubTitle,cardDate:e.cardDate,cardData:e.cardData,skill:e.skill,href:e.href,video:e.video})),r.createElement("div",{className:(e.video,"")},r.createElement("div",{dangerouslySetInnerHTML:{__html:e.video}}))))}},5502:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var r=a(7294),l=a(1156),n=a(4922);function c(e){let{data:t}=e,a=t.allMarkdownRemark.nodes;return console.log(a),r.createElement("div",null,r.createElement(l.Z,{name:"blog"},a.sort(i).map((e=>r.createElement(n.Z,{cardTitle:e.frontmatter.title,href:e.frontmatter.slug,cardDate:e.frontmatter.date,cardData:e.frontmatter.desc})))))}function i(e,t){return e.frontmatter.priority>t.frontmatter.priority}}}]);
//# sourceMappingURL=component---src-pages-blog-js-f1e83a334635f37b4eeb.js.map