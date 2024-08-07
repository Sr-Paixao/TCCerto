import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, CssBaseline, Paper, Typography, IconButton, Grid } from '@mui/material';
import { List, ListItem, ListItemAvatar, Avatar, TextField, Button} from '@mui/material';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RedButton from '../../../Components/Btns/btn_red';
import Box_2 from '../../../Components/COMPONENTES_TAREFAS/Box_Form/Box_form2';
import Menu_Inferior from '../../../Components/MENUS/menu_inferior';

const members = [
    { id: 1, name: 'Usuário 1', avatarSrc: '/avatar1.jpg' },
    { id: 2, name: 'Usuário 2', avatarSrc: '/avatar2.jpg' },
    { id: 3, name: 'Usuário 3', avatarSrc: '/avatar3.jpg' },
    // Adicione mais membros conforme necessário
];

export default function Perfil_Lider() {

    const [value, setValue] = React.useState('');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/Index');
    };

    const descricao = "Descrição do Grupo"; // Definindo a descrição aqui



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

                <Stack direction="row" spacing={2}>
                    <Avatar
                        alt="img grupo"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 150, height: 150, border: '2px solid #07382E' }}
                    />
                </Stack>


                <Box sx={{ width: '100%', height: '100%', mt: 5}}>
                    <Button
                        fullWidth
                        variant="text" 
                        sx={{
                            position: 'relative',
                            color: "#07382E",
                            fontWeight: 'bold',
                            '&:after': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                bottom: 0,
                                borderBottom: '2px solid #07382E', 
                            },
                            '&:hover:after': {
                                borderBottom: '2px solid #07382E', 
                            },
                            '&:hover': {
                                backgroundColor: "transparent", 
                            },
                        }}
                    >
                        NOME
                    </Button>
                </Box>

                <Box sx={{ width: '100%', mt: 6}}>
                    <Typography sx={{mb:2, fontWeight: 'bold',}}>Função:</Typography>
                    <Button
                        fullWidth
                        variant="outlined"
                        sx={{backgroundColor:"#fff", color: "#07382E",  borderColor: '#07382E',fontWeight: 'bold', }}
                    > Função
                    </Button> 
                </Box>

                {/* BOTÃO PARA EDITAR INFORMAÇÕES */}
                <Box sx={{ width: '100%', height: '100%', mt: 6 }}>
                    <RedButton 
                        onClick={() => navigate('/Edt_Perfil')}
                        fullWidth
                        variant="outlined"
                    >
                        EDITAR INFORMAÇÕES
                    </RedButton>
                </Box>

                {/* MENU INFERIOR */}
                <Menu_Inferior value={value} onChange={handleChange} interfaceType="Lider_Grupo" />

            </Paper>
        </Container>
    )
}
