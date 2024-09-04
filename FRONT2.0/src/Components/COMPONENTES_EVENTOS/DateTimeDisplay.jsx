import React from 'react';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/system';

const DateTimeWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '10px 10px',
  border: '1px solid rgba(0, 0, 0, 0.12)',
  borderRadius: '5px',
  background: '#fff',
  boxShadow: '2px 0px 12px 5px rgba(0, 0, 0, 0.2)',
  width: '100%',
  margin: '2px',
  marginLeft: '-3%',
  marginRight: '3%'
}));

const DateTimeDisplay = ({ icon, label, value }) => {
  const theme = useTheme();

  return (
    <DateTimeWrapper>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton  sx={{ color: '#07382E', marginRight: '8px', padding: 0 }}>
          {icon}
        </IconButton>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#07382E' }}>
          {label}
        </Typography>
      </Box>
      <Typography variant="subtitle2" sx={{ color: '#07382E' }}>
        {value}
      </Typography>
    </DateTimeWrapper>
  );
};

export default DateTimeDisplay;
