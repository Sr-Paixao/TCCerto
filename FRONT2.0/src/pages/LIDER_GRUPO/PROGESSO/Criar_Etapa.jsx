import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, CssBaseline, Paper, Typography, IconButton, Grid, TextField } from '@mui/material';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import Menu_Inferior from '../../../Components/MENUS_LIDER/menu_inferior';
import Cabecalho2 from '../../../Components/CABEÇALHOS/Cabeçalho2';
import GreenButton from '../../../Components/Btns/btn_green';
import Select_Prioridade from '../../../Components/COMPONENTES_PROGRESS/Selecionar_Prioridade';
import SelectPersonalizado from '../../../Components/COMPONENTES_PROGRESS/Etapa';
import Etapa_Criada from './Pop_Up_1'; 

export default function Criar_Etapa() {
    const navigate = useNavigate();
    const [titulo, setTitulo] = useState('');
    const [prioridade, setPrioridade] = useState('');
    const [etapa, setEtapa] = useState('');
    const [openDialog, setOpenDialog] = useState(false);

    const handleBack = () => {
        navigate('/Central_Progresso');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Título:', titulo);
        setTitulo('');
        setOpenDialog(true);
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
                <Cabecalho2 handleBack={handleBack} icon={<PlaylistAddIcon />} text="Criar Etapa" iconSize={70} />
                <Typography variant="subtitle1" sx={{ mt: 1, mb: 1, textAlign: 'Left' }}>
                    Criamos uma lista com itens que consideramos padrão para qualquer curso, 
                    porém criamos esse espaço para você adicionar seus próprios itens de acordo com suas necessidades.
                </Typography>

                <form onSubmit={handleSubmit} sx={{ mt: 5, mb: 5 }}>
                    <Grid container spacing={1} alignItems="center"
                    sx={{ 
                        width: '101%', 
                        boxShadow: '2px 0px 12px 5px rgba(0, 0, 0, 0.2)', 
                        borderRadius: '5px', 
                        padding: '5px', 
                        marginBottom: '5px',
                        ml: '2%' 
                        }}>
                        <Grid item>
                            <IconButton disabled>
                                <CreateOutlinedIcon sx={{ color: '#07382E', fontSize: '100%' }} />
                            </IconButton>
                        </Grid>
                        <Grid item xs>
                                <TextField
                                    fullWidth
                                    value={titulo}
                                    onChange={(event) => setTitulo(event.target.value)}
                                    variant="standard"
                                    label="Título"
                                />
                        </Grid>
                    </Grid>
                    <Select_Prioridade prioridade={prioridade} setPrioridade={setPrioridade} />
                    <SelectPersonalizado etapa={etapa} setEtapa={setEtapa} />
                    <GreenButton type="submit" sx={{ mt: 2 }}>Criar Etapa</GreenButton>
                </form>
                <Menu_Inferior />
                <Etapa_Criada open={openDialog} handleClose={() => setOpenDialog(false)} />
            </Paper>
        </Container>
    );
}
