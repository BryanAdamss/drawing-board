# drawing-board

> 🎨 Javascript drawing board based on canvas

---
![NPM](https://img.shields.io/npm/l/@bryanadamss/drawing-board)
[![GitHub issues](https://img.shields.io/github/issues/BryanAdamss/drawing-board)](https://github.com/BryanAdamss/drawing-board/issues)


## Links

[https://github.com/BryanAdamss/drawing-board](https://github.com/BryanAdamss/drawing-board)

## Install
```javascript
npm i @bryanadamss/drawing-board
```
or
```javascript
<script src="https://unpkg.com/@bryanadamss/drawing-board@latest/dist/drawing-board.umd.js"></script>
```

## Example
```html
<div id="board"></div>
```
```javascript
const options={
  size:[400,300],
  penWidth:10
}

const board=new DrawingBoard('#board',options)

const base64=board.getDataUrl()

board.rotate()
board.download()
```

## Demos
- https://github.com/BryanAdamss/drawing-board/tree/master/examples

## API
DrawingBoard(selector,options)

- `selector` is required
- `options`
```javascript
// 默认参数
defaultOptions={
    size: [], // canvas尺寸
    className: '', // 自定义样式类
    manualMount: false, // 手动挂载
    maxRevokeSteps: 10, // 最大回退步数
    interactiveMode: 'mouse', // 交互模式 enum:['mouse','touch','both'] ,both将同时绑定mouse、touch事件(PointerEvent存在兼容性问题，放弃使用)
    penColor: 'red', // 画笔颜色
    penWidth: 6, // 画笔粗细
    bgImgURL: '', // 背景图url或base64
    bgImgRotate: 0, // 背景图旋转角度
    bgColor: '#fff', // 背景色
    onRevokeStackChange: null, // 撤销栈改变时的回调
    onPaintEnd: null, // 绘制一笔结束的回调
    penMode: 'empty', // 画笔模式
    minScale: 1, // 最小缩放比例
    maxScale: 3 // 最大缩放比例
}
```
- `methods`
```javascript
  
  /**
   * scale + 0.1
   */
  makeScaleAddZeroPointOne() {}

  /**
   * scale - 0.1
   */
  makeScaleSubtractZeroPointOne() {}

  /**
   * 重置缩放比例、位置
   */
  reset() {}

  /**
   * 设置画笔模式为绘制模式
   */
  setPenModePaint() {}

  /**
   * 设置画笔模式为拖拽模式
   */
  setPenModeDrag() {}

  /**
   * 重置画笔模式为空
   */
  setPenModeEmpty() {}

  /**
   * 设置缩放比例
   * @param {Number} scale 缩放比例
   */
  setScale(scale) {}

  /**
   * 获取当前画面的绘制次数
   * @returns 绘制次数
   */
  getPaintCount() {}

  /**
   * 旋转
   * @param {Boolean} direction 方向 1顺时针 -1逆时针
   * @returns void
   */
  rotate(direction = 1) {}

  /**
   * 设置画笔样式(粗细、颜色)
   * @param {Object} penStyle 画笔样式
   * @returns void
   */
  setPenStyle({ color, width }) {}

  /**
   * 撤销
   * @returns void
   */
  revoke() {}

  /**
   * 清空绘制
   * @returns void
   */
  clear() {}

  /**
   * 设置canvas尺寸
   * @param {Number} width 宽
   * @param {Number} height 高
   * @returns void
   */
  setSize([width, height]) {}

  /**
   * 重新初始化
   * @param {Object} options 选项
   * @returns void
   */
  reInit(options) {}

  /**
   * 销毁
   * @returns void
   */
  destory() {}

  /**
   * 设置样式名
   * @param {String} name 样式类字符串
   * @returns void
   */
  setClassName(name) {}

  /**
   * 挂载
   * @returns void
   */
  mount() {}

  /**
   * 设置背景
   * @param {CanvasImageSource|String} urlOrObject 需要绘制的图像对象(HTMLImageElement、SVGImageElement、HTMLVideoElement、HTMLCanvasElement、ImageBitmap、OffscreenCanvas)或图像url
   * @param {Number} originalWidth 原图像宽度。当无法从urlOrObject直接获取原始尺寸时需要手动提供原始尺寸
   * @param {Number} originalHeight 原图像高度
   * @returns void
   */
  setBgImg(urlOrObject, originalWidth, originalHeight) {}

  /**
   * 获取dataURL
   * @param {String} type 图片类型
   * @param {Number} compressRate 压缩比率
   * @returns dataURL
   */
  getDataUrl(type = 'png', compressRate = 1) {}

  /**
   * 获取Blob
   * @param {String} type 图片类型
   * @param {Number} compressRate 压缩比率
   * @returns promise resolved a blob
   */
  getBlob(type = 'png', compressRate = 1) {}

  /**
   * 获取File
   * @param {String} type 图片类型
   * @param {Number} compressRate 压缩比率
   * @returns promise resolved a file
   */
  getFile(name = 'drawingBoard', type = 'png', compressRate = 1) {}

  /**
   * 下载图片
   * @param {String} type 图片类型
   * @param {Number} compressRate 压缩比率，默认原图输出
   * @returns void
   */
  download(type = 'png', compressRate = 1, name = 'drawing-board') {}
```


## Changelog

[changelog](https://github.com/BryanAdamss/drawing-board/blob/master/CHANGELOG.md)

Detailed changes for each release are documented in the [release notes](https://github.com/BryanAdamss/drawing-board/releases).

## License
[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2019-present, bryanadamss GuangHui.


