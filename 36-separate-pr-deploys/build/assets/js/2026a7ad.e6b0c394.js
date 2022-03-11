"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[1941],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return b}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),b=o,m=d["".concat(u,".").concat(b)]||d[b]||c[b]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9086:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={pagination_prev:null},u="Subo",s={unversionedId:"subo/subo",id:"subo/subo",title:"Subo",description:"The Suborbital CLI",source:"@site/docs/subo/subo.md",sourceDirName:"subo",slug:"/subo/",permalink:"/docs/36-separate-pr-deploys/subo/",editUrl:"https://github.com/suborbital/docs/docs/subo/subo.md",tags:[],version:"current",lastUpdatedAt:1646082232,formattedLastUpdatedAt:"2/28/2022",frontMatter:{pagination_prev:null},sidebar:"docs",next:{title:"Usage",permalink:"/docs/36-separate-pr-deploys/subo/usage"}},p=[{value:"The Suborbital CLI",id:"the-suborbital-cli",children:[],level:3},{value:"Installing",id:"installing",children:[{value:"macOS (Homebrew)",id:"macos-homebrew",children:[],level:3},{value:"Install from source (requires Go)",id:"install-from-source-requires-go",children:[],level:3}],level:2},{value:"Verify installation",id:"verify-installation",children:[],level:2},{value:"Getting started",id:"getting-started",children:[],level:2},{value:"Builders",id:"builders",children:[],level:2},{value:"Platforms",id:"platforms",children:[],level:2},{value:"Contributing",id:"contributing",children:[],level:2}],c={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"subo"},"Subo"),(0,a.kt)("h3",{id:"the-suborbital-cli"},"The Suborbital CLI"),(0,a.kt)("p",null,"Subo is the command-line tool for working with the Suborbital Development Platform. Subo is used to build Wasm Runnables, generate new projects and config files, and more over time."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"You do not need to install language-specific tools to get started with WebAssembly and Subo!")," A Docker toolchain is supported (see below) that can build your Runnables without needing to install language toolchains."),(0,a.kt)("h2",{id:"installing"},"Installing"),(0,a.kt)("h3",{id:"macos-homebrew"},"macOS (Homebrew)"),(0,a.kt)("p",null,"If you're on Mac (M1 or Intel), the easiest way to install is via ",(0,a.kt)("inlineCode",{parentName:"p"},"brew"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"brew tap suborbital/subo\nbrew install subo\n")),(0,a.kt)("h3",{id:"install-from-source-requires-go"},"Install from source (requires Go)"),(0,a.kt)("p",null,"If you use Linux or otherwise prefer to build from source, simply clone this repository or download a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/suborbital/subo/releases/latest"},"source code release")," archive and run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"make subo\n")),(0,a.kt)("p",null,"This will install ",(0,a.kt)("inlineCode",{parentName:"p"},"subo")," into your GOPATH (",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME/go/bin/subo")," by default) which you may need to add to your shell's ",(0,a.kt)("inlineCode",{parentName:"p"},"$PATH")," variable."),(0,a.kt)("p",null,"Subo does not have official support for Windows."),(0,a.kt)("h2",{id:"verify-installation"},"Verify installation"),(0,a.kt)("p",null,"Verify subo was installed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"subo --help\n")),(0,a.kt)("h2",{id:"getting-started"},"Getting started"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To get started with Subo, visit the ",(0,a.kt)("a",{parentName:"strong",href:"./docs/get-started.md"},"Get started guide"),".")),(0,a.kt)("h2",{id:"builders"},"Builders"),(0,a.kt)("p",null,"This repo contains builders for the various languages supported by Wasm Runnables. A builder is a Docker image that can build Runnables into Wasm modules, and is used internally by ",(0,a.kt)("inlineCode",{parentName:"p"},"subo")," to build your code! See the ",(0,a.kt)("a",{parentName:"p",href:"./builder/docker"},"builders")," directory for more."),(0,a.kt)("h2",{id:"platforms"},"Platforms"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"subo")," tool supports the following platforms and operating systems:\n|  | x86_64 | arm64\n| --- | --- | --- |\n| Mac | \u2705 | \u2705 |\n| Linux | \u2705 | \u2705 |\n| Windows | \ud83d\udeab | \ud83d\udeab |"),(0,a.kt)("p",null,"The language toolchains used by ",(0,a.kt)("inlineCode",{parentName:"p"},"subo")," support the following platforms:\n| | x86_64 | arm64 | Docker |\n| --- | --- | --- | --- |\n| Rust | \u2705 | \u2705 | \u2705 |\n| AssemblyScript | \u2705 | \u2705 | \u2705 |\n| Swift | \u2705 | \ud83d\udeab | \ud83d\udfe1 (no arm64) |"),(0,a.kt)("h2",{id:"contributing"},"Contributing"),(0,a.kt)("p",null,"Please read the ",(0,a.kt)("a",{parentName:"p",href:"./CONTRIBUTING.md"},"contributing guide")," to learn about how you can contribute to Subo! We welcome all types of contribution."),(0,a.kt)("p",null,"By the way, Subo is also the name of our mascot, and it's pronounced Sooooobo."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/5942370/129103528-8b013445-a8a2-44bb-8b39-65d912a66767.png",alt:"SOS-Space_Panda-Dark-small"})),(0,a.kt)("p",null,"Copyright Suborbital contributors 2021."))}d.isMDXComponent=!0}}]);