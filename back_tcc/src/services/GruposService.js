const db = require('../db');
require('mysql2/promise');

async function buscarTodos() {
    const sql = 'SELECT * FROM tbl_grupos';
    try {
        const [rows] = await db.promise().query(sql);
        return rows;
    } catch (error) {
        throw error;
    }
}

async function buscarUm(id) {
    const sql = 'SELECT * FROM tbl_grupos WHERE id = ?';
    try {
        const [rows] = await db.promise().query(sql, [id]);
        return rows.length > 0 ? rows[0] : false;
    } catch (error) {
        throw error;
    }
}

async function inserir(nome_grupo, codigo_convite, criador_id) {
    const sql = 'INSERT INTO tbl_grupos (nome_grupo, codigo_convite, criador_id) VALUES (?, ?, ?)';
    try {
        const [result] = await db.promise().query(sql, [nome_grupo, codigo_convite, criador_id]);
        return result.insertId;
    } catch (error) {
        throw error;
    }
}

async function alterar(id, nome_grupo, codigo_convite, criador_id) {
    const sql = 'UPDATE tbl_grupos SET nome_grupo = ?, codigo_convite = ?, criador_id = ? WHERE id = ?';
    try {
        await db.promise().query(sql, [nome_grupo, codigo_convite, criador_id, id]);
        return true;
    } catch (error) {
        throw error;
    }
}

async function excluir(id) {
    const sql = 'DELETE FROM tbl_grupos WHERE id = ?';
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
//             db.query('SELECT * FROM tbl_grupos', (error, results) =>{
//                 if(error) {rejeitado(error); return;}
//                 aceito(results);
//             });
//         });
//     },

//     buscarUm: (id) => {
//         return new Promise((aceito, rejeitado) =>{
//             db.query('SELECT * FROM tbl_grupos WHERE id = ?', [id], (error, results) =>{
//                 if(error) {rejeitado(error); return;}
//                 if(results.length > 0){
//                     aceito(results[0]);
//                 }else{
//                     aceito(false);
//                 }
//             });
//         });
//     },

//     inserir: (nome_grupo, codigo_convite, criador_id ) => {
//         return new Promise((aceito, rejeitado) => {

//             db.query('INSERT INTO tbl_grupos (nome_grupo, codigo_convite, criador_id )  VALUES (?, ?, ?)', 
//             [nome_grupo, codigo_convite, criador_id ], 
//             (error, results) =>{

//                 if(error) {rejeitado(error); return;}
//                 aceito(results.insertId)

//             });
//         });
//     },

//     alterar: (id, nome_grupo, codigo_convite, criador_id) => {
//         return new Promise((aceito, rejeitado) => {

//             db.query('UPDATE tbl_grupos SET nome_grupo = ?, codigo_convite = ?, criador_id WHERE id = ?', 
//             [nome_grupo, codigo_convite, criador_id, id], 
//             (error, results) =>{

//                 if(error) {rejeitado(error); return;}
//                 aceito(results);

//             });
//         });
//     },

//     excluir: (id) =>{
//         return new Promise ((aceito, rejeitado)=>{
//             db.query('DELETE FROM tbl_grupos WHERE id = ?',[id], (error, results) =>{
//                 if(error) {rejeitado(error); return;}
//                 aceito(results);
//             });
//         });
//     }

// }