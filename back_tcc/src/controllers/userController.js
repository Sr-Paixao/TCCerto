const express = require("express");
const userService = require("../services/userService.js");
const generateToken = require("../helpers/generateToken.js");
const verifyJWT = require('../middlewares/jwt.js')

const router = express.Router();

module.exports = router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password ) {
    return res.status(422).send({message: "Dados inválidos"})
  }

  try {
    const data = await userService.login(email, password);
    const token = generateToken(data[0].id, data[0].email);
    return res
      .status(200)
      .send({
        message: "Login efetuado",
        token: token,
        id: data[0].id,
        nome: data[0].nome,
        email: data[0].email,
      });
  } catch (err) {
    console.log(`Erro no login: ${err}`);
  }
});

module.exports = router.post("/cadastrar", async(req, res) => {
  const {name, email, number, password, course, type} = req.body;
  if (!email || !password || !name || !password || !course || !type || !number) {
    return res.status(422).send({message: "Dados inválidos"})
  }

  try {
    await userService.cadastrar(name, email, number, password, course, type)
    return res.status(200).send({message: "Cadastrado com sucesso"})
  } catch(e) {
    console.log(`Erro ao cadastrar: ${e}`)
  }
})