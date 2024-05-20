import React from 'react';
import { Box, Typography, Paper, Avatar } from '@mui/material';

const AreaCursoComponent = ({ curso, horas, selecionado, onSelect }) => {
  return (
    <Paper 
      elevation={2} 
      sx={{ 
        display: 'flex', 
        alignItems: 'center',
        boxShadow: selecionado ? '0 0 10px 2px rgba(7, 56, 46, 0.7)' : '2px 0px 12px 5px rgba(0, 0, 0, 0.2)', // Sombra para seleção
        p: 2, 
        borderRadius: 2, 
        mb: 4, 
        gap: 4,
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out' // Suave transição
      }}
      onClick={onSelect}
    >
      <Avatar
        sx={{
          width: 40,
          height: 40,
          backgroundColor: 'grey.300',
        }}
      />
      <Box flexGrow={1} sx={{ marginLeft: -2 }}> 
        <Typography variant="h6" component="div" sx={{ fontSize: '1.1rem' }}>
          {curso}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary" sx={{ fontSize: '0.8rem', mt: 0.5 }}>
          Horas Médias Reais
        </Typography>
      </Box>
      <Paper
        sx={{
          padding: 1,
          backgroundColor: 'grey.300',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="body1" sx={{ fontSize: '0.875rem' }}>{horas} hs</Typography>
      </Paper>
    </Paper>
  );
};

export default AreaCursoComponent;
