(self.webpackChunk=self.webpackChunk||[]).push([[723],{7328:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var s=n(959),a=n(1527);function o(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),o=t.filter((e=>e!==n)),c=n?.props.children;return{mdxAdmonitionTitle:c,rest:o.length>0?(0,a.jsx)(a.Fragment,{children:o}):null}}(e.children),o=e.title??t;return{...e,...o&&{title:o},children:n}}var c=n(5341),i=n(6642),r=n(3888);const l={admonition:"admonition_Nkmq",admonitionHeading:"admonitionHeading_IjXx",admonitionIcon:"admonitionIcon_UtL9",admonitionContent:"admonitionContent_lZFi"};function d(e){let{type:t,className:n,children:s}=e;return(0,a.jsx)("div",{className:(0,c.Z)(r.k.common.admonition,r.k.common.admonitionType(t),l.admonition,n),children:s})}function u(e){let{icon:t,title:n}=e;return(0,a.jsxs)("div",{className:l.admonitionHeading,children:[(0,a.jsx)("span",{className:l.admonitionIcon,children:t}),n]})}function m(e){let{children:t}=e;return t?(0,a.jsx)("div",{className:l.admonitionContent,children:t}):null}function h(e){const{type:t,icon:n,title:s,children:o,className:c}=e;return(0,a.jsxs)(d,{type:t,className:c,children:[s||n?(0,a.jsx)(u,{title:s,icon:n}):null,(0,a.jsx)(m,{children:o})]})}function p(e){return(0,a.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const f={icon:(0,a.jsx)(p,{}),title:(0,a.jsx)(i.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function g(e){return(0,a.jsx)(h,{...f,...e,className:(0,c.Z)("alert alert--secondary",e.className),children:e.children})}function x(e){return(0,a.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const j={icon:(0,a.jsx)(x,{}),title:(0,a.jsx)(i.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function b(e){return(0,a.jsx)(h,{...j,...e,className:(0,c.Z)("alert alert--success",e.className),children:e.children})}function v(e){return(0,a.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const N={icon:(0,a.jsx)(v,{}),title:(0,a.jsx)(i.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function y(e){return(0,a.jsx)(h,{...N,...e,className:(0,c.Z)("alert alert--info",e.className),children:e.children})}function k(e){return(0,a.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const B={icon:(0,a.jsx)(k,{}),title:(0,a.jsx)(i.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function w(e){return(0,a.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const C={icon:(0,a.jsx)(w,{}),title:(0,a.jsx)(i.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const Z={icon:(0,a.jsx)(k,{}),title:(0,a.jsx)(i.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const L={...{note:g,tip:b,info:y,warning:function(e){return(0,a.jsx)(h,{...B,...e,className:(0,c.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,a.jsx)(h,{...C,...e,className:(0,c.Z)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,a.jsx)(g,{title:"secondary",...e}),important:e=>(0,a.jsx)(y,{title:"important",...e}),success:e=>(0,a.jsx)(b,{title:"success",...e}),caution:function(e){return(0,a.jsx)(h,{...Z,...e,className:(0,c.Z)("alert alert--warning",e.className),children:e.children})}}};function E(e){const t=o(e),n=(s=t.type,L[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),L.info));var s;return(0,a.jsx)(n,{...t})}},8504:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});n(959);var s=n(5341),a=n(6642),o=n(3888),c=n(2472);const i={iconEdit:"iconEdit_JPvH"};var r=n(1527);function l(e){let{className:t,...n}=e;return(0,r.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(i.iconEdit,t),"aria-hidden":"true",...n,children:(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function d(e){let{editUrl:t}=e;return(0,r.jsxs)(c.Z,{to:t,className:o.k.common.editThisPage,children:[(0,r.jsx)(l,{}),(0,r.jsx)(a.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var u=n(2614);function m(e){let{lastUpdatedAt:t}=e;const n=new Date(t),s=(0,u.P)({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(n);return(0,r.jsx)(a.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,r.jsx)("b",{children:(0,r.jsx)("time",{dateTime:n.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function h(e){let{lastUpdatedBy:t}=e;return(0,r.jsx)(a.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,r.jsx)("b",{children:t})},children:" by {user}"})}function p(e){let{lastUpdatedAt:t,lastUpdatedBy:n}=e;return(0,r.jsxs)("span",{className:o.k.common.lastUpdated,children:[(0,r.jsx)(a.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,r.jsx)(m,{lastUpdatedAt:t}):"",byUser:n?(0,r.jsx)(h,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const f={lastUpdated:"lastUpdated_FuLm"};function g(e){let{className:t,editUrl:n,lastUpdatedAt:a,lastUpdatedBy:o}=e;return(0,r.jsxs)("div",{className:(0,s.Z)("row",t),children:[(0,r.jsx)("div",{className:"col",children:n&&(0,r.jsx)(d,{editUrl:n})}),(0,r.jsx)("div",{className:(0,s.Z)("col",f.lastUpdated),children:(a||o)&&(0,r.jsx)(p,{lastUpdatedAt:a,lastUpdatedBy:o})})]})}},1121:(e,t,n)=>{"use strict";n.d(t,{Z:()=>ie});var s=n(959),a=n(6225),o=n(3972),c=n(8017),i=n(5341),r=n(9054),l=n(1290);function d(){const{prism:e}=(0,l.L)(),{colorMode:t}=(0,r.I)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var u=n(3888),m=n(7226),h=n.n(m);const p=/title=(?<quote>["'])(?<title>.*?)\1/,f=/\{(?<range>[\d,-]+)\}/,g={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},x={...g,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},j=Object.keys(g);function b(e,t){const n=e.map((e=>{const{start:n,end:s}=x[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${s})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function v(e,t){let n=e.replace(/\n$/,"");const{language:s,magicComments:a,metastring:o}=t;if(o&&f.test(o)){const e=o.match(f).groups.range;if(0===a.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=a[0].className,s=h()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(s),code:n}}if(void 0===s)return{lineClassNames:{},code:n};const c=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return b(["js","jsBlock"],t);case"jsx":case"tsx":return b(["js","jsBlock","jsx"],t);case"html":return b(["js","jsBlock","html"],t);case"python":case"py":case"bash":return b(["bash"],t);case"markdown":case"md":return b(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return b(["tex"],t);case"lua":case"haskell":case"sql":return b(["lua"],t);case"wasm":return b(["wasm"],t);case"vb":case"vba":case"visual-basic":return b(["vb","rem"],t);case"vbnet":return b(["vbnet","rem"],t);case"batch":return b(["rem"],t);case"basic":return b(["rem","f90"],t);case"fsharp":return b(["js","ml"],t);case"ocaml":case"sml":return b(["ml"],t);case"fortran":return b(["f90"],t);case"cobol":return b(["cobol"],t);default:return b(j,t)}}(s,a),i=n.split("\n"),r=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),l=Object.fromEntries(a.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),u=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let h=0;h<i.length;){const e=i[h].match(c);if(!e){h+=1;continue}const t=e.slice(1).find((e=>void 0!==e));l[t]?r[l[t]].range+=`${h},`:d[t]?r[d[t]].start=h:u[t]&&(r[u[t]].range+=`${r[u[t]].start}-${h-1},`),i.splice(h,1)}n=i.join("\n");const m={};return Object.entries(r).forEach((e=>{let[t,{range:n}]=e;h()(n).forEach((e=>{m[e]??=[],m[e].push(t)}))})),{lineClassNames:m,code:n}}const N={codeBlockContainer:"codeBlockContainer__fef"};var y=n(1527);function k(e){let{as:t,...n}=e;const s=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[s,a]=e;const o=t[s];o&&"string"==typeof a&&(n[o]=a)})),n}(d());return(0,y.jsx)(t,{...n,style:s,className:(0,i.Z)(n.className,N.codeBlockContainer,u.k.common.codeBlock)})}const B={codeBlockContent:"codeBlockContent_N48E",codeBlockTitle:"codeBlockTitle_D1AE",codeBlock:"codeBlock__1FR",codeBlockStandalone:"codeBlockStandalone_wx_E",codeBlockLines:"codeBlockLines_d9ER",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_HFMw",buttonGroup:"buttonGroup_k88a"};function w(e){let{children:t,className:n}=e;return(0,y.jsx)(k,{as:"pre",tabIndex:0,className:(0,i.Z)(B.codeBlockStandalone,"thin-scrollbar",n),children:(0,y.jsx)("code",{className:B.codeBlockLines,children:t})})}var C=n(4220);const Z={attributes:!0,characterData:!0,childList:!0,subtree:!0};function L(e,t){const[n,a]=(0,s.useState)(),o=(0,s.useCallback)((()=>{a(e.current?.closest("[role=tabpanel][hidden]"))}),[e,a]);(0,s.useEffect)((()=>{o()}),[o]),function(e,t,n){void 0===n&&(n=Z);const a=(0,C.zX)(t),o=(0,C.Ql)(n);(0,s.useEffect)((()=>{const t=new MutationObserver(a);return e&&t.observe(e,o),()=>t.disconnect()}),[e,a,o])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var E=n(2281);const _={codeLine:"codeLine_jbc8",codeLineNumber:"codeLineNumber_wtml",codeLineContent:"codeLineContent_5gaH"};function T(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:a,getTokenProps:o}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const c=a({line:t,className:(0,i.Z)(n,s&&_.codeLine)}),r=t.map(((e,t)=>(0,y.jsx)("span",{...o({token:e})},t)));return(0,y.jsxs)("span",{...c,children:[s?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("span",{className:_.codeLineNumber}),(0,y.jsx)("span",{className:_.codeLineContent,children:r})]}):r,(0,y.jsx)("br",{})]})}var A=n(6642);function I(e){return(0,y.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,y.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function z(e){return(0,y.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,y.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const U={copyButtonCopied:"copyButtonCopied_QAWi",copyButtonIcons:"copyButtonIcons_l1Vd",copyButtonIcon:"copyButtonIcon_f6YI",copyButtonSuccessIcon:"copyButtonSuccessIcon_jtzh"};function M(e){let{code:t,className:n}=e;const[a,o]=(0,s.useState)(!1),c=(0,s.useRef)(void 0),r=(0,s.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const s=document.createElement("textarea"),a=document.activeElement;s.value=e,s.setAttribute("readonly",""),s.style.contain="strict",s.style.position="absolute",s.style.left="-9999px",s.style.fontSize="12pt";const o=document.getSelection(),c=o.rangeCount>0&&o.getRangeAt(0);n.append(s),s.select(),s.selectionStart=0,s.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch{}s.remove(),c&&(o.removeAllRanges(),o.addRange(c)),a&&a.focus()}(t),o(!0),c.current=window.setTimeout((()=>{o(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),(0,y.jsx)("button",{type:"button","aria-label":a?(0,A.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,A.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,A.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,i.Z)("clean-btn",n,U.copyButton,a&&U.copyButtonCopied),onClick:r,children:(0,y.jsxs)("span",{className:U.copyButtonIcons,"aria-hidden":"true",children:[(0,y.jsx)(I,{className:U.copyButtonIcon}),(0,y.jsx)(z,{className:U.copyButtonSuccessIcon})]})})}function S(e){return(0,y.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,y.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const H={wordWrapButtonIcon:"wordWrapButtonIcon_iVRr",wordWrapButtonEnabled:"wordWrapButtonEnabled_s9py"};function R(e){let{className:t,onClick:n,isEnabled:s}=e;const a=(0,A.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,y.jsx)("button",{type:"button",onClick:n,className:(0,i.Z)("clean-btn",t,s&&H.wordWrapButtonEnabled),"aria-label":a,title:a,children:(0,y.jsx)(S,{className:H.wordWrapButtonIcon,"aria-hidden":"true"})})}function W(e){let{children:t,className:n="",metastring:a,title:o,showLineNumbers:c,language:r}=e;const{prism:{defaultLanguage:u,magicComments:m}}=(0,l.L)(),h=function(e){return e?.toLowerCase()}(r??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??u),f=d(),g=function(){const[e,t]=(0,s.useState)(!1),[n,a]=(0,s.useState)(!1),o=(0,s.useRef)(null),c=(0,s.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),i=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");a(n)}),[o]);return L(o,i),(0,s.useEffect)((()=>{i()}),[e,i]),(0,s.useEffect)((()=>(window.addEventListener("resize",i,{passive:!0}),()=>{window.removeEventListener("resize",i)})),[i]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:c}}(),x=function(e){return e?.match(p)?.groups.title??""}(a)||o,{lineClassNames:j,code:b}=v(t,{metastring:a,language:h,magicComments:m}),N=c??function(e){return Boolean(e?.includes("showLineNumbers"))}(a);return(0,y.jsxs)(k,{as:"div",className:(0,i.Z)(n,h&&!n.includes(`language-${h}`)&&`language-${h}`),children:[x&&(0,y.jsx)("div",{className:B.codeBlockTitle,children:x}),(0,y.jsxs)("div",{className:B.codeBlockContent,children:[(0,y.jsx)(E.y$,{theme:f,code:b,language:h??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:a,getTokenProps:o}=e;return(0,y.jsx)("pre",{tabIndex:0,ref:g.codeBlockRef,className:(0,i.Z)(t,B.codeBlock,"thin-scrollbar"),style:n,children:(0,y.jsx)("code",{className:(0,i.Z)(B.codeBlockLines,N&&B.codeBlockLinesWithNumbering),children:s.map(((e,t)=>(0,y.jsx)(T,{line:e,getLineProps:a,getTokenProps:o,classNames:j[t],showLineNumbers:N},t)))})})}}),(0,y.jsxs)("div",{className:B.buttonGroup,children:[(g.isEnabled||g.isCodeScrollable)&&(0,y.jsx)(R,{className:B.codeButton,onClick:()=>g.toggle(),isEnabled:g.isEnabled}),(0,y.jsx)(M,{className:B.codeButton,code:b})]})]})]})}function P(e){let{children:t,...n}=e;const a=(0,c.Z)(),o=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),i="string"==typeof o?W:w;return(0,y.jsx)(i,{...n,children:o},String(a))}function $(e){return(0,y.jsx)("code",{...e})}var V=n(2472);var D=n(6720),F=n(9878);const O={details:"details_Kjtg",isBrowser:"isBrowser_dkM0",collapsibleContent:"collapsibleContent_TL9Y"};function q(e){return!!e&&("SUMMARY"===e.tagName||q(e.parentElement))}function G(e,t){return!!e&&(e===t||G(e.parentElement,t))}function Q(e){let{summary:t,children:n,...a}=e;(0,D.Z)().collectAnchor(a.id);const o=(0,c.Z)(),r=(0,s.useRef)(null),{collapsed:l,setCollapsed:d}=(0,F.u)({initialState:!a.open}),[u,m]=(0,s.useState)(a.open),h=s.isValidElement(t)?t:(0,y.jsx)("summary",{children:t??"Details"});return(0,y.jsxs)("details",{...a,ref:r,open:u,"data-collapsed":l,className:(0,i.Z)(O.details,o&&O.isBrowser,a.className),onMouseDown:e=>{q(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;q(t)&&G(t,r.current)&&(e.preventDefault(),l?(d(!1),m(!0)):d(!0))},children:[h,(0,y.jsx)(F.z,{lazy:!1,collapsed:l,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{d(e),m(!e)},children:(0,y.jsx)("div",{className:O.collapsibleContent,children:n})})]})}const Y={details:"details_Qs5j"},K="alert alert--info";function X(e){let{...t}=e;return(0,y.jsx)(Q,{...t,className:(0,i.Z)(K,Y.details,t.className)})}function J(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),a=(0,y.jsx)(y.Fragment,{children:t.filter((e=>e!==n))});return(0,y.jsx)(X,{...e,summary:n,children:a})}var ee=n(8355);function te(e){return(0,y.jsx)(ee.Z,{...e})}const ne={containsTaskList:"containsTaskList_xFRb"};function se(e){if(void 0!==e)return(0,i.Z)(e,e?.includes("contains-task-list")&&ne.containsTaskList)}const ae={img:"img_pq0v"};var oe=n(7328);const ce={Head:o.Z,details:J,Details:J,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,y.jsx)($,{...e}):(0,y.jsx)(P,{...e})},a:function(e){return(0,y.jsx)(V.Z,{...e})},pre:function(e){return(0,y.jsx)(y.Fragment,{children:e.children})},ul:function(e){return(0,y.jsx)("ul",{...e,className:se(e.className)})},li:function(e){return(0,D.Z)().collectAnchor(e.id),(0,y.jsx)("li",{...e})},img:function(e){return(0,y.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,i.Z)(t,ae.img))});var t},h1:e=>(0,y.jsx)(te,{as:"h1",...e}),h2:e=>(0,y.jsx)(te,{as:"h2",...e}),h3:e=>(0,y.jsx)(te,{as:"h3",...e}),h4:e=>(0,y.jsx)(te,{as:"h4",...e}),h5:e=>(0,y.jsx)(te,{as:"h5",...e}),h6:e=>(0,y.jsx)(te,{as:"h6",...e}),admonition:oe.Z,mermaid:()=>null};function ie(e){let{children:t}=e;return(0,y.jsx)(a.Z,{components:ce,children:t})}},1640:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});n(959);var s=n(5341),a=n(2472),o=n(1527);function c(e){const{permalink:t,title:n,subLabel:c,isNext:i}=e;return(0,o.jsxs)(a.Z,{className:(0,s.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[c&&(0,o.jsx)("div",{className:"pagination-nav__sublabel",children:c}),(0,o.jsx)("div",{className:"pagination-nav__label",children:n})]})}},1926:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});n(959);var s=n(5341),a=n(6642),o=n(2472);const c={tag:"tag_ouvE",tagRegular:"tagRegular_gOv2",tagWithCount:"tagWithCount_uHPq"};var i=n(1527);function r(e){let{permalink:t,label:n,count:a}=e;return(0,i.jsxs)(o.Z,{href:t,className:(0,s.Z)(c.tag,a?c.tagWithCount:c.tagRegular),children:[n,a&&(0,i.jsx)("span",{children:a})]})}const l={tags:"tags_LjPK",tag:"tag_BcLA"};function d(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(a.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,s.Z)(l.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:n}=e;return(0,i.jsx)("li",{className:l.tag,children:(0,i.jsx)(r,{label:t,permalink:n})},n)}))})]})}},2614:(e,t,n)=>{"use strict";n.d(t,{P:()=>a});var s=n(9874);function a(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,s.Z)(),n=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,s.Z)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:n,...e})}},7226:(e,t)=>{function n(e){let t,n=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,a,o]=t;if(s&&o){s=parseInt(s),o=parseInt(o);const e=s<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=s;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},6225:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i,a:()=>c});var s=n(959);const a={},o=s.createContext(a);function c(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);