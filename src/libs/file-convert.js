/**
 * @author GuangHui
 * @description 文件相关类型转换函数
 */

import { isIE } from './browser'

/**
 * blob转File
 *
 * @export File
 * @param {Blob} blob blob
 * @param {String} name filename
 * @returns
 */
export function blob2File(blob, name) {
  if (isIE) {
    // IE不支持new File
    blob.lastModifiedDate = new Date()
    blob.name = name
    return blob
  } else {
    return new File([blob], name, { type: blob.type })
  }
}
