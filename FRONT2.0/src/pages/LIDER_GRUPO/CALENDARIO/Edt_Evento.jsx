import React, { useState } from 'react';
import { Container, CssBaseline, Paper, Typography, IconButton, Grid, List, ListItemButton, 
        ListItemIcon, ListItemText, Collapse, Avatar, Menu, MenuItem, Checkbox 
        } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
                // IMPORTS DE ICONES 
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import AlarmIcon from '@mui/icons-material/Alarm';
                // IMPORT POP-UP 
import Popup from './pop-ups/POP-UP1';
                // IMPORT COMPONENTES 
import Menu_Inferior from '../../../Components/MENUS_LIDER/menu_inferior';
import Cabecalho2 from '../../../Components/CABEÇALHOS/Cabeçalho2';
import GreenButton from '../../../Components/Btns/btn_green';
import RedButton from '../../../Components/Btns/btn_red';
import Box1 from '../../../Components/COMPONENTES_TAREFAS/Box_Form/Box_form1';
import Box2 from '../../../Components/COMPONENTES_TAREFAS/Box_Form/Box_form2';


export default function Edt_Evento() {

    // POP-UP 
    const [openPopup, setOpenPopup] = useState(false);

    const handleOpenPopup = () => {
        setOpenPopup(true);
    };

    const handleClosePopup = () => {
        setOpenPopup(false);
    };

    //  BOTÃO VOLTAR
    const handleBack = () => {};

    // Estado e função para atualizar o valor do BottomNavigation
    const [value, setValue] = React.useState(0);

     // DESCRIÇÃO DO EVENTO
    const descricao = "Descrição do Evento"; 

    // Estado e função para atualizar a lista de usuários atribuídos à tarefa
    const [assignedUsers, setAssignedUsers] = useState(["João", "Maria", "Carlos", "Ana", "Pedro"]);

      // Estado e função para atualizar o elemento de ancoragem do menu de usuários
    const [anchorEl, setAnchorEl] = useState(null);

    // Variável booleana para verificar se o menu de usuários está aberto
    const openMenu = Boolean(anchorEl);

    // Função de retorno de chamada para lidar com o clique no menu
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // Função de retorno de chamada para lidar com o clique nos itens do menu
    const handleMenuItemClick = (user) => {
        const index = assignedUsers.indexOf(user);
        if (index === -1) {
            setAssignedUsers([...assignedUsers, user]);
        } else {
            const updatedUsers = [...assignedUsers];
            updatedUsers.splice(index, 1);
            setAssignedUsers(updatedUsers);
        }
    };

     // Função de retorno de chamada para fechar o menu
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Componente do menu de usuários atribuídos
    const UserListMenu = () => {
        return (
            <Menu
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'user-list-menu',
                }}
            >
                {getAllUsers().map((user, index) => (
                    <MenuItem key={index} onClick={() => handleMenuItemClick(user)}>
                        <Checkbox checked={assignedUsers.includes(user)} />
                        <ListItemText primary={user} />
                    </MenuItem>
                ))}
            </Menu>
        );
    };

    // Função para obter todos os usuários disponíveis
    const getAllUsers = () => {
        // Aqui você deve retornar todos os usuários disponíveis
        // Por enquanto, vamos apenas retornar uma lista fixa
        const allUsers = ['João', 'Maria', 'Carlos', 'Ana', 'Pedro'];
        return allUsers;
    };

     // Componente da lista de tarefas
    const TaskList = () => {
        const [open, setOpen] = useState(false);

        const handleClick = () => {
            setOpen(!open);
        };

    // Função para renderizar avatares dos usuários atribuídos
    const renderAvatars = () => {
            if (assignedUsers.length === 0) {
                return null;
            } else if (assignedUsers.length === 1) {
                return (
                    <Avatar 
                        alt={assignedUsers[0]} 
                        src={`https://source.unsplash.com/32x32/?${assignedUsers[0]}`} 
                        sx={{ width: 24, height: 24, marginLeft: 10 }} 
                    />
                );
            } else {

                return (
                
                    <>
                        {assignedUsers.slice(0, 3).map((user, index) => (
                            <Avatar 
                                key={index} alt={user} 
                                src={`https://source.unsplash.com/32x32/?${user}`} 
                                sx={{ width: 24, height: 24, ml: -1 }} 
                            />
                        ))}
                    </>
                );
            }
        };

        const summary = renderSummary();

        return (

                <List 
                    sx={{ width: '100%' }} 
                    component="nav" 
                    aria-labelledby="task-list-header"
                >
                    <ListItemButton 
                        onClick={handleClick} 
                        sx={{ pr: -1 }}
                    >
                            <ListItemIcon 
                                sx={{ mr: -3 }}
                            >
                                <GroupOutlinedIcon 
                                    sx={{ color: '#07382E' }} 
                                />
                            </ListItemIcon>
                            <ListItemText 
                                primary="Convidar:" 
                                primaryTypographyProps={{ fontWeight: 'bold' }} 
                            />
                                {renderAvatars()}
                            <ListItemText 
                                primary={summary} 
                                primaryTypographyProps={{ variant: 'body2', fontSize: '0.8rem' }} 
                                sx={{ marginLeft: 2 }} 
                            />
                            
                            <IconButton onClick={handleMenuClick}>
                                {open ? <ExpandLess /> : <ExpandMore />}
                            </IconButton>
                    </ListItemButton>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {getAllUsers().map((user, index) => (
                            <ListItemButton key={index} sx={{ pl: 4 }}>
                                <Checkbox 
                                    checked={assignedUsers.includes(user)} o
                                    nClick={() => handleMenuItemClick(user)} 
                                />
                                <Avatar 
                                    alt={user} 
                                    src={`https://source.unsplash.com/32x32/?${user}`} 
                                />
                                <ListItemText primary={user} />
                            </ListItemButton>
                        ))}
                    </List>
                </Collapse>
            </List>
        );
    };

    const renderSummary = () => {
        if (assignedUsers.length === 0) {
            return "Ninguém atribuído";
        } else if (assignedUsers.length <= 3) {
            return assignedUsers.join(", ");
        } else {
            return `${assignedUsers[0]} e +${assignedUsers.length - 1} pessoas`;
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
                <Paper 
                    elevation={2} 
                    sx={{ mt: 5, p: 2, 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center', 
                        boxShadow: "0" 
                    }}
                >

                    {/* CABEÇALHO */}
                    <Cabecalho2
                        handleBack={handleBack}
                        icon={<EventAvailableIcon />} 
                        text="Novo Evento"
                        iconSize={'70px'}
                    />

                    {/* CAMPO DE TÍTULO TAREFA  */}
                    <Box1>
                        <Grid container alignItems="center" spacing={1}>
                            <Grid item>
                                <IconButton disabled>
                                    <CreateOutlinedIcon 
                                        sx={{   color: '#07382E', 
                                                marginLeft: '60%', 
                                                alignItems: 'center' 
                                        }} 
                                    />
                                </IconButton>
                            </Grid>

                            <Grid item>
                                <Typography variant="subtitle1" gutterBottom 
                                    sx={{   marginTop: '10%', 
                                            textAlign: 'center', 
                                            fontWeight: 'bold' 
                                    }}
                                >
                                    Título:
                                </Typography>
                            </Grid>

                            <Grid item>
                                <Typography variant="body1" paragraph 
                                    sx={{   textAlign: 'center', 
                                            marginTop: '20%', 
                                            marginLeft: '10%' 
                                    }}
                                >
                                    {/* {task.dueDate} */}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box1>

                                    {/**************************************** CAMPO DE  DATA  ****************************************/}
                    <Box1>
                        <Grid container alignItems="center" spacing={1}>

                            <Grid item>
                                <IconButton disabled>
                                    <CalendarMonthIcon 
                                    sx={{   color: '#07382E', 
                                            marginLeft: '60%' 
                                        }} 
                                    />
                                </IconButton>
                            </Grid>

                            <Grid item>
                                <Typography variant="subtitle1" gutterBottom
                                    sx={{   marginTop: '5%', 
                                            textAlign: 'center', 
                                            fontWeight: 'bold' 
                                    }}
                                >
                                    Data:
                                </Typography>
                            </Grid>

                            <Grid item>
                                <Typography variant="body1" paragraph
                                    sx={{   textAlign: 'center', 
                                            marginTop: '20%', 
                                            marginLeft: '10%' 
                                    }}
                                >
                                    {/* {task.dueDate} */}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box1>

                    {/**************************************** CAMPO DE  HORA  ****************************************/}
                    <Box1>
                        <Grid container alignItems="center" spacing={1}>
                            <Grid item>
                                <IconButton disabled>
                                    <AlarmIcon 
                                        sx={{   color: '#07382E', 
                                                marginLeft: '60%' 
                                        }} 
                                    />
                                </IconButton>
                            </Grid>

                            <Grid item>
                                <Typography variant="subtitle1" gutterBottom 
                                    sx={{   marginTop: '5%', 
                                            textAlign: 'center', 
                                            fontWeight: 'bold' 
                                    }}
                                >
                                    Horario:
                                </Typography>
                            </Grid>

                            <Grid item>
                                <Typography variant="body1" paragraph 
                                    sx={{   textAlign: 'center', 
                                            marginTop: '20%', 
                                            marginLeft: '10%' 
                                    }}
                                >
                                    {/* {task.dueDate} */}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box1>

                    {/***************************************** CAMPO DE ATRIBUIR  *****************************************/}
                    <Box1>
                        <TaskList />
                    </Box1>

                    {/***************************************** CAMPO DE DESCRIÇÃO  *****************************************/}
                    <Box2>
                        <Grid container alignItems="center" spacing={1}>
                            <Grid item>
                                <IconButton disabled>
                                    <EditNoteOutlinedIcon 
                                        sx={{ color: '#07382E' }} 
                                    /> 
                                </IconButton>
                            </Grid>

                            <Grid item>
                                <Typography 
                                    variant="subtitle1" gutterBottom 
                                    sx={{ fontWeight: 'bold' }}
                                >
                                    Descrição:
                                </Typography>
                            </Grid>
                            <br/>
                            <Grid item>
                                <Typography variant="body1" paragraph 
                                    sx={{   textAlign: 'left',
                                            marginTop: '4px', 
                                            marginLeft: '3%' 
                                        }}
                                >
                                    {descricao}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box2>

                    {/***************************************** BOTÃO CRIAR  *****************************************/}
                    <Grid container justifyContent="center" alignItems="center" spacing={2}>
                <Grid item xs={6}>
                    <RedButton>
                        CANCELAR 
                    </RedButton>
                </Grid>
                <Grid item xs={6}>
                    <GreenButton
                        onClick={handleOpenPopup} 
                    >
                        SALVAR 
                    </GreenButton>
                    </Grid>
            </Grid>

                    {/***************************************** POP-UP AQUI!  *****************************************/}
                <Popup open={openPopup} handleClose={handleClosePopup} />

                    {/***************************************** MENU FIXO  *****************************************/}
                <Menu_Inferior/>
                    
                </Paper>

        </Container>

    );
    
}
