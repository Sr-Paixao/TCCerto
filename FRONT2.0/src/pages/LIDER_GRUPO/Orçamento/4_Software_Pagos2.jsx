import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, CssBaseline, Paper, Typography} from '@mui/material';
import pc_preço from '../../../img/orçamento 4.svg';
import Orçamento_Criado from './Pop-Ups/pop-up02';
import Cabecalho2 from '../../../Components/CABEÇALHOS/Cabeçalho2';
import ValorEmReais from '../../../Components/COMPONENTES_ORCAMENTO/ValorEmReais'; 
import GreenButton from '../../../Components/Btns/btn_green';

export default function Software_Pagos2() {
    const navigate = useNavigate();
    const [popupOpen, setPopupOpen] = useState(false);
    const [gasto, setGasto] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    const handleBack = () => {
        navigate('/Horas_Trabalhadas');
    };

    const handleAvancar = () => {
        setPopupOpen(true); 
    };

    const handleValueChange = (value) => {
        setGasto(value);
    };

    useEffect(() => {
        setIsFormValid(gasto.trim() !== '');
    }, [gasto]);

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

                                            {/* CABEÇALHO */}
                <Cabecalho2
                    text="Gasto com Softwares" 
                    iconSize={50} 
                    handleBack={handleBack} 
                    avatar={pc_preço} 
                    avatarSize={75}
                />

                                            {/* TEXTO INFORMATIVO  */}
                <Box sx={{ width: '100%', mt: 1, mb:5 }}>
                    <Typography 
                        variant="subtitle1" 
                        sx={{ textAlign: 'left' }}
                    >
                        Agora, some todos os valores gastos com softwares pagos
                        e insira o total no campo abaixo para prosseguir para a 
                        próxima etapa.
                    </Typography>
                </Box>

                                            {/* VALOR GASTO  */}
                <Box
                sx={{mb: 4}}>
                    <ValorEmReais 
                    onValueChange={handleValueChange}
                    />
                </Box>

                                            {/* BOTÃO AVANÇAR  */}
                <GreenButton
                    onClick={handleAvancar}
                    disabled={!isFormValid} 
                >
                    Avaçar
                </GreenButton>

                                            {/* POP-UP */}
                {popupOpen && (
                    <Orçamento_Criado 
                        open={true} 
                        handleClose={() => setPopupOpen(false)} 
                    />
                )}
            </Paper>
        </Container>
    );
}
