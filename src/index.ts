import { FRAME, printMessage, TEXT_ALIGN } from './ui'
import MESSAGES from './messages'
import { showOptions } from './options'

printMessage(MESSAGES.RESTAURANT_NAME, {
  frame: [FRAME.UP, FRAME.DOWN, FRAME.LEFT, FRAME.RIGHT],
  align: TEXT_ALIGN.center,
})

printMessage(MESSAGES.WELCOME_INFO, {
  frame: [FRAME.LEFT, FRAME.RIGHT],
  align: TEXT_ALIGN.center,
})

showOptions(true)
