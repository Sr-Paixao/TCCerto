import React from 'react';
import { useNavigate } from 'react-router-dom';
import {  
        Box, Container, CssBaseline, Paper, Typography,  
        } from '@mui/material';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import Cabecalho3 from  '../../../Components/CABEÇALHOS/Cabeçalho3';
import GreenButton from '../../../Components/Btns/btn_green';
import CurrencyDisplay from '../../../Components/COMPONENTES_ORCAMENTO/Box_Orcamento5'; 

export default function Orçamento_Total() {
    const navigate = useNavigate();
    const valorOrcamento = 15.000; 

    const handleBack = () => {
        navigate('/Software_Pagos2');
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

                                                            {/* CABEÇALHO */}
                <Cabecalho3
                    handleBack={handleBack}
                    icon={<PaidOutlinedIcon />}
                    text="Orçamento Total"
                    iconSize={75}
                />

                                                            {/* TEXTO INFORMATIVO 1 */}
                <Box sx={{ width: '100%', mt: 1, mb:1 }}>
                    <Typography 
                        variant="subtitle1" 
                        sx={{  
                            textAlign: 'left' 
                            }}
                    >
                        Aqui está o seu orçamento! 
                        Este valor foi calculado com base 
                        nas informações fornecidas nas 
                        etapas anteriores
                    </Typography>
                </Box>

                                                            {/* BOX COM VALOR ORÇAMENTO TOTAL */}
                <Box sx={{ width: '100%', mt: 2 }}>
                    <CurrencyDisplay 
                    value={valorOrcamento.toFixed(2)} 
                    />
                </Box>

                                                            {/* TEXTO INFORMATIVO 2 */}
                <Box sx={{ width: '100%', mt: 4, mb:4 }}>
                    <Typography 
                        variant="subtitle1" 
                        sx={{ textAlign: 'left' }}
                    >
                        Ao avançar, você terá a opção de revisar e, 
                        se necessário, ajustar o orçamento. Clique em 
                        'Avançar' para mais detalhes sobre o seu orçamento.
                    </Typography>
                </Box>

                                                            {/* BOTÃO PARA AVANÇAR */}
                <GreenButton 
                    href={'/Dt_Orçamento'} 
                    fullWidth
                >
                    AVANÇAR
                </GreenButton>
            </Paper>
        </Container>
    );
}
