import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  
    Box, Grid, Container, CssBaseline, 
    Paper, Typography, TextField
} from '@mui/material';

// IMPORTS DE ICONES 
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

//IMPORT DE COMPONENTES
import Cabecalho2 from '../../../Components/CABEÇALHOS/Cabeçalho2';
import InstagramBox from '../../../Components/BOX/Box_Instagram';
import EmailBox from '../../../Components/BOX/Box_Outlook';
import Box1 from '../../../Components/COMPONENTES_TAREFAS/Box_Form/Box_form1';
import GreenButton from '../../../Components/Btns/btn_green';
import Menu_Inferior from '../../../Components/MENUS_MEMBROS/menu_inferior_M';

// IMPORT POP-UP 
import Popup from './Pop_Ups/Relato_Enviado_M';

export default function Central_Ajuda_M() {
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
        navigate('/Config_M');
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
                        mt:5, 
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
                                                            {/* TEXTO INFORMATIVO  */}
                <Typography 
                    sx={{ 
                        mt: 2, 
                        textAlign: 'center', 
                        fontSize: '120%' 
                        }}
                >
                    Algum Problema com o TCCERTO?<br/>Entre em contato conosco!
                </Typography>

                                                            {/* CONTATO OUTLOOK  */}

                <EmailBox />
                                                            {/* CONTATO INSTAGRAM  */}
                <InstagramBox />

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
                    Relate Aqui o Seu Problema:
                </Typography>

                                                            {/* INICIO DO FORM  */}
                <form 
                    onSubmit={handleSubmit} 
                    sx={{ marginTop: '-15%' }}
                >
                                                            {/* INFORME O ASSUNTO  */}
                    <Box1>
                        <Grid 
                            container 
                            alignItems="center" 
                            spacing={1} 
                            sx={{ marginBottom: '10px' }}
                        >
                            <Grid item xs={12}>
                                <Typography 
                                    variant="subtitle1" 
                                    gutterBottom 
                                    sx={{ fontWeight: 'bold' }}
                                >
                                    Assunto:
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    value={descricao}
                                    onChange={(event) => 
                                        setDescricao(event.target.value)}
                                    variant="standard"
                                />
                            </Grid>
                        </Grid>
                    </Box1>

                                                            {/* DESCRIÇÃO DO PROBLEMA  */}
                    <Box1>
                        <Grid 
                            container 
                            alignItems="center" 
                            spacing={1} 
                            sx={{ marginBottom: '10px' }}
                        >
                            <Grid item xs={12}>
                                <Typography 
                                    variant="subtitle1" 
                                    gutterBottom 
                                    sx={{ fontWeight: 'bold' }}
                                >
                                    Descrição:
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    value={assunto}
                                    onChange={(event) => 
                                        setAssunto(event.target.value)}
                                    variant="standard"
                                />
                            </Grid>
                        </Grid>
                    </Box1> 

                                                            {/* BOTÃO PARA ENVIAR RELATO  */}
                    <Box 
                        sx={{mt: 2,
                            mb: 3
                            }}
                    >
                        <GreenButton 
                        onClick={handleOpenPopup}
                        >
                            Enviar
                        </GreenButton>
                    </Box>
                </form>

            </Paper>
                                                            {/* ABERTURA POP-UP  */}
            <Popup 
                open={openPopup} 
                handleClose={handleClosePopup} 
            />

                                                            {/* MENU_INFERIOR  */}
            <Menu_Inferior  />                
        </Container>
    );
}
