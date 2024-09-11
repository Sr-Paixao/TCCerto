import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, CssBaseline, Paper, Typography, IconButton, TextField, Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import RedButton from '../../../Components/Btns/btn_red';
import Menu_Inferior from '../../../Components/MENUS/menu_inferior';
import Edt_avatar from '../../../Components/EDT_AVATAR/Edt_avatar'; // Importando o novo componente

export default function Edt_Pefil_Lider() {
    const [value, setValue] = useState('');
    const [name, setName] = useState('Nome');
    const [isEditingName, setIsEditingName] = useState(false);
    const [avatarSrc, setAvatarSrc] = useState('/static/images/avatar/1.jpg');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/Perfil_L');
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleAvatarChange = (event) => {
        setAvatarSrc(URL.createObjectURL(event.target.files[0]));
    };

    const handleSaveChanges = () => {
        console.log('Alterações salvas');
        navigate('/Perfil_L'); // Volta para a tela de perfil
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Paper 
                elevation={2} 
                sx={{ mt: 5, p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: "0" }}
            >
                {/* CABEÇALHO */}
                <IconButton onClick={handleBack} sx={{ alignSelf: 'flex-start' }}>
                    <ArrowBackIcon sx={{ fontSize: 35 }} />
                </IconButton>

                {/* Componente editar_foto */}
                <Edt_avatar avatarSrc={avatarSrc} handleAvatarChange={handleAvatarChange} />

                <Box sx={{ width: '100%', mt: 5, display: 'flex', alignItems: 'center', borderBottom: '2px solid #07382E' }}>
                    <TextField
                        fullWidth
                        variant="standard"
                        InputProps={{
                            disableUnderline: true,
                            sx: { fontSize: '20px', fontWeight: 'bold', color: '#07382E' }
                        }}
                        value={name}
                        onChange={handleNameChange}
                        sx={{
                            '& .MuiInputBase-root': {
                                paddingRight: '32px', 
                            },
                        }}
                    />
                    <IconButton onClick={() => setIsEditingName(!isEditingName)} sx={{ color: '#07382E', ml: -4 }}>
                        <EditIcon />
                    </IconButton>
                </Box>

                <Box sx={{ width: '100%', mt: 6 }}>
                    <Typography sx={{ mb: 2, fontWeight: 'bold', fontSize: '20px' }}>Função:</Typography>
                    <Button
                        fullWidth
                        variant="outlined"
                        sx={{ 
                            backgroundColor: "#fff", 
                            color: "#07382E", 
                            borderColor: '#07382E', 
                            fontWeight: 'bold',
                            fontSize: '90%', 
                            py: 1.5, 
                        }}
                    >
                        Função
                    </Button>
                </Box>

                {/* BOTÃO PARA SALVAR ALTERAÇÕES */}
                <Box sx={{ width: '100%', height: '100%', mt: 6 }}>
                    <RedButton
                        onClick={handleSaveChanges}
                        fullWidth
                        variant="outlined"
                    >
                        SALVAR ALTERAÇÕES
                    </RedButton>
                </Box>

                {/* MENU INFERIOR */}
                <Menu_Inferior value={value} onChange={handleChange} interfaceType="Lider_Grupo" />
            </Paper>
        </Container>
    );
}
