import React, { useState } from 'react';
import { Box, TextField, InputAdornment, styled } from '@mui/material';
import Box2 from '../COMPONENTES_TAREFAS/Box_Form/Box_form1';

const CustomTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: 'none', 
        },
        '&:hover fieldset': {
            border: 'none', 
        },
        '&.Mui-focused fieldset': {
            border: 'none', 
        },
    },
    '& .MuiInputBase-input': {
        padding: '12px 14px', 
    },
    '& .MuiInputAdornment-root': {
        marginTop: 'auto',
        marginBottom: 'auto',
    },
}));

const ValorEmReais = ({ onValueChange }) => {
    const [gasto, setGasto] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        // Permitir apenas números e ponto para separação decimal
        if (/^\d*\.?\d*$/.test(value)) {
            setGasto(value);
            onValueChange(value);
        }
    };

    return (
        <Box2 
            sx={{ 
                width: { 
                    xs: '100%', 
                    sm: '90%', 
                    md: '70%' }, 
                mt: 3, 
                mb: 3, 
                display: 'flex', 
                justifyContent: 'center' 
            }}
        >
            <CustomTextField
                variant="outlined"
                value={gasto}
                onChange={handleChange}
                placeholder="0,00"
                fullWidth
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">

                            <Box 
                                sx={{ 
                                    fontSize: { 
                                        xs: 18, 
                                        sm: 22, 
                                        md: 24 }, 
                                    fontWeight: 'bold', 
                                    color: 'black', 
                                    lineHeight: '1.1' 
                                }}
                            >
                                R$
                            </Box>
                        </InputAdornment>
                    ),
                    sx: {
                        bgcolor: '#ffffff',  
                        height: '50px',
                        fontSize: { xs: 20, sm: 24, md: 26 },
                        fontWeight: 'bold',
                    }
                }}
                inputProps={{
                    style: {
                        padding: '10px',
                        textAlign: 'left',
                        height: '50px',
                    }
                }}
            />
        </Box2>
    );
};

export default ValorEmReais;
