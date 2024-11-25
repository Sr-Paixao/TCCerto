import * as React from 'react';
import { Box, Avatar } from '@mui/material';
import fantasma from '../../../img/502.svg'; 
import fundo from '../../../img/fundo.svg'; 

export default function ERRO_502() {
    return (
        <Box
            sx={{
                position: 'relative', 
                height: '100vh', 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: `url(${fundo})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
            }}
        >

        <Avatar
            alt="Ghost Icon"
            src={fantasma}
            variant="square"
            sx={{
                width: '55%', 
                height: '55%',
                marginBottom: 2,
            }}
        />
        </Box>
    );
}
