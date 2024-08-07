import React, { useState } from 'react';
import { Modal, Typography, Grid, Avatar } from '@mui/material';
import pc_preço from '../../../../img/orçamento 4.svg';
import { useNavigate } from 'react-router-dom';
import Orçamento_Criado from './pop-up02'; 
import GreenButton from '../../../../Components/Btns/btn_green';
import RedButton from '../../../../Components/Btns/btn_red';

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
                                                             {/* AVATAR  */}
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
                                                            {/* TEXTO INFORMATIVO */}
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

                                                            {/* POP-UP  */}
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
