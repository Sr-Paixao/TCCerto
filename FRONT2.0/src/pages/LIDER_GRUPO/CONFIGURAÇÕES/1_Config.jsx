import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  Box, Container, CssBaseline, Paper, Typography, Divider, } from '@mui/material';
import Link from '@mui/material/Link';
import SettingsIcon from '@mui/icons-material/Settings';
import Menu_Superior2 from '../../../Components/MENUS_LIDER/menu_superior2';
import Menu_Inferior from '../../../Components/MENUS_LIDER/menu_inferior';
import Cabecalho1 from '../../../Components/CABEÇALHOS/Cabeçalho1';
import CustomLink from '../../../Components/LINKS/CustomLink';
import Popup from "./3_Avaliacao";

export default function Configuracoes() {
    const [value, setValue] = React.useState('');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [openPopup, setOpenPopup] = useState(false);
    const navigate = useNavigate();

    // Função para abrir o pop-up
    const handleOpenPopup = () => {
        setOpenPopup(true);
    };

    // Função para fechar o pop-up
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

                                            {/* Menu Superior */}
                    <Menu_Superior2
                    sx={{ mt: '15%'}} />

                                            {/* CABEÇALHO */}
                    <Box
                    sx={{mt: '15%'}}
                    >
                    <Cabecalho1 
                        icon={<SettingsIcon />} 
                        text='Configuração' 
                        iconSize="70px"
                    />
                    </Box>
                                            {/* ITENS CONFIGURAÇÕES */}
                    <Box 
                        sx={{ 
                            width: '100%', 
                            mt: 3 
                            }}
                    >

                        <CustomLink href="/Relatar_Problema" text="Relatar Problema" />
                            <Divider />

                        <CustomLink href="/Termo_2" text="Termos e Politicas" />
                            <Divider />

                        <CustomLink onClick={handleOpenPopup} style={{ cursor: 'pointer' }} text="Avalie-nos" />

                    </Box>
                    
                                            {/*MENU INFERIOR */}
                    <Menu_Inferior value={value} onChange={handleChange} interfaceType="Lider_Grupo" />

                    <Popup 
                        open={openPopup} 
                        handleClose={handleClosePopup} 
                    />
                    
                </Paper>
        </Container>
    );
}
