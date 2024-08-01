import express from "express";

const app = express();

app.use(express.json());

app.get("/todo", (req, res) => {});

app.get("/todos", (req, res) => {});

app.get("/completed", (req, res) => {});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
