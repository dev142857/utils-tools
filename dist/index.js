!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):t["@xbb/xbb-utils"]=r()}(this,function(){"use strict";var r=Object.prototype.toString;function i(t){return void 0!==t&&t instanceof Array}function o(t){return null!==t&&"object"==typeof t}function u(t){return"[object Object]"===r.call(t)}function a(t){return void 0===t}function c(t){return null===t}var e,t,n=Object.freeze({isArray:i,isObject:o,isPlainObject:u,isNum:function(t){return"number"==typeof t},isFunc:function(t){return"function"==typeof t},isUndefined:a,isNull:c});(t=e||(e={})).wx="wxwork",t.h5="Html5Plus",t.lark="Lark",t.dd="DingTalk";var f=Object.prototype.hasOwnProperty;function s(t){return-1<t.indexOf("wework.qpic.cn")?t.slice(0,-1)+"100":/rescdn.qqmail.com|wx.qlogo.cn/.test(t)?t:""}function l(t){var r=window.navigator.userAgent;return t.find(function(t){return-1<r.indexOf(e[t])})}var v=Object.freeze({json:function(t,r){try{return JSON.parse(t)}catch(t){return r||[]}},isDingTalk:function(){return/DingTalk/i.test(window.navigator.userAgent)},isDevEnv:function(){var t=window.location.hostname,r="localhost"===t,e=/^\d+\.\d+\.\d+\.\d+$/.test(t);return"development"===process.env.NODE_ENV||r||e},getByteLen:function(t){if(null==t)return 0;for(var r=0,e=0,n=t;e<n.length;e++)null!==n[e].match(/[^\\x00-\\xff]/gi)?r+=1:r+=.5;return Math.floor(r)},deepClone:function t(r,e){if(!r||"object"!=typeof r)return r;var n=r.constructor===Array?[]:{};for(var o in r)f.call(r,o)&&(r[o]&&"object"==typeof r[o]?n[o]=t(r[o]):n[o]=null===e&&void 0===r[o]?e:r[o]);return n},getParamValues:function(r,t){return t.map(function(t){return t[r]})},reverseNum:function(t){var r=Number(t);return isNaN(r)?void 0:Math.abs(r-1)},getObjectType:function(t){return Object.prototype.toString.call(t).slice(8,-1)},noRepeatArray:function(t,r){var e=[],n={};return t.forEach(function(t){n[t[r]]||(e.push(t),n[t[r]]=!0)}),e},isOuterLinkEnv:function(){return 0<=window.location.href.indexOf("/outer-form.html#/")},browser:function(){var t=navigator.userAgent,r=!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),e=-1<t.indexOf("Android")||-1<t.indexOf("Linux"),n=/DingTalk/i.test(t);return r?"ios":e?"Android":n?"pc":""},isWxImg:s,thumbnail:function(t,r,e){var n=i(t)&&t[0]?t[0]:t;if(!n||"string"!=typeof n)return"";var o=s(n);if(o)return o;n=n.replace(/\?\d+$/,"");var u=window.localStorage.getItem("privateDeployInfo")||'{"oss":1,"sms":1}',a=JSON.parse(u);switch(e||a.oss){case 2:case 4:return n;case 1:case 3:default:return r&&[40,50,80,100,150,200,250].includes(r)||(r=100),n+"_"+r+"x"+r+".jpg"}},envInfo:l,isThirdPC:function(t,r){var e,n=window.navigator.userAgent,o=-1<n.indexOf("wxwork")?"WindowsWechat":"Windows",u=new RegExp(o+"|Macintosh"),a=window.localStorage.getItem("env")||"";return u.test(n)&&(e=l(t)),r&&-1<t.indexOf(a)&&(e=a),e}});var p=Object.freeze({verifyHttp:function(t){return/^http[s]?:\/\/.*/.test(t.trim())},verifyMobile:function(t){return/^1[3456789]\d{9}$/.test(t.trim())},verifyCode:function(t){return/^\d{6}$/.test(t)},verifyEmail:function(t){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t.trim())}});function h(t){var r="";return(r="number"==typeof t?t.toString():t)[1]?r:"0"+r}function d(t,r){return void 0===r&&(r=0),Math.floor(Math.random()*(t-r)+r)}var g=Object.freeze({formatAddZero:h,dstMobile:function(t){return t.replace(/(\d{3})\d{4}(\d{0,4})/,"$1****$2")},random:d,creatMobile:function(t){void 0===t&&(t=!1);var r="1",e=[3,5,6,7,8,9],n=t?"****":""+d(9)+d(9)+d(9)+d(9);return r=r+e[d(e.length)]+d(9)+n+d(9)+d(9)+d(9)+d(9)},formatPhone:function(t){return 11!==t.length?"":t.substring(0,3)+" "+t.substring(3,7)+" "+t.substring(7)},parseParams:function(t){if(!t||-1===t.indexOf("&"))return{};for(var r=t.split("&"),e={},n=0;n<r.length;){if(-1!==r[n].indexOf("=")){var o=r[n].split("=");e[o[0]]=o[1]}n++}return e},formatParams:function(t){if(!u(t))return"";for(var r="",e=Object.keys(t),n=0;n<e.length;n++)c(t[e[n]])||a(t[e[n]])||(o(t[e[n]])?r+="&"+e[n]+"="+JSON.stringify(t[e[n]]):r+="&"+e[n]+"="+t[e[n]]);return r.length?"?"+r.substr(1):r}}),b=/d{1,4}|M{1,4}|yy(?:yy)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,y={D:function(t){return t.getDay()},DD:function(t){return h(t.getDay())},d:function(t){return t.getDate()},dd:function(t){return h(t.getDate())},M:function(t){return t.getMonth()+1},MM:function(t){return h(t.getMonth()+1)},yy:function(t){return String(t.getFullYear()).substr(2)},yyyy:function(t){return t.getFullYear()},h:function(t){return t.getHours()%12||12},hh:function(t){return h(t.getHours()%12||12)},H:function(t){return t.getHours()},HH:function(t){return h(t.getHours())},m:function(t){return t.getMinutes()},mm:function(t){return h(t.getMinutes())},s:function(t){return t.getSeconds()},ss:function(t){return h(t.getSeconds())},a:function(t){return t.getHours()<12?"am":"pm"},A:function(t){return t.getHours()<12?"AM":"PM"}};function j(t){return new Date(t.valueOf())}function m(t){return new Date(t.getTime()+288e5)}function _(t){var r=t;return r?"object"==typeof r?r.length?new Date:j(r):"number"==typeof r?(10===r.toString().length&&(r*=1e3),13===r.toString().length?new Date(r):new Date):"NaN"!==(r=new Date(r)).getTime().toString()&&r.getYear()<9999?r:new Date:new Date}function w(t,r){return t=m(_(t)),"datetime"===r?t.toISOString().substring(0,16).replace("T"," "):"seconds"===r?t.toISOString().substring(0,19).replace("T"," ").substring(11,19):t.toISOString().slice(0,10)}function O(t){if(/^-?[0-9]+$/.test(String(t))){var r=new Date(13===String(t).length?Number(t):1e3*Number(t));return{year:r.getFullYear(),month:r.getMonth()+1<10?"0"+(r.getMonth()+1):r.getMonth()+1,day:r.getDate()<10?"0"+r.getDate():r.getDate(),hours:r.getHours()<10?"0"+r.getHours():r.getHours(),minutes:r.getMinutes()<10?"0"+r.getMinutes():r.getMinutes()}}return t}var x=Object.freeze({formatTime:function(t,r){void 0===r&&(r="yyyy-MM-dd HH:mm:ss"),10===t.toString().length&&(t*=1e3);var e=new Date(t);return r.replace(b,function(t){return t in y?y[t](e):t.slice(1,t.length-1)})},formatHourTime:function(t,r){10===t.toString().length&&(t*=1e3);var e=new Date(t),n=e.getFullYear(),o=e.getMonth()+1,u=e.getDate();if(r){var a=e.getHours(),i=e.getMinutes(),c=e.getSeconds();return[n,o,u].map(h).join("-")+" "+[a,i,c].map(h).join(":")}return[n,o,u].map(h).join("-")},now:function(t){var r;if(void 0===t&&(t=!1),t)r=(new Date).getTime();else{var e=(new Date).getTime().toString().substr(0,10);r=parseInt(e,0)}return r},cloneDate:j,timeZone:m,formatEffectiveDate:_,formatDate:w,formatTimeCompare:function(t){if(t=Number(t)){var r=parseInt(""+(new Date).getTime()/1e3,0)-t,e=parseInt(""+new Date((new Date).setHours(0,0,0,0)).getTime()/1e3,0);return 0===parseInt(""+r/60,0)?"刚刚":0<r&&parseInt(""+r/60,0)<60?parseInt(""+r/60,0)+"分钟前":0<r&&parseInt(""+r/3600,0)<5?parseInt(""+r/3600,0)+"小时前":e<t?"今日"+w(t,"datetime").slice(11):w(t,"datetime")}},getDay:function(t,r,e){var n=_(r);return n.setDate(n.getDate()+t),"datetime"===e?w(n,"datetime"):w(n)},getMonthDay:function(t,r,e){var n=_(r),o=n.getDate(),u=n.getMonth();return 11<(u+=t)?(n.setFullYear(n.getFullYear()+1),n.setMonth(u-12)):u<0?(n.setFullYear(n.getFullYear()-1),n.setMonth(u+12)):n.setMonth(u),n.getDate()!==o&&(n=new Date(n.getFullYear(),n.getMonth(),0)),"datetime"===e?w(n,"datetime"):w(n)},getYearDay:function(t,r,e){var n=_(r);return n.setFullYear(n.getFullYear()+t),"datetime"===e?w(n,"datetime"):w(n)},timestampToTime:O,timestampToTimeString:function(t,r){var e=O(t),n={yyyy:"year",MM:"month",dd:"day",HH:"hours",mm:"minutes"};return r=r.replace(/(yyyy)|(MM)|(dd)|(HH)|(mm)/g,function(t){return e[n[t]]})},timeToTimestamp:function(t){return isNaN(Date.parse(t))?t:Date.parse(t)/1e3},formatSecond:function(t){var r=Math.floor(t),e=0,n=0,o=0;return 60<r?(n=Math.floor(r/60),o=Math.floor(r%60),60<=n?(e=Math.floor(n/60),n=Math.floor(n%60)):e=0):(n=e=0,o=60===r?(n=1,0):r),h(e)+":"+h(n)+":"+h(o)}}),M=Array.isArray,S="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function A(t,r){return t(r={exports:{}},r.exports),r.exports}var D="object"==typeof S&&S&&S.Object===Object&&S,T="object"==typeof self&&self&&self.Object===Object&&self,N=D||T||Function("return this")(),z=N.Symbol,E=Object.prototype,I=E.hasOwnProperty,P=E.toString,F=z?z.toStringTag:void 0;var k=function(t){var r=I.call(t,F),e=t[F];try{t[F]=void 0}catch(t){}var n=P.call(t);return r?t[F]=e:delete t[F],n},H=Object.prototype.toString;var $=function(t){return H.call(t)},U=z?z.toStringTag:void 0;var C=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":U&&U in Object(t)?k(t):$(t)};var B=function(t){return null!=t&&"object"==typeof t};var R=function(t){return"symbol"==typeof t||B(t)&&"[object Symbol]"==C(t)},W=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Y=/^\w*$/;var L=function(t,r){if(M(t))return!1;var e=typeof t;return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!R(t))||Y.test(t)||!W.test(t)||null!=r&&t in Object(r)};var q=function(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)};var V,Z=function(t){if(!q(t))return!1;var r=C(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},J=N["__core-js_shared__"],G=(V=/[^.]+$/.exec(J&&J.keys&&J.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"";var X=function(t){return!!G&&G in t},K=Function.prototype.toString;var Q=function(t){if(null!=t){try{return K.call(t)}catch(t){}try{return t+""}catch(t){}}return""},tt=/^\[object .+?Constructor\]$/,rt=Function.prototype,et=Object.prototype,nt=rt.toString,ot=et.hasOwnProperty,ut=RegExp("^"+nt.call(ot).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var at=function(t){return!(!q(t)||X(t))&&(Z(t)?ut:tt).test(Q(t))};var it=function(t,r){return null==t?void 0:t[r]};var ct=function(t,r){var e=it(t,r);return at(e)?e:void 0},ft=ct(Object,"create");var st=function(){this.__data__=ft?ft(null):{},this.size=0};var lt=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r},vt=Object.prototype.hasOwnProperty;var pt=function(t){var r=this.__data__;if(ft){var e=r[t];return"__lodash_hash_undefined__"===e?void 0:e}return vt.call(r,t)?r[t]:void 0},ht=Object.prototype.hasOwnProperty;var dt=function(t){var r=this.__data__;return ft?void 0!==r[t]:ht.call(r,t)};var gt=function(t,r){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=ft&&void 0===r?"__lodash_hash_undefined__":r,this};function bt(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}bt.prototype.clear=st,bt.prototype.delete=lt,bt.prototype.get=pt,bt.prototype.has=dt,bt.prototype.set=gt;var yt=bt;var jt=function(){this.__data__=[],this.size=0};var mt=function(t,r){return t===r||t!=t&&r!=r};var _t=function(t,r){for(var e=t.length;e--;)if(mt(t[e][0],r))return e;return-1},wt=Array.prototype.splice;var Ot=function(t){var r=this.__data__,e=_t(r,t);return!(e<0||(e==r.length-1?r.pop():wt.call(r,e,1),--this.size,0))};var xt=function(t){var r=this.__data__,e=_t(r,t);return e<0?void 0:r[e][1]};var Mt=function(t){return-1<_t(this.__data__,t)};var St=function(t,r){var e=this.__data__,n=_t(e,t);return n<0?(++this.size,e.push([t,r])):e[n][1]=r,this};function At(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}At.prototype.clear=jt,At.prototype.delete=Ot,At.prototype.get=xt,At.prototype.has=Mt,At.prototype.set=St;var Dt=At,Tt=ct(N,"Map");var Nt=function(t){var r=typeof t;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t};var zt=function(t,r){var e=t.__data__;return Nt(r)?e["string"==typeof r?"string":"hash"]:e.map};var Et=function(t){var r=zt(this,t).delete(t);return this.size-=r?1:0,r};var It=function(t){return zt(this,t).get(t)};var Pt=function(t){return zt(this,t).has(t)};var Ft=function(t,r){var e=zt(this,t),n=e.size;return e.set(t,r),this.size+=e.size==n?0:1,this};function kt(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}kt.prototype.clear=function(){this.size=0,this.__data__={hash:new yt,map:new(Tt||Dt),string:new yt}},kt.prototype.delete=Et,kt.prototype.get=It,kt.prototype.has=Pt,kt.prototype.set=Ft;var Ht=kt,$t="Expected a function";function Ut(o,u){if("function"!=typeof o||null!=u&&"function"!=typeof u)throw new TypeError($t);var a=function(){var t=arguments,r=u?u.apply(this,t):t[0],e=a.cache;if(e.has(r))return e.get(r);var n=o.apply(this,t);return a.cache=e.set(r,n)||e,n};return a.cache=new(Ut.Cache||Ht),a}Ut.Cache=Ht;var Ct=Ut;var Bt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Rt=/\\(\\)?/g,Wt=function(t){var r=Ct(t,function(t){return 500===e.size&&e.clear(),t}),e=r.cache;return r}(function(t){var o=[];return 46===t.charCodeAt(0)&&o.push(""),t.replace(Bt,function(t,r,e,n){o.push(e?n.replace(Rt,"$1"):r||t)}),o});var Yt=function(t,r){for(var e=-1,n=null==t?0:t.length,o=Array(n);++e<n;)o[e]=r(t[e],e,t);return o},Lt=1/0,qt=z?z.prototype:void 0,Vt=qt?qt.toString:void 0;var Zt=function t(r){if("string"==typeof r)return r;if(M(r))return Yt(r,t)+"";if(R(r))return Vt?Vt.call(r):"";var e=r+"";return"0"==e&&1/r==-Lt?"-0":e};var Jt=function(t){return null==t?"":Zt(t)};var Gt=function(t,r){return M(t)?t:L(t,r)?[t]:Wt(Jt(t))};var Xt=function(t){if("string"==typeof t||R(t))return t;var r=t+"";return"0"==r&&1/t==-1/0?"-0":r};var Kt=function(t,r){for(var e=0,n=(r=Gt(r,t)).length;null!=t&&e<n;)t=t[Xt(r[e++])];return e&&e==n?t:void 0};var Qt=function(t,r,e){var n=null==t?void 0:Kt(t,r);return void 0===n?e:n};var tr=function(t){var r=this.__data__,e=r.delete(t);return this.size=r.size,e};var rr=function(t){return this.__data__.get(t)};var er=function(t){return this.__data__.has(t)};var nr=function(t,r){var e=this.__data__;if(e instanceof Dt){var n=e.__data__;if(!Tt||n.length<199)return n.push([t,r]),this.size=++e.size,this;e=this.__data__=new Ht(n)}return e.set(t,r),this.size=e.size,this};function or(t){var r=this.__data__=new Dt(t);this.size=r.size}or.prototype.clear=function(){this.__data__=new Dt,this.size=0},or.prototype.delete=tr,or.prototype.get=rr,or.prototype.has=er,or.prototype.set=nr;var ur=or;var ar=function(t){return this.__data__.has(t)};function ir(t){var r=-1,e=null==t?0:t.length;for(this.__data__=new Ht;++r<e;)this.add(t[r])}ir.prototype.add=ir.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},ir.prototype.has=ar;var cr=ir;var fr=function(t,r){for(var e=-1,n=null==t?0:t.length;++e<n;)if(r(t[e],e,t))return!0;return!1};var sr=function(t,r){return t.has(r)};var lr=function(t,r,e,n,o,u){var a=1&e,i=t.length,c=r.length;if(i!=c&&!(a&&i<c))return!1;var f=u.get(t),s=u.get(r);if(f&&s)return f==r&&s==t;var l=-1,v=!0,p=2&e?new cr:void 0;for(u.set(t,r),u.set(r,t);++l<i;){var h=t[l],d=r[l];if(n)var g=a?n(d,h,l,r,t,u):n(h,d,l,t,r,u);if(void 0!==g){if(g)continue;v=!1;break}if(p){if(!fr(r,function(t,r){if(!sr(p,r)&&(h===t||o(h,t,e,n,u)))return p.push(r)})){v=!1;break}}else if(h!==d&&!o(h,d,e,n,u)){v=!1;break}}return u.delete(t),u.delete(r),v},vr=N.Uint8Array;var pr=function(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}),n};var hr=function(t){var r=-1,e=Array(t.size);return t.forEach(function(t){e[++r]=t}),e},dr=z?z.prototype:void 0,gr=dr?dr.valueOf:void 0;var br=function(t,r,e,n,o,u,a){switch(e){case"[object DataView]":if(t.byteLength!=r.byteLength||t.byteOffset!=r.byteOffset)return!1;t=t.buffer,r=r.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=r.byteLength||!u(new vr(t),new vr(r)));case"[object Boolean]":case"[object Date]":case"[object Number]":return mt(+t,+r);case"[object Error]":return t.name==r.name&&t.message==r.message;case"[object RegExp]":case"[object String]":return t==r+"";case"[object Map]":var i=pr;case"[object Set]":var c=1&n;if(i||(i=hr),t.size!=r.size&&!c)return!1;var f=a.get(t);if(f)return f==r;n|=2,a.set(t,r);var s=lr(i(t),i(r),n,o,u,a);return a.delete(t),s;case"[object Symbol]":if(gr)return gr.call(t)==gr.call(r)}return!1};var yr=function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t};var jr=function(t,r,e){var n=r(t);return M(t)?n:yr(n,e(t))};var mr=function(t,r){for(var e=-1,n=null==t?0:t.length,o=0,u=[];++e<n;){var a=t[e];r(a,e,t)&&(u[o++]=a)}return u};var _r=function(){return[]},wr=Object.prototype.propertyIsEnumerable,Or=Object.getOwnPropertySymbols,xr=Or?function(r){return null==r?[]:(r=Object(r),mr(Or(r),function(t){return wr.call(r,t)}))}:_r;var Mr=function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n};var Sr=function(t){return B(t)&&"[object Arguments]"==C(t)},Ar=Object.prototype,Dr=Ar.hasOwnProperty,Tr=Ar.propertyIsEnumerable,Nr=Sr(function(){return arguments}())?Sr:function(t){return B(t)&&Dr.call(t,"callee")&&!Tr.call(t,"callee")};var zr=function(){return!1},Er=A(function(t,r){var e=r&&!r.nodeType&&r,n=e&&t&&!t.nodeType&&t,o=n&&n.exports===e?N.Buffer:void 0,u=(o?o.isBuffer:void 0)||zr;t.exports=u}),Ir=/^(?:0|[1-9]\d*)$/;var Pr=function(t,r){var e=typeof t;return!!(r=null==r?9007199254740991:r)&&("number"==e||"symbol"!=e&&Ir.test(t))&&-1<t&&t%1==0&&t<r};var Fr=function(t){return"number"==typeof t&&-1<t&&t%1==0&&t<=9007199254740991},kr={};kr["[object Float32Array]"]=kr["[object Float64Array]"]=kr["[object Int8Array]"]=kr["[object Int16Array]"]=kr["[object Int32Array]"]=kr["[object Uint8Array]"]=kr["[object Uint8ClampedArray]"]=kr["[object Uint16Array]"]=kr["[object Uint32Array]"]=!0,kr["[object Arguments]"]=kr["[object Array]"]=kr["[object ArrayBuffer]"]=kr["[object Boolean]"]=kr["[object DataView]"]=kr["[object Date]"]=kr["[object Error]"]=kr["[object Function]"]=kr["[object Map]"]=kr["[object Number]"]=kr["[object Object]"]=kr["[object RegExp]"]=kr["[object Set]"]=kr["[object String]"]=kr["[object WeakMap]"]=!1;var Hr=function(t){return B(t)&&Fr(t.length)&&!!kr[C(t)]};var $r=function(r){return function(t){return r(t)}},Ur=A(function(t,r){var e=r&&!r.nodeType&&r,n=e&&t&&!t.nodeType&&t,o=n&&n.exports===e&&D.process,u=function(){try{var t=n&&n.require&&n.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=u}),Cr=Ur&&Ur.isTypedArray,Br=Cr?$r(Cr):Hr,Rr=Object.prototype.hasOwnProperty;var Wr=function(t,r){var e=M(t),n=!e&&Nr(t),o=!e&&!n&&Er(t),u=!e&&!n&&!o&&Br(t),a=e||n||o||u,i=a?Mr(t.length,String):[],c=i.length;for(var f in t)!r&&!Rr.call(t,f)||a&&("length"==f||o&&("offset"==f||"parent"==f)||u&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||Pr(f,c))||i.push(f);return i},Yr=Object.prototype;var Lr=function(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||Yr)};var qr=function(r,e){return function(t){return r(e(t))}},Vr=qr(Object.keys,Object),Zr=Object.prototype.hasOwnProperty;var Jr=function(t){if(!Lr(t))return Vr(t);var r=[];for(var e in Object(t))Zr.call(t,e)&&"constructor"!=e&&r.push(e);return r};var Gr=function(t){return null!=t&&Fr(t.length)&&!Z(t)};var Xr=function(t){return Gr(t)?Wr(t):Jr(t)};var Kr=function(t){return jr(t,Xr,xr)},Qr=Object.prototype.hasOwnProperty;var te=function(t,r,e,n,o,u){var a=1&e,i=Kr(t),c=i.length;if(c!=Kr(r).length&&!a)return!1;for(var f=c;f--;){var s=i[f];if(!(a?s in r:Qr.call(r,s)))return!1}var l=u.get(t),v=u.get(r);if(l&&v)return l==r&&v==t;var p=!0;u.set(t,r),u.set(r,t);for(var h=a;++f<c;){var d=t[s=i[f]],g=r[s];if(n)var b=a?n(g,d,s,r,t,u):n(d,g,s,t,r,u);if(!(void 0===b?d===g||o(d,g,e,n,u):b)){p=!1;break}h||(h="constructor"==s)}if(p&&!h){var y=t.constructor,j=r.constructor;y!=j&&"constructor"in t&&"constructor"in r&&!("function"==typeof y&&y instanceof y&&"function"==typeof j&&j instanceof j)&&(p=!1)}return u.delete(t),u.delete(r),p},re=ct(N,"DataView"),ee=ct(N,"Promise"),ne=ct(N,"Set"),oe=ct(N,"WeakMap"),ue="[object Map]",ae="[object Promise]",ie="[object Set]",ce="[object WeakMap]",fe="[object DataView]",se=Q(re),le=Q(Tt),ve=Q(ee),pe=Q(ne),he=Q(oe),de=C;(re&&de(new re(new ArrayBuffer(1)))!=fe||Tt&&de(new Tt)!=ue||ee&&de(ee.resolve())!=ae||ne&&de(new ne)!=ie||oe&&de(new oe)!=ce)&&(de=function(t){var r=C(t),e="[object Object]"==r?t.constructor:void 0,n=e?Q(e):"";if(n)switch(n){case se:return fe;case le:return ue;case ve:return ae;case pe:return ie;case he:return ce}return r});var ge=de,be="[object Arguments]",ye="[object Array]",je="[object Object]",me=Object.prototype.hasOwnProperty;var _e=function(t,r,e,n,o,u){var a=M(t),i=M(r),c=a?ye:ge(t),f=i?ye:ge(r),s=(c=c==be?je:c)==je,l=(f=f==be?je:f)==je,v=c==f;if(v&&Er(t)){if(!Er(r))return!1;s=!(a=!0)}if(v&&!s)return u||(u=new ur),a||Br(t)?lr(t,r,e,n,o,u):br(t,r,c,e,n,o,u);if(!(1&e)){var p=s&&me.call(t,"__wrapped__"),h=l&&me.call(r,"__wrapped__");if(p||h){var d=p?t.value():t,g=h?r.value():r;return u||(u=new ur),o(d,g,e,n,u)}}return!!v&&(u||(u=new ur),te(t,r,e,n,o,u))};var we=function t(r,e,n,o,u){return r===e||(null==r||null==e||!B(r)&&!B(e)?r!=r&&e!=e:_e(r,e,n,o,t,u))};var Oe=function(t,r,e,n){var o=e.length,u=o,a=!n;if(null==t)return!u;for(t=Object(t);o--;){var i=e[o];if(a&&i[2]?i[1]!==t[i[0]]:!(i[0]in t))return!1}for(;++o<u;){var c=(i=e[o])[0],f=t[c],s=i[1];if(a&&i[2]){if(void 0===f&&!(c in t))return!1}else{var l=new ur;if(n)var v=n(f,s,c,t,r,l);if(!(void 0===v?we(s,f,3,n,l):v))return!1}}return!0};var xe=function(t){return t==t&&!q(t)};var Me=function(t){for(var r=Xr(t),e=r.length;e--;){var n=r[e],o=t[n];r[e]=[n,o,xe(o)]}return r};var Se=function(r,e){return function(t){return null!=t&&t[r]===e&&(void 0!==e||r in Object(t))}};var Ae=function(r){var e=Me(r);return 1==e.length&&e[0][2]?Se(e[0][0],e[0][1]):function(t){return t===r||Oe(t,r,e)}};var De=function(t,r){return null!=t&&r in Object(t)};var Te=function(t,r,e){for(var n=-1,o=(r=Gt(r,t)).length,u=!1;++n<o;){var a=Xt(r[n]);if(!(u=null!=t&&e(t,a)))break;t=t[a]}return u||++n!=o?u:!!(o=null==t?0:t.length)&&Fr(o)&&Pr(a,o)&&(M(t)||Nr(t))};var Ne=function(t,r){return null!=t&&Te(t,r,De)};var ze=function(e,n){return L(e)&&xe(n)?Se(Xt(e),n):function(t){var r=Qt(t,e);return void 0===r&&r===n?Ne(t,e):we(n,r,3)}};var Ee=function(t){return t};var Ie=function(r){return function(t){return null==t?void 0:t[r]}};var Pe=function(r){return function(t){return Kt(t,r)}};var Fe=function(t){return L(t)?Ie(Xt(t)):Pe(t)};var ke=function(t){return"function"==typeof t?t:null==t?Ee:"object"==typeof t?M(t)?ze(t[0],t[1]):Ae(t):Fe(t)};var He=function(c){return function(t,r,e){for(var n=-1,o=Object(t),u=e(t),a=u.length;a--;){var i=u[c?a:++n];if(!1===r(o[i],i,o))break}return t}}();var $e=function(u,a){return function(t,r){if(null==t)return t;if(!Gr(t))return u(t,r);for(var e=t.length,n=a?e:-1,o=Object(t);(a?n--:++n<e)&&!1!==r(o[n],n,o););return t}}(function(t,r){return t&&He(t,r,Xr)});var Ue=function(t,n){var o=-1,u=Gr(t)?Array(t.length):[];return $e(t,function(t,r,e){u[++o]=n(t,r,e)}),u};var Ce=function(t,r){return(M(t)?Yt:Ue)(t,ke(r,3))};var Be=function(t,r,e,n){for(var o=t.length,u=e+(n?1:-1);n?u--:++u<o;)if(r(t[u],u,t))return u;return-1};var Re=function(t){return t!=t};var We=function(t,r,e){for(var n=e-1,o=t.length;++n<o;)if(t[n]===r)return n;return-1};var Ye=function(t,r,e){return r==r?We(t,r,e):Be(t,Re,e)};var Le=function(t,r){return!(null==t||!t.length)&&-1<Ye(t,r,0)};var qe=function(t,r,e){for(var n=-1,o=null==t?0:t.length;++n<o;)if(e(r,t[n]))return!0;return!1};var Ve=function(){},Ze=ne&&1/hr(new ne([,-0]))[1]==1/0?function(t){return new ne(t)}:Ve;var Je=function(t,r,e){var n=-1,o=Le,u=t.length,a=!0,i=[],c=i;if(e)a=!1,o=qe;else if(200<=u){var f=r?null:Ze(t);if(f)return hr(f);a=!1,o=sr,c=new cr}else c=r?[]:i;t:for(;++n<u;){var s=t[n],l=r?r(s):s;if(s=e||0!==s?s:0,a&&l==l){for(var v=c.length;v--;)if(c[v]===l)continue t;r&&c.push(l),i.push(s)}else o(c,l,e)||(c!==i&&c.push(l),i.push(s))}return i};var Ge=function(t){return t&&t.length?Je(t):[]},Xe=function(){try{var t=ct(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();var Ke=function(t,r,e){"__proto__"==r&&Xe?Xe(t,r,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[r]=e},Qe=Object.prototype.hasOwnProperty;var tn=function(t,r,e){var n=t[r];Qe.call(t,r)&&mt(n,e)&&(void 0!==e||r in t)||Ke(t,r,e)};var rn=function(t,r,e,n){if(!q(t))return t;for(var o=-1,u=(r=Gt(r,t)).length,a=u-1,i=t;null!=i&&++o<u;){var c=Xt(r[o]),f=e;if("__proto__"===c||"constructor"===c||"prototype"===c)return t;if(o!=a){var s=i[c];void 0===(f=n?n(s,c,i):void 0)&&(f=q(s)?s:Pr(r[o+1])?[]:{})}tn(i,c,f),i=i[c]}return t};var en=function(t,r,e){for(var n=-1,o=r.length,u={};++n<o;){var a=r[n],i=Kt(t,a);e(i,a)&&rn(u,Gt(a,t),i)}return u};var nn=function(e,t){return en(e,t,function(t,r){return Ne(e,r)})},on=z?z.isConcatSpreadable:void 0;var un=function(t){return M(t)||Nr(t)||!!(on&&t&&t[on])};var an=function t(r,e,n,o,u){var a=-1,i=r.length;for(n||(n=un),u||(u=[]);++a<i;){var c=r[a];0<e&&n(c)?1<e?t(c,e-1,n,o,u):yr(u,c):o||(u[u.length]=c)}return u};var cn=function(t){return null!=t&&t.length?an(t,1):[]};var fn=function(t,r,e){switch(e.length){case 0:return t.call(r);case 1:return t.call(r,e[0]);case 2:return t.call(r,e[0],e[1]);case 3:return t.call(r,e[0],e[1],e[2])}return t.apply(r,e)},sn=Math.max;var ln=function(u,a,i){return a=sn(void 0===a?u.length-1:a,0),function(){for(var t=arguments,r=-1,e=sn(t.length-a,0),n=Array(e);++r<e;)n[r]=t[a+r];r=-1;for(var o=Array(a+1);++r<a;)o[r]=t[r];return o[a]=i(n),fn(u,this,o)}};var vn=function(t){return function(){return t}},pn=Xe?function(t,r){return Xe(t,"toString",{configurable:!0,enumerable:!1,value:vn(r),writable:!0})}:Ee,hn=Date.now;var dn=function(e){var n=0,o=0;return function(){var t=hn(),r=16-(t-o);if(o=t,0<r){if(800<=++n)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}(pn);var gn=function(t){return dn(ln(t,void 0,cn),t+"")},bn=gn(function(t,r){return null==t?{}:nn(t,r)});var yn=function(t,r){for(var e=-1,n=null==t?0:t.length;++e<n&&!1!==r(t[e],e,t););return t};var jn=function(t,r,e,n){var o=!e;e||(e={});for(var u=-1,a=r.length;++u<a;){var i=r[u],c=n?n(e[i],t[i],i,e,t):void 0;void 0===c&&(c=t[i]),o?Ke(e,i,c):tn(e,i,c)}return e};var mn=function(t,r){return t&&jn(r,Xr(r),t)};var _n=function(t){var r=[];if(null!=t)for(var e in Object(t))r.push(e);return r},wn=Object.prototype.hasOwnProperty;var On=function(t){if(!q(t))return _n(t);var r=Lr(t),e=[];for(var n in t)("constructor"!=n||!r&&wn.call(t,n))&&e.push(n);return e};var xn=function(t){return Gr(t)?Wr(t,!0):On(t)};var Mn=function(t,r){return t&&jn(r,xn(r),t)},Sn=A(function(t,r){var e=r&&!r.nodeType&&r,n=e&&t&&!t.nodeType&&t,o=n&&n.exports===e?N.Buffer:void 0,u=o?o.allocUnsafe:void 0;t.exports=function(t,r){if(r)return t.slice();var e=t.length,n=u?u(e):new t.constructor(e);return t.copy(n),n}});var An=function(t,r){var e=-1,n=t.length;for(r||(r=Array(n));++e<n;)r[e]=t[e];return r};var Dn=function(t,r){return jn(t,xr(t),r)},Tn=qr(Object.getPrototypeOf,Object),Nn=Object.getOwnPropertySymbols?function(t){for(var r=[];t;)yr(r,xr(t)),t=Tn(t);return r}:_r;var zn=function(t,r){return jn(t,Nn(t),r)};var En=function(t){return jr(t,xn,Nn)},In=Object.prototype.hasOwnProperty;var Pn=function(t){var r=t.length,e=new t.constructor(r);return r&&"string"==typeof t[0]&&In.call(t,"index")&&(e.index=t.index,e.input=t.input),e};var Fn=function(t){var r=new t.constructor(t.byteLength);return new vr(r).set(new vr(t)),r};var kn=function(t,r){var e=r?Fn(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)},Hn=/\w*$/;var $n=function(t){var r=new t.constructor(t.source,Hn.exec(t));return r.lastIndex=t.lastIndex,r},Un=z?z.prototype:void 0,Cn=Un?Un.valueOf:void 0;var Bn=function(t){return Cn?Object(Cn.call(t)):{}};var Rn=function(t,r){var e=r?Fn(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)};var Wn=function(t,r,e){var n=t.constructor;switch(r){case"[object ArrayBuffer]":return Fn(t);case"[object Boolean]":case"[object Date]":return new n(+t);case"[object DataView]":return kn(t,e);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Rn(t,e);case"[object Map]":return new n;case"[object Number]":case"[object String]":return new n(t);case"[object RegExp]":return $n(t);case"[object Set]":return new n;case"[object Symbol]":return Bn(t)}},Yn=Object.create,Ln=function(){function e(){}return function(t){if(!q(t))return{};if(Yn)return Yn(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();var qn=function(t){return"function"!=typeof t.constructor||Lr(t)?{}:Ln(Tn(t))};var Vn=function(t){return B(t)&&"[object Map]"==ge(t)},Zn=Ur&&Ur.isMap,Jn=Zn?$r(Zn):Vn;var Gn=function(t){return B(t)&&"[object Set]"==ge(t)},Xn=Ur&&Ur.isSet,Kn=Xn?$r(Xn):Gn,Qn=1,to=2,ro=4,eo="[object Arguments]",no="[object Function]",oo="[object GeneratorFunction]",uo="[object Object]",ao={};ao[eo]=ao["[object Array]"]=ao["[object ArrayBuffer]"]=ao["[object DataView]"]=ao["[object Boolean]"]=ao["[object Date]"]=ao["[object Float32Array]"]=ao["[object Float64Array]"]=ao["[object Int8Array]"]=ao["[object Int16Array]"]=ao["[object Int32Array]"]=ao["[object Map]"]=ao["[object Number]"]=ao[uo]=ao["[object RegExp]"]=ao["[object Set]"]=ao["[object String]"]=ao["[object Symbol]"]=ao["[object Uint8Array]"]=ao["[object Uint8ClampedArray]"]=ao["[object Uint16Array]"]=ao["[object Uint32Array]"]=!0,ao["[object Error]"]=ao[no]=ao["[object WeakMap]"]=!1;var io=function e(n,o,u,t,r,a){var i,c=o&Qn,f=o&to,s=o&ro;if(u&&(i=r?u(n,t,r,a):u(n)),void 0!==i)return i;if(!q(n))return n;var l=M(n);if(l){if(i=Pn(n),!c)return An(n,i)}else{var v=ge(n),p=v==no||v==oo;if(Er(n))return Sn(n,c);if(v==uo||v==eo||p&&!r){if(i=f||p?{}:qn(n),!c)return f?zn(n,Mn(i,n)):Dn(n,mn(i,n))}else{if(!ao[v])return r?n:{};i=Wn(n,v,c)}}a||(a=new ur);var h=a.get(n);if(h)return h;a.set(n,i),Kn(n)?n.forEach(function(t){i.add(e(t,o,u,t,n,a))}):Jn(n)&&n.forEach(function(t,r){i.set(r,e(t,o,u,r,n,a))});var d=l?void 0:(s?f?En:Kr:f?xn:Xr)(n);return yn(d||n,function(t,r){d&&(t=n[r=t]),tn(i,r,e(t,o,u,r,n,a))}),i};var co=function(t){var r=null==t?0:t.length;return r?t[r-1]:void 0};var fo=function(t,r,e){var n=-1,o=t.length;r<0&&(r=o<-r?0:o+r),(e=o<e?o:e)<0&&(e+=o),o=e<r?0:e-r>>>0,r>>>=0;for(var u=Array(o);++n<o;)u[n]=t[n+r];return u};var so=function(t,r){return r.length<2?t:Kt(t,fo(r,0,-1))};var lo=function(t,r){return r=Gt(r,t),null==(t=so(t,r))||delete t[Xt(co(r))]},vo=Function.prototype,po=Object.prototype,ho=vo.toString,go=po.hasOwnProperty,bo=ho.call(Object);var yo=function(t){if(!B(t)||"[object Object]"!=C(t))return!1;var r=Tn(t);if(null===r)return!0;var e=go.call(r,"constructor")&&r.constructor;return"function"==typeof e&&e instanceof e&&ho.call(e)==bo};var jo=function(t){return yo(t)?void 0:t},mo=gn(function(r,t){var e={};if(null==r)return e;var n=!1;t=Yt(t,function(t){return t=Gt(t,r),n||(n=1<t.length),t}),jn(r,En(r),e),n&&(e=io(e,7,jo));for(var o=t.length;o--;)lo(e,t[o]);return e});var _o=function(t){return"number"==typeof t||B(t)&&"[object Number]"==C(t)};var wo=function(t){return _o(t)&&t!=+t},Oo=/\s/;var xo=function(t){for(var r=t.length;r--&&Oo.test(t.charAt(r)););return r},Mo=/^\s+/;var So=function(t){return t?t.slice(0,xo(t)+1).replace(Mo,""):t},Ao=/^[-+]0x[0-9a-f]+$/i,Do=/^0b[01]+$/i,To=/^0o[0-7]+$/i,No=parseInt;var zo=function(t){if("number"==typeof t)return t;if(R(t))return NaN;if(q(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=q(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=So(t);var e=Do.test(t);return e||To.test(t)?No(t.slice(2),e?2:8):Ao.test(t)?NaN:+t};var Eo=function(t){return t?(t=zo(t))!==1/0&&t!==-1/0?t==t?t:0:17976931348623157e292*(t<0?-1:1):0===t?t:0};var Io=function(t){var r=Eo(t),e=r%1;return r==r?e?r-e:r:0},Po=Math.max;var Fo=function(t,r,e){var n=null==t?0:t.length;if(!n)return-1;var o=null==e?0:Io(e);return o<0&&(o=Po(n+o,0)),Be(t,ke(r,3),o)},ko=Math.max,Ho=Math.min;var $o=function(t,r,e){var n=null==t?0:t.length;if(!n)return-1;var o=n-1;return void 0!==e&&(o=Io(e),o=e<0?ko(n+o,0):Ho(o,n-1)),Be(t,ke(r,3),o,!0)};var Uo=function(t,r,e){var n=t.length;return e=void 0===e?n:e,!r&&n<=e?t:fo(t,r,e)};var Co=function(t,r){for(var e=t.length;e--&&-1<Ye(r,t[e],0););return e};var Bo=function(t,r){for(var e=-1,n=t.length;++e<n&&-1<Ye(r,t[e],0););return e};var Ro=function(t){return t.split("")},Wo=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var Yo=function(t){return Wo.test(t)},Lo="\\ud800-\\udfff",qo="["+Lo+"]",Vo="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",Zo="\\ud83c[\\udffb-\\udfff]",Jo="[^"+Lo+"]",Go="(?:\\ud83c[\\udde6-\\uddff]){2}",Xo="[\\ud800-\\udbff][\\udc00-\\udfff]",Ko="(?:"+Vo+"|"+Zo+")"+"?",Qo="[\\ufe0e\\ufe0f]?",tu=Qo+Ko+("(?:\\u200d(?:"+[Jo,Go,Xo].join("|")+")"+Qo+Ko+")*"),ru="(?:"+[Jo+Vo+"?",Vo,Go,Xo,qo].join("|")+")",eu=RegExp(Zo+"(?="+Zo+")|"+ru+tu,"g");var nu=function(t){return t.match(eu)||[]};var ou=function(t){return Yo(t)?nu(t):Ro(t)};var uu=function(t,r,e){if((t=Jt(t))&&(e||void 0===r))return So(t);if(!t||!(r=Zt(r)))return t;var n=ou(t),o=ou(r),u=Bo(n,o),a=Co(n,o)+1;return Uo(n,u,a).join("")},au=Object.prototype.hasOwnProperty;var iu=function(t){if(null==t)return!0;if(Gr(t)&&(M(t)||"string"==typeof t||"function"==typeof t.splice||Er(t)||Br(t)||Nr(t)))return!t.length;var r=ge(t);if("[object Map]"==r||"[object Set]"==r)return!t.size;if(Lr(t))return!Jr(t).length;for(var e in t)if(au.call(t,e))return!1;return!0};var cu=function(t,r){return we(t,r)},fu=function(){return N.Date.now()},su=Math.max,lu=Math.min;var vu=function(n,o,t){var u,a,i,c,f,s,l=0,v=!1,p=!1,r=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function h(t){var r=u,e=a;return u=a=void 0,l=t,c=n.apply(e,r)}function d(t){var r=t-s;return void 0===s||o<=r||r<0||p&&i<=t-l}function g(){var t,r,e=fu();if(d(e))return b(e);f=setTimeout(g,(r=o-((t=e)-s),p?lu(r,i-(t-l)):r))}function b(t){return f=void 0,r&&u?h(t):(u=a=void 0,c)}function e(){var t,r=fu(),e=d(r);if(u=arguments,a=this,s=r,e){if(void 0===f)return l=t=s,f=setTimeout(g,o),v?h(t):c;if(p)return clearTimeout(f),f=setTimeout(g,o),h(s)}return void 0===f&&(f=setTimeout(g,o)),c}return o=zo(o)||0,q(t)&&(v=!!t.leading,i=(p="maxWait"in t)?su(zo(t.maxWait)||0,o):i,r="trailing"in t?!!t.trailing:r),e.cancel=function(){void 0!==f&&clearTimeout(f),u=s=a=f=void(l=0)},e.flush=function(){return void 0===f?c:b(fu())},e};var pu=function(t,r,e){var n=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return q(e)&&(n="leading"in e?!!e.leading:n,o="trailing"in e?!!e.trailing:o),vu(t,r,{leading:n,maxWait:r,trailing:o})},hu=Object.freeze({_get:Qt,_map:Ce,_property:Fe,_findIndex:Fo,_findLastIndex:$o,_uniq:Ge,_pick:bn,_omit:mo,_isNaN:wo,_trim:uu,_isEmpty:iu,_isEqual:cu,_debounce:vu,_throttle:pu});var du=Object.freeze({debounce:function(t,r,e){return void 0===r&&(r=500),void 0===e&&(e={}),vu(t,r,e)},debounceWrap:function(n,o){return void 0===n&&(n=500),void 0===o&&(o={}),function(t,r,e){return e.value=vu(e.value,n,o),e}},throttle:function(t,r,e){return void 0===r&&(r=500),void 0===e&&(e={}),pu(t,r,e)},throttleWrap:function(n,o){return void 0===n&&(n=500),void 0===o&&(o={}),function(t,r,e){return e.value=pu(e.value,n,o),e}}}),gu=6;function bu(t){t=+t;try{var r=t.toExponential().match(/\d(?:\.(\d*))?e([+-]\d+)/);return t.toFixed(Math.max(0,(r[1]||"").length-r[2]))}catch(t){return"0"}}function yu(t,r){var e,n;try{e=bu(t).toString().split(".")[1].length}catch(t){e=0}try{n=bu(r).toString().split(".")[1].length}catch(t){n=0}var o=e+n,u=n-e;return{max:Math.pow(10,Math.max(e,n)),sum:Math.pow(10,o),sub:Math.pow(10,u)}}function ju(t,r){void 0===r&&(r=gu);var e=bu(t),n=bu(t).toString().split(".")[1];if((n&&n.length||0)<=r)return+e;var o=0<=(t=+t)?.5:-.5;return parseInt(t*Math.pow(10,r)+o+"",0)/Math.pow(10,r)}var mu=Object.freeze({plus:function(t,r,e){var n=yu(t=+t,r=+r).max;return ju((t*n+r*n)/n,e)},subtract:function(t,r,e){var n=yu(t=+t,r=+r).max;return ju((t*n-r*n)/n,e)},multiply:function(t,r,e){var n=yu(t,r).sum;return ju(Number(bu(t).toString().replace(".",""))*Number(bu(r).toString().replace(".",""))/n,e)},divide:function(t,r,e){var n=yu(t,r).sub;return ju(Number(bu(t).toString().replace(".",""))/Number(bu(r).toString().replace(".",""))*n,e)},scientificNumber:function(t){if(!t)return t;var r,e,n=t.toString(),o=/^(\d+)(\.\d+)?(e)([+]?\d+)$/,u=/^(\d+)(\.\d+)?(e)([-]?\d+)$/,a="";if(o.test(n)){var i=(r=o.exec(n))[2]?r[2].replace(".",""):"";e=Math.abs(r[4])-(i.length||0);for(var c=0;c<e;c++)a+="0";return r[1]+i+a}if(u.test(n)){r=u.exec(n),e=Math.abs(r[4])-1,i=r[2]?r[2].replace(".",""):"";for(var f=0;f<e;f++)a+="0";return"0."+a+r[1]+i}return t},formatToNumber:function(t){var r=Number(String(t).replace(/,/g,""));return isNaN(r)?0:r},dealNumber:function(t){if(t){var r=String(t),e=r.split(".")[0],n=r.split(".")[1];return e.replace(/\B(?=(\d{3})+(?!\d))/g,",")+(n?"."+n:"")}return t}});function _u(t){for(var r=[],e=0;e<t.length;e++)t[e]&&r.push(t[e]);return r}var wu=Object.freeze({cleanArray:_u,param:function(r){return"{}"===JSON.stringify(r)?"":_u(Object.keys(r).map(function(t){return void 0===r[t]?"":encodeURIComponent(t)+"="+encodeURIComponent(r[t])})).join("&")},param2Obj:function(t){var r=t||window.location.search,o={};return r.replace(new RegExp("([^?=&]+)(=([^&]*))?","g"),function(t,r,e,n){o[r]=n}),o}});var Ou,xu,Mu=Object.freeze({guid:function(){function t(){return(65536*(1+Math.random())|0).toString(16).substring(1)}return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()},getGuid:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var r=16*Math.random()|0;return("x"===t?r:3&r|8).toString(16)})}});return xu=Object.create(null),console.log(hu,"lodash=======",v),Ou=xu,[v,p,g,n,x,du,mu,wu,Mu,hu].forEach(function(r){Object.getOwnPropertyNames(r).forEach(function(t){Ou[t]=r[t]})}),xu});
