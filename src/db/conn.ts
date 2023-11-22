import mongoose from "mongoose";

const MONGODB_URI = process.env.ATLAS_URI

export const connectDb = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to DB');
  } catch (err) {
    console.error(err);
  }
};

export const disconnectDb = async () => {
  try {
    await mongoose.connection.close();
    console.log('Disconnected from DB');
  } catch (err) {
    console.error(err);
  }
};