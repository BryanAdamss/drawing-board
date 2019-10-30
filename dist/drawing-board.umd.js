(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):(a=a||self,a.DrawingBoard=b())})(this,function(){'use strict';function a(a,b){var c="function"==typeof Symbol&&a[Symbol.iterator];if(!c)return a;var d,f,g=c.call(a),h=[];try{for(;(void 0===b||0<b--)&&!(d=g.next()).done;)h.push(d.value)}catch(a){f={error:a}}finally{try{d&&!d.done&&(c=g["return"])&&c.call(g)}finally{if(f)throw f.error}}return h}function b(a,b){return f?(a.lastModifiedDate=new Date,a.name=b,a):new File([a],b,{type:a.type})}var c=function(){return c=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a},c.apply(this,arguments)},d="undefined"!=typeof window,e=d?window.navigator.userAgent.toLowerCase():"",f=!!e&&/msie|trident/.test(e),g=function(a){return new Promise(function(b,c){if(!/^(http[s]?)|(data:image)/.test(a))return void c(new Error("\u56FE\u7247url\u683C\u5F0F\u4E0D\u6B63\u786E"));var d=new Image;d.src=a,d.onload=function(){b(d)},d.onerror=c,(d.complete||d.complete===void 0)&&(d.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",d.src=a)})},h=function(a){return document.querySelector(a)},i=function(){var e=Math.PI;function d(b,e){var f=this;if(this._handlePointerStart=function(a){console.log("_handlePointerStart"),"empty"===f.penMode||("paint"===f.penMode&&f._handlePaintStart(a),"drag"===f.penMode&&f._handleDragStart(a),f._bindCurInteractiveModeEvents("move"),f._bindCurInteractiveModeEvents("end"),f._bindCurInteractiveModeEvents("leave"))},this._handlePointerMove=function(a){console.log("_handlePointerMove"),"empty"===f.penMode||("paint"===f.penMode&&f._handlePaintMove(a),"drag"===f.penMode&&f._handleDragMove(a))},this._handlePointerEnd=function(){console.log("_handlePointerEnd"),"empty"===f.penMode||("paint"===f.penMode&&f._handlePaintEnd(),"drag"===f.penMode&&f._handleDragEnd(),f._cleanCurInteractiveModeEvents({action:"move"}),f._cleanCurInteractiveModeEvents({action:"end"}),f._cleanCurInteractiveModeEvents({action:"leave"}))},this._handlePointerLeave=function(a){console.log("_handlePointerLeave"),(f.isPainting||f.isDraging)&&f._handlePointerEnd(a)},this._handlePointerCancel=function(a){console.log("_handlePointerCancel"),(f.isPainting||f.isDraging)&&f._handlePointerEnd(a)},!b)throw new Error("container\u4E3A\u5FC5\u586B\u9879");this.container=this._getContainer(b),this.options=c(c({},d._defaultOptions),e);var g=this.options,h=g.size,i=g.className,j=g.manualMount,k=g.maxRevokeSteps,l=g.interactiveMode,m=g.penColor,n=g.penWidth,o=g.bgImgURL,p=g.bgImgRotate,q=g.bgColor,r=g.onRevokeStackChange,s=g.onPaintEnd,t=g.penMode,u=g.minScale,v=g.maxScale,w=a(h,2),x=w[0],y=w[1];this.width=d.DEFAULT_WIDTH,this.height=d.DEFAULT_HEIGHT,this.setSize([null==x?d.DEFAULT_WIDTH:x,null==y?d.DEFAULT_HEIGHT:y]),this.manualMount=!!j,this.revokeStack=[],this.MAX_REVOKE_STEPS=this._getLawfulMaxRevokeSteps(+k),this.isPainting=!1,this.lastPaintPoint=null,this.isDraging=!1,this.lastDragPoint=null,this.dragTransformX=0,this.dragTransformY=0,this.penMode=this._getPenMode(t),this.interactiveMode=this._getInteractiveMode(l),this.eventList=this._makeEventList(),this.penColor=this._getPenColor(m),this.penWidth=this._getPenWidth(n),this.className=this._getClassName(i),this.bgImgURL=o||"",this.bgColor=q||"",this.bgImgRotate=this._getLawfulRotateAngle(p),this._bgImgObject=null,this.originalSize=[],o&&this._getImgAndDraw(o),this.onRevokeStackChange=r,this.onPaintEnd=s,this.paintCount=0,this.minScale=u||d.LIMIT_MIN_SCALE,this.maxScale=v||d.LIMIT_MAX_SCALE,this.scale=d.DEFAULT_SCALE,this.container&&(this.container.style.overflow="hidden"),this.el=null,this.ctx=null,this.manualMount||this.mount()}return d.prototype._getImgAndDraw=function(a){var b=this;g(a).then(function(a){b._bgImgObject=a,b.originalSize=[a.width,a.height],b._drawBg(a,b.originalSize[0],b.originalSize[1])}).catch(function(a){console.log(a),b._bgImgObject=null})},d.prototype._drawBg=function(a,b,c){if(a&&this.ctx&&this.ctx.drawImage&&b&&c&&!(0>=b)&&!(0>=c)){var d=0,f=b,g=c,h=0===this.bgImgRotate||180===this.bgImgRotate?-this.width/2:-this.height/2,i=0===this.bgImgRotate||180===this.bgImgRotate?-this.height/2:-this.width/2,j=0===this.bgImgRotate||180===this.bgImgRotate?this.width:this.height,k=0===this.bgImgRotate||180===this.bgImgRotate?this.height:this.width;this.ctx.save(),this.ctx.translate(this.width/2,this.height/2),this.ctx.rotate(e/180*this.bgImgRotate),console.log("\u65CB\u8F6C\u53C2\u6570:",0,d,f,g,h,i,j,k,this.bgImgRotate),this.ctx.drawImage(a,0,d,f,g,h,i,j,k),this.ctx.restore()}},d.prototype._getLawfulRotateAngle=function(a){var b=Math.abs,c=Math.floor,d=Math.ceil;if("number"!=typeof a||isNaN(a))throw new Error("\u8BF7\u4F20\u5165\u5408\u6CD5\u7684\u89D2\u5EA6\u503C");var e=a%360,f=0>e?e+360:e,g=45<=f%90?90*d(f/90)%360:90*c(f/90)%360;return b(g)},d.prototype._getClassName=function(a){return a&&"string"==typeof a?a:""},d.prototype._getPenColor=function(a){return a&&"string"==typeof a?a:"red"},d.prototype._getPenWidth=function(a){return!a||"number"!=typeof a||isNaN(a)||0>=a?6:a},d.prototype._drawCircle=function(a,b,c,d){void 0===c&&(c=3),void 0===d&&(d="red"),this.ctx&&(this.ctx.save(),this.ctx.fillStyle=d,this.ctx.beginPath(),this.ctx.arc(a,b,c,0,360*(e/180),!1),this.ctx.fill(),this.ctx.restore())},d.prototype._drawLine=function(a,b,c,d,e,f){void 0===e&&(e=6),void 0===f&&(f="red"),this.ctx&&(this.ctx.save(),this.ctx.strokeStyle=f,this.ctx.lineWidth=e,this.ctx.lineCap="round",this.ctx.lineJoin="round",this.ctx.beginPath(),this.ctx.moveTo(a,b),this.ctx.lineTo(c,d),this.ctx.stroke(),this.ctx.restore())},d.prototype._getPointOffset=function(a){if(a instanceof MouseEvent)return{x:a.offsetX,y:a.offsetY};var b=a.touches,c=a.target;if(null==c)throw new Error("target\u65E0\u6CD5\u83B7\u53D6");var d=b[0],e=d.clientX,f=d.clientY,g=c.getBoundingClientRect(),h=g.left,i=g.top;return{x:e-h,y:f-i}},d.prototype._handlePaintStart=function(a){this.isPainting=!0,this.lastPaintPoint=this._getPointOffset(a),this.ctx&&this._saveImageData("paint",this.paintCount,this.ctx.getImageData(0,0,this.width,this.height)),this._drawCircle(this.lastPaintPoint.x,this.lastPaintPoint.y,this.penWidth/2,this.penColor)},d.prototype._handleDragStart=function(a){console.log("drag start"),this.isDraging=!0,this.lastDragPoint=this._getPointOffset(a)},d.prototype._handlePaintMove=function(a){if(this.isPainting){var b=this._getPointOffset(a),c=b.x,d=b.y;if(null==this.lastPaintPoint)throw new Error("lastPaintPoint\u65E0\u6CD5\u83B7\u53D6");var e=this.lastPaintPoint,f=e.x,g=e.y;this._drawLine(f,g,c,d,this.penWidth,this.penColor),this.lastPaintPoint={x:c,y:d}}},d.prototype._handleDragMove=function(a){if(console.log("drag move"),this.isDraging){var b=this._getPointOffset(a),c=b.x,d=b.y;if(null==this.lastDragPoint)throw new Error("lastDragPoint\u65E0\u6CD5\u83B7\u53D6");var e=this.lastDragPoint,f=e.x,g=e.y;this.dragTransformX+=c-f,this.dragTransformY+=d-g,this._setCanvasTransform(this.dragTransformX,this.dragTransformY,this.scale)}},d.prototype._handlePaintEnd=function(){this.isPainting=!1,this.paintCount++,this.onPaintEnd&&"function"==typeof this.onPaintEnd&&this.onPaintEnd(this.paintCount),console.log("_handlePointerEnd paintCount",this.paintCount)},d.prototype._handleDragEnd=function(){console.log("drag end"),this.isDraging=!1},d.prototype._setCanvasTransform=function(a,b,c,d){if(void 0===d&&(d=!1),!!this.el){var e="transform:scale("+c+") translate3d("+a+"px,"+b+"px,0);transform-origin:center;",f=d?e+"transition:0.3s;":e;this.el.setAttribute("style",f)}},d.prototype._saveImageData=function(a,b,c){void 0===a&&(a="paint"),["paint","clear"].includes(a)&&null!=b&&c&&c instanceof ImageData&&(this.revokeStack.length>=this.MAX_REVOKE_STEPS&&this.revokeStack.shift(),this.revokeStack.push({type:a,paintCount:b,imageData:c}),this.onRevokeStackChange&&"function"==typeof this.onRevokeStackChange&&this.onRevokeStackChange(this.revokeStack),console.log("_saveImageData onRevokeStackChange",this.revokeStack))},d.prototype._makeEventList=function(){return[{pointerType:"mouse",action:"start",name:"mousedown",handler:this._handlePointerStart},{pointerType:"mouse",action:"move",name:"mousemove",handler:this._handlePointerMove},{pointerType:"mouse",action:"end",name:"mouseup",handler:this._handlePointerEnd},{pointerType:"mouse",action:"leave",name:"mouseleave",handler:this._handlePointerLeave},{pointerType:"touch",action:"start",name:"touchstart",handler:this._handlePointerStart},{pointerType:"touch",action:"move",name:"touchmove",handler:this._handlePointerMove},{pointerType:"touch",action:"end",name:"touchend",handler:this._handlePointerEnd},{pointerType:"touch",action:"cancel",name:"touchcancel",handler:this._handlePointerCancel}]},d.prototype._getInteractiveMode=function(a){return d.INTERACTIVE_MODE_ENUM.includes(a)?a:"mouse"},d.prototype._getPenMode=function(a){return d.PEN_MODE_ENUM.includes(a)?a:"empty"},d.prototype._getContainer=function(a){if(a instanceof HTMLElement)return a;var b=h(a);if(null==b)throw new Error("\u627E\u4E0D\u5230container");else return b},d.prototype._setDOMSize=function(b){var c=a(b,2),d=c[0],e=c[1];null!=d&&this.el&&(this.el.width=d),null!=e&&this.el&&(this.el.height=e)},d.prototype._getLawfulMaxRevokeSteps=function(a){return 0>=a||"number"!=typeof a||isNaN(a)?d.LIMIT_MIN_REVOKE_STEPS:a>d.LIMIT_MAX_REVOKE_STEPS?d.LIMIT_MAX_REVOKE_STEPS:a},d.prototype._makeCanvas=function(){return document.createElement("canvas")},d.prototype._getCtx=function(){var a=this.el&&this.el.getContext&&this.el.getContext("2d");if(null==a)throw new Error("\u65E0\u6CD5\u83B7\u53D6\u5230context");return a},d.prototype._getPointerType=function(a){return"both"===a?"touchAndMouse":"touch"===a?"touch":"mouse"},d.prototype._getEventItems=function(a){var b,c=a.pointerType,d=a.action;if(c&&"touchAndMouse"!==c)b=d?function(a){return a.pointerType===c&&a.action===d}:function(a){return a.pointerType===c};else if(d)b=function(a){return a.action===d};else return this.eventList;return this.eventList.filter(b)},d.prototype._bindCurInteractiveModeEvents=function(a){if(this.el){var b=this._getPointerType(this.interactiveMode),c={pointerType:b,action:a};this._cleanCurInteractiveModeEvents(c),this._bindEvent(c)}},d.prototype._cleanCurInteractiveModeEvents=function(a){var b=a.action;if(this.el){var c=this._getPointerType(this.interactiveMode);this._cleanEvent({pointerType:c,action:b})}},d.prototype._bindEvent=function(a){var b=this;void 0===a&&(a={});var c=this._getEventItems(a);c&&c.length&&c.forEach(function(a){var c=a.name,d=a.handler;b.el&&b.el.addEventListener(c,d,!1)})},d.prototype._cleanEvent=function(a){var b=this;void 0===a&&(a={});var c=this._getEventItems(a);c&&c.length&&c.forEach(function(a){var c=a.name,d=a.handler;return b.el&&b.el.removeEventListener(c,d,!1)})},d.prototype._setPenMode=function(a){d.PEN_MODE_ENUM.includes(a)&&(this.penMode=a)},d.prototype._handleScaleChange=function(){this.el&&this._setCanvasTransform(this.dragTransformX,this.dragTransformY,this.scale)},d.prototype._revoke=function(){if(this.ctx&&this.revokeStack&&this.revokeStack.length){var a=this.revokeStack.pop(),b=a.imageData,c=a.paintCount;this.ctx.putImageData(b,0,0),this.paintCount=c,this.onRevokeStackChange&&"function"==typeof this.onRevokeStackChange&&this.onRevokeStackChange(this.revokeStack),console.log("_revoke onRevokeStackChange",this.revokeStack,c)}},d.prototype.setPenStyle=function(a){var b=a.color,c=a.width;b&&(this.penColor=this._getPenColor(b)),c&&(this.penWidth=this._getPenWidth(c))},d.prototype.setSize=function(b){var c=a(b,2),d=c[0],e=c[1];d&&(this.width=d),e&&(this.height=e),this._setDOMSize([d,e])},d.prototype.setClassName=function(a){a&&this.el&&(this.el.className=a)},d.prototype.mount=function(){this.el||(this.el=this._makeCanvas()),this.ctx||(this.ctx=this._getCtx()),this._setDOMSize([this.width,this.height]),this.setClassName(this.className),this._bindCurInteractiveModeEvents("start"),this.container.appendChild(this.el)},d.prototype.setPenModePaint=function(){this._setPenMode("paint")},d.prototype.setPenModeDrag=function(){this._setPenMode("drag")},d.prototype.setPenModeEmpty=function(){this._setPenMode("empty")},d.prototype.setScale=function(a){var b=parseFloat(a);isNaN(b)||this.scale===b||(b<this.minScale&&(b=this.minScale),b>this.maxScale&&(b=this.maxScale),this.scale=b,this._handleScaleChange())},d.prototype.getPaintCount=function(){return this.paintCount},d.prototype.rotate=function(a){void 0===a&&(a=1),[1,-1].includes(a)&&(this.bgImgRotate=this._getLawfulRotateAngle(this.bgImgRotate+90*a),this.setSize([this.height,this.width]),this._bgImgObject&&this._drawBg(this._bgImgObject,this.originalSize[0],this.originalSize[1]),this.paintCount=0,this.revokeStack=[])},d.prototype.revoke=function(){this._revoke()},d.prototype.clear=function(){this.ctx&&this.el&&(this._saveImageData("clear",this.paintCount,this.ctx.getImageData(0,0,this.width,this.height)),this.ctx.clearRect(0,0,this.width,this.height),this.paintCount=0,this._bgImgObject&&this._drawBg(this._bgImgObject,this.originalSize[0],this.originalSize[1]),console.log("clear paintCount",this.paintCount))},d.prototype.destory=function(){this.el&&this.container.removeChild(this.el),this.el=null,this._bgImgObject=null},d.prototype.setBgImg=function(a,b,c){var d=this;if("string"!=typeof a)a!==this._bgImgObject&&(this._bgImgObject=a),this.originalSize=[b||this.width,c||this.height],this._drawBg(a,this.originalSize[0],this.originalSize[1]);else if(/^(http[s]?)|(data:image)/.test(a))g(a).then(function(a){d._bgImgObject=a,d.originalSize=[b||a.width,c||a.height],d._drawBg(a,d.originalSize[0],d.originalSize[1])}).catch(function(a){console.log(a),d._bgImgObject=null});else throw new Error("\u8BF7\u4F20\u5165\u5408\u6CD5\u7684url")},d.prototype.getDataUrl=function(a,b){if(void 0===a&&(a="png"),void 0===b&&(b=1),this.el&&d.IMG_TYPE_ENUM.includes(a)&&"number"==typeof b&&!isNaN(b)){.3>b&&(b=.3),1<b&&(b=1);var c="image/"+a;return this.el.toDataURL(c,b)}},d.prototype.getBlob=function(a,b){var c=this;if(void 0===a&&(a="png"),void 0===b&&(b=1),!this.el||!d.IMG_TYPE_ENUM.includes(a)||"number"!=typeof b||isNaN(b))throw new Error("\u751F\u6210blob\u9519\u8BEF");.3>b&&(b=.3),1<b&&(b=1);var e="image/"+a;return new Promise(function(a){c.el&&c.el.toBlob(function(b){null!=b&&a(b)},e,b)})},d.prototype.getFile=function(a,c,d){return void 0===a&&(a="drawingBoard"),void 0===c&&(c="png"),void 0===d&&(d=1),this.getBlob(c,d).then(function(c){return b(c,a)})},d.prototype.download=function(a,b,c){if(void 0===a&&(a="png"),void 0===b&&(b=1),void 0===c&&(c="drawing-board"),d.IMG_TYPE_ENUM.includes(a)&&"number"==typeof b&&!isNaN(b)){.3>b&&(b=.3),1<b&&(b=1);var e=this.getDataUrl(a,b);if(e){var f=document.createElement("a");document.body.appendChild(f),f.href=e,f.download=c+"-"+new Date().getTime(),f.target="_blank",f.click();var g=setTimeout(function(){f&&document.body.removeChild(f),f=null,clearTimeout(g),g=null},200)}}},d.prototype.makeScaleAddZeroPointOne=function(){var a=this.scale+.1;this.setScale(a)},d.prototype.makeScaleSubtractZeroPointOne=function(){var a=this.scale-.1;this.setScale(a)},d.prototype.reset=function(){this.dragTransformX=this.dragTransformY=0,this.scale=1,this._setCanvasTransform(this.dragTransformX,this.dragTransformY,this.scale,!0)},d.INTERACTIVE_MODE_ENUM=["mouse","touch","both"],d.IMG_TYPE_ENUM=["jpg","jpeg","png","webp"],d.PEN_MODE_ENUM=["paint","drag","empty"],d.DEFAULT_WIDTH=300,d.DEFAULT_HEIGHT=150,d.LIMIT_MIN_REVOKE_STEPS=10,d.LIMIT_MAX_REVOKE_STEPS=50,d.LIMIT_MIN_SCALE=.5,d.LIMIT_MAX_SCALE=3,d.DEFAULT_SCALE=1,d._defaultOptions={size:[],className:"",manualMount:!1,maxRevokeSteps:10,interactiveMode:"mouse",penColor:"red",penWidth:6,bgImgURL:"",bgImgRotate:0,bgColor:"#fff",onRevokeStackChange:null,onPaintEnd:null,penMode:"empty",minScale:1,maxScale:3},d}();return i});
//# sourceMappingURL=drawing-board.umd.js.map
