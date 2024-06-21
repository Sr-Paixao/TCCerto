import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  
        Box, Container, 
        CssBaseline, Paper, Divider
        } from '@mui/material';
import Link from '@mui/material/Link';
import GroupsIcon from '@mui/icons-material/Groups';
import Menu_Superior2 from '../../../Components/MENUS_LIDER/menu_superior2';
import Menu_Inferior from '../../../Components/MENUS_LIDER/menu_inferior';
import Cabecalho1 from '../../../Components/CABEÇALHOS/Cabeçalho1';
import CustomLink from '../../../Components/LINKS/CustomLink';

export default function Geral_Equipe() {
    const [value, setValue] = React.useState('equipe');

    const navigate = useNavigate();

    // Função para voltar para a página inicial
    const handleBack = () => {
        navigate('/');
    };


        

        const handleChange = (event, newValue) => {
            setValue(newValue);
        };
        

    return (
        <Container 
            component="main" 
            maxWidth="xs"
        >
            <CssBaseline />
                <Paper 
                    elevation={2} 
                    sx={{ 
                        mt: 5, 
                        p: 2, 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center', 
                        boxShadow: "0" 
                        }}
                >
                                            {/* Menu Superior */}
                    <Menu_Superior2
                    sx={{ mt: '15%'}} 
                    />

                                            {/* CABEÇALHO */}
                    <Box
                    sx={{mt: '15%'}}
                    >
                        <Cabecalho1 
                            icon={<GroupsIcon />} 
                            text='Equipe' 
                            iconSize="70px"
                        />
                    </Box>

                                            {/* INFORMAÇÃO EQUIPE */}
                    <Box 
                        sx={{ 
                            width: '100%', 
                            mt: 3 
                            }}
                    >
                            <CustomLink href="/Info_Equipe" text="Informações da Equipe" />
                            <Divider />

                                            {/* CONVIDAR MEMBRO  */}
                            <CustomLink href="/Add_Membro" text="Convidar Membro" />
                            <Divider />

                                            {/* REMOVER MEMBRO  */}
                            <CustomLink href="/Remover_Membro" text="Remover Membro" />
                            <Divider />

                                            {/* DESFAZER EQUIPE  */}
                            <CustomLink href="/Desfazer_Equipe" text="Desfazer Equipe" />
                    </Box>
                                            {/*MENU INFERIOR */}
                    <Menu_Inferior value={value} onChange={handleChange} />
                    
                </Paper>
        </Container>
    );
}
