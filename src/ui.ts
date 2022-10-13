import APP_CONFIG from './config'

const UI_WIDTH = APP_CONFIG.UI_WIDTH

export enum TEXT_ALIGN {
  left,
  center,
  right,
}

export enum FRAME {
  LEFT,
  RIGHT,
  UP,
  DOWN,
}

const getPad = (size: number, sign: string = ' ') => {
  if (sign.length !== 1)
    throw new Error('Invalid pad character, only one sign characters are allowed.')

  let result = ''
  for (let x = 0; x < size; x++) {
    result += sign
  }

  return result
}

type TPadOptions = {
  maxSize: number
  align?: TEXT_ALIGN
  sign?: string
  hasLeftFrame: boolean
  hasRightFrame: boolean
  leftOffset?: number
}

const pad = (
  text: string,
  {
    maxSize,
    align = TEXT_ALIGN.left,
    sign,
    hasLeftFrame,
    hasRightFrame,
    leftOffset = 0,
  }: TPadOptions
) => {
  const padLength =
    maxSize - (hasLeftFrame ? 2 : 0) - (hasRightFrame ? 2 : 0) - leftOffset - text.length
  if (padLength < 0) throw new Error('Only one line per one pad function is allowed')

  const halfPadLength = padLength / 2

  let result = text
  if (align === TEXT_ALIGN.left) result = text + getPad(padLength, sign)
  else if (align === TEXT_ALIGN.right) result = getPad(padLength, sign) + text
  else {
    const halfPad = getPad(halfPadLength)
    result = halfPad + text + halfPad + (padLength % 2 === 0 || hasRightFrame ? '' : sign)
  }

  if (leftOffset) result = getPad(leftOffset) + result
  if (hasLeftFrame) result = '| ' + result
  if (hasRightFrame && align !== TEXT_ALIGN.center) result = result + ' |'
  else if (hasRightFrame) result = result + (padLength % 2 === 0 ? ' |' : '|')

  return result
}

const splitToLines = (text: string, maxSize = UI_WIDTH) => {
  const lines: string[] = []

  while (text.length > 0) {
    if (text.length <= maxSize) {
      lines.push(text)
      text = ''
    } else {
      const line = text.substring(0, maxSize + 1)
      const lastSpaceIndex = line.lastIndexOf(' ')
      lines.push(line.substring(0, lastSpaceIndex))
      text = text.substring(lastSpaceIndex + 1)
    }
  }

  return lines
}

export type TPrintMessage = {
  align?: TEXT_ALIGN
  padSign?: string
  size?: number
  frame?: FRAME[]
  leftOffset?: number
}

export const printMessage = (
  text: string,
  {
    align = TEXT_ALIGN.left,
    size = UI_WIDTH,
    padSign = ' ',
    frame = [],
    leftOffset,
  }: TPrintMessage = {}
) => {
  const dashedLine = getPad(size, '-')
  const lines = frame.indexOf(FRAME.UP) !== -1 ? [dashedLine] : []

  const hasLeftFrame = frame.indexOf(FRAME.LEFT) !== -1
  const hasRightFrame = frame.indexOf(FRAME.RIGHT) !== -1

  splitToLines(text, size).map((line) => {
    lines.push(
      pad(line, { align, sign: padSign, hasLeftFrame, hasRightFrame, maxSize: size, leftOffset })
    )
  })

  if (frame.indexOf(FRAME.DOWN) !== -1) lines.push(dashedLine)

  lines.forEach((line) => console.log(line))
}

export const printEmptyXBorder = (size = UI_WIDTH) => {
  console.log(pad('', { hasLeftFrame: true, hasRightFrame: true, maxSize: size }))
}

export const printDashedLine = (size = UI_WIDTH) => {
  console.log(getPad(size, '-'))
}
