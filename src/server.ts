import { buildApp } from "./app.js";
import { config } from "./config/index.js";
import { connectDatabase } from "./database/index.js";
import { gracefulShutdown } from "./utils/shutdown.js";

(async () => {
  const app = await buildApp();
  try {
    await connectDatabase();

    // Handlers for close the server and db
    gracefulShutdown();

    app.listen(config.PORT);
    console.log(`🚀  Server ready at http://localhost:${config.PORT}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
