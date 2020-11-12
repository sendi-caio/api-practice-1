const inquirer  = require('../command/begin')
const backend = require('../backend')

const run = async () => {
  const credentials = await inquirer.askGithubCredentials()
  console.log(credentials)
  backend()
}

run()
