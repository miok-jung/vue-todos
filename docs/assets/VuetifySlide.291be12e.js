import{s as X,I as te,x as me,K as De,g as D,i as oe,a9 as Re,z as ee,d as l,F as Q,a6 as ze,am as j,A as Y,aY as Ne,ae as O,ak as Ue,at as Ke,C as xe,Y as Ae,as as $e,q as h,y as M,aZ as ae,a_ as he,az as Oe,a$ as qe,au as Le,L as Ge,a3 as We,h as ge,b0 as je,b1 as Pe,Q as Ye,b2 as ce,J as He,H as pe,b3 as Xe,aH as Je,b4 as Qe,aK as Ze,aN as el,b5 as ll,b6 as tl,f as fe,o as H,c as Z,w as F,j as re,b as r,V as _e,t as ye,e as al,ap as ul,k as nl,an as il,b7 as sl,b8 as ol,U as rl,W as dl,b9 as cl,D as vl,E as ml,ba as fl,a5 as Cl,R as ke,ao as bl,aW as Ve}from"./index.8f9d36c8.js";import{V as hl,a as gl}from"./VWindowItem.7c43a07a.js";import{V as pl,a as Be}from"./VSlideGroup.fd00d1e0.js";import{V as de}from"./VSheet.1c92e000.js";import{V as _l}from"./VContainer.fdf19d35.js";import"./ssrBoot.705f43d3.js";/* empty css              */const yl=X({name:"VCarousel",props:{color:String,cycle:Boolean,delimiterIcon:{type:te,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>e>0},modelValue:null,progress:[Boolean,String],showArrows:{type:[Boolean,String],default:!0,validator:e=>typeof e=="boolean"||e==="hover"},verticalDelimiters:[Boolean,String]},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:i}=t;const o=me(e,"modelValue"),{t:u}=De(),_=D();let w=-1;oe(o,C),oe(()=>e.interval,C),oe(()=>e.cycle,y=>{y?C():window.clearTimeout(w)}),Re(m);function m(){!e.cycle||!_.value||(w=window.setTimeout(_.value.group.next,+e.interval>0?+e.interval:6e3))}function C(){window.clearTimeout(w),window.requestAnimationFrame(m)}return ee(()=>l(hl,{ref:_,modelValue:o.value,"onUpdate:modelValue":y=>o.value=y,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters}],style:{height:O(e.height)},continuous:!0,mandatory:"force",showArrows:e.showArrows},{default:i.default,additional:y=>{let{group:g}=y;return l(Q,null,[!e.hideDelimiters&&l("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[g.items.value.length>0&&l(ze,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[g.items.value.map(v=>{const s={"aria-label":u("$vuetify.carousel.ariaLabel.delimiter"),class:[g.isSelected(v.id)&&"v-btn--selected"],onClick:()=>g.select(v.id,!0)};return i.item?i.item({props:s,item:v}):l(j,Y(v,s),null)})]})]),e.progress&&l(Ne,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(g.getItemIndex(o.value)+1)/g.items.value.length*100},null)])},prev:i.prev,next:i.next})),{}}}),kl=X({name:"VCarouselItem",inheritAttrs:!1,props:{value:null},setup(e,t){let{slots:i,attrs:o}=t;ee(()=>l(gl,{class:"v-carousel-item",value:e.value},{default:()=>[l(Ue,o,i)]}))}});const Ce=Symbol.for("vuetify:v-slider");function ve(e,t,i){const o=i==="vertical",u=t.getBoundingClientRect(),_="touches"in e?e.touches[0]:e;return o?_.clientY-(u.top+u.height/2):_.clientX-(u.left+u.width/2)}function Vl(e,t){return"touches"in e&&e.touches.length?e.touches[0][t]:"changedTouches"in e&&e.changedTouches.length?e.changedTouches[0][t]:e[t]}const Bl=Ke({disabled:Boolean,error:Boolean,readonly:Boolean,max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:0},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:e=>typeof e=="boolean"||e==="always"},thumbSize:{type:[Number,String],default:20},showTicks:{type:[Boolean,String],default:!1,validator:e=>typeof e=="boolean"||e==="always"},ticks:{type:[Array,Object]},tickSize:{type:[Number,String],default:2},color:String,trackColor:String,trackFillColor:String,trackSize:{type:[Number,String],default:4},direction:{type:String,default:"horizontal",validator:e=>["vertical","horizontal"].includes(e)},reverse:Boolean,...xe(),...Ae({elevation:2})},"slider"),Sl=e=>{let{props:t,handleSliderMouseUp:i,handleMouseMove:o,getActiveThumb:u}=e;const{isRtl:_}=$e(),w=h(()=>_.value!==t.reverse),m=h(()=>{let a=_.value?"rtl":"ltr";return t.reverse&&(a=a==="rtl"?"ltr":"rtl"),a}),C=h(()=>parseFloat(t.min)),y=h(()=>parseFloat(t.max)),g=h(()=>t.step>0?parseFloat(t.step):0),v=h(()=>{const a=g.value.toString().trim();return a.includes(".")?a.length-a.indexOf(".")-1:0}),s=h(()=>parseInt(t.thumbSize,10)),k=h(()=>parseInt(t.tickSize,10)),P=h(()=>parseInt(t.trackSize,10)),$=h(()=>(y.value-C.value)/g.value),U=M(t,"disabled"),b=h(()=>t.direction==="vertical"),E=h(()=>{var a;return t.error||t.disabled?void 0:(a=t.thumbColor)!=null?a:t.color}),x=h(()=>{var a;return t.error||t.disabled?void 0:(a=t.trackColor)!=null?a:t.color}),z=h(()=>{var a;return t.error||t.disabled?void 0:(a=t.trackFillColor)!=null?a:t.color}),R=D(!1),n=D(0),d=D(),c=D();function p(a){if(g.value<=0)return a;const N=he(a,C.value,y.value),G=C.value%g.value,ie=Math.round((N-G)/g.value)*g.value+G;return parseFloat(Math.min(ie,y.value).toFixed(v.value))}function f(a){var N;const G=t.direction==="vertical",ie=G?"top":"left",Ie=G?"height":"width",Te=G?"clientY":"clientX",{[ie]:Fe,[Ie]:Me}=(N=d.value)==null?void 0:N.$el.getBoundingClientRect(),Ee=Vl(a,Te);let se=Math.min(Math.max((Ee-Fe-n.value)/Me,0),1)||0;return(G||w.value)&&(se=1-se),p(C.value+se*(y.value-C.value))}let V=!1;const L=a=>{V||(n.value=0,i(f(a))),R.value=!1,V=!1,n.value=0},A=a=>{c.value=u(a),c.value&&(c.value.focus(),R.value=!0,c.value.contains(a.target)?(V=!0,n.value=ve(a,c.value,t.direction)):(n.value=0,o(f(a))))},I={passive:!0,capture:!0};function T(a){V=!0,o(f(a))}function B(a){a.stopPropagation(),a.preventDefault(),L(a),window.removeEventListener("mousemove",T,I),window.removeEventListener("mouseup",B)}function S(a){a.stopPropagation(),a.preventDefault(),L(a),window.removeEventListener("touchmove",T,I),window.removeEventListener("touchend",S)}function q(a){A(a),window.addEventListener("touchmove",T,I),window.addEventListener("touchend",S,{passive:!1})}function J(a){a.preventDefault(),A(a),window.addEventListener("mousemove",T,I),window.addEventListener("mouseup",B,{passive:!1})}const K=a=>{const N=(a-C.value)/(y.value-C.value)*100;return he(isNaN(N)?0:N,0,100)},ue=h(()=>t.ticks?Array.isArray(t.ticks)?t.ticks.map(a=>({value:a,position:K(a),label:a.toString()})):Object.keys(t.ticks).map(a=>({value:parseInt(a,10),position:K(parseInt(a,10)),label:t.ticks[a]})):$.value!==1/0?ae($.value+1).map(a=>{const N=C.value+a*g.value;return{value:N,position:K(N)}}):[]),ne=h(()=>ue.value.some(a=>{let{label:N}=a;return!!N})),be={activeThumbRef:c,color:M(t,"color"),decimals:v,disabled:U,direction:M(t,"direction"),elevation:M(t,"elevation"),hasLabels:ne,horizontalDirection:m,isReversed:w,min:C,max:y,mousePressed:R,numTicks:$,onSliderMousedown:J,onSliderTouchstart:q,parsedTicks:ue,parseMouseMove:f,position:K,readonly:M(t,"readonly"),rounded:M(t,"rounded"),roundValue:p,showTicks:M(t,"showTicks"),startOffset:n,step:g,thumbSize:s,thumbColor:E,thumbLabel:M(t,"thumbLabel"),ticks:M(t,"ticks"),tickSize:k,trackColor:x,trackContainerRef:d,trackFillColor:z,trackSize:P,vertical:b};return Oe(Ce,be),be};const Se=X({name:"VSliderThumb",directives:{Ripple:qe},props:{focused:Boolean,max:{type:Number,required:!0},min:{type:Number,required:!0},modelValue:{type:Number,required:!0},position:{type:Number,required:!0}},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:i,emit:o}=t;const u=Le(Ce);if(!u)throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");const{thumbColor:_,step:w,vertical:m,disabled:C,thumbSize:y,thumbLabel:g,direction:v,readonly:s,elevation:k,isReversed:P,horizontalDirection:$,mousePressed:U,decimals:b}=u,{textColorClasses:E,textColorStyles:x}=Ge(_),{pageup:z,pagedown:R,end:n,home:d,left:c,right:p,down:f,up:V}=ce,L=[z,R,n,d,c,p,f,V],A=h(()=>w.value?[1,2,3]:[1,5,10]);function I(B,S){if(!L.includes(B.key))return;B.preventDefault();const q=w.value||.1,J=(e.max-e.min)/q;if([c,p,f,V].includes(B.key)){const ue=(P.value?[c,V]:[p,V]).includes(B.key)?1:-1,ne=B.shiftKey?2:B.ctrlKey?1:0;S=S+ue*q*A.value[ne]}else if(B.key===d)S=e.min;else if(B.key===n)S=e.max;else{const K=B.key===R?1:-1;S=S-K*q*(J>100?J/10:10)}return Math.max(e.min,Math.min(e.max,S))}function T(B){const S=I(B,e.modelValue);S!=null&&o("update:modelValue",S)}return ee(()=>{var B,S;const q=O(m.value?100-e.position:e.position,"%"),J=m.value?"block":"inline",{elevationClasses:K}=We(h(()=>C.value?void 0:k.value));return l("div",{class:["v-slider-thumb",{"v-slider-thumb--focused":e.focused,"v-slider-thumb--pressed":e.focused&&U.value}],style:{[`inset-${J}-start`]:`calc(${q} - var(--v-slider-thumb-size) / 2)`,"--v-slider-thumb-size":O(y.value),direction:m.value?void 0:$.value},role:"slider",tabindex:C.value?-1:0,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.modelValue,"aria-readonly":s.value,"aria-orientation":v.value,onKeydown:s.value?void 0:T},[l("div",{class:["v-slider-thumb__surface",E.value,K.value],style:{...x.value}},null),ge(l("div",{class:["v-slider-thumb__ripple",E.value],style:x.value},null),[[je("ripple"),!0,null,{circle:!0,center:!0}]]),l(Pe,{origin:"bottom center"},{default:()=>[ge(l("div",{class:"v-slider-thumb__label-container"},[l("div",{class:["v-slider-thumb__label"]},[l("div",null,[(B=(S=i["thumb-label"])==null?void 0:S.call(i,{modelValue:e.modelValue}))!=null?B:e.modelValue.toFixed(w.value?b.value:1)])])]),[[Ye,g.value&&e.focused||g.value==="always"]])]})])}),{}}});const wl=X({name:"VSliderTrack",props:{start:{type:Number,required:!0},stop:{type:Number,required:!0}},emits:{},setup(e,t){let{slots:i}=t;const o=Le(Ce);if(!o)throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");const{color:u,horizontalDirection:_,parsedTicks:w,rounded:m,showTicks:C,tickSize:y,trackColor:g,trackFillColor:v,trackSize:s,vertical:k}=o,{roundedClasses:P}=He(m),{backgroundColorClasses:$,backgroundColorStyles:U}=pe(v),{backgroundColorClasses:b,backgroundColorStyles:E}=pe(g),x=h(()=>`inset-${k.value?"block-end":"inline-start"}`),z=h(()=>k.value?"height":"width"),R=h(()=>({[x.value]:"0%",[z.value]:"100%"})),n=h(()=>e.stop-e.start),d=h(()=>({[x.value]:O(e.start,"%"),[z.value]:O(n.value,"%")})),c=h(()=>(k.value?w.value.slice().reverse():w.value).map((f,V)=>{var L,A;const I=k.value?"bottom":"margin-inline-start",T=f.position>0&&f.position<100?O(f.position,"%"):void 0;return l("div",{key:f.value,class:["v-slider-track__tick",{"v-slider-track__tick--filled":f.position>=e.start&&f.position<=e.stop}],style:{[I]:T}},[(f.label||i["tick-label"])&&l("div",{class:"v-slider-track__tick-label"},[(L=(A=i["tick-label"])==null?void 0:A.call(i,{tick:f,index:V}))!=null?L:f.label])])}));return ee(()=>l("div",{class:["v-slider-track",P.value],style:{"--v-slider-track-size":O(s.value),"--v-slider-tick-size":O(y.value),direction:k.value?void 0:_.value}},[l("div",{class:["v-slider-track__background",b.value,{"v-slider-track__background--opacity":!!u.value||!v.value}],style:{...R.value,...E.value}},null),l("div",{class:["v-slider-track__fill",$.value],style:{...d.value,...U.value}},null),C.value&&l("div",{class:["v-slider-track__ticks",{"v-slider-track__ticks--always-show":C.value==="always"}]},[c.value])])),{}}}),W=X({name:"VRangeSlider",props:{...Xe(),...Je(),...Bl(),strict:Boolean,modelValue:{type:Array,default:()=>[0,0]}},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{slots:i}=t;const o=D(),u=D(),_=D();function w(d){if(!o.value||!u.value)return;const c=ve(d,o.value.$el,e.direction),p=ve(d,u.value.$el,e.direction),f=Math.abs(c),V=Math.abs(p);return f<V||f===V&&c<0?o.value.$el:u.value.$el}const{activeThumbRef:m,hasLabels:C,max:y,min:g,mousePressed:v,onSliderMousedown:s,onSliderTouchstart:k,position:P,roundValue:$,trackContainerRef:U}=Sl({props:e,handleSliderMouseUp:d=>{var c;b.value=m.value===((c=o.value)==null?void 0:c.$el)?[d,b.value[1]]:[b.value[0],d]},handleMouseMove:d=>{var c;const[p,f]=b.value;if(!e.strict&&p===f&&p!==g.value){var V,L,A;m.value=d>p?(V=u.value)==null?void 0:V.$el:(L=o.value)==null?void 0:L.$el,(A=m.value)==null||A.focus()}m.value===((c=o.value)==null?void 0:c.$el)?b.value=[Math.min(d,f),f]:b.value=[p,Math.max(p,d)]},getActiveThumb:w}),b=me(e,"modelValue",void 0,d=>!d||!d.length?[0,0]:d.map(c=>$(c))),{isFocused:E,focus:x,blur:z}=Qe(e),R=h(()=>P(b.value[0])),n=h(()=>P(b.value[1]));return ee(()=>{const[d,c]=Ze(e);return l(el,Y({class:["v-slider","v-range-slider",{"v-slider--has-labels":!!i["tick-label"]||C.value,"v-slider--focused":E.value,"v-slider--pressed":v.value,"v-slider--disabled":e.disabled}],ref:_},d,{focused:E.value}),{...i,default:p=>{var f,V;let{id:L}=p;return l("div",{class:"v-slider__container",onMousedown:s,onTouchstartPassive:k},[l("input",{id:`${L.value}_start`,name:e.name||L.value,disabled:e.disabled,readonly:e.readonly,tabindex:"-1",value:b.value[0]},null),l("input",{id:`${L.value}_stop`,name:e.name||L.value,disabled:e.disabled,readonly:e.readonly,tabindex:"-1",value:b.value[1]},null),l(wl,{ref:U,start:R.value,stop:n.value},{"tick-label":i["tick-label"]}),l(Se,{ref:o,focused:E&&m.value===((f=o.value)==null?void 0:f.$el),modelValue:b.value[0],"onUpdate:modelValue":A=>b.value=[A,b.value[1]],onFocus:A=>{var I,T;if(x(),m.value=(I=o.value)==null?void 0:I.$el,b.value[0]===b.value[1]&&b.value[1]===g.value&&A.relatedTarget!==((T=u.value)==null?void 0:T.$el)){var B,S;(B=o.value)==null||B.$el.blur(),(S=u.value)==null||S.$el.focus()}},onBlur:()=>{z(),m.value=void 0},min:g.value,max:b.value[1],position:R.value},{"thumb-label":i["thumb-label"]}),l(Se,{ref:u,focused:E&&m.value===((V=u.value)==null?void 0:V.$el),modelValue:b.value[1],"onUpdate:modelValue":A=>b.value=[b.value[0],A],onFocus:A=>{var I,T;if(x(),m.value=(I=u.value)==null?void 0:I.$el,b.value[0]===b.value[1]&&b.value[0]===y.value&&A.relatedTarget!==((T=o.value)==null?void 0:T.$el)){var B,S;(B=u.value)==null||B.$el.blur(),(S=o.value)==null||S.$el.focus()}},onBlur:()=>{z(),m.value=void 0},min:b.value[0],max:y.value,position:n.value},{"thumb-label":i["thumb-label"]})])}})}),{}}}),we=X({name:"VSlideGroupItem",props:{...ll()},emits:{"group:selected":e=>!0},setup(e,t){let{slots:i}=t;const o=tl(e,pl);return()=>{var u;return(u=i.default)==null?void 0:u.call(i,{isSelected:o.isSelected.value,select:o.select,toggle:o.toggle,selectedClass:o.selectedClass.value})}}}),Dl=r("div",{class:"wrap"},[r("h2",null,"Slide"),r("p",null,"Vuetify \uC2AC\uB77C\uC774\uB4DC \uC785\uB2C8\uB2E4.")],-1),xl={class:"d-flex fill-height justify-center align-center"},Al={class:"text-h2"},$l=r("div",{class:"wrap"},[r("h2",null,"Range Slider")],-1),Ll={class:"wrap"},Pl=r("h3",null,"v-range-slider \uAE30\uBCF8",-1),Il=r("p",null,"\uAC00\uC7A5 \uAE30\uBCF8 range-slider 0 \uBD80\uD130 100\uAE4C\uC9C0 \uC790\uC720\uB86D\uAC8C \uC6C0\uC9C1\uC77C \uC218 \uC788\uB2E4.",-1),Tl={class:"wrap"},Fl=r("h3",null,"v-range-slider Value",-1),Ml=r("p",null,"range-slider\uC5D0 Value\uB97C \uCD94\uAC00\uD558\uBA74 \uAC12\uC744 \uACE0\uC815\uD560 \uC218 \uC788\uB2E4.",-1),El={class:"wrap"},Rl=r("h3",null,"v-range-slider disabled",-1),zl=r("p",null,"range-slider\uC5D0 disabled\uB97C \uCD94\uAC00\uD558\uBA74 \uBE44\uD65C\uC131\uD654\uAC00 \uB41C\uB2E4.",-1),Nl={class:"wrap"},Ul=r("h3",null,"Min & Max",-1),Kl=r("p",null,"max, min\uAC12\uC744 \uB123\uC5B4 \uCD5C\uB300\uAC12\uACFC \uCD5C\uC18C\uAC12\uC744 \uC124\uC815\uD560 \uC218 \uC788\uB2E4.",-1),Ol={class:"wrap"},ql=r("h3",null,"Step",-1),Gl=r("p",null,' \uC6D0\uD558\uB294 \uC22B\uC790\uB9CC\uD07C \uB2E8\uACC4\uC801\uC73C\uB85C \uC0C1\uC2B9\uC774 \uAC00\uB2A5\uD558\uB2E4. thumb-label="always"\uC77C \uACBD\uC6B0 \uC22B\uC790\uB97C \uD655\uC778\uD560 \uC218 \uC788\uB2E4. ',-1),Wl={class:"wrap"},jl=r("h3",null,"Vertical",-1),Yl=r("p",null,"\uC218\uC9C1 \uC2AC\uB77C\uC774\uB354\uB85C \uC804\uD658\uD560 \uC218 \uC788\uB2E4. \uB192\uC774\uB294 CSS\uB85C \uBCC0\uACBD\uD558\uBA74 \uB41C\uB2E4.",-1),Hl={class:"wrap"},Xl=r("h3",null,"Slot",-1),Jl=r("ul",null,[r("li",null,"show-ticks : \uC2A4\uD15D\uBCC4 \uC704\uCE58\uAC00 \uC5B4\uB514\uC778\uC9C0 \uBCF4\uC5EC\uC90C"),r("li",null,"ticks-size : \uC2A4\uD15D\uBCC4 \uC6D0\uD615\uC758 \uD06C\uAE30\uB97C \uC870\uC808")],-1),Ql=r("div",{class:"wrap"},[r("h3",null,"v-slide-group"),r("ul",null,[r("li",null,"v-slide-group\uB97C \uBB36\uC5B4 \uD654\uC0B4\uD45C\uD074\uB9AD\uC774\uBCA4\uD2B8\uB97C \uCD94\uAC00\uD560 \uC218 \uC788\uB2E4.")])],-1),Zl=r("div",{class:"wrap"},[r("h3",null,"acitve-class"),r("ul",null,[r("li",null,"\uD074\uB798\uC2A4 \uC804\uB2EC \uD65C\uC131 \uD56D\uBAA9 \uC0AC\uC6A9\uC790 \uC9C0\uC815"),r("li",null,"\uC120\uD0DD\uC2DC \uAC00\uC6B4\uB370\uB85C \uC62C \uC218 \uC788\uAC8C \uC9C0\uC815"),r("li",null,"\uC544\uC774\uCF58\uC744 \uC790\uC720\uB86D\uAC8C \uBCC0\uACBD \uAC00\uB2A5")])],-1),et={class:"d-flex fill-height align-center justify-center"},lt=fe({__name:"VuetifySlide",setup(e){const t=["primary","secondary","yellow darken-2","red","orange"],i=D([20,40]),o=[30,50],u=D([-5,5]),_=D([50,50]),w=D([10,20]),m=["mdi-snowflake","mdi-leaf","mdi-fire","mdi-water"],C=g=>m[g],y=D(0);return(g,v)=>(H(),Z(Q,null,[Dl,l(yl,{"show-arrows":"hover"},{default:F(()=>[(H(),Z(Q,null,re(t,(s,k)=>l(kl,{key:s},{default:F(()=>[l(de,{color:s,height:"100%",tile:""},{default:F(()=>[r("div",xl,[r("div",Al,"Slide "+ye(k+1),1)])]),_:2},1032,["color"])]),_:2},1024)),64))]),_:1}),$l,r("div",Ll,[Pl,Il,l(W)]),r("div",Tl,[Fl,Ml,l(W,{modelValue:i.value,"onUpdate:modelValue":v[0]||(v[0]=s=>i.value=s)},null,8,["modelValue"])]),r("div",El,[Rl,zl,l(W,{modelValue:o,"onUpdate:modelValue":v[1]||(v[1]=s=>o=s),disabled:""})]),r("div",Nl,[Ul,Kl,l(W,{modelValue:u.value,"onUpdate:modelValue":v[2]||(v[2]=s=>u.value=s),max:10,min:-10},null,8,["modelValue"])]),r("div",Ol,[ql,Gl,l(W,{modelValue:_.value,"onUpdate:modelValue":v[3]||(v[3]=s=>_.value=s),step:"10","thumb-label":"always"},null,8,["modelValue"])]),r("div",Wl,[jl,Yl,l(W,{modelValue:w.value,"onUpdate:modelValue":v[4]||(v[4]=s=>w.value=s),direction:"vertical","thumb-label":"always"},null,8,["modelValue"])]),r("div",Hl,[Xl,Jl,l(W,{value:[0,1],min:"0",max:"3",step:1,"show-ticks":"always","thumb-label":"always","tick-size":"5"},{"thumb-label":F(({modelValue:s})=>[l(_e,{theme:"dark",icon:C(s)},null,8,["icon"])]),_:1})]),Ql,l(de,{class:"mx-auto"},{default:F(()=>[l(Be,{"show-arrows":""},{default:F(()=>[(H(),Z(Q,null,re(25,s=>l(we,{key:s},{default:F(({isSelected:k,toggle:P})=>[l(j,{class:"ma-2",rounded:"",color:k?"orange":void 0,onClick:P},{default:F(()=>[al("option "+ye(s),1)]),_:2},1032,["color","onClick"])]),_:2},1024)),64))]),_:1})]),_:1}),Zl,l(de,null,{default:F(()=>[l(Be,{modelValue:y.value,"onUpdate:modelValue":v[5]||(v[5]=s=>y.value=s),"selected-class":"bg-error","show-arrows":"","center-active":"","prev-icon":"mdi-minus","next-icon":"mdi-plus",multiple:""},{default:F(()=>[(H(),Z(Q,null,re(15,s=>l(we,{key:s},{default:F(({isSelected:k,toggle:P,selectedClass:$})=>[l(ul,{class:nl(["ma-1",$]),width:"100",height:"100",onClick:P},{default:F(()=>[r("div",et,[l(Pe,null,{default:F(()=>[k?(H(),il(_e,{key:0,color:"yellow",size:"48",icon:"mdi-airplane-plus"})):sl("",!0)]),_:2},1024)])]),_:2},1032,["class","onClick"])]),_:2},1024)),64))]),_:1},8,["modelValue"])]),_:1})],64))}});function tt(){const e=D([]);ol(()=>e.value=[]);function t(i,o){e.value[o]=i}return{refs:e,updateRef:t}}const le=X({name:"VPagination",props:{activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:te,default:"$first"},prevIcon:{type:te,default:"$prev"},nextIcon:{type:te,default:"$next"},lastIcon:{type:te,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...rl(),...dl(),...Ae(),...xe(),...cl(),...vl({tag:"nav"}),...ml(),...fl({variant:"text"})},emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,t){let{slots:i,emit:o}=t;const u=me(e,"modelValue"),{t:_,n:w}=De(),{isRtl:m}=$e(),{themeClasses:C}=Cl(e),y=D(-1);ke(void 0,{scoped:!0});const{resizeRef:g}=bl(n=>{if(!n.length)return;const{target:d,contentRect:c}=n[0],p=d.querySelector(".v-pagination__list > *");if(!p)return;const f=c.width,V=p.getBoundingClientRect().width+10;y.value=Math.max(0,Math.floor((f-96)/V))}),v=h(()=>parseInt(e.length,10)),s=h(()=>parseInt(e.start,10)),k=h(()=>{var n;return e.totalVisible?Math.min(parseInt((n=e.totalVisible)!=null?n:"",10),v.value):y.value>=0?y.value:v.value}),P=h(()=>{if(v.value<=0)return[];if(k.value<=2)return[u.value];if(v.value<=k.value)return ae(v.value,s.value);const n=k.value%2===0,d=n?k.value/2:Math.floor(k.value/2),c=n?d:d+1,p=v.value-d;if(c-u.value>=0)return[...ae(Math.max(1,k.value-1),s.value),e.ellipsis,v.value];if(u.value-p>=0){const f=k.value-1,V=v.value-f+s.value;return[s.value,e.ellipsis,...ae(f,V)]}else{const f=Math.max(1,k.value-3),V=f===1?u.value:u.value-Math.ceil(f/2)+s.value;return[s.value,e.ellipsis,...ae(f,V),e.ellipsis,v.value]}});function $(n,d,c){n.preventDefault(),u.value=d,c&&o(c,d)}const{refs:U,updateRef:b}=tt();ke({VPaginationBtn:{color:M(e,"color"),border:M(e,"border"),density:M(e,"density"),size:M(e,"size"),variant:M(e,"variant")}});const E=h(()=>P.value.map((n,d)=>{const c=p=>b(p,d);if(typeof n=="string")return{isActive:!1,page:n,props:{ref:c,ellipsis:!0,icon:!0,disabled:!0}};{const p=n===u.value;return{isActive:p,page:w(n),props:{ref:c,ellipsis:!1,icon:!0,disabled:!!e.disabled||e.length<2,elevation:e.elevation,rounded:e.rounded,color:p?e.activeColor:e.color,ariaCurrent:p,ariaLabel:_(p?e.currentPageAriaLabel:e.pageAriaLabel,d+1),onClick:f=>$(f,n)}}}})),x=h(()=>{const n=!!e.disabled||u.value<=s.value,d=!!e.disabled||u.value>=s.value+v.value-1;return{first:e.showFirstLastPage?{icon:m.value?e.lastIcon:e.firstIcon,onClick:c=>$(c,s.value,"first"),disabled:n,ariaLabel:_(e.firstAriaLabel),ariaDisabled:n}:void 0,prev:{icon:m.value?e.nextIcon:e.prevIcon,onClick:c=>$(c,u.value-1,"prev"),disabled:n,ariaLabel:_(e.previousAriaLabel),ariaDisabled:n},next:{icon:m.value?e.prevIcon:e.nextIcon,onClick:c=>$(c,u.value+1,"next"),disabled:d,ariaLabel:_(e.nextAriaLabel),ariaDisabled:d},last:e.showFirstLastPage?{icon:m.value?e.firstIcon:e.lastIcon,onClick:c=>$(c,s.value+v.value-1,"last"),disabled:d,ariaLabel:_(e.lastAriaLabel),ariaDisabled:d}:void 0}});function z(){var n;const d=u.value-s.value;(n=U.value[d])==null||n.$el.focus()}function R(n){n.key===ce.left&&!e.disabled&&u.value>e.start?(u.value=u.value-1,Ve(z)):n.key===ce.right&&!e.disabled&&u.value<s.value+v.value-1&&(u.value=u.value+1,Ve(z))}return ee(()=>l(e.tag,{ref:g,class:["v-pagination",C.value],role:"navigation","aria-label":_(e.ariaLabel),onKeydown:R,"data-test":"v-pagination-root"},{default:()=>[l("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&l("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[i.first?i.first(x.value.first):l(j,Y({_as:"VPaginationBtn"},x.value.first),null)]),l("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[i.prev?i.prev(x.value.prev):l(j,Y({_as:"VPaginationBtn"},x.value.prev),null)]),E.value.map((n,d)=>l("li",{key:n.page,class:["v-pagination__item",{"v-pagination__item--is-active":n.isActive}],"data-test":"v-pagination-item"},[i.item?i.item(n):l(j,Y({_as:"VPaginationBtn"},n.props),{default:()=>[n.page]})])),l("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[i.next?i.next(x.value.next):l(j,Y({_as:"VPaginationBtn"},x.value.next),null)]),e.showFirstLastPage&&l("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[i.last?i.last(x.value.last):l(j,Y({_as:"VPaginationBtn"},x.value.last),null)])])]})),{}}}),at={class:"wrap"},ut=r("h2",null,"Pagination",-1),nt=r("p",null,"\uAE30\uBCF8 Pagination",-1),it={class:"text-center"},st=fe({__name:"pagiNation",setup(e){const t=D(1),i=D(1),o=D(1),u=D(1),_=D(1);return(w,m)=>(H(),Z("div",at,[ut,nt,r("div",it,[l(le,{modelValue:t.value,"onUpdate:modelValue":m[0]||(m[0]=C=>t.value=C),length:6},null,8,["modelValue"]),l(le,{modelValue:i.value,"onUpdate:modelValue":m[1]||(m[1]=C=>i.value=C),length:7,rounded:"0"},null,8,["modelValue"]),l(le,{modelValue:o.value,"onUpdate:modelValue":m[2]||(m[2]=C=>o.value=C),length:5,rounded:"circle"},null,8,["modelValue"]),l(le,{modelValue:u.value,"onUpdate:modelValue":m[3]||(m[3]=C=>u.value=C),length:11,rounded:"circle","prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right"},null,8,["modelValue"]),l(_l,{class:"max-width"},{default:F(()=>[l(le,{class:"my-4",modelValue:_.value,"onUpdate:modelValue":m[4]||(m[4]=C=>_.value=C),length:30,"total-visible":10},null,8,["modelValue"])]),_:1})])]))}}),Ct=fe({__name:"VuetifySlide",setup(e){return(t,i)=>(H(),Z(Q,null,[l(lt),l(st)],64))}});export{Ct as default};
