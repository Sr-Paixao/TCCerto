const express = require("express");
const GruposService = require("../services/GruposService.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const grupos = await GruposService.buscarTodos();
    res.json({ result: grupos });
  } catch (error) {
    console.error(`Erro ao buscar grupos: ${error}`);
    res.status(500).json({ error: "Erro ao buscar grupos" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const grupo = await GruposService.buscarUm(id);
    if (!grupo) {
      res.status(404).json({ error: "Grupo não encontrado" });
    } else {
      res.json({ result: grupo });
    }
  } catch (error) {
    console.error(`Erro ao buscar grupo: ${error}`);
    res.status(500).json({ error: "Erro ao buscar grupo" });
  }
});

router.post("/", async (req, res) => {
  const { nome_grupo, codigo_convite, criador_id } = req.body;
  try {
    if (!nome_grupo || !codigo_convite || !criador_id) {
      return res.status(422).json({ error: "Campos inválidos" });
    }
    const grupoId = await GruposService.inserir(nome_grupo, codigo_convite, criador_id);
    res.status(201).json({ id: grupoId });
  } catch (error) {
    console.error(`Erro ao inserir grupo: ${error}`);
    res.status(500).json({ error: "Erro ao inserir grupo" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { nome_grupo, codigo_convite, criador_id } = req.body;
  try {
    if (!nome_grupo || !codigo_convite || !criador_id) {
      return res.status(422).json({ error: "Campos inválidos" });
    }
    await GruposService.alterar(id, nome_grupo, codigo_convite, criador_id);
    res.json({ message: "Grupo alterado com sucesso" });
  } catch (error) {
    console.error(`Erro ao alterar grupo: ${error}`);
    res.status(500).json({ error: "Erro ao alterar grupo" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await GruposService.excluir(id);
    res.json({ message: "Grupo excluído com sucesso" });
  } catch (error) {
    console.error(`Erro ao excluir grupo: ${error}`);
    res.status(500).json({ error: "Erro ao excluir grupo" });
  }
});

module.exports = router;


// const GruposService = require('../services/GruposService.js');


// module.exports = {
//     buscarTodos: async (req, res) =>{
//         let json = {error:'', result: []};

//         let grupos = await GruposService.buscarTodos();

//         for(let i in grupos){
//             json.result.push({
//                 id: grupos[i].id,
//                 nome_grupo: grupos[i].nome_grupo,
//                 codigo_convite: grupos[i].codigo_convite,
//                 criador_id: grupos[i].criador_id,
//             });
//         }
//         res.json(json);
        
//     },

//     buscarUm: async(req, res) => {
//         let json = {error:'', result:{}};

//         let id = req.params.id;
//         let grupo = await GruposService.buscarUm(id);

//         if(grupo){
//             json.result = grupo;
//         }
//         res.json(json);
//     },

//     inserir: async(req, res) => {
//         let json = {error:'', result:{}};

//         let nome_grupo = req.body.nome_grupo;
//         let codigo_convite = req.body.codigo_convite;
//         let criador_id= req.body.criador_id;

//         if(nome_grupo && codigo_convite && criador_id ){
//             let GrupoId = await GruposService.inserir(nome_grupo, codigo_convite, criador_id);
//             json.result ={
//                 id: GrupoId,
//                 codigo_convite,
//                 criador_id
//             };

//         }else{
//             json.error = 'Campos não enviados'
//         }

//         res.json(json);
//     },

//     alterar: async(req, res) => {
//         let json = {error:'', result:{}};

//         let id = req.params.id;
//         let nome_grupo = req.body.nome_grupo;
//         let codigo_convite= req.body.codigo_convite;
//         let criador_id= req.body.criador_id;

//         if(id && nome_grupo && codigo_convite && criador_id){
//             let grupoId = await GruposService.alterar(id, nome_grupo, codigo_convite, criador_id);
//             json.result ={
//                 GrupoId,
//                 nome_grupo,
//                 codigo_convite,
//                 criador_id
//             };

//         }else{
//             json.error = 'Campos não enviados'
//         }

//         res.json(json);
//     },

//     excluir: async(req, res) => {
//         let json = {error:'', result:{}};

//         await GruposService.excluir(req.params.id);

//         res.json(json);
//     }

// }