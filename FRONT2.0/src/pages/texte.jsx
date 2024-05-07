import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, CssBaseline, Paper, Typography } from '@mui/material';
import FormComponent from '../Components/FormComponent';

export default function CriarTarefa() {
    const navigate = useNavigate();

    const [titulo, setTitulo] = useState('');
    const [dataConclusao, setDataConclusao] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Título:', titulo);
        console.log('Data de Conclusão:', dataConclusao);
        console.log('Descrição:', descricao);
        // Aqui você pode adicionar a lógica para salvar a tarefa
        setTitulo('');
        setDataConclusao('');
        setDescricao('');
    };

    const handleCancelarClick = () => {
        navigate('/'); // Navega de volta para a página inicial
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Paper elevation={2} sx={{ mt: 5, p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: "0" }}>
                <Typography component="h1" variant="h5" sx={{ color: '#07382E', mt: -1 }}>
                    Criar Tarefa
                </Typography>
                <FormComponent
                    handleSubmit={handleSubmit}
                    titulo={titulo}
                    setTitulo={setTitulo}
                    dataConclusao={dataConclusao}
                    setDataConclusao={setDataConclusao}
                    descricao={descricao}
                    setDescricao={setDescricao}
                />
                <Button
                    onClick={handleCancelarClick}
                    type="button"
                    fullWidth
                    variant="outlined"
                    sx={{
                        mt: 2,
                        mb: 5,
                        maxWidth: "180px",
                        backgroundColor: "transparent",
                        color: "#FF0000",
                        borderColor: "#FF0000",
                        "&:hover": {
                            backgroundColor: "#FF0000",
                            color: "#FFFFFF",
                            borderBlockColor: 'transparent'
                        }
                    }}
                >
                    Cancelar
                </Button>
            </Paper>
        </Container>
    );
}
