import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, CssBaseline, Paper, Typography, IconButton,Grid, TextField} from '@mui/material';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import Menu_Inferior from '../../../Components/MENUS_LIDER/menu_inferior';
import Cabecalho2 from '../../../Components/CABEÇALHOS/Cabeçalho2';
import Box1 from '../../../Components/COMPONENTES_TAREFAS/Box_Form/Box_form1';
import GreenButton from '../../../Components/Btns/btn_green';
import Select_Prioridade from '../../../Components/COMPONENTES_PROGRESS/Selecionar_Prioridade';
import SelectPersonalizado from '../../../Components/COMPONENTES_PROGRESS/Etapa';
import Etapa_Criada from './Pop_Up_1'; 

export default function Criar_Tarefa() {


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
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Título:', titulo);
        console.log('Data de Conclusão:', dataConclusao);
        console.log('Descrição:', descricao);
        setTitulo('');
        setDataConclusao('');
        setDescricao('');
        setOpenDialog(true); 
    };

    // Função para voltar para a página anterior
    const handleBack = () => {
        navigate('/Central_Progresso');
    };

    const [prioridade, setPrioridade] = useState('');

    const [etapa, setEtapa] = useState('');

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
                    icon={<PlaylistAddIcon />}
                    text="Criar Etapa"
                    iconSize={70}
                />

                <Typography
                    variant="subtitle1" 
                    sx={{ 
                        mt: 1, 
                        mb: 1, 
                        textAlign: 'Left'
                        }}
                >
                Criamos uma lista com itens que que considereamos padrão para qualquer curso, 
                porém criamos esse espaço para você seus próprios itens de acordo com suas necessidades.
                </Typography>

                                            {/* Formulário */}
                <form 
                    onSubmit={handleSubmit} 
                    sx={{ mt: 5, mb: 5 }}
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

                                            {/* SELECIONAR PRIORIDADE  */}

                            <Select_Prioridade prioridade={prioridade} setPrioridade={setPrioridade} />

                                    {/* SELECIONAR ETAPA DOCUMENTAÇÃO OU PRÁTICA  */}
                                    <SelectPersonalizado etapa={etapa} setEtapa={setEtapa} />

                    
                                            {/* Botão para criar ETAPA */}
                    <GreenButton 
                        onClick={handleClick}
                    >
                        Criar Etapa
                    </GreenButton>
                </form>

                                            {/* Menu inferior */}
                <Menu_Inferior />

                                            {/* Pop-up de ETAPA criada com sucesso */}
                <Etapa_Criada 
                open={openDialog} 
                handleClose={() => 
                setOpenDialog(false)} 
                />
                
            </Paper>
        </Container>
    );
}
