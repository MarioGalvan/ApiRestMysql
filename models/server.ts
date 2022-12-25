import express from "express";

class Server {
  private app: express.Application;
  public port: number | string;

  constructor() {
    this.app = express();
    this.port = process.env.SERVER_PORT || 3000;
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

export default Server;