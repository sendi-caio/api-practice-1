const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./server/db.json')
const middlewares = jsonServer.defaults()
const auth = require('json-server-auth')
const config = require('./config')

server.db = router.db

const rules = auth.rewriter({
  users: 600,
  posts: 640,
})

server.use(middlewares)
server.use(rules)
server.use(auth)
server.use(router)

server.listen(config.port, () => {
  console.log(`API Server Is Running At ${config.port}`)
})
