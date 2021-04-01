/**
 * 模拟鼠标的offsetX(考虑了transform rotate的情况)
 * @param x 坐标x
 * @param y 坐标y
 * @param elOrCache 节点或缓存
 * @returns touch.offsetX
 */
export declare function getOffsetPosition(x: number, y: number, elOrCache: any): {
    x: number;
    y: number;
    data: any[];
};
/**
 * 获取父节点的滚动距离
 * @param target HTMLElement 节点
 * @returns 父元素滚动距离
 */
export declare function getScroll(target: HTMLElement): {
    parentScrollTop: number;
    parentScrollLeft: number;
};
