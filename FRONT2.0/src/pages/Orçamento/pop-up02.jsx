
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Orçamento_Criado = ({ open, handleClose }) => {

  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      const redirectTimeout = setTimeout(() => {
        navigate('/Orçamento_Total');
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

              <CheckCircleOutlineIcon 
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
                  Seu Orçamento está pronto!  
              </Typography>

            </div>

          </Modal>
    );
};

export default Orçamento_Criado;
