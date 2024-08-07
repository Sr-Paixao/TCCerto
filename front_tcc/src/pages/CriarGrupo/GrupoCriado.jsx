import * as React from 'react';
import {Box,Button,Container,CssBaseline,TextField,Typography,Paper} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ForgotPassword() {
  
  const handleBack = () => {
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  return (

    <Container component="main" maxWidth="xs">

        <Paper elevation={2} 
          sx={{ mt: 8, 
                p: 2, 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                boxShadow: "0" }}
        >
        </Paper>

          <CssBaseline />

            <Box
              sx={{
                marginTop: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
            
              <Stack direction="row" spacing={2}>
                  <Avatar
                    alt="img grupo"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 200, 
                          height: 200, 
                          border: '2px solid #07382E' }}
                />
              </Stack>

              <Typography 
                component="h1" 
                variant="h9" 
                sx={{ mt: 4, mb: 2, 
                      fontWeight: 'bold', }}
              >
                Grupo Criado!
              </Typography>

              <Typography 
                component="h2" 
                variant="body1" 
                sx={{ mt: 2, mb: 2, mx:'1', 
                      color: "#07382E",
                      fontWeight: 'bold',
                      textAlign: 'center'  }}
              >
                O próximo passo é convidar os integrantes, Você pode convida-los por link ou por QR Code.
              </Typography>

              <Button type="submit" fullWidth variant="outlined"
                sx={{ mt: 3, mb: 2, 
                      backgroundColor:"#fff", 
                      color: "#07382E", 
                      borderColor: '#07382E',
                      '&:hover': {borderColor: '#07382E',
                      backgroundColor: 'transparent',}, }}
              >
                AVANÇAR
              </Button>

            </Box>

    </Container>

  );

}
