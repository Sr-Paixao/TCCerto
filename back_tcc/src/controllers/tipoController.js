const express = require("express");
const tipoService = require("../services/TipoService");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const tipos = await tipoService.buscarTodos();
    res.json({ result: tipos });
  } catch (error) {
    console.error(`Erro ao buscar tipos: ${error}`);
    res.status(500).json({ error: "Erro ao buscar tipos" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const tipo = await tipoService.buscarUm(id);
    if (!tipo) {
      res.status(404).json({ error: "Tipo não encontrado" });
    } else {
      res.json({ result: tipo });
    }
  } catch (error) {
    console.error(`Erro ao buscar tipo: ${error}`);
    res.status(500).json({ error: "Erro ao buscar tipo" });
  }
});

router.post("/", async (req, res) => {
  const { usuario_id, tipos } = req.body;
  try {
    if (!usuario_id || !tipos) {
      return res.status(422).json({ error: "Campos inválidos" });
    }
    const tipoId = await tipoService.inserir(usuario_id, tipos);
    res.status(201).json({ id: tipoId });
  } catch (error) {
    console.error(`Erro ao inserir tipo: ${error}`);
    res.status(500).json({ error: "Erro ao inserir tipo" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { usuario_id, tipos } = req.body;
  try {
    if (!usuario_id || !tipos) {
      return res.status(422).json({ error: "Campos inválidos" });
    }
    await tipoService.alterar(id, usuario_id, tipos);
    res.json({ message: "Tipo alterado com sucesso" });
  } catch (error) {
    console.error(`Erro ao alterar tipo: ${error}`);
    res.status(500).json({ error: "Erro ao alterar tipo" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await tipoService.excluir(id);
    res.json({ message: "Tipo excluído com sucesso" });
  } catch (error) {
    console.error(`Erro ao excluir tipo: ${error}`);
    res.status(500).json({ error: "Erro ao excluir tipo" });
  }
});

module.exports = router;


// const TipoService = require('../services/TipoService.js');

// module.exports = {
//     buscarTodos: async (req, res) => {
//         let json ={error:'', result:[]};
//         let tipos = await TipoService.buscarTodos();

//         for (let i in tipos){
//             json.result.push({
//                 id : tipos[i].id,
//                 usuario_id : tipos[i].usuario,
//                 tipo: tipos[i].tipos
//             });
//         }
//         res.json(json);
//     },

//     buscarUm: async(req, res) => {
//         let json ={error:'', result:{}};

//         let id = req.params.id;
//         let tipo = await TipoService.buscarUm(id);

//         if(tipo){
//             json.result = tipo;
//         }
//         res.json(json);
//     },

//     inserir: async(req, res) => {
//         let json = {error:'', result:{}};

//         let usuario_id= req.body.usuario_id;
//         let tipos = req.body.tipos;

//         if(usuario_id && tipos ){
//             let CursoId = await TipoService.inserir(usuario_id, tipos );
//             json.result ={
//                 id: CursoId,
//                 usuario_id,
//                 tipos
//             };

//         }else{
//             json.error = 'Campos não enviados'
//         }

//         res.json(json);
//     },

//     alterar: async(req, res) => {
//         let json = {error:'', result:{}};

//         let id = req.params.id;
//         let usuario_id = req.body.usuario_id;
//         let tipos = req.body.tipos;

//         if(id && usuario_id && tipos){
//             let TipoId = await TipoService.alterar(id, usuario_id, tipos);
//             json.result ={
//                 TipoId,
//                 usuario_id,
//                 tipo
//             };

//         }else{
//             json.error = 'Campos não enviados'
//         }

//         res.json(json);
//     },

//     excluir: async(req, res) => {
//         let json = {error:'', result:{}};

//         await TipoService.excluir(req.params.id);

//         res.json(json);
//     }

// };
