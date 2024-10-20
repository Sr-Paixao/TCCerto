import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  Box, Container, CssBaseline, Paper, Typography, Divider, } from '@mui/material';
import Link from '@mui/material/Link';
import SettingsIcon from '@mui/icons-material/Settings';
import Menu_Superior from '../../../Components/MENUS/menu_superior';
import Menu_Inferior from '../../../Components/MENUS/menu_inferior';
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
                    <Menu_Superior backgroundColor="#someColor"  profileRoute="/Perfil_L" interfaceType="Lider_Grupo" />

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

// import React from 'react';
// import { Switch, styled } from '@mui/material';

// const CustomSwitch = styled(Switch)(({ theme }) => ({
//   width: 48,
//   height: 24,
//   padding: 0,
//   display: 'flex',
//   '&:active': {
//     '& .MuiSwitch-thumb': {
//       width: 18,
//     },
//     '& .MuiSwitch-switchBase.Mui-checked': {
//       transform: 'translateX(24px)',
//     },
//   },
//   '& .MuiSwitch-switchBase': {
//     padding: 2,
//     '&.Mui-checked': {
//       transform: 'translateX(24px)',
//       color: '#fff',
//       '& + .MuiSwitch-track': {
//         opacity: 1,
//         backgroundColor: '#004d40',
//       },
//     },
//   },
//   '& .MuiSwitch-thumb': {
//     width: 20,
//     height: 20,
//     boxShadow: 'none',
//   },
//   '& .MuiSwitch-track': {
//     borderRadius: 24 / 2,
//     opacity: 1,
//     backgroundColor: '#80cbc4',
//   },
// }));

// export default function CustomInputSwitch() {
//   return (
//     <CustomSwitch defaultChecked />
//   );
// }
