"use strict";(self.webpackChunkyabe_webfont_src=self.webpackChunkyabe_webfont_src||[]).push([[343],{4364:(e,t,r)=>{var n=r(3313).charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},4979:(e,t,r)=>{var n=r(3999),a=r(4904),l=r(6834),o=r(7843),i=r(5087),u=r(6735),s=r(755),c=r(948),p=r(444),d=r(474),f=Array;e.exports=function(e){var t=l(e),r=u(this),v=arguments.length,g=v>1?arguments[1]:void 0,h=void 0!==g;h&&(g=n(g,v>2?arguments[2]:void 0));var m,b,y,x,w,S,E=d(t),k=0;if(!E||this===f&&i(E))for(m=s(t),b=r?new this(m):f(m);m>k;k++)S=h?g(t[k],k):t[k],c(b,k,S);else for(w=(x=p(t,E)).next,b=r?new this:[];!(y=a(w,x)).done;k++)S=h?o(x,g,[y.value,k],!0):y.value,c(b,k,S);return b.length=k,b}},4354:(e,t,r)=>{var n=r(1736),a=Math.floor,l=function(e,t){var r=e.length,u=a(r/2);return r<8?o(e,t):i(e,l(n(e,0,u),t),l(n(e,u),t),t)},o=function(e,t){for(var r,n,a=e.length,l=1;l<a;){for(n=l,r=e[l];n&&t(e[n-1],r)>0;)e[n]=e[--n];n!==l++&&(e[n]=r)}return e},i=function(e,t,r,n){for(var a=t.length,l=r.length,o=0,i=0;o<a||i<l;)e[o+i]=o<a&&i<l?n(t[o],r[i])<=0?t[o++]:r[i++]:o<a?t[o++]:r[i++];return e};e.exports=l},7843:(e,t,r)=>{var n=r(9644),a=r(1489);e.exports=function(e,t,r,l){try{return l?t(n(r)[0],r[1]):t(r)}catch(t){a(e,"throw",t)}}},6233:(e,t,r)=>{var n=r(134);e.exports=function(e,t,r){for(var a in t)n(e,a,t[a],r);return e}},6369:(e,t,r)=>{r(3902);var n=r(5448),a=r(134),l=r(2981),o=r(9024),i=r(7088),u=r(3797),s=i("species"),c=RegExp.prototype;e.exports=function(e,t,r,p){var d=i(e),f=!o((function(){var t={};return t[d]=function(){return 7},7!==""[e](t)})),v=f&&!o((function(){var t=!1,r=/a/;return"split"===e&&((r={}).constructor={},r.constructor[s]=function(){return r},r.flags="",r[d]=/./[d]),r.exec=function(){return t=!0,null},r[d](""),!t}));if(!f||!v||r){var g=n(/./[d]),h=t(d,""[e],(function(e,t,r,a,o){var i=n(e),u=t.exec;return u===l||u===c.exec?f&&!o?{done:!0,value:g(t,r,a)}:{done:!0,value:i(r,t,a)}:{done:!1}}));a(String.prototype,e,h[0]),a(c,d,h[1])}p&&u(c[d],"sham",!0)}},1634:(e,t,r)=>{var n=r(9272),a=r(6834),l=Math.floor,o=n("".charAt),i=n("".replace),u=n("".slice),s=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,c=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,r,n,p,d){var f=r+e.length,v=n.length,g=c;return void 0!==p&&(p=a(p),g=s),i(d,g,(function(a,i){var s;switch(o(i,0)){case"$":return"$";case"&":return e;case"`":return u(t,0,r);case"'":return u(t,f);case"<":s=p[u(i,1,-1)];break;default:var c=+i;if(0===c)return a;if(c>v){var d=l(c/10);return 0===d?a:d<=v?void 0===n[d-1]?o(i,1):n[d-1]+o(i,1):a}s=n[c-1]}return void 0===s?"":s}))}},126:(e,t,r)=>{var n=r(4904),a=r(9644),l=r(1365),o=r(8669),i=r(2981),u=TypeError;e.exports=function(e,t){var r=e.exec;if(l(r)){var s=n(r,e,t);return null!==s&&a(s),s}if("RegExp"===o(e))return n(i,e,t);throw new u("RegExp#exec called on incompatible receiver")}},2981:(e,t,r)=>{var n,a,l=r(4904),o=r(9272),i=r(3021),u=r(9035),s=r(7365),c=r(9065),p=r(2990),d=r(2108).get,f=r(7853),v=r(2477),g=c("native-string-replace",String.prototype.replace),h=RegExp.prototype.exec,m=h,b=o("".charAt),y=o("".indexOf),x=o("".replace),w=o("".slice),S=(a=/b*/g,l(h,n=/a/,"a"),l(h,a,"a"),0!==n.lastIndex||0!==a.lastIndex),E=s.BROKEN_CARET,k=void 0!==/()??/.exec("")[1];(S||k||E||f||v)&&(m=function(e){var t,r,n,a,o,s,c,f=this,v=d(f),j=i(e),O=v.raw;if(O)return O.lastIndex=f.lastIndex,t=l(m,O,j),f.lastIndex=O.lastIndex,t;var A=v.groups,P=E&&f.sticky,R=l(u,f),H=f.source,$=0,I=j;if(P&&(R=x(R,"y",""),-1===y(R,"g")&&(R+="g"),I=w(j,f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==b(j,f.lastIndex-1))&&(H="(?: "+H+")",I=" "+I,$++),r=new RegExp("^(?:"+H+")",R)),k&&(r=new RegExp("^"+H+"$(?!\\s)",R)),S&&(n=f.lastIndex),a=l(h,P?r:f,I),P?a?(a.input=w(a.input,$),a[0]=w(a[0],$),a.index=f.lastIndex,f.lastIndex+=a[0].length):f.lastIndex=0:S&&a&&(f.lastIndex=f.global?a.index+a[0].length:n),k&&a&&a.length>1&&l(g,a[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(a[o]=void 0)})),a&&A)for(a.groups=s=p(null),o=0;o<A.length;o++)s[(c=A[o])[0]]=a[c[1]];return a}),e.exports=m},9035:(e,t,r)=>{var n=r(9644);e.exports=function(){var e=n(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},5800:(e,t,r)=>{var n=r(4904),a=r(5776),l=r(1338),o=r(9035),i=RegExp.prototype;e.exports=function(e){var t=e.flags;return void 0!==t||"flags"in i||a(e,"flags")||!l(i,e)?t:n(o,e)}},7365:(e,t,r)=>{var n=r(9024),a=r(2262).RegExp,l=n((function(){var e=a("a","y");return e.lastIndex=2,null!==e.exec("abcd")})),o=l||n((function(){return!a("a","y").sticky})),i=l||n((function(){var e=a("^r","gy");return e.lastIndex=2,null!==e.exec("str")}));e.exports={BROKEN_CARET:i,MISSED_STICKY:o,UNSUPPORTED_Y:l}},7853:(e,t,r)=>{var n=r(9024),a=r(2262).RegExp;e.exports=n((function(){var e=a(".","s");return!(e.dotAll&&e.test("\n")&&"s"===e.flags)}))},2477:(e,t,r)=>{var n=r(9024),a=r(2262).RegExp;e.exports=n((function(){var e=a("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},6002:(e,t,r)=>{var n=r(7246).PROPER,a=r(9024),l=r(6182);e.exports=function(e){return a((function(){return!!l[e]()||"​᠎"!=="​᠎"[e]()||n&&l[e].name!==e}))}},4817:(e,t,r)=>{var n=r(7545),a=r(5010).find,l=r(2755),o="find",i=!0;o in[]&&Array(1)[o]((function(){i=!1})),n({target:"Array",proto:!0,forced:i},{find:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),l(o)},1360:(e,t,r)=>{var n=r(7545),a=r(4979);n({target:"Array",stat:!0,forced:!r(9380)((function(e){Array.from(e)}))},{from:a})},863:(e,t,r)=>{r(7545)({target:"Array",stat:!0},{isArray:r(4091)})},7422:(e,t,r)=>{var n=r(7545),a=r(9272),l=r(4114),o=r(9135),i=r(706),u=a([].join);n({target:"Array",proto:!0,forced:l!==Object||!i("join",",")},{join:function(e){return u(o(this),void 0===e?",":e)}})},8098:(e,t,r)=>{var n=r(7545),a=r(5010).map;n({target:"Array",proto:!0,forced:!r(9239)("map")},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},3902:(e,t,r)=>{var n=r(7545),a=r(2981);n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},9048:(e,t,r)=>{r(3902);var n,a,l=r(7545),o=r(4904),i=r(1365),u=r(9644),s=r(3021),c=(n=!1,(a=/[ac]/).exec=function(){return n=!0,/./.exec.apply(this,arguments)},!0===a.test("abc")&&n),p=/./.test;l({target:"RegExp",proto:!0,forced:!c},{test:function(e){var t=u(this),r=s(e),n=t.exec;if(!i(n))return o(p,t,r);var a=o(n,t,r);return null!==a&&(u(a),!0)}})},6361:(e,t,r)=>{var n=r(7246).PROPER,a=r(134),l=r(9644),o=r(3021),i=r(9024),u=r(5800),s="toString",c=RegExp.prototype[s],p=i((function(){return"/a/b"!==c.call({source:"a",flags:"b"})})),d=n&&c.name!==s;(p||d)&&a(RegExp.prototype,s,(function(){var e=l(this);return"/"+o(e.source)+"/"+o(u(e))}),{unsafe:!0})},6636:(e,t,r)=>{var n=r(2415),a=r(4904),l=r(9272),o=r(6369),i=r(9024),u=r(9644),s=r(1365),c=r(1562),p=r(9935),d=r(976),f=r(3021),v=r(3175),g=r(4364),h=r(6838),m=r(1634),b=r(126),y=r(7088)("replace"),x=Math.max,w=Math.min,S=l([].concat),E=l([].push),k=l("".indexOf),j=l("".slice),O="$0"==="a".replace(/./,"$0"),A=!!/./[y]&&""===/./[y]("a","$0");o("replace",(function(e,t,r){var l=A?"$":"$0";return[function(e,r){var n=v(this),l=c(e)?void 0:h(e,y);return l?a(l,e,n,r):a(t,f(n),e,r)},function(e,a){var o=u(this),i=f(e);if("string"==typeof a&&-1===k(a,l)&&-1===k(a,"$<")){var c=r(t,o,i,a);if(c.done)return c.value}var v=s(a);v||(a=f(a));var h,y=o.global;y&&(h=o.unicode,o.lastIndex=0);for(var O,A=[];null!==(O=b(o,i))&&(E(A,O),y);){""===f(O[0])&&(o.lastIndex=g(i,d(o.lastIndex),h))}for(var P,R="",H=0,$=0;$<A.length;$++){for(var I,T=f((O=A[$])[0]),C=x(w(p(O.index),i.length),0),D=[],L=1;L<O.length;L++)E(D,void 0===(P=O[L])?P:String(P));var N=O.groups;if(v){var B=S([T],D,C,i);void 0!==N&&E(B,N),I=f(n(a,void 0,B))}else I=m(T,i,C,D,N,a);C>=H&&(R+=j(i,H,C)+I,H=C+T.length)}return R+j(i,H)}]}),!!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}))||!O||A)},8969:(e,t,r)=>{var n=r(7545),a=r(7473).trim;n({target:"String",proto:!0,forced:r(6002)("trim")},{trim:function(){return a(this)}})},5984:(e,t,r)=>{r.d(t,{rs:()=>H,Mv:()=>R,$A:()=>$});var n=r(7870),a=r(406);function l(e,t,...r){if(e in t){let n=t[e];return"function"==typeof n?n(...r):n}let n=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,l),n}var o=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(o||{}),i=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(i||{});function u({visible:e=!0,features:t=0,ourProps:r,theirProps:n,...a}){var o;let i=p(n,r),u=Object.assign(a,{props:i});if(e||2&t&&i.static)return s(u);if(1&t){return l(null==(o=i.unmount)||o?0:1,{0:()=>null,1:()=>s({...a,props:{...i,hidden:!0,style:{display:"none"}}})})}return s(u)}function s({props:e,attrs:t,slots:r,slot:a,name:l}){var o,i;let{as:u,...s}=f(e,["unmount","static"]),d=null==(o=r.default)?void 0:o.call(r,a),v={};if(a){let e=!1,t=[];for(let[r,n]of Object.entries(a))"boolean"==typeof n&&(e=!0),!0===n&&t.push(r);e&&(v["data-headlessui-state"]=t.join(" "))}if("template"===u){if(d=c(null!=d?d:[]),Object.keys(s).length>0||Object.keys(t).length>0){let[e,...r]=null!=d?d:[];if(!function(e){return null!=e&&("string"==typeof e.type||"object"==typeof e.type||"function"==typeof e.type)}(e)||r.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${l} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(s).concat(Object.keys(t)).map((e=>e.trim())).filter(((e,t,r)=>r.indexOf(e)===t)).sort(((e,t)=>e.localeCompare(t))).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));let a=p(null!=(i=e.props)?i:{},s),o=(0,n.Ho)(e,a);for(let e in a)e.startsWith("on")&&(o.props||(o.props={}),o.props[e]=a[e]);return o}return Array.isArray(d)&&1===d.length?d[0]:d}return(0,n.h)(u,Object.assign({},s,v),{default:()=>d})}function c(e){return e.flatMap((e=>e.type===n.HY?c(e.children):[e]))}function p(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},r={};for(let n of e)for(let e in n)e.startsWith("on")&&"function"==typeof n[e]?(null!=r[e]||(r[e]=[]),r[e].push(n[e])):t[e]=n[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(r).map((e=>[e,void 0]))));for(let e in r)Object.assign(t,{[e](t,...n){let a=r[e];for(let e of a){if(t instanceof Event&&t.defaultPrevented)return;e(t,...n)}}});return t}function d(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function f(e,t=[]){let r=Object.assign({},e);for(let e of t)e in r&&delete r[e];return r}let v=0;function g(){return++v}var h=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(h||{});let m=Symbol("LabelContext");function b(){let e=(0,n.f3)(m,null);if(null===e){let e=new Error("You used a <Label /> component, but it is not inside a parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,b),e}return e}function y({slot:e={},name:t="Label",props:r={}}={}){let l=(0,a.iH)([]);return(0,n.JJ)(m,{register:function(e){return l.value.push(e),()=>{let t=l.value.indexOf(e);-1!==t&&l.value.splice(t,1)}},slot:e,name:t,props:r}),(0,n.Fl)((()=>l.value.length>0?l.value.join(" "):void 0))}let x=(0,n.aZ)({name:"Label",props:{as:{type:[Object,String],default:"label"},passive:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-label-${g()}`}},setup(e,{slots:t,attrs:r}){let l=b();return(0,n.bv)((()=>(0,n.Ah)(l.register(e.id)))),()=>{let{name:n="Label",slot:o={},props:i={}}=l,{id:s,passive:c,...p}=e,d={...Object.entries(i).reduce(((e,[t,r])=>Object.assign(e,{[t]:(0,a.SU)(r)})),{}),id:s};return c&&(delete d.onClick,delete d.htmlFor,delete p.onClick),u({ourProps:d,theirProps:p,slot:o,attrs:r,slots:t,name:n})}}}),w=Symbol("DescriptionContext");function S({slot:e=(0,a.iH)({}),name:t="Description",props:r={}}={}){let l=(0,a.iH)([]);return(0,n.JJ)(w,{register:function(e){return l.value.push(e),()=>{let t=l.value.indexOf(e);-1!==t&&l.value.splice(t,1)}},slot:e,name:t,props:r}),(0,n.Fl)((()=>l.value.length>0?l.value.join(" "):void 0))}(0,n.aZ)({name:"Description",props:{as:{type:[Object,String],default:"p"},id:{type:String,default:()=>`headlessui-description-${g()}`}},setup(e,{attrs:t,slots:r}){let l=function(){let e=(0,n.f3)(w,null);if(null===e)throw new Error("Missing parent");return e}();return(0,n.bv)((()=>(0,n.Ah)(l.register(e.id)))),()=>{let{name:n="Description",slot:o=(0,a.iH)({}),props:i={}}=l,{id:s,...c}=e,p={...Object.entries(i).reduce(((e,[t,r])=>Object.assign(e,{[t]:(0,a.SU)(r)})),{}),id:s};return u({ourProps:p,theirProps:c,slot:o.value,attrs:t,slots:r,name:n})}}});function E(e){var t;return null==e||null==e.value?null:null!=(t=e.value.$el)?t:e.value}function k(e,t){if(e)return e;let r=null!=t?t:"button";return"string"==typeof r&&"button"===r.toLowerCase()?"button":void 0}function j(e,t){let r=(0,a.iH)(k(e.value.type,e.value.as));return(0,n.bv)((()=>{r.value=k(e.value.type,e.value.as)})),(0,n.m0)((()=>{var e;r.value||E(t)&&E(t)instanceof HTMLButtonElement&&(null==(e=E(t))||!e.hasAttribute("type"))&&(r.value="button")})),r}var O=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(O||{});let A=(0,n.aZ)({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup:(e,{slots:t,attrs:r})=>()=>{let{features:n,...a}=e;return u({ourProps:{"aria-hidden":2==(2&n)||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...4==(4&n)&&2!=(2&n)&&{display:"none"}}},theirProps:a,slot:{},attrs:r,slots:t,name:"Hidden"})}});let P=Symbol("GroupContext"),R=(0,n.aZ)({name:"SwitchGroup",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:t,attrs:r}){let l=(0,a.iH)(null),o=y({name:"SwitchLabel",props:{htmlFor:(0,n.Fl)((()=>{var e;return null==(e=l.value)?void 0:e.id})),onClick(e){l.value&&("LABEL"===e.currentTarget.tagName&&e.preventDefault(),l.value.click(),l.value.focus({preventScroll:!0}))}}}),i=S({name:"SwitchDescription"});return(0,n.JJ)(P,{switchRef:l,labelledby:o,describedby:i}),()=>u({theirProps:e,ourProps:{},slot:{},slots:t,attrs:r,name:"SwitchGroup"})}}),H=(0,n.aZ)({name:"Switch",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},form:{type:String,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:()=>`headlessui-switch-${g()}`}},inheritAttrs:!1,setup(e,{emit:t,attrs:r,slots:l,expose:o}){let i=(0,n.f3)(P,null),[s,c]=function(e,t,r){let l=(0,a.iH)(null==r?void 0:r.value),o=(0,n.Fl)((()=>void 0!==e.value));return[(0,n.Fl)((()=>o.value?e.value:l.value)),function(e){return o.value||(l.value=e),null==t?void 0:t(e)}]}((0,n.Fl)((()=>e.modelValue)),(e=>t("update:modelValue",e)),(0,n.Fl)((()=>e.defaultChecked)));function p(){c(!s.value)}let v=(0,a.iH)(null),g=null===i?v:i.switchRef,m=j((0,n.Fl)((()=>({as:e.as,type:r.type}))),g);function b(e){e.preventDefault(),p()}function y(e){e.key===h.Space?(e.preventDefault(),p()):e.key===h.Enter&&function(e){var t,r;let n=null!=(t=null==e?void 0:e.form)?t:e.closest("form");if(n){for(let t of n.elements)if(t!==e&&("INPUT"===t.tagName&&"submit"===t.type||"BUTTON"===t.tagName&&"submit"===t.type||"INPUT"===t.nodeName&&"image"===t.type))return void t.click();null==(r=n.requestSubmit)||r.call(n)}}(e.currentTarget)}function x(e){e.preventDefault()}o({el:g,$el:g});let w=(0,n.Fl)((()=>{var e,t;return null==(t=null==(e=E(g))?void 0:e.closest)?void 0:t.call(e,"form")}));return(0,n.bv)((()=>{(0,n.YP)([w],(()=>{if(w.value&&void 0!==e.defaultChecked)return w.value.addEventListener("reset",t),()=>{var e;null==(e=w.value)||e.removeEventListener("reset",t)};function t(){c(e.defaultChecked)}}),{immediate:!0})})),()=>{let{id:t,name:a,value:o,form:c,...p}=e,v={checked:s.value},h={id:t,ref:g,role:"switch",type:m.value,tabIndex:0,"aria-checked":s.value,"aria-labelledby":null==i?void 0:i.labelledby.value,"aria-describedby":null==i?void 0:i.describedby.value,onClick:b,onKeyup:y,onKeypress:x};return(0,n.h)(n.HY,[null!=a&&null!=s.value?(0,n.h)(A,d({features:O.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:s.value,form:c,name:a,value:o})):null,u({ourProps:h,theirProps:{...r,...f(p,["modelValue","defaultChecked"])},slot:v,attrs:r,slots:l,name:"Switch"})])}}}),$=x},1603:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7870),a=r(406);const l=(0,n.aZ)({__name:"contenteditable",props:{tag:String,contenteditable:{type:[Boolean,String],default:!0},modelValue:String,noHtml:{type:Boolean,default:!0},noNl:{type:Boolean,default:!1}},emits:{returned:String,"update:modelValue":String},setup(e,{emit:t}){const r=e;function l(e,t,r){return e.split(t).join(r)}const o=(0,a.iH)();function i(){return r.noHtml?o.value.innerText:o.value.innerHTML}function u(e){r.noHtml?o.value.innerText=e:o.value.innerHTML=e}function s(e){t("update:modelValue",i())}function c(e){e.preventDefault();let t=(e.originalEvent||e).clipboardData.getData("text/plain");r.noNl&&(t=l(t,"\r\n"," "),t=l(t,"\n"," "),t=l(t,"\r"," ")),window.document.execCommand("insertText",!1,t)}function p(e){"Enter"==e.key&&r.noNl&&(e.preventDefault(),t("returned",i()))}return(0,n.bv)((()=>{var e;u(null!=(e=r.modelValue)?e:"")})),(0,n.YP)((()=>r.modelValue),((e,t)=>{e!=i()&&u(null!=e?e:"")})),(0,n.YP)((()=>r.noHtml),((e,t)=>{var n;u(null!=(n=r.modelValue)?n:"")})),(0,n.YP)((()=>r.tag),((e,t)=>{var n;u(null!=(n=r.modelValue)?n:"")}),{flush:"post"}),(t,r)=>((0,n.wg)(),(0,n.j4)((0,n.LL)(e.tag),{contenteditable:e.contenteditable,onInput:s,onBlur:s,onPaste:c,onKeypress:p,ref_key:"element",ref:o},null,40,["contenteditable"]))}})}}]);