import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, CssBaseline, Paper, Typography, IconButton, Grid, TextField } from '@mui/material';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import Menu_Inferior from '../../../Components/MENUS/menu_inferior';
import Cabecalho2 from '../../../Components/CABEÇALHOS/Cabeçalho2';
import Box1 from '../../../Components/COMPONENTES_TAREFAS/Box_Form/Box_form1';
import GreenButton from '../../../Components/Btns/btn_green';
import RedButton from '../../../Components/Btns/btn_red';
import Select_Prioridade from '../../../Components/COMPONENTES_PROGRESS/Selecionar_Prioridade';
import SelectPersonalizado from '../../../Components/COMPONENTES_PROGRESS/Etapa';
import Etapa_Criada from './Pop_Up_1';
import Excluir_Etapa from './Pop_up_2';

export default function Edt_Etapa() {
    const [value, setValue] = React.useState('progresso');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const navigate = useNavigate();

    const [titulo, setTitulo] = useState('');
    const [prioridade, setPrioridade] = useState('');
    const [etapa, setEtapa] = useState('');
    const [openDialog, setOpenDialog] = useState(false);
    const [openExcluirDialog, setOpenExcluirDialog] = useState(false);

    const handleBack = () => {
        navigate('/Central_Progresso');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Título:', titulo);
        setTitulo('');
    };

    const handleSaveClick = () => {
        setOpenDialog(true);
    };

    const handleExcluirClick = () => {
        setOpenExcluirDialog(true);
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
                <Cabecalho2 handleBack={handleBack} icon={<PlaylistAddIcon />} text="Editar Etapa" iconSize={70} />

                <Typography variant="subtitle1" sx={{ mt: 1, mb: 1, textAlign: 'Left' }}>
                    Criamos uma lista com itens que consideramos padrão para qualquer curso, 
                    porém criamos esse espaço para você adicionar seus próprios itens de acordo com suas necessidades.
                </Typography>

                <form onSubmit={handleSubmit} sx={{ mt: 5, mb: 5 }}>
                    <Box1>
                        <Grid container alignItems="center" spacing={1}>
                            <Grid item>
                                <IconButton disabled>
                                    <CreateOutlinedIcon sx={{ color: '#07382E', marginLeft: '60%', alignItems: 'center', fontSize: '100%' }} />
                                </IconButton>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth value={titulo} onChange={(event) => setTitulo(event.target.value)} variant="standard" sx={{ width: '100%' }} />
                            </Grid>
                        </Grid>
                    </Box1>

                    <Select_Prioridade prioridade={prioridade} setPrioridade={setPrioridade} />
                    <SelectPersonalizado etapa={etapa} setEtapa={setEtapa} />

                    <Grid container justifyContent="center" alignItems="center" spacing={2}>
                        <Grid item xs={6}>
                            <GreenButton onClick={handleSaveClick}>
                                Salvar
                            </GreenButton>
                        </Grid>
                        <Grid item xs={6}>
                            <RedButton onClick={handleExcluirClick}>
                                Excluir
                            </RedButton>
                        </Grid>
                    </Grid>
                </form>

                <Menu_Inferior value={value} onChange={handleChange} interfaceType="Lider_Grupo" />

                <Etapa_Criada open={openDialog} handleClose={() => setOpenDialog(false)} />

                <Excluir_Etapa open={openExcluirDialog} handleClose={() => setOpenExcluirDialog(false)} />
            </Paper>
        </Container>
    );
}
