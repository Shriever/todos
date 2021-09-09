import express from "express";
import cors from "cors";
// import { pool } from "./db";
import { getTodos } from "./routes/getTodos";
import { createTodo } from "./routes/createTodo";
import { handleError } from "./handleError";
import { getTodo } from "./routes/getTodo";
import { deleteTodo } from "./routes/deleteTodo";
import { updateTodo } from "./routes/updateTodo";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api", handleError(getTodos));
app.get("/api/:id", handleError(getTodo));
app.post("/api", handleError(createTodo));
app.put("/api/:id", handleError(updateTodo));
app.delete("/api/:id", handleError(deleteTodo));

app.all("*", (_, res) => {
  res.send("404 page not found.");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});
