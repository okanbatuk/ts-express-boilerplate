import { buildApp } from "./app.ts";
import { config } from "./config/index.ts";
import { connectDb } from "./database/index.ts";
import { gracefulShutdown } from "./utils/shutdown.ts";

(async () => {
  const app = await buildApp();
  try {
    await connectDb();

    // Handlers for close the server and db
    gracefulShutdown();

    app.listen(config.PORT);
    console.log(`🚀  Server ready at http://localhost:${config.PORT}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
