import prompt from 'prompt'

import { FRAME, printDashedLine, printEmptyXBorder, printMessage } from './ui'
import MESSAGES from './messages'

export const showOptions = (showFrame = false) => {
  printEmptyXBorder()

  const frame = showFrame ? [FRAME.LEFT, FRAME.RIGHT] : []
  const leftOffset = 4

  printMessage(MESSAGES.OPTIONS, { frame, leftOffset })
  printMessage(MESSAGES.OPTION_0, { frame, leftOffset })
  printMessage(MESSAGES.OPTION_1, { frame, leftOffset })
  printMessage(MESSAGES.OPTION_2, { frame, leftOffset })
  printMessage(MESSAGES.OPTION_3, { frame, leftOffset })
  printEmptyXBorder()
  printDashedLine()

  prompt.start()

  prompt.get([MESSAGES.OPTION], function (err, result) {
    switch (result[MESSAGES.OPTION]) {
      case '0':
        console.log(MESSAGES.EXIT)
        return process.exit(0)
      case '1':
        return console.log('TASK 1')
      case '2':
        return console.log('TASK 2')
      case '3':
        return console.log('TASK 3')
      default: {
        console.log(MESSAGES.UNKNOWN_OPTION)
        printDashedLine()
        showOptions(true)
      }
    }
  })
}
