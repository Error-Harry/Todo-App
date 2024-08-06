import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { createTodo, updateTodo } from "./types.js";
import todo from "./db.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent wrong inputs",
    });
    return;
  }
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.json({
    msg: "Todo created",
  });
});

app.get("/todos", async (req, res) => {
  const allTodos = await todo.find({});
  res.json({
    allTodos,
  });
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent wrong inputs",
    });
    return;
  }
  await todo.updateOne(
    { _id: parsedPayload.data.id },
    { $set: { completed: true } }
  );
  res.json({
    msg: "Todo marked as completed",
  });
});

app.delete("/delete", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(400).json({
      msg: "You sent wrong inputs",
    });
    return;
  }
  await todo.deleteOne({ _id: parsedPayload.data.id });
  res.json({
    msg: "Todo deleted as successfully",
  });
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3000");
});
