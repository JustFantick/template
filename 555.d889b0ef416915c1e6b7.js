"use strict";(self.webpackChunktodo_react=self.webpackChunktodo_react||[]).push([[555],{9555:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var r=n(7294),a=n(3379),l=n.n(a),i=n(7795),o=n.n(i),s=n(569),u=n.n(s),c=n(3565),d=n.n(c),m=n(9216),f=n.n(m),p=n(4589),b=n.n(p),h=n(152),g={};g.styleTagTransform=b(),g.setAttributes=d(),g.insert=u().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=f(),l()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;var y=n(8577),v=n(6633),x=n(6912),E=n(126),S=n(3832),w=n(795),Z={};Z.styleTagTransform=b(),Z.setAttributes=d(),Z.insert=u().bind(null,"head"),Z.domAPI=o(),Z.insertStyleElement=f(),l()(w.Z,Z),w.Z&&w.Z.locals&&w.Z.locals;var _=n(7965);function A(e){var t=e.children,n=e.onSubmit;return r.createElement(_.E.button,{whileHover:{scale:1.05},whileTap:{scale:.9},transition:{duration:.5,type:"spring"},className:"submit-btn",onClick:function(e){e.preventDefault(),n()}},t)}var N=n(3499);function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);i=!0);}catch(e){o=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(o)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function I(){var e=T((0,r.useState)(""),2),t=e[0],n=e[1],a=T((0,r.useState)("ПІБ"),2),l=a[0],i=a[1],o=T((0,r.useState)(!0),2),s=o[0],u=o[1],c=T((0,r.useState)(0),2),d=c[0],m=c[1],f=(0,N.V)((function(e){return e.scheduleTemplate})),p=T((0,r.useState)(f),2),b=p[0],h=p[1],g=(0,N.V)((function(e){return e.addNewVisitor}));return r.createElement(y.Z,null,r.createElement("form",{className:"registration"},r.createElement("div",{className:"registration__section"},r.createElement(v.N,null,"Заповніть поля вводу"),r.createElement(x.f,{name:t,setName:n,label:l,isValid:s}),r.createElement(E.p,{subscriptionValue:d,setSubscription:m})),r.createElement("div",{className:"registration__section"},r.createElement(v.N,null,"Визначте графік відвідувань"),r.createElement(S.Z,{schedule:b,setSchedule:h})),r.createElement("div",{className:"registration__sumbit-btn"},r.createElement(A,{onSubmit:function(){var e=function(){return window.scrollTo({top:0,behavior:"smooth"})};""===t?(i("Заповніть поле"),u(!1),e()):/^\d+$/.test(t)?(i("Поле не повинно містити лише числа"),u(!1),e()):(u(!0),g(t,d,b),n(""),i("ПІБ"),u(!0),m(0),h(f))}},"Зареэструвати"))))}},152:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(8081),a=n.n(r),l=n(3645),i=n.n(l)()(a());i.push([e.id,".registration {\n  padding-top: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n}\n.registration__section {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n.registration__sumbit-btn {\n  align-self: center;\n}\n",""]);const o=i},795:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(8081),a=n.n(r),l=n(3645),i=n.n(l)()(a());i.push([e.id,".submit-btn {\n  padding: 15px 20px;\n  font-weight: 600;\n  border-radius: 10px;\n  background-color: #619B8A;\n  color: #f2f2f2;\n  font-size: 20px;\n  box-shadow: 1px 5px 4px 0 rgba(0, 0, 0, 0.5);\n}\n",""]);const o=i}}]);