import React, { useState } from 'react';
import { Modal, Typography, Button, Grid, Avatar } from '@mui/material';
import pc_preço from '../../../img/orçamento 4.svg';
import { useNavigate } from 'react-router-dom';
import Orçamento_Criado from './pop-up02'; 

const Orçamento04 = ({ open, handleClose }) => {
    const navigate = useNavigate();
    const [criado, setCriado] = useState(false); 

    const handleSim = () => {
        navigate('/Software_Pagos2'); 
    };

    const handleNao = () => {
        setCriado(true); 
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
                <div style={{ textAlign: 'center' }}>
                    <Avatar
                        alt="Software"
                        src={pc_preço}
                        variant="square"
                        sx={{ 
                            width: 'auto', 
                            height: 'auto', 
                            maxWidth: '50%', 
                            maxHeight: '50%', 
                            marginBottom: 2,
                            margin: '0 auto',
                        }}
                    />
                </div>

                <Typography
                    variant="h5"
                    sx={{
                        textAlign: 'center',
                        fontSize: '1.3rem',
                        fontWeight: 'bold',
                        marginTop: 2, 
                    }}
                >
                    Utilizou Algum Software Pago?
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

                {criado && 
                <Orçamento_Criado 
                    open={true} 
                    handleClose={() => 
                    setCriado(false)} 
                />}
            </div>
        </Modal>
    );
};

export default Orçamento04;
