import mongoose from "mongoose";

/* Kullandigimiz NoSQL databasemiz olan MongoDB'ye baglanti yaptigimiz kisim */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB Connect : ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
