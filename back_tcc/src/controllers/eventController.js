const express = require("express");
const eventService = require("../services/eventService");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const events = await eventService.getAllEvents();
    res.status(200).json({ success: true, data: events });
  } catch (error) {
    console.error('Erro ao buscar eventos:', error);
    res.status(500).json({
      success: false,
      message: "Erro ao buscar eventos",
      error: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const event = await eventService.getEventById(id);
    if (event) {
      res.status(200).json({ success: true, data: event });
    } else {
      res.status(404).json({ success: false, message: "Evento não encontrado" });
    }
  } catch (error) {
    console.error('Erro ao buscar evento:', error);
    res.status(500).json({
      success: false,
      message: "Erro ao buscar evento",
      error: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  const { usuario_id, grupo_id, titulo, data, horario, convidar, descricao_tarefa } = req.body;
  if (!usuario_id || !grupo_id || !titulo || !data || !horario || !descricao_tarefa) {
    return res.status(422).json({ success: false, message: "Dados inválidos" });
  }

  try {
    const eventId = await eventService.createEvent(usuario_id, grupo_id, titulo, descricao_tarefa, data, horario, convidar);
    res.status(201).json({ success: true, message: "Evento criado com sucesso", data: { id: eventId } });
  } catch (error) {
    console.error('Erro ao criar evento:', error);
    res.status(500).json({
      success: false,
      message: "Erro ao criar evento",
      error: error.message,
    });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { usuario_id, grupo_id, titulo, data, horario, convidar, descricao_tarefa } = req.body;
  try {
    const updated = await eventService.updateEvent(id, usuario_id, grupo_id, titulo, descricao_tarefa, data, horario);
    if (updated) {
      res.status(200).json({ success: true, message: "Evento atualizado com sucesso" });
    } else {
      res.status(404).json({ success: false, message: "Evento não encontrado" });
    }
  } catch (error) {
    console.error('Erro ao atualizar evento:', error);
    res.status(500).json({
      success: false,
      message: "Erro ao atualizar evento",
      error: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await eventService.deleteEvent(id);
    if (deleted) {
      res.status(200).json({ success: true, message: "Evento deletado com sucesso" });
    } else {
      res.status(404).json({ success: false, message: "Evento não encontrado" });
    }
  } catch (error) {
    console.error('Erro ao deletar evento:', error);
    res.status(500).json({
      success: false,
      message: "Erro ao deletar evento",
      error: error.message,
    });
  }
});

module.exports = router;