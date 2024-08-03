import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose.connect(process.env.MONGODB_CONNECTION_URL);

const { Schema } = mongoose;

const todoSchema = new Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = new mongoose.model("todos", todoSchema);

export default todo;
