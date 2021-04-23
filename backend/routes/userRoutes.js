import express from 'express'
const router = express.Router()
import { authUser, registerUser, getUserProfile } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

// belirttigimiz route uzerinde, controllerimiz && middleware ile islemlerimizi yaptigimiz kisim
router.post('/', registerUser)
router.post('/login', authUser)
router.get('/profile', protect, getUserProfile)

export default router
