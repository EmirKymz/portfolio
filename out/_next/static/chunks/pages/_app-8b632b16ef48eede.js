(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3454:function(e,t,r){"use strict";var n,o;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(o=r.g.process)?void 0:o.env)?r.g.process:r(7663)},1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(3414)}])},3414:function(e,t,r){"use strict";r.r(t);var n=r(5893);r(9311);var o=r(3457),a=r.n(o),i=r(1571),s=r(9808);t.default=function(e){let{Component:t,pageProps:r}=e;return(0,n.jsxs)(i.f,{attribute:"class",children:[(0,n.jsx)(a(),{color:s.fuchsia[500],height:4}),(0,n.jsx)(t,{...r})]})}},9311:function(){},7663:function(e){!function(){var t={229:function(e){var t,r,n,o=e.exports={};function a(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var f=[],c=!1,l=-1;function u(){c&&n&&(c=!1,n.length?f=n.concat(f):l=-1,f.length&&d())}function d(){if(!c){var e=s(u);c=!0;for(var t=f.length;t;){for(n=f,f=[];++l<t;)n&&n[l].run();l=-1,t=f.length}n=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function p(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];f.push(new m(e,t)),1!==f.length||c||s(d)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=p,o.addListener=p,o.once=p,o.off=p,o.removeListener=p,o.removeAllListeners=p,o.emit=p,o.prependListener=p,o.prependOnceListener=p,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}},i=!0;try{t[e](a,a.exports,n),i=!1}finally{i&&delete r[e]}return a.exports}n.ab="//";var o=n(229);e.exports=o}()},1163:function(e,t,r){e.exports=r(9090)},3457:function(e,t,r){let n;var o=Object.create,a=Object.defineProperty,i=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,f=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,l=e=>a(e,"__esModule",{value:!0}),u=(e,t)=>a(e,"name",{value:t,configurable:!0}),d=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of s(t))!c.call(e,o)&&(r||"default"!==o)&&a(e,o,{get:()=>t[o],enumerable:!(n=i(t,o))||n.enumerable});return e},m=(e,t)=>d(l(a(null!=e?o(f(e)):{},"default",!t&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),p=(n="undefined"!=typeof WeakMap?new WeakMap:0,(e,t)=>n&&n.get(e)||(t=d(l({}),e,1),n&&n.set(e,t),t)),h={};((e,t)=>{for(var r in t)a(e,r,{get:t[r],enumerable:!0})})(h,{default:()=>T});var b=m(r(1163)),g=m(r(4865)),y=m(r(5697)),v=m(r(7294)),w=u(({color:e="#29D",startPosition:t=.3,stopDelayMs:r=200,height:n=3,showOnShallow:o=!0,options:a,nonce:i,transformCSS:s=u(e=>v.createElement("style",{nonce:i},e),"transformCSS")})=>{let f=null;v.useEffect(()=>(a&&g.configure(a),b.default.events.on("routeChangeStart",c),b.default.events.on("routeChangeComplete",l),b.default.events.on("routeChangeError",d),()=>{b.default.events.off("routeChangeStart",c),b.default.events.off("routeChangeComplete",l),b.default.events.off("routeChangeError",d)}),[]);let c=u((e,{shallow:r})=>{(!r||o)&&(g.set(t),g.start())},"routeChangeStart"),l=u((e,{shallow:t})=>{(!t||o)&&(f&&clearTimeout(f),f=setTimeout(()=>{g.done(!0)},r))},"routeChangeEnd"),d=u((e,t,{shallow:n})=>{(!n||o)&&(f&&clearTimeout(f),f=setTimeout(()=>{g.done(!0)},r))},"routeChangeError");return s(`
    #nprogress {
      pointer-events: none;
    }
    #nprogress .bar {
      background: ${e};
      position: fixed;
      z-index: 9999;
      top: 0;
      left: 0;
      width: 100%;
      height: ${n}px;
    }
    #nprogress .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${e}, 0 0 5px ${e};
      opacity: 1;
      -webkit-transform: rotate(3deg) translate(0px, -4px);
      -ms-transform: rotate(3deg) translate(0px, -4px);
      transform: rotate(3deg) translate(0px, -4px);
    }
    #nprogress .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }
    #nprogress .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;
      border: solid 2px transparent;
      border-top-color: ${e};
      border-left-color: ${e};
      border-radius: 50%;
      -webkit-animation: nprogresss-spinner 400ms linear infinite;
      animation: nprogress-spinner 400ms linear infinite;
    }
    .nprogress-custom-parent {
      overflow: hidden;
      position: relative;
    }
    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
      position: absolute;
    }
    @-webkit-keyframes nprogress-spinner {
      0% {
        -webkit-transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
      }
    }
    @keyframes nprogress-spinner {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `)},"NextNProgress");w.propTypes={color:y.string,startPosition:y.number,stopDelayMs:y.number,height:y.number,showOnShallow:y.bool,options:y.object,nonce:y.string,transformCSS:y.func};var T=v.memo(w);e.exports=p(h)},4865:function(e,t,r){var n,o;void 0!==(o="function"==typeof(n=function(){var e,t,r,n={};n.version="0.2.0";var o=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function a(e,t,r){return e<t?t:e>r?r:e}n.configure=function(e){var t,r;for(t in e)void 0!==(r=e[t])&&e.hasOwnProperty(t)&&(o[t]=r);return this},n.status=null,n.set=function(e){var t=n.isStarted();e=a(e,o.minimum,1),n.status=1===e?null:e;var r=n.render(!t),f=r.querySelector(o.barSelector),c=o.speed,l=o.easing;return r.offsetWidth,i(function(t){var a,i;""===o.positionUsing&&(o.positionUsing=n.getPositioningCSS()),s(f,(a=e,(i="translate3d"===o.positionUsing?{transform:"translate3d("+(-1+a)*100+"%,0,0)"}:"translate"===o.positionUsing?{transform:"translate("+(-1+a)*100+"%,0)"}:{"margin-left":(-1+a)*100+"%"}).transition="all "+c+"ms "+l,i)),1===e?(s(r,{transition:"none",opacity:1}),r.offsetWidth,setTimeout(function(){s(r,{transition:"all "+c+"ms linear",opacity:0}),setTimeout(function(){n.remove(),t()},c)},c)):setTimeout(t,c)}),this},n.isStarted=function(){return"number"==typeof n.status},n.start=function(){n.status||n.set(0);var e=function(){setTimeout(function(){n.status&&(n.trickle(),e())},o.trickleSpeed)};return o.trickle&&e(),this},n.done=function(e){return e||n.status?n.inc(.3+.5*Math.random()).set(1):this},n.inc=function(e){var t=n.status;return t?("number"!=typeof e&&(e=(1-t)*a(Math.random()*t,.1,.95)),t=a(t+e,0,.994),n.set(t)):n.start()},n.trickle=function(){return n.inc(Math.random()*o.trickleRate)},e=0,t=0,n.promise=function(r){return r&&"resolved"!==r.state()&&(0===t&&n.start(),e++,t++,r.always(function(){0==--t?(e=0,n.done()):n.set((e-t)/e)})),this},n.render=function(e){if(n.isRendered())return document.getElementById("nprogress");c(document.documentElement,"nprogress-busy");var t=document.createElement("div");t.id="nprogress",t.innerHTML=o.template;var r,a=t.querySelector(o.barSelector),i=e?"-100":(-1+(n.status||0))*100,f=document.querySelector(o.parent);return s(a,{transition:"all 0 linear",transform:"translate3d("+i+"%,0,0)"}),!o.showSpinner&&(r=t.querySelector(o.spinnerSelector))&&d(r),f!=document.body&&c(f,"nprogress-custom-parent"),f.appendChild(t),t},n.remove=function(){l(document.documentElement,"nprogress-busy"),l(document.querySelector(o.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&d(e)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective" in e?"translate3d":t+"Transform" in e?"translate":"margin"};var i=(r=[],function(e){r.push(e),1==r.length&&function e(){var t=r.shift();t&&t(e)}()}),s=function(){var e=["Webkit","O","Moz","ms"],t={};function r(r,n,o){var a;n=t[a=(a=n).replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(e,t){return t.toUpperCase()})]||(t[a]=function(t){var r=document.body.style;if(t in r)return t;for(var n,o=e.length,a=t.charAt(0).toUpperCase()+t.slice(1);o--;)if((n=e[o]+a)in r)return n;return t}(a)),r.style[n]=o}return function(e,t){var n,o,a=arguments;if(2==a.length)for(n in t)void 0!==(o=t[n])&&t.hasOwnProperty(n)&&r(e,n,o);else r(e,a[1],a[2])}}();function f(e,t){return("string"==typeof e?e:u(e)).indexOf(" "+t+" ")>=0}function c(e,t){var r=u(e),n=r+t;f(r,t)||(e.className=n.substring(1))}function l(e,t){var r,n=u(e);f(e,t)&&(r=n.replace(" "+t+" "," "),e.className=r.substring(1,r.length-1))}function u(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function d(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return n})?n.call(t,r,t,e):n)&&(e.exports=o)},4241:function(e){var t=String,r=function(){return{isColorSupported:!1,reset:t,bold:t,dim:t,italic:t,underline:t,inverse:t,hidden:t,strikethrough:t,black:t,red:t,green:t,yellow:t,blue:t,magenta:t,cyan:t,white:t,gray:t,bgBlack:t,bgRed:t,bgGreen:t,bgYellow:t,bgBlue:t,bgMagenta:t,bgCyan:t,bgWhite:t,blackBright:t,redBright:t,greenBright:t,yellowBright:t,blueBright:t,magentaBright:t,cyanBright:t,whiteBright:t,bgBlackBright:t,bgRedBright:t,bgGreenBright:t,bgYellowBright:t,bgBlueBright:t,bgMagentaBright:t,bgCyanBright:t,bgWhiteBright:t}};e.exports=r(),e.exports.createColors=r},2703:function(e,t,r){"use strict";var n=r(414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},5697:function(e,t,r){e.exports=r(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},9808:function(e,t,r){let n=r(4921);e.exports=(n.__esModule?n:{default:n}).default},4921:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let o=(n=r(1679))&&n.__esModule?n:{default:n};function a({version:e,from:t,to:r}){o.default.warn(`${t}-color-renamed`,[`As of Tailwind CSS ${e}, \`${t}\` has been renamed to \`${r}\`.`,"Update your configuration file to silence this warning."])}let i={inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000",white:"#fff",slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12",950:"#431407"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f",950:"#451a03"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12",950:"#422006"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314",950:"#1a2e05"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d",950:"#052e16"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b",950:"#022c22"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a",950:"#042f2e"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63",950:"#083344"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e",950:"#082f49"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a",950:"#172554"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81",950:"#1e1b4b"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95",950:"#2e1065"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87",950:"#3b0764"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75",950:"#4a044e"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843",950:"#500724"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337",950:"#4c0519"},get lightBlue(){return a({version:"v2.2",from:"lightBlue",to:"sky"}),this.sky},get warmGray(){return a({version:"v3.0",from:"warmGray",to:"stone"}),this.stone},get trueGray(){return a({version:"v3.0",from:"trueGray",to:"neutral"}),this.neutral},get coolGray(){return a({version:"v3.0",from:"coolGray",to:"gray"}),this.gray},get blueGray(){return a({version:"v3.0",from:"blueGray",to:"slate"}),this.slate}}},1679:function(e,t,r){"use strict";var n,o=r(3454);Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{dim:function(){return f},default:function(){return c}});let a=(n=r(4241))&&n.__esModule?n:{default:n},i=new Set;function s(e,t,r){(void 0===o||!o.env.JEST_WORKER_ID)&&(r&&i.has(r)||(r&&i.add(r),console.warn(""),t.forEach(t=>console.warn(e,"-",t))))}function f(e){return a.default.dim(e)}let c={info(e,t){s(a.default.bold(a.default.cyan("info")),...Array.isArray(e)?[e]:[t,e])},warn(e,t){s(a.default.bold(a.default.yellow("warn")),...Array.isArray(e)?[e]:[t,e])},risk(e,t){s(a.default.bold(a.default.magenta("risk")),...Array.isArray(e)?[e]:[t,e])}}},1571:function(e,t,r){"use strict";r.d(t,{F:function(){return c},f:function(){return l}});var n=r(7294),o=["light","dark"],a="(prefers-color-scheme: dark)",i="undefined"==typeof window,s=n.createContext(void 0),f={setTheme:e=>{},themes:[]},c=()=>{var e;return null!=(e=n.useContext(s))?e:f},l=e=>n.useContext(s)?e.children:n.createElement(d,{...e}),u=["light","dark"],d=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:r=!0,enableColorScheme:i=!0,storageKey:f="theme",themes:c=u,defaultTheme:l=r?"system":"light",attribute:d="data-theme",value:g,children:y,nonce:v})=>{let[w,T]=n.useState(()=>p(f,l)),[S,k]=n.useState(()=>p(f)),x=g?Object.values(g):c,C=n.useCallback(e=>{let n=e;if(!n)return;"system"===e&&r&&(n=b());let a=g?g[n]:n,s=t?h():null,f=document.documentElement;if("class"===d?(f.classList.remove(...x),a&&f.classList.add(a)):a?f.setAttribute(d,a):f.removeAttribute(d),i){let e=o.includes(l)?l:null,t=o.includes(n)?n:e;f.style.colorScheme=t}null==s||s()},[]),E=n.useCallback(e=>{let t="function"==typeof e?e(e):e;T(t);try{localStorage.setItem(f,t)}catch(e){}},[e]),O=n.useCallback(t=>{k(b(t)),"system"===w&&r&&!e&&C("system")},[w,e]);n.useEffect(()=>{let e=window.matchMedia(a);return e.addListener(O),O(e),()=>e.removeListener(O)},[O]),n.useEffect(()=>{let e=e=>{e.key===f&&E(e.newValue||l)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[E]),n.useEffect(()=>{C(null!=e?e:w)},[e,w]);let _=n.useMemo(()=>({theme:w,setTheme:E,forcedTheme:e,resolvedTheme:"system"===w?S:w,themes:r?[...c,"system"]:c,systemTheme:r?S:void 0}),[w,E,e,S,r,c]);return n.createElement(s.Provider,{value:_},n.createElement(m,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:r,enableColorScheme:i,storageKey:f,themes:c,defaultTheme:l,attribute:d,value:g,children:y,attrs:x,nonce:v}),y)},m=n.memo(({forcedTheme:e,storageKey:t,attribute:r,enableSystem:i,enableColorScheme:s,defaultTheme:f,value:c,attrs:l,nonce:u})=>{let d="system"===f,m="class"===r?`var d=document.documentElement,c=d.classList;c.remove(${l.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${r}',s='setAttribute';`,p=s?(o.includes(f)?f:null)?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${f}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",h=(e,t=!1,n=!0)=>{let a=c?c[e]:e,i=t?e+"|| ''":`'${a}'`,f="";return s&&n&&!t&&o.includes(e)&&(f+=`d.style.colorScheme = '${e}';`),"class"===r?t||a?f+=`c.add(${i})`:f+="null":a&&(f+=`d[s](n,${i})`),f},b=e?`!function(){${m}${h(e)}}()`:i?`!function(){try{${m}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${d})){var t='${a}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${h(c?"x[e]":"e",!0)}}${d?"":"else{"+h(f,!1,!1)+"}"}${p}}catch(e){}}()`:`!function(){try{${m}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${h(c?"x[e]":"e",!0)}}else{${h(f,!1,!1)};}${p}}catch(t){}}();`;return n.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:b}})}),p=(e,t)=>{let r;if(!i){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},h=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},b=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(9090)}),_N_E=e.O()}]);