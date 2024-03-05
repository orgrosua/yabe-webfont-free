import{e as y,m as b,l as P,I as O,a8 as q,a9 as Y,aa as x,F as N,ab as k,H as $,ac as z,u as J,f as j,o as Q,q as X,ad as Z}from"./app-BKc7mk60.js";function ee(e,l,t){let n=y(t==null?void 0:t.value),a=b(()=>e.value!==void 0);return[b(()=>a.value?e.value:n.value),function(u){return a.value||(n.value=u),l==null?void 0:l(u)}]}let te=Symbol("headlessui.useid"),ne=0;function L(){return P(te,()=>`${++ne}`)()}function E(e){var l;if(e==null||e.value==null)return null;let t=(l=e.value.$el)!=null?l:e.value;return t instanceof Node?t:null}function A(e,l,...t){if(e in l){let a=l[e];return typeof a=="function"?a(...t):a}let n=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(l).map(a=>`"${a}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,A),n}function H(e,l){if(e)return e;let t=l??"button";if(typeof t=="string"&&t.toLowerCase()==="button")return"button"}function le(e,l){let t=y(H(e.value.type,e.value.as));return O(()=>{t.value=H(e.value.type,e.value.as)}),q(()=>{var n;t.value||E(l)&&E(l)instanceof HTMLButtonElement&&!((n=E(l))!=null&&n.hasAttribute("type"))&&(t.value="button")}),t}var ae=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(ae||{}),re=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(re||{});function T({visible:e=!0,features:l=0,ourProps:t,theirProps:n,...a}){var u;let r=V(n,t),p=Object.assign(a,{props:r});if(e||l&2&&r.static)return C(p);if(l&1){let f=(u=r.unmount)==null||u?0:1;return A(f,{0(){return null},1(){return C({...a,props:{...r,hidden:!0,style:{display:"none"}}})}})}return C(p)}function C({props:e,attrs:l,slots:t,slot:n,name:a}){var u,r;let{as:p,...f}=U(e,["unmount","static"]),c=(u=t.default)==null?void 0:u.call(t,n),o={};if(n){let i=!1,s=[];for(let[h,v]of Object.entries(n))typeof v=="boolean"&&(i=!0),v===!0&&s.push(h);i&&(o["data-headlessui-state"]=s.join(" "))}if(p==="template"){if(c=B(c??[]),Object.keys(f).length>0||Object.keys(l).length>0){let[i,...s]=c??[];if(!ue(i)||s.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${a} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(f).concat(Object.keys(l)).map(m=>m.trim()).filter((m,S,w)=>w.indexOf(m)===S).sort((m,S)=>m.localeCompare(S)).map(m=>`  - ${m}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(m=>`  - ${m}`).join(`
`)].join(`
`));let h=V((r=i.props)!=null?r:{},f,o),v=Y(i,h,!0);for(let m in h)m.startsWith("on")&&(v.props||(v.props={}),v.props[m]=h[m]);return v}return Array.isArray(c)&&c.length===1?c[0]:c}return x(p,Object.assign({},f,o),{default:()=>c})}function B(e){return e.flatMap(l=>l.type===N?B(l.children):[l])}function V(...e){if(e.length===0)return{};if(e.length===1)return e[0];let l={},t={};for(let n of e)for(let a in n)a.startsWith("on")&&typeof n[a]=="function"?(t[a]!=null||(t[a]=[]),t[a].push(n[a])):l[a]=n[a];if(l.disabled||l["aria-disabled"])return Object.assign(l,Object.fromEntries(Object.keys(t).map(n=>[n,void 0])));for(let n in t)Object.assign(l,{[n](a,...u){let r=t[n];for(let p of r){if(a instanceof Event&&a.defaultPrevented)return;p(a,...u)}}});return l}function oe(e){let l=Object.assign({},e);for(let t in l)l[t]===void 0&&delete l[t];return l}function U(e,l=[]){let t=Object.assign({},e);for(let n of l)n in t&&delete t[n];return t}function ue(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}var R=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(R||{});let ie=k({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:l,attrs:t}){return()=>{var n;let{features:a,...u}=e,r={"aria-hidden":(a&2)===2?!0:(n=u["aria-hidden"])!=null?n:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(a&4)===4&&(a&2)!==2&&{display:"none"}}};return T({ourProps:r,theirProps:u,slot:{},attrs:t,slots:l,name:"Hidden"})}}});var D=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(D||{});function se(e){var l,t;let n=(l=e==null?void 0:e.form)!=null?l:e.closest("form");if(n){for(let a of n.elements)if(a!==e&&(a.tagName==="INPUT"&&a.type==="submit"||a.tagName==="BUTTON"&&a.type==="submit"||a.nodeName==="INPUT"&&a.type==="image")){a.click();return}(t=n.requestSubmit)==null||t.call(n)}}let de=Symbol("DescriptionContext");function pe({slot:e=y({}),name:l="Description",props:t={}}={}){let n=y([]);function a(u){return n.value.push(u),()=>{let r=n.value.indexOf(u);r!==-1&&n.value.splice(r,1)}}return $(de,{register:a,slot:e,name:l,props:t}),b(()=>n.value.length>0?n.value.join(" "):void 0)}let _=Symbol("LabelContext");function F(){let e=P(_,null);if(e===null){let l=new Error("You used a <Label /> component, but it is not inside a parent.");throw Error.captureStackTrace&&Error.captureStackTrace(l,F),l}return e}function ce({slot:e={},name:l="Label",props:t={}}={}){let n=y([]);function a(u){return n.value.push(u),()=>{let r=n.value.indexOf(u);r!==-1&&n.value.splice(r,1)}}return $(_,{register:a,slot:e,name:l,props:t}),b(()=>n.value.length>0?n.value.join(" "):void 0)}let fe=k({name:"Label",props:{as:{type:[Object,String],default:"label"},passive:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(e,{slots:l,attrs:t}){var n;let a=(n=e.id)!=null?n:`headlessui-label-${L()}`,u=F();return O(()=>z(u.register(a))),()=>{let{name:r="Label",slot:p={},props:f={}}=u,{passive:c,...o}=e,i={...Object.entries(f).reduce((s,[h,v])=>Object.assign(s,{[h]:J(v)}),{}),id:a};return c&&(delete i.onClick,delete i.htmlFor,delete o.onClick),T({ourProps:i,theirProps:o,slot:p,attrs:t,slots:l,name:r})}}}),I=Symbol("GroupContext"),ve=k({name:"SwitchGroup",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:l,attrs:t}){let n=y(null),a=ce({name:"SwitchLabel",props:{htmlFor:b(()=>{var r;return(r=n.value)==null?void 0:r.id}),onClick(r){n.value&&(r.currentTarget.tagName==="LABEL"&&r.preventDefault(),n.value.click(),n.value.focus({preventScroll:!0}))}}}),u=pe({name:"SwitchDescription"});return $(I,{switchRef:n,labelledby:a,describedby:u}),()=>T({theirProps:e,ourProps:{},slot:{},slots:l,attrs:t,name:"SwitchGroup"})}}),he=k({name:"Switch",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},form:{type:String,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:null}},inheritAttrs:!1,setup(e,{emit:l,attrs:t,slots:n,expose:a}){var u;let r=(u=e.id)!=null?u:`headlessui-switch-${L()}`,p=P(I,null),[f,c]=ee(b(()=>e.modelValue),d=>l("update:modelValue",d),b(()=>e.defaultChecked));function o(){c(!f.value)}let i=y(null),s=p===null?i:p.switchRef,h=le(b(()=>({as:e.as,type:t.type})),s);a({el:s,$el:s});function v(d){d.preventDefault(),o()}function m(d){d.key===D.Space?(d.preventDefault(),o()):d.key===D.Enter&&se(d.currentTarget)}function S(d){d.preventDefault()}let w=b(()=>{var d,g;return(g=(d=E(s))==null?void 0:d.closest)==null?void 0:g.call(d,"form")});return O(()=>{j([w],()=>{if(!w.value||e.defaultChecked===void 0)return;function d(){c(e.defaultChecked)}return w.value.addEventListener("reset",d),()=>{var g;(g=w.value)==null||g.removeEventListener("reset",d)}},{immediate:!0})}),()=>{let{name:d,value:g,form:K,...M}=e,G={checked:f.value},W={id:r,ref:s,role:"switch",type:h.value,tabIndex:0,"aria-checked":f.value,"aria-labelledby":p==null?void 0:p.labelledby.value,"aria-describedby":p==null?void 0:p.describedby.value,onClick:v,onKeyup:m,onKeypress:S};return x(N,[d!=null&&f.value!=null?x(ie,oe({features:R.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:f.value,form:K,name:d,value:g})):null,T({ourProps:W,theirProps:{...t,...U(M,["modelValue","defaultChecked"])},slot:G,attrs:t,slots:n,name:"Switch"})])}}}),be=fe;const ye=k({__name:"contenteditable",props:{tag:String,contenteditable:{type:[Boolean,String],default:!0},modelValue:String,noHtml:{type:Boolean,default:!0},noNl:{type:Boolean,default:!1}},emits:{returned:String,"update:modelValue":String},setup(e,{emit:l}){const t=e;function n(o,i,s){return o.split(i).join(s)}const a=y();function u(){return t.noHtml?a.value.innerText:a.value.innerHTML}function r(o){t.noHtml?a.value.innerText=o:a.value.innerHTML=o}function p(o){l("update:modelValue",u())}function f(o){o.preventDefault();let i=(o.originalEvent||o).clipboardData.getData("text/plain");t.noNl&&(i=n(i,`\r
`," "),i=n(i,`
`," "),i=n(i,"\r"," ")),window.document.execCommand("insertText",!1,i)}function c(o){o.key=="Enter"&&t.noNl&&(o.preventDefault(),l("returned",u()))}return O(()=>{var o;r((o=t.modelValue)!=null?o:"")}),j(()=>t.modelValue,(o,i)=>{o!=u()&&r(o??"")}),j(()=>t.noHtml,(o,i)=>{var s;r((s=t.modelValue)!=null?s:"")}),j(()=>t.tag,(o,i)=>{var s;r((s=t.modelValue)!=null?s:"")},{flush:"post"}),(o,i)=>(Q(),X(Z(e.tag),{contenteditable:e.contenteditable,onInput:p,onBlur:p,onPaste:f,onKeypress:c,ref_key:"element",ref:a},null,40,["contenteditable"]))}});export{ye as _,be as a,ve as o,he as u};