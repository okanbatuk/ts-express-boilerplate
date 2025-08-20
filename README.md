# ts-express-mvc-boilerplate

Minimal, production-ready TypeScript + Express + Prisma (ORM-switchable) boilerplate.

---

## Quick Start

```bash
# 1. Clone
git clone https://github.com/okanbatuk/ts-express-mvc-boilerplate.git my-api
cd my-api

# 2. Install
npm install          # or bun install

# 3. Env
cp .env.example .env
# edit .env for your DB, JWT secrets, port, etc.

# 4. DB (SQLite by default)
npm run db:generate
npm run db:push          # creates dev.db

# 5. Dev server
npm run dev              # nodemon + esbuild-register

# 6. Prod build
npm run build            # esbuild → dist/
npm run start            # node dist/server.js
```

## Scripts
| Command         | Description                               |
| --------------- | ----------------------------------------- |
| `npm run dev`   | Hot-reload development (`nodemon`)        |
| `npm run build` | Build to `dist/` with esbuild             |
| `npm run start` | Run production build                      |
| `npm test`      | Jest + supertest (unit & integration)     |
| `npm run db:*`  | DB operations (generate / push / migrate) |

## Switch ORM
1. Edit package.json:
```bash
"dbDriver": "typeorm"   // or "sequelize"
```
2. Update src/database/index.ts → connectDatabase().
3. Replace src/database/schema.prisma with your ORM config / entities.

## Tech Stack
- Runtime: Node 20+ (ESM)
- Framework: Express
- ORM: Prisma (default) – swappable
- DI: Inversify
- Validation: Zod + express-zod-api
- Logger: Pino
- Testing: Jest + supertest
- Build: esbuild
- Package Manager: npm / bun / pnpm

## Project Structure
```bash
src/
├─ app.ts
├─ server.ts
├─ config/          # env, logger
├─ database/        # connection + migrations
├─ controllers/
├─ services/
├─ repositories/
├─ middlewares/
├─ utils/
└─ models/
```
