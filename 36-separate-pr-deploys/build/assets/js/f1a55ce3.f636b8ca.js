"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[2491],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,g=d["".concat(s,".").concat(f)]||d[f]||l[f]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6592:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={},s="The Grav Instance",p={unversionedId:"grav/introduction/concepts/the-grav-instance",id:"grav/introduction/concepts/the-grav-instance",title:"The Grav Instance",description:"The main component of Grav is the grav.Grav instance. It contains the core message bus that facilitates sending and receiving messages. Each application instance should get one Grav instance. If meshing is needed, Transport and Discovery plugins are configured when instantiating the Grav instance. Your application code then creates connections to the Grav instance in the form of Pods, which are discussed next.",source:"@site/docs/grav/introduction/concepts/the-grav-instance.md",sourceDirName:"grav/introduction/concepts",slug:"/grav/introduction/concepts/the-grav-instance",permalink:"/docs/36-separate-pr-deploys/grav/introduction/concepts/the-grav-instance",editUrl:"https://github.com/suborbital/docs/docs/grav/introduction/concepts/the-grav-instance.md",tags:[],version:"current",lastUpdatedAt:1642876873,formattedLastUpdatedAt:"1/22/2022",frontMatter:{},sidebar:"docs",previous:{title:"Grav",permalink:"/docs/36-separate-pr-deploys/grav/"},next:{title:"Pods",permalink:"/docs/36-separate-pr-deploys/grav/introduction/concepts/pods"}},u=[],l={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-grav-instance"},"The Grav Instance"),(0,o.kt)("p",null,"The main component of Grav is the ",(0,o.kt)("inlineCode",{parentName:"p"},"grav.Grav")," instance. It contains the core message bus that facilitates sending and receiving messages. Each application instance should get one Grav instance. If meshing is needed, Transport and Discovery plugins are configured when instantiating the Grav instance. Your application code then creates connections to the Grav instance in the form of Pods, which are discussed next."),(0,o.kt)("p",null,'The Grav instance contains all of the "smarts", meaning that it is responsible for keeping track of all the connected Pods, verifying their health, and routing messages between them. The Transport and Discovery plugins connect to the Grav instance and allow for communication over the network between many Grav instances. Transport and Discovery are both optional, as Grav operates happily as an in-process message bus to facilitate asyncronous application design.'),(0,o.kt)("p",null,"Grav instance configuration and use will be discussed in the ",(0,o.kt)("a",{parentName:"p",href:"../../usage/getting-started/"},"Usage")," section."))}d.isMDXComponent=!0}}]);