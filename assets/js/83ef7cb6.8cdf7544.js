"use strict";(self.webpackChunkatmo_trial_doc=self.webpackChunkatmo_trial_doc||[]).push([[2314],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(n),k=a,c=m["".concat(s,".").concat(k)]||m[k]||u[k]||o;return n?r.createElement(c,l(l({ref:t},p),{},{components:n})):r.createElement(c,l({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8854:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={},s="The Vektor Guide \ud83d\uddfa",d={unversionedId:"vektor/getting-started",id:"vektor/getting-started",isDocsHomePage:!1,title:"The Vektor Guide \ud83d\uddfa",description:"Vektor's goal is to help you develop web services faster.",source:"@site/docs/vektor/getting-started.md",sourceDirName:"vektor",slug:"/vektor/getting-started",permalink:"/docs/docs/vektor/getting-started",editUrl:"https://github.com/suborbital/docs/docs/vektor/getting-started.md",tags:[],version:"current",lastUpdatedAt:1642876873,formattedLastUpdatedAt:"1/22/2022",frontMatter:{},sidebar:"docs",previous:{title:"faas",permalink:"/docs/docs/reactr/faas"},next:{title:"Testing Vektor Servers",permalink:"/docs/docs/vektor/testing-vk-servers"}},p=[{value:"The server object",id:"the-server-object",children:[],level:2},{value:"Handler functions",id:"handler-functions",children:[],level:2},{value:"Mounting routes",id:"mounting-routes",children:[],level:2},{value:"Route groups",id:"route-groups",children:[],level:2},{value:"Middleware and Afterware",id:"middleware-and-afterware",children:[],level:2},{value:"Response types",id:"response-types",children:[],level:2},{value:"Response handling rules",id:"response-handling-rules",children:[{value:"Successful responses (i.e. the <code>interface{}</code> returned by handler functions):",id:"successful-responses-ie-the-interface-returned-by-handler-functions",children:[],level:3},{value:"Failure responses (i.e. the <code>error</code> returned by middleware or handler functions):",id:"failure-responses-ie-the-error-returned-by-middleware-or-handler-functions",children:[],level:3}],level:2},{value:"Standard http.HandlerFunc",id:"standard-httphandlerfunc",children:[],level:2},{value:"The Ctx Object",id:"the-ctx-object",children:[],level:2},{value:"What&#39;s to come?",id:"whats-to-come",children:[],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-vektor-guide-"},"The Vektor Guide \ud83d\uddfa"),(0,o.kt)("p",null,"Vektor's goal is to help you develop web services faster.\nVektor handles much of the boilerplate needed to start\nbuilding a Go server, so you can serve a request in\nless than 10 lines of code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},'import "github.com/suborbital/vektor/vk"\n\nserver := vk.New(vk.UseAppName("Vektor API Server"), vk.UseDomain("vektor.example.com"))\n\nserver.GET("/ping", HandlePing)\n\nif err := server.Start(); err != nil {\n    log.Fatal(err)\n}\n\nfunc HandlePing(r *http.Request, ctx *vk.Ctx) (interface{}, error) {\n    return "pong", nil\n}\n')),(0,o.kt)("p",null,"Those are the basics, but Vektor is capable of\nscaling up to serve powerful production workloads,\nusing its full suite of API-oriented features."),(0,o.kt)("h1",{id:"set-up-vk"},"Set up ",(0,o.kt)("inlineCode",{parentName:"h1"},"vk")),(0,o.kt)("h2",{id:"the-server-object"},"The server object"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"vk.Server")," type contains everything needed to\nbuild a web service. It includes the router,\na middleware system, customizable plug-in points,\nand handy built-in components like LetsEncrypt\nsupport and CORS handlers."),(0,o.kt)("p",null,"Creating a server object is done with ",(0,o.kt)("inlineCode",{parentName:"p"},"vk.New()"),"\nand accepts an optional list of ",(0,o.kt)("inlineCode",{parentName:"p"},"OptionModifiers"),"\nwhich allow customization of the server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},'server := vk.New(\n    vk.UseAppName("Vektor API Server"),\n    vk.UseDomain("vektor.example.com"),\n)\n')),(0,o.kt)("p",null,"To create a server object without TLS support,\nomit the ",(0,o.kt)("inlineCode",{parentName:"p"},"vk.UseDomain()")," modifier and specify\nan HTTP port to listen on."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},'server := vk.New(\n    vk.UseAppName("Vektor API HTTP-only"),\n    vk.UseHTTPPort(8000),\n)\n')),(0,o.kt)("p",null,"The included ",(0,o.kt)("inlineCode",{parentName:"p"},"OptionsModifiers")," are:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"ENV key"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"UseDomain(domain string)"),(0,o.kt)("td",{parentName:"tr",align:null},"Enable LetsEncrypt support with the provided domain name (will serve on :80 and :443 for challenge server and API server). LetsEncrypt is disabled by default."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"VK_DOMAIN"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"UseTLSConfig(config *tls.Config)"),(0,o.kt)("td",{parentName:"tr",align:null},"Enable TLS and use the provided TLS config to serve HTTPS. This will override the ",(0,o.kt)("inlineCode",{parentName:"td"},"domain")," option."),(0,o.kt)("td",{parentName:"tr",align:null},"N/A")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"UseTLSPort(port int)"),(0,o.kt)("td",{parentName:"tr",align:null},"Choose an HTTPS port on which to serve requests."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"VK_TLS_PORT"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"UseHTTPPort(port int)"),(0,o.kt)("td",{parentName:"tr",align:null},"Choose an HTTP port on which to serve requests. When using TLS, the LetsEncrypt challenge server will run on the configured HTTP port."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"VK_HTTP_PORT"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"UseAppName(name string)"),(0,o.kt)("td",{parentName:"tr",align:null},"When the application starts, ",(0,o.kt)("inlineCode",{parentName:"td"},"name")," will be logged. Empty by default."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"VK_APP_NAME"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"UseEnvPrefix(prefix string)"),(0,o.kt)("td",{parentName:"tr",align:null},"Use ",(0,o.kt)("inlineCode",{parentName:"td"},"prefix")," instead of ",(0,o.kt)("inlineCode",{parentName:"td"},"VK")," for environment variables, for example ",(0,o.kt)("inlineCode",{parentName:"td"},"APP_HTTP_PORT")," instead of ",(0,o.kt)("inlineCode",{parentName:"td"},"VK_HTTP_PORT"),"."),(0,o.kt)("td",{parentName:"tr",align:null},"N/A")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"UseLogger(logger *vlog.Logger)"),(0,o.kt)("td",{parentName:"tr",align:null},"Set the logger object to be used. The logger is used internally by ",(0,o.kt)("inlineCode",{parentName:"td"},"vk")," and is available to all handler functions via the ",(0,o.kt)("inlineCode",{parentName:"td"},"ctx")," object. If this option is not passed, ",(0,o.kt)("inlineCode",{parentName:"td"},"vlog.Default")," is used, and its environment variable prefix set to the same as vk's. (",(0,o.kt)("inlineCode",{parentName:"td"},"VK")," by default)."),(0,o.kt)("td",{parentName:"tr",align:null},"N/A")))),(0,o.kt)("p",null,"Each of the options can be set using the modifier function, or by setting the associated environment variable. The environment variable will override the modifier function."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note the use of ",(0,o.kt)("inlineCode",{parentName:"p"},"UseEnvPrefix")," if you would prefer to use something other than ",(0,o.kt)("inlineCode",{parentName:"p"},"VK")," for your environment variables!")),(0,o.kt)("h2",{id:"handler-functions"},"Handler functions"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"vk"),"'s handler function definition is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},"func HandlePing(r *http.Request, ctx *vk.Ctx) (interface{}, error)\n")),(0,o.kt)("p",null,"Here's a breakdown of each part:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"r *http.Request"),": The request object for the request being handled."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ctx *vk.Ctx"),": A context object containing more options for\ninteracting with the request. See more below."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"(interface{}, error)"),": The return types of the handler allow you\nto respond to HTTP requests by simply returning values. If an\nerror is returned, ",(0,o.kt)("inlineCode",{parentName:"p"},"vk")," will interpret it as a failed request and\nrespond with an error code, if error is ",(0,o.kt)("inlineCode",{parentName:"p"},"nil"),", then the ",(0,o.kt)("inlineCode",{parentName:"p"},"interface{}"),"\nvalue is used to respond based on the response handling rules.\n",(0,o.kt)("strong",{parentName:"p"},"Responding to requests is handled in depth below in ",(0,o.kt)("a",{parentName:"strong",href:"#responding-to-requests"},"Responding to requests"))),(0,o.kt)("h2",{id:"mounting-routes"},"Mounting routes"),(0,o.kt)("p",null,"To define routes for your ",(0,o.kt)("inlineCode",{parentName:"p"},"vk")," server, use the HTTP method\nfunctions on the server object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},'server := vk.New(\n    vk.UseAppName("Vektor API Server"),\n    vk.UseDomain("vektor.example.com"),\n)\n\nserver.GET("/users", HandleGetUsers)\nserver.POST("/groups", HandleCreateGroup)\n')),(0,o.kt)("p",null,"If you prefer to pass the HTTP method as an argument, use ",(0,o.kt)("inlineCode",{parentName:"p"},"server.Handle()")," instead."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note that attempting to add new handlers after calling ",(0,o.kt)("inlineCode",{parentName:"strong"},"server.Start()")," is a no-op")),(0,o.kt)("h2",{id:"route-groups"},"Route groups"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"vk")," allows grouping routes by a common path prefix. For example, if you want a group of routes to begin with the ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/")," path, you can create an API route group and then mount all of your handlers to that group."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},'apiGroup := vk.Group("/api")\napiGroup.GET("/events", HandleGetEvents)\n\nserver.AddGroup(apiGroup)\n')),(0,o.kt)("p",null,"Calling ",(0,o.kt)("inlineCode",{parentName:"p"},"AddGroup")," will calculate the full paths for all routes and mount them to the server. In the example above, the handler would be mounted at ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/events"),"."),(0,o.kt)("p",null,"Groups can even be added to groups!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},'v1 := vk.Group("/v1")\nv1.GET("/events", HandleEventsV1)\n\nv2 := vk.Group("/v2")\nv2.GET("/events", HandleEventsV2)\n\napiGroup := vk.Group("/api")\napiGroup.AddGroup(v1)\napiGroup.AddGroup(v2)\n\nserver.AddGroup(api)\n')),(0,o.kt)("p",null,"This will create a natural grouping of your routes,\nwith the above example creating the ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/v1/events"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/v2/events")," routes."),(0,o.kt)("h2",{id:"middleware-and-afterware"},"Middleware and Afterware"),(0,o.kt)("p",null,"Groups become even more powerful when combined with Middleware\nand Afterware. Middleware are pseudo request handlers that run\nin sequence before the mounted ",(0,o.kt)("inlineCode",{parentName:"p"},"vk.HandlerFunc")," is run.\nMiddleware functions can modify a request and its context,\nor they can return an error, which causes the request handling\nto be terminated immediately. Two examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},'func headerMiddleware(r *http.Request, ctx *vk.Ctx) error {\n    ctx.Headers.Set("X-Vektor-Test", "foobar")\n\n    return nil\n}\n\nfunc denyMiddleware(r *http.Request, ctx *vk.Ctx) error {\n    if strings.Contains(r.URL.Path, "hack") {\n        ctx.Log.ErrorString("HACKER!!")\n\n        return vk.E(403, "begone, hacker")\n    }\n\n    return nil\n}\n')),(0,o.kt)("p",null,"Middleware have a similar function signature to ",(0,o.kt)("inlineCode",{parentName:"p"},"vk.HandlerFunc"),", but only return an error. The first example modifies the request context to add a response header. The second example detects a hacker and returns an error, which is handled exactly like any other error response (see below). Returning an error from a Middleware prevents the request from ever reaching the registered handler."),(0,o.kt)("p",null,"Middleware are applied to route groups with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Before")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},'v1 := vk.Group("/v1").Before(vk.ContentTypeMiddleware("application/json"), denyMiddleware, headerMiddleware)\nv1.GET("/events", HandleEventsV1)\n')),(0,o.kt)("p",null,"This example shows a group created with three middleware. The first adds the ",(0,o.kt)("inlineCode",{parentName:"p"},"Content-Type")," response header (and is included with ",(0,o.kt)("inlineCode",{parentName:"p"},"vk"),"), the second and third are the examples from above. When the group is mounted to the server, the chain of middleware are put in place, and are run before the registered handler. When groups are nested, the middleware from the parent group are run before the middleware of any child groups. In the example of nested groups above, any middleware set on the ",(0,o.kt)("inlineCode",{parentName:"p"},"apiGroup")," groups would run before any middleware set on the ",(0,o.kt)("inlineCode",{parentName:"p"},"v1")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"v2")," groups."),(0,o.kt)("p",null,"Afterware is similar, but is run ",(0,o.kt)("em",{parentName:"p"},"after")," the request handler. Who knew! Afterware cannot modify response body or status code, but can modify response headers using the ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx")," object. Afterware will ",(0,o.kt)("strong",{parentName:"p"},"always run"),", even if something earlier in the request chain fails. Here's an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},'func logAfter(r *http.Request, ctx *vk.Ctx) {\n    ctx.Log.Info("request completed")\n}\n\nv2 := vk.Group("/v2").Before(vk.ContentTypeMiddleware("application/json")).After(logAfter)\nv2.GET("/events", HandleEventsV2)\n')),(0,o.kt)("p",null,"Middleware and Afterware in ",(0,o.kt)("inlineCode",{parentName:"p"},"vk")," is designed to be easily composable, creating chains of behaviour easily grouped to sets of routes. Middleware can also help increase security of applications, allowing authentication, request throttling, active defence, etc, to run before the registered handler and keeping sensitive code from even being reached in the case of an unauthorized request."),(0,o.kt)("h1",{id:"responding-to-requests"},"Responding to requests"),(0,o.kt)("h2",{id:"response-types"},"Response types"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"vk")," includes two types, ",(0,o.kt)("inlineCode",{parentName:"p"},"Response")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Error"),"\n(with helper functions ",(0,o.kt)("inlineCode",{parentName:"p"},"vk.Respond(...)")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"vk.Err(...)"),") that can be used to gain extra\ncontrol over the response code and contents\nthat you want to return:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},'type createdResponse struct {\n    Name string `json:"name"`\n    UUID string `json:"uuid"`\n}\n\nfunc HandleCreate(r *http.Request, ctx *vk.Ctx) (interface{}, error) {\n    // Do some work\n\n    resp := createdResponse {\n        Name: "Wendy",\n        UUID: "jfioqerjhp98qergnjw98h23"\n    }\n\n    // Return 201 (Created) and JSON\n    return vk.Respond(http.StatusCreated, resp), nil\n}\n\nfunc HandleDelete(r *http.Request, ctx *vk.Ctx) (interface{}, error) {\n    // Oops, something went wrong\n\n    return nil, vk.Err(http.StatusConflict, "the user is already deleted") // responds with HTTP status 409 and body {"status": 409, "message": "the user is already deleted"}\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"vk.Respond")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"vk.Err")," can be used with their shortcuts\n",(0,o.kt)("inlineCode",{parentName:"p"},"vk.R")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"vk.E")," if you like your code to be terse."),(0,o.kt)("h2",{id:"response-handling-rules"},"Response handling rules"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"vk")," processes the ",(0,o.kt)("inlineCode",{parentName:"p"},"(interface{}, error)")," returned by handler functions in a spcific way to ensure you always know how it will behave while still being able to use simple types in your code."),(0,o.kt)("h3",{id:"successful-responses-ie-the-interface-returned-by-handler-functions"},"Successful responses (i.e. the ",(0,o.kt)("inlineCode",{parentName:"h3"},"interface{}")," returned by handler functions):"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"vk.Response")," is an (optional) type that can be used to control the behaviour of the response, if desired. ",(0,o.kt)("inlineCode",{parentName:"p"},"vk.Respond(...)")," returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"vk.Response"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If the type is ",(0,o.kt)("inlineCode",{parentName:"li"},"vk.Response"),", set the HTTP status code provided and process ",(0,o.kt)("inlineCode",{parentName:"li"},"Response.body")," as follows. (If the type is NOT ",(0,o.kt)("inlineCode",{parentName:"li"},"vk.Response"),", the status code is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"200 OK"),")"),(0,o.kt)("li",{parentName:"ol"},"If the type is string, write the string (as UTF-8 bytes) to the response body."),(0,o.kt)("li",{parentName:"ol"},"If the type is bytes, write them directly to the response body."),(0,o.kt)("li",{parentName:"ol"},"If the type is a struct, attempt to marshal to JSON and write JSON bytes to the response body.")),(0,o.kt)("p",null,"If a Content-Type is not explicitly set by your code in the middleware chain or ",(0,o.kt)("inlineCode",{parentName:"p"},"HandlerFunc"),", the value will be inferred from the type returned from the ",(0,o.kt)("inlineCode",{parentName:"p"},"HandlerFunc"),"."),(0,o.kt)("p",null,"Examples:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Handler returns..."),(0,o.kt)("th",{parentName:"tr",align:null},"Status Code"),(0,o.kt)("th",{parentName:"tr",align:null},"Response body"),(0,o.kt)("th",{parentName:"tr",align:null},"Content-Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'return "Hello, World", nil')),(0,o.kt)("td",{parentName:"tr",align:null},"200 OK"),(0,o.kt)("td",{parentName:"tr",align:null},'"Hello World" (as UTF-8 bytes)'),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"text/plain"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"return jsonBytesFromJSONMarshal, nil")),(0,o.kt)("td",{parentName:"tr",align:null},"200 OK"),(0,o.kt)("td",{parentName:"tr",align:null},"[JSON bytes as generated by json.Marshal]"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"application/octet-stream"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"return someStructInstance, nil")),(0,o.kt)("td",{parentName:"tr",align:null},"200 OK"),(0,o.kt)("td",{parentName:"tr",align:null},"[JSON respresentation of struct automatically marshalled by ",(0,o.kt)("inlineCode",{parentName:"td"},"vk"),"]"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"application/json"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'return vk.R(http.StatusCreated, "created"), nil')),(0,o.kt)("td",{parentName:"tr",align:null},"201 Created"),(0,o.kt)("td",{parentName:"tr",align:null},'"created" (as UTF-8 bytes)'),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"text/plain"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"return vk.R(http.StatusCreated, someStructInstance), nil")),(0,o.kt)("td",{parentName:"tr",align:null},"201 Created"),(0,o.kt)("td",{parentName:"tr",align:null},"[JSON respresentation of struct automatically marshalled by ",(0,o.kt)("inlineCode",{parentName:"td"},"vk"),"]"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"application/json"))))),(0,o.kt)("h3",{id:"failure-responses-ie-the-error-returned-by-middleware-or-handler-functions"},"Failure responses (i.e. the ",(0,o.kt)("inlineCode",{parentName:"h3"},"error")," returned by middleware or handler functions):"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"vk.Error")," is an interface that can be used to control the behaviour of error responses. ",(0,o.kt)("inlineCode",{parentName:"p"},"vk.ErrorResponse")," is a concrete type that implements ",(0,o.kt)("inlineCode",{parentName:"p"},"vk.Error"),". Any errors that do NOT implement ",(0,o.kt)("inlineCode",{parentName:"p"},"vk.Error")," will be treated as potentially unsafe, and their contents will be logged but not returned to the caller. Use ",(0,o.kt)("inlineCode",{parentName:"p"},"vk.Wrap(...)")," if you'd like to wrap an ",(0,o.kt)("inlineCode",{parentName:"p"},"error")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"vk.ErrorResponse"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"vk.Err")," returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"vk.Error"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"vk.Error")," looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},"type Error interface {\n    Error() string // this ensures all Errors will also conform to the normal error interface\n\n    Message() string\n    Status() int\n}\n")),(0,o.kt)("p",null,"Errors returned from middleware or ",(0,o.kt)("inlineCode",{parentName:"p"},"HandlerFunc"),"s are\nhandled as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If the type is ",(0,o.kt)("inlineCode",{parentName:"p"},"vk.Error"),", set the HTTP status code\nprovided and respond with JSON as follows: ",(0,o.kt)("inlineCode",{parentName:"p"},'{"status": err.Status(), "message": err.Message()}'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If the type is NOT ",(0,o.kt)("inlineCode",{parentName:"p"},"vk.Error"),', log the potentially\nunsafe error contents, set the HTTP status code to 500,\nand respond with "Internal Server Error"'))),(0,o.kt)("p",null,"Examples:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Handler returns..."),(0,o.kt)("th",{parentName:"tr",align:null},"Status Code"),(0,o.kt)("th",{parentName:"tr",align:null},"Response body"),(0,o.kt)("th",{parentName:"tr",align:null},"Content-Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'return nil, errors.New("failed to add user")')),(0,o.kt)("td",{parentName:"tr",align:null},"500 Internal Server Error"),(0,o.kt)("td",{parentName:"tr",align:null},'"Internal Server Error" (as UTF-8 bytes)'),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"text/plain"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'return nil, vk.E(http.StatusForbidden, "not permitted to do this thing")')),(0,o.kt)("td",{parentName:"tr",align:null},"403 Forbidden"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'{"status": 403, "message": "not permitted to do this thing"}')),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"application/json"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"return nil, vk.Wrap(http.StatusApplicationError, err)")),(0,o.kt)("td",{parentName:"tr",align:null},"434 Application Error"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'{"status": 434, "message": err.Error()}')),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"application/json"))))),(0,o.kt)("h2",{id:"standard-httphandlerfunc"},"Standard http.HandlerFunc"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"vk")," can use standard ",(0,o.kt)("inlineCode",{parentName:"p"},"http.HandlerFunc")," handlers\nby mounting them with ",(0,o.kt)("inlineCode",{parentName:"p"},"server.HandleHTTP"),". This\nis useful for mounting handler functions provided\nby third party libraries (such as Prometheus),\nbut they are not able to take advantage of many ",(0,o.kt)("inlineCode",{parentName:"p"},"vk"),"\nfeatures such as middleware or route groups currently."),(0,o.kt)("h2",{id:"the-ctx-object"},"The Ctx Object"),(0,o.kt)("p",null,"Each request handler is passed a ",(0,o.kt)("inlineCode",{parentName:"p"},"vk.Ctx")," object,\nwhich is a context object for the request. It is\nsimilar to the ",(0,o.kt)("inlineCode",{parentName:"p"},"context.Context")," type (and uses\none under the hood), but ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctx")," has been augmented\nfor use in web service development."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Ctx")," includes a standard Go ",(0,o.kt)("inlineCode",{parentName:"p"},"context.Context"),"\nwhich can be used as a pseudo key/value store using\n",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.Set()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.Get()"),". This allows passing\nthings into request handlers such as database\nconnections or other persistent objects. Middleware\nand Afterware can access the ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctx")," to modify it,\nor access data from it."),(0,o.kt)("p",null,"The server's configured ",(0,o.kt)("inlineCode",{parentName:"p"},"vlog.Logger")," object is\nincluded (",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.Log"),") for logging within request\nhandlers, and a shortcut for setting the logger's\nscope for the current request exists with\n",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.UseScope(...)"),". You can learn about scope\nin ",(0,o.kt)("a",{parentName:"p",href:"../vlog/README.md"},"the vlog docs"),". A default\nscope will always be set with the request ID included."),(0,o.kt)("p",null,"Accessing the URL params for the request\n(such as ",(0,o.kt)("inlineCode",{parentName:"p"},"/users/:uuid"),") is done with ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.Params"),",\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.RespHeaders")," can be used to set response headers\nif needed."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Ctx")," can also be used to easily get a request ID,\nwith ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.RequestID()"),". The Request ID is generated\nand cached on the object, and so calling it multiple\ntimes will return the same value. If you prefer to\nset your own Request ID, ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.UseRequestID()")," will do\nthe trick. However it will mean the first log message\nfor the request will have a different ID as it uses\nthe default ID generated for the ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx"),"."),(0,o.kt)("h2",{id:"whats-to-come"},"What's to come?"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Vektor")," is under active development. It intertwines\nclosely with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/suborbital/reactr"},"Reactr")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/suborbital/grav"},"Grav")," to\nachieve Suborbital's goal of creating a platform for building\nscalable web services. Reactr and Vektor together\ncan handle very large scale systems, and will be further\nintegrated together to enable FaaS, WASM-based web service logic,\nand vastly improved developer experience and productivity."))}m.isMDXComponent=!0}}]);