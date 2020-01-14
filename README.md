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
import DrawingBoard from '@bryanadamss/drawing-board'

const options = {
  size: [400, 300],
  penWidth: 10
}

const board = new DrawingBoard('#board', options)

const base64 = board.getDataUrl()

board.rotate()
board.download()
```

## Demos

- https://github.com/BryanAdamss/drawing-board/tree/master/examples

or

- `clone` this `repo`
- `npm i`
- `npm run dev`
- open `localhost:8080`

## API

`new DrawingBoard(selector,options)`

- `selector` is **required**
- `options`

```javascript
// 默认参数
defaultOptions = {
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

```typescript


  /**
   * 设置画笔样式(粗细、颜色)
   *
   * @param {PenStyle} { color, width } 样式
   * @memberof DrawingBoard
   */
  setPenStyle({ color, width }: PenStyle): void {}

  /**
   * 设置canvas尺寸
   *
   * @param {number[]} [width, height] 宽高数组
   * @memberof DrawingBoard
   */
  setSize([width, height]: number[]): void {}

  /**
   * 设置样式名
   *
   * @param {string} name 样式类字符串
   * @memberof DrawingBoard
   */
  setClassName(name: string): void {}

  /**
   * 设置画笔模式为绘制模式
   *
   * @memberof DrawingBoard
   */
  setPenModePaint(): void {}

  /**
   * 设置画笔模式为拖拽模式
   *
   * @memberof DrawingBoard
   */
  setPenModeDrag(): void {}

  /**
   * 重置画笔模式为空
   *
   * @memberof DrawingBoard
   */
  setPenModeEmpty(): void {}

  /**
   * 设置缩放比例
   *
   * @param {*} scale 缩放比例
   * @memberof DrawingBoard
   */
  setScale(scale: any): void {}

  /**
   * 挂载
   * @returns void
   */
  mount(): void {}

  /**
   * 销毁
   *
   * @memberof DrawingBoard
   */
  destory(): void {}

  /**
   * 清空绘制
   * @returns void
   */
  clear(): void {}

  /**
   * 旋转
   *
   * @param {number} [direction=1] 方向 1顺时针 -1逆时针
   * @memberof DrawingBoard
   */
  rotate(direction = 1): void {}

  /**
   * 撤销
   * @returns void
   */
  revoke(): void {}

  /**
   * 设置背景
   *
   * @param {(CanvasImageSource | string)} urlOrObject 需要绘制的图像对象(HTMLImageElement、SVGImageElement、HTMLVideoElement、HTMLCanvasElement、ImageBitmap、OffscreenCanvas)或图像url
   * @param {number} originalWidth 原图像宽度。当无法从urlOrObject直接获取原始尺寸时需要手动提供原始尺寸
   * @param {number} originalHeight 原图像高度
   * @memberof DrawingBoard
   */
  setBgImg(
    urlOrObject: CanvasImageSource | string,
    originalWidth: number,
    originalHeight: number
  ): void {}

  /**
   * scale + 0.1
   *
   * @memberof DrawingBoard
   */
  makeScaleAddZeroPointOne(): void {}

  /**
   * scale - 0.1
   *
   * @memberof DrawingBoard
   */
  makeScaleSubtractZeroPointOne(): void {}

  /**
   * 重置缩放比例、位置
   *
   * @memberof DrawingBoard
   */
  reset(): void {}

  /**
   * 获取当前画面的绘制次数
   *
   * @returns {number} 绘制次数
   * @memberof DrawingBoard
   */
  getPaintCount(): number {}

  /**
   * 获取dataURL
   *
   * @param {IMG_TYPE} [type='png'] 图片类型
   * @param {number} [compressRate=1] 压缩比率
   * @returns dataURL
   * @memberof DrawingBoard
   */
  getDataUrl(type: IMG_TYPE = 'png', compressRate = 1): string {}

  /**
   * 获取Blob
   *
   * @param {IMG_TYPE} [type='png'] 图片类型
   * @param {number} [compressRate=1] 压缩比率
   * @returns {Promise<Blob>} 返回blob
   * @memberof DrawingBoard
   */
  getBlob(type: IMG_TYPE = 'png', compressRate = 1): Promise<Blob> {}

  /**
   * 获取File
   *
   * @param {string} [name='drawingBoard'] 图片名称
   * @param {IMG_TYPE} [type='png'] 图片类型
   * @param {number} [compressRate=1] 压缩比率
   * @returns {(Promise<File | IeCompatibleBlob>)} 返回FIle或IeCompatibleBlob
   * @memberof DrawingBoard
   */
  getFile(
    name = 'drawingBoard',
    type: IMG_TYPE = 'png',
    compressRate = 1
  ): Promise<File | IeCompatibleBlob> {}

  /**
   * 下载图片
   *
   * @param {IMG_TYPE} [type='png'] 图片类型
   * @param {number} [compressRate=1] 压缩比率，默认原图输出
   * @param {string} [name='drawing-board'] 图片名称
   * @memberof DrawingBoard
   */
  download(
    type: IMG_TYPE = 'png',
    compressRate = 1,
    name = 'drawing-board'
  ): void {}
```

## Changelog

[changelog](https://github.com/BryanAdamss/drawing-board/blob/master/CHANGELOG.md)

Detailed changes for each release are documented in the [release notes](https://github.com/BryanAdamss/drawing-board/releases).

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2019-present, bryanadamss GuangHui.
