import cors from "cors";
import express from "express";
import { I18next, ErrorHandler } from "./middlewares";
import { testRoutes, postsRoutes } from "./routes";

class Server {
  constructor(port) {
    this.port = port;
    this.app = express();
    this.setup();
  }

  setup() {
    this.app
      .use(cors())
      .use(I18next)
      .use(express.json())
      .disable("x-powered-by");

    this.app.use("/api", testRoutes);

    this.app.use("/api", postsRoutes);

    this.app.use(ErrorHandler);
  }

  start() {
    this.app.listen(this.port, () => {
      // eslint-disable-next-line no-console
      console.log(
        `The server started successfully on port: ${this.port}`.success
      );
    });
  }
}

export default Server;
