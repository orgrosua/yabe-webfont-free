import{D as G,E as O,M as W,e as g,f as j,G as Z,H as I,m as B,n as J,p as K,r as F,g as Q,o as b,c as U,b as e,t as D,h as r,j as p,v as Y,y as ee,d as S,a as d,u as _,w as x,x as te,q as M,T as oe,F as se,s as w,k as ne,N as ie}from"./app-Dab3EAyZ.js";import{d as ae}from"./sortBy-BPW1RWep.js";import{a as le,b as re,u as ce}from"./notifier-CY_O8ix7.js";import{u as de,_ as ue,T as fe}from"./TheBulkUpload-B0pUas7X.js";import{u as pe,a as me,o as he}from"./vue-contenteditable.es-Bx-GnrIk.js";import"./_Uint8Array-Dz8rZXn2.js";import"./get-CSpXgK6E.js";const ve={class:"mr:8 font:24 lh:32px"},ge={id:"poststuff"},_e={id:"post-body-content"},ye={id:"titlediv"},be={id:"titlewrap"},xe=e("label",{class:"screen-reader-text",for:"title"},"Add title",-1),we=["placeholder"],ke=e("div",{class:"inside"},null,-1),Se={class:"postarea wp-editor-expand"},Ve={id:"wp-content-wrap",class:"wp-core-ui mt:32"},$e=e("h3",null,"Meta",-1),Fe={class:"grid grid-cols:12 gap:16"},Ue={class:"grid-col-span:4 flex flex:col gap:6"},ze=e("label",{for:"family",class:"font:14 lh:20px font:semibold"},"Font Family",-1),Ce={class:"grid-col-span:2 flex flex:col gap:6"},Ne=e("label",{for:"display",class:"font:14 lh:20px font:semibold"},"Font Display",-1),Te=ie('<option value="auto">auto</option><option value="block">block</option><option value="swap">swap</option><option value="fallback">fallback</option><option value="optional">optional</option>',5),Pe=[Te],je={class:"grid-col-span:4 flex flex:col gap:6"},Be=e("label",{for:"selector",class:"font:14 lh:20px font:semibold"},"CSS Selector | Fallback Font",-1),De={class:"grid-col-span:2 flex flex:col gap:6"},Me=e("span",{class:"font:14 lh:20px font:semibold"},"Preload",-1),Ee={class:"flex:1|1|0% flex align-items:center"},Re={for:"preload",class:"font:14 lh:20px"},qe={class:"flex align-items:center {ml:8}>*+* mt:32 mb:12"},Ae={class:"flex:1|1|0%"},He={class:"font-files"},Le={class:"grid gap:16"},Xe={id:"postbox-container-1",class:"postbox-container"},Ge={id:"submitdiv",class:"postbox"},Oe=e("div",{class:"postbox-header"},[e("h2",{class:""},"Publish")],-1),We={class:"inside"},Ze={class:"submitbox",id:"submitpost"},Ie={id:"minor-publishing"},Je={id:"misc-publishing-actions"},Ke={class:"misc-pub-section"},Qe={class:"py:6 flex align-items:center"},Ye=e("span",{class:"pl:10 pr:8"},"Status:",-1),et=e("div",{class:"clear"},null,-1),tt={id:"major-publishing-actions"},ot={id:"publishing-action"},st=["disabled"],nt=e("div",{class:"clear"},null,-1),it={class:"flex flex:col {mt:8}>*+* py:8 px:8 b:1|solid|gray-30/.5"},at=e("div",{class:"font:semibold font:16 lh:24px"},"Preview :",-1),lt={class:"h:fit flex r:6 shadow-sm"},rt=e("span",{class:"inline-flex align-items:center rl:6 b:1|solid|gray-30/.5 br:0 bg:gray-5 px:12 fg:gray-60 font:12 lh:16px"},"width",-1),ct=["min","max"],dt=["min","max"],ut={class:"h:fit flex r:6 shadow-sm"},ft=e("span",{class:"inline-flex align-items:center rl:6 b:1|solid|gray-30/.5 br:0 bg:gray-5 px:12 fg:gray-60 font:12 lh:16px"},"weight",-1),pt=["min","max"],mt=["min","max"],ht={class:"h:fit flex r:6 shadow-sm"},vt=e("span",{class:"inline-flex align-items:center rl:6 b:1|solid|gray-30/.5 br:0 bg:gray-5 px:12 fg:gray-60 font:12 lh:16px"},"size",-1),gt={class:"h:fit flex align-items:stretch rel r:6 shadow-sm"},_t=e("div",{class:"abs top:0 bottom:0 right:0 flex py:4 pr:6"},[e("kbd",{class:"inline-flex align-items:center r:4 b:1|solid|gray-20 px:4 fg:gray-60"},"px")],-1),yt={id:"postbox-container-2",class:"postbox-container mt:12"},bt={key:0,class:"mt:16"},xt=e("h3",{class:"mt:20"},"CSS Preview",-1),Ct={__name:"Create",setup(wt){const E=le(),R=G(),q=re(),V=ce(),A=O(),$=de(),{fontFaces:m}=W($),h=g(""),i=g(""),y=g("auto"),v=g(""),k=g(!1),u=g(!0);j(i,(o,t)=>{(h.value===""||h.value===t)&&(h.value=o)});const z=()=>{$.add()},n=Z({text:"",fontSize:18,lineHeight:1.5,fontFamily:i,weight:{current:400,min:1,max:1e3},width:{current:100,min:25,max:200}});I("fontFamily",i);function H(){m.value.sort((o,t)=>o.weight===t.weight?o.style==="normal"?-1:1:o.weight-t.weight)}function L(o){switch(o){case"woff2":case"font/woff2":return"woff2";case"woff":case"font/woff":return"woff";case"ttf":case"font/ttf":return"truetype";case"otf":case"font/otf":return"opentype";case"eot":case"font/eot":return"embedded-opentype";default:return"woff2"}}const C=B(()=>{let o="";return i.value&&m.value.forEach(t=>{if(t.comment&&(o+=`/* ${t.comment} */
`),o+=`@font-face {
`,o+=`	font-family: '${i.value}';
`,o+=`	font-style: ${t.style};
`,t.weight!==""&&(o+=`	font-weight: ${t.weight};
`),t.width&&t.width!==""?o+=`	font-stretch: ${t.width};
`:o+=`	font-stretch: 100%;
`,o+=`	font-display: ${t.display||y.value};
`,t.files.length>0){o+="	src: ";let l=t.files.map(a=>{let c=a.attachment_url;try{c=new URL(a.attachment_url).pathname}catch{}return`url('${c}') format("${L(a.extension)}")`});o+=l.join(`,
		`),o+=`;
`}t.unicodeRange&&(o+=`	unicode-range: ${t.unicodeRange};
`),o+=`}

`}),o}),N=B(()=>{let o="";if(!i.value)return o;o+=`
`,o+=C.value;const t=i.value.replace(/[^a-zA-Z0-9\-_]+/g,"-").toLowerCase();let l="",a=[];return v.value&&(a=v.value.split("|").map(c=>c.trim())),a.length>1&&a[1]&&(l=`, ${a[1]}`),o+=`:root {
`,o+=`	--ywf--family-${t}: '${i.value}'${l};
`,o+=`}

`,a.length>0&&a[0]&&(o+=`${a[0]} {
	font-family: var(--ywf--family-${t});
}

`),m.value.forEach(c=>{c.selector&&(o+=`${c.selector} {
`,o+=`	font-family: var(--ywf--family-${t});
`,o+=`	font-style: ${c.style};
`,o+=`	font-weight: ${c.weight};
`,o+=`}

`)}),o=o.replace(/\t/g,"  "),o=o.replace(/<family>/g,i.value),o});let f;j(C,ae((o,t)=>{f&&(f.innerHTML=o.replace(/\t/g,"  "))},1e3));function T(){h.value="",i.value="",v.value="",y.value="auto",k.value=!1,$.reset(),z(),n.text="The quick brown fox jumps over a lazy dog",n.fontSize=18,n.weight={current:400,min:1,max:1e3},n.width={current:100,min:25,max:200}}J(()=>{T(),f=document.querySelector("#yabe-webfont-preview"),f||(f=document.createElement("style"),f.setAttribute("id","yabe-webfont-preview"),document.head.appendChild(f))}),K(()=>{f&&document.head.removeChild(f)});function X(o){o.preventDefault(),V.add("fonts.create.custom:send-form");let t=E.request({method:"POST",url:"/fonts/custom/store",data:{title:h.value,family:i.value,status:u.value,font_faces:m.value,metadata:{preload:k.value,selector:v.value,display:y.value}}}).then(l=>{const a=R.resolve({name:"fonts.edit.custom",params:{id:l.data.id}}).href;A.add({type:"success",message:`<p>Font saved successfully. <a href="${a}">Edit Font</a></p>`}),T()}).finally(()=>{V.remove("fonts.create.custom:send-form")});q.async(t,"Font stored successfully.",void 0,"Storing font...")}return(o,t)=>{const l=F("font-awesome-icon"),a=F("Draggable"),c=F("highlightjs"),P=Q("ripple");return b(),U(se,null,[e("span",ve,"» "+D(o.__("New","yabe-webfont")),1),e("div",ge,[e("form",{id:"post-body",onSubmit:X,class:"metabox-holder columns-2 cols:auto"},[e("div",_e,[e("div",ye,[e("div",be,[xe,r(e("input",{type:"text",name:"title",id:"title",size:"30",required:"","onUpdate:modelValue":t[0]||(t[0]=s=>h.value=s),placeholder:o.__("Title","yabe-webfont"),autocomplete:"off"},null,8,we),[[p,h.value]])]),ke]),e("div",Se,[e("div",Ve,[$e,e("div",Fe,[e("div",Ue,[ze,r(e("input",{type:"text",name:"family",id:"family","onUpdate:modelValue":t[1]||(t[1]=s=>i.value=s),required:"",placeholder:"Font Family",autofocus:"",autocomplete:"off"},null,512),[[p,i.value]])]),e("div",Ce,[Ne,r(e("select",{name:"display",id:"display","onUpdate:modelValue":t[2]||(t[2]=s=>y.value=s),class:"capitalize {capitalize}_option"},Pe,512),[[Y,y.value]])]),e("div",je,[Be,r(e("input",{type:"text",name:"selector",id:"selector","onUpdate:modelValue":t[3]||(t[3]=s=>v.value=s),placeholder:"h1, .title, #lyric | Arial, Helvetica, sans-serif",autocomplete:"off"},null,512),[[p,v.value]])]),e("div",De,[Me,e("div",Ee,[e("label",Re,[r(e("input",{type:"checkbox",name:"preload",id:"preload","onUpdate:modelValue":t[4]||(t[4]=s=>k.value=s)},null,512),[[ee,k.value]]),S(" Preload files ")])])])]),e("div",qe,[e("h3",Ae,[S(" Variants "),d(l,{icon:["fas","arrow-up-1-9"],onClick:H,title:"Sort variants",class:"w:16 h:16 ml:4 cursor:pointer"})]),d(ue,{"font-faces":_(m),family:i.value},null,8,["font-faces","family"]),r((b(),U("button",{type:"button",onClick:z,class:"button my:16"},[S("Add variant")])),[[P]])]),e("div",He,[e("div",Le,[d(a,{modelValue:_(m),"onUpdate:modelValue":t[5]||(t[5]=s=>te(m)?m.value=s:null),tag:"transition-group","item-key":"id","component-data":{name:"font-face"},"ghost-class":"dragged-placeholder",animation:"200"},{item:x(({element:s})=>[e("div",null,[d(fe,{item:s,preview:n,"font-family":i.value},null,8,["item","preview","font-family"])])]),_:1},8,["modelValue"])])])])])]),e("div",Xe,[e("div",null,[e("div",Ge,[Oe,e("div",We,[e("div",Ze,[e("div",Ie,[e("div",Je,[e("div",Ke,[e("div",Qe,[u.value?(b(),M(l,{key:0,icon:["fas","rocket-launch"],class:"h:16 w:16 flex-shrink:0 fg:#8c8f94"})):(b(),M(l,{key:1,icon:["fas","rocket"],class:"h:16 w:16 flex-shrink:0 fg:#8c8f94"})),Ye,d(_(he),{as:"div",class:"flex align-items:center"},{default:x(()=>[d(_(pe),{modelValue:u.value,"onUpdate:modelValue":t[6]||(t[6]=s=>u.value=s),class:w([[u.value?"bg:sky-60":"opacity:.5 bg:gray-85"],"rel inline-flex p:0 h:24 w:44 flex-shrink:0 cursor:pointer rounded b:2 b:transparent transition-property:color,background-color,border-color,text-decoration-color,fill,stroke transition-duration:200 transition-timing-function:cubic-bezier(0.4,0,0.2,1) box-shadow:rgb(255,255,255)|0|0|0|2,rgb(14,165,233)|0|0|0|4,rgba(0,0,0,0)|0|0|0|0:focus outline:2|solid|transparent:focus"])},{default:x(()=>[e("span",{class:w([[u.value?"translateX(20)":"translateX(0)"],"pointer-events:none rel inline-block font:12 h:20 w:20 rounded bg:white transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter transition-duration:200 transition-timing-function:cubic-bezier(0.4,0,0.2,1) box-shadow:rgb(255,255,255)|0|0|0|0,rgba(59,130,246,0.5)|0|0|0|0,rgba(0,0,0,0.1)|0|1|3|0,rgba(0,0,0,0.1)|0|1|2|-1"])},[e("span",{"aria-hidden":"true",class:w([[u.value?"opacity:0 transition-timing-function:ease-out transition-duration:100":"opacity:1 transition-timing-function:ease-in transition-duration:200"],"abs inset:0 flex h:full w:full align-items:center justify-content:center tw-transition-opacity"])},[d(l,{icon:["fas","xmark"],class:"fg:gray-60"})],2),e("span",{"aria-hidden":"true",class:w([[u.value?"opacity:1 transition-timing-function:ease-in transition-duration:200":"opacity:0 transition-timing-function:ease-out transition-duration:100"],"abs inset:0 flex h:full w:full align-items:center justify-content:center tw-transition-opacity"])},[d(l,{icon:["fas","check"],class:"fg:sky-60"})],2)],2)]),_:1},8,["modelValue","class"]),d(_(me),{as:"span",class:w([[u.value?"fg:black":"fg:gray-60"],"ml:8 font:medium tw-cursor-pointer"])},{default:x(()=>[S(D(u.value?"published":"draft"),1)]),_:1},8,["class"])]),_:1})])])]),et]),e("div",tt,[e("div",ot,[e("button",{type:"submit",name:"save",id:"save",disabled:_(V).isBusy,class:"button button-primary button-large",value:"save"},"Save",8,st)]),nt])])])])]),e("div",null,[e("div",it,[at,e("div",lt,[rt,r(e("input",{type:"number","onUpdate:modelValue":t[7]||(t[7]=s=>n.width.current=s),min:n.width.min,max:n.width.max,class:"block min-w:0 w:64 min-h:0 h:24 mx:0 py:0 px:8 r:0 rr:6 b:1|solid|gray-30/.5 font:12 lh:16px"},null,8,ct),[[p,n.width.current]]),r(e("input",{type:"range","onUpdate:modelValue":t[8]||(t[8]=s=>n.width.current=s),min:n.width.min,max:n.width.max,class:"flex:1|1|0% appearance:none accent:#0050FF h:4 align-self:center"},null,8,dt),[[p,n.width.current]])]),e("div",ut,[ft,r(e("input",{type:"number","onUpdate:modelValue":t[9]||(t[9]=s=>n.weight.current=s),min:n.weight.min,max:n.weight.max,class:"block min-w:0 w:64 min-h:0 h:24 mx:0 py:0 px:8 r:0 rr:6 b:1|solid|gray-30/.5 font:12 lh:16px"},null,8,pt),[[p,n.weight.current]]),r(e("input",{type:"range","onUpdate:modelValue":t[10]||(t[10]=s=>n.weight.current=s),min:n.weight.min,max:n.weight.max,class:"flex:1|1|0% appearance:none accent:#0050FF h:4 align-self:center"},null,8,mt),[[p,n.weight.current]])]),e("div",ht,[vt,e("div",gt,[r(e("input",{type:"number","onUpdate:modelValue":t[11]||(t[11]=s=>n.fontSize=s),class:"block min-w:0 w:64 min-h:0 h:24 mx:0 py:0 px:8 r:0 rr:6 b:1|solid|gray-30/.5 font:12 lh:16px"},null,512),[[p,n.fontSize]]),_t]),r(e("input",{type:"range","onUpdate:modelValue":t[12]||(t[12]=s=>n.fontSize=s),max:"200",class:"flex:1|1|0% appearance:none accent:#0050FF h:4 align-self:center"},null,512),[[p,n.fontSize]])])])])]),e("div",yt,[d(oe,{name:"css-preview"},{default:x(()=>[N.value?(b(),U("div",bt,[xt,d(c,{language:"css",code:N.value},null,8,["code"])])):ne("",!0)]),_:1})])],32)])],64)}}};export{Ct as default};