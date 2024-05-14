const db = require('../db');

async function buscarTodos() {
    const sql = 'SELECT * FROM tbl_tipo_usuario';
    try {
        const [rows] = await db.promise().query(sql);
        return rows;
    } catch (error) {
        throw error;
    }
}

async function buscarUm(id) {
    const sql = 'SELECT * FROM tbl_tipo_usuario WHERE id = ?';
    try {
        const [rows] = await db.promise().query(sql, [id]);
        return rows.length > 0 ? rows[0] : false;
    } catch (error) {
        throw error;
    }
}

async function inserir(usuario_id, tipos) {
    const sql = 'INSERT INTO tbl_tipo_usuario (usuario_id, tipos) VALUES (?, ?)';
    try {
        const [result] = await db.promise().query(sql, [usuario_id, tipos]);
        return result.insertId;
    } catch (error) {
        throw error;
    }
}

async function alterar(id, usuario_id, tipos) {
    const sql = 'UPDATE tbl_tipo_usuario SET usuario_id = ?, tipos = ? WHERE id = ?';
    try {
        await db.promise().query(sql, [usuario_id, tipos, id]);
        return true;
    } catch (error) {
        throw error;
    }
}

async function excluir(id) {
    const sql = 'DELETE FROM tbl_tipo_usuario WHERE id = ?';
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
//         return new Promise((resolve, reject) => {
//             db.query('SELECT * FROM tbl_tipo_usuario', (error, results) => {
//                 if (error) {
//                     reject(error);
//                 } else {
//                     resolve(results);
//                 }
//             });
//         });
//     },

//     buscarUm: (id) => {
//         return new Promise((aceito, rejeitado) => {
//             db.query('SELECT * FROM tbl_tipo_usuario WHERE id = ?', [id], (error, results) => {
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

//     inserir: (usuario_id, tipos) => {
//         return new Promise((aceito, rejeitado) => {

//             db.query('INSERT INTO tbl_tipo_usuario (usuario_id, tipos) VALUES (?, ?)',
//                 [usuario_id, tipos],
//                 (error, results) => {
//                     if (error) {
//                         rejeitado(error);
//                         return;
//                     }
//                     aceito(results.insertId);
//                 });
//         });
//     },
//     alterar: (id, usuario_id, tipos) => {
//         return new Promise((aceito, rejeitado) => {

//             db.query('UPDATE tbl_tipo_usuario SET usuario_id = ?, tipos= ? WHERE id = ?',
//                 [usuario_id, tipos, id],
//                 (error, results) => {

//                     if (error) { rejeitado(error); return; }
//                     aceito(results);

//                 });
//         });
//     },

//     excluir: (id) => {
//         return new Promise((aceito, rejeitado) => {
//             db.query('DELETE FROM tbl_tipo_usuario WHERE id = ?', [id], (error, results) => {
//                 if (error) { rejeitado(error); return; }
//                 aceito(results);
//             });
//         });
//     }


// };