import React, { useState } from 'react';
import { Modal, Typography, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined';
import GreenButton from '../../../../Components/Btns/btn_green';
import RedButton from '../../../../Components/Btns/btn_red'
import Relatorio02 from './pop-up04';

const Relatorio01 = ({ open, handleClose }) => {
    const navigate = useNavigate();
    const [showRelatorio2, setShowRelatorio2] = useState(false);

    const handleSim = () => {
        setShowRelatorio2(true);
    };

    const handleNao = () => {
        navigate('/Index');  
    };

    return (
        <>
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
                        <AttachEmailOutlinedIcon
                            sx={{ 
                            width: 200, 
                            height: 150, 
                            color: '#07382E' 
                            }} 
                        />
                    </div>

                                                            {/* TEXTO INFORMATIVO */}
                    <Typography
                        variant="h5"
                        sx={{
                            textAlign: 'center',
                            fontSize: '1.3rem',
                            fontWeight: 'bold',
                            marginTop: 1, 
                        }}
                    >
                        Gostaria que o Relatório seja enviado para o seu Email?
                    </Typography>

                                                            {/* BOTÕES  */}
                    <Grid 
                        container 
                        spacing={2} 
                        sx={{ marginTop: '0.5%' }}
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
                                                            {/* POP-UP  */}
            {showRelatorio2 && 
                <Relatorio02 
                    open={showRelatorio2} 
                    handleClose={() => 
                        setShowRelatorio2(false)} 
                />
            }
        </>
    );
};

export default Relatorio01;
