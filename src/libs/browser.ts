/**
 * @author GuangHui
 * @description 浏览器判断
 */

export const inBrowser: boolean = typeof window !== 'undefined'

export const UA: string = inBrowser
  ? window.navigator.userAgent.toLowerCase()
  : ''

export const isIE: boolean = UA ? /msie|trident/.test(UA) : false
