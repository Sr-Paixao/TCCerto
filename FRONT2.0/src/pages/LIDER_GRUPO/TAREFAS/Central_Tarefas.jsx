import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, CssBaseline, Paper, Typography, Box, Grid } from '@mui/material';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import Cabecalho1 from '../../../Components/CABEÇALHOS/Cabeçalho1';
import Menu_Superior from '../../../Components/MENUS/menu_superior';
import Menu_Inferior from '../../../Components/MENUS/menu_inferior';
import Card_Tarefa from '../../../Components/COMPONENTES_TAREFAS/CARDS_LIDER/Card_Tarefas';
import Card_Tarefa_Completa from '../../../Components/COMPONENTES_TAREFAS/CARDS_LIDER/Card_Concluida';
import Btn_Criar from '../../../Components/Btns/Btn_criar';

export default function Central_Tarefa() {
    const [value, setValue] = useState('');
    const [tarefas, setTarefas] = useState([]);
    const [tarefasConcluidas, setTarefasConcluidas] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetchTarefas();
    }, []);

    const fetchTarefas = async () => {
        try {
            const response = await axios.get('http://localhost:3307/api/tarefas');
            if (response.data.success) {
                const todasTarefas = response.data.data;
                // Adicionar usuários atribuídos manualmente para cada tarefa
                const tarefasComUsuarios = todasTarefas.map(tarefa => ({
                    ...tarefa,
                    usuarios_atribuidos: [
                        { nome: 'Usuário 1', avatar: 'https://i.pravatar.cc/' },
                        { nome: 'Usuário 2', avatar: 'https://i.pravatar.cc/150' }
                    ]
                }));
                setTarefas(tarefasComUsuarios.filter(tarefa => !tarefa.concluida));
                setTarefasConcluidas(tarefasComUsuarios.filter(tarefa => tarefa.concluida));
            } else {
                console.error('Erro ao buscar tarefas:', response.data.message);
            }
        } catch (error) {
            console.error('Erro ao buscar tarefas:', error);
        }
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleNovaTarefa = () => {
        navigate('/Criar_Tarefa');
    };

    const calcularDiasRestantes = (dataLimite) => {
        const hoje = new Date();
        const limite = new Date(dataLimite);
        const diferenca = limite.getTime() - hoje.getTime();
        return Math.ceil(diferenca / (1000 * 3600 * 24));
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                    <Paper elevation={2} sx={{ p: 2, boxShadow: "0" }}>
                        
                        <Menu_Superior backgroundColor="white" profileRoute="/Perfil_L" interfaceType="Lider_Grupo" />
                        
                        <Box sx={{mt: '5%'}}>
                            <Cabecalho1 
                                icon={<TaskAltOutlinedIcon />} 
                                text='Tarefas' 
                                iconSize="70px"
                            />
                        </Box>
                        
                        <Box sx={{mt: '5%'}}>
                            {tarefas.map((tarefa) => (
                                <Card_Tarefa 
                                    key={tarefa.id}
                                    nomeTarefa={tarefa.titulo_tarefa}
                                    diasRestantes={calcularDiasRestantes(tarefa.data_limite)}
                                    usuariosAtribuidos={tarefa.usuarios_atribuidos}
                                    maxAvatares={3}
                                />
                            ))}
                        </Box>
                        
                        <Typography
                            component="h2" 
                            variant="h6" 
                            sx={{ 
                                marginTop: '15px',
                                color: '#07382E' 
                            }}
                        > 
                            Tarefas Concluidas
                        </Typography>
                        
                        <Box>
                            {tarefasConcluidas.map((tarefa) => (
                                <Card_Tarefa_Completa 
                                    key={tarefa.id}
                                    nomeTarefa={tarefa.titulo_tarefa}
                                    dataConclusao={new Date(tarefa.data_conclusao)}
                                    usuariosAtribuidos={tarefa.usuarios_atribuidos}
                                    maxAvatares={2}
                                />
                            ))}
                        </Box>
                        
                        <Btn_Criar onClick={handleNovaTarefa} />

                        <Menu_Inferior value={value} onChange={handleChange} interfaceType="Lider_Grupo" />

                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}