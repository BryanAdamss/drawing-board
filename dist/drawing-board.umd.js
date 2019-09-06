(function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,e.DrawingBoard=t())})(this,function(){'use strict';var v=Math.max,y=Math.min,_=Math.floor,k=Math.ceil;function e(e,t){return t={exports:{}},e(t,t.exports),t.exports}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n,o=0;o<t.length;o++)n=t[o],n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function o(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function i(e){for(var t,n=1;n<arguments.length;n++)t=null==arguments[n]?{}:arguments[n],n%2?r(t,!0).forEach(function(n){a(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))});return e}function l(e,t){return s(e)||u(e,t)||h()}function c(e){return d(e)||g(e)||p()}function d(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function s(e){if(Array.isArray(e))return e}function g(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function u(e,t){var n=[],o=!0,a=!1,r=void 0;try{for(var i,l=e[Symbol.iterator]();!(o=(i=l.next()).done)&&(n.push(i.value),!(t&&n.length===t));o=!0);}catch(e){a=!0,r=e}finally{try{o||null==l["return"]||l["return"]()}finally{if(a)throw r}}return n}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function h(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}/**
	 * @author GuangHui
	 * @description 浏览器判断
	 */ /**
	 * blob转File
	 *
	 * @export File
	 * @param {Blob} blob blob
	 * @param {String} name filename
	 * @returns
	 */function m(e,t){return ta?(e.lastModifiedDate=new Date,e.name=t,e):new File([e],t,{type:e.type})}var E,b,S,P="undefined"==typeof globalThis?"undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?{}:self:global:window:globalThis,C="object",T=function(e){return e&&e.Math==Math&&e},I=// eslint-disable-next-line no-undef
T(typeof globalThis==C&&globalThis)||T(typeof window==C&&window)||T(typeof self==C&&self)||T(typeof P==C&&P)||// eslint-disable-next-line no-new-func
Function("return this")(),x=function(e){try{return!!e()}catch(e){return!0}},O=!x(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),R={}.propertyIsEnumerable,M=Object.getOwnPropertyDescriptor,A=M&&!R.call({1:2},1),w=A?function(e){var t=M(this,e);return!!t&&t.enumerable}:R,f={f:w},L=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},j={}.toString,D=function(e){return j.call(e).slice(8,-1)},N="".split,B=x(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins
return!Object("z").propertyIsEnumerable(0)})?function(e){return"String"==D(e)?N.call(e,""):Object(e)}:Object,U=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},z=function(e){return B(U(e))},G=function(e){return"object"==typeof e?null!==e:"function"==typeof e},H=function(e,t){if(!G(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!G(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!G(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!G(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")},V={}.hasOwnProperty,F=function(e,t){return V.call(e,t)},Y=I.document,W=G(Y)&&G(Y.createElement),$=function(e){return W?Y.createElement(e):{}},K=!O&&!x(function(){return 7!=Object.defineProperty($("div"),"a",{get:function(){return 7}}).a}),X=Object.getOwnPropertyDescriptor,q=O?X:function(e,t){if(e=z(e),t=H(t,!0),K)try{return X(e,t)}catch(e){/* empty */}return F(e,t)?L(!f.f.call(e,t),e[t]):void 0},Q={f:q},J=function(e){if(!G(e))throw TypeError(e+" is not an object");return e},Z=Object.defineProperty,ee=O?Z:function(e,t,n){if(J(e),t=H(t,!0),J(n),K)try{return Z(e,t,n)}catch(e){/* empty */}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e},te={f:ee},ne=O?function(e,t,n){return te.f(e,t,L(1,n))}:function(e,t,n){return e[t]=n,e},oe=function(e,t){try{ne(I,e,t)}catch(n){I[e]=t}return t},ae=e(function(e){var t=I["__core-js_shared__"]||oe("__core-js_shared__",{});(e.exports=function(e,n){return t[e]||(t[e]=void 0===n?{}:n)})("versions",[]).push({version:"3.2.1",mode:"global",copyright:"\xA9 2019 Denis Pushkarev (zloirock.ru)"})}),re=ae("native-function-to-string",Function.toString),ie=I.WeakMap,le="function"==typeof ie&&/native code/.test(re.call(ie)),ce=0,de=Math.random(),se=function(e){return"Symbol("+((void 0===e?"":e)+")_")+(++ce+de).toString(36)},ge=ae("keys"),ue=function(e){return ge[e]||(ge[e]=se(e))},pe={},he=I.WeakMap,me=function(e){return S(e)?b(e):E(e,{})};if(le){var fe=new he,ve=fe.get,ye=fe.has,_e=fe.set;E=function(e,t){return _e.call(fe,e,t),t},b=function(e){return ve.call(fe,e)||{}},S=function(e){return ye.call(fe,e)}}else{var ke=ue("state");pe[ke]=!0,E=function(e,t){return ne(e,ke,t),t},b=function(e){return F(e,ke)?e[ke]:{}},S=function(e){return F(e,ke)}}var Ee={set:E,get:b,has:S,enforce:me,getterFor:function(e){return function(t){var n;if(!G(t)||(n=b(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},be=e(function(e){var t=Ee.get,n=Ee.enforce,o=(re+"").split("toString");ae("inspectSource",function(e){return re.call(e)}),(e.exports=function(e,t,a,r){var i=!!r&&!!r.unsafe,l=!!r&&!!r.enumerable,c=!!r&&!!r.noTargetGet;return("function"==typeof a&&("string"==typeof t&&!F(a,"name")&&ne(a,"name",t),n(a).source=o.join("string"==typeof t?t:"")),e===I)?void(l?e[t]=a:oe(t,a)):void(i?!c&&e[t]&&(l=!0):delete e[t],l?e[t]=a:ne(e,t,a))})(Function.prototype,"toString",function(){return"function"==typeof this&&t(this).source||re.call(this)})}),Se=I,Pe=function(e){return"function"==typeof e?e:void 0},Ce=function(e,t){return 2>arguments.length?Pe(Se[e])||Pe(I[e]):Se[e]&&Se[e][t]||I[e]&&I[e][t]},Te=function(e){return isNaN(e=+e)?0:(0<e?_:k)(e)},Ie=function(e){return 0<e?y(Te(e),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},xe=function(e,t){var n=Te(e);return 0>n?v(n+t,0):y(n,t)},Oe=function(e){return function(t,n,o){var a,r=z(t),i=Ie(r.length),l=xe(o,i);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare
if(e&&n!=n){for(;i>l;)// eslint-disable-next-line no-self-compare
if(a=r[l++],a!=a)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;i>l;l++)if((e||l in r)&&r[l]===n)return e||l||0;return!e&&-1}},Re={// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
includes:Oe(!0),// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
indexOf:Oe(!1)},Me=Re.indexOf,Ae=function(e,t){var n,o=z(e),a=0,r=[];for(n in o)!F(pe,n)&&F(o,n)&&r.push(n);// Don't enum bug & hidden keys
for(;t.length>a;)F(o,n=t[a++])&&(~Me(r,n)||r.push(n));return r},we=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Le=we.concat("length","prototype"),je=Object.getOwnPropertyNames||function(e){return Ae(e,Le)},De={f:je},Ne=Object.getOwnPropertySymbols,Be={f:Ne},Ue=Ce("Reflect","ownKeys")||function(e){var t=De.f(J(e)),n=Be.f;return n?t.concat(n(e)):t},ze=function(e,t){for(var n,o=Ue(t),a=te.f,r=Q.f,l=0;l<o.length;l++)n=o[l],F(e,n)||a(e,n,r(t,n))},Ge=/#|\.prototype\./,He=function(e,t){var n=Fe[Ve(e)];return n==We||n!=Ye&&("function"==typeof t?x(t):!!t)},Ve=He.normalize=function(e){return(e+"").replace(Ge,".").toLowerCase()},Fe=He.data={},Ye=He.NATIVE="N",We=He.POLYFILL="P",$e=He,Ke=Q.f,Xe=function(e,t){var n,o,a,r,i,l,c=e.target,d=e.global,s=e.stat;if(o=d?I:s?I[c]||oe(c,{}):(I[c]||{}).prototype,o)for(a in t){// contained in target
if(i=t[a],e.noTargetGet?(l=Ke(o,a),r=l&&l.value):r=o[a],n=$e(d?a:c+(s?".":"#")+a,e.forced),!n&&void 0!==r){if(typeof i==typeof r)continue;ze(i,r)}// add a flag to not completely full polyfills
(e.sham||r&&r.sham)&&ne(i,"sham",!0),be(o,a,i,e)}},qe=Array.isArray||function(e){return"Array"==D(e)},Qe=function(e){return Object(U(e))},Je=function(e,t,n){var o=H(t);o in e?te.f(e,o,L(0,n)):e[o]=n},Ze=!!Object.getOwnPropertySymbols&&!x(function(){// Chrome 38 Symbol has incorrect toString conversion
// eslint-disable-next-line no-undef
return!(Symbol()+"")}),et=I.Symbol,tt=ae("wks"),nt=function(e){return tt[e]||(tt[e]=Ze&&et[e]||(Ze?et:se)("Symbol."+e))},ot=nt("species"),at=function(e,t){var n;return qe(e)&&(n=e.constructor,"function"==typeof n&&(n===Array||qe(n.prototype))?n=void 0:G(n)&&(n=n[ot],null===n&&(n=void 0))),new(void 0===n?Array:n)(0===t?0:t)},rt=nt("species"),it=function(e){return!x(function(){var t=[],n=t.constructor={};return n[rt]=function(){return{foo:1}},1!==t[e](Boolean).foo})},lt=nt("isConcatSpreadable"),ct=9007199254740991,dt="Maximum allowed index exceeded",st=!x(function(){var e=[];return e[lt]=!1,e.concat()[0]!==e}),gt=it("concat"),ut=function(e){if(!G(e))return!1;var t=e[lt];return void 0===t?qe(e):!!t};Xe({target:"Array",proto:!0,forced:!st||!gt},{concat:function(){// eslint-disable-line no-unused-vars
var e,t,o,a,r,l=Qe(this),c=at(l,0),d=0;for(e=-1,o=arguments.length;e<o;e++)if(r=-1===e?l:arguments[e],ut(r)){if(a=Ie(r.length),d+a>ct)throw TypeError(dt);for(t=0;t<a;t++,d++)t in r&&Je(c,d,r[t])}else{if(d>=ct)throw TypeError(dt);Je(c,d++,r)}return c.length=d,c}});// `Array.prototype.fill` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
var pt=Object.keys||function(e){return Ae(e,we)},ht=O?Object.defineProperties:function(e,t){J(e);for(var n,o=pt(t),a=o.length,r=0;a>r;)te.f(e,n=o[r++],t[n]);return e},mt=Ce("document","documentElement"),ft=ue("IE_PROTO"),vt="prototype",yt=function(){/* empty */},_t=function(){// Thrash, waste and sodomy: IE GC bug
var e,t=$("iframe"),n=we.length,o="<",a="script",r=">";for(t.style.display="none",mt.appendChild(t),t.src="java"+a+":"+"",e=t.contentWindow.document,e.open(),e.write(o+a+r+"document.F=Object"+o+"/"+a+r),e.close(),_t=e.F;n--;)delete _t[vt][we[n]];return _t()},kt=Object.create||function(e,t){var n;return null===e?n=_t():(yt[vt]=J(e),n=new yt,yt[vt]=null,n[ft]=e),void 0===t?n:ht(n,t)};// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
pe[ft]=!0;var Et=nt("unscopables"),bt=Array.prototype;null==bt[Et]&&ne(bt,Et,kt(null));// add a key to Array.prototype[@@unscopables]
var St=function(e){bt[Et][e]=!0};// `Array.prototype.fill` method
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
Xe({target:"Array",proto:!0},{fill:function(e/* , start = 0, end = @length */){for(var t=Qe(this),n=Ie(t.length),o=arguments.length,a=xe(1<o?arguments[1]:void 0,n),r=2<o?arguments[2]:void 0,i=void 0===r?n:xe(r,n);i>a;)t[a++]=e;return t}}),St("fill");var Pt=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function");return e},Ct=function(e,t,n){return(Pt(e),void 0===t)?e:0===n?function(){return e.call(t)}:1===n?function(n){return e.call(t,n)}:2===n?function(n,o){return e.call(t,n,o)}:3===n?function(n,o,a){return e.call(t,n,o,a)}:function()/* ...args */{return e.apply(t,arguments)}},Tt=[].push,It=function(e){var t=1==e,n=4==e,o=6==e;return function(a,r,i,l){for(var c,d,s=Qe(a),g=B(s),u=Ct(r,i,3),p=Ie(g.length),h=0,m=l||at,f=t?m(a,p):2==e?m(a,0):void 0;p>h;h++)if((5==e||o||h in g)&&(c=g[h],d=u(c,h,s),e))if(t)f[h]=d;// map
else if(d)switch(e){case 3:return!0;// some
case 5:return c;// find
case 6:return h;// findIndex
case 2:Tt.call(f,c);// filter
}else if(n)return!1;// every
return o?-1:3==e||n?n:f}},xt={// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
forEach:It(0),// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
map:It(1),// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
filter:It(2),// `Array.prototype.some` method
// https://tc39.github.io/ecma262/#sec-array.prototype.some
some:It(3),// `Array.prototype.every` method
// https://tc39.github.io/ecma262/#sec-array.prototype.every
every:It(4),// `Array.prototype.find` method
// https://tc39.github.io/ecma262/#sec-array.prototype.find
find:It(5),// `Array.prototype.findIndex` method
// https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
findIndex:It(6)},Ot=xt.filter;// optional / simple context binding
Xe({target:"Array",proto:!0,forced:!it("filter")},{filter:function(e/* , thisArg */){return Ot(this,e,1<arguments.length?arguments[1]:void 0)}});var Rt=xt.forEach,Mt=function(e,t){var n=[][e];return!n||!x(function(){n.call(null,t||function(){throw 1},1)})}("forEach")?function(e/* , thisArg */){return Rt(this,e,1<arguments.length?arguments[1]:void 0)}:[].forEach;Xe({target:"Array",proto:!0,forced:[].forEach!=Mt},{forEach:Mt});var At=Re.includes;// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
Xe({target:"Array",proto:!0},{includes:function(e/* , fromIndex = 0 */){return At(this,e,1<arguments.length?arguments[1]:void 0)}}),St("includes");var wt=Date.prototype,Lt="Invalid Date",jt="toString",Dt=wt[jt],Nt=wt.getTime;new Date(NaN)+""!=Lt&&be(wt,jt,function(){var e=Nt.call(this);// eslint-disable-next-line no-self-compare
return e===e?Dt.call(this):Lt});var Bt=te.f,Ut=Function.prototype,zt=Ut.toString,Gt=/^\s*function ([^ (]*)/,Ht="name";O&&!(Ht in Ut)&&Bt(Ut,Ht,{configurable:!0,get:function(){try{return zt.call(this).match(Gt)[1]}catch(e){return""}}});var Vt=nt("toStringTag"),Ft="Arguments"==D(function(){return arguments}()),Yt=function(e,t){try{return e[t]}catch(e){/* empty */}},Wt=function(e){var t,n,o;return void 0===e?"Undefined":null===e?"Null"// @@toStringTag case
:"string"==typeof(n=Yt(t=Object(e),Vt))?n// builtinTag case
:Ft?D(t)// ES3 arguments fallback
:"Object"==(o=D(t))&&"function"==typeof t.callee?"Arguments":o},$t=nt("toStringTag"),Kt={};// ES3 wrong here
Kt[$t]="z";// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
var Xt=function(){return"[object "+Wt(this)+"]"},qt=Object.prototype;Xt!==qt.toString&&be(qt,"toString",Xt,{unsafe:!0});var Qt=I.Promise,Jt=te.f,Zt=nt("toStringTag"),en=nt("species"),tn=function(e,t,n){if(!(e instanceof t))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return e},nn={},on=nt("iterator"),an=Array.prototype,rn=function(e){return void 0!==e&&(nn.Array===e||an[on]===e)},ln=nt("iterator"),cn=function(e){if(null!=e)return e[ln]||e["@@iterator"]||nn[Wt(e)]},dn=function(e,t,n,o){try{return o?t(J(n)[0],n[1]):t(n);// 7.4.6 IteratorClose(iterator, completion)
}catch(t){var a=e["return"];throw void 0!==a&&J(a.call(e)),t}},sn=e(function(e){var t=function(e,t){this.stopped=e,this.result=t},n=e.exports=function(e,n,o,a,r){var i,l,c,d,s,g,u=Ct(n,o,a?2:1);if(r)i=e;else{if(l=cn(e),"function"!=typeof l)throw TypeError("Target is not iterable");// optimisation for array iterators
if(rn(l)){for(c=0,d=Ie(e.length);d>c;c++)if(s=a?u(J(g=e[c])[0],g[1]):u(e[c]),s&&s instanceof t)return s;return new t(!1)}i=l.call(e)}for(;!(g=i.next()).done;)if(s=dn(i,u,g.value,a),s&&s instanceof t)return s;return new t(!1)};n.stop=function(e){return new t(!0,e)}}),gn=nt("iterator"),un=!1;try{var pn=0,hn={next:function(){return{done:!!pn++}},return:function(){un=!0}};hn[gn]=function(){return this},Array.from(hn,function(){throw 2})}catch(e){/* empty */}var mn,fn,vn,yn=function(e,t){if(!t&&!un)return!1;var n=!1;try{var o={};o[gn]=function(){return{next:function(){return{done:n=!0}}}},e(o)}catch(e){/* empty */}return n},_n=nt("species"),kn=function(e,t){var n,o=J(e).constructor;return void 0===o||null==(n=J(o)[_n])?t:Pt(n)},En=I.location,bn=I.setImmediate,Sn=I.clearImmediate,Pn=I.process,Cn=I.MessageChannel,Tn=I.Dispatch,In=0,xn={},On="onreadystatechange",Rn=function(e){// eslint-disable-next-line no-prototype-builtins
if(xn.hasOwnProperty(e)){var t=xn[e];delete xn[e],t()}},Mn=function(e){return function(){Rn(e)}},An=function(e){Rn(e.data)},wn=function(e){I.postMessage(e+"",En.protocol+"//"+En.host)};bn&&Sn||(bn=function(e){for(var t=[],n=1;arguments.length>n;)t.push(arguments[n++]);return xn[++In]=function(){("function"==typeof e?e:Function(e)).apply(void 0,t)},mn(In),In},Sn=function(e){delete xn[e]},"process"==D(Pn)?mn=function(e){Pn.nextTick(Mn(e))}:Tn&&Tn.now?mn=function(e){Tn.now(Mn(e))}:Cn?(fn=new Cn,vn=fn.port2,fn.port1.onmessage=An,mn=Ct(vn.postMessage,vn,1)):!I.addEventListener||"function"!=typeof postMessage||I.importScripts||x(wn)?On in $("script")?mn=function(e){mt.appendChild($("script"))[On]=function(){mt.removeChild(this),Rn(e)}}:mn=function(e){setTimeout(Mn(e),0)}:(mn=wn,I.addEventListener("message",An,!1)));var Ln,jn,Dn,Nn,Bn,Un,zn,Gn,Hn={set:bn,clear:Sn},Vn=Ce("navigator","userAgent")||"",Fn=Q.f,Yn=Hn.set,Wn=I.MutationObserver||I.WebKitMutationObserver,$n=I.process,Kn=I.Promise,Xn="process"==D($n),qn=Fn(I,"queueMicrotask"),Qn=qn&&qn.value;Qn||(Ln=function(){var e,t;for(Xn&&(e=$n.domain)&&e.exit();jn;){t=jn.fn,jn=jn.next;try{t()}catch(e){throw jn?Nn():Dn=void 0,e}}Dn=void 0,e&&e.enter()},Xn?Nn=function(){$n.nextTick(Ln)}:Wn&&!/(iphone|ipod|ipad).*applewebkit/i.test(Vn)?(Bn=!0,Un=document.createTextNode(""),new Wn(Ln).observe(Un,{characterData:!0}),Nn=function(){Un.data=Bn=!Bn}):Kn&&Kn.resolve?(zn=Kn.resolve(void 0),Gn=zn.then,Nn=function(){Gn.call(zn,Ln)}):Nn=function(){Yn.call(I,Ln)});var Jn,Zn,eo,to,no=Qn||function(e){var t={fn:e,next:void 0};Dn&&(Dn.next=t),jn||(jn=t,Nn()),Dn=t},oo=function(e){var t,n;this.promise=new e(function(e,o){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=o}),this.resolve=Pt(t),this.reject=Pt(n)},ao={f:function(e){return new oo(e)}},ro=function(e,t){if(J(e),G(t)&&t.constructor===e)return t;var n=ao.f(e),o=n.resolve;return o(t),n.promise},io=function(e,t){var n=I.console;n&&n.error&&(1===arguments.length?n.error(e):n.error(e,t))},lo=function(e){try{return{error:!1,value:e()}}catch(e){return{error:!0,value:e}}},co=Hn.set,so=nt("species"),go="Promise",uo=Ee.get,po=Ee.set,ho=Ee.getterFor(go),mo=Qt,fo=I.TypeError,vo=I.document,yo=I.process,_o=I.fetch,ko=yo&&yo.versions,Eo=ko&&ko.v8||"",bo=ao.f,So=bo,Po="process"==D(yo),Co=!!(vo&&vo.createEvent&&I.dispatchEvent),To="unhandledrejection",Io=0,xo=1,Oo=1,Ro=2,Mo=$e(go,function(){// correct subclassing with @@species support
var e=mo.resolve(1),t=function(){/* empty */},n=(e.constructor={})[so]=function(e){e(t,t)};// unhandled rejections tracking support, NodeJS Promise without it fails @@species test
return!((Po||"function"==typeof PromiseRejectionEvent)&&(!!1||e["finally"])&&e.then(t)instanceof n// v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
// https://bugs.chromium.org/p/chromium/issues/detail?id=830565
// we can't detect it synchronously, so just check versions
&&0!==Eo.indexOf("6.6")&&-1===Vn.indexOf("Chrome/66"))}),Ao=Mo||!yn(function(e){mo.all(e)["catch"](function(){/* empty */})}),wo=function(e){var t;return!!(G(e)&&"function"==typeof(t=e.then))&&t},Lo=function(e,t,n){if(!t.notified){t.notified=!0;var o=t.reactions;no(function(){// variable length - can't use forEach
for(var a=t.value,r=t.state==xo,i=0;o.length>i;){var l,c,d,s=o[i++],g=r?s.ok:s.fail,u=s.resolve,p=s.reject,h=s.domain;try{g?(!r&&(t.rejection===Ro&&Bo(e,t),t.rejection=Oo),!0===g?l=a:(h&&h.enter(),l=g(a),h&&(h.exit(),d=!0)),l===s.promise?p(fo("Promise-chain cycle")):(c=wo(l))?c.call(l,u,p):u(l)):p(a)}catch(e){h&&!d&&h.exit(),p(e)}}t.reactions=[],t.notified=!1,n&&!t.rejection&&Do(e,t)})}},jo=function(e,t,n){var o,a;Co?(o=vo.createEvent("Event"),o.promise=t,o.reason=n,o.initEvent(e,!1,!0),I.dispatchEvent(o)):o={promise:t,reason:n},(a=I["on"+e])?a(o):e===To&&io("Unhandled promise rejection",n)},Do=function(e,t){co.call(I,function(){var n,o=t.value,a=No(t);if(a&&(n=lo(function(){Po?yo.emit("unhandledRejection",o,e):jo(To,e,o)}),t.rejection=Po||No(t)?Ro:Oo,n.error))throw n.value})},No=function(e){return e.rejection!==Oo&&!e.parent},Bo=function(e,t){co.call(I,function(){Po?yo.emit("rejectionHandled",e):jo("rejectionhandled",e,t.value)})},Uo=function(e,t,n,o){return function(a){e(t,n,a,o)}},zo=function(e,t,n,o){t.done||(t.done=!0,o&&(t=o),t.value=n,t.state=2,Lo(e,t,!0))},Go=function(e,t,n,o){if(!t.done){t.done=!0,o&&(t=o);try{if(e===n)throw fo("Promise can't be resolved itself");var a=wo(n);a?no(function(){var o={done:!1};try{a.call(n,Uo(Go,e,o,t),Uo(zo,e,o,t))}catch(n){zo(e,o,n,t)}}):(t.value=n,t.state=xo,Lo(e,t,!1))}catch(n){zo(e,{done:!1},n,t)}}};Mo&&(mo=function(e){tn(this,mo,go),Pt(e),Jn.call(this);var t=uo(this);try{e(Uo(Go,this,t),Uo(zo,this,t))}catch(e){zo(this,t,e)}},Jn=function(){po(this,{type:go,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:Io,value:void 0})},Jn.prototype=function(e,t,n){for(var o in t)be(e,o,t[o],n);return e}(mo.prototype,{// `Promise.prototype.then` method
// https://tc39.github.io/ecma262/#sec-promise.prototype.then
then:function(e,t){var n=ho(this),o=bo(kn(this,mo));return o.ok="function"!=typeof e||e,o.fail="function"==typeof t&&t,o.domain=Po?yo.domain:void 0,n.parent=!0,n.reactions.push(o),n.state!=Io&&Lo(this,n,!1),o.promise},// `Promise.prototype.catch` method
// https://tc39.github.io/ecma262/#sec-promise.prototype.catch
catch:function(e){return this.then(void 0,e)}}),Zn=function(){var e=new Jn,t=uo(e);this.promise=e,this.resolve=Uo(Go,e,t),this.reject=Uo(zo,e,t)},ao.f=bo=function(e){return e===mo||e===eo?new Zn(e):So(e)},"function"==typeof Qt&&(to=Qt.prototype.then,be(Qt.prototype,"then",function(e,t){var n=this;return new mo(function(e,t){to.call(n,e,t)}).then(e,t)}),"function"==typeof _o&&Xe({global:!0,enumerable:!0,forced:!0},{// eslint-disable-next-line no-unused-vars
fetch:function(){return ro(mo,_o.apply(I,arguments))}}))),Xe({global:!0,wrap:!0,forced:Mo},{Promise:mo}),function(e,t,n){e&&!F(e=n?e:e.prototype,Zt)&&Jt(e,Zt,{configurable:!0,value:t})}(mo,go,!1),function(e){var t=Ce(e),n=te.f;O&&t&&!t[en]&&n(t,en,{configurable:!0,get:function(){return this}})}(go),eo=Se[go],Xe({target:go,stat:!0,forced:Mo},{// `Promise.reject` method
// https://tc39.github.io/ecma262/#sec-promise.reject
reject:function(e){var t=bo(this);return t.reject.call(void 0,e),t.promise}}),Xe({target:go,stat:!0,forced:Mo},{// `Promise.resolve` method
// https://tc39.github.io/ecma262/#sec-promise.resolve
resolve:function(e){return ro(this,e)}}),Xe({target:go,stat:!0,forced:Ao},{// `Promise.all` method
// https://tc39.github.io/ecma262/#sec-promise.all
all:function(e){var t=this,n=bo(t),o=n.resolve,a=n.reject,r=lo(function(){var n=Pt(t.resolve),r=[],i=0,l=1;sn(e,function(e){var c=i++,d=!1;r.push(void 0),l++,n.call(t,e).then(function(e){d||(d=!0,r[c]=e,--l||o(r))},a)}),--l||o(r)});return r.error&&a(r.value),n.promise},// `Promise.race` method
// https://tc39.github.io/ecma262/#sec-promise.race
race:function(e){var t=this,n=bo(t),o=n.reject,a=lo(function(){var a=Pt(t.resolve);sn(e,function(e){a.call(t,e).then(n.resolve,o)})});return a.error&&o(a.value),n.promise}});var Ho=nt("match"),Vo=function(e){var t;return G(e)&&(void 0===(t=e[Ho])?"RegExp"==D(e):!!t)},Fo=function(e){if(Vo(e))throw TypeError("The method doesn't accept regular expressions");return e},Yo=nt("match");// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
Xe({target:"String",proto:!0,forced:!function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[Yo]=!1,"/./"[e](t)}catch(e){/* empty */}}return!1}("includes")},{includes:function(e/* , position = 0 */){return!!~(U(this)+"").indexOf(Fo(e),1<arguments.length?arguments[1]:void 0)}});// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
var Wo={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0};for(var $o in Wo){var Ko=I[$o],Xo=Ko&&Ko.prototype;// some Chrome versions have non-configurable methods on DOMTokenList
if(Xo&&Xo.forEach!==Mt)try{ne(Xo,"forEach",Mt)}catch(e){Xo.forEach=Mt}}var qo=[].slice,Qo=/MSIE .\./.test(Vn),Jo=function(e){return function(t,n/* , ...arguments */){var o=2<arguments.length,a=o?qo.call(arguments,2):void 0;return e(o?function(){("function"==typeof t?t:Function(t)).apply(this,a)}:t,n)}};Xe({global:!0,bind:!0,forced:Qo},{// `setTimeout` method
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
setTimeout:Jo(I.setTimeout),// `setInterval` method
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
setInterval:Jo(I.setInterval)});var Zo="undefined"!=typeof window,ea=Zo&&window.navigator.userAgent.toLowerCase(),ta=ea&&/msie|trident/.test(ea),na=/*#__PURE__*/function(){var n=Math.PI;// 支持的交互模式枚举
// 支持的图片类型枚举
function e(n,o){t(this,e),this._init(n,o),this.manualMount||this.mount(this.container)}/**
	   * 初始化
	   * @param {HTMLElement|String} container 容器
	   * @param {Object} options 选项
	   */return o(e,[{key:"_init",value:function(t,n){var o=this;if(!t)throw new Error("el\u4E3A\u5FC5\u586B\u9879");this.container="string"==typeof t?document.querySelector(t):t,this._defaultOptions={size:[],// canvas尺寸
className:"",// 自定义样式类
manualMount:!1,// 手动挂载
maxRevokeSteps:10,// 最大回退步数
interactiveMode:"mouse",// 交互模式 enum:['mouse','touch','both'] ,both将同时绑定mouse、touch事件(PointerEvent存在兼容性问题，放弃使用)
penColor:"red",// 画笔颜色
penWidth:6,// 画笔粗细
bgImgURL:"",// 背景图url或base64
bgImgRotate:0,// 背景图旋转角度
bgColor:"#fff",// 背景色
onRevokeStackChange:null,// 撤销栈改变时的回调
onPaintEnd:null// 绘制一笔结束的回调
},this.options=i({},this._defaultOptions,{},n);var a=this.options,r=a.size,d=a.className,s=a.manualMount,g=a.maxRevokeSteps,u=a.interactiveMode,p=a.penColor,h=a.penWidth,m=a.bgImgURL,f=a.bgImgRotate,v=a.bgColor,y=a.onRevokeStackChange,_=a.onPaintEnd,k=l(r,2),E=k[0],b=k[1];// 尺寸未传，则使用容器的尺寸
this.setSize([null==E?this.container.getBoundingClientRect().width:E,null==b?this.container.getBoundingClientRect().height:b]),this.manualMount=s,this.revokeStack=[],this.MAX_REVOKE_STEPS=this._getLawfulMaxRevokeSteps(g),this.lastPoint=null,this.isPainting=!1,this.interactiveMode=e.INTERACTIVE_MODE_ENUM.includes(u)?u:"mouse",this._handlePointerStartBinded=this._handlePointerStart.bind(this),this._handlePointerMoveBinded=this._handlePointerMove.bind(this),this._handlePointerEndBinded=this._handlePointerEnd.bind(this),this._handlePointerLeaveBinded=this._handlePointerLeave.bind(this),this._handlePointerCancelBinded=this._handlePointerCancel.bind(this),this.eventList=[{pointerType:"mouse",action:"start",name:"mousedown",handler:this._handlePointerStartBinded},{pointerType:"mouse",action:"move",name:"mousemove",handler:this._handlePointerMoveBinded},{pointerType:"mouse",action:"end",name:"mouseup",handler:this._handlePointerEndBinded},{pointerType:"mouse",action:"leave",name:"mouseleave",handler:this._handlePointerLeaveBinded},{pointerType:"touch",action:"start",name:"touchstart",handler:this._handlePointerStartBinded},{pointerType:"touch",action:"move",name:"touchmove",handler:this._handlePointerMoveBinded},{pointerType:"touch",action:"end",name:"touchend",handler:this._handlePointerEndBinded},{pointerType:"touch",action:"cancel",name:"touchcancel",handler:this._handlePointerCancelBinded}],this.setPenStyle({color:p,width:h}),this.bgImgURL=m,this.bgColor=v,this.bgImgRotate=this._getLawfulRotateAngle(f),this.className=d,m?this._getImageFromURL(m).then(function(e){o._bgImgObject=e,o.originalSize=[e.width,e.height],o._drawBg.apply(o,[e].concat(c(o.originalSize)))}).catch(function(e){console.log(e),o._bgImgObject=null}):this._bgImgObject=null,this.onRevokeStackChange=y,this.onPaintEnd=_,this.paintCount=0}/**
	     * 绑定当前模式对应动作的所有事件
	     * @param {String} action 动作
	     * @returns void
	     */},{key:"_bindCurModeEvents",value:function(e){var t=e.action;if(this.el){var n=this._getPointerType(this.interactiveMode),o={pointerType:n,action:t};this._cleanCurModeEvents(o),this._bindEvent(o)}}/**
	     * 绑定符合特定条件的事件
	     * @param {Object} condition 过滤条件
	     * @returns void
	     */},{key:"_bindEvent",value:function(){var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(this.el){var n=this._getEventItems(t);n&&n.length&&n.forEach(function(t){var n=t.name,o=t.handler;return e.el.addEventListener(n,o,!1)})}}/**
	     * 获取模式对应的指针类型
	     * @param {string} mode 模式
	     * @returns 类型字符串
	     */},{key:"_getPointerType",value:function(e){return"both"===e?"":"touch"===e?"touch":"mouse"}/**
	     * 过滤出符合条件的EventItems
	     * @param {String} mode 模式
	     * @param {String} action 动作
	     * @returns EventItems数组
	     */},{key:"_getEventItems",value:function(e){var t=e.mode,n=e.action,o=function(){return!0};// 默认全量返回
return t&&n?o=function(e){return e.mode===t&&e.action===n}:t&&!n?o=function(e){return e.mode===t}:!t&&n&&(o=function(e){return e.action===n}),this.eventList.filter(o)}/**
	     * 清除当前模式对应动作的所有事件
	     * @param {String} action 动作
	     * @returns void
	     */},{key:"_cleanCurModeEvents",value:function(e){var t=e.action;if(this.el){var n=this._getPointerType(this.interactiveMode);this._cleanEvent({pointerType:n,action:t})}}/**
	     * 清除符合特定条件的事件
	     * @param {Object} condition 过滤条件
	     * @returns void
	     */},{key:"_cleanEvent",value:function(){var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(this.el){var n=this._getEventItems(t);n&&n.length&&n.forEach(function(t){var n=t.name,o=t.handler;return e.el.removeEventListener(n,o,!1)})}}/**
	     * 处理指针开始
	     * @param {MouseEvent|TouchEvent} e 事件对象
	     * @returns void
	     */},{key:"_handlePointerStart",value:function(t){console.log("_handlePointerStart"),this.isPainting=!0,this.lastPoint=this._getPointOffset(t),this.ctx&&this._saveImageData("paint",this.paintCount,this.ctx.getImageData(0,0,this.width,this.height)),this._drawCircle(this.lastPoint.x,this.lastPoint.y,this.penWidth/2,this.penColor),this._bindCurModeEvents({action:"move"}),this._bindCurModeEvents({action:"end"}),this._bindCurModeEvents({action:"leave"})}/**
	     * 处理指针移动
	     * @param {MouseEvent|TouchEvent} e 事件对象
	     * @returns void
	     */},{key:"_handlePointerMove",value:function(t){if(console.log("_handlePointerMove"),!!this.isPainting){var e=this._getPointOffset(t),n=e.x,o=e.y,a=this.lastPoint,r=a.x,i=a.y;this._drawLine(r,i,n,o,this.penWidth,this.penColor),this.lastPoint={x:n,y:o}}}/**
	     * 处理指针结束
	     * @param {MouseEvent|TouchEvent} e 事件对象
	     * @returns void
	     */},{key:"_handlePointerEnd",value:function(){console.log("_handlePointerEnd"),this.isPainting=!1,this.paintCount++,this.onPaintEnd&&"function"==typeof this.onPaintEnd&&this.onPaintEnd(this.paintCount),console.log("_handlePointerEnd paintCount",this.paintCount),this._cleanCurModeEvents({action:"move"}),this._cleanCurModeEvents({action:"end"}),this._cleanCurModeEvents({action:"leave"})}/**
	     * 处理指针离开
	     * @param {MouseEvent|TouchEvent} e 事件对象
	     * @returns void
	     */},{key:"_handlePointerLeave",value:function(t){console.log("_handlePointerLeave"),this.isPainting&&this._handlePointerEnd(t)}/**
	     * 处理指针取消
	     * @param {MouseEvent|TouchEvent} e 事件对象
	     * @returns void
	     */},{key:"_handlePointerCancel",value:function(t){console.log("_handlePointerCancel"),this.isPainting&&this._handlePointerEnd(t)}/**
	     * 绘制圆形
	     * @param {Number} x 横轴
	     * @param {Number} y 纵轴
	     * @param {Number} radius 半径
	     * @param {String} color 画笔颜色
	     * @returns void
	     */},{key:"_drawCircle",value:function(e,t){var o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:3,a=3<arguments.length&&void 0!==arguments[3]?arguments[3]:"red";this.ctx&&(this.ctx.save(),this.ctx.fillStyle=a,this.ctx.beginPath(),this.ctx.arc(e,t,o,0,360*(n/180),!1),this.ctx.fill(),this.ctx.restore())}/**
	     * 绘制移动时的直线
	     * @param {Number} x1 起点x1
	     * @param {Number} y1 起点y1
	     * @param {Number} x2 终点x2
	     * @param {Number} y2 终点y2
	     * @param {Number} width 线条宽度
	     * @param {String} color 颜色
	     * @returns void
	     */},{key:"_drawLine",value:function(e,t,n,o){var a=4<arguments.length&&void 0!==arguments[4]?arguments[4]:6,r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:"red";this.ctx&&(this.ctx.save(),this.ctx.strokeStyle=r,this.ctx.lineWidth=a,this.ctx.lineCap="round",this.ctx.lineJoin="round",this.ctx.beginPath(),this.ctx.moveTo(e,t),this.ctx.lineTo(n,o),this.ctx.stroke(),this.ctx.restore())}/**
	     * 获取事件相对触发对象的偏移值
	     * @param {MouseEvent|TouchEvent} e 事件对象
	     * @returns 偏移值对象
	     */},{key:"_getPointOffset",value:function(t){if(t instanceof MouseEvent)return{x:t.offsetX,y:t.offsetY};if(t instanceof TouchEvent){var e=t.touches,n=t.target,o=e[0],a=o.clientX,r=o.clientY,i=n.getBoundingClientRect(),l=i.left,c=i.top;return{x:a-l,y:r-c}}}/**
	     * 获取合法的最大撤销步数
	     * @param {Number} steps 步数
	     * @returns 合法的最大撤销步数
	     */},{key:"_getLawfulMaxRevokeSteps",value:function(e){if(0>=e||"number"!=typeof e||isNaN(e))return 10;// 最大撤销步数
return 50<e?50:e}/**
	     * 保存当前画布状态
	     * @param {String} type 类型(绘制paint、清空clear) 默认paint
	     * @param {Number} paintCount 绘制次数
	     * @param {ImageData} imageData 像素数据
	     * @returns void
	     */},{key:"_saveImageData",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"paint",t=1<arguments.length?arguments[1]:void 0,n=2<arguments.length?arguments[2]:void 0;["paint","clear"].includes(e)&&null!=t&&n&&n instanceof ImageData&&(// 保存类型及绘制次数(撤销时使用)
this.revokeStack.length>=this.MAX_REVOKE_STEPS&&this.revokeStack.shift(),this.revokeStack.push({type:e,paintCount:t,imageData:n}),this.onRevokeStackChange&&"function"==typeof this.onRevokeStackChange&&this.onRevokeStackChange(this.revokeStack),console.log("_saveImageData onRevokeStackChange",this.revokeStack))}/**
	     * 生成canvas元素
	     * @returns canvas DOM对象
	     */},{key:"_makeCanvas",value:function(){return document.createElement("canvas")}/**
	     * 设置canvas dom尺寸
	     * @param {Number} width 宽
	     * @param {Number} height 高
	     * @returns void
	     */},{key:"_setDOMSize",value:function(e){var t=l(e,2),n=t[0],o=t[1];null!=n&&this.el&&(this.el.width=n),null!=o&&this.el&&(this.el.height=o)}/**
	     * 获取绘图上下文
	     * @returns canvas context
	     */},{key:"_getCtx",value:function(){return this.el&&this.el.getContext&&this.el.getContext("2d")}/**
	     * 单步撤销
	     * @returns void
	     */},{key:"_revoke",value:function(){if(this.ctx&&this.revokeStack&&this.revokeStack.length){var e=this.revokeStack.pop(),t=e.imageData,n=e.paintCount;this.ctx.putImageData(t,0,0),this.paintCount=n,this.onRevokeStackChange&&"function"==typeof this.onRevokeStackChange&&this.onRevokeStackChange(this.revokeStack),console.log("_revoke onRevokeStackChange",this.revokeStack,n)}}/**
	     * 从url获取图片
	     * @param {String} imgURL 图片url，支持base64
	     * @returns void
	     */},{key:"_getImageFromURL",value:function(e){return new Promise(function(t,n){if(!/^(http[s]?)|(data:image)/.test(e))return void n(new Error("\u56FE\u7247url\u683C\u5F0F\u4E0D\u6B63\u786E"));var o=new Image;o.src=e,o.onload=function(){t(o)},o.onerror=n,(o.complete||void 0===o.complete)&&(o.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",o.src=e)})}/**
	     * 绘制背景底图
	     * @param {CanvasImageSource} imgObject 图像对象
	     * @param {Number} w 宽
	     * @param {Number} h 高
	     * @returns void
	     */},{key:"_drawBg",value:function(e,t,o){if(e&&this.ctx&&this.ctx.drawImage&&t&&o&&!(0>=t)&&!(0>=o)){var a=0,r=t,i=o,l=0===this.bgImgRotate||180===this.bgImgRotate?-this.width/2:-this.height/2,c=0===this.bgImgRotate||180===this.bgImgRotate?-this.height/2:-this.width/2,d=0===this.bgImgRotate||180===this.bgImgRotate?this.width:this.height,s=0===this.bgImgRotate||180===this.bgImgRotate?this.height:this.width;this.ctx.save(),this.ctx.translate(this.width/2,this.height/2),this.ctx.rotate(n/180*this.bgImgRotate),console.log("\u65CB\u8F6C\u53C2\u6570:",0,a,r,i,l,c,d,s,this.bgImgRotate),this.ctx.drawImage(e,0,a,r,i,l,c,d,s),this.ctx.restore()}}/**
	     * 获取合法角度值(逆时针旋转角度记录为正值，-90度 记录为270；450记录为90,10度记录为0,55度记录为90)
	     * @param {Number} angle 角度
	     * @returns 合法角度值
	     */},{key:"_getLawfulRotateAngle",value:function(e){var t=Math.abs;if(!("number"!=typeof e||isNaN(e))){var n=e%360,o=0>n?n+360:n,a=45<=o%90?90*k(o/90)%360:90*_(o/90)%360;// 可能存在-0
return t(a)}}/**
	     * 获取当前画面的绘制次数
	     * @returns 绘制次数
	     */},{key:"getPaintCount",value:function(){return this.paintCount}/**
	     * 旋转
	     * @param {Boolean} direction 方向 1顺时针 -1逆时针
	     * @returns void
	     */},{key:"rotate",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1;[1,-1].includes(e)&&(// 重设尺寸，旋转90度，宽高互换即可
// 因为旋转操作不记录到撤销栈中
// 旋转时需要清空撤销栈并重置绘制数量，不然会导致撤销状态错误
this.bgImgRotate=this._getLawfulRotateAngle(this.bgImgRotate+90*e),this.setSize([this.height,this.width]),this._drawBg.apply(this,[this._bgImgObject].concat(c(this.originalSize))),this.paintCount=0,this.revokeStack=[])}/**
	     * 设置画笔样式(粗细、颜色)
	     * @param {Object} penStyle 画笔样式
	     * @returns void
	     */},{key:"setPenStyle",value:function(e){var t=e.color,n=e.width;t&&"string"==typeof t&&(this.penColor=t),n&&"number"==typeof n&&!isNaN(n)&&0<n&&(this.penWidth=n)}/**
	     * 撤销
	     * @returns void
	     */},{key:"revoke",value:function(){this._revoke()}/**
	     * 清空绘制
	     * @returns void
	     */},{key:"clear",value:function(){this.ctx&&this.el&&(// 清空前保存状态
// 重置绘制次数
// 如果有背景图，则需要重新绘制背景图
this._saveImageData("clear",this.paintCount,this.ctx.getImageData(0,0,this.width,this.height)),this.ctx.clearRect(0,0,this.width,this.height),this.paintCount=0,this._bgImgObject&&this._drawBg.apply(this,[this._bgImgObject].concat(c(this.originalSize))),console.log("clear paintCount",this.paintCount))}/**
	     * 设置canvas尺寸
	     * @param {Number} width 宽
	     * @param {Number} height 高
	     * @returns void
	     */},{key:"setSize",value:function(e){var t=l(e,2),n=t[0],o=t[1];n&&(this.width=n),o&&(this.height=o),this._setDOMSize([n,o])}/**
	     * 重新初始化
	     * @param {Object} options 选项
	     * @returns void
	     */},{key:"reInit",value:function(e){this._init(this.container,e||this.options),this.mount()}/**
	     * 销毁
	     * @returns void
	     */},{key:"destory",value:function(){this.container.removeChild(this.el),this.el=null,this._bgImgObject=null}/**
	     * 设置样式名
	     * @param {String} name 样式类字符串
	     * @returns void
	     */},{key:"setClassName",value:function(e){e&&this.el&&(this.el.className=e)}/**
	     * 挂载
	     * @returns void
	     */},{key:"mount",value:function(){this.el||(this.el=this._makeCanvas()),this.ctx||(this.ctx=this._getCtx()),this._setDOMSize([this.width,this.height]),this.setClassName(this.className),this._bindCurModeEvents({action:"start"}),this.container.appendChild(this.el)}/**
	     * 设置背景
	     * @param {CanvasImageSource|String} urlOrObject 需要绘制的图像对象(HTMLImageElement、SVGImageElement、HTMLVideoElement、HTMLCanvasElement、ImageBitmap、OffscreenCanvas)或图像url
	     * @param {Number} originalWidth 原图像宽度。当无法从urlOrObject直接获取原始尺寸时需要手动提供原始尺寸
	     * @param {Number} originalHeight 原图像高度
	     * @returns void
	     */},{key:"setBgImg",value:function(e,t,n){var o=this;// TODO:此处可能需要保存状态
"string"==typeof e&&/^(http[s]?)|(data:image)/.test(e)?this._getImageFromURL(e).then(function(e){o._bgImgObject=e,o.originalSize=[t||e.width,n||e.height],o._drawBg.apply(o,[e].concat(c(o.originalSize)))}).catch(function(e){console.log(e),o._bgImgObject=null}):(e!==this._bgImgObject&&(this._bgImgObject=e),this.originalSize=[t||this.width,n||this.height],this._drawBg.apply(this,[e].concat(c(this.originalSize))))}/**
	     * 获取dataURL
	     * @param {String} type 图片类型
	     * @param {Number} compressRate 压缩比率
	     * @returns dataURL
	     */},{key:"getDataUrl",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"png",n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1;if(this.el&&e.IMG_TYPE_ENUM.includes(t)&&"number"==typeof n&&!isNaN(n)){.3>n&&(n=.3),1<n&&(n=1);var o="image/".concat(t);return this.el.toDataURL(o,n)}}/**
	     * 获取Blob
	     * @param {String} type 图片类型
	     * @param {Number} compressRate 压缩比率
	     * @returns promise resolved a blob
	     */},{key:"getBlob",value:function(){var t=this,n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"png",o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1;if(this.el&&e.IMG_TYPE_ENUM.includes(n)&&"number"==typeof o&&!isNaN(o)){.3>o&&(o=.3),1<o&&(o=1);var a="image/".concat(n);return new Promise(function(e){t.el.toBlob(e,a,o)})}}/**
	     * 获取File
	     * @param {String} type 图片类型
	     * @param {Number} compressRate 压缩比率
	     * @returns promise resolved a file
	     */},{key:"getFile",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"drawingBoard",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"png",n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1;return this.getBlob(t,n).then(function(t){return m(t,e)})}/**
	     * 下载图片
	     * @param {String} type 图片类型
	     * @param {Number} compressRate 压缩比率，默认原图输出
	     * @returns void
	     */},{key:"download",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"png",n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1,o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"drawing-board";if(e.IMG_TYPE_ENUM.includes(t)&&"number"==typeof n&&!isNaN(n)){.3>n&&(n=.3),1<n&&(n=1);var a=this.getDataUrl(t,n);if(a){var r=document.createElement("a");document.body.appendChild(r),r.href=a,r.download="".concat(o,"-").concat(new Date().getTime()),r.target="_blank",r.click();var i=setTimeout(function(){document.body.removeChild(r),r=null,clearTimeout(i),i=null},200)}}}}]),e}();return a(na,"INTERACTIVE_MODE_ENUM",["mouse","touch","both"]),a(na,"IMG_TYPE_ENUM",["jpg","jpeg","png","webp"]),na});
