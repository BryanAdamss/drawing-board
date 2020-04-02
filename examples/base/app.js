import DrawingBoard from '../../dist/drawing-board.esm'

function $(selector) {
  return document.querySelector(selector)
}

function handleRevoke() {
  drawingBoard.revoke()
}

function handleClear() {
  drawingBoard.clear()
}

function handleDownload() {
  drawingBoard.download()
}

function handleGetDataUrl() {
  console.log(drawingBoard.getDataUrl())
}

function handleGetBlob() {
  drawingBoard.getBlob().then(blob => {
    console.log(blob)
  })
}

function handleGetFile() {
  drawingBoard.getFile().then(file => {
    console.log(file)
  })
}

function handleSetPenColor(e) {
  const color = e.target.value
  console.log(color)

  drawingBoard.setPenStyle({ color })
}

function handleSetPenWidth(e) {
  const width = parseInt(e.target.value)

  drawingBoard.setPenStyle({ width })
}

function handleRotate(dir) {
  drawingBoard.rotate(dir)
}

function handleBigBtnClick() {
  drawingBoard.makeScaleAddZeroPointOne()
  console.log('big', drawingBoard.scale)
}

function handleSmallBtnClick() {
  drawingBoard.makeScaleSubtractZeroPointOne()
  console.log('small', drawingBoard.scale)
}

function handleOriginBtnClick() {
  drawingBoard.setScale(1)
  console.log('origin', 1)
}

function handleHandBtnClick() {
  drawingBoard.setPenModeDrag()
  console.log('penMode', drawingBoard.penMode)
}

function handlePaintBtnClick() {
  drawingBoard.setPenModePaint()
  console.log('penMode', drawingBoard.penMode)
}

function handleEmptyBtnClick() {
  drawingBoard.setPenModeEmpty()
  console.log('penMode', drawingBoard.penMode)
}

function handleResetBtnClick() {
  drawingBoard.reset()
}

var drawingBoard = new DrawingBoard('#board', {
  bgImgURL:
    'data:image/png;base64,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',
  className: 'c-MyCanvas',
  size: [300, 400],
  bgImgRotate: 90,
  interactiveMode: 'both',
  maxRevokeSteps: 20,
  onRevokeStackChange(stack) {
    console.log('onRevokeStackChange回调', stack)
  },
  onPaintEnd(paintCount) {
    console.log('onPaintEnd回调', paintCount)
  }
})

$('#revoke').onclick = handleRevoke
$('#clear').onclick = handleClear
$('#download').onclick = handleDownload
$('#getDataUrl').onclick = handleGetDataUrl
$('#getBlob').onclick = handleGetBlob
$('#getFile').onclick = handleGetFile
$('#rotate').onclick = function() {
  handleRotate(1)
}
$('#revertRotate').onclick = function() {
  handleRotate(-1)
}

$('#color').onchange = handleSetPenColor
$('#width').onchange = handleSetPenWidth

$('#big').onclick = handleBigBtnClick
$('#small').onclick = handleSmallBtnClick
$('#origin').onclick = handleOriginBtnClick

$('#hand').onclick = handleHandBtnClick
$('#paint').onclick = handlePaintBtnClick
$('#empty').onclick = handleEmptyBtnClick

$('#reset').onclick = handleResetBtnClick
