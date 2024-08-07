const database = require("../db");
require("mysql2/promise");

async function login(email, password) {
  const sql = "SELECT * FROM tbl_usuarios WHERE email = ? AND senha = ?";
  const dataLogin = [email, password];

  try {
    const connection = await database.connect();
    const [rows] = await connection.promise().query(sql, dataLogin);
    connection.end();
    return rows;
  } catch (error) {
<<<<<<< HEAD
    console.log(error)
=======
    throw error;
>>>>>>> 0f3141d0546780e2df509b8c69fe88bafd11de65
  }
}

async function cadastrar(name, email, number, password, course, type) {
  const sql =
    "INSERT INTO tbl_usuarios(nome, email, celular, senha) VALUES(?, ?, ?, ?)";
  const values = [name, email, number, password];
  const findId = "SELECT * FROM tbl_usuarios WHERE email = ?";
  const dataLogin = [email];

  try {
    const connection = await database.connect();
    await connection.promise().query(sql, values);
    console.log("Cadastrado com sucesso");

    const [rows] = await connection.promise().query(findId, dataLogin);

    const courseSql = "INSERT INTO tbl_cursos(nome_curso, aluno_id) VALUES(?,?)"
    const courseValues = [course, rows[0].id]
    await connection.promise().query(courseSql, courseValues);

    const typeSql = "INSERT INTO tbl_tipo_usuario(usuario_id, tipos) VALUES(?,?)"
    const typeValues = [rows[0].id, type]
    await connection.promise().query(typeSql, typeValues);

    connection.end();
  } catch (e) {
    console.log(`Erro ao cadastrar usuário: ${e}`);
  }
}

<<<<<<< HEAD
async function allUsers() {
  const sql = "SELECT id, nome, email, celular FROM tbl_usuarios";

  try {
    const connection = await database.connect();
    const [rows] = await connection.promise().query(sql);
    connection.end();
    return rows;
  } catch (error) {
    console.log(error)
  }
}

async function userGroup(id) {
  const sql = "SELECT id FROM tbl_grupos WHERE criador_id = ?";
  const data = [id];

  try {
    const connection = await database.connect();
    const [rows] = await connection.promise().query(sql, data);
    connection.end();
    return rows;
  } catch (error) {
    console.log(error)
  }
}

module.exports = { login, cadastrar, allUsers, userGroup };
=======
module.exports = { login, cadastrar };
>>>>>>> 0f3141d0546780e2df509b8c69fe88bafd11de65
