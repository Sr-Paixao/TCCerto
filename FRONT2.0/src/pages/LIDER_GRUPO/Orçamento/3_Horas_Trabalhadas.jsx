import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, CssBaseline, Paper, Typography } from '@mui/material';
// IMPORT COMPONETS 
import UserCard from '../../../Components/COMPONENTES_ORCAMENTO/UserCard';
import Cabecalho2 from '../../../Components/CABEÇALHOS/Cabeçalho2';
import GreenButton from '../../../Components/Btns/btn_green';
// IMPORT ICONES
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'; 
// IMPORT POP-UPS 
import Orçamento04 from './Pop-Ups/pop-up01';


export default function Horas_Trabalhadas() {
    const navigate = useNavigate();
    const [openPopup, setOpenPopup] = useState(false);
    const [users, setUsers] = useState([
        { id: 1, name: 'Nome Usuario 1', role: '', hours: '' },
        { id: 2, name: 'Nome Usuario 2', role: '', hours: '' },
        // Adicione mais usuários conforme necessário
    ]);
    const [isFormValid, setIsFormValid] = useState(false);

    const handleBack = () => {
        navigate('/Area_de_atuação');
    };

    const handleOpenPopup = () => {
        setOpenPopup(true);
    };

    const handleClosePopup = () => {
        setOpenPopup(false);
    };

    const handleUpdateUser = (id, role, hours) => {
        setUsers(users.map(user => 
            user.id === id ? { ...user, role, hours } : user
        ));
    };

    useEffect(() => {
        const allFieldsFilled = 
        users.every(user => user.role.trim() 
        !== '' && user.hours.trim() !== '');
        setIsFormValid(allFieldsFilled);
    }, [users]);

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
                    handleBack={handleBack}
                    icon={<AccessAlarmIcon />}
                    text="Horas Trabalhadas"
                    iconSize={70}
                />

                                                            {/* TEXTO INFORMATIVO  */}
                <Box sx={{ width: '110%', mt: 3 }}>
                    <Typography 
                        variant="subtitle1" 
                        sx={{ mt: 1, mb: 4, textAlign: 'center' }}
                    >
                        Por favor, indique o número de horas trabalhadas por cada integrante do grupo,
                        para que possamos calcular o valor que cada um supostamente irá receber.
                    </Typography>
                </Box>

                                                            {/* CAMPO DE ESCOLHA  */}
                <Box sx={{ width: '100%', mb: 3 }}>
                    {users.map((user) => (
                        <UserCard key={user.id} user={user} onUpdate={handleUpdateUser} />
                    ))}
                </Box>

                                                            {/* BOTÃO  */}
                <GreenButton
                    onClick={handleOpenPopup}
                    fullWidth
                    disabled={!isFormValid}
                >
                    AVANÇAR
                </GreenButton>
            </Paper>

                                                            {/* POP-UP */}
            <Orçamento04
                open={openPopup} 
                handleClose={handleClosePopup} 
            />
        </Container>
    );
}
