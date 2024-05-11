import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    Box, Container, CssBaseline, Paper, Typography,  
    List, ListItem, ListItemAvatar, Avatar, Button, Divider 
    } from '@mui/material';
import GroupRemoveIcon from '@mui/icons-material/GroupRemove';
import PopUpExcluirMembro from './PopUpExcluirMembro';
import Cabecalho2 from '../../../Components/Cabeçalhos/Cabeçalho2';


export default function Remover_Membro() {

    const members = [
        { id: 1, name: 'Usuário 1', avatarSrc: 'https://source.unsplash.com/32x32/?avatar1' },
        { id: 2, name: 'Usuário 2', avatarSrc: 'https://source.unsplash.com/32x32/?avatar2' },
        { id: 3, name: 'Usuário 3', avatarSrc: 'https://source.unsplash.com/32x32/?avatar3' },
        // Adicione mais membros conforme necessário
    ];

    const navigate = useNavigate();
    const [openPopup, setOpenPopup] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);

    const handleBack = () => {
        navigate('/Geral_Equipe');
    };

    const handleOpenPopup = (member) => {
        setSelectedMember(member);
        setOpenPopup(true);
    };

    const handleClosePopup = () => {
        setOpenPopup(false);
    };

    const handleRemoveMember = (memberId) => {
        // Implemente a lógica de remoção aqui, por exemplo,
        //  atualize o estado ou faça uma chamada de API
        console.log(`Removendo membro com id ${memberId}`);
        handleClosePopup(); 
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Paper
                elevation={2} 
                sx={{ 
                    mt: 2, 
                    p: 2, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    boxShadow: "0", 
                    width: '100%', 
                    height: '100%' 
                    }}
            >
                                                            {/* Cabeçalho */}
                <Cabecalho2
                    handleBack={handleBack}
                    icon={<GroupRemoveIcon />}
                    text="Remover Membro"
                    iconSize={60}
                />

                                                            {/* Lista de Membros */}
                <Box 
                    sx={{ 
                        textAlign: 'left',
                        mt: 5, 
                        }}
                    >
                    <Typography 
                        component="h2" 
                        variant="subtitle1" 
                        sx={{ 
                            color: '#07382E',
                            mt: 2,
                            fontSize: '1.5em',
                            fontWeight: 'bold',
                        }}
                    >
                        Membros:
                    </Typography>
                                                            {/* LISTAGEM DOS MEMBROS  */}
                    <List
                        sx={{ 
                            width: '100%', 
                            mt: 2 
                            }}
                    >
                            {members.map((member) => (
                            <React.Fragment key={member.id}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar 
                                        alt={member.name} 
                                        src={member.avatarSrc} 
                                        sx={{ width: 50, height: 50 }} 
                                    />
                                </ListItemAvatar>

                                <Box 
                                    ml={2} 
                                    display="flex" 
                                    alignItems="center" 
                                    sx={{ flexGrow: 1 }}
                                >
                                    <Box mr={8}>
                                        <Typography variant="subtitle1">
                                            {member.name}
                                        </Typography>
                                    </Box>

                                    {/* BOTÃO DE REMOVER  */}
                                    <Button 
                                        type="submit"
                                        variant="outlined" 
                                        color="secondary" 
                                        sx={{ 
                                            backgroundColor: 'transparent',
                                            color: '#FF0000',
                                            borderColor: '#FF0000',
                                            '&:hover': {
                                                backgroundColor: '#FF0000',
                                                color: '#FFFFFF',
                                                borderColor: 'transparent'
                                            }
                                        }}
                                        onClick={() => handleOpenPopup(member)}
                                    >
                                        REMOVER
                                    </Button>
                                </Box>
                            </ListItem>
                            <Divider sx={{ bgcolor: '#1115' }} />
                            </React.Fragment>
                        ))}
                    </List>
                </Box>
    </Paper>

                                                            {/* Pop-up de confirmação de exclusão */}
            <PopUpExcluirMembro 
                open={openPopup} 
                handleClose={handleClosePopup} 
                handleExcluir={() => 
                    handleRemoveMember(selectedMember.id)} 
                member={selectedMember} 
            />
        </Container>
    );
}
