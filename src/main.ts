import { App } from './app/app.ts'
import {AppConfig} from './config.ts'

const config = await AppConfig.load()
console.log('config', config)

const root = document.getElementById('root')
const app = App(config)
root?.appendChild(app);
