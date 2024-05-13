import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  
    Box, 
    Container, 
    CssBaseline, 
    Paper, 
    Typography,  
    IconButton
} from '@mui/material';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';

export default function Configuracoes() {
    const navigate = useNavigate();

    // Função para voltar para a página inicial
    const handleBack = () => {
        navigate('/');
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

                                            {/* CABEÇALHO */}
                    <IconButton 
                    onClick={handleBack} 
                    sx={{ 
                        alignSelf: 'flex-start' 
                    }}
                    >
                        <ArrowBackIcon 
                            sx={{ fontSize: 35 }} 
                        />
                    </IconButton>

                    <PaidOutlinedIcon
                        sx={{ 
                            width: 100, 
                            height: 100, 
                            color: '#07382E' 
                            }} 
                    />

                    <Typography 
                        component="h1" 
                        variant="h9" 
                        sx={{ 
                            color: '#07382E', 
                            mt: 2 
                            }}
                    >
                        Orçamento
                    </Typography>

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
                        Sabemos que o orçamento é umas das partes mais trabalhosas e desafiadoras do TCC, 
                        pensando nisso criamos essa ferramenta para ajuda-lo a desenvolver com mais facilidade
                        seu orçamento.
                        </Typography>

                        <Typography 
                            variant="subtitle1" 
                            sx={{ 
                                mt: 1, 
                                mb: 1, 
                                textAlign: 'left'
                                }}
                        >
                        Siga o passo a passo corretamente para elaborar seu orçamento em poucas etapas.
                        </Typography>

                        </Box>

                        <Button
                            href={'/Area_de_atuação'}
                            type="submit"
                            fullWidth
                            variant="outlined"
                            sx={{
                                mt: 5,
                                mb: 10,
                                maxWidth: "110%",
                                alignItems: "center",
                                backgroundColor: "#FFFFFF",
                                color: "#07382E",
                                borderColor: "#07382E",
                                "&:hover": { 
                                    backgroundColor: "#07382E", 
                                    color: "#FFFFFF" 
                                }
                            }}
                            >
                                    iniciar
                            </Button>
                    </Paper>
        </Container>
    );
}
