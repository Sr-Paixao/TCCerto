import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Menu_Inferior from "../../Components/MENUS/menu_inferior";
import Menu_Superior from '../../Components/MENUS/menu_superior';
import TaskProgressBar from './HomeTarefa';

const theme = createTheme({
    palette: {
        primary: {
            main: '#07382E',
        },
        secondary: {
            main: '#0A5A40',
        },
        tertiary: {
            main: '#fff'
        }
    },
});

export default function HomeScreen() {
    const [value, setValue] = React.useState('home');
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get('http://localhost:3307/api/tarefas');
                setTasks(response.data.data);
                setLoading(false);
            } catch (err) {
                console.error("Erro ao buscar tarefas:", err);
                setError("Falha ao carregar tarefas. Por favor, tente novamente mais tarde.");
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);

    if (loading) return <Typography>Carregando...</Typography>;
    if (error) return <Typography color="error">{error}</Typography>;

    return (
        <ThemeProvider theme={theme}>
        <Menu_Superior backgroundColor="white" profileRoute="/Perfil_L" interfaceType="Lider_Grupo" />
            <Box 
                sx={{ 
                    pb: 7, 
                    backgroundColor: theme.palette.tertiary.main,
                    minHeight: '100vh' 
                }}
            >
                <Box 
                    sx={{
                        height: '100px',
                        backgroundColor: theme.palette.tertiary.main,
                    }}
                />
                <Box 
                    sx={{
                        position: 'relative',
                        backgroundColor: theme.palette.secondary.main,
                        borderTopLeftRadius: '20px',
                        borderTopRightRadius: '20px',
                        minHeight: 'calc(100vh - 100px)',
                        pt: '70px', 
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '-70px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: 140,
                            height: 140,
                            borderRadius: '50%',
                            backgroundColor: theme.palette.secondary.main,
                            border: '3px solid white',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
                        }}
                    >
                        <Typography variant="subtitle2" color="white">
                            Dia
                        </Typography>
                        
                        <Typography variant="h3" component="div" color="white">
                            10
                        </Typography>

                        <Typography variant="subtitle2" color="white">
                            Novembro
                        </Typography>
                    </Box>

                    <Box 
                        sx={{ 
                            mt: 2, 
                            mx: 4
                        }}
                    >
                        <Typography 
                            variant="h6" 
                            gutterBottom
                            color="white"
                        >
                            Tarefas:
                        </Typography>
                    </Box>
                    <TaskProgressBar tasks={tasks}/>
                </Box>
            </Box>

            <Menu_Inferior  value={value} onChange={handleChange} interfaceType="Lider_Grupo" />
        </ThemeProvider>
    );
}