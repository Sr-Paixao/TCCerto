import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, CssBaseline, Paper, Typography } from '@mui/material';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';

// IMPORT COMPONENT
import AreaCursoComponent from '../../../Components/COMPONENTES_ORCAMENTO/Box_orcamento';

// IMPORT COMPONENTS
import Cabecalho2 from '../../../Components/CABEÇALHOS/Cabeçalho2';
import GreenButton from '../../../Components/Btns/btn_green';

export default function Area_de_atuação() {
    const navigate = useNavigate();
    const [selectedCurso, setSelectedCurso] = useState(null);

    // Função para voltar para a página inicial
    const handleBack = () => {
        navigate('/Orcamento');
    };

    const cursos = [
        { id: 1, curso: 'Curso 1', horas: '10' },
        { id: 2, curso: 'Curso 2', horas: '15' },
        { id: 3, curso: 'Curso 3', horas: '20' },
        { id: 4, curso: 'Curso 4', horas: '25' }
    ];

    const handleSelectCurso = (id) => {
        setSelectedCurso(id);
    };

    const handleNext = (event) => {
        if (selectedCurso === null) {
            event.preventDefault();
        } else {
            navigate('/Orcamento2');
        }
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
                                                            {/* CABEÇALHO */}
                <Cabecalho2
                    handleBack={handleBack}
                    icon={<WorkHistoryOutlinedIcon />}
                    text="Área de Atuação"
                    iconSize={75}
                />

                                                            {/* TEXTO INFORMATIVO */}
                <Box sx={{ width: '100%', mt: -1 }}>
                    <Typography 
                        variant="subtitle1" 
                        sx={{ mt: 1, mb: 4, textAlign: 'left' }}
                    >
                        Por favor, informe a área de 
                        atuação do seu curso para que 
                        possamos calcular o valor médio 
                        do salário recebido na sua profissão. 
                    </Typography>
                </Box>

                                                            {/* COMPONENTES ÁREA CURSO */}
                <Box sx={{ width: '100%', mb: -1 }}>
                    {cursos.map((curso) => (
                        <AreaCursoComponent 
                            key={curso.id} 
                            curso={curso.curso} 
                            horas={curso.horas} 
                            selecionado={curso.id === selectedCurso} 
                            onSelect={() => handleSelectCurso(curso.id)} 
                        />
                    ))}
                </Box>

                                                            {/* BOTÃO DE AVANÇAR */}
                <GreenButton
                    onClick={handleNext}
                    href={selectedCurso !== null ? '/Horas_Trabalhadas' : '#'}
                    disabled={selectedCurso === null}
                >
                    Avançar
                </GreenButton>
            </Paper>
        </Container>
    );
}
