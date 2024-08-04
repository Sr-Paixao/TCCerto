import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  
        Box, Container, CssBaseline, 
        Paper, Typography
        } from '@mui/material';
//IMPORT ICONE
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
//IMPORT COMPONENTS
import Menu_Superior from '../../../Components/MENUS_LIDER/menu_superior2';
import GreenButton from '../../../Components/Btns/btn_green';
import Menu_Inferior from '../../../Components/MENUS_LIDER/menu_inferior';
import Cabecalho_1 from '../../../Components/CABEÇALHOS/Cabeçalho1';

export default function CENTRAL_ORCAMENTO() {

    const [value, setValue] = React.useState('');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Paper
                elevation={2} 
                sx={{ 
                    mt: 2, 
                    p: 2, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    boxShadow: "0", 
                    width: '100%', 
                    height: '100%' 
                    }}
            >

                                                {/* MENU_SUPERIOR  */}
                    <Menu_Superior/>

                                                {/* CABEÇALHO */}
                    <Cabecalho_1
                    icon={<PaidOutlinedIcon />}
                    text="Orçamento"
                    iconSize={75}
                    />

                                                {/* TEXTOS INFORMATIVOS  */}
                    <Box 
                        sx={{ 
                            width: '110%', 
                            mt: 3 
                            }}
                    >

                        <Typography 
                            variant="subtitle1" 
                            sx={{ 
                                mt: 1, 
                                mb: 1, 
                                textAlign: 'left'
                                }}
                        >
                            Sabemos que o orçamento é umas das partes 
                            mais trabalhosas e desafiadoras do TCC, 
                            pensando nisso criamos essa ferramenta para 
                            ajuda-lo a desenvolver com mais facilidade
                            seu orçamento.
                        </Typography>

                        <Typography 
                            variant="subtitle1" 
                            sx={{ 
                                mt: 4, 
                                mb: 1, 
                                textAlign: 'left'
                                }}
                        >
                        Siga o passo a passo corretamente 
                        para elaborar seu orçamento em poucas etapas.
                        </Typography>

                        </Box>

                                                {/* BOTÃO PARA INICIAR O ORÇAMENTO  */}
                        <GreenButton
                            href={'/Area_de_atuação'}
                            type="submit"
                            fullWidth
                            variant="outlined"
                        >
                                    iniciar
                            </GreenButton>
                                                {/* MENU INFERIOR  */}
                            <Menu_Inferior value={value} onChange={handleChange} interfaceType="Lider_Grupo" />
                    </Paper>
        </Container>
    );
}
