"use strict";(self.webpackChunktodo_react=self.webpackChunktodo_react||[]).push([[712],{4712:(t,e,a)=>{a.d(e,{A:()=>u,x:()=>h});var r=a(7294),o=a(3935);!function(t,{insertAt:e}={}){if(!t||"undefined"==typeof document)return;let a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===e&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}('html[dir=ltr],[data-sonner-toaster][dir=ltr]{--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}html[dir=rtl],[data-sonner-toaster][dir=rtl]{--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}[data-sonner-toaster][data-x-position=right]{right:max(var(--offset),env(safe-area-inset-right))}[data-sonner-toaster][data-x-position=left]{left:max(var(--offset),env(safe-area-inset-left))}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translate(-50%)}[data-sonner-toaster][data-y-position=top]{top:max(var(--offset),env(safe-area-inset-top))}[data-sonner-toaster][data-y-position=bottom]{bottom:max(var(--offset),env(safe-area-inset-bottom))}[data-sonner-toast]{--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;will-change:transform,opacity,height;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}[data-sonner-toast][data-y-position=top]{top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}[data-sonner-toast] [data-description]{font-weight:400;line-height:1.4;color:inherit}[data-sonner-toast] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast] [data-icon]>*{flex-shrink:0}[data-sonner-toast] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;transition:opacity .4s,box-shadow .2s}[data-sonner-toast] [data-button]:focus-visible{box-shadow:0 0 0 2px #0006}[data-sonner-toast] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toast][data-theme=dark] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;opacity:0;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]:focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}[data-sonner-toast] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast]:hover [data-close-button]{opacity:1}[data-sonner-toast]:focus [data-close-button]{opacity:1}[data-sonner-toast]:focus-within [data-close-button]{opacity:1}[data-sonner-toast]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]:before{content:"";position:absolute;left:0;right:0;height:100%}[data-sonner-toast][data-y-position=top][data-swiping=true]:before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]:before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]:before{content:"";position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast]:after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y: translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale: var(--toasts-before) * .05 + 1;--y: translateY( calc(var(--lift-amount) * var(--toasts-before)) ) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y: translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y: translateY( calc(var(--lift) * var(--offset) + var(--lift) * -100%) );opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]:before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - 32px)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true] [data-sonner-toast][data-type=success],[data-rich-colors=true] [data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true] [data-sonner-toast][data-type=error],[data-rich-colors=true] [data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}\n');var s=Array(12).fill(0),n=({visible:t})=>r.createElement("div",{className:"sonner-loading-wrapper","data-visible":t},r.createElement("div",{className:"sonner-spinner"},s.map(((t,e)=>r.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${e}`}))))),i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},r.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},r.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),d=0,c=new class{constructor(){this.subscribe=t=>(this.subscribers.push(t),()=>{let e=this.subscribers.indexOf(t);this.subscribers.splice(e,1)}),this.publish=t=>{this.subscribers.forEach((e=>e(t)))},this.addToast=t=>{this.publish(t),this.toasts=[...this.toasts,t]},this.create=t=>{var e;let{message:a,...r}=t,o="number"==typeof(null==t?void 0:t.id)||(null==(e=t.id)?void 0:e.length)>0?t.id:d++,s=this.toasts.find((t=>t.id===o)),n=void 0===t.dismissible||t.dismissible;return s?this.toasts=this.toasts.map((e=>e.id===o?(this.publish({...e,...t,id:o,title:a}),{...e,...t,id:o,dismissible:n,title:a}):e)):this.addToast({title:a,...r,dismissible:n,id:o}),o},this.dismiss=t=>(t||this.toasts.forEach((t=>{this.subscribers.forEach((e=>e({id:t.id,dismiss:!0})))})),this.subscribers.forEach((e=>e({id:t,dismiss:!0}))),t),this.message=(t,e)=>this.create({...e,message:t}),this.error=(t,e)=>this.create({...e,message:t,type:"error"}),this.success=(t,e)=>this.create({...e,type:"success",message:t}),this.loading=(t,e)=>this.create({...e,type:"loading",message:t}),this.promise=(t,e)=>{let a=this.create({...e,promise:t,type:"loading",message:e.loading});return(t instanceof Promise?t:t()).then((t=>{let r="function"==typeof e.success?e.success(t):e.success;this.create({id:a,type:"success",message:r})})).catch((t=>{let r="function"==typeof e.error?e.error(t):e.error;this.create({id:a,type:"error",message:r})})).finally(e.finally),a},this.custom=(t,e)=>{let a=(null==e?void 0:e.id)||d++;this.publish({jsx:t(a),id:a,...e})},this.subscribers=[],this.toasts=[]}},u=Object.assign(((t,e)=>{let a=(null==e?void 0:e.id)||d++;return c.addToast({title:t,...e,id:a}),a}),{success:c.success,error:c.error,custom:c.custom,message:c.message,promise:c.promise,dismiss:c.dismiss,loading:c.loading}),m=3,p=t=>{let{invert:e,toast:a,interacting:o,setHeights:s,visibleToasts:d,heights:c,index:u,toasts:m,expanded:p,removeToast:f,closeButton:h,style:g,className:b="",descriptionClassName:v="",duration:y,position:x,expandByDefault:w}=t,[E,k]=r.useState(!1),[C,T]=r.useState(!1),[M,N]=r.useState(!1),[S,z]=r.useState(!1),[Y,R]=r.useState(0),[I,B]=r.useState(0),j=r.useRef(null),D=r.useRef(null),P=0===u,A=u+1<=d,L=a.type,$=!1!==a.dismissible,U=a.className||"",H=a.descriptionClassName||"",O=r.useMemo((()=>c.findIndex((t=>t.toastId===a.id))||0),[c,a.id]),F=r.useMemo((()=>a.duration||y||4e3),[a.duration,y]),K=r.useRef(0),V=r.useRef(0),X=r.useRef(F),_=r.useRef(0),W=r.useRef(null),[q,G]=x.split("-"),J=r.useMemo((()=>c.reduce(((t,e,a)=>a>=O?t:t+e.height),0)),[c,O]),Q=a.invert||e,Z="loading"===L;V.current=r.useMemo((()=>14*O+J),[O,J]),r.useEffect((()=>{k(!0)}),[]),r.useLayoutEffect((()=>{if(!E)return;let t=D.current,e=t.style.height;t.style.height="auto";let r=t.getBoundingClientRect().height;t.style.height=e,B(r),s((t=>t.find((t=>t.toastId===a.id))?t.map((t=>t.toastId===a.id?{...t,height:r}:t)):[{toastId:a.id,height:r},...t]))}),[E,a.title,a.description,s,a.id]);let tt=r.useCallback((()=>{T(!0),R(V.current),s((t=>t.filter((t=>t.toastId!==a.id)))),setTimeout((()=>{f(a)}),200)}),[a,f,s,V]);return r.useEffect((()=>{if(a.promise&&"loading"===L||a.duration===1/0)return;let t;return p||o?(()=>{if(_.current<K.current){let t=(new Date).getTime()-K.current;X.current=X.current-t}_.current=(new Date).getTime()})():(K.current=(new Date).getTime(),t=setTimeout((()=>{var t;null==(t=a.onAutoClose)||t.call(a,a),tt()}),X.current)),()=>clearTimeout(t)}),[p,o,w,a,F,tt,a.promise,L]),r.useEffect((()=>{let t=D.current;if(t){let e=t.getBoundingClientRect().height;return B(e),s((t=>[{toastId:a.id,height:e},...t])),()=>s((t=>t.filter((t=>t.toastId!==a.id))))}}),[s,a.id]),r.useEffect((()=>{a.delete&&tt()}),[tt,a.delete]),r.createElement("li",{"aria-live":a.important?"assertive":"polite","aria-atomic":"true",role:"status",tabIndex:0,ref:D,className:b+" "+U,"data-sonner-toast":"","data-styled":!a.jsx,"data-mounted":E,"data-promise":!!a.promise,"data-removed":C,"data-visible":A,"data-y-position":q,"data-x-position":G,"data-index":u,"data-front":P,"data-swiping":M,"data-dismissible":$,"data-type":L,"data-invert":Q,"data-swipe-out":S,"data-expanded":!!(p||w&&E),style:{"--index":u,"--toasts-before":u,"--z-index":m.length-u,"--offset":`${C?Y:V.current}px`,"--initial-height":w?"auto":`${I}px`,...g,...a.style},onPointerDown:t=>{Z||!$||(j.current=new Date,R(V.current),t.target.setPointerCapture(t.pointerId),"BUTTON"!==t.target.tagName&&(N(!0),W.current={x:t.clientX,y:t.clientY}))},onPointerUp:()=>{var t,e,r,o;if(S||!$)return;W.current=null;let s=Number((null==(t=D.current)?void 0:t.style.getPropertyValue("--swipe-amount").replace("px",""))||0),n=(new Date).getTime()-(null==(e=j.current)?void 0:e.getTime()),i=Math.abs(s)/n;if(Math.abs(s)>=20||i>.11)return R(V.current),null==(r=a.onDismiss)||r.call(a,a),tt(),void z(!0);null==(o=D.current)||o.style.setProperty("--swipe-amount","0px"),N(!1)},onPointerMove:t=>{var e;if(!W.current||!$)return;let a=t.clientY-W.current.y,r=t.clientX-W.current.x,o=("top"===q?Math.min:Math.max)(0,a),s="touch"===t.pointerType?10:2;Math.abs(o)>s?null==(e=D.current)||e.style.setProperty("--swipe-amount",`${a}px`):Math.abs(r)>s&&(W.current=null)}},h&&!a.jsx?r.createElement("button",{"aria-label":"Close toast","data-disabled":Z,"data-close-button":!0,onClick:Z||!$?void 0:()=>{var t;tt(),null==(t=a.onDismiss)||t.call(a,a)}},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},r.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),r.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))):null,a.jsx||r.isValidElement(a.title)?a.jsx||a.title:r.createElement(r.Fragment,null,L||a.icon||a.promise?r.createElement("div",{"data-icon":""},a.promise||"loading"===a.type?r.createElement(n,{visible:"loading"===L}):null,a.icon||(t=>{switch(t){case"success":return i;case"error":return l;default:return null}})(L)):null,r.createElement("div",{"data-content":""},r.createElement("div",{"data-title":""},a.title),a.description?r.createElement("div",{"data-description":"",className:v+H},a.description):null),a.cancel?r.createElement("button",{"data-button":!0,"data-cancel":!0,onClick:()=>{var t;$&&(tt(),null!=(t=a.cancel)&&t.onClick&&a.cancel.onClick())}},a.cancel.label):null,a.action?r.createElement("button",{"data-button":"",onClick:t=>{var e;null==(e=a.action)||e.onClick(t),!t.defaultPrevented&&tt()}},a.action.label):null))};function f(){if("undefined"==typeof window)return"ltr";let t=document.documentElement.getAttribute("dir");return"auto"!==t&&t?t:window.getComputedStyle(document.documentElement).direction}var h=t=>{let{invert:e,position:a="bottom-right",hotkey:s=["altKey","KeyT"],expand:n,closeButton:i,className:l,offset:d,theme:u="light",richColors:h,duration:g,style:b,visibleToasts:v=m,toastOptions:y,dir:x=f()}=t,[w,E]=r.useState([]),k=r.useMemo((()=>Array.from(new Set([a].concat(w.filter((t=>t.position)).map((t=>t.position)))))),[w,a]),[C,T]=r.useState([]),[M,N]=r.useState(!1),[S,z]=r.useState(!1),[Y,R]=r.useState("system"!==u?u:"undefined"!=typeof window&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),I=r.useRef(null),B=s.join("+").replace(/Key/g,"").replace(/Digit/g,""),j=r.useRef(null),D=r.useRef(!1),P=r.useCallback((t=>E((e=>e.filter((({id:e})=>e!==t.id))))),[]);return r.useEffect((()=>c.subscribe((t=>{t.dismiss?E((e=>e.map((e=>e.id===t.id?{...e,delete:!0}:e)))):setTimeout((()=>{o.flushSync((()=>{E((e=>{let a=e.findIndex((e=>e.id===t.id));return-1!==a?[...e.slice(0,a),{...e[a],...t},...e.slice(a+1)]:[t,...e]}))}))}))}))),[]),r.useEffect((()=>{"system"===u?("system"===u&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?R("dark"):R("light")),"undefined"!=typeof window&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(({matches:t})=>{R(t?"dark":"light")}))):R(u)}),[u]),r.useEffect((()=>{w.length<=1&&N(!1)}),[w]),r.useEffect((()=>{let t=t=>{var e,a;s.every((e=>t[e]||t.code===e))&&(N(!0),null==(e=I.current)||e.focus()),"Escape"===t.code&&(document.activeElement===I.current||null!=(a=I.current)&&a.contains(document.activeElement))&&N(!1)};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)}),[s]),r.useEffect((()=>{if(I.current)return()=>{j.current&&(j.current.focus({preventScroll:!0}),j.current=null,D.current=!1)}}),[I.current]),w.length?r.createElement("section",{"aria-label":`Notifications ${B}`,tabIndex:-1},k.map(((t,a)=>{var o;let[s,c]=t.split("-");return r.createElement("ol",{key:t,dir:"auto"===x?f():x,tabIndex:-1,ref:I,className:l,"data-sonner-toaster":!0,"data-theme":Y,"data-rich-colors":h,"data-y-position":s,"data-x-position":c,style:{"--front-toast-height":`${null==(o=C[0])?void 0:o.height}px`,"--offset":"number"==typeof d?`${d}px`:d||"32px","--width":"356px","--gap":"14px",...b},onBlur:t=>{D.current&&!t.currentTarget.contains(t.relatedTarget)&&(D.current=!1,j.current&&(j.current.focus({preventScroll:!0}),j.current=null))},onFocus:t=>{t.target instanceof HTMLElement&&"false"===t.target.dataset.dismissible||D.current||(D.current=!0,j.current=t.relatedTarget)},onMouseEnter:()=>N(!0),onMouseMove:()=>N(!0),onMouseLeave:()=>{S||N(!1)},onPointerDown:t=>{t.target instanceof HTMLElement&&"false"===t.target.dataset.dismissible||z(!0)},onPointerUp:()=>z(!1)},w.filter((e=>!e.position&&0===a||e.position===t)).map(((a,o)=>{var s;return r.createElement(p,{key:a.id,index:o,toast:a,duration:null!=(s=null==y?void 0:y.duration)?s:g,className:null==y?void 0:y.className,descriptionClassName:null==y?void 0:y.descriptionClassName,invert:e,visibleToasts:v,closeButton:i,interacting:S,position:t,style:null==y?void 0:y.style,removeToast:P,toasts:w,heights:C,setHeights:T,expandByDefault:n,expanded:M})})))}))):null}}}]);