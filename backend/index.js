import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css'

const spec = require('./api/ne.yaml')

console.log(spec)

const selector = document.getElementById('selector')
selector.addEventListener('change', (e) => console.log(e.target.value))

SwaggerUI({
  spec,
  dom_id: '#swagger',
  docExpansion: 'none',
  deepLinking: true,
})

if (module.hot) {
  module.hot.accept()
}
