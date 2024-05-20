import React from 'react';
import { 
        Container, CssBaseline, Paper, 
        Typography, Box, Grid 
        } from '@mui/material';
//IMPORT ICONE
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
//IMPORT COMPONENTS
import Menu_Superior2 from '../../../Components/MENUS_MEMBROS/menu_superior2_M';
import Cabecalho1 from '../../../Components/CABEÇALHOS/Cabeçalho1';
import Card_Tarefa from '../../../Components/COMPONENTES_TAREFAS/CARDS_MEMBROS/Card_Tarefas_M';
import Card_Tarefa_Completa from '../../../Components/COMPONENTES_TAREFAS/CARDS_MEMBROS/Card_Concluida_M';
import Menu_Inferior from '../../../Components/MENUS_MEMBROS/menu_inferior_M';


export default function Central_Tarefa_M() {
    return (
        <Container 
            component="main" 
            maxWidth="xs"
        >
            <CssBaseline />
            <Grid 
                container 
                justifyContent="center" 
                alignItems="center"
            >
                <Grid item xs={12}>
                    <Paper 
                        elevation={2} 
                        sx={{ p: 2, boxShadow: "0" }}
                    >
                                                            {/* MENU SUPERIOR */}
                        <Menu_Superior2 />
                        
                                                            {/* CABEÇALHO */}
                        <Box
                        sx={{mt: '5%'}}
                        >
                        <Cabecalho1 
                            icon={<TaskAltOutlinedIcon />} 
                            text='Tarefas' 
                            iconSize="70px"
                        />
                        </Box>
                                                            {/* AQUI VIRAM OS CARDS DE TAREFAS */}
                        <Box
                        sx={{mt: '5%'}}
                        >
                            <Card_Tarefa 
                                nomeTarefa="Nome da Tarefa"
                                diasRestantes={7}
                                usuariosAtribuidos={[
                                    { nome: "Usuário 1", avatar: "caminho/para/avatar1.jpg" },
                                    { nome: "Usuário 2", avatar: "caminho/para/avatar2.jpg" }
                                ]}
                                maxAvatares={3}
                            />
                        </Box>
                        
                                                            {/* Tarefas Concluidas */}
                        <Typography
                            component="h2" 
                            variant="h6" 
                            sx={{ 
                                marginTop: '15px',
                                color: '#07382E' 
                                }}
                        > 
                            Tarefas Concluidas
                        </Typography>
                        
                                                            {/* AQUI VIRAM OS CARDS DE TAREFAS CONCLUIDAS */}
                        <Box>
                            <Card_Tarefa_Completa 
                                nomeTarefa="Nome da Tarefa"
                                dataConclusao={new Date()}
                                usuariosAtribuidos={[
                                    { nome: 'Usuário 1', avatar: 'caminho/para/avatar1.png' },
                                    { nome: 'Usuário 2', avatar: 'caminho/para/avatar2.png' }
                                ]}
                                maxAvatares={2}
                            />
                        </Box>
                        
                                                            {/* MENU INFERIOR */}
                        <Menu_Inferior />
                        
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}
