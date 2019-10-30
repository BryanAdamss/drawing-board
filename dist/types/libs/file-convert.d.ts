/**
 * @author GuangHui
 * @description 文件相关类型转换函数
 */
import { IeCompatibleBlob } from '../types/blob';
/**
 * blob转File
 *
 * @export File
 * @param {Blob} blob blob
 * @param {String} name filename
 * @returns
 */
export declare function blob2File(blob: IeCompatibleBlob, name: string): IeCompatibleBlob | File;
