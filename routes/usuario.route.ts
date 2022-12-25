import { Router } from "express";
import {
  deleteUsuarios,
  getUsuarioById,
  getUsuarios,
  postUsuarios,
  putUsuarios,
} from "../controllers/usuario.controller";

const userRoutes = Router();

userRoutes.get("/", getUsuarios);
userRoutes.get("/:id", getUsuarioById);
userRoutes.post("/", postUsuarios);
userRoutes.put("/:id", putUsuarios);
userRoutes.delete("/:id", deleteUsuarios);

export default userRoutes;
