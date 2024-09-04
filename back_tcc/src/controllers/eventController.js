const taskService = require('../services/taskService');

async function getAllTasks(req, res) {
  try {
    const tasks = await taskService.getAllTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).send('Erro ao buscar tarefas');
  }
}

async function getTaskById(req, res) {
  const { id } = req.params;
  try {
    const task = await taskService.getTaskById(id);
    if (task) {
      res.json(task);
    } else {
      res.status(404).send('Tarefa não encontrada');
    }
  } catch (error) {
    res.status(500).send('Erro ao buscar tarefa');
  }
}

async function createTask(req, res) {
  const { usuario_id, grupo_id, titulo_tarefa, descricao_tarefa, data_limite } = req.body;
  try {
    await taskService.createTask(usuario_id, grupo_id, titulo_tarefa, descricao_tarefa, data_limite);
    res.status(201).send('Tarefa criada com sucesso');
  } catch (error) {
    res.status(500).send('Erro ao criar tarefa');
  }
}

async function updateTask(req, res) {
  const { id } = req.params;
  const { usuario_id, grupo_id, titulo_tarefa, descricao_tarefa, data_limite, concluida } = req.body;
  try {
    await taskService.updateTask(id, usuario_id, grupo_id, titulo_tarefa, descricao_tarefa, data_limite, concluida);
    res.send('Tarefa atualizada com sucesso');
  } catch (error) {
    res.status(500).send('Erro ao atualizar tarefa');
  }
}

async function deleteTask(req, res) {
  const { id } = req.params;
  try {
    await taskService.deleteTask(id);
    res.send('Tarefa deletada com sucesso');
  } catch (error) {
    res.status(500).send('Erro ao deletar tarefa');
  }
}

module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask };
