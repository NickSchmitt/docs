"use strict";(self.webpackChunkatmo_trial_doc=self.webpackChunkatmo_trial_doc||[]).push([[5385],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9622:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={},c="Get Started",u={unversionedId:"atmo/getstarted/README",id:"atmo/getstarted/README",isDocsHomePage:!1,title:"Get Started",description:"Atmo is a self-hosted platform that uses a Runnable bundle to run your described application. The bundle includes two things: a Directive, and a set of Runnables \\(WebAssembly modules compiled from various languages such as TypeScript, Rust and Swift\\). A bundle contains everything needed to run your application.",source:"@site/docs/atmo/getstarted/README.md",sourceDirName:"atmo/getstarted",slug:"/atmo/getstarted/README",permalink:"/docs/docs/atmo/getstarted/README",editUrl:"https://github.com/suborbital/docs/docs/atmo/getstarted/README.md",tags:[],version:"current",lastUpdatedAt:1638971475,formattedLastUpdatedAt:"12/8/2021",frontMatter:{},sidebar:"docs",next:{title:"Creating a Project",permalink:"/docs/docs/atmo/getstarted/creating-a-project"}},l=[{value:"Requirements",id:"requirements",children:[],level:2}],p={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-started"},"Get Started"),(0,a.kt)("p",null,"Atmo is a self-hosted platform that uses a ",(0,a.kt)("em",{parentName:"p"},"Runnable bundle")," to run your described application. The bundle includes two things: a ",(0,a.kt)("a",{parentName:"p",href:"/docs/docs/atmo/concepts/the-directive"},"Directive"),", and a set of ",(0,a.kt)("a",{parentName:"p",href:"/docs/docs/atmo/concepts/runnables"},"Runnables")," ","(","WebAssembly modules compiled from various languages such as TypeScript, Rust and Swift",")",". A bundle contains everything needed to run your application."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,'{% hint style="info" %}\n',(0,a.kt)("strong",{parentName:"p"},"You'll need to install the subo CLI tool and Docker to use Atmo"),"."),(0,a.kt)("p",null,"To install the tool, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/suborbital/subo"},"visit the subo repository"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.docker.com/get-started"},"Docker")," is used to build Runnables and run the Atmo development server.\n{% endhint %}"),(0,a.kt)("p",null,"Read on to learn about the different aspects of an Atmo project, or skip right to ",(0,a.kt)("a",{parentName:"p",href:"/docs/docs/atmo/usage/building-a-bundle"},"building your application bundle.")))}d.isMDXComponent=!0}}]);