import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, CssBaseline, Paper, Typography, IconButton, Grid } from '@mui/material';
import { List, ListItem, ListItemAvatar, Avatar } from '@mui/material';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RedButton from '../../../Components/Btns/btn_red';
import Box_2 from '../../../Components/COMPONENTES_TAREFAS/Box_Form/Box_form2';
import Menu_Inferior from '../../../Components/MENUS_LIDER/menu_inferior';

const members = [
    { id: 1, name: 'Usuário 1', avatarSrc: '/avatar1.jpg' },
    { id: 2, name: 'Usuário 2', avatarSrc: '/avatar2.jpg' },
    { id: 3, name: 'Usuário 3', avatarSrc: '/avatar3.jpg' },
    // Adicione mais membros conforme necessário
];

export default function Info_Equipe() {

    const [value, setValue] = useState('equipe'); 

    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/Geral_Equipe');
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const descricao = "Descrição do Grupo";

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
                        sx={{ width: 100, height: 100, border: '2px solid #07382E' }}
                    />
                </Stack>

                <Typography 
                    component="h1" 
                    variant="h9" 
                    sx={{ color: '#07382E', mt: 2, textAlign:'center', fontSize: '1.8em' }}
                >
                    Nome da Equipe
                </Typography>

                <Box sx={{ textAlign: 'left' }}>
                    <Typography 
                        component="h2" 
                        variant="subtitle1" 
                        sx={{ color: '#07382E', mt: 2, fontSize: '1.4em', fontWeight: 'bold', marginLeft: '-115%' }}
                    >
                        Descrição:
                    </Typography>
                </Box>

                <Box_2>
                    <Grid container alignItems="center" spacing={1}>
                        <Typography 
                            variant="body1" 
                            paragraph 
                            sx={{ textAlign: 'left', marginTop: '10px', marginLeft: '3%' }}
                        > 
                            {descricao}
                        </Typography>
                    </Grid>
                </Box_2>

                {/* MEMBROS */}
                <Box sx={{ textAlign: 'left' }}>
                    <Typography 
                        component="h2" 
                        variant="subtitle1" 
                        sx={{ color: '#07382E', mt: 2, fontSize: '1.4em', fontWeight: 'bold', marginLeft: '-30%' }}
                    >
                        Membros:
                    </Typography>

                    <List>
                        {members.map(member => (
                            <ListItem key={member.id}>
                                <ListItemAvatar>
                                    <Avatar 
                                        alt={member.name} 
                                        src={member.avatarSrc}
                                        sx={{ width: 50, height: 50 }}
                                    />
                                </ListItemAvatar>
                                <Box ml={8}>
                                    <Typography variant="subtitle1">
                                        {member.name}
                                    </Typography>
                                </Box>
                            </ListItem>
                        ))}
                    </List>
                </Box>

                {/* BOTÃO PARA EDITAR INFORMAÇÕES */}
                <Box sx={{ width: '100%', height: '100%' }}>
                    <RedButton 
                        onClick={() => navigate('/Edt_Equipe')}
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
