import * as React from 'react'; 
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Container,
    CssBaseline,
    Paper,
    Typography,
    IconButton
    } from '@mui/material';


import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import Cabecalho2 from '../../../Components/Cabeçalhos/Cabeçalho2';
import Menu_Inferior from '../../../Components/Menus/menu_inferior';





export default function Termos_e_Politicas() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/Config');
    };

    return (

        <Container component="main" maxWidth="xs">

            <CssBaseline />

                <Paper elevation={2} 
                    sx={{ 
                        mt: 2, 
                        p: 2, 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center', 
                        boxShadow: "0" 
                    }}
                >
                
                                            {/* CABEÇALHO  */}
                <Cabecalho2
                    handleBack={handleBack}
                    icon={<GppGoodOutlinedIcon />}
                    text="Termos e Politíca"
                    iconSize={70}
                />


                    <Box 
                        sx={{   width: '100%', 
                                mt: 3, mx:2 ,
                                overflowY: 'auto', 
                                maxHeight: '80%', 
                                textAlign: 'justify',
                                mb: 20
                        }}
                    >

                        <Typography 
                            component="" 
                            variant="body1" 
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                            quasi quidem quibusdam.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                            quasi quidem quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                            quasi quidem quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                            quasi quidem quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                            quasi quidem quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                            quasi quidem quibusdam.vvvLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                            quasi quidem quibusdam.
                        </Typography>

                    </Box>

                    {/* MENU INFERIOR  */}
                    <Menu_Inferior />

                </Paper>

        </Container>

    );

}

