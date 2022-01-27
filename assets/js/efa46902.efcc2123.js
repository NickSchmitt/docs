"use strict";(self.webpackChunkatmo_trial_doc=self.webpackChunkatmo_trial_doc||[]).push([[8030],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7112:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={},u="Authentication",l={unversionedId:"atmo/runnable-api/authentication",id:"atmo/runnable-api/authentication",isDocsHomePage:!1,title:"Authentication",description:"While not a direct part of the Runnable API, Atmo does include a method of",source:"@site/docs/atmo/runnable-api/authentication.md",sourceDirName:"atmo/runnable-api",slug:"/atmo/runnable-api/authentication",permalink:"/docs/docs/atmo/runnable-api/authentication",editUrl:"https://github.com/suborbital/docs/docs/atmo/runnable-api/authentication.md",tags:[],version:"current",lastUpdatedAt:1642876873,formattedLastUpdatedAt:"1/22/2022",frontMatter:{},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/docs/atmo/runnable-api/introduction"},next:{title:"Accessing cache",permalink:"/docs/docs/atmo/runnable-api/cache"}},p=[],s={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"While not a direct part of the Runnable API, Atmo does include a method of\nproviding authentication for HTTP and GraphQL made by the Runnable API.\nAtmo helps with authenticating these requests by injecting the ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization"),"\nheader to your Runnable's requests based on the configuration in your Directive. "),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"authentication:\n  domains:\n    api.github.com:\n      headerType: bearer\n      value: env(GITHUB_TOKEN)\n")),(0,o.kt)("p",null,"This uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"env")," keyword to augment any request (either HTTP or GraphQL) to\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"api.github.com")," domain with an ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization")," header containing the value\n",(0,o.kt)("inlineCode",{parentName:"p"},"bearer {GITHUB_TOKEN}"),", with the environment variable evaluated at runtime.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," can be a static string if needed, but the ",(0,o.kt)("inlineCode",{parentName:"p"},"env")," keyword is more common\nas it allows your application to be configured in different environments."),(0,o.kt)("p",null,"This strategy of authentication injection allows Atmo to handle sensitive values\nwithout ever giving the code inside the Runnable sandbox access to them.\nThis is an important aspect of Atmo's security model, and helps maintain healthy\nsecurity practices."))}d.isMDXComponent=!0}}]);