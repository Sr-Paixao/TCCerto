const database = require("../db");
require("mysql2/promise");

async function joinInGroup(userId, groupId) {
  const findUser =
    "SELECT * FROM tbl_membros WHERE usuario_id = ? AND grupo_id = ?";
  const findValues = [userId, groupId];

  const sql = "INSERT INTO tbl_membros(usuario_id, grupo_id) VALUES(?, ?)";
  const values = [userId, groupId];

  try {
    const connection = await database.connect();

    const [rows] = await connection.promise().query(findUser, findValues);
    console.log(rows)
    if (rows.length > 0) {
        console.log("já tem um grupo", rows.length)
      return {message: "Usuário já pertence a um grupo."};
    } else {
      await connection.promise().query(sql, values);
      connection.end();
      return {message: "Adicionado a um grupo."};
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = { joinInGroup };
