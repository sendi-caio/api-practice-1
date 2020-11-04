import express from 'express'
import path from 'path'
import swaggerDist from 'swagger-ui-dist'
import jsonServer from 'json-server'
import auth from 'json-server-auth'
import browserSync from 'browser-sync'
import cors from 'cors'

const config = require('./config')

const server = express()
const router = jsonServer.router('./server/db.json')
const middlewares = jsonServer.defaults()

server.db = router.db

const rules = auth.rewriter({
  users: 600,
  posts: 660,
})

const swaggerPath = swaggerDist.absolutePath()

server.use(cors({
  origin: '*',
}))

server.use('/swagger-ui.css', express.static(path.join(swaggerPath, 'swagger-ui.css')))
server.use('/swagger-ui-bundle.js', express.static(path.join(swaggerPath, 'swagger-ui-bundle.js')))
server.use('/swagger-ui-standalone-preset.js', express.static(path.join(swaggerPath, 'swagger-ui-standalone-preset.js')))

server.use('/openapi.json', express.static(path.join(__dirname, 'openapi.json')))
server.use(express.static(__dirname))
server.use(middlewares)

server.use(jsonServer.bodyParser)
server.put('/v1/task-item/rename/:id', (req, res) => {
  const id = parseInt(req.params.id, 10)
  const post = server.db.get('posts').getById(id)
  if (!post) res.status(404).send()
  res.json(post.value())
})

server.use(rules)
server.use(auth)
server.use('/v1', router)

server.listen(config.port, () => {
  console.log(`API Server Is Running At ${config.port}`)
  browserSync({
    files: ['./openapi.json', './server.js'],
    port: config.port + 1,
    proxy: `http://localhost:${config.port}`,
    ui: false,
    online: false,
    open: false,
  })
})
