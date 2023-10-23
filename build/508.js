/*! For license information please see 508.js.LICENSE.txt */
"use strict";(self.webpackChunkyabe_webfont_src=self.webpackChunkyabe_webfont_src||[]).push([[508],{8156:e=>{function t(e,t,n,a,o,r){var i=Math.round(Math.abs(e)/t);return r?i<=1?o:"in "+i+" "+n+"s":i<=1?a:i+" "+n+"s ago"}var n=[{max:276e4,value:6e4,name:"minute",past:"a minute ago",future:"in a minute"},{max:72e6,value:36e5,name:"hour",past:"an hour ago",future:"in an hour"},{max:5184e5,value:864e5,name:"day",past:"yesterday",future:"tomorrow"},{max:24192e5,value:6048e5,name:"week",past:"last week",future:"in a week"},{max:28512e6,value:2592e6,name:"month",past:"last month",future:"in a month"}];e.exports=function(e,a){var o=Date.now()-e.getTime();if(Math.abs(o)<6e4)return"just now";for(var r=0;r<n.length;r++)if(Math.abs(o)<n[r].max||a&&n[r].name===a)return t(o,n[r].value,n[r].name,n[r].past,n[r].future,o<0);return t(o,31536e6,"year","last year","in a year",o<0)}},3750:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ne});n(2027),n(3146),n(5545),n(3090),n(8098),n(8327),n(1923),n(2837),n(1573),n(7179),n(7834),n(7422),n(3902),n(6636),n(8969),n(5407),n(907),n(1379),n(7623),n(5539),n(3470),n(8239),n(5142),n(5670),n(1509),n(1388),n(9657),n(8523),n(9450),n(9356),n(359),n(203),n(6199),n(7996),n(3290);var a=n(7870),o=n(5929),r=n(406),i=n(2536),l=n(6318),s=n(7867),u=n(3801),c=n(279),d=n(6133),f=n(8156),p=n.n(f),m=n(8913),v=n(3632),h=n(4737),y=n(165),w=n(4439),g=n(6523),b=n(587),x=n(2407),_=n(5984);function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function S(){S=function(){return t};var e,t={},n=Object.prototype,a=n.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",l=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function c(e,t,n,a){var r=t&&t.prototype instanceof y?t:y,i=Object.create(r.prototype),l=new j(a||[]);return o(i,"_invoke",{value:U(e,n,l)}),i}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=c;var f="suspendedStart",p="suspendedYield",m="executing",v="completed",h={};function y(){}function w(){}function g(){}var b={};u(b,i,(function(){return this}));var x=Object.getPrototypeOf,_=x&&x(x(T([])));_&&_!==n&&a.call(_,i)&&(b=_);var L=g.prototype=y.prototype=Object.create(b);function F(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function z(e,t){function n(o,r,i,l){var s=d(e[o],e,r);if("throw"!==s.type){var u=s.arg,c=u.value;return c&&"object"==k(c)&&a.call(c,"__await")?t.resolve(c.__await).then((function(e){n("next",e,i,l)}),(function(e){n("throw",e,i,l)})):t.resolve(c).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,l)}))}l(s.arg)}var r;o(this,"_invoke",{value:function(e,a){function o(){return new t((function(t,o){n(e,a,t,o)}))}return r=r?r.then(o,o):o()}})}function U(t,n,a){var o=f;return function(r,i){if(o===m)throw new Error("Generator is already running");if(o===v){if("throw"===r)throw i;return{value:e,done:!0}}for(a.method=r,a.arg=i;;){var l=a.delegate;if(l){var s=E(l,a);if(s){if(s===h)continue;return s}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(o===f)throw o=v,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);o=m;var u=d(t,n,a);if("normal"===u.type){if(o=a.done?v:p,u.arg===h)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(o=v,a.method="throw",a.arg=u.arg)}}}function E(t,n){var a=n.method,o=t.iterator[a];if(o===e)return n.delegate=null,"throw"===a&&t.iterator.return&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method)||"return"!==a&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+a+"' method")),h;var r=d(o,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,h;var i=r.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,h):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function M(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(M,this),this.reset(!0)}function T(t){if(t||""===t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,r=function n(){for(;++o<t.length;)if(a.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return r.next=r}}throw new TypeError(k(t)+" is not iterable")}return w.prototype=g,o(L,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:w,configurable:!0}),w.displayName=u(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,s,"GeneratorFunction")),e.prototype=Object.create(L),e},t.awrap=function(e){return{__await:e}},F(z.prototype),u(z.prototype,l,(function(){return this})),t.AsyncIterator=z,t.async=function(e,n,a,o,r){void 0===r&&(r=Promise);var i=new z(c(e,n,a,o),r);return t.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},F(L),u(L,s,"Generator"),u(L,i,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},t.values=T,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(a,o){return l.type="throw",l.arg=t,n.next=a,o&&(n.method="next",n.arg=e),!!o}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],l=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&a.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}}r&&("break"===e||"continue"===e)&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var i=r?r.completion:{};return i.type=e,i.arg=t,r?(this.method="next",this.next=r.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),C(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var o=a.arg;C(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,a){return this.delegate={iterator:T(t),resultName:n,nextLoc:a},"next"===this.method&&(this.arg=e),h}},t}function L(e,t,n,a,o,r,i){try{var l=e[r](i),s=l.value}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(a,o)}function F(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var r=e.apply(t,n);function i(e){L(r,a,o,i,l,"next",e)}function l(e){L(r,a,o,i,l,"throw",e)}i(void 0)}))}}var z={class:"mr-2 text-2xl"},U={id:"poststuff"},E={id:"post-body-content"},M={id:"titlediv"},C={id:"titlewrap"},j=(0,a._)("label",{class:"screen-reader-text",for:"title"},"Add title",-1),T=["placeholder"],P=(0,a._)("div",{class:"inside"},null,-1),V={class:"postarea wp-editor-expand"},D={id:"wp-content-wrap",class:"wp-core-ui mt-8"},q=(0,a._)("h3",null,"Meta",-1),H={class:"grid grid-cols-12 gap-4"},O={class:"col-span-4 flex flex-col gap-1.5"},A=(0,a._)("label",{for:"family",class:"text-sm font-semibold"},"Font Family",-1),G={class:"col-span-2 flex flex-col gap-1.5"},Y=(0,a._)("label",{for:"display",class:"text-sm font-semibold"},"Font Display",-1),I=[(0,a.uE)('<option value="auto">auto</option><option value="block">block</option><option value="swap">swap</option><option value="fallback">fallback</option><option value="optional">optional</option>',5)],N={class:"col-span-4 flex flex-col gap-1.5"},W=(0,a._)("label",{for:"selector",class:"text-sm font-semibold"},"CSS Selector | Fallback Font",-1),Z={class:"col-span-2 flex flex-col gap-1.5"},B=(0,a._)("span",{class:"text-sm font-semibold"},"Preload",-1),J={class:"flex-1 flex items-center"},R={for:"preload",class:"text-sm"},Q={class:"flex items-center space-x-2 mt-8 mb-3"},$={class:"flex-1"},K=(0,a._)("path",{d:"M410.7 38c8.3 6 13.3 15.7 13.3 26v96h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H392 344c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V108.4l-5.9 2c-16.8 5.6-34.9-3.5-40.5-20.2s3.5-34.9 20.2-40.5l48-16c9.8-3.3 20.5-1.6 28.8 4.4zM120 32c9 0 17.5 3.8 23.6 10.4l88 96c11.9 13 11.1 33.3-2 45.2s-33.3 11.1-45.2-2L152 146.3V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V146.3L55.6 181.6c-11.9 13-32.2 13.9-45.2 2s-13.9-32.2-2-45.2l88-96C102.5 35.8 111 32 120 32zM405.7 364.9A32 32 0 1 0 378.3 307a32 32 0 1 0 27.4 57.9zm-40.7 54.9C329.6 408.4 304 375.2 304 336c0-48.6 39.4-88 88-88s88 39.4 88 88c0 23.5-7.5 46.3-21.5 65.2L409.7 467c-10.5 14.2-30.6 17.2-44.8 6.7s-17.2-30.6-6.7-44.8l6.8-9.2z"},null,-1),X={class:"font-files"},ee={class:"grid gap-4"},te={id:"postbox-container-1",class:"postbox-container"},ne={id:"submitdiv",class:"postbox"},ae=(0,a._)("div",{class:"postbox-header"},[(0,a._)("h2",{class:""},"Publish")],-1),oe={class:"inside"},re={class:"submitbox",id:"submitpost"},ie={id:"minor-publishing"},le={id:"misc-publishing-actions"},se={class:"misc-pub-section"},ue={class:"py-1.5 flex items-center"},ce={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",class:"h-4 w-4 shrink-0 text-[#8c8f94] fill-current"},de={key:0,d:"M117.8 128H207C286.9-3.7 409.5-8.5 483.9 5.3c11.6 2.2 20.7 11.2 22.8 22.8c13.8 74.4 9 197-122.7 276.9v89.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9l0-114.7c0-22.6-9-44.3-25-60.3s-37.7-25-60.3-25H24c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3zM424 128c0-22.1-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40s40-17.9 40-40zM166.5 470C117 519.5 .5 511.5 .5 511.5s-8-116.5 41.5-166c34.4-34.4 90.1-34.4 124.5 0s34.4 90.1 0 124.5zm-46.7-36.4c11.4-11.4 11.4-30 0-41.4s-30-11.4-41.4 0c-16.5 16.5-13.8 55.2-13.8 55.2s38.7 2.7 55.2-13.8z"},fe={key:1,d:"M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z"},pe=(0,a._)("span",{class:"pl-2.5 pr-2"},"Status:",-1),me=[(0,a._)("svg",{class:"h-3 w-3 text-gray-400",fill:"none",viewBox:"0 0 12 12"},[(0,a._)("path",{d:"M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)],ve=[(0,a._)("svg",{class:"h-3 w-3 text-sky-600",fill:"currentColor",viewBox:"0 0 12 12"},[(0,a._)("path",{d:"M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"})],-1)],he=(0,a._)("div",{class:"clear"},null,-1),ye={id:"major-publishing-actions"},we={id:"delete-action"},ge={id:"publishing-action"},be=["disabled"],xe=(0,a._)("div",{class:"clear"},null,-1),_e={class:"flex flex-col space-y-2 border border-solid py-2 px-2 !border-gray-300"},ke=(0,a._)("div",{class:"font-semibold text-base"},"Preview :",-1),Se={class:"h-fit flex rounded-md shadow-sm"},Le=(0,a._)("span",{class:"inline-flex items-center rounded-l-md border border-solid !border-r-0 !border-gray-300 bg-gray-50 px-3 text-gray-500 !text-xs"},"width",-1),Fe=["min","max"],ze=["min","max"],Ue={class:"h-fit flex rounded-md shadow-sm"},Ee=(0,a._)("span",{class:"inline-flex items-center rounded-l-md border border-solid !border-r-0 !border-gray-300 bg-gray-50 px-3 text-gray-500 !text-xs"},"weight",-1),Me=["min","max"],Ce=["min","max"],je={class:"h-fit flex rounded-md shadow-sm"},Te=(0,a._)("span",{class:"inline-flex items-center rounded-l-md border border-solid !border-r-0 !border-gray-300 bg-gray-50 px-3 text-gray-500 !text-xs"},"size",-1),Pe={class:"h-fit flex items-stretch relative rounded-md shadow-sm"},Ve=(0,a._)("div",{class:"absolute inset-y-0 right-0 flex py-1 pr-1.5"},[(0,a._)("kbd",{class:"inline-flex items-center rounded border border-gray-200 px-1 text-gray-500"},"px")],-1),De={id:"postbox-container-2",class:"postbox-container mt-3"},qe={key:0,class:"mt-4"},He=(0,a._)("h3",{class:"mt-5"},"CSS Preview",-1),Oe={id:"post-status-info",class:"border border-solid border-[#c3c4c7]"},Ae={class:"pl-2"},Ge=["title"],Ye={class:"autosave-info"},Ie=["title"];const Ne={__name:"Edit",setup:function(e){var t=(0,s.yj)(),n=(0,s.tv)(),f=(0,v.h)(),k=(0,y.j)(),L=(0,h.k)(),Ne=(0,g.V)(),We=(0,w.y)(),Ze=(0,l.Jk)(We).fontFaces,Be=(0,r.iH)(""),Je=(0,r.iH)(""),Re=(0,r.iH)("auto"),Qe=(0,r.iH)(""),$e=(0,r.iH)(!1),Ke=(0,r.iH)(!0),Xe=(0,r.iH)({}),et=(0,r.iH)(!1);(0,a.YP)(Je,(function(e,t){""!==Be.value&&Be.value!==t||(Be.value=e)}));var tt=function(){We.add()},nt=(0,r.qj)({text:"The quick brown fox jumps over a lazy dog",fontSize:18,lineHeight:1.5,fontFamily:Je,weight:{current:400,min:1,max:1e3},width:{current:100,min:25,max:200}});function at(){Ze.value.sort((function(e,t){return e.weight===t.weight?"normal"===e.style?-1:1:e.weight-t.weight}))}(0,a.JJ)("fontFamily",Je);var ot,rt=(0,a.Fl)((function(){var e="";return Je.value&&Ze.value.forEach((function(t){if(t.comment&&(e+="/* ".concat(t.comment," */\n")),e+="@font-face {\n",e+="\tfont-family: '".concat(Je.value,"';\n"),e+="\tfont-style: ".concat(t.style,";\n"),""!==t.weight&&(e+="\tfont-weight: ".concat(t.weight,";\n")),t.width&&""!==t.width?e+="\tfont-stretch: ".concat(t.width,";\n"):e+="\tfont-stretch: 100%;\n",e+="\tfont-display: ".concat(t.display||Re.value,";\n"),t.files.length>0){e+="\tsrc: ";var n=t.files.map((function(e){var t=e.attachment_url;try{t=new URL(e.attachment_url).pathname}catch(e){}return"url('".concat(t,"') format(\"").concat(function(e){switch(e){case"woff2":case"font/woff2":default:return"woff2";case"woff":case"font/woff":return"woff";case"ttf":case"font/ttf":return"truetype";case"otf":case"font/otf":return"opentype";case"eot":case"font/eot":return"embedded-opentype"}}(e.extension),'")')}));e+=n.join(",\n\t\t"),e+=";\n"}t.unicodeRange&&(e+="\tunicode-range: ".concat(t.unicodeRange,";\n")),e+="}\n\n"})),e})),it=(0,a.Fl)((function(){var e="";if(!Je.value)return e;e+="\n",e+=rt.value;var t=Je.value.replace(/[^a-zA-Z0-9\-_]+/g,"-").toLowerCase(),n="",a=[];return Qe.value&&(a=Qe.value.split("|").map((function(e){return e.trim()}))),a.length>1&&a[1]&&(n=", ".concat(a[1])),e+=":root {\n",e+="\t--ywf--family-".concat(t,": '").concat(Je.value,"'").concat(n,";\n"),e+="}\n\n",a.length>0&&a[0]&&(e+="".concat(a[0]," {\n\tfont-family: var(--ywf--family-").concat(t,");\n}\n\n")),Ze.value.forEach((function(n){n.selector&&(e+="".concat(n.selector," {\n"),e+="\tfont-family: var(--ywf--family-".concat(t,");\n"),e+="\tfont-style: ".concat(n.style,";\n"),e+="\tfont-weight: ".concat(n.weight,";\n"),e+="}\n\n")})),e=(e=e.replace(/\t/g,"  ")).replace(/<family>/g,Je.value)}));function lt(){confirm((0,m.__)("Are you sure you want to delete the font?","yabe-webfont"))&&(et.value=!0,k.add("fonts.edit.custom:delete"),f.request({method:"POST",url:"/fonts/delete/".concat(Xe.value.id)}).then((function(e){n.push({name:"fonts.index"})})).catch((function(e){L.alert(e.message)})).finally((function(){et.value=!1,k.remove("fonts.edit.custom:delete")})))}function st(){return ut.apply(this,arguments)}function ut(){return(ut=F(S().mark((function e(){return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k.add("fonts.edit.custom:fetch-item"),e.abrupt("return",f.request({method:"GET",url:"/fonts/detail/".concat(t.params.id)}).then((function(e){return e.data})).then((function(e){Je.value=e.family,Be.value=e.title,Re.value=e.metadata.display,Qe.value=e.metadata.selector,$e.value=e.metadata.preload,Ke.value=e.status,Ze.value=(0,d.Z)(e.font_faces),Xe.value=e})).finally((function(){k.remove("fonts.edit.custom:fetch-item")})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ct(e){e.preventDefault(),k.add("fonts.edit.custom:send-form");var t=f.request({method:"POST",url:"/fonts/custom/update/".concat(Xe.value.id),data:{title:Be.value,family:Je.value,status:Ke.value,font_faces:Ze.value,metadata:{preload:$e.value,selector:Qe.value,display:Re.value}}}).then((function(e){Ne.add({type:"success",message:"<p>Font updated successfully.</p>"}),st()})).finally((function(){k.remove("fonts.edit.custom:send-form")}));L.async(t,"Font updated successfully.",void 0,"Updating the font...")}(0,a.YP)(rt,(0,u.Z)((function(e,t){ot&&(ot.innerHTML=e.replace(/\t/g,"  "))}),1e3)),(0,a.wF)(F(S().mark((function e(){var t;return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=st(),L.async(t,"Font details loaded.",(function(e){L.alert(e.response&&404===e.response.status?"Font not found.":"Failed to load font details."),n.go(-1)}),"Fetching font details..."),(ot=document.querySelector("#yabe-webfont-preview"))||((ot=document.createElement("style")).setAttribute("id","yabe-webfont-preview"),document.head.appendChild(ot));case 4:case"end":return e.stop()}}),e)}))));var dt=(0,a.Fl)((function(){return!!Xe.value&&(Be.value!==Xe.value.title||Je.value!==Xe.value.family||Ke.value!==Xe.value.status||Re.value!==Xe.value.metadata.display||Qe.value!==Xe.value.metadata.selector||$e.value!==Xe.value.metadata.preload||!(0,c.Z)(Ze.value,Xe.value.font_faces))})),ft=(0,r.iH)(null);return(0,a.YP)(dt,(function(e,t){e&&!ft.value?ft.value=Ne.add({type:"warning",message:"<p>You have unsaved changes.</p>"}):(Ne.remove(ft.value),ft.value=null)})),(0,s.iS)((function(e,t,n){dt.value&&!confirm((0,m.__)("You have unsaved changes. Are you sure you want to leave?","yabe-webfont"))||n()})),window.onbeforeunload=function(e){if(dt.value)return(0,m.__)("You have unsaved changes. Are you sure you want to leave?","yabe-webfont")},(0,a.Jd)((function(){window.onbeforeunload=null,ft.value&&Ne.remove(ft.value),ot&&document.head.removeChild(ot)})),function(e,t){var n=(0,a.up)("Draggable"),l=(0,a.up)("highlightjs"),s=(0,a.Q2)("ripple");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("span",z,"» "+(0,o.toDisplayString)((0,r.SU)(m.__)("Edit","yabe-webfont")),1),(0,a._)("div",U,[(0,a._)("form",{id:"post-body",onSubmit:ct,class:"metabox-holder columns-2 !columns-auto"},[(0,a._)("div",E,[(0,a._)("div",M,[(0,a._)("div",C,[j,(0,a.wy)((0,a._)("input",{type:"text",name:"title",id:"title",size:"30",required:"","onUpdate:modelValue":t[0]||(t[0]=function(e){return Be.value=e}),placeholder:(0,r.SU)(m.__)("Title","yabe-webfont"),autocomplete:"off"},null,8,T),[[i.vModelText,Be.value]])]),P]),(0,a.kq)(" /titlediv "),(0,a._)("div",V,[(0,a._)("div",D,[q,(0,a._)("div",H,[(0,a._)("div",O,[A,(0,a.wy)((0,a._)("input",{type:"text",name:"family",id:"family","onUpdate:modelValue":t[1]||(t[1]=function(e){return Je.value=e}),required:"",placeholder:"Font Family",autocomplete:"off"},null,512),[[i.vModelText,Je.value]])]),(0,a._)("div",G,[Y,(0,a.wy)((0,a._)("select",{name:"display",id:"display","onUpdate:modelValue":t[2]||(t[2]=function(e){return Re.value=e}),class:"capitalize [&_option]:capitalize"},I,512),[[i.vModelSelect,Re.value]])]),(0,a._)("div",N,[W,(0,a.wy)((0,a._)("input",{type:"text",name:"selector",id:"selector","onUpdate:modelValue":t[3]||(t[3]=function(e){return Qe.value=e}),placeholder:"h1, .title, #lyric | Arial, Helvetica, sans-serif",autocomplete:"off"},null,512),[[i.vModelText,Qe.value]])]),(0,a._)("div",Z,[B,(0,a._)("div",J,[(0,a._)("label",R,[(0,a.wy)((0,a._)("input",{type:"checkbox",name:"preload",id:"preload","onUpdate:modelValue":t[4]||(t[4]=function(e){return $e.value=e})},null,512),[[i.vModelCheckbox,$e.value]]),(0,a.Uk)(" Preload files ")])])])]),(0,a._)("div",Q,[(0,a._)("h3",$,[(0,a.Uk)(" Variants "),((0,a.wg)(),(0,a.iD)("svg",{onClick:at,title:"Sort variants",class:"w-4 h-4 ml-1 cursor-pointer",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[(0,a.kq)("! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. "),K]))]),(0,a.Wm)(x.Z,{"font-faces":(0,r.SU)(Ze),family:Je.value},null,8,["font-faces","family"]),(0,a.wy)(((0,a.wg)(),(0,a.iD)("button",{type:"button",onClick:tt,class:"button my-4"},[(0,a.Uk)("Add variant")])),[[s]])]),(0,a._)("div",X,[(0,a._)("div",ee,[(0,a.Wm)(n,{modelValue:(0,r.SU)(Ze),"onUpdate:modelValue":t[5]||(t[5]=function(e){return(0,r.dq)(Ze)?Ze.value=e:null}),tag:"transition-group","item-key":"id","component-data":{name:"font-face"},"ghost-class":"dragged-placeholder",animation:"200"},{item:(0,a.w5)((function(e){var t=e.element;return[(0,a._)("div",null,[(0,a.Wm)(b.Z,{item:t,preview:nt,"font-family":Je.value},null,8,["item","preview","font-family"])])]})),_:1},8,["modelValue"])])])])])]),(0,a.kq)(" /post-body-content "),(0,a._)("div",te,[(0,a._)("div",null,[(0,a._)("div",ne,[ae,(0,a._)("div",oe,[(0,a._)("div",re,[(0,a._)("div",ie,[(0,a._)("div",le,[(0,a._)("div",se,[(0,a.kq)(" Font Info: Publish Status "),(0,a._)("div",ue,[((0,a.wg)(),(0,a.iD)("svg",ce,[(0,a.kq)("! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. "),Ke.value?((0,a.wg)(),(0,a.iD)("path",de)):((0,a.wg)(),(0,a.iD)("path",fe))])),pe,(0,a.Wm)((0,r.SU)(_.Mv),{as:"div",class:(0,o.normalizeClass)([{"opacity-50":!Ke.value},"flex items-center"])},{default:(0,a.w5)((function(){return[(0,a.kq)(" Font Info: Publish Status "),(0,a.Wm)((0,r.SU)(_.rs),{modelValue:Ke.value,"onUpdate:modelValue":t[6]||(t[6]=function(e){return Ke.value=e}),class:(0,o.normalizeClass)([[Ke.value?"bg-sky-600":"bg-gray-200"],"relative inline-flex p-0 h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"])},{default:(0,a.w5)((function(){return[(0,a._)("span",{class:(0,o.normalizeClass)([[Ke.value?"translate-x-5":"translate-x-0"],"pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"])},[(0,a._)("span",{"aria-hidden":"true",class:(0,o.normalizeClass)([[Ke.value?"opacity-0 ease-out duration-100":"opacity-100 ease-in duration-200"],"absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"])},me,2),(0,a._)("span",{"aria-hidden":"true",class:(0,o.normalizeClass)([[Ke.value?"opacity-100 ease-in duration-200":"opacity-0 ease-out duration-100"],"absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"])},ve,2)],2)]})),_:1},8,["modelValue","class"]),(0,a.Wm)((0,r.SU)(_.$A),{as:"span",class:(0,o.normalizeClass)([[Ke.value?"text-black":"text-gray-500"],"ml-2 font-medium cursor-pointer"])},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,o.toDisplayString)(Ke.value?"published":"draft"),1)]})),_:1},8,["class"])]})),_:1},8,["class"])])])]),he]),(0,a._)("div",ye,[(0,a._)("div",we,[(0,a._)("a",{class:(0,o.normalizeClass)([{"cursor-wait":(0,r.SU)(k).isBusy},"text-red-700 underline cursor-pointer hover:text-red-800"]),onClick:lt},(0,o.toDisplayString)(et.value?"Deleting...":"Trash"),3)]),(0,a._)("div",ge,[(0,a._)("button",{type:"submit",name:"save",id:"save",disabled:(0,r.SU)(k).isBusy,class:"button button-primary button-large",value:"save"},"Save",8,be)]),xe])])])])]),(0,a._)("div",null,[(0,a._)("div",_e,[ke,(0,a._)("div",Se,[Le,(0,a.wy)((0,a._)("input",{type:"number","onUpdate:modelValue":t[7]||(t[7]=function(e){return nt.width.current=e}),min:nt.width.min,max:nt.width.max,class:"!block !min-w-0 w-16 !min-h-0 !h-6 !mx-0 !py-0 !px-2 !border !border-solid !rounded-none !rounded-r-md !border-gray-300 !text-xs"},null,8,Fe),[[i.vModelText,nt.width.current]]),(0,a.wy)((0,a._)("input",{type:"range","onUpdate:modelValue":t[8]||(t[8]=function(e){return nt.width.current=e}),min:nt.width.min,max:nt.width.max,class:"flex-1 !appearance-none !accent-[#0050FF] !h-1 self-center"},null,8,ze),[[i.vModelText,nt.width.current]])]),(0,a._)("div",Ue,[Ee,(0,a.wy)((0,a._)("input",{type:"number","onUpdate:modelValue":t[9]||(t[9]=function(e){return nt.weight.current=e}),min:nt.weight.min,max:nt.weight.max,class:"!block !min-w-0 w-16 !min-h-0 !h-6 !mx-0 !py-0 !px-2 !border !border-solid !rounded-none !rounded-r-md !border-gray-300 !text-xs"},null,8,Me),[[i.vModelText,nt.weight.current]]),(0,a.wy)((0,a._)("input",{type:"range","onUpdate:modelValue":t[10]||(t[10]=function(e){return nt.weight.current=e}),min:nt.weight.min,max:nt.weight.max,class:"flex-1 !appearance-none !accent-[#0050FF] !h-1 self-center"},null,8,Ce),[[i.vModelText,nt.weight.current]])]),(0,a._)("div",je,[Te,(0,a._)("div",Pe,[(0,a.wy)((0,a._)("input",{type:"number","onUpdate:modelValue":t[11]||(t[11]=function(e){return nt.fontSize=e}),class:"!block !min-w-0 w-16 !min-h-0 !h-6 !mx-0 !py-0 !px-2 !border !border-solid !rounded-none !rounded-r-md !border-gray-300 !text-xs"},null,512),[[i.vModelText,nt.fontSize]]),Ve]),(0,a.wy)((0,a._)("input",{type:"range","onUpdate:modelValue":t[12]||(t[12]=function(e){return nt.fontSize=e}),max:"200",class:"flex-1 !appearance-none !accent-[#0050FF] !h-1 self-center"},null,512),[[i.vModelText,nt.fontSize]])])])])]),(0,a._)("div",De,[(0,a.Wm)(i.Transition,{name:"css-preview"},{default:(0,a.w5)((function(){return[it.value?((0,a.wg)(),(0,a.iD)("div",qe,[He,(0,a.Wm)(l,{language:"css",code:it.value},null,8,["code"])])):(0,a.kq)("v-if",!0)]})),_:1}),(0,a._)("div",null,[(0,a._)("table",Oe,[(0,a._)("tbody",null,[(0,a._)("tr",null,[(0,a._)("td",Ae,[(0,a.Uk)(" ID: "),(0,a._)("span",{title:Xe.value.slug},(0,o.toDisplayString)(Xe.value.id),9,Ge)]),(0,a._)("td",Ye,[(0,a.Uk)(" Last edited on "),(0,a._)("span",{title:new Date(1e3*Xe.value.updated_at),class:"underline decoration-dotted text-gray-700"},(0,o.toDisplayString)((0,r.SU)(p())(new Date(1e3*Xe.value.updated_at))),9,Ie)])])])])])])],32)])],64)}}}},279:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(9216);const o=function(e,t){return(0,a.Z)(e,t)}}}]);