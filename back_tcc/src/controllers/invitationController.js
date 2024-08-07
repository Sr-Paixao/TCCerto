const express = require("express");
const invitationController = require("../services/invitationService");

const router = express.Router();

module.exports = router.get("/invitegroup", async (req, res) => {
  const queryParams = decodeURIComponent(req.originalUrl);

  const groupId = queryParams.split("&")[0].split("=")[1];
  const userInvited = queryParams.split("&")[1].split("=")[1];

  try {
    const data = await invitationController.joinInGroup(userInvited, groupId);
    return res.status(200).json({
      success: true,
      message: data.message,
    });
  } catch (e) {
    return res.status(404).json({
      success: false,
      error: e,
      message: "não foi possível adicionar em um grupo",
    });
  }
});
