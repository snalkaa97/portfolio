(function(e){function t(t){for(var n,o,u=t[0],s=t[1],l=t[2],c=0,f=[];c<u.length;c++)o=u[c],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==a[u]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={app:0},a={app:0},i=[];function u(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"d5f6d9de"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={about:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"19d877ca"}[e]+".css",a=s.p+n,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var l=i[u],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===n||c===a))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){l=f[u],c=l.getAttribute("data-href");if(c===n||c===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[e],p.parentNode.removeChild(p),r(i)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=i);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=u(e);var f=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(p);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",f.name="ChunkLoadError",f.type=n,f.request=o,r[1](f)}a[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/REPO_NAME/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var p=c;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Profile")]),e._v(" | "),r("router-link",{attrs:{to:"/profile"}},[e._v("Portfolio")]),e._v(" | "),r("router-link",{attrs:{to:"/experience"}},[e._v("Experience")]),e._v(" | "),r("router-link",{attrs:{to:"/contact"}},[e._v("Contact")]),e._v(" | "),r("router-link",{attrs:{to:"/skills"}},[e._v("Skills")])],1),r("router-view")],1)},a=[],i=(r("034f"),r("2877")),u={},s=Object(i["a"])(u,o,a,!1,null,null,null),l=s.exports,c=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"contact"})},p=[],d={name:"contact"},v=d,m=Object(i["a"])(v,f,p,!1,null,null,null),h=m.exports;n["a"].use(c["a"]);var g=[{path:"/",name:"Home",component:function(){return r.e("about").then(r.bind(null,"c66d"))}},{path:"/contact",name:"Contact",component:h},{path:"/profile",name:"Profile"}],b=new c["a"]({routes:g}),y=b,w=(r("b0c0"),r("2f62")),_=r("bfa9");window.session_key="aloalka";var k=new _["a"]({key:window.session_key,storage:window.sessionStorage});n["a"].use(w["a"]);var O=new w["a"].Store({state:{profile:{name:"Syaifudin Alkatiri",image:"../assets/profile_pic.png",bio:"Currently working at Ministry Of State-Owned Enterprises (Kementerian Badan Usaha Milik Negara) as Web Programmer. Started my career since 2020 after graduated as Bachelor Degree at Universitas Muhammadiyah Jakarta. Before joining SOE, I also have been same career as Web Developer."}},mutations:{changeProfile:function(e,t,r){var n=e.profile.indexOf(t);e.profile[n].name=r}},getters:{},plugins:[k.plugin]});n["a"].config.productionTip=!1,new n["a"]({router:y,store:O,render:function(e){return e(l)}}).$mount("#app")},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.ac6c8661.js.map