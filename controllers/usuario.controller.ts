import { Request, Response } from "express";
import { ResponseApi } from "../interfaces/api.interface";
import { Usuario } from "../models/usuario.model";

export const getUsuarios = async (req: Request, res: Response) => {
  const usuarios = await Usuario.findAll({
    where: {
      estado: true,
    },
  });
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

  try {
    const existeEmail = await Usuario.findOne({
      where: {
        email: body.email,
      },
    });
    if (existeEmail) {
      const resp: ResponseApi = {
        data: null,
        success: false,
        msg: "Ya existe un usuario con ese email",
      };
      return res.status(400).json(resp);
    }

    const usuario = await Usuario.create(body);
    const resp: ResponseApi = {
      data: usuario,
      success: true,
      msg: "Usuario creado",
    };
    res.status(201).json(resp);
  } catch (error) {
    const Errorresp = {
      data: null,
      success: false,
      msg: "Hable con el administrador",
    };
    res.status(500).json(Errorresp);
  }
};

export const putUsuarios = async (req: Request, res: Response) => {
  const idUser = req.params.id;
  const body = req.body;
  try {
    const usuario = await Usuario.findByPk(idUser);
    const existeEmail = await Usuario.findOne({
      where: {
        email: body.email,
        id: !idUser,
      },
    });

    if (existeEmail) {
      const resp: ResponseApi = {
        data: null,
        success: false,
        msg: "Ya existe un usuario con ese email",
      };
      return res.status(400).json(resp);
    }

    if (!usuario) {
      const resp: ResponseApi = {
        data: null,
        success: false,
        msg: "No existe un usuario con ese id",
      };
      return res.status(404).json(resp);
    }

    await usuario.update(body);
    const resp: ResponseApi = {
      data: usuario,
      success: true,
      msg: "Usuario actualizado",
    };
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

export const deleteUsuarios = async (req: Request, res: Response) => {
  const idUser = req.params.id;
  const usuario = await Usuario.findByPk(idUser);
  if (!usuario) {
    const resp: ResponseApi = {
      data: null,
      success: false,
      msg: "No existe un usuario con ese id",
    };
    return res.status(404).json(resp);
  }

  await usuario.update({
    estado: false,
  });
  const resp: ResponseApi = {
    data: usuario,
    success: true,
    msg: "Usuario eliminado",
  };
  res.status(200).json(resp);

  // res.status(200).json({
  //   ok: true,
  //   msg: "deleteUsuarios",
  // });
};
