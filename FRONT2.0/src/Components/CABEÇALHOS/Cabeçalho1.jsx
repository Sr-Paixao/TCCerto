import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function Cabecalho_1({ icon, text, iconSize, avatar, avatarSize }) {
  const size = avatarSize || iconSize || 'inherit';

  return (
    <Grid 
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={1}
      sx={{ 
        marginTop: '2%', 
        marginBottom: '1%', 
      }}
    >
      <Grid item>
        {avatar ? (
          <img 
            src={avatar} 
            alt="avatar" 
            style={{ 
              width: size, 
              height: size, 
              objectFit: 'contain' 
            }} 
          />
        ) : (
          React.cloneElement(icon, { 
            style: { 
              fontSize: iconSize || 'inherit', 
              color: '#07382E' 
            } 
          })
        )}
      </Grid>
      <Grid item>
        <Typography
          component="h1"
          variant="h9"
          sx={{
            color: '#07382E',
          }}
        >
          {text}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Cabecalho_1;
