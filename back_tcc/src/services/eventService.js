const database = require("../db");
require("mysql2/promise");

async function createEvent(
  user_id,
  grupo_id,
  title,
  description,
  date,
  hour,
  user
) {
  const sql =
    "INSERT INTO tbl_events(usuario_id, grupo_id, titulo_evento, descricao_evento, data_limite, horario ) VALUES(?, ?, ?, ?, ?)";
  const values = [user_id, grupo_id, title, description, date, hour, user];

  try {
    const connection = await database.connect();
    await connection.promise().query(sql, values);
    console.log("Tarefa cadastrado com sucesso");
    connection.end();
  } catch (e) {
    console.log(`Erro ao cadastrar tarefa: ${e}`);
  }

  for (let i = 0; i < user.length; i++) {
    try {
      const sqlUserEvent =
        "INSERT INTO tbl_events_users(usuario_id, id_tarefa) VALUES(?,?)";
      const valuesSqlUserEvent = [user_id, user[i]];
      const connection = await database.connect();
      await connection.promise().query(sqlUserEvent, valuesSqlUserEvent);
      connection.end();
      console.log("Usuário associado a tarefa com sucesso");
    } catch (e) {
      console.log("Falha ao associar usuário a tarefa ", e);
    }
  }
}
