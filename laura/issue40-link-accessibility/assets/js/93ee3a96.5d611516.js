"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[8852],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=p(r),d=i,m=f["".concat(u,".").concat(d)]||f[d]||s[d]||o;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8936:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],c={},u="Compute APIs",p={unversionedId:"compute/api-reference/api-reference",id:"compute/api-reference/api-reference",title:"Compute APIs",description:"You can find a detailed specification of Compute's APIs here.",source:"@site/docs/compute/api-reference/api-reference.md",sourceDirName:"compute/api-reference",slug:"/compute/api-reference/",permalink:"/docs/laura/issue40-link-accessibility/compute/api-reference/",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/compute/api-reference/api-reference.md",tags:[],version:"current",lastUpdatedAt:1642876873,formattedLastUpdatedAt:"1/22/2022",frontMatter:{}},l=[{value:"Administrative API",id:"administrative-api",children:[],level:2},{value:"Execution API",id:"execution-api",children:[],level:2},{value:"Builder API",id:"builder-api",children:[],level:2}],s={toc:l};function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"compute-apis"},"Compute APIs"),(0,o.kt)("p",null,"You can find a detailed specification of Compute's APIs ",(0,o.kt)("a",{parentName:"p",href:"https://suborbital-compute.readme.io/reference/api-reference"},"here"),"."),(0,o.kt)("h2",{id:"administrative-api"},"Administrative API"),(0,o.kt)("p",null,"The Compute control plane exposes administrative APIs that are designed to help you and your users view, manage, and organize their functions. "),(0,o.kt)("h2",{id:"execution-api"},"Execution API"),(0,o.kt)("p",null,"The execution API is used by your application servers to ",(0,o.kt)("strong",{parentName:"p"},"execute")," the functions your users have built."),(0,o.kt)("h2",{id:"builder-api"},"Builder API"),(0,o.kt)("p",null,"The Compute builder service that you set up with Compute is capable of automatically building WebAssembly modules for you. It exposes an API that can build ",(0,o.kt)("strong",{parentName:"p"},"AssemblyScript and Rust functions.")))}f.isMDXComponent=!0}}]);