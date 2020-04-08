/**
 * @author DrawingBoard
 * @description 绘图板
 */
export declare type INTERACTIVE_MODE = 'mouse' | 'touch' | 'both';
export declare type IMG_TYPE = 'jpg' | 'jpeg' | 'png' | 'webp';
export declare type PEN_MODE = 'paint' | 'drag' | 'empty';
export interface Options {
    size?: number[];
    className?: string;
    manualMount?: false;
    maxRevokeSteps?: number;
    interactiveMode?: INTERACTIVE_MODE;
    penColor?: string;
    penWidth?: number;
    bgImgURL?: string;
    bgImgRotate?: number;
    bgColor?: string;
    onRevokeStackChange?: any;
    onPaintEnd?: any;
    penMode?: PEN_MODE;
    minScale?: number;
    maxScale?: number;
    initialScale?: number;
    scaleTransition?: boolean;
    scaleStep?: number;
}
export interface Point {
    x: number;
    y: number;
}
export declare type EventPointerType = 'mouse' | 'touch' | 'touchAndMouse';
export declare type EventAction = 'start' | 'move' | 'end' | 'leave' | 'cancel';
export declare type EventName = 'mousedown' | 'mousemove' | 'mouseup' | 'mouseleave' | 'touchstart' | 'touchmove' | 'touchend' | 'touchcancel';
export interface EventItem {
    pointerType: EventPointerType;
    action: EventAction;
    name: EventName;
    handler: any;
}
export interface PenStyle {
    color?: string;
    width?: number;
}
export interface EventItemCondition {
    pointerType?: EventPointerType;
    action?: EventAction;
}
