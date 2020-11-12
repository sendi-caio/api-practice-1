import chalk from 'chalk'
export default function Info(...params) {
  const [port, defaultPort] = params
  console.log(`---------------------------------
${chalk.yellow('TALENT DIG API SERVER')}
Listening At PORT:${port} ${port === defaultPort && '(default)'}
http://127.0.0.1:${port}
ctrl+c to exit
---------------------------------`)
}
