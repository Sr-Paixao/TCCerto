import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Typography, Box, CssBaseline, Paper, IconButton } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CircularProgressWithLabel from '../../../Components/COMPONENTES_PROGRESS/Grafico'; 
import Menu_Inferior from '../../../Components/MENUS_LIDER/menu_inferior';
import Btn_Criar from '../../../Components/Btns/Btn_criar';
import EtapaButton from '../../../Components/COMPONENTES_PROGRESS/Card_Etapa'; 
import SomeIcon from '@mui/icons-material/ErrorOutline';

const ProgressoPage = () => {

    const [value, setValue] = React.useState('progresso');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const percentage = 80; 

    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/Central_Progresso');
    };

    const handleNovaEtapa = () => {
    navigate('/Criar_Etapa');
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
          <IconButton onClick={handleBack} sx={{ alignSelf: 'flex-start', color: '#07382E' }}>
            <ArrowBackIcon sx={{ fontSize: '2rem' }} />
          </IconButton>
          
          <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <CircularProgressWithLabel value={percentage} icon={DescriptionIcon} />
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
              Marque as etapas que você já concluiu para saber o progresso do seu projeto. 
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

          <Box sx={{ width: '100%'}}>
          <EtapaButton icon={SomeIcon} label="Minha Etapa" />
          </Box>

          <Btn_Criar onClick={handleNovaEtapa} />

          <Menu_Inferior value={value} onChange={handleChange} interfaceType="Lider_Grupo" />
          
        </Paper>
      </Container>
    );
};

export default ProgressoPage;
