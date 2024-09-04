import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite'; 


const OBRIGADA = ({ open, handleClose }) => {
    const navigate = useNavigate();

    //TIME POP-UP
    useEffect(() => {
        let redirectTimeout;
        if (open) {
            redirectTimeout = setTimeout(() => {
                navigate('/Config_M');
                handleClose(); // Fechar o modal após o redirecionamento
            }, 2000);
        }

        return () => clearTimeout(redirectTimeout);
    }, [open, navigate, handleClose]);

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
                <FavoriteIcon
                    sx={{ 
                        width: 300, 
                        height: 170, 
                        color: '#07382E' 
                    }} 
                />
                <Typography 
                    variant="h5"
                    sx={{ 
                        textAlign:'center', 
                        fontSize:'1.5rem',
                        fontWeight: 'bold'
                    }}
                >
                    Obrigada pela avaliação!  
                </Typography>
            </div>
        </Modal>
    );
};

export default OBRIGADA;
