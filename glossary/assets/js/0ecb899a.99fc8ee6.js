"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[391],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1374:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={},s="Using Sat",u={unversionedId:"sat/using-sat",id:"sat/using-sat",title:"Using Sat",description:"To run Sat, Docker is easiest:",source:"@site/docs/sat/using-sat.md",sourceDirName:"sat",slug:"/sat/using-sat",permalink:"/docs/glossary/sat/using-sat",editUrl:"https://github.com/suborbital/docs/docs/sat/using-sat.md",tags:[],version:"current",lastUpdatedAt:1645993708,formattedLastUpdatedAt:"2/27/2022",frontMatter:{},sidebar:"docs",previous:{title:"Sat",permalink:"/docs/glossary/sat/"},next:{title:"Building Sat",permalink:"/docs/glossary/sat/building-sat"}},c=[{value:"Stdin mode",id:"stdin-mode",children:[],level:2},{value:"Run from URL",id:"run-from-url",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-sat"},"Using Sat"),(0,o.kt)("p",null,"To run Sat, Docker is easiest:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it -e SAT_HTTP_PORT=8080 -p 8080:8080 suborbital/sat:latest sat https://github.com/suborbital/reactr/blob/main/rwasm/testdata/hello-echo/hello-echo.wasm\\?raw\\=true\n")),(0,o.kt)("p",null,"Sat will start up, download the ",(0,o.kt)("inlineCode",{parentName:"p"},"hello-echo")," module from the ",(0,o.kt)("inlineCode",{parentName:"p"},"examples")," directory, and make it available on port 8080. You can then make a POST request to ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:8080"),", and the body will be echoed back to you."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl localhost:8080 -d 'my friend'\n")),(0,o.kt)("p",null,"Sat executes modules with the ",(0,o.kt)("a",{parentName:"p",href:"https://atmo.suborbital.dev/runnable-api/introduction"},"Runnable API")," enabled, so you can create modules using our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/suborbital/subo"},"Subo CLI")," and all of the capabilities are available for use."),(0,o.kt)("h2",{id:"stdin-mode"},"Stdin mode"),(0,o.kt)("p",null,"As an alternative to running Sat as a server, you can also use it in ",(0,o.kt)("inlineCode",{parentName:"p"},"stdin")," mode. First, ",(0,o.kt)("a",{parentName:"p",href:"/docs/glossary/sat/building-sat"},"build Sat"),"."),(0,o.kt)("p",null,"Then, run Sat with an input on stdin:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'echo "world" | .bin/sat --stdin ./examples/hello-echo/hello-echo.wasm\n')),(0,o.kt)("p",null,"Sat will write the result to stdout and exit."),(0,o.kt)("h2",{id:"run-from-url"},"Run from URL"),(0,o.kt)("p",null,"If you provide a URL as the path argument to Sat, it will download the module from that URL, write it to a temp directory, and use it for execution:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'.bin/sat "https://github.com/suborbital/reactr/blob/main/rwasm/testdata/hello-echo/hello-echo.wasm?raw=true"\n')),(0,o.kt)("p",null,"The URL must be HTTPS and must have a ",(0,o.kt)("inlineCode",{parentName:"p"},".wasm")," suffix (excluding query parameters)."))}d.isMDXComponent=!0}}]);