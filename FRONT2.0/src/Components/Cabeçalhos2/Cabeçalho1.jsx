import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function Cabecalho_1({ icon, text, iconSize }) {
  return (
    <Grid 
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={1}
      sx={{ 
        marginTop: '90p%', 
        marginBottom: '90p%', 
      }}
    >
      <Grid item>
        {React.cloneElement(icon, { 
          style: { 
            fontSize: iconSize || 'inherit', 
            color: '#07382E' 
            } 
          })} 
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
