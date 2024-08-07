
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Typography } from '@mui/material';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';

    const HELP_OK = ({ open, handleClose }) => {

    const navigate = useNavigate();

//TIME POP-UP
    useEffect(() => {
        if (open) {
        const redirectTimeout = setTimeout(() => {
            navigate('/Config_M');
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

                <MarkEmailReadOutlinedIcon
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
                    Mensagem Enviada com Sucesso!  
                </Typography>

            </div>

        </Modal>
    );
};

export default HELP_OK;
