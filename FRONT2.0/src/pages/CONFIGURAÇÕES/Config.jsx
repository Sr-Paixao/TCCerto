import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  
    Box, 
    Container, 
    CssBaseline, 
    Paper, 
    Typography, 
    Divider, 
} from '@mui/material';
import Link from '@mui/material/Link';
import SettingsIcon from '@mui/icons-material/Settings';
import Menu_Superior2 from '../../Components/Menus/menu_superior2';
import Menu_Inferior from '../../Components/Menus/menu_inferior';
import Cabecalho1 from '../../Components/Cabeçalhos/Cabeçalho1';
import Popup from "../CONFIGURAÇÕES/Avaliacao";

export default function Configuracoes() {

    const [openPopup, setOpenPopup] = useState(false);
    const navigate = useNavigate();

    // Função para voltar para a página inicial
    const handleBack = () => {
        navigate('/');
    };

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
                        <Typography 
                            variant="subtitle1" 
                            sx={{ 
                                mt: 2, 
                                mb: 2, 
                                textAlign: 'left',
                                fontWeight: 'bold'
                                }}
                        >
                            <Link 
                                href="/Relatar_Problema" 
                                color="inherit" 
                                underline="none"
                            >
                                RELATAR PROBLEMA
                            </Link>
                        </Typography>
                            <Divider />

                        <Typography 
                            variant="subtitle1" 
                            sx={{ 
                                mt: 2,
                                mb: 2, 
                                textAlign: 'left',
                                fontWeight: 'bold'
                                }}
                        >
                            <Link 
                                href="./Termo_2" 
                                color="inherit" 
                                underline="none"
                            >
                                TERMOS E PRIVACIDADE
                            </Link>
                        </Typography>
                            <Divider />

                        <Typography 
                            variant="subtitle1" 
                            sx={{ 
                                mt: 3, 
                                mb: 1, 
                                textAlign: 'left',
                                fontWeight: 'bold' 
                                }} 
                        >
                            <Link 
                                onClick={handleOpenPopup}
                                color="inherit" 
                                underline="none"
                                style={{ cursor: 'pointer' }}
                            >
                                AVALIE-NOS
                            </Link>
                        </Typography>
                    </Box>
                                            {/*MENU INFERIOR */}
                    <Menu_Inferior />
                    <Popup 
                        open={openPopup} 
                        handleClose={handleClosePopup} 
                    />
                    
                </Paper>
        </Container>
    );
}
