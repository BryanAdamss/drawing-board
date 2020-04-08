/**
 * @author DrawingBoard
 * @description 绘图板
 */

export type INTERACTIVE_MODE = 'mouse' | 'touch' | 'both' // 交互模式
export type IMG_TYPE = 'jpg' | 'jpeg' | 'png' | 'webp' // 图片类型
export type PEN_MODE = 'paint' | 'drag' | 'empty' // 画笔模式

export interface Options {
  size?: number[] // canvas尺寸
  className?: string // 自定义样式类
  manualMount?: false // 手动挂载
  maxRevokeSteps?: number // 最大回退步数
  interactiveMode?: INTERACTIVE_MODE // 交互模式 enum:['mouse','touch','both'] ,both将同时绑定mouse、touch事件(PointerEvent存在兼容性问题，放弃使用)
  penColor?: string // 画笔颜色
  penWidth?: number // 画笔粗细
  bgImgURL?: string // 背景图url或base64
  bgImgRotate?: number // 背景图旋转角度
  bgColor?: string // 背景色
  onRevokeStackChange?: any // 撤销栈改变时的回调
  onPaintEnd?: any // 绘制一笔结束的回调
  penMode?: PEN_MODE // 画笔模式
  minScale?: number // 最小缩放比例
  maxScale?: number // 最大缩放比例
  initialScale?: number // 初始缩放比例
  scaleTransition?: boolean // 缩放动画
  scaleStep?: number // 缩放步进值
}

export interface Point {
  x: number
  y: number
}

// 事件映射列表相关
export type EventPointerType = 'mouse' | 'touch' | 'touchAndMouse'
export type EventAction = 'start' | 'move' | 'end' | 'leave' | 'cancel'
export type EventName =
  | 'mousedown'
  | 'mousemove'
  | 'mouseup'
  | 'mouseleave'
  | 'touchstart'
  | 'touchmove'
  | 'touchend'
  | 'touchcancel'

export interface EventItem {
  pointerType: EventPointerType
  action: EventAction
  name: EventName
  handler: any
}

export interface PenStyle {
  color?: string
  width?: number
}

export interface EventItemCondition {
  pointerType?: EventPointerType
  action?: EventAction
}
