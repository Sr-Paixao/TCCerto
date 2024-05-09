import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import {Box,Button,Container,CssBaseline,TextField,Typography,Paper} from '@mui/material';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import IconButton from '@mui/material/IconButton';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function LinkInput({ initialLink }) {
    const [link, setLink] = React.useState(initialLink || '');

    const navigate = useNavigate();

    const handleConviteQR = () => {
        navigate('/Convitee');
    };

    const handleFecharConvite = () => {
        navigate('/Index');
    };



    const handleSubmit = (event) => {
        event.preventDefault();
    const data = new FormData(event.currentTarget);
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(link);
    };

    const handleShareWhatsApp = () => {
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(link)}`;
    window.open(whatsappURL, '_blank');
    };

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
                                sx={{ 
                                    mt: 4, 
                                    fontWeight: 'bold', 
                                }}
                            > 
                                Convidar Membro
                            </Typography>
                            
                            <TextField 
                                variant="outlined" 
                                label="Link"
                                value={link}
                                onChange={(event) => 
                                    setLink(event.target.value)}
                                InputProps={{
                                endAdornment:   (
                                    <IconButton 
                                    onClick={handleCopyLink}>
                                        <FileCopyIcon 
                                            sx={{ 
                                                color: '#07382E' 
                                            }}
                                        />
                                    </IconButton>
                                                ),
                                            }}
                                            size="small"
                                        sx={{   
                                            mt: 5,
                                            borderColor: '#07382E',
                                            '& fieldset': {   
                                                borderColor: '#07382E' 
                                            }, 
                                            width: '95%', 
                                            height:'60px'  
                                        }}
                                    
                            />

                            <Button
                                    variant="outlined"
                                    onClick={handleShareWhatsApp}
                                    sx={{   
                                        marginTop: '10px', 
                                        color: '#07382E', 
                                        '& .MuiSvgIcon-root': { 
                                            color: '#07382E' 
                                        }, 
                                            border: 'none'
                                        }}
                                    startIcon={<WhatsAppIcon />}
                            >
                                    Compartilhar via WhatsApp
                            </Button>

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
                                onClick={handleConviteQR}
                                type="submit" 
                                fullWidth variant="outlined"
                                sx={{ mt: 5, 
                                    backgroundColor:"#fff", 
                                    color: "#07382E", 
                                    borderColor: '#07382E',
                                    '&:hover': {
                                        borderColor: '#07382E',
                                        backgroundColor: 'transparent',
                                    }, 
                                }}
                            >
                                    CONVIDAR POR QR CODE
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
