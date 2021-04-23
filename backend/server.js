// Frontend kismindan gelen istekleri alip sonuc donduren kisim
// Backend baslangic noktasi - butun projeyi burdan baslayarak takip ederek anlayabilirsiniz
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js             '

import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()

connectDB()

const app = express()

/* @mw express.json() - body parser
   @desc extracts the entire body portion of an 
   incoming request stream and exposes it on req.body. 
   @exp we use req.body.email */
app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
)
