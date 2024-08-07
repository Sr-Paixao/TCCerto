import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const EtapaButton = ({ icon: Icon, label }) => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };

  return (
    <Box sx={{ mb: 1, width: '100%' }}>
      <Button
        variant="outlined"
        fullWidth
        startIcon={<Icon sx={{ fontSize: '2.0rem' }} />}
        endIcon={
          checked ? (
            <CheckCircleOutlineIcon sx={{ fontSize: '2.0rem' }} />
          ) : (
            <RadioButtonUncheckedIcon sx={{ fontSize: '1.5rem' }} />
          )
        }
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
          },
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
