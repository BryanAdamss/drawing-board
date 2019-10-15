(function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,e.DrawingBoard=t())})(this,function(){'use strict';var v=Math.max,y=Math.min,_=Math.floor,P=Math.ceil;function e(e,t){return t={exports:{}},e(t,t.exports),t.exports}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n,a=0;a<t.length;a++)n=t[a],n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function a(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function i(e){for(var t,n=1;n<arguments.length;n++)t=null==arguments[n]?{}:arguments[n],n%2?r(t,!0).forEach(function(n){o(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))});return e}function l(e,t){return s(e)||u(e,t)||h()}function c(e){return d(e)||g(e)||p()}function d(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function s(e){if(Array.isArray(e))return e}function g(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function u(e,t){var n=[],a=!0,o=!1,r=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!(t&&n.length===t));a=!0);}catch(e){o=!0,r=e}finally{try{a||null==l["return"]||l["return"]()}finally{if(o)throw r}}return n}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function h(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}/**
	 * @author GuangHui
	 * @description 浏览器判断
	 */ /**
	 * blob转File
	 *
	 * @export File
	 * @param {Blob} blob blob
	 * @param {String} name filename
	 * @returns
	 */function m(e,t){return so?(e.lastModifiedDate=new Date,e.name=t,e):new File([e],t,{type:e.type})}var E,k,S,b="undefined"==typeof globalThis?"undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?{}:self:global:window:globalThis,T="object",C=function(e){return e&&e.Math==Math&&e},M=// eslint-disable-next-line no-undef
