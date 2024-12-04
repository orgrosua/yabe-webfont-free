import{e as T,f as V,o,c as d,g as B,v as me,b as e,t as i,F as D,h as Z,u as l,d as m,i as ee,j as G,k as C,_ as ge,l as ye,m as Q,n as be,p as he,r as H,q as N,w as I,s as q,x as ve,y as Y,a as S,z as we,T as ke,A as xe,B as X,C as $e,D as _e,E as Be,G as Pe,H as h,I as qe,J as Se}from"./app-B__gg-FA.js";import{c as Ae}from"./cloneDeep-DKPH_8Zr.js";import{u as W,a as Ce,b as De}from"./notifier-CNrCw-5Q.js";import{a as Re}from"./index-CAo9eUGP.js";import{u as re,_ as Ee}from"./vue-contenteditable.es-CbGfRrsL.js";import"./_Uint8Array-CGOLgoAz.js";const Ie={class:"alignleft actions bulkactions"},Te=["disabled"],Ne={value:"-1"},Ue=["value"],je=["disabled"],le={__name:"TheBulkAction",props:{actions:{type:Array,default:()=>[]}},emits:["bulkActions"],setup(n,{emit:k}){const _=n,g=W(),y=T("-1");return V(()=>_.actions,()=>{y.value="-1"}),(P,v)=>{const r=ee("ripple");return o(),d("div",Ie,[B(e("select",{id:"bulk-action-selector-top","onUpdate:modelValue":v[0]||(v[0]=x=>y.value=x),name:"action",disabled:l(g).isBusy},[e("option",Ne,i(P.__("Bulk actions","yabe-webfont")),1),(o(!0),d(D,null,Z(n.actions,x=>(o(),d("option",{key:x.key,value:x.key},i(x.label),9,Ue))),128))],8,Te),[[me,y.value]]),B((o(),d("button",{type:"submit",class:"button action",disabled:l(g).isBusy,onClick:v[1]||(v[1]=x=>P.$emit("bulkActions",y.value))},[m(i(P.__("Apply","yabe-webfont")),1)],8,je)),[[r]])])}}},ze={class:"pagination-links"},Me=["disabled"],Ve=["disabled"],Fe={class:"paging-input mx:0.5"},Oe=["disabled","max"],Le={class:"tablenav-paging-text mx:0.5"},Ge={class:"total-pages"},He=["disabled"],We=["disabled"],ie={__name:"ThePagination",props:{isEnableGoto:{type:Boolean,default:!1,required:!1},firstPage:{type:Boolean,default:!1,required:!1},previousPage:{type:Boolean,default:!1,required:!1},nextPage:{type:Boolean,default:!1,required:!1},lastPage:{type:Boolean,default:!1,required:!1},totalPage:{type:Number,default:0,required:!1},currentPage:{type:Number,default:0,required:!1}},emits:["changePage"],setup(n,{emit:k}){const _=n,g=W(),y=k,P=T(_.currentPage);return V(P,(v,r)=>{v>0&&v<=_.totalPage&&v!==r&&v!==_.currentPage&&y("changePage",v)}),V(()=>_.currentPage,(v,r)=>{v!==r&&(P.value=_.currentPage)}),(v,r)=>{const x=ee("ripple");return o(),d("span",ze,[B((o(),d("button",{type:"button",disabled:l(g).isBusy||!n.firstPage,class:"tablenav-pages-navspan button mx:0.5",onClick:r[0]||(r[0]=A=>v.$emit("changePage",1))},r[5]||(r[5]=[m(" « ")]),8,Me)),[[x]]),B((o(),d("button",{type:"button",disabled:l(g).isBusy||!n.previousPage,class:"tablenav-pages-navspan button mx:0.5",onClick:r[1]||(r[1]=A=>v.$emit("changePage",n.currentPage-1))},r[6]||(r[6]=[m(" ‹ ")]),8,Ve)),[[x]]),e("span",Fe,[n.isEnableGoto?B((o(),d("input",{key:0,"onUpdate:modelValue":r[2]||(r[2]=A=>P.value=A),class:"current-page w-14",type:"number",disabled:l(g).isBusy,min:"1",max:n.totalPage},null,8,Oe)),[[G,P.value,void 0,{number:!0}]]):C("",!0),e("span",Le,[m(i(n.isEnableGoto===!1?n.currentPage:"")+" of ",1),e("span",Ge,i(n.totalPage),1)])]),B((o(),d("button",{type:"button",disabled:l(g).isBusy||!n.nextPage,class:"next-page button mx:0.5",onClick:r[3]||(r[3]=A=>v.$emit("changePage",n.currentPage+1))},r[7]||(r[7]=[m(" › ")]),8,He)),[[x]]),B((o(),d("button",{type:"button",disabled:l(g).isBusy||!n.lastPage,class:"tablenav-pages-navspan button mx:0.5",onClick:r[4]||(r[4]=A=>v.$emit("changePage",n.totalPage))},r[8]||(r[8]=[m(" » ")]),8,We)),[[x]])])}}},Je={key:0,class:"plugin-deleted-tr inactive deleted"},Ke={colspan:"7",class:"plugin-update colspanchange"},Xe={key:1,class:"plugin-deleted-tr inactive deleted"},Ze={colspan:"7",class:"plugin-update colspanchange"},Qe=["value","disabled"],Ye={key:0,width:"1%",class:"manage-column vertical:middle"},et={width:"20%",class:"vertical:middle rel"},tt={class:"flex align-items:center"},st={key:0,title:"Google Fonts",class:"flex align-items:center mr:6"},nt={key:1,title:"Adobe Fonts",class:"flex align-items:center mr:6"},at=["href"],ot={class:"invisible .group:hover_{visible} fg:gray-40 font-normal pl:4"},lt={class:"row-actions visible"},it={width:"20%",class:"vertical:middle"},rt={class:"group flex align-items:center"},dt={class:"group-hover:hidden"},ut={class:"hidden group-hover:block font:semibold"},ct={class:"text-[#1fa87a]"},ft={width:"10%",class:"vertical:middle"},pt={class:"flex align-items:center {ml:12}>*+*"},mt=["title"],gt={class:"vertical:middle"},yt={__name:"TheFontIndexRow",props:{item:{type:Object,required:!0},preview:{type:Object,required:!0}},emits:["delete","restore","updateStatus"],setup(n,{emit:k}){const _=W(),g=n,y=k,P=ye("selectedItems");function v(){switch(g.item.type){case"google-fonts":return"fonts.edit.google-fonts";case"custom":default:return"fonts.edit.custom"}}function r(u){switch(u){case"woff2":case"font/woff2":return"woff2";case"woff":case"font/woff":return"woff";case"ttf":case"font/ttf":return"truetype";case"otf":case"font/otf":return"opentype";case"eot":case"font/eot":return"embedded-opentype";default:return"woff2"}}const x=Q(()=>{let u="";return g.item.family&&g.item.font_faces.forEach(a=>{if(a.comment&&(u+=`/* ${a.comment} */
`),u+=`@font-face {
`,u+=`	font-family: '${g.item.family}';
`,u+=`	font-style: ${a.style};
`,a.weight!==""&&(u+=`	font-weight: ${a.weight};
`),u+=`	font-display: ${a.display||g.item.metadata.display};
`,a.files.length>0){u+="	src: ";let $=a.files.map(U=>`url('${U.attachment_url}') format("${r(U.extension)}")`);u+=$.join(`,
		`),u+=`;
`}a.unicodeRange&&(u+=`	unicode-range: ${a.unicodeRange};
`),u+=`}

`}),u}),A=Q(()=>{let u="";return g.item.family&&(u+=x.value,u=u.replace(/\t/g,"  "),u=u.replace(/<family>/g,g.item.family)),u});function j(){return{fontFamily:g.item.family,fontSize:`${g.preview.fontSize}px`,fontWeight:g.preview.fontWeight,fontStyle:"normal"}}let f=null;be(()=>{f=document.querySelector(`#yabe-webfont-preview-${g.item.id}`),f||(f=document.createElement("style"),f.setAttribute("id",`yabe-webfont-preview-${g.item.id}`),document.head.appendChild(f),f.innerHTML=A.value)}),he(()=>{f&&document.head.removeChild(f)});function c(u){u.code==="Space"&&(u.preventDefault(),y("updateStatus"))}return(u,a)=>{const $=H("Icon"),U=H("router-link");return o(),N(ke,{mode:"out-in"},{default:I(()=>[n.item.isDeleted?(o(),d("tr",Je,[e("td",Ke,[e("strong",null,i(n.item.title),1),m(" was successfully "+i(n.item.deleted_at==null?"moved to the Trash":"permanently deleted")+". ",1)])])):n.item.isRestored?(o(),d("tr",Xe,[e("td",Ze,[e("strong",null,i(n.item.title),1),a[6]||(a[6]=m(" was successfully restored. "))])])):(o(),d("tr",{key:2,class:q([{active:n.item.status&&n.item.deleted_at==null,inactive:!n.item.status||n.item.deleted_at!=null},"group"])},[e("th",{scope:"row",class:q([{"pl:6":!n.item.status,"pl:8":n.item.deleted_at!==null},"vertical:middle py:8 ywf-check-column"])},[B(e("input",{"onUpdate:modelValue":a[0]||(a[0]=R=>ve(P)?P.value=R:null),type:"checkbox",value:n.item.id,disabled:l(_).isBusy},null,8,Qe),[[Y,l(P)]])],2),n.item.deleted_at==null?(o(),d("td",Ye,[S(l(re),{"aria-disabled":l(_).isBusy,checked:n.item.status,onClick:a[1]||(a[1]=R=>u.$emit("updateStatus")),onKeyup:c,class:q([[n.item.status?"bg:sky-60":"opacity:.5 bg:gray-20"],"rel inline-flex p:0 h:24 w:44 flex-shrink:0 cursor:pointer rounded b:2 b:transparent transition-property:color,background-color,border-color,text-decoration-color,fill,stroke transition-duration:200 transition-timing-function:cubic-bezier(0.4,0,0.2,1) box-shadow:rgb(255,255,255)|0|0|0|2,rgb(14,165,233)|0|0|0|4,rgba(0,0,0,0)|0|0|0|0:focus outline:2|solid|transparent:focus"])},{default:I(()=>[e("span",{class:q([[n.item.status?"translateX(20)":"translateX(0)"],"pointer-events:none rel inline-block font:12 h:20 w:20 rounded bg:white transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter transition-duration:200 transition-timing-function:cubic-bezier(0.4,0,0.2,1) box-shadow:rgb(255,255,255)|0|0|0|0,rgba(59,130,246,0.5)|0|0|0|0,rgba(0,0,0,0.1)|0|1|3|0,rgba(0,0,0,0.1)|0|1|2|-1"])},[e("span",{"aria-hidden":"true",class:q([[n.item.status?"opacity:0 transition-timing-function:ease-out transition-duration:100":"opacity:1 transition-timing-function:ease-in transition-duration:200"],"abs inset:0 flex h:full w:full align-items:center justify-content:center tw-transition-opacity"])},[n.item.isUpdatingStatus?(o(),N($,{key:1,icon:"fa6-solid:spinner",class:"animation:rotate|linear|1s|infinite fg:gray-60"})):(o(),N($,{key:0,icon:"fa6-solid:xmark",class:"fg:gray-60"}))],2),e("span",{"aria-hidden":"true",class:q([[n.item.status?"opacity:1 transition-timing-function:ease-in transition-duration:200":"opacity:0 transition-timing-function:ease-out transition-duration:100"],"abs inset:0 flex h:full w:full align-items:center justify-content:center tw-transition-opacity"])},[n.item.isUpdatingStatus?(o(),N($,{key:1,icon:"fa6-solid:spinner",class:"animation:rotate|linear|1s|infinite fg:sky-60"})):(o(),N($,{key:0,icon:"fa6-solid:check",class:"fg:sky-60"}))],2)],2)]),_:1},8,["aria-disabled","checked","class"])])):C("",!0),e("td",et,[e("div",tt,[n.item.type==="google-fonts"?(o(),d("div",st,a[7]||(a[7]=[e("svg",{class:"w:20 h:20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},[e("path",{fill:"none",d:"M0 0h16v16H0z"}),e("path",{fill:"#F29900",d:"M13.5 2H8L1 13h5.5z"}),e("path",{fill:"#1A73E8",d:"M8 2h5v11H8z"}),e("circle",{fill:"#EA4335",cx:"3.25",cy:"4.25",r:"2.25"}),e("path",{fill:"#0D652D",d:"M13.33 10L13 13c-1.66 0-3-1.34-3-3s1.34-3 3-3l.33 3z"}),e("path",{fill:"#174EA6",d:"M10.5 4.5A2.5 2.5 0 0113 2l.45 2.5L13 7a2.5 2.5 0 01-2.5-2.5z"}),e("path",{fill:"#1A73E8",d:"M13 2a2.5 2.5 0 010 5"}),e("path",{fill:"#34A853",d:"M13 7c1.66 0 3 1.34 3 3s-1.34 3-3 3"})],-1)]))):n.item.type==="adobe-fonts"?(o(),d("div",nt,a[8]||(a[8]=[e("svg",{class:"w:20 h:20","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},[e("g",null,[e("rect",{class:"cls-1",fill:"#000b1d",y:"0.5",width:"32",height:"31",rx:"5.64848"}),e("path",{class:"cls-2",fill:"#fff",d:"M17.63921,13.46488c-.74711,2.504-1.37579,4.91772-2.12289,7.28029a12.90012,12.90012,0,0,1-1.47406,3.41265,4.1921,4.1921,0,0,1-3.31166,1.777c-1.02992,0-2.03957-.48468-2.03957-1.5549A1.40176,1.40176,0,0,1,9.92281,23.0876a.61424.61424,0,0,1,.56539.32311c.50483.90867.98951,1.43364,1.21164,1.43364s.40383-.30284.76725-1.61534l2.65045-9.76247-1.90691-.00211a.91358.91358,0,0,1,.30208-1.03289h1.89816a17.53964,17.53964,0,0,1,1.3978-3.43866,5.04817,5.04817,0,0,1,4.36161-2.928c1.51448,0,2.14044.72695,2.14044,1.65589A1.52543,1.52543,0,0,1,22.01837,9.215c-.323,0-.48456-.24228-.58555-.58555-.34326-1.29235-.78752-1.676-1.05007-1.676s-.66638.48456-1.11052,1.49421a25.74394,25.74394,0,0,0-1.343,3.99058l2.30933-.003a.86867.86867,0,0,1-.31678,1.02946Z"})])],-1)]))):C("",!0),n.item.type==="adobe-fonts"?(o(),d("a",{key:2,href:`https://fonts.adobe.com/fonts/${n.item.slug}`,target:"_blank",class:"font:semibold"},i(n.item.title),9,at)):n.item.deleted_at==null?(o(),N(U,{key:3,to:{name:v(),params:{id:n.item.id}},class:q({"font:semibold":n.item.status})},{default:I(()=>[m(i(n.item.title),1)]),_:1},8,["to","class"])):(o(),d(D,{key:4},[m(i(n.item.title),1)],64)),e("span",ot,"ID: "+i(n.item.id),1)]),e("div",lt,[n.item.type!=="adobe-fonts"?(o(),d(D,{key:0},[n.item.deleted_at==null?(o(),d(D,{key:0},[S(U,{to:{name:v(),params:{id:n.item.id}}},{default:I(()=>[m(i(u.__("Edit","yabe-webfont")),1)]),_:1},8,["to"]),a[9]||(a[9]=m(" | ")),e("a",{class:q([{"cursor:wait":l(_).isBusy},"fg:red-80 cursor:pointer fg:red-90:hover"]),onClick:a[2]||(a[2]=R=>u.$emit("delete"))},i(n.item.isDeleting?"Deleting...":"Trash"),3)],64)):(o(),d(D,{key:1},[e("a",{class:q([{"cursor:wait":l(_).isBusy},"cursor:pointer"]),onClick:a[3]||(a[3]=R=>u.$emit("restore"))},i(n.item.isRestoring?"Restoring...":"Restore"),3),a[10]||(a[10]=m(" | ")),e("a",{class:q([{"cursor:wait":l(_).isBusy},"fg:red-80 cursor:pointer fg:red-90:hover"]),onClick:a[4]||(a[4]=R=>u.$emit("delete"))},i(n.item.isDeleting?"Deleting...":"Delete Permanently"),3)],64))],64)):C("",!0)])]),e("td",it,[e("div",rt,[e("span",dt,i(n.item.family),1),e("div",ut,[a[11]||(a[11]=e("span",{class:"text-[#0050ff]"},"var",-1)),a[12]||(a[12]=m("(")),e("span",ct,"--ywf--family-"+i(n.item.family.replace(/[^a-zA-Z0-9\-_]+/g,"-").toLowerCase()),1),a[13]||(a[13]=m(") "))])])]),e("td",ft,[e("div",pt,[e("span",{title:new Date(n.item.updated_at*1e3),class:"text:underline decoration-dotted text-gray-700"},i(l(Re)(new Date(n.item.updated_at*1e3))),9,mt)])]),e("td",gt,[S(l(Ee),{tag:"div",modelValue:n.preview.text,"onUpdate:modelValue":a[5]||(a[5]=R=>n.preview.text=R),style:we(j()),class:"preview-text lh:1.25"},null,8,["modelValue","style"])])],2))]),_:1})}}},bt=ge(yt,[["__scopeId","data-v-7d72c0e4"]]),ht={key:0,class:"subtitle"},vt=["disabled"],wt={class:"upload-plugin-wrap"},kt={class:"wp-upload-form"},xt={class:"subsubsub"},$t={class:"all"},_t={class:"count"},Bt={class:"trash pl:4"},Pt={class:"count"},qt={class:"search-box rel"},St=["disabled"],At=["disabled"],Ct={class:"tablenav top"},Dt={class:"tablenav-pages pb:12"},Rt={class:"displaying-num"},Et={class:"wp-list-table widefat table-auto min-w:full plugins"},It={class:"manage-column column-cb ywf-check-column px:2 vertical:middle"},Tt={key:0,class:"manage-column"},Nt={scope:"col"},Ut={scope:"col"},jt={scope:"col"},zt={scope:"col",class:"flex align-items:center"},Mt={class:"px:16 h:fit flex r:6 shadow-sm"},Vt={class:"h:fit flex r:6 shadow-sm"},Ft={key:0},Ot={key:1},Lt={class:"inactive animation:skeleton|2s|infinite"},Gt={key:0,width:"1%",class:"manage-column vertical:middle"},Ht={class:"translateX(0) pointer-events:none rel inline-block h:20 w:20 rounded bg:white box-shadow:0|0"},Wt={"aria-hidden":"true",class:"abs inset:0 flex h:full w:full align-items:center justify-content:center opacity:1"},Jt={width:"20%"},Kt={class:"row-actions visible mt-1 align-items:center flex"},Xt={key:2},Zt={colspan:"5"},Qt={class:"manage-column column-cb ywf-check-column px:2 vertical:middle"},Yt={key:0,class:"manage-column"},es={scope:"col"},ts={scope:"col"},ss={scope:"col"},ns={scope:"col"},as={class:"tablenav bottom"},os={class:"tablenav-pages"},ls={class:"displaying-num"},ps={__name:"Index",setup(n){const k=Pe(),_=qe(),g=Ce(),y=W(),P=xe(),v=T(null),r=De(),x=T(null),A=T(!1),j=X({text:"The quick brown fox jumps over a lazy dog",fontSize:18,fontWeight:400,lineHeight:1.5}),f=X({page:k.query.page?Number(k.query.page):1,search:k.query.search||"",per_page:k.query.per_page?Number(k.query.per_page):20,soft_deleted:k.query.soft_deleted?Number(k.query.soft_deleted):0}),c=X({current_page:0,from:0,last_page:0,to:0,total_filtered:0,total_exists:0,total_deleted:0,skeleton:5}),u=T({}),a=T([]),$=T([]);Se("selectedItems",$);const U=y.hasTask;function R(){_.push({name:"fonts.index",query:{...k.query,...f}})}$e(()=>{y.reset(),F()}),V(()=>f.search,(s,t)=>{s===""&&k.query.search.trim()!==s&&se(!0)});function te(s){f.page=s,R()}_e((s,t)=>{s.query.page!==t.query.page&&(f.page=s.query.page?Number(s.query.page):1),s.query.per_page!==t.query.per_page&&(f.per_page=s.query.per_page?Number(s.query.per_page):20),s.query.soft_deleted!==t.query.soft_deleted&&(f.soft_deleted=s.query.soft_deleted?Number(s.query.soft_deleted):0),F()});function se(s=!1){f.page=1,s&&(f.search=""),R()}function F(){y.add("fonts.index:fetch-items"),g.request({method:"GET",url:"/fonts/index",params:{page:f.page,search:f.search,per_page:f.per_page,soft_deleted:f.soft_deleted}}).then(s=>s.data).then(s=>{a.value=s.data.map(t=>(t.isDeleted=!1,t.isDeleting=!1,t.isUpdatingStatus=!1,t.isRestored=!1,t.isRestoring=!1,t)),c.total_exists=s.meta.total_exists,c.total_deleted=s.meta.total_deleted,c.total_filtered=s.meta.total_filtered,c.current_page=s.meta.page,c.from=s.meta.from,c.to=s.meta.to,c.last_page=s.meta.total_pages,c.skeleton=s.data.length>0?s.data.length:5,z(),ce()}).catch(function(s){r.alert(s.message)}).finally(()=>{y.remove("fonts.index:fetch-items"),z()})}function J(s,t=null){t!==s.status&&(y.add("fonts.index:update-status"),s.isUpdatingStatus=!0,g.request({method:"PATCH",url:`/fonts/update-status/${s.id}`,data:{status:t!==null?t:!s.status}}).then(p=>p.data).then(p=>{s.status=p.status}).catch(function(p){r.alert(p.message)}).finally(()=>{s.isUpdatingStatus=!1,y.remove("fonts.index:update-status")}))}function ne(s){s.isDeleting=!0,y.add("fonts.index:delete"),g.request({method:"POST",url:`/fonts/delete/${s.id}`}).then(t=>{s.isDeleted=!0}).catch(function(t){r.alert(t.message)}).finally(()=>{s.isDeleting=!1,y.remove("fonts.index:delete")})}function ae(s){y.add("fonts.index:restore"),s.isRestoring=!0,g.request({method:"POST",url:`/fonts/restore/${s.id}`}).then(t=>{s.isRestored=!0}).catch(function(t){r.alert(t.message)}).finally(()=>{s.isRestoring=!1,y.remove("fonts.index:restore")})}function de(s){y.add("fonts.index:export"),g.request({method:"POST",url:"/fonts/export",data:{items:s}}).then(t=>t.data.data).then(t=>{const p=new Blob([JSON.stringify(t)],{type:"application/json"}),b=document.createElement("a");b.href=window.URL.createObjectURL(p),b.download=`ywf-exported-${t.export_time}.json`,b.click()}).catch(function(t){r.alert(t.message)}).finally(()=>{y.remove("fonts.index:export")})}function ue(){if(x.value.files.length===0){r.alert("Please select a file to import.");return}const s=x.value.files[0];if(s.type!=="application/json"){r.alert("Please select a valid JSON file.");return}const t=new FileReader;t.onload=function(p){const b=JSON.parse(p.target.result);if(b==null){r.alert("Please select a valid JSON file.");return}if(!b.hasOwnProperty("module_id")||b.module_id!==yabeWebfont.option_namespace){r.alert("Please select a valid JSON file.");return}let M=0;const w=()=>{if(M<b.items.length){const E=b.items[M];y.add("fonts.index:import");const fe=g.request({method:"POST",url:"/fonts/import",data:{site_url:b.site_url,is_bundled:b.is_bundled,version:b.version,item:E}}).then(K=>{const pe=_.resolve({name:`fonts.edit.${E.type}`,params:{id:K.data.id}}).href;P.add({type:"success",message:`<p>Font "${E.title}" imported successfully. <a href="${pe}">Edit Font</a></p>`})}).catch(function(K){throw P.add({type:"error",message:`<p>Failed to import font "${E.title}".`}),K}).finally(()=>{y.remove("fonts.index:import"),M++,w()});r.async(fe,`Successfully imported font: ${E.title}.`,`Failed to import font: ${E.title}.`,`Importing font: ${E.title}...`)}else F()};w()},t.readAsText(s),x.value.value=""}const O=Q({get(){if(a.value.length>0){let s=!0;for(const[t,p]of a.value.entries())if($.value.includes(p.id)||(s=!1),!s)break;return s}return!1},set(s){const t=[];s&&a.value.forEach(p=>{t.push(p.id)}),$.value=t}});function z(){$.value=[]}const L=T([]);V(()=>f.soft_deleted,()=>{f.soft_deleted?L.value=[{key:"restore",label:"Restore"},{key:"delete",label:"Delete permanently"}]:L.value=[{key:"activate",label:"Activate"},{key:"deactivate",label:"Deactivate"},{key:"export",label:"Export"},{key:"delete",label:"Delete"}]},{immediate:!0});function oe(s){if(s!=="-1")switch(s){case"delete":confirm(h("Are you sure you want to delete the selected font(s)?","yabe-webfont"))&&($.value.forEach(async t=>{const p=a.value.find(b=>b.id===t);p.type!=="adobe-fonts"&&ne(p)}),z());break;case"deactivate":confirm(h("Are you sure you want to deactivate the selected font(s)?","yabe-webfont"))&&($.value.forEach(async t=>{const p=a.value.find(b=>b.id===t);J(p,!1)}),z());break;case"activate":confirm(h("Are you sure you want to activate the selected font(s)?","yabe-webfont"))&&($.value.forEach(async t=>{const p=a.value.find(b=>b.id===t);J(p,!0)}),z());break;case"restore":confirm(h("Are you sure you want to restore the selected font(s)?","yabe-webfont"))&&($.value.forEach(async t=>{const p=a.value.find(b=>b.id===t);ae(p)}),z());break;case"export":if($.value.length===0){r.alert(h("Please select at least one font to export.","yabe-webfont"));return}de($.value),z();break}}function ce(){let s=document.getElementById("typekit-css");s||(s=document.createElement("link"),s.setAttribute("id","typekit-css"),s.setAttribute("rel","stylesheet"),document.head.appendChild(s)),y.add("settings:fetch-options"),g.request({method:"GET",url:"/setting/option/index"}).then(t=>t.data).then(t=>{var b;u.value=Ae(t.options);const p=(b=u.value.adobe_fonts)==null?void 0:b.project_id;p&&s.setAttribute("href",`https://use.typekit.net/${p}.css`)}).catch(function(t){r.alert(t.message)}).finally(()=>{y.remove("settings:fetch-options")})}return(s,t)=>{const p=H("router-link"),b=H("Icon"),M=ee("ripple");return o(),d(D,null,[S(p,{to:{name:"fonts.create.custom"},class:"page-title-action"},{default:I(()=>[m(i(l(h)("Add New","yabe-webfont")),1)]),_:1}),B((o(),d("button",{onClick:t[0]||(t[0]=w=>A.value=!A.value),class:"page-title-action"},t[8]||(t[8]=[m("Import")]))),[[M]]),S(p,{to:{name:"fonts.create.google-fonts"},class:"page-title-action"},{default:I(()=>[m(i(l(h)("Import Google Fonts","yabe-webfont")),1)]),_:1}),l(k).query.search?(o(),d("span",ht,[m(i(l(h)("Search results for","yabe-webfont"))+": ",1),e("strong",null,i(l(k).query.search),1)])):C("",!0),B((o(),d("button",{type:"button",disabled:l(y).isBusy,onClick:F,class:"button float:right"},t[9]||(t[9]=[m(" refresh 🔄️")]),8,vt)),[[M]]),t[28]||(t[28]=e("hr",{class:"invisible m:0 mt:-2"},null,-1)),e("div",wt,[e("div",{class:q([{block:A.value},"upload-plugin"])},[t[10]||(t[10]=e("p",{class:"install-help"},[m("Import "),e("code",null,"ywf-exported-{timestamp}.json"),m(' file by locating the file and clicking "Import json" button.')],-1)),e("div",kt,[e("input",{type:"file",ref_key:"importfile",ref:x,id:"importfile",name:"importfile",accept:".json"},null,512),e("div",{onClick:ue,class:"button"},"Import json")])],2)]),e("ul",xt,[e("li",$t,[S(p,{to:{name:"fonts.index",query:{...l(k).query,soft_deleted:0,page:1}},class:q({current:!f.soft_deleted})},{default:I(()=>[m(i(l(h)("All","yabe-webfont"))+" ",1),e("span",_t," ("+i(c.total_exists)+") ",1)]),_:1},8,["to","class"]),t[11]||(t[11]=m(" | "))]),e("li",Bt,[S(p,{to:{name:"fonts.index",query:{...l(k).query,soft_deleted:1,page:1}},class:q({current:!!f.soft_deleted})},{default:I(()=>[m(i(l(h)("Trash","yabe-webfont"))+" ",1),e("span",Pt," ("+i(c.total_deleted)+") ",1)]),_:1},8,["to","class"])])]),e("p",qt,[B(e("input",{type:"search",id:"searchInput",name:"s","onUpdate:modelValue":t[1]||(t[1]=w=>f.search=w),onKeyup:t[2]||(t[2]=Be(w=>s.$refs.searchBtn.click(),["enter"])),disabled:l(y).isBusy},null,40,St),[[G,f.search,void 0,{trim:!0,lazy:!0}]]),B((o(),d("button",{type:"button",class:"button",disabled:l(y).isBusy,ref_key:"searchBtn",ref:v,onClick:t[3]||(t[3]=w=>se())},[m(i(l(h)("Search","yabe-webfont"))+" 🔍",1)],8,At)),[[M]])]),e("div",Ct,[S(le,{actions:L.value,onBulkActions:oe},null,8,["actions"]),e("div",Dt,[e("span",Rt,i(`${c.total_filtered} ${l(h)("items","yabe-webfont")}`),1),c.last_page>1?(o(),N(ie,{key:0,"is-enable-goto":!0,"current-page":c.current_page,"first-page":c.current_page-1>1,"previous-page":c.current_page>1,"next-page":c.current_page<c.last_page,"last-page":c.current_page+1<c.last_page,"total-page":c.last_page,onChangePage:te},null,8,["current-page","first-page","previous-page","next-page","last-page","total-page"])):C("",!0)]),t[12]||(t[12]=e("br",{class:"clear"},null,-1))]),e("table",Et,[e("thead",null,[e("tr",null,[e("td",It,[B(e("input",{"onUpdate:modelValue":t[4]||(t[4]=w=>O.value=w),class:"ml:12",type:"checkbox"},null,512),[[Y,O.value]])]),f.soft_deleted?C("",!0):(o(),d("td",Tt)),e("th",Nt,i(l(h)("Title","yabe-webfont")),1),e("th",Ut,i(l(h)("Font Family","yabe-webfont")),1),e("th",jt,i(l(h)("Modified","yabe-webfont")),1),e("th",zt,[m(i(l(h)("Preview","yabe-webfont"))+" ",1),a.value.length>0?(o(),d(D,{key:0},[e("div",Mt,[t[13]||(t[13]=e("span",{class:"inline-flex align-items:center rl:6 b:1|solid|gray-30/.5 br:0 bg:gray-5 px:12 fg:gray-40 font:12 lh:16px"},"size",-1)),B(e("input",{type:"number","onUpdate:modelValue":t[5]||(t[5]=w=>j.fontSize=w),class:"block min-w:0 w:64 min-h:0 h:24 mx:0 py:0 px:8 b:1|solid|gray-30/.5 r:0 font:12 lh:16px"},null,512),[[G,j.fontSize]]),t[14]||(t[14]=e("span",{class:"inline-flex align-items:center rr:6 b:1|solid|gray-30/.5 bl:0 bg:gray-5 px:12 fg:gray-40 font:12 lh:16px"},"px",-1))]),e("div",Vt,[t[15]||(t[15]=e("span",{class:"inline-flex align-items:center rl:6 b:1|solid|gray-30/.5 br:0 bg:gray-5 px:12 fg:gray-40 font:12 lh:16px"},"weight",-1)),B(e("input",{type:"number",min:"1",max:"1000","onUpdate:modelValue":t[6]||(t[6]=w=>j.fontWeight=w),class:"block min-w:0 w:64 min-h:0 h:24 mx:0 py:0 px:8 r:0 rr:6 b:1|solid|gray-30/.5 font:12 lh:16px"},null,512),[[G,j.fontWeight]])])],64)):C("",!0)])])]),a.value.length>0&&!l(U)("fonts.index:fetch-items")?(o(),d("tbody",Ft,[(o(!0),d(D,null,Z(a.value,w=>(o(),N(bt,{key:w.id,item:w,preview:j,onDelete:E=>ne(w),onRestore:E=>ae(w),onUpdateStatus:E=>J(w,null)},null,8,["item","preview","onDelete","onRestore","onUpdateStatus"]))),128))])):l(U)("fonts.index:fetch-items")?(o(),d("tbody",Ot,[(o(!0),d(D,null,Z(c.skeleton,w=>(o(),d("tr",Lt,[t[23]||(t[23]=e("th",{scope:"row",class:"vertical:middle py:8 ywf-check-column"},[e("input",{type:"checkbox",value:"0",disabled:""})],-1)),f.soft_deleted?C("",!0):(o(),d("td",Gt,[S(l(re),{checked:!1,class:"opacity:.5 bg:gray-85 rel inline-flex p:0 h:24 w:44 flex-shrink:0 cursor:pointer rounded b:2 b:transparent"},{default:I(()=>[e("span",Ht,[e("span",Wt,[S(b,{icon:"fa6-solid:spinner",class:"animation:rotate|linear|1s|infinite font:12 fg:gray-60"})])])]),_:1})])),e("td",Jt,[t[22]||(t[22]=e("div",{class:"h:12 bg:slate-30 r:4 w:1/2"},null,-1)),e("div",Kt,[f.soft_deleted?(o(),d(D,{key:1},[t[19]||(t[19]=e("a",{class:"px:4 cursor:pointer"}," Restore ",-1)),t[20]||(t[20]=m(" | ")),t[21]||(t[21]=e("a",{class:"px:4 fg:red-80 cursor:wait fg:red-90:hover"}," Delete Permanently ",-1))],64)):(o(),d(D,{key:0},[t[16]||(t[16]=e("a",{class:"px:4 cursor:pointer"}," Edit ",-1)),t[17]||(t[17]=m(" | ")),t[18]||(t[18]=e("a",{class:"px:4 fg:red-80 cursor:wait fg:red-90:hover"}," Trash ",-1))],64))])]),t[24]||(t[24]=e("td",{width:"20%",class:"align-items:center vertical:middle"},[e("div",{class:"h:12 bg:slate-30 r:4 w:1/2"})],-1)),t[25]||(t[25]=e("td",{width:"10%",class:"align-items:center vertical:middle"},[e("div",{class:"h:12 bg:slate-30 r:4 w:full"})],-1)),t[26]||(t[26]=e("td",{class:"vertical:middle"},[e("div",{class:"h:12 bg:slate-30 r:4 w:11/12"})],-1))]))),256))])):(o(),d("tbody",Xt,[e("tr",null,[e("td",Zt,[m(i(l(h)("It looks like you don't have any fonts.","yabe-webfont"))+" ",1),S(p,{to:{name:"fonts.create.custom"}},{default:I(()=>[m(i(l(h)("Perhaps you would like to add a new one?","yabe-webfont")),1)]),_:1})])])])),e("tfoot",null,[e("tr",null,[e("td",Qt,[B(e("input",{"onUpdate:modelValue":t[7]||(t[7]=w=>O.value=w),class:"ml:12",type:"checkbox"},null,512),[[Y,O.value]])]),f.soft_deleted?C("",!0):(o(),d("td",Yt)),e("th",es,i(l(h)("Title","yabe-webfont")),1),e("th",ts,i(l(h)("Font Family","yabe-webfont")),1),e("th",ss,i(l(h)("Modified","yabe-webfont")),1),e("th",ns,i(l(h)("Preview","yabe-webfont")),1)])])]),e("div",as,[S(le,{actions:L.value,onBulkActions:oe},null,8,["actions"]),e("div",os,[e("span",ls,i(`${c.total_filtered} ${l(h)("items","yabe-webfont")}`),1),c.last_page>1?(o(),N(ie,{key:0,"current-page":c.current_page,"first-page":c.current_page-1>1,"previous-page":c.current_page>1,"next-page":c.current_page<c.last_page,"last-page":c.current_page+1<c.last_page,"total-page":c.last_page,onChangePage:te},null,8,["current-page","first-page","previous-page","next-page","last-page","total-page"])):C("",!0)]),t[27]||(t[27]=e("br",{class:"clear"},null,-1))])],64)}}};export{ps as default};
