/*! For license information please see 973.js.LICENSE.txt */
(self.webpackChunkyabe_webfont_src=self.webpackChunkyabe_webfont_src||[]).push([[973],{3632:(t,e,n)=>{"use strict";n.d(e,{h:()=>i});n(3212);var r=n(626);function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.Z.create(Object.assign({baseURL:yabeWebfont.rest_api.url,headers:{"content-type":"application/json",accept:"application/json","X-WP-Nonce":yabeWebfont.rest_api.nonce}},t))}},4737:(t,e,n)=>{"use strict";n.d(e,{k:()=>h});n(3212);var r=n(2602),i=n.n(r);const o=n.p+"images/gear-solid.45ca6482.svg";var a=n(6371);const s=n.p+"images/circle-question-solid.ed2fb881.svg";var c=n(6734);const u=n.p+"images/circle-exclamation-solid.c83a4c59.svg";var l=n(5284),f=n(9145);function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new(i())(Object.assign({icons:{prefix:"",suffix:"",tip:'<img class="icon-tip" src="'.concat((0,f.u)(s),'"/>'),async:'<img class="icon-async" src="'.concat((0,f.u)(o),'"/>'),info:'<img class="icon-info" src="'.concat((0,f.u)(c),'"/>'),success:'<img class="icon-success" src="'.concat((0,f.u)(a),'"/>'),warning:'<img class="icon-warning" src="'.concat((0,f.u)(u),'"/>'),alert:'<img class="icon-alert" src="'.concat((0,f.u)(l),'"/>')}},t))}},165:(t,e,n)=>{"use strict";n.d(e,{j:()=>r});n(8576),n(3900),n(7623),n(5653),n(5545),n(9394);var r=(0,n(6318).Q_)("busy",{state:function(){return{tasks:[]}},actions:{add:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.tasks.unshift({timestamp:Date.now(),task:t})},remove:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=!1;this.tasks=this.tasks.filter((function(n){return!!e||(n.task!==t||(e=!0,!1))}))},reset:function(){this.tasks=[]}},getters:{isBusy:function(t){return t.tasks.length>0},hasTask:function(t){return function(e){return t.tasks.some((function(t){return t.task===e}))}}}})},5726:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",c="week",u="month",l="quarter",f="year",h="date",d="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},g=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},m={s:g,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+g(r,2,"0")+":"+g(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),o=n-i<0,a=e.clone().add(r+(o?-1:1),u);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:f,w:c,d:s,D:h,h:a,m:o,s:i,ms:r,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},b="en",_={};_[b]=y;var w="$isDayjsObject",k=function(t){return t instanceof M||!(!t||!t[w])},S=function t(e,n,r){var i;if(!e)return b;if("string"==typeof e){var o=e.toLowerCase();_[o]&&(i=o),n&&(_[o]=n,i=o);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var s=e.name;_[s]=e,i=s}return!r&&i&&(b=i),i||!r&&b},$=function(t,e){if(k(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new M(n)},x=m;x.l=S,x.i=k,x.w=function(t,e){return $(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var M=function(){function y(t){this.$L=S(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[w]=!0}var g=y.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(x.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(p);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(e)}(t),this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return x},g.isValid=function(){return!(this.$d.toString()===d)},g.isSame=function(t,e){var n=$(t);return this.startOf(e)<=n&&n<=this.endOf(e)},g.isAfter=function(t,e){return $(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<$(t)},g.$g=function(t,e,n){return x.u(t)?this[e]:this.set(n,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var n=this,r=!!x.u(e)||e,l=x.p(t),d=function(t,e){var i=x.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(s)},p=function(t,e){return x.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},v=this.$W,y=this.$M,g=this.$D,m="set"+(this.$u?"UTC":"");switch(l){case f:return r?d(1,0):d(31,11);case u:return r?d(1,y):d(0,y+1);case c:var b=this.$locale().weekStart||0,_=(v<b?v+7:v)-b;return d(r?g-_:g+(6-_),y);case s:case h:return p(m+"Hours",0);case a:return p(m+"Minutes",1);case o:return p(m+"Seconds",2);case i:return p(m+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var n,c=x.p(t),l="set"+(this.$u?"UTC":""),d=(n={},n[s]=l+"Date",n[h]=l+"Date",n[u]=l+"Month",n[f]=l+"FullYear",n[a]=l+"Hours",n[o]=l+"Minutes",n[i]=l+"Seconds",n[r]=l+"Milliseconds",n)[c],p=c===s?this.$D+(e-this.$W):e;if(c===u||c===f){var v=this.clone().set(h,1);v.$d[d](p),v.init(),this.$d=v.set(h,Math.min(this.$D,v.daysInMonth())).$d}else d&&this.$d[d](p);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[x.p(t)]()},g.add=function(r,l){var h,d=this;r=Number(r);var p=x.p(l),v=function(t){var e=$(d);return x.w(e.date(e.date()+Math.round(t*r)),d)};if(p===u)return this.set(u,this.$M+r);if(p===f)return this.set(f,this.$y+r);if(p===s)return v(1);if(p===c)return v(7);var y=(h={},h[o]=e,h[a]=n,h[i]=t,h)[p]||1,g=this.$d.getTime()+r*y;return x.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=x.z(this),o=this.$H,a=this.$m,s=this.$M,c=n.weekdays,u=n.months,l=n.meridiem,f=function(t,n,i,o){return t&&(t[n]||t(e,r))||i[n].slice(0,o)},h=function(t){return x.s(o%12||12,t,"0")},p=l||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(v,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return x.s(e.$y,4,"0");case"M":return s+1;case"MM":return x.s(s+1,2,"0");case"MMM":return f(n.monthsShort,s,u,3);case"MMMM":return f(u,s);case"D":return e.$D;case"DD":return x.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return f(n.weekdaysMin,e.$W,c,2);case"ddd":return f(n.weekdaysShort,e.$W,c,3);case"dddd":return c[e.$W];case"H":return String(o);case"HH":return x.s(o,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return p(o,a,!0);case"A":return p(o,a,!1);case"m":return String(a);case"mm":return x.s(a,2,"0");case"s":return String(e.$s);case"ss":return x.s(e.$s,2,"0");case"SSS":return x.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(r,h,d){var p,v=this,y=x.p(h),g=$(r),m=(g.utcOffset()-this.utcOffset())*e,b=this-g,_=function(){return x.m(v,g)};switch(y){case f:p=_()/12;break;case u:p=_();break;case l:p=_()/3;break;case c:p=(b-m)/6048e5;break;case s:p=(b-m)/864e5;break;case a:p=b/n;break;case o:p=b/e;break;case i:p=b/t;break;default:p=b}return d?p:x.a(p)},g.daysInMonth=function(){return this.endOf(u).$D},g.$locale=function(){return _[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},g.clone=function(){return x.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},y}(),D=M.prototype;return $.prototype=D,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",u],["$y",f],["$D",h]].forEach((function(t){D[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),$.extend=function(t,e){return t.$i||(t(e,M,$),t.$i=!0),$},$.locale=S,$.isDayjs=k,$.unix=function(t){return $(1e3*t)},$.en=_[b],$.Ls=_,$.p={},$}()},9346:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>yt});n(5545),n(5407),n(907),n(5814),n(7834),n(5539),n(3470),n(8239),n(5142),n(8327),n(1923),n(2837),n(5670),n(1509),n(1388),n(9657),n(8523),n(9450),n(3146),n(9356),n(359),n(1379),n(3090),n(203),n(6199),n(7996),n(3290);var r=n(7870),i=n(2536),o=n(5929),a=n(406),s=n(5726),c=n.n(s),u=n(6133),l=n(1572),f=n(2484),h=n(9313),d=n(2433),p=n(3383);const v=function(t,e,n,r){if(!(0,d.Z)(t))return t;for(var i=-1,o=(e=(0,f.Z)(e,t)).length,a=o-1,s=t;null!=s&&++i<o;){var c=(0,p.Z)(e[i]),u=n;if("__proto__"===c||"constructor"===c||"prototype"===c)return t;if(i!=a){var v=s[c];void 0===(u=r?r(v,c,s):void 0)&&(u=(0,d.Z)(v)?v:(0,h.Z)(e[i+1])?[]:{})}(0,l.Z)(s,c,u),s=s[c]}return t};const y=function(t,e,n){return null==t?t:v(t,e,n)};var g=n(8126),m=n(3632),b=n(4737),_=n(165);function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function k(){k=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof g?e:g,a=Object.create(o.prototype),s=new T(r||[]);return i(a,"_invoke",{value:O(t,n,s)}),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var h="suspendedStart",d="suspendedYield",p="executing",v="completed",y={};function g(){}function m(){}function b(){}var _={};u(_,a,(function(){return this}));var S=Object.getPrototypeOf,$=S&&S(S(U([])));$&&$!==n&&r.call($,a)&&(_=$);var x=b.prototype=g.prototype=Object.create(_);function M(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function D(t,e){function n(i,o,a,s){var c=f(t[i],t,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==w(l)&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,s)}))}s(c.arg)}var o;i(this,"_invoke",{value:function(t,r){function i(){return new e((function(e,i){n(t,r,e,i)}))}return o=o?o.then(i,i):i()}})}function O(e,n,r){var i=h;return function(o,a){if(i===p)throw new Error("Generator is already running");if(i===v){if("throw"===o)throw a;return{value:t,done:!0}}for(r.method=o,r.arg=a;;){var s=r.delegate;if(s){var c=L(s,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===h)throw i=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=p;var u=f(e,n,r);if("normal"===u.type){if(i=r.done?v:d,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(i=v,r.method="throw",r.arg=u.arg)}}}function L(e,n){var r=n.method,i=e.iterator[r];if(i===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,L(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var o=f(i,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,y;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,y):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function Z(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(Z,this),this.reset(!0)}function U(e){if(e||""===e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}throw new TypeError(w(e)+" is not iterable")}return m.prototype=b,i(x,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:m,configurable:!0}),m.displayName=u(b,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},M(D.prototype),u(D.prototype,s,(function(){return this})),e.AsyncIterator=D,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new D(l(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},M(x),u(x,c,"Generator"),u(x,a,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=U,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;j(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:U(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),y}},e}function S(t,e,n,r,i,o,a){try{var s=t[o](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,i)}function $(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function a(t){S(o,r,i,a,s,"next",t)}function s(t){S(o,r,i,a,s,"throw",t)}a(void 0)}))}}var x={key:0,class:"mb-6"},M={class:"form-table",role:"presentation"},D=(0,r._)("th",{scope:"row"},[(0,r._)("label",null,"License Key")],-1),O={key:0,class:"flex my-2.5 items-center font-medium"},L=(0,r._)("span",{class:"font-normal text-white bg-green-700 px-1.5 py-1 rounded ml-2.5"},"active",-1),Z={key:1,class:"description"},j=(0,r._)("a",{href:"https://webfont.yabe.land/#pricing-plans",target:"_blank"},"license key",-1),T={class:"mb-6"},U=(0,r._)("h2",{class:"title"},"Performance",-1),C={class:"form-table",role:"presentation"},E=(0,r._)("th",{scope:"row"}," Cached CSS ",-1),H={class:"flex gap-x-1"},P=(0,r._)("span",{class:"font-medium"}," Last generated: ",-1),Y=["href"],I=[(0,r._)("svg",{class:"w-[15px] h-[15px]",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",viewBox:"0 0 100 100"},[(0,r._)("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),(0,r._)("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})],-1)],q=(0,r._)("p",{class:"description"}," Serve the CSS file from the cache instead of generating it on the fly. ",-1),F={class:"flex items-center my-2"},A=(0,r._)("svg",{class:"ml-3 h-5 w-5 text-gray-400 fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},[(0,r.kq)("! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. "),(0,r._)("path",{d:"M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64V75c0 42.4 16.9 83.1 46.9 113.1L146.7 256 78.9 323.9C48.9 353.9 32 394.6 32 437v11c-17.7 0-32 14.3-32 32s14.3 32 32 32H64 320h10.8C285.6 480.1 256 427.5 256 368c0-27.2 6.2-53 17.2-76l-36-36 67.9-67.9c30-30 46.9-70.7 46.9-113.1V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320 64 32zM96 75V64H288V75c0 19-5.6 37.4-16 53H112c-10.3-15.6-16-34-16-53zM576 368c0-79.5-64.5-144-144-144s-144 64.5-144 144s64.5 144 144 144s144-64.5 144-144zM432 288c8.8 0 16 7.2 16 16v48h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H432c-8.8 0-16-7.2-16-16V304c0-8.8 7.2-16 16-16z"})],-1),G=(0,r._)("span",{class:"text-gray-400 pl-1"}," There is a scheduled task to generate the cache. ",-1),N=(0,r._)("th",{scope:"row"},[(0,r._)("label",null,"Cache loading method")],-1),z=["checked","value"],W=(0,r._)("label",{for:"inline-print"}," Inline style",-1),B=(0,r._)("p",{class:"description"},"Load font style via inline styles instead of external file.",-1),V={class:"mb-6"},J=(0,r._)("h2",{class:"title"},"Misc.",-1),Q={class:"form-table",role:"presentation"},R=(0,r._)("th",{scope:"row"},[(0,r._)("label",null,"Media Library")],-1),K=["checked","value"],X=(0,r._)("label",{for:"media-library"}," Hide font files from Media Library ",-1),tt=(0,r._)("p",{class:"description"}," Only show items in the Media Library that satisfy the following conditions: original allowed mime types. ",-1),et=(0,r._)("th",{scope:"row"},[(0,r._)("label",null,"Bundled export")],-1),nt=["checked","value"],rt=(0,r._)("label",{for:"export-bundle-binary"}," Bundle file on the exported file ",-1),it=(0,r._)("p",{class:"description"}," Include font binary file on the exported file. This will increase the file size. ",-1),ot=(0,r._)("th",{scope:"row"},[(0,r._)("label",null,"Disable user's Google Fonts")],-1),at=["checked","value"],st=(0,r._)("label",{for:"disable-user-google-fonts"}," Disable Google Fonts API that loaded manually ",-1),ct=(0,r._)("p",{class:"description"},[(0,r.Uk)(" Scan and disable Google Fonts API that loaded manually by the theme or plugin through "),(0,r._)("code",null,"wp_enqueue_style"),(0,r.Uk)(" function. ")],-1),ut={class:"mb-6"},lt=(0,r._)("h2",{class:"title"},"Adobe Fonts",-1),ft={class:"form-table",role:"presentation"},ht=(0,r._)("th",{scope:"row"},[(0,r._)("label",null,"Project ID")],-1),dt={class:"flex items-center"},pt=["value"],vt=(0,r._)("p",{class:"description"},[(0,r.Uk)(" Get your Project ID from "),(0,r._)("a",{href:"https://fonts.adobe.com/my_fonts#web_projects-section",target:"_blank"},"https://fonts.adobe.com/my_fonts#web_projects-section")],-1);const yt={__name:"Index",setup:function(t){var e=(0,m.h)(),n=(0,_.j)(),s=(0,b.k)(),l=(0,a.iH)({key:null,is_activated:!1,opt_in_pre_release:!1}),f=(0,a.iH)({last_generated:"",pending_task:!1,file_url:""}),h=(0,a.iH)({}),d=(0,a.iH)(null);function p(){n.add("settings:store-options"),e.request({method:"POST",url:"/setting/option/store",data:{options:h.value}}).then((function(t){return t.data})).then((function(t){h.value=(0,u.Z)(t.options),s.success("Settings saved.")})).catch((function(t){s.alert(t.message)})).finally((function(){n.remove("settings:store-options")}))}function v(){n.add("settings:generate-cache"),e.request({method:"POST",url:"/setting/cache/generate"}).then((function(t){return t.data})).then((function(t){f.value=t.cache})).catch((function(t){s.alert(t.message)})).finally((function(){n.remove("settings:generate-cache")}))}function w(){n.add("settings:sync-adobe-fonts"),e.request({method:"POST",url:"/setting/adobe-fonts/sync",data:{project_id:h.value.adobe_fonts.project_id,kit:d.value}}).then((function(t){return t.data})).then((function(t){s.success("Adobe Fonts synced.")})).catch((function(t){s.alert(t.message)})).finally((function(){n.remove("settings:sync-adobe-fonts")}))}function S(){n.add("settings:destroy-adobe-fonts"),e.request({method:"POST",url:"/setting/adobe-fonts/destroy"}).then((function(t){return t.data})).then((function(t){s.success("Adobe Fonts cleared.")})).catch((function(t){s.alert(t.message)})).finally((function(){n.remove("settings:destroy-adobe-fonts")}))}return(0,r.wF)((function(){n.add("settings:fetch-license"),e.request({method:"GET",url:"/setting/license/index"}).then((function(t){return t.data})).then((function(t){l.value=t.license})).catch((function(t){s.alert(t.message)})).finally((function(){n.remove("settings:fetch-license")})),n.add("settings:fetch-cache"),e.request({method:"GET",url:"/setting/cache/index"}).then((function(t){return t.data})).then((function(t){f.value=t.cache})).catch((function(t){s.alert(t.message)})).finally((function(){n.remove("settings:fetch-cache")})),n.add("settings:fetch-options"),e.request({method:"GET",url:"/setting/option/index"}).then((function(t){return t.data})).then((function(t){h.value=(0,u.Z)(t.options)})).then((function(){var t;d.value=null===(t=h.value.adobe_fonts)||void 0===t?void 0:t.kit})).catch((function(t){s.alert(t.message)})).finally((function(){n.remove("settings:fetch-options")}))})),(0,r.YP)((function(){return l.value.key}),function(){var t=$(k().mark((function t(r,i){return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.isBusy){t.next=2;break}return t.abrupt("return");case 2:if(r!==i){t.next=4;break}return t.abrupt("return");case 4:n.add("settings:store-license"),e.request({method:"POST",url:"/setting/license/store",data:{license:r}}).then((function(t){return t.data})).then((function(t){var e,n,r;if(l.value=(0,u.Z)(t.license),Object.keys(t.notice).length>0){if(null!==(e=t.notice)&&void 0!==e&&e.success)s.success(null===(r=t.notice)||void 0===r?void 0:r.success);else if(null!==(n=t.notice)&&void 0!==n&&n.error){var i;s.alert(null===(i=t.notice)||void 0===i?void 0:i.error)}}else s.success("License setting saved.")})).catch((function(t){s.alert(t.message)})).finally((function(){n.remove("settings:store-license")}));case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),(0,r.YP)((function(){var t;return null===(t=h.value.adobe_fonts)||void 0===t?void 0:t.project_id}),function(){var t=$(k().mark((function t(r,i){return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.isBusy){t.next=2;break}return t.abrupt("return");case 2:if(r!==i){t.next=4;break}return t.abrupt("return");case 4:if(d.value=null,null!==r){t.next=8;break}return S(),t.abrupt("return");case 8:n.add("settings:fetch-adobe-fonts-kits"),e.request({method:"POST",url:"/setting/adobe-fonts/get-kits",data:{project_id:r}}).then((function(t){return t.data})).then((function(t){d.value=t.data.kit,p(),w()})).catch((function(t){s.alert(t.response.data.message)})).finally((function(){n.remove("settings:fetch-adobe-fonts-kits")}));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),function(t,e){var s=(0,r.Q2)("ripple");return(0,r.wg)(),(0,r.iD)(r.HY,null,[t.yabeWebfont.lite_edition?(0,r.kq)("v-if",!0):((0,r.wg)(),(0,r.iD)("div",x,[(0,r._)("table",M,[(0,r._)("tbody",null,[(0,r._)("tr",null,[D,(0,r._)("td",null,[(0,r.wy)((0,r._)("input",{name:"license_key",type:"password","onUpdate:modelValue":e[0]||(e[0]=function(t){return l.value.key=t}),class:"min-w-[25rem]"},null,512),[[i.vModelText,l.value.key,void 0,{lazy:!0}]]),l.value.is_activated?((0,r.wg)(),(0,r.iD)("div",O,[(0,r.Uk)(" Status: "),L])):((0,r.wg)(),(0,r.iD)("p",Z,[(0,r.Uk)("Enter your "),j,(0,r.Uk)(" receive the update of the latest version.")]))])]),(0,r.kq)(' <tr>\n                    <th scope="row"><label>Pre-release version</label></th>\n                    <td>\n                        <input id="pre-release" name="opt_in_pre_release" type="checkbox" v-model="license.opt_in_pre_release">\n                        <label for="pre-release"> Enable</label>\n                        <p class="description">Opt-in to get the pre-release version update. <span class="text-red-700">Pre-release version may unstable.</span></p>\n                    </td>\n                </tr> ')])])])),(0,r._)("div",T,[U,(0,r._)("table",C,[(0,r._)("tbody",null,[(0,r._)("tr",null,[E,(0,r._)("td",null,[(0,r._)("p",H,[P,f.value.last_generated?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[(0,r.Uk)((0,o.toDisplayString)(new a.SU(c())(1e3*f.value.last_generated).format("YYYY-MM-DD HH:mm:ss"))+" ",1),(0,r._)("a",{href:"".concat(f.value.file_url,"?ver=").concat(f.value.last_generated),target:"_blank"},I,8,Y)],64)):(0,r.kq)("v-if",!0),(0,r._)("span",{class:(0,o.normalizeClass)([(0,a.SU)(n).isBusy&&((0,a.SU)(n).hasTask("settings:generate-cache")||(0,a.SU)(n).hasTask("settings:fetch-cache"))?"visible":"hidden","spinner"])},null,2)]),q,(0,r._)("div",F,[(0,r._)("button",{type:"button",onClick:v,class:"button button-secondary"}," Re-generate cache "),f.value.pending_task?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[A,G],64)):(0,r.kq)("v-if",!0)])])]),(0,r._)("tr",null,[N,(0,r._)("td",null,[(0,r._)("input",{id:"inline-print",name:"inline_print",type:"checkbox",checked:(0,a.SU)(g.Z)(h.value,"cache.inline_print",!1),value:(0,a.SU)(g.Z)(h.value,"cache.inline_print",!1),onInput:e[1]||(e[1]=function(t){var e;return(0,a.SU)(y)(h.value,"cache.inline_print",!(null!==(e=h.value)&&void 0!==e&&null!==(e=e.cache)&&void 0!==e&&e.inline_print))})},null,40,z),W,B])])])])]),(0,r._)("div",V,[J,(0,r._)("table",Q,[(0,r._)("tbody",null,[(0,r._)("tr",null,[R,(0,r._)("td",null,[(0,r._)("input",{id:"media-library",name:"hide_media_library",type:"checkbox",checked:(0,a.SU)(g.Z)(h.value,"misc.hide_media_library",!1),value:(0,a.SU)(g.Z)(h.value,"misc.hide_media_library",!1),onInput:e[2]||(e[2]=function(t){var e;return(0,a.SU)(y)(h.value,"misc.hide_media_library",!(null!==(e=h.value)&&void 0!==e&&null!==(e=e.misc)&&void 0!==e&&e.hide_media_library))})},null,40,K),X,tt])]),(0,r._)("tr",null,[et,(0,r._)("td",null,[(0,r._)("input",{id:"export-bundle-binary",name:"export_bundle_binary",type:"checkbox",checked:(0,a.SU)(g.Z)(h.value,"misc.export_bundle_binary",!1),value:(0,a.SU)(g.Z)(h.value,"misc.export_bundle_binary",!1),onInput:e[3]||(e[3]=function(t){var e;return(0,a.SU)(y)(h.value,"misc.export_bundle_binary",!(null!==(e=h.value)&&void 0!==e&&null!==(e=e.misc)&&void 0!==e&&e.export_bundle_binary))})},null,40,nt),rt,it])]),(0,r._)("tr",null,[ot,(0,r._)("td",null,[(0,r._)("input",{id:"disable-user-google-fonts",name:"disable_user_google_fonts",type:"checkbox",checked:(0,a.SU)(g.Z)(h.value,"misc.disable_user_google_fonts",!1),value:(0,a.SU)(g.Z)(h.value,"misc.disable_user_google_fonts",!1),onInput:e[4]||(e[4]=function(t){var e;return(0,a.SU)(y)(h.value,"misc.disable_user_google_fonts",!(null!==(e=h.value)&&void 0!==e&&null!==(e=e.misc)&&void 0!==e&&e.disable_user_google_fonts))})},null,40,at),st,ct])])])])]),(0,r._)("div",ut,[lt,(0,r._)("table",ft,[(0,r._)("tbody",null,[(0,r._)("tr",null,[ht,(0,r._)("td",null,[(0,r._)("div",dt,[(0,r._)("input",{type:"text",id:"adobe-font-project-id",name:"adobe_font_project_id",value:(0,a.SU)(g.Z)(h.value,"adobe_fonts.project_id",null),onChange:e[5]||(e[5]=function(t){return(0,a.SU)(y)(h.value,"adobe_fonts.project_id",""===t.target.value?null:t.target.value)}),class:""},null,40,pt),d.value?((0,r.wg)(),(0,r.iD)("button",{key:0,type:"button",onClick:w,class:"button button-secondary"}," Sync fonts ")):(0,r.kq)("v-if",!0),(0,r._)("span",{class:(0,o.normalizeClass)([(0,a.SU)(n).isBusy&&((0,a.SU)(n).hasTask("settings:fetch-adobe-fonts-kits")||(0,a.SU)(n).hasTask("settings:sync-adobe-fonts-kits"))?"visible":"hidden","spinner"])},null,2)]),vt])])])])]),(0,r.wy)(((0,r.wg)(),(0,r.iD)("button",{type:"button",onClick:p,class:"button button-primary"},[(0,r.Uk)("Save Changes")])),[[s]])],64)}}}},8019:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});const r=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}},9084:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});var r=n(2484),i=n(3383);const o=function(t,e){for(var n=0,o=(e=(0,r.Z)(e,t)).length;null!=t&&n<o;)t=t[(0,i.Z)(e[n++])];return n&&n==o?t:void 0}},2484:(t,e,n)=>{"use strict";n.d(e,{Z:()=>m});var r=n(6052),i=n(1070),o=n(5440);function a(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(a.Cache||o.Z),n}a.Cache=o.Z;const s=a;var c=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,u=/\\(\\)?/g;const l=function(t){var e=s(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(c,(function(t,n,r,i){e.push(r?i.replace(u,"$1"):n||t)})),e}));var f=n(6711),h=n(8019),d=n(8111),p=f.Z?f.Z.prototype:void 0,v=p?p.toString:void 0;const y=function t(e){if("string"==typeof e)return e;if((0,r.Z)(e))return(0,h.Z)(e,t)+"";if((0,d.Z)(e))return v?v.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n};const g=function(t){return null==t?"":y(t)};const m=function(t,e){return(0,r.Z)(t)?t:(0,i.Z)(t,e)?[t]:l(g(t))}},1070:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});var r=n(6052),i=n(8111),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;const s=function(t,e){if((0,r.Z)(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!(0,i.Z)(t))||(a.test(t)||!o.test(t)||null!=e&&t in Object(e))}},3383:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var r=n(8111);const i=function(t){if("string"==typeof t||(0,r.Z)(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e}},8126:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var r=n(9084);const i=function(t,e,n){var i=null==t?void 0:(0,r.Z)(t,e);return void 0===i?n:i}},8111:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});var r=n(9572),i=n(3795);const o=function(t){return"symbol"==typeof t||(0,i.Z)(t)&&"[object Symbol]"==(0,r.Z)(t)}}}]);