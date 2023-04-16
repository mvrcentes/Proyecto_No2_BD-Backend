// const app = require('./app')
import app from './app.js'

const main = async () => {
    await app.listen(4000)
    // console.log(app.get('port'))
}

main()