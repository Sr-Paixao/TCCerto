import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';

const CircularProgressWithLabel = ({ value, icon, size = 150, color = '#004d40' }) => {
  const isIconComponent = typeof icon !== 'string';

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
        {isIconComponent ? (
          React.createElement(icon, { sx: { fontSize: size / 2, color: color } })
        ) : (
          // Em CircularProgressWithLabel
        <img src={icon} alt="icon" style={{ width: size / 2, height: size / 3, objectFit: 'contain', color: color }} />

        )}
        <Typography variant="h6" component="div" color="textSecondary" sx={{ mt: 0.5, fontWeight: 'bold' }}>
          {`${value}%`}
        </Typography>
      </Box>
    </Box>
  );
};

export default CircularProgressWithLabel;
