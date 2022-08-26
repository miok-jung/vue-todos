import{V as S}from"./VRow.94671141.js";import{V as F}from"./VContainer.4eb532a4.js";import{V as y}from"./VCol.17c8ac26.js";import{V as x}from"./VSheet.30d5ae98.js";import{aB as N,X as j,G as I,bm as z,x as M,a2 as W,bn as X,g as r,bd as Y,i as L,aW as H,z as J,d as l,A as $,ar as K,aD as Q,f as q,o as C,c as D,w as e,F as E,j as T,am as u,ap as _,aq as B,bo as k,aY as Z,bj as U,b as w,e as o,t as P,h as ee,bp as le,an as te}from"./index.27b78e6d.js";/* empty css              */const p=N()({name:"VDialog",inheritAttrs:!1,props:{fullscreen:Boolean,origin:{type:String,default:"center center"},retainFocus:{type:Boolean,default:!0},scrollable:Boolean,modelValue:Boolean,...j({width:"auto"}),...I({transition:{component:z}})},emits:{"update:modelValue":d=>!0},setup(d,f){let{attrs:m,slots:g}=f;const i=M(d,"modelValue"),{dimensionStyles:A}=W(d),{scopeId:c}=X(),s=r();function V(n){var v,a;const t=n.relatedTarget,b=n.target;if(t!==b&&(v=s.value)!=null&&v.contentEl&&(a=s.value)!=null&&a.isTop&&![document,s.value.contentEl].includes(b)&&!s.value.contentEl.contains(b)){const h=[...s.value.contentEl.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter(G=>!G.hasAttribute("disabled"));if(!h.length)return;const O=h[0],R=h[h.length-1];t===O?R.focus():O.focus()}}return Y&&L(()=>i.value&&d.retainFocus,n=>{n?document.addEventListener("focusin",V):document.removeEventListener("focusin",V)},{immediate:!0}),L(i,async n=>{if(await H(),n){var v;(v=s.value.contentEl)==null||v.focus({preventScroll:!0})}else{var a;(a=s.value.activatorEl)==null||a.focus({preventScroll:!0})}}),J(()=>l(K,$({modelValue:i.value,"onUpdate:modelValue":n=>i.value=n,class:["v-dialog",{"v-dialog--fullscreen":d.fullscreen,"v-dialog--scrollable":d.scrollable}],style:A.value,transition:d.transition,ref:s,"aria-role":"dialog","aria-modal":"true",activatorProps:{"aria-haspopup":"dialog","aria-expanded":String(i.value)},"z-index":2400},c,m),{default:g.default,activator:g.activator})),Q({},s)}}),ae={class:"wrap"},oe=w("h2",null,"Vuetify Grid",-1),ue=o("One of three vcolumn"),se=o(" First in markup, but middle in row "),ne=o(" Second in markup, but last in row "),ie=o(" Third in markup, but first in row "),de=w("h2",null,"Dialogs",-1),re=w("p",null," \uD2B9\uC815\uD55C \uC815\uBCF4\uB97C \uD3EC\uD568\uD558\uAC70\uB098 \uACB0\uC815\uC744 \uC694\uAD6C\uD560 \uB54C \uC0AC\uC6A9\uD55C\uB2E4. \uBAA8\uB2EC\uACFC \uB9E4\uC6B0 \uC720\uC0AC\uD55C\uAC70 \uAC19\uB2E4. ",-1),fe=o("\uAE30\uBCF8"),ce=o(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "),_e=o("Close Btn"),me=o("\uC704\uC5D0\uC11C \uBAA8\uB2EC"),ve=o(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "),pe=o("Close Btn"),Ce=o("\uC544\uB798\uC5D0\uC11C \uBAA8\uB2EC"),ge=o(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "),Ve=o("Close Btn"),be=o("\uC678\uBD80\uD074\uB9AD\uB9C9\uAE30"),Be=o(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "),ke=o("Close Btn"),De=o(" Start loading "),Ae=o(" Please stand by "),he=o("\uC911\uCCA91"),ye=o("Dialog1"),xe=o("\uC911\uCCA92"),$e=o("Close"),Ee=o("Dialog2"),we=o("\uC911\uCCA93"),Se=o("Close"),Fe=o("Dialog3"),Te=o("Close"),Ue=q({__name:"GridDialog",setup(d){const f=["start","center","end"],m=r(!1),g=r(!1),i=r(!1),A=r(!1),c=r(!1),s=r(!1),V=r(!1),n=r(!1);return L(c,v=>{!v||setTimeout(()=>{c.value=!1},5e3)}),(v,a)=>(C(),D("div",ae,[oe,l(F,{class:"bg-surface-variant ma-1-auto"},{default:e(()=>[l(S,{"no-gutters":""},{default:e(()=>[(C(),D(E,null,T(3,t=>l(y,{key:t,cols:"12",sm:"4"},{default:e(()=>[l(x,{class:"ma-2 pa-2"},{default:e(()=>[ue]),_:1})]),_:2},1024)),64))]),_:1})]),_:1}),(C(),D(E,null,T(f,(t,b)=>l(F,{class:"bg-surface-variant mb-6",key:b},{default:e(()=>[l(S,{align:t,"no-gutters":"",style:{height:"150px"}},{default:e(()=>[(C(),D(E,null,T(3,h=>l(y,{key:h},{default:e(()=>[l(x,{class:"pa-2 ma-2"},{default:e(()=>[o(" .align-"+P(t),1)]),_:2},1024)]),_:2},1024)),64))]),_:2},1032,["align"])]),_:2},1024)),64)),l(F,{class:"bg-surface-variant"},{default:e(()=>[l(S,{"no-gutters":"",style:{height:"150px"}},{default:e(()=>[(C(),D(E,null,T(f,(t,b)=>l(y,{key:b,"align-self":t},{default:e(()=>[l(x,{class:"pa-2 ma-2"},{default:e(()=>[o(" .align-self-"+P(t),1)]),_:2},1024)]),_:2},1032,["align-self"])),64))]),_:1})]),_:1}),l(F,{class:"bg-surface-variant"},{default:e(()=>[l(S,{"no-gutters":""},{default:e(()=>[l(y,{order:"6"},{default:e(()=>[l(x,{class:"pa-2 ma-2"},{default:e(()=>[se]),_:1})]),_:1}),l(y,{order:"12"},{default:e(()=>[l(x,{class:"pa-2 ma-2"},{default:e(()=>[ne]),_:1})]),_:1}),l(y,{order:"1"},{default:e(()=>[l(x,{class:"pa-2 ma-2"},{default:e(()=>[ie]),_:1})]),_:1})]),_:1})]),_:1}),de,re,l(p,{modelValue:m.value,"onUpdate:modelValue":a[1]||(a[1]=t=>m.value=t)},{activator:e(({props:t})=>[l(u,$({color:"purple"},t),{default:e(()=>[fe]),_:2},1040)]),default:e(()=>[l(_,null,{default:e(()=>[l(B,null,{default:e(()=>[ce]),_:1}),l(k,null,{default:e(()=>[l(u,{color:"#f1f2f3",block:"",onClick:a[0]||(a[0]=t=>m.value=!1)},{default:e(()=>[_e]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(p,{modelValue:g.value,"onUpdate:modelValue":a[3]||(a[3]=t=>g.value=t),transition:"dialog-top-transition"},{activator:e(({props:t})=>[l(u,$({color:"purple"},t),{default:e(()=>[me]),_:2},1040)]),default:e(()=>[l(_,null,{default:e(()=>[l(B,null,{default:e(()=>[ve]),_:1}),l(k,null,{default:e(()=>[l(u,{color:"#f1f2f3",block:"",onClick:a[2]||(a[2]=t=>g.value=!1)},{default:e(()=>[pe]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(p,{modelValue:i.value,"onUpdate:modelValue":a[5]||(a[5]=t=>i.value=t),transition:"dialog-bottom-transition"},{activator:e(({props:t})=>[l(u,$({color:"purple"},t),{default:e(()=>[Ce]),_:2},1040)]),default:e(()=>[l(_,null,{default:e(()=>[l(B,null,{default:e(()=>[ge]),_:1}),l(k,null,{default:e(()=>[l(u,{color:"#f1f2f3",block:"",onClick:a[4]||(a[4]=t=>i.value=!1)},{default:e(()=>[Ve]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(p,{modelValue:A.value,"onUpdate:modelValue":a[7]||(a[7]=t=>A.value=t),transition:"dialog-bottom-transition",persistent:""},{activator:e(({props:t})=>[l(u,$({color:"purple"},t),{default:e(()=>[be]),_:2},1040)]),default:e(()=>[l(_,null,{default:e(()=>[l(B,null,{default:e(()=>[Be]),_:1}),l(k,null,{default:e(()=>[l(u,{color:"#f1f2f3",block:"",onClick:a[6]||(a[6]=t=>A.value=!1)},{default:e(()=>[ke]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(u,{disabled:c.value,loading:c.value,class:"text-white",color:"purple-darken-2",onClick:a[8]||(a[8]=t=>c.value=!0)},{default:e(()=>[De]),_:1},8,["disabled","loading"]),l(p,{modelValue:c.value,"onUpdate:modelValue":a[9]||(a[9]=t=>c.value=t),"hide-overlay":"",persistent:""},{default:e(()=>[l(_,{color:"primary"},{default:e(()=>[l(B,null,{default:e(()=>[Ae,l(Z,{indeterminate:"",color:"white",class:"mb-0"})]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(u,{onClick:a[10]||(a[10]=t=>s.value=!0)},{default:e(()=>[he]),_:1}),l(p,{modelValue:s.value,"onUpdate:modelValue":a[13]||(a[13]=t=>s.value=t)},{default:e(()=>[l(_,null,{default:e(()=>[l(U,null,{default:e(()=>[ye]),_:1}),l(B,null,{default:e(()=>[l(u,{onClick:a[11]||(a[11]=t=>V.value=!0)},{default:e(()=>[xe]),_:1})]),_:1}),l(k,null,{default:e(()=>[l(u,{onClick:a[12]||(a[12]=t=>s.value=!1)},{default:e(()=>[$e]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(p,{modelValue:V.value,"onUpdate:modelValue":a[16]||(a[16]=t=>V.value=t)},{default:e(()=>[l(_,null,{default:e(()=>[l(U,null,{default:e(()=>[Ee]),_:1}),l(B,null,{default:e(()=>[l(u,{onClick:a[14]||(a[14]=t=>n.value=!0)},{default:e(()=>[we]),_:1})]),_:1}),l(k,null,{default:e(()=>[l(u,{onClick:a[15]||(a[15]=t=>V.value=!1)},{default:e(()=>[Se]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(p,{modelValue:n.value,"onUpdate:modelValue":a[18]||(a[18]=t=>n.value=t)},{default:e(()=>[l(_,null,{default:e(()=>[l(U,null,{default:e(()=>[Fe]),_:1}),l(k,null,{default:e(()=>[l(u,{onClick:a[17]||(a[17]=t=>n.value=!1)},{default:e(()=>[Te]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}}),Le={class:"wrap"},Pe=w("h2",null,"Directive",-1),qe={class:"d-flex justify-center align-center fill-height"},Oe=q({__name:"VuetifyDirectives",setup(d){const f=r(!1),m=()=>{f.value=!1};return(g,i)=>(C(),D("div",Le,[Pe,ee((C(),te(_,{class:"mx-auto",width:"256",height:"256",rounded:"xl",onClick:i[0]||(i[0]=A=>f.value=!0)},{default:e(()=>[w("div",qe,P(f.value?"Click Outside":"Click Me"),1)]),_:1})),[[le,m]])]))}}),Me=q({__name:"GridDialog",setup(d){return(f,m)=>(C(),D(E,null,[l(Ue),l(Oe)],64))}});export{Me as default};