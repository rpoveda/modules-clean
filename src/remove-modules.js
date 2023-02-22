const fs = require('fs')

module.exports = () => {
    fs.rmSync('./node_modules', {recursive: true, force: true})
}