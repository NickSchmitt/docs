"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[9942],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||l[m]||i;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3596:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={},s="Pods",d={unversionedId:"grav/introduction/concepts/pods",id:"grav/introduction/concepts/pods",title:"Pods",description:"The Grav instance on its own is not very useful without anything connected to it. A Pod is a lightweight bi-directional connection to the Grav instance. A Pod is created by calling the Connect() method on the Grav instance. The Grav instance can be connected to many Pods, up to thousands at once. A Pod can send messages to be routed through the bus, and it can receive messages from the bus.",source:"@site/docs/grav/introduction/concepts/pods.md",sourceDirName:"grav/introduction/concepts",slug:"/grav/introduction/concepts/pods",permalink:"/docs/preview/grav/introduction/concepts/pods",editUrl:"https://github.com/suborbital/docs/docs/grav/introduction/concepts/pods.md",tags:[],version:"current",lastUpdatedAt:1642876873,formattedLastUpdatedAt:"1/22/2022",frontMatter:{},sidebar:"docs",previous:{title:"The Grav Instance",permalink:"/docs/preview/grav/introduction/concepts/the-grav-instance"},next:{title:"Reciepts",permalink:"/docs/preview/grav/introduction/concepts/receipts"}},u=[],l={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pods"},"Pods"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Grav")," instance on its own is not very useful without anything connected to it. A ",(0,i.kt)("inlineCode",{parentName:"p"},"Pod")," is a lightweight bi-directional connection to the Grav instance. A Pod is created by calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connect()")," method on the Grav instance. The Grav instance can be connected to many Pods, up to thousands at once. A Pod can send messages to be routed through the bus, and it can receive messages from the bus."),(0,i.kt)("p",null,"The two core methods of a Pod are ",(0,i.kt)("inlineCode",{parentName:"p"},"Send(msg)")," and  ",(0,i.kt)("inlineCode",{parentName:"p"},"On(msgFunc)"),", which allow sending and receiving messages. The caller of ",(0,i.kt)("inlineCode",{parentName:"p"},"On")," provides a function to handle incoming messages ","(","called the ",(0,i.kt)("inlineCode",{parentName:"p"},"receive function"),")",", and it is called each time a message comes from the Grav instance. There are other methods to do more specific operations, which will be discussed in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/preview/grav/usage/getting-started/receiving-messages"},"Usage")," section."),(0,i.kt)("p",null,'A Pod is mainly just a connection, allowing the Grav instance to do the majority of the work, but it does contain some limited "smarts". For example, Pods include a filter that gives you control over which messages get received. Pods are in constant communication with the Grav instance, and they are able to report things such as their health, failed message delivery, and more. Unhealthy Pods will be disconnected after a certain number of failed deliveries, but pods that recover automatically get failed messages replayed.'),(0,i.kt)("p",null,"Using Pods is discussed in detail in the ",(0,i.kt)("a",{parentName:"p",href:"../../usage/getting-started/"},"Usage")," section."))}p.isMDXComponent=!0}}]);