const express = require('express');
const { createUserWithEmailAndPassword, signInWithEmailAndPassword } = require('firebase/auth');
const { auth } = require('./services/firebaseConfig'); // Certifique-se de que este arquivo está corretamente configurado

const router = express.Router();

// Rota de registro
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Criando usuário no Firebase
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    res.status(200).json({ 
      message: 'Usuário registrado com sucesso!',
      user: user.email 
    });
  } catch (error) {
    console.error("Erro ao registrar usuário:", error);
    res.status(400).json({ 
      error: 'Erro ao registrar o usuário', 
      details: error.message 
    });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Retornando o token e outras informações do usuário
    res.status(200).json({
      token: await user.getIdToken(),
      userData: {
        email: user.email,
        displayName: user.displayName, // Se tiver nome definido
        photoURL: user.photoURL, // Se o usuário tiver foto definida
      }
    });
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    res.status(400).json({ message: 'Credenciais inválidas' });
  }
});

module.exports = router;