C(typeof globalThis==T&&globalThis)||C(typeof window==T&&window)||C(typeof self==T&&self)||C(typeof b==T&&b)||// eslint-disable-next-line no-new-func
Function("return this")(),I=function(e){try{return!!e()}catch(e){return!0}},x=!I(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),O={}.propertyIsEnumerable,A=Object.getOwnPropertyDescriptor,R=A&&!O.call({1:2},1),w=R?function(e){var t=A(this,e);return!!t&&t.enumerable}:O,f={f:w},L=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},D={}.toString,j=function(e){return D.call(e).slice(8,-1)},N="".split,B=I(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins
return!Object("z").propertyIsEnumerable(0)})?function(e){return"String"==j(e)?N.call(e,""):Object(e)}:Object,U=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},G=function(e){return B(U(e))},z=function(e){return"object"==typeof e?null!==e:"function"==typeof e},H=function(e,t){if(!z(e))return e;var n,a;if(t&&"function"==typeof(n=e.toString)&&!z(a=n.call(e)))return a;if("function"==typeof(n=e.valueOf)&&!z(a=n.call(e)))return a;if(!t&&"function"==typeof(n=e.toString)&&!z(a=n.call(e)))return a;throw TypeError("Can't convert object to primitive value")},F={}.hasOwnProperty,Y=function(e,t){return F.call(e,t)},V=M.document,W=z(V)&&z(V.createElement),$=function(e){return W?V.createElement(e):{}},X=!x&&!I(function(){return 7!=Object.defineProperty($("div"),"a",{get:function(){return 7}}).a}),K=Object.getOwnPropertyDescriptor,q=x?K:function(e,t){if(e=G(e),t=H(t,!0),X)try{return K(e,t)}catch(e){/* empty */}return Y(e,t)?L(!f.f.call(e,t),e[t]):void 0},Z={f:q},Q=function(e){if(!z(e))throw TypeError(e+" is not an object");return e},J=Object.defineProperty,ee=x?J:function(e,t,n){if(Q(e),t=H(t,!0),Q(n),X)try{return J(e,t,n)}catch(e){/* empty */}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e},te={f:ee},ne=x?function(e,t,n){return te.f(e,t,L(1,n))}:function(e,t,n){return e[t]=n,e},ae=function(e,t){try{ne(M,e,t)}catch(n){M[e]=t}return t},oe=e(function(e){var t=M["__core-js_shared__"]||ae("__core-js_shared__",{});(e.exports=function(e,n){return t[e]||(t[e]=void 0===n?{}:n)})("versions",[]).push({version:"3.2.1",mode:"global",copyright:"\xA9 2019 Denis Pushkarev (zloirock.ru)"})}),re=oe("native-function-to-string",Function.toString),ie=M.WeakMap,le="function"==typeof ie&&/native code/.test(re.call(ie)),ce=0,de=Math.random(),se=function(e){return"Symbol("+((void 0===e?"":e)+")_")+(++ce+de).toString(36)},ge=oe("keys"),ue=function(e){return ge[e]||(ge[e]=se(e))},pe={},he=M.WeakMap,me=function(e){return S(e)?k(e):E(e,{})};if(le){var ve=new he,fe=ve.get,ye=ve.has,_e=ve.set;E=function(e,t){return _e.call(ve,e,t),t},k=function(e){return fe.call(ve,e)||{}},S=function(e){return ye.call(ve,e)}}else{var Pe=ue("state");pe[Pe]=!0,E=function(e,t){return ne(e,Pe,t),t},k=function(e){return Y(e,Pe)?e[Pe]:{}},S=function(e){return Y(e,Pe)}}var Ee={set:E,get:k,has:S,enforce:me,getterFor:function(e){return function(t){var n;if(!z(t)||(n=k(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},ke=e(function(e){var t=Ee.get,n=Ee.enforce,a=(re+"").split("toString");oe("inspectSource",function(e){return re.call(e)}),(e.exports=function(e,t,o,r){var i=!!r&&!!r.unsafe,l=!!r&&!!r.enumerable,c=!!r&&!!r.noTargetGet;return("function"==typeof o&&("string"==typeof t&&!Y(o,"name")&&ne(o,"name",t),n(o).source=a.join("string"==typeof t?t:"")),e===M)?void(l?e[t]=o:ae(t,o)):void(i?!c&&e[t]&&(l=!0):delete e[t],l?e[t]=o:ne(e,t,o))})(Function.prototype,"toString",function(){return"function"==typeof this&&t(this).source||re.call(this)})}),Se=M,be=function(e){return"function"==typeof e?e:void 0},Te=function(e,t){return 2>arguments.length?be(Se[e])||be(M[e]):Se[e]&&Se[e][t]||M[e]&&M[e][t]},Ce=function(e){return isNaN(e=+e)?0:(0<e?_:P)(e)},Me=function(e){return 0<e?y(Ce(e),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},Ie=function(e,t){var n=Ce(e);return 0>n?v(n+t,0):y(n,t)},xe=function(e){return function(t,n,a){var o,r=G(t),i=Me(r.length),l=Ie(a,i);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare
if(e&&n!=n){for(;i>l;)// eslint-disable-next-line no-self-compare
if(o=r[l++],o!=o)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;i>l;l++)if((e||l in r)&&r[l]===n)return e||l||0;return!e&&-1}},Oe={// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
includes:xe(!0),// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
indexOf:xe(!1)},Ae=Oe.indexOf,Re=function(e,t){var n,a=G(e),o=0,r=[];for(n in a)!Y(pe,n)&&Y(a,n)&&r.push(n);// Don't enum bug & hidden keys
for(;t.length>o;)Y(a,n=t[o++])&&(~Ae(r,n)||r.push(n));return r},we=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Le=we.concat("length","prototype"),De=Object.getOwnPropertyNames||function(e){return Re(e,Le)},je={f:De},Ne=Object.getOwnPropertySymbols,Be={f:Ne},Ue=Te("Reflect","ownKeys")||function(e){var t=je.f(Q(e)),n=Be.f;return n?t.concat(n(e)):t},Ge=function(e,t){for(var n,a=Ue(t),o=te.f,r=Z.f,l=0;l<a.length;l++)n=a[l],Y(e,n)||o(e,n,r(t,n))},ze=/#|\.prototype\./,He=function(e,t){var n=Ye[Fe(e)];return n==We||n!=Ve&&("function"==typeof t?I(t):!!t)},Fe=He.normalize=function(e){return(e+"").replace(ze,".").toLowerCase()},Ye=He.data={},Ve=He.NATIVE="N",We=He.POLYFILL="P",$e=He,Xe=Z.f,Ke=function(e,t){var n,a,o,r,i,l,c=e.target,d=e.global,s=e.stat;if(a=d?M:s?M[c]||ae(c,{}):(M[c]||{}).prototype,a)for(o in t){// contained in target
if(i=t[o],e.noTargetGet?(l=Xe(a,o),r=l&&l.value):r=a[o],n=$e(d?o:c+(s?".":"#")+o,e.forced),!n&&void 0!==r){if(typeof i==typeof r)continue;Ge(i,r)}// add a flag to not completely full polyfills
(e.sham||r&&r.sham)&&ne(i,"sham",!0),ke(a,o,i,e)}},qe=Array.isArray||function(e){return"Array"==j(e)},Ze=function(e){return Object(U(e))},Qe=function(e,t,n){var a=H(t);a in e?te.f(e,a,L(0,n)):e[a]=n},Je=!!Object.getOwnPropertySymbols&&!I(function(){// Chrome 38 Symbol has incorrect toString conversion
// eslint-disable-next-line no-undef
return!(Symbol()+"")}),et=M.Symbol,tt=oe("wks"),nt=function(e){return tt[e]||(tt[e]=Je&&et[e]||(Je?et:se)("Symbol."+e))},at=nt("species"),ot=function(e,t){var n;return qe(e)&&(n=e.constructor,"function"==typeof n&&(n===Array||qe(n.prototype))?n=void 0:z(n)&&(n=n[at],null===n&&(n=void 0))),new(void 0===n?Array:n)(0===t?0:t)},rt=nt("species"),it=function(e){return!I(function(){var t=[],n=t.constructor={};return n[rt]=function(){return{foo:1}},1!==t[e](Boolean).foo})},lt=nt("isConcatSpreadable"),ct=9007199254740991,dt="Maximum allowed index exceeded",st=!I(function(){var e=[];return e[lt]=!1,e.concat()[0]!==e}),gt=it("concat"),ut=function(e){if(!z(e))return!1;var t=e[lt];return void 0===t?qe(e):!!t};Ke({target:"Array",proto:!0,forced:!st||!gt},{concat:function(){// eslint-disable-line no-unused-vars
var e,t,a,o,r,l=Ze(this),c=ot(l,0),d=0;for(e=-1,a=arguments.length;e<a;e++)if(r=-1===e?l:arguments[e],ut(r)){if(o=Me(r.length),d+o>ct)throw TypeError(dt);for(t=0;t<o;t++,d++)t in r&&Qe(c,d,r[t])}else{if(d>=ct)throw TypeError(dt);Qe(c,d++,r)}return c.length=d,c}});// `Array.prototype.fill` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
var pt=Object.keys||function(e){return Re(e,we)},ht=x?Object.defineProperties:function(e,t){Q(e);for(var n,a=pt(t),o=a.length,r=0;o>r;)te.f(e,n=a[r++],t[n]);return e},mt=Te("document","documentElement"),vt=ue("IE_PROTO"),ft="prototype",yt=function(){/* empty */},_t=function(){// Thrash, waste and sodomy: IE GC bug
var e,t=$("iframe"),n=we.length,a="<",o="script",r=">";for(t.style.display="none",mt.appendChild(t),t.src="java"+o+":"+"",e=t.contentWindow.document,e.open(),e.write(a+o+r+"document.F=Object"+a+"/"+o+r),e.close(),_t=e.F;n--;)delete _t[ft][we[n]];return _t()},Pt=Object.create||function(e,t){var n;return null===e?n=_t():(yt[ft]=Q(e),n=new yt,yt[ft]=null,n[vt]=e),void 0===t?n:ht(n,t)};// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
pe[vt]=!0;var Et=nt("unscopables"),kt=Array.prototype;null==kt[Et]&&ne(kt,Et,Pt(null));// add a key to Array.prototype[@@unscopables]
var St=function(e){kt[Et][e]=!0};// `Array.prototype.fill` method
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
Ke({target:"Array",proto:!0},{fill:function(e/* , start = 0, end = @length */){for(var t=Ze(this),n=Me(t.length),a=arguments.length,o=Ie(1<a?arguments[1]:void 0,n),r=2<a?arguments[2]:void 0,i=void 0===r?n:Ie(r,n);i>o;)t[o++]=e;return t}}),St("fill");var bt=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function");return e},Tt=function(e,t,n){return(bt(e),void 0===t)?e:0===n?function(){return e.call(t)}:1===n?function(n){return e.call(t,n)}:2===n?function(n,a){return e.call(t,n,a)}:3===n?function(n,a,o){return e.call(t,n,a,o)}:function()/* ...args */{return e.apply(t,arguments)}},Ct=[].push,Mt=function(e){var t=1==e,n=4==e,a=6==e;return function(o,r,i,l){for(var c,d,s=Ze(o),g=B(s),u=Tt(r,i,3),p=Me(g.length),h=0,m=l||ot,v=t?m(o,p):2==e?m(o,0):void 0;p>h;h++)if((5==e||a||h in g)&&(c=g[h],d=u(c,h,s),e))if(t)v[h]=d;// map
else if(d)switch(e){case 3:return!0;// some
case 5:return c;// find
case 6:return h;// findIndex
case 2:Ct.call(v,c);// filter
}else if(n)return!1;// every
return a?-1:3==e||n?n:v}},It={// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
forEach:Mt(0),// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
map:Mt(1),// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
filter:Mt(2),// `Array.prototype.some` method
// https://tc39.github.io/ecma262/#sec-array.prototype.some
some:Mt(3),// `Array.prototype.every` method
// https://tc39.github.io/ecma262/#sec-array.prototype.every
every:Mt(4),// `Array.prototype.find` method
// https://tc39.github.io/ecma262/#sec-array.prototype.find
find:Mt(5),// `Array.prototype.findIndex` method
// https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
findIndex:Mt(6)},xt=It.filter;// optional / simple context binding
Ke({target:"Array",proto:!0,forced:!it("filter")},{filter:function(e/* , thisArg */){return xt(this,e,1<arguments.length?arguments[1]:void 0)}});var Ot=It.forEach,At=function(e,t){var n=[][e];return!n||!I(function(){n.call(null,t||function(){throw 1},1)})}("forEach")?function(e/* , thisArg */){return Ot(this,e,1<arguments.length?arguments[1]:void 0)}:[].forEach;Ke({target:"Array",proto:!0,forced:[].forEach!=At},{forEach:At});var Rt=Oe.includes;// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
Ke({target:"Array",proto:!0},{includes:function(e/* , fromIndex = 0 */){return Rt(this,e,1<arguments.length?arguments[1]:void 0)}}),St("includes");var wt=Date.prototype,Lt="Invalid Date",Dt="toString",jt=wt[Dt],Nt=wt.getTime;new Date(NaN)+""!=Lt&&ke(wt,Dt,function(){var e=Nt.call(this);// eslint-disable-next-line no-self-compare
return e===e?jt.call(this):Lt});var Bt=te.f,Ut=Function.prototype,Gt=Ut.toString,zt=/^\s*function ([^ (]*)/,Ht="name";x&&!(Ht in Ut)&&Bt(Ut,Ht,{configurable:!0,get:function(){try{return Gt.call(this).match(zt)[1]}catch(e){return""}}});var Ft=nt("toStringTag"),Yt="Arguments"==j(function(){return arguments}()),Vt=function(e,t){try{return e[t]}catch(e){/* empty */}},Wt=function(e){var t,n,a;return void 0===e?"Undefined":null===e?"Null"// @@toStringTag case
:"string"==typeof(n=Vt(t=Object(e),Ft))?n// builtinTag case
:Yt?j(t)// ES3 arguments fallback
:"Object"==(a=j(t))&&"function"==typeof t.callee?"Arguments":a},$t=nt("toStringTag"),Xt={};// ES3 wrong here
Xt[$t]="z";// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
var Kt=function(){return"[object "+Wt(this)+"]"},qt=Object.prototype;Kt!==qt.toString&&ke(qt,"toString",Kt,{unsafe:!0});// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
var Zt="[\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]",Qt=RegExp("^"+Zt+Zt+"*"),Jt=RegExp(Zt+Zt+"*$"),en=function(e){return function(t){var n=U(t)+"";return 1&e&&(n=n.replace(Qt,"")),2&e&&(n=n.replace(Jt,"")),n}},tn={// `String.prototype.{ trimLeft, trimStart }` methods
// https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
start:en(1),// `String.prototype.{ trimRight, trimEnd }` methods
// https://tc39.github.io/ecma262/#sec-string.prototype.trimend
end:en(2),// `String.prototype.trim` method
// https://tc39.github.io/ecma262/#sec-string.prototype.trim
trim:en(3)},nn=tn.trim,an=M.parseFloat,on=1/an("\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF-0")!=-Infinity,rn=on?function(e){var t=nn(e+""),n=an(t);return 0===n&&"-"==t.charAt(0)?-0:n}:an;Ke({global:!0,forced:parseFloat!=rn},{parseFloat:rn});var ln=M.Promise,cn=te.f,dn=nt("toStringTag"),sn=nt("species"),gn=function(e,t,n){if(!(e instanceof t))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return e},un={},pn=nt("iterator"),hn=Array.prototype,mn=function(e){return void 0!==e&&(un.Array===e||hn[pn]===e)},vn=nt("iterator"),fn=function(e){if(null!=e)return e[vn]||e["@@iterator"]||un[Wt(e)]},yn=function(e,t,n,a){try{return a?t(Q(n)[0],n[1]):t(n);// 7.4.6 IteratorClose(iterator, completion)
}catch(t){var o=e["return"];throw void 0!==o&&Q(o.call(e)),t}},_n=e(function(e){var t=function(e,t){this.stopped=e,this.result=t},n=e.exports=function(e,n,a,o,r){var i,l,c,d,s,g,u=Tt(n,a,o?2:1);if(r)i=e;else{if(l=fn(e),"function"!=typeof l)throw TypeError("Target is not iterable");// optimisation for array iterators
if(mn(l)){for(c=0,d=Me(e.length);d>c;c++)if(s=o?u(Q(g=e[c])[0],g[1]):u(e[c]),s&&s instanceof t)return s;return new t(!1)}i=l.call(e)}for(;!(g=i.next()).done;)if(s=yn(i,u,g.value,o),s&&s instanceof t)return s;return new t(!1)};n.stop=function(e){return new t(!0,e)}}),Pn=nt("iterator"),En=!1;try{var kn=0,Sn={next:function(){return{done:!!kn++}},return:function(){En=!0}};Sn[Pn]=function(){return this},Array.from(Sn,function(){throw 2})}catch(e){/* empty */}var bn,Tn,Cn,Mn=function(e,t){if(!t&&!En)return!1;var n=!1;try{var a={};a[Pn]=function(){return{next:function(){return{done:n=!0}}}},e(a)}catch(e){/* empty */}return n},In=nt("species"),xn=function(e,t){var n,a=Q(e).constructor;return void 0===a||null==(n=Q(a)[In])?t:bt(n)},On=M.location,An=M.setImmediate,Rn=M.clearImmediate,wn=M.process,Ln=M.MessageChannel,Dn=M.Dispatch,jn=0,Nn={},Bn="onreadystatechange",Un=function(e){// eslint-disable-next-line no-prototype-builtins
if(Nn.hasOwnProperty(e)){var t=Nn[e];delete Nn[e],t()}},Gn=function(e){return function(){Un(e)}},zn=function(e){Un(e.data)},Hn=function(e){M.postMessage(e+"",On.protocol+"//"+On.host)};An&&Rn||(An=function(e){for(var t=[],n=1;arguments.length>n;)t.push(arguments[n++]);return Nn[++jn]=function(){("function"==typeof e?e:Function(e)).apply(void 0,t)},bn(jn),jn},Rn=function(e){delete Nn[e]},"process"==j(wn)?bn=function(e){wn.nextTick(Gn(e))}:Dn&&Dn.now?bn=function(e){Dn.now(Gn(e))}:Ln?(Tn=new Ln,Cn=Tn.port2,Tn.port1.onmessage=zn,bn=Tt(Cn.postMessage,Cn,1)):!M.addEventListener||"function"!=typeof postMessage||M.importScripts||I(Hn)?Bn in $("script")?bn=function(e){mt.appendChild($("script"))[Bn]=function(){mt.removeChild(this),Un(e)}}:bn=function(e){setTimeout(Gn(e),0)}:(bn=Hn,M.addEventListener("message",zn,!1)));var Fn,Yn,Vn,Wn,$n,Xn,Kn,qn,Zn={set:An,clear:Rn},Qn=Te("navigator","userAgent")||"",Jn=Z.f,ea=Zn.set,ta=M.MutationObserver||M.WebKitMutationObserver,na=M.process,aa=M.Promise,oa="process"==j(na),ra=Jn(M,"queueMicrotask"),ia=ra&&ra.value;ia||(Fn=function(){var e,t;for(oa&&(e=na.domain)&&e.exit();Yn;){t=Yn.fn,Yn=Yn.next;try{t()}catch(e){throw Yn?Wn():Vn=void 0,e}}Vn=void 0,e&&e.enter()},oa?Wn=function(){na.nextTick(Fn)}:ta&&!/(iphone|ipod|ipad).*applewebkit/i.test(Qn)?($n=!0,Xn=document.createTextNode(""),new ta(Fn).observe(Xn,{characterData:!0}),Wn=function(){Xn.data=$n=!$n}):aa&&aa.resolve?(Kn=aa.resolve(void 0),qn=Kn.then,Wn=function(){qn.call(Kn,Fn)}):Wn=function(){ea.call(M,Fn)});var la,ca,da,sa,ga=ia||function(e){var t={fn:e,next:void 0};Vn&&(Vn.next=t),Yn||(Yn=t,Wn()),Vn=t},ua=function(e){var t,n;this.promise=new e(function(e,a){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=a}),this.resolve=bt(t),this.reject=bt(n)},pa={f:function(e){return new ua(e)}},ha=function(e,t){if(Q(e),z(t)&&t.constructor===e)return t;var n=pa.f(e),a=n.resolve;return a(t),n.promise},ma=function(e,t){var n=M.console;n&&n.error&&(1===arguments.length?n.error(e):n.error(e,t))},va=function(e){try{return{error:!1,value:e()}}catch(e){return{error:!0,value:e}}},fa=Zn.set,ya=nt("species"),_a="Promise",Pa=Ee.get,Ea=Ee.set,ka=Ee.getterFor(_a),Sa=ln,ba=M.TypeError,Ta=M.document,Ca=M.process,Ma=M.fetch,Ia=Ca&&Ca.versions,xa=Ia&&Ia.v8||"",Oa=pa.f,Aa=Oa,Ra="process"==j(Ca),wa=!!(Ta&&Ta.createEvent&&M.dispatchEvent),La="unhandledrejection",Da=0,ja=1,Na=1,Ba=2,Ua=$e(_a,function(){// correct subclassing with @@species support
var e=Sa.resolve(1),t=function(){/* empty */},n=(e.constructor={})[ya]=function(e){e(t,t)};// unhandled rejections tracking support, NodeJS Promise without it fails @@species test
return!((Ra||"function"==typeof PromiseRejectionEvent)&&(!!1||e["finally"])&&e.then(t)instanceof n// v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
// https://bugs.chromium.org/p/chromium/issues/detail?id=830565
// we can't detect it synchronously, so just check versions
&&0!==xa.indexOf("6.6")&&-1===Qn.indexOf("Chrome/66"))}),Ga=Ua||!Mn(function(e){Sa.all(e)["catch"](function(){/* empty */})}),za=function(e){var t;return!!(z(e)&&"function"==typeof(t=e.then))&&t},Ha=function(e,t,n){if(!t.notified){t.notified=!0;var a=t.reactions;ga(function(){// variable length - can't use forEach
for(var o=t.value,r=t.state==ja,i=0;a.length>i;){var l,c,d,s=a[i++],g=r?s.ok:s.fail,u=s.resolve,p=s.reject,h=s.domain;try{g?(!r&&(t.rejection===Ba&&Wa(e,t),t.rejection=Na),!0===g?l=o:(h&&h.enter(),l=g(o),h&&(h.exit(),d=!0)),l===s.promise?p(ba("Promise-chain cycle")):(c=za(l))?c.call(l,u,p):u(l)):p(o)}catch(e){h&&!d&&h.exit(),p(e)}}t.reactions=[],t.notified=!1,n&&!t.rejection&&Ya(e,t)})}},Fa=function(e,t,n){var a,o;wa?(a=Ta.createEvent("Event"),a.promise=t,a.reason=n,a.initEvent(e,!1,!0),M.dispatchEvent(a)):a={promise:t,reason:n},(o=M["on"+e])?o(a):e===La&&ma("Unhandled promise rejection",n)},Ya=function(e,t){fa.call(M,function(){var n,a=t.value,o=Va(t);if(o&&(n=va(function(){Ra?Ca.emit("unhandledRejection",a,e):Fa(La,e,a)}),t.rejection=Ra||Va(t)?Ba:Na,n.error))throw n.value})},Va=function(e){return e.rejection!==Na&&!e.parent},Wa=function(e,t){fa.call(M,function(){Ra?Ca.emit("rejectionHandled",e):Fa("rejectionhandled",e,t.value)})},$a=function(e,t,n,a){return function(o){e(t,n,o,a)}},Xa=function(e,t,n,a){t.done||(t.done=!0,a&&(t=a),t.value=n,t.state=2,Ha(e,t,!0))},Ka=function(e,t,n,a){if(!t.done){t.done=!0,a&&(t=a);try{if(e===n)throw ba("Promise can't be resolved itself");var o=za(n);o?ga(function(){var a={done:!1};try{o.call(n,$a(Ka,e,a,t),$a(Xa,e,a,t))}catch(n){Xa(e,a,n,t)}}):(t.value=n,t.state=ja,Ha(e,t,!1))}catch(n){Xa(e,{done:!1},n,t)}}};Ua&&(Sa=function(e){gn(this,Sa,_a),bt(e),la.call(this);var t=Pa(this);try{e($a(Ka,this,t),$a(Xa,this,t))}catch(e){Xa(this,t,e)}},la=function(){Ea(this,{type:_a,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:Da,value:void 0})},la.prototype=function(e,t,n){for(var a in t)ke(e,a,t[a],n);return e}(Sa.prototype,{// `Promise.prototype.then` method
// https://tc39.github.io/ecma262/#sec-promise.prototype.then
then:function(e,t){var n=ka(this),a=Oa(xn(this,Sa));return a.ok="function"!=typeof e||e,a.fail="function"==typeof t&&t,a.domain=Ra?Ca.domain:void 0,n.parent=!0,n.reactions.push(a),n.state!=Da&&Ha(this,n,!1),a.promise},// `Promise.prototype.catch` method
// https://tc39.github.io/ecma262/#sec-promise.prototype.catch
catch:function(e){return this.then(void 0,e)}}),ca=function(){var e=new la,t=Pa(e);this.promise=e,this.resolve=$a(Ka,e,t),this.reject=$a(Xa,e,t)},pa.f=Oa=function(e){return e===Sa||e===da?new ca(e):Aa(e)},"function"==typeof ln&&(sa=ln.prototype.then,ke(ln.prototype,"then",function(e,t){var n=this;return new Sa(function(e,t){sa.call(n,e,t)}).then(e,t)}),"function"==typeof Ma&&Ke({global:!0,enumerable:!0,forced:!0},{// eslint-disable-next-line no-unused-vars
fetch:function(){return ha(Sa,Ma.apply(M,arguments))}}))),Ke({global:!0,wrap:!0,forced:Ua},{Promise:Sa}),function(e,t,n){e&&!Y(e=n?e:e.prototype,dn)&&cn(e,dn,{configurable:!0,value:t})}(Sa,_a,!1),function(e){var t=Te(e),n=te.f;x&&t&&!t[sn]&&n(t,sn,{configurable:!0,get:function(){return this}})}(_a),da=Se[_a],Ke({target:_a,stat:!0,forced:Ua},{// `Promise.reject` method
// https://tc39.github.io/ecma262/#sec-promise.reject
reject:function(e){var t=Oa(this);return t.reject.call(void 0,e),t.promise}}),Ke({target:_a,stat:!0,forced:Ua},{// `Promise.resolve` method
// https://tc39.github.io/ecma262/#sec-promise.resolve
resolve:function(e){return ha(this,e)}}),Ke({target:_a,stat:!0,forced:Ga},{// `Promise.all` method
// https://tc39.github.io/ecma262/#sec-promise.all
all:function(e){var t=this,n=Oa(t),a=n.resolve,o=n.reject,r=va(function(){var n=bt(t.resolve),r=[],i=0,l=1;_n(e,function(e){var c=i++,d=!1;r.push(void 0),l++,n.call(t,e).then(function(e){d||(d=!0,r[c]=e,--l||a(r))},o)}),--l||a(r)});return r.error&&o(r.value),n.promise},// `Promise.race` method
// https://tc39.github.io/ecma262/#sec-promise.race
race:function(e){var t=this,n=Oa(t),a=n.reject,o=va(function(){var o=bt(t.resolve);_n(e,function(e){o.call(t,e).then(n.resolve,a)})});return o.error&&a(o.value),n.promise}});var qa=nt("match"),Za=function(e){var t;return z(e)&&(void 0===(t=e[qa])?"RegExp"==j(e):!!t)},Qa=function(e){if(Za(e))throw TypeError("The method doesn't accept regular expressions");return e},Ja=nt("match");// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
Ke({target:"String",proto:!0,forced:!function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[Ja]=!1,"/./"[e](t)}catch(e){/* empty */}}return!1}("includes")},{includes:function(e/* , position = 0 */){return!!~(U(this)+"").indexOf(Qa(e),1<arguments.length?arguments[1]:void 0)}});// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
var eo={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0};for(var to in eo){var no=M[to],ao=no&&no.prototype;// some Chrome versions have non-configurable methods on DOMTokenList
if(ao&&ao.forEach!==At)try{ne(ao,"forEach",At)}catch(e){ao.forEach=At}}var oo=[].slice,ro=/MSIE .\./.test(Qn),io=function(e){return function(t,n/* , ...arguments */){var a=2<arguments.length,o=a?oo.call(arguments,2):void 0;return e(a?function(){("function"==typeof t?t:Function(t)).apply(this,o)}:t,n)}};Ke({global:!0,bind:!0,forced:ro},{// `setTimeout` method
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
setTimeout:io(M.setTimeout),// `setInterval` method
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
setInterval:io(M.setInterval)});var lo="undefined"!=typeof window,co=lo&&window.navigator.userAgent.toLowerCase(),so=co&&/msie|trident/.test(co),go=/*#__PURE__*/function(){var n=Math.PI;// 支持的交互模式枚举
// 支持的图片类型枚举
// 支持的画笔模式枚举
// 默认宽度
// 默认高度
function e(n,a){t(this,e),this._init(n,a),this.manualMount||this.mount()}/**
	   * 初始化
	   * @param {HTMLElement|String} container 容器
	   * @param {Object} options 选项
	   */return a(e,[{key:"_init",value:function(t,n){var a=this;if(!t)throw new Error("el\u4E3A\u5FC5\u586B\u9879");this.container="string"==typeof t?document.querySelector(t):t,this._defaultOptions={size:[],// canvas尺寸
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
onPaintEnd:null,// 绘制一笔结束的回调
penMode:"empty",// 画笔模式
minScale:1,// 最小缩放比例
maxScale:3// 最大缩放比例
},this.options=i({},this._defaultOptions,{},n);var o=this.options,r=o.size,d=o.className,s=o.manualMount,g=o.maxRevokeSteps,u=o.interactiveMode,p=o.penColor,h=o.penWidth,m=o.bgImgURL,v=o.bgImgRotate,f=o.bgColor,y=o.onRevokeStackChange,_=o.onPaintEnd,P=o.penMode,E=o.minScale,k=o.maxScale,S=l(r,2),b=S[0],T=S[1];// 尺寸未传，则使用容器的尺寸
this.setSize([null==b?e.DEFAULT_WIDTH:b,null==T?e.DEFAULT_HEIGHT:T]),this.manualMount=s,this.revokeStack=[],this.MAX_REVOKE_STEPS=this._getLawfulMaxRevokeSteps(g),this.isPainting=!1,this.lastPaintPoint=null,this.isDraging=!1,this.lastDragPoint=null,this.dragTransformX=0,this.dragTransformY=0,this.penMode=e.PEN_MODE_ENUM.includes(P)?P:"empty",this.interactiveMode=e.INTERACTIVE_MODE_ENUM.includes(u)?u:"mouse",this.eventList=this._getEventList(),this.setPenStyle({color:p,width:h}),this.bgImgURL=m,this.bgColor=f,this.bgImgRotate=this._getLawfulRotateAngle(v),this.className=d,m?this._getImageFromURL(m).then(function(e){a._bgImgObject=e,a.originalSize=[e.width,e.height],a._drawBg.apply(a,[e].concat(c(a.originalSize)))}).catch(function(e){console.log(e),a._bgImgObject=null}):this._bgImgObject=null,this.onRevokeStackChange=y,this.onPaintEnd=_,this.paintCount=0,this.minScale=E,this.maxScale=k,this._initScale()}/**
	     * 获取事件映射列表
	     */},{key:"_getEventList",value:function(){return this._handlePointerStartBinded||(this._handlePointerStartBinded=this._handlePointerStart.bind(this)),this._handlePointerMoveBinded||(this._handlePointerMoveBinded=this._handlePointerMove.bind(this)),this._handlePointerEndBinded||(this._handlePointerEndBinded=this._handlePointerEnd.bind(this)),this._handlePointerLeaveBinded||(this._handlePointerLeaveBinded=this._handlePointerLeave.bind(this)),this._handlePointerCancelBinded||(this._handlePointerCancelBinded=this._handlePointerCancel.bind(this)),[{pointerType:"mouse",action:"start",name:"mousedown",handler:this._handlePointerStartBinded},{pointerType:"mouse",action:"move",name:"mousemove",handler:this._handlePointerMoveBinded},{pointerType:"mouse",action:"end",name:"mouseup",handler:this._handlePointerEndBinded},{pointerType:"mouse",action:"leave",name:"mouseleave",handler:this._handlePointerLeaveBinded},{pointerType:"touch",action:"start",name:"touchstart",handler:this._handlePointerStartBinded},{pointerType:"touch",action:"move",name:"touchmove",handler:this._handlePointerMoveBinded},{pointerType:"touch",action:"end",name:"touchend",handler:this._handlePointerEndBinded},{pointerType:"touch",action:"cancel",name:"touchcancel",handler:this._handlePointerCancelBinded}]}/**
	     * 绑定当前模式对应动作的所有事件
	     * @param {String} action 动作
	     * @returns void
	     */},{key:"_bindCurInteractiveModeEvents",value:function(e){var t=e.action;if(this.el){var n=this._getPointerType(this.interactiveMode),a={pointerType:n,action:t};this._cleanCurInteractiveModeEvents(a),this._bindEvent(a)}}/**
	     * 绑定符合特定条件的事件
	     * @param {Object} condition 过滤条件
	     * @returns void
	     */},{key:"_bindEvent",value:function(){var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(this.el){var n=this._getEventItems(t);n&&n.length&&n.forEach(function(t){var n=t.name,a=t.handler;return e.el.addEventListener(n,a,!1)})}}/**
	     * 获取模式对应的指针类型
	     * @param {string} mode 模式
	     * @returns 类型字符串
	     */},{key:"_getPointerType",value:function(e){return"both"===e?"":"touch"===e?"touch":"mouse"}/**
	     * 过滤出符合条件的EventItems
	     * @param {String} mode 模式
	     * @param {String} action 动作
	     * @returns EventItems数组
	     */},{key:"_getEventItems",value:function(e){var t=e.mode,n=e.action,a=function(){return!0};// 默认全量返回
return t&&n?a=function(e){return e.mode===t&&e.action===n}:t&&!n?a=function(e){return e.mode===t}:!t&&n&&(a=function(e){return e.action===n}),this.eventList.filter(a)}/**
	     * 清除当前模式对应动作的所有事件
	     * @param {String} action 动作
	     * @returns void
	     */},{key:"_cleanCurInteractiveModeEvents",value:function(e){var t=e.action;if(this.el){var n=this._getPointerType(this.interactiveMode);this._cleanEvent({pointerType:n,action:t})}}/**
	     * 清除符合特定条件的事件
	     * @param {Object} condition 过滤条件
	     * @returns void
	     */},{key:"_cleanEvent",value:function(){var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(this.el){var n=this._getEventItems(t);n&&n.length&&n.forEach(function(t){var n=t.name,a=t.handler;return e.el.removeEventListener(n,a,!1)})}}/**
	     * 处理指针开始
	     * @param {MouseEvent|TouchEvent} e 事件对象
	     * @returns void
	     */},{key:"_handlePointerStart",value:function(t){console.log("_handlePointerStart"),"empty"===this.penMode||("paint"===this.penMode&&this._handlePaintStart(t),"drag"===this.penMode&&this._handleDragStart(t),this._bindCurInteractiveModeEvents({action:"move"}),this._bindCurInteractiveModeEvents({action:"end"}),this._bindCurInteractiveModeEvents({action:"leave"}))}/**
	     * 处理绘制开始
	     */},{key:"_handlePaintStart",value:function(t){this.isPainting=!0,this.lastPaintPoint=this._getPointOffset(t),this.ctx&&this._saveImageData("paint",this.paintCount,this.ctx.getImageData(0,0,this.width,this.height)),this._drawCircle(this.lastPaintPoint.x,this.lastPaintPoint.y,this.penWidth/2,this.penColor)}/**
	     * 处理拖拽开始
	     */},{key:"_handleDragStart",value:function(t){console.log("drag start"),this.isDraging=!0,this.lastDragPoint=this._getPointOffset(t)}/**
	     * 处理指针移动
	     * @param {MouseEvent|TouchEvent} e 事件对象
	     * @returns void
	     */},{key:"_handlePointerMove",value:function(t){console.log("_handlePointerMove"),"empty"===this.penMode||("paint"===this.penMode&&this._handlePaintMove(t),"drag"===this.penMode&&this._handleDragMove(t))}/**
	     * 处理绘制移动
	     */},{key:"_handlePaintMove",value:function(t){if(this.isPainting){var e=this._getPointOffset(t),n=e.x,a=e.y;console.log(n,a);var o=this.lastPaintPoint,r=o.x,i=o.y;this._drawLine(r,i,n,a,this.penWidth,this.penColor),this.lastPaintPoint={x:n,y:a}}}/**
	     * 处理拖拽移动
	     */},{key:"_handleDragMove",value:function(t){if(console.log("drag move"),this.isDraging){var e=this._getPointOffset(t),n=e.x,a=e.y,o=this.lastDragPoint,r=o.x,i=o.y;this.dragTransformX+=n-r,this.dragTransformY+=a-i,this._setCanvasTransform(this.dragTransformX,this.dragTransformY,this.scale)}}/**
	     * 处理指针结束
	     * @param {MouseEvent|TouchEvent} e 事件对象
	     * @returns void
	     */},{key:"_handlePointerEnd",value:function(t){console.log("_handlePointerEnd"),"empty"===this.penMode||(// 解绑相关事件
"paint"===this.penMode&&this._handlePaintEnd(t),"drag"===this.penMode&&this._handleDragEnd(t),this._cleanCurInteractiveModeEvents({action:"move"}),this._cleanCurInteractiveModeEvents({action:"end"}),this._cleanCurInteractiveModeEvents({action:"leave"}))}/**
	     * 处理绘制结束
	     */},{key:"_handlePaintEnd",value:function(){this.isPainting=!1,this.paintCount++,this.onPaintEnd&&"function"==typeof this.onPaintEnd&&this.onPaintEnd(this.paintCount),console.log("_handlePointerEnd paintCount",this.paintCount)}/**
	     * 处理拖拽结束
	     */},{key:"_handleDragEnd",value:function(){console.log("drag end"),this.isDraging=!1}/**
	     * 处理指针离开
	     * @param {MouseEvent|TouchEvent} e 事件对象
	     * @returns void
	     */},{key:"_handlePointerLeave",value:function(t){console.log("_handlePointerLeave"),(this.isPainting||this.isDraging)&&this._handlePointerEnd(t)}/**
	     * 处理指针取消
	     * @param {MouseEvent|TouchEvent} e 事件对象
	     * @returns void
	     */},{key:"_handlePointerCancel",value:function(t){console.log("_handlePointerCancel"),(this.isPainting||this.isDraging)&&this._handlePointerEnd(t)}/**
	     * 设置canvas transform
	     * @param {Number} x 横轴
	     * @param {Number} y 纵轴
	     * @param {Number} scale 缩放比例
	     * @param {Boolean} transition 过度动画
	     */},{key:"_setCanvasTransform",value:function(e,t,n){var a=!!(3<arguments.length&&void 0!==arguments[3])&&arguments[3];if(this.el){var o="transform:scale(".concat(n,") translate3d(").concat(e,"px,").concat(t,"px,0);transform-origin:center;"),r=a?o+"transition:0.3s;":o;this.el.setAttribute("style",r)}}/**
	     * 设置画笔模式
	     * @param {String} mode 画笔模式
	     */},{key:"_setPenMode",value:function(t){e.PEN_MODE_ENUM.includes(t)&&(this.penMode=t)}/**
	     * 绘制圆形
	     * @param {Number} x 横轴
	     * @param {Number} y 纵轴
	     * @param {Number} radius 半径
	     * @param {String} color 画笔颜色
	     * @returns void
	     */},{key:"_drawCircle",value:function(e,t){var a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:3,o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:"red";this.ctx&&(this.ctx.save(),this.ctx.fillStyle=o,this.ctx.beginPath(),this.ctx.arc(e,t,a,0,360*(n/180),!1),this.ctx.fill(),this.ctx.restore())}/**
	     * 绘制移动时的直线
	     * @param {Number} x1 起点x1
	     * @param {Number} y1 起点y1
	     * @param {Number} x2 终点x2
	     * @param {Number} y2 终点y2
	     * @param {Number} width 线条宽度
	     * @param {String} color 颜色
	     * @returns void
	     */},{key:"_drawLine",value:function(e,t,n,a){var o=4<arguments.length&&void 0!==arguments[4]?arguments[4]:6,r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:"red";this.ctx&&(this.ctx.save(),this.ctx.strokeStyle=r,this.ctx.lineWidth=o,this.ctx.lineCap="round",this.ctx.lineJoin="round",this.ctx.beginPath(),this.ctx.moveTo(e,t),this.ctx.lineTo(n,a),this.ctx.stroke(),this.ctx.restore())}/**
	     * 获取事件相对触发对象的偏移值
	     * @param {MouseEvent|TouchEvent} e 事件对象
	     * @returns 偏移值对象
	     */},{key:"_getPointOffset",value:function(t){if(t instanceof MouseEvent)return{x:t.offsetX,y:t.offsetY};if(t instanceof TouchEvent){var e=t.touches,n=t.target,a=e[0],o=a.clientX,r=a.clientY,i=n.getBoundingClientRect(),l=i.left,c=i.top;return{x:o-l,y:r-c}}}/**
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
	     */},{key:"_setDOMSize",value:function(e){var t=l(e,2),n=t[0],a=t[1];null!=n&&this.el&&(this.el.width=n),null!=a&&this.el&&(this.el.height=a)}/**
	     * 获取绘图上下文
	     * @returns canvas context
	     */},{key:"_getCtx",value:function(){return this.el&&this.el.getContext&&this.el.getContext("2d")}/**
	     * 单步撤销
	     * @returns void
	     */},{key:"_revoke",value:function(){if(this.ctx&&this.revokeStack&&this.revokeStack.length){var e=this.revokeStack.pop(),t=e.imageData,n=e.paintCount;this.ctx.putImageData(t,0,0),this.paintCount=n,this.onRevokeStackChange&&"function"==typeof this.onRevokeStackChange&&this.onRevokeStackChange(this.revokeStack),console.log("_revoke onRevokeStackChange",this.revokeStack,n)}}/**
	     * 从url获取图片
	     * @param {String} imgURL 图片url，支持base64
	     * @returns void
	     */},{key:"_getImageFromURL",value:function(e){return new Promise(function(t,n){if(!/^(http[s]?)|(data:image)/.test(e))return void n(new Error("\u56FE\u7247url\u683C\u5F0F\u4E0D\u6B63\u786E"));var a=new Image;a.src=e,a.onload=function(){t(a)},a.onerror=n,(a.complete||void 0===a.complete)&&(a.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",a.src=e)})}/**
	     * 绘制背景底图
	     * @param {CanvasImageSource} imgObject 图像对象
	     * @param {Number} w 宽
	     * @param {Number} h 高
	     * @returns void
	     */},{key:"_drawBg",value:function(e,t,a){if(e&&this.ctx&&this.ctx.drawImage&&t&&a&&!(0>=t)&&!(0>=a)){var o=0,r=t,i=a,l=0===this.bgImgRotate||180===this.bgImgRotate?-this.width/2:-this.height/2,c=0===this.bgImgRotate||180===this.bgImgRotate?-this.height/2:-this.width/2,d=0===this.bgImgRotate||180===this.bgImgRotate?this.width:this.height,s=0===this.bgImgRotate||180===this.bgImgRotate?this.height:this.width;this.ctx.save(),this.ctx.translate(this.width/2,this.height/2),this.ctx.rotate(n/180*this.bgImgRotate),console.log("\u65CB\u8F6C\u53C2\u6570:",0,o,r,i,l,c,d,s,this.bgImgRotate),this.ctx.drawImage(e,0,o,r,i,l,c,d,s),this.ctx.restore()}}/**
	     * 获取合法角度值(逆时针旋转角度记录为正值，-90度 记录为270；450记录为90,10度记录为0,55度记录为90)
	     * @param {Number} angle 角度
	     * @returns 合法角度值
	     */},{key:"_getLawfulRotateAngle",value:function(e){var t=Math.abs;if(!("number"!=typeof e||isNaN(e))){var n=e%360,a=0>n?n+360:n,o=45<=a%90?90*P(a/90)%360:90*_(a/90)%360;// 可能存在-0
return t(o)}}/**
	     * 初始化缩放
	     */},{key:"_initScale",value:function(){this.scale=1,this.container&&(this.container.style.overflow="hidden")}/**
	     * 处理缩放比例改变
	     */},{key:"_handleScaleChange",value:function(){this.el&&this._setCanvasTransform(this.dragTransformX,this.dragTransformY,this.scale)}/**
	     * scale + 0.1
	     */},{key:"makeScaleAddZeroPointOne",value:function(){var e=this.scale+.1;this.setScale(e)}/**
	     * scale - 0.1
	     */},{key:"makeScaleSubtractZeroPointOne",value:function(){var e=this.scale-.1;this.setScale(e)}/**
	     * 重置缩放比例、位置
	     */},{key:"reset",value:function(){this.dragTransformX=this.dragTransformY=0,this.scale=1,this._setCanvasTransform(this.dragTransformX,this.dragTransformY,this.scale,!0)}/**
	     * 设置画笔模式为绘制模式
	     */},{key:"setPenModePaint",value:function(){this._setPenMode("paint")}/**
	     * 设置画笔模式为拖拽模式
	     */},{key:"setPenModeDrag",value:function(){this._setPenMode("drag")}/**
	     * 重置画笔模式为空
	     */},{key:"setPenModeEmpty",value:function(){this._setPenMode("empty")}/**
	     * 设置缩放比例
	     * @param {Number} scale 缩放比例
	     */},{key:"setScale",value:function(e){var t=parseFloat(e);isNaN(t)||(t<this.minScale&&(t=this.minScale),t>this.maxScale&&(t=this.maxScale),this.scale=t,this._handleScaleChange())}/**
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
	     */},{key:"setSize",value:function(e){var t=l(e,2),n=t[0],a=t[1];n&&(this.width=n),a&&(this.height=a),this._setDOMSize([n,a])}/**
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
	     */},{key:"mount",value:function(){this.el||(this.el=this._makeCanvas()),this.ctx||(this.ctx=this._getCtx()),this._setDOMSize([this.width,this.height]),this.setClassName(this.className),this._bindCurInteractiveModeEvents({action:"start"}),this.container.appendChild(this.el)}/**
	     * 设置背景
	     * @param {CanvasImageSource|String} urlOrObject 需要绘制的图像对象(HTMLImageElement、SVGImageElement、HTMLVideoElement、HTMLCanvasElement、ImageBitmap、OffscreenCanvas)或图像url
	     * @param {Number} originalWidth 原图像宽度。当无法从urlOrObject直接获取原始尺寸时需要手动提供原始尺寸
	     * @param {Number} originalHeight 原图像高度
	     * @returns void
	     */},{key:"setBgImg",value:function(e,t,n){var a=this;// TODO:此处可能需要保存状态
"string"==typeof e&&/^(http[s]?)|(data:image)/.test(e)?this._getImageFromURL(e).then(function(e){a._bgImgObject=e,a.originalSize=[t||e.width,n||e.height],a._drawBg.apply(a,[e].concat(c(a.originalSize)))}).catch(function(e){console.log(e),a._bgImgObject=null}):(e!==this._bgImgObject&&(this._bgImgObject=e),this.originalSize=[t||this.width,n||this.height],this._drawBg.apply(this,[e].concat(c(this.originalSize))))}/**
	     * 获取dataURL
	     * @param {String} type 图片类型
	     * @param {Number} compressRate 压缩比率
	     * @returns dataURL
	     */},{key:"getDataUrl",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"png",n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1;if(this.el&&e.IMG_TYPE_ENUM.includes(t)&&"number"==typeof n&&!isNaN(n)){.3>n&&(n=.3),1<n&&(n=1);var a="image/".concat(t);return this.el.toDataURL(a,n)}}/**
	     * 获取Blob
	     * @param {String} type 图片类型
	     * @param {Number} compressRate 压缩比率
	     * @returns promise resolved a blob
	     */},{key:"getBlob",value:function(){var t=this,n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"png",a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1;if(this.el&&e.IMG_TYPE_ENUM.includes(n)&&"number"==typeof a&&!isNaN(a)){.3>a&&(a=.3),1<a&&(a=1);var o="image/".concat(n);return new Promise(function(e){t.el.toBlob(e,o,a)})}}/**
	     * 获取File
	     * @param {String} type 图片类型
	     * @param {Number} compressRate 压缩比率
	     * @returns promise resolved a file
	     */},{key:"getFile",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"drawingBoard",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"png",n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1;return this.getBlob(t,n).then(function(t){return m(t,e)})}/**
	     * 下载图片
	     * @param {String} type 图片类型
	     * @param {Number} compressRate 压缩比率，默认原图输出
	     * @returns void
	     */},{key:"download",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"png",n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1,a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"drawing-board";if(e.IMG_TYPE_ENUM.includes(t)&&"number"==typeof n&&!isNaN(n)){.3>n&&(n=.3),1<n&&(n=1);var o=this.getDataUrl(t,n);if(o){var r=document.createElement("a");document.body.appendChild(r),r.href=o,r.download="".concat(a,"-").concat(new Date().getTime()),r.target="_blank",r.click();var i=setTimeout(function(){document.body.removeChild(r),r=null,clearTimeout(i),i=null},200)}}}}]),e}();return o(go,"INTERACTIVE_MODE_ENUM",["mouse","touch","both"]),o(go,"IMG_TYPE_ENUM",["jpg","jpeg","png","webp"]),o(go,"PEN_MODE_ENUM",["paint","drag","empty"]),o(go,"DEFAULT_WIDTH",300),o(go,"DEFAULT_HEIGHT",150),go});
