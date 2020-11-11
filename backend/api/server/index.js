import jsonServer from 'json-server'
import webpack from 'webpack'
import WebpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import serveFavicon from 'serve-favicon'
import ExpressFileUpload from 'express-fileupload'
import portFinder from 'portfinder'
import auth from 'json-server-auth'

// local import
import Info from './info'
import webpackConfig from '../webpack.config'
import { faviconPath, apiPath, defaultPort, path, relativeToApi } from '../../shared/helper'
// constant

const one = {
  '/v1/users*': '/600/users$1',
  '/v1/posts*': '/660/posts$1',
  '/v1/tasks-items/rename*': '/660/tasks-items/rename$1',
  '/v1/tasks-items*': '/660/tasks-items$1',
  '/v1/tasks*': '/660/tasks$1',
  '/v1/register': '/register',
  '/v1/login': '/login',
  '/v1/upload': '/upload',
  '/v1/reset': '/reset',
}

const compiler = webpack(webpackConfig)
const rules = auth.rewriter(one)
const port = process.env.API_PORT || defaultPort.api
const server = jsonServer.create()
const webpackDevMiddleware = WebpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
})
const router = jsonServer.router(relativeToApi('examples', 'db.json'))
const [compression, cors, , logger, def] = jsonServer.defaults()

const expressFileUpload = ExpressFileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
})

async function run() {
  try {
    const availablePort = await portFinder.getPortPromise({ port })
    server.db = router.db
    server.use(expressFileUpload)
    server.use(jsonServer.bodyParser)
    server.use(webpackDevMiddleware)
    server.use(serveFavicon(faviconPath))
    server.use([compression, cors, logger, def])
    server.use(rules)
    server.use(auth)
    server.use(webpackHotMiddleware(compiler))
    server.use('/spec.yml', (req, res) => res.sendFile(path.join(apiPath, 'examples', 'all.yaml')))
    server.use(router)
    server.listen(availablePort, () => Info(availablePort, defaultPort.api))
  } catch (e) {
    console.log('Port Unavailable')
  }
}

run()
