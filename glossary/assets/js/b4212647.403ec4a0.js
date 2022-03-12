"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[8546],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||l;return a?n.createElement(f,c(c({ref:t},s),{},{components:a})):n.createElement(f,c({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,c=new Array(l);c[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var u=2;u<l;u++)c[u]=a[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7462),r=a(7294),l=a(2389),c=a(9548),o=a(6010),i="tabItem_LplD";function u(e){var t,a,l,u=e.lazy,s=e.block,p=e.defaultValue,m=e.values,d=e.groupId,f=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,c.lx)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=h[0])?void 0:l.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,c.UB)(),k=y.tabGroupChoices,w=y.setTabGroupChoices,N=(0,r.useState)(g),T=N[0],x=N[1],O=[],I=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var S=k[d];null!=S&&S!==T&&b.some((function(e){return e.value===S}))&&x(S)}var E=function(e){var t=e.currentTarget,a=O.indexOf(t),n=b[a].value;n!==T&&(I(t),x(n),null!=d&&w(d,n))},A=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=O.indexOf(e.currentTarget)+1;a=O[n]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;a=O[r]||O[O.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},f)},b.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return O.push(e)},onKeyDown:A,onFocus:E,onClick:E},l,{className:(0,o.Z)("tabs__item",i,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),u?(0,r.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function s(e){var t=(0,l.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},238:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),c=a(9877),o=a(8215),i=["components"],u={},s="Accessing cache",p={unversionedId:"atmo/runnable-api/cache",id:"atmo/runnable-api/cache",title:"Accessing cache",description:"Runnables can access an attached cache (such as Redis) using the cache namespace of the Runnable API. Atmo will configure the cache, and will bind it to the Runnable at runtime. Atmo provides a default in-memory cache if no external cache is connected.",source:"@site/docs/atmo/runnable-api/cache.md",sourceDirName:"atmo/runnable-api",slug:"/atmo/runnable-api/cache",permalink:"/docs/glossary/atmo/runnable-api/cache",editUrl:"https://github.com/suborbital/docs/docs/atmo/runnable-api/cache.md",tags:[],version:"current",lastUpdatedAt:1645828798,formattedLastUpdatedAt:"2/25/2022",frontMatter:{},sidebar:"docs",previous:{title:"Using SQL databases",permalink:"/docs/glossary/atmo/usage/using-sql-databases"},next:{title:"Static files",permalink:"/docs/glossary/atmo/runnable-api/file"}},m=[{value:"Set",id:"set",children:[],level:2},{value:"Get",id:"get",children:[],level:2}],d={toc:m};function f(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"accessing-cache"},"Accessing cache"),(0,l.kt)("p",null,"Runnables can access an attached cache (such as Redis) using the ",(0,l.kt)("inlineCode",{parentName:"p"},"cache")," namespace of the Runnable API. Atmo will configure the cache, and will bind it to the Runnable at runtime. Atmo provides a default in-memory cache if no external cache is connected."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Documentation for connecting an external cache to Atmo can be found ",(0,l.kt)("a",{parentName:"p",href:"/docs/glossary/atmo/usage/connections"},"here"),"."))),(0,l.kt)(c.Z,{groupId:"reactr-language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,l.kt)("p",null,"In Rust these methods are available under the ",(0,l.kt)("inlineCode",{parentName:"p"},"cache")," module:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'# Use the "cache" module\nuse suborbital::cache;\n\n# Invoke the "Get" method\ncache::get(\u2026)\n'))),(0,l.kt)(o.Z,{value:"assemblyscript",label:"AssemblyScript \ud83e\uddea",mdxType:"TabItem"},(0,l.kt)("p",null,"In TypeScript/AssemblyScript all methods are prefixed with ",(0,l.kt)("inlineCode",{parentName:"p"},"cache"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// Import then invoke \"Get\" method\nimport { cacheGet } from '@suborbital/suborbital'\n\ncacheGet(\u2026)\n"))),(0,l.kt)(o.Z,{value:"swift",label:"Swift \ud83e\uddea",mdxType:"TabItem"},(0,l.kt)("p",null,"In Swift these methods are prefixed with ",(0,l.kt)("inlineCode",{parentName:"p"},"Cache"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'// Invoke the "Get" method\nSuborbital.CacheGet(\u2026)\n')))),(0,l.kt)("p",null,"The following namespace methods are available:"),(0,l.kt)("h2",{id:"set"},"Set"),(0,l.kt)("p",null,"Set a given key's value in the cache. The provided TTL is in seconds."),(0,l.kt)(c.Z,{groupId:"reactr-language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn set(key: &str, val: Vec<u8>, ttl: i32)\n"))),(0,l.kt)(o.Z,{value:"assemblyscript",label:"AssemblyScript \ud83e\uddea",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function cacheSet(key: string, value: ArrayBuffer, ttl: i32): void;\n"))),(0,l.kt)(o.Z,{value:"swift",label:"Swift \ud83e\uddea",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"public func CacheSet(key: String, value: String, ttl: Int)\n")))),(0,l.kt)("h2",{id:"get"},"Get"),(0,l.kt)("p",null,"Get the provided key from the cache."),(0,l.kt)(c.Z,{groupId:"reactr-language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn get(key: &str) -> Result<Vec<u8>, RunErr>\n"))),(0,l.kt)(o.Z,{value:"assemblyscript",label:"AssemblyScript \ud83e\uddea",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function cacheGet(key: string): ArrayBuffer;\n"))),(0,l.kt)(o.Z,{value:"swift",label:"Swift \ud83e\uddea",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"public func CacheGet(key: String) -> String\n")))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Additional cache operations are coming soon.")))}f.isMDXComponent=!0}}]);