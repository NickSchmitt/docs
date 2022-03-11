"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[8713],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,b=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(b,o(o({ref:t},u),{},{components:n})):a.createElement(b,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},701:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={},p="Using Compute from JavaScript or TypeScript",s={unversionedId:"compute/quickstart/client-libraries/nodejs",id:"compute/quickstart/client-libraries/nodejs",title:"Using Compute from JavaScript or TypeScript",description:"Use this library to easily interact with Compute's APIs.",source:"@site/docs/compute/quickstart/client-libraries/nodejs.md",sourceDirName:"compute/quickstart/client-libraries",slug:"/compute/quickstart/client-libraries/nodejs",permalink:"/docs/36-separate-pr-deploys/compute/quickstart/client-libraries/nodejs",editUrl:"https://github.com/suborbital/docs/docs/compute/quickstart/client-libraries/nodejs.md",tags:[],version:"current",lastUpdatedAt:1646203888,formattedLastUpdatedAt:"3/2/2022",frontMatter:{},sidebar:"docs",previous:{title:"Connect your application",permalink:"/docs/36-separate-pr-deploys/compute/quickstart/connect-your-application"},next:{title:"Using Compute from Go",permalink:"/docs/36-separate-pr-deploys/compute/quickstart/client-libraries/golang"}},u=[{value:"Installation",id:"installation",children:[],level:2},{value:"Setup",id:"setup",children:[{value:"Default Config",id:"default-config",children:[],level:3},{value:"Local config",id:"local-config",children:[],level:3},{value:"Custom API URLs or ports:",id:"custom-api-urls-or-ports",children:[],level:3}],level:2},{value:"Getting started",id:"getting-started",children:[{value:"Example output",id:"example-output",children:[],level:3}],level:2},{value:"Full API",id:"full-api",children:[{value:"Admin:",id:"admin",children:[{value:"<code>suborbital.admin.getToken</code>",id:"suborbitaladmingettoken",children:[],level:4},{value:"<code>suborbital.admin.getFunctions</code>",id:"suborbitaladmingetfunctions",children:[],level:4},{value:"<code>suborbital.admin.getFunctionResults</code>",id:"suborbitaladmingetfunctionresults",children:[],level:4},{value:"<code>suborbital.admin.getFunctionErrors</code>",id:"suborbitaladmingetfunctionerrors",children:[],level:4}],level:3},{value:"Exec:",id:"exec",children:[{value:"<code>suborbital.exec.run</code>",id:"suborbitalexecrun",children:[],level:4}],level:3},{value:"Builder:",id:"builder",children:[{value:"<code>suborbital.builder.build</code>",id:"suborbitalbuilderbuild",children:[],level:4},{value:"<code>suborbital.builder.getDraft</code>",id:"suborbitalbuildergetdraft",children:[],level:4},{value:"<code>suborbital.builder.deployDraft</code>",id:"suborbitalbuilderdeploydraft",children:[],level:4},{value:"<code>suborbital.builder.testDraft</code>",id:"suborbitalbuildertestdraft",children:[],level:4},{value:"<code>suborbital.builder.getTemplate</code>",id:"suborbitalbuildergettemplate",children:[],level:4}],level:3}],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-compute-from-javascript-or-typescript"},"Using Compute from JavaScript or TypeScript"),(0,i.kt)("p",null,"Use ",(0,i.kt)("a",{parentName:"p",href:"https://suborbital.github.io/docs/compute/quickstart/client-libraries/nodejs.md"},"this")," library to easily interact with Compute's APIs."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Install it via ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"npm"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @suborbital/compute\n")),(0,i.kt)("p",null,"or:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @suborbital/compute\n")),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"Import the library and configure the client. The default configuration will point the client at Compute's default production URLs in your cluster. "),(0,i.kt)("p",null,"A configuration for local development is also provided."),(0,i.kt)("h3",{id:"default-config"},"Default Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Suborbital } from "@suborbital/compute";\n\nconst suborbital = new Suborbital(configuration);\n')),(0,i.kt)("h3",{id:"local-config"},"Local config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Suborbital, localConfig } from "@suborbital/compute";\n\nconst suborbital = new Suborbital(localConfig);\n')),(0,i.kt)("h3",{id:"custom-api-urls-or-ports"},"Custom API URLs or ports:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Suborbital } from "@suborbital/compute";\n\nconst configuration = {\n  adminUri: "https://acme.co:8081",\n  execUri: "https://acme.co:8080",\n  builderUri: "https://acme.co/builder",\n};\n\nconst suborbital = new Suborbital(configuration);\n')),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("p",null,"Using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/36-separate-pr-deploys/compute/api-reference/"},"Compute APIs"),", this guide will use the Administrative and Execution APIs to get a list of available functions and execute one."),(0,i.kt)("p",null,"The Administrative API's ",(0,i.kt)("inlineCode",{parentName:"p"},"getFunctions")," method takes an object with a ",(0,i.kt)("inlineCode",{parentName:"p"},"userId")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"namespace")," and returns a list of available functions for that user in the provided namespace."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'async function listAvailableFunctions() {\n  const functionList = await suborbital.admin.getFunctions({\n    userId: "1234",\n    namespace: "default",\n  });\n\n  console.log("Functions:", functions);\n}\n')),(0,i.kt)("h3",{id:"example-output"},"Example output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "functions": [\n        {\n            "name": "foo",\n            "namespace": "...",\n            "lang": "...",\n            "version": "...",\n            "draftVersion": "...",\n            "apiVersion": "...",\n            "fqfn": "...",\n            "fqfnURI": "...",\n        }\n    ]\n}\n')),(0,i.kt)("p",null,"The result includes a function named ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," (which for this tutorial already exists) and which we will execute using the Execution API's ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," method. "),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," method takes an object with the ",(0,i.kt)("inlineCode",{parentName:"p"},"environment"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"userId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"namespace"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"fnName"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"version"),", and returns the result of the executed function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'async function runFunction() {\n  const result = await suborbital.exec.run({\n    environment: "com.acmeco",\n    userId: "1234",\n    namespace: "default",\n    fnName: "foo",\n    version: "v1.0.0",\n  });\n\n  console.log("Function output:", result);\n}\n')),(0,i.kt)("h2",{id:"full-api"},"Full API"),(0,i.kt)("p",null,"These are all of the available methods."),(0,i.kt)("h3",{id:"admin"},"Admin:"),(0,i.kt)("h4",{id:"suborbitaladmingettoken"},(0,i.kt)("inlineCode",{parentName:"h4"},"suborbital.admin.getToken")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),": Retrieves an authentication token for the given function, typically used to authenticate calls to the Builder API.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Args:")," An object containing ",(0,i.kt)("inlineCode",{parentName:"p"},"environment"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"userId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"namespace"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"fnName"),".",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Result:")," A string containing the token used for authorization."),(0,i.kt)("h4",{id:"suborbitaladmingetfunctions"},(0,i.kt)("inlineCode",{parentName:"h4"},"suborbital.admin.getFunctions")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description:")," Returns a list of available functions for the given user in the given namespace.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Args:")," An object containing ",(0,i.kt)("inlineCode",{parentName:"p"},"userId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"namespace"),".",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Result:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "functions": [\n        {\n            "name": "foo",\n            "namespace": "...",\n            "lang": "...",\n            "version": "...",\n            "draftVersion": "...",\n            "apiVersion": "...",\n            "fqfn": "...",\n            "fqfnURI": "...",\n        }\n    ]\n}\n')),(0,i.kt)("h4",{id:"suborbitaladmingetfunctionresults"},(0,i.kt)("inlineCode",{parentName:"h4"},"suborbital.admin.getFunctionResults")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description:")," Returns the most recent results (up to 5) produced by the execution of the given function.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Args:")," An object containing ",(0,i.kt)("inlineCode",{parentName:"p"},"environment"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"userId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"namespace"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"fnName"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"version"),".",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Result:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "results": [\n        {\n            "uuid": "...",\n            "timestamp": "...",\n            "response": "..."\n        }\n    ]\n}\n')),(0,i.kt)("h4",{id:"suborbitaladmingetfunctionerrors"},(0,i.kt)("inlineCode",{parentName:"h4"},"suborbital.admin.getFunctionErrors")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description:")," Returns the most recent errors (up to 5) produced by the execution of the given function.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Args:")," An object containing ",(0,i.kt)("inlineCode",{parentName:"p"},"environment"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"userId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"namespace"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"fnName"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"version"),".",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Result:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "errors": [\n        {\n            "uuid": "...",\n            "timestamp": "...",\n            "code": 400,\n            "message": "..."\n        }\n    ]\n}\n')),(0,i.kt)("h3",{id:"exec"},"Exec:"),(0,i.kt)("h4",{id:"suborbitalexecrun"},(0,i.kt)("inlineCode",{parentName:"h4"},"suborbital.exec.run")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description:")," Executes the given function, with the provided body, params and state loaded into the function at runtime.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Args:")," An object containing ",(0,i.kt)("inlineCode",{parentName:"p"},"environment"),",",(0,i.kt)("inlineCode",{parentName:"p"},"userId"),",",(0,i.kt)("inlineCode",{parentName:"p"},"namespace"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"fnName"),",",(0,i.kt)("inlineCode",{parentName:"p"},"version"),".",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Result:")," The result of the executed function."),(0,i.kt)("h3",{id:"builder"},"Builder:"),(0,i.kt)("h4",{id:"suborbitalbuilderbuild"},(0,i.kt)("inlineCode",{parentName:"h4"},"suborbital.builder.build")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description:")," Builds the provided code using the specified language toolchain.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Args:")," An object containing ",(0,i.kt)("inlineCode",{parentName:"p"},"language"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"environment"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"userId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"namespace"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"fnName"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"token"),".",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Result:")," A string containing the logs for the build.  "),(0,i.kt)("h4",{id:"suborbitalbuildergetdraft"},(0,i.kt)("inlineCode",{parentName:"h4"},"suborbital.builder.getDraft")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description:")," Gets the draft for the specified runnable.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Args:")," An object containing ",(0,i.kt)("inlineCode",{parentName:"p"},"environment"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"userId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"namespace"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"fnName"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"token"),".",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Result:")," A specified runnable.  "),(0,i.kt)("h4",{id:"suborbitalbuilderdeploydraft"},(0,i.kt)("inlineCode",{parentName:"h4"},"suborbital.builder.deployDraft")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description:")," Deploys the specified runnable.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Args:")," An object containing ",(0,i.kt)("inlineCode",{parentName:"p"},"environment"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"userId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"namespace"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"fnName"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"token"),".",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Result:")," A string containing the version.  "),(0,i.kt)("h4",{id:"suborbitalbuildertestdraft"},(0,i.kt)("inlineCode",{parentName:"h4"},"suborbital.builder.testDraft")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description:")," Tests the draft for the specified runnable.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Args:")," An object containing ",(0,i.kt)("inlineCode",{parentName:"p"},"environment"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"userId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"namespace"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"fnName"),".",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Result:")," A string containing the result.  "),(0,i.kt)("h4",{id:"suborbitalbuildergettemplate"},(0,i.kt)("inlineCode",{parentName:"h4"},"suborbital.builder.getTemplate")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description:")," Gets the template (which controls what your users see when they create a new function) for a new function of the given language.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Args:")," An object containing ",(0,i.kt)("inlineCode",{parentName:"p"},"fnName"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"language"),".",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Result:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'  //Example template for rust language \n  import { logInfo } from "@suborbital/suborbital"\n\n  export function run(input: ArrayBuffer): ArrayBuffer {\n    let inStr = String.UTF8.decode(input)\n\n    let out = "Hello there, " + inStr\n\n    return String.UTF8.encode(out)\n  }\n')))}d.isMDXComponent=!0}}]);