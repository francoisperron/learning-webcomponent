import {defineConfig} from 'vite'

export default defineConfig({
    plugins: [
        {
            name: 'transform-public-config',
            configureServer(server) {
                server.middlewares.use(async (req, res, next) => {
                    // @ts-ignore
                    if (req.url === '/config.json') {
                        let content = await import('./env/local/config.json')
                        res.setHeader('Content-Type', 'application/json')
                        res.end(JSON.stringify(content.default))
                        return
                    }
                    next()
                })
            }
        }
    ]
})
