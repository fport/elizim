import express from 'express'
const router = express.Router()
import { getProducts, getProductById } from '../controllers/productController.js'

/* belirttigimiz route uzerinde ve controllerimiz ile islemlerimizi yaptigimiz kisim */
router.get('/', getProducts)
router.get('/:id', getProductById)

export default router
