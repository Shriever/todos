import { Request, Response } from "express";
import { pool } from "./../db";

export const getTodos = async (_: Request, res: Response) => {
  const SQL = "select * from todo";
  const todos = await pool.query(SQL);

  res.json(todos.rows);
};
