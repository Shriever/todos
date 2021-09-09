import { Request, Response } from "express";
import { pool } from "./../db";

export const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const SQL = "delete from todo where todo_id = $1";
  await pool.query(SQL, [id]);

  res.json("todo was deleted");
};
