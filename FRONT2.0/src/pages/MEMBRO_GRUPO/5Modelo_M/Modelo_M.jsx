import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, CssBaseline, Paper, Typography } from '@mui/material';
import Menu_Superior2 from '../../../Components/MENUS_MEMBROS/menu_superior2_M';
import Menu_Inferior from '../../../Components/MENUS_MEMBROS/menu_inferior_M';
import Cabecalho1 from '../../../Components/CABEÇALHOS/Cabeçalho1';
import DownloadBox from '../../../Components/BOX/Box_Modelo';

// IMPORT ICONES
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';


export default function Modelo_M() {
    const [value, setValue] = useState(0); // Estado para controlar o valor selecionado do BottomNavigation

    const handleDownload = (fileId) => {
        // Lógica para download do arquivo com base no fileId
        console.log(`Downloading file ${fileId}`);
    }

    const navigate = useNavigate();

    return (
        <Container 
            component="main" 
            maxWidth="xs"
        >
            <CssBaseline />
            <Paper
                elevation={2}
                sx={{
                    mt: 2, p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    boxShadow: "0",
                    width: '100%',
                    height: '100%'
                }}
            >
                                                            {/* MENU SUPERIOR  */}
                <Menu_Superior2/>
                                                            {/* CABAÇALHO AQUI  */}
                <Box
                sx={{ mt: 5}}>
                    <Cabecalho1 
                                icon={<DescriptionOutlinedIcon />} 
                                text='Modelo' 
                                iconSize="70px"
                    />
                </Box>
                                                            {/* TEXTO INFORMATIVO  */}
                <Box 
                    sx={{ 
                        display: 'flex', 
                        width: '92%', 
                        mt: 2
                        }}
                >
                    <Typography 
                        component="body" 
                        variant="h3" 
                        sx={{ 
                            textAlign: 'JUSTIFY', 
                            fontSize: '0.9em', 
                            width: '100%',
                            mb: 3 
                            }}
                    >
                        Disponibilizamos um arquivo que já está formatado conforme as normas da ABNT, 
                        pronto para receber as ideias brilhantes do seu projeto.<br/> 
                        Siga os passos do Manual e eleve seu TCC a novos patamares.
                    </Typography>
                </Box>
                                                            {/* BOX PARA OS DOWNLOADS  */}
                <DownloadBox handleDownload={handleDownload} />

                <DownloadBox handleDownload={handleDownload} />

                {/* MENU PRINCIPAL  */}
            <Menu_Inferior/>
            
            </Paper>
        </Container>
    );
}
