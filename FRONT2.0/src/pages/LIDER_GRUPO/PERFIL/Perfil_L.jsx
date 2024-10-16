import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, CssBaseline, Paper, Typography, IconButton, Avatar, Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RedButton from '../../../Components/Btns/btn_red';
import Menu_Inferior from '../../../Components/MENUS/menu_inferior';

export default function Perfil_Lider() {
  const [userData, setUserData] = useState(null); // Estado para armazenar dados do usuário
  const [value, setValue] = useState('');

  const navigate = useNavigate();
  
  // Função para navegar de volta à página inicial
  const handleBack = () => {
    navigate('/Index');
  };

  // Carrega os dados do usuário do sessionStorage
  useEffect(() => {
    const storedUserData = sessionStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  // Se os dados do usuário não estiverem disponíveis, mostra um loading ou redireciona
  if (!userData) {
    return <div>Carregando...</div>;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper
        elevation={2}
        sx={{ mt: 5, p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0' }}
      >
        {/* Cabeçalho com botão de voltar */}
        <IconButton onClick={handleBack} sx={{ alignSelf: 'flex-start' }}>
          <ArrowBackIcon sx={{ fontSize: 35 }} />
        </IconButton>

        {/* Avatar do usuário logado */}
        <Stack direction="row" spacing={2}>
          <Avatar
            alt="Imagem do usuário"
            src={userData.photoURL || '/static/images/avatar/1.jpg'} // Se o usuário tiver uma foto, usa-a; caso contrário, usa uma padrão
            sx={{ width: 150, height: 150, border: '2px solid #07382E' }}
          />
        </Stack>

        {/* Nome do usuário */}
        <Box sx={{ width: '100%', height: '100%', mt: 5 }}>
          <Button
            fullWidth
            variant="text"
            sx={{
              position: 'relative',
              color: '#07382E',
              fontWeight: 'bold',
              '&:after': {
                content: '""',
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                borderBottom: '2px solid #07382E',
              },
              '&:hover:after': {
                borderBottom: '2px solid #07382E',
              },
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}
          >
            {userData.displayName || 'Nome do usuário'}
          </Button>
        </Box>

        {/* Função ou descrição do usuário */}
        <Box sx={{ width: '100%', mt: 6 }}>
          <Typography sx={{ mb: 2, fontWeight: 'bold' }}>Função:</Typography>
          <Button
            fullWidth
            variant="outlined"
            sx={{ backgroundColor: '#fff', color: '#07382E', borderColor: '#07382E', fontWeight: 'bold' }}
          >
            {userData.role || 'Função do usuário'}
          </Button>
        </Box>

        {/* Botão para editar informações */}
        <Box sx={{ width: '100%', height: '100%', mt: 6 }}>
          <RedButton onClick={() => navigate('/Edt_Perfil')} fullWidth variant="outlined">
            EDITAR INFORMAÇÕES
          </RedButton>
        </Box>

        {/* Menu inferior */}
        <Menu_Inferior value={value} onChange={(event, newValue) => setValue(newValue)} interfaceType="Lider_Grupo" />
      </Paper>
    </Container>
  );
}