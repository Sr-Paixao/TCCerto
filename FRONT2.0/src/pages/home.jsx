import React from 'react';
import { Paper, Box, Typography, IconButton, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Menu_Inferior from "../Components/Menus/menu_inferior";
import Menu_Superior from '../Components/Menus/menu_superior';

// import TaskProgressBar from './HomeTarefa';

const theme = createTheme({
    palette: {
        primary: {
            main: '#07382E',
        },
        secondary: {
            main: '#0A5A40',
        },
        tertiary:{
            main: '#fff'
        }
    },
});

export default function HomeScreen() {
    const [value, setValue] = React.useState('home');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const apiResponse = {
        tasks: [
            {
                id: 1,
                usuario_id: 1,
                grupo_id: 1,
                titulo_tarefa: "Programar",
                descricao_tarefa: "Temos que programar muitooo",
                data_criacao: "2024-04-01T00:00:00.000Z",
                data_limite: "2024-05-02T03:00:00.000Z",
                concluida: 0
            },
            {
                id: 2,
                usuario_id: 1,
                grupo_id: 1,
                titulo_tarefa: "Design UI/UX",
                descricao_tarefa: "Criar novos mockups para a revisão do cliente",
                data_criacao: "2024-04-03T00:00:00.000Z",
                data_limite: "2024-05-10T03:00:00.000Z",
                concluida: 1
            },
            {
                id: 3,
                usuario_id: 1,
                grupo_id: 1,
                titulo_tarefa: "Reunião com stakeholders",
                descricao_tarefa: "Discussão dos objetivos do projeto",
                data_criacao: "2024-04-05T00:00:00.000Z",
                data_limite: "2024-05-15T03:00:00.000Z",
                concluida: 0
            },
            {
                id: 4,
                usuario_id: 1,
                grupo_id: 1,
                titulo_tarefa: "Teste de Integração",
                descricao_tarefa: "Preparar ambiente para testes de integração",
                data_criacao: "2024-04-07T00:00:00.000Z",
                data_limite: "2024-05-20T03:00:00.000Z",
                concluida: 0
            },
            {
                id: 4,
                usuario_id: 1,
                grupo_id: 1,
                titulo_tarefa: "Teste de Integração",
                descricao_tarefa: "Preparar ambiente para testes de integração",
                data_criacao: "2024-04-07T00:00:00.000Z",
                data_limite: "2024-05-20T03:00:00.000Z",
                concluida: 1
            },
        ]
    };

    return (
        <ThemeProvider theme={theme}>
            <Box 
                sx={{ 
                    pb: 7, 
                    backgroundColor: theme.palette.secondary.main, 
                    minHeight: '100vh' 
                    }}
            >

                <Menu_Superior 
                    backgroundColor={
                        theme.palette.tertiary.main
                        } 
                />

                <Box 
                    sx={{
                        display: 'flex', 
                        justifyContent: 'center', 
                        position: 'relative', 
                        mt: -4  
                        }}
                > 
                    <Box 
                        sx={{
                            position: 'absolute',
                            borderRadius: '50%',
                            bgcolor: theme.palette.secondary.main,
                            width: '160px',
                            height: '160px',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 1,  
                        }} 
                    />

                    <Box
                        sx={{
                            position: 'absolute',
                            borderRadius: '50%',
                            bgcolor: 'white',
                            width: '140px',
                            height: '140px',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 2,  
                        }} 
                    />

                    <Paper 
                        sx={{
                            borderRadius: '50%',
                            width: 130,
                            height: 130,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: theme.palette.secondary.main,
                            zIndex: 3, 
                        }}
                    >
                        <Typography 
                            variant="subtitle1" 
                            color="white" 
                        >
                            Dia
                        </Typography>
                        
                        <Typography 
                        variant="h3" 
                        component="div" 
                        color="white"
                        >
                            10
                        </Typography>

                        <Typography 
                        variant="subtitle1" 
                        color="white"
                        >
                            Novembro
                        </Typography>

                    </Paper>

                </Box>

                <Box 
                    sx={{ 
                        mt: 2, 
                        mx:  4
                        }}
                >
                    <Typography 
                        variant="h6" 
                        gutterBottom
                    >
                        Tarefas:
                    </Typography>

                        {/* <TaskProgressBar tasks={apiResponse.tasks}/> */}
                </Box>

            </Box>

            <Menu_Inferior value={value} onChange={handleChange} />

        </ThemeProvider>
    );
}
