import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import svgIcon from '../../img/orçamento 4.svg';

const SoftwareCard = ({ descricao, valor }) => (

    <Card 
        sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            padding: 2, 
            marginBottom: 2, 
            borderRadius: 2, 
            boxShadow: '2px 0px 12px 5px rgba(0, 0, 0, 0.2)', 
            width: '105%', 
            height: '110%', 
            marginTop: '5%', 
            marginLeft: '-2%' 
            }}
    >

        <Box 
            sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                fontSize: 32, 
                color: 'green' 
                }}
        >
            <img src={svgIcon} alt="Ícone de Software" style={{ width: 30, height: 30 }} />
        </Box>

        <Box 
            sx={{ 
                flex: 1, 
                ml: 2 
                }}
        >
            <Typography variant="h6" component="div">{descricao}</Typography>
        </Box>

        <Box 
            sx={{ 
                fontSize: 20, 
                fontWeight: 'bold', 
                color: 'black' 
                }}
        >
            R$ {valor}
        </Box>
    </Card>
);

export default SoftwareCard;
