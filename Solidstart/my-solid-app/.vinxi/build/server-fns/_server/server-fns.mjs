import{fromJSON as Ve,crossSerializeStream as Ge,getCrossReferenceHeader as Qe}from"seroval";import{CustomEventPlugin as de,DOMExceptionPlugin as pe,EventPlugin as me,FormDataPlugin as ge,HeadersPlugin as ye,ReadableStreamPlugin as we,RequestPlugin as be,ResponsePlugin as Re,URLSearchParamsPlugin as ve,URLPlugin as Se}from"seroval-plugins/web";import{lazy as Ye,createComponent as Pe,getOwner as Ee,runWithOwner as $e,createMemo as S,createContext as xe,useContext as Z,createSignal as C,createRenderEffect as Ze,untrack as oe,on as Ae,startTransition as et,resetErrorBoundaries as ae,children as tt,createRoot as nt,Show as Le,onCleanup as Te,Suspense as rt,sharedConfig as qe}from"solid-js";import{ssrElement as D,escape as J,mergeProps as st,ssr as ke,isServer as q,getRequestEvent as O,createComponent as E,delegateEvents as ot,ssrHydrationKey as at,renderToString as it}from"solid-js/web";import{provideRequestEvent as Ce}from"solid-js/web/storage";import{H3Event as V,setResponseStatus as ct,setHeader as ut,getRequestIP as lt,getResponseStatus as ft,getResponseStatusText as ht,getCookie as dt,setCookie as pt,getRequestURL as mt,getResponseHeaders as gt,getResponseHeader as yt,setResponseHeader as wt,appendResponseHeader as bt,removeResponseHeader as Rt,getRequestWebStream as vt,eventHandler as St}from"h3";import{getContext as Pt}from"unctx";import{AsyncLocalStorage as Et}from"node:async_hooks";import{createRouter as $t}from"radix3";function xt(e){let t;const n=He(e),r={duplex:"half",method:e.method,headers:e.headers};return e.node.req.body instanceof ArrayBuffer?new Request(n,{...r,body:e.node.req.body}):new Request(n,{...r,get body(){return t||(t=Ut(e),t)}})}function At(e){return e.web??={request:xt(e),url:He(e)},e.web.request}function Lt(){return Wt()}const F=Symbol("$HTTPEvent");function Tt(e){return typeof e=="object"&&(e instanceof V||e?.[F]instanceof V||e?.__is_event__===!0)}function R(e){return function(...t){let n=t[0];if(Tt(n))t[0]=n instanceof V||n.__is_event__?n:n[F];else{if(!globalThis.app.config.server.experimental?.asyncContext)throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");if(n=Lt(),!n)throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");t.unshift(n)}return e(...t)}}const He=R(mt),qt=R(lt),G=R(ct),ie=R(ft),kt=R(ht),j=R(gt),ce=R(yt),Ct=R(wt),Ht=R(bt),Ot=R(dt),Ft=R(pt),Q=R(ut),Ut=R(vt),_t=R(Rt),It=R(At);function jt(){return Pt("nitro-app",{asyncContext:!!globalThis.app.config.server.experimental?.asyncContext,AsyncLocalStorage:Et})}function Wt(){return jt().use().event}const K="Invariant Violation",{setPrototypeOf:Bt=function(e,t){return e.__proto__=t,e}}=Object;class ee extends Error{framesToPop=1;name=K;constructor(t=K){super(typeof t=="number"?`${K}: ${t} (see https://github.com/apollographql/invariant-packages)`:t),Bt(this,ee.prototype)}}function Nt(e,t){if(!e)throw new ee(t)}const z=Symbol("fetchEvent");function Mt(e){return{request:It(e),response:Xt(e),clientAddress:qt(e),locals:{},nativeEvent:e,[F]:e}}function Dt(e){return{...e,[F]:e[F]}}function Kt(e){if(!e[z]){const t=Mt(e);e[z]=t}return e[z]}function ue(e,t){for(const[n,r]of t.entries())Q(e,n,r)}class zt{constructor(t){this.event=t}get(t){const n=ce(this.event,t);return Array.isArray(n)?n.join(", "):n}has(t){return this.get(t)!==void 0}set(t,n){return Ct(this.event,t,n)}delete(t){return _t(this.event,t)}append(t,n){Ht(this.event,t,n)}getSetCookie(){const t=ce(this.event,"Set-Cookie");return Array.isArray(t)?t:[t]}forEach(t){return Object.entries(j(this.event)).forEach(([n,r])=>t(Array.isArray(r)?r.join(", "):r,n,this))}entries(){return Object.entries(j(this.event)).map(([t,n])=>[t,Array.isArray(n)?n.join(", "):n])[Symbol.iterator]()}keys(){return Object.keys(j(this.event))[Symbol.iterator]()}values(){return Object.values(j(this.event)).map(t=>Array.isArray(t)?t.join(", "):t)[Symbol.iterator]()}[Symbol.iterator](){return this.entries()[Symbol.iterator]()}}function Xt(e){return{get status(){return ie(e)},set status(t){G(e,t)},get statusText(){return kt(e)},set statusText(t){G(e,ie(),t)},headers:new zt(e)}}function Jt(e){e.forEach(t=>{if(!t.attrs.href)return;let n=document.head.querySelector(`link[href="${t.attrs.href}"]`);n||(n=document.createElement("link"),n.setAttribute("rel","preload"),n.setAttribute("as","style"),n.setAttribute("href",t.attrs.href),document.head.appendChild(n))})}var Vt=" ";const Gt={style:e=>D("style",e.attrs,()=>J(e.children),!0),link:e=>D("link",e.attrs,void 0,!0),script:e=>e.attrs.src?D("script",st(()=>e.attrs,{get id(){return e.key}}),()=>ke(Vt),!0):null};function Qt(e){let{tag:t,attrs:{key:n,...r}={key:void 0},children:s}=e;return Gt[t]({attrs:r,key:n,children:s})}function Yt(e,t,n,r="default"){return Ye(async()=>{{const a=(await e.import())[r],c=(await t.inputs?.[e.src].assets()).filter(d=>d.tag==="style"||d.attrs.rel==="stylesheet");return typeof window<"u"&&Jt(c),{default:d=>[...c.map(l=>Qt(l)),Pe(a,d)]}}})}const Oe=[{$component:{src:"src/routes/about.tsx?pick=default&pick=$css",build:()=>import("./about.mjs"),import:()=>import("./about.mjs")},path:"/about",filePath:"E:/source/starterwebsite/Solidstart/my-solid-app/src/routes/about.tsx"},{$component:{src:"src/routes/index.tsx?pick=default&pick=$css",build:()=>import("./index.mjs"),import:()=>import("./index.mjs")},path:"/",filePath:"E:/source/starterwebsite/Solidstart/my-solid-app/src/routes/index.tsx"},{$component:{src:"src/routes/[...404].tsx?pick=default&pick=$css",build:()=>import("./_...404_.mjs"),import:()=>import("./_...404_.mjs")},path:"/*404",filePath:"E:/source/starterwebsite/Solidstart/my-solid-app/src/routes/[...404].tsx"}],Zt=en(Oe.filter(e=>e.$component));function en(e){function t(n,r,s,a){const o=Object.values(n).find(c=>s.startsWith(c.id+"/"));return o?(t(o.children||(o.children=[]),r,s.slice(o.id.length)),n):(n.push({...r,id:s,path:s.replace(/\/\([^)/]+\)/g,"")}),n)}return e.sort((n,r)=>n.path.length-r.path.length).reduce((n,r)=>t(n,r,r.path,r.path),[])}function tn(e){return e.$GET||e.$POST||e.$PUT||e.$PATCH||e.$DELETE}$t({routes:Oe.reduce((e,t)=>{if(!tn(t))return e;let n=t.path.replace(/\(.*\)\/?/g,"").replace(/\*([^/]*)/g,(r,s)=>`**:${s}`);if(/:[^/]*\?/g.test(n))throw new Error(`Optional parameters are not supported in API routes: ${n}`);if(e[n])throw new Error(`Duplicate API routes for "${n}" found at "${e[n].route.path}" and "${t.path}"`);return e[n]={route:t},e},{})});function Fe(){function e(n){return{...n,...n.$$route?n.$$route.require().route:void 0,info:{...n.$$route?n.$$route.require().route.info:{},filesystem:!0},component:Yt(n.$component,globalThis.MANIFEST.client,globalThis.MANIFEST.ssr),children:n.children?n.children.map(e):void 0}}return Zt.map(e)}let le;const nn=q?()=>O().routes:()=>le||(le=Fe());function rn(e){const t=Ot(e,"flash");if(!t)return;let n=JSON.parse(t);if(!n||!n.result)return;const r=[...n.input.slice(0,-1),new Map(n.input[n.input.length-1])];return Ft(e,"flash","",{maxAge:0}),{input:r,url:n.url,pending:!1,result:n.error?new Error(n.result):n.result}}async function sn(e){const t=globalThis.MANIFEST.client;return globalThis.MANIFEST.ssr,e.response.headers.set("Content-Type","text/html"),Object.assign(e,{manifest:await t.json(),assets:[...await t.inputs[t.handler].assets()],router:{submission:rn(e)},routes:Fe(),$islands:new Set})}function Ue(){let e=new Set;function t(s){return e.add(s),()=>e.delete(s)}let n=!1;function r(s,a){if(n)return!(n=!1);const o={to:s,options:a,defaultPrevented:!1,preventDefault:()=>o.defaultPrevented=!0};for(const c of e)c.listener({...o,from:c.location,retry:u=>{u&&(n=!0),c.navigate(s,{...a,resolve:!1})}});return!o.defaultPrevented}return{subscribe:t,confirm:r}}let Y;function te(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),Y=window.history.state._depth}q||te();function on(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function an(e,t){let n=!1;return()=>{const r=Y;te();const s=r==null?null:Y-r;if(n){n=!1;return}s&&t(s)?(n=!0,window.history.go(-s)):e()}}const cn=/^(?:[a-z0-9]+:)?\/\//i,un=/^\/+|(\/)\/+$/g,_e="http://sr";function H(e,t=!1){const n=e.replace(un,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function W(e,t,n){if(cn.test(t))return;const r=H(e),s=n&&H(n);let a="";return!s||t.startsWith("/")?a=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?a=r+s:a=s,(a||"/")+H(t,!a)}function ln(e,t){if(e==null)throw new Error(t);return e}function fn(e,t){return H(e).replace(/\/*(\*.*)?$/g,"")+H(t)}function ne(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function hn(e,t,n){const[r,s]=e.split("/*",2),a=r.split("/").filter(Boolean),o=a.length;return c=>{const u=c.split("/").filter(Boolean),d=u.length-o;if(d<0||d>0&&s===void 0&&!t)return null;const l={path:o?"":"/",params:{}},i=m=>n===void 0?void 0:n[m];for(let m=0;m<o;m++){const w=a[m],f=u[m],h=w[0]===":",g=h?w.slice(1):w;if(h&&X(f,i(g)))l.params[g]=f;else if(h||!X(f,w))return null;l.path+=`/${f}`}if(s){const m=d?u.slice(-d).join("/"):"";if(X(m,i(s)))l.params[s]=m;else return null}return l}}function X(e,t){const n=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function dn(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,a)=>s+(a.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function Ie(e){const t=new Map,n=Ee();return new Proxy({},{get(r,s){return t.has(s)||$e(n,()=>t.set(s,S(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function je(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const s=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=t[1]),r=r.slice(t[0].length);return je(r).reduce((a,o)=>[...a,...s.map(c=>c+o)],[])}const pn=100,We=xe(),N=xe(),re=()=>ln(Z(We),"<A> and 'use' router primitives can be only used inside a Route."),mn=()=>Z(N)||re().base,Vn=e=>{const t=mn();return S(()=>t.resolvePath(e()))},Gn=e=>{const t=re();return S(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},gn=()=>re().location;function yn(e,t=""){const{component:n,load:r,children:s,info:a}=e,o=!s||Array.isArray(s)&&!s.length,c={key:e,component:n,load:r,info:a};return Be(e.path).reduce((u,d)=>{for(const l of je(d)){const i=fn(t,l);let m=o?i:i.split("/*",1)[0];m=m.split("/").map(w=>w.startsWith(":")||w.startsWith("*")?w:encodeURIComponent(w)).join("/"),u.push({...c,originalPath:l,pattern:m,matcher:hn(m,!o,e.matchFilters)})}return u},[])}function wn(e,t=0){return{routes:e,score:dn(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const a=e[s],o=a.matcher(n);if(!o)return null;r.unshift({...o,route:a})}return r}}}function Be(e){return Array.isArray(e)?e:[e]}function Ne(e,t="",n=[],r=[]){const s=Be(e);for(let a=0,o=s.length;a<o;a++){const c=s[a];if(c&&typeof c=="object"){c.hasOwnProperty("path")||(c.path="");const u=yn(c,t);for(const d of u){n.push(d);const l=Array.isArray(c.children)&&c.children.length===0;if(c.children&&!l)Ne(c.children,d.pattern,n,r);else{const i=wn([...n],r.length);r.push(i)}n.pop()}}}return n.length?r:r.sort((a,o)=>o.score-a.score)}function B(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function bn(e,t){const n=new URL(_e),r=S(u=>{const d=e();try{return new URL(d,n)}catch{return console.error(`Invalid path ${d}`),u}},n,{equals:(u,d)=>u.href===d.href}),s=S(()=>r().pathname),a=S(()=>r().search,!0),o=S(()=>r().hash),c=()=>"";return{get pathname(){return s()},get search(){return a()},get hash(){return o()},get state(){return t()},get key(){return c()},query:Ie(Ae(a,()=>ne(r())))}}let x;function Rn(e,t,n,r={}){const{signal:[s,a],utils:o={}}=e,c=o.parsePath||(p=>p),u=o.renderPath||(p=>p),d=o.beforeLeave||Ue(),l=W("",r.base||"");if(l===void 0)throw new Error(`${l} is not a valid base path`);l&&!s().value&&a({value:l,replace:!0,scroll:!1});const[i,m]=C(!1),w=async p=>{m(!0);try{await et(p)}finally{m(!1)}},[f,h]=C(s().value),[g,y]=C(s().state),U=bn(f,g),v=[],$=C(q?Je():[]),k={pattern:l,params:{},path:()=>l,outlet:()=>null,resolvePath(p){return W(l,p)}};return Ze(()=>{const{value:p,state:b}=s();oe(()=>{p!==f()&&w(()=>{x="native",h(p),y(b),ae(),$[1]([])}).then(()=>{x=void 0})})}),{base:k,location:U,isRouting:i,renderPath:u,parsePath:c,navigatorFactory:Ke,beforeLeave:d,preloadRoute:Xe,singleFlight:r.singleFlight===void 0?!0:r.singleFlight,submissions:$};function De(p,b,A){oe(()=>{if(typeof b=="number"){b&&(o.go?o.go(b):console.warn("Router integration does not support relative routing"));return}const{replace:_,resolve:M,scroll:L,state:T}={replace:!1,resolve:!0,scroll:!0,...A},P=M?p.resolvePath(b):W("",b);if(P===void 0)throw new Error(`Path '${b}' is not a routable path`);if(v.length>=pn)throw new Error("Too many redirects");const se=f();if(P!==se||T!==g()){if(q){const I=O();I&&(I.response={status:302,headers:new Headers({Location:P})}),a({value:P,replace:_,scroll:L,state:T})}else if(d.confirm(P,A)){const I=v.push({value:se,replace:_,scroll:L,state:g()});w(()=>{x="navigate",h(P),y(T),ae(),$[1]([])}).then(()=>{v.length===I&&(x=void 0,ze({value:P,state:T}))})}}})}function Ke(p){return p=p||Z(N)||k,(b,A)=>De(p,b,A)}function ze(p){const b=v[0];b&&((p.value!==b.value||p.state!==b.state)&&a({...p,replace:b.replace,scroll:b.scroll}),v.length=0)}function Xe(p,b){const A=B(n(),p.pathname),_=x;x="preload";for(let M in A){const{route:L,params:T}=A[M];L.component&&L.component.preload&&L.component.preload();const{load:P}=L;b&&P&&$e(t(),()=>P({params:T,location:{pathname:p.pathname,search:p.search,hash:p.hash,query:ne(p),state:null,key:""},intent:"preload"}))}x=_}function Je(){const p=O();return p&&p.router&&p.router.submission?[p.router.submission]:[]}}function vn(e,t,n,r,s){const{base:a,location:o}=e,{pattern:c,component:u,load:d}=r().route,l=S(()=>r().path);u&&u.preload&&u.preload();const i=d?d({params:s,location:o,intent:x||"initial"}):void 0;return{parent:t,pattern:c,path:l,params:s,outlet:()=>u?Pe(u,{params:s,location:o,data:i,get children(){return n()}}):n(),resolvePath(w){return W(a.path(),w,l())}}}const Me=e=>t=>{const{base:n}=t,r=tt(()=>t.children),s=S(()=>Ne(t.root?{component:t.root,load:t.rootLoad,children:r()}:r(),t.base||""));let a;const o=Rn(e,()=>a,s,{base:n,singleFlight:t.singleFlight});return e.create&&e.create(o),E(We.Provider,{value:o,get children(){return[(a=Ee())&&null,E(Sn,{routerState:o,get branches(){return s()}})]}})};function Sn(e){const t=S(()=>B(e.branches,e.routerState.location.pathname));if(q){const o=O();if(o&&o.router&&o.router.dataOnly){En(o,e.branches);return}o&&((o.router||(o.router={})).matches||(o.router.matches=t().map(({route:c,path:u,params:d})=>({path:c.originalPath,pattern:c.pattern,match:u,params:d,info:c.info}))))}const n=Ie(()=>{const o=t(),c={};for(let u=0;u<o.length;u++)Object.assign(c,o[u].params);return c}),r=[];let s;const a=S(Ae(t,(o,c,u)=>{let d=c&&o.length===c.length;const l=[];for(let i=0,m=o.length;i<m;i++){const w=c&&c[i],f=o[i];u&&w&&f.route.key===w.route.key?l[i]=u[i]:(d=!1,r[i]&&r[i](),nt(h=>{r[i]=h,l[i]=vn(e.routerState,l[i-1]||e.routerState.base,Pn(()=>a()[i+1]),()=>t()[i],n)}))}return r.splice(o.length).forEach(i=>i()),u&&d?u:(s=l[0],l)}));return E(Le,{get when(){return a()&&s},keyed:!0,children:o=>E(N.Provider,{value:o,get children(){return o.outlet()}})})}const Pn=e=>()=>E(Le,{get when(){return e()},keyed:!0,children:t=>E(N.Provider,{value:t,get children(){return t.outlet()}})});function En(e,t){const n=new URL(e.request.url),r=B(t,new URL(e.router.previousUrl||e.request.url).pathname),s=B(t,n.pathname);for(let a=0;a<s.length;a++){(!r[a]||s[a].route!==r[a].route)&&(e.router.dataOnly=!0);const{route:o,params:c}=s[a];o.load&&o.load({params:c,location:{pathname:n.pathname,search:n.search,hash:n.hash,query:ne(n),state:null,key:""},intent:"preload"})}}function $n([e,t],n,r){return[n?()=>n(e()):e,r?s=>t(r(s)):t]}function xn(e){if(e==="#")return null;try{return document.querySelector(e)}catch{return null}}function An(e){let t=!1;const n=s=>typeof s=="string"?{value:s}:s,r=$n(C(n(e.get()),{equals:(s,a)=>s.value===a.value}),void 0,s=>(!t&&e.set(s),s));return e.init&&Te(e.init((s=e.get())=>{t=!0,r[1](n(s)),t=!1})),Me({signal:r,create:e.create,utils:e.utils})}function Ln(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Tn(e,t){const n=xn(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function qn(e){const t=new URL(e);return t.pathname+t.search}function kn(e){let t;const n={value:e.url||(t=O())&&qn(t.request.url)||""};return Me({signal:[()=>n,r=>Object.assign(n,r)]})(e)}const Cn=new Map;function Hn(e=!0,t=!1,n="/_server"){return r=>{const s=r.base.path(),a=r.navigatorFactory(r.base);let o={};function c(f){return f.namespaceURI==="http://www.w3.org/2000/svg"}function u(f){if(f.defaultPrevented||f.button!==0||f.metaKey||f.altKey||f.ctrlKey||f.shiftKey)return;const h=f.composedPath().find(k=>k instanceof Node&&k.nodeName.toUpperCase()==="A");if(!h||t&&!h.hasAttribute("link"))return;const g=c(h),y=g?h.href.baseVal:h.href;if((g?h.target.baseVal:h.target)||!y&&!h.hasAttribute("state"))return;const v=(h.getAttribute("rel")||"").split(/\s+/);if(h.hasAttribute("download")||v&&v.includes("external"))return;const $=g?new URL(y,document.baseURI):new URL(y);if(!($.origin!==window.location.origin||s&&$.pathname&&!$.pathname.toLowerCase().startsWith(s.toLowerCase())))return[h,$]}function d(f){const h=u(f);if(!h)return;const[g,y]=h,U=r.parsePath(y.pathname+y.search+y.hash),v=g.getAttribute("state");f.preventDefault(),a(U,{resolve:!1,replace:g.hasAttribute("replace"),scroll:!g.hasAttribute("noscroll"),state:v&&JSON.parse(v)})}function l(f){const h=u(f);if(!h)return;const[g,y]=h;o[y.pathname]||r.preloadRoute(y,g.getAttribute("preload")!=="false")}function i(f){const h=u(f);if(!h)return;const[g,y]=h;o[y.pathname]||(o[y.pathname]=setTimeout(()=>{r.preloadRoute(y,g.getAttribute("preload")!=="false"),delete o[y.pathname]},200))}function m(f){const h=u(f);if(!h)return;const[,g]=h;o[g.pathname]&&(clearTimeout(o[g.pathname]),delete o[g.pathname])}function w(f){let h=f.submitter&&f.submitter.hasAttribute("formaction")?f.submitter.getAttribute("formaction"):f.target.getAttribute("action");if(!h)return;if(!h.startsWith("https://action/")){const y=new URL(h,_e);if(h=r.parsePath(y.pathname+y.search),!h.startsWith(n))return}if(f.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const g=Cn.get(h);if(g){f.preventDefault();const y=new FormData(f.target);f.submitter&&f.submitter.name&&y.append(f.submitter.name,f.submitter.value),g.call(r,y)}}ot(["click","submit"]),document.addEventListener("click",d),e&&(document.addEventListener("mouseover",i),document.addEventListener("mouseout",m),document.addEventListener("focusin",l),document.addEventListener("touchstart",l)),document.addEventListener("submit",w),Te(()=>{document.removeEventListener("click",d),e&&(document.removeEventListener("mouseover",i),document.removeEventListener("mouseout",m),document.removeEventListener("focusin",l),document.removeEventListener("touchstart",l)),document.removeEventListener("submit",w)})}}function On(e){if(q)return kn(e);const t=()=>({value:window.location.pathname+window.location.search+window.location.hash,state:window.history.state}),n=Ue();return An({get:t,set({value:r,replace:s,scroll:a,state:o}){s?window.history.replaceState(on(o),"",r):window.history.pushState(o,"",r),Tn(window.location.hash.slice(1),a),te()},init:r=>Ln(window,"popstate",an(r,s=>{if(s&&s<0)return!n.confirm(s);{const a=t();return!n.confirm(a.value,{state:a.state})}})),create:Hn(e.preload,e.explicitLinks,e.actionBase),utils:{go:r=>window.history.go(r),beforeLeave:n}})(e)}var Fn=["<nav",' class="bg-sky-800"><ul class="container flex items-center p-3 text-gray-200"><li class="','"><a href="/">Home</a></li><li class="','"><a href="/about">About</a></li></ul></nav>'];function Un(){const e=gn(),t=n=>n==e.pathname?"border-sky-600":"border-transparent hover:border-sky-600";return ke(Fn,at(),`border-b-2 ${J(t("/"),!0)} mx-1.5 sm:mx-6`,`border-b-2 ${J(t("/about"),!0)} mx-1.5 sm:mx-6`)}function _n(){return E(On,{root:e=>[E(Un,{}),E(rt,{get children(){return e.children}})],get children(){return E(nn,{})}})}function In(e){const n=e.length.toString(16),r="00000000".substring(0,8-n.length)+n;return new TextEncoder().encode(`;0x${r};${e}`)}function fe(e,t){return new ReadableStream({start(n){Ge(t,{scopeId:e,plugins:[de,pe,me,ge,ye,we,be,Re,ve,Se],onSerialize(r,s){n.enqueue(In(s?`(${Qe(e)},${r})`:r))},onDone(){n.close()},onError(r){n.error(r)}})}})}async function jn(e){const t=Kt(e),n=t.request,r=n.headers.get("X-Server-Id"),s=n.headers.get("X-Server-Instance"),a=n.headers.has("X-Single-Flight"),o=new URL(n.url);let c,u;if(r)Nt(typeof r=="string","Invalid server function"),[c,u]=r.split("#");else if(c=o.searchParams.get("id"),u=o.searchParams.get("name"),!c||!u)throw new Error("Invalid request");const d=(await globalThis.MANIFEST["server-fns"].chunks[c].import())[u];let l=[];if(!s||e.method==="GET"){const i=o.searchParams.get("args");i&&JSON.parse(i).forEach(m=>l.push(m))}if(e.method==="POST"){const i=n.headers.get("content-type");if(i?.startsWith("multipart/form-data")||i?.startsWith("application/x-www-form-urlencoded"))l.push(await new Request(n,{...n,body:e.node.req.body}).formData());else if(i?.startsWith("application/json")){const m=new Request(n,{...n,body:e.node.req.body});l=Ve(await m.json(),{plugins:[de,pe,me,ge,ye,we,be,Re,ve,Se]})}}try{let i=await Ce(t,async()=>(qe.context={event:t},d(...l)));if(a&&s&&(i=await he(t,i)),i instanceof Response&&s&&(i.headers&&ue(e,i.headers),i.customBody?i=await i.customBody():i.body==null&&(i=null)),!s){const m=i instanceof Error;let w=new URL(n.headers.get("referer")).toString();return i instanceof Response&&i.headers.has("Location")&&(w=new URL(i.headers.get("Location"),new URL(n.url).origin+"").toString()),new Response(null,{status:302,headers:{Location:w,...i?{"Set-Cookie":`flash=${JSON.stringify({url:o.pathname+encodeURIComponent(o.search),result:m?i.message:i,error:m,input:[...l.slice(0,-1),[...l[l.length-1].entries()]]})}; Secure; HttpOnly;`}:{}}})}return Q(e,"content-type","text/javascript"),fe(s,i)}catch(i){return i instanceof Response&&(a&&s&&(i=await he(t,i)),i.status===302&&!s&&G(e,302),i.headers&&ue(e,i.headers),i.customBody?i=i.customBody():i.body==null&&(i=null),s)?(Q(e,"content-type","text/javascript"),fe(s,i)):i}}async function he(e,t){let n,r=new URL(e.request.headers.get("referer")).toString();t instanceof Response&&(t.headers.has("X-Revalidate")&&(n=t.headers.get("X-Revalidate").split(",")),t.headers.has("Location")&&(r=new URL(t.headers.get("Location"),new URL(e.request.url).origin+"").toString()));const s=Dt(e);return s.request=new Request(r),await Ce(s,async()=>{await sn(s),s.router.dataOnly=n||!0,s.router.previousUrl=e.request.headers.get("referer");try{it(()=>{qe.context.event=s,_n()})}catch(c){console.log(c)}const a=s.router.data;if(!a)return t;let o=!1;for(const c in a)a[c]===void 0?delete a[c]:o=!0;return o&&(t instanceof Response?t.customBody&&(a._$value=t.customBody()):(a._$value=t,t=new Response(null,{status:200})),t.customBody=()=>a,t.headers.set("X-Single-Flight","true")),t})}const Qn=St(jn);export{Gn as a,gn as b,Qn as h,H as n,Vn as u};