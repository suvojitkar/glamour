import{i as f}from"./_virtual___federation_fn_import-Ceydbr5R.js";import{g as H,a as N,s as w,B as O,r as V,c as i,m as G,b as D,d as b,e as F,f as U,j as d,h as k,i as A,n as Q,C as q}from"./index-B6nePxhJ.js";function J(a){return N("MuiButton",a)}const v=H("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),K=await f("react"),X=K.createContext({}),Y=await f("react"),Z=Y.createContext(void 0),B=await f("react"),_=a=>{const{color:t,disableElevation:o,fullWidth:n,size:e,variant:s,classes:r}=a,c={root:["root",s,`${s}${i(t)}`,`size${i(e)}`,`${s}Size${i(e)}`,`color${i(t)}`,o&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${i(e)}`],endIcon:["icon","endIcon",`iconSize${i(e)}`]},p=A(c,J,r);return{...r,...p}},h=[{props:{size:"small"},style:{"& > *:nth-of-type(1)":{fontSize:18}}},{props:{size:"medium"},style:{"& > *:nth-of-type(1)":{fontSize:20}}},{props:{size:"large"},style:{"& > *:nth-of-type(1)":{fontSize:22}}}],aa=w(O,{shouldForwardProp:a=>V(a)||a==="classes",name:"MuiButton",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:o}=a;return[t.root,t[o.variant],t[`${o.variant}${i(o.color)}`],t[`size${i(o.size)}`],t[`${o.variant}Size${i(o.size)}`],o.color==="inherit"&&t.colorInherit,o.disableElevation&&t.disableElevation,o.fullWidth&&t.fullWidth]}})(G(({theme:a})=>{const t=a.palette.mode==="light"?a.palette.grey[300]:a.palette.grey[800],o=a.palette.mode==="light"?a.palette.grey.A100:a.palette.grey[700];return{...a.typography.button,minWidth:64,padding:"6px 16px",border:0,borderRadius:(a.vars||a).shape.borderRadius,transition:a.transitions.create(["background-color","box-shadow","border-color","color"],{duration:a.transitions.duration.short}),"&:hover":{textDecoration:"none"},[`&.${v.disabled}`]:{color:(a.vars||a).palette.action.disabled},variants:[{props:{variant:"contained"},style:{color:"var(--variant-containedColor)",backgroundColor:"var(--variant-containedBg)",boxShadow:(a.vars||a).shadows[2],"&:hover":{boxShadow:(a.vars||a).shadows[4],"@media (hover: none)":{boxShadow:(a.vars||a).shadows[2]}},"&:active":{boxShadow:(a.vars||a).shadows[8]},[`&.${v.focusVisible}`]:{boxShadow:(a.vars||a).shadows[6]},[`&.${v.disabled}`]:{color:(a.vars||a).palette.action.disabled,boxShadow:(a.vars||a).shadows[0],backgroundColor:(a.vars||a).palette.action.disabledBackground}}},{props:{variant:"outlined"},style:{padding:"5px 15px",border:"1px solid currentColor",borderColor:"var(--variant-outlinedBorder, currentColor)",backgroundColor:"var(--variant-outlinedBg)",color:"var(--variant-outlinedColor)",[`&.${v.disabled}`]:{border:`1px solid ${(a.vars||a).palette.action.disabledBackground}`}}},{props:{variant:"text"},style:{padding:"6px 8px",color:"var(--variant-textColor)",backgroundColor:"var(--variant-textBg)"}},...Object.entries(a.palette).filter(D(["dark","contrastText"])).map(([n])=>({props:{color:n},style:{"--variant-textColor":(a.vars||a).palette[n].main,"--variant-outlinedColor":(a.vars||a).palette[n].main,"--variant-outlinedBorder":a.vars?`rgba(${a.vars.palette[n].mainChannel} / 0.5)`:b(a.palette[n].main,.5),"--variant-containedColor":(a.vars||a).palette[n].contrastText,"--variant-containedBg":(a.vars||a).palette[n].main,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":(a.vars||a).palette[n].dark,"--variant-textBg":a.vars?`rgba(${a.vars.palette[n].mainChannel} / ${a.vars.palette.action.hoverOpacity})`:b(a.palette[n].main,a.palette.action.hoverOpacity),"--variant-outlinedBorder":(a.vars||a).palette[n].main,"--variant-outlinedBg":a.vars?`rgba(${a.vars.palette[n].mainChannel} / ${a.vars.palette.action.hoverOpacity})`:b(a.palette[n].main,a.palette.action.hoverOpacity)}}}})),{props:{color:"inherit"},style:{"--variant-containedColor":a.vars?a.vars.palette.text.primary:a.palette.getContrastText?.(t),"--variant-containedBg":a.vars?a.vars.palette.Button.inheritContainedBg:t,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":a.vars?a.vars.palette.Button.inheritContainedHoverBg:o,"--variant-textBg":a.vars?`rgba(${a.vars.palette.text.primaryChannel} / ${a.vars.palette.action.hoverOpacity})`:b(a.palette.text.primary,a.palette.action.hoverOpacity),"--variant-outlinedBg":a.vars?`rgba(${a.vars.palette.text.primaryChannel} / ${a.vars.palette.action.hoverOpacity})`:b(a.palette.text.primary,a.palette.action.hoverOpacity)}}}},{props:{size:"small",variant:"text"},style:{padding:"4px 5px",fontSize:a.typography.pxToRem(13)}},{props:{size:"large",variant:"text"},style:{padding:"8px 11px",fontSize:a.typography.pxToRem(15)}},{props:{size:"small",variant:"outlined"},style:{padding:"3px 9px",fontSize:a.typography.pxToRem(13)}},{props:{size:"large",variant:"outlined"},style:{padding:"7px 21px",fontSize:a.typography.pxToRem(15)}},{props:{size:"small",variant:"contained"},style:{padding:"4px 10px",fontSize:a.typography.pxToRem(13)}},{props:{size:"large",variant:"contained"},style:{padding:"8px 22px",fontSize:a.typography.pxToRem(15)}},{props:{disableElevation:!0},style:{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${v.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${v.disabled}`]:{boxShadow:"none"}}},{props:{fullWidth:!0},style:{width:"100%"}}]}})),ta=w("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(a,t)=>{const{ownerState:o}=a;return[t.startIcon,t[`iconSize${i(o.size)}`]]}})({display:"inherit",marginRight:8,marginLeft:-4,variants:[{props:{size:"small"},style:{marginLeft:-2}},...h]}),oa=w("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(a,t)=>{const{ownerState:o}=a;return[t.endIcon,t[`iconSize${i(o.size)}`]]}})({display:"inherit",marginRight:-4,marginLeft:8,variants:[{props:{size:"small"},style:{marginRight:-2}},...h]}),na=B.forwardRef(function(t,o){const n=B.useContext(X),e=B.useContext(Z),s=F(n,t),r=U({props:s,name:"MuiButton"}),{children:c,color:p="primary",component:x="button",className:g,disabled:S=!1,disableElevation:l=!1,disableFocusRipple:C=!1,endIcon:u,focusVisibleClassName:P,fullWidth:E=!1,size:j="medium",startIcon:I,type:R,variant:m="text",...W}=r,z={...r,color:p,component:x,disabled:S,disableElevation:l,disableFocusRipple:C,fullWidth:E,size:j,type:R,variant:m},y=_(z),M=I&&d.jsx(ta,{className:y.startIcon,ownerState:z,children:I}),L=u&&d.jsx(oa,{className:y.endIcon,ownerState:z,children:u}),T=e||"";return d.jsxs(aa,{ownerState:z,className:k(n.className,y.root,g,T),component:x,disabled:S,focusRipple:!C,focusVisibleClassName:k(y.focusVisible,P),ref:o,type:R,...W,classes:y,children:[M,c,L]})}),$=a=>{const{style:t,label:o,icon:n,size:e,variant:s,onClickHandler:r}=a;return d.jsx(na,{size:e,variant:s,style:t,onClick:r,type:"button",children:o})},{useContext:ra,useState:ia}=await f("react"),da=a=>{const t=ra(q),{style:o={width:"100%"},label:n="Add to cart",icon:e="",size:s="small",variant:r="contained",productData:c}=a,[p,x]=ia(0),g=(l,C="inc")=>{l.stopPropagation(),C==="inc"?(x(u=>u+1),t.onAddHandler(c)):(x(u=>u-1),t.onDeleteHandler(c))},S=()=>d.jsxs(ea,{children:[d.jsx($,{label:" + ",variant:r,onClickHandler:l=>g(l)}),p,d.jsx($,{label:" - ",variant:r,onClickHandler:l=>g(l,"dec")})]});return p?d.jsx(S,{}):d.jsx($,{style:o,label:n,icon:e,size:s,variant:r,onClickHandler:l=>g(l)})},ea=Q.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;export{da as G};
