
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Typography } from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';

const Etapa_Criada = ({ open, handleClose }) => {

  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      const redirectTimeout = setTimeout(() => {
        navigate('/Central_Progresso');
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

              <AddTaskIcon 
                sx={{ 
                  width: 300, 
                  height: 170, 
                  color: '#07382E',
                  mb: 2,
                  mt: 2
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
                  Etapa Criada <br/> Com Sucesso!  
              </Typography>

            </div>

          </Modal>
    );
};

export default Etapa_Criada;
