
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Typography } from '@mui/material';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';

    const ALTERAÇÕES_SALVAS = ({ open, handleClose }) => {

    const navigate = useNavigate();

    useEffect(() => {
        if (open) {
        const redirectTimeout = setTimeout(() => {
            navigate('/Info_Equipe');
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

                <TaskAltOutlinedIcon
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
                    Alterações Salvas <br/> Com Sucesso!  
                </Typography>

                </div>

            </Modal>
    );
};

export default ALTERAÇÕES_SALVAS;
