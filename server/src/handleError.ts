import { Request, Response } from "express";

export const handleError = (fn: (req: Request, res: Response) => any) => {
  return (req: Request, res: Response) => {
    try {
      fn(req, res);
    } catch (err) {
      console.error(err.message);
    }
  };
};
