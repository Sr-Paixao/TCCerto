import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  
    Box, 
    Container, 
    CssBaseline, 
    Paper, 
    Typography, 
    Divider, 
    IconButton,
    Button
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GroupsIcon from '@mui/icons-material/Groups';

export default function Desfazer_Equipe() {


    const navigate = useNavigate();

    // Função para voltar para a página inicial
    const handleBack = () => {
        navigate('/Geral_Equipe');
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

                    <GroupsIcon
                        sx={{ 
                            width: 130, 
                            height: 130, 
                            color: '#07382E' 
                            }} 
                    />

                    <Typography 
                        component="h1" 
                        variant="h9" 
                        sx={{ 
                            color: '#07382E', 
                            mt: -1,
                            textAlign:'center',
                            fontSize: "2em"
                            }}
                    >
                        Desfazer Equipe
                    </Typography>

                    <Typography
                        sx={{
                            mt: 5,
                            textAlign: 'center',
                            fontSize: "1em"
                        }}>
                            Ao desfazer a Equipe, TODAS as informações seram perdidas!
                    </Typography>
                    
                    <Typography
                        sx={{
                            mt: 5,
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontSize: "1.2em"

                        }}>
                            Realmente deseja desfazer a Equipe?
                    </Typography>

                    <Button
                            fullWidth
                            variant="outlined"
                            sx={{
                                mt: 5,
                                mb: 5,
                                maxWidth: '100%',
                                backgroundColor: 'transparent',
                                color: '#FF0000',
                                borderColor: '#FF0000',
                                fontSize: '1.4em',
                                '&:hover': {
                                    backgroundColor: '#FF0000',
                                    color: '#FFFFFF',
                                    borderBlockColor: 'transparent'
                                }
                            }}
                        >
                            Desfazer Equipe
                        </Button>

                    
                </Paper>
        </Container>
    );
}
