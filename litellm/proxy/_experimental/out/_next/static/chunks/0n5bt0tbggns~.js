(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,790848,e=>{"use strict";e.i(247167);var t=e.i(271645),i=e.i(739295),n=e.i(343794),a=e.i(931067),o=e.i(211577),r=e.i(392221),l=e.i(703923),s=e.i(914949),d=e.i(404948),c=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],p=t.forwardRef(function(e,i){var p,u=e.prefixCls,m=void 0===u?"rc-switch":u,g=e.className,f=e.checked,h=e.defaultChecked,b=e.disabled,_=e.loadingIcon,$=e.checkedChildren,y=e.unCheckedChildren,v=e.onClick,w=e.onChange,I=e.onKeyDown,x=(0,l.default)(e,c),S=(0,s.default)(!1,{value:f,defaultValue:h}),E=(0,r.default)(S,2),O=E[0],k=E[1];function C(e,t){var i=O;return b||(k(i=e),null==w||w(i,t)),i}var j=(0,n.default)(m,g,(p={},(0,o.default)(p,"".concat(m,"-checked"),O),(0,o.default)(p,"".concat(m,"-disabled"),b),p));return t.createElement("button",(0,a.default)({},x,{type:"button",role:"switch","aria-checked":O,disabled:b,className:j,ref:i,onKeyDown:function(e){e.which===d.default.LEFT?C(!1,e):e.which===d.default.RIGHT&&C(!0,e),null==I||I(e)},onClick:function(e){var t=C(!O,e);null==v||v(t,e)}}),_,t.createElement("span",{className:"".concat(m,"-inner")},t.createElement("span",{className:"".concat(m,"-inner-checked")},$),t.createElement("span",{className:"".concat(m,"-inner-unchecked")},y)))});p.displayName="Switch";var u=e.i(121872),m=e.i(242064),g=e.i(937328),f=e.i(517455);e.i(296059);var h=e.i(915654),b=e.i(135551),_=e.i(183293),$=e.i(246422),y=e.i(838378);let v=(0,$.genStyleHooks)("Switch",e=>{let t=(0,y.mergeToken)(e,{switchDuration:e.motionDurationMid,switchColor:e.colorPrimary,switchDisabledOpacity:e.opacityLoading,switchLoadingIconSize:e.calc(e.fontSizeIcon).mul(.75).equal(),switchLoadingIconColor:`rgba(0, 0, 0, ${e.opacityLoading})`,switchHandleActiveInset:"-30%"});return[(e=>{let{componentCls:t,trackHeight:i,trackMinWidth:n}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,_.resetComponent)(e)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:n,height:i,lineHeight:(0,h.unit)(i),verticalAlign:"middle",background:e.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${e.motionDurationMid}`,userSelect:"none",[`&:hover:not(${t}-disabled)`]:{background:e.colorTextTertiary}}),(0,_.genFocusStyle)(e)),{[`&${t}-checked`]:{background:e.switchColor,[`&:hover:not(${t}-disabled)`]:{background:e.colorPrimaryHover}},[`&${t}-loading, &${t}-disabled`]:{cursor:"not-allowed",opacity:e.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${t}-rtl`]:{direction:"rtl"}})}})(t),(e=>{let{componentCls:t,trackHeight:i,trackPadding:n,innerMinMargin:a,innerMaxMargin:o,handleSize:r,calc:l}=e,s=`${t}-inner`,d=(0,h.unit)(l(r).add(l(n).mul(2)).equal()),c=(0,h.unit)(l(o).mul(2).equal());return{[t]:{[s]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:o,paddingInlineEnd:a,transition:`padding-inline-start ${e.switchDuration} ease-in-out, padding-inline-end ${e.switchDuration} ease-in-out`,[`${s}-checked, ${s}-unchecked`]:{display:"block",color:e.colorTextLightSolid,fontSize:e.fontSizeSM,transition:`margin-inline-start ${e.switchDuration} ease-in-out, margin-inline-end ${e.switchDuration} ease-in-out`,pointerEvents:"none",minHeight:i},[`${s}-checked`]:{marginInlineStart:`calc(-100% + ${d} - ${c})`,marginInlineEnd:`calc(100% - ${d} + ${c})`},[`${s}-unchecked`]:{marginTop:l(i).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`&${t}-checked ${s}`]:{paddingInlineStart:a,paddingInlineEnd:o,[`${s}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${s}-unchecked`]:{marginInlineStart:`calc(100% - ${d} + ${c})`,marginInlineEnd:`calc(-100% + ${d} - ${c})`}},[`&:not(${t}-disabled):active`]:{[`&:not(${t}-checked) ${s}`]:{[`${s}-unchecked`]:{marginInlineStart:l(n).mul(2).equal(),marginInlineEnd:l(n).mul(-1).mul(2).equal()}},[`&${t}-checked ${s}`]:{[`${s}-checked`]:{marginInlineStart:l(n).mul(-1).mul(2).equal(),marginInlineEnd:l(n).mul(2).equal()}}}}}})(t),(e=>{let{componentCls:t,trackPadding:i,handleBg:n,handleShadow:a,handleSize:o,calc:r}=e,l=`${t}-handle`;return{[t]:{[l]:{position:"absolute",top:i,insetInlineStart:i,width:o,height:o,transition:`all ${e.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:n,borderRadius:r(o).div(2).equal(),boxShadow:a,transition:`all ${e.switchDuration} ease-in-out`,content:'""'}},[`&${t}-checked ${l}`]:{insetInlineStart:`calc(100% - ${(0,h.unit)(r(o).add(i).equal())})`},[`&:not(${t}-disabled):active`]:{[`${l}::before`]:{insetInlineEnd:e.switchHandleActiveInset,insetInlineStart:0},[`&${t}-checked ${l}::before`]:{insetInlineEnd:0,insetInlineStart:e.switchHandleActiveInset}}}}})(t),(e=>{let{componentCls:t,handleSize:i,calc:n}=e;return{[t]:{[`${t}-loading-icon${e.iconCls}`]:{position:"relative",top:n(n(i).sub(e.fontSize)).div(2).equal(),color:e.switchLoadingIconColor,verticalAlign:"top"},[`&${t}-checked ${t}-loading-icon`]:{color:e.switchColor}}}})(t),(e=>{let{componentCls:t,trackHeightSM:i,trackPadding:n,trackMinWidthSM:a,innerMinMarginSM:o,innerMaxMarginSM:r,handleSizeSM:l,calc:s}=e,d=`${t}-inner`,c=(0,h.unit)(s(l).add(s(n).mul(2)).equal()),p=(0,h.unit)(s(r).mul(2).equal());return{[t]:{[`&${t}-small`]:{minWidth:a,height:i,lineHeight:(0,h.unit)(i),[`${t}-inner`]:{paddingInlineStart:r,paddingInlineEnd:o,[`${d}-checked, ${d}-unchecked`]:{minHeight:i},[`${d}-checked`]:{marginInlineStart:`calc(-100% + ${c} - ${p})`,marginInlineEnd:`calc(100% - ${c} + ${p})`},[`${d}-unchecked`]:{marginTop:s(i).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`${t}-handle`]:{width:l,height:l},[`${t}-loading-icon`]:{top:s(s(l).sub(e.switchLoadingIconSize)).div(2).equal(),fontSize:e.switchLoadingIconSize},[`&${t}-checked`]:{[`${t}-inner`]:{paddingInlineStart:o,paddingInlineEnd:r,[`${d}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${d}-unchecked`]:{marginInlineStart:`calc(100% - ${c} + ${p})`,marginInlineEnd:`calc(-100% + ${c} - ${p})`}},[`${t}-handle`]:{insetInlineStart:`calc(100% - ${(0,h.unit)(s(l).add(n).equal())})`}},[`&:not(${t}-disabled):active`]:{[`&:not(${t}-checked) ${d}`]:{[`${d}-unchecked`]:{marginInlineStart:s(e.marginXXS).div(2).equal(),marginInlineEnd:s(e.marginXXS).mul(-1).div(2).equal()}},[`&${t}-checked ${d}`]:{[`${d}-checked`]:{marginInlineStart:s(e.marginXXS).mul(-1).div(2).equal(),marginInlineEnd:s(e.marginXXS).div(2).equal()}}}}}}})(t)]},e=>{let{fontSize:t,lineHeight:i,controlHeight:n,colorWhite:a}=e,o=t*i,r=n/2,l=o-4,s=r-4;return{trackHeight:o,trackHeightSM:r,trackMinWidth:2*l+8,trackMinWidthSM:2*s+4,trackPadding:2,handleBg:a,handleSize:l,handleSizeSM:s,handleShadow:`0 2px 4px 0 ${new b.FastColor("#00230b").setA(.2).toRgbString()}`,innerMinMargin:l/2,innerMaxMargin:l+2+4,innerMinMarginSM:s/2,innerMaxMarginSM:s+2+4}});var w=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]]);return i};let I=t.forwardRef((e,a)=>{let{prefixCls:o,size:r,disabled:l,loading:d,className:c,rootClassName:h,style:b,checked:_,value:$,defaultChecked:y,defaultValue:I,onChange:x}=e,S=w(e,["prefixCls","size","disabled","loading","className","rootClassName","style","checked","value","defaultChecked","defaultValue","onChange"]),[E,O]=(0,s.default)(!1,{value:null!=_?_:$,defaultValue:null!=y?y:I}),{getPrefixCls:k,direction:C,switch:j}=t.useContext(m.ConfigContext),N=t.useContext(g.default),M=(null!=l?l:N)||d,T=k("switch",o),P=t.createElement("div",{className:`${T}-handle`},d&&t.createElement(i.default,{className:`${T}-loading-icon`})),[A,z,D]=v(T),L=(0,f.default)(r),R=(0,n.default)(null==j?void 0:j.className,{[`${T}-small`]:"small"===L,[`${T}-loading`]:d,[`${T}-rtl`]:"rtl"===C},c,h,z,D),H=Object.assign(Object.assign({},null==j?void 0:j.style),b);return A(t.createElement(u.default,{component:"Switch",disabled:M},t.createElement(p,Object.assign({},S,{checked:E,onChange:(...e)=>{O(e[0]),null==x||x.apply(void 0,e)},prefixCls:T,className:R,style:H,disabled:M,ref:a,loadingIcon:P}))))});I.__ANT_SWITCH=!0,e.s(["Switch",0,I],790848)},56456,e=>{"use strict";var t=e.i(739295);e.s(["LoadingOutlined",()=>t.default])},312361,e=>{"use strict";e.i(247167);var t=e.i(271645),i=e.i(343794),n=e.i(242064),a=e.i(517455);e.i(296059);var o=e.i(915654),r=e.i(183293),l=e.i(246422),s=e.i(838378);let d=(0,l.genStyleHooks)("Divider",e=>{let t=(0,s.mergeToken)(e,{dividerHorizontalWithTextGutterMargin:e.margin,sizePaddingEdgeHorizontal:0});return[(e=>{let{componentCls:t,sizePaddingEdgeHorizontal:i,colorSplit:n,lineWidth:a,textPaddingInline:l,orientationMargin:s,verticalMarginInline:d}=e;return{[t]:Object.assign(Object.assign({},(0,r.resetComponent)(e)),{borderBlockStart:`${(0,o.unit)(a)} solid ${n}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:d,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:`${(0,o.unit)(a)} solid ${n}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${(0,o.unit)(e.marginLG)} 0`},[`&-horizontal${t}-with-text`]:{display:"flex",alignItems:"center",margin:`${(0,o.unit)(e.dividerHorizontalWithTextGutterMargin)} 0`,color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${n}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${(0,o.unit)(a)} solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${t}-with-text-start`]:{"&::before":{width:`calc(${s} * 100%)`},"&::after":{width:`calc(100% - ${s} * 100%)`}},[`&-horizontal${t}-with-text-end`]:{"&::before":{width:`calc(100% - ${s} * 100%)`},"&::after":{width:`calc(${s} * 100%)`}},[`${t}-inner-text`]:{display:"inline-block",paddingBlock:0,paddingInline:l},"&-dashed":{background:"none",borderColor:n,borderStyle:"dashed",borderWidth:`${(0,o.unit)(a)} 0 0`},[`&-horizontal${t}-with-text${t}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${t}-dashed`]:{borderInlineStartWidth:a,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},"&-dotted":{background:"none",borderColor:n,borderStyle:"dotted",borderWidth:`${(0,o.unit)(a)} 0 0`},[`&-horizontal${t}-with-text${t}-dotted`]:{"&::before, &::after":{borderStyle:"dotted none none"}},[`&-vertical${t}-dotted`]:{borderInlineStartWidth:a,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${t}-with-text`]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize},[`&-horizontal${t}-with-text-start${t}-no-default-orientation-margin-start`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${t}-inner-text`]:{paddingInlineStart:i}},[`&-horizontal${t}-with-text-end${t}-no-default-orientation-margin-end`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${t}-inner-text`]:{paddingInlineEnd:i}}})}})(t),(e=>{let{componentCls:t}=e;return{[t]:{"&-horizontal":{[`&${t}`]:{"&-sm":{marginBlock:e.marginXS},"&-md":{marginBlock:e.margin}}}}}})(t)]},e=>({textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:e.marginXS}),{unitless:{orientationMargin:!0}});var c=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]]);return i};let p={small:"sm",middle:"md"};e.s(["Divider",0,e=>{let{getPrefixCls:o,direction:r,className:l,style:s}=(0,n.useComponentConfig)("divider"),{prefixCls:u,type:m="horizontal",orientation:g="center",orientationMargin:f,className:h,rootClassName:b,children:_,dashed:$,variant:y="solid",plain:v,style:w,size:I}=e,x=c(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","variant","plain","style","size"]),S=o("divider",u),[E,O,k]=d(S),C=p[(0,a.default)(I)],j=!!_,N=t.useMemo(()=>"left"===g?"rtl"===r?"end":"start":"right"===g?"rtl"===r?"start":"end":g,[r,g]),M="start"===N&&null!=f,T="end"===N&&null!=f,P=(0,i.default)(S,l,O,k,`${S}-${m}`,{[`${S}-with-text`]:j,[`${S}-with-text-${N}`]:j,[`${S}-dashed`]:!!$,[`${S}-${y}`]:"solid"!==y,[`${S}-plain`]:!!v,[`${S}-rtl`]:"rtl"===r,[`${S}-no-default-orientation-margin-start`]:M,[`${S}-no-default-orientation-margin-end`]:T,[`${S}-${C}`]:!!C},h,b),A=t.useMemo(()=>"number"==typeof f?f:/^\d+$/.test(f)?Number(f):f,[f]);return E(t.createElement("div",Object.assign({className:P,style:Object.assign(Object.assign({},s),w)},x,{role:"separator"}),_&&"vertical"!==m&&t.createElement("span",{className:`${S}-inner-text`,style:{marginInlineStart:M?A:void 0,marginInlineEnd:T?A:void 0}},_)))}],312361)},282786,836938,310730,829672,e=>{"use strict";e.i(247167);var t=e.i(271645),i=e.i(343794),n=e.i(914949),a=e.i(404948);let o=e=>e?"function"==typeof e?e():e:null;e.s(["getRenderPropValue",0,o],836938);var r=e.i(613541),l=e.i(763731),s=e.i(242064),d=e.i(491816);e.i(793154);var c=e.i(880476),p=e.i(183293),u=e.i(717356),m=e.i(320560),g=e.i(307358),f=e.i(246422),h=e.i(838378),b=e.i(617933);let _=(0,f.genStyleHooks)("Popover",e=>{let{colorBgElevated:t,colorText:i}=e,n=(0,h.mergeToken)(e,{popoverBg:t,popoverColor:i});return[(e=>{let{componentCls:t,popoverColor:i,titleMinWidth:n,fontWeightStrong:a,innerPadding:o,boxShadowSecondary:r,colorTextHeading:l,borderRadiusLG:s,zIndexPopup:d,titleMarginBottom:c,colorBgElevated:u,popoverBg:g,titleBorderBottom:f,innerContentPadding:h,titlePadding:b}=e;return[{[t]:Object.assign(Object.assign({},(0,p.resetComponent)(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:d,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text","--valid-offset-x":"var(--arrow-offset-horizontal, var(--arrow-x))",transformOrigin:"var(--valid-offset-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":u,width:"max-content",maxWidth:"100vw","&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${t}-content`]:{position:"relative"},[`${t}-inner`]:{backgroundColor:g,backgroundClip:"padding-box",borderRadius:s,boxShadow:r,padding:o},[`${t}-title`]:{minWidth:n,marginBottom:c,color:l,fontWeight:a,borderBottom:f,padding:b},[`${t}-inner-content`]:{color:i,padding:h}})},(0,m.default)(e,"var(--antd-arrow-background-color)"),{[`${t}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block",[`${t}-content`]:{display:"inline-block"}}}]})(n),(e=>{let{componentCls:t}=e;return{[t]:b.PresetColors.map(i=>{let n=e[`${i}6`];return{[`&${t}-${i}`]:{"--antd-arrow-background-color":n,[`${t}-inner`]:{backgroundColor:n},[`${t}-arrow`]:{background:"transparent"}}}})}})(n),(0,u.initZoomMotion)(n,"zoom-big")]},e=>{let{lineWidth:t,controlHeight:i,fontHeight:n,padding:a,wireframe:o,zIndexPopupBase:r,borderRadiusLG:l,marginXS:s,lineType:d,colorSplit:c,paddingSM:p}=e,u=i-n;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:r+30},(0,g.getArrowToken)(e)),(0,m.getArrowOffsetToken)({contentRadius:l,limitVerticalRadius:!0})),{innerPadding:12*!o,titleMarginBottom:o?0:s,titlePadding:o?`${u/2}px ${a}px ${u/2-t}px`:0,titleBorderBottom:o?`${t}px ${d} ${c}`:"none",innerContentPadding:o?`${p}px ${a}px`:0})},{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]});var $=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]]);return i};let y=({title:e,content:i,prefixCls:n})=>e||i?t.createElement(t.Fragment,null,e&&t.createElement("div",{className:`${n}-title`},e),i&&t.createElement("div",{className:`${n}-inner-content`},i)):null,v=e=>{let{hashId:n,prefixCls:a,className:r,style:l,placement:s="top",title:d,content:p,children:u}=e,m=o(d),g=o(p),f=(0,i.default)(n,a,`${a}-pure`,`${a}-placement-${s}`,r);return t.createElement("div",{className:f,style:l},t.createElement("div",{className:`${a}-arrow`}),t.createElement(c.Popup,Object.assign({},e,{className:n,prefixCls:a}),u||t.createElement(y,{prefixCls:a,title:m,content:g})))},w=e=>{let{prefixCls:n,className:a}=e,o=$(e,["prefixCls","className"]),{getPrefixCls:r}=t.useContext(s.ConfigContext),l=r("popover",n),[d,c,p]=_(l);return d(t.createElement(v,Object.assign({},o,{prefixCls:l,hashId:c,className:(0,i.default)(a,p)})))};e.s(["Overlay",0,y,"default",0,w],310730);var I=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]]);return i};let x=t.forwardRef((e,c)=>{var p,u;let{prefixCls:m,title:g,content:f,overlayClassName:h,placement:b="top",trigger:$="hover",children:v,mouseEnterDelay:w=.1,mouseLeaveDelay:x=.1,onOpenChange:S,overlayStyle:E={},styles:O,classNames:k}=e,C=I(e,["prefixCls","title","content","overlayClassName","placement","trigger","children","mouseEnterDelay","mouseLeaveDelay","onOpenChange","overlayStyle","styles","classNames"]),{getPrefixCls:j,className:N,style:M,classNames:T,styles:P}=(0,s.useComponentConfig)("popover"),A=j("popover",m),[z,D,L]=_(A),R=j(),H=(0,i.default)(h,D,L,N,T.root,null==k?void 0:k.root),B=(0,i.default)(T.body,null==k?void 0:k.body),[q,W]=(0,n.default)(!1,{value:null!=(p=e.open)?p:e.visible,defaultValue:null!=(u=e.defaultOpen)?u:e.defaultVisible}),G=(e,t)=>{W(e,!0),null==S||S(e,t)},F=o(g),U=o(f);return z(t.createElement(d.default,Object.assign({placement:b,trigger:$,mouseEnterDelay:w,mouseLeaveDelay:x},C,{prefixCls:A,classNames:{root:H,body:B},styles:{root:Object.assign(Object.assign(Object.assign(Object.assign({},P.root),M),E),null==O?void 0:O.root),body:Object.assign(Object.assign({},P.body),null==O?void 0:O.body)},ref:c,open:q,onOpenChange:e=>{G(e)},overlay:F||U?t.createElement(y,{prefixCls:A,title:F,content:U}):null,transitionName:(0,r.getTransitionName)(R,"zoom-big",C.transitionName),"data-popover-inject":!0}),(0,l.cloneElement)(v,{onKeyDown:e=>{var i,n;(0,t.isValidElement)(v)&&(null==(n=null==v?void 0:(i=v.props).onKeyDown)||n.call(i,e)),e.keyCode===a.default.ESC&&G(!1,e)}})))});x._InternalPanelDoNotUseOrYouWillBeFired=w,e.s(["default",0,x],829672),e.s(["Popover",0,x],282786)},771674,e=>{"use strict";e.i(247167);var t=e.i(931067),i=e.i(271645);let n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"};var a=e.i(9583),o=i.forwardRef(function(e,o){return i.createElement(a.default,(0,t.default)({},e,{ref:o,icon:n}))});e.s(["UserOutlined",0,o],771674)},755151,e=>{"use strict";var t=e.i(247153);e.s(["DownOutlined",()=>t.default])},602073,e=>{"use strict";e.i(247167);var t=e.i(931067),i=e.i(271645);let n={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64L128 192v384c0 212.1 171.9 384 384 384s384-171.9 384-384V192L512 64zm312 512c0 172.3-139.7 312-312 312S200 748.3 200 576V246l312-110 312 110v330z"}},{tag:"path",attrs:{d:"M378.4 475.1a35.91 35.91 0 00-50.9 0 35.91 35.91 0 000 50.9l129.4 129.4 2.1 2.1a33.98 33.98 0 0048.1 0L730.6 434a33.98 33.98 0 000-48.1l-2.8-2.8a33.98 33.98 0 00-48.1 0L483 579.7 378.4 475.1z"}}]},name:"safety",theme:"outlined"};var a=e.i(9583),o=i.forwardRef(function(e,o){return i.createElement(a.default,(0,t.default)({},e,{ref:o,icon:n}))});e.s(["SafetyOutlined",0,o],602073)},818581,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"useMergedRef",{enumerable:!0,get:function(){return a}});let n=e.r(271645);function a(e,t){let i=(0,n.useRef)(null),a=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=i.current;e&&(i.current=null,e());let t=a.current;t&&(a.current=null,t())}else e&&(i.current=o(e,n)),t&&(a.current=o(t,n))},[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let i=e(t);return"function"==typeof i?i:()=>e(null)}}("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},166406,e=>{"use strict";var t=e.i(190144);e.s(["CopyOutlined",()=>t.default])},447566,e=>{"use strict";e.i(247167);var t=e.i(931067),i=e.i(271645);let n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"};var a=e.i(9583),o=i.forwardRef(function(e,o){return i.createElement(a.default,(0,t.default)({},e,{ref:o,icon:n}))});e.s(["ArrowLeftOutlined",0,o],447566)},492030,e=>{"use strict";var t=e.i(121229);e.s(["CheckOutlined",()=>t.default])},596239,e=>{"use strict";e.i(247167);var t=e.i(931067),i=e.i(271645);let n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"}}]},name:"link",theme:"outlined"};var a=e.i(9583),o=i.forwardRef(function(e,o){return i.createElement(a.default,(0,t.default)({},e,{ref:o,icon:n}))});e.s(["LinkOutlined",0,o],596239)},339019,865361,e=>{"use strict";var t,i,n=((t={}).AUDIO_SPEECH="audio_speech",t.AUDIO_TRANSCRIPTION="audio_transcription",t.IMAGE_GENERATION="image_generation",t.VIDEO_GENERATION="video_generation",t.CHAT="chat",t.RESPONSES="responses",t.IMAGE_EDITS="image_edits",t.ANTHROPIC_MESSAGES="anthropic_messages",t.EMBEDDING="embedding",t),a=((i={}).IMAGE="image",i.VIDEO="video",i.CHAT="chat",i.RESPONSES="responses",i.IMAGE_EDITS="image_edits",i.ANTHROPIC_MESSAGES="anthropic_messages",i.EMBEDDINGS="embeddings",i.SPEECH="speech",i.TRANSCRIPTION="transcription",i.A2A_AGENTS="a2a_agents",i.MCP="mcp",i.REALTIME="realtime",i.INTERACTIONS="interactions",i);let o={image_generation:"image",video_generation:"video",chat:"chat",responses:"responses",image_edits:"image_edits",anthropic_messages:"anthropic_messages",audio_speech:"speech",audio_transcription:"transcription",embedding:"embeddings"};e.s(["EndpointType",()=>a,"getEndpointType",0,e=>{if(console.log("getEndpointType:",e),Object.values(n).includes(e)){let t=o[e];return console.log("endpointType:",t),t}return"chat"}],865361),e.s(["generateCodeSnippet",0,e=>{let t,{apiKeySource:i,accessToken:n,apiKey:o,inputMessage:r,chatHistory:l,selectedTags:s,selectedVectorStores:d,selectedGuardrails:c,selectedPolicies:p,selectedMCPServers:u,mcpServers:m,mcpServerToolRestrictions:g,selectedVoice:f,endpointType:h,selectedModel:b,selectedSdk:_,proxySettings:$}=e,y="session"===i?n:o,v=window.location.origin,w=$?.LITELLM_UI_API_DOC_BASE_URL;w&&w.trim()?v=w:$?.PROXY_BASE_URL&&(v=$.PROXY_BASE_URL);let I=r||"Your prompt here",x=I.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n"),S=l.filter(e=>!e.isImage).map(({role:e,content:t})=>({role:e,content:t})),E={};s.length>0&&(E.tags=s),d.length>0&&(E.vector_stores=d),c.length>0&&(E.guardrails=c),p.length>0&&(E.policies=p);let O=b||"your-model-name",k="azure"===_?`import openai

client = openai.AzureOpenAI(
	api_key="${y||"YOUR_LITELLM_API_KEY"}",
	azure_endpoint="${v}",
	api_version="2024-02-01"
)`:`import openai

client = openai.OpenAI(
	api_key="${y||"YOUR_LITELLM_API_KEY"}",
	base_url="${v}"
)`;switch(h){case a.CHAT:{let e=Object.keys(E).length>0,i="";if(e){let e=JSON.stringify({metadata:E},null,2).split("\n").map(e=>" ".repeat(4)+e).join("\n").trim();i=`,
    extra_body=${e}`}let n=S.length>0?S:[{role:"user",content:I}];t=`
import base64

# Helper function to encode images to base64
def encode_image(image_path):
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode('utf-8')

# Example with text only
response = client.chat.completions.create(
    model="${O}",
    messages=${JSON.stringify(n,null,4)}${i}
)

print(response)

# Example with image or PDF (uncomment and provide file path to use)
# base64_file = encode_image("path/to/your/file.jpg")  # or .pdf
# response_with_file = client.chat.completions.create(
#     model="${O}",
#     messages=[
#         {
#             "role": "user",
#             "content": [
#                 {
#                     "type": "text",
#                     "text": "${x}"
#                 },
#                 {
#                     "type": "image_url",
#                     "image_url": {
#                         "url": f"data:image/jpeg;base64,{base64_file}"  # or data:application/pdf;base64,{base64_file}
#                     }
#                 }
#             ]
#         }
#     ]${i}
# )
# print(response_with_file)
`;break}case a.RESPONSES:{let e=Object.keys(E).length>0,i="";if(e){let e=JSON.stringify({metadata:E},null,2).split("\n").map(e=>" ".repeat(4)+e).join("\n").trim();i=`,
    extra_body=${e}`}let n=S.length>0?S:[{role:"user",content:I}];t=`
import base64

# Helper function to encode images to base64
def encode_image(image_path):
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode('utf-8')

# Example with text only
response = client.responses.create(
    model="${O}",
    input=${JSON.stringify(n,null,4)}${i}
)

print(response.output_text)

# Example with image or PDF (uncomment and provide file path to use)
# base64_file = encode_image("path/to/your/file.jpg")  # or .pdf
# response_with_file = client.responses.create(
#     model="${O}",
#     input=[
#         {
#             "role": "user",
#             "content": [
#                 {"type": "input_text", "text": "${x}"},
#                 {
#                     "type": "input_image",
#                     "image_url": f"data:image/jpeg;base64,{base64_file}",  # or data:application/pdf;base64,{base64_file}
#                 },
#             ],
#         }
#     ]${i}
# )
# print(response_with_file.output_text)
`;break}case a.IMAGE:t="azure"===_?`
# NOTE: The Azure SDK does not have a direct equivalent to the multi-modal 'responses.create' method shown for OpenAI.
# This snippet uses 'client.images.generate' and will create a new image based on your prompt.
# It does not use the uploaded image, as 'client.images.generate' does not support image inputs in this context.
import os
import requests
import json
import time
from PIL import Image

result = client.images.generate(
	model="${O}",
	prompt="${r}",
	n=1
)

json_response = json.loads(result.model_dump_json())

# Set the directory for the stored image
image_dir = os.path.join(os.curdir, 'images')

# If the directory doesn't exist, create it
if not os.path.isdir(image_dir):
	os.mkdir(image_dir)

# Initialize the image path
image_filename = f"generated_image_{int(time.time())}.png"
image_path = os.path.join(image_dir, image_filename)

try:
	# Retrieve the generated image
	if json_response.get("data") && len(json_response["data"]) > 0 && json_response["data"][0].get("url"):
			image_url = json_response["data"][0]["url"]
			generated_image = requests.get(image_url).content
			with open(image_path, "wb") as image_file:
					image_file.write(generated_image)

			print(f"Image saved to {image_path}")
			# Display the image
			image = Image.open(image_path)
			image.show()
	else:
			print("Could not find image URL in response.")
			print("Full response:", json_response)
except Exception as e:
	print(f"An error occurred: {e}")
	print("Full response:", json_response)
`:`
import base64
import os
import time
import json
from PIL import Image
import requests

# Helper function to encode images to base64
def encode_image(image_path):
	with open(image_path, "rb") as image_file:
			return base64.b64encode(image_file.read()).decode('utf-8')

# Helper function to create a file (simplified for this example)
def create_file(image_path):
	# In a real implementation, this would upload the file to OpenAI
	# For this example, we'll just return a placeholder ID
	return f"file_{os.path.basename(image_path).replace('.', '_')}"

# The prompt entered by the user
prompt = "${x}"

# Encode images to base64
base64_image1 = encode_image("body-lotion.png")
base64_image2 = encode_image("soap.png")

# Create file IDs
file_id1 = create_file("body-lotion.png")
file_id2 = create_file("incense-kit.png")

response = client.responses.create(
	model="${O}",
	input=[
			{
					"role": "user",
					"content": [
							{"type": "input_text", "text": prompt},
							{
									"type": "input_image",
									"image_url": f"data:image/jpeg;base64,{base64_image1}",
							},
							{
									"type": "input_image",
									"image_url": f"data:image/jpeg;base64,{base64_image2}",
							},
							{
									"type": "input_image",
									"file_id": file_id1,
							},
							{
									"type": "input_image",
									"file_id": file_id2,
							}
					],
			}
	],
	tools=[{"type": "image_generation"}],
)

# Process the response
image_generation_calls = [
	output
	for output in response.output
	if output.type == "image_generation_call"
]

image_data = [output.result for output in image_generation_calls]

if image_data:
	image_base64 = image_data[0]
	image_filename = f"edited_image_{int(time.time())}.png"
	with open(image_filename, "wb") as f:
			f.write(base64.b64decode(image_base64))
	print(f"Image saved to {image_filename}")
else:
	# If no image is generated, there might be a text response with an explanation
	text_response = [output.text for output in response.output if hasattr(output, 'text')]
	if text_response:
			print("No image generated. Model response:")
			print("\\n".join(text_response))
	else:
			print("No image data found in response.")
	print("Full response for debugging:")
	print(response)
`;break;case a.IMAGE_EDITS:t="azure"===_?`
import base64
import os
import time
import json
from PIL import Image
import requests

# Helper function to encode images to base64
def encode_image(image_path):
	with open(image_path, "rb") as image_file:
			return base64.b64encode(image_file.read()).decode('utf-8')

# The prompt entered by the user
prompt = "${x}"

# Encode images to base64
base64_image1 = encode_image("body-lotion.png")
base64_image2 = encode_image("soap.png")

# Create file IDs
file_id1 = create_file("body-lotion.png")
file_id2 = create_file("incense-kit.png")

response = client.responses.create(
	model="${O}",
	input=[
			{
					"role": "user",
					"content": [
							{"type": "input_text", "text": prompt},
							{
									"type": "input_image",
									"image_url": f"data:image/jpeg;base64,{base64_image1}",
							},
							{
									"type": "input_image",
									"image_url": f"data:image/jpeg;base64,{base64_image2}",
							},
							{
									"type": "input_image",
									"file_id": file_id1,
							},
							{
									"type": "input_image",
									"file_id": file_id2,
							}
					],
			}
	],
	tools=[{"type": "image_generation"}],
)

# Process the response
image_generation_calls = [
	output
	for output in response.output
	if output.type == "image_generation_call"
]

image_data = [output.result for output in image_generation_calls]

if image_data:
	image_base64 = image_data[0]
	image_filename = f"edited_image_{int(time.time())}.png"
	with open(image_filename, "wb") as f:
			f.write(base64.b64decode(image_base64))
	print(f"Image saved to {image_filename}")
else:
	# If no image is generated, there might be a text response with an explanation
	text_response = [output.text for output in response.output if hasattr(output, 'text')]
	if text_response:
			print("No image generated. Model response:")
			print("\\n".join(text_response))
	else:
			print("No image data found in response.")
	print("Full response for debugging:")
	print(response)
`:`
import base64
import os
import time

# Helper function to encode images to base64
def encode_image(image_path):
	with open(image_path, "rb") as image_file:
			return base64.b64encode(image_file.read()).decode('utf-8')

# Helper function to create a file (simplified for this example)
def create_file(image_path):
	# In a real implementation, this would upload the file to OpenAI
	# For this example, we'll just return a placeholder ID
	return f"file_{os.path.basename(image_path).replace('.', '_')}"

# The prompt entered by the user
prompt = "${x}"

# Encode images to base64
base64_image1 = encode_image("body-lotion.png")
base64_image2 = encode_image("soap.png")

# Create file IDs
file_id1 = create_file("body-lotion.png")
file_id2 = create_file("incense-kit.png")

response = client.responses.create(
	model="${O}",
	input=[
			{
					"role": "user",
					"content": [
							{"type": "input_text", "text": prompt},
							{
									"type": "input_image",
									"image_url": f"data:image/jpeg;base64,{base64_image1}",
							},
							{
									"type": "input_image",
									"image_url": f"data:image/jpeg;base64,{base64_image2}",
							},
							{
									"type": "input_image",
									"file_id": file_id1,
							},
							{
									"type": "input_image",
									"file_id": file_id2,
							}
					],
			}
	],
	tools=[{"type": "image_generation"}],
)

# Process the response
image_generation_calls = [
	output
	for output in response.output
	if output.type == "image_generation_call"
]

image_data = [output.result for output in image_generation_calls]

if image_data:
	image_base64 = image_data[0]
	image_filename = f"edited_image_{int(time.time())}.png"
	with open(image_filename, "wb") as f:
			f.write(base64.b64decode(image_base64))
	print(f"Image saved to {image_filename}")
else:
	# If no image is generated, there might be a text response with an explanation
	text_response = [output.text for output in response.output if hasattr(output, 'text')]
	if text_response:
			print("No image generated. Model response:")
			print("\\n".join(text_response))
	else:
			print("No image data found in response.")
	print("Full response for debugging:")
	print(response)
`;break;case a.EMBEDDINGS:t=`
response = client.embeddings.create(
	input="${r||"Your string here"}",
	model="${O}",
	encoding_format="base64" # or "float"
)

print(response.data[0].embedding)
`;break;case a.TRANSCRIPTION:t=`
# Open the audio file
audio_file = open("path/to/your/audio/file.mp3", "rb")

# Make the transcription request
response = client.audio.transcriptions.create(
	model="${O}",
	file=audio_file${r?`,
	prompt="${r.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}"`:""}
)

print(response.text)
`;break;case a.SPEECH:t=`
# Make the text-to-speech request
response = client.audio.speech.create(
	model="${O}",
	input="${r||"Your text to convert to speech here"}",
	voice="${f}"  # Options: alloy, ash, ballad, coral, echo, fable, nova, onyx, sage, shimmer
)

# Save the audio to a file
output_filename = "output_speech.mp3"
response.stream_to_file(output_filename)
print(f"Audio saved to {output_filename}")

# Optional: Customize response format and speed
# response = client.audio.speech.create(
#     model="${O}",
#     input="${r||"Your text to convert to speech here"}",
#     voice="alloy",
#     response_format="mp3",  # Options: mp3, opus, aac, flac, wav, pcm
#     speed=1.0  # Range: 0.25 to 4.0
# )
# response.stream_to_file("output_speech.mp3")
`;break;default:t="\n# Code generation for this endpoint is not implemented yet."}return`${k}
${t}`}],339019)}]);