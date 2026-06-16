(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,185793,e=>{"use strict";e.i(247167);var t=e.i(271645),a=e.i(343794),i=e.i(242064),n=e.i(529681);let r=e=>{let{prefixCls:i,className:n,style:r,size:o,shape:l}=e,s=(0,a.default)({[`${i}-lg`]:"large"===o,[`${i}-sm`]:"small"===o}),d=(0,a.default)({[`${i}-circle`]:"circle"===l,[`${i}-square`]:"square"===l,[`${i}-round`]:"round"===l}),c=t.useMemo(()=>"number"==typeof o?{width:o,height:o,lineHeight:`${o}px`}:{},[o]);return t.createElement("span",{className:(0,a.default)(i,s,d,n),style:Object.assign(Object.assign({},c),r)})};e.i(296059);var o=e.i(694758),l=e.i(915654),s=e.i(246422),d=e.i(838378);let c=new o.Keyframes("ant-skeleton-loading",{"0%":{backgroundPosition:"100% 50%"},"100%":{backgroundPosition:"0 50%"}}),u=e=>({height:e,lineHeight:(0,l.unit)(e)}),g=e=>Object.assign({width:e},u(e)),m=(e,t)=>Object.assign({width:t(e).mul(5).equal(),minWidth:t(e).mul(5).equal()},u(e)),p=e=>Object.assign({width:e},u(e)),f=(e,t,a)=>{let{skeletonButtonCls:i}=e;return{[`${a}${i}-circle`]:{width:t,minWidth:t,borderRadius:"50%"},[`${a}${i}-round`]:{borderRadius:t}}},h=(e,t)=>Object.assign({width:t(e).mul(2).equal(),minWidth:t(e).mul(2).equal()},u(e)),b=(0,s.genStyleHooks)("Skeleton",e=>{let{componentCls:t,calc:a}=e;return(e=>{let{componentCls:t,skeletonAvatarCls:a,skeletonTitleCls:i,skeletonParagraphCls:n,skeletonButtonCls:r,skeletonInputCls:o,skeletonImageCls:l,controlHeight:s,controlHeightLG:d,controlHeightSM:u,gradientFromColor:b,padding:_,marginSM:$,borderRadius:v,titleHeight:x,blockRadius:C,paragraphLiHeight:w,controlHeightXS:y,paragraphMarginTop:k}=e;return{[t]:{display:"table",width:"100%",[`${t}-header`]:{display:"table-cell",paddingInlineEnd:_,verticalAlign:"top",[a]:Object.assign({display:"inline-block",verticalAlign:"top",background:b},g(s)),[`${a}-circle`]:{borderRadius:"50%"},[`${a}-lg`]:Object.assign({},g(d)),[`${a}-sm`]:Object.assign({},g(u))},[`${t}-content`]:{display:"table-cell",width:"100%",verticalAlign:"top",[i]:{width:"100%",height:x,background:b,borderRadius:C,[`+ ${n}`]:{marginBlockStart:u}},[n]:{padding:0,"> li":{width:"100%",height:w,listStyle:"none",background:b,borderRadius:C,"+ li":{marginBlockStart:y}}},[`${n}> li:last-child:not(:first-child):not(:nth-child(2))`]:{width:"61%"}},[`&-round ${t}-content`]:{[`${i}, ${n} > li`]:{borderRadius:v}}},[`${t}-with-avatar ${t}-content`]:{[i]:{marginBlockStart:$,[`+ ${n}`]:{marginBlockStart:k}}},[`${t}${t}-element`]:Object.assign(Object.assign(Object.assign(Object.assign({display:"inline-block",width:"auto"},(e=>{let{borderRadiusSM:t,skeletonButtonCls:a,controlHeight:i,controlHeightLG:n,controlHeightSM:r,gradientFromColor:o,calc:l}=e;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({[a]:Object.assign({display:"inline-block",verticalAlign:"top",background:o,borderRadius:t,width:l(i).mul(2).equal(),minWidth:l(i).mul(2).equal()},h(i,l))},f(e,i,a)),{[`${a}-lg`]:Object.assign({},h(n,l))}),f(e,n,`${a}-lg`)),{[`${a}-sm`]:Object.assign({},h(r,l))}),f(e,r,`${a}-sm`))})(e)),(e=>{let{skeletonAvatarCls:t,gradientFromColor:a,controlHeight:i,controlHeightLG:n,controlHeightSM:r}=e;return{[t]:Object.assign({display:"inline-block",verticalAlign:"top",background:a},g(i)),[`${t}${t}-circle`]:{borderRadius:"50%"},[`${t}${t}-lg`]:Object.assign({},g(n)),[`${t}${t}-sm`]:Object.assign({},g(r))}})(e)),(e=>{let{controlHeight:t,borderRadiusSM:a,skeletonInputCls:i,controlHeightLG:n,controlHeightSM:r,gradientFromColor:o,calc:l}=e;return{[i]:Object.assign({display:"inline-block",verticalAlign:"top",background:o,borderRadius:a},m(t,l)),[`${i}-lg`]:Object.assign({},m(n,l)),[`${i}-sm`]:Object.assign({},m(r,l))}})(e)),(e=>{let{skeletonImageCls:t,imageSizeBase:a,gradientFromColor:i,borderRadiusSM:n,calc:r}=e;return{[t]:Object.assign(Object.assign({display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"middle",background:i,borderRadius:n},p(r(a).mul(2).equal())),{[`${t}-path`]:{fill:"#bfbfbf"},[`${t}-svg`]:Object.assign(Object.assign({},p(a)),{maxWidth:r(a).mul(4).equal(),maxHeight:r(a).mul(4).equal()}),[`${t}-svg${t}-svg-circle`]:{borderRadius:"50%"}}),[`${t}${t}-circle`]:{borderRadius:"50%"}}})(e)),[`${t}${t}-block`]:{width:"100%",[r]:{width:"100%"},[o]:{width:"100%"}},[`${t}${t}-active`]:{[`
        ${i},
        ${n} > li,
        ${a},
        ${r},
        ${o},
        ${l}
      `]:Object.assign({},{background:e.skeletonLoadingBackground,backgroundSize:"400% 100%",animationName:c,animationDuration:e.skeletonLoadingMotionDuration,animationTimingFunction:"ease",animationIterationCount:"infinite"})}}})((0,d.mergeToken)(e,{skeletonAvatarCls:`${t}-avatar`,skeletonTitleCls:`${t}-title`,skeletonParagraphCls:`${t}-paragraph`,skeletonButtonCls:`${t}-button`,skeletonInputCls:`${t}-input`,skeletonImageCls:`${t}-image`,imageSizeBase:a(e.controlHeight).mul(1.5).equal(),borderRadius:100,skeletonLoadingBackground:`linear-gradient(90deg, ${e.gradientFromColor} 25%, ${e.gradientToColor} 37%, ${e.gradientFromColor} 63%)`,skeletonLoadingMotionDuration:"1.4s"}))},e=>{let{colorFillContent:t,colorFill:a}=e;return{color:t,colorGradientEnd:a,gradientFromColor:t,gradientToColor:a,titleHeight:e.controlHeight/2,blockRadius:e.borderRadiusSM,paragraphMarginTop:e.marginLG+e.marginXXS,paragraphLiHeight:e.controlHeight/2}},{deprecatedTokens:[["color","gradientFromColor"],["colorGradientEnd","gradientToColor"]]}),_=e=>{let{prefixCls:i,className:n,style:r,rows:o=0}=e,l=Array.from({length:o}).map((a,i)=>t.createElement("li",{key:i,style:{width:((e,t)=>{let{width:a,rows:i=2}=t;return Array.isArray(a)?a[e]:i-1===e?a:void 0})(i,e)}}));return t.createElement("ul",{className:(0,a.default)(i,n),style:r},l)},$=({prefixCls:e,className:i,width:n,style:r})=>t.createElement("h3",{className:(0,a.default)(e,i),style:Object.assign({width:n},r)});function v(e){return e&&"object"==typeof e?e:{}}let x=e=>{let{prefixCls:n,loading:o,className:l,rootClassName:s,style:d,children:c,avatar:u=!1,title:g=!0,paragraph:m=!0,active:p,round:f}=e,{getPrefixCls:h,direction:x,className:C,style:w}=(0,i.useComponentConfig)("skeleton"),y=h("skeleton",n),[k,O,E]=b(y);if(o||!("loading"in e)){let e,i,n=!!u,o=!!g,c=!!m;if(n){let a=Object.assign(Object.assign({prefixCls:`${y}-avatar`},o&&!c?{size:"large",shape:"square"}:{size:"large",shape:"circle"}),v(u));e=t.createElement("div",{className:`${y}-header`},t.createElement(r,Object.assign({},a)))}if(o||c){let e,a;if(o){let a=Object.assign(Object.assign({prefixCls:`${y}-title`},!n&&c?{width:"38%"}:n&&c?{width:"50%"}:{}),v(g));e=t.createElement($,Object.assign({},a))}if(c){let e,i=Object.assign(Object.assign({prefixCls:`${y}-paragraph`},(e={},n&&o||(e.width="61%"),!n&&o?e.rows=3:e.rows=2,e)),v(m));a=t.createElement(_,Object.assign({},i))}i=t.createElement("div",{className:`${y}-content`},e,a)}let h=(0,a.default)(y,{[`${y}-with-avatar`]:n,[`${y}-active`]:p,[`${y}-rtl`]:"rtl"===x,[`${y}-round`]:f},C,l,s,O,E);return k(t.createElement("div",{className:h,style:Object.assign(Object.assign({},w),d)},e,i))}return null!=c?c:null};x.Button=e=>{let{prefixCls:o,className:l,rootClassName:s,active:d,block:c=!1,size:u="default"}=e,{getPrefixCls:g}=t.useContext(i.ConfigContext),m=g("skeleton",o),[p,f,h]=b(m),_=(0,n.default)(e,["prefixCls"]),$=(0,a.default)(m,`${m}-element`,{[`${m}-active`]:d,[`${m}-block`]:c},l,s,f,h);return p(t.createElement("div",{className:$},t.createElement(r,Object.assign({prefixCls:`${m}-button`,size:u},_))))},x.Avatar=e=>{let{prefixCls:o,className:l,rootClassName:s,active:d,shape:c="circle",size:u="default"}=e,{getPrefixCls:g}=t.useContext(i.ConfigContext),m=g("skeleton",o),[p,f,h]=b(m),_=(0,n.default)(e,["prefixCls","className"]),$=(0,a.default)(m,`${m}-element`,{[`${m}-active`]:d},l,s,f,h);return p(t.createElement("div",{className:$},t.createElement(r,Object.assign({prefixCls:`${m}-avatar`,shape:c,size:u},_))))},x.Input=e=>{let{prefixCls:o,className:l,rootClassName:s,active:d,block:c,size:u="default"}=e,{getPrefixCls:g}=t.useContext(i.ConfigContext),m=g("skeleton",o),[p,f,h]=b(m),_=(0,n.default)(e,["prefixCls"]),$=(0,a.default)(m,`${m}-element`,{[`${m}-active`]:d,[`${m}-block`]:c},l,s,f,h);return p(t.createElement("div",{className:$},t.createElement(r,Object.assign({prefixCls:`${m}-input`,size:u},_))))},x.Image=e=>{let{prefixCls:n,className:r,rootClassName:o,style:l,active:s}=e,{getPrefixCls:d}=t.useContext(i.ConfigContext),c=d("skeleton",n),[u,g,m]=b(c),p=(0,a.default)(c,`${c}-element`,{[`${c}-active`]:s},r,o,g,m);return u(t.createElement("div",{className:p},t.createElement("div",{className:(0,a.default)(`${c}-image`,r),style:l},t.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:`${c}-image-svg`},t.createElement("title",null,"Image placeholder"),t.createElement("path",{d:"M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",className:`${c}-image-path`})))))},x.Node=e=>{let{prefixCls:n,className:r,rootClassName:o,style:l,active:s,children:d}=e,{getPrefixCls:c}=t.useContext(i.ConfigContext),u=c("skeleton",n),[g,m,p]=b(u),f=(0,a.default)(u,`${u}-element`,{[`${u}-active`]:s},m,r,o,p);return g(t.createElement("div",{className:f},t.createElement("div",{className:(0,a.default)(`${u}-image`,r),style:l},d)))},e.s(["default",0,x],185793)},959013,e=>{"use strict";e.i(247167);var t=e.i(931067),a=e.i(271645);let i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};var n=e.i(9583),r=a.forwardRef(function(e,r){return a.createElement(n.default,(0,t.default)({},e,{ref:r,icon:i}))});e.s(["default",0,r],959013)},563113,887719,e=>{"use strict";var t=e.i(271645),a=e.i(864517),i=e.i(244009),n=e.i(408850),r=e.i(87414);let o=function(...e){let t={};return e.forEach(e=>{e&&Object.keys(e).forEach(a=>{void 0!==e[a]&&(t[a]=e[a])})}),t};function l(e){let{closable:a,closeIcon:i}=e||{};return t.default.useMemo(()=>{if(!a&&(!1===a||!1===i||null===i))return!1;if(void 0===a&&void 0===i)return null;let e={closeIcon:"boolean"!=typeof i&&null!==i?i:void 0};return a&&"object"==typeof a&&(e=Object.assign(Object.assign({},e),a)),e},[a,i])}e.s(["default",0,o],887719);let s={};e.s(["pickClosable",0,function(e){if(!e)return;let{closable:t,closeIcon:a}=e;return{closable:t,closeIcon:a}},"useClosable",0,(e,d,c=s)=>{let u=l(e),g=l(d),[m]=(0,n.useLocale)("global",r.default.global),p="boolean"!=typeof u&&!!(null==u?void 0:u.disabled),f=t.default.useMemo(()=>Object.assign({closeIcon:t.default.createElement(a.default,null)},c),[c]),h=t.default.useMemo(()=>!1!==u&&(u?o(f,g,u):!1!==g&&(g?o(f,g):!!f.closable&&f)),[u,g,f]);return t.default.useMemo(()=>{var e,a;if(!1===h)return[!1,null,p,{}];let{closeIconRender:n}=f,{closeIcon:r}=h,o=r,l=(0,i.default)(h,!0);return null!=o&&(n&&(o=n(r)),o=t.default.isValidElement(o)?t.default.cloneElement(o,Object.assign(Object.assign(Object.assign({},o.props),{"aria-label":null!=(a=null==(e=o.props)?void 0:e["aria-label"])?a:m.close}),l)):t.default.createElement("span",Object.assign({"aria-label":m.close},l),o)),[!0,o,p,l]},[p,m.close,h,f])}],563113)},922611,e=>{"use strict";var t=e.i(271645),a=e.i(175066);function i(){}let n=t.createContext({add:i,remove:i});e.s(["usePanelRef",0,function(e){let i=t.useContext(n),r=t.useRef(null);return(0,a.default)(t=>{if(t){let a=e?t.querySelector(e):t;a&&(i.add(a),r.current=a)}else i.remove(r.current)})}])},653496,e=>{"use strict";var t=e.i(721369);e.s(["Tabs",()=>t.default])},599724,936325,e=>{"use strict";var t=e.i(95779),a=e.i(444755),i=e.i(673706),n=e.i(271645);let r=n.default.forwardRef((e,r)=>{let{color:o,className:l,children:s}=e;return n.default.createElement("p",{ref:r,className:(0,a.tremorTwMerge)("text-tremor-default",o?(0,i.getColorClassNames)(o,t.colorPalette.text).textColor:(0,a.tremorTwMerge)("text-tremor-content","dark:text-dark-tremor-content"),l)},s)});r.displayName="Text",e.s(["default",0,r],936325),e.s(["Text",0,r],599724)},994388,e=>{"use strict";var t=e.i(290571),a=e.i(829087),i=e.i(271645);let n=["preEnter","entering","entered","preExit","exiting","exited","unmounted"],r=e=>({_s:e,status:n[e],isEnter:e<3,isMounted:6!==e,isResolved:2===e||e>4}),o=e=>e?6:5,l=(e,t,a,i,n)=>{clearTimeout(i.current);let o=r(e);t(o),a.current=o,n&&n({current:o})};var s=e.i(480731),d=e.i(444755),c=e.i(673706);let u=e=>{var a=(0,t.__rest)(e,[]);return i.default.createElement("svg",Object.assign({},a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}),i.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),i.default.createElement("path",{d:"M18.364 5.636L16.95 7.05A7 7 0 1 0 19 12h2a9 9 0 1 1-2.636-6.364z"}))};var g=e.i(95779);let m={xs:{height:"h-4",width:"w-4"},sm:{height:"h-5",width:"w-5"},md:{height:"h-5",width:"w-5"},lg:{height:"h-6",width:"w-6"},xl:{height:"h-6",width:"w-6"}},p=(e,t)=>{switch(e){case"primary":return{textColor:t?(0,c.getColorClassNames)("white").textColor:"text-tremor-brand-inverted dark:text-dark-tremor-brand-inverted",hoverTextColor:t?(0,c.getColorClassNames)("white").textColor:"text-tremor-brand-inverted dark:text-dark-tremor-brand-inverted",bgColor:t?(0,c.getColorClassNames)(t,g.colorPalette.background).bgColor:"bg-tremor-brand dark:bg-dark-tremor-brand",hoverBgColor:t?(0,c.getColorClassNames)(t,g.colorPalette.darkBackground).hoverBgColor:"hover:bg-tremor-brand-emphasis dark:hover:bg-dark-tremor-brand-emphasis",borderColor:t?(0,c.getColorClassNames)(t,g.colorPalette.border).borderColor:"border-tremor-brand dark:border-dark-tremor-brand",hoverBorderColor:t?(0,c.getColorClassNames)(t,g.colorPalette.darkBorder).hoverBorderColor:"hover:border-tremor-brand-emphasis dark:hover:border-dark-tremor-brand-emphasis"};case"secondary":return{textColor:t?(0,c.getColorClassNames)(t,g.colorPalette.text).textColor:"text-tremor-brand dark:text-dark-tremor-brand",hoverTextColor:t?(0,c.getColorClassNames)(t,g.colorPalette.text).textColor:"hover:text-tremor-brand-emphasis dark:hover:text-dark-tremor-brand-emphasis",bgColor:(0,c.getColorClassNames)("transparent").bgColor,hoverBgColor:t?(0,d.tremorTwMerge)((0,c.getColorClassNames)(t,g.colorPalette.background).hoverBgColor,"hover:bg-opacity-20 dark:hover:bg-opacity-20"):"hover:bg-tremor-brand-faint dark:hover:bg-dark-tremor-brand-faint",borderColor:t?(0,c.getColorClassNames)(t,g.colorPalette.border).borderColor:"border-tremor-brand dark:border-dark-tremor-brand"};case"light":return{textColor:t?(0,c.getColorClassNames)(t,g.colorPalette.text).textColor:"text-tremor-brand dark:text-dark-tremor-brand",hoverTextColor:t?(0,c.getColorClassNames)(t,g.colorPalette.darkText).hoverTextColor:"hover:text-tremor-brand-emphasis dark:hover:text-dark-tremor-brand-emphasis",bgColor:(0,c.getColorClassNames)("transparent").bgColor,borderColor:"",hoverBorderColor:""}}},f=(0,c.makeClassName)("Button"),h=({loading:e,iconSize:t,iconPosition:a,Icon:n,needMargin:r,transitionStatus:o})=>{let l=r?a===s.HorizontalPositions.Left?(0,d.tremorTwMerge)("-ml-1","mr-1.5"):(0,d.tremorTwMerge)("-mr-1","ml-1.5"):"",c=(0,d.tremorTwMerge)("w-0 h-0"),g={default:c,entering:c,entered:t,exiting:t,exited:c};return e?i.default.createElement(u,{className:(0,d.tremorTwMerge)(f("icon"),"animate-spin shrink-0",l,g.default,g[o]),style:{transition:"width 150ms"}}):i.default.createElement(n,{className:(0,d.tremorTwMerge)(f("icon"),"shrink-0",t,l)})},b=i.default.forwardRef((e,n)=>{let{icon:u,iconPosition:g=s.HorizontalPositions.Left,size:b=s.Sizes.SM,color:_,variant:$="primary",disabled:v,loading:x=!1,loadingText:C,children:w,tooltip:y,className:k}=e,O=(0,t.__rest)(e,["icon","iconPosition","size","color","variant","disabled","loading","loadingText","children","tooltip","className"]),E=x||v,S=void 0!==u||x,I=x&&C,j=!(!w&&!I),N=(0,d.tremorTwMerge)(m[b].height,m[b].width),T="light"!==$?(0,d.tremorTwMerge)("rounded-tremor-default border","shadow-tremor-input","dark:shadow-dark-tremor-input"):"",M=p($,_),z=("light"!==$?{xs:{paddingX:"px-2.5",paddingY:"py-1.5",fontSize:"text-xs"},sm:{paddingX:"px-4",paddingY:"py-2",fontSize:"text-sm"},md:{paddingX:"px-4",paddingY:"py-2",fontSize:"text-md"},lg:{paddingX:"px-4",paddingY:"py-2.5",fontSize:"text-lg"},xl:{paddingX:"px-4",paddingY:"py-3",fontSize:"text-xl"}}:{xs:{paddingX:"",paddingY:"",fontSize:"text-xs"},sm:{paddingX:"",paddingY:"",fontSize:"text-sm"},md:{paddingX:"",paddingY:"",fontSize:"text-md"},lg:{paddingX:"",paddingY:"",fontSize:"text-lg"},xl:{paddingX:"",paddingY:"",fontSize:"text-xl"}})[b],{tooltipProps:P,getReferenceProps:R}=(0,a.useTooltip)(300),[A,B]=(({enter:e=!0,exit:t=!0,preEnter:a,preExit:n,timeout:s,initialEntered:d,mountOnEnter:c,unmountOnExit:u,onStateChange:g}={})=>{let[m,p]=(0,i.useState)(()=>r(d?2:o(c))),f=(0,i.useRef)(m),h=(0,i.useRef)(0),[b,_]="object"==typeof s?[s.enter,s.exit]:[s,s],$=(0,i.useCallback)(()=>{let e=((e,t)=>{switch(e){case 1:case 0:return 2;case 4:case 3:return o(t)}})(f.current._s,u);e&&l(e,p,f,h,g)},[g,u]);return[m,(0,i.useCallback)(i=>{let r=e=>{switch(l(e,p,f,h,g),e){case 1:b>=0&&(h.current=((...e)=>setTimeout(...e))($,b));break;case 4:_>=0&&(h.current=((...e)=>setTimeout(...e))($,_));break;case 0:case 3:h.current=((...e)=>setTimeout(...e))(()=>{isNaN(document.body.offsetTop)||r(e+1)},0)}},s=f.current.isEnter;"boolean"!=typeof i&&(i=!s),i?s||r(e?+!a:2):s&&r(t?n?3:4:o(u))},[$,g,e,t,a,n,b,_,u]),$]})({timeout:50});return(0,i.useEffect)(()=>{B(x)},[x]),i.default.createElement("button",Object.assign({ref:(0,c.mergeRefs)([n,P.refs.setReference]),className:(0,d.tremorTwMerge)(f("root"),"shrink-0 inline-flex justify-center items-center group font-medium outline-none",T,z.paddingX,z.paddingY,z.fontSize,M.textColor,M.bgColor,M.borderColor,M.hoverBorderColor,E?"opacity-50 cursor-not-allowed":(0,d.tremorTwMerge)(p($,_).hoverTextColor,p($,_).hoverBgColor,p($,_).hoverBorderColor),k),disabled:E},R,O),i.default.createElement(a.default,Object.assign({text:y},P)),S&&g!==s.HorizontalPositions.Right?i.default.createElement(h,{loading:x,iconSize:N,iconPosition:g,Icon:u,transitionStatus:A.status,needMargin:j}):null,I||w?i.default.createElement("span",{className:(0,d.tremorTwMerge)(f("text"),"text-tremor-default whitespace-nowrap")},I?C:w):null,S&&g===s.HorizontalPositions.Right?i.default.createElement(h,{loading:x,iconSize:N,iconPosition:g,Icon:u,transitionStatus:A.status,needMargin:j}):null)});b.displayName="Button",e.s(["Button",0,b],994388)},304967,e=>{"use strict";var t=e.i(290571),a=e.i(271645),i=e.i(480731),n=e.i(95779),r=e.i(444755),o=e.i(673706);let l=(0,o.makeClassName)("Card"),s=a.default.forwardRef((e,s)=>{let{decoration:d="",decorationColor:c,children:u,className:g}=e,m=(0,t.__rest)(e,["decoration","decorationColor","children","className"]);return a.default.createElement("div",Object.assign({ref:s,className:(0,r.tremorTwMerge)(l("root"),"relative w-full text-left ring-1 rounded-tremor-default p-6","bg-tremor-background ring-tremor-ring shadow-tremor-card","dark:bg-dark-tremor-background dark:ring-dark-tremor-ring dark:shadow-dark-tremor-card",c?(0,o.getColorClassNames)(c,n.colorPalette.border).borderColor:"border-tremor-brand dark:border-dark-tremor-brand",(e=>{if(!e)return"";switch(e){case i.HorizontalPositions.Left:return"border-l-4";case i.VerticalPositions.Top:return"border-t-4";case i.HorizontalPositions.Right:return"border-r-4";case i.VerticalPositions.Bottom:return"border-b-4";default:return""}})(d),g)},m),u)});s.displayName="Card",e.s(["Card",0,s],304967)},629569,e=>{"use strict";var t=e.i(290571),a=e.i(95779),i=e.i(444755),n=e.i(673706),r=e.i(271645);let o=r.default.forwardRef((e,o)=>{let{color:l,children:s,className:d}=e,c=(0,t.__rest)(e,["color","children","className"]);return r.default.createElement("p",Object.assign({ref:o,className:(0,i.tremorTwMerge)("font-medium text-tremor-title",l?(0,n.getColorClassNames)(l,a.colorPalette.darkText).textColor:"text-tremor-content-strong dark:text-dark-tremor-content-strong",d)},c),s)});o.displayName="Title",e.s(["Title",0,o],629569)},790848,e=>{"use strict";e.i(247167);var t=e.i(271645),a=e.i(739295),i=e.i(343794),n=e.i(931067),r=e.i(211577),o=e.i(392221),l=e.i(703923),s=e.i(914949),d=e.i(404948),c=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],u=t.forwardRef(function(e,a){var u,g=e.prefixCls,m=void 0===g?"rc-switch":g,p=e.className,f=e.checked,h=e.defaultChecked,b=e.disabled,_=e.loadingIcon,$=e.checkedChildren,v=e.unCheckedChildren,x=e.onClick,C=e.onChange,w=e.onKeyDown,y=(0,l.default)(e,c),k=(0,s.default)(!1,{value:f,defaultValue:h}),O=(0,o.default)(k,2),E=O[0],S=O[1];function I(e,t){var a=E;return b||(S(a=e),null==C||C(a,t)),a}var j=(0,i.default)(m,p,(u={},(0,r.default)(u,"".concat(m,"-checked"),E),(0,r.default)(u,"".concat(m,"-disabled"),b),u));return t.createElement("button",(0,n.default)({},y,{type:"button",role:"switch","aria-checked":E,disabled:b,className:j,ref:a,onKeyDown:function(e){e.which===d.default.LEFT?I(!1,e):e.which===d.default.RIGHT&&I(!0,e),null==w||w(e)},onClick:function(e){var t=I(!E,e);null==x||x(t,e)}}),_,t.createElement("span",{className:"".concat(m,"-inner")},t.createElement("span",{className:"".concat(m,"-inner-checked")},$),t.createElement("span",{className:"".concat(m,"-inner-unchecked")},v)))});u.displayName="Switch";var g=e.i(121872),m=e.i(242064),p=e.i(937328),f=e.i(517455);e.i(296059);var h=e.i(915654),b=e.i(135551),_=e.i(183293),$=e.i(246422),v=e.i(838378);let x=(0,$.genStyleHooks)("Switch",e=>{let t=(0,v.mergeToken)(e,{switchDuration:e.motionDurationMid,switchColor:e.colorPrimary,switchDisabledOpacity:e.opacityLoading,switchLoadingIconSize:e.calc(e.fontSizeIcon).mul(.75).equal(),switchLoadingIconColor:`rgba(0, 0, 0, ${e.opacityLoading})`,switchHandleActiveInset:"-30%"});return[(e=>{let{componentCls:t,trackHeight:a,trackMinWidth:i}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,_.resetComponent)(e)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:i,height:a,lineHeight:(0,h.unit)(a),verticalAlign:"middle",background:e.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${e.motionDurationMid}`,userSelect:"none",[`&:hover:not(${t}-disabled)`]:{background:e.colorTextTertiary}}),(0,_.genFocusStyle)(e)),{[`&${t}-checked`]:{background:e.switchColor,[`&:hover:not(${t}-disabled)`]:{background:e.colorPrimaryHover}},[`&${t}-loading, &${t}-disabled`]:{cursor:"not-allowed",opacity:e.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${t}-rtl`]:{direction:"rtl"}})}})(t),(e=>{let{componentCls:t,trackHeight:a,trackPadding:i,innerMinMargin:n,innerMaxMargin:r,handleSize:o,calc:l}=e,s=`${t}-inner`,d=(0,h.unit)(l(o).add(l(i).mul(2)).equal()),c=(0,h.unit)(l(r).mul(2).equal());return{[t]:{[s]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:r,paddingInlineEnd:n,transition:`padding-inline-start ${e.switchDuration} ease-in-out, padding-inline-end ${e.switchDuration} ease-in-out`,[`${s}-checked, ${s}-unchecked`]:{display:"block",color:e.colorTextLightSolid,fontSize:e.fontSizeSM,transition:`margin-inline-start ${e.switchDuration} ease-in-out, margin-inline-end ${e.switchDuration} ease-in-out`,pointerEvents:"none",minHeight:a},[`${s}-checked`]:{marginInlineStart:`calc(-100% + ${d} - ${c})`,marginInlineEnd:`calc(100% - ${d} + ${c})`},[`${s}-unchecked`]:{marginTop:l(a).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`&${t}-checked ${s}`]:{paddingInlineStart:n,paddingInlineEnd:r,[`${s}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${s}-unchecked`]:{marginInlineStart:`calc(100% - ${d} + ${c})`,marginInlineEnd:`calc(-100% + ${d} - ${c})`}},[`&:not(${t}-disabled):active`]:{[`&:not(${t}-checked) ${s}`]:{[`${s}-unchecked`]:{marginInlineStart:l(i).mul(2).equal(),marginInlineEnd:l(i).mul(-1).mul(2).equal()}},[`&${t}-checked ${s}`]:{[`${s}-checked`]:{marginInlineStart:l(i).mul(-1).mul(2).equal(),marginInlineEnd:l(i).mul(2).equal()}}}}}})(t),(e=>{let{componentCls:t,trackPadding:a,handleBg:i,handleShadow:n,handleSize:r,calc:o}=e,l=`${t}-handle`;return{[t]:{[l]:{position:"absolute",top:a,insetInlineStart:a,width:r,height:r,transition:`all ${e.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:i,borderRadius:o(r).div(2).equal(),boxShadow:n,transition:`all ${e.switchDuration} ease-in-out`,content:'""'}},[`&${t}-checked ${l}`]:{insetInlineStart:`calc(100% - ${(0,h.unit)(o(r).add(a).equal())})`},[`&:not(${t}-disabled):active`]:{[`${l}::before`]:{insetInlineEnd:e.switchHandleActiveInset,insetInlineStart:0},[`&${t}-checked ${l}::before`]:{insetInlineEnd:0,insetInlineStart:e.switchHandleActiveInset}}}}})(t),(e=>{let{componentCls:t,handleSize:a,calc:i}=e;return{[t]:{[`${t}-loading-icon${e.iconCls}`]:{position:"relative",top:i(i(a).sub(e.fontSize)).div(2).equal(),color:e.switchLoadingIconColor,verticalAlign:"top"},[`&${t}-checked ${t}-loading-icon`]:{color:e.switchColor}}}})(t),(e=>{let{componentCls:t,trackHeightSM:a,trackPadding:i,trackMinWidthSM:n,innerMinMarginSM:r,innerMaxMarginSM:o,handleSizeSM:l,calc:s}=e,d=`${t}-inner`,c=(0,h.unit)(s(l).add(s(i).mul(2)).equal()),u=(0,h.unit)(s(o).mul(2).equal());return{[t]:{[`&${t}-small`]:{minWidth:n,height:a,lineHeight:(0,h.unit)(a),[`${t}-inner`]:{paddingInlineStart:o,paddingInlineEnd:r,[`${d}-checked, ${d}-unchecked`]:{minHeight:a},[`${d}-checked`]:{marginInlineStart:`calc(-100% + ${c} - ${u})`,marginInlineEnd:`calc(100% - ${c} + ${u})`},[`${d}-unchecked`]:{marginTop:s(a).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`${t}-handle`]:{width:l,height:l},[`${t}-loading-icon`]:{top:s(s(l).sub(e.switchLoadingIconSize)).div(2).equal(),fontSize:e.switchLoadingIconSize},[`&${t}-checked`]:{[`${t}-inner`]:{paddingInlineStart:r,paddingInlineEnd:o,[`${d}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${d}-unchecked`]:{marginInlineStart:`calc(100% - ${c} + ${u})`,marginInlineEnd:`calc(-100% + ${c} - ${u})`}},[`${t}-handle`]:{insetInlineStart:`calc(100% - ${(0,h.unit)(s(l).add(i).equal())})`}},[`&:not(${t}-disabled):active`]:{[`&:not(${t}-checked) ${d}`]:{[`${d}-unchecked`]:{marginInlineStart:s(e.marginXXS).div(2).equal(),marginInlineEnd:s(e.marginXXS).mul(-1).div(2).equal()}},[`&${t}-checked ${d}`]:{[`${d}-checked`]:{marginInlineStart:s(e.marginXXS).mul(-1).div(2).equal(),marginInlineEnd:s(e.marginXXS).div(2).equal()}}}}}}})(t)]},e=>{let{fontSize:t,lineHeight:a,controlHeight:i,colorWhite:n}=e,r=t*a,o=i/2,l=r-4,s=o-4;return{trackHeight:r,trackHeightSM:o,trackMinWidth:2*l+8,trackMinWidthSM:2*s+4,trackPadding:2,handleBg:n,handleSize:l,handleSizeSM:s,handleShadow:`0 2px 4px 0 ${new b.FastColor("#00230b").setA(.2).toRgbString()}`,innerMinMargin:l/2,innerMaxMargin:l+2+4,innerMinMarginSM:s/2,innerMaxMarginSM:s+2+4}});var C=function(e,t){var a={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(a[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,i=Object.getOwnPropertySymbols(e);n<i.length;n++)0>t.indexOf(i[n])&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(a[i[n]]=e[i[n]]);return a};let w=t.forwardRef((e,n)=>{let{prefixCls:r,size:o,disabled:l,loading:d,className:c,rootClassName:h,style:b,checked:_,value:$,defaultChecked:v,defaultValue:w,onChange:y}=e,k=C(e,["prefixCls","size","disabled","loading","className","rootClassName","style","checked","value","defaultChecked","defaultValue","onChange"]),[O,E]=(0,s.default)(!1,{value:null!=_?_:$,defaultValue:null!=v?v:w}),{getPrefixCls:S,direction:I,switch:j}=t.useContext(m.ConfigContext),N=t.useContext(p.default),T=(null!=l?l:N)||d,M=S("switch",r),z=t.createElement("div",{className:`${M}-handle`},d&&t.createElement(a.default,{className:`${M}-loading-icon`})),[P,R,A]=x(M),B=(0,f.default)(o),q=(0,i.default)(null==j?void 0:j.className,{[`${M}-small`]:"small"===B,[`${M}-loading`]:d,[`${M}-rtl`]:"rtl"===I},c,h,R,A),L=Object.assign(Object.assign({},null==j?void 0:j.style),b);return P(t.createElement(g.default,{component:"Switch",disabled:T},t.createElement(u,Object.assign({},k,{checked:O,onChange:(...e)=>{E(e[0]),null==y||y.apply(void 0,e)},prefixCls:M,className:q,style:L,disabled:T,ref:n,loadingIcon:z}))))});w.__ANT_SWITCH=!0,e.s(["Switch",0,w],790848)},56456,e=>{"use strict";var t=e.i(739295);e.s(["LoadingOutlined",()=>t.default])},312361,e=>{"use strict";e.i(247167);var t=e.i(271645),a=e.i(343794),i=e.i(242064),n=e.i(517455);e.i(296059);var r=e.i(915654),o=e.i(183293),l=e.i(246422),s=e.i(838378);let d=(0,l.genStyleHooks)("Divider",e=>{let t=(0,s.mergeToken)(e,{dividerHorizontalWithTextGutterMargin:e.margin,sizePaddingEdgeHorizontal:0});return[(e=>{let{componentCls:t,sizePaddingEdgeHorizontal:a,colorSplit:i,lineWidth:n,textPaddingInline:l,orientationMargin:s,verticalMarginInline:d}=e;return{[t]:Object.assign(Object.assign({},(0,o.resetComponent)(e)),{borderBlockStart:`${(0,r.unit)(n)} solid ${i}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:d,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:`${(0,r.unit)(n)} solid ${i}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${(0,r.unit)(e.marginLG)} 0`},[`&-horizontal${t}-with-text`]:{display:"flex",alignItems:"center",margin:`${(0,r.unit)(e.dividerHorizontalWithTextGutterMargin)} 0`,color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${i}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${(0,r.unit)(n)} solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${t}-with-text-start`]:{"&::before":{width:`calc(${s} * 100%)`},"&::after":{width:`calc(100% - ${s} * 100%)`}},[`&-horizontal${t}-with-text-end`]:{"&::before":{width:`calc(100% - ${s} * 100%)`},"&::after":{width:`calc(${s} * 100%)`}},[`${t}-inner-text`]:{display:"inline-block",paddingBlock:0,paddingInline:l},"&-dashed":{background:"none",borderColor:i,borderStyle:"dashed",borderWidth:`${(0,r.unit)(n)} 0 0`},[`&-horizontal${t}-with-text${t}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${t}-dashed`]:{borderInlineStartWidth:n,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},"&-dotted":{background:"none",borderColor:i,borderStyle:"dotted",borderWidth:`${(0,r.unit)(n)} 0 0`},[`&-horizontal${t}-with-text${t}-dotted`]:{"&::before, &::after":{borderStyle:"dotted none none"}},[`&-vertical${t}-dotted`]:{borderInlineStartWidth:n,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${t}-with-text`]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize},[`&-horizontal${t}-with-text-start${t}-no-default-orientation-margin-start`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${t}-inner-text`]:{paddingInlineStart:a}},[`&-horizontal${t}-with-text-end${t}-no-default-orientation-margin-end`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${t}-inner-text`]:{paddingInlineEnd:a}}})}})(t),(e=>{let{componentCls:t}=e;return{[t]:{"&-horizontal":{[`&${t}`]:{"&-sm":{marginBlock:e.marginXS},"&-md":{marginBlock:e.margin}}}}}})(t)]},e=>({textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:e.marginXS}),{unitless:{orientationMargin:!0}});var c=function(e,t){var a={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(a[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,i=Object.getOwnPropertySymbols(e);n<i.length;n++)0>t.indexOf(i[n])&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(a[i[n]]=e[i[n]]);return a};let u={small:"sm",middle:"md"};e.s(["Divider",0,e=>{let{getPrefixCls:r,direction:o,className:l,style:s}=(0,i.useComponentConfig)("divider"),{prefixCls:g,type:m="horizontal",orientation:p="center",orientationMargin:f,className:h,rootClassName:b,children:_,dashed:$,variant:v="solid",plain:x,style:C,size:w}=e,y=c(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","variant","plain","style","size"]),k=r("divider",g),[O,E,S]=d(k),I=u[(0,n.default)(w)],j=!!_,N=t.useMemo(()=>"left"===p?"rtl"===o?"end":"start":"right"===p?"rtl"===o?"start":"end":p,[o,p]),T="start"===N&&null!=f,M="end"===N&&null!=f,z=(0,a.default)(k,l,E,S,`${k}-${m}`,{[`${k}-with-text`]:j,[`${k}-with-text-${N}`]:j,[`${k}-dashed`]:!!$,[`${k}-${v}`]:"solid"!==v,[`${k}-plain`]:!!x,[`${k}-rtl`]:"rtl"===o,[`${k}-no-default-orientation-margin-start`]:T,[`${k}-no-default-orientation-margin-end`]:M,[`${k}-${I}`]:!!I},h,b),P=t.useMemo(()=>"number"==typeof f?f:/^\d+$/.test(f)?Number(f):f,[f]);return O(t.createElement("div",Object.assign({className:z,style:Object.assign(Object.assign({},s),C)},y,{role:"separator"}),_&&"vertical"!==m&&t.createElement("span",{className:`${k}-inner-text`,style:{marginInlineStart:T?P:void 0,marginInlineEnd:M?P:void 0}},_)))}],312361)},282786,836938,310730,829672,e=>{"use strict";e.i(247167);var t=e.i(271645),a=e.i(343794),i=e.i(914949),n=e.i(404948);let r=e=>e?"function"==typeof e?e():e:null;e.s(["getRenderPropValue",0,r],836938);var o=e.i(613541),l=e.i(763731),s=e.i(242064),d=e.i(491816);e.i(793154);var c=e.i(880476),u=e.i(183293),g=e.i(717356),m=e.i(320560),p=e.i(307358),f=e.i(246422),h=e.i(838378),b=e.i(617933);let _=(0,f.genStyleHooks)("Popover",e=>{let{colorBgElevated:t,colorText:a}=e,i=(0,h.mergeToken)(e,{popoverBg:t,popoverColor:a});return[(e=>{let{componentCls:t,popoverColor:a,titleMinWidth:i,fontWeightStrong:n,innerPadding:r,boxShadowSecondary:o,colorTextHeading:l,borderRadiusLG:s,zIndexPopup:d,titleMarginBottom:c,colorBgElevated:g,popoverBg:p,titleBorderBottom:f,innerContentPadding:h,titlePadding:b}=e;return[{[t]:Object.assign(Object.assign({},(0,u.resetComponent)(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:d,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text","--valid-offset-x":"var(--arrow-offset-horizontal, var(--arrow-x))",transformOrigin:"var(--valid-offset-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":g,width:"max-content",maxWidth:"100vw","&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${t}-content`]:{position:"relative"},[`${t}-inner`]:{backgroundColor:p,backgroundClip:"padding-box",borderRadius:s,boxShadow:o,padding:r},[`${t}-title`]:{minWidth:i,marginBottom:c,color:l,fontWeight:n,borderBottom:f,padding:b},[`${t}-inner-content`]:{color:a,padding:h}})},(0,m.default)(e,"var(--antd-arrow-background-color)"),{[`${t}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block",[`${t}-content`]:{display:"inline-block"}}}]})(i),(e=>{let{componentCls:t}=e;return{[t]:b.PresetColors.map(a=>{let i=e[`${a}6`];return{[`&${t}-${a}`]:{"--antd-arrow-background-color":i,[`${t}-inner`]:{backgroundColor:i},[`${t}-arrow`]:{background:"transparent"}}}})}})(i),(0,g.initZoomMotion)(i,"zoom-big")]},e=>{let{lineWidth:t,controlHeight:a,fontHeight:i,padding:n,wireframe:r,zIndexPopupBase:o,borderRadiusLG:l,marginXS:s,lineType:d,colorSplit:c,paddingSM:u}=e,g=a-i;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:o+30},(0,p.getArrowToken)(e)),(0,m.getArrowOffsetToken)({contentRadius:l,limitVerticalRadius:!0})),{innerPadding:12*!r,titleMarginBottom:r?0:s,titlePadding:r?`${g/2}px ${n}px ${g/2-t}px`:0,titleBorderBottom:r?`${t}px ${d} ${c}`:"none",innerContentPadding:r?`${u}px ${n}px`:0})},{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]});var $=function(e,t){var a={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(a[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,i=Object.getOwnPropertySymbols(e);n<i.length;n++)0>t.indexOf(i[n])&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(a[i[n]]=e[i[n]]);return a};let v=({title:e,content:a,prefixCls:i})=>e||a?t.createElement(t.Fragment,null,e&&t.createElement("div",{className:`${i}-title`},e),a&&t.createElement("div",{className:`${i}-inner-content`},a)):null,x=e=>{let{hashId:i,prefixCls:n,className:o,style:l,placement:s="top",title:d,content:u,children:g}=e,m=r(d),p=r(u),f=(0,a.default)(i,n,`${n}-pure`,`${n}-placement-${s}`,o);return t.createElement("div",{className:f,style:l},t.createElement("div",{className:`${n}-arrow`}),t.createElement(c.Popup,Object.assign({},e,{className:i,prefixCls:n}),g||t.createElement(v,{prefixCls:n,title:m,content:p})))},C=e=>{let{prefixCls:i,className:n}=e,r=$(e,["prefixCls","className"]),{getPrefixCls:o}=t.useContext(s.ConfigContext),l=o("popover",i),[d,c,u]=_(l);return d(t.createElement(x,Object.assign({},r,{prefixCls:l,hashId:c,className:(0,a.default)(n,u)})))};e.s(["Overlay",0,v,"default",0,C],310730);var w=function(e,t){var a={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(a[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,i=Object.getOwnPropertySymbols(e);n<i.length;n++)0>t.indexOf(i[n])&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(a[i[n]]=e[i[n]]);return a};let y=t.forwardRef((e,c)=>{var u,g;let{prefixCls:m,title:p,content:f,overlayClassName:h,placement:b="top",trigger:$="hover",children:x,mouseEnterDelay:C=.1,mouseLeaveDelay:y=.1,onOpenChange:k,overlayStyle:O={},styles:E,classNames:S}=e,I=w(e,["prefixCls","title","content","overlayClassName","placement","trigger","children","mouseEnterDelay","mouseLeaveDelay","onOpenChange","overlayStyle","styles","classNames"]),{getPrefixCls:j,className:N,style:T,classNames:M,styles:z}=(0,s.useComponentConfig)("popover"),P=j("popover",m),[R,A,B]=_(P),q=j(),L=(0,a.default)(h,A,B,N,M.root,null==S?void 0:S.root),H=(0,a.default)(M.body,null==S?void 0:S.body),[D,W]=(0,i.default)(!1,{value:null!=(u=e.open)?u:e.visible,defaultValue:null!=(g=e.defaultOpen)?g:e.defaultVisible}),X=(e,t)=>{W(e,!0),null==k||k(e,t)},Y=r(p),G=r(f);return R(t.createElement(d.default,Object.assign({placement:b,trigger:$,mouseEnterDelay:C,mouseLeaveDelay:y},I,{prefixCls:P,classNames:{root:L,body:H},styles:{root:Object.assign(Object.assign(Object.assign(Object.assign({},z.root),T),O),null==E?void 0:E.root),body:Object.assign(Object.assign({},z.body),null==E?void 0:E.body)},ref:c,open:D,onOpenChange:e=>{X(e)},overlay:Y||G?t.createElement(v,{prefixCls:P,title:Y,content:G}):null,transitionName:(0,o.getTransitionName)(q,"zoom-big",I.transitionName),"data-popover-inject":!0}),(0,l.cloneElement)(x,{onKeyDown:e=>{var a,i;(0,t.isValidElement)(x)&&(null==(i=null==x?void 0:(a=x.props).onKeyDown)||i.call(a,e)),e.keyCode===n.default.ESC&&X(!1,e)}})))});y._InternalPanelDoNotUseOrYouWillBeFired=C,e.s(["default",0,y],829672),e.s(["Popover",0,y],282786)},771674,e=>{"use strict";e.i(247167);var t=e.i(931067),a=e.i(271645);let i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"};var n=e.i(9583),r=a.forwardRef(function(e,r){return a.createElement(n.default,(0,t.default)({},e,{ref:r,icon:i}))});e.s(["UserOutlined",0,r],771674)},755151,e=>{"use strict";var t=e.i(247153);e.s(["DownOutlined",()=>t.default])},602073,e=>{"use strict";e.i(247167);var t=e.i(931067),a=e.i(271645);let i={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64L128 192v384c0 212.1 171.9 384 384 384s384-171.9 384-384V192L512 64zm312 512c0 172.3-139.7 312-312 312S200 748.3 200 576V246l312-110 312 110v330z"}},{tag:"path",attrs:{d:"M378.4 475.1a35.91 35.91 0 00-50.9 0 35.91 35.91 0 000 50.9l129.4 129.4 2.1 2.1a33.98 33.98 0 0048.1 0L730.6 434a33.98 33.98 0 000-48.1l-2.8-2.8a33.98 33.98 0 00-48.1 0L483 579.7 378.4 475.1z"}}]},name:"safety",theme:"outlined"};var n=e.i(9583),r=a.forwardRef(function(e,r){return a.createElement(n.default,(0,t.default)({},e,{ref:r,icon:i}))});e.s(["SafetyOutlined",0,r],602073)},818581,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"useMergedRef",{enumerable:!0,get:function(){return n}});let i=e.r(271645);function n(e,t){let a=(0,i.useRef)(null),n=(0,i.useRef)(null);return(0,i.useCallback)(i=>{if(null===i){let e=a.current;e&&(a.current=null,e());let t=n.current;t&&(n.current=null,t())}else e&&(a.current=r(e,i)),t&&(n.current=r(t,i))},[e,t])}function r(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let a=e(t);return"function"==typeof a?a:()=>e(null)}}("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),t.exports=a.default)},166406,e=>{"use strict";var t=e.i(190144);e.s(["CopyOutlined",()=>t.default])},447566,e=>{"use strict";e.i(247167);var t=e.i(931067),a=e.i(271645);let i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"};var n=e.i(9583),r=a.forwardRef(function(e,r){return a.createElement(n.default,(0,t.default)({},e,{ref:r,icon:i}))});e.s(["ArrowLeftOutlined",0,r],447566)},492030,e=>{"use strict";var t=e.i(121229);e.s(["CheckOutlined",()=>t.default])},596239,e=>{"use strict";e.i(247167);var t=e.i(931067),a=e.i(271645);let i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"}}]},name:"link",theme:"outlined"};var n=e.i(9583),r=a.forwardRef(function(e,r){return a.createElement(n.default,(0,t.default)({},e,{ref:r,icon:i}))});e.s(["LinkOutlined",0,r],596239)},339019,865361,e=>{"use strict";var t,a,i=((t={}).AUDIO_SPEECH="audio_speech",t.AUDIO_TRANSCRIPTION="audio_transcription",t.IMAGE_GENERATION="image_generation",t.VIDEO_GENERATION="video_generation",t.CHAT="chat",t.RESPONSES="responses",t.IMAGE_EDITS="image_edits",t.ANTHROPIC_MESSAGES="anthropic_messages",t.EMBEDDING="embedding",t),n=((a={}).IMAGE="image",a.VIDEO="video",a.CHAT="chat",a.RESPONSES="responses",a.IMAGE_EDITS="image_edits",a.ANTHROPIC_MESSAGES="anthropic_messages",a.EMBEDDINGS="embeddings",a.SPEECH="speech",a.TRANSCRIPTION="transcription",a.A2A_AGENTS="a2a_agents",a.MCP="mcp",a.REALTIME="realtime",a.INTERACTIONS="interactions",a);let r={image_generation:"image",video_generation:"video",chat:"chat",responses:"responses",image_edits:"image_edits",anthropic_messages:"anthropic_messages",audio_speech:"speech",audio_transcription:"transcription",embedding:"embeddings"};e.s(["EndpointType",()=>n,"getEndpointType",0,e=>{if(console.log("getEndpointType:",e),Object.values(i).includes(e)){let t=r[e];return console.log("endpointType:",t),t}return"chat"}],865361),e.s(["generateCodeSnippet",0,e=>{let t,{apiKeySource:a,accessToken:i,apiKey:r,inputMessage:o,chatHistory:l,selectedTags:s,selectedVectorStores:d,selectedGuardrails:c,selectedPolicies:u,selectedMCPServers:g,mcpServers:m,mcpServerToolRestrictions:p,selectedVoice:f,endpointType:h,selectedModel:b,selectedSdk:_,proxySettings:$}=e,v="session"===a?i:r,x=window.location.origin,C=$?.LITELLM_UI_API_DOC_BASE_URL;C&&C.trim()?x=C:$?.PROXY_BASE_URL&&(x=$.PROXY_BASE_URL);let w=o||"Your prompt here",y=w.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n"),k=l.filter(e=>!e.isImage).map(({role:e,content:t})=>({role:e,content:t})),O={};s.length>0&&(O.tags=s),d.length>0&&(O.vector_stores=d),c.length>0&&(O.guardrails=c),u.length>0&&(O.policies=u);let E=b||"your-model-name",S="azure"===_?`import openai

client = openai.AzureOpenAI(
	api_key="${v||"YOUR_LITELLM_API_KEY"}",
	azure_endpoint="${x}",
	api_version="2024-02-01"
)`:`import openai

client = openai.OpenAI(
	api_key="${v||"YOUR_LITELLM_API_KEY"}",
	base_url="${x}"
)`;switch(h){case n.CHAT:{let e=Object.keys(O).length>0,a="";if(e){let e=JSON.stringify({metadata:O},null,2).split("\n").map(e=>" ".repeat(4)+e).join("\n").trim();a=`,
    extra_body=${e}`}let i=k.length>0?k:[{role:"user",content:w}];t=`
import base64

# Helper function to encode images to base64
def encode_image(image_path):
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode('utf-8')

# Example with text only
response = client.chat.completions.create(
    model="${E}",
    messages=${JSON.stringify(i,null,4)}${a}
)

print(response)

# Example with image or PDF (uncomment and provide file path to use)
# base64_file = encode_image("path/to/your/file.jpg")  # or .pdf
# response_with_file = client.chat.completions.create(
#     model="${E}",
#     messages=[
#         {
#             "role": "user",
#             "content": [
#                 {
#                     "type": "text",
#                     "text": "${y}"
#                 },
#                 {
#                     "type": "image_url",
#                     "image_url": {
#                         "url": f"data:image/jpeg;base64,{base64_file}"  # or data:application/pdf;base64,{base64_file}
#                     }
#                 }
#             ]
#         }
#     ]${a}
# )
# print(response_with_file)
`;break}case n.RESPONSES:{let e=Object.keys(O).length>0,a="";if(e){let e=JSON.stringify({metadata:O},null,2).split("\n").map(e=>" ".repeat(4)+e).join("\n").trim();a=`,
    extra_body=${e}`}let i=k.length>0?k:[{role:"user",content:w}];t=`
import base64

# Helper function to encode images to base64
def encode_image(image_path):
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode('utf-8')

# Example with text only
response = client.responses.create(
    model="${E}",
    input=${JSON.stringify(i,null,4)}${a}
)

print(response.output_text)

# Example with image or PDF (uncomment and provide file path to use)
# base64_file = encode_image("path/to/your/file.jpg")  # or .pdf
# response_with_file = client.responses.create(
#     model="${E}",
#     input=[
#         {
#             "role": "user",
#             "content": [
#                 {"type": "input_text", "text": "${y}"},
#                 {
#                     "type": "input_image",
#                     "image_url": f"data:image/jpeg;base64,{base64_file}",  # or data:application/pdf;base64,{base64_file}
#                 },
#             ],
#         }
#     ]${a}
# )
# print(response_with_file.output_text)
`;break}case n.IMAGE:t="azure"===_?`
# NOTE: The Azure SDK does not have a direct equivalent to the multi-modal 'responses.create' method shown for OpenAI.
# This snippet uses 'client.images.generate' and will create a new image based on your prompt.
# It does not use the uploaded image, as 'client.images.generate' does not support image inputs in this context.
import os
import requests
import json
import time
from PIL import Image

result = client.images.generate(
	model="${E}",
	prompt="${o}",
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
prompt = "${y}"

# Encode images to base64
base64_image1 = encode_image("body-lotion.png")
base64_image2 = encode_image("soap.png")

# Create file IDs
file_id1 = create_file("body-lotion.png")
file_id2 = create_file("incense-kit.png")

response = client.responses.create(
	model="${E}",
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
`;break;case n.IMAGE_EDITS:t="azure"===_?`
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
prompt = "${y}"

# Encode images to base64
base64_image1 = encode_image("body-lotion.png")
base64_image2 = encode_image("soap.png")

# Create file IDs
file_id1 = create_file("body-lotion.png")
file_id2 = create_file("incense-kit.png")

response = client.responses.create(
	model="${E}",
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
prompt = "${y}"

# Encode images to base64
base64_image1 = encode_image("body-lotion.png")
base64_image2 = encode_image("soap.png")

# Create file IDs
file_id1 = create_file("body-lotion.png")
file_id2 = create_file("incense-kit.png")

response = client.responses.create(
	model="${E}",
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
`;break;case n.EMBEDDINGS:t=`
response = client.embeddings.create(
	input="${o||"Your string here"}",
	model="${E}",
	encoding_format="base64" # or "float"
)

print(response.data[0].embedding)
`;break;case n.TRANSCRIPTION:t=`
# Open the audio file
audio_file = open("path/to/your/audio/file.mp3", "rb")

# Make the transcription request
response = client.audio.transcriptions.create(
	model="${E}",
	file=audio_file${o?`,
	prompt="${o.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}"`:""}
)

print(response.text)
`;break;case n.SPEECH:t=`
# Make the text-to-speech request
response = client.audio.speech.create(
	model="${E}",
	input="${o||"Your text to convert to speech here"}",
	voice="${f}"  # Options: alloy, ash, ballad, coral, echo, fable, nova, onyx, sage, shimmer
)

# Save the audio to a file
output_filename = "output_speech.mp3"
response.stream_to_file(output_filename)
print(f"Audio saved to {output_filename}")

# Optional: Customize response format and speed
# response = client.audio.speech.create(
#     model="${E}",
#     input="${o||"Your text to convert to speech here"}",
#     voice="alloy",
#     response_format="mp3",  # Options: mp3, opus, aac, flac, wav, pcm
#     speed=1.0  # Range: 0.25 to 4.0
# )
# response.stream_to_file("output_speech.mp3")
`;break;default:t="\n# Code generation for this endpoint is not implemented yet."}return`${S}
${t}`}],339019)}]);