import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import {Box,Button,Container,CssBaseline,Typography,Paper} from '@mui/material';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import QRCode from 'qrcode.react';

export default function ForgotPassword() {

  const navigate = useNavigate();

  const handleConviteLink = () => {
        navigate('/Convite2');
  };
  
  const handleFecharConvite = () => {
        navigate('/Index');
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();

  const data = new FormData(event.currentTarget);
    
  };

  const [qrCodeValue, setQRCodeValue] = React.useState('https://example.com');

  return (

    <Container component="main" maxWidth="xs">

      <Paper 
        elevation={2} 
        sx={{ 
          mt: 8, 
          p: 2, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          boxShadow: "0" 
          }}
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

                <Stack 
                  direction="row" 
                  spacing={2}
                >
                    <Avatar
                      alt="grupo"
                      src="/static/images/avatar/1.jpg"
                      sx={{ width: 150,
                            height: 150,
                            border: '2px solid #07382E' 
                          }}
                    />
                </Stack>

                <Typography 
                component="h1" 
                variant="h9" 
                  sx={{ 
                    mt: 4, 
                    fontWeight: 'bold', 
                  }}
                > 
                  Convidar Membro
                </Typography>
                
                <box>
                    <Stack 
                      direction="column" 
                      alignItems="center" 
                      spacing={2} 
                      sx={{ mt: 5 }}
                    >
                      {qrCodeValue && 
                        <QRCode 
                        value={qrCodeValue} 
                        size={200}
                        />
                      }
                    </Stack>
                </box>

                <Typography 
                  component="h1" 
                  variant="subtitle1" 
                  sx={{ mt: 4 }}
                >
                  Você pode acessar os convites em : 
                </Typography> 

                <Typography 
                  variant="subtitle2" 
                  sx={{fontWeight: 'bold'}}
                >
                  Gerenciamento de Equipe
                </Typography>

                <Button 
                  onClick={handleConviteLink}
                  type="submit" 
                  fullWidth variant="outlined"
                  sx={{
                    mt: 5, 
                    backgroundColor:"#fff", 
                    color: "#07382E", 
                    borderColor: '#07382E',
                    '&:hover': {
                      borderColor: '#07382E',
                      backgroundColor: 'transparent',
                    }, 
                  }}
                >
                        CONVIDAR POR LINK
                </Button>

                <Button 
                  onClick={handleFecharConvite}
                  type="submit" 
                  fullWidth variant="outlined"
                  sx={{ 
                    mt: 2,
                    mb: 5, 
                    backgroundColor:"#fff", 
                    color: "#07382E", 
                    borderColor: '#07382E',
                    '&:hover': {
                      borderColor: '#07382E',
                      backgroundColor: 'transparent',
                    }, 
                  }}
                >
                        FECHAR
                </Button>

          </Box>

    </Container>

  );

}
