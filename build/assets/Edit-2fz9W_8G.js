import{_ as me,A as ce,e as d,m as P,B as pe,f as Z,n as ge,N as ve,H as j,p as he,c as C,b as s,t as J,u as q,g,j as E,a as w,v as be,L as we,y as K,d as A,w as D,F as H,k as I,h as ye,q as Q,s as B,T as xe,I as _e,r as F,o as x,G as $e}from"./app-B__gg-FA.js";import"./index-CAo9eUGP.js";import{d as ke,s as ae}from"./sortBy-70NnmMmY.js";import{i as z}from"./isEqual-BYi-8BMV.js";import{_ as Ve,a as Ee,b as Se,u as O}from"./TheFontInfoPanel-B8OQxnXP.js";import{c as ee}from"./cloneDeep-DKPH_8Zr.js";import{a as Ue,b as Ce,u as qe}from"./notifier-CNrCw-5Q.js";import{u as ze,d as Re,o as Pe}from"./vue-contenteditable.es-CbGfRrsL.js";import"./_Uint8Array-CGOLgoAz.js";import"./get-DrT8Bxqf.js";const Be={class:"mr:8 font:24 lh:32px"},Ne={id:"poststuff"},Te={id:"post-body-content"},je={id:"titlediv"},Ae={id:"titlewrap"},De=["placeholder"],Ie={class:"postarea wp-editor-expand"},Le={id:"wp-content-wrap",class:"wp-core-ui mt:32"},Me={class:"grid grid-cols:12 gap:16"},Ge={class:"grid-col-span:4 flex flex:col gap:6"},He={class:"grid-col-span:2 flex flex:col gap:6"},Oe={class:"grid-col-span:4 flex flex:col gap:6"},Ye={class:"grid-col-span:2 flex flex:col gap:6"},Xe={class:"flex:1|1|0% flex align-items:center"},We={for:"preload",class:"font:14 lh:20px"},Ze={class:"grid-col-span:7 flex flex:col gap:6"},Je={class:"grid-col-span:3 flex flex:col gap:6"},Ke={class:"grid-col-span:2 flex flex:col gap:6"},Qe={class:"flex:1|1|0% flex align-items:center"},Fe={for:"variable",class:"font:14 lh:20px"},et={class:"flex align-items:center {ml:16}>*+* mt:32 mb:12"},tt={class:"flex:1|1|0%"},st={class:"flex align-items:center {ml:16}>*+* py:8 px:8 b:1|solid|gray-30/.5"},lt={key:0,class:"h:fit flex r:6 shadow-sm"},ot=["min","max"],at=["min","max"],nt={key:1,class:"h:fit flex r:6 shadow-sm"},it=["min","max"],rt=["min","max"],ut={class:"h:fit flex r:6 shadow-sm"},dt={class:"h:fit flex align-items:stretch rel r:6 shadow-sm"},ft={class:"font-files"},mt={class:"grid gap:16"},ct={id:"postbox-container-1",class:"postbox-container"},pt={id:"submitdiv",class:"postbox"},gt={class:"inside"},vt={class:"submitbox",id:"submitpost"},ht={id:"minor-publishing"},bt={id:"misc-publishing-actions"},wt={class:"misc-pub-section"},yt={class:"py:6 flex align-items:center"},xt={id:"major-publishing-actions"},_t={id:"delete-action"},$t={id:"publishing-action"},kt=["disabled"],Vt={id:"postbox-container-2",class:"postbox-container mt:12"},Et={key:0,class:"mt:16"},St={__name:"Edit",setup(Ut){const Y=Ue(),ne=$e(),te=_e(),L=Ce(),k=qe(),M=ce(),ie=d([]),f=d(null),N=d(""),_=d("auto"),S=d(""),T=d(!1),v=P(()=>{var t;return((t=f.value)==null?void 0:t.family)||""}),c=d(!0),y=d([]),m=d(["woff2"]),h=d(!1),V=d([]),p=d([]),b=d({}),X=d(!1),a=pe({text:"The quick brown fox jumps over a lazy dog",fontSize:18,lineHeight:1.5,fontFamily:v,weight:{current:0,min:0,max:0},width:{current:0,min:0,max:0}});Z(m,(t,e)=>{t.length===0&&(m.value=["woff2"])});const se=P({get(){if(p.value.length>0){let t=!0;for(const[e,u]of p.value.entries())if(u.isEnabled||(t=!1),!t)break;return t}return!1},set(t){p.value.forEach(e=>{e.isEnabled=t})}});function G(t){switch(t){case"woff2":case"font/woff2":return"woff2";case"woff":case"font/woff":return"woff";case"ttf":case"font/ttf":return"truetype";case"otf":case"font/otf":return"opentype";case"eot":case"font/eot":return"embedded-opentype";default:return"woff2"}}async function le(){return k.add("fonts.edit.google-fonts:fetch-item"),Y.request({method:"GET",url:`/fonts/detail/${ne.params.id}`}).then(t=>t.data).then(t=>{var e;N.value=t.title,_.value=t.metadata.display,S.value=t.metadata.selector,T.value=t.metadata.preload,c.value=t.status,f.value=t.metadata.google_fonts.font_data,y.value=t.metadata.google_fonts.subsets,p.value=ee(t.metadata.google_fonts.font_faces),V.value=ee(t.metadata.google_fonts.font_files),m.value=ee(t.metadata.google_fonts.formats),h.value=t.metadata.google_fonts.variable,b.value=t,h.value&&(a.weight={current:0,min:0,max:0},a.width={current:0,min:0,max:0},(e=f.value)==null||e.axes.forEach(u=>{u.tag==="wght"&&(a.weight.current=u.defaultValue,a.weight.min=u.min,a.weight.max=u.max),u.tag==="wdth"&&(a.width.current=u.defaultValue,a.width.min=u.min,a.width.max=u.max)}))}).finally(()=>{k.remove("fonts.edit.google-fonts:fetch-item")})}const re=P(()=>{let t="";return v.value&&(h.value?p.value.forEach(e=>{if(e.weight!==0)return;let u=[];y.value.forEach(l=>{let o=V.value.filter(n=>n.weight==e.weight&&n.style===e.style&&m.value.includes(n.format)&&n.subsets.includes(l));o.forEach(n=>{n.subset=l}),u.push(...o)});let i=V.value.filter(l=>l.weight==e.weight&&l.style===e.style&&m.value.includes(l.format)&&l.subsets.some(o=>o.match(/\d+/)));i.forEach(l=>{l.subset=l.subsets.join("")}),u.push(...i);let r=[];u.forEach(l=>{let o=!0;r.forEach(n=>{n.weight===l.weight&&n.style===l.style&&z(n.subsets,l.subsets)&&n.format===l.format&&(o=!1)}),o&&r.push(l)}),r.forEach(l=>{e.comment&&(t+=`/* ${e.comment} */
`),t+=`/* ${l.subset} */
`,t+=`@font-face {
`,t+=`	font-family: '${v.value}';
`,e.weight!==0?t+=`	font-weight: ${e.weight};
`:a.weight.min!==0||a.weight.max!==0?t+=`	font-weight: ${a.weight.min} ${a.weight.max};
`:t+=`	font-weight: 400;
`;let o=f.value.axes.find(U=>U.tag==="slnt");o!==void 0?t+=`	font-style: oblique ${o.max*-1}deg ${o.min*-1}deg;
`:t+=`	font-style: ${e.style};
`;let n=f.value.axes.find(U=>U.tag==="wdth");n!==void 0&&(t+=`	font-stretch: ${n.min}% ${n.max}%;
`),t+=`	font-display: ${e.display||_.value};
`,t+=`	src: url('${l.url}') format("${G(l.format)}");
`,l.unicodeRange&&(t+=`	unicode-range: ${l.unicodeRange};
`),t+=`}

`})}):p.value.forEach(e=>{e.comment&&(t+=`/* ${e.comment} */
`),t+=`@font-face {
`,t+=`	font-family: '${v.value}';
`,t+=`	font-style: ${e.style};
`,!h.value&&e.weight!==0?t+=`	font-weight: ${e.weight};
`:t+=`	font-weight: ${a.weight.min} ${a.weight.max};
`,t+=`	font-display: ${e.display||_.value};
`;const u={woff2:1,woff:2,ttf:3,otf:4,eot:5};let i=V.value.filter(r=>r.weight==e.weight&&r.style===e.style&&z(O(r.subsets).sort(),O(y.value).sort())&&m.value.includes(r.format));if(i.length){i=ae(i,l=>u[l.format]),t+="	src: ";let r=i.map(l=>{var n;return`url('${((n=l.file)==null?void 0:n.attachment_url)||l.url}') format("${G(l.format)}")`});t+=r.join(`,
		`),t+=`;
`}e.unicodeRange&&(t+=`	unicode-range: ${e.unicodeRange};
`),t+=`}

`})),t}),ue=P(()=>{let t="";return v.value&&(h.value?p.value.forEach(e=>{if(!e.isEnabled||e.weight!==0)return;let u=[];y.value.forEach(l=>{let o=V.value.filter(n=>n.weight==e.weight&&n.style===e.style&&n.subsets.includes(l)&&m.value.includes(n.format));o.forEach(n=>{n.subset=l}),u.push(...o)});let i=V.value.filter(l=>l.weight==e.weight&&l.style===e.style&&l.subsets.some(o=>o.match(/\d+/))&&m.value.includes(l.format));i.forEach(l=>{l.subset=l.subsets.join("")}),u.push(...i);let r=[];u.forEach(l=>{let o=!0;r.forEach(n=>{n.weight===l.weight&&n.style===l.style&&z(n.subsets,l.subsets)&&n.format===l.format&&(o=!1)}),o&&r.push(l)}),r.forEach(l=>{e.comment&&(t+=`/* ${e.comment} */
`),t+=`/* ${l.subset} */
`,t+=`@font-face {
`,t+=`	font-family: '${v.value}';
`,e.weight!==0?t+=`	font-weight: ${e.weight};
`:a.weight.min!==0||a.weight.max!==0?t+=`	font-weight: ${a.weight.min} ${a.weight.max};
`:t+=`	font-weight: 400;
`;let o=f.value.axes.find(U=>U.tag==="slnt");o!==void 0?t+=`	font-style: oblique ${o.max*-1}deg ${o.min*-1}deg;
`:t+=`	font-style: ${e.style};
`;let n=f.value.axes.find(U=>U.tag==="wdth");n!==void 0&&(t+=`	font-stretch: ${n.min}% ${n.max}%;
`),t+=`	font-display: ${e.display||_.value};
`,t+=`	src: url('${l.url}') format("${G(l.format)}");
`,l.unicodeRange&&(t+=`	unicode-range: ${l.unicodeRange};
`),t+=`}

`})}):p.value.forEach(e=>{if(!e.isEnabled)return;e.comment&&(t+=`/* ${e.comment} */
`),t+=`@font-face {
`,t+=`	font-family: '${v.value}';
`,t+=`	font-style: ${e.style};
`,e.weight!==0?t+=`	font-weight: ${e.weight};
`:t+=`	font-weight: ${a.weight.min} ${a.weight.max};
`,t+=`	font-display: ${e.display||_.value};
`;const u={woff2:1,woff:2,ttf:3,otf:4,eot:5};let i=V.value.filter(r=>r.weight==e.weight&&r.style===e.style&&z(O(r.subsets).sort(),O(y.value).sort())&&m.value.includes(r.format));if(i.length){i=ae(i,l=>u[l.format]),t+="	src: ";let r=i.map(l=>{var n;return`url('${((n=l.file)==null?void 0:n.attachment_url)||l.url}') format("${G(l.format)}")`});t+=r.join(`,
		`),t+=`;
`}e.unicodeRange&&(t+=`	unicode-range: ${e.unicodeRange};
`),t+=`}

`})),t}),oe=P(()=>{let t="";if(!v.value)return t;t+=`
`,t+=ue.value;const e=v.value.replace(/[^a-zA-Z0-9\-_]+/g,"-").toLowerCase();let u="",i=[];return S.value&&(i=S.value.split("|").map(r=>r.trim())),i.length>1&&i[1]&&(u=`, ${i[1]}`),t+=`:root {
`,t+=`	--ywf--family-${e}: '${v.value}'${u};
`,t+=`}

`,i.length>0&&i[0]&&(t+=`${i[0]} {
	font-family: var(--ywf--family-${e});
}

`),p.value.forEach(r=>{r.selector&&(t+=`${r.selector} {
`,t+=`	font-family: var(--ywf--family-${e});
`,t+=`	font-style: ${r.style};
`,t+=`	font-weight: ${r.weight};
`,t+=`}

`)}),t=t.replace(/\t/g,"  "),t=t.replace(/url\(\'.*fonts.gstatic.com.*\'\)/g,"url('FONT_FILE_URL')"),t=t.replace(/<family>/g,v.value),t});let $;Z(re,ke((t,e)=>{$&&($.innerHTML=t.replace(/\t/g,"  "))},1e3)),ge(()=>{let t=le();L.async(t,"Font details loaded.",e=>{L.alert(e.response&&e.response.status===404?"Font not found.":"Failed to load font details."),te.go(-1)},"Fetching font details..."),$=document.querySelector("#yabe-webfont-preview"),$||($=document.createElement("style"),$.setAttribute("id","yabe-webfont-preview"),document.head.appendChild($))});function de(){confirm(j("Are you sure you want to delete the font?","yabe-webfont"))&&(X.value=!0,k.add("fonts.edit.google-fonts:delete"),Y.request({method:"POST",url:`/fonts/delete/${b.value.id}`}).then(t=>{te.push({name:"fonts.index"})}).catch(function(t){L.alert(t.message)}).finally(()=>{X.value=!1,k.remove("fonts.edit.google-fonts:delete")}))}const R=d(null),W=P(()=>b.value?N.value!==b.value.title||c.value!==b.value.status||_.value!==b.value.metadata.display||S.value!==b.value.metadata.selector||T.value!==b.value.metadata.preload||!z(p.value,b.value.metadata.google_fonts.font_faces)||!z(m.value,b.value.metadata.google_fonts.formats):!1);Z(W,(t,e)=>{t&&!R.value?R.value=M.add({type:"warning",message:"<p>You have unsaved changes.</p>"}):(M.remove(R.value),R.value=null)}),ve((t,e,u)=>{W.value&&!confirm(j("You have unsaved changes. Are you sure you want to leave?","yabe-webfont"))||u()}),window.onbeforeunload=function(t){if(W.value)return j("You have unsaved changes. Are you sure you want to leave?","yabe-webfont")},he(()=>{window.onbeforeunload=null,R.value&&M.remove(R.value),$&&document.head.removeChild($)});function fe(t){t.preventDefault(),k.add("fonts.edit.google-fonts:send-form");let e=[];V.value.forEach(i=>{let r=!0;e.forEach(l=>{l.weight===i.weight&&l.style===i.style&&z(l.subsets,i.subsets)&&l.format===i.format&&(r=!1)}),r&&e.push(i)});let u=Y.request({method:"POST",url:`/fonts/google-fonts/update/${b.value.id}`,data:{title:N.value,status:c.value,metadata:{preload:T.value,selector:S.value,display:_.value,google_fonts:{variable:h.value,formats:m.value,font_data:f.value,subsets:y.value,font_files:e,font_faces:p.value}}}}).then(i=>{M.add({type:"success",message:"<p>Google Fonts updated successfully.</p>"}),le()}).finally(()=>{k.remove("fonts.edit.google-fonts:send-form")});L.async(u,"Google Fonts updated successfully.",void 0,"Updating Google Fonts...")}return(t,e)=>{var l;const u=F("VueSelect"),i=F("Icon"),r=F("highlightjs");return x(),C(H,null,[s("span",Be,"» "+J(q(j)("Edit Google Fonts","yabe-webfont")),1),s("div",Ne,[s("form",{id:"post-body",onSubmit:fe,class:"metabox-holder columns-2 cols:auto"},[s("div",Te,[s("div",je,[s("div",Ae,[e[16]||(e[16]=s("label",{class:"screen-reader-text",for:"title"},"Add title",-1)),g(s("input",{type:"text",name:"title",id:"title",size:"30",required:"","onUpdate:modelValue":e[0]||(e[0]=o=>N.value=o),placeholder:q(j)("Title","yabe-webfont"),autocomplete:"off"},null,8,De),[[E,N.value]])]),e[17]||(e[17]=s("div",{class:"inside"},null,-1))]),s("div",Ie,[s("div",Le,[e[34]||(e[34]=s("h3",null,"Meta",-1)),s("div",Me,[s("div",Ge,[e[18]||(e[18]=s("label",{class:"font:14 lh:20px font:semibold"},"Font Family",-1)),w(Ve,{disabled:"",catalog:ie.value,modelValue:f.value,"onUpdate:modelValue":e[1]||(e[1]=o=>f.value=o)},null,8,["catalog","modelValue"])]),s("div",He,[e[20]||(e[20]=s("label",{for:"display",class:"font:14 lh:20px font:semibold"},"Font Display",-1)),g(s("select",{name:"display",id:"display","onUpdate:modelValue":e[2]||(e[2]=o=>_.value=o),class:"capitalize {capitalize}_option"},e[19]||(e[19]=[we('<option value="auto" data-v-115b4853>auto</option><option value="block" data-v-115b4853>block</option><option value="swap" data-v-115b4853>swap</option><option value="fallback" data-v-115b4853>fallback</option><option value="optional" data-v-115b4853>optional</option>',5)]),512),[[be,_.value]])]),s("div",Oe,[e[21]||(e[21]=s("label",{for:"selector",class:"font:14 lh:20px font:semibold"},"CSS Selector | Fallback Font",-1)),g(s("input",{type:"text",name:"selector",id:"selector","onUpdate:modelValue":e[3]||(e[3]=o=>S.value=o),placeholder:"h1, .title, #lyric | Arial, Helvetica, sans-serif",autocomplete:"off"},null,512),[[E,S.value]])]),s("div",Ye,[e[23]||(e[23]=s("span",{class:"font:14 lh:20px font:semibold"},"Preload",-1)),s("div",Xe,[s("label",We,[g(s("input",{type:"checkbox",name:"preload",id:"preload","onUpdate:modelValue":e[4]||(e[4]=o=>T.value=o)},null,512),[[K,T.value]]),e[22]||(e[22]=A(" Preload files "))])])]),s("div",Ze,[e[24]||(e[24]=s("span",{class:"font:14 lh:20px font:semibold"},"Subsets",-1)),w(u,{disabled:"",multiple:"",options:(l=f.value)==null?void 0:l.subsets.filter(o=>!y.value.includes(o)),modelValue:y.value,"onUpdate:modelValue":e[5]||(e[5]=o=>y.value=o),searchable:!1,placeholder:"Choose subsets"},{"no-options":D(({search:o,searching:n})=>[y.value.length?I("",!0):(x(),C(H,{key:0},[A(" Please choose a font family first. ")],64))]),_:1},8,["options","modelValue"])]),s("div",Je,[e[25]||(e[25]=s("span",{class:"font:14 lh:20px font:semibold"},"File Format",-1)),w(u,{multiple:"",options:h.value?["woff2"]:["woff2","woff","ttf"],modelValue:m.value,"onUpdate:modelValue":e[6]||(e[6]=o=>m.value=o),searchable:!1,placeholder:"Choose formats"},null,8,["options","modelValue"])]),s("div",Ke,[e[27]||(e[27]=s("span",{class:"font:14 lh:20px font:semibold"},"Variable Fonts",-1)),s("div",Qe,[s("label",Fe,[g(s("input",{disabled:"",type:"checkbox",name:"variable",id:"variable","onUpdate:modelValue":e[7]||(e[7]=o=>h.value=o)},null,512),[[K,h.value]]),e[26]||(e[26]=A(" Enable "))])])])]),s("div",et,[s("h3",tt,[e[28]||(e[28]=A("Variants ")),g(s("input",{"onUpdate:modelValue":e[8]||(e[8]=o=>se.value=o),class:"",type:"checkbox",title:"(De)select All"},null,512),[[K,se.value]])]),s("div",st,[e[33]||(e[33]=s("div",{class:"font:semibold font:16 lh:24px"},"Preview :",-1)),h.value?(x(),C(H,{key:0},[a.width.current!==0?(x(),C("div",lt,[e[29]||(e[29]=s("span",{class:"inline-flex align-items:center rl:6 br:0 b:1|solid|gray-30/.5 bg:gray-5 px:12 fg:gray-60 font:12 lh:16px"},"width",-1)),g(s("input",{type:"number","onUpdate:modelValue":e[9]||(e[9]=o=>a.width.current=o),min:a.width.min,max:a.width.max,class:"block min-w:0 w:64 min-h:0 h:24 mx:0 py:0 px:8 r:0 rr:6 b:1|solid|gray-30/.5 font:12 lh:16px"},null,8,ot),[[E,a.width.current]]),g(s("input",{type:"range","onUpdate:modelValue":e[10]||(e[10]=o=>a.width.current=o),min:a.width.min,max:a.width.max,class:"w:64 appearance:none accent:#0050FF h:4 align-self:center"},null,8,at),[[E,a.width.current]])])):I("",!0),a.weight.current!==0?(x(),C("div",nt,[e[30]||(e[30]=s("span",{class:"inline-flex align-items:center rl:6 br:0 b:1|solid|gray-30/.5 bg:gray-5 px:12 fg:gray-60 font:12 lh:16px"},"weight",-1)),g(s("input",{type:"number","onUpdate:modelValue":e[11]||(e[11]=o=>a.weight.current=o),min:a.weight.min,max:a.weight.max,class:"block min-w:0 w:64 min-h:0 h:24 mx:0 py:0 px:8 r:0 rr:6 b:1|solid|gray-30/.5 font:12 lh:16px"},null,8,it),[[E,a.weight.current]]),g(s("input",{type:"range","onUpdate:modelValue":e[12]||(e[12]=o=>a.weight.current=o),min:a.weight.min,max:a.weight.max,class:"w:64 appearance:none accent:#0050FF h:4 align-self:center"},null,8,rt),[[E,a.weight.current]])])):I("",!0)],64)):I("",!0),s("div",ut,[e[32]||(e[32]=s("span",{class:"inline-flex align-items:center rl:6 br:0 b:1|solid|gray-30/.5 bg:gray-5 px:12 fg:gray-60 font:12 lh:16px"},"size",-1)),s("div",dt,[g(s("input",{type:"number","onUpdate:modelValue":e[13]||(e[13]=o=>a.fontSize=o),class:"block min-w:0 w:64 min-h:0 h:24 mx:0 py:0 px:8 r:0 rr:6 b:1|solid|gray-30/.5 font:12 lh:16px"},null,512),[[E,a.fontSize]]),e[31]||(e[31]=s("div",{class:"abs top:0 bottom:0 right:0 flex py:4 pr:6"},[s("kbd",{class:"inline-flex align-items:center r:4 b:1|solid|gray-20 px:4 fg:gray-60"},"px")],-1))]),g(s("input",{type:"range","onUpdate:modelValue":e[14]||(e[14]=o=>a.fontSize=o),max:"200",class:"w:64 appearance:none accent:#0050FF h:4 align-self:center"},null,512),[[E,a.fontSize]])])])]),s("div",ft,[s("div",mt,[(x(!0),C(H,null,ye(p.value,o=>(x(),Q(Se,{item:o,preview:a,"is-variable":h.value,"font-data":f.value},null,8,["item","preview","is-variable","font-data"]))),256))])])])])]),s("div",ct,[s("div",null,[s("div",pt,[e[38]||(e[38]=s("div",{class:"postbox-header"},[s("h2",{class:""},"Publish")],-1)),s("div",gt,[s("div",vt,[s("div",ht,[s("div",bt,[s("div",wt,[s("div",yt,[c.value?(x(),Q(i,{key:0,icon:"fa6-solid:rocket",class:"h:16 w:16 flex-shrink:0 fg:gray-90"})):(x(),Q(i,{key:1,icon:"fa6-solid:rocket",class:"h:16 w:16 flex-shrink:0 fg:gray-40"})),e[35]||(e[35]=s("span",{class:"pl:10 pr:8"},"Status:",-1)),w(q(Pe),{as:"div",class:"flex align-items:center"},{default:D(()=>[w(q(ze),{modelValue:c.value,"onUpdate:modelValue":e[15]||(e[15]=o=>c.value=o),class:B([[c.value?"bg:sky-60":"opacity:.5 bg:gray-85"],"rel inline-flex p:0 h:24 w:44 flex-shrink:0 cursor:pointer rounded b:2 b:transparent transition-property:color,background-color,border-color,text-decoration-color,fill,stroke transition-duration:200 transition-timing-function:cubic-bezier(0.4,0,0.2,1) box-shadow:rgb(255,255,255)|0|0|0|2,rgb(14,165,233)|0|0|0|4,rgba(0,0,0,0)|0|0|0|0:focus outline:2|solid|transparent:focus"])},{default:D(()=>[s("span",{class:B([[c.value?"translateX(20)":"translateX(0)"],"pointer-events:none rel inline-block font:12 h:20 w:20 rounded bg:white transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter transition-duration:200 transition-timing-function:cubic-bezier(0.4,0,0.2,1) box-shadow:rgb(255,255,255)|0|0|0|0,rgba(59,130,246,0.5)|0|0|0|0,rgba(0,0,0,0.1)|0|1|3|0,rgba(0,0,0,0.1)|0|1|2|-1"])},[s("span",{"aria-hidden":"true",class:B([[c.value?"opacity:0 transition-timing-function:ease-out transition-duration:100":"opacity:1 transition-timing-function:ease-in transition-duration:200"],"abs inset:0 flex h:full w:full align-items:center justify-content:center tw-transition-opacity"])},[w(i,{icon:"fa6-solid:xmark",class:"fg:gray-60"})],2),s("span",{"aria-hidden":"true",class:B([[c.value?"opacity:1 transition-timing-function:ease-in transition-duration:200":"opacity:0 transition-timing-function:ease-out transition-duration:100"],"abs inset:0 flex h:full w:full align-items:center justify-content:center tw-transition-opacity"])},[w(i,{icon:"fa6-solid:check",class:"fg:sky-60"})],2)],2)]),_:1},8,["modelValue","class"]),w(q(Re),{as:"span",class:B([[c.value?"fg:black":"fg:gray-60"],"ml:8 font:medium tw-cursor-pointer"])},{default:D(()=>[A(J(c.value?"published":"draft"),1)]),_:1},8,["class"])]),_:1})])])]),e[36]||(e[36]=s("div",{class:"clear"},null,-1))]),s("div",xt,[s("div",_t,[s("a",{class:B([{"cursor:wait":q(k).isBusy},"fg:red-80 text:underline cursor:pointer fg:red-90:hover"]),onClick:de},J(X.value?"Deleting...":"Trash"),3)]),s("div",$t,[s("button",{type:"submit",name:"save",id:"save",disabled:q(k).isBusy,class:"button button-primary button-large",value:"save"},"Save",8,kt)]),e[37]||(e[37]=s("div",{class:"clear"},null,-1))])])])])]),w(Ee,{"font-data":f.value},null,8,["font-data"])]),s("div",Vt,[w(xe,{name:"css-preview"},{default:D(()=>[oe.value?(x(),C("div",Et,[e[39]||(e[39]=s("h3",{class:"mt:20"},"CSS Preview",-1)),w(r,{language:"css",code:oe.value},null,8,["code"])])):I("",!0)]),_:1})])],32)])],64)}}},Dt=me(St,[["__scopeId","data-v-115b4853"]]);export{Dt as default};
