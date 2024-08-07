import * as React from "react";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { useEffect, useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import api from "../../api";

export default function LinkInput({ initialLink }) {
  const [link, setLink] = React.useState(initialLink || "");
  const [data, setData] = useState([]);
  const [groupId, setGroupId] = useState("");
const [parametersRoute, setParametersRoute] = useState("");

  const handleBack = () => {};

function getUsers () {
  api
  .get("/api/user/getAllUsers")
  .then((r) => setData(r.data.data))
  .catch((e) => console.log("Erro ao requisitar usuários: ", e));
}

function getOwnerId() {
  api
  .get(`/api/user/getGroupId?id=${localStorage.getItem("userId")}`)
  .then((r) => setGroupId(r.data.data[0].id))
  .catch((e) => console.log("Erro ao requisitar usuários: ", e));
}

  useEffect(() => {
   getUsers()
   getOwnerId()
  }, []);
  console.log("ID do grupo : ", groupId)

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataForm = new FormData(event.currentTarget);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(link);
  };

  const handleShareWhatsApp = () => {
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(link)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <Container component="main" maxWidth="xs">
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
      ></Paper>

      <CssBaseline />

      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Stack direction="row" spacing={2}>
          <Avatar
            alt="grupo"
            src={Avatar}
            sx={{ width: 150, height: 150, border: "2px solid #07382E" }}
          />
        </Stack>

        <Typography
          component="h1"
          variant="h9"
          sx={{ mt: 4, fontWeight: "bold" }}
        >
          Convidar Membro
        </Typography>

        {data &&
          data.map((obj, i) => (
            <p key={i}>
              Nome: {obj.nome} | E-mail: {obj.email} | Tel: {obj.celular} <button onClick={() => setLink(`localhost:3307/api/invitation/invitegroup?${encodeURIComponent(`groupId=${groupId}&userInvited=${obj.id}`)}`)}>Gerar convite</button>
            </p>
          ))}
        <TextField
          variant="outlined"
          label="Link"
          value={link}
          onChange={(event) => setLink(event.target.value)}
          InputProps={{
            endAdornment: (
              <IconButton onClick={handleCopyLink}>
                <FileCopyIcon sx={{ color: "#07382E" }} />
              </IconButton>
            ),
          }}
          sx={{
            mt: 5,
            borderColor: "#07382E",
            "& fieldset": { borderColor: "#07382E" },
            width: "95%",
            height: "60px",
          }}
          size="small"
        />

        <Button
          variant="outlined"
          onClick={handleShareWhatsApp}
          sx={{
            marginTop: "10px",
            color: "#07382E",
            "& .MuiSvgIcon-root": { color: "#07382E" },
            border: "none",
          }}
          startIcon={<WhatsAppIcon />}
        >
          Compartilhar via WhatsApp
        </Button>

        <Typography component="h1" variant="subtitle1" sx={{ mt: 4 }}>
          Você pode acessar os convites em :
        </Typography>

        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          Gerenciamento de Equipe
        </Typography>

        <Button
          type="submit"
          fullWidth
          variant="outlined"
          sx={{
            mt: 5,
            backgroundColor: "#fff",
            color: "#07382E",
            borderColor: "#07382E",
            "&:hover": {
              borderColor: "#07382E",
              backgroundColor: "transparent",
            },
          }}
        >
          CONVIDAR POR QR CODE
        </Button>

        <Button
          type="submit"
          fullWidth
          variant="outlined"
          sx={{
            mt: 2,
            mb: 5,
            backgroundColor: "#fff",
            color: "#07382E",
            borderColor: "#07382E",
            "&:hover": {
              borderColor: "#07382E",
              backgroundColor: "transparent",
            },
          }}
        >
          FECHAR
        </Button>
      </Box>
    </Container>
  );
}
