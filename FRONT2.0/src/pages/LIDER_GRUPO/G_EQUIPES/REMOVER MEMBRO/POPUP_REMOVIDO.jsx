import React, { useEffect } from 'react';
import { Modal, Typography } from '@mui/material';
import GroupRemoveIcon from '@mui/icons-material/GroupRemove';
import { useNavigate } from 'react-router-dom';

const Membro_Removido = ({ open, handleClose }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (open) {
        const redirectTimeout = setTimeout(() => {
            navigate('/Geral_Equipe');
        }, 2000);
        return () => clearTimeout(redirectTimeout);
        }
    }, [open, navigate]);

    return (
        <Modal 
        open={open} 
        onClose={handleClose} 
        onClick={handleClose}
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
            borderRadius: '6px',
            }}
        >

            <GroupRemoveIcon
            sx={{ 
                width: 300, 
                height: 170, 
                color: '#07382E' 
            }}
            />

            <Typography
            variant="h5"
            sx={{
                textAlign: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold'
            }}
            >
            Membro Removido
            </Typography>
            
            <Typography
            variant="body2"
            sx={{ 
                marginTop: '5%', 
                textAlign: 'center', 
                fontSize: '1rem' 
            }}
            >
            Membro Removido com Sucesso!
            </Typography>

        </div>

        </Modal>

    );
    
    };

    export default Membro_Removido;
