import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Typography } from '@mui/material';
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';

const NAO_CONCLUÍDA = ({ open, handleClose }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      const redirectTimeout = setTimeout(() => {
        navigate('/Central_Tarefas_M');
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

        <RadioButtonUncheckedOutlinedIcon
          sx={{ 
            width: 300, 
            height: 170, 
            color: '#07382E' 
          }}
        />

        <Typography
          variant="h5"
          sx={{
            mt: 3,
            textAlign: 'center',
            fontSize: '1.5rem',
            fontWeight: 'bold'
          }}
        >
          Tarefa Não Concluída
        </Typography>

      </div>

    </Modal>

  );
  
};

export default NAO_CONCLUÍDA;
