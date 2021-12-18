"use strict";(self.webpackChunkatmo_trial_doc=self.webpackChunkatmo_trial_doc||[]).push([[3752],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(b,i(i({ref:n},l),{},{components:t})):r.createElement(b,i({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1709:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],u={},c="Runnables",s={unversionedId:"atmo/concepts/runnables",id:"atmo/concepts/runnables",isDocsHomePage:!1,title:"Runnables",description:"When building an application with Atmo, you segment your application's",source:"@site/docs/atmo/concepts/runnables.md",sourceDirName:"atmo/concepts",slug:"/atmo/concepts/runnables",permalink:"/docs/docs/atmo/concepts/runnables",editUrl:"https://github.com/suborbital/docs/docs/atmo/concepts/runnables.md",tags:[],version:"current",lastUpdatedAt:1639034911,formattedLastUpdatedAt:"12/9/2021",frontMatter:{},sidebar:"docs",previous:{title:"Building and Running",permalink:"/docs/docs/atmo/getstarted/building-and-running"},next:{title:"State",permalink:"/docs/docs/atmo/concepts/state"}},l=[],p={toc:l};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"runnables"},"Runnables"),(0,o.kt)("p",null,"When building an application with Atmo, you segment your application's\nlogic into individual functions known as ",(0,o.kt)("strong",{parentName:"p"},"Runnables"),". A Runnable can\nbe written in any of the supported languages (such as TypeScript, Rust\nor Swift), and is compiled to WebAssembly when you build it."),(0,o.kt)("p",null,"Runnables are completely independent from one another, and have no\nknowledge of each other's execution.\nRunnables take an input from Atmo, use the ",(0,o.kt)("a",{parentName:"p",href:"(../runnable-api/introduction)"},(0,o.kt)("strong",{parentName:"a"},"Runnable API"))," to run\nyour application logic, and then return an output."),(0,o.kt)("p",null,"You can see some example Runnables in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/suborbital/atmo/tree/main/example-project"},"example project"),"."),(0,o.kt)("p",null,"Atmo loads a ",(0,o.kt)("strong",{parentName:"p"},"Bundle")," of Runnables at startup and uses your application\n",(0,o.kt)("a",{parentName:"p",href:"./the-directive"},(0,o.kt)("strong",{parentName:"a"},"Directive")),' to set up and execute your application.\nRunnables are executed using a job scheduler, meaning that Atmo will\n"figure out" how to run your application as you\'ve designed,\nrather than needing to imperatively call functions and structure a\nlarge code project like you might be used to with other frameworks.'),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"../runnable-api/introduction"},(0,o.kt)("strong",{parentName:"a"},"Runnable API"))," is a library that you include with your application\ncode to gain access to resources such as logging, caching, and access to\nthe network. Atmo dynamically binds resources to your Runnables at\nruntime. This means that you can swap out various components such as the\ncache being used without re-writing any code. The CLI tool ",(0,o.kt)("strong",{parentName:"p"},"subo")," takes\ncare of setting up projects, creating Runnables, and building Bundles."))}d.isMDXComponent=!0}}]);