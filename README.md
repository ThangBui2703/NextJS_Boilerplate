- Before using this boilderplate need to run following commands to update package.json to latest:
    + If using npm: npx npm-check-updates -u && rm -rf node_modules package-lock.json && npm install
    + If using pnpm: pnpm dlx npm-check-updates -u && rm -rf node_modules pnpm-lock.yaml && pnpm install

- Enviroment varialbe:
    + Server: can use both env in env.server.ts and env.share.ts
    + Client: can only use env in env.share.ts
    * Note: env in env.share.ts must be start with prefix: NEXT_PUBLIC_

- Database migration:
    + npm/pnpm run db:generate : Create migration file,
    + npm/pnpm run db:migrate : Apply migration file to database,
    + npm/pnpm run db:studio : Open studio UI for database in port 127.0.0.1:4983,
    + npm/pnpm run db:pull : Pull all from database to update or generate schema,
    + npm/pnpm run db:check : Check consistency of migrations history with database

- Server only code: 
    + Remember alllways add "use server" at the top of server action file
    + Remember alllways import "server-only" at the top of server file