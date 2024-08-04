import{d as D,r as l,j as y,I as ke,x as Te,y as je,m as ae,q as _,p as se,b as Pe,f as T,g as Y,k as Be,o as Ke,e as Ve}from"./input.js";import{ae as ze,af as Ge,d as Le,B as We,l as qe,x as He,I as Xe,ac as $e}from"./App-qo42s2ji.js";import{I as Ye}from"./IconSearch-ZN34j33e.js";import{I as Je}from"./chunk-7D6N5TE5-rpRnbuGR.js";function Qe(t){const e=parseFloat(t);return typeof e!="number"||Number.isNaN(e)?0:e}function ie(t,e){let r=Qe(t);const s=10**(e??10);return r=Math.round(r*s)/s,e?r.toFixed(e):r.toString()}function ue(t){if(!Number.isFinite(t))return 0;let e=1,r=0;for(;Math.round(t*e)/e!==t;)e*=10,r+=1;return r}function Ct(t,e,r){return(t-e)*100/(r-e)}function It(t,e,r){return(r-e)*t+e}function St(t,e,r){const s=Math.round((t-e)/r)*r+e,i=ue(r);return ie(s,i)}function Ze(t,e,r){return t==null?t:(r<e&&console.warn("clamp: max cannot be less than min"),Math.min(Math.max(t,e),r))}function et(t={}){const{onChange:e,precision:r,defaultValue:s,value:i,step:a=1,min:u=Number.MIN_SAFE_INTEGER,max:o=Number.MAX_SAFE_INTEGER,keepWithinRange:f=!0}=t,c=D(e),[p,N]=l.useState(()=>{var g;return s==null?"":(g=oe(s,a,r))!=null?g:""}),x=typeof i<"u",v=x?i:p,I=Me(P(v),a),S=r??I,A=l.useCallback(g=>{g!==v&&(x||N(g.toString()),c==null||c(g.toString(),P(g)))},[c,x,v]),E=l.useCallback(g=>{let b=g;return f&&(b=Ze(b,u,o)),ie(b,S)},[S,f,o,u]),j=l.useCallback((g=a)=>{let b;v===""?b=P(g):b=P(v)+g,b=E(b),A(b)},[E,a,A,v]),B=l.useCallback((g=a)=>{let b;v===""?b=P(-g):b=P(v)-g,b=E(b),A(b)},[E,a,A,v]),K=l.useCallback(()=>{var g;let b;s==null?b="":b=(g=oe(s,a,r))!=null?g:u,A(b)},[s,r,a,A,u]),Q=l.useCallback(g=>{var b;const ee=(b=oe(g,a,S))!=null?b:u;A(ee)},[S,a,A,u]),V=P(v);return{isOutOfRange:V>o||V<u,isAtMax:V===o,isAtMin:V===u,precision:S,value:v,valueAsNumber:V,update:A,reset:K,increment:j,decrement:B,clamp:E,cast:Q,setValue:N}}function P(t){return parseFloat(t.toString().replace(/[^\w.-]+/g,""))}function Me(t,e){return Math.max(ue(e),ue(t))}function oe(t,e,r){const s=P(t);if(Number.isNaN(s))return;const i=Me(s,e);return ie(s,r??i)}var tt=t=>y.jsx(ke,{viewBox:"0 0 24 24",...t,children:y.jsx("path",{fill:"currentColor",d:"M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"})}),nt=t=>y.jsx(ke,{viewBox:"0 0 24 24",...t,children:y.jsx("path",{fill:"currentColor",d:"M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"})});function _e(t,e,r,s){l.useEffect(()=>{var i;if(!t.current||!s)return;const a=(i=t.current.ownerDocument.defaultView)!=null?i:window,u=Array.isArray(e)?e:[e],o=new a.MutationObserver(f=>{for(const c of f)c.type==="attributes"&&c.attributeName&&u.includes(c.attributeName)&&r(c)});return o.observe(t.current,{attributes:!0,attributeFilter:u}),()=>o.disconnect()})}function rt(t,e){const r=D(t);l.useEffect(()=>{let s=null;const i=()=>r();return e!==null&&(s=window.setInterval(i,e)),()=>{s&&window.clearInterval(s)}},[e,r])}var at=50,Ee=300;function st(t,e){const[r,s]=l.useState(!1),[i,a]=l.useState(null),[u,o]=l.useState(!0),f=l.useRef(null),c=()=>clearTimeout(f.current);rt(()=>{i==="increment"&&t(),i==="decrement"&&e()},r?at:null);const p=l.useCallback(()=>{u&&t(),f.current=setTimeout(()=>{o(!1),s(!0),a("increment")},Ee)},[t,u]),N=l.useCallback(()=>{u&&e(),f.current=setTimeout(()=>{o(!1),s(!0),a("decrement")},Ee)},[e,u]),x=l.useCallback(()=>{o(!0),s(!1),c()},[]);return l.useEffect(()=>()=>c(),[]),{up:p,down:N,stop:x,isSpinning:r}}var ot=/^[Ee0-9+\-.]$/;function ut(t){return ot.test(t)}function it(t,e){if(t.key==null)return!0;const r=t.ctrlKey||t.altKey||t.metaKey;return!(t.key.length===1)||r?!0:e(t.key)}function lt(t={}){const{focusInputOnChange:e=!0,clampValueOnBlur:r=!0,keepWithinRange:s=!0,min:i=Number.MIN_SAFE_INTEGER,max:a=Number.MAX_SAFE_INTEGER,step:u=1,isReadOnly:o,isDisabled:f,isRequired:c,isInvalid:p,pattern:N="[0-9]*(.[0-9]+)?",inputMode:x="decimal",allowMouseWheel:v,id:I,onChange:S,precision:A,name:E,"aria-describedby":j,"aria-label":B,"aria-labelledby":K,onFocus:Q,onBlur:V,onInvalid:ce,getAriaValueText:fe,isValidCharacter:Z,format:g,parse:b,...ee}=t,te=D(Q),de=D(V),R=D(ce),z=D(Z??ut),ne=D(fe),d=et(t),{update:U,increment:me,decrement:pe}=d,[Fe,re]=l.useState(!1),G=!(o||f),k=l.useRef(null),L=l.useRef(null),be=l.useRef(null),ge=l.useRef(null),W=l.useCallback(n=>n.split("").filter(z).join(""),[z]),q=l.useCallback(n=>{var m;return(m=b==null?void 0:b(n))!=null?m:n},[b]),F=l.useCallback(n=>{var m;return((m=g==null?void 0:g(n))!=null?m:n).toString()},[g]);Te(()=>{(d.valueAsNumber>a||d.valueAsNumber<i)&&(R==null||R("rangeOverflow",F(d.value),d.valueAsNumber))},[d.valueAsNumber,d.value,F,R]),je(()=>{if(!k.current)return;if(k.current.value!=d.value){const m=q(k.current.value);d.setValue(W(m))}},[q,W]);const H=l.useCallback((n=u)=>{G&&me(n)},[me,G,u]),X=l.useCallback((n=u)=>{G&&pe(n)},[pe,G,u]),w=st(H,X);_e(be,"disabled",w.stop,w.isSpinning),_e(ge,"disabled",w.stop,w.isSpinning);const ve=l.useCallback(n=>{if(n.nativeEvent.isComposing)return;const h=q(n.currentTarget.value);U(W(h)),L.current={start:n.currentTarget.selectionStart,end:n.currentTarget.selectionEnd}},[U,W,q]),he=l.useCallback(n=>{var m,h,C;te==null||te(n),L.current&&(n.target.selectionStart=(h=L.current.start)!=null?h:(m=n.currentTarget.value)==null?void 0:m.length,n.currentTarget.selectionEnd=(C=L.current.end)!=null?C:n.currentTarget.selectionStart)},[te]),Ne=l.useCallback(n=>{if(n.nativeEvent.isComposing)return;it(n,z)||n.preventDefault();const m=ye(n)*u,h=n.key,M={ArrowUp:()=>H(m),ArrowDown:()=>X(m),Home:()=>U(i),End:()=>U(a)}[h];M&&(n.preventDefault(),M(n))},[z,u,H,X,U,i,a]),ye=n=>{let m=1;return(n.metaKey||n.ctrlKey)&&(m=.1),n.shiftKey&&(m=10),m},xe=l.useMemo(()=>{const n=ne==null?void 0:ne(d.value);if(n!=null)return n;const m=d.value.toString();return m||void 0},[d.value,ne]),we=l.useCallback(()=>{let n=d.value;if(d.value==="")return;/^[eE]/.test(d.value.toString())?d.setValue(""):(d.valueAsNumber<i&&(n=i),d.valueAsNumber>a&&(n=a),d.cast(n))},[d,a,i]),Ce=l.useCallback(()=>{re(!1),r&&we()},[r,re,we]),$=l.useCallback(()=>{e&&requestAnimationFrame(()=>{var n;(n=k.current)==null||n.focus()})},[e]),Ie=l.useCallback(n=>{n.preventDefault(),w.up(),$()},[$,w]),Se=l.useCallback(n=>{n.preventDefault(),w.down(),$()},[$,w]);ze(()=>k.current,"wheel",n=>{var m,h;const M=((h=(m=k.current)==null?void 0:m.ownerDocument)!=null?h:document).activeElement===k.current;if(!v||!M)return;n.preventDefault();const O=ye(n)*u,Ae=Math.sign(n.deltaY);Ae===-1?H(O):Ae===1&&X(O)},{passive:!1});const Re=l.useCallback((n={},m=null)=>{const h=f||s&&d.isAtMax;return{...n,ref:ae(m,be),role:"button",tabIndex:-1,onPointerDown:_(n.onPointerDown,C=>{C.button!==0||h||Ie(C)}),onPointerLeave:_(n.onPointerLeave,w.stop),onPointerUp:_(n.onPointerUp,w.stop),disabled:h,"aria-disabled":se(h)}},[d.isAtMax,s,Ie,w.stop,f]),Ue=l.useCallback((n={},m=null)=>{const h=f||s&&d.isAtMin;return{...n,ref:ae(m,ge),role:"button",tabIndex:-1,onPointerDown:_(n.onPointerDown,C=>{C.button!==0||h||Se(C)}),onPointerLeave:_(n.onPointerLeave,w.stop),onPointerUp:_(n.onPointerUp,w.stop),disabled:h,"aria-disabled":se(h)}},[d.isAtMin,s,Se,w.stop,f]),Oe=l.useCallback((n={},m=null)=>{var h,C,M,O;return{name:E,inputMode:x,type:"text",pattern:N,"aria-labelledby":K,"aria-label":B,"aria-describedby":j,id:I,disabled:f,...n,readOnly:(h=n.readOnly)!=null?h:o,"aria-readonly":(C=n.readOnly)!=null?C:o,"aria-required":(M=n.required)!=null?M:c,required:(O=n.required)!=null?O:c,ref:ae(k,m),value:F(d.value),role:"spinbutton","aria-valuemin":i,"aria-valuemax":a,"aria-valuenow":Number.isNaN(d.valueAsNumber)?void 0:d.valueAsNumber,"aria-invalid":se(p??d.isOutOfRange),"aria-valuetext":xe,autoComplete:"off",autoCorrect:"off",onChange:_(n.onChange,ve),onKeyDown:_(n.onKeyDown,Ne),onFocus:_(n.onFocus,he,()=>re(!0)),onBlur:_(n.onBlur,de,Ce)}},[E,x,N,K,B,F,j,I,f,c,o,p,d.value,d.valueAsNumber,d.isOutOfRange,i,a,xe,ve,Ne,he,de,Ce]);return{value:F(d.value),valueAsNumber:d.valueAsNumber,isFocused:Fe,isDisabled:f,isReadOnly:o,getIncrementButtonProps:Re,getDecrementButtonProps:Ue,getInputProps:Oe,htmlProps:ee}}var[ct,J]=Pe({name:"NumberInputStylesContext",errorMessage:`useNumberInputStyles returned is 'undefined'. Seems you forgot to wrap the components in "<NumberInput />" `}),[ft,le]=Pe({name:"NumberInputContext",errorMessage:"useNumberInputContext: `context` is undefined. Seems you forgot to wrap number-input's components within <NumberInput />"}),dt=T(function(e,r){const s=Be("NumberInput",e),i=Ke(e),a=Ge(i),{htmlProps:u,...o}=lt(a),f=l.useMemo(()=>o,[o]);return y.jsx(ft,{value:f,children:y.jsx(ct,{value:s,children:y.jsx(Y.div,{...u,ref:r,className:Ve("chakra-numberinput",e.className),__css:{position:"relative",zIndex:0,...s.root}})})})});dt.displayName="NumberInput";var mt=T(function(e,r){const s=J();return y.jsx(Y.div,{"aria-hidden":!0,ref:r,...e,__css:{display:"flex",flexDirection:"column",position:"absolute",top:"0",insetEnd:"0px",margin:"1px",height:"calc(100% - 2px)",zIndex:1,...s.stepperGroup}})});mt.displayName="NumberInputStepper";var pt=T(function(e,r){const{getInputProps:s}=le(),i=s(e,r),a=J();return y.jsx(Y.input,{...i,className:Ve("chakra-numberinput__field",e.className),__css:{width:"100%",...a.field}})});pt.displayName="NumberInputField";var De=Y("div",{baseStyle:{display:"flex",justifyContent:"center",alignItems:"center",flex:1,transitionProperty:"common",transitionDuration:"normal",userSelect:"none",cursor:"pointer",lineHeight:"normal"}}),bt=T(function(e,r){var s;const i=J(),{getDecrementButtonProps:a}=le(),u=a(e,r);return y.jsx(De,{...u,__css:i.stepper,children:(s=e.children)!=null?s:y.jsx(tt,{})})});bt.displayName="NumberDecrementStepper";var gt=T(function(e,r){var s;const{getIncrementButtonProps:i}=le(),a=i(e,r),u=J();return y.jsx(De,{...a,__css:u.stepper,children:(s=e.children)!=null?s:y.jsx(nt,{})})});gt.displayName="NumberIncrementStepper";var At=Le("chevron-right","IconChevronRight",[["path",{d:"M9 6l6 6l-6 6",key:"svg-0"}]]);const _t=(t,e)=>{const[r,s]=l.useState(t);return l.useEffect(()=>{const i=setTimeout(()=>{s(t)},e);return()=>{clearTimeout(i)}},[t,e]),r},vt={position:"absolute",marginLeft:"10px",width:"20px",height:"20px",top:"50%",color:"#A0AEC0",transform:"translateY(-50%)"};function Et(t){const{searchValue:e,onUpdateSearchValue:r,style:s}=t,i=e!=="";return y.jsxs(We,{style:{position:"relative",...s},mb:2,children:[y.jsx(Ye,{style:vt}),i&&y.jsx(qe,{size:"xs",position:"absolute",right:"5px",top:"50%",transform:"translateY(-50%)",cursor:"pointer",background:"none",zIndex:"100",icon:y.jsx(He,{width:15,height:15}),onClick:()=>r(""),"aria-label":"clear input button"}),y.jsx(Xe,{placeholder:t.placeholder??"Search",size:"sm",paddingLeft:"35px",paddingBlock:"5px",value:e,onChange:({target:a})=>r(a.value)})]})}function kt(t){return new Promise((e,r)=>{const s=new FileReader;s.onload=i=>{const a=new Uint8Array(i.target.result),u=new DataView(a.buffer);u.getUint32(0)!==2303741511&&(console.error("Not a valid PNG file"),r());let o=8;const f={};for(;o<a.length;){const c=u.getUint32(o),p=String.fromCharCode(...a.slice(o+4,o+8));if(p==="tEXt"||p=="comf"){let N=o+8;for(;a[N]!==0;)N++;const x=String.fromCharCode(...a.slice(o+8,N)),v=a.slice(N+1,o+8+c),I=Array.from(v).map(S=>String.fromCharCode(S)).join("");f[x]=I}o+=12+c}e(f)},s.readAsArrayBuffer(t)})}function ht(t){const e=new Uint16Array(t.slice(0,2))[0]===18761;function r(u,o,f){const c=t.slice(u,u+f);if(f===2)return new DataView(c.buffer,c.byteOffset,c.byteLength).getUint16(0,o);if(f===4)return new DataView(c.buffer,c.byteOffset,c.byteLength).getUint32(0,o)}const s=r(4,e,4);function i(u){const o=r(u,e,2),f={};for(let c=0;c<o;c++){const p=u+2+c*12,N=r(p,e,2),x=r(p+2,e,2),v=r(p+4,e,4),I=r(p+8,e,4);let S;x===2&&(S=String.fromCharCode(...t.slice(I,I+v-1))),f[N]=S}return f}return i(s)}function Pt(t){return new Promise(e=>{const r=new FileReader;r.onload=s=>{var f;const i=new Uint8Array((f=s==null?void 0:s.target)==null?void 0:f.result),a=new DataView(i.buffer);if(a.getUint32(0)!==1380533830||a.getUint32(8)!==1464156752){console.error("Not a valid WEBP file"),e();return}let u=12;const o={};for(;u<i.length;){const c=a.getUint32(u+4,!0);if(String.fromCharCode(...i.slice(u,u+4))==="EXIF"){String.fromCharCode(...i.slice(u+8,u+8+6))=="Exif\0\0"&&(u+=6);const N=ht(i.slice(u+8,u+8+c));for(const x in N){const v=N[x],I=v.indexOf(":");o[v.slice(0,I)]=v.slice(I+1)}}u+=8+c}e(o)},r.readAsArrayBuffer(t)})}function Vt(t){return!!(t!=null&&t.endsWith(".webm")||t!=null&&t.endsWith(".mp4"))}function Mt(t){return new Promise(e=>{const r=new FileReader;r.onload=s=>{const i=new Uint8Array(s.target.result),a=new DataView(i.buffer),u=new TextDecoder;if(a.getUint32(0)==440786851){let o=12;for(;o<i.length-16;){if(a.getUint16(o)==17543&&String.fromCharCode(...i.slice(o-7,o))==="COMMENT"){const c=a.getUint32(o+2),p=Math.clz32(c)+1;if(p<4){const N=c>>8*(4-p)&~(1<<7*p),x=u.decode(i.slice(o+2+p,o+2+p+N)),v=JSON.parse(x);e(v);return}}o+=1}}else if(a.getUint32(4)==1718909296&&a.getUint32(8)==1769172845){let o=i.length-4;for(;o>16;){if(a.getUint32(o)==1684108385&&a.getUint32(o-8)==2841865588){a.getUint32(o+4),a.getUint32(o+8);const f=a.getUint32(o-4)-4*4,c=u.decode(i.slice(o+12,o+12+f)),p=JSON.parse(c);e(p);return}o-=1}}else{console.error("Unknown magic: "+a.getUint32(0)),e();return}},r.readAsArrayBuffer(t)})}function Dt({mediaLocalPath:t,size:e,isPreview:r,autoPlay:s,hideBrokenImage:i,objectFit:a,onBrokenLink:u}){const[o,f]=l.useState(!0);return l.useEffect(()=>{i&&(async()=>{try{if((await fetch(r?`/workspace/preview_media?filename=${t}`:`/workspace/view_media?filename=${t}`)).status==404){f(!1),u==null||u();return}}catch(p){console.error("Error checking media exists",p)}})()},[]),o&&$e(t)?y.jsx(Je,{borderRadius:3,boxSize:`${e}px`,objectFit:a??"cover",src:`/workspace/view_media?filename=${t}`,alt:"workflow image renamed or moved from output folder"}):null}export{At as I,Dt as M,dt as N,Et as S,pt as a,Mt as b,Ze as c,Pt as d,mt as e,gt as f,kt as g,bt as h,Vt as i,It as p,St as r,_t as u,Ct as v};
