"use strict";(self.webpackChunkatmo_trial_doc=self.webpackChunkatmo_trial_doc||[]).push([[3243],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,s(s({ref:t},i),{},{components:n})):r.createElement(f,s({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,s[1]=u;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8708:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return i},default:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],u={},c="Scheduled jobs",l={unversionedId:"atmo/usage/schedules",id:"atmo/usage/schedules",isDocsHomePage:!1,title:"Scheduled jobs",description:"You can easily define background jobs in your Directive",source:"@site/docs/atmo/usage/schedules.md",sourceDirName:"atmo/usage",slug:"/atmo/usage/schedules",permalink:"/docs/docs/atmo/usage/schedules",editUrl:"https://github.com/suborbital/docs/docs/atmo/usage/schedules.md",tags:[],version:"current",lastUpdatedAt:1638971475,formattedLastUpdatedAt:"12/8/2021",frontMatter:{},sidebar:"docs",previous:{title:"Managing state",permalink:"/docs/docs/atmo/usage/managing-state"},next:{title:"Streams",permalink:"/docs/docs/atmo/usage/streams"}},i=[],d={toc:i};function p(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"scheduled-jobs"},"Scheduled jobs"),(0,o.kt)("p",null,"You can easily define background jobs in your Directive\nthat Atmo will run on a schedule. Schedules run a set of steps,\nexactly like a handler. Schedules can be set up with an\ninitial state to provide input."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"schedules:\n  - name: atmo-report\n    every:\n      hours: 1\n    state:\n      repo: suborbital/atmo\n    steps:\n      - fn: ghstars\n\n      - fn: send-report\n        with:\n          stargazers: ghstars\n")),(0,o.kt)("p",null,"As you can see, you can choose how often the job runs\nusing the ",(0,o.kt)("inlineCode",{parentName:"p"},"every")," clause. You can set seconds, minutes,\nhours, or days (and you can combine them for values such as 'every 1 hour and 15 minutes')."),(0,o.kt)("p",null,"If you need to change a Runnable's behaviour to run in a schedule,\nyou can check ",(0,o.kt)("inlineCode",{parentName:"p"},'req::method() == "SCHED"'),". This can be useful when\nusing the same Runnable for both request handlers and schedules."),(0,o.kt)("p",null,"Setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," clause will allow you to 'seed' the job\nwith values, and that state will update after each step,\njust as with request handlers. "),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/atmo/concepts/state"},"state")," for more details."),(0,o.kt)("p",null,"Any issues running schedules (such as Runnables returning errors or any failures to execute the Runnables)\nwill be logged, but nothing else."))}p.isMDXComponent=!0}}]);