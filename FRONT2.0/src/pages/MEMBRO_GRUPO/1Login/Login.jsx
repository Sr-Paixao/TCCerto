import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  Avatar, TextField, Link,
  Paper, Box, Grid, Typography,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import api from '../../../api'; // Importa o arquivo api.js para fazer chamadas ao backend
import GreenButton from '../../../Components/Btns/btn_green';
import Logo from '../../../img/logo.svg';

const theme = createTheme();

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault(); // Evita que a página recarregue ao enviar o formulário
  
    try {
      const dataLogin = {
        email,
        password,
      };
  
      // Chama o backend para autenticação
      const { data } = await api.post("/api/auth/login", dataLogin);
  
      // Exibe mensagem de sucesso com o nome do usuário
      toast.success(`Bem vindo, ${data.userData.displayName || data.userData.email}!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
  
      // Armazena o token e dados do usuário no sessionStorage
      sessionStorage.setItem("login", true);
      sessionStorage.setItem("jwt", data.token);
      sessionStorage.setItem("userData", JSON.stringify(data.userData)); // Armazenar dados do usuário
  
      // Redireciona para a página inicial após o login
      navigate("/index");
    } catch (err) {
      // Em caso de erro, exibe uma mensagem
      toast.error("Erro no login. Verifique suas credenciais.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={2} sx={{ mt: 12, p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: "0" }}>
        <Avatar alt="User Image" variant="square" src={Logo} sx={{ width: 196.11, height: 184, marginBottom: 5 }} />
        <Typography component="h1" variant="h4" style={{ color: "#07382E", marginBottom: 4, fontWeight: 'bold' }}>Login</Typography>

        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-Mail"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            autoFocus
            sx={{
              '& label.Mui-focused': { color: '#07382E' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#07382E' },
                '&:hover fieldset': { borderColor: '#07382E' },
                '&.Mui-focused fieldset': { borderColor: '#105F4F' },
              },
            }}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            sx={{
              '& label.Mui-focused': { color: '#07382E' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#07382E' },
                '&:hover fieldset': { borderColor: '#07382E' },
                '&.Mui-focused fieldset': { borderColor: '#105F4F' },
              },
            }}
          />

          <Grid container>
            <Grid item xs={12} sx={{ textAlign: 'right' }}>
              <Link href="#" variant="body2" sx={{ color: "#07382E", '&:hover': { color: '#105F4F' }, textDecoration: 'none', fontWeight: 'bold' }}>
                Esqueci minha senha
              </Link>
            </Grid>
          </Grid>

          <GreenButton type="submit" fullWidth>
            Entrar
          </GreenButton>
        </Box>
      </Paper>
    </ThemeProvider>
  );
}
