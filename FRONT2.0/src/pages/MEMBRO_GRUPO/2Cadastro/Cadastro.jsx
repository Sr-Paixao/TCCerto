import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
        Avatar,Paper,Box,Grid,Typography,createTheme,
        ThemeProvider,MenuItem,Select
        } from "@mui/material";
//IMPORT LOGO
import Logo from "../../../img/logo.svg";
//IMPORTS COMPONENTS
import TextField1 from "../../../Components/TextField"
import GreenButton from "../../../Components/Btns/btn_green";



const theme = createTheme();

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [type, setType] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!email || !password || !name || !number || !course || !type) {
        return toast.error(`Campos inválidos`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }

      if (password != confirmPassword) {
        return toast.error(`As senhas não coincidem`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
      const response = await axios.post(
        "http://localhost:3307/api/user/cadastrar",
        {
          name,
          email,
          number,
          password,
          course,
          type,
        }
      );

      console.log("Dados enviados para o backend:", response.data);
      toast.success("Cadastrado com sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/login");
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      toast.error(`Erro: ${error}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper
        elevation={2}
        sx={{
          mt: 8,
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "0",
        }}
      >
        <Avatar
          alt="User Image"
          src={Logo}
          sx={{ 
              width: 196.11, 
              height: 184, 
              marginBottom: 5 
              }}
          variant="square"
        />
        <Typography
          component="h1"
          variant="h1"
          style={{ 
                  color: "#07382E", 
                  marginBottom: 4, 
                  fontWeight: "bold",
                  fontSize: "2.25rem" 
                  }}
        >
          Cadastro
        </Typography>

        <Box 
          component="form"
          noValidate 
          sx={{ mt: 2 }} 
          onSubmit={handleSubmit}
        >


          <TextField1
            label="Seu Nome"
            id="name"
            autoComplete="name"
            value={name}
            onChange={(e) => 
              setName(e.target.value)}
            
          />

          <TextField1
            label="E-Mail"
            id="email"
            autoComplete="email-password"
            value={email}
            onChange={(e) => 
              setEmail(e.target.value)}
          />
          
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              component: "form",
            }}
          >
            <TextField1
              label="Numero do celular"
              id="smartphone-number"
              value={number}
              onChange={(e) => 
                setNumber(e.target.value)}
            />
            <TextField1
              type="password"
              label="Senha"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => 
                setPassword(e.target.value)}
            />
            <TextField1
              type="password"
              label="Confirme sua senha"
              id="confirm-password"
              autoComplete="current-password"
              value={confirmPassword}
              onChange={(e) => 
                setConfirmPassword(e.target.value)}
            />

            <Select
              labelId="courses"
              id="courses"
              label="Selecione seu course"
              required
              fullWidth
              value={course}
              onChange={(e) => 
                setCourse(e.target.value)}
              sx={{ 
                  width: "100%", 
                  mt: 2 
                  }}
            >
              <MenuItem 
              value={"1° DSN"}>
                1° DSN
              </MenuItem>
              <MenuItem 
              value={"2° DSN"}>
                2° DSN
              </MenuItem>
              <MenuItem 
              value={"3° DSN"}>
                3° DSN
              </MenuItem>

              <MenuItem 
              value={"1° TRN"}>
                1° TRN
              </MenuItem>
              <MenuItem 
              value={"2° TRN"}>
                2° TRN
              </MenuItem>
              <MenuItem 
              value={"3° TRN"}>
                3° TRN
              </MenuItem>

              <MenuItem 
              value={"1° TAN"}>
                1° TAN
              </MenuItem>
              <MenuItem 
              value={"2° TAN"}>
                2° TAN
              </MenuItem>
              <MenuItem 
              value={"3° TAN"}>
                3° TAN
              </MenuItem>

              <MenuItem 
              value={"1° TLN"}>
                1° TLN
              </MenuItem>
              <MenuItem 
              value={"2° TLN"}>
                2° TLN
              </MenuItem>
              <MenuItem 
              value={"3° TLN"}>
                3° TLN
              </MenuItem>

              <MenuItem 
              value={"1° TEN"}>
                1° TEN
              </MenuItem>
              <MenuItem 
              value={"2° TEN"}>
                2° TEN
              </MenuItem>
              <MenuItem 
              value={"3° TEN"}>
                3° TEN
              </MenuItem>
            </Select>

            <Select
              labelId="type"
              id="type"
              label="Selecione sua função"
              required
              fullWidth
              value={type}
              onChange={(e) => 
                setType(e.target.value)}
              sx={{ 
                    width: "100%", 
                    mt: 2 
                  }}
            >
              <MenuItem 
                value={"LIDER"}
              >
                Lider do Grupo
              </MenuItem>

              <MenuItem 
              value={"MEMBRO DE GRUPO"}
              >
                Membro do grupo
              </MenuItem>

              <MenuItem 
                value={"ORIENTADOR"}
              >
                Orientador
              </MenuItem>
            </Select>
          </Box>

          <Grid container>
            <Grid 
            item 
            xs={12} 
            sx={{ 
              textAlign: "right" 
              }}
              >

              </Grid>
          </Grid>

          <GreenButton
            type="submit"
            fullWidth
            onClick={() => 
              navigate('/Login')}
          >
            Cadastrar
          </GreenButton>

        </Box>
      </Paper>
    </ThemeProvider>
  );
}
