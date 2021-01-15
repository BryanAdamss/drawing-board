import { ones, inv, multiply } from 'mathjs'

export function getOffsetPosition(x: number, y: number, elOrCache: any) {
  function getVertexPosition(el: any) {
    let currentTarget = el
    let top = 0
    let left = 0
    while (currentTarget !== null) {
      top += currentTarget.offsetTop
      left += currentTarget.offsetLeft
      currentTarget = currentTarget.offsetParent
    }
    return { top, left }
  }

  function getTranformData(el: any) {
    let style = window.getComputedStyle(el)
    let transform: any = style.transform || ''
    let transformOrigin = style.transformOrigin || ''

    let origin = { x: 0, y: 0 }
    let matrix = ones([3, 3])
    if (transform !== 'none') {
      let originArray = transformOrigin.split(' ')
      origin.x = parseInt(originArray[0])
      origin.y = parseInt(originArray[1])

      let matrixString = transform.match(/\(([^)]*)\)/)[1]
      let stringArray: any = matrixString.split(',')
      let temp: any = []
      stringArray.forEach((value: any) => {
        temp.push(parseFloat(value.trim()))
      })
      temp = [
        [temp[0], temp[2], temp[4]],
        [temp[1], temp[3], temp[5]],
        [0, 0, 1],
      ]

      matrix = inv(temp)
    } else {
      matrix = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ]
    }
    return { matrix, origin }
  }

  function computPosition(data: any) {
    data.forEach((obj: any) => {
      let {
        temp,
        origin,
        vertex: { left, top },
      } = obj as any
      x = x - left - origin.x
      y = y - top - origin.y
      let result = multiply(temp, [x, y, 1])
      x = result[0] + origin.x
      y = result[1] + origin.y
    })
    return { x, y }
  }

  let data = []
  if (elOrCache instanceof Node) {
    var el = elOrCache
    while (el !== null && el.nodeType === 1) {
      let { left, top } = getVertexPosition(el)
      let transformData = getTranformData(el)
      let temp = transformData.matrix
      let origin = transformData.origin

      if (data.length > 0) {
        data[0].vertex.left -= left
        data[0].vertex.top -= top
      }
      data.unshift({
        temp,
        origin,
        vertex: {
          left,
          top,
        },
      })
      el = el.parentNode as Node
    }
  } else if (elOrCache instanceof Array) {
    data = elOrCache
  }
  let pos = computPosition(data)
  return { x: pos.x, y: pos.y, data }
}
