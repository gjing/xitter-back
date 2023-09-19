import express from "express";
import cors from "cors";
import { connectDb } from './db/conn';
import xitsRouter from "./controllers/Xit";
import usersRouter from "./controllers/User";

connectDb();

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

// Load routes
app.use("/xits", xitsRouter);
app.use("/users", usersRouter);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.")
})

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});