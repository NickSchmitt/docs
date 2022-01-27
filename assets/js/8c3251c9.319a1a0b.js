"use strict";(self.webpackChunkatmo_trial_doc=self.webpackChunkatmo_trial_doc||[]).push([[2257],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4122:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return i},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],s={},p="Modifying responses",i={unversionedId:"atmo/runnable-api/response",id:"atmo/runnable-api/response",isDocsHomePage:!1,title:"Modifying responses",description:"When a Runnable is used to handle an HTTP request, Atmo",source:"@site/docs/atmo/runnable-api/response.md",sourceDirName:"atmo/runnable-api",slug:"/atmo/runnable-api/response",permalink:"/docs/docs/atmo/runnable-api/response",editUrl:"https://github.com/suborbital/docs/docs/atmo/runnable-api/response.md",tags:[],version:"current",lastUpdatedAt:1642876873,formattedLastUpdatedAt:"1/22/2022",frontMatter:{},sidebar:"docs",previous:{title:"Handling requests",permalink:"/docs/docs/atmo/runnable-api/request"},next:{title:"Creating Runnables",permalink:"/docs/docs/atmo/usage/creating-runnables"}},u=[{value:"Response header",id:"response-header",children:[],level:2},{value:"Content-Type",id:"content-type",children:[],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modifying-responses"},"Modifying responses"),(0,o.kt)("p",null,"When a Runnable is used to handle an HTTP request, Atmo\nwill bind that request to the Runnable. The ",(0,o.kt)("inlineCode",{parentName:"p"},"resp"),"\nnamespace of the Runnable API can then be used to modify\nthe response that Atmo will send to the caller."),(0,o.kt)("p",null,"For Rust, these methods are available under the ",(0,o.kt)("inlineCode",{parentName:"p"},"resp")," module."),(0,o.kt)("p",null,"Example ",(0,o.kt)("inlineCode",{parentName:"p"},"resp::set_header()")),(0,o.kt)("p",null,"Swift and TypeScript/AssemblyScript support is coming soon."),(0,o.kt)("p",null,"The following namespace methods are available:"),(0,o.kt)("h2",{id:"response-header"},"Response header"),(0,o.kt)("p",null,"Sets an HTTP response header:"),(0,o.kt)("p",null,"Rust:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn set_header(key: &str, val: &str)\n")),(0,o.kt)("p",null,"AssemblyScript:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// not yet available\n")),(0,o.kt)("p",null,"Swift:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"// not yet available\n")),(0,o.kt)("h2",{id:"content-type"},"Content-Type"),(0,o.kt)("p",null,"An alias of ",(0,o.kt)("inlineCode",{parentName:"p"},"set_header")," that allows easily setting the\nresponse Content-Type"),(0,o.kt)("p",null,"Rust:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn content_type(ctype: &str)\n")),(0,o.kt)("p",null,"AssemblyScript:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// not yet available\n")),(0,o.kt)("p",null,"Swift:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"// not yet available\n")))}d.isMDXComponent=!0}}]);