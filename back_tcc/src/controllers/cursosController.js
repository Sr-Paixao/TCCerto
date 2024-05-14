const express = require("express");
const CursosService = require("../services/CursosService.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const cursos = await CursosService.buscarTodos();
    res.json({ result: cursos });
  } catch (error) {
    console.error(`Erro ao buscar cursos: ${error}`);
    res.status(500).json({ error: "Erro ao buscar cursos" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const curso = await CursosService.buscarUm(id);
    if (!curso) {
      res.status(404).json({ error: "Curso não encontrado" });
    } else {
      res.json({ result: curso });
    }
  } catch (error) {
    console.error(`Erro ao buscar curso: ${error}`);
    res.status(500).json({ error: "Erro ao buscar curso" });
  }
});

router.post("/", async (req, res) => {
  const { nome_curso, aluno_id } = req.body;
  try {
    if (!nome_curso || !aluno_id) {
      return res.status(422).json({ error: "Campos inválidos" });
    }
    const cursoId = await CursosService.inserir(nome_curso, aluno_id);
    res.status(201).json({ id: cursoId });
  } catch (error) {
    console.error(`Erro ao inserir curso: ${error}`);
    res.status(500).json({ error: "Erro ao inserir curso" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { nome_curso, aluno_id } = req.body;
  try {
    if (!nome_curso || !aluno_id) {
      return res.status(422).json({ error: "Campos inválidos" });
    }
    await CursosService.alterar(id, nome_curso, aluno_id);
    res.json({ message: "Curso alterado com sucesso" });
  } catch (error) {
    console.error(`Erro ao alterar curso: ${error}`);
    res.status(500).json({ error: "Erro ao alterar curso" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await CursosService.excluir(id);
    res.json({ message: "Curso excluído com sucesso" });
  } catch (error) {
    console.error(`Erro ao excluir curso: ${error}`);
    res.status(500).json({ error: "Erro ao excluir curso" });
  }
});

module.exports = router;


// const CursosService = require('../services/CursosService.js');

// module.exports = {
//     buscarTodos: async (req, res) =>{
//         let json = {error:'', result: []};

//         let cursos = await CursosService.buscarTodos();

//         for(let i in cursos){
//             json.result.push({
//                 id: cursos[i].id,
//                 nome_curso: cursos[i].nome_curso,
//                 aluno_id: cursos[i].aluno_id
//             });
//         }
//         res.json(json);
//     },
//         buscarUm: async(req, res) => {
//             let json = {error:'', result:{}};

//             let id = req.params.id;
//             let curso = await CursosService.buscarUm(id);

//             if(curso){
//                 json.result = curso;
//             }
//             res.json(json);
//         },

//         inserir: async(req, res) => {
//             let json = {error:'', result:{}};

//             let nomeCurso = req.body.nome_curso;
//             let alunoId = req.body.aluno_id;

//             if(nomeCurso && alunoId){
//                 let CursoId = await CursosService.inserir(nomeCurso, alunoId);
//                 json.result ={
//                     id: CursoId,
//                     nomeCurso,
//                     alunoId
//                 };

//             }else{
//                 json.error = 'Campos não enviados'
//             }

//             res.json(json);
//         },

//         alterar: async(req, res) => {
//             let json = {error:'', result:{}};

//             let id = req.params.id;
//             let nomeCurso = req.body.nome_curso;
//             let alunoId = req.body.aluno_id;

//             if(id && nomeCurso && alunoId){
//                 let CursoId = await CursosService.alterar(id, nomeCurso, alunoId);
//                 json.result ={
//                     CursoId,
//                     nomeCurso,
//                     alunoId
//                 };

//             }else{
//                 json.error = 'Campos não enviados'
//             }

//             res.json(json);
//         },

//         excluir: async(req, res) => {
//             let json = {error:'', result:{}};

//             await CursosService.excluir(req.params.id);

//             res.json(json);
//         }
// }