(function(e){function t(t){for(var r,a,c=t[0],i=t[1],s=t[2],f=0,d=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(d.length)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-4d264456":"efbf7290","chunk-4adcff7b":"0bf182a6","chunk-3caffaa8":"e7b3e45a","chunk-7caab202":"32670da4","chunk-7e1909d2":"e5f90d55"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-4d264456":1,"chunk-4adcff7b":1,"chunk-3caffaa8":1,"chunk-7caab202":1,"chunk-7e1909d2":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-4d264456":"f1e259b4","chunk-4adcff7b":"21de3945","chunk-3caffaa8":"99c95e4b","chunk-7caab202":"03bbe90e","chunk-7e1909d2":"df93dabb"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],f=s.getAttribute("data-href");if(f===r||f===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],l.parentNode.removeChild(l),n(u)},l.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(l)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=c(e);var d=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var l=f;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1f27":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("2b0e"),a=new r["a"]},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"app"}},[n("v-main",[n("transition",{attrs:{name:"slide",mode:"out-in"}},[n("router-view")],1)],1)],1)},o=[],u={name:"App",data:function(){return{username:"",authenticated:!1}},created:function(){var e=sessionStorage.getItem("isAuthenticated"),t=sessionStorage.getItem("username"),n=sessionStorage.getItem("userId");e&&t&&n&&(this.$store.commit("isAuthenticated",{isAuth:e,username:t,userId:n}),this.$router.push("/chat").catch((function(){})))}},c=u,i=(n("5c0b"),n("2877")),s=n("6544"),f=n.n(s),d=n("7496"),l=n("f6c4"),h=Object(i["a"])(c,a,o,!1,null,null,null),m=h.exports;f()(h,{VApp:d["a"],VMain:l["a"]});n("d3b7");var p=n("8c4f"),b=n("2f62"),g=(n("ac1f"),n("5319"),n("1f27")),v={isAuth:!1,username:"",userId:""},y={isAuth:function(e){return e.isAuth},username:function(e){return e.username},userId:function(e){return e.userId}},k={isAuthenticated:function(e,t){e.username=t.username,e.isAuth=t.isAuth,e.userId=t.userId},signout:function(e){e.isAuth=!1,e.username="",g["a"].$emit("end-call"),sessionStorage.removeItem("isAuthenticated"),sessionStorage.removeItem("username"),sessionStorage.removeItem("userId"),_.replace("/")}},w={state:v,getters:y,mutations:k},A={roomKey:0},S={roomKey:function(e){return e.roomKey}},I={incrementRoomKey:function(e){e.roomKey++,console.log(e.roomKey)}},O={state:A,getters:S,mutations:I};r["a"].use(b["a"]);var P=new b["a"].Store({state:{},getters:{},mutations:{},actions:{},modules:{auth:w,room:O}});r["a"].use(p["a"]);var j=[{name:"Home",path:"/",component:function(){return Promise.all([n.e("chunk-4d264456"),n.e("chunk-4adcff7b"),n.e("chunk-3caffaa8")]).then(n.bind(null,"bb51"))}},{name:"Chat",path:"/chat",component:function(){return Promise.all([n.e("chunk-4d264456"),n.e("chunk-4adcff7b"),n.e("chunk-7caab202")]).then(n.bind(null,"293a"))},beforeEnter:function(e,t,n){P.getters.isAuth?n():n("/")}},{name:"NotFound",path:"*",component:function(){return Promise.all([n.e("chunk-4d264456"),n.e("chunk-7e1909d2")]).then(n.bind(null,"be4d"))}}],E=new p["a"]({routes:j}),_=E,x=(n("5363"),n("f309"));r["a"].use(x["a"]);var C=new x["a"]({icons:{iconfont:"mdi"}});r["a"].config.productionTip=!1,new r["a"]({vuetify:C,router:_,store:P,render:function(e){return e(m)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.98a7b7eb.js.map