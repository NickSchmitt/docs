"use strict";(self.webpackChunkatmo_trial_doc=self.webpackChunkatmo_trial_doc||[]).push([[8546],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),i=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=i(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=i(n),d=r,f=m["".concat(o,".").concat(d)]||m[d]||p[d]||l;return n?a.createElement(f,u(u({ref:t},s),{},{components:n})):a.createElement(f,u({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,u=new Array(l);u[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,u[1]=c;for(var i=2;i<l;i++)u[i]=n[i];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7462),r=n(7294),l=n(2389),u=n(9548),c=n(6010),o="tabItem_LplD";function i(e){var t,n,l,i=e.lazy,s=e.block,p=e.defaultValue,m=e.values,d=e.groupId,f=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,u.lx)(h,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(t=null!=p?p:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=b[0])?void 0:l.props.value;if(null!==y&&!h.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,u.UB)(),k=g.tabGroupChoices,T=g.setTabGroupChoices,w=(0,r.useState)(y),x=w[0],N=w[1],O=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var S=k[d];null!=S&&S!==x&&h.some((function(e){return e.value===S}))&&N(S)}var I=function(e){var t=e.currentTarget,n=O.indexOf(t),a=h[n].value;a!==x&&(E(t),N(a),null!=d&&T(d,a))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":s},f)},h.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return O.push(e)},onKeyDown:Z,onFocus:I,onClick:I},l,{className:(0,c.Z)("tabs__item",o,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(b.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function s(e){var t=(0,l.Z)();return r.createElement(i,(0,a.Z)({key:String(t)},e))}},238:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),u=n(9877),c=n(8215),o=["components"],i={},s="Accessing cache",p={unversionedId:"atmo/runnable-api/cache",id:"atmo/runnable-api/cache",title:"Accessing cache",description:"Runnables can access an attached cache (such as Redis) using the",source:"@site/docs/atmo/runnable-api/cache.md",sourceDirName:"atmo/runnable-api",slug:"/atmo/runnable-api/cache",permalink:"/docs/atmo/runnable-api/cache",editUrl:"https://github.com/suborbital/docs/docs/atmo/runnable-api/cache.md",tags:[],version:"current",lastUpdatedAt:1644846662,formattedLastUpdatedAt:"2/14/2022",frontMatter:{},sidebar:"docs",previous:{title:"Authentication",permalink:"/docs/atmo/runnable-api/authentication"},next:{title:"Example Runnable",permalink:"/docs/atmo/runnable-api/example-runnable"}},m=[{value:"Set",id:"set",children:[],level:2},{value:"Get",id:"get",children:[],level:2}],d={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"accessing-cache"},"Accessing cache"),(0,l.kt)("p",null,"Runnables can access an attached cache (such as Redis) using the\n",(0,l.kt)("inlineCode",{parentName:"p"},"cache")," namespace of the Runnable API. Atmo will configure the\ncache, and will bind it to the Runnable at runtime. Atmo provides\na default in-memory cache if no external cache is connected."),(0,l.kt)("p",null,"Documentation for connecting an external cache to Atmo will be\navailable soon."),(0,l.kt)(u.Z,{groupId:"reactr-language",mdxType:"Tabs"},(0,l.kt)(c.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},"For Rust, these methods are available under the `cache` module.",(0,l.kt)("p",null,"  Example: ",(0,l.kt)("inlineCode",{parentName:"p"},"cache::get()"))),(0,l.kt)(c.Z,{value:"assemblyscript",label:"AssemblyScript \ud83e\uddea",mdxType:"TabItem"},"For TypeScript/AssemblyScript, they are prefixed with `cache`.",(0,l.kt)("p",null,"  Example: ",(0,l.kt)("inlineCode",{parentName:"p"},"import { cacheGet } from '@suborbital/suborbital'"))),(0,l.kt)(c.Z,{value:"swift",label:"Swift \ud83e\uddea",mdxType:"TabItem"},"For Swift, they are prefixed with `Cache`",(0,l.kt)("p",null,"  Example: ",(0,l.kt)("inlineCode",{parentName:"p"},"Suborbital.CacheGet()")))),(0,l.kt)("p",null,"The following namespace methods are available:"),(0,l.kt)("h2",{id:"set"},"Set"),(0,l.kt)("p",null,"Set a given key's value in the cache. The provided TTL is in seconds."),(0,l.kt)(u.Z,{groupId:"reactr-language",mdxType:"Tabs"},(0,l.kt)(c.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn set(key: &str, val: Vec<u8>, ttl: i32)\n"))),(0,l.kt)(c.Z,{value:"assemblyscript",label:"AssemblyScript \ud83e\uddea",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function cacheSet(key: string, value: ArrayBuffer, ttl: i32): void\n"))),(0,l.kt)(c.Z,{value:"swift",label:"Swift \ud83e\uddea",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"public func CacheSet(key: String, value: String, ttl: Int)\n")))),(0,l.kt)("h2",{id:"get"},"Get"),(0,l.kt)("p",null,"Get the provided key from the cache."),(0,l.kt)(u.Z,{groupId:"reactr-language",mdxType:"Tabs"},(0,l.kt)(c.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn get(key: &str) -> Result<Vec<u8>, RunErr>\n"))),(0,l.kt)(c.Z,{value:"assemblyscript",label:"AssemblyScript \ud83e\uddea",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function cacheGet(key: string): ArrayBuffer\n"))),(0,l.kt)(c.Z,{value:"swift",label:"Swift \ud83e\uddea",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"public func CacheGet(key: String) -> String\n")))),(0,l.kt)("p",null,"Additional cache operations are coming soon."))}f.isMDXComponent=!0}}]);