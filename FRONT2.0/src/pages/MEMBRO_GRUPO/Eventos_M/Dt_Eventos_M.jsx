import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, CssBaseline, Paper, Grid } from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AlarmIcon from '@mui/icons-material/Alarm';

// Componentes personalizados
import Box1 from '../../../Components/COMPONENTES_TAREFAS/Box_Form/Box_form1';
import Box2 from '../../../Components/COMPONENTES_TAREFAS/Box_Form/Box_form2';
import Cabecalho2 from '../../../Components/CABEÇALHOS/Cabeçalho2';
import Menu_Inferior from '../../../Components/MENUS/menu_inferior';
import DateTimeDisplay from '../../../Components/COMPONENTES_EVENTOS/DateTimeDisplay';
import TaskListItem from '../../../Components/COMPONENTES_EVENTOS/TaskLitItem';
import DescriptionField from '../../../Components/COMPONENTES_EVENTOS/DescriptionField';

export default function DtEventos() {

    const [value, setValue] = React.useState('');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const navigate = useNavigate();
    const [openPopup, setOpenPopup] = useState(false);
    const [open, setOpen] = useState(false);
    const assignedUsers = ["João", "Maria", "Carlos", "Ana", "Pedro"];
    const descricao = "Descrição da Evento";

    const handleEditClick = () => {
        navigate('/Membro_Eventos');
    };

    const handleClick = () => setOpen(!open);

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
            boxShadow: "0" 
            }}
        >
            
            <Cabecalho2
            handleBack={() => navigate('/Eventos')} 
            icon={<EventAvailableIcon />}
            text="Nome Evento" 
            iconSize={'70px'} 
            />

            <Grid 
            container 
            spacing={2} 
            sx={{ 
                marginTop: '2%', 
                width: '100%' 
            }}
            >
            <Grid item xs={12}>
                <DateTimeDisplay
                icon={<CalendarMonthIcon />}
                label="Data:"
                value="15/07/2024"
                />
            </Grid>

            <Grid item xs={12}>
                <DateTimeDisplay
                icon={<AlarmIcon />}
                label="Horário:"
                value="14:00"
                />
            </Grid>
            </Grid>

            <Box1>
            <TaskListItem 
                users={assignedUsers} 
                open={open} 
                handleClick={handleClick} 
            />
            </Box1>

            <Box2>
            <DescriptionField description={descricao} />
            </Box2>

            <Menu_Inferior value={value} onChange={handleChange} interfaceType="Membro_Grupo" />

        </Paper>
        </Container>
    );
}
