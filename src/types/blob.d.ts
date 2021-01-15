/**
 * @author GuangHui
 * @description blob
 */

export interface IeCompatibleBlob extends Blob {
  lastModifiedDate?: Date
  name?: string
}
