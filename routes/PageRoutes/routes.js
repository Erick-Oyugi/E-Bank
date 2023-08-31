import express from "express"
import getEbankPage from '../../controllers/HomePage/Homepage.controller.js'
import getAPIPage from "../../controllers/ApiPage/ApiPage.controller.js"
import cors from 'cors'





const router = express.Router()

router.get('/', getEbankPage)
router.get('/apis', getAPIPage)


export default router