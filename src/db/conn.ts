import mongoose from "mongoose";

const MONGODB_URI = process.env.ATLAS_URI

export const connectDb = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to db');
  } catch (err) {
    console.error(err);
  }
};
