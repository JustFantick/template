(self.webpackChunktodo_react=self.webpackChunktodo_react||[]).push([[234],{8630:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>R});var i=n(7294),r=n(3379),s=n.n(r),a=n(7795),o=n.n(a),l=n(569),d=n.n(l),c=n(3565),u=n.n(c),m=n(9216),v=n.n(m),f=n(4589),h=n.n(f),p=n(5145),y={};y.styleTagTransform=h(),y.setAttributes=u(),y.insert=d().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=v(),s()(p.Z,y),p.Z&&p.Z.locals&&p.Z.locals;var b=n(8577),g=n(1712),j={};j.styleTagTransform=h(),j.setAttributes=u(),j.insert=d().bind(null,"head"),j.domAPI=o(),j.insertStyleElement=v(),s()(g.Z,j),g.Z&&g.Z.locals&&g.Z.locals;var w=n(8374),k=n(2412);function x(e){var t=e.date,n=e.onDateChange;return i.createElement(k.D,null,i.createElement(w.W,{views:["day"],value:t,onChange:function(e){return n(e)}}))}var A=n(3499),D=n(9649),E={};E.styleTagTransform=h(),E.setAttributes=u(),E.insert=d().bind(null,"head"),E.domAPI=o(),E.insertStyleElement=v(),s()(D.Z,E),D.Z&&D.Z.locals&&D.Z.locals;var C=n(7952);!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}("/* rstdi = react-swipe-to-delete-ios */\n\n.rstdi {\n  --rstdiHeight: 30px;\n  --rstdiTransitionDuration: 250ms;\n  --rstdiTranslate: 0px;\n  --rstdiIsRtl: 0;\n  --rstdiDeleteColor: rgba(252, 58, 48, 1);\n  --rstdiDeleteWidth: 75px;\n  --rstdiButtonMarginRight: 0px;\n  --rstdiButtonMarginLeft: 0px;\n\n  width: auto;\n  position: relative;\n  box-sizing: border-box;\n  overflow: hidden;\n  height: var(--rstdiHeight);\n  max-height: calc(var(--rstdiHeight) + 10px);\n}\n\n.rstdi *,\n.rstdi *:before,\n.rstdi *:after {\n  box-sizing: border-box;\n}\n\n.rstdi.deleting {\n  transition: all var(--rstdiTransitionDuration) ease-out;\n  max-height: 0;\n}\n\n.rstdi .content {\n  height: 100%;\n  width: auto;\n  position: relative;\n  transform: translateX(var(--rstdiTranslate));\n}\n\n.rstdi .content.transition {\n  transition: transform var(--rstdiTransitionDuration) ease-out;\n}\n\n.rstdi .content.deleting {\n  height: 100%;\n  width: auto;\n  position: relative;\n  transform: scale(0) translateX(var(--rstdiTranslate));\n}\n\n.rstdi .delete {\n  position: absolute;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  background: var(--rstdiDeleteColor);\n  font-weight: 400;\n  display: inline-flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.rstdi .delete button {\n  width: var(--rstdiDeleteWidth);\n  transition: margin transform var(--rstdiTransitionDuration) ease-in-out;\n  margin-left: var(--rstdiButtonMarginLeft);\n  margin-right: var(--rstdiButtonMarginRight);\n  text-align: center;\n  height: 100%;\n  background: transparent;\n  border: none;\n  color: white;\n  font-size: 1rem;\n  cursor: pointer;\n}\n");var M=function(e){var t,n,i,r,s,a;return(null===(n=null===(t=null==e?void 0:e.touches)||void 0===t?void 0:t[0])||void 0===n?void 0:n.clientX)?e.touches[0].clientX:(null==e?void 0:e.clientX)?null==e?void 0:e.clientX:(null===(s=null===(r=null===(i=null==e?void 0:e.nativeEvent)||void 0===i?void 0:i.touches)||void 0===r?void 0:r[0])||void 0===s?void 0:s.clientX)?e.nativeEvent.touches[0].clientX:null===(a=null==e?void 0:e.nativeEvent)||void 0===a?void 0:a.clientX},T=function(e){var t,n=e.onDelete,r=e.onDeleteConfirm,s=e.deleteComponent,a=e.disabled,o=void 0!==a&&a,l=e.height,d=void 0===l?50:l,c=e.transitionDuration,u=void 0===c?250:c,m=e.deleteWidth,v=void 0===m?75:m,f=e.deleteThreshold,h=void 0===f?75:f,p=e.showDeleteAction,y=void 0===p||p,b=e.deleteColor,g=void 0===b?"rgba(252, 58, 48, 1.00)":b,j=e.deleteText,w=void 0===j?"Delete":j,k=e.className,x=void 0===k?"":k,A=e.id,D=void 0===A?"":A,E=e.rtl,C=void 0!==E&&E,T=e.children,z=(0,i.useState)(!1),I=z[0],_=z[1],L=(0,i.useState)(0),N=L[0],Z=L[1],O=(0,i.useState)(!1),S=O[0],P=O[1],V=(0,i.useRef)(0),B=(0,i.useRef)(0),G=(0,i.useRef)(null),H=(null===(t=G.current)||void 0===t?void 0:t.getBoundingClientRect().width)||0,R=H*(h/100),U=(0,i.useCallback)((function(e){o||I||(V.current=M(e),B.current=N,_(!0))}),[o,I,N]);(0,i.useEffect)((function(){var e=G.current;null==e||e.style.setProperty("--rstdiHeight",d+"px"),null==e||e.style.setProperty("--rstdiTransitionDuration",u+"ms"),null==e||e.style.setProperty("--rstdiIsRtl",C?"1":"-1"),null==e||e.style.setProperty("--rstdiDeleteColor",g),null==e||e.style.setProperty("--rstdiDeleteWidth",v+"px")}),[g,v,d,C,u]),(0,i.useEffect)((function(){var e=G.current;null==e||e.style.setProperty("--rstdiTranslate",N*(C?-1:1)+"px");var t=-N>=R;null==e||e.style.setProperty("--rstdiButtonMargin".concat(C?"Right":"Left"),(t?H+N:H-v)+"px")}),[N,v,H,C,R]);var W=(0,i.useCallback)((function(e){if(I)return!C&&M(e)>V.current-B.current||C&&M(e)<V.current-B.current?Z(0):void Z(M(e)-V.current+B.current)}),[C,I]),Q=(0,i.useCallback)((function(e){W(e)}),[W]),X=(0,i.useCallback)((function(e){W(e)}),[W]),Y=(0,i.useCallback)((function(){P((function(){return!0})),window.setTimeout(n,u)}),[n,u]),J=(0,i.useCallback)((function(){_((function(){return!1})),Z((function(){return 0})),P((function(){return!1})),V.current=0,B.current=0}),[n,u]),F=(0,i.useCallback)((function(){r?r(Y,J):Y()}),[r,Y]),q=(0,i.useCallback)((function(){V.current=0;var e=.7*-v,t=!!y&&(C?-1:1)*N<e,n=!y||(C?-1:1)*N>=e,i=(C?1:-1)*N>=R;i?Z((function(){return-H})):n?Z((function(){return 0})):t&&!i&&Z((function(){return(C?1:-1)*v})),_((function(){return!1})),i&&F()}),[H,v,R,F,C,N]);return(0,i.useEffect)((function(){return I?(window.addEventListener("mousemove",Q),window.addEventListener("touchmove",X),window.addEventListener("mouseup",q),window.addEventListener("touchend",q)):(window.removeEventListener("mousemove",Q),window.removeEventListener("touchmove",X),window.removeEventListener("mouseup",q),window.removeEventListener("touchend",q)),function(){window.removeEventListener("mousemove",Q),window.removeEventListener("touchmove",X),window.removeEventListener("mouseup",q),window.removeEventListener("touchend",q)}}),[Q,q,X,I]),i.createElement("div",{id:D,className:"rstdi".concat(S?" deleting":""," ").concat(x),ref:G},i.createElement("div",{className:"delete".concat(S?" deleting":"")},i.createElement("button",{onClick:F},s||w)),i.createElement("div",{className:"content".concat(S?" deleting":"").concat(I?"":" transition"),onMouseDown:U,onTouchStart:U},T))},z=n(530),I={};function _(e){var t=e.onDelete,n=e.height,r=e.children;return i.createElement(T,{className:"swipe-to-delete-block",onDelete:t,height:n,deleteText:"Прибрати"},r)}function L(e){var t=e.hour,r=e.visitorsList,s=e.removeVisitor,a=e.addBtnOnClick,o=void 0===a?null:a,l=e.showSubscriptionCounter,d=void 0===l||l;return i.createElement("div",{className:"time-section"},i.createElement("div",{className:"time-section__top"},i.createElement("div",{className:"time-section__time"},t),o&&i.createElement("img",{className:"time-section__add-btn",onClick:o,src:n(9120),alt:"svg1"})),i.createElement("ul",{className:"time-section__visitors-list"},d?r.map((function(e){return i.createElement(_,{key:e.id,height:51,onDelete:function(){return s(e.id)}},i.createElement(C.Z,{visitorId:e.id,name:e.name,subscriptionCounter:e.subscription}))})):r.map((function(e){return i.createElement(C.Z,{key:e.id,visitorId:e.id,name:e.name,subscriptionCounter:e.subscription})}))))}I.styleTagTransform=h(),I.setAttributes=u(),I.insert=d().bind(null,"head"),I.domAPI=o(),I.insertStyleElement=v(),s()(z.Z,I),z.Z&&z.Z.locals&&z.Z.locals;var N=n(381),Z=n.n(N),O=n(4318);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){V(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,r,s=[],a=!0,o=!1;try{for(n=n.call(e);!(a=(i=n.next()).done)&&(s.push(i.value),!t||s.length!==t);a=!0);}catch(e){o=!0,r=e}finally{try{a||null==n.return||n.return()}finally{if(o)throw r}}return s}}(e,t)||G(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(e,t){if(e){if("string"==typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(e,t):void 0}}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function R(){var e=(0,A.V)((function(e){return e.visitors})),t=B((0,i.useState)(Z()()),2),n=t[0],r=t[1],s=n.day()-1>=0?n.day()-1:-1,a=B((0,i.useState)([]),2),o=a[0],l=a[1],d=B((0,O.u)(),1)[0];(0,i.useEffect)((function(){l((function(){return-1===s?[]:e.filter((function(e){if(!0===e.schedule[s].isActive)return P(P({},e),{},{todaysTime:e.schedule[s].time})}))}))}),[n]);var c,u=(c=new Set(s>=0?o.map((function(e){return e.schedule[s].time})):[]),function(e){if(Array.isArray(e))return H(e)}(c)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(c)||G(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort();return i.createElement("div",{className:"calendar-page"},i.createElement("div",{className:"calendar-page__calendar"},i.createElement(x,{date:n,onDateChange:function(e){return r(e)}})),i.createElement(b.Z,null,i.createElement("div",{className:"calendar-page__visitors-list",ref:d},u.map((function(e,t){return i.createElement(L,{key:t,hour:e,visitorsList:o.filter((function(t){return t.schedule[s].time===e})),showSubscriptionCounter:!1})})))))}},2412:(e,t,n)=>{"use strict";n.d(t,{D:()=>a});var i=n(7294),r=n(720),s=n(2298);function a(e){var t=e.children;return i.createElement(r._,{dateAdapter:s.Q,adapterLocale:"uk"},t)}},8577:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var i=n(7294);function r(e){var t=e.children;return i.createElement("div",{style:{padding:"20px"}},t)}},7952:(e,t,n)=>{"use strict";n.d(t,{X:()=>x,Z:()=>k});var i=n(7294),r=n(3379),s=n.n(r),a=n(7795),o=n.n(a),l=n(569),d=n.n(l),c=n(3565),u=n.n(c),m=n(9216),v=n.n(m),f=n(4589),h=n.n(f),p=n(4221),y={};y.styleTagTransform=h(),y.setAttributes=u(),y.insert=d().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=v(),s()(p.Z,y),p.Z&&p.Z.locals&&p.Z.locals;var b=n(9655),g=n(3499),j=n(9463),w=n.n(j);function k(e){var t=e.name,n=e.visitorId,r=e.subscriptionCounter,s=e.theme,a=void 0===s?"green":s,o=e.showDoneStatus,l=void 0!==o&&o,d=e.reducePadding,c=void 0!==d&&d,u=(0,g.V)((function(e){return e.todaysVisitors.find((function(e){return e.id==n}))})),m=!(!u||!u.hasOwnProperty("isCame"))&&u.isCame,v=(0,g.V)((function(e){return e.switchTodaysVisitorAttendance})),f=r<=0?"expired-subscription":"",h=(0,g.V)((function(e){return e.setVisitorSubscription})),p=i.createElement("div",{className:"visitor-cart__done-status ".concat(m&&"active"),onClick:function(){m?(v(n),h(n,r+1)):(v(n),h(n,r-1))}},i.createElement("img",{src:w(),alt:"done-icon.svg"}));return i.createElement(b.OL,{to:"/profile/".concat(n),onClick:function(e){return function(e){(e.target.closest(".visitor-cart__done-status")||e.target.closest(".visitor-cart__slider"))&&e.preventDefault()}(e)}},i.createElement("div",{className:"visitor-cart ".concat(f," ").concat(a),"data-reduce-padding":c},i.createElement("div",{className:"visitor-cart__name ".concat(l&&m&&"line-through")},t),l&&p))}function x(e){var t=e.name,n=e.subscriptionCounter,r=e.onClick,s=e.theme,a=void 0===s?"green":s,o=e.reducePadding,l=void 0!==o&&o,d=n<=0?"expired-subscription":"";return i.createElement("div",{className:"visitor-cart ".concat(d," ").concat(a),onClick:r,"data-reduce-padding":l},i.createElement("div",{className:"visitor-cart__name"},t))}},5145:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var i=n(8081),r=n.n(i),s=n(3645),a=n.n(s)()(r());a.push([e.id,".calendar-page {\n  position: relative;\n}\n.calendar-page__calendar {\n  padding-top: 10px;\n  background-color: #f2f2f2;\n  border-radius: 0 0 10px 10px;\n}\n.calendar-page__visitors-list {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.calendar-page::before {\n  content: '';\n  position: absolute;\n  bottom: 100%;\n  left: 0;\n  height: 50%;\n  width: 100%;\n  background-color: #f2f2f2;\n}\n",""]);const o=a},1712:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var i=n(8081),r=n.n(i),s=n(3645),a=n.n(s)()(r());a.push([e.id,'.calendar-page .MuiDateCalendar-root {\n  width: 100% !important;\n}\n.calendar-page .MuiPickersCalendarHeader-root div {\n  font-size: 22px !important;\n  color: #3b3b3b;\n  text-transform: capitalize;\n}\n.calendar-page .MuiIconButton-root {\n  font-size: 2rem !important;\n}\n.calendar-page .MuiDayCalendar-header,\n.calendar-page .MuiDayCalendar-weekContainer {\n  margin: 7px 0px !important;\n  justify-content: space-evenly !important;\n}\n.calendar-page .MuiDayCalendar-weekContainer:first-child {\n  margin-top: 0px !important;\n}\n.calendar-page .MuiDayCalendar-weekDayLabel {\n  font-size: 1.1rem !important;\n}\n.calendar-page .MuiPickersDay-root.Mui-selected:hover,\n.calendar-page .MuiPickersDay-root.Mui-selected {\n  color: #f2f2f2;\n  background-color: #619B8A !important;\n  font-weight: 600;\n}\n.calendar-page .MuiPickersDay-root {\n  font-size: 0.9rem !important;\n}\n.calendar-page .MuiDayCalendar-weekDayLabel {\n  color: #3b3b3b !important;\n  font-family: \'Inter\' !important;\n  font-weight: 600 !important;\n}\n.calendar-page .MuiDayCalendar-weekDayLabel[aria-label="субота"],\n.calendar-page .MuiDayCalendar-weekDayLabel[aria-label="неділя"] {\n  color: #619B8A !important;\n  opacity: 0.8;\n}\n',""]);const o=a},9649:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var i=n(8081),r=n.n(i),s=n(3645),a=n.n(s)()(r());a.push([e.id,".time-section {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.time-section__top {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.time-section__time {\n  color: #233d4d;\n  font-family: 'Space Grotesk';\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  text-decoration-line: underline;\n}\n.time-section__visitors-list {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n",""]);const o=a},530:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var i=n(8081),r=n.n(i),s=n(3645),a=n.n(s)()(r());a.push([e.id,".swipe-to-delete-block {\n  border-radius: 10px;\n}\n",""]);const o=a},4221:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var i=n(8081),r=n.n(i),s=n(3645),a=n.n(s)()(r());a.push([e.id,'.visitor-cart {\n  border-radius: 10px;\n  padding: 10px 15px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  min-width: 100%;\n  width: 0;\n}\n.visitor-cart[data-reduce-padding="true"] {\n  padding: 6px 12px;\n}\n.visitor-cart__name {\n  flex: 0 1 87%;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.visitor-cart__name.line-through {\n  text-decoration: line-through;\n}\n.visitor-cart__done-status {\n  height: 18px;\n  width: 18px;\n  border-radius: 50%;\n  border: 2px solid #f2f2f2;\n  position: relative;\n}\n.visitor-cart__done-status img {\n  height: 90%;\n  width: 90%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform-origin: bottom;\n  transform: translate(-40%, -65%) scale(0);\n  transition: transform 0.3s ease-in-out;\n}\n.visitor-cart__done-status.active img {\n  transform: translate(-40%, -65%) scale(1);\n}\n.visitor-cart.green {\n  background-color: #619B8A;\n}\n.visitor-cart.green .visitor-cart__name {\n  color: #f2f2f2;\n}\n.visitor-cart.light {\n  background-color: #f2f2f2;\n}\n.visitor-cart.light .visitor-cart__name {\n  color: #3b3b3b;\n}\n.visitor-cart.expired-subscription {\n  background-color: #fbba72;\n  transition: all 0.3s ease-in;\n}\n.visitor-cart.expired-subscription .visitor-cart__name {\n  color: #3b3b3b;\n  transition: all 0.3s ease-in;\n}\n.visitor-cart.expired-subscription .visitor-cart__slider,\n.visitor-cart.expired-subscription .visitor-cart__subscription-counter {\n  background-color: #3b3b3b;\n  color: #fbba72;\n  border-color: #fbba72;\n}\n.increase-value-list {\n  display: flex;\n  justify-content: space-evenly;\n  gap: 10px;\n  align-items: center;\n  padding-right: 78px;\n}\n',""]);const o=a},9120:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUiIGhlaWdodD0iMzUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3QgeD0iLjUiIHk9Ii41IiB3aWR0aD0iMzQiIGhlaWdodD0iMzQiIHJ4PSI5LjUiIHN0cm9rZT0iIzYxOUI4QSIgc3Ryb2tlLWRhc2hhcnJheT0iMjAgMTAiLz48cGF0aCBkPSJNMTYuMzM2IDI0LjY4di02LjYxMkg5Ljh2LTIuNzM2aDYuNTM2VjguNzJoMi44ODh2Ni42MTJoNi41MzZ2Mi43MzZoLTYuNTM2djYuNjEyaC0yLjg4OHoiIGZpbGw9IiM2MTlCOEEiLz48L3N2Zz4="},9463:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjEzOCAxMi4wNjVMMTUuMzc4LjQyYy43NDItMS4wNDkgMi4zMzUuMDY4IDEuNTkzIDEuMTE2TDguMTA5IDE0LjA2Yy0uMzU1LjUtMS4xNi41NTgtMS41OTMuMTI3TC45NTQgOC42NTFjLS45MS0uOTA2LjQ2Ni0yLjI3NyAxLjM3Ny0xLjM3bDQuODA3IDQuNzg0eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=="},6700:(e,t,n)=>{var i={"./af":2786,"./af.js":2786,"./ar":867,"./ar-dz":4130,"./ar-dz.js":4130,"./ar-kw":6135,"./ar-kw.js":6135,"./ar-ly":6440,"./ar-ly.js":6440,"./ar-ma":7702,"./ar-ma.js":7702,"./ar-sa":6040,"./ar-sa.js":6040,"./ar-tn":7100,"./ar-tn.js":7100,"./ar.js":867,"./az":1083,"./az.js":1083,"./be":9808,"./be.js":9808,"./bg":8338,"./bg.js":8338,"./bm":7438,"./bm.js":7438,"./bn":8905,"./bn-bd":6225,"./bn-bd.js":6225,"./bn.js":8905,"./bo":5684,"./bo.js":5684,"./br":1278,"./br.js":1278,"./bs":622,"./bs.js":622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":877,"./cv.js":877,"./cy":7373,"./cy.js":7373,"./da":4780,"./da.js":4780,"./de":9740,"./de-at":217,"./de-at.js":217,"./de-ch":894,"./de-ch.js":894,"./de.js":9740,"./dv":5300,"./dv.js":5300,"./el":837,"./el.js":837,"./en-au":8348,"./en-au.js":8348,"./en-ca":7925,"./en-ca.js":7925,"./en-gb":2243,"./en-gb.js":2243,"./en-ie":6436,"./en-ie.js":6436,"./en-il":7207,"./en-il.js":7207,"./en-in":4175,"./en-in.js":4175,"./en-nz":6319,"./en-nz.js":6319,"./en-sg":1626,"./en-sg.js":1626,"./eo":2915,"./eo.js":2915,"./es":5655,"./es-do":5251,"./es-do.js":5251,"./es-mx":6112,"./es-mx.js":6112,"./es-us":1146,"./es-us.js":1146,"./es.js":5655,"./et":5603,"./et.js":5603,"./eu":7763,"./eu.js":7763,"./fa":6959,"./fa.js":6959,"./fi":1897,"./fi.js":1897,"./fil":2549,"./fil.js":2549,"./fo":4694,"./fo.js":4694,"./fr":4470,"./fr-ca":3049,"./fr-ca.js":3049,"./fr-ch":2330,"./fr-ch.js":2330,"./fr.js":4470,"./fy":5044,"./fy.js":5044,"./ga":9295,"./ga.js":9295,"./gd":2101,"./gd.js":2101,"./gl":8794,"./gl.js":8794,"./gom-deva":7884,"./gom-deva.js":7884,"./gom-latn":3168,"./gom-latn.js":3168,"./gu":5349,"./gu.js":5349,"./he":4206,"./he.js":4206,"./hi":94,"./hi.js":94,"./hr":316,"./hr.js":316,"./hu":2138,"./hu.js":2138,"./hy-am":1423,"./hy-am.js":1423,"./id":9218,"./id.js":9218,"./is":135,"./is.js":135,"./it":626,"./it-ch":150,"./it-ch.js":150,"./it.js":626,"./ja":9183,"./ja.js":9183,"./jv":4286,"./jv.js":4286,"./ka":2105,"./ka.js":2105,"./kk":7772,"./kk.js":7772,"./km":8758,"./km.js":8758,"./kn":9282,"./kn.js":9282,"./ko":3730,"./ko.js":3730,"./ku":1408,"./ku.js":1408,"./ky":3291,"./ky.js":3291,"./lb":6841,"./lb.js":6841,"./lo":5466,"./lo.js":5466,"./lt":7010,"./lt.js":7010,"./lv":7595,"./lv.js":7595,"./me":9861,"./me.js":9861,"./mi":5493,"./mi.js":5493,"./mk":5966,"./mk.js":5966,"./ml":7341,"./ml.js":7341,"./mn":5115,"./mn.js":5115,"./mr":370,"./mr.js":370,"./ms":9847,"./ms-my":1237,"./ms-my.js":1237,"./ms.js":9847,"./mt":2126,"./mt.js":2126,"./my":6165,"./my.js":6165,"./nb":4924,"./nb.js":4924,"./ne":6744,"./ne.js":6744,"./nl":3901,"./nl-be":9814,"./nl-be.js":9814,"./nl.js":3901,"./nn":3877,"./nn.js":3877,"./oc-lnc":2135,"./oc-lnc.js":2135,"./pa-in":5858,"./pa-in.js":5858,"./pl":4495,"./pl.js":4495,"./pt":9520,"./pt-br":7971,"./pt-br.js":7971,"./pt.js":9520,"./ro":6459,"./ro.js":6459,"./ru":1793,"./ru.js":1793,"./sd":950,"./sd.js":950,"./se":490,"./se.js":490,"./si":124,"./si.js":124,"./sk":4249,"./sk.js":4249,"./sl":4985,"./sl.js":4985,"./sq":1104,"./sq.js":1104,"./sr":9131,"./sr-cyrl":9915,"./sr-cyrl.js":9915,"./sr.js":9131,"./ss":5893,"./ss.js":5893,"./sv":8760,"./sv.js":8760,"./sw":1172,"./sw.js":1172,"./ta":7333,"./ta.js":7333,"./te":3110,"./te.js":3110,"./tet":2095,"./tet.js":2095,"./tg":7321,"./tg.js":7321,"./th":9041,"./th.js":9041,"./tk":9005,"./tk.js":9005,"./tl-ph":5768,"./tl-ph.js":5768,"./tlh":9444,"./tlh.js":9444,"./tr":2397,"./tr.js":2397,"./tzl":8254,"./tzl.js":8254,"./tzm":1106,"./tzm-latn":699,"./tzm-latn.js":699,"./tzm.js":1106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":7691,"./uk.js":7691,"./ur":3795,"./ur.js":3795,"./uz":6791,"./uz-latn":588,"./uz-latn.js":588,"./uz.js":6791,"./vi":5666,"./vi.js":5666,"./x-pseudo":4378,"./x-pseudo.js":4378,"./yo":5805,"./yo.js":5805,"./zh-cn":3839,"./zh-cn.js":3839,"./zh-hk":5726,"./zh-hk.js":5726,"./zh-mo":9807,"./zh-mo.js":9807,"./zh-tw":4152,"./zh-tw.js":4152};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}r.keys=function(){return Object.keys(i)},r.resolve=s,e.exports=r,r.id=6700},3499:(e,t,n)=>{"use strict";n.d(t,{V:()=>s});var i=n(270);const r=(0,n(2060).n)(((e,t)=>({idCounter:8,incrementIdCounter:()=>e((e=>{e.idCounter++})),visitors:[{id:0,name:"Головкин Тихон",subscription:1,schedule:[{date:1,weekday:{short:"Пн",full:"Понеділок"},isActive:!0,time:"12:00"},{date:2,weekday:{short:"Вт",full:"Вівторок"},isActive:!1,time:"12:00"},{date:3,weekday:{short:"Ср",full:"Середа"},isActive:!0,time:"13:30"},{date:4,weekday:{short:"Чт",full:"Четвер"},isActive:!1,time:"12:00"},{date:5,weekday:{short:"Пт",full:"П'ятниця"},isActive:!0,time:"15:00"},{date:6,weekday:{short:"Сб",full:"Субота"},isActive:!1,time:"12:00"}]},{id:1,name:"Метальников Тарасий",subscription:3,schedule:[{date:1,weekday:{short:"Пн",full:"Понеділок"},isActive:!0,time:"13:00"},{date:2,weekday:{short:"Вт",full:"Вівторок"},isActive:!1,time:"12:00"},{date:3,weekday:{short:"Ср",full:"Середа"},isActive:!0,time:"12:00"},{date:4,weekday:{short:"Чт",full:"Четвер"},isActive:!1,time:"12:00"},{date:5,weekday:{short:"Пт",full:"П'ятниця"},isActive:!0,time:"15:00"},{date:6,weekday:{short:"Сб",full:"Субота"},isActive:!1,time:"12:00"}]},{id:2,name:"Сологубов Иакинф",subscription:0,schedule:[{date:1,weekday:{short:"Пн",full:"Понеділок"},isActive:!0,time:"12:00"},{date:2,weekday:{short:"Вт",full:"Вівторок"},isActive:!1,time:"12:00"},{date:3,weekday:{short:"Ср",full:"Середа"},isActive:!0,time:"13:30"},{date:4,weekday:{short:"Чт",full:"Четвер"},isActive:!1,time:"12:00"},{date:5,weekday:{short:"Пт",full:"П'ятниця"},isActive:!0,time:"12:00"},{date:6,weekday:{short:"Сб",full:"Субота"},isActive:!1,time:"12:00"}]},{id:3,name:"Блинова Георгина",subscription:2,schedule:[{date:1,weekday:{short:"Пн",full:"Понеділок"},isActive:!0,time:"13:00"},{date:2,weekday:{short:"Вт",full:"Вівторок"},isActive:!1,time:"12:00"},{date:3,weekday:{short:"Ср",full:"Середа"},isActive:!0,time:"12:00"},{date:4,weekday:{short:"Чт",full:"Четвер"},isActive:!1,time:"12:00"},{date:5,weekday:{short:"Пт",full:"П'ятниця"},isActive:!0,time:"13:30"},{date:6,weekday:{short:"Сб",full:"Субота"},isActive:!1,time:"12:00"}]},{id:4,name:"Облеухова Ада",subscription:1,schedule:[{date:1,weekday:{short:"Пн",full:"Понеділок"},isActive:!0,time:"12:00"},{date:2,weekday:{short:"Вт",full:"Вівторок"},isActive:!1,time:"12:00"},{date:3,weekday:{short:"Ср",full:"Середа"},isActive:!0,time:"13:30"},{date:4,weekday:{short:"Чт",full:"Четвер"},isActive:!1,time:"12:00"},{date:5,weekday:{short:"Пт",full:"П'ятниця"},isActive:!0,time:"15:00"},{date:6,weekday:{short:"Сб",full:"Субота"},isActive:!1,time:"12:00"}]},{id:5,name:"Люшин Феликс",subscription:4,schedule:[{date:1,weekday:{short:"Пн",full:"Понеділок"},isActive:!0,time:"13:00"},{date:2,weekday:{short:"Вт",full:"Вівторок"},isActive:!1,time:"12:00"},{date:3,weekday:{short:"Ср",full:"Середа"},isActive:!0,time:"12:00"},{date:4,weekday:{short:"Чт",full:"Четвер"},isActive:!1,time:"12:00"},{date:5,weekday:{short:"Пт",full:"П'ятниця"},isActive:!0,time:"12:00"},{date:6,weekday:{short:"Сб",full:"Субота"},isActive:!1,time:"12:00"}]},{id:6,name:"Чернопятов Харалампий",subscription:2,schedule:[{date:1,weekday:{short:"Пн",full:"Понеділок"},isActive:!0,time:"12:00"},{date:2,weekday:{short:"Вт",full:"Вівторок"},isActive:!0,time:"13:00"},{date:3,weekday:{short:"Ср",full:"Середа"},isActive:!0,time:"12:00"},{date:4,weekday:{short:"Чт",full:"Четвер"},isActive:!0,time:"12:00"},{date:5,weekday:{short:"Пт",full:"П'ятниця"},isActive:!0,time:"15:00"},{date:6,weekday:{short:"Сб",full:"Субота"},isActive:!0,time:"12:00"}]}],setVisitorName:(n,i)=>{const r=t().visitors.filter((e=>e.id==n))[0];e((e=>{e.visitors[t().visitors.indexOf(r)].name=i}))},setVisitorSubscription:(n,i)=>{const r=t().visitors.filter((e=>e.id==n))[0];e((e=>{e.visitors[t().visitors.indexOf(r)].subscription=i}))},setVisitorSchedule:(n,i)=>{const r=t().visitors.filter((e=>e.id==n))[0];e((e=>{e.visitors[t().visitors.indexOf(r)].schedule=i}))},addNewVisitor:(n,i,r)=>{e((e=>{e.visitors.push({id:t().idCounter,name:n,subscription:i,schedule:r})})),t().incrementIdCounter()},scheduleTemplate:[{date:1,weekday:{short:"Пн",full:"Понеділок"},isActive:!1,time:"12:00"},{date:2,weekday:{short:"Вт",full:"Вівторок"},isActive:!1,time:"12:00"},{date:3,weekday:{short:"Ср",full:"Середа"},isActive:!1,time:"12:00"},{date:4,weekday:{short:"Чт",full:"Четвер"},isActive:!1,time:"12:00"},{date:5,weekday:{short:"Пт",full:"П'ятниця"},isActive:!1,time:"12:00"},{date:6,weekday:{short:"Сб",full:"Субота"},isActive:!1,time:"12:00"}],todaysVisitors:[],setTodaysVisitors:t=>{e((e=>{e.todaysVisitors=t}))},switchTodaysVisitorAttendance:n=>{const i=t().todaysVisitors.filter((e=>e.id==n))[0],r=t().todaysVisitors.indexOf(i);e((e=>{e.todaysVisitors[r].isCame=!e.todaysVisitors[r].isCame}))},addTodaysVisitor:t=>{e((e=>{e.todaysVisitors.push(t)}))}}))),s=(0,i.Ue)(r)}}]);