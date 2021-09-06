import { connection } from "./src/infrastructure/cache";
import Server from "./src/interfaces/http/server";
import Config from "./config";
import "./TerminalColors";

/* eslint-disable no-console */

try {
  connection.on("connect", () => {
    console.log(
      `Connected successfully to ${Config.Cache.Host}:${Config.Cache.Port} cache`
        .success
    );
    new Server(Config.Port).start();
  });
} catch (err) {
  console.error(`${err.message}`.error);
}
