import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, CssBaseline, Paper, Typography, IconButton } from '@mui/material';
import Menu_Superior2 from '../../../Components/MENUS_LIDER/menu_superior2';
import Menu_Inferior from '../../../Components/MENUS_LIDER/menu_inferior';
import Cabecalho1 from '../../../Components/CABEÇALHOS/Cabeçalho1';

// IMPORT ICONES
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

export default function Modelo() {
    const [value, setValue] = useState(0); 
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleDownload = (fileNumber) => {
        
        const url = `URL_DO_ARQUIVO_${fileNumber}_PARA_DOWNLOAD`;
        const link = document.createElement('a');
        link.href = url;
        link.download = `nome_do_arquivo_${fileNumber}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

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
                            width: '100%' 
                            }}
                    >
                        Disponibilizamos dois arquivos já formatados conforme as normas da ABNT, 
                        prontos para receber as ideias brilhantes do seu projeto.<br/> 
                        Siga os passos do Manual e eleve seu TCC a novos patamares.
                    </Typography>
                </Box>

                <Box 
                    sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center', 
                        marginTop: '5%', 
                        width: '100%' 
                        }}
                >
                    <Box 
                        sx={{ 
                            mt:2,
                            width: '100%', 
                            boxShadow: '2px 0px 12px 5px rgba(0, 0, 0, 0.2)', 
                            borderRadius: '5px', 
                            padding: '10px', 
                            marginBottom: '10px' 
                            }}
                    >
                        <IconButton 
                            onClick={() => 
                            handleDownload(1)}
                        >
                            <FileDownloadOutlinedIcon 
                                sx={{ 
                                    color: '#07382E' 
                                    }} 
                            />
                        </IconButton>
                    </Box>

                    <Box 
                        sx={{ 
                            mt:2,
                            width: '100%', 
                            boxShadow: '2px 0px 12px 5px rgba(0, 0, 0, 0.2)', 
                            borderRadius: '5px', 
                            padding: '10px' 
                            }}
                    >
                        <IconButton 
                            onClick={() => 
                            handleDownload(2)}
                        >
                            <FileDownloadOutlinedIcon 
                                sx={{ 
                                    color: '#07382E' 
                                    }} 
                            />
                        </IconButton>
                    </Box>
                </Box>
                
                {/* MENU PRINCIPAL  */}
                <Menu_Inferior value={value} onChange={handleChange} interfaceType="Lider_Grupo" />
            
            </Paper>
        </Container>
    );
}
