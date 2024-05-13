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
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import Orçamento04 from './pop-up01'; 

export default function Horas_Trabalhadas() {
    const navigate = useNavigate();
    const [openPopup, setOpenPopup] = useState(false); 


    const handleBack = () => {
        navigate('/Orcamento2');
    };


    const handleOpenPopup = () => {
        setOpenPopup(true);
    };


    const handleClosePopup = () => {
        setOpenPopup(false);
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

                <AccessAlarmIcon
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
                    Horas Trabalhadas
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
                        Por favor, indique o número de horas trabalhadas por cada integrante do grupo,
                        para que possamos calcular o valor que cada um supostamente irá receber.
                    </Typography>
                </Box>

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

                <Button
                    onClick={handleOpenPopup} 
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

            <Orçamento04
                open={openPopup} 
                handleClose={handleClosePopup} 
            />
        </Container>
    );
}
