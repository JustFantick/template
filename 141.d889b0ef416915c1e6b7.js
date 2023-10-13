/*! For license information please see 141.d889b0ef416915c1e6b7.js.LICENSE.txt */
"use strict";(self.webpackChunktodo_react=self.webpackChunktodo_react||[]).push([[141],{3250:(e,t,n)=>{var r=n(7294),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=r.useState,c=r.useEffect,s=r.useLayoutEffect,a=r.useDebugValue;function u(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!o(e,n)}catch(e){return!0}}var f="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=i({inst:{value:n,getSnapshot:t}}),o=r[0].inst,f=r[1];return s((function(){o.value=n,o.getSnapshot=t,u(o)&&f({inst:o})}),[e,n,t]),c((function(){return u(o)&&f({inst:o}),e((function(){u(o)&&f({inst:o})}))}),[e]),a(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:f},139:(e,t,n)=>{var r=n(7294),o=n(1688),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},c=o.useSyncExternalStore,s=r.useRef,a=r.useEffect,u=r.useMemo,f=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var l=s(null);if(null===l.current){var p={hasValue:!1,value:null};l.current=p}else p=l.current;l=u((function(){function e(e){if(!a){if(a=!0,c=e,e=r(e),void 0!==o&&p.hasValue){var t=p.value;if(o(t,e))return s=t}return s=e}if(t=s,i(c,e))return t;var n=r(e);return void 0!==o&&o(t,n)?t:(c=e,s=n)}var c,s,a=!1,u=void 0===n?null:n;return[function(){return e(t())},null===u?void 0:function(){return e(u())}]}),[t,n,r,o]);var _=c(e,l[0],l[1]);return a((function(){p.hasValue=!0,p.value=_}),[_]),f(_),_}},1688:(e,t,n)=>{e.exports=n(3250)},2798:(e,t,n)=>{e.exports=n(139)},270:(e,t,n)=>{n.d(t,{Ue:()=>a});const r=e=>{let t;const n=new Set,r=(e,r)=>{const o="function"==typeof e?e(t):e;if(!Object.is(o,t)){const e=t;t=(null!=r?r:"object"!=typeof o)?o:Object.assign({},t,o),n.forEach((n=>n(t,e)))}},o=()=>t,i={setState:r,getState:o,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}};return t=e(r,o,i),i};var o=n(7294),i=n(2798);const{useSyncExternalStoreWithSelector:c}=i,s=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t="function"==typeof e?(e=>e?r(e):r)(e):e,n=(e,n)=>function(e,t=e.getState,n){const r=c(e.subscribe,e.getState,e.getServerState||e.getState,t,n);return(0,o.useDebugValue)(r),r}(t,e,n);return Object.assign(n,t),n},a=e=>e?s(e):s},2060:(e,t,n)=>{n.d(t,{n:()=>q});var r=Symbol.for("immer-nothing"),o=Symbol.for("immer-draftable"),i=Symbol.for("immer-state");function c(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var s=Object.getPrototypeOf;function a(e){return!!e&&!!e[i]}function u(e){return!!e&&(l(e)||Array.isArray(e)||!!e[o]||!!e.constructor?.[o]||h(e)||b(e))}var f=Object.prototype.constructor.toString();function l(e){if(!e||"object"!=typeof e)return!1;const t=s(e);if(null===t)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===f}function p(e,t){0===_(e)?Object.entries(e).forEach((([n,r])=>{t(n,r,e)})):e.forEach(((n,r)=>t(r,n,e)))}function _(e){const t=e[i];return t?t.type_:Array.isArray(e)?1:h(e)?2:b(e)?3:0}function d(e,t){return 2===_(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function y(e,t,n){const r=_(e);2===r?e.set(t,n):3===r?e.add(n):e[t]=n}function h(e){return e instanceof Map}function b(e){return e instanceof Set}function v(e){return e.copy_||e.base_}function S(e,t){if(h(e))return new Map(e);if(b(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!t&&l(e)){if(!s(e)){const t=Object.create(null);return Object.assign(t,e)}return{...e}}const n=Object.getOwnPropertyDescriptors(e);delete n[i];let r=Reflect.ownKeys(n);for(let t=0;t<r.length;t++){const o=r[t],i=n[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(n[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(s(e),n)}function g(e,t=!1){return w(e)||a(e)||!u(e)||(_(e)>1&&(e.set=e.add=e.clear=e.delete=m),Object.freeze(e),t&&p(e,((e,t)=>g(t,!0)))),e}function m(){c(2)}function w(e){return Object.isFrozen(e)}var P,O={};function z(e){const t=O[e];return t||c(0),t}function j(){return P}function E(e,t){t&&(z("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function D(e){A(e),e.drafts_.forEach(C),e.drafts_=null}function A(e){e===P&&(P=e.parent_)}function F(e){return P={drafts_:[],parent_:P,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function C(e){const t=e[i];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function x(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return void 0!==e&&e!==n?(n[i].modified_&&(D(t),c(4)),u(e)&&(e=k(t,e),t.parent_||R(t,e)),t.patches_&&z("Patches").generateReplacementPatches_(n[i].base_,e,t.patches_,t.inversePatches_)):e=k(t,n,[]),D(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==r?e:void 0}function k(e,t,n){if(w(t))return t;const r=t[i];if(!r)return p(t,((o,i)=>M(e,r,t,o,i,n))),t;if(r.scope_!==e)return t;if(!r.modified_)return R(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const t=r.copy_;let o=t,i=!1;3===r.type_&&(o=new Set(t),t.clear(),i=!0),p(o,((o,c)=>M(e,r,t,o,c,n,i))),R(e,t,!1),n&&e.patches_&&z("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function M(e,t,n,r,o,i,c){if(a(o)){const c=k(e,o,i&&t&&3!==t.type_&&!d(t.assigned_,r)?i.concat(r):void 0);if(y(n,r,c),!a(c))return;e.canAutoFreeze_=!1}else c&&n.add(o);if(u(o)&&!w(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;k(e,o),t&&t.scope_.parent_||R(e,o)}}function R(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&g(t,n)}var N={get(e,t){if(t===i)return e;const n=v(e);if(!d(n,t))return function(e,t,n){const r=K(t,n);return r?"value"in r?r.value:r.get?.call(e.draft_):void 0}(e,n,t);const r=n[t];return e.finalized_||!u(r)?r:r===W(e.base_,t)?(I(e),e.copy_[t]=L(r,e)):r},has:(e,t)=>t in v(e),ownKeys:e=>Reflect.ownKeys(v(e)),set(e,t,n){const r=K(v(e),t);if(r?.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const r=W(v(e),t),s=r?.[i];if(s&&s.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(((o=n)===(c=r)?0!==o||1/o==1/c:o!=o&&c!=c)&&(void 0!==n||d(e.base_,t)))return!0;I(e),U(e)}var o,c;return e.copy_[t]===n&&(void 0!==n||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==W(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,I(e),U(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const n=v(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty(){c(11)},getPrototypeOf:e=>s(e.base_),setPrototypeOf(){c(12)}},V={};function W(e,t){const n=e[i];return(n?v(n):e)[t]}function K(e,t){if(!(t in e))return;let n=s(e);for(;n;){const e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=s(n)}}function U(e){e.modified_||(e.modified_=!0,e.parent_&&U(e.parent_))}function I(e){e.copy_||(e.copy_=S(e.base_,e.scope_.immer_.useStrictShallowCopy_))}function L(e,t){const n=h(e)?z("MapSet").proxyMap_(e,t):b(e)?z("MapSet").proxySet_(e,t):function(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:j(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=r,i=N;n&&(o=[r],i=V);const{revoke:c,proxy:s}=Proxy.revocable(o,i);return r.draft_=s,r.revoke_=c,s}(e,t);return(t?t.scope_:j()).drafts_.push(n),n}function T(e){if(!u(e)||w(e))return e;const t=e[i];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=S(e,t.scope_.immer_.useStrictShallowCopy_)}else n=S(e,!0);return p(n,((e,t)=>{y(n,e,T(t))})),t&&(t.finalized_=!1),n}p(N,((e,t)=>{V[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),V.deleteProperty=function(e,t){return V.set.call(this,e,t,void 0)},V.set=function(e,t,n){return N.set.call(this,e[0],t,n,e[0])};var X=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,n)=>{if("function"==typeof e&&"function"!=typeof t){const n=t;t=e;const r=this;return function(e=n,...o){return r.produce(e,(e=>t.call(this,e,...o)))}}let o;if("function"!=typeof t&&c(6),void 0!==n&&"function"!=typeof n&&c(7),u(e)){const r=F(this),i=L(e,void 0);let c=!0;try{o=t(i),c=!1}finally{c?D(r):A(r)}return E(r,n),x(o,r)}if(!e||"object"!=typeof e){if(o=t(e),void 0===o&&(o=e),o===r&&(o=void 0),this.autoFreeze_&&g(o,!0),n){const t=[],r=[];z("Patches").generateReplacementPatches_(e,o,t,r),n(t,r)}return o}c(1)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...n)=>this.produceWithPatches(t,(t=>e(t,...n)));let n,r;return[this.produce(e,t,((e,t)=>{n=e,r=t})),n,r]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){var t;u(e)||c(8),a(e)&&(a(t=e)||c(10),e=T(t));const n=F(this),r=L(e,void 0);return r[i].isManual_=!0,A(n),r}finishDraft(e,t){const n=e&&e[i];n&&n.isManual_||c(9);const{scope_:r}=n;return E(r,t),x(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}n>-1&&(t=t.slice(n+1));const r=z("Patches").applyPatches_;return a(e)?r(e,t):this.produce(e,(e=>r(e,t)))}},$=X.produce;X.produceWithPatches.bind(X),X.setAutoFreeze.bind(X),X.setUseStrictShallowCopy.bind(X),X.applyPatches.bind(X),X.createDraft.bind(X),X.finishDraft.bind(X);const q=e=>(t,n,r)=>(r.setState=(e,n,...r)=>{const o="function"==typeof e?$(e):e;return t(o,n,...r)},e(r.setState,n,r))}}]);