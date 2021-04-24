import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

// userRoutes kisminda getUserProfile private route'na
// erismeden once req.headers.authorization bakarak token kontrolu sagliyoruz.
const protect = asyncHandler(async (req, res, next) => {
  let token

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1]

      const decoded = jwt.verify(token, process.env.JWT_SECRET) // { id: '607c73b33f90a982120acf3a', iat: 1619129300, exp: 1621721300 }

      //select('-password') => buraya şifre almadan geçebiliriz, bunu return etmicez
      req.user = await User.findById(decoded.id).select('-password')

      next()
    } catch (error) {
      res.status(401)
      throw new Error('Not authorized, no token')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})

export { protect }
