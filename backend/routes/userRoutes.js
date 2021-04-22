import express from 'express'
const router = express.Router()
import { authUser } from '../controllers/userController.js'

/* belirttigimiz route uzerinde ve controllerimiz ile islemlerimizi yaptigimiz kisim */
router.post('/login', authUser)

export default router
