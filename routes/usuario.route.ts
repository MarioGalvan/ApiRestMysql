import { Router } from "express";
import {
  deleteUsuarios,
  getUsuarios,
  postUsuarios,
  putUsuarios,
} from "../controllers/usuario.controller";

const userRoutes = Router();

userRoutes.get("/", getUsuarios);
userRoutes.get("/:id", getUsuarios);
userRoutes.post("/", postUsuarios);
userRoutes.put("/:id", putUsuarios);
userRoutes.delete("/:id", deleteUsuarios);

export default userRoutes;
