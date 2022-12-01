const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "../database.sqlite",
});

const modelsDefiners = [require("./models/posts"), require("./models/users")];

for (const modelsDefiner of modelsDefiners) {
  modelsDefiner(sequelize);
}

async function assertDatabaseConnectionOk() {
  console.log(`Checking database connection...`);
  try {
    await sequelize.authenticate();
    console.log("Database connection OK!");
  } catch (error) {
    console.log("Unable to connect to the database:");
    console.log(error.message);
    process.exit(1);
  }
}

module.exports = { assertDatabaseConnectionOk, sequelize };
