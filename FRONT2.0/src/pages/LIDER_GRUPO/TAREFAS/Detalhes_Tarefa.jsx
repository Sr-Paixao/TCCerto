import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
        Container, CssBaseline, Paper, Typography, 
        IconButton, Grid, List, ListItemButton, 
        ListItemIcon, ListItemText, Collapse, Avatar 
        } from '@mui/material';
import Menu_Inferior from '../../../Components/MENUS_LIDER/menu_inferior';
import Cabecalho2 from '../../../Components/CABEÇALHOS/Cabeçalho2';
import Box1 from '../../../Components/COMPONENTES_TAREFAS/Box_Form/Box_form1';
import Box2 from '../../../Components/COMPONENTES_TAREFAS/Box_Form/Box_form2';
import RedButton from '../../../Components/Btns/btn_red';
import GreenButton from '../../../Components/Btns/btn_green';

// IMPORT ICONES 
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess'; 
import ExpandMore from '@mui/icons-material/ExpandMore'; 
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';

// IMPORT POP-UP 
import Popup from './Pop-Ups/Pop_Up_2';

export default function Detalhes_Tarefa() {

  // POP-UP 
    const [openPopup, setOpenPopup] = useState(false);
    const navigate = useNavigate();

    const handleOpenPopup = () => {
        setOpenPopup(true);
    };
    
    const handleClosePopup = () => {
        setOpenPopup(false);
    };
    
    const handleEditClick = () => {
        navigate('/Edt_Tarefa');
    };

    const handleBack = () => {
        navigate('/Central_Tarefas');
    };
    

        const [value, setValue] = React.useState(0);
        const descricao = "Descrição da tarefa"; // Definindo a descrição aqui

        const TaskList = () => {
            const [open, setOpen] = useState(false);
            const [assignedUsers] = useState(["João", "Maria", "Carlos", "Ana", "Pedro"]);
        
            const handleClick = () => {
            setOpen(!open);
            };
        
            const generateSummary = () => {
            if (assignedUsers.length === 0) {
                return "Ninguém atribuído";
            } else if (assignedUsers.length <= 3) {
                return assignedUsers.join(", ");
            } else {
                return `${assignedUsers[0]} 
                e +${assignedUsers.length - 1} pessoas`;
            }
            };

            const renderAvatars = () => {
            if (assignedUsers.length === 0) {
                return null;
            } else if (assignedUsers.length === 1) {
                return (
                <Avatar 
                    alt={assignedUsers[0]} 
                    src={`https://source.unsplash.com/32x32/?${assignedUsers[0]}`} 
                    sx={{ width: 24, height: 24, marginLeft: 20}} 
                />
                );
            } else {
                return (
                <>
                    {assignedUsers.slice(0, 3).map((user, index) => (
                    <Avatar 
                        key={index} 
                        alt={user} 
                        src={`https://source.unsplash.com/32x32/?${user}`} 
                        sx={{ width: 24, height: 24, ml: -1}} 
                    />
                    ))}
                </>
                );
            }
            };

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
                    sx={{ 
                        color: '#07382E',
                        fontSize: '150%'
                    }} 
                    />
                </ListItemIcon>
                {open ? (
                    <ListItemText 
                    primary="Pessoas Atribuídas" 
                    />
                ) : (
                    <>
                    <ListItemText 
                        primary="Atribuído:" 
                        primaryTypographyProps={{ 
                            fontWeight: 'bold',
                            fontSize: '100%'
                        }}
                    />
                    {renderAvatars()}
                    <ListItemText 
                        primary={`${assignedUsers[0]} 
                        e +${assignedUsers.length - 1} pessoas`} 
                        primaryTypographyProps={{ 
                            variant: 'body2', 
                            fontSize: '0.7rem' 
                        }} 
                        sx={{ marginLeft: 2 }} 
                    />
                    </>
                )}
                {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse 
                in={open} 
                timeout="auto" 
                unmountOnExit
                >
                <List component="div" 
                disablePadding>
                    {assignedUsers.map((user, index) => (
                    <ListItemButton 
                        key={index} 
                        sx={{ pl: 4 }}
                    >
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
                                        {/* CABEÇALHO  */}
                <Cabecalho2
                    handleBack={handleBack}
                    icon={<PlaylistAddCheckOutlinedIcon />} 
                    text="Nome da tarefa"
                    iconSize={'70px'}
                />
                                        {/* CAMPO DE LEITURA DATA  */}
            <Box1>
                <Grid 
                container alignItems="center" 
                spacing={1}
                >

                <Grid item>
                    <IconButton disabled>
                    <CalendarMonthIcon 
                        sx={{
                        color:'#07382E', 
                        marginLeft: '60%',
                        fontSize: '120%'
                        }} 
                        />
                    </IconButton>
                </Grid>

                <Grid item>
                    <Typography 
                    variant="subtitle1" 
                    gutterBottom
                    sx={{ 
                        marginTop: '5%', 
                        textAlign: 'center', 
                        fontWeight: 'bold',
                        fontSize: '100%'
                    }}
                    >
                    Data de Conclusão:
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography 
                    variant="body1" 
                    paragraph 
                    sx={{ 
                        textAlign: 'center', 
                        marginTop: '20%', 
                        marginLeft: '10%'
                    }}
                    >
                    {/* {task.dueDate} */} 
                    </Typography>
                </Grid>

                </Grid>
            </Box1>

                                        {/* CAMPO DE LEITURA ATRIBUIDOS  */}
            <Box1>
                <TaskList />
            </Box1>

                                        {/* CAMPO DE LEITURA DESCRIÇÃO  */}
            <Box2>
                <Grid 
                container 
                alignItems="center" 
                spacing={1}
                >

                <Grid item>
                    <IconButton disabled>
                    <EditNoteOutlinedIcon 
                        sx={{ 
                            color: '#07382E',
                            fontSize: '130%',
                            marginTop: '-5%'
                        }} 
                    /> 
                    </IconButton>
                </Grid>

                <Grid item>
                    <Typography 
                    variant="subtitle1" 
                    gutterBottom 
                    sx={{ 
                        fontWeight: 'bold',
                        fontSize: '100%'
                    }}
                    >
                    Descrição:
                    </Typography>
                </Grid>
                </Grid>

                <Typography 
                variant="body1" 
                paragraph 
                sx={{ 
                    textAlign: 'left', 
                    marginTop: '2px', 
                    marginLeft: '3%' 
                }}
                > 
                {descricao}
                </Typography>
            </Box2>

                                        {/* BOTÕES EDITAR E EXCLUIR  */}
            <Grid 
                container 
                spacing={2} 
                sx={{marginTop: '6%'}}
            >

                <Grid item xs={6}>
                    <GreenButton 
                        onClick={handleEditClick}
                    >
                        EDITAR
                    </GreenButton>
                </Grid>

                <Grid item xs={6}>
                    <RedButton
                        onClick={handleOpenPopup}
                    >
                        EXCLUIR
                    </RedButton>
                </Grid>

            </Grid>
                                        {/* ABERTURA DE POP-UP  */}
            <Popup 
                open={openPopup} 
                handleClose={handleClosePopup} 
            />

                                        {/* MENU Inferior  */}
                <Menu_Inferior />

            </Paper>

        </Container>
    );
    }
