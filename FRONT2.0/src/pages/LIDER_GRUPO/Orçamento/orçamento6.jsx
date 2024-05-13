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
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';

import Relatorio01 from './pop-up03'; 
import RefazerPopup from './pop-up05';

export default function Dt_Orçamento() {
    const navigate = useNavigate();
    const [openPopup, setOpenPopup] = useState(false);
    const [openRefazerPopup, setOpenRefazerPopup] = useState(false);

    const handleBack = () => {
        navigate('/Orçamento_Total');
    };

    const handleOpenPopup = () => {
        setOpenPopup(true);
    };

    const handleClosePopup = () => {
        setOpenPopup(false);
    };

    const handleOpenRefazerPopup = () => {
        setOpenRefazerPopup(true);
    };

    const handleCloseRefazerPopup = () => {
        setOpenRefazerPopup(false);
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

                <ReceiptLongOutlinedIcon
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
                    Detalhes dos Valores
                </Typography>

                {/* Seção de Valores */}
                <Box
                    sx={{
                        width: '100%',
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
                        Valor Total:
                    </Typography>
                    {/* Inclua aqui o conteúdo da seção de valores */}
                </Box>

                {/* Botões */}
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <Grid item xs={6}>
                        <Button
                            type="button"
                            fullWidth
                            variant="outlined"
                            onClick={handleOpenRefazerPopup}
                            sx={{
                                mt: 20,
                                mb: 6,
                                maxWidth: "150px",
                                backgroundColor: "transparent",
                                color: "#FF0000",
                                borderColor: "#FF0000",
                                "&:hover": {
                                    backgroundColor: "#FF0000",
                                    color: "#FFFFFF",
                                    borderBlockColor: 'transparent'
                                }
                            }}
                        >
                            Alterar
                        </Button>
                    </Grid>

                    <Grid item xs={6}>
                        <Button
                            type="button"
                            fullWidth
                            variant="outlined"
                            onClick={handleOpenPopup}
                            sx={{
                                mt: 20,
                                mb: 6,
                                maxWidth: "150px",
                                backgroundColor: "#FFFFFF",
                                color: "#07382E",
                                borderColor: "#07382E",
                                "&:hover": {
                                    backgroundColor: "#07382E",
                                    color: "#FFFFFF"
                                }
                            }}
                        >
                            Concluir
                        </Button>
                    </Grid>
                </Grid>

                <Relatorio01
                    open={openPopup}
                    handleClose={handleClosePopup}
                />

                <RefazerPopup
                    open={openRefazerPopup}
                    handleClose={handleCloseRefazerPopup}
                />
            </Paper>
        </Container>
    );
}
