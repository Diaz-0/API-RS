const mysql = require("mysql2");
const { DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_NAME } = require("./CONECCION/constants");

const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: DB_PORT,
});

db.connect((err) => {
  if (err) {
    console.error("Error de conexión a la base de datos MySQL:", err);
  } else {
    console.log("Conexión exitosa a la base de datos MySQL");
  }
});

module.exports = db;
