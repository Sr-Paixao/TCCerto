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
