import React from 'react';
import { Card, CardContent, Typography, Box, Grid, Avatar } from '@mui/material';
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';

function Card_Tarefa({ nomeTarefa, diasRestantes, usuariosAtribuidos = [], maxAvatares = 3 }) {
    const getCorPrazo = (diasRestantes) => {
        if (diasRestantes <= 0) {
            return '#8B0000'; // Dark red for overdue tasks
        } else if (diasRestantes <= 7) {
            return '#FF0000'; // Red for less than 7 days
        } else if (diasRestantes <= 14) {
            return '#FFFF00'; // Yellow for less than 14 days
        } else {
            return '#00FF00'; // Green for more than 14 days
        }
    };

    const corPrazo = getCorPrazo(diasRestantes);
    const corTexto = corPrazo === '#FF0000' || corPrazo === '#8B0000' ? '#FFFFFF' : '#000000';

    const usuariosValidos = Array.isArray(usuariosAtribuidos) ? usuariosAtribuidos : [];

    return (
        <Card sx={{ width: '100%', mt: 2, mb: 1, mx: 'auto', boxShadow: '2px 0px 12px 5px rgba(0, 0, 0, 0.2)' }}>
            <CardContent sx={{ padding: '4px 10px', display: 'flex', flexDirection: 'column' }}>
                <Grid container alignItems="center" justifyContent="flex-start" spacing={1}>
                    <Grid item>
                        <RadioButtonUncheckedOutlinedIcon 
                            disabled 
                            sx={{ color: '#07382E', marginRight: '5%', marginTop: '20%' }} 
                        />
                    </Grid>
                    <Grid item sx={{ width: 'auto' }}>
                        <Typography variant="h6" component="h2" sx={{ fontSize: '1.5rem' }}>
                            {nomeTarefa}
                        </Typography>
                    </Grid>
                </Grid>

                <Box sx={{ 
                    marginLeft: '5px', 
                    marginTop: '10px', 
                    backgroundColor: corPrazo, 
                    color: corTexto, 
                    padding: '4px',
                    borderRadius: '5px', 
                    width: 'fit-content', 
                    height: 'fit-content' 
                }}>
                    <Typography variant="body2" sx={{ fontSize: '1rem' }}>
                        {diasRestantes <= 0 
                            ? `Tarefa atrasada em ${Math.abs(diasRestantes)} ${Math.abs(diasRestantes) === 1 ? 'dia' : 'dias'}`
                            : `Termina em ${diasRestantes} ${diasRestantes === 1 ? 'dia' : 'dias'}`
                        }
                    </Typography>
                </Box>

                <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    marginTop: '20px', 
                    marginBottom: '-10px', 
                    marginLeft: '5px' 
                }}>
                    {usuariosValidos.slice(0, maxAvatares).map((usuario, index) => (
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
                    <Typography variant="body2" sx={{ fontSize: '1rem', marginLeft: '8px' }}>
                        {usuariosValidos.map(usuario => usuario.nome).join(', ')}
                        {usuariosValidos.length > maxAvatares && ` e mais ${usuariosValidos.length - maxAvatares} pessoas`}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

export default Card_Tarefa;