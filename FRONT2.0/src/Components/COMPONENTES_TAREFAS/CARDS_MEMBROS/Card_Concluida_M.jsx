import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Box, Grid, Avatar } from '@mui/material';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import { format } from 'date-fns'; 

function Card_Tarefa_Completa({ nomeTarefa, dataConclusao, usuariosAtribuidos, maxAvatares }) {

    const dataFormatada = format(new Date(dataConclusao), 'dd/MM/yyyy');

    return (
        <Link to="/DT_CONCLUIDA_M" style={{ textDecoration: 'none' }}>
            <Card 
                sx={{ 
                    width: '100%', 
                    mt: 2, 
                    mb: 1, 
                    mx: 'auto', 
                    boxShadow: '2px 0px 12px 5px rgba(0, 0, 0, 0.2)',
                    cursor: 'pointer' 
                }}
            >
                <CardContent 
                    sx={{ 
                        padding: '16px', 
                        display: 'flex', 
                        flexDirection: 'column' 
                    }}
                >
                    <Grid 
                        container 
                        alignItems="center" 
                        justifyContent="flex-start" 
                        spacing={1}
                    >
                        <Grid item>
                            <TaskAltOutlinedIcon 
                                sx={{ 
                                    color: '#4CAF50', 
                                    width:'2.5rem',
                                    height: '2.5rem', 
                                }} 
                            /> 
                        </Grid>
                        <Grid 
                            item 
                            sx={{ width: 'auto', mt: -1 }}
                        >
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
                            backgroundColor: '#4CAF50', 
                            color: '#FFFFFF', 
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
                            Tarefa concluída em {dataFormatada} 
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
                            {usuariosAtribuidos.map(usuario => usuario.nome).join(', ')}
                            e mais {usuariosAtribuidos.length - maxAvatares} pessoas
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Link>
    );
}

export default Card_Tarefa_Completa;
