import express from "express";
import userRoutes from "../routes/usuario.route";
import cors from "cors";
import { db } from "../database/database.config";

class Server {
  private app: express.Application;
  private port: number | string;
  private apiPaths = {
    usuarios: "/api/usuarios",
  };

  constructor() {
    this.app = express();
    this.port = process.env.SERVER_PORT || 3000;
    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }

  routes() {
    this.app.use(this.apiPaths.usuarios, userRoutes);
  }

  middlewares() {
    // CORS
    this.app.use(cors());
    // Lectura y parseo del body
    this.app.use(express.json());
    // Directorio público
    this.app.use(express.static("public"));
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log("Database online");
    } catch (error) {
       throw new Error(error);
    }
  }
}

export default Server;
