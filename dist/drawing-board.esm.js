var __assign=function(){return __assign=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a},__assign.apply(this,arguments)};function __read(a,b){var c="function"==typeof Symbol&&a[Symbol.iterator];if(!c)return a;var d,f,g=c.call(a),h=[];try{for(;(void 0===b||0<b--)&&!(d=g.next()).done;)h.push(d.value)}catch(a){f={error:a}}finally{try{d&&!d.done&&(c=g["return"])&&c.call(g)}finally{if(f)throw f.error}}return h}var inBrowser="undefined"!=typeof window,UA=inBrowser?window.navigator.userAgent.toLowerCase():"",isIE=!!UA&&/msie|trident/.test(UA);function blob2File(a,b){return isIE?(a.lastModifiedDate=new Date,a.name=b,a):new File([a],b,{type:a.type})}var getImageFromURL=function(a){return new Promise(function(b,c){if(!/^(http[s]?)|(data:image)/.test(a))return void c(new Error("\u56FE\u7247url\u683C\u5F0F\u4E0D\u6B63\u786E"));var d=new Image;d.src=a,d.onload=function(){b(d)},d.onerror=c,(d.complete||d.complete===void 0)&&(d.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",d.src=a)})},$=function(a){return document.querySelector(a)},MSG_CONTAINER_MISS_SELECTOR="container\u4E3A\u5FC5\u586B\u9879",MSG_CONTAINER_NOT_FOUND="\u627E\u4E0D\u5230container",MSG_ANGLE_NOT_LAWFUL="\u8BF7\u4F20\u5165\u5408\u6CD5\u7684\u89D2\u5EA6\u503C",MSG_CTX_CANT_GET="\u65E0\u6CD5\u83B7\u53D6\u5230context",MSG_LAST_DRAG_POINT_NOT_FOUNT="lastDragPoint\u65E0\u6CD5\u83B7\u53D6",MSG_LAST_PAINT_POINT_NOT_FOUNT="lastPaintPoint\u65E0\u6CD5\u83B7\u53D6",MSG_EVENT_TARGET_NOT_FOUNT="target\u65E0\u6CD5\u83B7\u53D6",MSG_BG_URL_NOT_LAWFUL="\u8BF7\u4F20\u5165\u5408\u6CD5\u7684url",MSG_BLOB_CANT_GEN="\u751F\u6210blob\u9519\u8BEF",MSG_DATAURL_CANT_GEN="\u751F\u6210dataURL\u9519\u8BEF",DrawingBoard=function(){var b=Math.PI,c=Math.floor;function a(b,c){var d=this;if(this._handlePointerStart=function(a){"empty"===d.penMode||("paint"===d.penMode&&d._handlePaintStart(a),"drag"===d.penMode&&d._handleDragStart(a),d._bindCurInteractiveModeEvents("move"),d._bindCurInteractiveModeEvents("end"),d._bindCurInteractiveModeEvents("leave"))},this._handlePointerMove=function(a){"empty"===d.penMode||("paint"===d.penMode&&d._handlePaintMove(a),"drag"===d.penMode&&d._handleDragMove(a))},this._handlePointerEnd=function(){"empty"===d.penMode||("paint"===d.penMode&&d._handlePaintEnd(),"drag"===d.penMode&&d._handleDragEnd(),d._cleanCurInteractiveModeEvents({action:"move"}),d._cleanCurInteractiveModeEvents({action:"end"}),d._cleanCurInteractiveModeEvents({action:"leave"}))},this._handlePointerLeave=function(){(d.isPainting||d.isDraging)&&d._handlePointerEnd()},this._handlePointerCancel=function(){(d.isPainting||d.isDraging)&&d._handlePointerEnd()},!b)throw new Error(MSG_CONTAINER_MISS_SELECTOR);this.container=this._getContainer(b),this.originalOptions=c,this.options=__assign(__assign({},a._defaultOptions),c);var e=this.options,f=e.size,g=e.className,h=e.manualMount,i=e.maxRevokeSteps,j=e.interactiveMode,k=e.penColor,l=e.penWidth,m=e.bgImgURL,n=e.bgImgRotate,o=e.bgColor,p=e.onRevokeStackChange,q=e.onPaintEnd,r=e.penMode,s=e.minScale,t=e.maxScale,u=e.initialScale,v=e.scaleTransition,w=e.scaleStep,x=__read(f,2),y=x[0],z=x[1];this.width=a.DEFAULT_WIDTH,this.height=a.DEFAULT_HEIGHT,this.setSize([null==y?a.DEFAULT_WIDTH:y,null==z?a.DEFAULT_HEIGHT:z]),this.manualMount=!!h,this.revokeStack=[],this.MAX_REVOKE_STEPS=this._getLawfulMaxRevokeSteps(+i),this.isPainting=!1,this.lastPaintPoint=null,this.isDraging=!1,this.lastDragPoint=null,this.dragTransformX=0,this.dragTransformY=0,this.penMode=this._getPenMode(r),this.interactiveMode=this._getInteractiveMode(j),this.eventList=this._makeEventList(),this.penColor=this._getPenColor(k),this.penWidth=this._getPenWidth(l),this.className=this._getClassName(g),this.bgImgURL=m||"",this.bgColor=o||"",this.bgImgRotate=this._getLawfulRotateAngle(n),this._bgImgObject=null,this.originalSize=[],m&&this._getImgAndDraw(m),this.onRevokeStackChange=p,this.onPaintEnd=q,this.paintCount=0,this.scaleTransition=!!v,this.scaleStep="number"!=typeof w||isNaN(w)?.1:w,this.minScale=this._getLawfulMinScale(s),this.maxScale=this._getLawfulMaxScale(t),this.initialScale=this._getLawfulScale(u),this.scale=this.initialScale,setTimeout(function(){d._handleScaleChange()},0),this.container&&(this.container.style.overflow="hidden"),this.el=null,this.ctx=null,this.manualMount||this.mount()}return a.prototype._getLawfulScale=function(b){return"number"!=typeof b||isNaN(b)?a.DEFAULT_SCALE:b<this.minScale?this.minScale:b>this.maxScale?this.maxScale:b},a.prototype._getLawfulMinScale=function(b){return"number"!=typeof b||isNaN(b)||b<a.LIMIT_MIN_SCALE?a.LIMIT_MIN_SCALE:b},a.prototype._getLawfulMaxScale=function(b){return"number"!=typeof b||isNaN(b)||b<a.LIMIT_MIN_SCALE?a.DEFAULT_MAX_SCALE:b},a.prototype._getInteractiveMode=function(b){return a.INTERACTIVE_MODE_ENUM.includes(b)?b:"mouse"},a.prototype._getPenMode=function(b){return a.PEN_MODE_ENUM.includes(b)?b:"empty"},a.prototype._getContainer=function(a){if(a instanceof HTMLElement)return a;var b=$(a);if(null==b)throw new Error(MSG_CONTAINER_NOT_FOUND);else return b},a.prototype._getClassName=function(a){return a&&"string"==typeof a?a:""},a.prototype._getPenColor=function(a){return a&&"string"==typeof a?a:"red"},a.prototype._getPenWidth=function(a){return!a||"number"!=typeof a||isNaN(a)||0>=a?6:a},a.prototype._getLawfulRotateAngle=function(a){var b=Math.abs,d=Math.ceil;if("number"!=typeof a||isNaN(a))throw new Error(MSG_ANGLE_NOT_LAWFUL);var e=a%360,f=0>e?e+360:e,g=45<=f%90?90*d(f/90)%360:90*c(f/90)%360;return b(g)},a.prototype._getPointOffset=function(a){if(a instanceof MouseEvent)return{x:a.offsetX,y:a.offsetY};var b=a.touches,d=a.target;if(null==d)throw new Error(MSG_EVENT_TARGET_NOT_FOUNT);var e=b[0],f=e.clientX,g=e.clientY,h=d.getBoundingClientRect(),i=h.left,j=h.top,k=c((f-i)/this.scale),l=c((g-j)/this.scale);return{x:k,y:l}},a.prototype._getLawfulMaxRevokeSteps=function(b){return 0>=b||"number"!=typeof b||isNaN(b)?a.LIMIT_MIN_REVOKE_STEPS:b>a.LIMIT_MAX_REVOKE_STEPS?a.LIMIT_MAX_REVOKE_STEPS:b},a.prototype._getPointerType=function(a){return"both"===a?"touchAndMouse":"touch"===a?"touch":"mouse"},a.prototype._makeEventList=function(){return[{pointerType:"mouse",action:"start",name:"mousedown",handler:this._handlePointerStart},{pointerType:"mouse",action:"move",name:"mousemove",handler:this._handlePointerMove},{pointerType:"mouse",action:"end",name:"mouseup",handler:this._handlePointerEnd},{pointerType:"mouse",action:"leave",name:"mouseleave",handler:this._handlePointerLeave},{pointerType:"touch",action:"start",name:"touchstart",handler:this._handlePointerStart},{pointerType:"touch",action:"move",name:"touchmove",handler:this._handlePointerMove},{pointerType:"touch",action:"end",name:"touchend",handler:this._handlePointerEnd},{pointerType:"touch",action:"cancel",name:"touchcancel",handler:this._handlePointerCancel}]},a.prototype._getEventItems=function(a){var b,c=a.pointerType,d=a.action;if(c&&"touchAndMouse"!==c)b=d?function(a){return a.pointerType===c&&a.action===d}:function(a){return a.pointerType===c};else if(d)b=function(a){return a.action===d};else return this.eventList;return this.eventList.filter(b)},a.prototype._makeCanvas=function(){return document.createElement("canvas")},a.prototype._getCtx=function(){var a=this.el&&this.el.getContext&&this.el.getContext("2d");if(null==a)throw new Error(MSG_CTX_CANT_GET);return a},a.prototype._setCanvasTransform=function(a,b,c,d){if(void 0===d&&(d=!1),!!this.el){var e="transform:scale("+c+") translate3d("+a+"px,"+b+"px,0);transform-origin:center;",f=d?e+"transition:0.3s;":e;this.el.setAttribute("style",f)}},a.prototype._setDOMSize=function(a){var b=__read(a,2),c=b[0],d=b[1];null!=c&&this.el&&(this.el.width=c),null!=d&&this.el&&(this.el.height=d)},a.prototype._setPenMode=function(b){a.PEN_MODE_ENUM.includes(b)&&(this.penMode=b)},a.prototype._saveImageData=function(a,b,c){void 0===a&&(a="paint"),["paint","clear"].includes(a)&&null!=b&&c&&c instanceof ImageData&&(this.revokeStack.length>=this.MAX_REVOKE_STEPS&&this.revokeStack.shift(),this.revokeStack.push({type:a,paintCount:b,imageData:c}),this.onRevokeStackChange&&"function"==typeof this.onRevokeStackChange&&this.onRevokeStackChange(this.revokeStack),void 0)},a.prototype._bindCurInteractiveModeEvents=function(a){if(this.el){var b=this._getPointerType(this.interactiveMode),c={pointerType:b,action:a};this._cleanCurInteractiveModeEvents(c),this._bindEvent(c)}},a.prototype._cleanCurInteractiveModeEvents=function(a){var b=a.action;if(this.el){var c=this._getPointerType(this.interactiveMode);this._cleanEvent({pointerType:c,action:b})}},a.prototype._bindEvent=function(a){var b=this;void 0===a&&(a={});var c=this._getEventItems(a);c&&c.length&&c.forEach(function(a){var c=a.name,d=a.handler;b.el&&b.el.addEventListener(c,d,!1)})},a.prototype._cleanEvent=function(a){var b=this;void 0===a&&(a={});var c=this._getEventItems(a);c&&c.length&&c.forEach(function(a){var c=a.name,d=a.handler;return b.el&&b.el.removeEventListener(c,d,!1)})},a.prototype._revoke=function(){if(this.ctx&&this.revokeStack&&this.revokeStack.length){var a=this.revokeStack.pop(),b=a.imageData,c=a.paintCount;this.ctx.putImageData(b,0,0),this.paintCount=c,this.onRevokeStackChange&&"function"==typeof this.onRevokeStackChange&&this.onRevokeStackChange(this.revokeStack)}},a.prototype._getImgAndDraw=function(a){var b=this;getImageFromURL(a).then(function(a){b._bgImgObject=a,b.originalSize=[a.width,a.height],b._drawBg(a,b.originalSize[0],b.originalSize[1])}).catch(function(){b._bgImgObject=null})},a.prototype._drawBg=function(a,c,d){if(a&&this.ctx&&this.ctx.drawImage&&c&&d&&!(0>=c)&&!(0>=d)){var e=0===this.bgImgRotate||180===this.bgImgRotate?-this.width/2:-this.height/2,f=0===this.bgImgRotate||180===this.bgImgRotate?-this.height/2:-this.width/2,g=0===this.bgImgRotate||180===this.bgImgRotate?this.width:this.height,h=0===this.bgImgRotate||180===this.bgImgRotate?this.height:this.width;this.ctx.save(),this.ctx.translate(this.width/2,this.height/2),this.ctx.rotate(b/180*this.bgImgRotate),this.ctx.drawImage(a,0,0,c,d,e,f,g,h),this.ctx.restore()}},a.prototype._drawCircle=function(a,c,d,e){void 0===d&&(d=3),void 0===e&&(e="red"),this.ctx&&(this.ctx.save(),this.ctx.fillStyle=e,this.ctx.beginPath(),this.ctx.arc(a,c,d,0,360*(b/180),!1),this.ctx.fill(),this.ctx.restore())},a.prototype._drawLine=function(a,b,c,d,e,f){void 0===e&&(e=6),void 0===f&&(f="red"),this.ctx&&(this.ctx.save(),this.ctx.strokeStyle=f,this.ctx.lineWidth=e,this.ctx.lineCap="round",this.ctx.lineJoin="round",this.ctx.beginPath(),this.ctx.moveTo(a,b),this.ctx.lineTo(c,d),this.ctx.stroke(),this.ctx.restore())},a.prototype._handlePaintStart=function(a){this.isPainting=!0,this.lastPaintPoint=this._getPointOffset(a),this.ctx&&this._saveImageData("paint",this.paintCount,this.ctx.getImageData(0,0,this.width,this.height)),this._drawCircle(this.lastPaintPoint.x,this.lastPaintPoint.y,this.penWidth/2,this.penColor)},a.prototype._handleDragStart=function(a){this.isDraging=!0,this.lastDragPoint=this._getPointOffset(a)},a.prototype._handlePaintMove=function(a){if(this.isPainting){var b=this._getPointOffset(a),c=b.x,d=b.y;if(null==this.lastPaintPoint)throw new Error(MSG_LAST_PAINT_POINT_NOT_FOUNT);var e=this.lastPaintPoint,f=e.x,g=e.y;this._drawLine(f,g,c,d,this.penWidth,this.penColor),this.lastPaintPoint={x:c,y:d}}},a.prototype._handleDragMove=function(a){if(this.isDraging){var b=this._getPointOffset(a),c=b.x,d=b.y;if(null==this.lastDragPoint)throw new Error(MSG_LAST_DRAG_POINT_NOT_FOUNT);var e=this.lastDragPoint,f=e.x,g=e.y;this.dragTransformX+=c-f,this.dragTransformY+=d-g,this._setCanvasTransform(this.dragTransformX,this.dragTransformY,this.scale)}},a.prototype._handlePaintEnd=function(){this.isPainting=!1,this.paintCount++,this.onPaintEnd&&"function"==typeof this.onPaintEnd&&this.onPaintEnd(this.paintCount)},a.prototype._handleDragEnd=function(){this.isDraging=!1},a.prototype._handleScaleChange=function(){this.el&&this._setCanvasTransform(this.dragTransformX,this.dragTransformY,this.scale,this.scaleTransition)},a.prototype.setPenStyle=function(a){var b=a.color,c=a.width;b&&(this.penColor=this._getPenColor(b)),c&&(this.penWidth=this._getPenWidth(c))},a.prototype.setSize=function(a){var b=__read(a,2),c=b[0],d=b[1];c&&(this.width=c),d&&(this.height=d),this._setDOMSize([c,d])},a.prototype.setClassName=function(a){a&&this.el&&(this.el.className=a)},a.prototype.setPenModePaint=function(){this._setPenMode("paint")},a.prototype.setPenModeDrag=function(){this._setPenMode("drag")},a.prototype.setPenModeEmpty=function(){this._setPenMode("empty")},a.prototype.setScale=function(a){var b=parseFloat(a);isNaN(b)||b===this.scale||(this.scale=this._getLawfulScale(a),this._handleScaleChange())},a.prototype.mount=function(){this.el||(this.el=this._makeCanvas()),this.ctx||(this.ctx=this._getCtx()),this._setDOMSize([this.width,this.height]),this.setClassName(this.className),this._bindCurInteractiveModeEvents("start"),this.container.appendChild(this.el)},a.prototype.destory=function(){this.el&&this.container.removeChild(this.el),this.el=null,this._bgImgObject=null},a.prototype.clear=function(){this.ctx&&this.el&&(this._saveImageData("clear",this.paintCount,this.ctx.getImageData(0,0,this.width,this.height)),this.ctx.clearRect(0,0,this.width,this.height),this.paintCount=0,this._bgImgObject&&this._drawBg(this._bgImgObject,this.originalSize[0],this.originalSize[1]),void 0)},a.prototype.rotate=function(a){void 0===a&&(a=1),[1,-1].includes(a)&&(this.bgImgRotate=this._getLawfulRotateAngle(this.bgImgRotate+90*a),this.setSize([this.height,this.width]),this._bgImgObject&&this._drawBg(this._bgImgObject,this.originalSize[0],this.originalSize[1]),this.paintCount=0,this.revokeStack=[])},a.prototype.revoke=function(){this._revoke()},a.prototype.setBgImg=function(a,b,c){var d=this;if("string"!=typeof a)a!==this._bgImgObject&&(this._bgImgObject=a),this.originalSize=[b||this.width,c||this.height],this._drawBg(a,this.originalSize[0],this.originalSize[1]);else if(/^(http[s]?)|(data:image)/.test(a))getImageFromURL(a).then(function(a){d._bgImgObject=a,d.originalSize=[b||a.width,c||a.height],d._drawBg(a,d.originalSize[0],d.originalSize[1])}).catch(function(){d._bgImgObject=null});else throw new Error(MSG_BG_URL_NOT_LAWFUL)},a.prototype.makeScaleAdd=function(){var a=this.scale+this.scaleStep;this.setScale(a)},a.prototype.makeScaleSubtract=function(){var a=this.scale-this.scaleStep;this.setScale(a)},a.prototype.reset=function(){this.dragTransformX=this.dragTransformY=0,this.scale=this.initialScale,this._setCanvasTransform(this.dragTransformX,this.dragTransformY,this.scale,this.scaleTransition)},a.prototype.getPaintCount=function(){return this.paintCount},a.prototype.getDataUrl=function(b,c){if(void 0===b&&(b="png"),void 0===c&&(c=1),!this.el||!a.IMG_TYPE_ENUM.includes(b)||"number"!=typeof c||isNaN(c))throw new Error(MSG_DATAURL_CANT_GEN);.3>c&&(c=.3),1<c&&(c=1);var d="image/"+("jpg"===b?"jpeg":b);return this.el.toDataURL(d,c)},a.prototype.getBlob=function(b,c){var d=this;if(void 0===b&&(b="png"),void 0===c&&(c=1),!this.el||!a.IMG_TYPE_ENUM.includes(b)||"number"!=typeof c||isNaN(c))throw new Error(MSG_BLOB_CANT_GEN);.3>c&&(c=.3),1<c&&(c=1);var e="image/"+b;return new Promise(function(a){d.el&&d.el.toBlob(function(b){null!=b&&a(b)},e,c)})},a.prototype.getFile=function(a,b,c){return void 0===a&&(a="drawingBoard"),void 0===b&&(b="png"),void 0===c&&(c=1),this.getBlob(b,c).then(function(b){return blob2File(b,a)})},a.prototype.download=function(b,c,d){if(void 0===b&&(b="png"),void 0===c&&(c=1),void 0===d&&(d="drawing-board"),a.IMG_TYPE_ENUM.includes(b)&&"number"==typeof c&&!isNaN(c)){.3>c&&(c=.3),1<c&&(c=1);var e=this.getDataUrl(b,c);if(e){var f=document.createElement("a");document.body.appendChild(f),f.href=e,f.download=d+"-"+new Date().getTime(),f.target="_blank",f.click();var g=setTimeout(function(){f&&document.body.removeChild(f),f=null,clearTimeout(g),g=null},200)}}},a.INTERACTIVE_MODE_ENUM=["mouse","touch","both"],a.IMG_TYPE_ENUM=["jpg","jpeg","png","webp"],a.PEN_MODE_ENUM=["paint","drag","empty"],a.DEFAULT_WIDTH=300,a.DEFAULT_HEIGHT=150,a.LIMIT_MIN_REVOKE_STEPS=10,a.LIMIT_MAX_REVOKE_STEPS=50,a.LIMIT_MIN_SCALE=.1,a.DEFAULT_SCALE=1,a.DEFAULT_MAX_SCALE=5,a._defaultOptions={size:[],className:"",manualMount:!1,maxRevokeSteps:10,interactiveMode:"mouse",penMode:"empty",penColor:"red",penWidth:6,bgImgURL:"",bgImgRotate:0,bgColor:"#fff",onRevokeStackChange:null,onPaintEnd:null,minScale:1,maxScale:3,initialScale:1,scaleTransition:!0,scaleStep:.1},a}();export default DrawingBoard;
//# sourceMappingURL=drawing-board.esm.js.map
