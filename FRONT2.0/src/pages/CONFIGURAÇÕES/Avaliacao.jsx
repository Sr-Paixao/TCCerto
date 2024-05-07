import React, { useState } from 'react';
import { Modal, Typography, Button, IconButton, Grid, Avatar, Box } from '@mui/material';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import CloseIcon from '@mui/icons-material/Close'; 
import { Rating } from '@mui/material';
import TCCERTOImage from '../../img/logo.svg'; 


const Avaliacao = ({ open, handleClose }) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  const handleSend = () => {
    // Aqui você pode adicionar a lógica para enviar a avaliação
    handleClose(); 
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
          width: '400px',
          borderRadius: '6px',
          textAlign: 'center'
        }}
      >

              
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

        <Button 
          type="submit"
          fullWidth
          variant="outlined" 
          onClick={handleSend} 
          sx={{
            mt: 4,
            mb: 5,
            maxWidth: "180px",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            color: "#07382E",
            borderColor: "#07382E",
            "&:hover": { 
                backgroundColor: "#07382E", 
                color: "#FFFFFF" 
            }
        }}
        >
          Enviar
        </Button>

      </div>
    </Modal>
  );
};

export default Avaliacao;
