const db = require('../db');

async function buscarTodos() {
    const sql = 'SELECT * FROM tbl_membros';
    try {
        const [rows] = await db.promise().query(sql);
        return rows;
    } catch (error) {
        throw error;
    }
}

async function buscarUm(id) {
    const sql = 'SELECT * FROM tbl_membros WHERE id = ?';
    try {
        const [rows] = await db.promise().query(sql, [id]);
        return rows.length > 0 ? rows[0] : false;
    } catch (error) {
        throw error;
    }
}

async function inserir(usuario_id, grupo_id) {
    const sql = 'INSERT INTO tbl_membros (usuario_id, grupo_id) VALUES (?, ?)';
    try {
        const [result] = await db.promise().query(sql, [usuario_id, grupo_id]);
        return result.insertId;
    } catch (error) {
        throw error;
    }
}

async function alterar(id, usuario_id, grupo_id) {
    const sql = 'UPDATE tbl_membros SET usuario_id = ?, grupo_id = ? WHERE id = ?';
    try {
        await db.promise().query(sql, [usuario_id, grupo_id, id]);
        return true;
    } catch (error) {
        throw error;
    }
}

async function excluir(id) {
    const sql = 'DELETE FROM tbl_membros WHERE id = ?';
    try {
        const [result] = await db.promise().query(sql, [id]);
        return result;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    buscarTodos,
    buscarUm,
    inserir,
    alterar,
    excluir
};


// const db = require('../db.js');

// module.exports = {
//     buscarTodos: () => {
//         return new Promise((aceito, rejeitado) => {
//             db.query('SELECT * FROM tbl_membros', (error, results) => {
//                 if (error) {
//                     rejeitado(error);
//                     return;
//                 }
//                 aceito(results);
//             });
//         });
//     },

//     buscarUm: (id) => {
//         return new Promise((aceito, rejeitado) => {
//             db.query('SELECT * FROM tbl_membros WHERE id = ?', [id], (error, results) => {
//                 if (error) {
//                     rejeitado(error);
//                     return;
//                 }
//                 if (results.length > 0) {
//                     aceito(results[0]);
//                 } else {
//                     aceito(false);
//                 }
//             });
//         });
//     },

//     inserir: (usuario_id, grupo_id) => {
//         return new Promise((aceito, rejeitado) => {
//             db.query('INSERT INTO tbl_membros (usuario_id, grupo_id) VALUES (?, ?)',
//                 [usuario_id, grupo_id],
//                 (error, results) => {
//                     if (error) {
//                         rejeitado(error);
//                         return;
//                     }
//                     aceito(results.insertId);
//                 });
//         });
//     },

//     alterar: (id, usuario_id, grupo_id) => {
//         return new Promise((aceito, rejeitado) => {
//             db.query('UPDATE tbl_membros SET usuario_id = ?, grupo_id = ? WHERE id = ?',
//                 [usuario_id, grupo_id, id],
//                 (error, results) => {
//                     if (error) {
//                         rejeitado(error);
//                         return;
//                     }
//                     aceito(results);
//                 });
//         });
//     },

//     excluir: (id) => {
//         return new Promise((aceito, rejeitado) => {
//             db.query('DELETE FROM tbl_membros WHERE id = ?', [id], (error, results) => {
//                 if (error) {
//                     rejeitado(error);
//                     return;
//                 }
//                 aceito(results);
//             });
//         });
//     }
// };
