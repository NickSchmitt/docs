"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[6141],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,b=p["".concat(u,".").concat(m)]||p[m]||d[m]||r;return n?o.createElement(b,i(i({ref:t},c),{},{components:n})):o.createElement(b,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2540:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],l={},u="Deploying Atmo",s={unversionedId:"atmo/usage/deploying-atmo",id:"atmo/usage/deploying-atmo",title:"Deploying Atmo",description:"Atmo is in beta, and is suitable production workloads. If you're using Atmo in production, please reach out to us via Discord or team@suborbital.dev so we can learn how you're using it!",source:"@site/docs/atmo/usage/deploying-atmo.md",sourceDirName:"atmo/usage",slug:"/atmo/usage/deploying-atmo",permalink:"/docs/laura/issue40-link-accessibility/atmo/usage/deploying-atmo",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/atmo/usage/deploying-atmo.md",tags:[],version:"current",lastUpdatedAt:1645828798,formattedLastUpdatedAt:"2/25/2022",frontMatter:{},sidebar:"docs",previous:{title:"Build your Application",permalink:"/docs/laura/issue40-link-accessibility/atmo/usage/build-your-application"},next:{title:"Authentication",permalink:"/docs/laura/issue40-link-accessibility/atmo/usage/authentication"}},c=[{value:"Volume mount",id:"volume-mount",children:[],level:2},{value:"Embed Bundle",id:"embed-bundle",children:[],level:2},{value:"Bundle upload",id:"bundle-upload",children:[{value:"HTTPS",id:"https",children:[],level:3},{value:"Logging",id:"logging",children:[],level:3},{value:"Schedules",id:"schedules",children:[],level:3}],level:2}],d={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploying-atmo"},"Deploying Atmo"),(0,r.kt)("p",null,"Atmo is in beta, and is suitable production workloads. If you're using Atmo in production, please reach out to us via ",(0,r.kt)("a",{parentName:"p",href:"chat.suborbital.dev"},"Discord")," or ",(0,r.kt)("a",{parentName:"p",href:"mailto:team@suborbital.dev"},"team@suborbital.dev")," so we can learn how you're using it!"),(0,r.kt)("p",null,"Atmo is distributed as a Docker image: ",(0,r.kt)("inlineCode",{parentName:"p"},"suborbital/atmo")),(0,r.kt)("p",null,"To run Atmo, you can mount your Runnable Bundle as a volume, build your own container image that embeds it, or set Atmo to wait for a bundle to be uploaded."),(0,r.kt)("h2",{id:"volume-mount"},"Volume mount"),(0,r.kt)("p",null,"To mount as a volume:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -v /path/to/bundle/directory:/home/atmo -e ATMO_HTTP_PORT=8080 -p 8080:8080 suborbital/atmo:latest atmo\n")),(0,r.kt)("p",null,"This will launch Atmo, assign it to listen on port 8080, and run in HTTP mode."),(0,r.kt)("h2",{id:"embed-bundle"},"Embed Bundle"),(0,r.kt)("p",null,"To create your own Docker image with your Bundle embedded, you can use the Dockerfile that was created for your project by Subo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"FROM suborbital/atmo:latest\n\nCOPY ./runnables.wasm.zip .\n\nENTRYPOINT atmo\n")),(0,r.kt)("p",null,"Building this Dockerfile would result in an image that doesn't need a volume mount."),(0,r.kt)("h2",{id:"bundle-upload"},"Bundle upload"),(0,r.kt)("p",null,"To upload a bundle after launching Atmo, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--wait")," flag or set the\n",(0,r.kt)("inlineCode",{parentName:"p"},"ATMO_WAIT=true")," env var. This will cause Atmo to check the disk once per\nsecond until it finds a bundle rather than exiting with an error if no bundle\nis found. This method allows you to launch Atmo and then upload a bundle\nseparately by copying it into the running container, as with the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/suborbital/atmo-k8s-helm"},"experimental Kubernetes deployment"),"."),(0,r.kt)("h3",{id:"https"},"HTTPS"),(0,r.kt)("p",null,"To run with HTTPS, replace ",(0,r.kt)("inlineCode",{parentName:"p"},"ATMO_HTTP_PORT=8080")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"ATMO_DOMAIN=example.com"),"\nto enable LetsEncrypt on ports 443 and 80. You will need to pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"-p")," Docker flag\nfor each."),(0,r.kt)("h3",{id:"logging"},"Logging"),(0,r.kt)("p",null,"To control logging in Atmo, you can use its environment variables:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ATMO_LOG_LEVEL")," can be set to any of ",(0,r.kt)("inlineCode",{parentName:"li"},"trace, debug, info, warn, error")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ATMO_LOG_FILE")," can be set to a file to log to ","(","stdout will become plaintext logs, structured logs will be written to the file",")")),(0,r.kt)("h3",{id:"schedules"},"Schedules"),(0,r.kt)("p",null,"To prevent an Atmo instance from executing the ",(0,r.kt)("a",{parentName:"p",href:"/docs/laura/issue40-link-accessibility/atmo/usage/schedules"},"Schedules")," defined in your Directive, you can set the ",(0,r.kt)("inlineCode",{parentName:"p"},"ATMO_RUN_SCHEDULES=false")," env var. This can be useful for running non-idempotent jobs on a specific worker instance."))}p.isMDXComponent=!0}}]);