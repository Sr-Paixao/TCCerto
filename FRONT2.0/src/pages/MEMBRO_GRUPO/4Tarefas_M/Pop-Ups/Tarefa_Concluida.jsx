import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Typography, Button } from '@mui/material';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';


const Tarefa_Concluida = ({ open, handleClose }) => {
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
                    height: '290px',
                    borderRadius: '6px'
                }}
            >

                <CheckBoxOutlinedIcon
                    sx={{
                        width: 300,
                        height: 160,
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
                    Tarefa Concluída!
                </Typography>

            </div>
        </Modal>
    );
};

export default Tarefa_Concluida;
