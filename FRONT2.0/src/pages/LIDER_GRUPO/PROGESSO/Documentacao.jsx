import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Typography, Box, CssBaseline, Paper } from '@mui/material';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import SchoolIcon from '@mui/icons-material/School';
import CircularProgressWithLabel from '../../../Components/COMPONENTES_PROGRESS/Grafico'; 
import Menu_Inferior from '../../../Components/MENUS_LIDER/menu_inferior';
import Cabecalho2 from '../../../Components/CABEÇALHOS/Cabeçalho2';


const ProgressoPage = () => {
    const [value, setValue] = React.useState('progresso');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const percentage = 50; // Exemplo de progresso, pode ser dinamicamente atualizado

    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/Central_Progresso');
    };


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper
        elevation={2} 
        sx={{ 
          mt: 2, 
          p: 2, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          boxShadow: "0", 
          width: '100%', 
          height: '100%' 
        }}
      >
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <Cabecalho2>
            handleBack={handleBack}
            icon={<PlaylistAddIcon />}
            </Cabecalho2>

          <CircularProgressWithLabel value={percentage} icon={SchoolIcon} />
          <Typography
            component="h1"
            variant="h6"
            sx={{
              color: '#07382E',
              fontSize: '200%',
              textAlign: 'CENTER',
              mb: 2,
              mt: 2
            }}
          >
            Documentação
          </Typography>
        </Box>

        <Typography
            sx={{
                fontSize: '100%',
                textAlign: 'left',
                mb: 2
                }}
        >
            Marque as atapas que você já concluiu para saber o progresso do seu projeto. 
        </Typography>
        <Typography 
          variant="h6" 
          component="h2" 
          gutterBottom 
          sx={{ 
            textAlign: 'left', 
            width: '100%', 
            fontWeight: 'bold', 
            fontSize: '1.15rem',
            mb: 2 
            }}
        >
          Etapas:
        </Typography>

        
        
        <Menu_Inferior value={value} onChange={handleChange} />
      </Paper>
    </Container>
  );
};

export default ProgressoPage;
