import * as React from 'react';
import {Box,Button,Container,CssBaseline,TextField,Typography,IconButton,Paper
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ValidationAccountCode() {
  
  const handleBack = () => {
  
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
  };

  return (

    <Container component="main" maxWidth="xs">

      <Paper elevation={2} 
        sx={{ mt: 8, p: 2, 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              boxShadow: "0" }}>
      </Paper>

        <CssBaseline />

        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',}}
        >

          <Stack direction="row" spacing={2}>
              <Avatar
                  alt="Avatar"
                  src={Avatar}
                  sx={{   width: 150, 
                          height: 150, 
                          border: '2px solid #07382E' }}
              />
          </Stack>
  
          <Typography component="h1" variant="h4" 
          sx={{ mt: 2, mb: 2, 
                fontWeight: 'bold' }}
          >
            Validação de Conta
          </Typography>

          <Typography component="h2" variant="body1" 
            sx={{ mt: 2, mb: 2, 
                  fontWeight: 'bold'}}
          >
            Codigo:
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="codigo"
              label="0000"
              name="codigo"
              sx={{
                '& label.Mui-focused': {
                  color: '#07382E',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#07382E',
                  },
                  '&:hover fieldset': {
                    borderColor: '#07382E',
                  },
                },
                
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2, 
                    backgroundColor:"#fff", 
                    color: "#07382E", 
                    borderColor: '#07382E',
                    '&:hover': {borderColor: '#07382E',
                    backgroundColor: 'transparent',}, }}
            >
              Avançar
            </Button>

          </Box>

        </Box>

    </Container>

  );
  
}
