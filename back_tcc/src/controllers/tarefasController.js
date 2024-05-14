const express = require("express");
const tarefasService = require("../services/tarefasService");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const tarefas = await tarefasService.buscarTodos();
    res.json({ result: tarefas });
  } catch (error) {
    console.error(`Erro ao buscar tarefas: ${error}`);
    res.status(500).json({ error: "Erro ao buscar tarefas" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const tarefa = await tarefasService.buscarUm(id);
    if (!tarefa) {
      res.status(404).json({ error: "Tarefa não encontrada" });
    } else {
      res.json({ result: tarefa });
    }
  } catch (error) {
    console.error(`Erro ao buscar tarefa: ${error}`);
    res.status(500).json({ error: "Erro ao buscar tarefa" });
  }
});

router.post("/", async (req, res) => {
  const {
    usuario_id,
    grupo_id,
    titulo_tarefa,
    descricao_tarefa,
    data_limite,
    concluida,
  } = req.body;
  try {
    if (!usuario_id || !grupo_id || !titulo_tarefa || !data_limite) {
      return res.status(422).json({ error: "Campos inválidos" });
    }
    const tarefaId = await tarefasService.inserir(
      usuario_id,
      grupo_id,
      titulo_tarefa,
      descricao_tarefa,
      data_limite,
      concluida || false
    );
    res.status(201).json({ id: tarefaId });
  } catch (error) {
    console.error(`Erro ao inserir tarefa: ${error}`);
    res.status(500).json({ error: "Erro ao inserir tarefa" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const {
    usuario_id,
    grupo_id,
    titulo_tarefa,
    descricao_tarefa,
    data_limite,
    concluida,
  } = req.body;
  try {
    if (!usuario_id || !grupo_id || !titulo_tarefa || !data_limite) {
      return res.status(422).json({ error: "Campos inválidos" });
    }
    await tarefasService.alterar(
      id,
      usuario_id,
      grupo_id,
      titulo_tarefa,
      descricao_tarefa,
      data_limite,
      concluida
    );
    res.json({ message: "Tarefa alterada com sucesso" });
  } catch (error) {
    console.error(`Erro ao alterar tarefa: ${error}`);
    res.status(500).json({ error: "Erro ao alterar tarefa" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await tarefasService.excluir(id);
    res.json({ message: "Tarefa excluída com sucesso" });
  } catch (error) {
    console.error(`Erro ao excluir tarefa: ${error}`);
    res.status(500).json({ error: "Erro ao excluir tarefa" });
  }
});

module.exports = router;


// const tarefasService = require('../../services/tarefasService');

// module.exports = {
//     buscarTodos: async (req, res) => {
//         let json = { error: '', result: [] };

//         let tarefas = await tarefasService.buscarTodos();

//         for (let i in tarefas) {
//             json.result.push({
//                 id: tarefas[i].id,
//                 usuario_id: tarefas[i].usuario_id,
//                 grupo_id: tarefas[i].grupo_id,
//                 titulo_tarefa: tarefas[i].titulo_tarefa,
//                 descricao_tarefa: tarefas[i].descricao_tarefa,
//                 data_limite: tarefas[i].data_limite,
//                 concluida: tarefas[i].concluida
//             });
//         }
//         res.json(json);
//     },

//     buscarUm: async (req, res) => {
//         let json = { error: '', result: {} };

//         let id = req.params.id;
//         let tarefa = await tarefasService.buscarUm(id);

//         if (tarefa) {
//             json.result = tarefa;
//         }
//         res.json(json);
//     },

//     inserir: async (req, res) => {
//         let json = { error: '', result: {} };

//         let usuarioId = req.body.usuario_id;
//         let grupoId = req.body.grupo_id;
//         let tituloTarefa = req.body.titulo_tarefa;
//         let descricaoTarefa = req.body.descricao_tarefa;
//         let dataLimite = req.body.data_limite;
//         let concluida = req.body.concluida || false; // Valor padrão: false se não for fornecido

//         if (usuarioId && grupoId && tituloTarefa && dataLimite) {
//             let tarefaId = await tarefasService.inserir(usuarioId, grupoId, tituloTarefa, descricaoTarefa, dataLimite, concluida);
//             json.result = {
//                 id: tarefaId,
//                 usuario_id: usuarioId,
//                 grupo_id: grupoId,
//                 titulo_tarefa: tituloTarefa,
//                 descricao_tarefa: descricaoTarefa,
//                 data_limite: dataLimite,
//                 concluida: concluida
//             };
//         } else {
//             json.error = 'Campos obrigatórios não enviados';
//         }

//         res.json(json);
//     },

//     alterar: async (req, res) => {
//         let json = { error: '', result: {} };

//         let id = req.params.id;
//         let usuarioId = req.body.usuario_id;
//         let grupoId = req.body.grupo_id;
//         let tituloTarefa = req.body.titulo_tarefa;
//         let descricaoTarefa = req.body.descricao_tarefa;
//         let dataLimite = req.body.data_limite;
//         let concluida = req.body.concluida;

//         if (id && usuarioId && grupoId && tituloTarefa && dataLimite) {
//             let tarefaId = await tarefasService.alterar(id, usuarioId, grupoId, tituloTarefa, descricaoTarefa, dataLimite, concluida);
//             json.result = {
//                 id: tarefaId,
//                 usuario_id: usuarioId,
//                 grupo_id: grupoId,
//                 titulo_tarefa: tituloTarefa,
//                 descricao_tarefa: descricaoTarefa,
//                 data_limite: dataLimite,
//                 concluida: concluida
//             };
//         } else {
//             json.error = 'Campos obrigatórios não enviados';
//         }

//         res.json(json);
//     },

//     excluir: async (req, res) => {
//         let json = { error: '', result: {} };

//         await tarefasService.excluir(req.params.id);

//         res.json(json);
//     }
// };