/**
 * @author GuangHui
 * @description dom
 */

export const $: (selector: string) => HTMLElement | null = selector =>
  document.querySelector(selector)
