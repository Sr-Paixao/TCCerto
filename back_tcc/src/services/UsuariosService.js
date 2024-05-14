const db = require('../db');

async function buscarTodos() {
    const sql = 'SELECT * FROM tbl_usuarios';
    try {
        const [rows] = await db.promise().query(sql);
        return rows;
    } catch (error) {
        throw error;
    }
}

async function buscarUm(id) {
    const sql = 'SELECT * FROM tbl_usuarios WHERE id = ?';
    try {
        const [rows] = await db.promise().query(sql, [id]);
        return rows.length > 0 ? rows[0] : false;
    } catch (error) {
        throw error;
    }
}

async function inserir(nome, email, celular, senha, curso, tipoUsuario) {
    const sqlUsuario = 'INSERT INTO tbl_usuarios (nome, email, celular, senha) VALUES (?, ?, ?, ?)';
    const sqlCurso = 'INSERT INTO tbl_cursos (nome_curso, aluno_id) VALUES (?, ?)';
    const sqlTipoUsuario = 'INSERT INTO tbl_tipo_usuario (usuario_id, tipos) VALUES (?, ?)';
    try {
        await db.promise().beginTransaction();

        const [resultUsuario] = await db.promise().query(sqlUsuario, [nome, email, celular, senha]);
        const usuarioId = resultUsuario.insertId;

        await db.promise().query(sqlCurso, [curso, usuarioId]);
        await db.promise().query(sqlTipoUsuario, [usuarioId, tipoUsuario]);

        await db.promise().commit();
        return usuarioId;
    } catch (error) {
        await db.promise().rollback();
        throw error;
    }
}

module.exports = {
    buscarTodos,
    buscarUm,
    inserir
};


// const db = require('../db.js');

// module.exports = {
//     buscarTodos: () => {
//         return new Promise((resolve, reject) => {
//             db.query('SELECT * FROM tbl_usuarios', (error, results) => {
//                 if (error) {
//                     reject(error);
//                 } else {
//                     resolve(results);
//                 }
//             });
//         });
//     },
//     buscarUm: (id) => {
//         return new Promise((resolve, reject) => {
//             db.query('SELECT * FROM tbl_usuarios WHERE id = ?', [id], (error, results) => {
//                 if (error) {
//                     reject(error);
//                 } else {
//                     if (results.length > 0) {
//                         resolve(results[0]);
//                     } else {
//                         resolve(false);
//                     }
//                 }
//             });
//         });
//     },
//     inserir: (nome, email, celular, senha, curso, tipoUsuario) => {
//         return new Promise((resolve, reject) => {
//             db.beginTransaction((err) => {
//                 if (err) {
//                     reject(err);
//                     return;
//                 }
//                 db.query('INSERT INTO tbl_usuarios (nome, email, celular, senha) VALUES (?, ?, ?, ?)',
//                     [nome, email, celular, senha],
//                     (error, results) => {
//                         if (error) {
//                             db.rollback(() => {
//                                 reject(error);
//                             });
//                             return;
//                         }
//                         const usuarioId = results.insertId;
//                         db.query('INSERT INTO tbl_cursos (nome_curso, aluno_id) VALUES (?, ?)',
//                             [curso, usuarioId],
//                             (error, results) => {
//                                 if (error) {
//                                     db.rollback(() => {
//                                         reject(error);
//                                     });
//                                     return;
//                                 }
//                                 db.query('INSERT INTO tbl_tipo_usuario (usuario_id, tipos) VALUES (?, ?)',
//                                     [usuarioId, tipoUsuario],
//                                     (error, results) => {
//                                         if (error) {
//                                             db.rollback(() => {
//                                                 reject(error);
//                                             });
//                                             return;
//                                         }
//                                         db.commit((err) => {
//                                             if (err) {
//                                                 db.rollback(() => {
//                                                     reject(err);
//                                                 });
//                                                 return;
//                                             }
//                                             resolve(usuarioId);
//                                         });
//                                     });
//                             });
//                     });
//             });
//         });
//     }
// };
