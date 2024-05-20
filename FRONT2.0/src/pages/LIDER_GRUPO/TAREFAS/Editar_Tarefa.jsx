import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
        Container, CssBaseline, Paper, 
        Typography, IconButton, Grid, TextField 
        } from '@mui/material';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TaskList from '../../../Components/COMPONENTES_TAREFAS/TaskLists/TaskList';
import Menu_Inferior from '../../../Components/MENUS_LIDER/menu_inferior';
import Cabecalho1 from '../../../Components/CABEÇALHOS/Cabeçalho1';
import GreenButton from '../../../Components/Btns/btn_green';
import RedButton from '../../../Components/Btns/btn_red';
import Box1 from '../../../Components/COMPONENTES_TAREFAS/Box_Form/Box_form1';
import Box2 from '../../../Components/COMPONENTES_TAREFAS/Box_Form/Box_form2';
import PublishedWithChangesOutlinedIcon from '@mui/icons-material/PublishedWithChangesOutlined';
import Popup from './Pop-Ups/Pop_Up_1';

export default function Edt_Tarefa() {
    const navigate = useNavigate();

    const handleCancelarClick = () => {
        navigate('/Dt_Tarefa');
    };

    // State para controlar o pop-up
    const [openPopup, setOpenPopup] = useState(false);

    // CONSTS DO FORMS 
    const [titulo, setTitulo] = useState('');
    const [dataConclusao, setDataConclusao] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Título:', titulo);
        console.log('Data de Conclusão:', dataConclusao);
        console.log('Descrição:', descricao);
        setTitulo('');
        setDataConclusao('');
        setDescricao('');
    };

    const handleOpenPopup = () => {
        setOpenPopup(true);
    };

    const handleClosePopup = () => {
        setOpenPopup(false);
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
                <Cabecalho1 
                    icon={<PublishedWithChangesOutlinedIcon />} 
                    text='Editar Tarefa' 
                    iconSize="70px"
                />

                {/* FORMULARIO EDIÇÃO DE TAREFA */}
                <form onSubmit={handleSubmit}>

                    {/* CAMPO TITULO */}
                    <Box1>
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
                                            marginLeft: '60%', 
                                            alignItems: 'center',
                                            fontSize: "120%" 
                                            }}
                                    />
                                </IconButton>
                            </Grid>

                            <Grid item>
                                <Typography 
                                    variant="subtitle1" 
                                    gutterBottom 
                                    sx={{ 
                                        marginTop: '10%', 
                                        textAlign: 'center', 
                                        fontWeight: 'bold',
                                        fontSize: '120%' 
                                        }}
                                >
                                    Título:
                                </Typography>
                            </Grid>

                            <Grid item>
                                <TextField
                                    fullWidth
                                    value={titulo}
                                    onChange={(event) => 
                                        setTitulo(event.target.value)}
                                    variant="standard"
                                />
                            </Grid>
                        </Grid>
                    </Box1>

                    {/* CAMPO DATA DE CONCLUSÃO */}
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
                                            color: '#07382E',
                                            marginLeft: '40%',
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
                                <TextField
                                    fullWidth
                                    type="date"
                                    value={dataConclusao}
                                    onChange={(event) =>
                                        setDataConclusao(event.target.value)}
                                    variant="standard"
                                    sx={{ width: '11vh' }}
                                />
                            </Grid>
                        </Grid>
                    </Box1>

                    {/* CAMPO USUARIOS ATRIBUIDOS */}
                    <Box1>
                        <TaskList 
                            assignedUsers={[
                                "João", 
                                "Maria", 
                                "Carlos", 
                                "Ana", 
                                "Pedro"
                                ]} 
                            handleMenuItemClick={() => {}} 
                        />
                    </Box1>

                    {/* CAMPO PARA DESCRIÇÃO DA TAREFA */}
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
                                    Descrição:
                                </Typography>
                            </Grid>
                        </Grid>

                        <TextField
                            fullWidth
                            value={descricao}
                            onChange={(event) => 
                                setDescricao(event.target.value)}
                            variant="standard"
                        />
                    </Box2>
                </form>

                {/* BOTÕES DE CANCELAR E SALVAR */}
                <Grid container justifyContent="center" alignItems="center" spacing={2}>
                    <Grid item xs={6}>
                        <RedButton
                            onClick={handleCancelarClick}
                        >
                            Cancelar
                        </RedButton>

                    </Grid>
                    <Grid item xs={6}>
                        <GreenButton 
                            onClick={handleOpenPopup}
                        >
                            Salvar
                        </GreenButton>
                    </Grid>
                </Grid>

                {/* ABERTURA DE POP-UP  */}
                <Popup 
                    open={openPopup} 
                    handleClose={handleClosePopup} 
                />

            </Paper>

            {/* MENU Inferior  */}
            <Menu_Inferior />
        </Container>
    );
}
