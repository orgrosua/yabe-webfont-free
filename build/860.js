"use strict";(self.webpackChunkyabe_webfont_src=self.webpackChunkyabe_webfont_src||[]).push([[860],{5339:(e,t,n)=>{n.d(t,{h:()=>i});n(4107);var o=n(3800);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.Z.create(Object.assign({baseURL:yabeWebfont.rest_api.url,headers:{"content-type":"application/json",accept:"application/json","X-WP-Nonce":yabeWebfont.rest_api.nonce}},e))}},4071:(e,t,n)=>{n.d(t,{k:()=>f});n(4107);var o=n(2602),i=n.n(o);const r=n.p+"images/gear-solid.45ca6482.svg";var a=n(6371);const l=n.p+"images/circle-question-solid.ed2fb881.svg";var s=n(9856);const c=n.p+"images/circle-exclamation-solid.c83a4c59.svg";var u=n(5284),d=n(5868);function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new(i())(Object.assign({icons:{prefix:"",suffix:"",tip:'<img class="icon-tip" src="'.concat((0,d.u)(l),'"/>'),async:'<img class="icon-async" src="'.concat((0,d.u)(r),'"/>'),info:'<img class="icon-info" src="'.concat((0,d.u)(s),'"/>'),success:'<img class="icon-success" src="'.concat((0,d.u)(a),'"/>'),warning:'<img class="icon-warning" src="'.concat((0,d.u)(c),'"/>'),alert:'<img class="icon-alert" src="'.concat((0,d.u)(u),'"/>')}},e))}},5244:(e,t,n)=>{n.d(t,{j:()=>o});n(6921),n(8469),n(3532),n(8592),n(8961),n(5456);var o=(0,n(9331).Q_)("busy",{state:function(){return{tasks:[]}},actions:{add:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.tasks.unshift({timestamp:Date.now(),task:e})},remove:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=!1;this.tasks=this.tasks.filter((function(n){return!!t||(n.task!==e||(t=!0,!1))}))},reset:function(){this.tasks=[]}},getters:{isBusy:function(e){return e.tasks.length>0},hasTask:function(e){return function(t){return e.tasks.some((function(e){return e.task===t}))}}}})},1110:(e,t,n)=>{n.d(t,{Z:()=>d});n(4650),n(5764),n(267),n(54),n(1950),n(7492),n(8700),n(2305),n(1331),n(7637),n(8257),n(8961),n(87),n(5456),n(5930),n(7325),n(9989),n(4807),n(3114),n(3145);var o=n(4304),i=n(1892),r=n(1765),a=n(9516),l=n(5684);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,i,r,a,l=[],s=!0,c=!1;try{if(r=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(o=r.call(n)).done)&&(l.push(o.value),l.length!==t);s=!0);}catch(e){c=!0,i=e}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var u=["innerHTML"];const d={__name:"TheTooltip",props:{targetRef:{type:Object},content:{type:String}},setup:function(e){var t=e,n=(0,r.BK)(t).targetRef,c=(0,r.iH)(null),d=(0,r.iH)(null),f=(0,a.YF)(n,c,{placement:"top",strategy:"fixed",middleware:[(0,a.x7)({element:d})],whileElementsMounted:l.Me}),p=f.x,m=f.y,v=f.strategy,g=(0,r.iH)(!1);function y(){g.value=!0}function h(){g.value=!1}return(0,o.m0)((function(){n.value&&[["mouseenter",y],["mouseleave",h],["focus",y],["blur",h]].forEach((function(e){var t=s(e,2),o=t[0],i=t[1];n.value.addEventListener(o,i)}))})),function(e,n){var a,l;return g.value?((0,o.wg)(),(0,o.iD)("div",{key:0,style:(0,i.normalizeStyle)({position:(0,r.SU)(v),top:"".concat(null!==(a=(0,r.SU)(m))&&void 0!==a?a:0,"px"),left:"".concat(null!==(l=(0,r.SU)(p))&&void 0!==l?l:0,"px"),width:"max-content"}),ref_key:"floating",ref:c,class:"floating-ui"},[(0,o._)("div",{innerHTML:t.content},null,8,u),(0,o._)("div",{ref_key:"floatingArrow",ref:d,class:"floating-ui-arrow"},null,512)],4)):(0,o.kq)("v-if",!0)}}}},1121:(e,t,n)=>{n.d(t,{Z:()=>j});n(8141),n(9142),n(5456);var o=n(4304),i=n(1892),r=n(1765),a=n(1141),l=n(1514),s=n(2743),c=n(1110),u={class:"font-item__header flex items-stretch divide-x divide-y-0 divide-dashed divide-gray-300/70"},d={class:"flex p-3 items-center"},f=[(0,o._)("svg",{class:"h-3 w-3 text-gray-400",fill:"none",viewBox:"0 0 12 12"},[(0,o._)("path",{d:"M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)],p=[(0,o._)("svg",{class:"h-3 w-3 text-sky-600",fill:"currentColor",viewBox:"0 0 12 12"},[(0,o._)("path",{d:"M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"})],-1)],m=["title"],v=["title"],g=["title"],y=(0,o._)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",class:"h-5 w-5 text-blue-700 hover:text-blue-500 fill-current"},[(0,o.kq)("! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. "),(0,o._)("path",{d:"M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"})],-1),h={key:0,class:"font-item__body divide-x-0 divide-y divide-solid divide-gray-300/70"},w={class:"font-item__body-meta grid grid-cols-12 items-stretch divide-x divide-y-0 divide-dashed divide-gray-300/70"},b={class:"flex col-span-2 flex-col gap-1.5 p-3"},x=["for"],_=["id"],k=[(0,o.uE)('<option></option><option value="auto">auto</option><option value="block">block</option><option value="swap">swap</option><option value="fallback">fallback</option><option value="optional">optional</option>',6)],S={class:"flex col-span-4 flex-col gap-1.5 p-3"},D=["for"],C=["id"],z={class:"flex col-span-4 flex-col gap-1.5 p-3"},L=["for"],H=["id"],V={class:"flex col-span-2 flex-col gap-1.5 p-3"},F=["for"],M=["for"],A=["id"];const j={__name:"TheFontFace",props:{item:{type:Object,required:!0},preview:{type:Object,required:!0},isVariable:{type:Boolean},fontData:{type:Object}},setup:function(e){var t=e,n=(0,r.iH)(!1),j=(0,r.iH)(null),q=(0,r.iH)(null),I=(0,r.iH)(null);var B=(0,o.Fl)((function(){switch(0!==t.item.weight?t.item.weight:100*Math.round(t.preview.weight.current/100)){case 100:return"Thin";case 200:return"Extra Light";case 300:return"Light";case 500:return"Medium";case 600:return"Semi Bold";case 700:return"Bold";case 800:return"Extra Bold";case 900:return"Black";default:return"Regular"}})),E=(0,o.Fl)((function(){if(t.isVariable){var e,n=null===(e=t.fontData)||void 0===e?void 0:e.axes.find((function(e){return"slnt"===e.tag}));if(void 0!==n)return"oblique ".concat(-1*n.max,"deg ").concat(-1*n.min,"deg")}return t.item.style}));return function(U,T){var O=(0,o.Q2)("ripple");return(0,o.wg)(),(0,o.iD)("div",{class:(0,i.normalizeClass)([{"!border-green-600":e.item.isEnabled},"font-item relative bg-white border border-solid border-gray-300 divide-y divide-x-0 divide-solid divide-gray-300"])},[(0,o.kq)(" Header "),(0,o._)("div",u,[(0,o._)("div",d,[(0,o.Wm)((0,r.SU)(l.rs),{modelValue:e.item.isEnabled,"onUpdate:modelValue":T[0]||(T[0]=function(t){return e.item.isEnabled=t}),class:(0,i.normalizeClass)([[e.item.isEnabled?"bg-sky-600":"bg-gray-200"],"relative inline-flex p-0 h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"])},{default:(0,o.w5)((function(){return[(0,o._)("span",{class:(0,i.normalizeClass)([[e.item.isEnabled?"translate-x-5":"translate-x-0"],"pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"])},[(0,o._)("span",{"aria-hidden":"true",class:(0,i.normalizeClass)([[e.item.isEnabled?"opacity-0 ease-out duration-100":"opacity-100 ease-in duration-200"],"absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"])},f,2),(0,o._)("span",{"aria-hidden":"true",class:(0,i.normalizeClass)([[e.item.isEnabled?"opacity-100 ease-in duration-200":"opacity-0 ease-out duration-100"],"absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"])},p,2)],2)]})),_:1},8,["modelValue","class"])]),(0,o._)("div",{ref_key:"weightStyleTooltip",ref:j,class:"font-item__weight grow-0 shrink-0 flex p-3 items-center space-x-2"},[0===e.item.weight?((0,o.wg)(),(0,o.iD)("span",{key:0,title:B.value,class:"opacity-70 text-sm text-[#a7aaad] px-5 py-1 border border-solid rounded-sm border-[#dcdcde] bg-[#f6f7f7]"},(0,i.toDisplayString)(e.preview.weight.current),9,m)):((0,o.wg)(),(0,o.iD)("span",{key:1,title:B.value,class:"opacity-70 text-sm text-[#a7aaad] px-5 py-1 border border-solid rounded-sm border-[#dcdcde] bg-[#f6f7f7]"},(0,i.toDisplayString)(e.item.weight),9,v)),(0,o._)("span",{class:(0,i.normalizeClass)([{italic:"italic"===E.value},"opacity-70 text-sm capitalize text-left text-[#a7aaad] whitespace-nowrap text-clip overflow-hidden px-2 py-1 w-12 border border-solid rounded-sm border-[#dcdcde] bg-[#f6f7f7]"]),title:E.value},(0,i.toDisplayString)(E.value),11,g),(0,o.Wm)(c.Z,{"target-ref":j.value,content:"Font weight & style"},null,8,["target-ref"])],512),(0,o._)("div",{ref_key:"previewTextTooltip",ref:q,class:"flex-1 flex p-3 items-center"},[(0,o.Wm)((0,r.SU)(s.Z),{tag:"div",modelValue:e.preview.text,"onUpdate:modelValue":T[1]||(T[1]=function(t){return e.preview.text=t}),style:(0,i.normalizeStyle)({fontFamily:"'".concat(t.preview.fontFamily,"'"),fontSize:"".concat(t.preview.fontSize,"px"),fontWeight:0!==t.item.weight?t.item.weight:t.preview.weight.current,fontStyle:t.item.style,fontStretch:0!==t.preview.width.current?"".concat(t.preview.width.current,"%"):"100%"}),class:"preview-text leading-tight"},null,8,["modelValue","style"]),(0,o.Wm)(c.Z,{"target-ref":q.value,content:U.__("Editable preview text","yabe-webfont")},null,8,["target-ref","content"])],512),(0,o.wy)(((0,o.wg)(),(0,o.iD)("button",{type:"button",ref_key:"editTooltip",ref:I,onClick:T[2]||(T[2]=function(e){return n.value=!n.value}),class:"button flex items-center px-4 py-0.5 focus:shadow-none cursor-pointer bg-inherit border-none"},[y,(0,o.Wm)(c.Z,{"target-ref":I.value,content:U.__("Edit","yabe-webfont")},null,8,["target-ref","content"])])),[[O]])]),(0,o.kq)(" Body "),n.value?((0,o.wg)(),(0,o.iD)("div",h,[(0,o._)("div",w,[(0,o._)("div",b,[(0,o._)("label",{for:"display-".concat(e.item.id),class:"text-sm font-semibold"},"Font Display",8,x),(0,o.wy)((0,o._)("select",{name:"display",id:"display-".concat(e.item.id),"onUpdate:modelValue":T[3]||(T[3]=function(t){return e.item.display=t}),class:"capitalize [&_option]:capitalize"},k,8,_),[[a.vModelSelect,e.item.display]])]),(0,o._)("div",S,[(0,o._)("label",{for:"comment-".concat(e.item.id),class:"text-sm font-semibold"},"Comment",8,D),(0,o.wy)((0,o._)("input",{type:"text",name:"comment",id:"comment-".concat(e.item.id),"onUpdate:modelValue":T[4]||(T[4]=function(t){return e.item.comment=t}),placeholder:""},null,8,C),[[a.vModelText,e.item.comment]])]),(0,o._)("div",z,[(0,o._)("label",{for:"selector-".concat(e.item.id),class:"text-sm font-semibold"},"CSS Selector",8,L),(0,o.wy)((0,o._)("input",{type:"text",name:"selector",id:"selector-".concat(e.item.id),"onUpdate:modelValue":T[5]||(T[5]=function(t){return e.item.selector=t}),placeholder:"h1, h2, .poetry, .haiku, p, span, #lyric, #description",autocomplete:"off"},null,8,H),[[a.vModelText,e.item.selector]])]),(0,o._)("div",V,[(0,o._)("label",{for:"preload-".concat(e.item.id),class:"text-sm font-semibold"},"Preload",8,F),(0,o._)("label",{for:"preload-".concat(e.item.id),class:"text-sm"},[(0,o.wy)((0,o._)("input",{type:"checkbox",name:"preload",id:"preload-".concat(e.item.id),"onUpdate:modelValue":T[6]||(T[6]=function(t){return e.item.preload=t})},null,8,A),[[a.vModelCheckbox,e.item.preload]]),(0,o.Uk)(" Preload files ")],8,M)])])])):(0,o.kq)("v-if",!0)],2)}}}},1237:(e,t,n)=>{n.d(t,{Z:()=>ne});n(4650),n(5764),n(267),n(1633),n(54),n(1950),n(1331),n(4306),n(8961),n(6072),n(8605),n(5456),n(5930),n(4807),n(2027),n(3792),n(3145);var o=n(4304),i=n(1892),r=n(1765),a=n(8156),l=n.n(a);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}var c={id:"submitdiv",class:"postbox"},u={class:"postbox-header"},d={class:""},f=["href"],p=[(0,o._)("svg",{class:"w-[15px] h-[15px]",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",viewBox:"0 0 100 100"},[(0,o._)("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),(0,o._)("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})],-1)],m={class:"inside"},v={class:"submitbox",id:"submitpost"},g={id:"minor-publishing"},y={id:"misc-publishing-actions",class:"py-1.5"},h={class:"misc-pub-section"},w={class:"py-1.5 flex items-center"},b=(0,o._)("svg",{class:"h-4 w-4 shrink-0 text-[#8c8f94] fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512"},[(0,o.kq)("! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. "),(0,o._)("path",{d:"M353.8 54.1L330.2 6.3c-3.9-8.3-16.1-8.6-20.4 0L286.2 54.1l-52.3 7.5c-9.3 1.4-13.3 12.9-6.4 19.8l38 37-9 52.1c-1.4 9.3 8.2 16.5 16.8 12.2l46.9-24.8 46.6 24.4c8.6 4.3 18.3-2.9 16.8-12.2l-9-52.1 38-36.6c6.8-6.8 2.9-18.3-6.4-19.8l-52.3-7.5zM256 256c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32V288c0-17.7-14.3-32-32-32H256zM32 320c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zm416 96v64c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32V416c0-17.7-14.3-32-32-32H480c-17.7 0-32 14.3-32 32z"})],-1),x=(0,o._)("span",{class:"pl-2.5 pr-2"},"Rank:",-1),_={class:"font-medium"},k={class:"py-1.5 flex items-center"},S=(0,o._)("svg",{class:"h-4 w-4 shrink-0 text-[#8c8f94] fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},[(0,o.kq)("! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. "),(0,o._)("path",{d:"M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-1.8l18-48H303.8l18 48H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H390.2L254 52.8zM279.8 304H168.2L224 155.1 279.8 304z"})],-1),D=(0,o._)("span",{class:"pl-2.5 pr-2"},"Category:",-1),C={class:"font-medium"},z={class:"py-1.5 flex items-center"},L=(0,o._)("svg",{class:"h-4 w-4 shrink-0 text-[#8c8f94] fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[(0,o.kq)("! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. "),(0,o._)("path",{d:"M305.8 2.1C314.4 5.9 320 14.5 320 24V64h16c70.7 0 128 57.3 128 128V358.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V192c0-35.3-28.7-64-64-64H320v40c0 9.5-5.6 18.1-14.2 21.9s-18.8 2.3-25.8-4.1l-80-72c-5.1-4.6-7.9-11-7.9-17.8s2.9-13.3 7.9-17.8l80-72c7-6.3 17.2-7.9 25.8-4.1zM104 80c0-13.3-10.7-24-24-24S56 66.7 56 80s10.7 24 24 24s24-10.7 24-24zm8 73.3V358.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V153.3C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80c0 32.8-19.7 61-48 73.3zM104 432c0-13.3-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24s24-10.7 24-24zm328 24c13.3 0 24-10.7 24-24s-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24z"})],-1),H=(0,o._)("span",{class:"pl-2.5 pr-2"},"Version:",-1),V={class:"font-medium"},F={class:"py-1.5 flex items-center"},M=(0,o._)("svg",{class:"h-4 w-4 shrink-0 text-[#8c8f94] fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},[(0,o.kq)("! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. "),(0,o._)("path",{d:"M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm308.8 75c-14.7-14.7-38.6-14.7-53.3 0L240.6 282l53.3 53.3 14.9-14.9c14.7-14.7 14.7-38.6 0-53.3zM146.1 376.5c-4.1 4.1-7 9.2-8.4 14.9L128.5 428c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l36.6-9.2c5.6-1.4 10.8-4.3 14.9-8.4l71.9-71.9L218 304.6l-71.9 71.9z"})],-1),A=(0,o._)("span",{class:"pl-2.5 pr-2"},"Last modified:",-1),j=["title"],q={class:"py-1.5 flex items-center"},I=(0,o._)("svg",{class:"h-4 w-4 shrink-0 text-[#8c8f94] fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},[(0,o.kq)("! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. "),(0,o._)("path",{d:"M371.3 367.1c27.3-3.9 51.9-19.4 67.2-42.9L600.2 74.1c12.6-19.5 9.4-45.3-7.6-61.2S549.7-4.4 531.1 9.6L294.4 187.2c-24 18-38.2 46.1-38.4 76.1L371.3 367.1zm-19.6 25.4l-116-104.4C175.9 290.3 128 339.6 128 400c0 3.9 .2 7.8 .6 11.6c1.8 17.5-10.2 36.4-27.8 36.4H96c-17.7 0-32 14.3-32 32s14.3 32 32 32H240c61.9 0 112-50.1 112-112c0-2.5-.1-5-.2-7.5z"})],-1),B=(0,o._)("span",{class:"pl-2.5 pr-2"},"Style:",-1),E={key:0,class:"font-medium"},U={class:"py-1.5 flex items-center"},T=(0,o._)("svg",{class:"h-4 w-4 shrink-0 text-[#8c8f94] fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},[(0,o.kq)("! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. "),(0,o._)("path",{d:"M192 80c0 8.8 7.2 16 16 16h80c17.7 0 32 14.3 32 32s-14.3 32-32 32H208c-44.2 0-80-35.8-80-80s35.8-80 80-80H320c70.7 0 128 57.3 128 128s-57.3 128-128 128H288c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32h64c35.3 0 64-28.7 64-64s-28.7-64-64-64H208c-8.8 0-16 7.2-16 16zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z"})],-1),O=(0,o._)("span",{class:"pl-2.5 pr-2"},"Designers:",-1),P={class:"font-medium"},Z={key:0,class:"py-1.5 flex flex-col"},W=(0,o._)("div",{class:"flex items-center"},[(0,o._)("svg",{class:"h-4 w-4 shrink-0 text-[#8c8f94] fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[(0,o.kq)("! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. "),(0,o._)("path",{d:"M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z"})]),(0,o._)("span",{class:"pl-2.5 pr-2"},"Axis:")],-1),R={class:"table-auto border-collapse mt-1.5 ml-6 border border-solid"},K=(0,o._)("tr",{class:"text-left bg-gray-50"},[(0,o._)("th",{class:"p-1.5 border border-solid border-gray-200"},[(0,o._)("a",{href:"https://fonts.google.com/variablefonts#axis-definitions",target:"_blank"}," Axes ")]),(0,o._)("th",{class:"p-1.5 border border-solid border-gray-200 text-right"},"Min"),(0,o._)("th",{class:"p-1.5 border border-solid border-gray-200 text-right"},"Max"),(0,o._)("th",{class:"p-1.5 border border-solid border-gray-200 text-right"},"Default")],-1),N={class:"p-1.5"},Q={class:"p-1.5 text-right"},Y={class:"p-1.5 text-right"},$={class:"p-1.5 text-right"},X=(0,o._)("div",{class:"clear"},null,-1);var G,J,ee,te;const ne={__name:"TheFontInfoPanel",props:(G={fontData:{type:Object,required:!0}},J="fontData",ee={type:Object},te=function(e,t){if("object"!=s(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=s(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(J,"string"),(J="symbol"==s(te)?te:String(te))in G?Object.defineProperty(G,J,{value:ee,enumerable:!0,configurable:!0,writable:!0}):G[J]=ee,G),setup:function(e){return function(t,n){var a,s,G,J,ee,te,ne,oe,ie,re,ae,le;return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",c,[(0,o._)("div",u,[(0,o._)("h2",d,[(0,o.Uk)(" Font Information "),e.fontData?((0,o.wg)(),(0,o.iD)("a",{key:0,href:"https://fonts.google.com/specimen/".concat(e.fontData.slug.replaceAll("-","+")),target:"_blank"},p,8,f)):(0,o.kq)("v-if",!0)])]),(0,o._)("div",m,[(0,o._)("div",v,[(0,o._)("div",g,[(0,o._)("div",y,[(0,o._)("div",h,[(0,o.kq)(" Font Info: Rank "),(0,o._)("div",w,[b,x,(0,o._)("span",_,(0,i.toDisplayString)(null===(a=e.fontData)||void 0===a?void 0:a.popularity),1)]),(0,o.kq)(" Font Info: Category "),(0,o._)("div",k,[S,D,(0,o._)("span",C,(0,i.toDisplayString)(null===(s=e.fontData)||void 0===s?void 0:s.category),1)]),(0,o.kq)(" Font Info: Version "),(0,o._)("div",z,[L,H,(0,o._)("span",V,(0,i.toDisplayString)(null===(G=e.fontData)||void 0===G?void 0:G.version),1)]),(0,o.kq)(" Font Info: Last Modified "),(0,o._)("div",F,[M,A,e.fontData?((0,o.wg)(),(0,o.iD)("span",{key:0,title:null===(J=e.fontData)||void 0===J?void 0:J.modifiedAt,class:"font-medium"},(0,i.toDisplayString)((0,r.SU)(l())(new Date(null===(ee=e.fontData)||void 0===ee?void 0:ee.modifiedAt))),9,j)):(0,o.kq)("v-if",!0)]),(0,o.kq)(" Font Info: Style "),(0,o._)("div",q,[I,B,e.fontData?((0,o.wg)(),(0,o.iD)("span",E,(0,i.toDisplayString)(t.sprintf(t._n("%d subset","%d subsets",null===(te=e.fontData)||void 0===te?void 0:te.subsets.length,"yabe-webfont"),null===(ne=e.fontData)||void 0===ne?void 0:ne.subsets.length))+" & "+(0,i.toDisplayString)(t.sprintf(t._n("%d variant","%d variants",null===(oe=e.fontData)||void 0===oe?void 0:oe.variants.length,"yabe-webfont"),null===(ie=e.fontData)||void 0===ie?void 0:ie.variants.length)),1)):(0,o.kq)("v-if",!0)]),(0,o.kq)(" Font Info: Designers "),(0,o._)("div",U,[T,O,(0,o._)("span",P,(0,i.toDisplayString)(null===(re=e.fontData)||void 0===re?void 0:re.designers),1)]),(0,o.kq)(" Font Info: Axes "),null!==(ae=e.fontData)&&void 0!==ae&&ae.axes.length?((0,o.wg)(),(0,o.iD)("div",Z,[W,(0,o._)("table",R,[K,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(null===(le=e.fontData)||void 0===le?void 0:le.axes,(function(e){return(0,o.wg)(),(0,o.iD)("tr",{key:e.tag,class:"border border-solid border-gray-200"},[(0,o._)("td",N,(0,i.toDisplayString)(e.tag),1),(0,o._)("td",Q,(0,i.toDisplayString)(e.min),1),(0,o._)("td",Y,(0,i.toDisplayString)(e.max),1),(0,o._)("td",$,(0,i.toDisplayString)(e.defaultValue),1)])})),128))])])):(0,o.kq)("v-if",!0)])]),X])])])])])}}}},6928:(e,t,n)=>{n.d(t,{Z:()=>y});n(4650),n(5764),n(267),n(54),n(1950),n(6921),n(8700),n(378),n(2305),n(1331),n(3337),n(8257),n(8961),n(87),n(5456),n(5930),n(7325),n(9989),n(4177),n(5178),n(4807),n(2027),n(413),n(4332),n(8684),n(3145);var o=n(4304),i=n(1765),r=n(1141),a=n(1892),l=n(2823),s=n(5244);function c(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var d={class:"flex my-0 w-full"},f=["disabled"],p=["disabled"],m={class:"flex justify-between"},v={class:""},g={class:"text-xs text-gray-500 bg-gray-100 px-1 py-0.5 rounded"};const y={__name:"TheSearchFamily",props:{catalog:{type:Object,required:!0},modelValue:{type:Object}},emits:["update:modelValue"],setup:function(e,t){var n=t.emit,u=e,y=n,h=(0,s.j)(),w=(0,o.Fl)({get:function(){return u.modelValue},set:function(e){y("update:modelValue",e)}}),b=(0,i.iH)(""),x=(0,i.iH)(0),_=(0,i.iH)(50),k=(0,i.iH)(null),S=(0,o.Fl)((function(){return c(new Set(u.catalog.map((function(e){return e.category.trim().replace(/[^a-zA-Z0-9\-_]+/g,"-").toLowerCase()}))))})),D=(0,o.Fl)((function(){var e=u.catalog;if(b.value){var t=b.value.trim().toLowerCase();if(t.startsWith(":")){var n=t.split(" ")[0].slice(1);S.value.includes(n)&&(e=e.filter((function(e){return e.category.trim().replace(/[^a-zA-Z0-9\-_]+/g,"-").toLowerCase()===n}))),t=t.slice(n.length+1).trim()}var o=new l.Z(e,{keys:["family"],useExtendedSearch:!0,findAllMatches:!0});if(t.trim())return o.search(t).map((function(e){return e.item}))}return e})),C=(0,o.Fl)((function(){return D.value.slice(x.value,_.value+x.value)})),z=(0,o.Fl)((function(){var e=x.value+_.value;return Boolean(D.value.slice(e,_.value+e).length)})),L=(0,o.Fl)((function(){var e=x.value-_.value;return Boolean(D.value.slice(e,_.value+e).length)}));function H(e){b.value=e,x.value=0}return(0,o.bv)((function(){k.value.searchEl.focus()})),function(e,t){var n=(0,o.up)("VueSelect"),l=(0,o.Q2)("ripple");return(0,o.wg)(),(0,o.j4)(n,{ref_key:"vueSelectEl",ref:k,options:C.value,modelValue:w.value,"onUpdate:modelValue":t[2]||(t[2]=function(e){return w.value=e}),label:"family",filterable:!1,loading:(0,i.SU)(h).isBusy,autoscroll:!0,onSearch:H,onKeyup:[t[3]||(t[3]=(0,r.withKeys)((0,r.withModifiers)((function(e){return x.value-=_.value*L.value}),["ctrl"]),["left"])),t[4]||(t[4]=(0,r.withKeys)((0,r.withModifiers)((function(e){return x.value+=_.value*z.value}),["ctrl"]),["right"]))],placeholder:"Choose Font Family",class:"ywf-google-search-family"},{"list-footer":(0,o.w5)((function(){return[(0,o._)("li",d,[(0,o.wy)(((0,o.wg)(),(0,o.iD)("button",{type:"button",disabled:!L.value,onClick:t[0]||(t[0]=function(e){return x.value-=_.value}),class:"button flex-1"},[(0,o.Uk)(" Prev ")],8,f)),[[l]]),(0,o.wy)(((0,o.wg)(),(0,o.iD)("button",{type:"button",disabled:!z.value,onClick:t[1]||(t[1]=function(e){return x.value+=_.value}),class:"button flex-1"},[(0,o.Uk)(" Next ")],8,p)),[[l]])])]})),option:(0,o.w5)((function(e){var t=e.family,n=e.category;return[(0,o._)("div",m,[(0,o._)("span",v,(0,a.toDisplayString)(t),1),(0,o._)("span",g,(0,a.toDisplayString)(n.replace(/[^a-zA-Z0-9\-_]+/g,"-").toLowerCase()),1)])]})),_:1},8,["options","modelValue","loading"])}}}}}]);