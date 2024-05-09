import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  
    Box, 
    Container, 
    CssBaseline, 
    Paper, 
    Typography, 
    IconButton,
    Grid,
    Button,
    TextField
} from '@mui/material';
import { List, ListItem, ListItemAvatar, Avatar } from '@mui/material';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Box2 from '../../../Components/COMPONENTES_TAREFAS/Box_Form/Box_form2';
import GreenButton from '../../../Components/Btns/btn_green';
import RedButton from '../../../Components/Btns/btn_red';

// IMPORT POP-UPS
import Popup1 from './POPUP_SALVAR'; 
import Popup2 from './POPUP_CANCELAR'; 

const members = [
    { id: 1, name: 'Usuário 1', avatarSrc: '/avatar1.jpg' },
    { id: 2, name: 'Usuário 2', avatarSrc: '/avatar2.jpg' },
    { id: 3, name: 'Usuário 3', avatarSrc: '/avatar3.jpg' },
    // Adicione mais membros conforme necessário
];

export default function Edt_Equipe() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/Info_Equipe');
    };

    // Estados para controlar se os pop-ups estão abertos ou fechados
    const [openPopup1, setOpenPopup1] = useState(false);
    const [openPopup2, setOpenPopup2] = useState(false);

    const handleOpenPopup1 = () => {
        setOpenPopup1(true);
    };

    const handleClosePopup1 = () => {
        setOpenPopup1(false);
    };

    const handleOpenPopup2 = () => {
        setOpenPopup2(true);
    };

    const handleClosePopup2 = () => {
        setOpenPopup2(false);
    };

    const handleAvatarChange = () => {
        // Adicione a lógica para abrir a galeria aqui
        // Por exemplo:
        // alert('Abrir galeria para selecionar uma imagem');
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Paper elevation={2} 
                sx={{ 
                    mt: 4, 
                    p: 2, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    boxShadow: "0" 
                    }}
            >
                {/* CABEÇALHO */}
                <IconButton 
                    onClick={handleBack} 
                    sx={{ 
                        alignSelf: 'flex-start', 
                        mt: -2 
                        }}
                >
                    <ArrowBackIcon sx={{ fontSize: 35 }} />
                </IconButton>

                <Stack 
                    direction="row"
                    spacing={2} 
                    sx={{
                        position: 'relative', 
                        top: '-20px' 
                        }}
                >
                    {/* EDITAR IMAGEM EQUIPE */}
                    <Avatar 
                        alt="img grupo" 
                        src="/static/images/avatar/1.jpg" 
                        sx={{ 
                            width: 100, 
                            height: 100, 
                            border: '2px solid #07382E' 
                            }} 
                    />
                    <Box 
                        sx={{ 
                            position: 'absolute', 
                            top: '50%', 
                            right: '-10px', 
                            transform: 'translateY(-50%)', 
                            bgcolor: '#fff8', 
                            borderRadius: '50%', 
                            boxShadow: '2px 0px 12px 5px rgba(0, 0, 0, 0.1)', 
                            }}
                    >
                        <IconButton onClick={handleAvatarChange}>
                            <CameraAltIcon 
                                sx={{ 
                                    color: '#07382E', 
                                    marginTop: '-5%', 
                                    marginLeft: '-16%' 
                                    }} 
                            />
                        </IconButton>
                    </Box>
                </Stack>

                {/* EDITAR NOME DA EQUIPE */}
                <Box 
                    sx={{ 
                        width: '100%',
                        mt: 3 
                        }}
                >
                    <Grid 
                        container 
                        alignItems="center" 
                        spacing={1}
                    >
                        <Grid item>
                            <IconButton disabled>
                                <CreateOutlinedIcon 
                                    sx={{ 
                                        color: '#07382E', 
                                        marginLeft: '80%', 
                                        alignItems: 'center' 
                                        }} 
                                />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <TextField 
                                fullWidth 
                                variant="standard" 
                            />
                        </Grid>
                    </Grid>
                </Box>
                {/* EDITAR DESCRIÇÃO DA EQUIPE */}
                <Box2>
                    <Grid 
                        container 
                        alignItems="center" 
                        spacing={1}
                    >

                        <Grid item>
                            <IconButton disabled>
                                <EditNoteOutlinedIcon 
                                    sx={{ color: '#07382E' }}
                                /> 
                            </IconButton>
                        </Grid>

                        <Grid item>
                            <Typography 
                            variant="subtitle1" 
                            gutterBottom 
                            sx={{ fontWeight: 'bold' }}
                            >
                                Descrição:
                            </Typography>
                        </Grid>
                    </Grid>

                    <TextField 
                    fullWidth 
                    variant="standard" 
                    />
                </Box2>

                {/* LEITURA DE MEMBROS */}
                <Box 
                sx={{ textAlign: 'left' }}
                >
                    <Typography 
                        component="h2" 
                        variant="subtitle1" 
                        sx={{ 
                            color: '#07382E', 
                            mt: 2, 
                            fontSize: '1.4em', 
                            fontWeight: 'bold', 
                            marginLeft: '-30%' 
                            }}
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
                                        sx={{ 
                                            width: 50, 
                                            height: 50
                                            }} 
                                    />
                                </ListItemAvatar>

                                <Box ml={8}>
                                    <Typography 
                                        variant="subtitle1">
                                            {member.name}
                                    </Typography>
                                </Box>
                            </ListItem>
                        ))}
                    </List>
                </Box>

                {/* BOTÕES DE CANCELAR OU SALVAR ALTERAÇÕES */}
                <Grid 
                    container 
                    justifyContent="center" 
                    alignItems="center" 
                    spacing={2} 
                    mt={5}
                >
                    <Grid item xs={6}>
                        <RedButton 
                        onClick={handleOpenPopup2}
                        >
                            Descartar Alterações
                        </RedButton>
                    </Grid>

                    <Grid item xs={6}>
                        <GreenButton 
                        onClick={handleOpenPopup1}
                        >
                            SALVAR ALTERAÇÕES
                        </GreenButton>
                    </Grid>
                </Grid>

                {/* ABERTURA DE POP-UPS */}
                <Popup1 
                    open={openPopup1} 
                    handleClose={handleClosePopup1} 
                />

                <Popup2 
                    open={openPopup2} 
                    handleClose={handleClosePopup2} 
                />
            </Paper>
        </Container>
    );
}
