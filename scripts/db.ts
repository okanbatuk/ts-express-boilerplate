import { readFileSync } from "fs";
import { execSync } from "child_process";

type Driver = "prisma" | "typeorm" | "sequelize";
type Action = "generate" | "push" | "migrate";

const [, , action = "push"] = process.argv;

const driver: Driver =
  JSON.parse(readFileSync("package.json", "utf8")).dbDriver || "prisma";

const commands: Record<Driver, Record<Action, string>> = {
  prisma: {
    generate: "prisma generate --schema=src/database/schema.prisma",
    push: "prisma db push --schema=src/database/schema.prisma",
    migrate: "prisma migrate dev --schema=src/database/schema.prisma",
  },
  typeorm: {
    generate: "typeorm-ts-node-commonjs schema:sync",
    push: "typeorm-ts-node-commonjs schema:sync",
    migrate: "typeorm-ts-node-commonjs migration:run",
  },
  sequelize: {
    generate: "sequelize-cli db:migrate",
    push: "sequelize-cli db:migrate:all",
    migrate: "sequelize-cli db:migrate",
  },
};

const cmd = commands[driver]?.[action];
if (!cmd) {
  console.error(`Unsupported driver "${driver}" or action "${action}"`);
  process.exit(1);
}

console.log(`[db:${action}] driver: ${driver}`);
execSync(cmd, { stdio: "inherit" });
