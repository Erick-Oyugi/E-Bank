import express from "express";
import bodyParser from "body-parser";
import routes from './routes/PageRoutes/routes.js'
import helmet from 'helmet'
import cors from 'cors'


const app = express();
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/',routes)


app.set('view engine', 'hbs');


export default app