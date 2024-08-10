import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

const CustomButton = styled(Button)({
  backgroundColor: '#ffff',
  color: '#003D36',
  boxShadow: '0px 2px 10px rgba(0,0,0,0.4)',
  borderRadius: '20px',
  padding: '5px 20px',
  fontSize: '16px', 
  fontWeight: 'bold', 
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'default',
  pointerEvents: 'none' 
});

const HojeButton = ({ children }) => {
  return (
    <CustomButton>
      {children}
    </CustomButton>
  );
};

export default HojeButton;

