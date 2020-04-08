/**
 * @author GuangHui
 * @description 绘图板
 */
import { INTERACTIVE_MODE, IMG_TYPE, PEN_MODE, Options, Point, EventItem, PenStyle } from './types/drawing-board';
import { IeCompatibleBlob } from './types/blob';
declare class DrawingBoard {
    static INTERACTIVE_MODE_ENUM: INTERACTIVE_MODE[];
    static IMG_TYPE_ENUM: IMG_TYPE[];
    static PEN_MODE_ENUM: PEN_MODE[];
    static DEFAULT_WIDTH: number;
    static DEFAULT_HEIGHT: number;
    static LIMIT_MIN_REVOKE_STEPS: number;
    static LIMIT_MAX_REVOKE_STEPS: number;
    static LIMIT_MIN_SCALE: number;
    static DEFAULT_SCALE: number;
    static DEFAULT_MAX_SCALE: number;
    private static _defaultOptions;
    originalOptions: Options;
    options: Options;
    container: HTMLElement;
    el: HTMLCanvasElement | null;
    width: number;
    height: number;
    manualMount: boolean;
    revokeStack: any[];
    MAX_REVOKE_STEPS: number;
    isPainting: boolean;
    lastPaintPoint: Point | null;
    isDraging: boolean;
    lastDragPoint: Point | null;
    dragTransformX: number;
    dragTransformY: number;
    penMode: PEN_MODE;
    interactiveMode: INTERACTIVE_MODE;
    eventList: EventItem[];
    penColor: string;
    penWidth: number;
    className: string;
    bgImgURL: string;
    bgColor: string;
    bgImgRotate: number;
    _bgImgObject: CanvasImageSource | null;
    originalSize: number[];
    onRevokeStackChange: any;
    onPaintEnd: any;
    paintCount: number;
    scaleTransition: boolean;
    minScale: number;
    maxScale: number;
    initialScale: number;
    scale: number;
    scaleStep: number;
    ctx: CanvasRenderingContext2D | null;
    /**
     * Creates an instance of DrawingBoard.
     *
     * @param {(HTMLElement | string)} container 选择器或el
     * @param {Options} options 选项
     * @memberof DrawingBoard
     */
    constructor(container: HTMLElement | string, options: Options);
    /**
     * 获取合法的缩放值
     *
     * @private
     * @param {*} scale 缩放值
     * @returns {number} 合法的缩放值
     * @memberof DrawingBoard
     */
    private _getLawfulScale;
    /**
     * 获取合法的最小缩放值
     *
     * @private
     * @param {*} scale 缩放值
     * @returns {number} 合法的最小缩放值
     * @memberof DrawingBoard
     */
    private _getLawfulMinScale;
    /**
     * 获取合法的最大缩放值
     *
     * @private
     * @param {*} scale 缩放值
     * @returns {number} 合法的最大缩放值
     * @memberof DrawingBoard
     */
    private _getLawfulMaxScale;
    /**
     * 获取合法的交互模式
     *
     * @private
     * @param {*} mode 模式字符串
     * @returns {PEN_MODE} 模式字符串
     * @memberof DrawingBoard
     */
    private _getInteractiveMode;
    /**
     * 获取合法的画笔模式
     *
     * @private
     * @param {*} mode 模式字符串
     * @returns {PEN_MODE} 画笔模式
     * @memberof DrawingBoard
     */
    private _getPenMode;
    /**
     * 获取container容器
     *
     * @private
     * @param {(HTMLElement | string)} container 选择器或el
     * @returns container容器el
     * @memberof DrawingBoard
     */
    private _getContainer;
    /**
     * 获取合法className
     *
     * @private
     * @param {*} name 样式类
     * @returns {string} 合法样式类
     * @memberof DrawingBoard
     */
    private _getClassName;
    /**
     * 获取合法penColor
     *
     * @private
     * @param {*} color 颜色
     * @returns {string} 合法颜色值
     * @memberof DrawingBoard
     */
    private _getPenColor;
    /**
     * 获取合法penWidth
     *
     * @private
     * @param {*} width 粗细
     * @returns {number}  合法画笔粗细
     * @memberof DrawingBoard
     */
    private _getPenWidth;
    /**
     * 获取合法角度值(逆时针旋转角度记录为正值，-90度 记录为270；450记录为90,10度记录为0,55度记录为90)
     *
     * @private
     * @param {*} angle 角度
     * @returns {number} 合法角度值
     * @memberof DrawingBoard
     */
    private _getLawfulRotateAngle;
    /**
     * 获取事件相对触发对象的偏移值
     *
     * @private
     * @param {(MouseEvent | TouchEvent)} e 事件对象
     * @returns {Point} 坐标
     * @memberof DrawingBoard
     */
    private _getPointOffset;
    /**
     * 获取合法的最大撤销步数
     *
     * @private
     * @param {number} steps steps 步数
     * @returns {number} 合法的最大撤销步数
     * @memberof DrawingBoard
     */
    private _getLawfulMaxRevokeSteps;
    /**
     * 获取模式对应的指针类型
     * @param {string} mode 模式
     * @returns 类型字符串
     */
    private _getPointerType;
    /**
     * 生成事件映射列表
     *
     * @private
     * @returns {EventItem[]} 事件映射列表
     * @memberof DrawingBoard
     */
    private _makeEventList;
    /**
     * 过滤出符合条件的EventItems
     *
     * @private
     * @param {EventItemCondition} 过滤条件
     * @returns {EventItem[]} EventItems数组
     * @memberof DrawingBoard
     */
    private _getEventItems;
    /**
     * 生成canvas元素
     *
     * @private
     * @returns {HTMLCanvasElement} canvas DOM对象
     * @memberof DrawingBoard
     */
    private _makeCanvas;
    /**
     * 获取绘图上下文
     *
     * @private
     * @returns {CanvasRenderingContext2D} 2d上下文
     * @memberof DrawingBoard
     */
    private _getCtx;
    /**
     * 设置canvas transform
     *
     * @private
     * @param {number} x 横轴
     * @param {number} y 纵轴
     * @param {number} scale 缩放比例
     * @param {boolean} [transition=false] 过渡动画
     * @memberof DrawingBoard
     */
    private _setCanvasTransform;
    /**
     * 设置canvas dom尺寸
     *
     * @private
     * @param {number[]} [width, height] 宽高数组
     * @memberof DrawingBoard
     */
    private _setDOMSize;
    /**
     * 设置画笔模式
     *
     * @private
     * @param {PEN_MODE} mode 画笔模式
     * @memberof DrawingBoard
     */
    private _setPenMode;
    /**
     * 保存当前画布状态
     *
     * @private
     * @param {PEN_MODE} [type='paint'] 类型(绘制paint、清空clear) 默认paint
     * @param {number} paintCount 绘制次数
     * @param {ImageData} imageData 像素数据
     * @memberof DrawingBoard
     */
    private _saveImageData;
    /**
     * 绑定当前模式对应动作的所有事件
     * @param {String} action 动作
     * @returns void
     */
    private _bindCurInteractiveModeEvents;
    /**
     * 清除当前模式对应动作的所有事件
     * @param {String} action 动作
     * @returns void
     */
    private _cleanCurInteractiveModeEvents;
    /**
     * 绑定符合特定条件的事件
     * @param {Object} condition 过滤条件
     * @returns void
     */
    private _bindEvent;
    /**
     * 清除符合特定条件的事件
     * @param {Object} condition 过滤条件
     * @returns void
     */
    private _cleanEvent;
    /**
     * 单步撤销
     *
     * @private
     * @memberof DrawingBoard
     */
    private _revoke;
    /**
     * 获取背景图并绘制
     *
     * @private
     * @param {string} bgImgURL 背景图url
     * @memberof DrawingBoard
     */
    private _getImgAndDraw;
    /**
     * 绘制背景底图
     *
     * @private
     * @param {CanvasImageSource} imgObject 图像对象
     * @param {number} w 宽
     * @param {number} h 高
     * @memberof DrawingBoard
     */
    private _drawBg;
    /**
     * 绘制圆形
     *
     * @private
     * @param {number} x 横轴
     * @param {number} y 纵轴
     * @param {number} [radius=3] 半径
     * @param {string} [color='red'] 画笔颜色
     * @memberof DrawingBoard
     */
    private _drawCircle;
    /**
     * 绘制移动时的直线
     *
     * @private
     * @param {number} x1 起点x1
     * @param {number} y1 起点y1
     * @param {number} x2 终点x2
     * @param {number} y2 终点y2
     * @param {number} [width=6] 线条宽度
     * @param {string} [color='red'] 线条颜色
     * @memberof DrawingBoard
     */
    private _drawLine;
    /**
     * 处理指针开始
     *
     * @private
     * @param {Event} e 事件对象
     * @returns void
     * @memberof DrawingBoard
     */
    private _handlePointerStart;
    /**
     * 处理绘制开始
     *
     * @private
     * @param {Event} e 事件对象
     * @memberof DrawingBoard
     */
    private _handlePaintStart;
    /**
     * 处理拖拽开始
     */
    private _handleDragStart;
    /**
     * 处理指针移动
     *
     * @private
     * @param {Event} e 事件对象
     * @returns void
     * @memberof DrawingBoard
     */
    private _handlePointerMove;
    /**
     * 处理绘制移动
     */
    private _handlePaintMove;
    /**
     * 处理拖拽移动
     *
     * @private
     * @param {(MouseEvent | TouchEvent)} e 事件对象
     * @memberof DrawingBoard
     */
    private _handleDragMove;
    /**
     * 处理指针结束
     *
     * @private
     * @param {MouseEvent | TouchEvent} e 事件对象
     * @returns void
     * @memberof DrawingBoard
     */
    private _handlePointerEnd;
    /**
     * 处理绘制结束
     */
    private _handlePaintEnd;
    /**
     * 处理拖拽结束
     */
    private _handleDragEnd;
    /**
     * 处理指针离开
     *
     * @private
     * @param {Event} e 事件对象
     * @returns void
     * @memberof DrawingBoard
     */
    private _handlePointerLeave;
    /**
     * 处理指针取消
     *
     * @private
     * @param {Event} e 事件对象
     * @returns void
     * @memberof DrawingBoard
     */
    private _handlePointerCancel;
    /**
     * 处理缩放比例改变
     *
     * @private
     * @memberof DrawingBoard
     */
    private _handleScaleChange;
    /**
     * 设置画笔样式(粗细、颜色)
     *
     * @param {PenStyle} { color, width } 样式
     * @memberof DrawingBoard
     */
    setPenStyle({ color, width }: PenStyle): void;
    /**
     * 设置canvas尺寸
     *
     * @param {number[]} [width, height] 宽高数组
     * @memberof DrawingBoard
     */
    setSize([width, height]: number[]): void;
    /**
     * 设置样式名
     *
     * @param {string} name 样式类字符串
     * @memberof DrawingBoard
     */
    setClassName(name: string): void;
    /**
     * 设置画笔模式为绘制模式
     *
     * @memberof DrawingBoard
     */
    setPenModePaint(): void;
    /**
     * 设置画笔模式为拖拽模式
     *
     * @memberof DrawingBoard
     */
    setPenModeDrag(): void;
    /**
     * 重置画笔模式为空
     *
     * @memberof DrawingBoard
     */
    setPenModeEmpty(): void;
    /**
     * 设置缩放比例
     *
     * @param {*} scale 缩放比例
     * @memberof DrawingBoard
     */
    setScale(scale: any): void;
    /**
     * 挂载
     * @returns void
     */
    mount(): void;
    /**
     * 销毁
     *
     * @memberof DrawingBoard
     */
    destory(): void;
    /**
     * 清空绘制
     * @returns void
     */
    clear(): void;
    /**
     * 旋转
     *
     * @param {number} [direction=1] 方向 1顺时针 -1逆时针
     * @memberof DrawingBoard
     */
    rotate(direction?: number): void;
    /**
     * 撤销
     * @returns void
     */
    revoke(): void;
    /**
     * 设置背景
     *
     * @param {(CanvasImageSource | string)} urlOrObject 需要绘制的图像对象(HTMLImageElement、SVGImageElement、HTMLVideoElement、HTMLCanvasElement、ImageBitmap、OffscreenCanvas)或图像url
     * @param {number} originalWidth 原图像宽度。当无法从urlOrObject直接获取原始尺寸时需要手动提供原始尺寸
     * @param {number} originalHeight 原图像高度
     * @memberof DrawingBoard
     */
    setBgImg(urlOrObject: CanvasImageSource | string, originalWidth: number, originalHeight: number): void;
    /**
     * scale + scaleStep
     *
     * @memberof DrawingBoard
     */
    makeScaleAdd(): void;
    /**
     * scale - scaleStep
     *
     * @memberof DrawingBoard
     */
    makeScaleSubtract(): void;
    /**
     * 重置缩放比例、位置
     *
     * @memberof DrawingBoard
     */
    reset(): void;
    /**
     * 获取当前画面的绘制次数
     *
     * @returns {number} 绘制次数
     * @memberof DrawingBoard
     */
    getPaintCount(): number;
    /**
     * 获取dataURL
     *
     * @param {IMG_TYPE} [type='png'] 图片类型
     * @param {number} [compressRate=1] 压缩比率
     * @returns dataURL
     * @memberof DrawingBoard
     */
    getDataUrl(type?: IMG_TYPE, compressRate?: number): string;
    /**
     * 获取Blob
     *
     * @param {IMG_TYPE} [type='png'] 图片类型
     * @param {number} [compressRate=1] 压缩比率
     * @returns {Promise<Blob>} 返回blob
     * @memberof DrawingBoard
     */
    getBlob(type?: IMG_TYPE, compressRate?: number): Promise<Blob>;
    /**
     * 获取File
     *
     * @param {string} [name='drawingBoard'] 图片名称
     * @param {IMG_TYPE} [type='png'] 图片类型
     * @param {number} [compressRate=1] 压缩比率
     * @returns {(Promise<File | IeCompatibleBlob>)} 返回FIle或IeCompatibleBlob
     * @memberof DrawingBoard
     */
    getFile(name?: string, type?: IMG_TYPE, compressRate?: number): Promise<File | IeCompatibleBlob>;
    /**
     * 下载图片
     *
     * @param {IMG_TYPE} [type='png'] 图片类型
     * @param {number} [compressRate=1] 压缩比率，默认原图输出
     * @param {string} [name='drawing-board'] 图片名称
     * @memberof DrawingBoard
     */
    download(type?: IMG_TYPE, compressRate?: number, name?: string): void;
}
export default DrawingBoard;
