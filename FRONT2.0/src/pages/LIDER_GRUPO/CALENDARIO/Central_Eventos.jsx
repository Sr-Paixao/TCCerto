import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, CssBaseline, Paper, Box, Grid } from '@mui/material';
// IMPORT DE COMPONENTES 
import Menu_Superior2 from '../../../Components/MENUS_LIDER/menu_superior2';
import Cabecalho1 from '../../../Components/CABEÇALHOS/Cabeçalho1';
import Calendario from '../../../Components/COMPONENTES_EVENTOS/CALENDARIO';
import HojeButton from '../../../Components/COMPONENTES_EVENTOS/Hoje';
import CardLider from '../../../Components/COMPONENTES_EVENTOS/Card_Evento_L';
import Menu_Inferior from '../../../Components/MENUS_LIDER/menu_inferior';
import Btn_Novo from   '../../../Components/Btns/Btn_criar';
// IMPORTE DE ICONE 
import iconCalendario from '../../../img/calendario2.svg';

export default function Central_Eventos() {
    const [calendarHeight, setCalendarHeight] = useState(0);

    const handleHeightChange = (height) => {
        setCalendarHeight(height);
    };

    const navigate = useNavigate();

    const handleNovaEvento = () => {
        navigate('/Index');
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
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={12}>

                        {/* / MENU SUPERIOR  */}
                        <Menu_Superior2 />
                        
                        {/* CABEÇALHO */}
                        <Box sx={{ mt: '5%' }}>
                            <Cabecalho1 
                                avatar={iconCalendario} 
                                text='Eventos' 
                                iconSize="60px"
                            />
                        </Box>

                        {/* CALENDÁRIO */}
                        <Box sx={{ mt: 2, width: '100%' }}>
                            <Calendario onHeightChange={handleHeightChange} />  
                        </Box>

                        {/* PROXIMOS EVENTOS */}
                        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                            <HojeButton />
                        </Box>
                        
                        {/* CARDS LIDER */}
                        <Box sx={{ mt: 2, width: '100%' }}>
                            <CardLider />
                        </Box>

                        {/* MENU INFERIOR */}
                        <Box sx={{ mt: 10 }}>
                            <Menu_Inferior />
                        </Box>
                         {/* BOTÃO CRIAR EVENTO */}
                         <Btn_Novo 
                         onClick={handleNovaEvento}
                          />
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}
