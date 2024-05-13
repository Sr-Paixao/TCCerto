import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  
        Button,
        Box,
        Grid,
        Container, 
        CssBaseline, 
        Paper, 
        Typography,  
        IconButton, 
        TextField
        } from '@mui/material';

    
// IMPORTS DE ICONES 
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import Menu_Inferior from '../../../Components/Menus/menu_inferior';
import Cabecalho2 from '../../../Components/Cabeçalhos/Cabeçalho2';
import GreenButton from '../../../Components/Btns/btn_green';
import Box1 from '../../../Components/COMPONENTES_TAREFAS/Box_Form/Box_form1';

// IMPORT POP-UP 
import Popup from './Pop_Ups/POP_UP_HELP';


export default function Central_Ajuda() {
    const [assunto, setAssunto] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Assunto:', assunto);
        console.log('Descrição:', descricao);
        setAssunto('');
        setDescricao('');
    };

    const navigate = useNavigate();
    const handleOpenPopup = () => {
        setOpenPopup(true);
    };

    const handleClosePopup = () => {
        setOpenPopup(false);
    };

    const [openPopup, setOpenPopup] = useState(false);
    

    const handleBack = () => {
        navigate('/Config');
    };
    const handleInstagram = () => window.location.href = 'https://www.instagram.com/tccerto.app';
    const handleEmail = () => window.location.href = 'mailto:tccerto.app@outlook.com';
    
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
                                            {/* INICIO CABEÇALHO  */}
                <Cabecalho2
                    handleBack={handleBack}
                    icon={<HelpOutlineOutlinedIcon />}
                    text="Relatar Problema"
                    iconSize={70}
                />

                    <Typography
                        sx={{
                            mt: 4,
                            textAlign: 'center',
                            fontSize: '120%'
                        }}>
                    Algum Problema com o TCCERTO?<br/>
                        Entre em contato com a gente!
                    </Typography>
                                            {/* CONTATO OUTLOOK  */}
                    <Box 
                        onClick={handleEmail}
                        sx={{ 
                            boxShadow:'2px 0px 12px 5px rgba(0, 0, 0, 0.1)', 
                            width:'100%', 
                            height: '100%', 
                            borderRadius: '5px', 
                            marginTop: '5%', 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            padding: '-10px',
                            mt: 4,
                            cursor: 'pointer'
                        }}
                    >
                        <Grid 
                        container alignItems="center" 
                        spacing={1}
                        >
                            <Grid item>
                                <IconButton disabled>
                                < EmailOutlinedIcon
                                    sx={{
                                    color:'#07382E', 
                                    marginLeft: '90%'
                                    }} 
                                    />
                                </IconButton>
                            </Grid>

                            <Grid item>
                                <Typography 
                                variant="subtitle1" 
                                gutterBottom
                                hrfe= 'tccerto.app@outlook.com'
                                sx={{ 
                                    marginTop: '5%', 
                                    textAlign: 'Center', 
                                    fontWeight: 'bold',
                                    marginLeft: '20%'
                                    
                                }}
                                >
                                tccerto.app@outlook.com
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                                            {/* CONTATO INSTAGRAM  */}
                    <Box 
                        onClick={handleInstagram} 
                        sx={{ 
                        boxShadow:'2px 0px 12px 5px rgba(0, 0, 0, 0.1)', 
                        width:'100%', 
                        height: '100%', 
                        borderRadius: '5px', 
                        marginTop: '5%', 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        padding: '-10px',
                        mt: 1.5,
                        cursor: 'pointer'
                        }}
                    >
                        <Grid 
                        container alignItems="center" 
                        spacing={1}
                        >

                            <Grid item>
                                <IconButton disabled>
                                < InstagramIcon
                                    sx={{
                                    color:'#07382E', 
                                    marginLeft: '90%'
                                    }} 
                                    />
                                </IconButton>
                            </Grid>

                            <Grid item>
                                <Typography 
                                variant="subtitle1" 
                                gutterBottom
                                sx={{ 
                                    marginTop: '5%', 
                                    textAlign: 'Center', 
                                    fontWeight: 'bold',
                                    marginLeft: '80%'
                                    
                                }}
                                >
                                @tccerto.app
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                                            {/* INFORME SEU PROBLEMA  */}
                        <Typography
                            component="h2" 
                            variant="h6" 
                            sx={{ 
                                marginTop: '15px',
                                color: '#07382E',
                                mt: 5,
                                fontSize: '120%',
                                fontWeight: 'bold'
                            }}
                        > 
                            Relate Aqui o Seu Problema Aqui:
                        </Typography>
                    <form 
                    onSubmit={handleSubmit}
                    sx={{marginTop: '-15%'}}
                    >
                    
                        <Box1>

                        <Grid 
                            container 
                            alignItems="center" 
                            spacing={1}
                        >

                            <Grid item>
                                <Typography 
                                    variant="subtitle1" 
                                    gutterBottom 
                                    sx={{ fontWeight: 'bold' }}
                                >
                                    Assunto:
                                </Typography>
                            </Grid>

                        </Grid>

                            <TextField
                                fullWidth
                                value={descricao}
                                onChange={(event) => 
                                setDescricao(event.target.value)}
                                variant="standard"
                            />
                        </Box1>

                        <Box1>

                        <Grid 
                            container 
                            alignItems="center" 
                            spacing={1}
                        >

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
                                value={assunto}
                                onChange={(event) => 
                                setAssunto(event.target.value)}
                                variant="standard"
                            />
                        </Box1> 
                        {/* BOTÃO PARA ENVIAR RELATO  */}
                        <GreenButton 
                        onClick={handleOpenPopup}
                        >
                            Enviar
                        </GreenButton>
                    </form>
                    {/* MENU_INFERIOR  */}
                    <Menu_Inferior />                
                </Paper>
                <Popup 
                    open={openPopup} 
                    handleClose={handleClosePopup} 
                />
        </Container>
    );
    
}