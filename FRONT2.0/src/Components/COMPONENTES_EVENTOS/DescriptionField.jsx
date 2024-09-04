import React from 'react';
import { Grid, IconButton, Typography } from '@mui/material';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';

const DescriptionField = ({ description }) => (
  <Grid container alignItems="center" spacing={1}>
    <Grid item>
      <IconButton disabled>
        <EditNoteOutlinedIcon sx={{ color: '#07382E' }} />
      </IconButton>
    </Grid>
    <Grid item>
      <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
        Descrição:
      </Typography>
    </Grid>
    <Typography variant="body1" paragraph sx={{ textAlign: 'left', marginTop: '5%', marginLeft: '3%' }}>
      {description}
    </Typography>
  </Grid>
);

export default DescriptionField;
