import{A as Z,K as Q,e as g,f as A,B as ee,m as P,n as te,N as oe,H as $,p as se,c as q,b as t,t as F,u as m,g as u,j as y,v as ne,L as ae,y as le,d as k,a as c,w as U,x as ie,q as Y,s as V,T as re,F as de,I as ue,r as E,o as C,k as fe,G as ce,J as pe,i as me}from"./app-B__gg-FA.js";import{d as ve}from"./sortBy-70NnmMmY.js";import{i as ge}from"./isEqual-BYi-8BMV.js";import{c as ye}from"./cloneDeep-DKPH_8Zr.js";import{a as he}from"./index-CAo9eUGP.js";import{a as be,u as we,b as xe}from"./notifier-CNrCw-5Q.js";import{u as _e,_ as ke,T as Ve}from"./TheBulkUpload-CKoET_Z8.js";import{u as Se,d as $e,o as Fe}from"./vue-contenteditable.es-CbGfRrsL.js";import"./_Uint8Array-CGOLgoAz.js";import"./get-DrT8Bxqf.js";const Ue={class:"mr:8 font:24 lh:32px"},Ce={id:"poststuff"},ze={id:"post-body-content"},De={id:"titlediv"},Te={id:"titlewrap"},Ne=["placeholder"],Be={class:"postarea wp-editor-expand"},Ae={id:"wp-content-wrap",class:"wp-core-ui mt:32"},Pe={class:"grid grid-cols:12 gap:16"},qe={class:"grid-col-span:4 flex flex:col gap:6"},Ee={class:"grid-col-span:2 flex flex:col gap:6"},Re={class:"grid-col-span:4 flex flex:col gap:6"},je={class:"grid-col-span:2 flex flex:col gap:6"},Le={class:"flex:1|1|0% flex align-items:center"},Me={for:"preload",class:"font:14 lh:20px"},Ie={class:"flex align-items:center {ml:8}>*+* mt:32 mb:12"},He={class:"flex:1|1|0%"},Ye={class:"font-files"},Ge={class:"grid gap:16"},Oe={id:"postbox-container-1",class:"postbox-container"},Xe={id:"submitdiv",class:"postbox"},Je={class:"inside"},Ke={class:"submitbox",id:"submitpost"},We={id:"minor-publishing"},Ze={id:"misc-publishing-actions"},Qe={class:"misc-pub-section"},et={class:"py:6 flex align-items:center"},tt={id:"major-publishing-actions"},ot={id:"delete-action"},st={id:"publishing-action"},nt=["disabled"],at={class:"flex flex:col {mt:8}>*+* py:8 px:8 b:1|solid|gray-30/.5"},lt={class:"h:fit flex r:6 shadow-sm"},it=["min","max"],rt=["min","max"],dt={class:"h:fit flex r:6 shadow-sm"},ut=["min","max"],ft=["min","max"],ct={class:"h:fit flex r:6 shadow-sm"},pt={class:"h:fit flex align-items:stretch rel r:6 shadow-sm"},mt={id:"postbox-container-2",class:"postbox-container mt:12"},vt={key:0,class:"mt:16"},gt={id:"post-status-info",class:"b:1|solid|#c3c4c7"},yt={class:"pl:8"},ht=["title"],bt={class:"autosave-info"},wt=["title"],Tt={__name:"Edit",setup(xt){const G=ce(),R=ue(),T=be(),h=we(),z=xe(),D=Z(),j=_e(),{fontFaces:p}=Q(j),b=g(""),a=g(""),x=g("auto"),w=g(""),S=g(!1),d=g(!0),l=g({}),N=g(!1);A(a,(o,e)=>{(b.value===""||b.value===e)&&(b.value=o)});const O=()=>{j.add()},n=ee({text:"The quick brown fox jumps over a lazy dog",fontSize:18,lineHeight:1.5,fontFamily:a,weight:{current:400,min:1,max:1e3},width:{current:100,min:25,max:200}});pe("fontFamily",a);function X(o){switch(o){case"woff2":case"font/woff2":return"woff2";case"woff":case"font/woff":return"woff";case"ttf":case"font/ttf":return"truetype";case"otf":case"font/otf":return"opentype";case"eot":case"font/eot":return"embedded-opentype";default:return"woff2"}}function J(){p.value.sort((o,e)=>o.weight===e.weight?o.style==="normal"?-1:1:o.weight-e.weight)}const L=P(()=>{let o="";return a.value&&p.value.forEach(e=>{if(e.comment&&(o+=`/* ${e.comment} */
`),o+=`@font-face {
`,o+=`	font-family: '${a.value}';
`,o+=`	font-style: ${e.style};
`,e.weight!==""&&(o+=`	font-weight: ${e.weight};
`),e.width&&e.width!==""?o+=`	font-stretch: ${e.width};
`:o+=`	font-stretch: 100%;
`,o+=`	font-display: ${e.display||x.value};
`,e.files.length>0){o+="	src: ";let i=e.files.map(r=>{let f=r.attachment_url;try{f=new URL(r.attachment_url).pathname}catch{}return`url('${f}') format("${X(r.extension)}")`});o+=i.join(`,
		`),o+=`;
`}e.unicodeRange&&(o+=`	unicode-range: ${e.unicodeRange};
`),o+=`}

`}),o}),M=P(()=>{let o="";if(!a.value)return o;o+=`
`,o+=L.value;const e=a.value.replace(/[^a-zA-Z0-9\-_]+/g,"-").toLowerCase();let i="",r=[];return w.value&&(r=w.value.split("|").map(f=>f.trim())),r.length>1&&r[1]&&(i=`, ${r[1]}`),o+=`:root {
`,o+=`	--ywf--family-${e}: '${a.value}'${i};
`,o+=`}

`,r.length>0&&r[0]&&(o+=`${r[0]} {
	font-family: var(--ywf--family-${e});
}

`),p.value.forEach(f=>{f.selector&&(o+=`${f.selector} {
`,o+=`	font-family: var(--ywf--family-${e});
`,o+=`	font-style: ${f.style};
`,o+=`	font-weight: ${f.weight};
`,o+=`}

`)}),o=o.replace(/\t/g,"  "),o=o.replace(/<family>/g,a.value),o});let v;A(L,ve((o,e)=>{v&&(v.innerHTML=o.replace(/\t/g,"  "))},1e3));function K(){confirm($("Are you sure you want to delete the font?","yabe-webfont"))&&(N.value=!0,h.add("fonts.edit.custom:delete"),T.request({method:"POST",url:`/fonts/delete/${l.value.id}`}).then(o=>{R.push({name:"fonts.index"})}).catch(function(o){z.alert(o.message)}).finally(()=>{N.value=!1,h.remove("fonts.edit.custom:delete")}))}async function I(){return h.add("fonts.edit.custom:fetch-item"),T.request({method:"GET",url:`/fonts/detail/${G.params.id}`}).then(o=>o.data).then(o=>{a.value=o.family,b.value=o.title,x.value=o.metadata.display,w.value=o.metadata.selector,S.value=o.metadata.preload,d.value=o.status,p.value=ye(o.font_faces),l.value=o}).finally(()=>{h.remove("fonts.edit.custom:fetch-item")})}function W(o){o.preventDefault(),h.add("fonts.edit.custom:send-form");let e=T.request({method:"POST",url:`/fonts/custom/update/${l.value.id}`,data:{title:b.value,family:a.value,status:d.value,font_faces:p.value,metadata:{preload:S.value,selector:w.value,display:x.value}}}).then(i=>{D.add({type:"success",message:"<p>Font updated successfully.</p>"}),I()}).finally(()=>{h.remove("fonts.edit.custom:send-form")});z.async(e,"Font updated successfully.",void 0,"Updating the font...")}te(async()=>{let o=I();z.async(o,"Font details loaded.",e=>{z.alert(e.response&&e.response.status===404?"Font not found.":"Failed to load font details."),R.go(-1)},"Fetching font details..."),v=document.querySelector("#yabe-webfont-preview"),v||(v=document.createElement("style"),v.setAttribute("id","yabe-webfont-preview"),document.head.appendChild(v))});const B=P(()=>l.value?b.value!==l.value.title||a.value!==l.value.family||d.value!==l.value.status||x.value!==l.value.metadata.display||w.value!==l.value.metadata.selector||S.value!==l.value.metadata.preload||!ge(p.value,l.value.font_faces):!1),_=g(null);return A(B,(o,e)=>{o&&!_.value?_.value=D.add({type:"warning",message:"<p>You have unsaved changes.</p>"}):(D.remove(_.value),_.value=null)}),oe((o,e,i)=>{B.value&&!confirm($("You have unsaved changes. Are you sure you want to leave?","yabe-webfont"))||i()}),window.onbeforeunload=function(o){if(B.value)return $("You have unsaved changes. Are you sure you want to leave?","yabe-webfont")},se(()=>{window.onbeforeunload=null,_.value&&D.remove(_.value),v&&document.head.removeChild(v)}),(o,e)=>{const i=E("Icon"),r=E("Draggable"),f=E("highlightjs"),H=me("ripple");return C(),q(de,null,[t("span",Ue,"» "+F(m($)("Edit","yabe-webfont")),1),t("div",Ce,[t("form",{id:"post-body",onSubmit:W,class:"metabox-holder columns-2 cols:auto"},[t("div",ze,[t("div",De,[t("div",Te,[e[13]||(e[13]=t("label",{class:"screen-reader-text",for:"title"},"Add title",-1)),u(t("input",{type:"text",name:"title",id:"title",size:"30",required:"","onUpdate:modelValue":e[0]||(e[0]=s=>b.value=s),placeholder:m($)("Title","yabe-webfont"),autocomplete:"off"},null,8,Ne),[[y,b.value]])]),e[14]||(e[14]=t("div",{class:"inside"},null,-1))]),t("div",Be,[t("div",Ae,[e[23]||(e[23]=t("h3",null,"Meta",-1)),t("div",Pe,[t("div",qe,[e[15]||(e[15]=t("label",{for:"family",class:"font:14 lh:20px font:semibold"},"Font Family",-1)),u(t("input",{type:"text",name:"family",id:"family","onUpdate:modelValue":e[1]||(e[1]=s=>a.value=s),required:"",placeholder:"Font Family",autocomplete:"off"},null,512),[[y,a.value]])]),t("div",Ee,[e[17]||(e[17]=t("label",{for:"display",class:"font:14 lh:20px font:semibold"},"Font Display",-1)),u(t("select",{name:"display",id:"display","onUpdate:modelValue":e[2]||(e[2]=s=>x.value=s),class:"capitalize {capitalize}_option"},e[16]||(e[16]=[ae('<option value="auto">auto</option><option value="block">block</option><option value="swap">swap</option><option value="fallback">fallback</option><option value="optional">optional</option>',5)]),512),[[ne,x.value]])]),t("div",Re,[e[18]||(e[18]=t("label",{for:"selector",class:"font:14 lh:20px font:semibold"},"CSS Selector | Fallback Font",-1)),u(t("input",{type:"text",name:"selector",id:"selector","onUpdate:modelValue":e[3]||(e[3]=s=>w.value=s),placeholder:"h1, .title, #lyric | Arial, Helvetica, sans-serif",autocomplete:"off"},null,512),[[y,w.value]])]),t("div",je,[e[20]||(e[20]=t("span",{class:"font:14 lh:20px font:semibold"},"Preload",-1)),t("div",Le,[t("label",Me,[u(t("input",{type:"checkbox",name:"preload",id:"preload","onUpdate:modelValue":e[4]||(e[4]=s=>S.value=s)},null,512),[[le,S.value]]),e[19]||(e[19]=k(" Preload files "))])])])]),t("div",Ie,[t("h3",He,[e[21]||(e[21]=k(" Variants ")),c(i,{icon:"fa6-solid:arrow-up-1-9",onClick:J,title:"Sort variants",class:"w:16 h:16 ml:4 cursor:pointer"})]),c(ke,{"font-faces":m(p),family:a.value},null,8,["font-faces","family"]),u((C(),q("button",{type:"button",onClick:O,class:"button my:16"},e[22]||(e[22]=[k("Add variant")]))),[[H]])]),t("div",Ye,[t("div",Ge,[c(r,{modelValue:m(p),"onUpdate:modelValue":e[5]||(e[5]=s=>ie(p)?p.value=s:null),tag:"transition-group","item-key":"id","component-data":{name:"font-face"},"ghost-class":"dragged-placeholder",animation:"200"},{item:U(({element:s})=>[t("div",null,[c(Ve,{item:s,preview:n,"font-family":a.value},null,8,["item","preview","font-family"])])]),_:1},8,["modelValue"])])])])])]),t("div",Oe,[t("div",null,[t("div",Xe,[e[27]||(e[27]=t("div",{class:"postbox-header"},[t("h2",{class:""},"Publish")],-1)),t("div",Je,[t("div",Ke,[t("div",We,[t("div",Ze,[t("div",Qe,[t("div",et,[d.value?(C(),Y(i,{key:0,icon:"fa6-solid:rocket",class:"h:16 w:16 flex-shrink:0 fg:gray-90"})):(C(),Y(i,{key:1,icon:"fa6-solid:rocket",class:"h:16 w:16 flex-shrink:0 fg:gray-40"})),e[24]||(e[24]=t("span",{class:"pl:10 pr:8"},"Status:",-1)),c(m(Fe),{as:"div",class:"flex align-items:center"},{default:U(()=>[c(m(Se),{modelValue:d.value,"onUpdate:modelValue":e[6]||(e[6]=s=>d.value=s),class:V([[d.value?"bg:sky-60":"opacity:.5 bg:gray-85"],"rel inline-flex p:0 h:24 w:44 flex-shrink:0 cursor:pointer rounded b:2 b:transparent transition-property:color,background-color,border-color,text-decoration-color,fill,stroke transition-duration:200 transition-timing-function:cubic-bezier(0.4,0,0.2,1) box-shadow:rgb(255,255,255)|0|0|0|2,rgb(14,165,233)|0|0|0|4,rgba(0,0,0,0)|0|0|0|0:focus outline:2|solid|transparent:focus"])},{default:U(()=>[t("span",{class:V([[d.value?"translateX(20)":"translateX(0)"],"pointer-events:none rel inline-block font:12 h:20 w:20 rounded bg:white transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter transition-duration:200 transition-timing-function:cubic-bezier(0.4,0,0.2,1) box-shadow:rgb(255,255,255)|0|0|0|0,rgba(59,130,246,0.5)|0|0|0|0,rgba(0,0,0,0.1)|0|1|3|0,rgba(0,0,0,0.1)|0|1|2|-1"])},[t("span",{"aria-hidden":"true",class:V([[d.value?"opacity:0 transition-timing-function:ease-out transition-duration:100":"opacity:1 transition-timing-function:ease-in transition-duration:200"],"abs inset:0 flex h:full w:full align-items:center justify-content:center tw-transition-opacity"])},[c(i,{icon:"fa6-solid:xmark",class:"fg:gray-60"})],2),t("span",{"aria-hidden":"true",class:V([[d.value?"opacity:1 transition-timing-function:ease-in transition-duration:200":"opacity:0 transition-timing-function:ease-out transition-duration:100"],"abs inset:0 flex h:full w:full align-items:center justify-content:center tw-transition-opacity"])},[c(i,{icon:"fa6-solid:check",class:"fg:sky-60"})],2)],2)]),_:1},8,["modelValue","class"]),c(m($e),{as:"span",class:V([[d.value?"fg:black":"fg:gray-60"],"ml:8 font:medium tw-cursor-pointer"])},{default:U(()=>[k(F(d.value?"published":"draft"),1)]),_:1},8,["class"])]),_:1})])])]),e[25]||(e[25]=t("div",{class:"clear"},null,-1))]),t("div",tt,[t("div",ot,[t("a",{class:V([{"cursor:wait":m(h).isBusy},"fg:red-80 text:underline cursor:pointer fg:red-90:hover"]),onClick:K},F(N.value?"Deleting...":"Trash"),3)]),t("div",st,[t("button",{type:"submit",name:"save",id:"save",disabled:m(h).isBusy,class:"button button-primary button-large",value:"save"},"Save",8,nt)]),e[26]||(e[26]=t("div",{class:"clear"},null,-1))])])])])]),t("div",null,[t("div",at,[e[32]||(e[32]=t("div",{class:"font:semibold font:16 lh:24px"},"Preview :",-1)),t("div",lt,[e[28]||(e[28]=t("span",{class:"inline-flex align-items:center rl:6 b:1|solid|gray-30/.5 br:0 bg:gray-5 px:12 fg:gray-60 font:12 lh:16px"},"width",-1)),u(t("input",{type:"number","onUpdate:modelValue":e[7]||(e[7]=s=>n.width.current=s),min:n.width.min,max:n.width.max,class:"block min-w:0 w:64 min-h:0 h:24 mx:0 py:0 px:8 r:0 rr:6 b:1|solid|gray-30/.5 font:12 lh:16px"},null,8,it),[[y,n.width.current]]),u(t("input",{type:"range","onUpdate:modelValue":e[8]||(e[8]=s=>n.width.current=s),min:n.width.min,max:n.width.max,class:"flex:1|1|0% appearance:none accent:#0050FF h:4 align-self:center"},null,8,rt),[[y,n.width.current]])]),t("div",dt,[e[29]||(e[29]=t("span",{class:"inline-flex align-items:center rl:6 b:1|solid|gray-30/.5 br:0 bg:gray-5 px:12 fg:gray-60 font:12 lh:16px"},"weight",-1)),u(t("input",{type:"number","onUpdate:modelValue":e[9]||(e[9]=s=>n.weight.current=s),min:n.weight.min,max:n.weight.max,class:"block min-w:0 w:64 min-h:0 h:24 mx:0 py:0 px:8 r:0 rr:6 b:1|solid|gray-30/.5 font:12 lh:16px"},null,8,ut),[[y,n.weight.current]]),u(t("input",{type:"range","onUpdate:modelValue":e[10]||(e[10]=s=>n.weight.current=s),min:n.weight.min,max:n.weight.max,class:"flex:1|1|0% appearance:none accent:#0050FF h:4 align-self:center"},null,8,ft),[[y,n.weight.current]])]),t("div",ct,[e[31]||(e[31]=t("span",{class:"inline-flex align-items:center rl:6 b:1|solid|gray-30/.5 br:0 bg:gray-5 px:12 fg:gray-60 font:12 lh:16px"},"size",-1)),t("div",pt,[u(t("input",{type:"number","onUpdate:modelValue":e[11]||(e[11]=s=>n.fontSize=s),class:"block min-w:0 w:64 min-h:0 h:24 mx:0 py:0 px:8 r:0 rr:6 b:1|solid|gray-30/.5 font:12 lh:16px"},null,512),[[y,n.fontSize]]),e[30]||(e[30]=t("div",{class:"abs top:0 bottom:0 right:0 flex py:4 pr:6"},[t("kbd",{class:"inline-flex align-items:center r:4 b:1|solid|gray-20 px:4 fg:gray-60"},"px")],-1))]),u(t("input",{type:"range","onUpdate:modelValue":e[12]||(e[12]=s=>n.fontSize=s),max:"200",class:"flex:1|1|0% appearance:none accent:#0050FF h:4 align-self:center"},null,512),[[y,n.fontSize]])])])])]),t("div",mt,[c(re,{name:"css-preview"},{default:U(()=>[M.value?(C(),q("div",vt,[e[33]||(e[33]=t("h3",{class:"mt:20"},"CSS Preview",-1)),c(f,{language:"css",code:M.value},null,8,["code"])])):fe("",!0)]),_:1}),t("div",null,[t("table",gt,[t("tbody",null,[t("tr",null,[t("td",yt,[e[34]||(e[34]=k(" ID: ")),t("span",{title:l.value.slug},F(l.value.id),9,ht)]),t("td",bt,[e[35]||(e[35]=k(" Last edited on ")),t("span",{title:new Date(l.value.updated_at*1e3),class:"text:underline decoration-dotted text-gray-700"},F(m(he)(new Date(l.value.updated_at*1e3))),9,wt)])])])])])])],32)])],64)}}};export{Tt as default};
