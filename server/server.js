import express from 'express'
import config from '../config'
import bodyParser from 'body-parser'
let app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('GET\n')
})
app.post('/', (req, res) => {
    res.send('POST\n')
})
app.listen(config.backendPort, () => {
    console.log('Server running at '
        + config.backendUrl + ':' + config.backendPort)
})
