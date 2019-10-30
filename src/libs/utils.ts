/**
 * @author GuangHui
 * @description utils
 */

export const getImageFromURL = (imgURL: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    if (!/^(http[s]?)|(data:image)/.test(imgURL)) {
      reject(new Error('图片url格式不正确'))
      return
    }

    const image = new Image()
    image.src = imgURL

    image.onload = () => {
      resolve(image)
    }

    image.onerror = reject

    // 确保从缓存加载图片时，也能触发load事件
    if (image.complete || image.complete === undefined) {
      image.src =
        'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=='
      image.src = imgURL
    }
  })
