import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, CssBaseline, Paper, Typography, Box, Grid } from '@mui/material';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import Cabecalho1 from '../../../Components/CABEÇALHOS/Cabeçalho1';
import Menu_Superior from '../../../Components/MENUS/menu_superior';
import Menu_Inferior from '../../../Components/MENUS/menu_inferior';
import Card_Tarefa from '../../../Components/COMPONENTES_TAREFAS/CARDS_LIDER/Card_Tarefas';
import Card_Tarefa_Completa from '../../../Components/COMPONENTES_TAREFAS/CARDS_LIDER/Card_Concluida';
import Btn_Criar from '../../../Components/Btns/Btn_criar';

export default function Central_Tarefa() {
    const [value, setValue] = React.useState('');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const navigate = useNavigate();

    const handleNovaTarefa = () => {
        navigate('/Criar_Tarefa');
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                    <Paper elevation={2} sx={{ p: 2, boxShadow: "0" }}>
                        
                        {/* MENU SUPERIOR */}
                        <Menu_Superior backgroundColor="#someColor" interfaceType="Lider_Grupo" />
                        
                        {/* CABEÇALHO */}
                        <Box sx={{mt: '5%'}}>
                            <Cabecalho1 
                                icon={<TaskAltOutlinedIcon />} 
                                text='Tarefas' 
                                iconSize="70px"
                            />
                        </Box>
                        
                        {/* AQUI VIRAM OS CARDS DE TAREFAS */}
                        <Box sx={{mt: '5%'}}>
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
                        
                        {/* Botão Criar Tarefa */}
                        <Btn_Criar onClick={handleNovaTarefa} />

                        {/* MENU INFERIOR */}
                        <Menu_Inferior value={value} onChange={handleChange} interfaceType="Lider_Grupo" />

                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}
