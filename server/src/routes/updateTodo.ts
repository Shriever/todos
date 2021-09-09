import { Request, Response } from "express";
import { pool } from "./../db";

export const updateTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { description } = req.body;
  const SQL = "UPDATE todo SET description = $1 WHERE todo_id = $2";
  await pool.query(SQL, [description, id]);

  res.json("Todo was updated");
};
