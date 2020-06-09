const npm = require('npm')
const constants = require('./constants')

const installUIDependencies = () => {
  npm.load(() => npm.commands.install(constants.UIPath, []))
}

const installAPIDependencies = () => {
  npm.load(() => npm.commands.install(constants.APIPath, []))
}

const installDependencies = async () => {
  installUIDependencies()
  installAPIDependencies()
}

module.exports = installDependencies
