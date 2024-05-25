import React from 'react';
import { Container, CssBaseline, Paper, Box, Grid } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import ptBR from 'date-fns/locale/pt-BR';
import Menu_Superior2 from '../../../Components/MENUS_LIDER/menu_superior2';
import Menu_Inferior from '../../../Components/MENUS_LIDER/menu_inferior';
import Calendar from '../../../Components/COMPONENTES_EVENTOS/CALENDARIO';
import Cabecalho_1 from '../../../Components/CABEÇALHOS/Cabeçalho1';
import calendario_a from '../../../img/calendario2.svg';

export default function Central_Tarefa() {
    return (
        // <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBR}>
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
                    <Grid container justifyContent="center" alignItems="center" direction="column">
                        <Grid item xs={12} sx={{ width: '100%' }}>
                            <Paper elevation={2} sx={{ p: 2, boxShadow: "0", width: '100%' }}>

                                {/* MENU SUPERIOR */}
                                <Menu_Superior2 />

                                {/* CABEÇALHO */}
                                <Cabecalho_1
                                    avatar={calendario_a}
                                    text="Orçamento"
                                    iconSize={70}
                                />

                                <Box sx={{ display: 'flex', justifyContent: 'center', mt:-5 }}>
                                    <Calendar />
                                </Box>
                                
                                {/* MENU INFERIOR */}
                                <Menu_Inferior />
                            </Paper>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        // </LocalizationProvider>
    );
}
