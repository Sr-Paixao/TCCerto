const db = require('../db');

async function buscarTodos() {
    const sql = 'SELECT * FROM tbl_cursos';
    try {
        const [rows] = await db.promise().query(sql);
        return rows;
    } catch (error) {
        throw error;
    }
}

async function buscarUm(id) {
    const sql = 'SELECT * FROM tbl_cursos WHERE id = ?';
    try {
        const [rows] = await db.promise().query(sql, [id]);
        return rows.length > 0 ? rows[0] : false;
    } catch (error) {
        throw error;
    }
}

async function inserir(nome_curso, aluno_id) {
    const sql = 'INSERT INTO tbl_cursos (nome_curso, aluno_id) VALUES (?, ?)';
    try {
        const [result] = await db.promise().query(sql, [nome_curso, aluno_id]);
        return result.insertId;
    } catch (error) {
        throw error;
    }
}

async function alterar(id, nome_curso, aluno_id) {
    const sql = 'UPDATE tbl_cursos SET nome_curso = ?, aluno_id = ? WHERE id = ?';
    try {
        await db.promise().query(sql, [nome_curso, aluno_id, id]);
        return true;
    } catch (error) {
        throw error;
    }
}

async function excluir(id) {
    const sql = 'DELETE FROM tbl_cursos WHERE id = ?';
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
//     buscarTodos: () =>{
//         return new Promise ((aceito, rejeitado)=>{
//             db.query('SELECT * FROM tbl_cursos', (error, results) =>{
//                 if(error) {rejeitado(error); return;}
//                 aceito(results);
//             });
//         });
//     },

//     buscarUm: (id) => {
//         return new Promise((aceito, rejeitado) =>{
//             db.query('SELECT * FROM tbl_cursos WHERE id = ?', [id], (error, results) =>{
//                 if(error) {rejeitado(error); return;}
//                 if(results.length > 0){
//                     aceito(results[0]);
//                 }else{
//                     aceito(false);
//                 }
//             });
//         });
//     },

//     inserir: (nome_curso, aluno_id) => {
//         return new Promise((aceito, rejeitado) => {

//             db.query('INSERT INTO tbl_cursos (nome_curso, aluno_id)  VALUES (?, ?)', 
//             [nome_curso, aluno_id], 
//             (error, results) =>{

//                 if(error) {rejeitado(error); return;}
//                 aceito(results.insertId)

//             });
//         });
//     },

//     alterar: (id, nome_curso, aluno_id) => {
//         return new Promise((aceito, rejeitado) => {

//             db.query('UPDATE tbl_cursos SET nome_curso = ?, aluno_id = ? WHERE id = ?', 
//             [nome_curso, aluno_id, id], 
//             (error, results) =>{

//                 if(error) {rejeitado(error); return;}
//                 aceito(results);

//             });
//         });
//     },

//     excluir: (id) =>{
//         return new Promise ((aceito, rejeitado)=>{
//             db.query('DELETE FROM tbl_cursos WHERE id = ?',[id], (error, results) =>{
//                 if(error) {rejeitado(error); return;}
//                 aceito(results);
//             });
//         });
//     }

// };