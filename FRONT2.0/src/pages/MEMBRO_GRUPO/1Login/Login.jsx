import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
        Avatar,Button,TextField,Link,
        Paper,Box,Grid,Typography,
        } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//IMPORT LOGO
import Logo from '../../../img/logo.svg';
//IMPORT API
import api from '../../../api';
//IMPORT COMPONET
import GreenButton from '../../../Components/Btns/btn_green';


const theme = createTheme();


export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Cadastro");
  };

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const dataLogin = {
        email,
        password,
      };

      const { data } = await api.post("/login", dataLogin);
      toast.success(`Bem vindo, ${data.data} !`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })

      sessionStorage.setItem("login", true);
      sessionStorage.setItem("jwt", data.token);
      navigate("/");
    } catch (err) {
      toast("Erro", {
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

        <Paper elevation={2} 
        sx={{ mt: 12, p: 2, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        boxShadow: "0" 
        }}
        >

          <Avatar
              alt="User Image"
              variant="square"
              src={Logo}
              sx={{ width: 196.11, 
                    height: 184, 
                    marginBottom: 5  
              }}
          />

          <Typography component="h1" variant="h4" 
            style={{color :"#07382E" , 
            marginBottom: 4, 
            fontWeight: 'bold' 
            }}
          >
            Login
          </Typography>

          <Box 
            component="form" 
            onSubmit={handleLogin} 
            noValidate 
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-Mail"
              name="email"
              value={email}
              onChange={(e) => 
                setEmail(e.target.value)}
              autoComplete="email"
              autoFocus
              sx={{
                '& label.Mui-focused': {
                  color: '#07382E',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#07382E',
                  },
                  '&:hover fieldset': {
                    borderColor: '#07382E',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#105F4F',
                  },
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
                '& label.Mui-focused': {
                  color: '#07382E',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#07382E',
                  },
                  '&:hover fieldset': {
                    borderColor: '#07382E',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#105F4F',
                  },
                },
              }}
            />

            <Grid container>

              <Grid 
                item 
                xs={12} 
                sx={{ textAlign: 'right' }}
              >

                <Link href="#" variant="body2" 
                  sx={{color: "#07382E", 
                      '&:hover': {color: '#105F4F'}, 
                      textDecoration: 'none', 
                      fontWeight: 'bold'}}
                >
                  Esqueci minha senha
                </Link>

              </Grid>

            </Grid>

            <GreenButton
              type="submit"
              onClick={() => 
                navigate('/Home2')}
              fullWidth

            >
              Entrar
            </GreenButton>

            <GreenButton
              onClick={handleSubmit}
              fullWidth
            >
              Cadastrar
            </GreenButton>

          </Box>
        </Paper>
    </ThemeProvider>
  );
}
