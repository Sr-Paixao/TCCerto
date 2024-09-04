const express = require('express');
const { createUserWithEmailAndPassword } = require('firebase/auth');
const { auth } = require('./services/firebaseConfig');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    res.status(200).json({ user: userCredential.user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
