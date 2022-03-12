"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[4240],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,g=m["".concat(i,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7462),a=n(7294),l=n(2389),o=n(9548),u=n(6010),i="tabItem_LplD";function s(e){var t,n,l,s=e.lazy,c=e.block,p=e.defaultValue,m=e.values,d=e.groupId,g=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,o.lx)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(t=null!=p?p:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=f[0])?void 0:l.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,o.UB)(),k=h.tabGroupChoices,T=h.setTabGroupChoices,w=(0,a.useState)(y),N=w[0],I=w[1],x=[],O=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var E=k[d];null!=E&&E!==N&&b.some((function(e){return e.value===E}))&&I(E)}var Z=function(e){var t=e.currentTarget,n=x.indexOf(t),r=b[n].value;r!==N&&(O(t),I(r),null!=d&&T(d,r))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":c},g)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return x.push(e)},onKeyDown:S,onFocus:Z,onClick:Z},l,{className:(0,u.Z)("tabs__item",i,null==l?void 0:l.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(f.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function c(e){var t=(0,l.Z)();return a.createElement(s,(0,r.Z)({key:String(t)},e))}},9306:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return g}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=n(9877),u=n(8215),i=["components"],s={},c="Structured logging",p={unversionedId:"atmo/runnable-api/logging",id:"atmo/runnable-api/logging",title:"Structured logging",description:"Your Runnable code can log to Atmo's structured output using the logging methods.",source:"@site/docs/atmo/runnable-api/logging.md",sourceDirName:"atmo/runnable-api",slug:"/atmo/runnable-api/logging",permalink:"/docs/glossary/atmo/runnable-api/logging",editUrl:"https://github.com/suborbital/docs/docs/atmo/runnable-api/logging.md",tags:[],version:"current",lastUpdatedAt:1645041596,formattedLastUpdatedAt:"2/16/2022",frontMatter:{},sidebar:"docs",previous:{title:"Modifying responses",permalink:"/docs/glossary/atmo/runnable-api/response"},next:{title:"HTTP client",permalink:"/docs/glossary/atmo/runnable-api/http-client"}},m=[{value:"Info",id:"info",children:[],level:2},{value:"Warn",id:"warn",children:[],level:2},{value:"Error",id:"error",children:[],level:2}],d={toc:m};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"structured-logging"},"Structured logging"),(0,l.kt)("p",null,"Your Runnable code can log to Atmo's structured output using the logging methods."),(0,l.kt)(o.Z,{groupId:"reactr-language",mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,l.kt)("p",null,"In Rust these methods are available under the ",(0,l.kt)("inlineCode",{parentName:"p"},"log")," module:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'# Use the "log" module\nuse suborbital::log;\n\n# Invoke the "Info" method\nlog::info(\u2026)\n'))),(0,l.kt)(u.Z,{value:"assemblyscript",label:"AssemblyScript \ud83e\uddea",mdxType:"TabItem"},(0,l.kt)("p",null,"In TypeScript/AssemblyScript all methods are prefixed with ",(0,l.kt)("inlineCode",{parentName:"p"},"log"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// Import then invoke \"Info\" method\nimport { reqInfo } from '@suborbital/suborbital'\n\nlogInfo(\u2026)\n"))),(0,l.kt)(u.Z,{value:"swift",label:"Swift \ud83e\uddea",mdxType:"TabItem"},(0,l.kt)("p",null,"In Swift these methods are prefixed with ",(0,l.kt)("inlineCode",{parentName:"p"},"Log"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'// Invoke the "Info" method\nSuborbital.LogInfo(\u2026)\n')))),(0,l.kt)("p",null,"The following namespace methods are available:"),(0,l.kt)("h2",{id:"info"},"Info"),(0,l.kt)("p",null,"Logs the message with the 'info' level:"),(0,l.kt)(o.Z,{groupId:"reactr-language",mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn info(msg: &str)\n"))),(0,l.kt)(u.Z,{value:"assemblyscript",label:"AssemblyScript \ud83e\uddea",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function logInfo(msg: string): void\n"))),(0,l.kt)(u.Z,{value:"swift",label:"Swift \ud83e\uddea",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"public func LogInfo(msg: String)\n")))),(0,l.kt)("h2",{id:"warn"},"Warn"),(0,l.kt)("p",null,"Logs the message with the 'warn' level:"),(0,l.kt)(o.Z,{groupId:"reactr-language",mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn warn(msg: &str)\n"))),(0,l.kt)(u.Z,{value:"assemblyscript",label:"AssemblyScript \ud83e\uddea",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function logWarn(msg: string): void\n"))),(0,l.kt)(u.Z,{value:"swift",label:"Swift \ud83e\uddea",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"public func LogWarn(msg: String)\n")))),(0,l.kt)("h2",{id:"error"},"Error"),(0,l.kt)("p",null,"Logs the message with the 'err' level:"),(0,l.kt)(o.Z,{groupId:"reactr-language",mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn error(msg: &str)\n"))),(0,l.kt)(u.Z,{value:"assemblyscript",label:"AssemblyScript \ud83e\uddea",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function logErr(msg: string): void\n"))),(0,l.kt)(u.Z,{value:"swift",label:"Swift \ud83e\uddea",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"public func LogErr(msg: String)\n")))))}g.isMDXComponent=!0}}]);