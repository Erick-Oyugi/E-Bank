import app from './app.js'
import https from 'https'
import fs from 'fs'
import morgan from 'morgan'
import logger from 'logger'
import dotenv from 'dotenv'
import cors from 'cors'


dotenv.config()


app.use(cors())

const port = process.env.APP_PORT
const path_to_key = process.env.KEY_PATH
const path_to_cert = process.env.CERT_PATH
app.use(morgan('dev'))

var options = {
    key: fs.readFileSync(`${path_to_key}`),
    cert: fs.readFileSync(`${path_to_cert}`),
};



var server = https.createServer(options, app).listen(port, ()=>{

    console.log(`EBank API service running on  port ${port}`)
})