import React, { useState } from 'react';
import { Modal, Typography, Button, Grid } from '@mui/material';
//IMPORT ICONE
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
//IMPORT COMPONETS
import RedButton from '../../../../Components/Btns/btn_red';
import GreenButton from '../../../../Components/Btns/btn_green';
//IMPORT POP-UP
import PopUp3 from './Nao_concluida';

const Desmarcar_Conclusão = ({ open, handleClose }) => {
  const [openPopup, setOpenPopup] = useState(false);

  const handleOpenPopup = () => {
    setOpenPopup(true);
  };

  const handleClosePopup2 = () => {
    setOpenPopup(false);
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
                                              {/* ICONE  */}
        <TaskAltOutlinedIcon
          sx={{ 
            width: 300, 
            height: 120, 
            color: '#07382E' 
          }}
        />

                                              {/* TITULO DO PO-UP  */}
        <Typography
          variant="h5"
          sx={{
            textAlign: 'center',
            fontSize: '1.5rem',
            fontWeight: 'bold'
          }}
        >
          Desfazer Conclusão?
        </Typography>

                                              {/* TEXTO INFORMATIVO  */}
        <Typography
          variant="body2"
          sx={{ 
            marginTop: '5%', 
            textAlign: 'center', 
            fontSize: '1rem' 
          }}
        >
          Deseja desfazer a conclusão desta tarefa?
        </Typography>

                                              {/* BOTÕES  */}
        <Grid 
        container 
        spacing={2} 
        sx={{ marginTop: '6%' }}
        >
          <Grid item xs={6}>
            <GreenButton 
            onClick={handleClose}
            >
              Voltar
            </GreenButton>
          </Grid>

          <Grid item xs={6}>
            <RedButton 
            onClick={handleOpenPopup}
            >
              Sim
            </RedButton>
          </Grid>

        </Grid>

        <PopUp3 
          open={openPopup} 
          handleClose={handleClosePopup2} 
        />

      </div>

    </Modal>
  );
};

export default Desmarcar_Conclusão;
