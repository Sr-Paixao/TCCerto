import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, CssBaseline, Paper, Typography, IconButton, Grid, Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import TaskList from '../../Components/COMPONENTES_TAREFAS/TaskLists/TaskList3'; 
import Box1 from '../../Components/COMPONENTES_TAREFAS/Box_Form/Box_form1';
import Box2 from '../../Components/COMPONENTES_TAREFAS/Box_Form/Box_form2';
import Cabecalho2 from '../../Components/Cabeçalhos/Cabeçalho2';
import Menu_Inferior from '../../Components/Menus/menu_inferior';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';

export default function Tarefa_Concluida() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/Central_Tarefas');
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper 
        elevation={2} 
        sx={{ 
          mt: 5, 
          p: 2, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          boxShadow: "0" 
          }}
      >
                                      {/* CABEÇALHO */}
        <Cabecalho2
                    handleBack={handleBack}
                    icon={<TaskAltOutlinedIcon />}
                    text="Tarefa Concluída"
                    iconSize={70}
                />

                                      {/* CAMPO DE LEITURA DATA */}
        <Box1>
          <Grid 
            container 
            alignItems="center" 
            spacing={1}
          >
            <Grid item>
              <IconButton disabled>
                <CalendarMonthIcon 
                  sx={{
                    color:'#07382E', 
                    marginLeft: '60%',
                    fontSize: '120%' 
                    }} 
                />
              </IconButton>
            </Grid>

            <Grid item>
              <Typography 
                variant="subtitle1" 
                gutterBottom 
                sx={{ 
                  marginTop: '5%', 
                  textAlign: 'center', 
                  fontWeight: 'bold', 
                  fontSize: '120%'
                  }}
              >
                Data de Conclusão:
              </Typography>
            </Grid>

            <Grid item>
              <Typography 
                variant="body1" 
                paragraph 
                sx={{ 
                  textAlign: 'center', 
                  marginTop: '20%', 
                  marginLeft: '10%',
                  fontSize: '120%' 
                  }}
              >
                {/* {task.dueDate} */}
              </Typography>
            </Grid>
          </Grid>
        </Box1>

                                      {/* CAMPO DE LEITURA ATRIBUIDOS */}
        <Box1>
          <TaskList />
        </Box1>

                                      {/* CAMPO DE LEITURA DESCRIÇÃO */}
        <Box2
        SX={{mt: '5%'}}>
          <Grid 
            container 
            alignItems="center" 
            spacing={1}
          >
            <Grid item>
              <IconButton disabled>
                <EditNoteOutlinedIcon 
                  sx={{
                    color: '#07382E',
                    fontSize: '130%' 
                    }}
                />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography 
                variant="subtitle1" 
                gutterBottom 
                sx={{ 
                  fontWeight: 'bold',
                  fontSize: '120%' 
                  }}
              >
                Descrição:
              </Typography>
            </Grid>
          </Grid>

          <Typography 
            variant="body1" 
            paragraph 
            sx={{ 
              textAlign: 'left', 
              marginTop: '2px', 
              marginLeft: '3%',
              fontSize: '120%' 
              }}
          > 
                Descrição da tarefa
          </Typography>
        </Box2>

                                              {/* MENU INFERIOR */}
        <Menu_Inferior />

      </Paper>
    </Container>
  );
}
