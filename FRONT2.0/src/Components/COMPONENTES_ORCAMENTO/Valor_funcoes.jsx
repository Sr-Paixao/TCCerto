import React from 'react';
import { Box, Card, Typography, Avatar } from '@mui/material';

const UserCard = ({ funcao, horas, valor }) => (

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
                marginRight: 2 
                }}
        >
            <Avatar />
            <Avatar sx={{ marginLeft: -1 }} />
        </Box>

        <Box sx={{ flex: 1, ml: 2 }}>
            <Typography variant="h6" component="div">{funcao}</Typography>
            <Typography variant="body2" color="text.secondary">{horas}</Typography>
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

export default UserCard;
