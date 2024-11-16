import * as React from 'react';
import { useNavigate } from "react-router-dom";
import {Box,Container,CssBaseline,TextField,Typography,Paper
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import GreenButton from '../../../Components/Btns/btn_green';

export default function Credencial_equipe() {
    
    const handleBack = () => {
    
    };

    const navigate = useNavigate();

    const handleSubmit2 = (e) => {
        e.preventDefault();
        navigate("/Bem_vindo");
    };

    
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
    };

    return (

        <Container component="main" maxWidth="xs">

        <Paper elevation={2} 
            sx={{ mt: 6, p: 2, 
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
            sx={{ mt: 3, mb: 2, fontSize: '170%',
                    fontWeight: 'bold' }}
            >
                Entrar em uma Equipe
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

                <GreenButton
                onClick={handleSubmit2}
                >
                Avançar
                </GreenButton>

            </Box>

            </Box>

        </Container>

    );
}
