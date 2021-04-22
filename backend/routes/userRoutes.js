import express from 'express'
const router = express.Router()
import { authUser, getUserProfile } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

// belirttigimiz route uzerinde ve controllerimiz ile islemlerimizi yaptigimiz kisim
router.post('/login', authUser)
router.get('/profile', protect, getUserProfile)

export default router
