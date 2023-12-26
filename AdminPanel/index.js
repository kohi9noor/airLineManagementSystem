import AdminJS from "adminjs";
import express from "express";
import Plugin from "@adminjs/express";
import { Adapter, Database, Resource } from "@adminjs/sql";

AdminJS.registerAdapter({
  Database,
  Resource,
});

const start = async () => {
  const app = express();

  const db = await new Adapter("postgresql", {
    connectionString: "postgres://postgres:<Your_Password>@localhost:5432/<YOUR_DATABASE>",
    database: "<YOUR_DATABASE-NAME>",
  }).init();

  const admin = new AdminJS({
    resources: [
      {
        resource: db.table("<TABLE_NAME>"),
        options: {},
      },
    ],
  });
  admin.watch();

  const router = Plugin.buildRouter(admin);

  app.use(admin.options.rootPath, router);
  app.use(newAdmin.options.rootPath, router);

  app.listen(8080, () => {
    console.log("app started");
  });
};

start();
