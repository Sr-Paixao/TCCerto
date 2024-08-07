import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

const EtapaButton = ({ icon: Icon, label, to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <Box sx={{ mb: 1, width: '100%' }}>
      <Button
        variant="outlined"
        fullWidth
        startIcon={<Icon sx={{ fontSize: '1.5rem' }} />}
        endIcon={<ArrowForwardIcon sx={{ fontSize: '1.5rem' }} />}
        onClick={handleClick} 
        sx={{
          boxShadow: '2px 0px 12px 5px rgba(0, 0, 0, 0.2)',
          borderRadius: '5px',
          padding: '10px',
          justifyContent: 'space-between',
          backgroundColor: '#fff',
          color: '#07382E',
          borderColor: 'transparent',
          '&:focus-visible': {
            outline: 'none',
          },
          '&:hover': {
            backgroundColor: '#f0f0f0',
            borderColor: 'transparent',
          }
        }}
      >
        <Typography variant="button" sx={{ fontWeight: 'bold' }}>
          {label}
        </Typography>
      </Button>
    </Box>
  );
};

export default EtapaButton;
