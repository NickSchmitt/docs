"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[2257],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=i(n),d=a,b=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(b,o(o({ref:t},p),{},{components:n})):r.createElement(b,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7462),a=n(7294),l=n(2389),o=n(9548),u=n(6010),s="tabItem_LplD";function i(e){var t,n,l,i=e.lazy,p=e.block,c=e.defaultValue,m=e.values,d=e.groupId,b=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,o.lx)(v,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===c?c:null!=(t=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=f[0])?void 0:l.props.value;if(null!==h&&!v.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,o.UB)(),k=g.tabGroupChoices,T=g.setTabGroupChoices,w=(0,a.useState)(h),N=w[0],O=w[1],x=[],E=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var I=k[d];null!=I&&I!==N&&v.some((function(e){return e.value===I}))&&O(I)}var Z=function(e){var t=e.currentTarget,n=x.indexOf(t),r=v[n].value;r!==N&&(E(t),O(r),null!=d&&T(d,r))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":p},b)},v.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return x.push(e)},onKeyDown:S,onFocus:Z,onClick:Z},l,{className:(0,u.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(f.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function p(e){var t=(0,l.Z)();return a.createElement(i,(0,r.Z)({key:String(t)},e))}},4122:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return m},default:function(){return b}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=n(9877),u=n(8215),s=["components"],i={},p="Modifying responses",c={unversionedId:"atmo/runnable-api/response",id:"atmo/runnable-api/response",title:"Modifying responses",description:"When a Runnable is used to handle an HTTP request, Atmo",source:"@site/docs/atmo/runnable-api/response.md",sourceDirName:"atmo/runnable-api",slug:"/atmo/runnable-api/response",permalink:"/docs/preview/atmo/runnable-api/response",editUrl:"https://github.com/suborbital/docs/docs/atmo/runnable-api/response.md",tags:[],version:"current",lastUpdatedAt:1645041596,formattedLastUpdatedAt:"2/16/2022",frontMatter:{},sidebar:"docs",previous:{title:"Handling requests",permalink:"/docs/preview/atmo/runnable-api/request"},next:{title:"Structured logging",permalink:"/docs/preview/atmo/runnable-api/logging"}},m=[{value:"Set header",id:"set-header",children:[],level:2},{value:"Content-Type",id:"content-type",children:[],level:2}],d={toc:m};function b(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"modifying-responses"},"Modifying responses"),(0,l.kt)("p",null,"When a Runnable is used to handle an HTTP request, Atmo\nwill bind that request to the Runnable. The ",(0,l.kt)("inlineCode",{parentName:"p"},"resp"),"\nnamespace of the Runnable API can then be used to modify\nthe response that Atmo will send to the caller."),(0,l.kt)(o.Z,{groupId:"reactr-language",mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,l.kt)("p",null,"In Rust these methods are available under the ",(0,l.kt)("inlineCode",{parentName:"p"},"resp")," module:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'# Use the "resp" module\nuse suborbital::resp;\n\n# Invoke the "SetHeader" method\nresp::set_header(\u2026)\n'))),(0,l.kt)(u.Z,{value:"assemblyscript",label:"AssemblyScript \ud83e\uddea",mdxType:"TabItem"},(0,l.kt)("p",null,"TypeScript/AssemblyScript support is coming soon.")),(0,l.kt)(u.Z,{value:"swift",label:"Swift \ud83e\uddea",mdxType:"TabItem"},(0,l.kt)("p",null,"Swift support is coming soon."))),(0,l.kt)("p",null,"The following namespace methods are available:"),(0,l.kt)("h2",{id:"set-header"},"Set header"),(0,l.kt)("p",null,"Sets an HTTP response header:"),(0,l.kt)(o.Z,{groupId:"reactr-language",mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn set_header(key: &str, val: &str)\n"))),(0,l.kt)(u.Z,{value:"assemblyscript",label:"AssemblyScript \ud83e\uddea",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Not yet available"))),(0,l.kt)(u.Z,{value:"swift",label:"Swift \ud83e\uddea",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Not yet available")))),(0,l.kt)("h2",{id:"content-type"},"Content-Type"),(0,l.kt)("p",null,"An alias of ",(0,l.kt)("inlineCode",{parentName:"p"},"set_header")," that allows easily setting the\nresponse Content-Type:"),(0,l.kt)(o.Z,{groupId:"reactr-language",mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn content_type(ctype: &str)\n"))),(0,l.kt)(u.Z,{value:"assemblyscript",label:"AssemblyScript \ud83e\uddea",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Not yet available"))),(0,l.kt)(u.Z,{value:"swift",label:"Swift \ud83e\uddea",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Not yet available")))))}b.isMDXComponent=!0}}]);