import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Container, CssBaseline, Paper, Typography, IconButton, Grid} from '@mui/material';

import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import AlarmIcon from '@mui/icons-material/Alarm';

import Popup from './pop-ups/POP-UP1';

import Menu_Inferior from '../../../Components/MENUS_LIDER/menu_inferior';
import Cabecalho2 from '../../../Components/CABEÇALHOS/Cabeçalho2';
import GreenButton from '../../../Components/Btns/btn_green';
import Box1 from '../../../Components/COMPONENTES_TAREFAS/Box_Form/Box_form1';
import Box2 from '../../../Components/COMPONENTES_TAREFAS/Box_Form/Box_form2';
import TaskList from '../../../Components/COMPONENTES_EVENTOS/TaskList';

export default function EditarEvento() {
    const [titulo, setTitulo] = useState('');
    const [data, setData] = useState('');
    const [hora, setHora] = useState('');
    const [descricao, setDescricao1] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Título:', titulo);
        console.log('Data :', data);
        console.log('Hora :', hora);
        console.log('Descrição:', descricao);
        setTitulo('');
        setData('');
        setHora('');
        setDescricao1('');
    };

    const [openPopup, setOpenPopup] = useState(false);

    const handleOpenPopup = () => {
        setOpenPopup(true);
    };

    const handleClosePopup = () => {
        setOpenPopup(false);
    };

    const handleBack = () => {
        navigate('/Eventos');
    };

    const [assignedUsers, setAssignedUsers] = useState(["João", "Maria", "Carlos", "Ana", "Pedro"]);

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
                                                            {/* CABEÇALHO  */}
                <Cabecalho2
                    handleBack={handleBack}
                    icon={<EditCalendarIcon />}
                    text="Editar Evento"
                    iconSize={70}
                />

                                                            {/* INICIO FORMULARIO */}
                <form onSubmit={handleSubmit}>
                    <Box1>
                        <Grid 
                            container 
                            alignItems="center" 
                            spacing={1}
                        >

                                                            {/* CAMPO TITULO  */}
                            <Grid item>
                                <IconButton disabled>
                                    <CreateOutlinedIcon 
                                        sx={{ 
                                            color: '#07382E', 
                                            marginLeft: '60%', 
                                            alignItems: 'center',
                                            fontSize: '100%' 
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
                                        fontSize: '100%' 
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
                                    sx={{ width: '100%' }} 
                                />
                            </Grid>

                        </Grid>
                    </Box1>
                                                            {/* CAMPO DATA  */}
                    <Box1>
                        <Grid 
                            container 
                            alignItems="center" 
                            pacing={1}
                        >

                            <Grid item>
                                <IconButton disabled>
                                    <CalendarMonthIcon 
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
                                        fontSize: '100%'  
                                        }}
                                >
                                        Data:
                                </Typography>
                            </Grid>

                            <Grid item>
                                <TextField 
                                    fullWidth 
                                    type="date" 
                                    value={data} 
                                    onChange={(event) => 
                                    setData(event.target.value)} 
                                    variant="standard" 
                                    sx={{ width: '11vh' }}
                                />
                            </Grid>
                        </Grid>
                    </Box1>

                                                            {/* CAMPO HORARIO */}
                    <Box1>
                        <Grid 
                            container 
                            alignItems="center" 
                            spacing={1}
                        >
                            <Grid item>
                                <IconButton disabled>
                                    <AlarmIcon 
                                        sx={{ 
                                            color: '#07382E', 
                                            marginLeft: '60%',
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
                                        marginTop: '5%', 
                                        textAlign: 'center', 
                                        fontWeight: 'bold' 
                                        }}
                                >
                                        Horario:
                                </Typography>
                            </Grid>

                            <Grid item>
                                <TextField 
                                    fullWidth 
                                    type="time" 
                                    value={hora} 
                                    onChange={(event) => 
                                    setHora(event.target.value)} 
                                    variant="standard" 
                                    sx={{ width: '11vh' }}
                                />
                            </Grid>
                        </Grid>
                    </Box1>

                                                            {/* CAMPO CONNVIDAR  */}
                    <Box1>
                        <TaskList 
                            assignedUsers={assignedUsers} 
                            setAssignedUsers={setAssignedUsers} 
                        />
                    </Box1>

                                                            {/* CAMPO DESCRIÇÃO */}
                    <Box2>
                        <Grid container alignItems="center" spacing={1}>
                            <Grid item>
                                <IconButton disabled>
                                    <EditNoteOutlinedIcon 
                                        sx={{ color: '#07382E' }}
                                    />
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <Typography 
                                    variant="subtitle1" 
                                    gutterBottom 
                                    sx={{   fontWeight: 'bold',
                                            fontSize: '120%' 
                                        }}
                                >
                                    Descrição:
                                </Typography>
                                
                            </Grid>
                                <TextField 
                                fullWidth 
                                value={descricao} 
                                onChange={(event) => 
                                setDescricao1(event.target.value)} 
                                variant="standard" 
                                />
                            
                        </Grid>
                    </Box2>

                                                            {/* BOTÃO DE CRIAR EVENTO  */}
                            <GreenButton
                            type="submit"
                            onClick={handleOpenPopup}
                            >
                                Salvar Alterações
                            </GreenButton>
                </form>

                                                            {/* MENU INFERIOR */}
                <Menu_Inferior/>

                                                            {/* POP-UP DE CONFIRMAÇÃO */}
                <Popup 
                    open={openPopup} 
                    handleClose={handleClosePopup} 
                />


            </Paper>

        </Container>
    );
}
