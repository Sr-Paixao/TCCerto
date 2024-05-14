const express = require("express");
const membrosService = require("../services/MembrosService");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const membros = await membrosService.buscarTodos();
    res.json({ result: membros });
  } catch (error) {
    console.error(`Erro ao buscar membros: ${error}`);
    res.status(500).json({ error: "Erro ao buscar membros" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const membro = await membrosService.buscarUm(id);
    if (!membro) {
      res.status(404).json({ error: "Membro não encontrado" });
    } else {
      res.json({ result: membro });
    }
  } catch (error) {
    console.error(`Erro ao buscar membro: ${error}`);
    res.status(500).json({ error: "Erro ao buscar membro" });
  }
});

router.post("/", async (req, res) => {
  const { usuario_id, grupo_id } = req.body;
  try {
    if (!usuario_id || !grupo_id) {
      return res.status(422).json({ error: "Campos inválidos" });
    }
    const membroId = await membrosService.inserir(usuario_id, grupo_id);
    res.status(201).json({ id: membroId });
  } catch (error) {
    console.error(`Erro ao inserir membro: ${error}`);
    res.status(500).json({ error: "Erro ao inserir membro" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { usuario_id, grupo_id } = req.body;
  try {
    if (!usuario_id || !grupo_id) {
      return res.status(422).json({ error: "Campos inválidos" });
    }
    await membrosService.alterar(id, usuario_id, grupo_id);
    res.json({ message: "Membro alterado com sucesso" });
  } catch (error) {
    console.error(`Erro ao alterar membro: ${error}`);
    res.status(500).json({ error: "Erro ao alterar membro" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await membrosService.excluir(id);
    res.json({ message: "Membro excluído com sucesso" });
  } catch (error) {
    console.error(`Erro ao excluir membro: ${error}`);
    res.status(500).json({ error: "Erro ao excluir membro" });
  }
});

module.exports = router;

// const MembrosService = require('../services/MembrosService.js');

// module.exports = {
//     buscarTodos: async (req, res) => {
//         let json = { error: '', result: [] };

//         let membros = await MembrosService.buscarTodos();

//         for (let i in membros) {
//             json.result.push({
//                 id: membros[i].id,
//                 usuario_id: membros[i].usuario_id,
//                 grupo_id: membros[i].grupo_id
//             });
//         }
//         res.json(json);
//     },

//     buscarUm: async (req, res) => {
//         let json = { error: '', result: {} };

//         let id = req.params.id;
//         let membro = await MembrosService.buscarUm(id);

//         if (membro) {
//             json.result = membro;
//         }
//         res.json(json);
//     },

//     inserir: async (req, res) => {
//         let json = { error: '', result: {} };

//         let usuarioId = req.body.usuario_id;
//         let grupoId = req.body.grupo_id;

//         if (usuarioId && grupoId) {
//             let membroId = await MembrosService.inserir(usuarioId, grupoId);
//             json.result = {
//                 id: membroId,
//                 usuario_id: usuarioId,
//                 grupo_id: grupoId
//             };
//         } else {
//             json.error = 'Campos não enviados';
//         }

//         res.json(json);
//     },

//     alterar: async (req, res) => {
//         let json = { error: '', result: {} };

//         let id = req.params.id;
//         let usuarioId = req.body.usuario_id;
//         let grupoId = req.body.grupo_id;

//         if (id && usuarioId && grupoId) {
//             let membroId = await MembrosService.alterar(id, usuarioId, grupoId);
//             json.result = {
//                 id: membroId,
//                 usuario_id: usuarioId,
//                 grupo_id: grupoId
//             };
//         } else {
//             json.error = 'Campos não enviados';
//         }

//         res.json(json);
//     },

//     excluir: async (req, res) => {
//         let json = { error: '', result: {} };

//         await MembrosService.excluir(req.params.id);

//         res.json(json);
//     }
// };
