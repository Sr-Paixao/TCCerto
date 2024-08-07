import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const CustomLink = ({ href, text, onClick }) => {
  return (
    <Typography 
      variant="subtitle1" 
      sx={{ 
        mt: 2, 
        mb: 2, 
        textAlign: 'left',
        fontWeight: 'bold',
        cursor: 'pointer' 
      }}
      onClick={onClick} 
    >
      <Link 
        href={href} 
        color="inherit" 
        underline="none"
      >
        {text}
      </Link>
    </Typography>
  );
};

export default CustomLink;
