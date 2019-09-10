var commonjsGlobal="undefined"==typeof globalThis?"undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?{}:self:global:window:globalThis;function createCommonjsModule(e,t){return t={exports:{}},e(t,t.exports),t.exports}var set,get,has$1,O="object",check=function(e){return e&&e.Math==Math&&e},global_1=// eslint-disable-next-line no-undef
check(typeof globalThis=="object"&&globalThis)||check(typeof window=="object"&&window)||check(typeof self=="object"&&self)||check(typeof commonjsGlobal=="object"&&commonjsGlobal)||// eslint-disable-next-line no-new-func
Function("return this")(),fails=function(e){try{return!!e()}catch(e){return!0}},descriptors=!fails(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),nativePropertyIsEnumerable={}.propertyIsEnumerable,getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,NASHORN_BUG=getOwnPropertyDescriptor&&!nativePropertyIsEnumerable.call({1:2},1),f=NASHORN_BUG?function(e){var t=getOwnPropertyDescriptor(this,e);return!!t&&t.enumerable}:nativePropertyIsEnumerable,objectPropertyIsEnumerable={f:f},createPropertyDescriptor=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},toString={}.toString,classofRaw=function(e){return toString.call(e).slice(8,-1)},split="".split,indexedObject=fails(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins
return!Object("z").propertyIsEnumerable(0)})?function(e){return"String"==classofRaw(e)?split.call(e,""):Object(e)}:Object,requireObjectCoercible=function(e){if(e==null)throw TypeError("Can't call method on "+e);return e},toIndexedObject=function(e){return indexedObject(requireObjectCoercible(e))},isObject=function(e){return"object"==typeof e?null!==e:"function"==typeof e},toPrimitive=function(e,t){if(!isObject(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!isObject(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!isObject(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!isObject(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")},hasOwnProperty={}.hasOwnProperty,has=function(e,t){return hasOwnProperty.call(e,t)},document$1=global_1.document,EXISTS=isObject(document$1)&&isObject(document$1.createElement),documentCreateElement=function(e){return EXISTS?document$1.createElement(e):{}},ie8DomDefine=!descriptors&&!fails(function(){return 7!=Object.defineProperty(documentCreateElement("div"),"a",{get:function(){return 7}}).a}),nativeGetOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,f$1=descriptors?nativeGetOwnPropertyDescriptor:function(e,t){if(e=toIndexedObject(e),t=toPrimitive(t,!0),ie8DomDefine)try{return nativeGetOwnPropertyDescriptor(e,t)}catch(e){/* empty */}return has(e,t)?createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(e,t),e[t]):void 0},objectGetOwnPropertyDescriptor={f:f$1},anObject=function(e){if(!isObject(e))throw TypeError(e+" is not an object");return e},nativeDefineProperty=Object.defineProperty,f$2=descriptors?nativeDefineProperty:function(e,t,n){if(anObject(e),t=toPrimitive(t,!0),anObject(n),ie8DomDefine)try{return nativeDefineProperty(e,t,n)}catch(e){/* empty */}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e},objectDefineProperty={f:f$2},hide=descriptors?function(e,t,n){return objectDefineProperty.f(e,t,createPropertyDescriptor(1,n))}:function(e,t,n){return e[t]=n,e},setGlobal=function(e,t){try{hide(global_1,e,t)}catch(n){global_1[e]=t}return t},isPure=!1,shared=createCommonjsModule(function(e){var t=global_1["__core-js_shared__"]||setGlobal("__core-js_shared__",{});(e.exports=function(e,n){return t[e]||(t[e]=n===void 0?{}:n)})("versions",[]).push({version:"3.2.1",mode:"global",copyright:"\xA9 2019 Denis Pushkarev (zloirock.ru)"})}),functionToString=shared("native-function-to-string",Function.toString),WeakMap=global_1.WeakMap,nativeWeakMap="function"==typeof WeakMap&&/native code/.test(functionToString.call(WeakMap)),id=0,postfix=Math.random(),uid=function(e){return"Symbol("+((e===void 0?"":e)+"")+")_"+(++id+postfix).toString(36)},keys=shared("keys"),sharedKey=function(e){return keys[e]||(keys[e]=uid(e))},hiddenKeys={},WeakMap$1=global_1.WeakMap,enforce=function(e){return has$1(e)?get(e):set(e,{})},getterFor=function(e){return function(t){var n;if(!isObject(t)||(n=get(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}};if(nativeWeakMap){var store=new WeakMap$1,wmget=store.get,wmhas=store.has,wmset=store.set;set=function(e,t){return wmset.call(store,e,t),t},get=function(e){return wmget.call(store,e)||{}},has$1=function(e){return wmhas.call(store,e)}}else{var STATE=sharedKey("state");hiddenKeys[STATE]=!0,set=function(e,t){return hide(e,STATE,t),t},get=function(e){return has(e,STATE)?e[STATE]:{}},has$1=function(e){return has(e,STATE)}}var internalState={set:set,get:get,has:has$1,enforce:enforce,getterFor:getterFor},redefine=createCommonjsModule(function(e){var t=internalState.get,n=internalState.enforce,o=(functionToString+"").split("toString");shared("inspectSource",function(e){return functionToString.call(e)}),(e.exports=function(e,t,a,r){var i=!!r&&!!r.unsafe,l=!!r&&!!r.enumerable,c=!!r&&!!r.noTargetGet;return("function"==typeof a&&("string"==typeof t&&!has(a,"name")&&hide(a,"name",t),n(a).source=o.join("string"==typeof t?t:"")),e===global_1)?void(l?e[t]=a:setGlobal(t,a)):void(i?!c&&e[t]&&(l=!0):delete e[t],l?e[t]=a:hide(e,t,a))})(Function.prototype,"toString",function(){return"function"==typeof this&&t(this).source||functionToString.call(this)})}),path=global_1,aFunction=function(e){return"function"==typeof e?e:void 0},getBuiltIn=function(e,t){return 2>arguments.length?aFunction(path[e])||aFunction(global_1[e]):path[e]&&path[e][t]||global_1[e]&&global_1[e][t]},ceil=Math.ceil,floor=Math.floor,toInteger=function(e){return isNaN(e=+e)?0:(0<e?floor:ceil)(e)},min=Math.min,toLength=function(e){return 0<e?min(toInteger(e),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},max=Math.max,min$1=Math.min,toAbsoluteIndex=function(e,t){var n=toInteger(e);return 0>n?max(n+t,0):min$1(n,t)},createMethod=function(e){return function(t,n,o){var a,r=toIndexedObject(t),i=toLength(r.length),l=toAbsoluteIndex(o,i);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare
if(e&&n!=n){for(;i>l;)// eslint-disable-next-line no-self-compare
if(a=r[l++],a!=a)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;i>l;l++)if((e||l in r)&&r[l]===n)return e||l||0;return!e&&-1}},arrayIncludes={// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
includes:createMethod(!0),// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
indexOf:createMethod(!1)},indexOf=arrayIncludes.indexOf,objectKeysInternal=function(e,t){var n,o=toIndexedObject(e),a=0,r=[];for(n in o)!has(hiddenKeys,n)&&has(o,n)&&r.push(n);// Don't enum bug & hidden keys
for(;t.length>a;)has(o,n=t[a++])&&(~indexOf(r,n)||r.push(n));return r},enumBugKeys=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],hiddenKeys$1=enumBugKeys.concat("length","prototype"),f$3=Object.getOwnPropertyNames||function(e){return objectKeysInternal(e,hiddenKeys$1)},objectGetOwnPropertyNames={f:f$3},f$4=Object.getOwnPropertySymbols,objectGetOwnPropertySymbols={f:f$4},ownKeys=getBuiltIn("Reflect","ownKeys")||function(e){var t=objectGetOwnPropertyNames.f(anObject(e)),n=objectGetOwnPropertySymbols.f;return n?t.concat(n(e)):t},copyConstructorProperties=function(e,t){for(var n,o=ownKeys(t),a=objectDefineProperty.f,r=objectGetOwnPropertyDescriptor.f,l=0;l<o.length;l++)n=o[l],has(e,n)||a(e,n,r(t,n))},replacement=/#|\.prototype\./,isForced=function(e,t){var n=data[normalize(e)];return!(n!=POLYFILL)||n!=NATIVE&&("function"==typeof t?fails(t):!!t)},normalize=isForced.normalize=function(e){return(e+"").replace(replacement,".").toLowerCase()},data=isForced.data={},NATIVE=isForced.NATIVE="N",POLYFILL=isForced.POLYFILL="P",isForced_1=isForced,getOwnPropertyDescriptor$1=objectGetOwnPropertyDescriptor.f,_export=function(e,t){var n,o,a,r,i,l,c=e.target,d=e.global,s=e.stat;if(o=d?global_1:s?global_1[c]||setGlobal(c,{}):(global_1[c]||{}).prototype,o)for(a in t){// contained in target
if(i=t[a],e.noTargetGet?(l=getOwnPropertyDescriptor$1(o,a),r=l&&l.value):r=o[a],n=isForced_1(d?a:c+(s?".":"#")+a,e.forced),!n&&void 0!==r){if(typeof i==typeof r)continue;copyConstructorProperties(i,r)}// add a flag to not completely full polyfills
(e.sham||r&&r.sham)&&hide(i,"sham",!0),redefine(o,a,i,e)}},isArray=Array.isArray||function(e){return"Array"==classofRaw(e)},toObject=function(e){return Object(requireObjectCoercible(e))},createProperty=function(e,t,n){var o=toPrimitive(t);o in e?objectDefineProperty.f(e,o,createPropertyDescriptor(0,n)):e[o]=n},nativeSymbol=!!Object.getOwnPropertySymbols&&!fails(function(){// Chrome 38 Symbol has incorrect toString conversion
// eslint-disable-next-line no-undef
return!(Symbol()+"")}),Symbol$1=global_1.Symbol,store$1=shared("wks"),wellKnownSymbol=function(e){return store$1[e]||(store$1[e]=nativeSymbol&&Symbol$1[e]||(nativeSymbol?Symbol$1:uid)("Symbol."+e))},SPECIES=wellKnownSymbol("species"),arraySpeciesCreate=function(e,t){var n;return isArray(e)&&(n=e.constructor,"function"==typeof n&&(n===Array||isArray(n.prototype))?n=void 0:isObject(n)&&(n=n[SPECIES],null===n&&(n=void 0))),new(void 0===n?Array:n)(0===t?0:t)},SPECIES$1=wellKnownSymbol("species"),arrayMethodHasSpeciesSupport=function(e){return!fails(function(){var t=[],n=t.constructor={};return n[SPECIES$1]=function(){return{foo:1}},1!==t[e](Boolean).foo})},IS_CONCAT_SPREADABLE=wellKnownSymbol("isConcatSpreadable"),MAX_SAFE_INTEGER=9007199254740991,MAXIMUM_ALLOWED_INDEX_EXCEEDED="Maximum allowed index exceeded",IS_CONCAT_SPREADABLE_SUPPORT=!fails(function(){var e=[];return e[IS_CONCAT_SPREADABLE]=!1,e.concat()[0]!==e}),SPECIES_SUPPORT=arrayMethodHasSpeciesSupport("concat"),isConcatSpreadable=function(e){if(!isObject(e))return!1;var t=e[IS_CONCAT_SPREADABLE];return t===void 0?isArray(e):!!t},FORCED=!IS_CONCAT_SPREADABLE_SUPPORT||!SPECIES_SUPPORT;_export({target:"Array",proto:!0,forced:FORCED},{concat:function(){// eslint-disable-line no-unused-vars
var e,t,o,a,r,l=toObject(this),c=arraySpeciesCreate(l,0),d=0;for(e=-1,o=arguments.length;e<o;e++)if(r=-1===e?l:arguments[e],isConcatSpreadable(r)){if(a=toLength(r.length),d+a>MAX_SAFE_INTEGER)throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);for(t=0;t<a;t++,d++)t in r&&createProperty(c,d,r[t])}else{if(d>=MAX_SAFE_INTEGER)throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);createProperty(c,d++,r)}return c.length=d,c}});// `Array.prototype.fill` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
var arrayFill=function(e/* , start = 0, end = @length */){for(var t=toObject(this),n=toLength(t.length),o=arguments.length,a=toAbsoluteIndex(1<o?arguments[1]:void 0,n),r=2<o?arguments[2]:void 0,i=void 0===r?n:toAbsoluteIndex(r,n);i>a;)t[a++]=e;return t},objectKeys=Object.keys||function(e){return objectKeysInternal(e,enumBugKeys)},objectDefineProperties=descriptors?Object.defineProperties:function(e,t){anObject(e);for(var n,o=objectKeys(t),a=o.length,r=0;a>r;)objectDefineProperty.f(e,n=o[r++],t[n]);return e},html=getBuiltIn("document","documentElement"),IE_PROTO=sharedKey("IE_PROTO"),PROTOTYPE="prototype",Empty=function(){/* empty */},createDict=function(){// Thrash, waste and sodomy: IE GC bug
var e,t=documentCreateElement("iframe"),n=enumBugKeys.length,o="<",a="script",r=">";for(t.style.display="none",html.appendChild(t),t.src="java"+a+":"+"",e=t.contentWindow.document,e.open(),e.write(o+a+r+"document.F=Object"+o+"/"+a+r),e.close(),createDict=e.F;n--;)delete createDict[PROTOTYPE][enumBugKeys[n]];return createDict()},objectCreate=Object.create||function(e,t){var n;return null===e?n=createDict():(Empty[PROTOTYPE]=anObject(e),n=new Empty,Empty[PROTOTYPE]=null,n[IE_PROTO]=e),void 0===t?n:objectDefineProperties(n,t)};// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
hiddenKeys[IE_PROTO]=!0;var UNSCOPABLES=wellKnownSymbol("unscopables"),ArrayPrototype=Array.prototype;ArrayPrototype[UNSCOPABLES]==null&&hide(ArrayPrototype,UNSCOPABLES,objectCreate(null));// add a key to Array.prototype[@@unscopables]
var addToUnscopables=function(e){ArrayPrototype[UNSCOPABLES][e]=!0};// `Array.prototype.fill` method
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
_export({target:"Array",proto:!0},{fill:arrayFill}),addToUnscopables("fill");var aFunction$1=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function");return e},bindContext=function(e,t,n){return(aFunction$1(e),void 0===t)?e:0===n?function(){return e.call(t)}:1===n?function(n){return e.call(t,n)}:2===n?function(n,o){return e.call(t,n,o)}:3===n?function(n,o,a){return e.call(t,n,o,a)}:function()/* ...args */{return e.apply(t,arguments)}},push=[].push,createMethod$1=function(e){var t=1==e,n=4==e,o=6==e;return function(a,r,i,l){for(var c,d,s=toObject(a),g=indexedObject(s),u=bindContext(r,i,3),p=toLength(g.length),h=0,m=l||arraySpeciesCreate,f=t?m(a,p):2==e?m(a,0):void 0;p>h;h++)if((5==e||o||h in g)&&(c=g[h],d=u(c,h,s),e))if(t)f[h]=d;// map
else if(d)switch(e){case 3:return!0;// some
case 5:return c;// find
case 6:return h;// findIndex
case 2:push.call(f,c);// filter
}else if(n)return!1;// every
return o?-1:3==e||n?n:f}},arrayIteration={// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
forEach:createMethod$1(0),// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
map:createMethod$1(1),// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
filter:createMethod$1(2),// `Array.prototype.some` method
// https://tc39.github.io/ecma262/#sec-array.prototype.some
some:createMethod$1(3),// `Array.prototype.every` method
// https://tc39.github.io/ecma262/#sec-array.prototype.every
every:createMethod$1(4),// `Array.prototype.find` method
// https://tc39.github.io/ecma262/#sec-array.prototype.find
find:createMethod$1(5),// `Array.prototype.findIndex` method
// https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
findIndex:createMethod$1(6)},$filter=arrayIteration.filter;// optional / simple context binding
_export({target:"Array",proto:!0,forced:!arrayMethodHasSpeciesSupport("filter")},{filter:function(e/* , thisArg */){return $filter(this,e,1<arguments.length?arguments[1]:void 0)}});var sloppyArrayMethod=function(e,t){var n=[][e];return!n||!fails(function(){// eslint-disable-next-line no-useless-call,no-throw-literal
n.call(null,t||function(){throw 1},1)})},$forEach=arrayIteration.forEach,arrayForEach=sloppyArrayMethod("forEach")?function(e/* , thisArg */){return $forEach(this,e,1<arguments.length?arguments[1]:void 0)}:[].forEach;_export({target:"Array",proto:!0,forced:[].forEach!=arrayForEach},{forEach:arrayForEach});var $includes=arrayIncludes.includes;// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
_export({target:"Array",proto:!0},{includes:function(e/* , fromIndex = 0 */){return $includes(this,e,1<arguments.length?arguments[1]:void 0)}}),addToUnscopables("includes");var DatePrototype=Date.prototype,INVALID_DATE="Invalid Date",TO_STRING="toString",nativeDateToString=DatePrototype[TO_STRING],getTime=DatePrototype.getTime;new Date(NaN)+""!=INVALID_DATE&&redefine(DatePrototype,TO_STRING,function(){var e=getTime.call(this);// eslint-disable-next-line no-self-compare
return e===e?nativeDateToString.call(this):INVALID_DATE});var defineProperty=objectDefineProperty.f,FunctionPrototype=Function.prototype,FunctionPrototypeToString=FunctionPrototype.toString,nameRE=/^\s*function ([^ (]*)/,NAME="name";descriptors&&!(NAME in FunctionPrototype)&&defineProperty(FunctionPrototype,NAME,{configurable:!0,get:function(){try{return FunctionPrototypeToString.call(this).match(nameRE)[1]}catch(e){return""}}});var TO_STRING_TAG=wellKnownSymbol("toStringTag"),CORRECT_ARGUMENTS="Arguments"==classofRaw(function(){return arguments}()),tryGet=function(e,t){try{return e[t]}catch(e){/* empty */}},classof=function(e){var t,n,o;return e===void 0?"Undefined":null===e?"Null"// @@toStringTag case
:"string"==typeof(n=tryGet(t=Object(e),TO_STRING_TAG))?n// builtinTag case
:CORRECT_ARGUMENTS?classofRaw(t)// ES3 arguments fallback
:"Object"==(o=classofRaw(t))&&"function"==typeof t.callee?"Arguments":o},TO_STRING_TAG$1=wellKnownSymbol("toStringTag"),test={};// ES3 wrong here
test[TO_STRING_TAG$1]="z";// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
var objectToString=function(){return"[object "+classof(this)+"]"},ObjectPrototype=Object.prototype;objectToString!==ObjectPrototype.toString&&redefine(ObjectPrototype,"toString",objectToString,{unsafe:!0});var nativePromiseConstructor=global_1.Promise,redefineAll=function(e,t,n){for(var o in t)redefine(e,o,t[o],n);return e},defineProperty$1=objectDefineProperty.f,TO_STRING_TAG$2=wellKnownSymbol("toStringTag"),setToStringTag=function(e,t,n){e&&!has(e=n?e:e.prototype,TO_STRING_TAG$2)&&defineProperty$1(e,TO_STRING_TAG$2,{configurable:!0,value:t})},SPECIES$2=wellKnownSymbol("species"),setSpecies=function(e){var t=getBuiltIn(e),n=objectDefineProperty.f;descriptors&&t&&!t[SPECIES$2]&&n(t,SPECIES$2,{configurable:!0,get:function(){return this}})},anInstance=function(e,t,n){if(!(e instanceof t))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return e},iterators={},ITERATOR=wellKnownSymbol("iterator"),ArrayPrototype$1=Array.prototype,isArrayIteratorMethod=function(e){return e!==void 0&&(iterators.Array===e||ArrayPrototype$1[ITERATOR]===e)},ITERATOR$1=wellKnownSymbol("iterator"),getIteratorMethod=function(e){if(e!=null)return e[ITERATOR$1]||e["@@iterator"]||iterators[classof(e)]},callWithSafeIterationClosing=function(e,t,n,o){try{return o?t(anObject(n)[0],n[1]):t(n);// 7.4.6 IteratorClose(iterator, completion)
}catch(t){var a=e["return"];throw void 0!==a&&anObject(a.call(e)),t}},iterate_1=createCommonjsModule(function(e){var t=function(e,t){this.stopped=e,this.result=t},n=e.exports=function(e,n,o,a,r){var i,l,c,d,s,g,u=bindContext(n,o,a?2:1);if(r)i=e;else{if(l=getIteratorMethod(e),"function"!=typeof l)throw TypeError("Target is not iterable");// optimisation for array iterators
if(isArrayIteratorMethod(l)){for(c=0,d=toLength(e.length);d>c;c++)if(s=a?u(anObject(g=e[c])[0],g[1]):u(e[c]),s&&s instanceof t)return s;return new t(!1)}i=l.call(e)}for(;!(g=i.next()).done;)if(s=callWithSafeIterationClosing(i,u,g.value,a),s&&s instanceof t)return s;return new t(!1)};n.stop=function(e){return new t(!0,e)}}),ITERATOR$2=wellKnownSymbol("iterator"),SAFE_CLOSING=!1;try{var called=0,iteratorWithReturn={next:function(){return{done:!!called++}},return:function(){SAFE_CLOSING=!0}};// eslint-disable-next-line no-throw-literal
iteratorWithReturn[ITERATOR$2]=function(){return this},Array.from(iteratorWithReturn,function(){throw 2})}catch(e){/* empty */}var defer,channel,port,checkCorrectnessOfIteration=function(e,t){if(!t&&!SAFE_CLOSING)return!1;var n=!1;try{var o={};o[ITERATOR$2]=function(){return{next:function(){return{done:n=!0}}}},e(o)}catch(e){/* empty */}return n},SPECIES$3=wellKnownSymbol("species"),speciesConstructor=function(e,t){var n,o=anObject(e).constructor;return o===void 0||(n=anObject(o)[SPECIES$3])==null?t:aFunction$1(n)},location=global_1.location,set$1=global_1.setImmediate,clear=global_1.clearImmediate,process=global_1.process,MessageChannel=global_1.MessageChannel,Dispatch=global_1.Dispatch,counter=0,queue={},ONREADYSTATECHANGE="onreadystatechange",run=function(e){// eslint-disable-next-line no-prototype-builtins
if(queue.hasOwnProperty(e)){var t=queue[e];delete queue[e],t()}},runner=function(e){return function(){run(e)}},listener=function(e){run(e.data)},post=function(e){// old engines have not location.origin
global_1.postMessage(e+"",location.protocol+"//"+location.host)};set$1&&clear||(set$1=function(e){for(var t=[],n=1;arguments.length>n;)t.push(arguments[n++]);return queue[++counter]=function(){("function"==typeof e?e:Function(e)).apply(void 0,t)},defer(counter),counter},clear=function(e){delete queue[e]},"process"==classofRaw(process)?defer=function(e){process.nextTick(runner(e))}:Dispatch&&Dispatch.now?defer=function(e){Dispatch.now(runner(e))}:MessageChannel?(channel=new MessageChannel,port=channel.port2,channel.port1.onmessage=listener,defer=bindContext(port.postMessage,port,1)):!global_1.addEventListener||"function"!=typeof postMessage||global_1.importScripts||fails(post)?ONREADYSTATECHANGE in documentCreateElement("script")?defer=function(e){html.appendChild(documentCreateElement("script"))[ONREADYSTATECHANGE]=function(){html.removeChild(this),run(e)}}:defer=function(e){setTimeout(runner(e),0)}:(defer=post,global_1.addEventListener("message",listener,!1)));var flush,head,last,notify,toggle,node,promise,then,task={set:set$1,clear:clear},userAgent=getBuiltIn("navigator","userAgent")||"",getOwnPropertyDescriptor$2=objectGetOwnPropertyDescriptor.f,macrotask=task.set,MutationObserver=global_1.MutationObserver||global_1.WebKitMutationObserver,process$1=global_1.process,Promise$1=global_1.Promise,IS_NODE="process"==classofRaw(process$1),queueMicrotaskDescriptor=getOwnPropertyDescriptor$2(global_1,"queueMicrotask"),queueMicrotask=queueMicrotaskDescriptor&&queueMicrotaskDescriptor.value;queueMicrotask||(flush=function(){var e,t;for(IS_NODE&&(e=process$1.domain)&&e.exit();head;){t=head.fn,head=head.next;try{t()}catch(e){throw head?notify():last=void 0,e}}last=void 0,e&&e.enter()},IS_NODE?notify=function(){process$1.nextTick(flush)}:MutationObserver&&!/(iphone|ipod|ipad).*applewebkit/i.test(userAgent)?(toggle=!0,node=document.createTextNode(""),new MutationObserver(flush).observe(node,{characterData:!0}),notify=function(){node.data=toggle=!toggle}):Promise$1&&Promise$1.resolve?(promise=Promise$1.resolve(void 0),then=promise.then,notify=function(){then.call(promise,flush)}):notify=function(){// strange IE + webpack dev server bug - use .call(global)
macrotask.call(global_1,flush)});var Internal,OwnPromiseCapability,PromiseWrapper,nativeThen,microtask=queueMicrotask||function(e){var t={fn:e,next:void 0};last&&(last.next=t),head||(head=t,notify()),last=t},PromiseCapability=function(e){var t,n;this.promise=new e(function(e,o){if(t!==void 0||n!==void 0)throw TypeError("Bad Promise constructor");t=e,n=o}),this.resolve=aFunction$1(t),this.reject=aFunction$1(n)},f$5=function(e){return new PromiseCapability(e)},newPromiseCapability={f:f$5},promiseResolve=function(e,t){if(anObject(e),isObject(t)&&t.constructor===e)return t;var n=newPromiseCapability.f(e),o=n.resolve;return o(t),n.promise},hostReportErrors=function(e,t){var n=global_1.console;n&&n.error&&(1===arguments.length?n.error(e):n.error(e,t))},perform=function(e){try{return{error:!1,value:e()}}catch(e){return{error:!0,value:e}}},task$1=task.set,SPECIES$4=wellKnownSymbol("species"),PROMISE="Promise",getInternalState=internalState.get,setInternalState=internalState.set,getInternalPromiseState=internalState.getterFor(PROMISE),PromiseConstructor=nativePromiseConstructor,TypeError$1=global_1.TypeError,document$2=global_1.document,process$2=global_1.process,$fetch=global_1.fetch,versions=process$2&&process$2.versions,v8=versions&&versions.v8||"",newPromiseCapability$1=newPromiseCapability.f,newGenericPromiseCapability=newPromiseCapability$1,IS_NODE$1="process"==classofRaw(process$2),DISPATCH_EVENT=!!(document$2&&document$2.createEvent&&global_1.dispatchEvent),UNHANDLED_REJECTION="unhandledrejection",REJECTION_HANDLED="rejectionhandled",PENDING=0,FULFILLED=1,REJECTED=2,HANDLED=1,UNHANDLED=2,FORCED$1=isForced_1(PROMISE,function(){// correct subclassing with @@species support
var e=PromiseConstructor.resolve(1),t=function(){/* empty */},n=(e.constructor={})[SPECIES$4]=function(e){e(t,t)};// unhandled rejections tracking support, NodeJS Promise without it fails @@species test
return!((IS_NODE$1||"function"==typeof PromiseRejectionEvent)&&(!isPure||e["finally"])&&e.then(t)instanceof n// v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
// https://bugs.chromium.org/p/chromium/issues/detail?id=830565
// we can't detect it synchronously, so just check versions
&&0!==v8.indexOf("6.6")&&-1===userAgent.indexOf("Chrome/66"))}),INCORRECT_ITERATION=FORCED$1||!checkCorrectnessOfIteration(function(e){PromiseConstructor.all(e)["catch"](function(){/* empty */})}),isThenable=function(e){var t;return!!(isObject(e)&&"function"==typeof(t=e.then))&&t},notify$1=function(e,t,n){if(!t.notified){t.notified=!0;var o=t.reactions;microtask(function(){// variable length - can't use forEach
for(var a=t.value,r=t.state==FULFILLED,i=0;o.length>i;){var l,c,d,s=o[i++],g=r?s.ok:s.fail,u=s.resolve,p=s.reject,h=s.domain;try{g?(!r&&(t.rejection===UNHANDLED&&onHandleUnhandled(e,t),t.rejection=HANDLED),!0===g?l=a:(h&&h.enter(),l=g(a),h&&(h.exit(),d=!0)),l===s.promise?p(TypeError$1("Promise-chain cycle")):(c=isThenable(l))?c.call(l,u,p):u(l)):p(a)}catch(e){h&&!d&&h.exit(),p(e)}}t.reactions=[],t.notified=!1,n&&!t.rejection&&onUnhandled(e,t)})}},dispatchEvent=function(e,t,n){var o,a;DISPATCH_EVENT?(o=document$2.createEvent("Event"),o.promise=t,o.reason=n,o.initEvent(e,!1,!0),global_1.dispatchEvent(o)):o={promise:t,reason:n},(a=global_1["on"+e])?a(o):e===UNHANDLED_REJECTION&&hostReportErrors("Unhandled promise rejection",n)},onUnhandled=function(e,t){task$1.call(global_1,function(){var n,o=t.value,a=isUnhandled(t);if(a&&(n=perform(function(){IS_NODE$1?process$2.emit("unhandledRejection",o,e):dispatchEvent(UNHANDLED_REJECTION,e,o)}),t.rejection=IS_NODE$1||isUnhandled(t)?UNHANDLED:HANDLED,n.error))throw n.value})},isUnhandled=function(e){return e.rejection!==HANDLED&&!e.parent},onHandleUnhandled=function(e,t){task$1.call(global_1,function(){IS_NODE$1?process$2.emit("rejectionHandled",e):dispatchEvent(REJECTION_HANDLED,e,t.value)})},bind=function(e,t,n,o){return function(a){e(t,n,a,o)}},internalReject=function(e,t,n,o){t.done||(t.done=!0,o&&(t=o),t.value=n,t.state=REJECTED,notify$1(e,t,!0))},internalResolve=function(e,t,n,o){if(!t.done){t.done=!0,o&&(t=o);try{if(e===n)throw TypeError$1("Promise can't be resolved itself");var a=isThenable(n);a?microtask(function(){var o={done:!1};try{a.call(n,bind(internalResolve,e,o,t),bind(internalReject,e,o,t))}catch(n){internalReject(e,o,n,t)}}):(t.value=n,t.state=FULFILLED,notify$1(e,t,!1))}catch(n){internalReject(e,{done:!1},n,t)}}};FORCED$1&&(PromiseConstructor=function(e){anInstance(this,PromiseConstructor,PROMISE),aFunction$1(e),Internal.call(this);var t=getInternalState(this);try{e(bind(internalResolve,this,t),bind(internalReject,this,t))}catch(e){internalReject(this,t,e)}},Internal=function(){setInternalState(this,{type:PROMISE,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:PENDING,value:void 0})},Internal.prototype=redefineAll(PromiseConstructor.prototype,{// `Promise.prototype.then` method
// https://tc39.github.io/ecma262/#sec-promise.prototype.then
then:function(e,t){var n=getInternalPromiseState(this),o=newPromiseCapability$1(speciesConstructor(this,PromiseConstructor));return o.ok="function"!=typeof e||e,o.fail="function"==typeof t&&t,o.domain=IS_NODE$1?process$2.domain:void 0,n.parent=!0,n.reactions.push(o),n.state!=PENDING&&notify$1(this,n,!1),o.promise},// `Promise.prototype.catch` method
// https://tc39.github.io/ecma262/#sec-promise.prototype.catch
catch:function(e){return this.then(void 0,e)}}),OwnPromiseCapability=function(){var e=new Internal,t=getInternalState(e);this.promise=e,this.resolve=bind(internalResolve,e,t),this.reject=bind(internalReject,e,t)},newPromiseCapability.f=newPromiseCapability$1=function(e){return e===PromiseConstructor||e===PromiseWrapper?new OwnPromiseCapability(e):newGenericPromiseCapability(e)},"function"==typeof nativePromiseConstructor&&(nativeThen=nativePromiseConstructor.prototype.then,redefine(nativePromiseConstructor.prototype,"then",function(e,t){var n=this;return new PromiseConstructor(function(e,t){nativeThen.call(n,e,t)}).then(e,t)}),"function"==typeof $fetch&&_export({global:!0,enumerable:!0,forced:!0},{// eslint-disable-next-line no-unused-vars
fetch:function(){return promiseResolve(PromiseConstructor,$fetch.apply(global_1,arguments))}}))),_export({global:!0,wrap:!0,forced:FORCED$1},{Promise:PromiseConstructor}),setToStringTag(PromiseConstructor,PROMISE,!1),setSpecies(PROMISE),PromiseWrapper=path[PROMISE],_export({target:PROMISE,stat:!0,forced:FORCED$1},{// `Promise.reject` method
// https://tc39.github.io/ecma262/#sec-promise.reject
reject:function(e){var t=newPromiseCapability$1(this);return t.reject.call(void 0,e),t.promise}}),_export({target:PROMISE,stat:!0,forced:FORCED$1},{// `Promise.resolve` method
// https://tc39.github.io/ecma262/#sec-promise.resolve
resolve:function(e){return promiseResolve(this,e)}}),_export({target:PROMISE,stat:!0,forced:INCORRECT_ITERATION},{// `Promise.all` method
// https://tc39.github.io/ecma262/#sec-promise.all
all:function(e){var t=this,n=newPromiseCapability$1(t),o=n.resolve,a=n.reject,r=perform(function(){var n=aFunction$1(t.resolve),r=[],i=0,l=1;iterate_1(e,function(e){var c=i++,d=!1;r.push(void 0),l++,n.call(t,e).then(function(e){d||(d=!0,r[c]=e,--l||o(r))},a)}),--l||o(r)});return r.error&&a(r.value),n.promise},// `Promise.race` method
// https://tc39.github.io/ecma262/#sec-promise.race
race:function(e){var t=this,n=newPromiseCapability$1(t),o=n.reject,a=perform(function(){var a=aFunction$1(t.resolve);iterate_1(e,function(e){a.call(t,e).then(n.resolve,o)})});return a.error&&o(a.value),n.promise}});var MATCH=wellKnownSymbol("match"),isRegexp=function(e){var t;return isObject(e)&&((t=e[MATCH])===void 0?"RegExp"==classofRaw(e):!!t)},notARegexp=function(e){if(isRegexp(e))throw TypeError("The method doesn't accept regular expressions");return e},MATCH$1=wellKnownSymbol("match"),correctIsRegexpLogic=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[MATCH$1]=!1,"/./"[e](t)}catch(e){/* empty */}}return!1};// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
_export({target:"String",proto:!0,forced:!correctIsRegexpLogic("includes")},{includes:function(e/* , position = 0 */){return!!~(requireObjectCoercible(this)+"").indexOf(notARegexp(e),1<arguments.length?arguments[1]:void 0)}});// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
var domIterables={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0};for(var COLLECTION_NAME in domIterables){var Collection=global_1[COLLECTION_NAME],CollectionPrototype=Collection&&Collection.prototype;// some Chrome versions have non-configurable methods on DOMTokenList
if(CollectionPrototype&&CollectionPrototype.forEach!==arrayForEach)try{hide(CollectionPrototype,"forEach",arrayForEach)}catch(e){CollectionPrototype.forEach=arrayForEach}}var slice=[].slice,MSIE=/MSIE .\./.test(userAgent),wrap=function(e){return function(t,n/* , ...arguments */){var o=2<arguments.length,a=o?slice.call(arguments,2):void 0;return e(o?function(){// eslint-disable-next-line no-new-func
("function"==typeof t?t:Function(t)).apply(this,a)}:t,n)}};_export({global:!0,bind:!0,forced:MSIE},{// `setTimeout` method
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
setTimeout:wrap(global_1.setTimeout),// `setInterval` method
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
setInterval:wrap(global_1.setInterval)});function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n,o=0;o<t.length;o++)n=t[o],n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ownKeys$1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function _objectSpread2(e){for(var t,n=1;n<arguments.length;n++)t=null==arguments[n]?{}:arguments[n],n%2?ownKeys$1(t,!0).forEach(function(n){_defineProperty(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys$1(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))});return e}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _iterableToArrayLimit(e,t){var n=[],o=!0,a=!1,r=void 0;try{for(var i,l=e[Symbol.iterator]();!(o=(i=l.next()).done)&&(n.push(i.value),!(t&&n.length===t));o=!0);}catch(e){a=!0,r=e}finally{try{o||null==l["return"]||l["return"]()}finally{if(a)throw r}}return n}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}/**
 * @author GuangHui
 * @description 浏览器判断
 */var inBrowser="undefined"!=typeof window,UA=inBrowser&&window.navigator.userAgent.toLowerCase(),isIE=UA&&/msie|trident/.test(UA);/**
 * blob转File
 *
 * @export File
 * @param {Blob} blob blob
 * @param {String} name filename
 * @returns
 */function blob2File(e,t){return isIE?(e.lastModifiedDate=new Date,e.name=t,e):new File([e],t,{type:e.type})}var DrawingBoard=/*#__PURE__*/function(){var t=Math.PI;// 支持的交互模式枚举
// 支持的图片类型枚举
function e(t,n){_classCallCheck(this,e),this._init(t,n),this.manualMount||this.mount(this.container)}/**
   * 初始化
   * @param {HTMLElement|String} container 容器
   * @param {Object} options 选项
   */return _createClass(e,[{key:"_init",value:function(t,n){var o=this;if(!t)throw new Error("el\u4E3A\u5FC5\u586B\u9879");this.container="string"==typeof t?document.querySelector(t):t,this._defaultOptions={size:[],// canvas尺寸
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
},this.options=_objectSpread2({},this._defaultOptions,{},n);var a=this.options,r=a.size,i=a.className,l=a.manualMount,c=a.maxRevokeSteps,d=a.interactiveMode,s=a.penColor,g=a.penWidth,u=a.bgImgURL,p=a.bgImgRotate,h=a.bgColor,m=a.onRevokeStackChange,f=a.onPaintEnd,v=_slicedToArray(r,2),y=v[0],_=v[1];// 尺寸未传，则使用容器的尺寸
this.setSize([null==y?this.container.getBoundingClientRect().width:y,null==_?this.container.getBoundingClientRect().height:_]),this.manualMount=l,this.revokeStack=[],this.MAX_REVOKE_STEPS=this._getLawfulMaxRevokeSteps(c),this.lastPoint=null,this.isPainting=!1,this.interactiveMode=e.INTERACTIVE_MODE_ENUM.includes(d)?d:"mouse",this._handlePointerStartBinded=this._handlePointerStart.bind(this),this._handlePointerMoveBinded=this._handlePointerMove.bind(this),this._handlePointerEndBinded=this._handlePointerEnd.bind(this),this._handlePointerLeaveBinded=this._handlePointerLeave.bind(this),this._handlePointerCancelBinded=this._handlePointerCancel.bind(this),this.eventList=[{pointerType:"mouse",action:"start",name:"mousedown",handler:this._handlePointerStartBinded},{pointerType:"mouse",action:"move",name:"mousemove",handler:this._handlePointerMoveBinded},{pointerType:"mouse",action:"end",name:"mouseup",handler:this._handlePointerEndBinded},{pointerType:"mouse",action:"leave",name:"mouseleave",handler:this._handlePointerLeaveBinded},{pointerType:"touch",action:"start",name:"touchstart",handler:this._handlePointerStartBinded},{pointerType:"touch",action:"move",name:"touchmove",handler:this._handlePointerMoveBinded},{pointerType:"touch",action:"end",name:"touchend",handler:this._handlePointerEndBinded},{pointerType:"touch",action:"cancel",name:"touchcancel",handler:this._handlePointerCancelBinded}],this.setPenStyle({color:s,width:g}),this.bgImgURL=u,this.bgColor=h,this.bgImgRotate=this._getLawfulRotateAngle(p),this.className=i,u?this._getImageFromURL(u).then(function(e){o._bgImgObject=e,o.originalSize=[e.width,e.height],o._drawBg.apply(o,[e].concat(_toConsumableArray(o.originalSize)))}).catch(function(e){console.log(e),o._bgImgObject=null}):this._bgImgObject=null,this.onRevokeStackChange=m,this.onPaintEnd=f,this.paintCount=0}/**
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
     */},{key:"_drawCircle",value:function(e,n){var o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:3,a=3<arguments.length&&void 0!==arguments[3]?arguments[3]:"red";this.ctx&&(this.ctx.save(),this.ctx.fillStyle=a,this.ctx.beginPath(),this.ctx.arc(e,n,o,0,360*(t/180),!1),this.ctx.fill(),this.ctx.restore())}/**
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
     */},{key:"_setDOMSize",value:function(e){var t=_slicedToArray(e,2),n=t[0],o=t[1];null!=n&&this.el&&(this.el.width=n),null!=o&&this.el&&(this.el.height=o)}/**
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
     */},{key:"_drawBg",value:function(e,n,o){if(e&&this.ctx&&this.ctx.drawImage&&n&&o&&!(0>=n)&&!(0>=o)){var a=0,r=n,i=o,l=0===this.bgImgRotate||180===this.bgImgRotate?-this.width/2:-this.height/2,c=0===this.bgImgRotate||180===this.bgImgRotate?-this.height/2:-this.width/2,d=0===this.bgImgRotate||180===this.bgImgRotate?this.width:this.height,s=0===this.bgImgRotate||180===this.bgImgRotate?this.height:this.width;this.ctx.save(),this.ctx.translate(this.width/2,this.height/2),this.ctx.rotate(t/180*this.bgImgRotate),console.log("\u65CB\u8F6C\u53C2\u6570:",0,a,r,i,l,c,d,s,this.bgImgRotate),this.ctx.drawImage(e,0,a,r,i,l,c,d,s),this.ctx.restore()}}/**
     * 获取合法角度值(逆时针旋转角度记录为正值，-90度 记录为270；450记录为90,10度记录为0,55度记录为90)
     * @param {Number} angle 角度
     * @returns 合法角度值
     */},{key:"_getLawfulRotateAngle",value:function(e){var t=Math.abs,n=Math.floor,o=Math.ceil;if(!("number"!=typeof e||isNaN(e))){var a=e%360,r=0>a?a+360:a,i=45<=r%90?90*o(r/90)%360:90*n(r/90)%360;// 可能存在-0
return t(i)}}/**
     * 获取当前画面的绘制次数
     * @returns 绘制次数
     */},{key:"getPaintCount",value:function(){return this.paintCount}/**
     * 旋转
     * @param {Boolean} direction 方向 1顺时针 -1逆时针
     * @returns void
     */},{key:"rotate",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1;[1,-1].includes(e)&&(// 重设尺寸，旋转90度，宽高互换即可
// 因为旋转操作不记录到撤销栈中
// 旋转时需要清空撤销栈并重置绘制数量，不然会导致撤销状态错误
this.bgImgRotate=this._getLawfulRotateAngle(this.bgImgRotate+90*e),this.setSize([this.height,this.width]),this._drawBg.apply(this,[this._bgImgObject].concat(_toConsumableArray(this.originalSize))),this.paintCount=0,this.revokeStack=[])}/**
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
this._saveImageData("clear",this.paintCount,this.ctx.getImageData(0,0,this.width,this.height)),this.ctx.clearRect(0,0,this.width,this.height),this.paintCount=0,this._bgImgObject&&this._drawBg.apply(this,[this._bgImgObject].concat(_toConsumableArray(this.originalSize))),console.log("clear paintCount",this.paintCount))}/**
     * 设置canvas尺寸
     * @param {Number} width 宽
     * @param {Number} height 高
     * @returns void
     */},{key:"setSize",value:function(e){var t=_slicedToArray(e,2),n=t[0],o=t[1];n&&(this.width=n),o&&(this.height=o),this._setDOMSize([n,o])}/**
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
"string"==typeof e&&/^(http[s]?)|(data:image)/.test(e)?this._getImageFromURL(e).then(function(e){o._bgImgObject=e,o.originalSize=[t||e.width,n||e.height],o._drawBg.apply(o,[e].concat(_toConsumableArray(o.originalSize)))}).catch(function(e){console.log(e),o._bgImgObject=null}):(e!==this._bgImgObject&&(this._bgImgObject=e),this.originalSize=[t||this.width,n||this.height],this._drawBg.apply(this,[e].concat(_toConsumableArray(this.originalSize))))}/**
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
     */},{key:"getFile",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"drawingBoard",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"png",n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1;return this.getBlob(t,n).then(function(t){return blob2File(t,e)})}/**
     * 下载图片
     * @param {String} type 图片类型
     * @param {Number} compressRate 压缩比率，默认原图输出
     * @returns void
     */},{key:"download",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"png",n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1,o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"drawing-board";if(e.IMG_TYPE_ENUM.includes(t)&&"number"==typeof n&&!isNaN(n)){.3>n&&(n=.3),1<n&&(n=1);var a=this.getDataUrl(t,n);if(a){var r=document.createElement("a");document.body.appendChild(r),r.href=a,r.download="".concat(o,"-").concat(new Date().getTime()),r.target="_blank",r.click();var i=setTimeout(function(){document.body.removeChild(r),r=null,clearTimeout(i),i=null},200)}}}}]),e}();_defineProperty(DrawingBoard,"INTERACTIVE_MODE_ENUM",["mouse","touch","both"]),_defineProperty(DrawingBoard,"IMG_TYPE_ENUM",["jpg","jpeg","png","webp"]);export default DrawingBoard;
