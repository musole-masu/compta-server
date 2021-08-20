import { App } from "./app";
import { initializeDB } from "./src/database/initializeDB";

const app = new App();

(async () => {
  await initializeDB();
  app.listen();
})();
