import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
        Container, CssBaseline, Paper, 
        Typography, IconButton,Grid, TextField
        } from '@mui/material';
import axios from 'axios';
import AddTaskIcon from '@mui/icons-material/AddTask';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import Menu_Inferior from '../../../Components/MENUS/menu_inferior';
import Cabecalho2 from '../../../Components/CABEÇALHOS/Cabeçalho2';
import Box1 from '../../../Components/COMPONENTES_TAREFAS/Box_Form/Box_form1';
import Box2 from '../../../Components/COMPONENTES_TAREFAS/Box_Form/Box_form2';
import GreenButton from '../../../Components/Btns/btn_green';
import TaskList from '../../../Components/COMPONENTES_TAREFAS/TaskLists/TaskList2';
import Tarefa_Criada from './Pop-Ups/Pop_Up_1'; 

export default function Criar_Tarefa() {
    const [value, setValue] = React.useState('');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const handleClick = () => {
        setOpenDialog(true); 
    };

    // State para controlar o título da tarefa
    const [titulo, setTitulo] = useState('');
    // State para controlar a data de conclusão da tarefa
    const [dataConclusao, setDataConclusao] = useState('');
    // State para controlar a descrição da tarefa
    const [descricao, setDescricao] = useState('');
    // State para controlar os usuários atribuídos à tarefa
    const [assignedUsers, setAssignedUsers] = useState(["João", "Maria", "Carlos", "Ana", "Pedro"]);
    // State para controlar o menu de atribuir usuários
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);
    // State para controlar a abertura e fechamento do pop-up
    const [openDialog, setOpenDialog] = useState(false);
    // Hook para navegar para outra página
    const navigate = useNavigate();

    // Função para lidar com o envio do formulário
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Assumindo que você tem uma maneira de obter o ID do usuário e do grupo
        const usuario_id = 1; // Substitua isso pela lógica real para obter o ID do usuário
        const grupo_id = 1; // Substitua isso pela lógica real para obter o ID do grupo
    
        // Formatando a data para o formato esperado (YYYY/MM/DD)
        const formattedDate = dataConclusao.split('-').join('/');
    
        const taskData = {
            usuario_id: usuario_id,
            grupo_id: grupo_id,
            titulo_tarefa: titulo,
            descricao_tarefa: descricao,
            data_limite: formattedDate
        };
    
        try {
            const response = await axios.post('http://localhost:3307/api/tarefas', taskData);
            
            if (response.data.success) {
                console.log('Tarefa criada com sucesso:', response.data);
                setTitulo('');
                setDataConclusao('');
                setDescricao('');
                setOpenDialog(true);
            } else {
                console.error('Erro ao criar tarefa:', response.data.message);
                // Você pode querer mostrar uma mensagem de erro para o usuário aqui
            }
        } catch (error) {
            console.error('Erro ao enviar dados para o servidor:', error);
            // Você pode querer mostrar uma mensagem de erro para o usuário aqui
        }
    };
    // Função para voltar para a página anterior
    const handleBack = () => {
        navigate('/Central_Tarefas');
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
                    icon={<AddTaskIcon />}
                    text="Nova Tarefa"
                    iconSize={70}
                />

                                            {/* Formulário */}
                <form 
                    onSubmit={handleSubmit} 
                    sx={{ mt: 5 }}
                >
                                            {/* Box para título da tarefa */}
                    <Box1>
                        <Grid 
                            container 
                            alignItems="center" 
                            spacing={1}
                        >
                            <Grid item>
                                <IconButton disabled>
                                    <CreateOutlinedIcon 
                                        sx={{ 
                                            color: '#07382E', 
                                            marginLeft: '60%', 
                                            alignItems: 'center', 
                                            fontSize: '100%' 
                                            }} 
                                    />
                                </IconButton>
                            </Grid>

                            <Grid item>
                                <Typography 
                                    variant="subtitle1" 
                                    gutterBottom 
                                    sx={{ 
                                        marginTop: '10%', 
                                        textAlign: 'center', 
                                        fontWeight: 'bold', 
                                        fontSize: '100%' 
                                        }}
                                >
                                        Título:
                                </Typography>
                            </Grid>

                            <Grid item>
                                <TextField 
                                    fullWidth 
                                    value={titulo} 
                                    onChange={(event) => 
                                    setTitulo(event.target.value)} 
                                    variant="standard" 
                                    sx={{ width: '100%' }} 
                                />
                            </Grid>
                        </Grid>
                    </Box1>

                                {/* Box para data de conclusão da tarefa */}
                    <Box1>
                        <Grid 
                            container 
                            alignItems="center" 
                            spacing={1}
                        >
                            <Grid item>
                                <IconButton disabled>
                                    <CalendarMonthIcon 
                                        sx={{ 
                                            color: '#07382E', 
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
                                    Conclusão:
                                </Typography>
                            </Grid>

                            <Grid item>
                                <TextField 
                                    fullWidth 
                                    type="date" 
                                    value={dataConclusao} 
                                    onChange={(event) => 
                                    setDataConclusao(event.target.value)} 
                                    variant="standard" 
                                    sx={{ width: '20vh' }}
                                />
                            </Grid>
                        </Grid>
                    </Box1>

                                {/* CAMPO USUARIOS ATRIBUIDOS */}
                    <Box1>
                        <TaskList 
                            assignedUsers={[
                                "João", 
                                "Maria", 
                                "Carlos", 
                                "Ana", 
                                "Pedro"
                                ]} 
                            handleMenuItemClick={() => {}} 
                        />
                    </Box1>

                                {/* CAMPO PARA DESCRIÇÃO DA TAREFA */}
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
                                            marginLeft: '60%' 
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
                                        fontSize: '120%' 
                                        }}
                                >
                                        Descrição:
                                </Typography>
                            </Grid>
                        </Grid>

                        <TextField 
                            fullWidth 
                            value={descricao} 
                            onChange={(event) => 
                            setDescricao(event.target.value)} 
                            variant="standard" 
                        />
                    </Box2>

                                {/* Botão para criar tarefa */}
                    <GreenButton 
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Criar Tarefa
                    </GreenButton>
                </form>

                                {/* Menu inferior */}
                <Menu_Inferior value={value} onChange={handleChange} interfaceType="Lider_Grupo" />

                                {/* Pop-up de tarefa criada com sucesso */}
                <Tarefa_Criada 
                open={openDialog} 
                handleClose={() => 
                setOpenDialog(false)} 
                />
                
            </Paper>
        </Container>
    );
}
