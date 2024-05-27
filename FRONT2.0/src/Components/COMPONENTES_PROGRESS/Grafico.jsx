import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';

const CircularProgressWithLabel = ({ value, icon: Icon, size = 150, color = '#004d40' }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress
        variant="determinate"
        value={value}
        size={size}
        thickness={4}
        sx={{
          color: color,
          'circle': {
            strokeLinecap: 'round',
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          flexDirection: 'column',
        }}
      >
        <Icon sx={{ fontSize: size / 2, color: color }} />
        <Typography variant="h6" component="div" color="textSecondary" sx={{ mt: 0.5, fontWeight: 'bold' }}>
          {`${value}%`}
        </Typography>
      </Box>
    </Box>
  );
};

export default CircularProgressWithLabel;
