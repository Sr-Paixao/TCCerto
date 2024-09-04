const { mysql2, connect } = require('../db');

async function getAllTasks() {
  const sql = 'SELECT * FROM tbl_tarefas_agenda';
  let connection;
  try {
    connection = await connect();
    const [rows] = await connection.promise().query(sql);
    return rows;
  } catch (error) {
    console.error('Erro ao buscar todas as tarefas:', error);
    throw error;
  } finally {
    if (connection) connection.end();
  }
}

async function getTaskById(id) {
  const sql = 'SELECT * FROM tbl_tarefas_agenda WHERE id = ?';
  let connection;
  try {
    connection = await connect();
    const [rows] = await connection.promise().query(sql, [id]);
    return rows[0];
  } catch (error) {
    console.error('Erro ao buscar tarefa por ID:', error);
    throw error;
  } finally {
    if (connection) connection.end();
  }
}

async function createTask(usuario_id, grupo_id, titulo_tarefa, descricao_tarefa, data_limite) {
  const sql = 'INSERT INTO tbl_tarefas_agenda (usuario_id, grupo_id, titulo_tarefa, descricao_tarefa, data_limite) VALUES (?, ?, ?, ?, ?)';
  const values = [usuario_id, grupo_id, titulo_tarefa, descricao_tarefa, data_limite];
  let connection;
  try {
    connection = await connect();
    const [result] = await connection.promise().query(sql, values);
    return result.insertId;
  } catch (error) {
    console.error('Erro ao criar tarefa:', error);
    throw error;
  } finally {
    if (connection) connection.end();
  }
}

async function updateTask(id, usuario_id, grupo_id, titulo_tarefa, descricao_tarefa, data_limite, concluida) {
  const sql = 'UPDATE tbl_tarefas_agenda SET usuario_id = ?, grupo_id = ?, titulo_tarefa = ?, descricao_tarefa = ?, data_limite = ?, concluida = ? WHERE id = ?';
  const values = [usuario_id, grupo_id, titulo_tarefa, descricao_tarefa, data_limite, concluida, id];
  let connection;
  try {
    connection = await connect();
    const [result] = await connection.promise().query(sql, values);
    return result.affectedRows > 0;
  } catch (error) {
    console.error('Erro ao atualizar tarefa:', error);
    throw error;
  } finally {
    if (connection) connection.end();
  }
}

async function deleteTask(id) {
  const sql = 'DELETE FROM tbl_tarefas_agenda WHERE id = ?';
  let connection;
  try {
    connection = await connect();
    const [result] = await connection.promise().query(sql, [id]);
    return result.affectedRows > 0;
  } catch (error) {
    console.error('Erro ao deletar tarefa:', error);
    throw error;
  } finally {
    if (connection) connection.end();
  }
}

module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask };