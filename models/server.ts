import express from "express";
import userRoutes from "../routes/usuario.route";

class Server {
  private app: express.Application;
  private port: number | string;
  private apiPaths = {
    usuarios: "/api/usuarios",
  };

  constructor() {
    this.app = express();
    this.port = process.env.SERVER_PORT || 3000;
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
}

export default Server;
