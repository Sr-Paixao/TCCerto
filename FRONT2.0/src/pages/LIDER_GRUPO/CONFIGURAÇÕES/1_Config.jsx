import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, CssBaseline, Paper, Typography, Divider, Switch } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined'; // Novo ícone
import Menu_Superior from '../../../Components/MENUS/menu_superior';
import Menu_Inferior from '../../../Components/MENUS/menu_inferior';
import Cabecalho1 from '../../../Components/CABEÇALHOS/Cabeçalho1';
import CustomLink from '../../../Components/LINKS/CustomLink';
import Popup from './3_Avaliacao';

export default function Configuracoes() {
    const [value, setValue] = useState('');
    const [notifications, setNotifications] = useState({
        eventos: true,
        tarefas: false,
        mensagens: true,
    });

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleToggle = (event) => {
        setNotifications({
            ...notifications,
            [event.target.name]: event.target.checked,
        });
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
                    boxShadow: '0',
                }}
            >
                {/* Menu Superior */}
                <Menu_Superior backgroundColor="#someColor" profileRoute="/Perfil_L" interfaceType="Lider_Grupo" />

                {/* CABEÇALHO */}
                <Box sx={{ mt: '2%' }}>
                    <Cabecalho1 icon={<SettingsIcon />} text="Configuração" iconSize="70px" />
                </Box>

                {/* Título Notificações com ícone */}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%', mt: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mr: 1 }}>
                        Notificações
                    </Typography>
                    <NotificationsActiveOutlinedIcon />
                </Box>

                {/* ITENS CONFIGURAÇÕES */}
                <Box sx={{ width: '100%', mt: 2 }}>
                    {/* Toggle switches for notifications */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                        <Typography>Eventos</Typography>
                        <Switch
                            checked={notifications.eventos}
                            onChange={handleToggle}
                            name="eventos"
                            sx={{
                                '& .MuiSwitch-switchBase.Mui-checked': {
                                    color: '#00695c',
                                },
                                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                    backgroundColor: '#00695c',
                                },
                                '& .MuiSwitch-track': {
                                    backgroundColor: '#b0bec5',
                                },
                            }}
                        />
                    </Box>

                    <Divider />

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 1 }}>
                        <Typography>Tarefas</Typography>
                        <Switch
                            checked={notifications.tarefas}
                            onChange={handleToggle}
                            name="tarefas"
                            sx={{
                                '& .MuiSwitch-switchBase.Mui-checked': {
                                    color: '#00695c',
                                },
                                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                    backgroundColor: '#00695c',
                                },
                                '& .MuiSwitch-track': {
                                    backgroundColor: '#b0bec5',
                                },
                            }}
                        />
                    </Box>

                    <Divider />

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1, mb: 1 }}>
                        <Typography>Mensagens</Typography>
                        <Switch
                            checked={notifications.mensagens}
                            onChange={handleToggle}
                            name="mensagens"
                            sx={{
                                '& .MuiSwitch-switchBase.Mui-checked': {
                                    color: '#00695c',
                                },
                                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                    backgroundColor: '#00695c',
                                },
                                '& .MuiSwitch-track': {
                                    backgroundColor: '#b0bec5',
                                },
                            }}
                        />
                    </Box>

                    <Divider sx={{ mb: 3 }} />

                    <CustomLink href="/Relatar_Problema" text="Relatar Problema" />
                    <Divider />
                    <CustomLink onClick={handleOpenPopup} style={{ cursor: 'pointer' }} text="Avalie-nos" />
                </Box>

                {/* MENU INFERIOR */}
                <Menu_Inferior value={value} onChange={handleChange} interfaceType="Lider_Grupo" />

                <Popup open={openPopup} handleClose={handleClosePopup} />
            </Paper>
        </Container>
    );
}
