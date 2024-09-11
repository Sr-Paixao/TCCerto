import * as React from 'react';
import {Box,Button,Container,CssBaseline,TextField,Typography,IconButton,Paper
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
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
          sx={{ mt: 8, p: 2, 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                boxShadow: "0" }}
        >
        </Paper>

          <CssBaseline />

          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <IconButton 
              onClick={handleBack} 
              sx={{ alignSelf: 'flex-start' }}
            >
            </IconButton>

            <Stack direction="row" spacing={2} alignItems="center">
              <Badge
                overlap="circular"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                badgeContent={<CheckCircleIcon 
                style={{ color: '#1D8570' }} />}
              >

              <Avatar
                alt=""
                src={Avatar}
                sx={{
                  width: 150,
                  height: 150,
                  border: '2px solid #07382E'
                }}
              />
          </Badge>
        </Stack>

            <Typography 
              component="h1" 
              variant="h9" 
              sx={{ mt: 2, mb: 2, 
                    fontWeight: 'bold', }}
            >
              Conta Validada!
            </Typography>

            <Typography 
              component="h2" 
              variant="body1" 
              sx={{ mt: 2, mb: 2, 
                    color: "#07382E",
                    fontWeight: 'bold',
                    textAlign: 'center'  }}
            >
              Sua conta foi validada agora você pode aproveitar todos os recursos do TCCERTO!
            </Typography>

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
                OK
              </Button>

            </Box>

    </Container>

  );
  
}
