import React from 'react';
import { Container, Grid, Typography, Box, CssBaseline, Paper } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';
import WarningIcon from '@mui/icons-material/Warning';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import SchoolIcon from '@mui/icons-material/School';
import CircularProgressWithLabel from '../../../Components/COMPONENTES_PROGRESS/Grafico'; 
import Menu_Inferior from '../../../Components/MENUS/menu_inferior';
import EtapaButton from '../../../Components/COMPONENTES_PROGRESS/Card_Etapas'; 
import Menu_Superior from '../../../Components/MENUS/menu_superior';

const Progresso = () => {
  const [value, setValue] = React.useState('progresso');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const percentage = 66; // Exemplo de progresso, pode ser dinamicamente atualizado

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

        <Menu_Superior backgroundColor="#someColor" interfaceType="Lider_Grupo" />  

        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
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
            Progresso
          </Typography>
        </Box>
        <Typography 
          variant="h6" 
          component="h2" 
          gutterBottom 
          sx={{ textAlign: 'left', width: '100%', fontWeight: 'bold', fontSize: '1.15rem' }}
        >
          Etapas:
        </Typography>
        <Grid container spacing={1} direction="column">
          <Grid item>
            <EtapaButton icon={DescriptionIcon} label="DOCUMENTAÇÃO"  to="/Documentacao"/>
          </Grid>
          <Grid item>
            <EtapaButton icon={PersonIcon} label="PRÁTICA" to="/Pratica" />
          </Grid>
        </Grid>
        <Box mt={3} mb={7}> 
          <Typography 
            variant="h6" 
            component="div" 
            gutterBottom 
            sx={{ fontWeight: 'bold', fontSize: '1.15rem' }}
          >
            Legenda:
          </Typography>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box display="flex" flexDirection="column" alignItems="center" mr={2}>
              <WarningIcon sx={{ color: 'red' }} />
              <Typography variant="body2" align="center" sx={{ fontSize: '0.875rem', fontWeight: 'bold' }}>
                Prioridade Alta
              </Typography>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center" mr={2}>
              <ReportProblemIcon sx={{ color: 'orange' }} />
              <Typography variant="body2" align="center" sx={{ fontSize: '0.875rem', fontWeight: 'bold' }}>
                Prioridade Média
              </Typography>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
              <ReportProblemIcon sx={{ color: 'green' }} />
              <Typography variant="body2" align="center" sx={{ fontSize: '0.875rem', fontWeight: 'bold' }}>
                Prioridade Baixa
              </Typography>
            </Box>
          </Box>
        </Box>
        <Menu_Inferior value={value} onChange={handleChange} interfaceType="Lider_Grupo" />
      </Paper>
    </Container>
  );
};

export default Progresso;
