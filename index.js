const app = require('./app')
const keys = require('./config/keys')
const port = keys.nodejs.port

app.listen(port, () => console.log(`Server has been started on ${port}`))
