import React from 'react';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

const CustomSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& + .MuiSwitch-track': {
        backgroundColor: '#004d40', // Cor de fundo quando ativado
        opacity: 1,
        border: 0,
      },
      '& .MuiSwitch-thumb:before': {
        content: "'✔'", // Adiciona o símbolo de check quando ativado
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#000', // Cor do círculo
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      display: 'block',
      background: 'none',
    },
  },
  '& .MuiSwitch-track': {
    borderRadius: 20 / 2,
    backgroundColor: '#E9E9EA', // Cor do background desativado
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

export default function CustomSwitchComponent() {
  return (
    <CustomSwitch />
  );
}
