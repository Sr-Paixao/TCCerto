import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
        Container, CssBaseline, Paper, 
        Typography, Grid, IconButton 
        } from '@mui/material';

//IMPORTS ICONES
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DoneIcon from '@mui/icons-material/Done';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';

//IMPORTS COMPONENTS
import Cabecalho2 from '../../../Components/CABEÇALHOS/Cabeçalho2';
import Box1 from '../../../Components/COMPONENTES_TAREFAS/Box_Form/Box_form1';
import Box2 from '../../../Components/COMPONENTES_TAREFAS/Box_Form/Box_form2';
import RedButton from '../../../Components/Btns/btn_red';
import Menu_Inferior from '../../../Components/MENUS_MEMBROS/menu_inferior_M';

//IMPORT POP-UP
import DesmarcarConclusao from './Pop-Ups/Desmarcar_Conclusao'; 

export default function Tarefa_Concluida_M() {
    const navigate = useNavigate();
    const [openPopup, setOpenPopup] = useState(false); 
    const handleBack = () => {
        navigate('/Central_Tarefas_M');
    };

    const handleMarkAsIncomplete = () => {
        // Lógica para marcar a tarefa como não concluída
        setOpenPopup(true); 
    };

    // Defina uma data de conclusão de exemplo
    const dataDaConclusao = new Date('2024-05-12'); 
    
    // Formate a data de conclusão para o formato brasileiro (DD/MM/AAAA)
    const dataFormatada = 
    `${dataDaConclusao.getDate()}/
    ${dataDaConclusao.getMonth() + 1}/
    ${dataDaConclusao.getFullYear()}`;

    const descricao = "Descrição da tarefa"; // Definindo a descrição aqui

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
                    text="Nome da tarefa"
                    iconSize={70}
                />

                                                            {/* DATA DE CONCLUSÃO  */}
                <Box1>
                    <Grid 
                        container alignItems="center" 
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
                                    fontSize: '100%'
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
                                    marginLeft: '10%'
                                    }}
                            >
                                {dataFormatada}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box1>

                                                            {/* CONCLUÍDA POR:  */}
                <Box1>
                    <Grid 
                        container 
                        alignItems="center" 
                        spacing={1}
                    >
                        <Grid item>
                            <IconButton disabled>
                                <DoneIcon 
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
                                    fontSize: '100%'
                                    }}
                            >
                                Concluída por você em:
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Typography 
                                variant="body1" 
                                paragraph 
                                sx={{ 
                                    textAlign: 'center', 
                                    marginTop: '20%', 
                                    marginLeft: '10%'
                                    }}
                            >
                                {dataFormatada}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box1>

                                                            {/* CAMPO DE LEITURA DESCRIÇÃO  */}
                <Box2>
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
                                        fontSize: '130%',
                                        marginTop: '-5%'
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
                                    fontSize: '100%'
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
                            marginLeft: '3%' 
                            }}
                    > 
                        {descricao}
                    </Typography>
                </Box2>

                                                            {/* BOTÃO PARA MARCAR COMO NÃO CONCLUÍDA */}
                <Grid 
                    container 
                    justifyContent="center" 
                    sx={{ marginTop: '20px' }}
                >
                    <RedButton 
                        onClick={handleMarkAsIncomplete}
                    >
                        Marcar como não concluída
                    </RedButton>
                </Grid>

                                                            {/* POP-UP PARA DESMARCAR CONCLUSÃO */}
                <DesmarcarConclusao 
                    open={openPopup} 
                    handleClose={() => setOpenPopup(false)} 
                />

                                                            {/* MENU INFERIOR */}
                <Menu_Inferior />
            </Paper>
        </Container>
    );
}
