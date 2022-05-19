const dotenv = require("dotenv");
dotenv.config();

const { ADMINDB, USER, PASSWORD, HOST, DIALECT } = process.env;

module.exports = {
  username: USER,
  password: PASSWORD,
  database: ADMINDB,
  host: HOST,
  dialect: DIALECT,
};
