import mongoose from "mongoose"

const connectDB = async () => {
  const mongoURL = "https://"
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,  
    });
    console.log("MongoDB Connection Success 👍");
  } catch(error) {
    console.log("MongoDB Connection Failed 💥");
    process.exit(1);
  }
}