
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Typography } from '@mui/material';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';

const Relatorio02 = ({ open, handleClose }) => {

    const navigate = useNavigate();

    useEffect(() => {
        if (open) {
        const redirectTimeout = setTimeout(() => {
            navigate('/Index');
        }, 2000);
        return () => clearTimeout(redirectTimeout);
        }
    }, [open, navigate]);

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
                                                            {/* ICONE */}
                <MarkEmailReadOutlinedIcon
                    sx={{ 
                    width: 300, 
                    height: 170, 
                    color: '#07382E' 
                    }} 
                />

                                                            {/* TEXTO INFORMATIVO */}
                <Typography 
                    variant="h5"
                    sx={{ 
                    textAlign:'center', 
                    fontSize:'1.5rem',
                    fontWeight: 'bold'
                    }}
                >
                    Relatório Enviado com Sucesso!  
                </Typography>

                </div>

            </Modal>
    );
};

export default Relatorio02;
