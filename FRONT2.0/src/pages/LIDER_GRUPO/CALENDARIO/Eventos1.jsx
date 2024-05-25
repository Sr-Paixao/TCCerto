import React from 'react';
import { Container, CssBaseline, Paper, Box, Grid } from '@mui/material';
import Cabecalho1 from '../../../Components/CABEÇALHOS/Cabeçalho1';
import Menu_Superior2 from '../../../Components/MENUS_LIDER/menu_superior2';
import Menu_Inferior from '../../../Components//MENUS_LIDER/menu_inferior';
import Calendario from '../../../Components/COMPONENTES_EVENTOS/CALENDARIO';
import iconCalendario from '../../../img/calendario2.svg';

export default function Central_Eventos() {
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
                                                {/* MENU SUPERIOR */}
                            <Menu_Superior2 />
                            
                                                {/* CABEÇALHO */}
                            <Box
                            sx={{mt: '5%'}}
                            >
                            <Cabecalho1 
                                avatar={iconCalendario} 
                                text='Eventos' 
                                iconSize="60px"
                            />
                            </Box>

                                                {/* calendario */}
                            <Box
                            sx={{mt: '-80%'}}
                            >
                            <Calendario/>  
                            </Box>

                                                {/* AQUI DEVE VIR OS CARD DE EVENTOS */}

                                                {/* MENU INFERIOR */}
                            <Menu_Inferior />
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}
