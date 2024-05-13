import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  
    Box, Container, CssBaseline, 
    Paper, Divider, 
    } from '@mui/material';

// IMPORT ICONES 
import SettingsIcon from '@mui/icons-material/Settings';

//IMPORT COMPONENTES
import Menu_Superior2 from '../../../Components/Menus_Membro/menu_superior2_M';
import Cabecalho1 from '../../../Components/Cabeçalhos2/Cabeçalho1';
import CustomLink from '../../../Components/LINKS2/CustomLink';
import Menu_Inferior from '../../../Components/Menus_Membro/menu_inferior_M';

//IMPORT POP-UP
import Popup from "./Avaliacao_M";

export default function Configuracoes_M() {
    const [openPopup, setOpenPopup] = useState(false);
    const navigate = useNavigate();

    const handleOpenPopup = () => {
        setOpenPopup(true);
    };

    const handleClosePopup = () => {
        setOpenPopup(false);
    };

    return (
        <Container 
            component="main" 
            maxWidth="xs"
        >
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
                                                            {/* MENU SUPERIOR  */}
                <Menu_Superior2 sx={{ mt: '15%' }} />
                <Box sx={{ mt: '15%' }}>

                                                            {/* CABEÇALHO  */}
                    <Cabecalho1 
                        icon={<SettingsIcon />} 
                        text='Configuração' 
                        iconSize="70px"
                    />
                </Box>

                                                            {/* OPÇÕES DE CONFIGURAÇÃO  */}
                <Box 
                    sx={{ 
                        width: '100%', 
                        mt: 3 
                        }}
                >

                    <CustomLink href="/Relatar_Problema_M" text="Relatar Problema" />
                    <Divider />

                    <CustomLink href="/Termo_2_M" text="Termos e Politicas" />
                    <Divider />

                    <CustomLink onClick={handleOpenPopup} text="Avalie-nos" />

                </Box>

                                                            {/* MENU INFERIOR  */}
                <Menu_Inferior />
            </Paper>

                                                            {/* ABERTURA POP-UP  */}
            <Popup 
                open={openPopup} 
                handleClose={handleClosePopup} 
            />
        </Container>
    );
}
