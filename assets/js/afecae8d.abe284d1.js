"use strict";(self.webpackChunkatmo_trial_doc=self.webpackChunkatmo_trial_doc||[]).push([[6908],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,b=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(b,i(i({ref:t},c),{},{components:n})):a.createElement(b,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9927:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={},u="Introduction",s={unversionedId:"atmo/runnable-api/introduction",id:"atmo/runnable-api/introduction",title:"Introduction",description:"The Runnables that you write for your Atmo application are compiled to",source:"@site/docs/atmo/runnable-api/introduction.md",sourceDirName:"atmo/runnable-api",slug:"/atmo/runnable-api/introduction",permalink:"/docs/atmo/runnable-api/introduction",editUrl:"https://github.com/suborbital/docs/docs/atmo/runnable-api/introduction.md",tags:[],version:"current",lastUpdatedAt:1642876873,formattedLastUpdatedAt:"1/22/2022",frontMatter:{},sidebar:"docs",previous:{title:"Using SQL databases",permalink:"/docs/atmo/usage/using-sql-databases"},next:{title:"Authentication",permalink:"/docs/atmo/runnable-api/authentication"}},c=[],p={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"The Runnables that you write for your Atmo application are compiled to\nWebAssembly, and are run in a controlled sandbox. The ",(0,o.kt)("strong",{parentName:"p"},"Runnable API"),"\nis the set of capabilities Atmo grants to the sandbox which can be used\nto build your application's logic."),(0,o.kt)("p",null,'When a Runnable is handling a particular request, Atmo binds that request\nto the module while it\'s being run. The Runnable API allows your code to\naccess everything about the request, and also gives you the ability to\naccess the "outside world" by giving functions for HTTP requests,\naccessing static files, logging, and more. This section describes all of\nthe capabilities available via the Runnable API and how to use them in\nRust and Swift Runnable code.'),(0,o.kt)("p",null,"The Runnable API is provided via a library for each of the supported languages,\nand simply needs to be imported to turn your module into a Runnable.\n",(0,o.kt)("inlineCode",{parentName:"p"},"subo")," will configure all of this on your behalf."),(0,o.kt)("p",null,"The first and most basic part of the Runnable API is the ",(0,o.kt)("inlineCode",{parentName:"p"},"Runnable")," interface\n(also known as a Rust trait or Swift protocol). Every Runnable you write will\nprovide an instance of an object that conforms to this interface.\nIt is very simple, and only requires one method, ",(0,o.kt)("inlineCode",{parentName:"p"},"run"),"."),(0,o.kt)("p",null,"The Rust Runnable API crate is considered stable"),(0,o.kt)("p",null,"In Rust:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub trait Runnable {\n    fn run(&self, input: Vec<u8>) -> Result<Vec<u8>, RunErr>;\n}\n")),(0,o.kt)("p",null,"The TypeScript/AssemblyScript Runnable API library is still considered experimental."),(0,o.kt)("p",null,"In TypeScript/AssemblyScript:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export function run(input: ArrayBuffer): ArrayBuffer\n")),(0,o.kt)("p",null,"The Swift Runnable API library is still considered experimental, and tends to lag\nslightly behind the others in terms of available features."),(0,o.kt)("p",null,"And in Swift:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"public protocol Runnable {\n    func run(input: String) -> String\n}\n")),(0,o.kt)("p",null,"Your Runnable object will be created automatically by ",(0,o.kt)("inlineCode",{parentName:"p"},"subo")," when you use the\n",(0,o.kt)("inlineCode",{parentName:"p"},"create runnable")," command. All you need to do is write your logic within the ",(0,o.kt)("inlineCode",{parentName:"p"},"run"),"\nmethod, and Atmo will handle executing it."),(0,o.kt)("p",null,"There are several namespaces available in the Runnable API, each are discussed in\nthe following pages."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/atmo/runnable-api/request"},"req")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/atmo/runnable-api/response"},"resp")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http.md"},"http")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/atmo/runnable-api/graphql-requests"},"graphql")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/atmo/runnable-api/cache"},"cache")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/atmo/runnable-api/file"},"file")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/suborbital/atmo/tree/215d8b0db4673915847a5fd25d4d5c84b8d89186/docs/runnable-api/log.md"},"log"))),(0,o.kt)("p",null,"When handling an HTTP request, the input to the ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," method is the body of the\nrequest being handled. The other details of the request are available using the\n",(0,o.kt)("inlineCode",{parentName:"p"},"req")," namespace and will be discussed in the coming ",(0,o.kt)("a",{parentName:"p",href:"request"},"sections")))}d.isMDXComponent=!0}}]);