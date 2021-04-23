import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  {
    timestamps: true
  }
)

// .methods ile kendi methodlarimizi ekleyebiliyoruz.
// matchPassword : girilen sifre ile dbdeki sifreyi
// compare ederek boolean deger donduruyor
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

// Yeni bir kullanici uye olmadan sifresini hashlenmis sekilde db'ye kaydetmemizi sagliyor
// şifreleri hashlemek istiyoruz, bu yüzden salt oluşturduk
// çünkü şifreyi async olarak hashlemek için salt'a ihtiyacımız var.
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema)

export default User
