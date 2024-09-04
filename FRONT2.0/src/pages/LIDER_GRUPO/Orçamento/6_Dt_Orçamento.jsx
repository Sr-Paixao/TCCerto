import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, CssBaseline, Paper, Grid, Typography } from '@mui/material';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import Cabecalho3 from '../../../Components/CABEÇALHOS/Cabeçalho3';
import GreenButton from '../../../Components/Btns/btn_green';
import RedButton from '../../../Components/Btns/btn_red';
import Relatorio01 from './Pop-Ups/pop-up03';
import RefazerPopup from './Pop-Ups/pop-up05';
import ValorTotal from '../../../Components/COMPONENTES_ORCAMENTO/Box_Orcamento5';
import UserCard from '../../../Components/COMPONENTES_ORCAMENTO/Valor_funcoes';
import SoftwareCard from '../../../Components/COMPONENTES_ORCAMENTO/SoftwareCard';

export default function Dt_Orçamento() {
    const navigate = useNavigate();
    const [openPopup, setOpenPopup] = useState(false);
    const [openRefazerPopup, setOpenRefazerPopup] = useState(false);

    const handleBack = () => {
        navigate('/Index');
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

    const valorTotal = 5000;
    const valoresConsiderados = [
        { funcao: 'Função 1', horas: '10 horas', valor: '1.500,00' },
        { funcao: 'Função 2', horas: '5 horas', valor: '750,00' },
        { descricao: 'Software Pagos', valor: '2.750,00' }
    ];

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
                    icon={<ReceiptLongOutlinedIcon />}
                    text="Detalhes Orçamento"
                    iconSize={80}
                />

                                                            {/* TEXTO INFORMATIVO */}
                <Box sx={{ width: '100%', mt: 3 }}>
                    <Typography
                        variant="subtitle1"
                        sx={{ mt: 1, mb: 1, textAlign: 'left' }}
                    >
                        Valor Total:
                    </Typography>
                                                            {/* CARD VALOR TOTAL */}
                    <ValorTotal valor={valorTotal} />
                </Box>

                                                            {/* VALORES A SEREM CONSIDERADOS */}
                <Box sx={{ width: '100%', mt: 3 }}>
                    <Typography
                        variant="subtitle1"
                        sx={{ mt: 1, mb: 1, textAlign: 'left' }}
                    >
                        Valores Considerados:
                    </Typography>
                                                            {/* CARD VALORES A SEREM CONSIDERADOS */}
                    {valoresConsiderados.map((item, index) => (
                        item.funcao ? (
                            <UserCard
                                key={index}
                                funcao={item.funcao}
                                horas={item.horas}
                                valor={item.valor}
                            />
                        ) : (
                            <SoftwareCard
                                key={index}
                                descricao={item.descricao}
                                valor={item.valor}
                            />
                        )
                    ))}
                </Box>

                                                            {/* BOTÕES ALTERAR OU CONCLUIR */}
                <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{ mt: 3 }}>
                    <Grid item xs={6}>
                        <RedButton onClick={handleOpenRefazerPopup} fullWidth>
                            Alterar
                        </RedButton>
                    </Grid>
                    <Grid item xs={6}>
                        <GreenButton onClick={handleOpenPopup} fullWidth>
                            Concluir
                        </GreenButton>
                    </Grid>
                </Grid>

                                                            {/*POP-UPS*/}
                <Relatorio01 open={openPopup} handleClose={handleClosePopup} />
                <RefazerPopup open={openRefazerPopup} handleClose={handleCloseRefazerPopup} />
            </Paper>
        </Container>
    );
}
