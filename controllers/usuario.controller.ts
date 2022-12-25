import { Request, Response } from "express";
import { ResponseApi } from "../interfaces/api.interface";
import { Usuario } from "../models/usuario.model";

export const getUsuarios = async (req: Request, res: Response) => {
  const usuarios = await Usuario.findAll();
  let resp: ResponseApi = {
    data: usuarios,
    success: true,
    msg: "Usuarios encontrados",
  };
  if (!usuarios) {
    resp = {
      data: null,
      success: false,
      msg: "No hay usuarios",
    };
  }

  res.status(200).json(resp);
};

export const getUsuarioById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const usuario = await Usuario.findByPk(id);
  let resp: ResponseApi = {
    data: usuario,
    success: true,
    msg: "Usuario encontrado",
  };
  if (!usuario) {
    resp = {
      data: null,
      success: false,
      msg: `Usuario no encontrado con el id ${id}`,
    };
  }

  res.status(200).json(resp);
};

export const postUsuarios = async (req: Request, res: Response) => {
  const body = req.body;
  res.status(200).json({
    ok: true,
    msg: "postUsuarios",
    body,
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
