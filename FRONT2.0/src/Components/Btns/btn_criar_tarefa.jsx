import React from 'react';
import { Fab, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Btn_Criar_Tarefa() {
    const navigate = useNavigate();

    const handleNovaTarefa = () => {
        navigate('/Criar_Tarefa');
    };

    return (
        <Box sx={{ position: 'fixed', mt: 10, marginLeft: '50%' }}>
            <Fab
                onClick={handleNovaTarefa}
                variant="extended"
                size="small"
                sx={{
                    borderRadius: '5px',
                    backgroundColor: "#07382E !important",
                    '&:hover': {
                        backgroundColor: "#5DA18F !important",
                    }
                }}
            >
                <Typography sx={{ color: "#ffffff !important" }}>
                    Nova Tarefa
                </Typography>
            </Fab>
        </Box>
    );
}
