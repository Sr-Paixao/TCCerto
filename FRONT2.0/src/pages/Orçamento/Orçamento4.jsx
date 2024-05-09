import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  
    Box, 
    Container, 
    CssBaseline, 
    Paper, 
    Grid,
    Typography,  
    IconButton,
    Avatar
} from '@mui/material';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import pc_preço from '../../img/orçamento 4.svg';
import Orçamento_Criado from './pop-up02';

export default function Software_Pagos2() {
    const navigate = useNavigate();
    const [popupOpen, setPopupOpen] = useState(false);

    const handleBack = () => {
        navigate('/Horas_Trabalhadas');
    };


    const handleAvancar = () => {
        setPopupOpen(true); 
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

                    <Avatar
                        alt="Software"
                        src={pc_preço}
                        variant="square"
                        sx={{ 
                            width: 'auto', 
                            height: 'auto', 
                            maxWidth: '150%', 
                            maxHeight: '150%', 
                            marginBottom: 5 
                        }}
                    />

                    <Typography 
                        component="h1" 
                        variant="h9" 
                        sx={{ 
                            color: '#07382E', 
                            mt: 1, 
                            alignItems: "center", 
                            textAlign: 'center'
                        }}
                    >
                        Total gasto com Softwares Pagos
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
                                Agora, some todos os valores gastos com softwares pagos
                                e insira o total no campo abaixo para prosseguir para a 
                                próxima etapa.
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
                        onClick={handleAvancar} 
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

                    
                    {popupOpen && <Orçamento_Criado 
                        open={true} handleClose={() => 
                        setPopupOpen(false)} 
                    />}
                </Paper>
        </Container>
    );
}
