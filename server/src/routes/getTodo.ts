import { Request, Response } from "express";
import { pool } from "./../db";

export const getTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const SQL = "select * from todo where todo_id = $1";
  const todo = await pool.query(SQL, [id]);

  res.json(todo.rows[0]);
};
