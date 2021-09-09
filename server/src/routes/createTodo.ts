import { Request, Response } from "express";
import { pool } from "./../db";

export const createTodo = async (req: Request, res: Response) => {
  const { description } = req.body;
  const SQL = "INSERT INTO todo(description) VALUES($1) RETURNING *";
  const todo = await pool.query(SQL, [description]);

  res.json(todo.rows[0]);
};
