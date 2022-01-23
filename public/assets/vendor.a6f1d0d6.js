var rt={exports:{}},K={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Qm=Object.getOwnPropertySymbols,KT=Object.prototype.hasOwnProperty,GT=Object.prototype.propertyIsEnumerable;function QT(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function YT(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(s){return e[s]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(s){i[s]=s}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Ym=YT()?Object.assign:function(t,e){for(var n,r=QT(t),i,s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var o in n)KT.call(n,o)&&(r[o]=n[o]);if(Qm){i=Qm(n);for(var a=0;a<i.length;a++)GT.call(n,i[a])&&(r[i[a]]=n[i[a]])}}return r};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xc=Ym,vi=60103,Jm=60106;K.Fragment=60107;K.StrictMode=60108;K.Profiler=60114;var Xm=60109,Zm=60110,eg=60112;K.Suspense=60113;var tg=60115,ng=60116;if(typeof Symbol=="function"&&Symbol.for){var Vt=Symbol.for;vi=Vt("react.element"),Jm=Vt("react.portal"),K.Fragment=Vt("react.fragment"),K.StrictMode=Vt("react.strict_mode"),K.Profiler=Vt("react.profiler"),Xm=Vt("react.provider"),Zm=Vt("react.context"),eg=Vt("react.forward_ref"),K.Suspense=Vt("react.suspense"),tg=Vt("react.memo"),ng=Vt("react.lazy")}var rg=typeof Symbol=="function"&&Symbol.iterator;function JT(t){return t===null||typeof t!="object"?null:(t=rg&&t[rg]||t["@@iterator"],typeof t=="function"?t:null)}function Ks(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ig={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sg={};function wi(t,e,n){this.props=t,this.context=e,this.refs=sg,this.updater=n||ig}wi.prototype.isReactComponent={};wi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error(Ks(85));this.updater.enqueueSetState(this,t,e,"setState")};wi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function og(){}og.prototype=wi.prototype;function Zc(t,e,n){this.props=t,this.context=e,this.refs=sg,this.updater=n||ig}var eh=Zc.prototype=new og;eh.constructor=Zc;Xc(eh,wi.prototype);eh.isPureReactComponent=!0;var th={current:null},ag=Object.prototype.hasOwnProperty,ug={key:!0,ref:!0,__self:!0,__source:!0};function lg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ag.call(e,r)&&!ug.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:vi,type:t,key:s,ref:o,props:i,_owner:th.current}}function XT(t,e){return{$$typeof:vi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function nh(t){return typeof t=="object"&&t!==null&&t.$$typeof===vi}function ZT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var cg=/\/+/g;function rh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ZT(""+t.key):e.toString(36)}function su(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case vi:case Jm:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+rh(o,0):r,Array.isArray(i)?(n="",t!=null&&(n=t.replace(cg,"$&/")+"/"),su(i,e,n,"",function(l){return l})):i!=null&&(nh(i)&&(i=XT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(cg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Array.isArray(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+rh(s,a);o+=su(s,e,n,u,i)}else if(u=JT(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+rh(s,a++),o+=su(s,e,n,u,i);else if(s==="object")throw e=""+t,Error(Ks(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e));return o}function ou(t,e,n){if(t==null)return t;var r=[],i=0;return su(t,r,"","",function(s){return e.call(n,s,i++)}),r}function e1(t){if(t._status===-1){var e=t._result;e=e(),t._status=0,t._result=e,e.then(function(n){t._status===0&&(n=n.default,t._status=1,t._result=n)},function(n){t._status===0&&(t._status=2,t._result=n)})}if(t._status===1)return t._result;throw t._result}var hg={current:null};function dn(){var t=hg.current;if(t===null)throw Error(Ks(321));return t}var t1={ReactCurrentDispatcher:hg,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:th,IsSomeRendererActing:{current:!1},assign:Xc};K.Children={map:ou,forEach:function(t,e,n){ou(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ou(t,function(){e++}),e},toArray:function(t){return ou(t,function(e){return e})||[]},only:function(t){if(!nh(t))throw Error(Ks(143));return t}};K.Component=wi;K.PureComponent=Zc;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=t1;K.cloneElement=function(t,e,n){if(t==null)throw Error(Ks(267,t));var r=Xc({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=th.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)ag.call(e,u)&&!ug.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:vi,type:t.type,key:i,ref:s,props:r,_owner:o}};K.createContext=function(t,e){return e===void 0&&(e=null),t={$$typeof:Zm,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider={$$typeof:Xm,_context:t},t.Consumer=t};K.createElement=lg;K.createFactory=function(t){var e=lg.bind(null,t);return e.type=t,e};K.createRef=function(){return{current:null}};K.forwardRef=function(t){return{$$typeof:eg,render:t}};K.isValidElement=nh;K.lazy=function(t){return{$$typeof:ng,_payload:{_status:-1,_result:t},_init:e1}};K.memo=function(t,e){return{$$typeof:tg,type:t,compare:e===void 0?null:e}};K.useCallback=function(t,e){return dn().useCallback(t,e)};K.useContext=function(t,e){return dn().useContext(t,e)};K.useDebugValue=function(){};K.useEffect=function(t,e){return dn().useEffect(t,e)};K.useImperativeHandle=function(t,e,n){return dn().useImperativeHandle(t,e,n)};K.useLayoutEffect=function(t,e){return dn().useLayoutEffect(t,e)};K.useMemo=function(t,e){return dn().useMemo(t,e)};K.useReducer=function(t,e,n){return dn().useReducer(t,e,n)};K.useRef=function(t){return dn().useRef(t)};K.useState=function(t){return dn().useState(t)};K.version="17.0.2";rt.exports=K;var dg={exports:{}},bt={},fg={exports:{}},pg={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){var e,n,r,i;if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var u=null,l=null,c=function(){if(u!==null)try{var R=t.unstable_now();u(!0,R),u=null}catch(j){throw setTimeout(c,0),j}};e=function(R){u!==null?setTimeout(e,0,R):(u=R,setTimeout(c,0))},n=function(R,j){l=setTimeout(R,j)},r=function(){clearTimeout(l)},t.unstable_shouldYield=function(){return!1},i=t.unstable_forceFrameRate=function(){}}else{var h=window.setTimeout,d=window.clearTimeout;if(typeof console!="undefined"){var g=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof g!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var y=!1,I=null,p=-1,f=5,m=0;t.unstable_shouldYield=function(){return t.unstable_now()>=m},i=function(){},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):f=0<R?Math.floor(1e3/R):5};var w=new MessageChannel,_=w.port2;w.port1.onmessage=function(){if(I!==null){var R=t.unstable_now();m=R+f;try{I(!0,R)?_.postMessage(null):(y=!1,I=null)}catch(j){throw _.postMessage(null),j}}else y=!1},e=function(R){I=R,y||(y=!0,_.postMessage(null))},n=function(R,j){p=h(function(){R(t.unstable_now())},j)},r=function(){d(p),p=-1}}function $(R,j){var z=R.length;R.push(j);e:for(;;){var de=z-1>>>1,Le=R[de];if(Le!==void 0&&0<V(Le,j))R[de]=j,R[z]=Le,z=de;else break e}}function A(R){return R=R[0],R===void 0?null:R}function L(R){var j=R[0];if(j!==void 0){var z=R.pop();if(z!==j){R[0]=z;e:for(var de=0,Le=R.length;de<Le;){var _r=2*(de+1)-1,Ir=R[_r],Hs=_r+1,yi=R[Hs];if(Ir!==void 0&&0>V(Ir,z))yi!==void 0&&0>V(yi,Ir)?(R[de]=yi,R[Hs]=z,de=Hs):(R[de]=Ir,R[_r]=z,de=_r);else if(yi!==void 0&&0>V(yi,z))R[de]=yi,R[Hs]=z,de=Hs;else break e}}return j}return null}function V(R,j){var z=R.sortIndex-j.sortIndex;return z!==0?z:R.id-j.id}var x=[],we=[],Gc=1,Rt=null,Ge=3,iu=!1,wr=!1,Ws=!1;function Qc(R){for(var j=A(we);j!==null;){if(j.callback===null)L(we);else if(j.startTime<=R)L(we),j.sortIndex=j.expirationTime,$(x,j);else break;j=A(we)}}function Yc(R){if(Ws=!1,Qc(R),!wr)if(A(x)!==null)wr=!0,e(Jc);else{var j=A(we);j!==null&&n(Yc,j.startTime-R)}}function Jc(R,j){wr=!1,Ws&&(Ws=!1,r()),iu=!0;var z=Ge;try{for(Qc(j),Rt=A(x);Rt!==null&&(!(Rt.expirationTime>j)||R&&!t.unstable_shouldYield());){var de=Rt.callback;if(typeof de=="function"){Rt.callback=null,Ge=Rt.priorityLevel;var Le=de(Rt.expirationTime<=j);j=t.unstable_now(),typeof Le=="function"?Rt.callback=Le:Rt===A(x)&&L(x),Qc(j)}else L(x);Rt=A(x)}if(Rt!==null)var _r=!0;else{var Ir=A(we);Ir!==null&&n(Yc,Ir.startTime-j),_r=!1}return _r}finally{Rt=null,Ge=z,iu=!1}}var HT=i;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){wr||iu||(wr=!0,e(Jc))},t.unstable_getCurrentPriorityLevel=function(){return Ge},t.unstable_getFirstCallbackNode=function(){return A(x)},t.unstable_next=function(R){switch(Ge){case 1:case 2:case 3:var j=3;break;default:j=Ge}var z=Ge;Ge=j;try{return R()}finally{Ge=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=HT,t.unstable_runWithPriority=function(R,j){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var z=Ge;Ge=R;try{return j()}finally{Ge=z}},t.unstable_scheduleCallback=function(R,j,z){var de=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?de+z:de):z=de,R){case 1:var Le=-1;break;case 2:Le=250;break;case 5:Le=1073741823;break;case 4:Le=1e4;break;default:Le=5e3}return Le=z+Le,R={id:Gc++,callback:j,priorityLevel:R,startTime:z,expirationTime:Le,sortIndex:-1},z>de?(R.sortIndex=z,$(we,R),A(x)===null&&R===A(we)&&(Ws?r():Ws=!0,n(Yc,z-de))):(R.sortIndex=Le,$(x,R),wr||iu||(wr=!0,e(Jc))),R},t.unstable_wrapCallback=function(R){var j=Ge;return function(){var z=Ge;Ge=j;try{return R.apply(this,arguments)}finally{Ge=z}}}})(pg);fg.exports=pg;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var au=rt.exports,ie=Ym,ke=fg.exports;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!au)throw Error(C(227));var mg=new Set,Gs={};function Er(t,e){_i(t,e),_i(t+"Capture",e)}function _i(t,e){for(Gs[t]=e,t=0;t<e.length;t++)mg.add(e[t])}var fn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),n1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gg=Object.prototype.hasOwnProperty,yg={},vg={};function r1(t){return gg.call(vg,t)?!0:gg.call(yg,t)?!1:n1.test(t)?vg[t]=!0:(yg[t]=!0,!1)}function i1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function s1(t,e,n,r){if(e===null||typeof e=="undefined"||i1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function it(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Me[t]=new it(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Me[e]=new it(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Me[t]=new it(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Me[t]=new it(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Me[t]=new it(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Me[t]=new it(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Me[t]=new it(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Me[t]=new it(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Me[t]=new it(t,5,!1,t.toLowerCase(),null,!1,!1)});var ih=/[\-:]([a-z])/g;function sh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ih,sh);Me[e]=new it(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ih,sh);Me[e]=new it(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ih,sh);Me[e]=new it(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Me[t]=new it(t,1,!1,t.toLowerCase(),null,!1,!1)});Me.xlinkHref=new it("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Me[t]=new it(t,1,!1,t.toLowerCase(),null,!0,!0)});function oh(t,e,n,r){var i=Me.hasOwnProperty(e)?Me[e]:null,s=i!==null?i.type===0:r?!1:!(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N");s||(s1(e,n,i,r)&&(n=null),r||i===null?r1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Tr=au.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qs=60103,Sr=60106,On=60107,ah=60108,Ys=60114,uh=60109,lh=60110,uu=60112,Js=60113,lu=60120,cu=60115,ch=60116,hh=60121,dh=60128,wg=60129,fh=60130,ph=60131;if(typeof Symbol=="function"&&Symbol.for){var Ce=Symbol.for;Qs=Ce("react.element"),Sr=Ce("react.portal"),On=Ce("react.fragment"),ah=Ce("react.strict_mode"),Ys=Ce("react.profiler"),uh=Ce("react.provider"),lh=Ce("react.context"),uu=Ce("react.forward_ref"),Js=Ce("react.suspense"),lu=Ce("react.suspense_list"),cu=Ce("react.memo"),ch=Ce("react.lazy"),hh=Ce("react.block"),Ce("react.scope"),dh=Ce("react.opaque.id"),wg=Ce("react.debug_trace_mode"),fh=Ce("react.offscreen"),ph=Ce("react.legacy_hidden")}var _g=typeof Symbol=="function"&&Symbol.iterator;function Xs(t){return t===null||typeof t!="object"?null:(t=_g&&t[_g]||t["@@iterator"],typeof t=="function"?t:null)}var mh;function Zs(t){if(mh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);mh=e&&e[1]||""}return`
`+mh+t}var gh=!1;function hu(t,e){if(!t||gh)return"";gh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a])return`
`+i[o].replace(" at new "," at ");while(1<=o&&0<=a);break}}}finally{gh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Zs(t):""}function o1(t){switch(t.tag){case 5:return Zs(t.type);case 16:return Zs("Lazy");case 13:return Zs("Suspense");case 19:return Zs("SuspenseList");case 0:case 2:case 15:return t=hu(t.type,!1),t;case 11:return t=hu(t.type.render,!1),t;case 22:return t=hu(t.type._render,!1),t;case 1:return t=hu(t.type,!0),t;default:return""}}function Ii(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case On:return"Fragment";case Sr:return"Portal";case Ys:return"Profiler";case ah:return"StrictMode";case Js:return"Suspense";case lu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case lh:return(t.displayName||"Context")+".Consumer";case uh:return(t._context.displayName||"Context")+".Provider";case uu:var e=t.render;return e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case cu:return Ii(t.type);case hh:return Ii(t._render);case ch:e=t._payload,t=t._init;try{return Ii(t(e))}catch{}}return null}function xn(t){switch(typeof t){case"boolean":case"number":case"object":case"string":case"undefined":return t;default:return""}}function Ig(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function a1(t){var e=Ig(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function du(t){t._valueTracker||(t._valueTracker=a1(t))}function Eg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Ig(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function fu(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function yh(t,e){var n=e.checked;return ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Tg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=xn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Sg(t,e){e=e.checked,e!=null&&oh(t,"checked",e,!1)}function vh(t,e){Sg(t,e);var n=xn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wh(t,e.type,n):e.hasOwnProperty("defaultValue")&&wh(t,e.type,xn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function kg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wh(t,e,n){(e!=="number"||fu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}function u1(t){var e="";return au.Children.forEach(t,function(n){n!=null&&(e+=n)}),e}function _h(t,e){return t=ie({children:void 0},e),(e=u1(e.children))&&(t.children=e),t}function Ei(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+xn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ih(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Cg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:xn(n)}}function Ag(t,e){var n=xn(e.value),r=xn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ng(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}var Eh={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function Rg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Th(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Rg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var pu,bg=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!==Eh.svg||"innerHTML"in t)t.innerHTML=e;else{for(pu=pu||document.createElement("div"),pu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=pu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function eo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var to={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},l1=["Webkit","ms","Moz","O"];Object.keys(to).forEach(function(t){l1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),to[e]=to[t]})});function Dg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||to.hasOwnProperty(t)&&to[t]?(""+e).trim():e+"px"}function Pg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Dg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var c1=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sh(t,e){if(e){if(c1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(!(typeof e.dangerouslySetInnerHTML=="object"&&"__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function kh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function Ch(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ah=null,Ti=null,Si=null;function Og(t){if(t=Io(t)){if(typeof Ah!="function")throw Error(C(280));var e=t.stateNode;e&&(e=Pu(e),Ah(t.stateNode,t.type,e))}}function xg(t){Ti?Si?Si.push(t):Si=[t]:Ti=t}function Lg(){if(Ti){var t=Ti,e=Si;if(Si=Ti=null,Og(t),e)for(t=0;t<e.length;t++)Og(e[t])}}function Nh(t,e){return t(e)}function Mg(t,e,n,r,i){return t(e,n,r,i)}function Rh(){}var $g=Nh,kr=!1,bh=!1;function Dh(){(Ti!==null||Si!==null)&&(Rh(),Lg())}function h1(t,e,n){if(bh)return t(e,n);bh=!0;try{return $g(t,e,n)}finally{bh=!1,Dh()}}function no(t,e){var n=t.stateNode;if(n===null)return null;var r=Pu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var Ph=!1;if(fn)try{var ro={};Object.defineProperty(ro,"passive",{get:function(){Ph=!0}}),window.addEventListener("test",ro,ro),window.removeEventListener("test",ro,ro)}catch{Ph=!1}function d1(t,e,n,r,i,s,o,a,u){var l=Array.prototype.slice.call(arguments,3);try{e.apply(n,l)}catch(c){this.onError(c)}}var io=!1,mu=null,gu=!1,Oh=null,f1={onError:function(t){io=!0,mu=t}};function p1(t,e,n,r,i,s,o,a,u){io=!1,mu=null,d1.apply(f1,arguments)}function m1(t,e,n,r,i,s,o,a,u){if(p1.apply(this,arguments),io){if(io){var l=mu;io=!1,mu=null}else throw Error(C(198));gu||(gu=!0,Oh=l)}}function Cr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&1026)!=0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Fg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ug(t){if(Cr(t)!==t)throw Error(C(188))}function g1(t){var e=t.alternate;if(!e){if(e=Cr(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ug(i),t;if(s===r)return Ug(i),e;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function Vg(t){if(t=g1(t),!t)return null;for(var e=t;;){if(e.tag===5||e.tag===6)return e;if(e.child)e.child.return=e,e=e.child;else{if(e===t)break;for(;!e.sibling;){if(!e.return||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}}return null}function jg(t,e){for(var n=t.alternate;e!==null;){if(e===t||e===n)return!0;e=e.return}return!1}var Bg,xh,qg,zg,Lh=!1,Kt=[],Ln=null,Mn=null,$n=null,so=new Map,oo=new Map,ao=[],Wg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mh(t,e,n,r,i){return{blockedOn:t,domEventName:e,eventSystemFlags:n|16,nativeEvent:i,targetContainers:[r]}}function Hg(t,e){switch(t){case"focusin":case"focusout":Ln=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":$n=null;break;case"pointerover":case"pointerout":so.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(e.pointerId)}}function uo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t=Mh(e,n,r,i,s),e!==null&&(e=Io(e),e!==null&&xh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function y1(t,e,n,r,i){switch(e){case"focusin":return Ln=uo(Ln,t,e,n,r,i),!0;case"dragenter":return Mn=uo(Mn,t,e,n,r,i),!0;case"mouseover":return $n=uo($n,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return so.set(s,uo(so.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,oo.set(s,uo(oo.get(s)||null,t,e,n,r,i)),!0}return!1}function v1(t){var e=Ar(t.target);if(e!==null){var n=Cr(e);if(n!==null){if(e=n.tag,e===13){if(e=Fg(n),e!==null){t.blockedOn=e,zg(t.lanePriority,function(){ke.unstable_runWithPriority(t.priority,function(){qg(n)})});return}}else if(e===3&&n.stateNode.hydrate){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function yu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Bh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null)return e=Io(n),e!==null&&xh(e),t.blockedOn=n,!1;e.shift()}return!0}function Kg(t,e,n){yu(t)&&n.delete(e)}function w1(){for(Lh=!1;0<Kt.length;){var t=Kt[0];if(t.blockedOn!==null){t=Io(t.blockedOn),t!==null&&Bg(t);break}for(var e=t.targetContainers;0<e.length;){var n=Bh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null){t.blockedOn=n;break}e.shift()}t.blockedOn===null&&Kt.shift()}Ln!==null&&yu(Ln)&&(Ln=null),Mn!==null&&yu(Mn)&&(Mn=null),$n!==null&&yu($n)&&($n=null),so.forEach(Kg),oo.forEach(Kg)}function lo(t,e){t.blockedOn===e&&(t.blockedOn=null,Lh||(Lh=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,w1)))}function Gg(t){function e(i){return lo(i,t)}if(0<Kt.length){lo(Kt[0],t);for(var n=1;n<Kt.length;n++){var r=Kt[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ln!==null&&lo(Ln,t),Mn!==null&&lo(Mn,t),$n!==null&&lo($n,t),so.forEach(e),oo.forEach(e),n=0;n<ao.length;n++)r=ao[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ao.length&&(n=ao[0],n.blockedOn===null);)v1(n),n.blockedOn===null&&ao.shift()}function vu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ki={animationend:vu("Animation","AnimationEnd"),animationiteration:vu("Animation","AnimationIteration"),animationstart:vu("Animation","AnimationStart"),transitionend:vu("Transition","TransitionEnd")},$h={},Qg={};fn&&(Qg=document.createElement("div").style,"AnimationEvent"in window||(delete ki.animationend.animation,delete ki.animationiteration.animation,delete ki.animationstart.animation),"TransitionEvent"in window||delete ki.transitionend.transition);function wu(t){if($h[t])return $h[t];if(!ki[t])return t;var e=ki[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Qg)return $h[t]=e[n];return t}var Yg=wu("animationend"),Jg=wu("animationiteration"),Xg=wu("animationstart"),Zg=wu("transitionend"),ey=new Map,Fh=new Map,_1=["abort","abort",Yg,"animationEnd",Jg,"animationIteration",Xg,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Zg,"transitionEnd","waiting","waiting"];function Uh(t,e){for(var n=0;n<t.length;n+=2){var r=t[n],i=t[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),Fh.set(r,e),ey.set(r,i),Er(i,[r])}}var I1=ke.unstable_now;I1();var X=8;function Ci(t){if((1&t)!=0)return X=15,1;if((2&t)!=0)return X=14,2;if((4&t)!=0)return X=13,4;var e=24&t;return e!==0?(X=12,e):(t&32)!=0?(X=11,32):(e=192&t,e!==0?(X=10,e):(t&256)!=0?(X=9,256):(e=3584&t,e!==0?(X=8,e):(t&4096)!=0?(X=7,4096):(e=4186112&t,e!==0?(X=6,e):(e=62914560&t,e!==0?(X=5,e):t&67108864?(X=4,67108864):(t&134217728)!=0?(X=3,134217728):(e=805306368&t,e!==0?(X=2,e):(1073741824&t)!=0?(X=1,1073741824):(X=8,t))))))}function E1(t){switch(t){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function T1(t){switch(t){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(C(358,t))}}function co(t,e){var n=t.pendingLanes;if(n===0)return X=0;var r=0,i=0,s=t.expiredLanes,o=t.suspendedLanes,a=t.pingedLanes;if(s!==0)r=s,i=X=15;else if(s=n&134217727,s!==0){var u=s&~o;u!==0?(r=Ci(u),i=X):(a&=s,a!==0&&(r=Ci(a),i=X))}else s=n&~o,s!==0?(r=Ci(s),i=X):a!==0&&(r=Ci(a),i=X);if(r===0)return 0;if(r=31-Fn(r),r=n&((0>r?0:1<<r)<<1)-1,e!==0&&e!==r&&(e&o)==0){if(Ci(e),i<=X)return e;X=i}if(e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Fn(e),i=1<<n,r|=t[n],e&=~i;return r}function ty(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function _u(t,e){switch(t){case 15:return 1;case 14:return 2;case 12:return t=Ai(24&~e),t===0?_u(10,e):t;case 10:return t=Ai(192&~e),t===0?_u(8,e):t;case 8:return t=Ai(3584&~e),t===0&&(t=Ai(4186112&~e),t===0&&(t=512)),t;case 2:return e=Ai(805306368&~e),e===0&&(e=268435456),e}throw Error(C(358,t))}function Ai(t){return t&-t}function Vh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Iu(t,e,n){t.pendingLanes|=e;var r=e-1;t.suspendedLanes&=r,t.pingedLanes&=r,t=t.eventTimes,e=31-Fn(e),t[e]=n}var Fn=Math.clz32?Math.clz32:C1,S1=Math.log,k1=Math.LN2;function C1(t){return t===0?32:31-(S1(t)/k1|0)|0}var A1=ke.unstable_UserBlockingPriority,N1=ke.unstable_runWithPriority,Eu=!0;function R1(t,e,n,r){kr||Rh();var i=jh,s=kr;kr=!0;try{Mg(i,t,e,n,r)}finally{(kr=s)||Dh()}}function b1(t,e,n,r){N1(A1,jh.bind(null,t,e,n,r))}function jh(t,e,n,r){if(Eu){var i;if((i=(e&4)==0)&&0<Kt.length&&-1<Wg.indexOf(t))t=Mh(null,t,e,n,r),Kt.push(t);else{var s=Bh(t,e,n,r);if(s===null)i&&Hg(t,r);else{if(i){if(-1<Wg.indexOf(t)){t=Mh(s,t,e,n,r),Kt.push(t);return}if(y1(s,t,e,n,r))return;Hg(t,r)}Dy(t,e,r,null,n)}}}}function Bh(t,e,n,r){var i=Ch(r);if(i=Ar(i),i!==null){var s=Cr(i);if(s===null)i=null;else{var o=s.tag;if(o===13){if(i=Fg(s),i!==null)return i;i=null}else if(o===3){if(s.stateNode.hydrate)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null)}}return Dy(t,e,r,i,n),null}var Un=null,qh=null,Tu=null;function ny(){if(Tu)return Tu;var t,e=qh,n=e.length,r,i="value"in Un?Un.value:Un.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Tu=i.slice(t,1<r?1-r:void 0)}function Su(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ku(){return!0}function ry(){return!1}function _t(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ku:ry,this.isPropagationStopped=ry,this}return ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ku)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ku)},persist:function(){},isPersistent:ku}),e}var Ni={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zh=_t(Ni),ho=ie({},Ni,{view:0,detail:0}),D1=_t(ho),Wh,Hh,fo,Cu=ie({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fo&&(fo&&t.type==="mousemove"?(Wh=t.screenX-fo.screenX,Hh=t.screenY-fo.screenY):Hh=Wh=0,fo=t),Wh)},movementY:function(t){return"movementY"in t?t.movementY:Hh}}),iy=_t(Cu),P1=ie({},Cu,{dataTransfer:0}),O1=_t(P1),x1=ie({},ho,{relatedTarget:0}),Kh=_t(x1),L1=ie({},Ni,{animationName:0,elapsedTime:0,pseudoElement:0}),M1=_t(L1),$1=ie({},Ni,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),F1=_t($1),U1=ie({},Ni,{data:0}),sy=_t(U1),V1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},j1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function q1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=B1[t])?!!e[t]:!1}function Gh(){return q1}var z1=ie({},ho,{key:function(t){if(t.key){var e=V1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Su(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?j1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gh,charCode:function(t){return t.type==="keypress"?Su(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Su(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),W1=_t(z1),H1=ie({},Cu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oy=_t(H1),K1=ie({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gh}),G1=_t(K1),Q1=ie({},Ni,{propertyName:0,elapsedTime:0,pseudoElement:0}),Y1=_t(Q1),J1=ie({},Cu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),X1=_t(J1),Z1=[9,13,27,32],Qh=fn&&"CompositionEvent"in window,po=null;fn&&"documentMode"in document&&(po=document.documentMode);var eS=fn&&"TextEvent"in window&&!po,ay=fn&&(!Qh||po&&8<po&&11>=po),uy=String.fromCharCode(32),ly=!1;function cy(t,e){switch(t){case"keyup":return Z1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ri=!1;function tS(t,e){switch(t){case"compositionend":return hy(e);case"keypress":return e.which!==32?null:(ly=!0,uy);case"textInput":return t=e.data,t===uy&&ly?null:t;default:return null}}function nS(t,e){if(Ri)return t==="compositionend"||!Qh&&cy(t,e)?(t=ny(),Tu=qh=Un=null,Ri=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ay&&e.locale!=="ko"?null:e.data;default:return null}}var rS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!rS[t.type]:e==="textarea"}function fy(t,e,n,r){xg(r),e=Nu(e,"onChange"),0<e.length&&(n=new zh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var mo=null,go=null;function iS(t){Cy(t,0)}function Au(t){var e=xi(t);if(Eg(e))return t}function sS(t,e){if(t==="change")return e}var py=!1;if(fn){var Yh;if(fn){var Jh="oninput"in document;if(!Jh){var my=document.createElement("div");my.setAttribute("oninput","return;"),Jh=typeof my.oninput=="function"}Yh=Jh}else Yh=!1;py=Yh&&(!document.documentMode||9<document.documentMode)}function gy(){mo&&(mo.detachEvent("onpropertychange",yy),go=mo=null)}function yy(t){if(t.propertyName==="value"&&Au(go)){var e=[];if(fy(e,go,t,Ch(t)),t=iS,kr)t(e);else{kr=!0;try{Nh(t,e)}finally{kr=!1,Dh()}}}}function oS(t,e,n){t==="focusin"?(gy(),mo=e,go=n,mo.attachEvent("onpropertychange",yy)):t==="focusout"&&gy()}function aS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Au(go)}function uS(t,e){if(t==="click")return Au(e)}function lS(t,e){if(t==="input"||t==="change")return Au(e)}function cS(t,e){return t===e&&(t!==0||1/t==1/e)||t!==t&&e!==e}var Dt=typeof Object.is=="function"?Object.is:cS,hS=Object.prototype.hasOwnProperty;function yo(t,e){if(Dt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!hS.call(e,n[r])||!Dt(t[n[r]],e[n[r]]))return!1;return!0}function vy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wy(t,e){var n=vy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vy(n)}}function _y(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_y(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Iy(){for(var t=window,e=fu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fu(t.document)}return e}function Xh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var dS=fn&&"documentMode"in document&&11>=document.documentMode,bi=null,Zh=null,vo=null,ed=!1;function Ey(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ed||bi==null||bi!==fu(r)||(r=bi,"selectionStart"in r&&Xh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vo&&yo(vo,r)||(vo=r,r=Nu(Zh,"onSelect"),0<r.length&&(e=new zh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=bi)))}Uh("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);Uh("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Uh(_1,2);for(var Ty="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),td=0;td<Ty.length;td++)Fh.set(Ty[td],0);_i("onMouseEnter",["mouseout","mouseover"]);_i("onMouseLeave",["mouseout","mouseover"]);_i("onPointerEnter",["pointerout","pointerover"]);_i("onPointerLeave",["pointerout","pointerover"]);Er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Er("onBeforeInput",["compositionend","keypress","textInput","paste"]);Er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sy=new Set("cancel close invalid load scroll toggle".split(" ").concat(wo));function ky(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,m1(r,e,void 0,t),t.currentTarget=null}function Cy(t,e){e=(e&4)!=0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,l=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;ky(i,a,l),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,l=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;ky(i,a,l),s=u}}}if(gu)throw t=Oh,gu=!1,Oh=null,t}function Z(t,e){var n=$y(e),r=t+"__bubble";n.has(r)||(by(e,t,2,!1),n.add(r))}var Ay="_reactListening"+Math.random().toString(36).slice(2);function Ny(t){t[Ay]||(t[Ay]=!0,mg.forEach(function(e){Sy.has(e)||Ry(e,!1,t,null),Ry(e,!0,t,null)}))}function Ry(t,e,n,r){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,s=n;if(t==="selectionchange"&&n.nodeType!==9&&(s=n.ownerDocument),r!==null&&!e&&Sy.has(t)){if(t!=="scroll")return;i|=2,s=r}var o=$y(s),a=t+"__"+(e?"capture":"bubble");o.has(a)||(e&&(i|=4),by(s,t,i,e),o.add(a))}function by(t,e,n,r){var i=Fh.get(e);switch(i===void 0?2:i){case 0:i=R1;break;case 1:i=b1;break;default:i=jh}n=i.bind(null,e,n,t),i=void 0,!Ph||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Dy(t,e,n,r,i){var s=r;if((e&1)==0&&(e&2)==0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ar(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}h1(function(){var l=s,c=Ch(n),h=[];e:{var d=ey.get(t);if(d!==void 0){var g=zh,y=t;switch(t){case"keypress":if(Su(n)===0)break e;case"keydown":case"keyup":g=W1;break;case"focusin":y="focus",g=Kh;break;case"focusout":y="blur",g=Kh;break;case"beforeblur":case"afterblur":g=Kh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=iy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=O1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=G1;break;case Yg:case Jg:case Xg:g=M1;break;case Zg:g=Y1;break;case"scroll":g=D1;break;case"wheel":g=X1;break;case"copy":case"cut":case"paste":g=F1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=oy}var I=(e&4)!=0,p=!I&&t==="scroll",f=I?d!==null?d+"Capture":null:d;I=[];for(var m=l,w;m!==null;){w=m;var _=w.stateNode;if(w.tag===5&&_!==null&&(w=_,f!==null&&(_=no(m,f),_!=null&&I.push(_o(m,_,w)))),p)break;m=m.return}0<I.length&&(d=new g(d,y,null,n,c),h.push({event:d,listeners:I}))}}if((e&7)==0){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&(e&16)==0&&(y=n.relatedTarget||n.fromElement)&&(Ar(y)||y[Oi]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=l,y=y?Ar(y):null,y!==null&&(p=Cr(y),y!==p||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=l),g!==y)){if(I=iy,_="onMouseLeave",f="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(I=oy,_="onPointerLeave",f="onPointerEnter",m="pointer"),p=g==null?d:xi(g),w=y==null?d:xi(y),d=new I(_,m+"leave",g,n,c),d.target=p,d.relatedTarget=w,_=null,Ar(c)===l&&(I=new I(f,m+"enter",y,n,c),I.target=w,I.relatedTarget=p,_=I),p=_,g&&y)t:{for(I=g,f=y,m=0,w=I;w;w=Di(w))m++;for(w=0,_=f;_;_=Di(_))w++;for(;0<m-w;)I=Di(I),m--;for(;0<w-m;)f=Di(f),w--;for(;m--;){if(I===f||f!==null&&I===f.alternate)break t;I=Di(I),f=Di(f)}I=null}else I=null;g!==null&&Py(h,d,g,I,!1),y!==null&&p!==null&&Py(h,p,y,I,!0)}}e:{if(d=l?xi(l):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var $=sS;else if(dy(d))if(py)$=lS;else{$=aS;var A=oS}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&($=uS);if($&&($=$(t,l))){fy(h,$,n,c);break e}A&&A(t,d,l),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&wh(d,"number",d.value)}switch(A=l?xi(l):window,t){case"focusin":(dy(A)||A.contentEditable==="true")&&(bi=A,Zh=l,vo=null);break;case"focusout":vo=Zh=bi=null;break;case"mousedown":ed=!0;break;case"contextmenu":case"mouseup":case"dragend":ed=!1,Ey(h,n,c);break;case"selectionchange":if(dS)break;case"keydown":case"keyup":Ey(h,n,c)}var L;if(Qh)e:{switch(t){case"compositionstart":var V="onCompositionStart";break e;case"compositionend":V="onCompositionEnd";break e;case"compositionupdate":V="onCompositionUpdate";break e}V=void 0}else Ri?cy(t,n)&&(V="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(V="onCompositionStart");V&&(ay&&n.locale!=="ko"&&(Ri||V!=="onCompositionStart"?V==="onCompositionEnd"&&Ri&&(L=ny()):(Un=c,qh="value"in Un?Un.value:Un.textContent,Ri=!0)),A=Nu(l,V),0<A.length&&(V=new sy(V,t,null,n,c),h.push({event:V,listeners:A}),L?V.data=L:(L=hy(n),L!==null&&(V.data=L)))),(L=eS?tS(t,n):nS(t,n))&&(l=Nu(l,"onBeforeInput"),0<l.length&&(c=new sy("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:l}),c.data=L))}Cy(h,e)})}function _o(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Nu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=no(t,n),s!=null&&r.unshift(_o(t,s,i)),s=no(t,e),s!=null&&r.push(_o(t,s,i))),t=t.return}return r}function Di(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Py(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,l=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&l!==null&&(a=l,i?(u=no(n,s),u!=null&&o.unshift(_o(n,u,a))):i||(u=no(n,s),u!=null&&o.push(_o(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}function Ru(){}var nd=null,rd=null;function Oy(t,e){switch(t){case"button":case"input":case"select":case"textarea":return!!e.autoFocus}return!1}function id(t,e){return t==="textarea"||t==="option"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xy=typeof setTimeout=="function"?setTimeout:void 0,fS=typeof clearTimeout=="function"?clearTimeout:void 0;function sd(t){t.nodeType===1?t.textContent="":t.nodeType===9&&(t=t.body,t!=null&&(t.textContent=""))}function Pi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break}return t}function Ly(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var od=0;function pS(t){return{$$typeof:dh,toString:t,valueOf:t}}var bu=Math.random().toString(36).slice(2),Vn="__reactFiber$"+bu,Du="__reactProps$"+bu,Oi="__reactContainer$"+bu,My="__reactEvents$"+bu;function Ar(t){var e=t[Vn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Oi]||n[Vn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ly(t);t!==null;){if(n=t[Vn])return n;t=Ly(t)}return e}t=n,n=t.parentNode}return null}function Io(t){return t=t[Vn]||t[Oi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function xi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function Pu(t){return t[Du]||null}function $y(t){var e=t[My];return e===void 0&&(e=t[My]=new Set),e}var ad=[],Li=-1;function jn(t){return{current:t}}function ee(t){0>Li||(t.current=ad[Li],ad[Li]=null,Li--)}function ae(t,e){Li++,ad[Li]=t.current,t.current=e}var Bn={},Qe=jn(Bn),dt=jn(!1),Nr=Bn;function Mi(t,e){var n=t.type.contextTypes;if(!n)return Bn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ft(t){return t=t.childContextTypes,t!=null}function Ou(){ee(dt),ee(Qe)}function Fy(t,e,n){if(Qe.current!==Bn)throw Error(C(168));ae(Qe,e),ae(dt,n)}function Uy(t,e,n){var r=t.stateNode;if(t=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(C(108,Ii(e)||"Unknown",i));return ie({},n,r)}function xu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Bn,Nr=Qe.current,ae(Qe,t),ae(dt,dt.current),!0}function Vy(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=Uy(t,e,Nr),r.__reactInternalMemoizedMergedChildContext=t,ee(dt),ee(Qe),ae(Qe,t)):ee(dt),ae(dt,n)}var ud=null,Rr=null,mS=ke.unstable_runWithPriority,ld=ke.unstable_scheduleCallback,cd=ke.unstable_cancelCallback,gS=ke.unstable_shouldYield,jy=ke.unstable_requestPaint,hd=ke.unstable_now,yS=ke.unstable_getCurrentPriorityLevel,Lu=ke.unstable_ImmediatePriority,By=ke.unstable_UserBlockingPriority,qy=ke.unstable_NormalPriority,zy=ke.unstable_LowPriority,Wy=ke.unstable_IdlePriority,dd={},vS=jy!==void 0?jy:function(){},pn=null,Mu=null,fd=!1,Hy=hd(),Ye=1e4>Hy?hd:function(){return hd()-Hy};function $i(){switch(yS()){case Lu:return 99;case By:return 98;case qy:return 97;case zy:return 96;case Wy:return 95;default:throw Error(C(332))}}function Ky(t){switch(t){case 99:return Lu;case 98:return By;case 97:return qy;case 96:return zy;case 95:return Wy;default:throw Error(C(332))}}function br(t,e){return t=Ky(t),mS(t,e)}function Eo(t,e,n){return t=Ky(t),ld(t,e,n)}function Gt(){if(Mu!==null){var t=Mu;Mu=null,cd(t)}Gy()}function Gy(){if(!fd&&pn!==null){fd=!0;var t=0;try{var e=pn;br(99,function(){for(;t<e.length;t++){var n=e[t];do n=n(!0);while(n!==null)}}),pn=null}catch(n){throw pn!==null&&(pn=pn.slice(t+1)),ld(Lu,Gt),n}finally{fd=!1}}}var wS=Tr.ReactCurrentBatchConfig;function jt(t,e){if(t&&t.defaultProps){e=ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var $u=jn(null),Fu=null,Fi=null,Uu=null;function pd(){Uu=Fi=Fu=null}function md(t){var e=$u.current;ee($u),t.type._context._currentValue=e}function Qy(t,e){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)===e){if(n===null||(n.childLanes&e)===e)break;n.childLanes|=e}else t.childLanes|=e,n!==null&&(n.childLanes|=e);t=t.return}}function Ui(t,e){Fu=t,Uu=Fi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!=0&&(Bt=!0),t.firstContext=null)}function Pt(t,e){if(Uu!==t&&e!==!1&&e!==0)if((typeof e!="number"||e===1073741823)&&(Uu=t,e=1073741823),e={context:t,observedBits:e,next:null},Fi===null){if(Fu===null)throw Error(C(308));Fi=e,Fu.dependencies={lanes:0,firstContext:e,responders:null}}else Fi=Fi.next=e;return t._currentValue}var qn=!1;function gd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function Yy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function zn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Wn(t,e){if(t=t.updateQueue,t!==null){t=t.shared;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}}function Jy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function To(t,e,n,r){var i=t.updateQueue;qn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,l=u.next;u.next=null,o===null?s=l:o.next=l,o=u;var c=t.alternate;if(c!==null){c=c.updateQueue;var h=c.lastBaseUpdate;h!==o&&(h===null?c.firstBaseUpdate=l:h.next=l,c.lastBaseUpdate=u)}}if(s!==null){h=i.baseState,o=0,c=l=u=null;do{a=s.lane;var d=s.eventTime;if((r&a)===a){c!==null&&(c=c.next={eventTime:d,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=t,y=s;switch(a=e,d=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){h=g.call(d,h,a);break e}h=g;break e;case 3:g.flags=g.flags&-4097|64;case 0:if(g=y.payload,a=typeof g=="function"?g.call(d,h,a):g,a==null)break e;h=ie({},h,a);break e;case 2:qn=!0}}s.callback!==null&&(t.flags|=32,a=i.effects,a===null?i.effects=[s]:a.push(s))}else d={eventTime:d,lane:a,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(l=c=d,u=h):c=c.next=d,o|=a;if(s=s.next,s===null){if(a=i.shared.pending,a===null)break;s=a.next,a.next=null,i.lastBaseUpdate=a,i.shared.pending=null}}while(1);c===null&&(u=h),i.baseState=u,i.firstBaseUpdate=l,i.lastBaseUpdate=c,Lo|=o,t.lanes=o,t.memoizedState=h}}function Xy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var Zy=new au.Component().refs;function Vu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ju={isMounted:function(t){return(t=t._reactInternals)?Cr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=It(),i=Gn(t),s=zn(r,i);s.payload=e,n!=null&&(s.callback=n),Wn(t,s),Qn(t,i,r)},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=It(),i=Gn(t),s=zn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),Wn(t,s),Qn(t,i,r)},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=It(),r=Gn(t),i=zn(n,r);i.tag=2,e!=null&&(i.callback=e),Wn(t,i),Qn(t,r,n)}};function ev(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!yo(n,r)||!yo(i,s):!0}function tv(t,e,n){var r=!1,i=Bn,s=e.contextType;return typeof s=="object"&&s!==null?s=Pt(s):(i=ft(e)?Nr:Qe.current,r=e.contextTypes,s=(r=r!=null)?Mi(t,i):Bn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ju,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function nv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ju.enqueueReplaceState(e,e.state,null)}function yd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Zy,gd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Pt(s):(s=ft(e)?Nr:Qe.current,i.context=Mi(t,s)),To(t,n,i,r),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Vu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ju.enqueueReplaceState(i,i.state,null),To(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4)}var Bu=Array.isArray;function So(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(s){var o=r.refs;o===Zy&&(o=r.refs={}),s===null?delete o[i]:o[i]=s},e._stringRef=i,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function qu(t,e){if(t.type!=="textarea")throw Error(C(31,Object.prototype.toString.call(e)==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":e))}function rv(t){function e(p,f){if(t){var m=p.lastEffect;m!==null?(m.nextEffect=f,p.lastEffect=f):p.firstEffect=p.lastEffect=f,f.nextEffect=null,f.flags=8}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Xn(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags=2,f):m):(p.flags=2,f)):f}function o(p){return t&&p.alternate===null&&(p.flags=2),p}function a(p,f,m,w){return f===null||f.tag!==6?(f=Zd(m,p.mode,w),f.return=p,f):(f=i(f,m),f.return=p,f)}function u(p,f,m,w){return f!==null&&f.elementType===m.type?(w=i(f,m.props),w.ref=So(p,f,m),w.return=p,w):(w=al(m.type,m.key,m.props,null,p.mode,w),w.ref=So(p,f,m),w.return=p,w)}function l(p,f,m,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=ef(m,p.mode,w),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function c(p,f,m,w,_){return f===null||f.tag!==7?(f=Ki(m,p.mode,w,_),f.return=p,f):(f=i(f,m),f.return=p,f)}function h(p,f,m){if(typeof f=="string"||typeof f=="number")return f=Zd(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Qs:return m=al(f.type,f.key,f.props,null,p.mode,m),m.ref=So(p,null,f),m.return=p,m;case Sr:return f=ef(f,p.mode,m),f.return=p,f}if(Bu(f)||Xs(f))return f=Ki(f,p.mode,m,null),f.return=p,f;qu(p,f)}return null}function d(p,f,m,w){var _=f!==null?f.key:null;if(typeof m=="string"||typeof m=="number")return _!==null?null:a(p,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Qs:return m.key===_?m.type===On?c(p,f,m.props.children,w,_):u(p,f,m,w):null;case Sr:return m.key===_?l(p,f,m,w):null}if(Bu(m)||Xs(m))return _!==null?null:c(p,f,m,w,null);qu(p,m)}return null}function g(p,f,m,w,_){if(typeof w=="string"||typeof w=="number")return p=p.get(m)||null,a(f,p,""+w,_);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Qs:return p=p.get(w.key===null?m:w.key)||null,w.type===On?c(f,p,w.props.children,_,w.key):u(f,p,w,_);case Sr:return p=p.get(w.key===null?m:w.key)||null,l(f,p,w,_)}if(Bu(w)||Xs(w))return p=p.get(m)||null,c(f,p,w,_,null);qu(f,w)}return null}function y(p,f,m,w){for(var _=null,$=null,A=f,L=f=0,V=null;A!==null&&L<m.length;L++){A.index>L?(V=A,A=null):V=A.sibling;var x=d(p,A,m[L],w);if(x===null){A===null&&(A=V);break}t&&A&&x.alternate===null&&e(p,A),f=s(x,f,L),$===null?_=x:$.sibling=x,$=x,A=V}if(L===m.length)return n(p,A),_;if(A===null){for(;L<m.length;L++)A=h(p,m[L],w),A!==null&&(f=s(A,f,L),$===null?_=A:$.sibling=A,$=A);return _}for(A=r(p,A);L<m.length;L++)V=g(A,p,L,m[L],w),V!==null&&(t&&V.alternate!==null&&A.delete(V.key===null?L:V.key),f=s(V,f,L),$===null?_=V:$.sibling=V,$=V);return t&&A.forEach(function(we){return e(p,we)}),_}function I(p,f,m,w){var _=Xs(m);if(typeof _!="function")throw Error(C(150));if(m=_.call(m),m==null)throw Error(C(151));for(var $=_=null,A=f,L=f=0,V=null,x=m.next();A!==null&&!x.done;L++,x=m.next()){A.index>L?(V=A,A=null):V=A.sibling;var we=d(p,A,x.value,w);if(we===null){A===null&&(A=V);break}t&&A&&we.alternate===null&&e(p,A),f=s(we,f,L),$===null?_=we:$.sibling=we,$=we,A=V}if(x.done)return n(p,A),_;if(A===null){for(;!x.done;L++,x=m.next())x=h(p,x.value,w),x!==null&&(f=s(x,f,L),$===null?_=x:$.sibling=x,$=x);return _}for(A=r(p,A);!x.done;L++,x=m.next())x=g(A,p,L,x.value,w),x!==null&&(t&&x.alternate!==null&&A.delete(x.key===null?L:x.key),f=s(x,f,L),$===null?_=x:$.sibling=x,$=x);return t&&A.forEach(function(Gc){return e(p,Gc)}),_}return function(p,f,m,w){var _=typeof m=="object"&&m!==null&&m.type===On&&m.key===null;_&&(m=m.props.children);var $=typeof m=="object"&&m!==null;if($)switch(m.$$typeof){case Qs:e:{for($=m.key,_=f;_!==null;){if(_.key===$){switch(_.tag){case 7:if(m.type===On){n(p,_.sibling),f=i(_,m.props.children),f.return=p,p=f;break e}break;default:if(_.elementType===m.type){n(p,_.sibling),f=i(_,m.props),f.ref=So(p,_,m),f.return=p,p=f;break e}}n(p,_);break}else e(p,_);_=_.sibling}m.type===On?(f=Ki(m.props.children,p.mode,w,m.key),f.return=p,p=f):(w=al(m.type,m.key,m.props,null,p.mode,w),w.ref=So(p,f,m),w.return=p,p=w)}return o(p);case Sr:e:{for(_=m.key;f!==null;){if(f.key===_)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=ef(m,p.mode,w),f.return=p,p=f}return o(p)}if(typeof m=="string"||typeof m=="number")return m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=Zd(m,p.mode,w),f.return=p,p=f),o(p);if(Bu(m))return y(p,f,m,w);if(Xs(m))return I(p,f,m,w);if($&&qu(p,m),typeof m=="undefined"&&!_)switch(p.tag){case 1:case 22:case 0:case 11:case 15:throw Error(C(152,Ii(p.type)||"Component"))}return n(p,f)}}var zu=rv(!0),iv=rv(!1),ko={},Qt=jn(ko),Co=jn(ko),Ao=jn(ko);function Dr(t){if(t===ko)throw Error(C(174));return t}function vd(t,e){switch(ae(Ao,e),ae(Co,t),ae(Qt,ko),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Th(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Th(e,t)}ee(Qt),ae(Qt,e)}function Vi(){ee(Qt),ee(Co),ee(Ao)}function sv(t){Dr(Ao.current);var e=Dr(Qt.current),n=Th(e,t.type);e!==n&&(ae(Co,t),ae(Qt,n))}function wd(t){Co.current===t&&(ee(Qt),ee(Co))}var ue=jn(0);function Wu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&64)!=0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var mn=null,Hn=null,Yt=!1;function ov(t,e){var n=Lt(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=e,n.return=t,n.flags=8,t.lastEffect!==null?(t.lastEffect.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n}function av(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,!0):!1;case 13:return!1;default:return!1}}function _d(t){if(Yt){var e=Hn;if(e){var n=e;if(!av(t,e)){if(e=Pi(n.nextSibling),!e||!av(t,e)){t.flags=t.flags&-1025|2,Yt=!1,mn=t;return}ov(mn,n)}mn=t,Hn=Pi(e.firstChild)}else t.flags=t.flags&-1025|2,Yt=!1,mn=t}}function uv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function Hu(t){if(t!==mn)return!1;if(!Yt)return uv(t),Yt=!0,!1;var e=t.type;if(t.tag!==5||e!=="head"&&e!=="body"&&!id(e,t.memoizedProps))for(e=Hn;e;)ov(t,e),e=Pi(e.nextSibling);if(uv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Hn=Pi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Hn=null}}else Hn=mn?Pi(t.stateNode.nextSibling):null;return!0}function Id(){Hn=mn=null,Yt=!1}var ji=[];function Ed(){for(var t=0;t<ji.length;t++)ji[t]._workInProgressVersionPrimary=null;ji.length=0}var No=Tr.ReactCurrentDispatcher,Ot=Tr.ReactCurrentBatchConfig,Ro=0,fe=null,Je=null,$e=null,Ku=!1,bo=!1;function pt(){throw Error(C(321))}function Td(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Dt(t[n],e[n]))return!1;return!0}function Sd(t,e,n,r,i,s){if(Ro=s,fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,No.current=t===null||t.memoizedState===null?IS:ES,t=n(r,i),bo){s=0;do{if(bo=!1,!(25>s))throw Error(C(301));s+=1,$e=Je=null,e.updateQueue=null,No.current=TS,t=n(r,i)}while(bo)}if(No.current=Ju,e=Je!==null&&Je.next!==null,Ro=0,$e=Je=fe=null,Ku=!1,e)throw Error(C(300));return t}function Pr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?fe.memoizedState=$e=t:$e=$e.next=t,$e}function Or(){if(Je===null){var t=fe.alternate;t=t!==null?t.memoizedState:null}else t=Je.next;var e=$e===null?fe.memoizedState:$e.next;if(e!==null)$e=e,Je=t;else{if(t===null)throw Error(C(310));Je=t,t={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},$e===null?fe.memoizedState=$e=t:$e=$e.next=t}return $e}function Jt(t,e){return typeof e=="function"?e(t):e}function Do(t){var e=Or(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=Je,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var a=o=s=null,u=i;do{var l=u.lane;if((Ro&l)===l)a!==null&&(a=a.next={lane:0,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null}),r=u.eagerReducer===t?u.eagerState:t(r,u.action);else{var c={lane:l,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null};a===null?(o=a=c,s=r):a=a.next=c,fe.lanes|=l,Lo|=l}u=u.next}while(u!==null&&u!==i);a===null?s=r:a.next=o,Dt(r,e.memoizedState)||(Bt=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=a,n.lastRenderedState=r}return[e.memoizedState,n.dispatch]}function Po(t){var e=Or(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Dt(s,e.memoizedState)||(Bt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function lv(t,e,n){var r=e._getVersion;r=r(e._source);var i=e._workInProgressVersionPrimary;if(i!==null?t=i===r:(t=t.mutableReadLanes,(t=(Ro&t)===t)&&(e._workInProgressVersionPrimary=r,ji.push(e))),t)return n(e._source);throw ji.push(e),Error(C(350))}function cv(t,e,n,r){var i=st;if(i===null)throw Error(C(349));var s=e._getVersion,o=s(e._source),a=No.current,u=a.useState(function(){return lv(i,e,n)}),l=u[1],c=u[0];u=$e;var h=t.memoizedState,d=h.refs,g=d.getSnapshot,y=h.source;h=h.subscribe;var I=fe;return t.memoizedState={refs:d,source:e,subscribe:r},a.useEffect(function(){d.getSnapshot=n,d.setSnapshot=l;var p=s(e._source);if(!Dt(o,p)){p=n(e._source),Dt(c,p)||(l(p),p=Gn(I),i.mutableReadLanes|=p&i.pendingLanes),p=i.mutableReadLanes,i.entangledLanes|=p;for(var f=i.entanglements,m=p;0<m;){var w=31-Fn(m),_=1<<w;f[w]|=p,m&=~_}}},[n,e,r]),a.useEffect(function(){return r(e._source,function(){var p=d.getSnapshot,f=d.setSnapshot;try{f(p(e._source));var m=Gn(I);i.mutableReadLanes|=m&i.pendingLanes}catch(w){f(function(){throw w})}})},[e,r]),Dt(g,n)&&Dt(y,e)&&Dt(h,r)||(t={pending:null,dispatch:null,lastRenderedReducer:Jt,lastRenderedState:c},t.dispatch=l=Nd.bind(null,fe,t),u.queue=t,u.baseQueue=null,c=lv(i,e,n),u.memoizedState=u.baseState=c),c}function hv(t,e,n){var r=Or();return cv(r,t,e,n)}function Oo(t){var e=Pr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t=e.queue={pending:null,dispatch:null,lastRenderedReducer:Jt,lastRenderedState:t},t=t.dispatch=Nd.bind(null,fe,t),[e.memoizedState,t]}function Gu(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=fe.updateQueue,e===null?(e={lastEffect:null},fe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function dv(t){var e=Pr();return t={current:t},e.memoizedState=t}function Qu(){return Or().memoizedState}function kd(t,e,n,r){var i=Pr();fe.flags|=t,i.memoizedState=Gu(1|e,n,void 0,r===void 0?null:r)}function Cd(t,e,n,r){var i=Or();r=r===void 0?null:r;var s=void 0;if(Je!==null){var o=Je.memoizedState;if(s=o.destroy,r!==null&&Td(r,o.deps)){Gu(e,n,s,r);return}}fe.flags|=t,i.memoizedState=Gu(1|e,n,s,r)}function fv(t,e){return kd(516,4,t,e)}function Yu(t,e){return Cd(516,4,t,e)}function pv(t,e){return Cd(4,2,t,e)}function mv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function gv(t,e,n){return n=n!=null?n.concat([t]):null,Cd(4,2,mv.bind(null,e,t),n)}function Ad(){}function yv(t,e){var n=Or();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Td(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function vv(t,e){var n=Or();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Td(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function _S(t,e){var n=$i();br(98>n?98:n,function(){t(!0)}),br(97<n?97:n,function(){var r=Ot.transition;Ot.transition=1;try{t(!1),e()}finally{Ot.transition=r}})}function Nd(t,e,n){var r=It(),i=Gn(t),s={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},o=e.pending;if(o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s,o=t.alternate,t===fe||o!==null&&o===fe)bo=Ku=!0;else{if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var a=e.lastRenderedState,u=o(a,n);if(s.eagerReducer=o,s.eagerState=u,Dt(u,a))return}catch{}finally{}Qn(t,i,r)}}var Ju={readContext:Pt,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useOpaqueIdentifier:pt,unstable_isNewReconciler:!1},IS={readContext:Pt,useCallback:function(t,e){return Pr().memoizedState=[t,e===void 0?null:e],t},useContext:Pt,useEffect:fv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,kd(4,2,mv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return kd(4,2,t,e)},useMemo:function(t,e){var n=Pr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Pr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t=r.queue={pending:null,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},t=t.dispatch=Nd.bind(null,fe,t),[r.memoizedState,t]},useRef:dv,useState:Oo,useDebugValue:Ad,useDeferredValue:function(t){var e=Oo(t),n=e[0],r=e[1];return fv(function(){var i=Ot.transition;Ot.transition=1;try{r(t)}finally{Ot.transition=i}},[t]),n},useTransition:function(){var t=Oo(!1),e=t[0];return t=_S.bind(null,t[1]),dv(t),[t,e]},useMutableSource:function(t,e,n){var r=Pr();return r.memoizedState={refs:{getSnapshot:e,setSnapshot:null},source:t,subscribe:n},cv(r,t,e,n)},useOpaqueIdentifier:function(){if(Yt){var t=!1,e=pS(function(){throw t||(t=!0,n("r:"+(od++).toString(36))),Error(C(355))}),n=Oo(e)[1];return(fe.mode&2)==0&&(fe.flags|=516,Gu(5,function(){n("r:"+(od++).toString(36))},void 0,null)),e}return e="r:"+(od++).toString(36),Oo(e),e},unstable_isNewReconciler:!1},ES={readContext:Pt,useCallback:yv,useContext:Pt,useEffect:Yu,useImperativeHandle:gv,useLayoutEffect:pv,useMemo:vv,useReducer:Do,useRef:Qu,useState:function(){return Do(Jt)},useDebugValue:Ad,useDeferredValue:function(t){var e=Do(Jt),n=e[0],r=e[1];return Yu(function(){var i=Ot.transition;Ot.transition=1;try{r(t)}finally{Ot.transition=i}},[t]),n},useTransition:function(){var t=Do(Jt)[0];return[Qu().current,t]},useMutableSource:hv,useOpaqueIdentifier:function(){return Do(Jt)[0]},unstable_isNewReconciler:!1},TS={readContext:Pt,useCallback:yv,useContext:Pt,useEffect:Yu,useImperativeHandle:gv,useLayoutEffect:pv,useMemo:vv,useReducer:Po,useRef:Qu,useState:function(){return Po(Jt)},useDebugValue:Ad,useDeferredValue:function(t){var e=Po(Jt),n=e[0],r=e[1];return Yu(function(){var i=Ot.transition;Ot.transition=1;try{r(t)}finally{Ot.transition=i}},[t]),n},useTransition:function(){var t=Po(Jt)[0];return[Qu().current,t]},useMutableSource:hv,useOpaqueIdentifier:function(){return Po(Jt)[0]},unstable_isNewReconciler:!1},SS=Tr.ReactCurrentOwner,Bt=!1;function mt(t,e,n,r){e.child=t===null?iv(e,null,n,r):zu(e,t.child,n,r)}function wv(t,e,n,r,i){n=n.render;var s=e.ref;return Ui(e,i),r=Sd(t,e,n,r,s,i),t!==null&&!Bt?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,gn(t,e,i)):(e.flags|=1,mt(t,e,r,i),e.child)}function _v(t,e,n,r,i,s){if(t===null){var o=n.type;return typeof o=="function"&&!Jd(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Iv(t,e,o,r,i,s)):(t=al(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}return o=t.child,(i&s)==0&&(i=o.memoizedProps,n=n.compare,n=n!==null?n:yo,n(i,r)&&t.ref===e.ref)?gn(t,e,s):(e.flags|=1,t=Xn(o,r),t.ref=e.ref,t.return=e,e.child=t)}function Iv(t,e,n,r,i,s){if(t!==null&&yo(t.memoizedProps,r)&&t.ref===e.ref)if(Bt=!1,(s&i)!=0)(t.flags&16384)!=0&&(Bt=!0);else return e.lanes=t.lanes,gn(t,e,s);return bd(t,e,n,r,s)}function Rd(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if((e.mode&4)==0)e.memoizedState={baseLanes:0},ol(e,n);else if((n&1073741824)!=0)e.memoizedState={baseLanes:0},ol(e,s!==null?s.baseLanes:n);else return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t},ol(e,t),null;else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ol(e,r);return mt(t,e,i,n),e.child}function Ev(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=128)}function bd(t,e,n,r,i){var s=ft(n)?Nr:Qe.current;return s=Mi(e,s),Ui(e,i),n=Sd(t,e,n,r,s,i),t!==null&&!Bt?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,gn(t,e,i)):(e.flags|=1,mt(t,e,n,i),e.child)}function Tv(t,e,n,r,i){if(ft(n)){var s=!0;xu(e)}else s=!1;if(Ui(e,i),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),tv(e,n,r),yd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,l=n.contextType;typeof l=="object"&&l!==null?l=Pt(l):(l=ft(n)?Nr:Qe.current,l=Mi(e,l));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==l)&&nv(e,o,r,l),qn=!1;var d=e.memoizedState;o.state=d,To(e,r,o,i),u=e.memoizedState,a!==r||d!==u||dt.current||qn?(typeof c=="function"&&(Vu(e,n,c,r),u=e.memoizedState),(a=qn||ev(e,n,a,r,d,u,l))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4)):(typeof o.componentDidMount=="function"&&(e.flags|=4),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=l,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4),r=!1)}else{o=e.stateNode,Yy(t,e),a=e.memoizedProps,l=e.type===e.elementType?a:jt(e.type,a),o.props=l,h=e.pendingProps,d=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Pt(u):(u=ft(n)?Nr:Qe.current,u=Mi(e,u));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==u)&&nv(e,o,r,u),qn=!1,d=e.memoizedState,o.state=d,To(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||dt.current||qn?(typeof g=="function"&&(Vu(e,n,g,r),y=e.memoizedState),(l=qn||ev(e,n,l,r,d,y,u))?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=256)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=256),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=u,r=l):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=256),r=!1)}return Dd(t,e,n,r,s,i)}function Dd(t,e,n,r,i,s){Ev(t,e);var o=(e.flags&64)!=0;if(!r&&!o)return i&&Vy(e,n,!1),gn(t,e,s);r=e.stateNode,SS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=zu(e,t.child,null,s),e.child=zu(e,null,a,s)):mt(t,e,a,s),e.memoizedState=r.state,i&&Vy(e,n,!0),e.child}function Sv(t){var e=t.stateNode;e.pendingContext?Fy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Fy(t,e.context,!1),vd(t,e.containerInfo)}var Xu={dehydrated:null,retryLane:0};function kv(t,e,n){var r=e.pendingProps,i=ue.current,s=!1,o;return(o=(e.flags&64)!=0)||(o=t!==null&&t.memoizedState===null?!1:(i&2)!=0),o?(s=!0,e.flags&=-65):t!==null&&t.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(i|=1),ae(ue,i&1),t===null?(r.fallback!==void 0&&_d(e),t=r.children,i=r.fallback,s?(t=Cv(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=Xu,t):typeof r.unstable_expectedLoadTime=="number"?(t=Cv(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=Xu,e.lanes=33554432,t):(n=Xd({mode:"visible",children:t},e.mode,n,null),n.return=e,e.child=n)):t.memoizedState!==null?s?(r=Nv(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=Xu,r):(n=Av(t,e,r.children,n),e.memoizedState=null,n):s?(r=Nv(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=Xu,r):(n=Av(t,e,r.children,n),e.memoizedState=null,n)}function Cv(t,e,n,r){var i=t.mode,s=t.child;return e={mode:"hidden",children:e},(i&2)==0&&s!==null?(s.childLanes=0,s.pendingProps=e):s=Xd(e,i,0,null),n=Ki(n,i,r,null),s.return=t,n.return=t,s.sibling=n,t.child=s,n}function Av(t,e,n,r){var i=t.child;return t=i.sibling,n=Xn(i,{mode:"visible",children:n}),(e.mode&2)==0&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(t.nextEffect=null,t.flags=8,e.firstEffect=e.lastEffect=t),e.child=n}function Nv(t,e,n,r,i){var s=e.mode,o=t.child;t=o.sibling;var a={mode:"hidden",children:n};return(s&2)==0&&e.child!==o?(n=e.child,n.childLanes=0,n.pendingProps=a,o=n.lastEffect,o!==null?(e.firstEffect=n.firstEffect,e.lastEffect=o,o.nextEffect=null):e.firstEffect=e.lastEffect=null):n=Xn(o,a),t!==null?r=Xn(t,r):(r=Ki(r,s,i,null),r.flags|=2),r.return=e,n.return=e,n.sibling=r,e.child=n,r}function Rv(t,e){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),Qy(t.return,e)}function Pd(t,e,n,r,i,s){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:s}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.lastEffect=s)}function bv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(mt(t,e,r.children,n),r=ue.current,(r&2)!=0)r=r&1|2,e.flags|=64;else{if(t!==null&&(t.flags&64)!=0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rv(t,n);else if(t.tag===19)Rv(t,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ae(ue,r),(e.mode&2)==0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Wu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Pd(e,!1,i,n,s,e.lastEffect);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Wu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Pd(e,!0,n,null,s,e.lastEffect);break;case"together":Pd(e,!1,null,null,void 0,e.lastEffect);break;default:e.memoizedState=null}return e.child}function gn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Lo|=e.lanes,(n&e.childLanes)!=0){if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=Xn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Xn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}return null}var Dv,Od,Pv,Ov;Dv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Od=function(){};Pv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Dr(Qt.current);var s=null;switch(n){case"input":i=yh(t,i),r=yh(t,r),s=[];break;case"option":i=_h(t,i),r=_h(t,r),s=[];break;case"select":i=ie({},i,{value:void 0}),r=ie({},r,{value:void 0}),s=[];break;case"textarea":i=Ih(t,i),r=Ih(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ru)}Sh(n,r);var o;n=null;for(l in i)if(!r.hasOwnProperty(l)&&i.hasOwnProperty(l)&&i[l]!=null)if(l==="style"){var a=i[l];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Gs.hasOwnProperty(l)?s||(s=[]):(s=s||[]).push(l,null));for(l in r){var u=r[l];if(a=i!=null?i[l]:void 0,r.hasOwnProperty(l)&&u!==a&&(u!=null||a!=null))if(l==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(l,n)),n=u;else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(l,u)):l==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(Gs.hasOwnProperty(l)?(u!=null&&l==="onScroll"&&Z("scroll",t),s||a===u||(s=[])):typeof u=="object"&&u!==null&&u.$$typeof===dh?u.toString():(s=s||[]).push(l,u))}n&&(s=s||[]).push("style",n);var l=s;(e.updateQueue=l)&&(e.flags|=4)}};Ov=function(t,e,n,r){n!==r&&(e.flags|=4)};function xo(t,e){if(!Yt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function kS(t,e,n){var r=e.pendingProps;switch(e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return ft(e.type)&&Ou(),null;case 3:return Vi(),ee(dt),ee(Qe),Ed(),r=e.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Hu(e)?e.flags|=4:r.hydrate||(e.flags|=256)),Od(e),null;case 5:wd(e);var i=Dr(Ao.current);if(n=e.type,t!==null&&e.stateNode!=null)Pv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=128);else{if(!r){if(e.stateNode===null)throw Error(C(166));return null}if(t=Dr(Qt.current),Hu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Vn]=e,r[Du]=s,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(t=0;t<wo.length;t++)Z(wo[t],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":Tg(r,s),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Z("invalid",r);break;case"textarea":Cg(r,s),Z("invalid",r)}Sh(n,s),t=null;for(var o in s)s.hasOwnProperty(o)&&(i=s[o],o==="children"?typeof i=="string"?r.textContent!==i&&(t=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(t=["children",""+i]):Gs.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&Z("scroll",r));switch(n){case"input":du(r),kg(r,s,!0);break;case"textarea":du(r),Ng(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ru)}r=t,e.updateQueue=r,r!==null&&(e.flags|=4)}else{switch(o=i.nodeType===9?i:i.ownerDocument,t===Eh.html&&(t=Rg(n)),t===Eh.html?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Vn]=e,t[Du]=r,Dv(t,e,!1,!1),e.stateNode=t,o=kh(n,r),n){case"dialog":Z("cancel",t),Z("close",t),i=r;break;case"iframe":case"object":case"embed":Z("load",t),i=r;break;case"video":case"audio":for(i=0;i<wo.length;i++)Z(wo[i],t);i=r;break;case"source":Z("error",t),i=r;break;case"img":case"image":case"link":Z("error",t),Z("load",t),i=r;break;case"details":Z("toggle",t),i=r;break;case"input":Tg(t,r),i=yh(t,r),Z("invalid",t);break;case"option":i=_h(t,r);break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ie({},r,{value:void 0}),Z("invalid",t);break;case"textarea":Cg(t,r),i=Ih(t,r),Z("invalid",t);break;default:i=r}Sh(n,i);var a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?Pg(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&bg(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&eo(t,u):typeof u=="number"&&eo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Gs.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Z("scroll",t):u!=null&&oh(t,s,u,o))}switch(n){case"input":du(t),kg(t,r,!1);break;case"textarea":du(t),Ng(t);break;case"option":r.value!=null&&t.setAttribute("value",""+xn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ei(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ei(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ru)}Oy(n,r)&&(e.flags|=4)}e.ref!==null&&(e.flags|=128)}return null;case 6:if(t&&e.stateNode!=null)Ov(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));n=Dr(Ao.current),Dr(Qt.current),Hu(e)?(r=e.stateNode,n=e.memoizedProps,r[Vn]=e,r.nodeValue!==n&&(e.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Vn]=e,e.stateNode=r)}return null;case 13:return ee(ue),r=e.memoizedState,(e.flags&64)!=0?(e.lanes=n,e):(r=r!==null,n=!1,t===null?e.memoizedProps.fallback!==void 0&&Hu(e):n=t.memoizedState!==null,r&&!n&&(e.mode&2)!=0&&(t===null&&e.memoizedProps.unstable_avoidThisFallback!==!0||(ue.current&1)!=0?Fe===0&&(Fe=3):((Fe===0||Fe===3)&&(Fe=4),st===null||(Lo&134217727)==0&&(qi&134217727)==0||Wi(st,Xe))),(r||n)&&(e.flags|=4),null);case 4:return Vi(),Od(e),t===null&&Ny(e.stateNode.containerInfo),null;case 10:return md(e),null;case 17:return ft(e.type)&&Ou(),null;case 19:if(ee(ue),r=e.memoizedState,r===null)return null;if(s=(e.flags&64)!=0,o=r.rendering,o===null)if(s)xo(r,!1);else{if(Fe!==0||t!==null&&(t.flags&64)!=0)for(t=e.child;t!==null;){if(o=Wu(t),o!==null){for(e.flags|=64,xo(r,!1),s=o.updateQueue,s!==null&&(e.updateQueue=s,e.flags|=4),r.lastEffect===null&&(e.firstEffect=null),e.lastEffect=r.lastEffect,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=2,s.nextEffect=null,s.firstEffect=null,s.lastEffect=null,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ae(ue,ue.current&1|2),e.child}t=t.sibling}r.tail!==null&&Ye()>zd&&(e.flags|=64,s=!0,xo(r,!1),e.lanes=33554432)}else{if(!s)if(t=Wu(o),t!==null){if(e.flags|=64,s=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),xo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!Yt)return e=e.lastEffect=r.lastEffect,e!==null&&(e.nextEffect=null),null}else 2*Ye()-r.renderingStartTime>zd&&n!==1073741824&&(e.flags|=64,s=!0,xo(r,!1),e.lanes=33554432);r.isBackwards?(o.sibling=e.child,e.child=o):(n=r.last,n!==null?n.sibling=o:e.child=o,r.last=o)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=e.lastEffect,r.renderingStartTime=Ye(),n.sibling=null,e=ue.current,ae(ue,s?e&1|2:e&1),n):null;case 23:case 24:return Yd(),t!==null&&t.memoizedState!==null!=(e.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(e.flags|=4),null}throw Error(C(156,e.tag))}function CS(t){switch(t.tag){case 1:ft(t.type)&&Ou();var e=t.flags;return e&4096?(t.flags=e&-4097|64,t):null;case 3:if(Vi(),ee(dt),ee(Qe),Ed(),e=t.flags,(e&64)!=0)throw Error(C(285));return t.flags=e&-4097|64,t;case 5:return wd(t),null;case 13:return ee(ue),e=t.flags,e&4096?(t.flags=e&-4097|64,t):null;case 19:return ee(ue),null;case 4:return Vi(),null;case 10:return md(t),null;case 23:case 24:return Yd(),null;default:return null}}function xd(t,e){try{var n="",r=e;do n+=o1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i}}function Ld(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var AS=typeof WeakMap=="function"?WeakMap:Map;function xv(t,e,n){n=zn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){tl||(tl=!0,Wd=r),Ld(t,e)},n}function Lv(t,e,n){n=zn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return Ld(t,e),r(i)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(Xt===null?Xt=new Set([this]):Xt.add(this),Ld(t,e));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}var NS=typeof WeakSet=="function"?WeakSet:Set;function Mv(t){var e=t.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(n){Jn(t,n)}else e.current=null}function RS(t,e){switch(e.tag){case 0:case 11:case 15:case 22:return;case 1:if(e.flags&256&&t!==null){var n=t.memoizedProps,r=t.memoizedState;t=e.stateNode,e=t.getSnapshotBeforeUpdate(e.elementType===e.type?n:jt(e.type,n),r),t.__reactInternalSnapshotBeforeUpdate=e}return;case 3:e.flags&256&&sd(e.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(C(163))}function bS(t,e,n){switch(n.tag){case 0:case 11:case 15:case 22:if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{if((t.tag&3)==3){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{var i=t;r=i.next,i=i.tag,(i&4)!=0&&(i&1)!=0&&(Jv(n,t),FS(n,t)),t=r}while(t!==e)}return;case 1:t=n.stateNode,n.flags&4&&(e===null?t.componentDidMount():(r=n.elementType===n.type?e.memoizedProps:jt(n.type,e.memoizedProps),t.componentDidUpdate(r,e.memoizedState,t.__reactInternalSnapshotBeforeUpdate))),e=n.updateQueue,e!==null&&Xy(n,e,t);return;case 3:if(e=n.updateQueue,e!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Xy(n,e,t)}return;case 5:t=n.stateNode,e===null&&n.flags&4&&Oy(n.type,n.memoizedProps)&&t.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&Gg(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(C(163))}function $v(t,e){for(var n=t;;){if(n.tag===5){var r=n.stateNode;if(e)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=i!=null&&i.hasOwnProperty("display")?i.display:null,r.style.display=Dg("display",i)}}else if(n.tag===6)n.stateNode.nodeValue=e?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function Fv(t,e){if(Rr&&typeof Rr.onCommitFiberUnmount=="function")try{Rr.onCommitFiberUnmount(ud,e)}catch{}switch(e.tag){case 0:case 11:case 14:case 15:case 22:if(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null)){var n=t=t.next;do{var r=n,i=r.destroy;if(r=r.tag,i!==void 0)if((r&4)!=0)Jv(e,n);else{r=e;try{i()}catch(s){Jn(r,s)}}n=n.next}while(n!==t)}break;case 1:if(Mv(e),t=e.stateNode,typeof t.componentWillUnmount=="function")try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(s){Jn(e,s)}break;case 5:Mv(e);break;case 4:Bv(t,e)}}function Uv(t){t.alternate=null,t.child=null,t.dependencies=null,t.firstEffect=null,t.lastEffect=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.return=null,t.updateQueue=null}function Vv(t){return t.tag===5||t.tag===3||t.tag===4}function jv(t){e:{for(var e=t.return;e!==null;){if(Vv(e))break e;e=e.return}throw Error(C(160))}var n=e;switch(e=n.stateNode,n.tag){case 5:var r=!1;break;case 3:e=e.containerInfo,r=!0;break;case 4:e=e.containerInfo,r=!0;break;default:throw Error(C(161))}n.flags&16&&(eo(e,""),n.flags&=-17);e:t:for(n=t;;){for(;n.sibling===null;){if(n.return===null||Vv(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?Md(t,n,e):$d(t,n,e)}function Md(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ru));else if(r!==4&&(t=t.child,t!==null))for(Md(t,e,n),t=t.sibling;t!==null;)Md(t,e,n),t=t.sibling}function $d(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for($d(t,e,n),t=t.sibling;t!==null;)$d(t,e,n),t=t.sibling}function Bv(t,e){for(var n=e,r=!1,i,s;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(C(160));switch(i=r.stateNode,r.tag){case 5:s=!1;break e;case 3:i=i.containerInfo,s=!0;break e;case 4:i=i.containerInfo,s=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var o=t,a=n,u=a;;)if(Fv(o,u),u.child!==null&&u.tag!==4)u.child.return=u,u=u.child;else{if(u===a)break e;for(;u.sibling===null;){if(u.return===null||u.return===a)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}s?(o=i,a=n.stateNode,o.nodeType===8?o.parentNode.removeChild(a):o.removeChild(a)):i.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){i=n.stateNode.containerInfo,s=!0,n.child.return=n,n=n.child;continue}}else if(Fv(t,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function Fd(t,e){switch(e.tag){case 0:case 11:case 14:case 15:case 22:var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)==3&&(t=r.destroy,r.destroy=void 0,t!==void 0&&t()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=e.stateNode,n!=null){r=e.memoizedProps;var i=t!==null?t.memoizedProps:r;t=e.type;var s=e.updateQueue;if(e.updateQueue=null,s!==null){for(n[Du]=r,t==="input"&&r.type==="radio"&&r.name!=null&&Sg(n,r),kh(t,i),e=kh(t,r),i=0;i<s.length;i+=2){var o=s[i],a=s[i+1];o==="style"?Pg(n,a):o==="dangerouslySetInnerHTML"?bg(n,a):o==="children"?eo(n,a):oh(n,o,a,e)}switch(t){case"input":vh(n,r);break;case"textarea":Ag(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,s=r.value,s!=null?Ei(n,!!r.multiple,s,!1):t!==!!r.multiple&&(r.defaultValue!=null?Ei(n,!!r.multiple,r.defaultValue,!0):Ei(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(e.stateNode===null)throw Error(C(162));e.stateNode.nodeValue=e.memoizedProps;return;case 3:n=e.stateNode,n.hydrate&&(n.hydrate=!1,Gg(n.containerInfo));return;case 12:return;case 13:e.memoizedState!==null&&(qd=Ye(),$v(e.child,!0)),qv(e);return;case 19:qv(e);return;case 17:return;case 23:case 24:$v(e,e.memoizedState!==null);return}throw Error(C(163))}function qv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new NS),e.forEach(function(r){var i=jS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function DS(t,e){return t!==null&&(t=t.memoizedState,t===null||t.dehydrated!==null)?(e=e.memoizedState,e!==null&&e.dehydrated===null):!1}var PS=Math.ceil,Zu=Tr.ReactCurrentDispatcher,Ud=Tr.ReactCurrentOwner,U=0,st=null,_e=null,Xe=0,xr=0,Vd=jn(0),Fe=0,el=null,Bi=0,Lo=0,qi=0,jd=0,Bd=null,qd=0,zd=1/0;function zi(){zd=Ye()+500}var D=null,tl=!1,Wd=null,Xt=null,Kn=!1,Mo=null,$o=90,Hd=[],Kd=[],yn=null,Fo=0,Gd=null,nl=-1,vn=0,rl=0,Uo=null,il=!1;function It(){return(U&48)!=0?Ye():nl!==-1?nl:nl=Ye()}function Gn(t){if(t=t.mode,(t&2)==0)return 1;if((t&4)==0)return $i()===99?1:2;if(vn===0&&(vn=Bi),wS.transition!==0){rl!==0&&(rl=Bd!==null?Bd.pendingLanes:0),t=vn;var e=4186112&~rl;return e&=-e,e===0&&(t=4186112&~t,e=t&-t,e===0&&(e=8192)),e}return t=$i(),(U&4)!=0&&t===98?t=_u(12,vn):(t=E1(t),t=_u(t,vn)),t}function Qn(t,e,n){if(50<Fo)throw Fo=0,Gd=null,Error(C(185));if(t=sl(t,e),t===null)return null;Iu(t,e,n),t===st&&(qi|=e,Fe===4&&Wi(t,Xe));var r=$i();e===1?(U&8)!=0&&(U&48)==0?Qd(t):(xt(t,n),U===0&&(zi(),Gt())):((U&4)==0||r!==98&&r!==99||(yn===null?yn=new Set([t]):yn.add(t)),xt(t,n)),Bd=t}function sl(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}function xt(t,e){for(var n=t.callbackNode,r=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,o=t.pendingLanes;0<o;){var a=31-Fn(o),u=1<<a,l=s[a];if(l===-1){if((u&r)==0||(u&i)!=0){l=e,Ci(u);var c=X;s[a]=10<=c?l+250:6<=c?l+5e3:-1}}else l<=e&&(t.expiredLanes|=u);o&=~u}if(r=co(t,t===st?Xe:0),e=X,r===0)n!==null&&(n!==dd&&cd(n),t.callbackNode=null,t.callbackPriority=0);else{if(n!==null){if(t.callbackPriority===e)return;n!==dd&&cd(n)}e===15?(n=Qd.bind(null,t),pn===null?(pn=[n],Mu=ld(Lu,Gy)):pn.push(n),n=dd):e===14?n=Eo(99,Qd.bind(null,t)):(n=T1(e),n=Eo(n,zv.bind(null,t))),t.callbackPriority=e,t.callbackNode=n}}function zv(t){if(nl=-1,rl=vn=0,(U&48)!=0)throw Error(C(327));var e=t.callbackNode;if(Yn()&&t.callbackNode!==e)return null;var n=co(t,t===st?Xe:0);if(n===0)return null;var r=n,i=U;U|=16;var s=Gv();(st!==t||Xe!==r)&&(zi(),Hi(t,r));do try{LS();break}catch(a){Kv(t,a)}while(1);if(pd(),Zu.current=s,U=i,_e!==null?r=0:(st=null,Xe=0,r=Fe),(Bi&qi)!=0)Hi(t,0);else if(r!==0){if(r===2&&(U|=64,t.hydrate&&(t.hydrate=!1,sd(t.containerInfo)),n=ty(t),n!==0&&(r=Vo(t,n))),r===1)throw e=el,Hi(t,0),Wi(t,n),xt(t,Ye()),e;switch(t.finishedWork=t.current.alternate,t.finishedLanes=n,r){case 0:case 1:throw Error(C(345));case 2:Lr(t);break;case 3:if(Wi(t,n),(n&62914560)===n&&(r=qd+500-Ye(),10<r)){if(co(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){It(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=xy(Lr.bind(null,t),r);break}Lr(t);break;case 4:if(Wi(t,n),(n&4186112)===n)break;for(r=t.eventTimes,i=-1;0<n;){var o=31-Fn(n);s=1<<o,o=r[o],o>i&&(i=o),n&=~s}if(n=i,n=Ye()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*PS(n/1960))-n,10<n){t.timeoutHandle=xy(Lr.bind(null,t),n);break}Lr(t);break;case 5:Lr(t);break;default:throw Error(C(329))}}return xt(t,Ye()),t.callbackNode===e?zv.bind(null,t):null}function Wi(t,e){for(e&=~jd,e&=~qi,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Fn(e),r=1<<n;t[n]=-1,e&=~r}}function Qd(t){if((U&48)!=0)throw Error(C(327));if(Yn(),t===st&&(t.expiredLanes&Xe)!=0){var e=Xe,n=Vo(t,e);(Bi&qi)!=0&&(e=co(t,e),n=Vo(t,e))}else e=co(t,0),n=Vo(t,e);if(t.tag!==0&&n===2&&(U|=64,t.hydrate&&(t.hydrate=!1,sd(t.containerInfo)),e=ty(t),e!==0&&(n=Vo(t,e))),n===1)throw n=el,Hi(t,0),Wi(t,e),xt(t,Ye()),n;return t.finishedWork=t.current.alternate,t.finishedLanes=e,Lr(t),xt(t,Ye()),null}function OS(){if(yn!==null){var t=yn;yn=null,t.forEach(function(e){e.expiredLanes|=24&e.pendingLanes,xt(e,Ye())})}Gt()}function Wv(t,e){var n=U;U|=1;try{return t(e)}finally{U=n,U===0&&(zi(),Gt())}}function Hv(t,e){var n=U;U&=-2,U|=8;try{return t(e)}finally{U=n,U===0&&(zi(),Gt())}}function ol(t,e){ae(Vd,xr),xr|=e,Bi|=e}function Yd(){xr=Vd.current,ee(Vd)}function Hi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,fS(n)),_e!==null)for(n=_e.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ou();break;case 3:Vi(),ee(dt),ee(Qe),Ed();break;case 5:wd(r);break;case 4:Vi();break;case 13:ee(ue);break;case 19:ee(ue);break;case 10:md(r);break;case 23:case 24:Yd()}n=n.return}st=t,_e=Xn(t.current,null),Xe=xr=Bi=e,Fe=0,el=null,jd=qi=Lo=0}function Kv(t,e){do{var n=_e;try{if(pd(),No.current=Ju,Ku){for(var r=fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ku=!1}if(Ro=0,$e=Je=fe=null,bo=!1,Ud.current=null,n===null||n.return===null){Fe=1,el=e,_e=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=Xe,a.flags|=2048,a.firstEffect=a.lastEffect=null,u!==null&&typeof u=="object"&&typeof u.then=="function"){var l=u;if((a.mode&2)==0){var c=a.alternate;c?(a.updateQueue=c.updateQueue,a.memoizedState=c.memoizedState,a.lanes=c.lanes):(a.updateQueue=null,a.memoizedState=null)}var h=(ue.current&1)!=0,d=o;do{var g;if(g=d.tag===13){var y=d.memoizedState;if(y!==null)g=y.dehydrated!==null;else{var I=d.memoizedProps;g=I.fallback===void 0?!1:I.unstable_avoidThisFallback!==!0?!0:!h}}if(g){var p=d.updateQueue;if(p===null){var f=new Set;f.add(l),d.updateQueue=f}else p.add(l);if((d.mode&2)==0){if(d.flags|=64,a.flags|=16384,a.flags&=-2981,a.tag===1)if(a.alternate===null)a.tag=17;else{var m=zn(-1,1);m.tag=2,Wn(a,m)}a.lanes|=1;break e}u=void 0,a=e;var w=s.pingCache;if(w===null?(w=s.pingCache=new AS,u=new Set,w.set(l,u)):(u=w.get(l),u===void 0&&(u=new Set,w.set(l,u))),!u.has(a)){u.add(a);var _=VS.bind(null,s,l,a);l.then(_,_)}d.flags|=4096,d.lanes=e;break e}d=d.return}while(d!==null);u=Error((Ii(a.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}Fe!==5&&(Fe=2),u=xd(u,a),d=o;do{switch(d.tag){case 3:s=u,d.flags|=4096,e&=-e,d.lanes|=e;var $=xv(d,s,e);Jy(d,$);break e;case 1:s=u;var A=d.type,L=d.stateNode;if((d.flags&64)==0&&(typeof A.getDerivedStateFromError=="function"||L!==null&&typeof L.componentDidCatch=="function"&&(Xt===null||!Xt.has(L)))){d.flags|=4096,e&=-e,d.lanes|=e;var V=Lv(d,s,e);Jy(d,V);break e}}d=d.return}while(d!==null)}Yv(n)}catch(x){e=x,_e===n&&n!==null&&(_e=n=n.return);continue}break}while(1)}function Gv(){var t=Zu.current;return Zu.current=Ju,t===null?Ju:t}function Vo(t,e){var n=U;U|=16;var r=Gv();st===t&&Xe===e||Hi(t,e);do try{xS();break}catch(i){Kv(t,i)}while(1);if(pd(),U=n,Zu.current=r,_e!==null)throw Error(C(261));return st=null,Xe=0,Fe}function xS(){for(;_e!==null;)Qv(_e)}function LS(){for(;_e!==null&&!gS();)Qv(_e)}function Qv(t){var e=Zv(t.alternate,t,xr);t.memoizedProps=t.pendingProps,e===null?Yv(t):_e=e,Ud.current=null}function Yv(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&2048)==0){if(n=kS(n,e,xr),n!==null){_e=n;return}if(n=e,n.tag!==24&&n.tag!==23||n.memoizedState===null||(xr&1073741824)!=0||(n.mode&4)==0){for(var r=0,i=n.child;i!==null;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}t!==null&&(t.flags&2048)==0&&(t.firstEffect===null&&(t.firstEffect=e.firstEffect),e.lastEffect!==null&&(t.lastEffect!==null&&(t.lastEffect.nextEffect=e.firstEffect),t.lastEffect=e.lastEffect),1<e.flags&&(t.lastEffect!==null?t.lastEffect.nextEffect=e:t.firstEffect=e,t.lastEffect=e))}else{if(n=CS(e),n!==null){n.flags&=2047,_e=n;return}t!==null&&(t.firstEffect=t.lastEffect=null,t.flags|=2048)}if(e=e.sibling,e!==null){_e=e;return}_e=e=t}while(e!==null);Fe===0&&(Fe=5)}function Lr(t){var e=$i();return br(99,MS.bind(null,t,e)),null}function MS(t,e){do Yn();while(Mo!==null);if((U&48)!=0)throw Error(C(327));var n=t.finishedWork;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null;var r=n.lanes|n.childLanes,i=r,s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;for(var o=t.eventTimes,a=t.expirationTimes;0<s;){var u=31-Fn(s),l=1<<u;i[u]=0,o[u]=-1,a[u]=-1,s&=~l}if(yn!==null&&(r&24)==0&&yn.has(t)&&yn.delete(t),t===st&&(_e=st=null,Xe=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(i=U,U|=32,Ud.current=null,nd=Eu,o=Iy(),Xh(o)){if("selectionStart"in o)a={start:o.selectionStart,end:o.selectionEnd};else e:if(a=(a=o.ownerDocument)&&a.defaultView||window,(l=a.getSelection&&a.getSelection())&&l.rangeCount!==0){a=l.anchorNode,s=l.anchorOffset,u=l.focusNode,l=l.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break e}var c=0,h=-1,d=-1,g=0,y=0,I=o,p=null;t:for(;;){for(var f;I!==a||s!==0&&I.nodeType!==3||(h=c+s),I!==u||l!==0&&I.nodeType!==3||(d=c+l),I.nodeType===3&&(c+=I.nodeValue.length),(f=I.firstChild)!==null;)p=I,I=f;for(;;){if(I===o)break t;if(p===a&&++g===s&&(h=c),p===u&&++y===l&&(d=c),(f=I.nextSibling)!==null)break;I=p,p=I.parentNode}I=f}a=h===-1||d===-1?null:{start:h,end:d}}else a=null;a=a||{start:0,end:0}}else a=null;rd={focusedElem:o,selectionRange:a},Eu=!1,Uo=null,il=!1,D=r;do try{$S()}catch(x){if(D===null)throw Error(C(330));Jn(D,x),D=D.nextEffect}while(D!==null);Uo=null,D=r;do try{for(o=t;D!==null;){var m=D.flags;if(m&16&&eo(D.stateNode,""),m&128){var w=D.alternate;if(w!==null){var _=w.ref;_!==null&&(typeof _=="function"?_(null):_.current=null)}}switch(m&1038){case 2:jv(D),D.flags&=-3;break;case 6:jv(D),D.flags&=-3,Fd(D.alternate,D);break;case 1024:D.flags&=-1025;break;case 1028:D.flags&=-1025,Fd(D.alternate,D);break;case 4:Fd(D.alternate,D);break;case 8:a=D,Bv(o,a);var $=a.alternate;Uv(a),$!==null&&Uv($)}D=D.nextEffect}}catch(x){if(D===null)throw Error(C(330));Jn(D,x),D=D.nextEffect}while(D!==null);if(_=rd,w=Iy(),m=_.focusedElem,o=_.selectionRange,w!==m&&m&&m.ownerDocument&&_y(m.ownerDocument.documentElement,m)){for(o!==null&&Xh(m)&&(w=o.start,_=o.end,_===void 0&&(_=w),"selectionStart"in m?(m.selectionStart=w,m.selectionEnd=Math.min(_,m.value.length)):(_=(w=m.ownerDocument||document)&&w.defaultView||window,_.getSelection&&(_=_.getSelection(),a=m.textContent.length,$=Math.min(o.start,a),o=o.end===void 0?$:Math.min(o.end,a),!_.extend&&$>o&&(a=o,o=$,$=a),a=wy(m,$),s=wy(m,o),a&&s&&(_.rangeCount!==1||_.anchorNode!==a.node||_.anchorOffset!==a.offset||_.focusNode!==s.node||_.focusOffset!==s.offset)&&(w=w.createRange(),w.setStart(a.node,a.offset),_.removeAllRanges(),$>o?(_.addRange(w),_.extend(s.node,s.offset)):(w.setEnd(s.node,s.offset),_.addRange(w)))))),w=[],_=m;_=_.parentNode;)_.nodeType===1&&w.push({element:_,left:_.scrollLeft,top:_.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<w.length;m++)_=w[m],_.element.scrollLeft=_.left,_.element.scrollTop=_.top}Eu=!!nd,rd=nd=null,t.current=n,D=r;do try{for(m=t;D!==null;){var A=D.flags;if(A&36&&bS(m,D.alternate,D),A&128){w=void 0;var L=D.ref;if(L!==null){var V=D.stateNode;switch(D.tag){case 5:w=V;break;default:w=V}typeof L=="function"?L(w):L.current=w}}D=D.nextEffect}}catch(x){if(D===null)throw Error(C(330));Jn(D,x),D=D.nextEffect}while(D!==null);D=null,vS(),U=i}else t.current=n;if(Kn)Kn=!1,Mo=t,$o=e;else for(D=r;D!==null;)e=D.nextEffect,D.nextEffect=null,D.flags&8&&(A=D,A.sibling=null,A.stateNode=null),D=e;if(r=t.pendingLanes,r===0&&(Xt=null),r===1?t===Gd?Fo++:(Fo=0,Gd=t):Fo=0,n=n.stateNode,Rr&&typeof Rr.onCommitFiberRoot=="function")try{Rr.onCommitFiberRoot(ud,n,void 0,(n.current.flags&64)==64)}catch{}if(xt(t,Ye()),tl)throw tl=!1,t=Wd,Wd=null,t;return(U&8)!=0||Gt(),null}function $S(){for(;D!==null;){var t=D.alternate;il||Uo===null||((D.flags&8)!=0?jg(D,Uo)&&(il=!0):D.tag===13&&DS(t,D)&&jg(D,Uo)&&(il=!0));var e=D.flags;(e&256)!=0&&RS(t,D),(e&512)==0||Kn||(Kn=!0,Eo(97,function(){return Yn(),null})),D=D.nextEffect}}function Yn(){if($o!==90){var t=97<$o?97:$o;return $o=90,br(t,US)}return!1}function FS(t,e){Hd.push(e,t),Kn||(Kn=!0,Eo(97,function(){return Yn(),null}))}function Jv(t,e){Kd.push(e,t),Kn||(Kn=!0,Eo(97,function(){return Yn(),null}))}function US(){if(Mo===null)return!1;var t=Mo;if(Mo=null,(U&48)!=0)throw Error(C(331));var e=U;U|=32;var n=Kd;Kd=[];for(var r=0;r<n.length;r+=2){var i=n[r],s=n[r+1],o=i.destroy;if(i.destroy=void 0,typeof o=="function")try{o()}catch(u){if(s===null)throw Error(C(330));Jn(s,u)}}for(n=Hd,Hd=[],r=0;r<n.length;r+=2){i=n[r],s=n[r+1];try{var a=i.create;i.destroy=a()}catch(u){if(s===null)throw Error(C(330));Jn(s,u)}}for(a=t.current.firstEffect;a!==null;)t=a.nextEffect,a.nextEffect=null,a.flags&8&&(a.sibling=null,a.stateNode=null),a=t;return U=e,Gt(),!0}function Xv(t,e,n){e=xd(n,e),e=xv(t,e,1),Wn(t,e),e=It(),t=sl(t,1),t!==null&&(Iu(t,1,e),xt(t,e))}function Jn(t,e){if(t.tag===3)Xv(t,t,e);else for(var n=t.return;n!==null;){if(n.tag===3){Xv(n,t,e);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Xt===null||!Xt.has(r))){t=xd(e,t);var i=Lv(n,t,1);if(Wn(n,i),i=It(),n=sl(n,1),n!==null)Iu(n,1,i),xt(n,i);else if(typeof r.componentDidCatch=="function"&&(Xt===null||!Xt.has(r)))try{r.componentDidCatch(e,t)}catch{}break}}n=n.return}}function VS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=It(),t.pingedLanes|=t.suspendedLanes&n,st===t&&(Xe&n)===n&&(Fe===4||Fe===3&&(Xe&62914560)===Xe&&500>Ye()-qd?Hi(t,0):jd|=n),xt(t,e)}function jS(t,e){var n=t.stateNode;n!==null&&n.delete(e),e=0,e===0&&(e=t.mode,(e&2)==0?e=1:(e&4)==0?e=$i()===99?1:2:(vn===0&&(vn=Bi),e=Ai(62914560&~vn),e===0&&(e=4194304))),n=It(),t=sl(t,e),t!==null&&(Iu(t,e,n),xt(t,n))}var Zv;Zv=function(t,e,n){var r=e.lanes;if(t!==null)if(t.memoizedProps!==e.pendingProps||dt.current)Bt=!0;else if((n&r)!=0)Bt=(t.flags&16384)!=0;else{switch(Bt=!1,e.tag){case 3:Sv(e),Id();break;case 5:sv(e);break;case 1:ft(e.type)&&xu(e);break;case 4:vd(e,e.stateNode.containerInfo);break;case 10:r=e.memoizedProps.value;var i=e.type._context;ae($u,i._currentValue),i._currentValue=r;break;case 13:if(e.memoizedState!==null)return(n&e.child.childLanes)!=0?kv(t,e,n):(ae(ue,ue.current&1),e=gn(t,e,n),e!==null?e.sibling:null);ae(ue,ue.current&1);break;case 19:if(r=(n&e.childLanes)!=0,(t.flags&64)!=0){if(r)return bv(t,e,n);e.flags|=64}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(ue,ue.current),r)break;return null;case 23:case 24:return e.lanes=0,Rd(t,e,n)}return gn(t,e,n)}else Bt=!1;switch(e.lanes=0,e.tag){case 2:if(r=e.type,t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,i=Mi(e,Qe.current),Ui(e,n),i=Sd(null,e,r,t,i,n),e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(e.tag=1,e.memoizedState=null,e.updateQueue=null,ft(r)){var s=!0;xu(e)}else s=!1;e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,gd(e);var o=r.getDerivedStateFromProps;typeof o=="function"&&Vu(e,r,o,t),i.updater=ju,e.stateNode=i,i._reactInternals=e,yd(e,r,t,n),e=Dd(null,e,r,!0,s,n)}else e.tag=0,mt(null,e,i,n),e=e.child;return e;case 16:i=e.elementType;e:{switch(t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,s=i._init,i=s(i._payload),e.type=i,s=e.tag=qS(i),t=jt(i,t),s){case 0:e=bd(null,e,i,t,n);break e;case 1:e=Tv(null,e,i,t,n);break e;case 11:e=wv(null,e,i,t,n);break e;case 14:e=_v(null,e,i,jt(i.type,t),r,n);break e}throw Error(C(306,i,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),bd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),Tv(t,e,r,i,n);case 3:if(Sv(e),r=e.updateQueue,t===null||r===null)throw Error(C(282));if(r=e.pendingProps,i=e.memoizedState,i=i!==null?i.element:null,Yy(t,e),To(e,r,null,n),r=e.memoizedState.element,r===i)Id(),e=gn(t,e,n);else{if(i=e.stateNode,(s=i.hydrate)&&(Hn=Pi(e.stateNode.containerInfo.firstChild),mn=e,s=Yt=!0),s){if(t=i.mutableSourceEagerHydrationData,t!=null)for(i=0;i<t.length;i+=2)s=t[i],s._workInProgressVersionPrimary=t[i+1],ji.push(s);for(n=iv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else mt(t,e,r,n),Id();e=e.child}return e;case 5:return sv(e),t===null&&_d(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,id(r,i)?o=null:s!==null&&id(r,s)&&(e.flags|=16),Ev(t,e),mt(t,e,o,n),e.child;case 6:return t===null&&_d(e),null;case 13:return kv(t,e,n);case 4:return vd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=zu(e,null,r,n):mt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),wv(t,e,r,i,n);case 7:return mt(t,e,e.pendingProps,n),e.child;case 8:return mt(t,e,e.pendingProps.children,n),e.child;case 12:return mt(t,e,e.pendingProps.children,n),e.child;case 10:e:{r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value;var a=e.type._context;if(ae($u,a._currentValue),a._currentValue=s,o!==null)if(a=o.value,s=Dt(a,s)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(a,s):1073741823)|0,s===0){if(o.children===i.children&&!dt.current){e=gn(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var u=a.dependencies;if(u!==null){o=a.child;for(var l=u.firstContext;l!==null;){if(l.context===r&&(l.observedBits&s)!=0){a.tag===1&&(l=zn(-1,n&-n),l.tag=2,Wn(a,l)),a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Qy(a.return,n),u.lanes|=n;break}l=l.next}}else o=a.tag===10&&a.type===e.type?null:a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}mt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,s=e.pendingProps,r=s.children,Ui(e,n),i=Pt(i,s.unstable_observedBits),r=r(i),e.flags|=1,mt(t,e,r,n),e.child;case 14:return i=e.type,s=jt(i,e.pendingProps),s=jt(i.type,s),_v(t,e,i,s,r,n);case 15:return Iv(t,e,e.type,e.pendingProps,r,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,ft(r)?(t=!0,xu(e)):t=!1,Ui(e,n),tv(e,r,i),yd(e,r,i,n),Dd(null,e,r,!0,t,n);case 19:return bv(t,e,n);case 23:return Rd(t,e,n);case 24:return Rd(t,e,n)}throw Error(C(156,e.tag))};function BS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(t,e,n,r){return new BS(t,e,n,r)}function Jd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qS(t){if(typeof t=="function")return Jd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===uu)return 11;if(t===cu)return 14}return 2}function Xn(t,e){var n=t.alternate;return n===null?(n=Lt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function al(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Jd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case On:return Ki(n.children,i,s,e);case wg:o=8,i|=16;break;case ah:o=8,i|=1;break;case Ys:return t=Lt(12,n,e,i|8),t.elementType=Ys,t.type=Ys,t.lanes=s,t;case Js:return t=Lt(13,n,e,i),t.type=Js,t.elementType=Js,t.lanes=s,t;case lu:return t=Lt(19,n,e,i),t.elementType=lu,t.lanes=s,t;case fh:return Xd(n,i,s,e);case ph:return t=Lt(24,n,e,i),t.elementType=ph,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case uh:o=10;break e;case lh:o=9;break e;case uu:o=11;break e;case cu:o=14;break e;case ch:o=16,r=null;break e;case hh:o=22;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=Lt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ki(t,e,n,r){return t=Lt(7,t,r,e),t.lanes=n,t}function Xd(t,e,n,r){return t=Lt(23,t,r,e),t.elementType=fh,t.lanes=n,t}function Zd(t,e,n){return t=Lt(6,t,null,e),t.lanes=n,t}function ef(t,e,n){return e=Lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function zS(t,e,n){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=Vh(0),this.expirationTimes=Vh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vh(0),this.mutableSourceEagerHydrationData=null}function WS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Sr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ul(t,e,n,r){var i=e.current,s=It(),o=Gn(i);e:if(n){n=n._reactInternals;t:{if(Cr(n)!==n||n.tag!==1)throw Error(C(170));var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(ft(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(a!==null);throw Error(C(171))}if(n.tag===1){var u=n.type;if(ft(u)){n=Uy(n,u,a);break e}}n=a}else n=Bn;return e.context===null?e.context=n:e.pendingContext=n,e=zn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),Wn(i,e),Qn(i,o,s),o}function tf(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ew(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function nf(t,e){ew(t,e),(t=t.alternate)&&ew(t,e)}function HS(){return null}function rf(t,e,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new zS(t,e,n!=null&&n.hydrate===!0),e=Lt(3,null,null,e===2?7:e===1?3:0),n.current=e,e.stateNode=n,gd(e),t[Oi]=n.current,Ny(t.nodeType===8?t.parentNode:t),r)for(t=0;t<r.length;t++){e=r[t];var i=e._getVersion;i=i(e._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[e,i]:n.mutableSourceEagerHydrationData.push(e,i)}this._internalRoot=n}rf.prototype.render=function(t){ul(t,this._internalRoot,null,null)};rf.prototype.unmount=function(){var t=this._internalRoot,e=t.containerInfo;ul(null,t,null,function(){e[Oi]=null})};function jo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function KS(t,e){if(e||(e=t?t.nodeType===9?t.documentElement:t.firstChild:null,e=!(!e||e.nodeType!==1||!e.hasAttribute("data-reactroot"))),!e)for(var n;n=t.lastChild;)t.removeChild(n);return new rf(t,0,e?{hydrate:!0}:void 0)}function ll(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s._internalRoot;if(typeof i=="function"){var a=i;i=function(){var l=tf(o);a.call(l)}}ul(e,o,t,i)}else{if(s=n._reactRootContainer=KS(n,r),o=s._internalRoot,typeof i=="function"){var u=i;i=function(){var l=tf(o);u.call(l)}}Hv(function(){ul(e,o,t,i)})}return tf(o)}Bg=function(t){if(t.tag===13){var e=It();Qn(t,4,e),nf(t,4)}};xh=function(t){if(t.tag===13){var e=It();Qn(t,67108864,e),nf(t,67108864)}};qg=function(t){if(t.tag===13){var e=It(),n=Gn(t);Qn(t,n,e),nf(t,n)}};zg=function(t,e){return e()};Ah=function(t,e,n){switch(e){case"input":if(vh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Pu(r);if(!i)throw Error(C(90));Eg(r),vh(r,i)}}}break;case"textarea":Ag(t,n);break;case"select":e=n.value,e!=null&&Ei(t,!!n.multiple,e,!1)}};Nh=Wv;Mg=function(t,e,n,r,i){var s=U;U|=4;try{return br(98,t.bind(null,e,n,r,i))}finally{U=s,U===0&&(zi(),Gt())}};Rh=function(){(U&49)==0&&(OS(),Yn())};$g=function(t,e){var n=U;U|=2;try{return t(e)}finally{U=n,U===0&&(zi(),Gt())}};function tw(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jo(e))throw Error(C(200));return WS(t,e,null,n)}var GS={Events:[Io,xi,Pu,xg,Lg,Yn,{current:!1}]},Bo={findFiberByHostInstance:Ar,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},QS={bundleType:Bo.bundleType,version:Bo.version,rendererPackageName:Bo.rendererPackageName,rendererConfig:Bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Vg(t),t===null?null:t.stateNode},findFiberByHostInstance:Bo.findFiberByHostInstance||HS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cl.isDisabled&&cl.supportsFiber)try{ud=cl.inject(QS),Rr=cl}catch{}}bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GS;bt.createPortal=tw;bt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):Error(C(268,Object.keys(t)));return t=Vg(e),t=t===null?null:t.stateNode,t};bt.flushSync=function(t,e){var n=U;if((n&48)!=0)return t(e);U|=1;try{if(t)return br(99,t.bind(null,e))}finally{U=n,Gt()}};bt.hydrate=function(t,e,n){if(!jo(e))throw Error(C(200));return ll(null,t,e,!0,n)};bt.render=function(t,e,n){if(!jo(e))throw Error(C(200));return ll(null,t,e,!1,n)};bt.unmountComponentAtNode=function(t){if(!jo(t))throw Error(C(40));return t._reactRootContainer?(Hv(function(){ll(null,null,t,!1,function(){t._reactRootContainer=null,t[Oi]=null})}),!0):!1};bt.unstable_batchedUpdates=Wv;bt.unstable_createPortal=function(t,e){return tw(t,e,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};bt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!jo(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return ll(t,e,n,!1,r)};bt.version="17.0.2";function nw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nw)}catch(t){console.error(t)}}nw(),dg.exports=bt;var cL=dg.exports;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)==55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)==56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},YS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},iw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,l=u?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;u||(g=64,o||(d=64)),r.push(n[c],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):YS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),l!==64){const g=a<<4&240|l>>2;if(r.push(g),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},JS=function(t){const e=rw(t);return iw.encodeByteArray(e,!0)},sw=function(t){return JS(t).replace(/\./g,"")},XS=function(t){try{return iw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function hl(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ZS(n)||(t[n]=hl(t[n],e[n]));return t}function ZS(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tk(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[sw(JSON.stringify(n)),sw(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ow(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(te())}function sf(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function nk(){return typeof self=="object"&&self.self===self}function of(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function dl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rk(){return te().indexOf("Electron/")>=0}function af(){const t=te();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ik(){return te().indexOf("MSAppHost/")>=0}function sk(){return!sf()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function fl(){return typeof indexedDB=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok="FirebaseError";class Et extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=ok,Object.setPrototypeOf(this,Et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mr.prototype.create)}}class Mr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ak(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Et(i,a,r)}}function ak(t,e){return t.replace(uk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const uk=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function lk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function uf(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(uw(s)&&uw(o)){if(!uf(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function uw(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Qi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function qo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function lw(t,e){const n=new ck(t,e);return n.subscribe.bind(n)}class ck{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");hk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=lf),i.error===void 0&&(i.error=lf),i.complete===void 0&&(i.complete=lf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function lf(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t){return t&&t._delegate?t._delegate:t}class wn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ek;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pk(e))try{this.getOrInitializeService({instanceIdentifier:$r})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=$r){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$r){return this.instances.has(e)}getOptions(e=$r){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=$r){return this.component?this.component.multipleInstances?e:$r:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fk(t){return t===$r?void 0:t}function pk(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new dk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf=[];var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const cw={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},gk=G.INFO,yk={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},vk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=yk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pl{constructor(e){this.name=e,this._logLevel=gk,this._logHandler=vk,this._userLogHandler=null,cf.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}function wk(t){cf.forEach(e=>{e.setLogLevel(t)})}function _k(t,e){for(const n of cf){let r=null;e&&e.level&&(r=cw[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r!=null?r:i.logLevel)&&t({level:G[s].toLowerCase(),message:a,args:o,type:i.name})}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ek(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ek(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hf="@firebase/app",hw="0.7.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df=new pl("@firebase/app"),Tk="@firebase/app-compat",Sk="@firebase/analytics-compat",kk="@firebase/analytics",Ck="@firebase/app-check-compat",Ak="@firebase/app-check",Nk="@firebase/auth",Rk="@firebase/auth-compat",bk="@firebase/database",Dk="@firebase/database-compat",Pk="@firebase/functions",Ok="@firebase/functions-compat",xk="@firebase/installations",Lk="@firebase/installations-compat",Mk="@firebase/messaging",$k="@firebase/messaging-compat",Fk="@firebase/performance",Uk="@firebase/performance-compat",Vk="@firebase/remote-config",jk="@firebase/remote-config-compat",Bk="@firebase/storage",qk="@firebase/storage-compat",zk="@firebase/firestore",Wk="@firebase/firestore-compat",Hk="firebase",Kk="9.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr="[DEFAULT]",Gk={[hf]:"fire-core",[Tk]:"fire-core-compat",[kk]:"fire-analytics",[Sk]:"fire-analytics-compat",[Ak]:"fire-app-check",[Ck]:"fire-app-check-compat",[Nk]:"fire-auth",[Rk]:"fire-auth-compat",[bk]:"fire-rtdb",[Dk]:"fire-rtdb-compat",[Pk]:"fire-fn",[Ok]:"fire-fn-compat",[xk]:"fire-iid",[Lk]:"fire-iid-compat",[Mk]:"fire-fcm",[$k]:"fire-fcm-compat",[Fk]:"fire-perf",[Uk]:"fire-perf-compat",[Vk]:"fire-rc",[jk]:"fire-rc-compat",[Bk]:"fire-gcs",[qk]:"fire-gcs-compat",[zk]:"fire-fst",[Wk]:"fire-fst-compat","fire-js":"fire-js",[Hk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=new Map,zo=new Map;function ml(t,e){try{t.container.addComponent(e)}catch(n){df.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function dw(t,e){t.container.addOrOverwriteComponent(e)}function Ur(t){const e=t.name;if(zo.has(e))return df.debug(`There were multiple attempts to register component ${e}.`),!1;zo.set(e,t);for(const n of Zn.values())ml(n,t);return!0}function fw(t,e){return t.container.getProvider(e)}function Qk(t,e,n=Fr){fw(t,e).clearInstance(n)}function Yk(){zo.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Wo=new Mr("app","Firebase",Jk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wo.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=Kk;function pw(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Fr,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Wo.create("bad-app-name",{appName:String(r)});const i=Zn.get(r);if(i){if(uf(t,i.options)&&uf(n,i.config))return i;throw Wo.create("duplicate-app",{appName:r})}const s=new mk(r);for(const a of zo.values())s.addComponent(a);const o=new Xk(t,n,s);return Zn.set(r,o),o}function Zk(t=Fr){const e=Zn.get(t);if(!e)throw Wo.create("no-app",{appName:t});return e}function eC(){return Array.from(Zn.values())}async function mw(t){const e=t.name;Zn.has(e)&&(Zn.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Zt(t,e,n){var r;let i=(r=Gk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),df.warn(a.join(" "));return}Ur(new wn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function gw(t,e){if(t!==null&&typeof t!="function")throw Wo.create("invalid-log-argument");_k(t,e)}function yw(t){wk(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(t){Ur(new wn("platform-logger",e=>new Ik(e),"PRIVATE")),Zt(hf,hw,t),Zt(hf,hw,"esm2017"),Zt("fire-js","")}tC("");var nC=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",SDK_VERSION:Vr,_DEFAULT_ENTRY_NAME:Fr,_addComponent:ml,_addOrOverwriteComponent:dw,_apps:Zn,_clearComponents:Yk,_components:zo,_getProvider:fw,_registerComponent:Ur,_removeServiceInstance:Qk,deleteApp:mw,getApp:Zk,getApps:eC,initializeApp:pw,onLog:gw,registerVersion:Zt,setLogLevel:yw,FirebaseError:Et});/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e,n){this._delegate=e,this.firebase=n,ml(e,new wn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),mw(this._delegate)))}_getService(e,n=Fr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Fr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){ml(this._delegate,e)}_addOrOverwriteComponent(e){dw(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},vw=new Mr("app-compat","Firebase",iC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sC(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:Zt,setLogLevel:yw,onLog:gw,apps:null,SDK_VERSION:Vr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:u,modularAPIs:nC}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(l){delete e[l]}function i(l){if(l=l||Fr,!aw(e,l))throw vw.create("no-app",{appName:l});return e[l]}i.App=t;function s(l,c={}){const h=pw(l,c);if(aw(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const c=l.name,h=c.replace("-compat","");if(Ur(l)&&l.type==="PUBLIC"){const d=(g=i())=>{if(typeof g[h]!="function")throw vw.create("invalid-app-argument",{appName:c});return g[h]()};l.serviceProps!==void 0&&hl(d,l.serviceProps),n[h]=d,t.prototype[h]=function(...g){return this._getService.bind(this,c).apply(this,l.multipleInstances?g:[])}}return l.type==="PUBLIC"?n[h]:null}function u(l,c){return c==="serverAuth"?null:c}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ww(){const t=sC(rC);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:ww,extendNamespace:e,createSubscribe:lw,ErrorFactory:Mr,deepExtend:hl});function e(n){hl(t,n)}return t}const oC=ww();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w=new pl("@firebase/app-compat"),aC="@firebase/app-compat",uC="0.1.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(t){Zt(aC,uC,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(nk()&&self.firebase!==void 0){_w.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&_w.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Ho=oC;lC();var cC="firebase",hC="9.6.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ho.registerVersion(cC,hC,"app-compat");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function ff(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Ko={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Yi={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dC(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function Iw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fC=dC,pC=Iw,Ew=new Mr("auth","Firebase",Iw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw=new pl("@firebase/auth");function gl(t,...e){Tw.logLevel<=G.ERROR&&Tw.error(`Auth (${Vr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(t,...e){throw pf(t,...e)}function Ve(t,...e){return pf(t,...e)}function Sw(t,e,n){const r=Object.assign(Object.assign({},pC()),{[e]:n});return new Mr("auth","Firebase",r).create(e,{appName:t.name})}function Ji(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ue(t,"argument-error"),Sw(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function pf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ew.create(t,...e)}function S(t,e,...n){if(!t)throw pf(e,...n)}function en(t){const e="INTERNAL ASSERTION FAILED: "+t;throw gl(e),new Error(e)}function qt(t,e){t||en(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw=new Map;function Tt(t){qt(t instanceof Function,"Expected a class definition");let e=kw.get(t);return e?(qt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,kw.set(t,e),e)}function mC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Tt);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function mf(){return Cw()==="http:"||Cw()==="https:"}function Cw(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gC(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mf()||of()||"connection"in navigator)?navigator.onLine:!0}function yC(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n){this.shortDelay=e,this.longDelay=n,qt(n>e,"Short delay should be less than long delay!"),this.isMobile=ow()||dl()}get(){return gC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(t,e){qt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;en("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;en("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;en("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC=new Qo(3e4,6e4);function Ie(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ae(t,e,n,r,i={}){return Nw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Gi(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),Aw.fetch()(Rw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function Nw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},vC),e);try{const i=new _C(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw yl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,l]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw yl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw yl(t,"email-already-in-use",o);const c=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Sw(t,c,l);Ue(t,c)}}catch(i){if(i instanceof Et)throw i;Ue(t,"network-request-failed")}}async function _n(t,e,n,r,i={}){const s=await Ae(t,e,n,r,i);return"mfaPendingCredential"in s&&Ue(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Rw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?gf(t.config,i):`${t.config.apiScheme}://${i}`}class _C{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ve(this.auth,"network-request-failed")),wC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function yl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ve(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IC(t,e){return Ae(t,"POST","/v1/accounts:delete",e)}async function EC(t,e){return Ae(t,"POST","/v1/accounts:update",e)}async function TC(t,e){return Ae(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function SC(t,e=!1){const n=M(t),r=await n.getIdToken(e),i=vl(r);S(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Yo(yf(i.auth_time)),issuedAtTime:Yo(yf(i.iat)),expirationTime:Yo(yf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function yf(t){return Number(t)*1e3}function vl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return gl("JWT malformed, contained fewer than 3 sections"),null;try{const i=XS(n);return i?JSON.parse(i):(gl("Failed to decode base64 JWT payload"),null)}catch(i){return gl("Caught error parsing JWT payload as JSON",i),null}}function kC(t){const e=vl(t);return S(e,"internal-error"),S(typeof e.exp!="undefined","internal-error"),S(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function In(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Et&&CC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function CC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yo(this.lastLoginAt),this.creationTime=Yo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await In(t,TC(n,{idToken:r}));S(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=((e=s.providerUserInfo)===null||e===void 0?void 0:e.length)?bC(s.providerUserInfo):[],a=RC(t.providerData,o),u=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a==null?void 0:a.length),c=u?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new bw(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function NC(t){const e=M(t);await Jo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function bC(t){return t.map(e=>{var{providerId:n}=e,r=ff(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DC(t,e){const n=await Nw(t,{},async()=>{const r=Gi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Rw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Aw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){S(e.idToken,"internal-error"),S(typeof e.idToken!="undefined","internal-error"),S(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):kC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return S(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await DC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Xo;return r&&(S(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(S(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(S(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xo,this.toJSON())}_performRefresh(){return en("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(t,e){S(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class jr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ff(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new AC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.metadata=new bw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await In(this,this.stsTokenManager.getToken(this.auth,e));return S(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return SC(this,e)}reload(){return NC(this)}_assign(e){this!==e&&(S(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new jr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){S(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Jo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await In(this,IC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,l,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,p=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,f=(l=n.createdAt)!==null&&l!==void 0?l:void 0,m=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:w,emailVerified:_,isAnonymous:$,providerData:A,stsTokenManager:L}=n;S(w&&L,e,"internal-error");const V=Xo.fromJSON(this.name,L);S(typeof w=="string",e,"internal-error"),er(h,e.name),er(d,e.name),S(typeof _=="boolean",e,"internal-error"),S(typeof $=="boolean",e,"internal-error"),er(g,e.name),er(y,e.name),er(I,e.name),er(p,e.name),er(f,e.name),er(m,e.name);const x=new jr({uid:w,auth:e,email:d,emailVerified:_,displayName:h,isAnonymous:$,photoURL:y,phoneNumber:g,tenantId:I,stsTokenManager:V,createdAt:f,lastLoginAt:m});return A&&Array.isArray(A)&&(x.providerData=A.map(we=>Object.assign({},we))),p&&(x._redirectEventId=p),x}static async _fromIdTokenResponse(e,n,r=!1){const i=new Xo;i.updateFromServerResponse(n);const s=new jr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Jo(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Dw.type="NONE";const Xi=Dw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(t,e,n){return`firebase:${t}:${e}:${n}`}class Zi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Br(this.userKey,i.apiKey,s),this.fullPersistenceKey=Br("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Zi(Tt(Xi),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Tt(Xi);const o=Br(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const c=await l._get(o);if(c){const h=jr._fromJSON(e,c);l!==s&&(a=h),s=l;break}}catch{}const u=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Zi(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Zi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ow(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Mw(e))return"Blackberry";if($w(e))return"Webos";if(vf(e))return"Safari";if((e.includes("chrome/")||xw(e))&&!e.includes("edge/"))return"Chrome";if(Zo(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ow(t=te()){return/firefox\//i.test(t)}function vf(t=te()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xw(t=te()){return/crios\//i.test(t)}function Lw(t=te()){return/iemobile/i.test(t)}function Zo(t=te()){return/android/i.test(t)}function Mw(t=te()){return/blackberry/i.test(t)}function $w(t=te()){return/webos/i.test(t)}function es(t=te()){return/iphone|ipad|ipod/i.test(t)}function PC(t=te()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function OC(t=te()){var e;return es(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function xC(){return af()&&document.documentMode===10}function Fw(t=te()){return es(t)||Zo(t)||$w(t)||Mw(t)||/windows phone/i.test(t)||Lw(t)}function LC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(t,e=[]){let n;switch(t){case"Browser":n=Pw(te());break;case"Worker":n=`${Pw(te())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vr}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vw(this),this.idTokenSubscription=new Vw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ew,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Tt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Zi.create(this,e),!this._deleted)){if((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(S(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Jo(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?M(e):null;return n&&S(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&S(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Tt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Mr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Tt(e)||this._popupRedirectResolver;S(n,this,"argument-error"),this.redirectPersistenceManager=await Zi.create(this,[Tt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return S(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return S(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Uw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function Ne(t){return M(t)}class Vw{constructor(e){this.auth=e,this.observer=null,this.addObserver=lw(n=>this.observer=n)}get next(){return S(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function $C(t,e,n){const r=Ne(t);S(r._canInitEmulator,r,"emulator-config-failed"),S(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n==null?void 0:n.disableWarnings),s=jw(e),{host:o,port:a}=FC(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||UC()}function jw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function FC(t){const e=jw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Bw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Bw(o)}}}function Bw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function UC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return en("not implemented")}_getIdTokenResponse(e){return en("not implemented")}_linkToIdToken(e,n){return en("not implemented")}_getReauthenticationResolver(e){return en("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qw(t,e){return Ae(t,"POST","/v1/accounts:resetPassword",Ie(t,e))}async function zw(t,e){return Ae(t,"POST","/v1/accounts:update",e)}async function VC(t,e){return Ae(t,"POST","/v1/accounts:update",Ie(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jC(t,e){return _n(t,"POST","/v1/accounts:signInWithPassword",Ie(t,e))}async function wl(t,e){return Ae(t,"POST","/v1/accounts:sendOobCode",Ie(t,e))}async function BC(t,e){return wl(t,e)}async function qC(t,e){return wl(t,e)}async function zC(t,e){return wl(t,e)}async function WC(t,e){return wl(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HC(t,e){return _n(t,"POST","/v1/accounts:signInWithEmailLink",Ie(t,e))}async function KC(t,e){return _n(t,"POST","/v1/accounts:signInWithEmailLink",Ie(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea extends ts{constructor(e,n,r,i=null){super("password",r);this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ea(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ea(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return jC(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return HC(e,{email:this._email,oobCode:this._password});default:Ue(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return zw(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return KC(e,{idToken:n,email:this._email,oobCode:this._password});default:Ue(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function En(t,e){return _n(t,"POST","/v1/accounts:signInWithIdp",Ie(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC="http://localhost";class tn extends ts{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new tn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ue("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ff(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new tn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return En(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,En(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,En(e,n)}buildRequest(){const e={requestUri:GC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Gi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QC(t,e){return Ae(t,"POST","/v1/accounts:sendVerificationCode",Ie(t,e))}async function YC(t,e){return _n(t,"POST","/v1/accounts:signInWithPhoneNumber",Ie(t,e))}async function JC(t,e){const n=await _n(t,"POST","/v1/accounts:signInWithPhoneNumber",Ie(t,e));if(n.temporaryProof)throw yl(t,"account-exists-with-different-credential",n);return n}const XC={USER_NOT_FOUND:"user-not-found"};async function ZC(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return _n(t,"POST","/v1/accounts:signInWithPhoneNumber",Ie(t,n),XC)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr extends ts{constructor(e){super("phone","phone");this.params=e}static _fromVerification(e,n){return new qr({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new qr({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return YC(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return JC(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return ZC(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new qr({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tA(t){const e=Qi(qo(t)).link,n=e?Qi(qo(e)).deep_link_id:null,r=Qi(qo(t)).deep_link_id;return(r?Qi(qo(r)).link:null)||r||n||e||t}class _l{constructor(e){var n,r,i,s,o,a;const u=Qi(qo(e)),l=(n=u.apiKey)!==null&&n!==void 0?n:null,c=(r=u.oobCode)!==null&&r!==void 0?r:null,h=eA((i=u.mode)!==null&&i!==void 0?i:null);S(l&&c&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=c,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=tA(e);try{return new _l(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(){this.providerId=tr.PROVIDER_ID}static credential(e,n){return ea._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=_l.parseLink(n);return S(r,"argument-error"),ea._fromEmailAndCode(e,r.code,r.tenantId)}}tr.PROVIDER_ID="password";tr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";tr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns extends Tn{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class rs extends ns{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return S("providerId"in n&&"signInMethod"in n,"argument-error"),tn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return S(e.idToken||e.accessToken,"argument-error"),tn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return rs.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return rs.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new rs(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends ns{constructor(){super("facebook.com")}static credential(e){return tn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nn.credential(e.oauthAccessToken)}catch{return null}}}nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";nn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends ns{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return tn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return rn.credential(n,r)}catch{return null}}}rn.GOOGLE_SIGN_IN_METHOD="google.com";rn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends ns{constructor(){super("github.com")}static credential(e){return tn._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sn.credential(e.oauthAccessToken)}catch{return null}}}sn.GITHUB_SIGN_IN_METHOD="github.com";sn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA="http://localhost";class is extends ts{constructor(e,n){super(e,e);this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return En(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,En(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,En(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new is(r,s)}static _create(e,n){return new is(e,n)}buildRequest(){return{requestUri:nA,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA="saml.";class Il extends Tn{constructor(e){S(e.startsWith(rA),"argument-error");super(e)}static credentialFromResult(e){return Il.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Il.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=is.fromJSON(e);return S(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return is._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends ns{constructor(){super("twitter.com")}static credential(e,n){return tn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return on.credential(n,r)}catch{return null}}}on.TWITTER_SIGN_IN_METHOD="twitter.com";on.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ww(t,e){return _n(t,"POST","/v1/accounts:signUp",Ie(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await jr._fromIdTokenResponse(e,r,i),o=Hw(r);return new Mt({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Hw(r);return new Mt({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Hw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iA(t){var e;const n=Ne(t);if(await n._initializationPromise,(e=n.currentUser)===null||e===void 0?void 0:e.isAnonymous)return new Mt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Ww(n,{returnSecureToken:!0}),i=await Mt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El extends Et{constructor(e,n,r,i){var s;super(n.code,n.message);this.operationType=r,this.user=i,Object.setPrototypeOf(this,El.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new El(e,n,r,i)}}function Kw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?El._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sA(t,e){const n=M(t);await Tl(!0,n,e);const{providerUserInfo:r}=await EC(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=Gw(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function wf(t,e,n=!1){const r=await In(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Mt._forOperation(t,"link",r)}async function Tl(t,e,n){await Jo(e);const r=Gw(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";S(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qw(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await In(t,Kw(r,i,e,t),n);S(s.idToken,r,"internal-error");const o=vl(s.idToken);S(o,r,"internal-error");const{sub:a}=o;return S(t.uid===a,r,"user-mismatch"),Mt._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ue(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yw(t,e,n=!1){const r="signIn",i=await Kw(t,r,e),s=await Mt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Sl(t,e){return Yw(Ne(t),e)}async function Jw(t,e){const n=M(t);return await Tl(!1,n,e.providerId),wf(n,e)}async function Xw(t,e){return Qw(M(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oA(t,e){return _n(t,"POST","/v1/accounts:signInWithCustomToken",Ie(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aA(t,e){const n=Ne(t),r=await oA(n,{token:e,returnSecureToken:!0}),i=await Mt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?_f._fromServerResponse(e,n):Ue(e,"internal-error")}}class _f extends kl{constructor(e){super("phone",e);this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new _f(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(t,e,n){var r;S(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),S(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(S(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(S(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uA(t,e,n){const r=M(t),i={requestType:"PASSWORD_RESET",email:e};n&&Cl(r,i,n),await qC(r,i)}async function lA(t,e,n){await qw(M(t),{oobCode:e,newPassword:n})}async function cA(t,e){await VC(M(t),{oobCode:e})}async function Zw(t,e){const n=M(t),r=await qw(n,{oobCode:e}),i=r.requestType;switch(S(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":S(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":S(r.mfaInfo,n,"internal-error");default:S(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=kl._fromServerResponse(Ne(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function hA(t,e){const{data:n}=await Zw(M(t),e);return n.email}async function dA(t,e,n){const r=Ne(t),i=await Ww(r,{returnSecureToken:!0,email:e,password:n}),s=await Mt._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function fA(t,e,n){return Sl(M(t),tr.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pA(t,e,n){const r=M(t),i={requestType:"EMAIL_SIGNIN",email:e};S(n.handleCodeInApp,r,"argument-error"),n&&Cl(r,i,n),await zC(r,i)}function mA(t,e){const n=_l.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function gA(t,e,n){const r=M(t),i=tr.credentialWithLink(e,n||Go());return S(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Sl(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yA(t,e){return Ae(t,"POST","/v1/accounts:createAuthUri",Ie(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vA(t,e){const n=mf()?Go():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await yA(M(t),r);return i||[]}async function wA(t,e){const n=M(t),r=await t.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};e&&Cl(n.auth,i,e);const{email:s}=await BC(n.auth,i);s!==t.email&&await t.reload()}async function _A(t,e,n){const r=M(t),i=await t.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:i,newEmail:e};n&&Cl(r.auth,s,n);const{email:o}=await WC(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IA(t,e){return Ae(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EA(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=M(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await In(r,IA(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function TA(t,e){return e0(M(t),e,null)}function SA(t,e){return e0(M(t),null,e)}async function e0(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await In(t,zw(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kA(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t==null?void 0:t.idToken)){const o=(n=(e=vl(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new ss(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new CA(s,i);case"github.com":return new AA(s,i);case"google.com":return new NA(s,i);case"twitter.com":return new RA(s,i,t.screenName||null);case"custom":case"anonymous":return new ss(s,null);default:return new ss(s,r,i)}}class ss{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class t0 extends ss{constructor(e,n,r,i){super(e,n,r);this.username=i}}class CA extends ss{constructor(e,n){super(e,"facebook.com",n)}}class AA extends t0{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class NA extends ss{constructor(e,n){super(e,"google.com",n)}}class RA extends t0{constructor(e,n,r){super(e,"twitter.com",n,r)}}function bA(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:kA(n)}function DA(t,e,n,r){return M(t).onAuthStateChanged(e,n,r)}class zr{constructor(e,n){this.type=e,this.credential=n}static _fromIdtoken(e){return new zr("enroll",e)}static _fromMfaPendingCredential(e){return new zr("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e==null?void 0:e.multiFactorSession){if((n=e.multiFactorSession)===null||n===void 0?void 0:n.pendingCredential)return zr._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if((r=e.multiFactorSession)===null||r===void 0?void 0:r.idToken)return zr._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Ne(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>kl._fromServerResponse(r,a));S(i.mfaPendingCredential,r,"internal-error");const o=zr._fromMfaPendingCredential(i.mfaPendingCredential);return new If(o,s,async a=>{const u=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const l=Object.assign(Object.assign({},i),{idToken:u.idToken,refreshToken:u.refreshToken});switch(n.operationType){case"signIn":const c=await Mt._fromIdTokenResponse(r,n.operationType,l);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return S(n.user,r,"internal-error"),Mt._forOperation(n.user,n.operationType,l);default:Ue(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function PA(t,e){var n;const r=M(t),i=e;return S(e.customData.operationType,r,"argument-error"),S((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),If._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OA(t,e){return Ae(t,"POST","/v2/accounts/mfaEnrollment:start",Ie(t,e))}function xA(t,e){return Ae(t,"POST","/v2/accounts/mfaEnrollment:finalize",Ie(t,e))}function LA(t,e){return Ae(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Ie(t,e))}class Ef{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>kl._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Ef(e)}async getSession(){return zr._fromIdtoken(await this.user.getIdToken())}async enroll(e,n){const r=e,i=await this.getSession(),s=await In(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken(),i=await In(this.user,LA(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(s){if(s.code!=="auth/user-token-expired")throw s}}}const Tf=new WeakMap;function MA(t){const e=M(t);return Tf.has(e)||Tf.set(e,Ef._fromUser(e)),Tf.get(e)}const Al="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Al,"1"),this.storage.removeItem(Al),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(){const t=te();return vf(t)||es(t)}const FA=1e3,UA=10;class r0 extends n0{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=$A()&&LC(),this.fallbackToPolling=Fw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);xC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,UA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},FA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}r0.type="LOCAL";const Sf=r0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0 extends n0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}i0.type="SESSION";const Wr=i0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Nl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),u=await VA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Nl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const l=ta("",20);i.port1.start();const c=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(){return window}function BA(t){Ee().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(){return typeof Ee().WorkerGlobalScope!="undefined"&&typeof Ee().importScripts=="function"}async function qA(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function WA(){return kf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0="firebaseLocalStorageDb",HA=1,Rl="firebaseLocalStorage",o0="fbase_key";class na{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bl(t,e){return t.transaction([Rl],e?"readwrite":"readonly").objectStore(Rl)}function KA(){const t=indexedDB.deleteDatabase(s0);return new na(t).toPromise()}function Cf(){const t=indexedDB.open(s0,HA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Rl,{keyPath:o0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Rl)?e(r):(r.close(),await KA(),e(await Cf()))})})}async function a0(t,e,n){const r=bl(t,!0).put({[o0]:e,value:n});return new na(r).toPromise()}async function GA(t,e){const n=bl(t,!1).get(e),r=await new na(n).toPromise();return r===void 0?null:r.value}function u0(t,e){const n=bl(t,!0).delete(e);return new na(n).toPromise()}const QA=800,YA=3;class l0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>YA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nl._getInstance(WA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await qA(),!this.activeServiceWorker)return;this.sender=new jA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cf();return await a0(e,Al,"1"),await u0(e,Al),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>a0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>GA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>u0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=bl(i,!1).getAll();return new na(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),QA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}l0.type="LOCAL";const ra=l0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JA(t,e){return Ae(t,"POST","/v2/accounts/mfaSignIn:start",Ie(t,e))}function XA(t,e){return Ae(t,"POST","/v2/accounts/mfaSignIn:finalize",Ie(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZA(t){return(await Ae(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function c0(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ve("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",eN().appendChild(r)})}function h0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tN=500,nN=6e4,Dl=1e12;class rN{constructor(e){this.auth=e,this.counter=Dl,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new iN(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Dl;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Dl;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Dl;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class iN{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;S(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=sN(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},nN)},tN))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function sN(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af=h0("rcb"),oN=new Qo(3e4,6e4),aN="https://www.google.com/recaptcha/api.js?";class uN{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Ee().grecaptcha}load(e,n=""){return S(lN(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(Ee().grecaptcha):new Promise((r,i)=>{const s=Ee().setTimeout(()=>{i(Ve(e,"network-request-failed"))},oN.get());Ee()[Af]=()=>{Ee().clearTimeout(s),delete Ee()[Af];const a=Ee().grecaptcha;if(!a){i(Ve(e,"internal-error"));return}const u=a.render;a.render=(l,c)=>{const h=u(l,c);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${aN}?${Gi({onload:Af,render:"explicit",hl:n})}`;c0(o).catch(()=>{clearTimeout(s),i(Ve(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Ee().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function lN(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class cN{async load(e){return new rN(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0="recaptcha",hN={theme:"light",type:"image"};class dN{constructor(e,n=Object.assign({},hN),r){this.parameters=n,this.type=d0,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ne(r),this.isInvisible=this.parameters.size==="invisible",S(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;S(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new cN:new uN,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){S(!this.parameters.sitekey,this.auth,"argument-error"),S(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),S(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Ee()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){S(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){S(mf()&&!kf(),this.auth,"internal-error"),await fN(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await ZA(this.auth);S(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return S(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function fN(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=qr._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function pN(t,e,n){const r=Ne(t),i=await Pl(r,e,M(n));return new Nf(i,s=>Sl(r,s))}async function mN(t,e,n){const r=M(t);await Tl(!1,r,"phone");const i=await Pl(r.auth,e,M(n));return new Nf(i,s=>Jw(r,s))}async function gN(t,e,n){const r=M(t),i=await Pl(r.auth,e,M(n));return new Nf(i,s=>Xw(r,s))}async function Pl(t,e,n){var r;const i=await n.verify();try{S(typeof i=="string",t,"argument-error"),S(n.type===d0,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return S(o.type==="enroll",t,"internal-error"),(await OA(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{S(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return S(a,t,"missing-multi-factor-info"),(await JA(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await QC(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function yN(t,e){await wf(M(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.providerId=zt.PROVIDER_ID,this.auth=Ne(e)}verifyPhoneNumber(e,n){return Pl(this.auth,e,M(n))}static credential(e,n){return qr._fromVerification(e,n)}static credentialFromResult(e){const n=e;return zt.credentialFromTaggedObject(n)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?qr._fromTokenResponse(n,r):null}}zt.PROVIDER_ID="phone";zt.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(t,e){return e?Tt(e):(S(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf extends ts{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return En(e,this._buildIdpRequest())}_linkToIdToken(e,n){return En(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return En(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function vN(t){return Yw(t.auth,new Rf(t),t.bypassAuthState)}function wN(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),Qw(n,new Rf(t),t.bypassAuthState)}async function _N(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),wf(n,new Rf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vN;case"linkViaPopup":case"linkViaRedirect":return _N;case"reauthViaPopup":case"reauthViaRedirect":return wN;default:Ue(this.auth,"internal-error")}}resolve(e){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IN=new Qo(2e3,1e4);async function EN(t,e,n){const r=Ne(t);Ji(t,e,Tn);const i=Hr(r,n);return new Sn(r,"signInViaPopup",e,i).executeNotNull()}async function TN(t,e,n){const r=M(t);Ji(r.auth,e,Tn);const i=Hr(r.auth,n);return new Sn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function SN(t,e,n){const r=M(t);Ji(r.auth,e,Tn);const i=Hr(r.auth,n);return new Sn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Sn extends f0{constructor(e,n,r,i,s){super(e,n,i,s);this.provider=r,this.authWindow=null,this.pollId=null,Sn.currentPopupAction&&Sn.currentPopupAction.cancel(),Sn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return S(e,this.auth,"internal-error"),e}async onExecution(){qt(this.filter.length===1,"Popup operations only handle one event");const e=ta();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ve(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ve(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ve(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,IN.get())};e()}}Sn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kN="pendingRedirect",Ol=new Map;class CN extends f0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=Ol.get(this.auth._key());if(!e){try{const r=await AN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ol.set(this.auth._key(),e)}return this.bypassAuthState||Ol.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function AN(t,e){const n=m0(e),r=p0(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function bf(t,e){return p0(t)._set(m0(e),"true")}function NN(){Ol.clear()}function p0(t){return Tt(t._redirectPersistence)}function m0(t){return Br(kN,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RN(t,e,n){return bN(t,e,n)}async function bN(t,e,n){const r=Ne(t);Ji(t,e,Tn);const i=Hr(r,n);return await bf(i,r),i._openRedirect(r,e,"signInViaRedirect")}function DN(t,e,n){return PN(t,e,n)}async function PN(t,e,n){const r=M(t);Ji(r.auth,e,Tn);const i=Hr(r.auth,n);await bf(i,r.auth);const s=await g0(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function ON(t,e,n){return xN(t,e,n)}async function xN(t,e,n){const r=M(t);Ji(r.auth,e,Tn);const i=Hr(r.auth,n);await Tl(!1,r,e.providerId),await bf(i,r.auth);const s=await g0(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function LN(t,e){return await Ne(t)._initializationPromise,xl(t,e,!1)}async function xl(t,e,n=!1){const r=Ne(t),i=Hr(r,e),o=await new CN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function g0(t){const e=ta(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN=10*60*1e3;class y0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$N(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!w0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ve(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=MN&&this.cachedEventUids.clear(),this.cachedEventUids.has(v0(e))}saveEventToCache(e){this.cachedEventUids.add(v0(e)),this.lastProcessedEventTime=Date.now()}}function v0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function w0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $N(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return w0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _0(t,e={}){return Ae(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,UN=/^https?/;async function VN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _0(t);for(const n of e)try{if(jN(n))return}catch{}Ue(t,"unauthorized-domain")}function jN(t){const e=Go(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!UN.test(n))return!1;if(FN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BN=new Qo(3e4,6e4);function I0(){const t=Ee().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function qN(t){return new Promise((e,n)=>{var r,i,s;function o(){I0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{I0(),n(Ve(t,"network-request-failed"))},timeout:BN.get()})}if((i=(r=Ee().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0?void 0:i.Iframe)e(gapi.iframes.getContext());else if((s=Ee().gapi)===null||s===void 0?void 0:s.load)o();else{const a=h0("iframefcb");return Ee()[a]=()=>{gapi.load?o():n(Ve(t,"network-request-failed"))},c0(`https://apis.google.com/js/api.js?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Ll=null,e})}let Ll=null;function zN(t){return Ll=Ll||qN(t),Ll}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WN=new Qo(5e3,15e3),HN="__/auth/iframe",KN="emulator/auth/iframe",GN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function YN(t){const e=t.config;S(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?gf(e,KN):`https://${t.config.authDomain}/${HN}`,r={apiKey:e.apiKey,appName:t.name,v:Vr},i=QN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Gi(r).slice(1)}`}async function JN(t){const e=await zN(t),n=Ee().gapi;return S(n,t,"internal-error"),e.open({where:document.body,url:YN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:GN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ve(t,"network-request-failed"),a=Ee().setTimeout(()=>{s(o)},WN.get());function u(){Ee().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZN=500,eR=600,tR="_blank",nR="http://localhost";class E0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rR(t,e,n,r=ZN,i=eR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},XN),{width:r.toString(),height:i.toString(),top:s,left:o}),l=te().toLowerCase();n&&(a=xw(l)?tR:n),Ow(l)&&(e=e||nR,u.scrollbars="yes");const c=Object.entries(u).reduce((d,[g,y])=>`${d}${g}=${y},`,"");if(OC(l)&&a!=="_self")return iR(e||"",a),new E0(null);const h=window.open(e||"",a,c);S(h,t,"popup-blocked");try{h.focus()}catch{}return new E0(h)}function iR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR="__/auth/handler",oR="emulator/auth/handler";function Df(t,e,n,r,i,s){S(t.config.authDomain,t,"auth-domain-config-required"),S(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Vr,eventId:i};if(e instanceof Tn){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",lk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,l]of Object.entries(s||{}))o[u]=l}if(e instanceof ns){const u=e.getScopes().filter(l=>l!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];return`${aR(t)}?${Gi(a).slice(1)}`}function aR({config:t}){return t.emulator?gf(t,oR):`https://${t.authDomain}/${sR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf="webStorageSupport";class uR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wr,this._completeRedirectFn=xl}async _openPopup(e,n,r,i){var s;qt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Df(e,n,r,Go(),i);return rR(e,o,ta())}async _openRedirect(e,n,r,i){return await this._originValidation(e),BA(Df(e,n,r,Go(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(qt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await JN(e),r=new y0(e);return n.register("authEvent",i=>(S(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Pf,{type:Pf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Pf];o!==void 0&&n(!!o),Ue(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=VN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Fw()||vf()||es()}}const lR=uR;class cR{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return en("unexpected MultiFactorSessionType")}}}class Of extends cR{constructor(e){super("phone");this.credential=e}static _fromCredential(e){return new Of(e)}_finalizeEnroll(e,n,r){return xA(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return XA(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class T0{constructor(){}static assertion(e){return Of._fromCredential(e)}}T0.FACTOR_ID="phone";var S0="@firebase/auth",k0="0.19.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){S(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function fR(t){Ur(new wn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(o=>{S(i&&!i.includes(":"),"invalid-api-key",{appName:o.name}),S(!(s==null?void 0:s.includes(":")),"argument-error",{appName:o.name});const a={apiKey:i,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Uw(t)},u=new MC(o,a);return mC(u,n),u})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ur(new wn("auth-internal",e=>{const n=Ne(e.getProvider("auth").getImmediate());return(r=>new hR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zt(S0,k0,dR(t)),Zt(S0,k0,"esm2017")}fR("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR=2e3;async function mR(t,e,n){var r;const{BuildInfo:i}=Kr();qt(e.sessionId,"AuthEvent did not contain a session ID");const s=await _R(e.sessionId),o={};return es()?o.ibi=i.packageName:Zo()?o.apn=i.packageName:Ue(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Df(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function gR(t){const{BuildInfo:e}=Kr(),n={};es()?n.iosBundleId=e.packageName:Zo()?n.androidPackageName=e.packageName:Ue(t,"operation-not-supported-in-this-environment"),await _0(t,n)}function yR(t){const{cordova:e}=Kr();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,PC()?"_blank":"_system","location=yes"),n(i)})})}async function vR(t,e,n){const{cordova:r}=Kr();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function u(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function l(){a||(a=window.setTimeout(()=>{o(Ve(t,"redirect-cancelled-by-user"))},pR))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(u),document.addEventListener("resume",l,!1),Zo()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(u),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function wR(t){var e,n,r,i,s,o,a,u,l,c;const h=Kr();S(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),S(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)!="undefined",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),S(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),S(typeof((u=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),S(typeof((c=(l=h==null?void 0:h.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function _R(t){const e=IR(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function IR(t){if(qt(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder!="undefined")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER=20;class TR extends y0{constructor(){super(...arguments);this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function SR(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:AR(),postBody:null,tenantId:t.tenantId,error:Ve(t,"no-auth-event")}}function kR(t,e){return xf()._set(Lf(t),e)}async function C0(t){const e=await xf()._get(Lf(t));return e&&await xf()._remove(Lf(t)),e}function CR(t,e){var n,r;const i=RR(e);if(i.includes("/__/auth/callback")){const s=Ml(i),o=s.firebaseError?NR(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],u=a?Ve(a):null;return u?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function AR(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<ER;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function xf(){return Tt(Sf)}function Lf(t){return Br("authEvent",t.config.apiKey,t.name)}function NR(t){try{return JSON.parse(t)}catch{return null}}function RR(t){const e=Ml(t),n=e.link?decodeURIComponent(e.link):void 0,r=Ml(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Ml(i).link||i||r||n||t}function Ml(t){if(!(t==null?void 0:t.includes("?")))return{};const[e,...n]=t.split("?");return Qi(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR=500;class DR{constructor(){this._redirectPersistence=Wr,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=xl}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new TR(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Ue(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){wR(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),NN(),await this._originValidation(e);const o=SR(e,r,i);await kR(e,o);const a=await mR(e,o,n),u=await yR(a);return vR(e,s,u)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=gR(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Kr(),o=setTimeout(async()=>{await C0(e),n.onEvent(A0())},bR),a=async c=>{clearTimeout(o);const h=await C0(e);let d=null;h&&(c==null?void 0:c.url)&&(d=CR(h,c.url)),n.onEvent(d||A0())};typeof r!="undefined"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const u=i,l=`${s.packageName.toLowerCase()}://`;Kr().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(l)&&a({url:c}),typeof u=="function")try{u(c)}catch(h){console.error(h)}}}}const PR=DR;function A0(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Ve("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OR(t,e){Ne(t)._logFramework(e)}var xR="@firebase/auth-compat",LR="0.2.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR=1e3;function $l(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function $R(){return $l()==="http:"||$l()==="https:"}function N0(t=te()){return!!(($l()==="file:"||$l()==="ionic:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function FR(){return dl()||sf()}function UR(){return af()&&(document==null?void 0:document.documentMode)===11}function VR(t=te()){return/Edge\/\d+/.test(t)}function jR(t=te()){return UR()||VR(t)}function R0(){try{const t=self.localStorage,e=ta();if(t)return t.setItem(e,"1"),t.removeItem(e),jR()?fl():!0}catch{return Mf()&&fl()}return!1}function Mf(){return typeof global!="undefined"&&"WorkerGlobalScope"in global&&"importScripts"in global}function $f(){return($R()||of()||N0())&&!FR()&&R0()&&!Mf()}function b0(){return N0()&&typeof document!="undefined"}async function BR(){return b0()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},MR);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St={LOCAL:"local",NONE:"none",SESSION:"session"},ia=S,D0="persistence";function qR(t,e){if(ia(Object.values(St).includes(e),t,"invalid-persistence-type"),dl()){ia(e!==St.SESSION,t,"unsupported-persistence-type");return}if(sf()){ia(e===St.NONE,t,"unsupported-persistence-type");return}if(Mf()){ia(e===St.NONE||e===St.LOCAL&&fl(),t,"unsupported-persistence-type");return}ia(e===St.NONE||R0(),t,"unsupported-persistence-type")}async function Ff(t){await t._initializationPromise;const e=P0(),n=Br(D0,t.config.apiKey,t.name);(e==null?void 0:e.sessionStorage)&&e.sessionStorage.setItem(n,t._getPersistence())}function zR(t,e){const n=P0();if(!(n==null?void 0:n.sessionStorage))return[];const r=Br(D0,t,e);switch(n.sessionStorage.getItem(r)){case St.NONE:return[Xi];case St.LOCAL:return[ra,Wr];case St.SESSION:return[Wr];default:return[]}}function P0(){return typeof window!="undefined"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WR=S;class nr{constructor(){this.browserResolver=Tt(lR),this.cordovaResolver=Tt(PR),this.underlyingResolver=null,this._redirectPersistence=Wr,this._completeRedirectFn=xl}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return b0()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return WR(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await BR();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(t){return t.unwrap()}function HR(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KR(t){return x0(t)}function GR(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if(e.code==="auth/multi-factor-auth-required"){const i=e;i.resolver=new QR(t,PA(t,e))}else if(r){const i=x0(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function x0(t){const{_tokenResponse:e}=t instanceof Et?t.customData:t;if(!e)return null;if(!(t instanceof Et)&&"temporaryProof"in e&&"phoneNumber"in e)return zt.credentialFromResult(t);const n=e.providerId;if(!n||n===Ko.PASSWORD)return null;let r;switch(n){case Ko.GOOGLE:r=rn;break;case Ko.FACEBOOK:r=nn;break;case Ko.GITHUB:r=sn;break;case Ko.TWITTER:r=on;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:u}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?is._create(n,a):tn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new rs(n).credential({idToken:i,accessToken:s,rawNonce:u})}return t instanceof Et?r.credentialFromError(t):r.credentialFromResult(t)}function gt(t,e){return e.catch(n=>{throw n instanceof Et&&GR(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:KR(n),additionalUserInfo:bA(n),user:kn.getOrCreate(i)}})}async function Uf(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>gt(t,n.confirm(r))}}class QR{constructor(e,n){this.resolver=n,this.auth=HR(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return gt(O0(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this._delegate=e,this.multiFactor=MA(e)}static getOrCreate(e){return kn.USER_MAP.has(e)||kn.USER_MAP.set(e,new kn(e)),kn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return gt(this.auth,Jw(this._delegate,e))}async linkWithPhoneNumber(e,n){return Uf(this.auth,mN(this._delegate,e,n))}async linkWithPopup(e){return gt(this.auth,SN(this._delegate,e,nr))}async linkWithRedirect(e){return await Ff(Ne(this.auth)),ON(this._delegate,e,nr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return gt(this.auth,Xw(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Uf(this.auth,gN(this._delegate,e,n))}reauthenticateWithPopup(e){return gt(this.auth,TN(this._delegate,e,nr))}async reauthenticateWithRedirect(e){return await Ff(Ne(this.auth)),DN(this._delegate,e,nr)}sendEmailVerification(e){return wA(this._delegate,e)}async unlink(e){return await sA(this._delegate,e),this}updateEmail(e){return TA(this._delegate,e)}updatePassword(e){return SA(this._delegate,e)}updatePhoneNumber(e){return yN(this._delegate,e)}updateProfile(e){return EA(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return _A(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}kn.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa=S;class Vf{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;sa(r,"invalid-api-key",{appName:e.name}),sa(r,"invalid-api-key",{appName:e.name});const i=typeof window!="undefined"?nr:void 0;this._delegate=n.initialize({options:{persistence:YR(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(fC),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?kn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){$C(this._delegate,e,n)}applyActionCode(e){return cA(this._delegate,e)}checkActionCode(e){return Zw(this._delegate,e)}confirmPasswordReset(e,n){return lA(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return gt(this._delegate,dA(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return vA(this._delegate,e)}isSignInWithEmailLink(e){return mA(this._delegate,e)}async getRedirectResult(){sa($f(),this._delegate,"operation-not-supported-in-this-environment");const e=await LN(this._delegate,nr);return e?gt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){OR(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=L0(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=L0(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return pA(this._delegate,e,n)}sendPasswordResetEmail(e,n){return uA(this._delegate,e,n||void 0)}async setPersistence(e){qR(this._delegate,e);let n;switch(e){case St.SESSION:n=Wr;break;case St.LOCAL:n=await Tt(ra)._isAvailable()?ra:Sf;break;case St.NONE:n=Xi;break;default:return Ue("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return gt(this._delegate,iA(this._delegate))}signInWithCredential(e){return gt(this._delegate,Sl(this._delegate,e))}signInWithCustomToken(e){return gt(this._delegate,aA(this._delegate,e))}signInWithEmailAndPassword(e,n){return gt(this._delegate,fA(this._delegate,e,n))}signInWithEmailLink(e,n){return gt(this._delegate,gA(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Uf(this._delegate,pN(this._delegate,e,n))}async signInWithPopup(e){return sa($f(),this._delegate,"operation-not-supported-in-this-environment"),gt(this._delegate,EN(this._delegate,e,nr))}async signInWithRedirect(e){return sa($f(),this._delegate,"operation-not-supported-in-this-environment"),await Ff(this._delegate),RN(this._delegate,e,nr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return hA(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Vf.Persistence=St;function L0(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&kn.getOrCreate(o)),error:e,complete:n}}function YR(t,e){const n=zR(t,e);if(typeof self!="undefined"&&!n.includes(ra)&&n.push(ra),typeof window!="undefined")for(const r of[Sf,Wr])n.includes(r)||n.push(r);return n.includes(Xi)||n.push(Xi),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(){this.providerId="phone",this._delegate=new zt(O0(Ho.auth()))}static credential(e,n){return zt.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}jf.PHONE_SIGN_IN_METHOD=zt.PHONE_SIGN_IN_METHOD;jf.PROVIDER_ID=zt.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR=S;class XR{constructor(e,n,r=Ho.app()){var i;JR((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new dN(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR="auth-compat";function eb(t){t.INTERNAL.registerComponent(new wn(ZR,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Vf(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Yi.EMAIL_SIGNIN,PASSWORD_RESET:Yi.PASSWORD_RESET,RECOVER_EMAIL:Yi.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Yi.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Yi.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Yi.VERIFY_EMAIL}},EmailAuthProvider:tr,FacebookAuthProvider:nn,GithubAuthProvider:sn,GoogleAuthProvider:rn,OAuthProvider:rs,SAMLAuthProvider:Il,PhoneAuthProvider:jf,PhoneMultiFactorGenerator:T0,RecaptchaVerifier:XR,TwitterAuthProvider:on,Auth:Vf,AuthCredential:ts,Error:Et}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(xR,LR)}eb(Ho);var tb=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},b,Bf=Bf||{},B=tb||self;function Fl(){}function qf(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function oa(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function nb(t){return Object.prototype.hasOwnProperty.call(t,zf)&&t[zf]||(t[zf]=++rb)}var zf="closure_uid_"+(1e9*Math.random()>>>0),rb=0;function ib(t,e,n){return t.call.apply(t.bind,arguments)}function sb(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function je(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?je=ib:je=sb,je.apply(null,arguments)}function Ul(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Be(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function rr(){this.s=this.s,this.o=this.o}var ob=0,ab={};rr.prototype.s=!1;rr.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),ob!=0)){var t=nb(this);delete ab[t]}};rr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const M0=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},$0=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function ub(t){e:{var e=Zb;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function F0(t){return Array.prototype.concat.apply([],arguments)}function Wf(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Vl(t){return/^[\s\xa0]*$/.test(t)}var U0=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ot(t,e){return t.indexOf(e)!=-1}function Hf(t,e){return t<e?-1:t>e?1:0}var at;e:{var V0=B.navigator;if(V0){var j0=V0.userAgent;if(j0){at=j0;break e}}at=""}function Kf(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function B0(t){const e={};for(const n in t)e[n]=t[n];return e}var q0="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function z0(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<q0.length;s++)n=q0[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Gf(t){return Gf[" "](t),t}Gf[" "]=Fl;function lb(t){var e=db;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var cb=ot(at,"Opera"),os=ot(at,"Trident")||ot(at,"MSIE"),W0=ot(at,"Edge"),Qf=W0||os,H0=ot(at,"Gecko")&&!(ot(at.toLowerCase(),"webkit")&&!ot(at,"Edge"))&&!(ot(at,"Trident")||ot(at,"MSIE"))&&!ot(at,"Edge"),hb=ot(at.toLowerCase(),"webkit")&&!ot(at,"Edge");function K0(){var t=B.document;return t?t.documentMode:void 0}var jl;e:{var Yf="",Jf=function(){var t=at;if(H0)return/rv:([^\);]+)(\)|;)/.exec(t);if(W0)return/Edge\/([\d\.]+)/.exec(t);if(os)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(hb)return/WebKit\/(\S+)/.exec(t);if(cb)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Jf&&(Yf=Jf?Jf[1]:""),os){var Xf=K0();if(Xf!=null&&Xf>parseFloat(Yf)){jl=String(Xf);break e}}jl=Yf}var db={};function fb(){return lb(function(){let t=0;const e=U0(String(jl)).split("."),n=U0("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Hf(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Hf(i[2].length==0,s[2].length==0)||Hf(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Zf;if(B.document&&os){var G0=K0();Zf=G0||parseInt(jl,10)||void 0}else Zf=void 0;var pb=Zf,mb=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{B.addEventListener("test",Fl,e),B.removeEventListener("test",Fl,e)}catch{}return t}();function Ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ze.prototype.h=function(){this.defaultPrevented=!0};function aa(t,e){if(Ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(H0){e:{try{Gf(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:gb[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&aa.Z.h.call(this)}}Be(aa,Ze);var gb={2:"touch",3:"pen",4:"mouse"};aa.prototype.h=function(){aa.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ua="closure_listenable_"+(1e6*Math.random()|0),yb=0;function vb(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++yb,this.ca=this.fa=!1}function Bl(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ql(t){this.src=t,this.g={},this.h=0}ql.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=tp(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new vb(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function ep(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=M0(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Bl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function tp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var np="closure_lm_"+(1e6*Math.random()|0),rp={};function Q0(t,e,n,r,i){if(r&&r.once)return J0(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Q0(t,e[s],n,r,i);return null}return n=ap(n),t&&t[ua]?t.N(e,n,oa(r)?!!r.capture:!!r,i):Y0(t,e,n,!1,r,i)}function Y0(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=oa(i)?!!i.capture:!!i,a=sp(t);if(a||(t[np]=a=new ql(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=wb(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)mb||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Z0(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function wb(){function t(n){return e.call(t.src,t.listener,n)}var e=_b;return t}function J0(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)J0(t,e[s],n,r,i);return null}return n=ap(n),t&&t[ua]?t.O(e,n,oa(r)?!!r.capture:!!r,i):Y0(t,e,n,!0,r,i)}function X0(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)X0(t,e[s],n,r,i);else r=oa(r)?!!r.capture:!!r,n=ap(n),t&&t[ua]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=tp(s,n,r,i),-1<n&&(Bl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=sp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=tp(e,n,r,i)),(n=-1<t?e[t]:null)&&ip(n))}function ip(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[ua])ep(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Z0(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=sp(e))?(ep(n,t),n.h==0&&(n.src=null,e[np]=null)):Bl(t)}}}function Z0(t){return t in rp?rp[t]:rp[t]="on"+t}function _b(t,e){if(t.ca)t=!0;else{e=new aa(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&ip(t),t=n.call(r,e)}return t}function sp(t){return t=t[np],t instanceof ql?t:null}var op="__closure_events_fn_"+(1e9*Math.random()>>>0);function ap(t){return typeof t=="function"?t:(t[op]||(t[op]=function(e){return t.handleEvent(e)}),t[op])}function Re(){rr.call(this),this.i=new ql(this),this.P=this,this.I=null}Be(Re,rr);Re.prototype[ua]=!0;Re.prototype.removeEventListener=function(t,e,n,r){X0(this,t,e,n,r)};function qe(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Ze(e,t);else if(e instanceof Ze)e.target=e.target||t;else{var i=e;e=new Ze(r,t),z0(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=zl(o,r,!0,e)&&i}if(o=e.g=t,i=zl(o,r,!0,e)&&i,i=zl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=zl(o,r,!1,e)&&i}Re.prototype.M=function(){if(Re.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Bl(n[r]);delete t.g[e],t.h--}}this.I=null};Re.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Re.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function zl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,u=o.ia||o.src;o.fa&&ep(t.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var up=B.JSON.stringify;function Ib(){var t=t_;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Eb{constructor(){this.h=this.g=null}add(e,n){const r=e_.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var e_=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Tb,t=>t.reset());class Tb{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Sb(t){B.setTimeout(()=>{throw t},0)}function lp(t,e){cp||kb(),hp||(cp(),hp=!0),t_.add(t,e)}var cp;function kb(){var t=B.Promise.resolve(void 0);cp=function(){t.then(Cb)}}var hp=!1,t_=new Eb;function Cb(){for(var t;t=Ib();){try{t.h.call(t.g)}catch(n){Sb(n)}var e=e_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}hp=!1}function Wl(t,e){Re.call(this),this.h=t||1,this.g=e||B,this.j=je(this.kb,this),this.l=Date.now()}Be(Wl,Re);b=Wl.prototype;b.da=!1;b.S=null;b.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),qe(this,"tick"),this.da&&(dp(this),this.start()))}};b.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function dp(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}b.M=function(){Wl.Z.M.call(this),dp(this),delete this.g};function fp(t,e,n){if(typeof t=="function")n&&(t=je(t,n));else if(t&&typeof t.handleEvent=="function")t=je(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:B.setTimeout(t,e||0)}function n_(t){t.g=fp(()=>{t.g=null,t.i&&(t.i=!1,n_(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Ab extends rr{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:n_(this)}M(){super.M(),this.g&&(B.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function la(t){rr.call(this),this.h=t,this.g={}}Be(la,rr);var r_=[];function i_(t,e,n,r){Array.isArray(n)||(n&&(r_[0]=n.toString()),n=r_);for(var i=0;i<n.length;i++){var s=Q0(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function s_(t){Kf(t.g,function(e,n){this.g.hasOwnProperty(n)&&ip(e)},t),t.g={}}la.prototype.M=function(){la.Z.M.call(this),s_(this)};la.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Hl(){this.g=!0}Hl.prototype.Aa=function(){this.g=!1};function Nb(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Rb(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function as(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Db(t,n)+(r?" "+r:"")})}function bb(t,e){t.info(function(){return"TIMEOUT: "+e})}Hl.prototype.info=function(){};function Db(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return up(n)}catch{return e}}var Gr={},o_=null;function Kl(){return o_=o_||new Re}Gr.Ma="serverreachability";function a_(t){Ze.call(this,Gr.Ma,t)}Be(a_,Ze);function ca(t){const e=Kl();qe(e,new a_(e,t))}Gr.STAT_EVENT="statevent";function u_(t,e){Ze.call(this,Gr.STAT_EVENT,t),this.stat=e}Be(u_,Ze);function ut(t){const e=Kl();qe(e,new u_(e,t))}Gr.Na="timingevent";function l_(t,e){Ze.call(this,Gr.Na,t),this.size=e}Be(l_,Ze);function ha(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return B.setTimeout(function(){t()},e)}var Gl={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},c_={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function pp(){}pp.prototype.h=null;function h_(t){return t.h||(t.h=t.i())}function d_(){}var da={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function mp(){Ze.call(this,"d")}Be(mp,Ze);function gp(){Ze.call(this,"c")}Be(gp,Ze);var yp;function Ql(){}Be(Ql,pp);Ql.prototype.g=function(){return new XMLHttpRequest};Ql.prototype.i=function(){return{}};yp=new Ql;function fa(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new la(this),this.P=Pb,t=Qf?125:void 0,this.W=new Wl(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new f_}function f_(){this.i=null,this.g="",this.h=!1}var Pb=45e3,vp={},Yl={};b=fa.prototype;b.setTimeout=function(t){this.P=t};function wp(t,e,n){t.K=1,t.v=tc(Cn(e)),t.s=n,t.U=!0,p_(t,null)}function p_(t,e){t.F=Date.now(),pa(t),t.A=Cn(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),T_(n.h,"t",r),t.C=0,n=t.l.H,t.h=new f_,t.g=H_(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Ab(je(t.Ia,t,t.g),t.O)),i_(t.V,t.g,"readystatechange",t.gb),e=t.H?B0(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),ca(1),Nb(t.j,t.u,t.A,t.m,t.X,t.s)}b.gb=function(t){t=t.target;const e=this.L;e&&An(t)==3?e.l():this.Ia(t)};b.Ia=function(t){try{if(t==this.g)e:{const c=An(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>c)&&(c!=3||Qf||this.g&&(this.h.h||this.g.ga()||L_(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?ca(3):ca(2)),Jl(this);var n=this.g.ba();this.N=n;t:if(m_(this)){var r=L_(this.g);t="";var i=r.length,s=An(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Qr(this),ma(this);var o="";break t}this.h.i=new B.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Rb(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Vl(a)){var l=a;break t}}l=null}if(n=l)as(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,_p(this,n);else{this.i=!1,this.o=3,ut(12),Qr(this),ma(this);break e}}this.U?(g_(this,c,o),Qf&&this.i&&c==3&&(i_(this.V,this.W,"tick",this.fb),this.W.start())):(as(this.j,this.m,o,null),_p(this,o)),c==4&&Qr(this),this.i&&!this.I&&(c==4?B_(this.l,this):(this.i=!1,pa(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ut(12)):(this.o=0,ut(13)),Qr(this),ma(this)}}}catch{}finally{}};function m_(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function g_(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=Ob(t,n),i==Yl){e==4&&(t.o=4,ut(14),r=!1),as(t.j,t.m,null,"[Incomplete Response]");break}else if(i==vp){t.o=4,ut(15),as(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else as(t.j,t.m,i,null),_p(t,i);m_(t)&&i!=Yl&&i!=vp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ut(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Dp(e),e.L=!0,ut(11))):(as(t.j,t.m,n,"[Invalid Chunked Response]"),Qr(t),ma(t))}b.fb=function(){if(this.g){var t=An(this.g),e=this.g.ga();this.C<e.length&&(Jl(this),g_(this,t,e),this.i&&t!=4&&pa(this))}};function Ob(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Yl:(n=Number(e.substring(n,r)),isNaN(n)?vp:(r+=1,r+n>e.length?Yl:(e=e.substr(r,n),t.C=r+n,e)))}b.cancel=function(){this.I=!0,Qr(this)};function pa(t){t.Y=Date.now()+t.P,y_(t,t.P)}function y_(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ha(je(t.eb,t),e)}function Jl(t){t.B&&(B.clearTimeout(t.B),t.B=null)}b.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(bb(this.j,this.A),this.K!=2&&(ca(3),ut(17)),Qr(this),this.o=2,ma(this)):y_(this,this.Y-t)};function ma(t){t.l.G==0||t.I||B_(t.l,t)}function Qr(t){Jl(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,dp(t.W),s_(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function _p(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Tp(n.i,t))){if(n.I=t.N,!t.J&&Tp(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ac(n),sc(n);else break e;bp(n),ut(18)}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=ha(je(n.ab,n),6e3));if(1>=C_(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Xr(n,11)}else if((t.J||n.g==t)&&ac(n),!Vl(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const c=l[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;!s.g&&(ot(y,"spdy")||ot(y,"quic")||ot(y,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Sp(s,s.h),s.h=null))}if(r.D){const I=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(r.sa=I,se(r.F,r.D,I))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=W_(r,r.H?r.la:null,r.W),o.J){A_(r.i,o);var a=o,u=r.K;u&&a.setTimeout(u),a.B&&(Jl(a),pa(a)),r.g=o}else V_(r);0<n.l.length&&oc(n)}else l[0]!="stop"&&l[0]!="close"||Xr(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Xr(n,7):Np(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}ca(4)}catch{}}function xb(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(qf(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Ip(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(qf(t)||typeof t=="string")$0(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(qf(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=xb(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function us(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof us)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}b=us.prototype;b.R=function(){Ep(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};b.T=function(){return Ep(this),this.g.concat()};function Ep(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Yr(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],Yr(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}b.get=function(t,e){return Yr(this.h,t)?this.h[t]:e};b.set=function(t,e){Yr(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};b.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function Yr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var v_=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Lb(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Jr(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Jr){this.g=e!==void 0?e:t.g,Xl(this,t.j),this.s=t.s,Zl(this,t.i),ec(this,t.m),this.l=t.l,e=t.h;var n=new va;n.i=e.i,e.g&&(n.g=new us(e.g),n.h=e.h),w_(this,n),this.o=t.o}else t&&(n=String(t).match(v_))?(this.g=!!e,Xl(this,n[1]||"",!0),this.s=ga(n[2]||""),Zl(this,n[3]||"",!0),ec(this,n[4]),this.l=ga(n[5]||"",!0),w_(this,n[6]||"",!0),this.o=ga(n[7]||"")):(this.g=!!e,this.h=new va(null,this.g))}Jr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ya(e,__,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ya(e,__,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(ya(n,n.charAt(0)=="/"?Vb:Ub,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ya(n,Bb)),t.join("")};function Cn(t){return new Jr(t)}function Xl(t,e,n){t.j=n?ga(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Zl(t,e,n){t.i=n?ga(e,!0):e}function ec(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function w_(t,e,n){e instanceof va?(t.h=e,qb(t.h,t.g)):(n||(e=ya(e,jb)),t.h=new va(e,t.g))}function se(t,e,n){t.h.set(e,n)}function tc(t){return se(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Mb(t){return t instanceof Jr?Cn(t):new Jr(t,void 0)}function $b(t,e,n,r){var i=new Jr(null,void 0);return t&&Xl(i,t),e&&Zl(i,e),n&&ec(i,n),r&&(i.l=r),i}function ga(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ya(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Fb),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Fb(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var __=/[#\/\?@]/g,Ub=/[#\?:]/g,Vb=/[#\?]/g,jb=/[#\?@]/g,Bb=/#/g;function va(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ir(t){t.g||(t.g=new us,t.h=0,t.i&&Lb(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}b=va.prototype;b.add=function(t,e){ir(this),this.i=null,t=ls(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function I_(t,e){ir(t),e=ls(t,e),Yr(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Yr(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ep(t)))}function E_(t,e){return ir(t),e=ls(t,e),Yr(t.g.h,e)}b.forEach=function(t,e){ir(this),this.g.forEach(function(n,r){$0(n,function(i){t.call(e,i,r,this)},this)},this)};b.T=function(){ir(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};b.R=function(t){ir(this);var e=[];if(typeof t=="string")E_(this,t)&&(e=F0(e,this.g.get(ls(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=F0(e,t[n])}return e};b.set=function(t,e){return ir(this),this.i=null,t=ls(this,t),E_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};b.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function T_(t,e,n){I_(t,e),0<n.length&&(t.i=null,t.g.set(ls(t,e),Wf(n)),t.h+=n.length)}b.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function ls(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function qb(t,e){e&&!t.j&&(ir(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(I_(this,r),T_(this,i,n))},t)),t.j=e}var zb=class{constructor(t,e){this.h=t,this.g=e}};function S_(t){this.l=t||Wb,B.PerformanceNavigationTiming?(t=B.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(B.g&&B.g.Ea&&B.g.Ea()&&B.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Wb=10;function k_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function C_(t){return t.h?1:t.g?t.g.size:0}function Tp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Sp(t,e){t.g?t.g.add(e):t.h=e}function A_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}S_.prototype.cancel=function(){if(this.i=N_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function N_(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Wf(t.i)}function kp(){}kp.prototype.stringify=function(t){return B.JSON.stringify(t,void 0)};kp.prototype.parse=function(t){return B.JSON.parse(t,void 0)};function Hb(){this.g=new kp}function Kb(t,e,n){const r=n||"";try{Ip(t,function(i,s){let o=i;oa(i)&&(o=up(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Gb(t,e){const n=new Hl;if(B.Image){const r=new Image;r.onload=Ul(nc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ul(nc,n,r,"TestLoadImage: error",!1,e),r.onabort=Ul(nc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ul(nc,n,r,"TestLoadImage: timeout",!1,e),B.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function nc(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function wa(t){this.l=t.$b||null,this.j=t.ib||!1}Be(wa,pp);wa.prototype.g=function(){return new rc(this.l,this.j)};wa.prototype.i=function(t){return function(){return t}}({});function rc(t,e){Re.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Cp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Be(rc,Re);var Cp=0;b=rc.prototype;b.open=function(t,e){if(this.readyState!=Cp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ia(this)};b.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||B).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};b.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_a(this)),this.readyState=Cp};b.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ia(this)),this.g&&(this.readyState=3,Ia(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof B.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;R_(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function R_(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}b.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?_a(this):Ia(this),this.readyState==3&&R_(this)}};b.Ua=function(t){this.g&&(this.response=this.responseText=t,_a(this))};b.Ta=function(t){this.g&&(this.response=t,_a(this))};b.ha=function(){this.g&&_a(this)};function _a(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ia(t)}b.setRequestHeader=function(t,e){this.v.append(t,e)};b.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};b.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ia(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(rc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Qb=B.JSON.parse;function pe(t){Re.call(this),this.headers=new us,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=b_,this.K=this.L=!1}Be(pe,Re);var b_="",Yb=/^https?$/i,Jb=["POST","PUT"];b=pe.prototype;b.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():yp.g(),this.C=this.u?h_(this.u):h_(yp),this.g.onreadystatechange=je(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){D_(this,s);return}t=n||"";const i=new us(this.headers);r&&Ip(r,function(s,o){i.set(o,s)}),r=ub(i.T()),n=B.FormData&&t instanceof B.FormData,!(0<=M0(Jb,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{x_(this),0<this.B&&((this.K=Xb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=je(this.pa,this)):this.A=fp(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){D_(this,s)}};function Xb(t){return os&&fb()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function Zb(t){return t.toLowerCase()=="content-type"}b.pa=function(){typeof Bf!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,qe(this,"timeout"),this.abort(8))};function D_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,P_(t),ic(t)}function P_(t){t.D||(t.D=!0,qe(t,"complete"),qe(t,"error"))}b.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,qe(this,"complete"),qe(this,"abort"),ic(this))};b.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ic(this,!0)),pe.Z.M.call(this)};b.Fa=function(){this.s||(this.F||this.v||this.l?O_(this):this.cb())};b.cb=function(){O_(this)};function O_(t){if(t.h&&typeof Bf!="undefined"&&(!t.C[1]||An(t)!=4||t.ba()!=2)){if(t.v&&An(t)==4)fp(t.Fa,0,t);else if(qe(t,"readystatechange"),An(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(v_)[1]||null;if(!i&&B.self&&B.self.location){var s=B.self.location.protocol;i=s.substr(0,s.length-1)}r=!Yb.test(i?i.toLowerCase():"")}n=r}if(n)qe(t,"complete"),qe(t,"success");else{t.m=6;try{var o=2<An(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",P_(t)}}finally{ic(t)}}}}function ic(t,e){if(t.g){x_(t);const n=t.g,r=t.C[0]?Fl:null;t.g=null,t.C=null,e||qe(t,"ready");try{n.onreadystatechange=r}catch{}}}function x_(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(B.clearTimeout(t.A),t.A=null)}function An(t){return t.g?t.g.readyState:0}b.ba=function(){try{return 2<An(this)?this.g.status:-1}catch{return-1}};b.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};b.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Qb(e)}};function L_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case b_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}b.Da=function(){return this.m};b.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function eD(t){let e="";return Kf(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Ap(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=eD(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):se(t,e,n))}function Ea(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function M_(t){this.za=0,this.l=[],this.h=new Hl,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ea("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ea("baseRetryDelayMs",5e3,t),this.$a=Ea("retryDelaySeedMs",1e4,t),this.Ya=Ea("forwardChannelMaxRetries",2,t),this.ra=Ea("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new S_(t&&t.concurrentRequestLimit),this.Ca=new Hb,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}b=M_.prototype;b.ma=8;b.G=1;function Np(t){if($_(t),t.G==3){var e=t.V++,n=Cn(t.F);se(n,"SID",t.J),se(n,"RID",e),se(n,"TYPE","terminate"),Ta(t,n),e=new fa(t,t.h,e,void 0),e.K=2,e.v=tc(Cn(n)),n=!1,B.navigator&&B.navigator.sendBeacon&&(n=B.navigator.sendBeacon(e.v.toString(),"")),!n&&B.Image&&(new Image().src=e.v,n=!0),n||(e.g=H_(e.l,null),e.g.ea(e.v)),e.F=Date.now(),pa(e)}z_(t)}b.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function sc(t){t.g&&(Dp(t),t.g.cancel(),t.g=null)}function $_(t){sc(t),t.u&&(B.clearTimeout(t.u),t.u=null),ac(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&B.clearTimeout(t.m),t.m=null)}function Rp(t,e){t.l.push(new zb(t.Za++,e)),t.G==3&&oc(t)}function oc(t){k_(t.i)||t.m||(t.m=!0,lp(t.Ha,t),t.C=0)}function tD(t,e){return C_(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=ha(je(t.Ha,t,e),q_(t,t.C)),t.C++,!0)}b.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new fa(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=B0(s),z0(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=U_(this,i,e),n=Cn(this.F),se(n,"RID",t),se(n,"CVER",22),this.D&&se(n,"X-HTTP-Session-Id",this.D),Ta(this,n),this.o&&s&&Ap(n,this.o,s),Sp(this.i,i),this.Ra&&se(n,"TYPE","init"),this.ja?(se(n,"$req",e),se(n,"SID","null"),i.$=!0,wp(i,n,null)):wp(i,n,e),this.G=2}}else this.G==3&&(t?F_(this,t):this.l.length==0||k_(this.i)||F_(this))};function F_(t,e){var n;e?n=e.m:n=t.V++;const r=Cn(t.F);se(r,"SID",t.J),se(r,"RID",n),se(r,"AID",t.U),Ta(t,r),t.o&&t.s&&Ap(r,t.o,t.s),n=new fa(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=U_(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Sp(t.i,n),wp(n,r,e)}function Ta(t,e){t.j&&Ip({},function(n,r){se(e,r,n)})}function U_(t,e,n){n=Math.min(t.l.length,n);var r=t.j?je(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let l=i[u].h;const c=i[u].g;if(l-=s,0>l)s=Math.max(0,i[u].h-100),a=!1;else try{Kb(c,o,"req"+l+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function V_(t){t.g||t.u||(t.Y=1,lp(t.Ga,t),t.A=0)}function bp(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=ha(je(t.Ga,t),q_(t,t.A)),t.A++,!0)}b.Ga=function(){if(this.u=null,j_(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=ha(je(this.bb,this),t)}};b.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ut(10),sc(this),j_(this))};function Dp(t){t.B!=null&&(B.clearTimeout(t.B),t.B=null)}function j_(t){t.g=new fa(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Cn(t.oa);se(e,"RID","rpc"),se(e,"SID",t.J),se(e,"CI",t.N?"0":"1"),se(e,"AID",t.U),Ta(t,e),se(e,"TYPE","xmlhttp"),t.o&&t.s&&Ap(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=tc(Cn(e)),n.s=null,n.U=!0,p_(n,t)}b.ab=function(){this.v!=null&&(this.v=null,sc(this),bp(this),ut(19))};function ac(t){t.v!=null&&(B.clearTimeout(t.v),t.v=null)}function B_(t,e){var n=null;if(t.g==e){ac(t),Dp(t),t.g=null;var r=2}else if(Tp(t.i,e))n=e.D,A_(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Kl(),qe(r,new l_(r,n,e,i)),oc(t)}else V_(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&tD(t,e)||r==2&&bp(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Xr(t,5);break;case 4:Xr(t,10);break;case 3:Xr(t,6);break;default:Xr(t,2)}}}function q_(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Xr(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=je(t.jb,t);n||(n=new Jr("//www.google.com/images/cleardot.gif"),B.location&&B.location.protocol=="http"||Xl(n,"https"),tc(n)),Gb(n.toString(),r)}else ut(2);t.G=0,t.j&&t.j.va(e),z_(t),$_(t)}b.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ut(2)):(this.h.info("Failed to ping google.com"),ut(1))};function z_(t){t.G=0,t.I=-1,t.j&&((N_(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Wf(t.l),t.l.length=0),t.j.ua())}function W_(t,e,n){let r=Mb(n);if(r.i!="")e&&Zl(r,e+"."+r.i),ec(r,r.m);else{const i=B.location;r=$b(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&Kf(t.aa,function(i,s){se(r,s,i)}),e=t.D,n=t.sa,e&&n&&se(r,e,n),se(r,"VER",t.ma),Ta(t,r),r}function H_(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new pe(new wa({ib:!0})):new pe(t.qa),e.L=t.H,e}function K_(){}b=K_.prototype;b.xa=function(){};b.wa=function(){};b.va=function(){};b.ua=function(){};b.Oa=function(){};function uc(){if(os&&!(10<=Number(pb)))throw Error("Environmental error: no available transport.")}uc.prototype.g=function(t,e){return new kt(t,e)};function kt(t,e){Re.call(this),this.g=new M_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Vl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Vl(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new cs(this)}Be(kt,Re);kt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),lp(je(t.hb,t,e))),ut(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=W_(t,null,t.W),oc(t)};kt.prototype.close=function(){Np(this.g)};kt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Rp(this.g,e)}else this.v?(e={},e.__data__=up(t),Rp(this.g,e)):Rp(this.g,t)};kt.prototype.M=function(){this.g.j=null,delete this.j,Np(this.g),delete this.g,kt.Z.M.call(this)};function G_(t){mp.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Be(G_,mp);function Q_(){gp.call(this),this.status=1}Be(Q_,gp);function cs(t){this.g=t}Be(cs,K_);cs.prototype.xa=function(){qe(this.g,"a")};cs.prototype.wa=function(t){qe(this.g,new G_(t))};cs.prototype.va=function(t){qe(this.g,new Q_(t))};cs.prototype.ua=function(){qe(this.g,"b")};uc.prototype.createWebChannel=uc.prototype.g;kt.prototype.send=kt.prototype.u;kt.prototype.open=kt.prototype.m;kt.prototype.close=kt.prototype.close;Gl.NO_ERROR=0;Gl.TIMEOUT=8;Gl.HTTP_ERROR=6;c_.COMPLETE="complete";d_.EventType=da;da.OPEN="a";da.CLOSE="b";da.ERROR="c";da.MESSAGE="d";Re.prototype.listen=Re.prototype.N;pe.prototype.listenOnce=pe.prototype.O;pe.prototype.getLastError=pe.prototype.La;pe.prototype.getLastErrorCode=pe.prototype.Da;pe.prototype.getStatus=pe.prototype.ba;pe.prototype.getResponseJson=pe.prototype.Qa;pe.prototype.getResponseText=pe.prototype.ga;pe.prototype.send=pe.prototype.ea;var nD=function(){return new uc},rD=function(){return Kl()},Pp=Gl,iD=c_,sD=Gr,Y_={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},oD=wa,lc=d_,aD=pe;const J_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ze.UNAUTHENTICATED=new ze(null),ze.GOOGLE_CREDENTIALS=new ze("google-credentials-uid"),ze.FIRST_PARTY=new ze("first-party-uid"),ze.MOCK_USER=new ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hs="9.6.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=new pl("@firebase/firestore");function Op(){return sr.logLevel}function uD(t){sr.setLogLevel(t)}function k(t,...e){if(sr.logLevel<=G.DEBUG){const n=e.map(xp);sr.debug(`Firestore (${hs}): ${t}`,...n)}}function me(t,...e){if(sr.logLevel<=G.ERROR){const n=e.map(xp);sr.error(`Firestore (${hs}): ${t}`,...n)}}function Sa(t,...e){if(sr.logLevel<=G.WARN){const n=e.map(xp);sr.warn(`Firestore (${hs}): ${t}`,...n)}}function xp(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t="Unexpected state"){const e=`FIRESTORE (${hs}) INTERNAL ASSERTION FAILED: `+t;throw me(e),new Error(e)}function F(t,e){t||O()}function lD(t,e){t||O()}function N(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends Et{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ze.UNAUTHENTICATED))}shutdown(){}}class hD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class dD{constructor(e){this.t=e,this.currentUser=ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new be;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new be,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new be)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(F(typeof r.accessToken=="string"),new X_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return F(e===null||typeof e=="string"),new ze(e)}}class fD{constructor(e,n,r){this.type="FirstParty",this.user=ze.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class pD{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new fD(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gD{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null}start(e,n){this.o=i=>{e.enqueueRetryable(()=>(s=>(s.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`),n(s.token)))(i))};const r=i=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(F(typeof n.token=="string"),new mD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.p(r),this.T=r=>n.writeSequenceNumber(r))}p(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yD(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ct.I=-1;class Z_{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=yD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function W(t,e){return t<e?-1:t>e?1:0}function ds(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function eI(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new T(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new T(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new T(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new T(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new De(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?W(this.nanoseconds,e.nanoseconds):W(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new q(e)}static min(){return new q(new De(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Zr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function nI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,n,r){n===void 0?n=0:n>e.length&&O(),r===void 0?r=e.length-n:r>e.length-n&&O(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ka.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ka?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Y extends ka{construct(e,n,r){return new Y(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new T(v.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Y(n)}static emptyPath(){return new Y([])}}const vD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends ka{construct(e,n,r){return new We(e,n,r)}static isValidIdentifier(e){return vD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new We(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new T(v.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new T(v.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new T(v.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new T(v.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(n)}static emptyPath(){return new We([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this.fields=e,e.sort(We.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ds(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wD(){return typeof atob!="undefined"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Te(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Te(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return W(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Te.EMPTY_BYTE_STRING=new Te("");const _D=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function or(t){if(F(!!t),typeof t=="string"){let e=0;const n=_D.exec(t);if(F(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ge(t.seconds),nanos:ge(t.nanos)}}function ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ps(t){return typeof t=="string"?Te.fromBase64String(t):Te.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function rI(t){const e=t.mapValue.fields.__previous_value__;return Lp(e)?rI(e):e}function Ca(t){const e=or(t.mapValue.fields.__local_write_time__.timestampValue);return new De(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(t){return t==null}function cc(t){return t===0&&1/t==-1/0}function iI(t){return typeof t=="number"&&Number.isInteger(t)&&!cc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.path=e}static fromPath(e){return new P(Y.fromString(e))}static fromName(e){return new P(Y.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&Y.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Y.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new P(new Y(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Lp(t)?4:10:O()}function an(t,e){if(t===e)return!0;const n=ti(t);if(n!==ti(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ca(t).isEqual(Ca(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=or(r.timestampValue),o=or(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return ps(r.bytesValue).isEqual(ps(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return ge(r.geoPointValue.latitude)===ge(i.geoPointValue.latitude)&&ge(r.geoPointValue.longitude)===ge(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ge(r.integerValue)===ge(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=ge(r.doubleValue),o=ge(i.doubleValue);return s===o?cc(s)===cc(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return ds(t.arrayValue.values||[],e.arrayValue.values||[],an);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(tI(s)!==tI(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!an(s[a],o[a])))return!1;return!0}(t,e);default:return O()}}function Aa(t,e){return(t.values||[]).find(n=>an(n,e))!==void 0}function ms(t,e){if(t===e)return 0;const n=ti(t),r=ti(e);if(n!==r)return W(n,r);switch(n){case 0:return 0;case 1:return W(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=ge(i.integerValue||i.doubleValue),a=ge(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return sI(t.timestampValue,e.timestampValue);case 4:return sI(Ca(t),Ca(e));case 5:return W(t.stringValue,e.stringValue);case 6:return function(i,s){const o=ps(i),a=ps(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=W(o[u],a[u]);if(l!==0)return l}return W(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=W(ge(i.latitude),ge(s.latitude));return o!==0?o:W(ge(i.longitude),ge(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=ms(o[u],a[u]);if(l)return l}return W(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){const o=i.fields||{},a=Object.keys(o),u=s.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let c=0;c<a.length&&c<l.length;++c){const h=W(a[c],l[c]);if(h!==0)return h;const d=ms(o[a[c]],u[l[c]]);if(d!==0)return d}return W(a.length,l.length)}(t.mapValue,e.mapValue);default:throw O()}}function sI(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return W(t,e);const n=or(t),r=or(e),i=W(n.seconds,r.seconds);return i!==0?i:W(n.nanos,r.nanos)}function Mp(t){return $p(t)}function $p(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=or(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ps(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,P.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=$p(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${$p(r.fields[a])}`;return s+"}"}(t.mapValue):O();var e,n}function hc(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Fp(t){return!!t&&"integerValue"in t}function Up(t){return!!t&&"arrayValue"in t}function oI(t){return!!t&&"nullValue"in t}function aI(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function dc(t){return!!t&&"mapValue"in t}function Na(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Zr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Na(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Na(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.value=e}static empty(){return new et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!dc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Na(n)}setAll(e){let n=We.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Na(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());dc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return an(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];dc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Zr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new et(Na(this.value))}}function uI(t){const e=[];return Zr(t.fields,(n,r)=>{const i=new We([n]);if(dc(r)){const s=uI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new fs(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e,n,r,i,s){this.key=e,this.documentType=n,this.version=r,this.data=i,this.documentState=s}static newInvalidDocument(e){return new oe(e,0,q.min(),et.empty(),0)}static newFoundDocument(e,n,r){return new oe(e,1,n,r,0)}static newNoDocument(e,n){return new oe(e,2,n,et.empty(),0)}static newUnknownDocument(e,n){return new oe(e,3,n,et.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof oe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new oe(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.R=null}}function lI(t,e=null,n=[],r=[],i=null,s=null,o=null){return new ID(t,e,n,r,i,s,o)}function Ra(t){const e=N(t);if(e.R===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>TD(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ei(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=mc(e.startAt)),e.endAt&&(n+="|ub:",n+=mc(e.endAt)),e.R=n}return e.R}function ED(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Mp(r.value)}`;var r}).join(", ")}]`),ei(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+mc(t.startAt)),t.endAt&&(e+=", endAt: "+mc(t.endAt)),`Target(${e})`}function fc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!DD(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!an(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!dI(t.startAt,e.startAt)&&dI(t.endAt,e.endAt)}function pc(t){return P.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class lt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.P(e,n,r):new SD(e,n,r):n==="array-contains"?new AD(e,r):n==="in"?new ND(e,r):n==="not-in"?new RD(e,r):n==="array-contains-any"?new bD(e,r):new lt(e,n,r)}static P(e,n,r){return n==="in"?new kD(e,r):new CD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(ms(n,this.value)):n!==null&&ti(this.value)===ti(n)&&this.v(ms(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return O()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function TD(t){return t.field.canonicalString()+t.op.toString()+Mp(t.value)}class SD extends lt{constructor(e,n,r){super(e,n,r),this.key=P.fromName(r.referenceValue)}matches(e){const n=P.comparator(e.key,this.key);return this.v(n)}}class kD extends lt{constructor(e,n){super(e,"in",n),this.keys=cI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class CD extends lt{constructor(e,n){super(e,"not-in",n),this.keys=cI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function cI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>P.fromName(r.referenceValue))}class AD extends lt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Up(n)&&Aa(n.arrayValue,this.value)}}class ND extends lt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Aa(this.value.arrayValue,n)}}class RD extends lt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Aa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Aa(this.value.arrayValue,n)}}class bD extends lt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Up(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Aa(this.value.arrayValue,r))}}class ba{constructor(e,n){this.position=e,this.before=n}}function mc(t){return`${t.before?"b":"a"}:${t.position.map(e=>Mp(e)).join(",")}`}class gs{constructor(e,n="asc"){this.field=e,this.dir=n}}function DD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function hI(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=P.comparator(P.fromName(o.referenceValue),n.key):r=ms(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return t.before?r<=0:r<0}function dI(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!an(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.S=null,this.D=null,this.startAt,this.endAt}}function fI(t,e,n,r,i,s,o,a){return new Nn(t,e,n,r,i,s,o,a)}function ys(t){return new Nn(t)}function gc(t){return!ei(t.limit)&&t.limitType==="F"}function yc(t){return!ei(t.limit)&&t.limitType==="L"}function Vp(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function jp(t){for(const e of t.filters)if(e.V())return e.field;return null}function Bp(t){return t.collectionGroup!==null}function vs(t){const e=N(t);if(e.S===null){e.S=[];const n=jp(e),r=Vp(e);if(n!==null&&r===null)n.isKeyField()||e.S.push(new gs(n)),e.S.push(new gs(We.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.S.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new gs(We.keyField(),s))}}}return e.S}function $t(t){const e=N(t);if(!e.D)if(e.limitType==="F")e.D=lI(e.path,e.collectionGroup,vs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of vs(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new gs(s.field,o))}const r=e.endAt?new ba(e.endAt.position,!e.endAt.before):null,i=e.startAt?new ba(e.startAt.position,!e.startAt.before):null;e.D=lI(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.D}function pI(t,e,n){return new Nn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Da(t,e){return fc($t(t),$t(e))&&t.limitType===e.limitType}function mI(t){return`${Ra($t(t))}|lt:${t.limitType}`}function qp(t){return`Query(target=${ED($t(t))}; limitType=${t.limitType})`}function Pa(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):P.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!hI(n.startAt,vs(n),r)||n.endAt&&hI(n.endAt,vs(n),r))}(t,e)}function gI(t){return(e,n)=>{let r=!1;for(const i of vs(t)){const s=PD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function PD(t,e,n){const r=t.field.isKeyField()?P.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),u=o.data.field(i);return a!==null&&u!==null?ms(a,u):O()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return O()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cc(e)?"-0":e}}function vI(t){return{integerValue:""+t}}function wI(t,e){return iI(e)?vI(e):yI(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(){this._=void 0}}function OD(t,e,n){return t instanceof ws?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof ni?II(t,e):t instanceof ri?EI(t,e):function(r,i){const s=_I(r,i),o=TI(s)+TI(r.N);return Fp(s)&&Fp(r.N)?vI(o):yI(r.k,o)}(t,e)}function xD(t,e,n){return t instanceof ni?II(t,e):t instanceof ri?EI(t,e):n}function _I(t,e){return t instanceof _s?Fp(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class ws extends vc{}class ni extends vc{constructor(e){super(),this.elements=e}}function II(t,e){const n=SI(e);for(const r of t.elements)n.some(i=>an(i,r))||n.push(r);return{arrayValue:{values:n}}}class ri extends vc{constructor(e){super(),this.elements=e}}function EI(t,e){let n=SI(e);for(const r of t.elements)n=n.filter(i=>!an(i,r));return{arrayValue:{values:n}}}class _s extends vc{constructor(e,n){super(),this.k=e,this.N=n}}function TI(t){return ge(t.integerValue||t.doubleValue)}function SI(t){return Up(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,n){this.field=e,this.transform=n}}function LD(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof ni&&r instanceof ni||n instanceof ri&&r instanceof ri?ds(n.elements,r.elements,an):n instanceof _s&&r instanceof _s?an(n.N,r.N):n instanceof ws&&r instanceof ws}(t.transform,e.transform)}class MD{constructor(e,n){this.version=e,this.transformResults=n}}class ye{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ye}static exists(e){return new ye(void 0,e)}static updateTime(e){return new ye(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class _c{}function $D(t,e,n){t instanceof xa?function(r,i,s){const o=r.value.clone(),a=NI(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ar?function(r,i,s){if(!wc(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=NI(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(AI(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function zp(t,e,n){t instanceof xa?function(r,i,s){if(!wc(r.precondition,i))return;const o=r.value.clone(),a=RI(r.fieldTransforms,s,i);o.setAll(a),i.convertToFoundDocument(CI(i),o).setHasLocalMutations()}(t,e,n):t instanceof ar?function(r,i,s){if(!wc(r.precondition,i))return;const o=RI(r.fieldTransforms,s,i),a=i.data;a.setAll(AI(r)),a.setAll(o),i.convertToFoundDocument(CI(i),a).setHasLocalMutations()}(t,e,n):function(r,i){wc(r.precondition,i)&&i.convertToNoDocument(q.min())}(t,e)}function FD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=_I(r.transform,i||null);s!=null&&(n==null&&(n=et.empty()),n.set(r.field,s))}return n||null}function kI(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ds(n,r,(i,s)=>LD(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function CI(t){return t.isFoundDocument()?t.version:q.min()}class xa extends _c{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}}class ar extends _c{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}}function AI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function NI(t,e,n){const r=new Map;F(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,xD(o,a,n[i]))}return r}function RI(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,OD(s,o,e))}return r}class La extends _c{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class Wp extends _c{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve,H;function bI(t){switch(t){default:return O();case v.CANCELLED:case v.UNKNOWN:case v.DEADLINE_EXCEEDED:case v.RESOURCE_EXHAUSTED:case v.INTERNAL:case v.UNAVAILABLE:case v.UNAUTHENTICATED:return!1;case v.INVALID_ARGUMENT:case v.NOT_FOUND:case v.ALREADY_EXISTS:case v.PERMISSION_DENIED:case v.FAILED_PRECONDITION:case v.ABORTED:case v.OUT_OF_RANGE:case v.UNIMPLEMENTED:case v.DATA_LOSS:return!0}}function DI(t){if(t===void 0)return me("GRPC error has no .code"),v.UNKNOWN;switch(t){case ve.OK:return v.OK;case ve.CANCELLED:return v.CANCELLED;case ve.UNKNOWN:return v.UNKNOWN;case ve.DEADLINE_EXCEEDED:return v.DEADLINE_EXCEEDED;case ve.RESOURCE_EXHAUSTED:return v.RESOURCE_EXHAUSTED;case ve.INTERNAL:return v.INTERNAL;case ve.UNAVAILABLE:return v.UNAVAILABLE;case ve.UNAUTHENTICATED:return v.UNAUTHENTICATED;case ve.INVALID_ARGUMENT:return v.INVALID_ARGUMENT;case ve.NOT_FOUND:return v.NOT_FOUND;case ve.ALREADY_EXISTS:return v.ALREADY_EXISTS;case ve.PERMISSION_DENIED:return v.PERMISSION_DENIED;case ve.FAILED_PRECONDITION:return v.FAILED_PRECONDITION;case ve.ABORTED:return v.ABORTED;case ve.OUT_OF_RANGE:return v.OUT_OF_RANGE;case ve.UNIMPLEMENTED:return v.UNIMPLEMENTED;case ve.DATA_LOSS:return v.DATA_LOSS;default:return O()}}(H=ve||(ve={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){this.comparator=e,this.root=n||He.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,He.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,He.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ic(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ic(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ic(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ic(this.root,e,this.comparator,!0)}}class Ic{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class He{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:He.RED,this.left=i!=null?i:He.EMPTY,this.right=s!=null?s:He.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new He(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return He.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const e=this.left.check();if(e!==this.right.check())throw O();return e+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,e,n,r,i){return this}insert(t,e,n){return new He(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new PI(this.data.getIterator())}getIteratorFrom(e){return new PI(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof le)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new le(this.comparator);return n.data=e,n}}class PI{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VD=new Se(P.comparator);function Ft(){return VD}const jD=new Se(P.comparator);function Hp(){return jD}const BD=new Se(P.comparator);function OI(){return BD}const qD=new le(P.comparator);function J(...t){let e=qD;for(const n of t)e=e.add(n);return e}const zD=new le(W);function Ec(){return zD}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,$a.createSynthesizedTargetChangeForCurrentChange(e,n)),new Ma(q.min(),r,Ec(),Ft(),J())}}class $a{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new $a(Te.EMPTY_BYTE_STRING,n,J(),J(),J())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,n,r,i){this.$=e,this.removedTargetIds=n,this.key=r,this.O=i}}class xI{constructor(e,n){this.targetId=e,this.M=n}}class LI{constructor(e,n,r=Te.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class MI{constructor(){this.F=0,this.L=FI(),this.B=Te.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return this.F!==0}get j(){return this.q}W(e){e.approximateByteSize()>0&&(this.q=!0,this.B=e)}G(){let e=J(),n=J(),r=J();return this.L.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:O()}}),new $a(this.B,this.U,e,n,r)}H(){this.q=!1,this.L=FI()}J(e,n){this.q=!0,this.L=this.L.insert(e,n)}Y(e){this.q=!0,this.L=this.L.remove(e)}X(){this.F+=1}Z(){this.F-=1}tt(){this.q=!0,this.U=!0}}class WD{constructor(e){this.et=e,this.nt=new Map,this.st=Ft(),this.it=$I(),this.rt=new le(W)}ot(e){for(const n of e.$)e.O&&e.O.isFoundDocument()?this.ct(n,e.O):this.at(n,e.key,e.O);for(const n of e.removedTargetIds)this.at(n,e.key,e.O)}ut(e){this.forEachTarget(e,n=>{const r=this.ht(n);switch(e.state){case 0:this.lt(n)&&r.W(e.resumeToken);break;case 1:r.Z(),r.K||r.H(),r.W(e.resumeToken);break;case 2:r.Z(),r.K||this.removeTarget(n);break;case 3:this.lt(n)&&(r.tt(),r.W(e.resumeToken));break;case 4:this.lt(n)&&(this.ft(n),r.W(e.resumeToken));break;default:O()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.nt.forEach((r,i)=>{this.lt(i)&&n(i)})}dt(e){const n=e.targetId,r=e.M.count,i=this.wt(n);if(i){const s=i.target;if(pc(s))if(r===0){const o=new P(s.path);this.at(n,o,oe.newNoDocument(o,q.min()))}else F(r===1);else this._t(n)!==r&&(this.ft(n),this.rt=this.rt.add(n))}}gt(e){const n=new Map;this.nt.forEach((s,o)=>{const a=this.wt(o);if(a){if(s.current&&pc(a.target)){const u=new P(a.target.path);this.st.get(u)!==null||this.yt(o,u)||this.at(o,u,oe.newNoDocument(u,e))}s.j&&(n.set(o,s.G()),s.H())}});let r=J();this.it.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.wt(u);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))});const i=new Ma(e,n,this.rt,this.st,r);return this.st=Ft(),this.it=$I(),this.rt=new le(W),i}ct(e,n){if(!this.lt(e))return;const r=this.yt(e,n.key)?2:0;this.ht(e).J(n.key,r),this.st=this.st.insert(n.key,n),this.it=this.it.insert(n.key,this.Tt(n.key).add(e))}at(e,n,r){if(!this.lt(e))return;const i=this.ht(e);this.yt(e,n)?i.J(n,1):i.Y(n),this.it=this.it.insert(n,this.Tt(n).delete(e)),r&&(this.st=this.st.insert(n,r))}removeTarget(e){this.nt.delete(e)}_t(e){const n=this.ht(e).G();return this.et.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}X(e){this.ht(e).X()}ht(e){let n=this.nt.get(e);return n||(n=new MI,this.nt.set(e,n)),n}Tt(e){let n=this.it.get(e);return n||(n=new le(W),this.it=this.it.insert(e,n)),n}lt(e){const n=this.wt(e)!==null;return n||k("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.nt.get(e);return n&&n.K?null:this.et.Et(e)}ft(e){this.nt.set(e,new MI),this.et.getRemoteKeysForTarget(e).forEach(n=>{this.at(e,n,null)})}yt(e,n){return this.et.getRemoteKeysForTarget(e).has(n)}}function $I(){return new Se(P.comparator)}function FI(){return new Se(P.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HD=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),KD=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class GD{constructor(e,n){this.databaseId=e,this.C=n}}function Fa(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function UI(t,e){return t.C?e.toBase64():e.toUint8Array()}function QD(t,e){return Fa(t,e.toTimestamp())}function Pe(t){return F(!!t),q.fromTimestamp(function(e){const n=or(e);return new De(n.seconds,n.nanos)}(t))}function Kp(t,e){return function(n){return new Y(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function VI(t){const e=Y.fromString(t);return F(XI(e)),e}function Ua(t,e){return Kp(t.databaseId,e.path)}function un(t,e){const n=VI(e);if(n.get(1)!==t.databaseId.projectId)throw new T(v.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new T(v.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new P(BI(n))}function Gp(t,e){return Kp(t.databaseId,e)}function jI(t){const e=VI(t);return e.length===4?Y.emptyPath():BI(e)}function Va(t){return new Y(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function BI(t){return F(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function qI(t,e,n){return{name:Ua(t,e),fields:n.value.mapValue.fields}}function zI(t,e,n){const r=un(t,e.name),i=Pe(e.updateTime),s=new et({mapValue:{fields:e.fields}}),o=oe.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function YD(t,e){return"found"in e?function(n,r){F(!!r.found),r.found.name,r.found.updateTime;const i=un(n,r.found.name),s=Pe(r.found.updateTime),o=new et({mapValue:{fields:r.found.fields}});return oe.newFoundDocument(i,s,o)}(t,e):"missing"in e?function(n,r){F(!!r.missing),F(!!r.readTime);const i=un(n,r.missing),s=Pe(r.readTime);return oe.newNoDocument(i,s)}(t,e):O()}function JD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:O()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.C?(F(l===void 0||typeof l=="string"),Te.fromBase64String(l||"")):(F(l===void 0||l instanceof Uint8Array),Te.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?v.UNKNOWN:DI(u.code);return new T(l,u.message||"")}(o);n=new LI(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=un(t,r.document.name),s=Pe(r.document.updateTime),o=new et({mapValue:{fields:r.document.fields}}),a=oe.newFoundDocument(i,s,o),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Tc(u,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=un(t,r.document),s=r.readTime?Pe(r.readTime):q.min(),o=oe.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Tc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=un(t,r.document),s=r.removedTargetIds||[];n=new Tc([],s,i,null)}else{if(!("filter"in e))return O();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new UD(i),o=r.targetId;n=new xI(o,s)}}return n}function Sc(t,e){let n;if(e instanceof xa)n={update:qI(t,e.key,e.value)};else if(e instanceof La)n={delete:Ua(t,e.key)};else if(e instanceof ar)n={update:qI(t,e.key,e.data),updateMask:iP(e.fieldMask)};else{if(!(e instanceof Wp))return O();n={verify:Ua(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof ws)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ni)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ri)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof _s)return{fieldPath:s.field.canonicalString(),increment:o.N};throw O()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:QD(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:O()}(t,e.precondition)),n}function WI(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?ye.updateTime(Pe(i.updateTime)):i.exists!==void 0?ye.exists(i.exists):ye.none()}(e.currentDocument):ye.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)F(o.setToServerValue==="REQUEST_TIME"),a=new ws;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new ni(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new ri(l)}else"increment"in o?a=new _s(s,o.increment):O();const u=We.fromServerFormat(o.fieldPath);return new Oa(u,a)}(t,i)):[];if(e.update){e.update.name;const i=un(t,e.update.name),s=new et({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const u=a.fieldPaths||[];return new fs(u.map(l=>We.fromServerFormat(l)))}(e.updateMask);return new ar(i,s,o,n,r)}return new xa(i,s,n,r)}if(e.delete){const i=un(t,e.delete);return new La(i,n)}if(e.verify){const i=un(t,e.verify);return new Wp(i,n)}return O()}function XD(t,e){return t&&t.length>0?(F(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Pe(r.updateTime):Pe(i);return s.isEqual(q.min())&&(s=Pe(i)),new MD(s,r.transformResults||[])}(n,e))):[]}function HI(t,e){return{documents:[Gp(t,e.path)]}}function KI(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Gp(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Gp(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(a){if(a.length===0)return;const u=a.map(l=>function(c){if(c.op==="=="){if(aI(c.value))return{unaryFilter:{field:Is(c.field),op:"IS_NAN"}};if(oI(c.value))return{unaryFilter:{field:Is(c.field),op:"IS_NULL"}}}else if(c.op==="!="){if(aI(c.value))return{unaryFilter:{field:Is(c.field),op:"IS_NOT_NAN"}};if(oI(c.value))return{unaryFilter:{field:Is(c.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Is(c.field),op:tP(c.op),value:c.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(a){if(a.length!==0)return a.map(u=>function(l){return{field:Is(l.field),direction:eP(l.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(a,u){return a.C||ei(u)?u:{value:u}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=YI(e.startAt)),e.endAt&&(n.structuredQuery.endAt=YI(e.endAt)),n}function GI(t){let e=jI(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){F(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=QI(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new gs(Es(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,ei(h)?null:h}(n.limit));let u=null;n.startAt&&(u=JI(n.startAt));let l=null;return n.endAt&&(l=JI(n.endAt)),fI(e,i,o,s,a,"F",u,l)}function ZD(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return O()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function QI(t){return t?t.unaryFilter!==void 0?[rP(t)]:t.fieldFilter!==void 0?[nP(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>QI(e)).reduce((e,n)=>e.concat(n)):O():[]}function YI(t){return{before:t.before,values:t.position}}function JI(t){const e=!!t.before,n=t.values||[];return new ba(n,e)}function eP(t){return HD[t]}function tP(t){return KD[t]}function Is(t){return{fieldPath:t.canonicalString()}}function Es(t){return We.fromServerFormat(t.fieldPath)}function nP(t){return lt.create(Es(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(t.fieldFilter.op),t.fieldFilter.value)}function rP(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Es(t.unaryFilter.field);return lt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Es(t.unaryFilter.field);return lt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Es(t.unaryFilter.field);return lt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Es(t.unaryFilter.field);return lt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return O()}}function iP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function XI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=ZI(e)),e=sP(t.get(n),e);return ZI(e)}function sP(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function ZI(t){return t+""}function Rn(t){const e=t.length;if(F(e>=2),e===2)return F(t.charAt(0)===""&&t.charAt(1)===""),Y.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&O(),t.charAt(o+1)){case"":const a=t.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:O()}s=o+2}return new Y(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e,n){this.seconds=e,this.nanoseconds=n}}class At{constructor(e,n,r){this.ownerId=e,this.allowTabSynchronization=n,this.leaseTimestampMs=r}}At.store="owner",At.key="owner";class ur{constructor(e,n,r){this.userId=e,this.lastAcknowledgedBatchId=n,this.lastStreamToken=r}}ur.store="mutationQueues",ur.keyPath="userId";class ne{constructor(e,n,r,i,s){this.userId=e,this.batchId=n,this.localWriteTimeMs=r,this.baseMutations=i,this.mutations=s}}ne.store="mutations",ne.keyPath="batchId",ne.userMutationsIndex="userMutationsIndex",ne.userMutationsKeyPath=["userId","batchId"];class tt{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,n){return[e,Wt(n)]}static key(e,n,r){return[e,Wt(n),r]}}tt.store="documentMutations",tt.PLACEHOLDER=new tt;class aP{constructor(e,n){this.path=e,this.readTime=n}}class uP{constructor(e,n){this.path=e,this.version=n}}class ce{constructor(e,n,r,i,s,o){this.unknownDocument=e,this.noDocument=n,this.document=r,this.hasCommittedMutations=i,this.readTime=s,this.parentPath=o}}ce.store="remoteDocuments",ce.readTimeIndex="readTimeIndex",ce.readTimeIndexPath="readTime",ce.collectionReadTimeIndex="collectionReadTimeIndex",ce.collectionReadTimeIndexPath=["parentPath","readTime"];class ln{constructor(e){this.byteSize=e}}ln.store="remoteDocumentGlobal",ln.key="remoteDocumentGlobalKey";class yt{constructor(e,n,r,i,s,o,a){this.targetId=e,this.canonicalId=n,this.readTime=r,this.resumeToken=i,this.lastListenSequenceNumber=s,this.lastLimboFreeSnapshotVersion=o,this.query=a}}yt.store="targets",yt.keyPath="targetId",yt.queryTargetsIndexName="queryTargetsIndex",yt.queryTargetsKeyPath=["canonicalId","targetId"];class Ke{constructor(e,n,r){this.targetId=e,this.path=n,this.sequenceNumber=r}}Ke.store="targetDocuments",Ke.keyPath=["targetId","path"],Ke.documentTargetsIndex="documentTargetsIndex",Ke.documentTargetsKeyPath=["path","targetId"];class Nt{constructor(e,n,r,i){this.highestTargetId=e,this.highestListenSequenceNumber=n,this.lastRemoteSnapshotVersion=r,this.targetCount=i}}Nt.key="targetGlobalKey",Nt.store="targetGlobal";class ii{constructor(e,n){this.collectionId=e,this.parent=n}}ii.store="collectionParents",ii.keyPath=["collectionId","parent"];class bn{constructor(e,n,r,i){this.clientId=e,this.updateTimeMs=n,this.networkEnabled=r,this.inForeground=i}}bn.store="clientMetadata",bn.keyPath="clientId";class Ts{constructor(e,n,r){this.bundleId=e,this.createTime=n,this.version=r}}Ts.store="bundles",Ts.keyPath="bundleId";class Ss{constructor(e,n,r){this.name=e,this.readTime=n,this.bundledQuery=r}}Ss.store="namedQueries",Ss.keyPath="name";const lP=[ur.store,ne.store,tt.store,ce.store,yt.store,At.store,Nt.store,Ke.store,bn.store,ln.store,ii.store,Ts.store,Ss.store],eE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new E((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof E?n:E.resolve(n)}catch(n){return E.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):E.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):E.reject(n)}static resolve(e){return new E((n,r)=>{n(e)})}static reject(e){return new E((n,r)=>{r(e)})}static waitFor(e){return new E((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=E.resolve(!1);for(const r of e)n=n.next(i=>i?E.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.It=new be,this.transaction.oncomplete=()=>{this.It.resolve()},this.transaction.onabort=()=>{n.error?this.It.reject(new ja(e,n.error)):this.It.resolve()},this.transaction.onerror=r=>{const i=Qp(r.target.error);this.It.reject(new ja(e,i))}}static open(e,n,r,i){try{return new kc(n,e.transaction(i,r))}catch(s){throw new ja(n,s)}}get At(){return this.It.promise}abort(e){e&&this.It.reject(e),this.aborted||(k("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}store(e){const n=this.transaction.objectStore(e);return new hP(n)}}class Ht{constructor(e,n,r){this.name=e,this.version=n,this.Rt=r,Ht.bt(te())===12.2&&me("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return k("SimpleDb","Removing database:",e),oi(window.indexedDB.deleteDatabase(e)).toPromise()}static Pt(){if(!fl())return!1;if(Ht.vt())return!0;const e=te(),n=Ht.bt(e),r=0<n&&n<10,i=Ht.Vt(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static vt(){var e;return typeof process!="undefined"&&((e=process.env)===null||e===void 0?void 0:e.St)==="YES"}static Dt(e,n){return e.store(n)}static bt(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static Vt(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async Ct(e){return this.db||(k("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new ja(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new T(v.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new T(v.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ja(e,o))},i.onupgradeneeded=s=>{k("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.Rt.Nt(o,i.transaction,s.oldVersion,this.version).next(()=>{k("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.kt&&(this.db.onversionchange=n=>this.kt(n)),this.db}xt(e){this.kt=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.Ct(e);const a=kc.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).catch(l=>(a.abort(l),E.reject(l))).toPromise();return u.catch(()=>{}),await a.At,u}catch(a){const u=a.name!=="FirebaseError"&&o<3;if(k("SimpleDb","Transaction failed with error:",a.message,"Retrying:",u),this.close(),!u)return Promise.reject(a)}}}close(){this.db&&this.db.close(),this.db=void 0}}class cP{constructor(e){this.$t=e,this.Ot=!1,this.Mt=null}get isDone(){return this.Ot}get Ft(){return this.Mt}set cursor(e){this.$t=e}done(){this.Ot=!0}Lt(e){this.Mt=e}delete(){return oi(this.$t.delete())}}class ja extends T{constructor(e,n){super(v.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function si(t){return t.name==="IndexedDbTransactionError"}class hP{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(k("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(k("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),oi(r)}add(e){return k("SimpleDb","ADD",this.store.name,e,e),oi(this.store.add(e))}get(e){return oi(this.store.get(e)).next(n=>(n===void 0&&(n=null),k("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return k("SimpleDb","DELETE",this.store.name,e),oi(this.store.delete(e))}count(){return k("SimpleDb","COUNT",this.store.name),oi(this.store.count())}Bt(e,n){const r=this.cursor(this.options(e,n)),i=[];return this.Ut(r,(s,o)=>{i.push(o)}).next(()=>i)}qt(e,n){k("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.Kt=!1;const i=this.cursor(r);return this.Ut(i,(s,o,a)=>a.delete())}jt(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.Ut(i,n)}Qt(e){const n=this.cursor({});return new E((r,i)=>{n.onerror=s=>{const o=Qp(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}Ut(e,n){const r=[];return new E((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new cP(a),l=n(a.primaryKey,a.value,u);if(l instanceof E){const c=l.catch(h=>(u.done(),E.reject(h)));r.push(c)}u.isDone?i():u.Ft===null?a.continue():a.continue(u.Ft)}}).next(()=>E.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.Kt?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function oi(t){return new E((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Qp(r.target.error);n(i)}})}let nE=!1;function Qp(t){const e=Ht.bt(te());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new T("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return nE||(nE=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE extends tE{constructor(e,n){super(),this.Wt=e,this.currentSequenceNumber=n}}function vt(t,e){const n=N(t);return Ht.Dt(n.Wt,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&$D(s,e,r[i])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&zp(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&zp(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),i=r;this.applyToLocalView(i),r.isValidDocument()||i.convertToNoDocument(q.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),J())}isEqual(e){return this.batchId===e.batchId&&ds(this.mutations,e.mutations,(n,r)=>kI(n,r))&&ds(this.baseMutations,e.baseMutations,(n,r)=>kI(n,r))}}class Jp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){F(e.mutations.length===r.length);let i=OI();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Jp(e,n,r,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n,r,i,s=q.min(),o=q.min(),a=Te.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e){this.Gt=e}}function Xp(t,e){if(e.document)return zI(t.Gt,e.document,!!e.hasCommittedMutations);if(e.noDocument){const n=P.fromSegments(e.noDocument.path),r=Cs(e.noDocument.readTime),i=oe.newNoDocument(n,r);return e.hasCommittedMutations?i.setHasCommittedMutations():i}if(e.unknownDocument){const n=P.fromSegments(e.unknownDocument.path),r=Cs(e.unknownDocument.version);return oe.newUnknownDocument(n,r)}return O()}function sE(t,e,n){const r=Zp(n),i=e.key.path.popLast().toArray();if(e.isFoundDocument()){const s=function(a,u){return{name:Ua(a,u.key),fields:u.data.value.mapValue.fields,updateTime:Fa(a,u.version.toTimestamp())}}(t.Gt,e),o=e.hasCommittedMutations;return new ce(null,null,s,o,r,i)}if(e.isNoDocument()){const s=e.key.path.toArray(),o=ks(e.version),a=e.hasCommittedMutations;return new ce(null,new aP(s,o),null,a,r,i)}if(e.isUnknownDocument()){const s=e.key.path.toArray(),o=ks(e.version);return new ce(new uP(s,o),null,null,!0,r,i)}return O()}function Zp(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function oE(t){const e=new De(t[0],t[1]);return q.fromTimestamp(e)}function ks(t){const e=t.toTimestamp();return new oP(e.seconds,e.nanoseconds)}function Cs(t){const e=new De(t.seconds,t.nanoseconds);return q.fromTimestamp(e)}function As(t,e){const n=(e.baseMutations||[]).map(s=>WI(t.Gt,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>WI(t.Gt,s)),i=De.fromMillis(e.localWriteTimeMs);return new Yp(e.batchId,i,n,r)}function Ba(t){const e=Cs(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Cs(t.lastLimboFreeSnapshotVersion):q.min();let r;var i;return t.query.documents!==void 0?(F((i=t.query).documents.length===1),r=$t(ys(jI(i.documents[0])))):r=function(s){return $t(GI(s))}(t.query),new lr(r,t.targetId,0,t.lastListenSequenceNumber,e,n,Te.fromBase64String(t.resumeToken))}function aE(t,e){const n=ks(e.snapshotVersion),r=ks(e.lastLimboFreeSnapshotVersion);let i;i=pc(e.target)?HI(t.Gt,e.target):KI(t.Gt,e.target);const s=e.resumeToken.toBase64();return new yt(e.targetId,Ra(e.target),n,s,e.sequenceNumber,r,i)}function em(t){const e=GI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?pI(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{getBundleMetadata(e,n){return uE(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:Cs(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return uE(e).put({bundleId:(r=n).id,createTime:ks(Pe(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return lE(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:em(i.bundledQuery),readTime:Cs(i.readTime)};var i})}saveNamedQuery(e,n){return lE(e).put(function(r){return{name:r.name,readTime:ks(Pe(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function uE(t){return vt(t,Ts.store)}function lE(t){return vt(t,Ss.store)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(){this.zt=new tm}addToCollectionParentIndex(e,n){return this.zt.add(n),E.resolve()}getCollectionParents(e,n){return E.resolve(this.zt.getEntries(n))}}class tm{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new le(Y.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new le(Y.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(){this.Ht=new tm}addToCollectionParentIndex(e,n){if(!this.Ht.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.Ht.add(n)});const s={collectionId:r,parent:Wt(i)};return cE(e).put(s)}return E.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[eI(n),""],!1,!0);return cE(e).Bt(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(Rn(o.parent))}return r})}}function cE(t){return vt(t,ii.store)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class wt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new wt(e,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(t,e,n){const r=t.store(ne.store),i=t.store(tt.store),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.jt({range:o},(c,h,d)=>(a++,d.delete()));s.push(u.next(()=>{F(a===1)}));const l=[];for(const c of n.mutations){const h=tt.key(e,c.key.path,n.batchId);s.push(i.delete(h)),l.push(c.key)}return E.waitFor(s).next(()=>l)}function Cc(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw O();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wt.DEFAULT_COLLECTION_PERCENTILE=10,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,wt.DEFAULT=new wt(41943040,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),wt.DISABLED=new wt(-1,0,0);class nm{constructor(e,n,r,i){this.userId=e,this.k=n,this.Jt=r,this.referenceDelegate=i,this.Yt={}}static Xt(e,n,r,i){F(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new nm(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return cr(e).jt({index:ne.userMutationsIndex,range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Ns(e),o=cr(e);return o.add({}).next(a=>{F(typeof a=="number");const u=new Yp(a,n,r,i),l=function(d,g,y){const I=y.baseMutations.map(f=>Sc(d.Gt,f)),p=y.mutations.map(f=>Sc(d.Gt,f));return new ne(g,y.batchId,y.localWriteTime.toMillis(),I,p)}(this.k,this.userId,u),c=[];let h=new le((d,g)=>W(d.canonicalString(),g.canonicalString()));for(const d of i){const g=tt.key(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),c.push(o.put(l)),c.push(s.put(g,tt.PLACEHOLDER))}return h.forEach(d=>{c.push(this.Jt.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Yt[a]=u.keys()}),E.waitFor(c).next(()=>u)})}lookupMutationBatch(e,n){return cr(e).get(n).next(r=>r?(F(r.userId===this.userId),As(this.k,r)):null)}Zt(e,n){return this.Yt[n]?E.resolve(this.Yt[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Yt[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return cr(e).jt({index:ne.userMutationsIndex,range:i},(o,a,u)=>{a.userId===this.userId&&(F(a.batchId>=r),s=As(this.k,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return cr(e).jt({index:ne.userMutationsIndex,range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return cr(e).Bt(ne.userMutationsIndex,n).next(r=>r.map(i=>As(this.k,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=tt.prefixForPath(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Ns(e).jt({range:i},(o,a,u)=>{const[l,c,h]=o,d=Rn(c);if(l===this.userId&&n.path.isEqual(d))return cr(e).get(h).next(g=>{if(!g)throw O();F(g.userId===this.userId),s.push(As(this.k,g))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new le(W);const i=[];return n.forEach(s=>{const o=tt.prefixForPath(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=Ns(e).jt({range:a},(l,c,h)=>{const[d,g,y]=l,I=Rn(g);d===this.userId&&s.path.isEqual(I)?r=r.add(y):h.done()});i.push(u)}),E.waitFor(i).next(()=>this.te(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=tt.prefixForPath(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new le(W);return Ns(e).jt({range:o},(u,l,c)=>{const[h,d,g]=u,y=Rn(d);h===this.userId&&r.isPrefixOf(y)?y.length===i&&(a=a.add(g)):c.done()}).next(()=>this.te(e,a))}te(e,n){const r=[],i=[];return n.forEach(s=>{i.push(cr(e).get(s).next(o=>{if(o===null)throw O();F(o.userId===this.userId),r.push(As(this.k,o))}))}),E.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return dE(e.Wt,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.ee(n.batchId)}),E.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}ee(e){delete this.Yt[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return E.resolve();const r=IDBKeyRange.lowerBound(tt.prefixForUser(this.userId)),i=[];return Ns(e).jt({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=Rn(s[1]);i.push(u)}else a.done()}).next(()=>{F(i.length===0)})})}containsKey(e,n){return fE(e,this.userId,n)}ne(e){return pE(e).get(this.userId).next(n=>n||new ur(this.userId,-1,""))}}function fE(t,e,n){const r=tt.prefixForPath(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Ns(t).jt({range:s,Kt:!0},(a,u,l)=>{const[c,h,d]=a;c===e&&h===i&&(o=!0),l.done()}).next(()=>o)}function cr(t){return vt(t,ne.store)}function Ns(t){return vt(t,tt.store)}function pE(t){return vt(t,ur.store)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){this.se=e}next(){return this.se+=2,this.se}static ie(){return new ai(0)}static re(){return new ai(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(e,n){this.referenceDelegate=e,this.k=n}allocateTargetId(e){return this.oe(e).next(n=>{const r=new ai(n.highestTargetId);return n.highestTargetId=r.next(),this.ce(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.oe(e).next(n=>q.fromTimestamp(new De(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.oe(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.oe(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.ce(e,i)))}addTargetData(e,n){return this.ae(e,n).next(()=>this.oe(e).next(r=>(r.targetCount+=1,this.ue(n,r),this.ce(e,r))))}updateTargetData(e,n){return this.ae(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Rs(e).delete(n.targetId)).next(()=>this.oe(e)).next(r=>(F(r.targetCount>0),r.targetCount-=1,this.ce(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return Rs(e).jt((o,a)=>{const u=Ba(a);u.sequenceNumber<=n&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>E.waitFor(s)).next(()=>i)}forEachTarget(e,n){return Rs(e).jt((r,i)=>{const s=Ba(i);n(s)})}oe(e){return mE(e).get(Nt.key).next(n=>(F(n!==null),n))}ce(e,n){return mE(e).put(Nt.key,n)}ae(e,n){return Rs(e).put(aE(this.k,n))}ue(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.oe(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Ra(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Rs(e).jt({range:i,index:yt.queryTargetsIndexName},(o,a,u)=>{const l=Ba(a);fc(n,l.target)&&(s=l,u.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=hr(e);return n.forEach(o=>{const a=Wt(o.path);i.push(s.put(new Ke(r,a))),i.push(this.referenceDelegate.addReference(e,r,o))}),E.waitFor(i)}removeMatchingKeys(e,n,r){const i=hr(e);return E.forEach(n,s=>{const o=Wt(s.path);return E.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=hr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=hr(e);let s=J();return i.jt({range:r,Kt:!0},(o,a,u)=>{const l=Rn(o[1]),c=new P(l);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=Wt(n.path),i=IDBKeyRange.bound([r],[eI(r)],!1,!0);let s=0;return hr(e).jt({index:Ke.documentTargetsIndex,Kt:!0,range:i},([o,a],u,l)=>{o!==0&&(s++,l.done())}).next(()=>s>0)}Et(e,n){return Rs(e).get(n).next(r=>r?Ba(r):null)}}function Rs(t){return vt(t,yt.store)}function mE(t){return vt(t,Nt.store)}function hr(t){return vt(t,Ke.store)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ui(t){if(t.code!==v.FAILED_PRECONDITION||t.message!==eE)throw t;k("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE([t,e],[n,r]){const i=W(t,n);return i===0?W(e,r):i}class gP{constructor(e){this.he=e,this.buffer=new le(gE),this.le=0}fe(){return++this.le}de(e){const n=[e,this.fe()];if(this.buffer.size<this.he)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();gE(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class yP{constructor(e,n){this.garbageCollector=e,this.asyncQueue=n,this.we=!1,this._e=null}start(e){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.me(e)}stop(){this._e&&(this._e.cancel(),this._e=null)}get started(){return this._e!==null}me(e){const n=this.we?3e5:6e4;k("LruGarbageCollector",`Garbage collection scheduled in ${n}ms`),this._e=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",n,async()=>{this._e=null,this.we=!0;try{await e.collectGarbage(this.garbageCollector)}catch(r){si(r)?k("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",r):await ui(r)}await this.me(e)})}}class vP{constructor(e,n){this.ge=e,this.params=n}calculateTargetCount(e,n){return this.ge.ye(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return E.resolve(Ct.I);const r=new gP(n);return this.ge.forEachTarget(e,i=>r.de(i.sequenceNumber)).next(()=>this.ge.pe(e,i=>r.de(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.ge.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.ge.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(k("LruGarbageCollector","Garbage collection skipped; disabled"),E.resolve(hE)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(k("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),hE):this.Te(e,n))}getCacheSize(e){return this.ge.getCacheSize(e)}Te(e,n){let r,i,s,o,a,u,l;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(k("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(l=Date.now(),Op()<=G.DEBUG&&k("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${h} documents in `+(l-u)+`ms
Total Duration: ${l-c}ms`),E.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(e,n){this.db=e,this.garbageCollector=function(r,i){return new vP(r,i)}(this,n)}ye(e){const n=this.Ee(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Ee(e){let n=0;return this.pe(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}pe(e,n){return this.Ie(e,(r,i)=>n(i))}addReference(e,n,r){return Ac(e,r)}removeReference(e,n,r){return Ac(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Ac(e,n)}Ae(e,n){return function(r,i){let s=!1;return pE(r).Qt(o=>fE(r,o,i).next(a=>(a&&(s=!0),E.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Ie(e,(o,a)=>{if(a<=n){const u=this.Ae(e,o).next(l=>{if(!l)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o),hr(e).delete([0,Wt(o.path)])))});i.push(u)}}).next(()=>E.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Ac(e,n)}Ie(e,n){const r=hr(e);let i,s=Ct.I;return r.jt({index:Ke.documentTargetsIndex},([o,a],{path:u,sequenceNumber:l})=>{o===0?(s!==Ct.I&&n(new P(Rn(i)),s),s=l,i=u):s=Ct.I}).next(()=>{s!==Ct.I&&n(new P(Rn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ac(t,e){return hr(t).put(function(n,r){return new Ke(0,Wt(n.path),r)}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i!==void 0){for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n])}else this.inner[r]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),!0;return!1}forEach(e){Zr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return nI(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(){this.changes=new bs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:q.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:oe.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?E.resolve(r.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(e,n){this.k=e,this.Jt=n}addEntry(e,n,r){return dr(e).put(Nc(n),r)}removeEntry(e,n){const r=dr(e),i=Nc(n);return r.delete(i)}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Re(e,r)))}getEntry(e,n){return dr(e).get(Nc(n)).next(r=>this.be(n,r))}Pe(e,n){return dr(e).get(Nc(n)).next(r=>({document:this.be(n,r),size:Cc(r)}))}getEntries(e,n){let r=Ft();return this.ve(e,n,(i,s)=>{const o=this.be(i,s);r=r.insert(i,o)}).next(()=>r)}Ve(e,n){let r=Ft(),i=new Se(P.comparator);return this.ve(e,n,(s,o)=>{const a=this.be(s,o);r=r.insert(s,a),i=i.insert(s,Cc(o))}).next(()=>({documents:r,Se:i}))}ve(e,n,r){if(n.isEmpty())return E.resolve();const i=IDBKeyRange.bound(n.first().path.toArray(),n.last().path.toArray()),s=n.getIterator();let o=s.getNext();return dr(e).jt({range:i},(a,u,l)=>{const c=P.fromSegments(a);for(;o&&P.comparator(o,c)<0;)r(o,null),o=s.getNext();o&&o.isEqual(c)&&(r(o,u),o=s.hasNext()?s.getNext():null),o?l.Lt(o.path.toArray()):l.done()}).next(()=>{for(;o;)r(o,null),o=s.hasNext()?s.getNext():null})}getDocumentsMatchingQuery(e,n,r){let i=Ft();const s=n.path.length+1,o={};if(r.isEqual(q.min())){const a=n.path.toArray();o.range=IDBKeyRange.lowerBound(a)}else{const a=n.path.toArray(),u=Zp(r);o.range=IDBKeyRange.lowerBound([a,u],!0),o.index=ce.collectionReadTimeIndex}return dr(e).jt(o,(a,u,l)=>{if(a.length!==s)return;const c=Xp(this.k,u);n.path.isPrefixOf(c.key.path)?Pa(n,c)&&(i=i.insert(c.key,c)):l.done()}).next(()=>i)}newChangeBuffer(e){return new IP(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return vE(e).get(ln.key).next(n=>(F(!!n),n))}Re(e,n){return vE(e).put(ln.key,n)}be(e,n){if(n){const r=Xp(this.k,n);if(!(r.isNoDocument()&&r.version.isEqual(q.min())))return r}return oe.newInvalidDocument(e)}}class IP extends yE{constructor(e,n){super(),this.De=e,this.trackRemovals=n,this.Ce=new bs(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new le((s,o)=>W(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.Ce.get(s);if(o.document.isValidDocument()){const u=sE(this.De.k,o.document,this.getReadTime(s));i=i.add(s.path.popLast()),r+=Cc(u)-a,n.push(this.De.addEntry(e,s,u))}else if(r-=a,this.trackRemovals){const u=sE(this.De.k,oe.newNoDocument(s,q.min()),this.getReadTime(s));n.push(this.De.addEntry(e,s,u))}else n.push(this.De.removeEntry(e,s))}),i.forEach(s=>{n.push(this.De.Jt.addToCollectionParentIndex(e,s))}),n.push(this.De.updateMetadata(e,r)),E.waitFor(n)}getFromCache(e,n){return this.De.Pe(e,n).next(r=>(this.Ce.set(n,r.size),r.document))}getAllFromCache(e,n){return this.De.Ve(e,n).next(({documents:r,Se:i})=>(i.forEach((s,o)=>{this.Ce.set(s,o)}),r))}}function vE(t){return vt(t,ln.store)}function dr(t){return vt(t,ce.store)}function Nc(t){return t.path.toArray()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(e){this.k=e}Nt(e,n,r,i){F(r<i&&r>=0&&i<=11);const s=new kc("createOrUpgrade",n);r<1&&i>=1&&(function(a){a.createObjectStore(At.store)}(e),function(a){a.createObjectStore(ur.store,{keyPath:ur.keyPath}),a.createObjectStore(ne.store,{keyPath:ne.keyPath,autoIncrement:!0}).createIndex(ne.userMutationsIndex,ne.userMutationsKeyPath,{unique:!0}),a.createObjectStore(tt.store)}(e),wE(e),function(a){a.createObjectStore(ce.store)}(e));let o=E.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore(Ke.store),a.deleteObjectStore(yt.store),a.deleteObjectStore(Nt.store)}(e),wE(e)),o=o.next(()=>function(a){const u=a.store(Nt.store),l=new Nt(0,0,q.min().toTimestamp(),0);return u.put(Nt.key,l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,u){return u.store(ne.store).Bt().next(l=>{a.deleteObjectStore(ne.store),a.createObjectStore(ne.store,{keyPath:ne.keyPath,autoIncrement:!0}).createIndex(ne.userMutationsIndex,ne.userMutationsKeyPath,{unique:!0});const c=u.store(ne.store),h=l.map(d=>c.put(d));return E.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore(bn.store,{keyPath:bn.keyPath})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Ne(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore(ln.store)}(e),this.ke(s)))),r<7&&i>=7&&(o=o.next(()=>this.xe(s))),r<8&&i>=8&&(o=o.next(()=>this.$e(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e),function(a){const u=a.objectStore(ce.store);u.createIndex(ce.readTimeIndex,ce.readTimeIndexPath,{unique:!1}),u.createIndex(ce.collectionReadTimeIndex,ce.collectionReadTimeIndexPath,{unique:!1})}(n)})),r<10&&i>=10&&(o=o.next(()=>this.Oe(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore(Ts.store,{keyPath:Ts.keyPath})})(e),function(a){a.createObjectStore(Ss.store,{keyPath:Ss.keyPath})}(e)})),o}ke(e){let n=0;return e.store(ce.store).jt((r,i)=>{n+=Cc(i)}).next(()=>{const r=new ln(n);return e.store(ln.store).put(ln.key,r)})}Ne(e){const n=e.store(ur.store),r=e.store(ne.store);return n.Bt().next(i=>E.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.Bt(ne.userMutationsIndex,o).next(a=>E.forEach(a,u=>{F(u.userId===s.userId);const l=As(this.k,u);return dE(e,s.userId,l).next(()=>{})}))}))}xe(e){const n=e.store(Ke.store),r=e.store(ce.store);return e.store(Nt.store).get(Nt.key).next(i=>{const s=[];return r.jt((o,a)=>{const u=new Y(o),l=function(c){return[0,Wt(c)]}(u);s.push(n.get(l).next(c=>c?E.resolve():(h=>n.put(new Ke(0,Wt(h),i.highestListenSequenceNumber)))(u)))}).next(()=>E.waitFor(s))})}$e(e,n){e.createObjectStore(ii.store,{keyPath:ii.keyPath});const r=n.store(ii.store),i=new tm,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:Wt(u)})}};return n.store(ce.store).jt({Kt:!0},(o,a)=>{const u=new Y(o);return s(u.popLast())}).next(()=>n.store(tt.store).jt({Kt:!0},([o,a,u],l)=>{const c=Rn(a);return s(c.popLast())}))}Oe(e){const n=e.store(yt.store);return n.jt((r,i)=>{const s=Ba(i),o=aE(this.k,s);return n.put(o)})}}function wE(t){t.createObjectStore(Ke.store,{keyPath:Ke.keyPath}).createIndex(Ke.documentTargetsIndex,Ke.documentTargetsKeyPath,{unique:!0}),t.createObjectStore(yt.store,{keyPath:yt.keyPath}).createIndex(yt.queryTargetsIndexName,yt.queryTargetsKeyPath,{unique:!0}),t.createObjectStore(Nt.store)}const rm="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class im{constructor(e,n,r,i,s,o,a,u,l,c){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.Me=s,this.window=o,this.document=a,this.Fe=l,this.Le=c,this.Be=null,this.Ue=!1,this.isPrimary=!1,this.networkEnabled=!0,this.qe=null,this.inForeground=!1,this.Ke=null,this.je=null,this.Qe=Number.NEGATIVE_INFINITY,this.We=h=>Promise.resolve(),!im.Pt())throw new T(v.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new wP(this,i),this.Ge=n+"main",this.k=new iE(u),this.ze=new Ht(this.Ge,11,new EP(this.k)),this.He=new mP(this.referenceDelegate,this.k),this.Jt=new pP,this.Je=function(h,d){return new _P(h,d)}(this.k,this.Jt),this.Ye=new dP,this.window&&this.window.localStorage?this.Xe=this.window.localStorage:(this.Xe=null,c===!1&&me("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ze().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new T(v.FAILED_PRECONDITION,rm);return this.tn(),this.en(),this.nn(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.He.getHighestSequenceNumber(e))}).then(e=>{this.Be=new Ct(e,this.Fe)}).then(()=>{this.Ue=!0}).catch(e=>(this.ze&&this.ze.close(),Promise.reject(e)))}sn(e){return this.We=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ze.xt(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Me.enqueueAndForget(async()=>{this.started&&await this.Ze()}))}Ze(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Rc(e).put(new bn(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next(()=>{if(this.isPrimary)return this.rn(e).next(n=>{n||(this.isPrimary=!1,this.Me.enqueueRetryable(()=>this.We(!1)))})}).next(()=>this.on(e)).next(n=>this.isPrimary&&!n?this.cn(e).next(()=>!1):!!n&&this.an(e).next(()=>!0))).catch(e=>{if(si(e))return k("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return k("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Me.enqueueRetryable(()=>this.We(e)),this.isPrimary=e})}rn(e){return qa(e).get(At.key).next(n=>E.resolve(this.un(n)))}hn(e){return Rc(e).delete(this.clientId)}async ln(){if(this.isPrimary&&!this.fn(this.Qe,18e5)){this.Qe=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=vt(n,bn.store);return r.Bt().next(i=>{const s=this.dn(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return E.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Xe)for(const n of e)this.Xe.removeItem(this.wn(n.clientId))}}nn(){this.je=this.Me.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ze().then(()=>this.ln()).then(()=>this.nn()))}un(e){return!!e&&e.ownerId===this.clientId}on(e){return this.Le?E.resolve(!0):qa(e).get(At.key).next(n=>{if(n!==null&&this.fn(n.leaseTimestampMs,5e3)&&!this._n(n.ownerId)){if(this.un(n)&&this.networkEnabled)return!0;if(!this.un(n)){if(!n.allowTabSynchronization)throw new T(v.FAILED_PRECONDITION,rm);return!1}}return!(!this.networkEnabled||!this.inForeground)||Rc(e).Bt().next(r=>this.dn(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&k("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Ue=!1,this.mn(),this.je&&(this.je.cancel(),this.je=null),this.gn(),this.yn(),await this.ze.runTransaction("shutdown","readwrite",[At.store,bn.store],e=>{const n=new rE(e,Ct.I);return this.cn(n).next(()=>this.hn(n))}),this.ze.close(),this.pn()}dn(e,n){return e.filter(r=>this.fn(r.updateTimeMs,n)&&!this._n(r.clientId))}Tn(){return this.runTransaction("getActiveClients","readonly",e=>Rc(e).Bt().next(n=>this.dn(n,18e5).map(r=>r.clientId)))}get started(){return this.Ue}getMutationQueue(e){return nm.Xt(e,this.k,this.Jt,this.referenceDelegate)}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getIndexManager(){return this.Jt}getBundleCache(){return this.Ye}runTransaction(e,n,r){k("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite";let s;return this.ze.runTransaction(e,i,lP,o=>(s=new rE(o,this.Be?this.Be.next():Ct.I),n==="readwrite-primary"?this.rn(s).next(a=>!!a||this.on(s)).next(a=>{if(!a)throw me(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Me.enqueueRetryable(()=>this.We(!1)),new T(v.FAILED_PRECONDITION,eE);return r(s)}).next(a=>this.an(s).next(()=>a)):this.En(s).next(()=>r(s)))).then(o=>(s.raiseOnCommittedEvent(),o))}En(e){return qa(e).get(At.key).next(n=>{if(n!==null&&this.fn(n.leaseTimestampMs,5e3)&&!this._n(n.ownerId)&&!this.un(n)&&!(this.Le||this.allowTabSynchronization&&n.allowTabSynchronization))throw new T(v.FAILED_PRECONDITION,rm)})}an(e){const n=new At(this.clientId,this.allowTabSynchronization,Date.now());return qa(e).put(At.key,n)}static Pt(){return Ht.Pt()}cn(e){const n=qa(e);return n.get(At.key).next(r=>this.un(r)?(k("IndexedDbPersistence","Releasing primary lease."),n.delete(At.key)):E.resolve())}fn(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(me(`Detected an update time that is in the future: ${e} > ${r}`),!1))}tn(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ke=()=>{this.Me.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ze()))},this.document.addEventListener("visibilitychange",this.Ke),this.inForeground=this.document.visibilityState==="visible")}gn(){this.Ke&&(this.document.removeEventListener("visibilitychange",this.Ke),this.Ke=null)}en(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.qe=()=>{this.mn(),sk()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Me.enterRestrictedMode(!0),this.Me.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.qe))}yn(){this.qe&&(this.window.removeEventListener("pagehide",this.qe),this.qe=null)}_n(e){var n;try{const r=((n=this.Xe)===null||n===void 0?void 0:n.getItem(this.wn(e)))!==null;return k("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return me("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}mn(){if(this.Xe)try{this.Xe.setItem(this.wn(this.clientId),String(Date.now()))}catch(e){me("Failed to set zombie client id.",e)}}pn(){if(this.Xe)try{this.Xe.removeItem(this.wn(this.clientId))}catch{}}wn(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function qa(t){return vt(t,At.store)}function Rc(t){return vt(t,bn.store)}function sm(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e,n){this.progress=e,this.In=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e,n,r){this.Je=e,this.An=n,this.Jt=r}Rn(e,n){return this.An.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.bn(e,n,r))}bn(e,n,r){return this.Je.getEntry(e,n).next(i=>{for(const s of r)s.applyToLocalView(i);return i})}Pn(e,n){e.forEach((r,i)=>{for(const s of n)s.applyToLocalView(i)})}vn(e,n){return this.Je.getEntries(e,n).next(r=>this.Vn(e,r).next(()=>r))}Vn(e,n){return this.An.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.Pn(n,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return P.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.Sn(e,n.path):Bp(n)?this.Dn(e,n,r):this.Cn(e,n,r)}Sn(e,n){return this.Rn(e,new P(n)).next(r=>{let i=Hp();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}Dn(e,n,r){const i=n.collectionGroup;let s=Hp();return this.Jt.getCollectionParents(e,i).next(o=>E.forEach(o,a=>{const u=function(l,c){return new Nn(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.Cn(e,u,r).next(l=>{l.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}Cn(e,n,r){let i,s;return this.Je.getDocumentsMatchingQuery(e,n,r).next(o=>(i=o,this.An.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(s=o,this.Nn(e,s,i).next(a=>{i=a;for(const u of s)for(const l of u.mutations){const c=l.key;let h=i.get(c);h==null&&(h=oe.newInvalidDocument(c),i=i.insert(c,h)),zp(l,h,u.localWriteTime),h.isFoundDocument()||(i=i.remove(c))}}))).next(()=>(i.forEach((o,a)=>{Pa(n,a)||(i=i.remove(o))}),i))}Nn(e,n,r){let i=J();for(const o of n)for(const a of o.mutations)a instanceof ar&&r.get(a.key)===null&&(i=i.add(a.key));let s=r;return this.Je.getEntries(e,i).next(o=>(o.forEach((a,u)=>{u.isFoundDocument()&&(s=s.insert(a,u))}),s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.kn=r,this.xn=i}static $n(e,n){let r=J(),i=J();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new om(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{On(e){this.Mn=e}getDocumentsMatchingQuery(e,n,r,i){return function(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(q.min())?this.Fn(e,n):this.Mn.vn(e,i).next(s=>{const o=this.Ln(n,s);return(gc(n)||yc(n))&&this.Bn(n.limitType,o,i,r)?this.Fn(e,n):(Op()<=G.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),qp(n)),this.Mn.getDocumentsMatchingQuery(e,n,r).next(a=>(o.forEach(u=>{a=a.insert(u.key,u)}),a)))})}Ln(e,n){let r=new le(gI(e));return n.forEach((i,s)=>{Pa(e,s)&&(r=r.add(s))}),r}Bn(e,n,r,i){if(r.size!==n.size)return!0;const s=e==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Fn(e,n){return Op()<=G.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",qp(n)),this.Mn.getDocumentsMatchingQuery(e,n,q.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{constructor(e,n,r,i){this.persistence=e,this.Un=n,this.k=i,this.qn=new Se(W),this.Kn=new bs(s=>Ra(s),fc),this.jn=q.min(),this.An=e.getMutationQueue(r),this.Qn=e.getRemoteDocumentCache(),this.He=e.getTargetCache(),this.Wn=new _E(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=e.getBundleCache(),this.Un.On(this.Wn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qn))}}function EE(t,e,n,r){return new SP(t,e,n,r)}async function TE(t,e){const n=N(t);let r=n.An,i=n.Wn;const s=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.An.getAllMutationBatches(o).next(u=>(a=u,r=n.persistence.getMutationQueue(e),i=new _E(n.Qn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(o))).next(u=>{const l=[],c=[];let h=J();for(const d of a){l.push(d.batchId);for(const g of d.mutations)h=h.add(g.key)}for(const d of u){c.push(d.batchId);for(const g of d.mutations)h=h.add(g.key)}return i.vn(o,h).next(d=>({Gn:d,removedBatchIds:l,addedBatchIds:c}))})});return n.An=r,n.Wn=i,n.Un.On(n.Wn),s}function kP(t,e){const n=N(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Qn.newChangeBuffer({trackRemovals:!0});return function(o,a,u,l){const c=u.batch,h=c.keys();let d=E.resolve();return h.forEach(g=>{d=d.next(()=>l.getEntry(a,g)).next(y=>{const I=u.docVersions.get(g);F(I!==null),y.version.compareTo(I)<0&&(c.applyToRemoteDocument(y,u),y.isValidDocument()&&l.addEntry(y,u.commitVersion))})}),d.next(()=>o.An.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.An.performConsistencyCheck(r)).next(()=>n.Wn.vn(r,i))})}function SE(t){const e=N(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.He.getLastRemoteSnapshotVersion(n))}function CP(t,e){const n=N(t),r=e.snapshotVersion;let i=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Qn.newChangeBuffer({trackRemovals:!0});i=n.qn;const a=[];e.targetChanges.forEach((l,c)=>{const h=i.get(c);if(!h)return;a.push(n.He.removeMatchingKeys(s,l.removedDocuments,c).next(()=>n.He.addMatchingKeys(s,l.addedDocuments,c)));let d=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(c)?d=d.withResumeToken(Te.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):l.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(l.resumeToken,r)),i=i.insert(c,d),function(g,y,I){return g.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(h,d,l)&&a.push(n.He.updateTargetData(s,d))});let u=Ft();if(e.documentUpdates.forEach((l,c)=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(kE(s,o,e.documentUpdates,r,void 0).next(l=>{u=l})),!r.isEqual(q.min())){const l=n.He.getLastRemoteSnapshotVersion(s).next(c=>n.He.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return E.waitFor(a).next(()=>o.apply(s)).next(()=>n.Wn.Vn(s,u)).next(()=>u)}).then(s=>(n.qn=i,s))}function kE(t,e,n,r,i){let s=J();return n.forEach(o=>s=s.add(o)),e.getEntries(t,s).next(o=>{let a=Ft();return n.forEach((u,l)=>{const c=o.get(u),h=(i==null?void 0:i.get(u))||r;l.isNoDocument()&&l.version.isEqual(q.min())?(e.removeEntry(u,h),a=a.insert(u,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l,h),a=a.insert(u,l)):k("LocalStore","Ignoring outdated watch update for ",u,". Current version:",c.version," Watch version:",l.version)}),a})}function AP(t,e){const n=N(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.An.getNextMutationBatchAfterBatchId(r,e)))}function Ds(t,e){const n=N(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.He.getTargetData(r,e).next(s=>s?(i=s,E.resolve(i)):n.He.allocateTargetId(r).next(o=>(i=new lr(e,o,0,r.currentSequenceNumber),n.He.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.qn.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qn=n.qn.insert(r.targetId,r),n.Kn.set(e,r.targetId)),r})}async function Ps(t,e,n){const r=N(t),i=r.qn.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!si(o))throw o;k("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.qn=r.qn.remove(e),r.Kn.delete(i.target)}function bc(t,e,n){const r=N(t);let i=q.min(),s=J();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,u,l){const c=N(a),h=c.Kn.get(l);return h!==void 0?E.resolve(c.qn.get(h)):c.He.getTargetData(u,l)}(r,o,$t(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.He.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Un.getDocumentsMatchingQuery(o,e,n?i:q.min(),n?s:J())).next(a=>({documents:a,zn:s})))}function CE(t,e){const n=N(t),r=N(n.He),i=n.qn.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.Et(s,e).next(o=>o?o.target:null))}function AE(t){const e=N(t);return e.persistence.runTransaction("Get new document changes","readonly",n=>function(r,i,s){const o=N(r);let a=Ft(),u=Zp(s);const l=dr(i),c=IDBKeyRange.lowerBound(u,!0);return l.jt({index:ce.readTimeIndex,range:c},(h,d)=>{const g=Xp(o.k,d);a=a.insert(g.key,g),u=d.readTime}).next(()=>({In:a,readTime:oE(u)}))}(e.Qn,n,e.jn)).then(({In:n,readTime:r})=>(e.jn=r,n))}async function NP(t){const e=N(t);return e.persistence.runTransaction("Synchronize last document change read time","readonly",n=>function(r){const i=dr(r);let s=q.min();return i.jt({index:ce.readTimeIndex,reverse:!0},(o,a,u)=>{a.readTime&&(s=oE(a.readTime)),u.done()}).next(()=>s)}(n)).then(n=>{e.jn=n})}async function RP(t,e,n,r){const i=N(t);let s=J(),o=Ft(),a=OI();for(const c of n){const h=e.Hn(c.metadata.name);c.document&&(s=s.add(h)),o=o.insert(h,e.Jn(c)),a=a.insert(h,e.Yn(c.metadata.readTime))}const u=i.Qn.newChangeBuffer({trackRemovals:!0}),l=await Ds(i,function(c){return $t(ys(Y.fromString(`__bundle__/docs/${c}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>kE(c,u,o,q.min(),a).next(h=>(u.apply(c),h)).next(h=>i.He.removeMatchingKeysForTargetId(c,l.targetId).next(()=>i.He.addMatchingKeys(c,s,l.targetId)).next(()=>i.Wn.Vn(c,h)).next(()=>h)))}async function bP(t,e,n=J()){const r=await Ds(t,$t(em(e.bundledQuery))),i=N(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Pe(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Ye.saveNamedQuery(s,e);const a=r.withResumeToken(Te.EMPTY_BYTE_STRING,o);return i.qn=i.qn.insert(a.targetId,a),i.He.updateTargetData(s,a).next(()=>i.He.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.He.addMatchingKeys(s,n,r.targetId)).next(()=>i.Ye.saveNamedQuery(s,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{constructor(e){this.k=e,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(e,n){return E.resolve(this.Xn.get(n))}saveBundleMetadata(e,n){var r;return this.Xn.set(n.id,{id:(r=n).id,version:r.version,createTime:Pe(r.createTime)}),E.resolve()}getNamedQuery(e,n){return E.resolve(this.Zn.get(n))}saveNamedQuery(e,n){return this.Zn.set(n.name,function(r){return{name:r.name,query:em(r.bundledQuery),readTime:Pe(r.readTime)}}(n)),E.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(){this.ts=new le(Oe.es),this.ns=new le(Oe.ss)}isEmpty(){return this.ts.isEmpty()}addReference(e,n){const r=new Oe(e,n);this.ts=this.ts.add(r),this.ns=this.ns.add(r)}rs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.os(new Oe(e,n))}cs(e,n){e.forEach(r=>this.removeReference(r,n))}us(e){const n=new P(new Y([])),r=new Oe(n,e),i=new Oe(n,e+1),s=[];return this.ns.forEachInRange([r,i],o=>{this.os(o),s.push(o.key)}),s}hs(){this.ts.forEach(e=>this.os(e))}os(e){this.ts=this.ts.delete(e),this.ns=this.ns.delete(e)}ls(e){const n=new P(new Y([])),r=new Oe(n,e),i=new Oe(n,e+1);let s=J();return this.ns.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Oe(e,0),r=this.ts.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Oe{constructor(e,n){this.key=e,this.fs=n}static es(e,n){return P.comparator(e.key,n.key)||W(e.fs,n.fs)}static ss(e,n){return W(e.fs,n.fs)||P.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(e,n){this.Jt=e,this.referenceDelegate=n,this.An=[],this.ds=1,this.ws=new le(Oe.es)}checkEmpty(e){return E.resolve(this.An.length===0)}addMutationBatch(e,n,r,i){const s=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const o=new Yp(s,n,r,i);this.An.push(o);for(const a of i)this.ws=this.ws.add(new Oe(a.key,s)),this.Jt.addToCollectionParentIndex(e,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(e,n){return E.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.gs(r),s=i<0?0:i;return E.resolve(this.An.length>s?this.An[s]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.An.length===0?-1:this.ds-1)}getAllMutationBatches(e){return E.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Oe(n,0),i=new Oe(n,Number.POSITIVE_INFINITY),s=[];return this.ws.forEachInRange([r,i],o=>{const a=this._s(o.fs);s.push(a)}),E.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new le(W);return n.forEach(i=>{const s=new Oe(i,0),o=new Oe(i,Number.POSITIVE_INFINITY);this.ws.forEachInRange([s,o],a=>{r=r.add(a.fs)})}),E.resolve(this.ys(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;P.isDocumentKey(s)||(s=s.child(""));const o=new Oe(new P(s),0);let a=new le(W);return this.ws.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(u.fs)),!0)},o),E.resolve(this.ys(a))}ys(e){const n=[];return e.forEach(r=>{const i=this._s(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){F(this.ps(n.batchId,"removed")===0),this.An.shift();let r=this.ws;return E.forEach(n.mutations,i=>{const s=new Oe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ws=r})}ee(e){}containsKey(e,n){const r=new Oe(n,0),i=this.ws.firstAfterOrEqual(r);return E.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.An.length,E.resolve()}ps(e,n){return this.gs(e)}gs(e){return this.An.length===0?0:e-this.An[0].batchId}_s(e){const n=this.gs(e);return n<0||n>=this.An.length?null:this.An[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{constructor(e,n){this.Jt=e,this.Ts=n,this.docs=new Se(P.comparator),this.size=0}addEntry(e,n,r){const i=n.key,s=this.docs.get(i),o=s?s.size:0,a=this.Ts(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:a,readTime:r}),this.size+=a-o,this.Jt.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return E.resolve(r?r.document.mutableCopy():oe.newInvalidDocument(n))}getEntries(e,n){let r=Ft();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():oe.newInvalidDocument(i))}),E.resolve(r)}getDocumentsMatchingQuery(e,n,r){let i=Ft();const s=new P(n.path.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:u,readTime:l}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;l.compareTo(r)<=0||Pa(n,u)&&(i=i.insert(u.key,u.mutableCopy()))}return E.resolve(i)}Es(e,n){return E.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new xP(this)}getSize(e){return E.resolve(this.size)}}class xP extends yE{constructor(e){super(),this.De=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.document.isValidDocument()?n.push(this.De.addEntry(e,i.document,this.getReadTime(r))):this.De.removeEntry(r)}),E.waitFor(n)}getFromCache(e,n){return this.De.getEntry(e,n)}getAllFromCache(e,n){return this.De.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(e){this.persistence=e,this.Is=new bs(n=>Ra(n),fc),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.As=0,this.Rs=new am,this.targetCount=0,this.bs=ai.ie()}forEachTarget(e,n){return this.Is.forEach((r,i)=>n(i)),E.resolve()}getLastRemoteSnapshotVersion(e){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return E.resolve(this.As)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.As&&(this.As=n),E.resolve()}ae(e){this.Is.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new ai(n),this.highestTargetId=n),e.sequenceNumber>this.As&&(this.As=e.sequenceNumber)}addTargetData(e,n){return this.ae(n),this.targetCount+=1,E.resolve()}updateTargetData(e,n){return this.ae(n),E.resolve()}removeTargetData(e,n){return this.Is.delete(n.target),this.Rs.us(n.targetId),this.targetCount-=1,E.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Is.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Is.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),E.waitFor(s).next(()=>i)}getTargetCount(e){return E.resolve(this.targetCount)}getTargetData(e,n){const r=this.Is.get(n)||null;return E.resolve(r)}addMatchingKeys(e,n,r){return this.Rs.rs(n,r),E.resolve()}removeMatchingKeys(e,n,r){this.Rs.cs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),E.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Rs.us(n),E.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Rs.ls(n);return E.resolve(r)}containsKey(e,n){return E.resolve(this.Rs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(e,n){this.Ps={},this.Be=new Ct(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=e(this),this.He=new LP(this),this.Jt=new fP,this.Je=function(r,i){return new OP(r,i)}(this.Jt,r=>this.referenceDelegate.vs(r)),this.k=new iE(n),this.Ye=new DP(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(e){let n=this.Ps[e.toKey()];return n||(n=new PP(this.Jt,this.referenceDelegate),this.Ps[e.toKey()]=n),n}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(e,n,r){k("MemoryPersistence","Starting transaction:",e);const i=new $P(this.Be.next());return this.referenceDelegate.Vs(),r(i).next(s=>this.referenceDelegate.Ss(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ds(e,n){return E.or(Object.values(this.Ps).map(r=>()=>r.containsKey(e,n)))}}class $P extends tE{constructor(e){super(),this.currentSequenceNumber=e}}class um{constructor(e){this.persistence=e,this.Cs=new am,this.Ns=null}static ks(e){return new um(e)}get xs(){if(this.Ns)return this.Ns;throw O()}addReference(e,n,r){return this.Cs.addReference(r,n),this.xs.delete(r.toString()),E.resolve()}removeReference(e,n,r){return this.Cs.removeReference(r,n),this.xs.add(r.toString()),E.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),E.resolve()}removeTarget(e,n){this.Cs.us(n.targetId).forEach(i=>this.xs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.xs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Vs(){this.Ns=new Set}Ss(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.xs,r=>{const i=P.fromPath(r);return this.$s(e,i).next(s=>{s||n.removeEntry(i)})}).next(()=>(this.Ns=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(r=>{r?this.xs.delete(n.toString()):this.xs.add(n.toString())})}vs(e){return 0}$s(e,n){return E.or([()=>E.resolve(this.Cs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ds(e,n)])}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NE(t,e){return`firestore_clients_${t}_${e}`}function RE(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function lm(t,e){return`firestore_targets_${t}_${e}`}class Dc{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Os(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new T(i.error.code,i.error.message))),o?new Dc(e,n,i.state,s):(me("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}Ms(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class za{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Os(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new T(r.error.code,r.error.message))),s?new za(e,r.state,i):(me("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}Ms(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Pc{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Os(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Ec();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=iI(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Pc(e,s):(me("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class cm{constructor(e,n){this.clientId=e,this.onlineState=n}static Os(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new cm(n.clientId,n.onlineState):(me("SharedClientState",`Failed to parse online state: ${e}`),null)}}class hm{constructor(){this.activeTargetIds=Ec()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ls(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ms(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class dm{constructor(e,n,r,i,s){this.window=e,this.Me=n,this.persistenceKey=r,this.Bs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Us=this.qs.bind(this),this.Ks=new Se(W),this.started=!1,this.js=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Qs=NE(this.persistenceKey,this.Bs),this.Ws=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.Ks=this.Ks.insert(this.Bs,new hm),this.Gs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.zs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Hs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Js=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Ys=function(a){return`firestore_bundle_loaded_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.Us)}static Pt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Tn();for(const r of e){if(r===this.Bs)continue;const i=this.getItem(NE(this.persistenceKey,r));if(i){const s=Pc.Os(r,i);s&&(this.Ks=this.Ks.insert(s.clientId,s))}}this.Xs();const n=this.storage.getItem(this.Js);if(n){const r=this.Zs(n);r&&this.ti(r)}for(const r of this.js)this.qs(r);this.js=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ws,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ei(this.Ks)}isActiveQueryTarget(e){let n=!1;return this.Ks.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.ni(e,"pending")}updateMutationState(e,n,r){this.ni(e,n,r),this.si(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(lm(this.persistenceKey,e));if(r){const i=za.Os(e,r);i&&(n=i.state)}}return this.ii.Fs(e),this.Xs(),n}removeLocalQueryTarget(e){this.ii.Ls(e),this.Xs()}isLocalQueryTarget(e){return this.ii.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(lm(this.persistenceKey,e))}updateQueryState(e,n,r){this.ri(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.si(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.oi(e)}notifyBundleLoaded(){this.ci()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Us),this.removeItem(this.Qs),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return k("SharedClientState","READ",e,n),n}setItem(e,n){k("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){k("SharedClientState","REMOVE",e),this.storage.removeItem(e)}qs(e){const n=e;if(n.storageArea===this.storage){if(k("SharedClientState","EVENT",n.key,n.newValue),n.key===this.Qs)return void me("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Me.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Gs.test(n.key)){if(n.newValue==null){const r=this.ai(n.key);return this.ui(r,null)}{const r=this.hi(n.key,n.newValue);if(r)return this.ui(r.clientId,r)}}else if(this.zs.test(n.key)){if(n.newValue!==null){const r=this.li(n.key,n.newValue);if(r)return this.fi(r)}}else if(this.Hs.test(n.key)){if(n.newValue!==null){const r=this.di(n.key,n.newValue);if(r)return this.wi(r)}}else if(n.key===this.Js){if(n.newValue!==null){const r=this.Zs(n.newValue);if(r)return this.ti(r)}}else if(n.key===this.Ws){const r=function(i){let s=Ct.I;if(i!=null)try{const o=JSON.parse(i);F(typeof o=="number"),s=o}catch(o){me("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(n.newValue);r!==Ct.I&&this.sequenceNumberHandler(r)}else if(n.key===this.Ys)return this.syncEngine._i()}}else this.js.push(n)})}}get ii(){return this.Ks.get(this.Bs)}Xs(){this.setItem(this.Qs,this.ii.Ms())}ni(e,n,r){const i=new Dc(this.currentUser,e,n,r),s=RE(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Ms())}si(e){const n=RE(this.persistenceKey,this.currentUser,e);this.removeItem(n)}oi(e){const n={clientId:this.Bs,onlineState:e};this.storage.setItem(this.Js,JSON.stringify(n))}ri(e,n,r){const i=lm(this.persistenceKey,e),s=new za(e,n,r);this.setItem(i,s.Ms())}ci(){this.setItem(this.Ys,"value-not-used")}ai(e){const n=this.Gs.exec(e);return n?n[1]:null}hi(e,n){const r=this.ai(e);return Pc.Os(r,n)}li(e,n){const r=this.zs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Dc.Os(new ze(s),i,n)}di(e,n){const r=this.Hs.exec(e),i=Number(r[1]);return za.Os(i,n)}Zs(e){return cm.Os(e)}async fi(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.mi(e.batchId,e.state,e.error);k("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}wi(e){return this.syncEngine.gi(e.targetId,e.state,e.error)}ui(e,n){const r=n?this.Ks.insert(e,n):this.Ks.remove(e),i=this.ei(this.Ks),s=this.ei(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.yi(o,a).then(()=>{this.Ks=r})}ti(e){this.Ks.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ei(e){let n=Ec();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class bE{constructor(){this.pi=new hm,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.pi.Fs(e),this.Ti[e]||"not-current"}updateQueryState(e,n,r){this.Ti[e]=n}removeLocalQueryTarget(e){this.pi.Ls(e)}isLocalQueryTarget(e){return this.pi.activeTargetIds.has(e)}clearQueryState(e){delete this.Ti[e]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(e){return this.pi.activeTargetIds.has(e)}start(){return this.pi=new hm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{Ei(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.bi(),this.Pi=[],this.vi()}Ei(e){this.Pi.push(e)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){k("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Pi)e(0)}bi(){k("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Pi)e(1)}static Pt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(e){this.Vi=e.Vi,this.Si=e.Si}Di(e){this.Ci=e}Ni(e){this.ki=e}onMessage(e){this.xi=e}close(){this.Si()}send(e){this.Vi(e)}$i(){this.Ci()}Oi(e){this.ki(e)}Mi(e){this.xi(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Fi=n+"://"+e.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(e,n,r,i,s){const o=this.Ui(e,n);k("RestConnection","Sending: ",o,r);const a={};return this.qi(a,i,s),this.Ki(e,o,a,r).then(u=>(k("RestConnection","Received: ",u),u),u=>{throw Sa("RestConnection",`${e} failed with error: `,u,"url: ",o,"request:",r),u})}ji(e,n,r,i,s){return this.Bi(e,n,r,i,s)}qi(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+hs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Ui(e,n){const r=UP[e];return`${this.Fi}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Ki(e,n,r,i){return new Promise((s,o)=>{const a=new aD;a.listenOnce(iD.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Pp.NO_ERROR:const l=a.getResponseJson();k("Connection","XHR received:",JSON.stringify(l)),s(l);break;case Pp.TIMEOUT:k("Connection",'RPC "'+e+'" timed out'),o(new T(v.DEADLINE_EXCEEDED,"Request time out"));break;case Pp.HTTP_ERROR:const c=a.getStatus();if(k("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(v).indexOf(y)>=0?y:v.UNKNOWN}(h.status);o(new T(d,h.message))}else o(new T(v.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new T(v.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{k("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,r,15)})}Qi(e,n,r){const i=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=nD(),o=rD(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new oD({})),this.qi(a.initMessageHeaders,n,r),ow()||dl()||rk()||af()||ik()||of()||(a.httpHeadersOverwriteParam="$httpHeaders");const u=i.join("");k("Connection","Creating WebChannel: "+u,a);const l=s.createWebChannel(u,a);let c=!1,h=!1;const d=new VP({Vi:y=>{h?k("Connection","Not sending because WebChannel is closed:",y):(c||(k("Connection","Opening WebChannel transport."),l.open(),c=!0),k("Connection","WebChannel sending:",y),l.send(y))},Si:()=>l.close()}),g=(y,I,p)=>{y.listen(I,f=>{try{p(f)}catch(m){setTimeout(()=>{throw m},0)}})};return g(l,lc.EventType.OPEN,()=>{h||k("Connection","WebChannel transport opened.")}),g(l,lc.EventType.CLOSE,()=>{h||(h=!0,k("Connection","WebChannel transport closed"),d.Oi())}),g(l,lc.EventType.ERROR,y=>{h||(h=!0,Sa("Connection","WebChannel transport errored:",y),d.Oi(new T(v.UNAVAILABLE,"The operation could not be completed")))}),g(l,lc.EventType.MESSAGE,y=>{var I;if(!h){const p=y.data[0];F(!!p);const f=p,m=f.error||((I=f[0])===null||I===void 0?void 0:I.error);if(m){k("Connection","WebChannel received error:",m);const w=m.status;let _=function(A){const L=ve[A];if(L!==void 0)return DI(L)}(w),$=m.message;_===void 0&&(_=v.INTERNAL,$="Unknown error status: "+w+" with message "+m.message),h=!0,d.Oi(new T(_,$)),l.close()}else k("Connection","WebChannel received:",p),d.Mi(p)}}),g(o,sD.STAT_EVENT,y=>{y.stat===Y_.PROXY?k("Connection","Detected buffering proxy"):y.stat===Y_.NOPROXY&&k("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.$i()},0),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(){return typeof window!="undefined"?window:null}function Oc(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(t){return new GD(t,!0)}class fm{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Me=e,this.timerId=n,this.Wi=r,this.Gi=i,this.zi=s,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(e){this.cancel();const n=Math.floor(this.Hi+this.tr()),r=Math.max(0,Date.now()-this.Yi),i=Math.max(0,n-r);i>0&&k("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Hi} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ji=this.Me.enqueueAfterDelay(this.timerId,i,()=>(this.Yi=Date.now(),e())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){this.Ji!==null&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){this.Ji!==null&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e,n,r,i,s,o,a,u){this.Me=e,this.nr=r,this.sr=i,this.ir=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.rr=0,this.cr=null,this.ar=null,this.stream=null,this.ur=new fm(e,n)}hr(){return this.state===1||this.state===5||this.lr()}lr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&this.cr===null&&(this.cr=this.Me.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(e){this.yr(),this.stream.send(e)}async mr(){if(this.lr())return this.close(0)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}pr(){this.ar&&(this.ar.cancel(),this.ar=null)}async close(e,n){this.yr(),this.pr(),this.ur.cancel(),this.rr++,e!==4?this.ur.reset():n&&n.code===v.RESOURCE_EXHAUSTED?(me(n.toString()),me("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):n&&n.code===v.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Tr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ni(n)}Tr(){}auth(){this.state=1;const e=this.Er(this.rr),n=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.rr===n&&this.Ir(r,i)},r=>{e(()=>{const i=new T(v.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Ar(i)})})}Ir(e,n){const r=this.Er(this.rr);this.stream=this.Rr(e,n),this.stream.Di(()=>{r(()=>(this.state=2,this.ar=this.Me.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(i=>{r(()=>this.Ar(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(e){return k("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Er(e){return n=>{this.Me.enqueueAndForget(()=>this.rr===e?n():(k("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class BP extends OE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.k=s}Rr(e,n){return this.ir.Qi("Listen",e,n)}onMessage(e){this.ur.reset();const n=JD(this.k,e),r=function(i){if(!("targetChange"in i))return q.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?q.min():s.readTime?Pe(s.readTime):q.min()}(e);return this.listener.br(n,r)}Pr(e){const n={};n.database=Va(this.k),n.addTarget=function(i,s){let o;const a=s.target;return o=pc(a)?{documents:HI(i,a)}:{query:KI(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=UI(i,s.resumeToken):s.snapshotVersion.compareTo(q.min())>0&&(o.readTime=Fa(i,s.snapshotVersion.toTimestamp())),o}(this.k,e);const r=ZD(this.k,e);r&&(n.labels=r),this.gr(n)}vr(e){const n={};n.database=Va(this.k),n.removeTarget=e,this.gr(n)}}class qP extends OE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.k=s,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(e,n){return this.ir.Qi("Write",e,n)}onMessage(e){if(F(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Vr){this.ur.reset();const n=XD(e.writeResults,e.commitTime),r=Pe(e.commitTime);return this.listener.Cr(r,n)}return F(!e.writeResults||e.writeResults.length===0),this.Vr=!0,this.listener.Nr()}kr(){const e={};e.database=Va(this.k),this.gr(e)}Dr(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Sc(this.k,r))};this.gr(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.ir=r,this.k=i,this.$r=!1}Or(){if(this.$r)throw new T(v.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(e,n,r){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.ir.Bi(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new T(v.UNKNOWN,i.toString())})}ji(e,n,r){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.ir.ji(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new T(v.UNKNOWN,i.toString())})}terminate(){this.$r=!0}}class WP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Mr=0,this.Fr=null,this.Lr=!0}Br(){this.Mr===0&&(this.Ur("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(e){this.state==="Online"?this.Ur("Unknown"):(this.Mr++,this.Mr>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Ur("Offline")))}set(e){this.jr(),this.Mr=0,e==="Online"&&(this.Lr=!1),this.Ur(e)}Ur(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}qr(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(me(n),this.Lr=!1):k("OnlineStateTracker",n)}jr(){this.Fr!==null&&(this.Fr.cancel(),this.Fr=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=s,this.Hr.Ei(o=>{r.enqueueAndForget(async()=>{fr(this)&&(k("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=N(a);u.Gr.add(4),await Os(u),u.Jr.set("Unknown"),u.Gr.delete(4),await Ha(u)}(this))})}),this.Jr=new WP(r,i)}}async function Ha(t){if(fr(t))for(const e of t.zr)await e(!0)}async function Os(t){for(const e of t.zr)await e(!1)}function xc(t,e){const n=N(t);n.Wr.has(e.targetId)||(n.Wr.set(e.targetId,e),gm(n)?mm(n):Ls(n).lr()&&pm(n,e))}function Ka(t,e){const n=N(t),r=Ls(n);n.Wr.delete(e),r.lr()&&xE(n,e),n.Wr.size===0&&(r.lr()?r._r():fr(n)&&n.Jr.set("Unknown"))}function pm(t,e){t.Yr.X(e.targetId),Ls(t).Pr(e)}function xE(t,e){t.Yr.X(e),Ls(t).vr(e)}function mm(t){t.Yr=new WD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),Ls(t).start(),t.Jr.Br()}function gm(t){return fr(t)&&!Ls(t).hr()&&t.Wr.size>0}function fr(t){return N(t).Gr.size===0}function LE(t){t.Yr=void 0}async function KP(t){t.Wr.forEach((e,n)=>{pm(t,e)})}async function GP(t,e){LE(t),gm(t)?(t.Jr.Kr(e),mm(t)):t.Jr.set("Unknown")}async function QP(t,e,n){if(t.Jr.set("Online"),e instanceof LI&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Wr.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Wr.delete(o),r.Yr.removeTarget(o))}(t,e)}catch(r){k("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Lc(t,r)}else if(e instanceof Tc?t.Yr.ot(e):e instanceof xI?t.Yr.dt(e):t.Yr.ut(e),!n.isEqual(q.min()))try{const r=await SE(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Yr.gt(s);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.Wr.get(u);l&&i.Wr.set(u,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const u=i.Wr.get(a);if(!u)return;i.Wr.set(a,u.withResumeToken(Te.EMPTY_BYTE_STRING,u.snapshotVersion)),xE(i,a);const l=new lr(u.target,a,1,u.sequenceNumber);pm(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){k("RemoteStore","Failed to raise snapshot:",r),await Lc(t,r)}}async function Lc(t,e,n){if(!si(e))throw e;t.Gr.add(1),await Os(t),t.Jr.set("Offline"),n||(n=()=>SE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{k("RemoteStore","Retrying IndexedDB access"),await n(),t.Gr.delete(1),await Ha(t)})}function ME(t,e){return e().catch(n=>Lc(t,n,e))}async function xs(t){const e=N(t),n=pr(e);let r=e.Qr.length>0?e.Qr[e.Qr.length-1].batchId:-1;for(;YP(e);)try{const i=await AP(e.localStore,r);if(i===null){e.Qr.length===0&&n._r();break}r=i.batchId,JP(e,i)}catch(i){await Lc(e,i)}$E(e)&&FE(e)}function YP(t){return fr(t)&&t.Qr.length<10}function JP(t,e){t.Qr.push(e);const n=pr(t);n.lr()&&n.Sr&&n.Dr(e.mutations)}function $E(t){return fr(t)&&!pr(t).hr()&&t.Qr.length>0}function FE(t){pr(t).start()}async function XP(t){pr(t).kr()}async function ZP(t){const e=pr(t);for(const n of t.Qr)e.Dr(n.mutations)}async function eO(t,e,n){const r=t.Qr.shift(),i=Jp.from(r,e,n);await ME(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await xs(t)}async function tO(t,e){e&&pr(t).Sr&&await async function(n,r){if(i=r.code,bI(i)&&i!==v.ABORTED){const s=n.Qr.shift();pr(n).wr(),await ME(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await xs(n)}var i}(t,e),$E(t)&&FE(t)}async function ym(t,e){const n=N(t);e?(n.Gr.delete(2),await Ha(n)):e||(n.Gr.add(2),await Os(n),n.Jr.set("Unknown"))}function Ls(t){return t.Xr||(t.Xr=function(e,n,r){const i=N(e);return i.Or(),new BP(n,i.ir,i.authCredentials,i.appCheckCredentials,i.k,r)}(t.datastore,t.asyncQueue,{Di:KP.bind(null,t),Ni:GP.bind(null,t),br:QP.bind(null,t)}),t.zr.push(async e=>{e?(t.Xr.wr(),gm(t)?mm(t):t.Jr.set("Unknown")):(await t.Xr.stop(),LE(t))})),t.Xr}function pr(t){return t.Zr||(t.Zr=function(e,n,r){const i=N(e);return i.Or(),new qP(n,i.ir,i.authCredentials,i.appCheckCredentials,i.k,r)}(t.datastore,t.asyncQueue,{Di:XP.bind(null,t),Ni:tO.bind(null,t),Nr:ZP.bind(null,t),Cr:eO.bind(null,t)}),t.zr.push(async e=>{e?(t.Zr.wr(),await xs(t)):(await t.Zr.stop(),t.Qr.length>0&&(k("RemoteStore",`Stopping write stream with ${t.Qr.length} pending writes`),t.Qr=[]))})),t.Zr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new be,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new vm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new T(v.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ms(t,e){if(me("AsyncQueue",`${e}: ${t}`),si(t))return new T(v.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this.comparator=e?(n,r)=>e(n,r)||P.comparator(n.key,r.key):(n,r)=>P.comparator(n.key,r.key),this.keyedMap=Hp(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new $s(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof $s)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new $s;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(){this.eo=new Se(P.comparator)}track(e){const n=e.doc.key,r=this.eo.get(n);r?e.type!==0&&r.type===3?this.eo=this.eo.insert(n,e):e.type===3&&r.type!==1?this.eo=this.eo.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.eo=this.eo.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.eo=this.eo.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.eo=this.eo.remove(n):e.type===1&&r.type===2?this.eo=this.eo.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.eo=this.eo.insert(n,{type:2,doc:e.doc}):O():this.eo=this.eo.insert(n,e)}no(){const e=[];return this.eo.inorderTraversal((n,r)=>{e.push(r)}),e}}class Fs{constructor(e,n,r,i,s,o,a,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new Fs(e,n,$s.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Da(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(){this.so=void 0,this.listeners=[]}}class rO{constructor(){this.queries=new bs(e=>mI(e),Da),this.onlineState="Unknown",this.io=new Set}}async function wm(t,e){const n=N(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new nO),i)try{s.so=await n.onListen(r)}catch(o){const a=Ms(o,`Initialization of query '${qp(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.ro(n.onlineState),s.so&&e.oo(s.so)&&Im(n)}async function _m(t,e){const n=N(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function iO(t,e){const n=N(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.oo(i)&&(r=!0);o.so=i}}r&&Im(n)}function sO(t,e,n){const r=N(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Im(t){t.io.forEach(e=>{e.next()})}class Em{constructor(e,n,r){this.query=e,this.co=n,this.ao=!1,this.uo=null,this.onlineState="Unknown",this.options=r||{}}oo(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Fs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.ao?this.ho(e)&&(this.co.next(e),n=!0):this.lo(e,this.onlineState)&&(this.fo(e),n=!0),this.uo=e,n}onError(e){this.co.error(e)}ro(e){this.onlineState=e;let n=!1;return this.uo&&!this.ao&&this.lo(this.uo,e)&&(this.fo(this.uo),n=!0),n}lo(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.wo||!r)&&(!e.docs.isEmpty()||n==="Offline")}ho(e){if(e.docChanges.length>0)return!0;const n=this.uo&&this.uo.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}fo(e){e=Fs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.ao=!0,this.co.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(e,n){this.payload=e,this.byteLength=n}_o(){return"metadata"in this.payload}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e){this.k=e}Hn(e){return un(this.k,e)}Jn(e){return e.metadata.exists?zI(this.k,e.document,!1):oe.newNoDocument(this.Hn(e.metadata.name),this.Yn(e.metadata.readTime))}Yn(e){return Pe(e)}}class aO{constructor(e,n,r){this.mo=e,this.localStore=n,this.k=r,this.queries=[],this.documents=[],this.progress=jE(e)}yo(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;return e.payload.namedQuery?this.queries.push(e.payload.namedQuery):e.payload.documentMetadata?(this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++n):e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++n),n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}po(e){const n=new Map,r=new VE(this.k);for(const i of e)if(i.metadata.queries){const s=r.Hn(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||J()).add(s);n.set(o,a)}}return n}async complete(){const e=await RP(this.localStore,new VE(this.k),this.documents,this.mo.id),n=this.po(this.documents);for(const r of this.queries)await bP(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",new TP(Object.assign({},this.progress),e)}}function jE(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e){this.key=e}}class qE{constructor(e){this.key=e}}class zE{constructor(e,n){this.query=e,this.To=n,this.Eo=null,this.current=!1,this.Io=J(),this.mutatedKeys=J(),this.Ao=gI(e),this.Ro=new $s(this.Ao)}get bo(){return this.To}Po(e,n){const r=n?n.vo:new UE,i=n?n.Ro:this.Ro;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=gc(this.query)&&i.size===this.query.limit?i.last():null,l=yc(this.query)&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),g=Pa(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),I=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let p=!1;d&&g?d.data.isEqual(g.data)?y!==I&&(r.track({type:3,doc:g}),p=!0):this.Vo(d,g)||(r.track({type:2,doc:g}),p=!0,(u&&this.Ao(g,u)>0||l&&this.Ao(g,l)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),p=!0):d&&!g&&(r.track({type:1,doc:d}),p=!0,(u||l)&&(a=!0)),p&&(g?(o=o.add(g),s=I?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),gc(this.query)||yc(this.query))for(;o.size>this.query.limit;){const c=gc(this.query)?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Ro:o,vo:r,Bn:a,mutatedKeys:s}}Vo(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Ro;this.Ro=e.Ro,this.mutatedKeys=e.mutatedKeys;const s=e.vo.no();s.sort((l,c)=>function(h,d){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return g(h)-g(d)}(l.type,c.type)||this.Ao(l.doc,c.doc)),this.So(r);const o=n?this.Do():[],a=this.Io.size===0&&this.current?1:0,u=a!==this.Eo;return this.Eo=a,s.length!==0||u?{snapshot:new Fs(this.query,e.Ro,i,s,e.mutatedKeys,a===0,u,!1),Co:o}:{Co:o}}ro(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new UE,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(e){return!this.To.has(e)&&!!this.Ro.has(e)&&!this.Ro.get(e).hasLocalMutations}So(e){e&&(e.addedDocuments.forEach(n=>this.To=this.To.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.To=this.To.delete(n)),this.current=e.current)}Do(){if(!this.current)return[];const e=this.Io;this.Io=J(),this.Ro.forEach(r=>{this.No(r.key)&&(this.Io=this.Io.add(r.key))});const n=[];return e.forEach(r=>{this.Io.has(r)||n.push(new qE(r))}),this.Io.forEach(r=>{e.has(r)||n.push(new BE(r))}),n}ko(e){this.To=e.zn,this.Io=J();const n=this.Po(e.documents);return this.applyChanges(n,!0)}xo(){return Fs.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,this.Eo===0)}}class uO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class lO{constructor(e){this.key=e,this.$o=!1}}class cO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Oo={},this.Mo=new bs(a=>mI(a),Da),this.Fo=new Map,this.Lo=new Set,this.Bo=new Se(P.comparator),this.Uo=new Map,this.qo=new am,this.Ko={},this.jo=new Map,this.Qo=ai.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return this.Wo===!0}}async function hO(t,e){const n=Nm(t);let r,i;const s=n.Mo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.xo();else{const o=await Ds(n.localStore,$t(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Tm(n,e,r,a==="current"),n.isPrimaryClient&&xc(n.remoteStore,o)}return i}async function Tm(t,e,n,r){t.Go=(c,h,d)=>async function(g,y,I,p){let f=y.view.Po(I);f.Bn&&(f=await bc(g.localStore,y.query,!1).then(({documents:_})=>y.view.Po(_,f)));const m=p&&p.targetChanges.get(y.targetId),w=y.view.applyChanges(f,g.isPrimaryClient,m);return Cm(g,y.targetId,w.Co),w.snapshot}(t,c,h,d);const i=await bc(t.localStore,e,!0),s=new zE(e,i.zn),o=s.Po(i.documents),a=$a.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),u=s.applyChanges(o,t.isPrimaryClient,a);Cm(t,n,u.Co);const l=new uO(e,n,s);return t.Mo.set(e,l),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),u.snapshot}async function dO(t,e){const n=N(t),r=n.Mo.get(e),i=n.Fo.get(r.targetId);if(i.length>1)return n.Fo.set(r.targetId,i.filter(s=>!Da(s,e))),void n.Mo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ps(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Ka(n.remoteStore,r.targetId),Us(n,r.targetId)}).catch(ui)):(Us(n,r.targetId),await Ps(n.localStore,r.targetId,!0))}async function fO(t,e,n){const r=Rm(t);try{const i=await function(s,o){const a=N(s),u=De.now(),l=o.reduce((h,d)=>h.add(d.key),J());let c;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Wn.vn(h,l).next(d=>{c=d;const g=[];for(const y of o){const I=FD(y,c.get(y.key));I!=null&&g.push(new ar(y.key,I,uI(I.value.mapValue),ye.exists(!0)))}return a.An.addMutationBatch(h,u,g,o)})).then(h=>(h.applyToLocalDocumentSet(c),{batchId:h.batchId,changes:c}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let u=s.Ko[s.currentUser.toKey()];u||(u=new Se(W)),u=u.insert(o,a),s.Ko[s.currentUser.toKey()]=u}(r,i.batchId,n),await Dn(r,i.changes),await xs(r.remoteStore)}catch(i){const s=Ms(i,"Failed to persist write");n.reject(s)}}async function WE(t,e){const n=N(t);try{const r=await CP(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Uo.get(s);o&&(F(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.$o=!0:i.modifiedDocuments.size>0?F(o.$o):i.removedDocuments.size>0&&(F(o.$o),o.$o=!1))}),await Dn(n,r,e)}catch(r){await ui(r)}}function HE(t,e,n){const r=N(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Mo.forEach((s,o)=>{const a=o.view.ro(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=N(s);a.onlineState=o;let u=!1;a.queries.forEach((l,c)=>{for(const h of c.listeners)h.ro(o)&&(u=!0)}),u&&Im(a)}(r.eventManager,e),i.length&&r.Oo.br(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function pO(t,e,n){const r=N(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Uo.get(e),s=i&&i.key;if(s){let o=new Se(P.comparator);o=o.insert(s,oe.newNoDocument(s,q.min()));const a=J().add(s),u=new Ma(q.min(),new Map,new le(W),o,a);await WE(r,u),r.Bo=r.Bo.remove(s),r.Uo.delete(e),Am(r)}else await Ps(r.localStore,e,!1).then(()=>Us(r,e,n)).catch(ui)}async function mO(t,e){const n=N(t),r=e.batch.batchId;try{const i=await kP(n.localStore,e);km(n,r,null),Sm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Dn(n,i)}catch(i){await ui(i)}}async function gO(t,e,n){const r=N(t);try{const i=await function(s,o){const a=N(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return a.An.lookupMutationBatch(u,o).next(c=>(F(c!==null),l=c.keys(),a.An.removeMutationBatch(u,c))).next(()=>a.An.performConsistencyCheck(u)).next(()=>a.Wn.vn(u,l))})}(r.localStore,e);km(r,e,n),Sm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Dn(r,i)}catch(i){await ui(i)}}async function yO(t,e){const n=N(t);fr(n.remoteStore)||k("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=N(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.An.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const i=n.jo.get(r)||[];i.push(e),n.jo.set(r,i)}catch(r){const i=Ms(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Sm(t,e){(t.jo.get(e)||[]).forEach(n=>{n.resolve()}),t.jo.delete(e)}function km(t,e,n){const r=N(t);let i=r.Ko[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ko[r.currentUser.toKey()]=i}}function Us(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Fo.get(e))t.Mo.delete(r),n&&t.Oo.zo(r,n);t.Fo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach(r=>{t.qo.containsKey(r)||KE(t,r)})}function KE(t,e){t.Lo.delete(e.path.canonicalString());const n=t.Bo.get(e);n!==null&&(Ka(t.remoteStore,n),t.Bo=t.Bo.remove(e),t.Uo.delete(n),Am(t))}function Cm(t,e,n){for(const r of n)r instanceof BE?(t.qo.addReference(r.key,e),vO(t,r)):r instanceof qE?(k("SyncEngine","Document no longer in limbo: "+r.key),t.qo.removeReference(r.key,e),t.qo.containsKey(r.key)||KE(t,r.key)):O()}function vO(t,e){const n=e.key,r=n.path.canonicalString();t.Bo.get(n)||t.Lo.has(r)||(k("SyncEngine","New document in limbo: "+n),t.Lo.add(r),Am(t))}function Am(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const n=new P(Y.fromString(e)),r=t.Qo.next();t.Uo.set(r,new lO(n)),t.Bo=t.Bo.insert(n,r),xc(t.remoteStore,new lr($t(ys(n.path)),r,2,Ct.I))}}async function Dn(t,e,n){const r=N(t),i=[],s=[],o=[];r.Mo.isEmpty()||(r.Mo.forEach((a,u)=>{o.push(r.Go(u,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l.fromCache?"not-current":"current"),i.push(l);const c=om.$n(u.targetId,l);s.push(c)}}))}),await Promise.all(o),r.Oo.br(i),await async function(a,u){const l=N(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>E.forEach(u,h=>E.forEach(h.kn,d=>l.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>E.forEach(h.xn,d=>l.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!si(c))throw c;k("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const h=c.targetId;if(!c.fromCache){const d=l.qn.get(h),g=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(g);l.qn=l.qn.insert(h,y)}}}(r.localStore,s))}async function wO(t,e){const n=N(t);if(!n.currentUser.isEqual(e)){k("SyncEngine","User change. New user:",e.toKey());const r=await TE(n.localStore,e);n.currentUser=e,function(i,s){i.jo.forEach(o=>{o.forEach(a=>{a.reject(new T(v.CANCELLED,s))})}),i.jo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Dn(n,r.Gn)}}function _O(t,e){const n=N(t),r=n.Uo.get(e);if(r&&r.$o)return J().add(r.key);{let i=J();const s=n.Fo.get(e);if(!s)return i;for(const o of s){const a=n.Mo.get(o);i=i.unionWith(a.view.bo)}return i}}async function IO(t,e){const n=N(t),r=await bc(n.localStore,e.query,!0),i=e.view.ko(r);return n.isPrimaryClient&&Cm(n,e.targetId,i.Co),i}async function EO(t){const e=N(t);return AE(e.localStore).then(n=>Dn(e,n))}async function TO(t,e,n,r){const i=N(t),s=await function(o,a){const u=N(o),l=N(u.An);return u.persistence.runTransaction("Lookup mutation documents","readonly",c=>l.Zt(c,a).next(h=>h?u.Wn.vn(c,h):E.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await xs(i.remoteStore):n==="acknowledged"||n==="rejected"?(km(i,e,r||null),Sm(i,e),function(o,a){N(N(o).An).ee(a)}(i.localStore,e)):O(),await Dn(i,s)):k("SyncEngine","Cannot apply mutation batch with id: "+e)}async function SO(t,e){const n=N(t);if(Nm(n),Rm(n),e===!0&&n.Wo!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await GE(n,r.toArray());n.Wo=!0,await ym(n.remoteStore,!0);for(const s of i)xc(n.remoteStore,s)}else if(e===!1&&n.Wo!==!1){const r=[];let i=Promise.resolve();n.Fo.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Us(n,o),Ps(n.localStore,o,!0))),Ka(n.remoteStore,o)}),await i,await GE(n,r),function(s){const o=N(s);o.Uo.forEach((a,u)=>{Ka(o.remoteStore,u)}),o.qo.hs(),o.Uo=new Map,o.Bo=new Se(P.comparator)}(n),n.Wo=!1,await ym(n.remoteStore,!1)}}async function GE(t,e,n){const r=N(t),i=[],s=[];for(const o of e){let a;const u=r.Fo.get(o);if(u&&u.length!==0){a=await Ds(r.localStore,$t(u[0]));for(const l of u){const c=r.Mo.get(l),h=await IO(r,c);h.snapshot&&s.push(h.snapshot)}}else{const l=await CE(r.localStore,o);a=await Ds(r.localStore,l),await Tm(r,QE(l),o,!1)}i.push(a)}return r.Oo.br(s),i}function QE(t){return fI(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function kO(t){const e=N(t);return N(N(e.localStore).persistence).Tn()}async function CO(t,e,n,r){const i=N(t);if(i.Wo)k("SyncEngine","Ignoring unexpected query state notification.");else if(i.Fo.has(e))switch(n){case"current":case"not-current":{const s=await AE(i.localStore),o=Ma.createSynthesizedRemoteEventForCurrentChange(e,n==="current");await Dn(i,s,o);break}case"rejected":await Ps(i.localStore,e,!0),Us(i,e,r);break;default:O()}}async function AO(t,e,n){const r=Nm(t);if(r.Wo){for(const i of e){if(r.Fo.has(i)){k("SyncEngine","Adding an already active target "+i);continue}const s=await CE(r.localStore,i),o=await Ds(r.localStore,s);await Tm(r,QE(s),o.targetId,!1),xc(r.remoteStore,o)}for(const i of n)r.Fo.has(i)&&await Ps(r.localStore,i,!1).then(()=>{Ka(r.remoteStore,i),Us(r,i)}).catch(ui)}}function Nm(t){const e=N(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=WE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_O.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=pO.bind(null,e),e.Oo.br=iO.bind(null,e.eventManager),e.Oo.zo=sO.bind(null,e.eventManager),e}function Rm(t){const e=N(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gO.bind(null,e),e}function NO(t,e,n){const r=N(t);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const g=N(h),y=Pe(d.createTime);return g.persistence.runTransaction("hasNewerBundle","readonly",I=>g.Ye.getBundleMetadata(I,d.id)).then(I=>!!I&&I.createTime.compareTo(y)>=0)}(i.localStore,a))return await s.close(),void o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a));o._updateProgress(jE(a));const u=new aO(a,i.localStore,s.k);let l=await s.Ho();for(;l;){const h=await u.yo(l);h&&o._updateProgress(h),l=await s.Ho()}const c=await u.complete();await Dn(i,c.In,void 0),await function(h,d){const g=N(h);return g.persistence.runTransaction("Save bundle","readwrite",y=>g.Ye.saveBundleMetadata(y,d))}(i.localStore,a),o._completeWith(c.progress)}catch(a){Sa("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a)}})(r,e,n).then(()=>{r.sharedClientState.notifyBundleLoaded()})}class YE{constructor(){this.synchronizeTabs=!1}async initialize(e){this.k=Wa(e.databaseInfo.databaseId),this.sharedClientState=this.Jo(e),this.persistence=this.Yo(e),await this.persistence.start(),this.gcScheduler=this.Xo(e),this.localStore=this.Zo(e)}Xo(e){return null}Zo(e){return EE(this.persistence,new IE,e.initialUser,this.k)}Yo(e){return new MP(um.ks,this.k)}Jo(e){return new bE}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class JE extends YE{constructor(e,n,r){super(),this.tc=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await NP(this.localStore),await this.tc.initialize(this,e),await Rm(this.tc.syncEngine),await xs(this.tc.remoteStore),await this.persistence.sn(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Zo(e){return EE(this.persistence,new IE,e.initialUser,this.k)}Xo(e){const n=this.persistence.referenceDelegate.garbageCollector;return new yP(n,e.asyncQueue)}Yo(e){const n=sm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?wt.withCacheSize(this.cacheSizeBytes):wt.DEFAULT;return new im(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,PE(),Oc(),this.k,this.sharedClientState,!!this.forceOwnership)}Jo(e){return new bE}}class RO extends JE{constructor(e,n){super(e,n,!1),this.tc=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.tc.syncEngine;this.sharedClientState instanceof dm&&(this.sharedClientState.syncEngine={mi:TO.bind(null,n),gi:CO.bind(null,n),yi:AO.bind(null,n),Tn:kO.bind(null,n),_i:EO.bind(null,n)},await this.sharedClientState.start()),await this.persistence.sn(async r=>{await SO(this.tc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):r||this.gcScheduler.stop())})}Jo(e){const n=PE();if(!dm.Pt(n))throw new T(v.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=sm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new dm(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class bm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>HE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=wO.bind(null,this.syncEngine),await ym(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new rO}createDatastore(e){const n=Wa(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new jP(i));var i;return function(s,o,a,u){return new zP(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>HE(this.syncEngine,a,0),o=DE.Pt()?new DE:new FP,new HP(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,u,l){const c=new cO(r,i,s,o,a,u);return l&&(c.Wo=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=N(e);k("RemoteStore","RemoteStore shutting down."),n.Gr.add(5),await Os(n),n.Hr.shutdown(),n.Jr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ec(this.observer.next,e)}error(e){this.observer.error?this.ec(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}nc(){this.muted=!0}ec(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(e,n){this.sc=e,this.k=n,this.metadata=new be,this.buffer=new Uint8Array,this.ic=new TextDecoder("utf-8"),this.rc().then(r=>{r&&r._o()?this.metadata.resolve(r.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.payload)}`))},r=>this.metadata.reject(r))}close(){return this.sc.cancel()}async getMetadata(){return this.metadata.promise}async Ho(){return await this.getMetadata(),this.rc()}async rc(){const e=await this.oc();if(e===null)return null;const n=this.ic.decode(e),r=Number(n);isNaN(r)&&this.cc(`length string (${n}) is not valid number`);const i=await this.ac(r);return new oO(JSON.parse(i),e.length+r)}uc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async oc(){for(;this.uc()<0&&!await this.hc(););if(this.buffer.length===0)return null;const e=this.uc();e<0&&this.cc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async ac(e){for(;this.buffer.length<e;)await this.hc()&&this.cc("Reached the end of bundle when more is expected.");const n=this.ic.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}cc(e){throw this.sc.cancel(),new Error(`Invalid bundle format: ${e}`)}async hc(){const e=await this.sc.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new T(v.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=N(r),o=Va(s.k)+"/documents",a={documents:i.map(h=>Ua(s.k,h))},u=await s.ji("BatchGetDocuments",o,a),l=new Map;u.forEach(h=>{const d=YD(s.k,h);l.set(d.key.toString(),d)});const c=[];return i.forEach(h=>{const d=l.get(h.toString());F(!!d),c.push(d)}),c}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new La(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=P.fromPath(r);this.mutations.push(new Wp(i,this.precondition(i)))}),await async function(n,r){const i=N(n),s=Va(i.k)+"/documents",o={writes:r.map(a=>Sc(i.k,a))};await i.Bi("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw O();n=q.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new T(v.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?ye.updateTime(n):ye.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(q.min()))throw new T(v.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ye.updateTime(n)}return ye.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(e,n,r,i){this.asyncQueue=e,this.datastore=n,this.updateFunction=r,this.deferred=i,this.lc=5,this.ur=new fm(this.asyncQueue,"transaction_retry")}run(){this.lc-=1,this.fc()}fc(){this.ur.Zi(async()=>{const e=new DO(this.datastore),n=this.dc(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.wc(i)}))}).catch(r=>{this.wc(r)})})}dc(e){try{const n=this.updateFunction(e);return!ei(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}wc(e){this.lc>0&&this._c(e)?(this.lc-=1,this.asyncQueue.enqueueAndForget(()=>(this.fc(),Promise.resolve()))):this.deferred.reject(e)}_c(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||!bI(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ze.UNAUTHENTICATED,this.clientId=Z_.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{k("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,()=>Promise.resolve())}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(v.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new be;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ms(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ZE(t,e){t.asyncQueue.verifyOperationInProgress(),k("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await TE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function eT(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Dm(t);k("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>async function(s,o){const a=N(s);a.asyncQueue.verifyOperationInProgress(),k("RemoteStore","RemoteStore received new credentials");const u=fr(a);a.Gr.add(3),await Os(a),u&&a.Jr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Gr.delete(3),await Ha(a)}(e.remoteStore,i)),t.onlineComponents=e}async function Dm(t){return t.offlineComponents||(k("FirestoreClient","Using default OfflineComponentProvider"),await ZE(t,new YE)),t.offlineComponents}async function $c(t){return t.onlineComponents||(k("FirestoreClient","Using default OnlineComponentProvider"),await eT(t,new bm)),t.onlineComponents}function tT(t){return Dm(t).then(e=>e.persistence)}function Pm(t){return Dm(t).then(e=>e.localStore)}function nT(t){return $c(t).then(e=>e.remoteStore)}function Om(t){return $c(t).then(e=>e.syncEngine)}async function Vs(t){const e=await $c(t),n=e.eventManager;return n.onListen=hO.bind(null,e.syncEngine),n.onUnlisten=dO.bind(null,e.syncEngine),n}function xO(t){return t.asyncQueue.enqueue(async()=>{const e=await tT(t),n=await nT(t);return e.setNetworkEnabled(!0),function(r){const i=N(r);return i.Gr.delete(0),Ha(i)}(n)})}function LO(t){return t.asyncQueue.enqueue(async()=>{const e=await tT(t),n=await nT(t);return e.setNetworkEnabled(!1),async function(r){const i=N(r);i.Gr.add(0),await Os(i),i.Jr.set("Offline")}(n)})}function MO(t,e){const n=new be;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,u){const l=N(a);return l.persistence.runTransaction("read document","readonly",c=>l.Wn.Rn(c,u))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new T(v.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Ms(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await Pm(t),e,n)),n.promise}function rT(t,e,n={}){const r=new be;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new Mc({next:h=>{s.enqueueAndForget(()=>_m(i,c));const d=h.docs.has(o);!d&&h.fromCache?u.reject(new T(v.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?u.reject(new T(v.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new Em(ys(o.path),l,{includeMetadataChanges:!0,wo:!0});return wm(i,c)}(await Vs(t),t.asyncQueue,e,n,r)),r.promise}function $O(t,e){const n=new be;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await bc(r,i,!0),a=new zE(i,o.zn),u=a.Po(o.documents),l=a.applyChanges(u,!1);s.resolve(l.snapshot)}catch(o){const a=Ms(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await Pm(t),e,n)),n.promise}function iT(t,e,n={}){const r=new be;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new Mc({next:h=>{s.enqueueAndForget(()=>_m(i,c)),h.fromCache&&a.source==="server"?u.reject(new T(v.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new Em(o,l,{includeMetadataChanges:!0,wo:!0});return wm(i,c)}(await Vs(t),t.asyncQueue,e,n,r)),r.promise}function FO(t,e){const n=new Mc(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,i){N(r).io.add(i),i.next()}(await Vs(t),n)),()=>{n.nc(),t.asyncQueue.enqueueAndForget(async()=>function(r,i){N(r).io.delete(i)}(await Vs(t),n))}}function UO(t,e){const n=new be;return t.asyncQueue.enqueueAndForget(async()=>{const r=await function(i){return $c(i).then(s=>s.datastore)}(t);new PO(t.asyncQueue,r,e,n).run()}),n.promise}function VO(t,e,n,r){const i=function(s,o){let a;return a=typeof s=="string"?new TextEncoder().encode(s):s,function(u,l){return new bO(u,l)}(function(u,l){if(u instanceof Uint8Array)return XE(u,l);if(u instanceof ArrayBuffer)return XE(new Uint8Array(u),l);if(u instanceof ReadableStream)return u.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,Wa(e));t.asyncQueue.enqueueAndForget(async()=>{NO(await Om(t),i,r)})}function jO(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const i=N(n);return i.persistence.runTransaction("Get named query","readonly",s=>i.Ye.getNamedQuery(s,r))}(await Pm(t),e))}class BO{constructor(e,n,r,i,s,o,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class js{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof js&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(t,e,n){if(!n)throw new T(v.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function oT(t,e,n,r){if(e===!0&&r===!0)throw new T(v.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function aT(t){if(!P.isDocumentKey(t))throw new T(v.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function uT(t){if(P.isDocumentKey(t))throw new T(v.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Fc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":O()}function Q(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new T(v.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fc(t);throw new T(v.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function lT(t,e){if(e<=0)throw new T(v.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new T(v.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new T(v.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,oT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cT({}),this._settingsFrozen=!1,e instanceof js?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new T(v.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new js(i.options.projectId)}(e))}get app(){if(!this._app)throw new T(v.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new T(v.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cT(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new cD;switch(n.type){case"gapi":const r=n.client;return F(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new pD(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new T(v.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=sT.get(e);n&&(k("ComponentProvider","Removing Datastore"),sT.delete(e),n.terminate())}(this),Promise.resolve()}}function qO(t,e,n,r={}){var i;const s=(t=Q(t,Ga))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Sa("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=ze.MOCK_USER;else{o=tk(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new T(v.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ze(u)}t._authCredentials=new hD(new X_(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new cn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new re(this.firestore,e,this._key)}}class nt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new nt(this.firestore,e,this._query)}}class cn extends nt{constructor(e,n,r){super(e,n,ys(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new re(this.firestore,null,new P(e))}withConverter(e){return new cn(this.firestore,e,this._path)}}function hT(t,e,...n){if(t=M(t),xm("collection","path",e),t instanceof Ga){const r=Y.fromString(e,...n);return uT(r),new cn(t,null,r)}{if(!(t instanceof re||t instanceof cn))throw new T(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Y.fromString(e,...n));return uT(r),new cn(t.firestore,null,r)}}function zO(t,e){if(t=Q(t,Ga),xm("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new T(v.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new nt(t,null,function(n){return new Nn(Y.emptyPath(),n)}(e))}function Uc(t,e,...n){if(t=M(t),arguments.length===1&&(e=Z_.A()),xm("doc","path",e),t instanceof Ga){const r=Y.fromString(e,...n);return aT(r),new re(t,null,new P(r))}{if(!(t instanceof re||t instanceof cn))throw new T(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Y.fromString(e,...n));return aT(r),new re(t.firestore,t instanceof cn?t.converter:null,new P(r))}}function dT(t,e){return t=M(t),e=M(e),(t instanceof re||t instanceof cn)&&(e instanceof re||e instanceof cn)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function Lm(t,e){return t=M(t),e=M(e),t instanceof nt&&e instanceof nt&&t.firestore===e.firestore&&Da(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{constructor(){this.mc=Promise.resolve(),this.gc=[],this.yc=!1,this.Tc=[],this.Ec=null,this.Ic=!1,this.Ac=!1,this.Rc=[],this.ur=new fm(this,"async_queue_retry"),this.bc=()=>{const n=Oc();n&&k("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ur.er()};const e=Oc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.bc)}get isShuttingDown(){return this.yc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.vc(e)}enterRestrictedMode(e){if(!this.yc){this.yc=!0,this.Ac=e||!1;const n=Oc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bc)}}enqueue(e){if(this.Pc(),this.yc)return new Promise(()=>{});const n=new be;return this.vc(()=>this.yc&&this.Ac?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.gc.push(e),this.Vc()))}async Vc(){if(this.gc.length!==0){try{await this.gc[0](),this.gc.shift(),this.ur.reset()}catch(e){if(!si(e))throw e;k("AsyncQueue","Operation failed with retryable error: "+e)}this.gc.length>0&&this.ur.Zi(()=>this.Vc())}}vc(e){const n=this.mc.then(()=>(this.Ic=!0,e().catch(r=>{this.Ec=r,this.Ic=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw me("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ic=!1,r))));return this.mc=n,n}enqueueAfterDelay(e,n,r){this.Pc(),this.Rc.indexOf(e)>-1&&(n=0);const i=vm.createAndSchedule(this,e,n,r,s=>this.Sc(s));return this.Tc.push(i),i}Pc(){this.Ec&&O()}verifyOperationInProgress(){}async Dc(){let e;do e=this.mc,await e;while(e!==this.mc)}Cc(e){for(const n of this.Tc)if(n.timerId===e)return!0;return!1}Nc(e){return this.Dc().then(()=>{this.Tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Dc()})}kc(e){this.Rc.push(e)}Sc(e){const n=this.Tc.indexOf(e);this.Tc.splice(n,1)}}function Mm(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class HO{constructor(){this._progressObserver={},this._taskCompletionResolver=new be,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KO=-1;class he extends Ga{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new WO,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||fT(this),this._firestoreClient.terminate()}}function xe(t){return t._firestoreClient||fT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function fT(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new BO(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new OO(t._authCredentials,t._appCheckCredentials,t._queue,r)}function GO(t,e){mT(t=Q(t,he));const n=xe(t),r=t._freezeSettings(),i=new bm;return pT(n,i,new JE(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function QO(t){mT(t=Q(t,he));const e=xe(t),n=t._freezeSettings(),r=new bm;return pT(e,r,new RO(r,n.cacheSizeBytes))}function pT(t,e,n){const r=new be;return t.asyncQueue.enqueue(async()=>{try{await ZE(t,n),await eT(t,e),r.resolve()}catch(i){if(!function(s){return s.name==="FirebaseError"?s.code===v.FAILED_PRECONDITION||s.code===v.UNIMPLEMENTED:typeof DOMException!="undefined"&&s instanceof DOMException?s.code===22||s.code===20||s.code===11:!0}(i))throw i;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+i),r.reject(i)}}).then(()=>r.promise)}function YO(t){if(t._initialized&&!t._terminated)throw new T(v.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new be;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!Ht.Pt())return Promise.resolve();const r=n+"main";await Ht.delete(r)}(sm(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function JO(t){return function(e){const n=new be;return e.asyncQueue.enqueueAndForget(async()=>yO(await Om(e),n)),n.promise}(xe(t=Q(t,he)))}function XO(t){return xO(xe(t=Q(t,he)))}function ZO(t){return LO(xe(t=Q(t,he)))}function ex(t,e){const n=xe(t=Q(t,he)),r=new HO;return VO(n,t._databaseId,e,r),r}function tx(t,e){return jO(xe(t=Q(t,he)),e).then(n=>n?new nt(t,null,n.query):null)}function mT(t){if(t._initialized||t._terminated)throw new T(v.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new T(v.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hn(Te.fromBase64String(e))}catch(n){throw new T(v.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new hn(Te.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new T(v.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new T(v.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return W(this._lat,e._lat)||W(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nx=/^__.*__$/;class rx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ar(e,this.data,this.fieldMask,n,this.fieldTransforms):new xa(e,this.data,n,this.fieldTransforms)}}class gT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ar(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function yT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class jc{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.k=r,this.ignoreUndefinedProperties=i,s===void 0&&this.xc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get $c(){return this.settings.$c}Oc(e){return new jc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Oc({path:r,Fc:!1});return i.Lc(e),i}Bc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Oc({path:r,Fc:!1});return i.xc(),i}Uc(e){return this.Oc({path:void 0,Fc:!0})}qc(e){return qc(e,this.settings.methodName,this.settings.Kc||!1,this.path,this.settings.jc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lc(this.path.get(e))}Lc(e){if(e.length===0)throw this.qc("Document fields must not be empty");if(yT(this.$c)&&nx.test(e))throw this.qc('Document fields cannot begin and end with "__"')}}class ix{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.k=r||Wa(e)}Qc(e,n,r,i=!1){return new jc({$c:e,methodName:n,jc:r,path:We.emptyPath(),Fc:!1,Kc:i},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function ci(t){const e=t._freezeSettings(),n=Wa(t._databaseId);return new ix(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Bc(t,e,n,r,i,s={}){const o=t.Qc(s.merge||s.mergeFields?2:0,e,n,i);Vm("Data must be an object, but it was:",o,r);const a=_T(r,o);let u,l;if(s.merge)u=new fs(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=jm(e,h,n);if(!o.contains(d))throw new T(v.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);ET(c,d)||c.push(d)}u=new fs(c),l=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,l=o.fieldTransforms;return new rx(new et(a),u,l)}class Qa extends li{_toFieldTransform(e){if(e.$c!==2)throw e.$c===1?e.qc(`${this._methodName}() can only appear at the top level of your update data`):e.qc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Qa}}function vT(t,e,n){return new jc({$c:3,jc:e.settings.jc,methodName:t._methodName,Fc:n},e.databaseId,e.k,e.ignoreUndefinedProperties)}class $m extends li{_toFieldTransform(e){return new Oa(e.path,new ws)}isEqual(e){return e instanceof $m}}class sx extends li{constructor(e,n){super(e),this.Wc=n}_toFieldTransform(e){const n=vT(this,e,!0),r=this.Wc.map(s=>hi(s,n)),i=new ni(r);return new Oa(e.path,i)}isEqual(e){return this===e}}class ox extends li{constructor(e,n){super(e),this.Wc=n}_toFieldTransform(e){const n=vT(this,e,!0),r=this.Wc.map(s=>hi(s,n)),i=new ri(r);return new Oa(e.path,i)}isEqual(e){return this===e}}class ax extends li{constructor(e,n){super(e),this.Gc=n}_toFieldTransform(e){const n=new _s(e.k,wI(e.k,this.Gc));return new Oa(e.path,n)}isEqual(e){return this===e}}function Fm(t,e,n,r){const i=t.Qc(1,e,n);Vm("Data must be an object, but it was:",i,r);const s=[],o=et.empty();Zr(r,(u,l)=>{const c=Bm(e,u,n);l=M(l);const h=i.Bc(c);if(l instanceof Qa)s.push(c);else{const d=hi(l,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new fs(s);return new gT(o,a,i.fieldTransforms)}function Um(t,e,n,r,i,s){const o=t.Qc(1,e,n),a=[jm(e,r,n)],u=[i];if(s.length%2!=0)throw new T(v.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(jm(e,s[d])),u.push(s[d+1]);const l=[],c=et.empty();for(let d=a.length-1;d>=0;--d)if(!ET(l,a[d])){const g=a[d];let y=u[d];y=M(y);const I=o.Bc(g);if(y instanceof Qa)l.push(g);else{const p=hi(y,I);p!=null&&(l.push(g),c.set(g,p))}}const h=new fs(l);return new gT(c,h,o.fieldTransforms)}function wT(t,e,n,r=!1){return hi(n,t.Qc(r?4:3,e))}function hi(t,e){if(IT(t=M(t)))return Vm("Unsupported field value:",e,t),_T(t,e);if(t instanceof li)return function(n,r){if(!yT(r.$c))throw r.qc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.qc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Fc&&e.$c!==4)throw e.qc("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=hi(o,r.Uc(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=M(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return wI(r.k,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=De.fromDate(n);return{timestampValue:Fa(r.k,i)}}if(n instanceof De){const i=new De(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Fa(r.k,i)}}if(n instanceof Vc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof hn)return{bytesValue:UI(r.k,n._byteString)};if(n instanceof re){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.qc(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Kp(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.qc(`Unsupported field value: ${Fc(n)}`)}(t,e)}function _T(t,e){const n={};return nI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zr(t,(r,i)=>{const s=hi(i,e.Mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function IT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof Vc||t instanceof hn||t instanceof re||t instanceof li)}function Vm(t,e,n){if(!IT(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Fc(n);throw r==="an object"?e.qc(t+" a custom object"):e.qc(t+" "+r)}}function jm(t,e,n){if((e=M(e))instanceof mr)return e._internalPath;if(typeof e=="string")return Bm(t,e);throw qc("Field path arguments must be of type string or ",t,!1,void 0,n)}const ux=new RegExp("[~\\*/\\[\\]]");function Bm(t,e,n){if(e.search(ux)>=0)throw qc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new mr(...e.split("."))._internalPath}catch{throw qc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function qc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new T(v.INVALID_ARGUMENT,a+t+u)}function ET(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new re(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(zc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class lx extends Ya{data(){return super.data()}}function zc(t,e){return typeof e=="string"?Bm(t,e):e instanceof mr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Pn extends Ya{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ja(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(zc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ja extends Pn{data(e={}){return super.data(e)}}class gr{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new di(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ja(this._firestore,this._userDataWriter,r.key,r,new di(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new T(v.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Ja(r._firestore,r._userDataWriter,o.doc.key,o.doc,new di(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ja(r._firestore,r._userDataWriter,o.doc.key,o.doc,new di(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,l=-1;return o.type!==0&&(u=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:cx(o.type),doc:a,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function cx(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}function TT(t,e){return t instanceof Pn&&e instanceof Pn?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof gr&&e instanceof gr&&t._firestore===e._firestore&&Lm(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(t){if(yc(t)&&t.explicitOrderBy.length===0)throw new T(v.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xa{}function yr(t,...e){for(const n of e)t=n._apply(t);return t}class hx extends Xa{constructor(e,n,r){super(),this.zc=e,this.Hc=n,this.Jc=r,this.type="where"}_apply(e){const n=ci(e.firestore),r=function(i,s,o,a,u,l,c){let h;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new T(v.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){bT(c,l);const g=[];for(const y of c)g.push(RT(a,i,y));h={arrayValue:{values:g}}}else h=RT(a,i,c)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||bT(c,l),h=wT(o,s,c,l==="in"||l==="not-in");const d=lt.create(u,l,h);return function(g,y){if(y.V()){const p=jp(g);if(p!==null&&!p.isEqual(y.field))throw new T(v.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${p.toString()}' and '${y.field.toString()}'`);const f=Vp(g);f!==null&&DT(g,y.field,f)}const I=function(p,f){for(const m of p.filters)if(f.indexOf(m.op)>=0)return m.op;return null}(g,function(p){switch(p){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(y.op));if(I!==null)throw I===y.op?new T(v.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${y.op.toString()}' filter.`):new T(v.INVALID_ARGUMENT,`Invalid query. You cannot use '${y.op.toString()}' filters with '${I.toString()}' filters.`)}(i,d),d}(e._query,"where",n,e.firestore._databaseId,this.zc,this.Hc,this.Jc);return new nt(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new Nn(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function dx(t,e,n){const r=e,i=zc("where",t);return new hx(i,r,n)}class fx extends Xa{constructor(e,n){super(),this.zc=e,this.Yc=n,this.type="orderBy"}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new T(v.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new T(v.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new gs(i,s);return function(a,u){if(Vp(a)===null){const l=jp(a);l!==null&&DT(a,l,u.field)}}(r,o),o}(e._query,this.zc,this.Yc);return new nt(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Nn(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function px(t,e="asc"){const n=e,r=zc("orderBy",t);return new fx(r,n)}class kT extends Xa{constructor(e,n,r){super(),this.type=e,this.Xc=n,this.Zc=r}_apply(e){return new nt(e.firestore,e.converter,pI(e._query,this.Xc,this.Zc))}}function mx(t){return lT("limit",t),new kT("limit",t,"F")}function gx(t){return lT("limitToLast",t),new kT("limitToLast",t,"L")}class CT extends Xa{constructor(e,n,r){super(),this.type=e,this.ta=n,this.ea=r}_apply(e){const n=NT(e,this.type,this.ta,this.ea);return new nt(e.firestore,e.converter,function(r,i){return new Nn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function yx(...t){return new CT("startAt",t,!0)}function vx(...t){return new CT("startAfter",t,!1)}class AT extends Xa{constructor(e,n,r){super(),this.type=e,this.ta=n,this.ea=r}_apply(e){const n=NT(e,this.type,this.ta,this.ea);return new nt(e.firestore,e.converter,function(r,i){return new Nn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function wx(...t){return new AT("endBefore",t,!0)}function _x(...t){return new AT("endAt",t,!1)}function NT(t,e,n,r){if(n[0]=M(n[0]),n[0]instanceof Ya)return function(i,s,o,a,u){if(!a)throw new T(v.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const c of vs(i))if(c.field.isKeyField())l.push(hc(s,a.key));else{const h=a.data.field(c.field);if(Lp(h))throw new T(v.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+c.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=c.field.canonicalString();throw new T(v.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new ba(l,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=ci(t.firestore);return function(s,o,a,u,l,c){const h=s.explicitOrderBy;if(l.length>h.length)throw new T(v.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let g=0;g<l.length;g++){const y=l[g];if(h[g].field.isKeyField()){if(typeof y!="string")throw new T(v.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof y}`);if(!Bp(s)&&y.indexOf("/")!==-1)throw new T(v.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${y}' contains a slash.`);const I=s.path.child(Y.fromString(y));if(!P.isDocumentKey(I))throw new T(v.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${I}' is not because it contains an odd number of segments.`);const p=new P(I);d.push(hc(o,p))}else{const I=wT(a,u,y);d.push(I)}}return new ba(d,c)}(t._query,t.firestore._databaseId,i,e,n,r)}}function RT(t,e,n){if(typeof(n=M(n))=="string"){if(n==="")throw new T(v.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Bp(e)&&n.indexOf("/")!==-1)throw new T(v.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Y.fromString(n));if(!P.isDocumentKey(r))throw new T(v.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return hc(t,new P(r))}if(n instanceof re)return hc(t,n._key);throw new T(v.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fc(n)}.`)}function bT(t,e){if(!Array.isArray(t)||t.length===0)throw new T(v.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new T(v.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function DT(t,e,n){if(!n.isEqual(e))throw new T(v.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{convertValue(e,n="none"){switch(ti(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ps(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw O()}}convertObject(e,n){const r={};return Zr(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Vc(ge(e.latitude),ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=rI(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ca(e));default:return null}}convertTimestamp(e){const n=or(e);return new De(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Y.fromString(e);F(XI(r));const i=new js(r.get(1),r.get(3)),s=new P(r.popFirst(5));return i.isEqual(n)||me(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Ix extends qm{constructor(e){super(),this.firestore=e}convertBytes(e){return new hn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new re(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=ci(e)}set(e,n,r){this._verifyNotCommitted();const i=vr(e,this._firestore),s=Wc(i.converter,n,r),o=Bc(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,ye.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=vr(e,this._firestore);let o;return o=typeof(n=M(n))=="string"||n instanceof mr?Um(this._dataReader,"WriteBatch.update",s._key,n,r,i):Fm(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,ye.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=vr(e,this._firestore);return this._mutations=this._mutations.concat(new La(n._key,ye.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new T(v.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function vr(t,e){if((t=M(t)).firestore!==e)throw new T(v.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tx(t){t=Q(t,re);const e=Q(t.firestore,he);return rT(xe(e),t._key).then(n=>zm(e,t,n))}class fi extends qm{constructor(e){super(),this.firestore=e}convertBytes(e){return new hn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new re(this.firestore,null,n)}}function Sx(t){t=Q(t,re);const e=Q(t.firestore,he),n=xe(e),r=new fi(e);return MO(n,t._key).then(i=>new Pn(e,r,t._key,i,new di(i!==null&&i.hasLocalMutations,!0),t.converter))}function kx(t){t=Q(t,re);const e=Q(t.firestore,he);return rT(xe(e),t._key,{source:"server"}).then(n=>zm(e,t,n))}function Cx(t){t=Q(t,nt);const e=Q(t.firestore,he),n=xe(e),r=new fi(e);return ST(t._query),iT(n,t._query).then(i=>new gr(e,r,t,i))}function Ax(t){t=Q(t,nt);const e=Q(t.firestore,he),n=xe(e),r=new fi(e);return $O(n,t._query).then(i=>new gr(e,r,t,i))}function Nx(t){t=Q(t,nt);const e=Q(t.firestore,he),n=xe(e),r=new fi(e);return iT(n,t._query,{source:"server"}).then(i=>new gr(e,r,t,i))}function PT(t,e,n){t=Q(t,re);const r=Q(t.firestore,he),i=Wc(t.converter,e,n);return Za(r,[Bc(ci(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,ye.none())])}function OT(t,e,n,...r){t=Q(t,re);const i=Q(t.firestore,he),s=ci(i);let o;return o=typeof(e=M(e))=="string"||e instanceof mr?Um(s,"updateDoc",t._key,e,n,r):Fm(s,"updateDoc",t._key,e),Za(i,[o.toMutation(t._key,ye.exists(!0))])}function Rx(t){return Za(Q(t.firestore,he),[new La(t._key,ye.none())])}function bx(t,e){const n=Q(t.firestore,he),r=Uc(t),i=Wc(t.converter,e);return Za(n,[Bc(ci(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,ye.exists(!1))]).then(()=>r)}function Hc(t,...e){var n,r,i;t=M(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Mm(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Mm(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let u,l,c;if(t instanceof re)l=Q(t.firestore,he),c=ys(t._key.path),u={next:h=>{e[o]&&e[o](zm(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Q(t,nt);l=Q(h.firestore,he),c=h._query;const d=new fi(l);u={next:g=>{e[o]&&e[o](new gr(l,d,h,g))},error:e[o+1],complete:e[o+2]},ST(t._query)}return function(h,d,g,y){const I=new Mc(y),p=new Em(d,I,g);return h.asyncQueue.enqueueAndForget(async()=>wm(await Vs(h),p)),()=>{I.nc(),h.asyncQueue.enqueueAndForget(async()=>_m(await Vs(h),p))}}(xe(l),c,a,u)}function Dx(t,e){return FO(xe(t=Q(t,he)),Mm(e)?e:{next:e})}function Za(t,e){return function(n,r){const i=new be;return n.asyncQueue.enqueueAndForget(async()=>fO(await Om(n),r,i)),i.promise}(xe(t),e)}function zm(t,e,n){const r=n.docs.get(e._key),i=new fi(t);return new Pn(t,i,e._key,r,new di(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=ci(e)}get(e){const n=vr(e,this._firestore),r=new Ix(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return O();const s=i[0];if(s.isFoundDocument())return new Ya(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new Ya(this._firestore,r,n._key,null,n.converter);throw O()})}set(e,n,r){const i=vr(e,this._firestore),s=Wc(i.converter,n,r),o=Bc(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=vr(e,this._firestore);let o;return o=typeof(n=M(n))=="string"||n instanceof mr?Um(this._dataReader,"Transaction.update",s._key,n,r,i):Fm(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=vr(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=vr(e,this._firestore),r=new fi(this._firestore);return super.get(e).then(i=>new Pn(this._firestore,r,n._key,i._document,new di(!1,!1),n.converter))}}function Ox(t,e){return UO(xe(t=Q(t,he)),n=>e(new Px(t,n)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xx(){return new Qa("deleteField")}function Lx(){return new $m("serverTimestamp")}function Mx(...t){return new sx("arrayUnion",t)}function $x(...t){return new ox("arrayRemove",t)}function Fx(t){return new ax("increment",t)}(function(t,e=!0){(function(n){hs=n})(Vr),Ur(new wn("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),s=new he(i,new dD(n.getProvider("auth-internal")),new gD(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),Zt(J_,"3.4.3",t),Zt(J_,"3.4.3","esm2017")})();const Ux="@firebase/firestore-compat",Vx="0.1.12";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new T("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xT(){if(typeof Uint8Array=="undefined")throw new T("unimplemented","Uint8Arrays are not available in this environment.")}function LT(){if(!wD())throw new T("unimplemented","Blobs are unavailable in Firestore in this environment.")}class eu{constructor(e){this._delegate=e}static fromBase64String(e){return LT(),new eu(hn.fromBase64String(e))}static fromUint8Array(e){return xT(),new eu(hn.fromUint8Array(e))}toBase64(){return LT(),this._delegate.toBase64()}toUint8Array(){return xT(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(t){return jx(t,["next","error","complete"])}function jx(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{enableIndexedDbPersistence(e,n){return GO(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return QO(e._delegate)}clearIndexedDbPersistence(e){return YO(e._delegate)}}class MT{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof js||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Sa("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){qO(this._delegate,e,n,r)}enableNetwork(){return XO(this._delegate)}disableNetwork(){return ZO(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,oT("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return JO(this._delegate)}onSnapshotsInSync(e){return Dx(this._delegate,e)}get app(){if(!this._appCompat)throw new T("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Bs(this,hT(this._delegate,e))}catch(n){throw ct(n,"collection()","Firestore.collection()")}}doc(e){try{return new Ut(this,Uc(this._delegate,e))}catch(n){throw ct(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new ht(this,zO(this._delegate,e))}catch(n){throw ct(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Ox(this._delegate,n=>e(new $T(this,n)))}batch(){return xe(this._delegate),new FT(new Ex(this._delegate,e=>Za(this._delegate,e)))}loadBundle(e){return ex(this._delegate,e)}namedQuery(e){return tx(this._delegate,e).then(n=>n?new ht(this,n):null)}}class Kc extends qm{constructor(e){super();this.firestore=e}convertBytes(e){return new eu(new hn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return Ut.forKey(n,this.firestore,null)}}function qx(t){uD(t)}class $T{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new Kc(e)}get(e){const n=mi(e);return this._delegate.get(n).then(r=>new tu(this._firestore,new Pn(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=mi(e);return r?(Wm("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=mi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=mi(e);return this._delegate.delete(n),this}}class FT{constructor(e){this._delegate=e}set(e,n,r){const i=mi(e);return r?(Wm("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=mi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=mi(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class pi{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new Ja(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new nu(this._firestore,r),n!=null?n:{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=pi.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new pi(e,new Kc(e),n),i.set(n,s)),s}}pi.INSTANCES=new WeakMap;class Ut{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Kc(e)}static forPath(e,n,r){if(e.length%2!=0)throw new T("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Ut(n,new re(n._delegate,r,new P(e)))}static forKey(e,n,r){return new Ut(n,new re(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Bs(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Bs(this.firestore,hT(this._delegate,e))}catch(n){throw ct(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=M(e),e instanceof re?dT(this._delegate,e):!1}set(e,n){n=Wm("DocumentReference.set",n);try{return n?PT(this._delegate,e,n):PT(this._delegate,e)}catch(r){throw ct(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?OT(this._delegate,e):OT(this._delegate,e,n,...r)}catch(i){throw ct(i,"updateDoc()","DocumentReference.update()")}}delete(){return Rx(this._delegate)}onSnapshot(...e){const n=UT(e),r=VT(e,i=>new tu(this.firestore,new Pn(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return Hc(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=Sx(this._delegate):(e==null?void 0:e.source)==="server"?n=kx(this._delegate):n=Tx(this._delegate),n.then(r=>new tu(this.firestore,new Pn(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Ut(this.firestore,e?this._delegate.withConverter(pi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ct(t,e,n){return t.message=t.message.replace(e,n),t}function UT(t){for(const e of t)if(typeof e=="object"&&!Hm(e))return e;return{}}function VT(t,e){var n,r;let i;return Hm(t[0])?i=t[0]:Hm(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class tu{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new Ut(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return TT(this._delegate,e._delegate)}}class nu extends tu{data(e){const n=this._delegate.data(e);return lD(n!==void 0),n}}class ht{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Kc(e)}where(e,n,r){try{return new ht(this.firestore,yr(this._delegate,dx(e,n,r)))}catch(i){throw ct(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new ht(this.firestore,yr(this._delegate,px(e,n)))}catch(r){throw ct(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new ht(this.firestore,yr(this._delegate,mx(e)))}catch(n){throw ct(n,"limit()","Query.limit()")}}limitToLast(e){try{return new ht(this.firestore,yr(this._delegate,gx(e)))}catch(n){throw ct(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new ht(this.firestore,yr(this._delegate,yx(...e)))}catch(n){throw ct(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new ht(this.firestore,yr(this._delegate,vx(...e)))}catch(n){throw ct(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new ht(this.firestore,yr(this._delegate,wx(...e)))}catch(n){throw ct(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new ht(this.firestore,yr(this._delegate,_x(...e)))}catch(n){throw ct(n,"endAt()","Query.endAt()")}}isEqual(e){return Lm(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=Ax(this._delegate):(e==null?void 0:e.source)==="server"?n=Nx(this._delegate):n=Cx(this._delegate),n.then(r=>new Km(this.firestore,new gr(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=UT(e),r=VT(e,i=>new Km(this.firestore,new gr(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return Hc(this._delegate,n,r)}withConverter(e){return new ht(this.firestore,e?this._delegate.withConverter(pi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class zx{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new nu(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Km{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new ht(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new nu(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new zx(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new nu(this._firestore,r))})}isEqual(e){return TT(this._delegate,e._delegate)}}class Bs extends ht{constructor(e,n){super(e,n);this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Ut(this.firestore,e):null}doc(e){try{return e===void 0?new Ut(this.firestore,Uc(this._delegate)):new Ut(this.firestore,Uc(this._delegate,e))}catch(n){throw ct(n,"doc()","CollectionReference.doc()")}}add(e){return bx(this._delegate,e).then(n=>new Ut(this.firestore,n))}isEqual(e){return dT(this._delegate,e._delegate)}withConverter(e){return new Bs(this.firestore,e?this._delegate.withConverter(pi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function mi(t){return Q(t,re)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(...e){this._delegate=new mr(...e)}static documentId(){return new Gm(We.keyField().canonicalString())}isEqual(e){return e=M(e),e instanceof mr?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){this._delegate=e}static serverTimestamp(){const e=Lx();return e._methodName="FieldValue.serverTimestamp",new gi(e)}static delete(){const e=xx();return e._methodName="FieldValue.delete",new gi(e)}static arrayUnion(...e){const n=Mx(...e);return n._methodName="FieldValue.arrayUnion",new gi(n)}static arrayRemove(...e){const n=$x(...e);return n._methodName="FieldValue.arrayRemove",new gi(n)}static increment(e){const n=Fx(e);return n._methodName="FieldValue.increment",new gi(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx={Firestore:MT,GeoPoint:Vc,Timestamp:De,Blob:eu,Transaction:$T,WriteBatch:FT,DocumentReference:Ut,DocumentSnapshot:tu,Query:ht,QueryDocumentSnapshot:nu,QuerySnapshot:Km,CollectionReference:Bs,FieldPath:Gm,FieldValue:gi,setLogLevel:qx,CACHE_SIZE_UNLIMITED:KO};function Hx(t,e){t.INTERNAL.registerComponent(new wn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},Wx)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kx(t){Hx(t,(e,n)=>new MT(e,n,new Bx)),t.registerVersion(Ux,Vx)}Kx(Ho);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Gx(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{l(r.next(c))}catch(h){o(h)}}function u(c){try{l(r.throw(c))}catch(h){o(h)}}function l(c){c.done?s(c.value):i(c.value).then(a,u)}l((r=r.apply(t,e||[])).next())})}function Qx(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(c){return u([l,c])}}function u(l){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=l[0]&2?i.return:l[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,l[1])).done)return s;switch(i=0,s&&(l=[l[0]&2,s.value]),l[0]){case 0:case 1:s=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,i=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){n.label=l[1];break}if(l[0]===6&&n.label<s[1]){n.label=s[1],s=l;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(l);break}s[2]&&n.ops.pop(),n.trys.pop();continue}l=e.call(t,n)}catch(c){l=[6,c],i=0}finally{r=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var qs=function(){return qs=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},qs.apply(this,arguments)},jT=function(t){return{loading:t==null,value:t}},Yx=function(){return function(t,e){switch(e.type){case"error":return qs(qs({},t),{error:e.error,loading:!1,value:void 0});case"reset":return jT(e.defaultValue);case"value":return qs(qs({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},Jx=function(t){var e=t?t():void 0,n=rt.exports.useReducer(Yx(),jT(e)),r=n[0],i=n[1],s=function(){var u=t?t():void 0;i({type:"reset",defaultValue:u})},o=function(u){i({type:"error",error:u})},a=function(u){i({type:"value",value:u})};return rt.exports.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},hL=function(t,e){var n=Jx(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,a=n.value;rt.exports.useEffect(function(){var l=DA(t,function(c){return Gx(void 0,void 0,void 0,function(){var h;return Qx(this,function(d){switch(d.label){case 0:if(!(e==null?void 0:e.onUserChanged))return[3,4];d.label=1;case 1:return d.trys.push([1,3,,4]),[4,e.onUserChanged(c)];case 2:return d.sent(),[3,4];case 3:return h=d.sent(),s(h),[3,4];case 4:return o(c),[2]}})})},s);return function(){l()}},[t,e]);var u=[a,i,r];return rt.exports.useMemo(function(){return u},u)};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var zs=function(){return zs=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},zs.apply(this,arguments)},BT=function(t){return{loading:t==null,value:t}},Xx=function(){return function(t,e){switch(e.type){case"error":return zs(zs({},t),{error:e.error,loading:!1,value:void 0});case"reset":return BT(e.defaultValue);case"value":return zs(zs({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},Zx=function(t){var e=t?t():void 0,n=rt.exports.useReducer(Xx(),BT(e)),r=n[0],i=n[1],s=function(){var u=t?t():void 0;i({type:"reset",defaultValue:u})},o=function(u){i({type:"error",error:u})},a=function(u){i({type:"value",value:u})};return rt.exports.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},eL=function(t,e,n){var r=rt.exports.useRef(t);return rt.exports.useEffect(function(){e(t,r.current)||(r.current=t,n&&n())}),r},tL=function(t,e){var n=!t&&!e,r=!!t&&!!e&&Lm(t,e);return n||r},nL=function(t,e){return eL(t,tL,e)},rL=function(t,e){var n=Zx(),r=n.error,i=n.loading,s=n.reset,o=n.setError,a=n.setValue,u=n.value,l=nL(t,s);rt.exports.useEffect(function(){if(!l.current){a(void 0);return}var h=(e==null?void 0:e.snapshotListenOptions)?Hc(l.current,e.snapshotListenOptions,a,o):Hc(l.current,a,o);return function(){h()}},[l.current,e]);var c=[u,i,r];return rt.exports.useMemo(function(){return c},c)},dL=function(t,e){var n=e==null?void 0:e.snapshotOptions,r=rL(t,e),i=r[0],s=r[1],o=r[2],a=iL(i,n),u=[a,s,o,i];return rt.exports.useMemo(function(){return u},u)},iL=function(t,e){return rt.exports.useMemo(function(){return t==null?void 0:t.docs.map(function(n){return n.data(e)})},[t,e])},sL={exports:{}},ru={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oL=rt.exports,qT=60103;ru.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var zT=Symbol.for;qT=zT("react.element"),ru.Fragment=zT("react.fragment")}var aL=oL.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,uL=Object.prototype.hasOwnProperty,lL={key:!0,ref:!0,__self:!0,__source:!0};function WT(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)uL.call(e,r)&&!lL.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:qT,type:t,key:s,ref:o,props:i,_owner:aL.current}}ru.jsx=WT;ru.jsxs=WT;sL.exports=ru;export{cL as R,dL as a,Ho as f,sL as j,rt as r,hL as u};
