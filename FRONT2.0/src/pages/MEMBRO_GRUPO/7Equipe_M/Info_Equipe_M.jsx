import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  
        Box, Container, CssBaseline, Paper, Typography,
        Grid, List, ListItem, ListItemAvatar, Avatar
        } from '@mui/material';
import Stack from '@mui/material/Stack';

//IMPORTS DE COMPONENTES 
import Menu_Superior from '../../../Components/Menus_Membro/menu_superior2_M';
import Box_2 from '../../../Components/Tarefas_Membro/Box_Form/Box_form2';
import Menu_Inferior from '../../../Components/Menus_Membro/menu_inferior_M';


const members = [
    { id: 1, name: 'Usuário 1', avatarSrc: '/avatar1.jpg' },
    { id: 2, name: 'Usuário 2', avatarSrc: '/avatar2.jpg' },
    { id: 3, name: 'Usuário 3', avatarSrc: '/avatar3.jpg' },
    // Adicione mais membros conforme necessário
];

export default function Info_Equipe_M() {
    const navigate = useNavigate();


    const [value, setValue] = React.useState(0);
    const descricao = "Descrição do Grupo"; // Definindo a descrição aqui


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

                                                            {/* MENU SUPERIOR  */}
                <Menu_Superior/>

                                                            {/* CABEÇALHO */}
                    <Stack 
                        direction="row" 
                        spacing={2}
                    >
                            <Avatar
                                alt="img grupo"
                                src="/static/images/avatar/1.jpg"
                                sx={{ 
                                    width: 100, 
                                    height: 100, 
                                    border: '2px solid #07382E' 
                                    }}
                            />
                </Stack>
                    <Typography 
                        component="h1" 
                        variant="h9" 
                        sx={{ 
                            color: '#07382E', 
                            mt: 2,
                            textAlign:'center',
                            fontSize: '1.8em'
                            }}
                    >
                        Nome da Equipe
                    </Typography>
                                                            {/* DESCRIÇÃO DO GRUPO  */}
                <Box
                    sx={{ 
                        textAlign: 'left' 
                        }}
                >
                    <Typography 
                        component="h2" 
                        variant="subtitle1" 
                        sx={{ 
                            color: '#07382E',
                            mt: 2,
                            fontSize: '1.4em',
                            fontWeight: 'bold',
                            marginLeft: '-115%' 
                            }}
                    >
                        Descrição:
                    </Typography>
                </Box>

                <Box_2>
                    <Grid 
                    container 
                    alignItems="center" 
                    spacing={1}
                    >
                        <Typography 
                        variant="body1" 
                        paragraph 
                        sx={{ 
                            textAlign: 'left', 
                            marginTop: '10px', 
                            marginLeft: '3%' 
                            }}
                        > 
                        {descricao}
                        </Typography>
                    </Grid>
                </Box_2>
                                                            {/* MEMBROS DO GRUPO */}
                <Box 
                    sx={{ 
                        textAlign: 'left' 
                        }}
                >
                    <Typography 
                        component="h2" 
                        variant="subtitle1" 
                        sx={{ 
                            color: '#07382E',
                            mt: 2,
                            fontSize: '1.4em',
                            fontWeight: 'bold',
                            marginLeft: '-30%' 
                            }}
                    >
                        Membros:
                    </Typography>

                    <List >
                        {members.map(member => (
                        <ListItem 
                        key={member.id}
                        >
                            <ListItemAvatar>
                                <Avatar 
                                    alt={member.name} 
                                    src={member.avatarSrc}
                                    sx={{
                                        width: 50, 
                                        height: 50 
                                        }}
                                />
                            </ListItemAvatar>
                            <Box ml={8}>
                            <Typography 
                                variant="subtitle1">
                                {member.name}
                            </Typography>
                            </Box>
                        </ListItem>
                        ))}
                    </List>
                </Box>
                                                            {/*MENU INFERIOR */}
                <Menu_Inferior />
            </Paper>
        </Container>
    )
}