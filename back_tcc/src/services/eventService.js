const database = require("../db");
require("mysql2/promise");

async function getAllEvents() {
  const sql = "SELECT * FROM tbl_eventos";
  try {
    const connection = await database.connect();
    const [rows] = await connection.promise().query(sql);
    connection.end();
    return rows;
  } catch (e) {
    console.log(`Erro ao buscar eventos: ${e}`);
    throw e;
  }
}

async function getEventById(id) {
  const sql = "SELECT * FROM tbl_eventos WHERE id = ?";
  try {
    const connection = await database.connect();
    const [rows] = await connection.promise().query(sql, [id]);
    connection.end();
    return rows[0];
  } catch (e) {
    console.log(`Erro ao buscar evento: ${e}`);
    throw e;
  }
}

async function createEvent(
  user_id,
  grupo_id,
  title,
  description,
  date,
  hour,
  users
) {
  const sql =
    "INSERT INTO tbl_eventos(usuario_id, grupo_id, titulo_evento, descricao_evento, data_limite, horario) VALUES(?, ?, ?, ?, ?, ?)";
  const values = [user_id, grupo_id, title, description, date, hour];

  try {
    const connection = await database.connect();
    const [result] = await connection.promise().query(sql, values);
    console.log("Evento cadastrado com sucesso");
    connection.end();

    const eventId = result.insertId;

    for (let i = 0; i < users.length; i++) {
      try {
        const sqlUserEvent =
          "INSERT INTO tbl_eventos_users(usuario_id, id_evento) VALUES(?,?)";
        const valuesSqlUserEvent = [users[i], eventId];
        const userConnection = await database.connect();
        await userConnection.promise().query(sqlUserEvent, valuesSqlUserEvent);
        userConnection.end();
        console.log("Usuário associado ao evento com sucesso");
      } catch (e) {
        console.log("Falha ao associar usuário ao evento ", e);
      }
    }

    return eventId;
  } catch (e) {
    console.log(`Erro ao cadastrar evento: ${e}`);
    throw e;
  }
}

async function updateEvent(
  id,
  user_id,
  grupo_id,
  title,
  description,
  date,
  hour
) {
  const sql =
    "UPDATE tbl_events SET usuario_id = ?, grupo_id = ?, titulo_evento = ?, descricao_evento = ?, data_limite = ?, horario = ? WHERE id = ?";
  const values = [user_id, grupo_id, title, description, date, hour, id];

  try {
    const connection = await database.connect();
    await connection.promise().query(sql, values);
    console.log("Evento atualizado com sucesso");
    connection.end();
  } catch (e) {
    console.log(`Erro ao atualizar evento: ${e}`);
    throw e;
  }
}

async function deleteEvent(id) {
  const sql = "DELETE FROM tbl_events WHERE id = ?";
  try {
    const connection = await database.connect();
    await connection.promise().query(sql, [id]);
    console.log("Evento deletado com sucesso");
    connection.end();
  } catch (e) {
    console.log(`Erro ao deletar evento: ${e}`);
    throw e;
  }
}

module.exports = {
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
};
