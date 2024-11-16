import * as React from 'react';
import { useNavigate } from "react-router-dom";
import {Box,Container,CssBaseline,Typography,IconButton,Paper
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import GreenButton from '../../../Components/Btns/btn_green';

export default function Bem_vindo() {
    
    const handleBack = () => {
    
    };

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();;
        navigate("/Home2");
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
                <Avatar
                    alt=""
                    src={Avatar}
                    sx={{
                    width: 150,
                    height: 150,
                    border: '2px solid #07382E'
                    }}
                />
            </Stack>

                <Typography 
                component="h1" 
                variant="h9" 
                sx={{ mt: 2, mb: 2, 
                        fontWeight: 'bold', }}
                >
                Bem - Vindo!
                </Typography>

                <Typography 
                component="h2" 
                variant="body1" 
                sx={{ mt: 2, mb: 2, 
                        color: "#07382E",
                        fontWeight: 'bold',
                        textAlign: 'center'  }}
                >
                Agora você faz parte da equipe (nome/equipe).
                </Typography>

                <GreenButton
                    onClick={handleSubmit}
                >
                    OK
                </GreenButton>

                </Box>

        </Container>

    );
    
}
