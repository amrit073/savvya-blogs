const express = require("express");
const app = express();

const { assertDatabaseConnectionOk } = require("./database/db");

const init = async () => {
  await assertDatabaseConnectionOk();
  app.listen(3000, () => {
    console.log("started listening at port 3000");
  });
};

init();
