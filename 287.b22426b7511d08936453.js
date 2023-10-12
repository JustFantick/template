(self.webpackChunktodo_react=self.webpackChunktodo_react||[]).push([[287],{7397:(e,t,n)=>{"use strict";n.d(t,{Z:()=>A});var i=n(7294),s=n(3379),r=n.n(s),a=n(7795),l=n.n(a),o=n(569),c=n.n(o),u=n(3565),d=n.n(u),m=n(9216),p=n.n(m),f=n(4589),y=n.n(f),h=n(5326),v={};v.styleTagTransform=y(),v.setAttributes=d(),v.insert=c().bind(null,"head"),v.domAPI=l(),v.insertStyleElement=p(),r()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;var b=n(720),j=n(504),g=n(381),k=n.n(g),w=n(2298);function A(e){var t=e.weekday,n=e.hour,s=e.setTime,r="HH:mm";return i.createElement(b._,{dateAdapter:w.Q,adapterLocale:"uk"},i.createElement("div",{className:"clock"},i.createElement("div",{className:"clock__weekday"},t),i.createElement(j.I,{value:k()(n,r),skipDisabled:!0,shouldDisableTime:function(e,t){var n=e.hour();return"hours"===t&&(n<12||n>18)},timeStep:30,ampm:!1,onChange:function(e){return s(e.format(r))}})))}},6912:(e,t,n)=>{"use strict";n.d(t,{f:()=>r});var i=n(7294),s=(n(6914),n(3970)),r=function(e){var t=e.name,n=void 0===t?"":t,r=e.setName,a=e.label,l=void 0===a?"ПІБ":a,o=e.isValid,c=void 0===o||o;return i.createElement(s.S,null,i.createElement("label",{className:"input-wrapper__name-label ".concat(c?"valid":"non-valid")},l,i.createElement("input",{type:"text",name:"name",value:n,placeholder:"______",onChange:function(e){return r(e.target.value)}})))}},126:(e,t,n)=>{"use strict";n.d(t,{p:()=>E});var i=n(7294),s=(n(6914),n(3970)),r=n(7965),a=n(3379),l=n.n(a),o=n(7795),c=n.n(o),u=n(569),d=n.n(u),m=n(3565),p=n.n(m),f=n(9216),y=n.n(f),h=n(4589),v=n.n(h),b=n(9806),j={};function g(e){var t=e.coefficient,n=e.onClick,s=e.theme,a=void 0===s?"green":s;return i.createElement(r.E.div,{className:"quick-increase-button ".concat("green"===a?"":"yellow"),whileHover:{scale:1.1},whileTap:{scale:.95},onClick:n},"+".concat(t))}j.styleTagTransform=v(),j.setAttributes=p(),j.insert=d().bind(null,"head"),j.domAPI=c(),j.insertStyleElement=y(),l()(b.Z,j),b.Z&&b.Z.locals&&b.Z.locals;var k=n(2469),w=n(9167),A={};function x(e){var t=e.value,n=e.setValue;return i.createElement("div",{className:"digital-counter"},i.createElement("div",{className:"digital-counter__minus",onClick:function(){return n(t-1)}},"-"),i.createElement("div",{className:"digital-counter__value"},t),i.createElement("div",{className:"digital-counter__plus",onClick:function(){return n(t+1)}},"+"))}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}A.styleTagTransform=v(),A.setAttributes=p(),A.insert=d().bind(null,"head"),A.domAPI=c(),A.insertStyleElement=y(),l()(w.Z,A),w.Z&&w.Z.locals&&w.Z.locals;var E=function(e){var t,n,r=e.subscriptionValue,a=e.setSubscription,l=(t=(0,i.useState)(!1),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,s,r=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(i=n.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(e){l=!0,s=e}finally{try{a||null==n.return||n.return()}finally{if(l)throw s}}return r}}(t,n)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=l[0],c=l[1];return i.createElement(i.Fragment,null,i.createElement(s.S,null,i.createElement("div",{className:"subscription"},i.createElement("div",{className:"subscription__label",onClick:function(e){e.preventDefault(),c(!0)}},"Стартовий абонемент:",i.createElement("span",null,r)),i.createElement("div",{className:"subscription__increase-btns"},[1,2,3,4].map((function(e){return i.createElement(g,{key:e,coefficient:e,onClick:function(){return a(r+e)}})})),i.createElement(g,{coefficient:"n",onClick:function(){return c(!0)}})))),i.createElement(k.Z,{isOpen:o,closePopup:c},i.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},i.createElement(x,{value:r,setValue:a}))))}},3970:(e,t,n)=>{"use strict";n.d(t,{S:()=>s});var i=n(7294),s=(n(6914),function(e){var t=e.children;return i.createElement("div",{className:"input-wrapper"},t)})},8577:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var i=n(7294);function s(e){var t=e.children;return i.createElement("div",{style:{padding:"20px"}},t)}},2469:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var i=n(7294),s=n(3379),r=n.n(s),a=n(7795),l=n.n(a),o=n(569),c=n.n(o),u=n(3565),d=n.n(u),m=n(9216),p=n.n(m),f=n(4589),y=n.n(f),h=n(2597),v={};v.styleTagTransform=y(),v.setAttributes=d(),v.insert=c().bind(null,"head"),v.domAPI=l(),v.insertStyleElement=p(),r()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;var b=n(7965),j=n(1241);function g(e){var t=e.children,n=e.isOpen,s=e.closePopup,r=(0,j.P)(),a=r.lockScroll,l=r.unlockScroll;return(0,i.useEffect)((function(){n?a():l()}),[n]),i.createElement(b.E.div,{className:"popup",onClick:function(e){e.target.closest(".popup__body")||s()},"data-isopen":n,layout:!0},i.createElement(b.E.div,{className:"popup__body",variants:{closed:{y:"100%"},open:{y:0}},animate:n?"open":"closed"},t))}},3832:(e,t,n)=>{"use strict";n.d(t,{Z:()=>S});var i=n(7294),s=n(3379),r=n.n(s),a=n(7795),l=n.n(a),o=n(569),c=n.n(o),u=n(3565),d=n.n(u),m=n(9216),p=n.n(m),f=n(4589),y=n.n(f),h=n(9575),v={};v.styleTagTransform=y(),v.setAttributes=d(),v.insert=c().bind(null,"head"),v.domAPI=l(),v.insertStyleElement=p(),r()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;var b=n(8213),j={};j.styleTagTransform=y(),j.setAttributes=d(),j.insert=c().bind(null,"head"),j.domAPI=l(),j.insertStyleElement=p(),r()(b.Z,j),b.Z&&b.Z.locals&&b.Z.locals;var g=n(7965);function k(e){var t=e.status,n=e.setStatus,s=e.day,r=e.time,a=e.openPopup;return i.createElement(g.E.div,{className:"schedule-day",onClick:function(e){!e.target.closest(".schedule-day__time")||e.target.closest(".schedule-day__time")&&!t?n():e.target.closest(".schedule-day__time")&&t&&a()},layout:!0,"data-isactive":t,whileHover:{scale:1.05},whileTap:{scale:.9},transition:{duration:.5,type:"spring"}},i.createElement("div",{className:"schedule-day__label"},s),i.createElement(g.E.div,{className:"schedule-day__time",variants:{inActive:{y:"15px",opacity:0,transition:{duration:.5,type:"spring"}},active:{y:0,opacity:1,transition:{duration:.5,type:"spring"}}},animate:t?"active":"inActive"},r))}var w=n(2469),A=n(7397);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){E(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,s,r=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(i=n.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(e){l=!0,s=e}finally{try{a||null==n.return||n.return()}finally{if(l)throw s}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function S(e){var t=e.schedule,n=e.setSchedule,s=Z((0,i.useState)(!1),2),r=s[0],a=s[1],l=Z((0,i.useState)(0),2),o=l[0],c=l[1];function u(e){a(!0),c(e)}return i.createElement(i.Fragment,null,i.createElement("div",{className:"schedule"},t.map((function(e,s){return i.createElement(k,{key:s,time:e.time,day:e.weekday.short,status:e.isActive,setStatus:function(){return e=s,void n(t.map((function(t,n){return n!==e?t:(t.isActive||setTimeout((function(){u(n)}),200),_(_({},t),{},{isActive:!t.isActive}))})));var e},openPopup:function(){return u(s)}})}))),i.createElement(w.Z,{isOpen:r,closePopup:function(){return a(!1)}},i.createElement("center",null,i.createElement(A.Z,{hour:t[o]&&t[o].time,weekday:t[o]&&t[o].weekday.full,setTime:function(e){n(t.map((function(t,n){return n!==o?t:_(_({},t),{},{time:e})}))),a(!1)}}))))}},6633:(e,t,n)=>{"use strict";n.d(t,{N:()=>b});var i=n(7294),s=n(3379),r=n.n(s),a=n(7795),l=n.n(a),o=n(569),c=n.n(o),u=n(3565),d=n.n(u),m=n(9216),p=n.n(m),f=n(4589),y=n.n(f),h=n(5207),v={};v.styleTagTransform=y(),v.setAttributes=d(),v.insert=c().bind(null,"head"),v.domAPI=l(),v.insertStyleElement=p(),r()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;var b=function(e){var t=e.children;return i.createElement("h2",{className:"section-title"},t)}},5326:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var i=n(8081),s=n.n(i),r=n(3645),a=n.n(r)()(s());a.push([e.id,'.clock {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  border-bottom: 1px solid #3b3b3b;\n}\n.clock__weekday {\n  padding-left: 15px;\n  border-bottom: 1px solid #3b3b3b;\n  padding-bottom: 10px;\n  color: #f2f2f2;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: normal;\n  text-align-last: left;\n}\n.MuiMenuItem-root {\n  border-radius: 10px !important;\n  color: #f2f2f2 !important;\n  font-size: 1.2rem !important;\n}\n.MuiMenuItem-root[aria-selected="true"] {\n  background-color: #f2f2f2 !important;\n  color: #619B8A !important;\n}\n',""]);const l=a},9167:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var i=n(8081),s=n.n(i),r=n(3645),a=n.n(r)()(s());a.push([e.id,".digital-counter {\n  background-color: #f2f2f2;\n  border-radius: 10px;\n  overflow: hidden;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.digital-counter__minus,\n.digital-counter__value,\n.digital-counter__plus {\n  line-height: 1;\n  font-size: 55px;\n  color: #3b3b3b;\n  font-weight: 400;\n}\n.digital-counter__value {\n  padding: 15px 20px;\n  width: 95px;\n  text-align: center;\n  position: relative;\n}\n.digital-counter__value::before,\n.digital-counter__value::after {\n  content: '';\n  position: absolute;\n  top: 50%;\n  transform: translate(0, -50%);\n  height: 75%;\n  width: 3px;\n  border-radius: 5px;\n  background-color: #3b3b3b;\n}\n.digital-counter__value::before {\n  left: 0;\n}\n.digital-counter__value::after {\n  right: 0;\n}\n.digital-counter__minus,\n.digital-counter__plus {\n  width: 70px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n",""]);const l=a},2487:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var i=n(8081),s=n.n(i),r=n(3645),a=n.n(r)()(s());a.push([e.id,".input-wrapper {\n  padding: 20px;\n  border-radius: 10px;\n  background-color: #f2f2f2;\n}\n.input-wrapper input,\n.input-wrapper label {\n  background-color: transparent;\n  font-size: 18px;\n  color: #3b3b3b;\n}\n.input-wrapper__name-label {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  transition: color 0.3s ease-in;\n}\n.input-wrapper__name-label input {\n  font-size: 20px;\n}\n.input-wrapper__name-label input::placeholder {\n  font-size: 28px;\n  letter-spacing: 3px;\n}\n.input-wrapper__name-label.non-valid {\n  color: #fbba72;\n}\n.input-wrapper__name-label.valid {\n  color: #3b3b3b;\n}\n.subscription {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.subscription__label {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  font-size: 20px;\n}\n.subscription__label span {\n  max-width: 50px;\n  color: #619B8A;\n  font-size: 22px;\n  font-weight: 500;\n}\n.subscription__increase-btns {\n  display: flex;\n  gap: 15px;\n}\n",""]);const l=a},2597:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var i=n(8081),s=n.n(i),r=n(3645),a=n.n(r)()(s());a.push([e.id,'.popup {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: flex-end;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.5s ease-in;\n}\n.popup__body {\n  max-height: 85vh;\n  background-color: #619B8A;\n  width: 100%;\n  padding: 20px 30px;\n  border-radius: 10px 10px 0 0;\n}\n.popup[data-isopen="true"] {\n  opacity: 1;\n  visibility: visible;\n}\n.flex-gap {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 10px;\n}\n.felx-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n',""]);const l=a},9806:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var i=n(8081),s=n.n(i),r=n(3645),a=n.n(r)()(s());a.push([e.id,".quick-increase-button {\n  color: #f2f2f2;\n  font-family: 'Varela Round';\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  padding: 6px 13px;\n  border-radius: 25px;\n  background-color: #619B8A;\n}\n.quick-increase-button.yellow {\n  background-color: #fbba72;\n  color: #3b3b3b;\n}\n",""]);const l=a},8213:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var i=n(8081),s=n.n(i),r=n(3645),a=n.n(r)()(s());a.push([e.id,'.schedule-day {\n  width: 150px;\n  padding: 20px;\n  background-color: #619B8A;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  opacity: 0.65;\n  transition: opacity 0.3s ease;\n}\n.schedule-day__label,\n.schedule-day__time {\n  color: #f2f2f2;\n}\n.schedule-day__label {\n  font-size: 24px;\n}\n.schedule-day__time {\n  font-family: "Space Grotesk";\n  font-size: 28px;\n}\n.schedule-day[data-isactive=true] {\n  opacity: 1;\n}\n',""]);const l=a},9575:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var i=n(8081),s=n.n(i),r=n(3645),a=n.n(r)()(s());a.push([e.id,".schedule {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  justify-items: center;\n  column-gap: 30px;\n  row-gap: 15px;\n}\n",""]);const l=a},5207:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var i=n(8081),s=n.n(i),r=n(3645),a=n.n(r)()(s());a.push([e.id,".section-title {\n  font-family: 'Inter';\n  color: #3b3b3b;\n  font-size: 22px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n}\n",""]);const l=a},6700:(e,t,n)=>{var i={"./af":2786,"./af.js":2786,"./ar":867,"./ar-dz":4130,"./ar-dz.js":4130,"./ar-kw":6135,"./ar-kw.js":6135,"./ar-ly":6440,"./ar-ly.js":6440,"./ar-ma":7702,"./ar-ma.js":7702,"./ar-sa":6040,"./ar-sa.js":6040,"./ar-tn":7100,"./ar-tn.js":7100,"./ar.js":867,"./az":1083,"./az.js":1083,"./be":9808,"./be.js":9808,"./bg":8338,"./bg.js":8338,"./bm":7438,"./bm.js":7438,"./bn":8905,"./bn-bd":6225,"./bn-bd.js":6225,"./bn.js":8905,"./bo":5684,"./bo.js":5684,"./br":1278,"./br.js":1278,"./bs":622,"./bs.js":622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":877,"./cv.js":877,"./cy":7373,"./cy.js":7373,"./da":4780,"./da.js":4780,"./de":9740,"./de-at":217,"./de-at.js":217,"./de-ch":894,"./de-ch.js":894,"./de.js":9740,"./dv":5300,"./dv.js":5300,"./el":837,"./el.js":837,"./en-au":8348,"./en-au.js":8348,"./en-ca":7925,"./en-ca.js":7925,"./en-gb":2243,"./en-gb.js":2243,"./en-ie":6436,"./en-ie.js":6436,"./en-il":7207,"./en-il.js":7207,"./en-in":4175,"./en-in.js":4175,"./en-nz":6319,"./en-nz.js":6319,"./en-sg":1626,"./en-sg.js":1626,"./eo":2915,"./eo.js":2915,"./es":5655,"./es-do":5251,"./es-do.js":5251,"./es-mx":6112,"./es-mx.js":6112,"./es-us":1146,"./es-us.js":1146,"./es.js":5655,"./et":5603,"./et.js":5603,"./eu":7763,"./eu.js":7763,"./fa":6959,"./fa.js":6959,"./fi":1897,"./fi.js":1897,"./fil":2549,"./fil.js":2549,"./fo":4694,"./fo.js":4694,"./fr":4470,"./fr-ca":3049,"./fr-ca.js":3049,"./fr-ch":2330,"./fr-ch.js":2330,"./fr.js":4470,"./fy":5044,"./fy.js":5044,"./ga":9295,"./ga.js":9295,"./gd":2101,"./gd.js":2101,"./gl":8794,"./gl.js":8794,"./gom-deva":7884,"./gom-deva.js":7884,"./gom-latn":3168,"./gom-latn.js":3168,"./gu":5349,"./gu.js":5349,"./he":4206,"./he.js":4206,"./hi":94,"./hi.js":94,"./hr":316,"./hr.js":316,"./hu":2138,"./hu.js":2138,"./hy-am":1423,"./hy-am.js":1423,"./id":9218,"./id.js":9218,"./is":135,"./is.js":135,"./it":626,"./it-ch":150,"./it-ch.js":150,"./it.js":626,"./ja":9183,"./ja.js":9183,"./jv":4286,"./jv.js":4286,"./ka":2105,"./ka.js":2105,"./kk":7772,"./kk.js":7772,"./km":8758,"./km.js":8758,"./kn":9282,"./kn.js":9282,"./ko":3730,"./ko.js":3730,"./ku":1408,"./ku.js":1408,"./ky":3291,"./ky.js":3291,"./lb":6841,"./lb.js":6841,"./lo":5466,"./lo.js":5466,"./lt":7010,"./lt.js":7010,"./lv":7595,"./lv.js":7595,"./me":9861,"./me.js":9861,"./mi":5493,"./mi.js":5493,"./mk":5966,"./mk.js":5966,"./ml":7341,"./ml.js":7341,"./mn":5115,"./mn.js":5115,"./mr":370,"./mr.js":370,"./ms":9847,"./ms-my":1237,"./ms-my.js":1237,"./ms.js":9847,"./mt":2126,"./mt.js":2126,"./my":6165,"./my.js":6165,"./nb":4924,"./nb.js":4924,"./ne":6744,"./ne.js":6744,"./nl":3901,"./nl-be":9814,"./nl-be.js":9814,"./nl.js":3901,"./nn":3877,"./nn.js":3877,"./oc-lnc":2135,"./oc-lnc.js":2135,"./pa-in":5858,"./pa-in.js":5858,"./pl":4495,"./pl.js":4495,"./pt":9520,"./pt-br":7971,"./pt-br.js":7971,"./pt.js":9520,"./ro":6459,"./ro.js":6459,"./ru":1793,"./ru.js":1793,"./sd":950,"./sd.js":950,"./se":490,"./se.js":490,"./si":124,"./si.js":124,"./sk":4249,"./sk.js":4249,"./sl":4985,"./sl.js":4985,"./sq":1104,"./sq.js":1104,"./sr":9131,"./sr-cyrl":9915,"./sr-cyrl.js":9915,"./sr.js":9131,"./ss":5893,"./ss.js":5893,"./sv":8760,"./sv.js":8760,"./sw":1172,"./sw.js":1172,"./ta":7333,"./ta.js":7333,"./te":3110,"./te.js":3110,"./tet":2095,"./tet.js":2095,"./tg":7321,"./tg.js":7321,"./th":9041,"./th.js":9041,"./tk":9005,"./tk.js":9005,"./tl-ph":5768,"./tl-ph.js":5768,"./tlh":9444,"./tlh.js":9444,"./tr":2397,"./tr.js":2397,"./tzl":8254,"./tzl.js":8254,"./tzm":1106,"./tzm-latn":699,"./tzm-latn.js":699,"./tzm.js":1106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":7691,"./uk.js":7691,"./ur":3795,"./ur.js":3795,"./uz":6791,"./uz-latn":588,"./uz-latn.js":588,"./uz.js":6791,"./vi":5666,"./vi.js":5666,"./x-pseudo":4378,"./x-pseudo.js":4378,"./yo":5805,"./yo.js":5805,"./zh-cn":3839,"./zh-cn.js":3839,"./zh-hk":5726,"./zh-hk.js":5726,"./zh-mo":9807,"./zh-mo.js":9807,"./zh-tw":4152,"./zh-tw.js":4152};function s(e){var t=r(e);return n(t)}function r(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}s.keys=function(){return Object.keys(i)},s.resolve=r,e.exports=s,s.id=6700},6914:(e,t,n)=>{"use strict";var i=n(3379),s=n.n(i),r=n(7795),a=n.n(r),l=n(569),o=n.n(l),c=n(3565),u=n.n(c),d=n(9216),m=n.n(d),p=n(4589),f=n.n(p),y=n(2487),h={};h.styleTagTransform=f(),h.setAttributes=u(),h.insert=o().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=m(),s()(y.Z,h),y.Z&&y.Z.locals&&y.Z.locals},3499:(e,t,n)=>{"use strict";n.d(t,{V:()=>r});var i=n(270);const s=(0,n(2060).n)(((e,t)=>({idCounter:8,incrementIdCounter:()=>e((e=>{e.idCounter++})),visitors:[{id:0,name:"Головкин Тихон",subscription:1,schedule:[{date:1,weekday:{short:"Пн",full:"Понеділок"},isActive:!0,time:"12:00"},{date:2,weekday:{short:"Вт",full:"Вівторок"},isActive:!1,time:"12:00"},{date:3,weekday:{short:"Ср",full:"Середа"},isActive:!0,time:"13:30"},{date:4,weekday:{short:"Чт",full:"Четвер"},isActive:!1,time:"12:00"},{date:5,weekday:{short:"Пт",full:"П'ятниця"},isActive:!0,time:"15:00"},{date:6,weekday:{short:"Сб",full:"Субота"},isActive:!1,time:"12:00"}]},{id:1,name:"Метальников Тарасий",subscription:3,schedule:[{date:1,weekday:{short:"Пн",full:"Понеділок"},isActive:!0,time:"13:00"},{date:2,weekday:{short:"Вт",full:"Вівторок"},isActive:!1,time:"12:00"},{date:3,weekday:{short:"Ср",full:"Середа"},isActive:!0,time:"12:00"},{date:4,weekday:{short:"Чт",full:"Четвер"},isActive:!1,time:"12:00"},{date:5,weekday:{short:"Пт",full:"П'ятниця"},isActive:!0,time:"15:00"},{date:6,weekday:{short:"Сб",full:"Субота"},isActive:!1,time:"12:00"}]},{id:2,name:"Сологубов Иакинф",subscription:0,schedule:[{date:1,weekday:{short:"Пн",full:"Понеділок"},isActive:!0,time:"12:00"},{date:2,weekday:{short:"Вт",full:"Вівторок"},isActive:!1,time:"12:00"},{date:3,weekday:{short:"Ср",full:"Середа"},isActive:!0,time:"13:30"},{date:4,weekday:{short:"Чт",full:"Четвер"},isActive:!1,time:"12:00"},{date:5,weekday:{short:"Пт",full:"П'ятниця"},isActive:!0,time:"12:00"},{date:6,weekday:{short:"Сб",full:"Субота"},isActive:!1,time:"12:00"}]},{id:3,name:"Блинова Георгина",subscription:2,schedule:[{date:1,weekday:{short:"Пн",full:"Понеділок"},isActive:!0,time:"13:00"},{date:2,weekday:{short:"Вт",full:"Вівторок"},isActive:!1,time:"12:00"},{date:3,weekday:{short:"Ср",full:"Середа"},isActive:!0,time:"12:00"},{date:4,weekday:{short:"Чт",full:"Четвер"},isActive:!1,time:"12:00"},{date:5,weekday:{short:"Пт",full:"П'ятниця"},isActive:!0,time:"13:30"},{date:6,weekday:{short:"Сб",full:"Субота"},isActive:!1,time:"12:00"}]},{id:4,name:"Облеухова Ада",subscription:1,schedule:[{date:1,weekday:{short:"Пн",full:"Понеділок"},isActive:!0,time:"12:00"},{date:2,weekday:{short:"Вт",full:"Вівторок"},isActive:!1,time:"12:00"},{date:3,weekday:{short:"Ср",full:"Середа"},isActive:!0,time:"13:30"},{date:4,weekday:{short:"Чт",full:"Четвер"},isActive:!1,time:"12:00"},{date:5,weekday:{short:"Пт",full:"П'ятниця"},isActive:!0,time:"15:00"},{date:6,weekday:{short:"Сб",full:"Субота"},isActive:!1,time:"12:00"}]},{id:5,name:"Люшин Феликс",subscription:4,schedule:[{date:1,weekday:{short:"Пн",full:"Понеділок"},isActive:!0,time:"13:00"},{date:2,weekday:{short:"Вт",full:"Вівторок"},isActive:!1,time:"12:00"},{date:3,weekday:{short:"Ср",full:"Середа"},isActive:!0,time:"12:00"},{date:4,weekday:{short:"Чт",full:"Четвер"},isActive:!1,time:"12:00"},{date:5,weekday:{short:"Пт",full:"П'ятниця"},isActive:!0,time:"12:00"},{date:6,weekday:{short:"Сб",full:"Субота"},isActive:!1,time:"12:00"}]},{id:6,name:"Чернопятов Харалампий",subscription:2,schedule:[{date:1,weekday:{short:"Пн",full:"Понеділок"},isActive:!0,time:"12:00"},{date:2,weekday:{short:"Вт",full:"Вівторок"},isActive:!0,time:"13:00"},{date:3,weekday:{short:"Ср",full:"Середа"},isActive:!0,time:"12:00"},{date:4,weekday:{short:"Чт",full:"Четвер"},isActive:!0,time:"12:00"},{date:5,weekday:{short:"Пт",full:"П'ятниця"},isActive:!0,time:"15:00"},{date:6,weekday:{short:"Сб",full:"Субота"},isActive:!0,time:"12:00"}]}],setVisitorName:(n,i)=>{const s=t().visitors.filter((e=>e.id==n))[0];e((e=>{e.visitors[t().visitors.indexOf(s)].name=i}))},setVisitorSubscription:(n,i)=>{const s=t().visitors.filter((e=>e.id==n))[0];e((e=>{e.visitors[t().visitors.indexOf(s)].subscription=i}))},setVisitorSchedule:(n,i)=>{const s=t().visitors.filter((e=>e.id==n))[0];e((e=>{e.visitors[t().visitors.indexOf(s)].schedule=i}))},addNewVisitor:(n,i,s)=>{e((e=>{e.visitors.push({id:t().idCounter,name:n,subscription:i,schedule:s})})),t().incrementIdCounter()},scheduleTemplate:[{date:1,weekday:{short:"Пн",full:"Понеділок"},isActive:!1,time:"12:00"},{date:2,weekday:{short:"Вт",full:"Вівторок"},isActive:!1,time:"12:00"},{date:3,weekday:{short:"Ср",full:"Середа"},isActive:!1,time:"12:00"},{date:4,weekday:{short:"Чт",full:"Четвер"},isActive:!1,time:"12:00"},{date:5,weekday:{short:"Пт",full:"П'ятниця"},isActive:!1,time:"12:00"},{date:6,weekday:{short:"Сб",full:"Субота"},isActive:!1,time:"12:00"}],todaysVisitors:[],setTodaysVisitors:t=>{e((e=>{e.todaysVisitors=t}))},switchTodaysVisitorAttendance:n=>{const i=t().todaysVisitors.filter((e=>e.id==n))[0],s=t().todaysVisitors.indexOf(i);e((e=>{e.todaysVisitors[s].isCame=!e.todaysVisitors[s].isCame}))},addTodaysVisitor:t=>{e((e=>{e.todaysVisitors.push(t)}))}}))),r=(0,i.Ue)(s)}}]);