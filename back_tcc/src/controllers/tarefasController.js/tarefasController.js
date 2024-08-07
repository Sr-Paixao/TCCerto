<<<<<<< HEAD
const express = require("express");
const taskService = require("../../services/taskService");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.status(200).json({ success: true, data: tasks });
  } catch (error) {
    console.error('Erro ao buscar tarefas:', error);
    res.status(500).json({
      success: false,
      message: "Erro ao buscar tarefas",
      error: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const task = await taskService.getTaskById(id);
    if (task) {
      res.status(200).json({ success: true, data: task });
    } else {
      res.status(404).json({ success: false, message: "Tarefa não encontrada" });
    }
  } catch (error) {
    console.error('Erro ao buscar tarefa:', error);
    res.status(500).json({
      success: false,
      message: "Erro ao buscar tarefa",
      error: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  const { usuario_id, grupo_id, titulo_tarefa, descricao_tarefa, data_limite } = req.body;
  if (!usuario_id || !grupo_id || !titulo_tarefa || !descricao_tarefa || !data_limite) {
    return res.status(422).json({ success: false, message: "Dados inválidos" });
  }

  try {
    const taskId = await taskService.createTask(usuario_id, grupo_id, titulo_tarefa, descricao_tarefa, data_limite);
    res.status(201).json({ success: true, message: "Tarefa criada com sucesso", data: { id: taskId } });
  } catch (error) {
    console.error('Erro ao criar tarefa:', error);
    res.status(500).json({
      success: false,
      message: "Erro ao criar tarefa",
      error: error.message,
    });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { usuario_id, grupo_id, titulo_tarefa, descricao_tarefa, data_limite, concluida } = req.body;
  try {
    const updated = await taskService.updateTask(id, usuario_id, grupo_id, titulo_tarefa, descricao_tarefa, data_limite, concluida);
    if (updated) {
      res.status(200).json({ success: true, message: "Tarefa atualizada com sucesso" });
    } else {
      res.status(404).json({ success: false, message: "Tarefa não encontrada" });
    }
  } catch (error) {
    console.error('Erro ao atualizar tarefa:', error);
    res.status(500).json({
      success: false,
      message: "Erro ao atualizar tarefa",
      error: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await taskService.deleteTask(id);
    if (deleted) {
      res.status(200).json({ success: true, message: "Tarefa deletada com sucesso" });
    } else {
      res.status(404).json({ success: false, message: "Tarefa não encontrada" });
    }
  } catch (error) {
    console.error('Erro ao deletar tarefa:', error);
    res.status(500).json({
      success: false,
      message: "Erro ao deletar tarefa",
      error: error.message,
    });
  }
});

module.exports = router;
=======
const tarefasService = require('../../services/tarefasService');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = { error: '', result: [] };

        let tarefas = await tarefasService.buscarTodos();

        for (let i in tarefas) {
            json.result.push({
                id: tarefas[i].id,
                usuario_id: tarefas[i].usuario_id,
                grupo_id: tarefas[i].grupo_id,
                titulo_tarefa: tarefas[i].titulo_tarefa,
                descricao_tarefa: tarefas[i].descricao_tarefa,
                data_limite: tarefas[i].data_limite,
                concluida: tarefas[i].concluida
            });
        }
        res.json(json);
    },

    buscarUm: async (req, res) => {
        let json = { error: '', result: {} };

        let id = req.params.id;
        let tarefa = await tarefasService.buscarUm(id);

        if (tarefa) {
            json.result = tarefa;
        }
        res.json(json);
    },

    inserir: async (req, res) => {
        let json = { error: '', result: {} };

        let usuarioId = req.body.usuario_id;
        let grupoId = req.body.grupo_id;
        let tituloTarefa = req.body.titulo_tarefa;
        let descricaoTarefa = req.body.descricao_tarefa;
        let dataLimite = req.body.data_limite;
        let concluida = req.body.concluida || false; // Valor padrão: false se não for fornecido

        if (usuarioId && grupoId && tituloTarefa && dataLimite) {
            let tarefaId = await tarefasService.inserir(usuarioId, grupoId, tituloTarefa, descricaoTarefa, dataLimite, concluida);
            json.result = {
                id: tarefaId,
                usuario_id: usuarioId,
                grupo_id: grupoId,
                titulo_tarefa: tituloTarefa,
                descricao_tarefa: descricaoTarefa,
                data_limite: dataLimite,
                concluida: concluida
            };
        } else {
            json.error = 'Campos obrigatórios não enviados';
        }

        res.json(json);
    },

    alterar: async (req, res) => {
        let json = { error: '', result: {} };

        let id = req.params.id;
        let usuarioId = req.body.usuario_id;
        let grupoId = req.body.grupo_id;
        let tituloTarefa = req.body.titulo_tarefa;
        let descricaoTarefa = req.body.descricao_tarefa;
        let dataLimite = req.body.data_limite;
        let concluida = req.body.concluida;

        if (id && usuarioId && grupoId && tituloTarefa && dataLimite) {
            let tarefaId = await tarefasService.alterar(id, usuarioId, grupoId, tituloTarefa, descricaoTarefa, dataLimite, concluida);
            json.result = {
                id: tarefaId,
                usuario_id: usuarioId,
                grupo_id: grupoId,
                titulo_tarefa: tituloTarefa,
                descricao_tarefa: descricaoTarefa,
                data_limite: dataLimite,
                concluida: concluida
            };
        } else {
            json.error = 'Campos obrigatórios não enviados';
        }

        res.json(json);
    },

    excluir: async (req, res) => {
        let json = { error: '', result: {} };

        await tarefasService.excluir(req.params.id);

        res.json(json);
    }
};
>>>>>>> 0f3141d0546780e2df509b8c69fe88bafd11de65
