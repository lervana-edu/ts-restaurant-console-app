import { config } from 'dotenv'

config()

export type TAppConfig = {
  RESTAURANT_NAME: string
  UI_WIDTH: number
}

const APP_CONFIG: TAppConfig = {
  RESTAURANT_NAME: process.env.RESTAURANT_NAME ?? 'Example name',
  UI_WIDTH: process.env.UI_WIDTH ? parseInt(process.env.UI_WIDTH) : 150,
}

export default APP_CONFIG
