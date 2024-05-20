import * as React from 'react'; 
import { useNavigate } from 'react-router-dom';
import {
    Box, Container, CssBaseline,
    Paper, Typography,
    } from '@mui/material';

//IMPORT ICONE
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';

//IMPORT COMPONENTES
import Cabecalho2 from '../../../Components/CABEÇALHOS/Cabeçalho2';
import Menu_Inferior from '../../../Components/MENUS_MEMBROS/menu_inferior_M';


export default function Termos_e_Politicas_M() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/Config_M');
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

                                                            {/* TERMOS E POLITICA AQUI  */}
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

