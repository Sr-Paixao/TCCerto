const express = require("express");
const UsuariosService = require('../services/UsuariosService.js');

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const usuarios = await UsuariosService.buscarTodos();
    res.json({ result: usuarios });
  } catch (error) {
    console.error(`Erro ao buscar usuários: ${error}`);
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await UsuariosService.buscarUm(id);
    if (!usuario) {
      res.status(404).json({ error: "Usuário não encontrado" });
    } else {
      res.json({ result: usuario });
    }
  } catch (error) {
    console.error(`Erro ao buscar usuário: ${error}`);
    res.status(500).json({ error: "Erro ao buscar usuário" });
  }
});

router.post("/", async (req, res) => {
  const { name, email, celular, password, curso, funcao } = req.body;
  try {
    if (!name || !email || !celular || !password || !curso || !funcao) {
      return res.status(422).json({ error: "Campos inválidos" });
    }
    const usuarioId = await UsuariosService.inserir(name, email, celular, password, curso, funcao);
    res.status(201).json({ id: usuarioId });
  } catch (error) {
    console.error(`Erro ao inserir usuário: ${error}`);
    res.status(500).json({ error: "Erro ao inserir usuário" });
  }
});

module.exports = router;


// const UsuariosService = require('../services/UsuariosService.js');

// module.exports = {
//     buscarTodos: async (req, res) => {
//         let json = { error: '', result: [] };

//         try {
//             let usuarios = await UsuariosService.buscarTodos();

//             for (let i in usuarios) {
//                 json.result.push({
//                     id: usuarios[i].id,
//                     nome: usuarios[i].nome,
//                     email: usuarios[i].email,
//                     senha: usuarios[i].senha,
//                     tipoUsuario: usuarios[i].tipoUsuario
//                 });
//             }

//             res.json(json);
//         } catch (error) {
//             json.error = 'Erro ao buscar usuários';
//             res.status(500).json(json);
//         }
//     },
//     buscarUm: async (req, res) => {
//         let json = { error: '', result: {} };

//         try {
//             let id = req.params.id;
//             let usuario = await UsuariosService.buscarUm(id);

//             if (usuario) {
//                 json.result = usuario;
//             }
//             res.json(json);
//         } catch (error) {
//             json.error = 'Erro ao buscar usuário';
//             res.status(500).json(json);
//         }
//     },

//     inserir: async (req, res) => {
//         let json = { error: '', result: {} };

//         try {
//             let { name, email, celular, password, curso, funcao } = req.body;

//             if (name && email && celular && password && curso && funcao) {
//                 let usuarioId = await UsuariosService.inserir(name, email, celular, password, curso, funcao);
//                 json.result = {
//                     id: usuarioId,
//                     nome: name,
//                     email,
//                     celular,
//                     senha: password,
//                     curso,
//                     funcao
//                 };
//             } else {
//                 console.log('Erro ao inserir usuário: Campos não enviados');
//                 json.error = 'Campos não enviados';

//             }
            

//             res.json(json);
//         } catch  {
//             console.error('Erro ao inserir usuário:', error)
//             json.error = error.message;
//             res.status(500).json(json);
//         }
//     }
// };
