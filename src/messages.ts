import APP_CONFIG from './config'

const MESSAGES: Record<string, string> = {
  RESTAURANT_NAME: `Restauracja ${APP_CONFIG.RESTAURANT_NAME}`,
  WELCOME_INFO: 'Witaj w programie restauracja 1.0',
  OPTIONS: 'Opcje:',
  OPTION_0: '[0] Zamknij program',
  OPTION_1: '[1] Złóż zamówienie',
  OPTION_2: '[2] Historia zamówień',
  OPTION_3: '[3] Raport dla danego dnia',
  ASK_FOR_OPTION: 'Proszę podać opcję: ',
  OPTION: 'Opcja',
  UNKNOWN_OPTION: 'Podano niewłaściwą opcję, proszę wybrać ponownie.',
  EXIT: 'Aplikacja kończy działanie.',
}

export default MESSAGES
