import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  
    Box, 
    Container, 
    CssBaseline, 
    Paper, 
    Grid,
    Typography,  
    IconButton
} from '@mui/material';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';


export default function Orçamento_Total() {
    const navigate = useNavigate();


    const handleBack = () => {
        navigate('/Software_Pagos2');
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
                            mt: 2, 
                            alignItems: "center"
                            }}
                    >
                        Orçamento Total
                    </Typography>

                    <Box 
                        sx={{ 
                            width: '115%', 
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
                                    Aqui está o seu orçamento! 
                                    Este valor foi calculado com base nas informações 
                                    fornecidas nas etapas anteriores
                        </Typography>

                        </Box>

                        <Box 
                        sx={{ 
                            width: '115%', 
                            mt: 3 
                            }}
                    >
                        <Typography 
                            variant="subtitle1" 
                            sx={{ 
                                mt: 1, 
                                mb: 1, 
                                textAlign: 'left',
                                color: '#4D4D4D', 
                                }}
                        >
                            Ao avançar, você terá a opção de revisar e, 
                            se necessário, ajustar o orçamento.Clique em 
                            'Avançar' para mais detalhes sobre o seu orçamento.
                        </Typography>

                        </Box>

                        {/* <form onSubmit={handleSubmit}> */}
                <Box 
                    sx={{   
                        boxShadow: '2px 0px 12px 5px rgba(0, 0, 0, 0.2)', 
                        width: '100%', 
                        height: '100%', 
                        borderRadius: '5px', 
                        marginTop: '5%', 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        padding: '-10px' 
                    }}
                >
                    <Grid 
                        container 
                        alignItems="center" 
                        spacing={1}
                    ></Grid>
                    </Box>
                    {/* </form> */}

                        <Button
                            href={'/Dt_Orçamento'}
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
                                    Avançar
                            </Button>

                    </Paper>
        </Container>
    );
}
