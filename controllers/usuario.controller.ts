import { Request, Response } from "express";

export const getUsuarios = async (req: Request, res: Response) => {
  res.status(200).json({
    ok: true,
    msg: "getUsuarios",
  });
};

export const postUsuarios = async (req: Request, res: Response) => {
  res.status(200).json({
    ok: true,
    msg: "postUsuarios",
  });
};

export const putUsuarios = async (req: Request, res: Response) => {
  res.status(200).json({
    ok: true,
    msg: "putUsuarios",
  });
};

export const deleteUsuarios = async (req: Request, res: Response) => {
  res.status(200).json({
    ok: true,
    msg: "deleteUsuarios",
  });
};
