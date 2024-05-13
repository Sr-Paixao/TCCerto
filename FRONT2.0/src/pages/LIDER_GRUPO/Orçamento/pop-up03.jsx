import React, { useState } from 'react';
import { Modal, Typography, Button, Grid, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined';
import Relatorio02 from './pop-up04';

const Relatorio01 = ({ open, handleClose }) => {
    const navigate = useNavigate();
    const [showRelatorio2, setShowRelatorio2] = useState(false);

    const handleSim = () => {
        setShowRelatorio2(true);
    };

    const handleNao = () => {
        handleClose(); //AQUI TAMBEM DEVE SER REDIRECIONADO PARA HOME 
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
                    <div style={{ textAlign: 'center' }}>
                        <AttachEmailOutlinedIcon
                            sx={{ 
                            width: 200, 
                            height: 150, 
                            color: '#07382E' 
                            }} 
                        />
                    </div>

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

                    <Grid 
                        container 
                        spacing={2} 
                        sx={{ marginTop: '6%' }}
                    >
                        <Grid item xs={6}>
                            <Button
                                onClick={handleSim} 
                                fullWidth
                                variant="outlined"
                                sx={{
                                    mt: -1,
                                    mb: 5,
                                    maxWidth: '180px',
                                    backgroundColor: '#FFFFFF',
                                    color: '#07382E',
                                    borderColor: '#07382E',
                                    '&:hover': {
                                        backgroundColor: '#07382E',
                                        color: '#FFFFFF'
                                    }
                                }}
                            >
                                Sim
                            </Button>
                        </Grid>

                        <Grid item xs={6}>
                            <Button
                                onClick={handleNao} 
                                fullWidth
                                variant="outlined"
                                sx={{
                                    mt: -1,
                                    mb: 5,
                                    maxWidth: '180px',
                                    backgroundColor: 'transparent',
                                    color: '#FF0000',
                                    borderColor: '#FF0000',
                                    '&:hover': {
                                        backgroundColor: '#FF0000',
                                        color: '#FFFFFF',
                                        borderBlockColor: 'transparent'
                                    }
                                }}
                            >
                                Não
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Modal>

          
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
