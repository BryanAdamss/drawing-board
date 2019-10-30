/**
 * @author GuangHui
 * @description 文件相关类型转换函数
 */
import { IeCompatibleBlob } from '../types/blob'

import { isIE } from './browser.js'

/**
 * blob转File
 *
 * @export File
 * @param {Blob} blob blob
 * @param {String} name filename
 * @returns
 */
export function blob2File(
  blob: IeCompatibleBlob,
  name: string
): File | IeCompatibleBlob {
  if (isIE) {
    // IE不支持new File
    blob.lastModifiedDate = new Date()
    blob.name = name
    return blob
  } else {
    return new File([blob], name, { type: blob.type })
  }
}
