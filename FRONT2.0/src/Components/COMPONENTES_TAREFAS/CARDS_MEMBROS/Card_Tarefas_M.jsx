import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Grid, Avatar } from '@mui/material';
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import { useNavigate } from 'react-router-dom';

function Card_Tarefa({ nomeTarefa, diasRestantes, usuariosAtribuidos, maxAvatares }) {
    const [hovered, setHovered] = useState(false);
    const navigate = useNavigate();

    // Função para calcular a cor com base no período restante
    const getCorPrazo = (diasRestantes) => {
        if (diasRestantes <= 7) {
            return '#FF0000'; // Vermelho para menos de 7 dias
        } else if (diasRestantes <= 14) {
            return '#FFFF00'; // Amarelo para menos de 14 dias
        } else {
            return '#00FF00'; // Verde para mais de 14 dias
        }
    };

    const corPrazo = getCorPrazo(diasRestantes);
    const corTexto = corPrazo === '#FF0000' ? '#FFFFFF' : '#000000';

    const handleCardClick = () => {
        navigate(`/Dt_Tarefa_M`); // Altere '/detalhes_tarefa/${nomeTarefa}' para sua rota real
    };

    return (
        <Card 
            sx={{ 
                width: '100%', 
                mt: 2, 
                mb: 1, 
                mx: 'auto', 
                boxShadow: '2px 0px 12px 5px rgba(0, 0, 0, 0.2)' 
            }}
            onClick={handleCardClick}
        >
            <CardContent>
                <Grid 
                    container 
                    alignItems="center" 
                    justifyContent="flex-start" 
                    spacing={1}
                >
                    <Grid item>
                        <RadioButtonUncheckedOutlinedIcon 
                            sx={{ 
                                color: '#07382E', 
                                width:  '2.5rem',
                                height: '2.5rem', 
                            }} 
                        />
                    </Grid>
                    <Grid item sx={{ width: 'auto', mt: -1}}> 
                        <Typography 
                            variant="h6" 
                            component="h2" 
                            sx={{ 
                                fontSize: '1.5rem' 
                            }}
                        >
                            {nomeTarefa}
                        </Typography>
                    </Grid>
                </Grid>

                <Box 
                    sx={{ 
                        marginLeft: '5px', 
                        marginTop: '10px', 
                        backgroundColor: corPrazo, 
                        color: corTexto, 
                        padding: '4px',
                        borderRadius: '5px', 
                        width: 'fit-content', 
                        height: 'fit-content' 
                    }}
                >
                    <Typography 
                        variant="body2" 
                        sx={{ 
                            fontSize: '1rem' 
                        }}
                    >
                        Termina em {diasRestantes} dias
                    </Typography>
                </Box>

                <Box 
                    sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        marginTop: '20px', 
                        marginBottom: '-10px', 
                        marginLeft: '5px' 
                    }}
                >
                    {usuariosAtribuidos.slice(0, maxAvatares).map((usuario, index) => (
                        <Avatar 
                            key={index} 
                            src={usuario.avatar} 
                            sx={{ 
                                width: 20, 
                                height: 20, 
                                marginLeft: index !== 0 ? '-8px' : '0' 
                            }} 
                        />
                    ))}
                    <Typography 
                        variant="body2" 
                        sx={{ 
                            fontSize: '1rem', 
                            marginLeft: '8px' 
                        }}
                    >
                        {usuariosAtribuidos.map(usuario => usuario.nome).join(', ')} e mais {usuariosAtribuidos.length - maxAvatares} pessoas
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

export default Card_Tarefa;
