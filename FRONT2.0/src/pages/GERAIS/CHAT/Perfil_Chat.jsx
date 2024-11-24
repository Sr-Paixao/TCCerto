import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Avatar, Typography, IconButton, List, ListItem, ListItemAvatar, ListItemText, Paper } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const GroupProfile = () => {
    const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor: '#E8F5E9',
        height: '100vh',
        padding: '16px',
      }}
    >
      {/* Botão Voltar */}
      <Box sx={{ alignSelf: 'flex-start', mb: 2 }}>
        <IconButton
            onClick={() => navigate('/Chat')}
        >
          <ArrowBackIcon sx={{ color: '#07382E', fontSize: 40 }} />
        </IconButton>
      </Box>

      {/* Logo do Grupo */}
      <Avatar
        src="https://via.placeholder.com/150" 
        alt="Logo"
        sx={{
          width: 120,
          height: 120,
          mb: 2,
          border: '4px solid #07382E',
        }}
      />

      {/* Nome do Grupo */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: 'bold',
          color: '#07382E',
          textAlign: 'center',
        }}
      >
        Nome da Equipe
      </Typography>

      {/* Mídias, Links e Documentos */}
      <Typography
        variant="subtitle1"
        sx={{
          mt: 3,
          mb: 1,
          color: '#000',
          fontWeight: 'bold',
          alignSelf: 'flex-start',
        }}
      >
        Mídias, Links E Documentos:
      </Typography>
      <Paper
        elevation={3}
        sx={{
          width: '100%',
          height: '80px',
          borderRadius: '8px',
          mb: 3,
        }}
      />

      {/* Lista de Membros */}
      <Typography
        variant="subtitle1"
        sx={{
          mb: 1,
          color: '#000',
          fontWeight: 'bold',
          alignSelf: 'flex-start',
        }}
      >
        Membros:
      </Typography>
      <List sx={{ width: '100%', marginLeft: '35%' }}>
        {[
          { name: 'NOME_USUÁRIO', src: 'https://via.placeholder.com/50' },
          { name: 'NOME_USUÁRIO', src: 'https://via.placeholder.com/50' },
          { name: 'NOME_USUÁRIO', src: 'https://via.placeholder.com/50' },
          { name: 'NOME_USUÁRIO', src: 'https://via.placeholder.com/50' },
        ].map((member, index) => (
          <ListItem key={index} sx={{ padding: '8px 0' }}>
            <ListItemAvatar>
              <Avatar src={member.src} alt={member.name} />
            </ListItemAvatar>
            <ListItemText
              primary={member.name}
              sx={{
                color: '#000',
                fontWeight: 'bold',
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default GroupProfile;
