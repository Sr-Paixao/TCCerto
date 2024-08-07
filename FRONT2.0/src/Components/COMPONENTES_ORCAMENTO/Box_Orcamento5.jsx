import React, { useState } from 'react';
import { Box, TextField, InputAdornment, styled } from '@mui/material';
import Box2 from '../COMPONENTES_TAREFAS/Box_Form/Box_form1';

const CustomTextField = styled(TextField)({
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
});

const ValorEmReais = ({ value }) => {
    return (
        <Box2 
            sx={{ 
                width: '100%', 
                mt: 3, 
                mb: 3, 
                display: 'flex', 
                justifyContent: 'center' 
            }}
        >
            <CustomTextField
                variant="outlined"
                value={value}
                placeholder="0,00"
                fullWidth
                InputProps={{
                    readOnly: true,
                    startAdornment: (
                        <InputAdornment position="start">
                            <Box 
                                sx={{ 
                                    fontSize: 24, 
                                    fontWeight: 'bold', 
                                    color: 'black', 
                                    
                                    lineHeight: '1.2' 
                                }}
                            >
                                R$
                            </Box>
                        </InputAdornment>
                    ),
                    sx: {
                        bgcolor: '#ffffff', 
                        height: '50px',
                        fontSize: 24,
                        fontWeight: 'bold',
                    }
                }}
            />
        </Box2>
    );
};

export default ValorEmReais;
