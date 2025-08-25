import {defineConfig} from 'vite'
import fs from 'fs'
import path from 'path'

export default defineConfig({
    plugins: [
        {
            name: 'transform-public-config',
            configureServer(server) {
                server.middlewares.use((req, res, next) => {
                    if (req.url === '/config.json') {
                        const configPath = path.resolve(__dirname, 'env/local/config.json')
                        let content = fs.readFileSync(configPath, 'utf-8')
                        res.setHeader('Content-Type', 'application/json')
                        res.end(content)
                        return
                    }
                    next()
                })
            }
        }
    ]
})
