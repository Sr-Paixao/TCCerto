const express = require("express");
const userService = require("../services/userService.js");
const generateToken = require("../helpers/generateToken.js");
<<<<<<< HEAD
const verifyJWT = require("../middlewares/jwt.js");
=======
const verifyJWT = require('../middlewares/jwt.js')
>>>>>>> 0f3141d0546780e2df509b8c69fe88bafd11de65

const router = express.Router();

module.exports = router.post("/login", async (req, res) => {
  const { email, password } = req.body;
<<<<<<< HEAD
  if (!email || !password) {
    return res.status(422).send({ message: "Dados inválidos" });
=======
  if (!email || !password ) {
    return res.status(422).send({message: "Dados inválidos"})
>>>>>>> 0f3141d0546780e2df509b8c69fe88bafd11de65
  }

  try {
    const data = await userService.login(email, password);
    const token = generateToken(data[0].id, data[0].email);
<<<<<<< HEAD
    return res.status(200).send({
      success: true,
      message: "Login efetuado",
      token: token,
      id: data[0].id,
      nome: data[0].nome,
      email: data[0].email,
    });
  } catch (err) {
    console.log(`Erro no login: ${err}`);
    res.status(404).send({
      success: false,
      message: "Não foi possível efetuar login",
      error: err,
    });
  }
});

module.exports = router.post("/cadastrar", async (req, res) => {
  const { name, email, number, password, course, type } = req.body;
  if (
    !email ||
    !password ||
    !name ||
    !password ||
    !course ||
    !type ||
    !number
  ) {
    return res.status(422).send({ message: "Dados inválidos" });
  }

  try {
    await userService.cadastrar(name, email, number, password, course, type);
    return res.status(200).send({ message: "Cadastrado com sucesso" });
  } catch (e) {
    console.log(`Erro ao cadastrar: ${e}`);
  }
});

module.exports = router.get("/getAllUsers", async (req, res) => {
  try {
    const data = await userService.allUsers();
    return res.status(200).json({ success: true, data });
  } catch (e) {
    console.log(`Erro ao cadastrar: ${e}`);
  }
});

module.exports = router.get("/getGroupId", async (req, res) => {
  try {
    const id = req.query.id
    const data = await userService.userGroup(id)
    if(data.length > 0) {
      return res.status(200).json({ success: true, data });
    } else {
      return res.status(200).json({ success: true, message: "O usuário ainda não criou um grupo" });

    }
  } catch (e) {
    console.log(`Erro ao requisitar id de grupo: ${e}`);
  }
});
=======
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
>>>>>>> 0f3141d0546780e2df509b8c69fe88bafd11de65
