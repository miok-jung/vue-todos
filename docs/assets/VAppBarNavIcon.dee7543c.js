import{at as K,au as Z,q as r,g as E,m as k,ao as ne,av as J,a9 as le,aw as se,ax as ie,ay as ue,aa as re,ae as S,az as W,aA as ce,aB as G,D as Q,z as q,d as v,U as de,Y as ve,C as me,E as fe,H as ye,y as ge,$ as pe,a3 as be,J as he,a5 as xe,R as Ie,a6 as $e,ak as Se,aC as Ve,aD as _e,O as Te,s as we,I as Be,am as Ce}from"./index.8f9d36c8.js";const H=Symbol.for("vuetify:layout"),ee=Symbol.for("vuetify:layout-item"),U=1e3,Ee=K({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),He=K({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Ae(){const e=Z(H);if(!e)throw new Error("Could not find injected Vuetify layout");return e}function Oe(e){var s;const a=Z(H);if(!a)throw new Error("Could not find injected Vuetify layout");const t=(s=e.id)!=null?s:`layout-item-${se()}`,i=J("useLayoutItem");W(ee,{id:t});const u=E(!1);ie(()=>u.value=!0),ue(()=>u.value=!1);const{layoutItemStyles:d,layoutItemScrimStyles:m}=a.register(i,{...e,active:r(()=>u.value?!1:e.active.value),id:t});return re(()=>a.unregister(t)),{layoutItemStyles:d,layoutRect:a.layoutRect,layoutItemScrimStyles:m}}const ke=(e,s,a,t)=>{let i={top:0,left:0,right:0,bottom:0};const u=[{id:"",layer:{...i}}];for(const d of e){const m=s.get(d),b=a.get(d),$=t.get(d);if(!m||!b||!$)continue;const y={...i,[m.value]:parseInt(i[m.value],10)+($.value?parseInt(b.value,10):0)};u.push({id:d,layer:y}),i=y}return u};function Me(e){const s=Z(H,null),a=r(()=>s?s.rootZIndex.value-100:U),t=E([]),i=k(new Map),u=k(new Map),d=k(new Map),m=k(new Map),b=k(new Map),{resizeRef:$,contentRect:y}=ne(),L=r(()=>{var o;const c=new Map,n=(o=e.overlaps)!=null?o:[];for(const g of n.filter(l=>l.includes(":"))){const[l,p]=g.split(":");if(!t.value.includes(l)||!t.value.includes(p))continue;const I=i.get(l),w=i.get(p),B=u.get(l),N=u.get(p);!I||!w||!B||!N||(c.set(p,{position:I.value,amount:parseInt(B.value,10)}),c.set(l,{position:w.value,amount:-parseInt(N.value,10)}))}return c}),h=r(()=>{const o=[...new Set([...d.values()].map(n=>n.value))].sort((n,g)=>n-g),c=[];for(const n of o){const g=t.value.filter(l=>{var p;return((p=d.get(l))==null?void 0:p.value)===n});c.push(...g)}return ke(c,i,u,m)}),V=r(()=>!Array.from(b.values()).some(o=>o.value)),R=r(()=>{const o=h.value[h.value.length-1].layer;return{position:"relative",paddingLeft:S(o.left),paddingRight:S(o.right),paddingTop:S(o.top),paddingBottom:S(o.bottom),...V.value?void 0:{transition:"none"}}}),x=r(()=>h.value.slice(1).map((o,c)=>{let{id:n}=o;const{layer:g}=h.value[c],l=u.get(n);return{id:n,...g,size:Number(l.value)}})),_=o=>x.value.find(c=>c.id===o),T=J("createLayout"),z=E(!1);le(()=>{z.value=!0}),W(H,{register:(o,c)=>{let{id:n,order:g,position:l,layoutSize:p,elementSize:I,active:w,disableTransitions:B,absolute:N}=c;d.set(n,g),i.set(n,l),u.set(n,p),m.set(n,w),B&&b.set(n,B);const F=ce(ee,T==null?void 0:T.vnode).indexOf(o);F>-1?t.value.splice(F,0,n):t.value.push(n);const O=r(()=>x.value.findIndex(C=>C.id===n)),M=r(()=>a.value+h.value.length*2-O.value*2),te=r(()=>{const C=l.value==="left"||l.value==="right",D=l.value==="right",oe=l.value==="bottom",X={[l.value]:0,zIndex:M.value,transform:`translate${C?"X":"Y"}(${(w.value?0:-110)*(D||oe?-1:1)}%)`,position:N.value||a.value!==U?"absolute":"fixed",...V.value?void 0:{transition:"none"}};if(!z.value)return X;if(O.value<0)throw new Error(`Layout item "${n}" is missing`);const f=x.value[O.value];if(!f)throw new Error(`Could not find layout item "${n}`);const j=L.value.get(n);return j&&(f[j.position]+=j.amount),{...X,height:C?`calc(100% - ${f.top}px - ${f.bottom}px)`:I.value?`${I.value}px`:void 0,marginLeft:D?void 0:`${f.left}px`,marginRight:D?`${f.right}px`:void 0,marginTop:l.value!=="bottom"?`${f.top}px`:void 0,marginBottom:l.value!=="top"?`${f.bottom}px`:void 0,width:C?I.value?`${I.value}px`:void 0:`calc(100% - ${f.left}px - ${f.right}px)`}}),ae=r(()=>({zIndex:M.value-1,position:a.value===U?"fixed":"absolute"}));return{layoutItemStyles:te,layoutItemScrimStyles:ae,zIndex:M}},unregister:o=>{d.delete(o),i.delete(o),u.delete(o),m.delete(o),b.delete(o),t.value=t.value.filter(c=>c!==o)},mainStyles:R,getLayoutItem:_,items:x,layoutRect:y,rootZIndex:a});const A=r(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),P=r(()=>({zIndex:a.value}));return{layoutClasses:A,layoutStyles:P,getLayoutItem:_,items:x,layoutRect:y,layoutRef:$}}const Le=G()({name:"VToolbarTitle",props:{text:String,...Q()},setup(e,s){let{slots:a}=s;return q(()=>{var t;const i=!!(a.default||a.text||e.text);return v(e.tag,{class:"v-toolbar-title"},{default:()=>[i&&v("div",{class:"v-toolbar-title__placeholder"},[a.text?a.text():e.text,(t=a.default)==null?void 0:t.call(a)])]})}),{}}}),Re=[null,"prominent","default","comfortable","compact"],ze=K({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Re.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...de(),...ve(),...me(),...Q({tag:"header"}),...fe()},"v-toolbar"),Y=G()({name:"VToolbar",props:ze(),setup(e,s){var a;let{slots:t}=s;const{backgroundColorClasses:i,backgroundColorStyles:u}=ye(ge(e,"color")),{borderClasses:d}=pe(e),{elevationClasses:m}=be(e),{roundedClasses:b}=he(e),{themeClasses:$}=xe(e),y=E(!!(e.extended||(a=t.extension)!=null&&a.call(t))),L=r(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),h=r(()=>y.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Ie({VBtn:{variant:"text"}}),q(()=>{var V,R,x,_,T;const z=!!(e.title||t.title),A=!!(t.image||e.image),P=(V=t.extension)==null?void 0:V.call(t);return y.value=!!(e.extended||P),v(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},i.value,d.value,m.value,b.value,$.value],style:[u.value]},{default:()=>[A&&v("div",{key:"image",class:"v-toolbar__image"},[v($e,{defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>[t.image?(R=t.image)==null?void 0:R.call(t):v(Se,null,null)]})]),v("div",{class:"v-toolbar__content",style:{height:S(L.value)}},[t.prepend&&v("div",{class:"v-toolbar__prepend"},[(x=t.prepend)==null?void 0:x.call(t)]),z&&v(Le,{key:"title",text:e.title},{text:t.title}),(_=t.default)==null?void 0:_.call(t),t.append&&v("div",{class:"v-toolbar__append"},[(T=t.append)==null?void 0:T.call(t)])]),v(Ve,null,{default:()=>[y.value&&v("div",{class:"v-toolbar__extension",style:{height:S(h.value)}},[P])]})]})}),_e({contentHeight:L,extensionHeight:h})}});function De(e){var s;return Te(e,Object.keys((s=Y==null?void 0:Y.props)!=null?s:{}))}const je=we({name:"VAppBarNavIcon",props:{icon:{type:Be,default:"$menu"}},setup(e,s){let{slots:a}=s;return q(()=>v(Ce,{class:"v-app-bar-nav-icon",icon:e.icon},a)),{}}});export{Y as V,He as a,Le as b,je as c,Ee as d,Me as e,De as f,Ae as g,ze as m,Oe as u};
