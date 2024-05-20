import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Typography, Button, Grid } from '@mui/material';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import GreenButton from '../../../../Components/Btns/btn_green';
import RedButton from '../../../../Components/Btns/btn_red';


const RefazerPopup = ({ open, handleClose }) => {
    const navigate = useNavigate();
    const [criado, setCriado] = useState(false); 

    const handleSim = () => {
        navigate('/Orcamento'); 
    };

    const handleNao = () => {
        handleClose();
    };

    return (
        <Modal 
            open={open} 
            onClose={handleClose}
        >
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'white',
                    padding: '20px',
                    width: '340px',
                    height: '340px',
                    borderRadius: '6px'
                }}
            >
                                                            {/* ICONE  */}
                <div style={{ textAlign: 'center' }}>
                    <CurrencyExchangeOutlinedIcon
                        sx={{ 
                            width: 100, 
                            height: 100, 
                            color: '#07382E' 
                        }} 
                    />
                </div>

                                                            {/* TEXTO INFORMATIVO  */}
                <Typography
                    variant="h5"
                    sx={{
                        textAlign: 'center',
                        fontSize: '1.3rem',
                        fontWeight: 'bold',
                        marginTop: 2, 
                    }}
                >
                    Deseja Refazer o Orçamento?
                </Typography>

                <Typography
                    variant="body2"
                    sx={{ 
                        marginTop: '5%', 
                        textAlign: 'center', 
                        fontSize: '1rem' 
                    }}
                >
                    Exemplos: Microsoft Project, Canva Pro, Entre Outros.
                </Typography>

                                                            {/* BOTÕES  */}
                <Grid 
                    container 
                    spacing={2} 
                    sx={{ marginTop: '6%' }}
                >

                    <Grid item xs={6}>
                        <GreenButton
                            onClick={handleSim} 
                            fullWidth
                        >
                            Sim
                        </GreenButton>
                    </Grid>

                    <Grid item xs={6}>
                        <RedButton
                            onClick={handleNao} 
                            fullWidth
                        >
                            Não
                        </RedButton>
                    </Grid>

                </Grid>
            </div>
        </Modal>
    );
};

export default RefazerPopup;
