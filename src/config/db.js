import mongoose from 'mongoose';

const connectDB = async () => {
  const mongoURL = 'mongodb+srv://superpants2000:pLKf9nPMR4u5FDpt@airbean.r1kmvyo.mongodb.net/?retryWrites=true&w=majority';
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connection Success 👍');
  } catch (error) {
    console.log('MongoDB Connection Failed 💥');
    process.exit(1);
  }
};

export default connectDB;
