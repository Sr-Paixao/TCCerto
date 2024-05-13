import React, { useState } from 'react';
import { 
  Modal, Typography, IconButton, Grid, Avatar 
} from '@mui/material';
import { Rating } from '@mui/material';

//IMPORTS ICONES
import CloseIcon from '@mui/icons-material/Close'; 

//IMPORT COMPONENTES 
import TCCERTOImage from '../../../img/logo.svg'; 
import GreenButton from '../../../Components/Btns/btn_green';

//IMPORT POP-UP
import Thanks from './Pop_Ups/Obrigado_M';

const Avaliacao_M = ({ open, handleClose }) => {
  const [rating, setRating] = useState(0);
  const [thanks, setThanks] = useState(false);

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  const handleSend = () => {
    // Aqui você pode adicionar a lógica para enviar a avaliação
    // Exemplo: enviarAvaliacao(rating);
    setThanks(true);
  };

  const handleObrigadaClose = () => {
    setThanks(false); 
    handleClose(); 
  };

  return (
    <>
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
            width: '400px',
            borderRadius: '6px',
            textAlign: 'center'
          }}
        >
                                      {/* ICONE PARA FECHA POP-UP  */}
          <IconButton 
            onClick={handleClose} 
            style={{ 
              position: 'absolute', 
              top: 15, 
              right: 15,
              fontSize: '5%' 
            }}
          >
            <CloseIcon />
          </IconButton>
                                      {/* LOGO TCCERTO  */}
          <Avatar 
            alt="TCCERTO" 
            src={TCCERTOImage} 
            sx={{ 
              width: '30%', 
              height: '30%',
              margin: '5% auto 0',
              mb: 3
            }} 
          />
                                      {/* TEXTO INFORMATIVO  */}
          <Typography 
            variant="h5"
            sx={{ 
              textAlign:'center', 
              fontSize:'1.3rem',
              fontWeight: 'bold'
            }}
          >
            Avalie sua experiência com o TCCERTO
          </Typography>
                                      {/* ESTRELAS AVALIAÇÃO  */}
          <Grid 
            container 
            justifyContent="center" 
            alignItems="center" 
            spacing={1} 
            sx={{ 
              marginTop: '10px' 
            }}
          >
            <Grid item>
              <Rating
                name="rating"
                value={rating}
                onChange={handleRatingChange}
                max={5}
                size="large"
                sx={{ fontSize: '4rem' }}
              />
            </Grid>
          </Grid>
                                      {/* BOTÃO DE ENVIO AVALIAÇÃO  */}
          <GreenButton
            type="submit"
            fullWidth
            variant="outlined" 
            onClick={handleSend} 
          >
            Enviar
          </GreenButton>
        </div>
      </Modal>

                                      {/* Pop-up OBRIGADA */}
      <Thanks 
      open={thanks} 
      handleClose={handleObrigadaClose} 
      /> 
    </>
  );
};

export default Avaliacao_M;
