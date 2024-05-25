import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Avatar, AvatarGroup, Box } from '@mui/material';


const CardLider = () => {
  // Definição dos dados do evento
    const event = {
        title: 'Reunião De Equipe',
        time: '18:00 - 19:00',
        location: 'Sala De Reunião 2',
        description: 'Descrição Do Evento Aqui',
        members: [
        { name: 'Person 1', avatar: 'https://i.pravatar.cc/300?img=1' },
        { name: 'Person 2', avatar: 'https://i.pravatar.cc/300?img=2' },
        { name: 'Person 3', avatar: 'https://i.pravatar.cc/300?img=3' },
        { name: 'Person 4', avatar: 'https://i.pravatar.cc/300?img=4' },
        // Adicione mais membros se necessário
        ],
    };

    return (
        <Link to="/Dt_Evento" style={{ textDecoration: 'none' }}>
            <Card 
                sx={{ 
                    borderRadius: 2, 
                    p: 2, 
                    boxShadow: '0px 2px 10px rgba(0,0,0,0.4)', 
                    mb:5 
                    }}
            >
            <CardContent>
                <Typography 
                    variant="h6" 
                    component="div" 
                    fontWeight="bold" 
                    sx={{ fontSize: '1.25rem' }}
                >
                    {event.title}
                </Typography>

                <Typography 
                    variant="body2" 
                    color="textSecondary" 
                    sx={{ 
                        fontSize: '1rem', 
                        marginY: 1 
                        }}
                >
                    {event.time}
                </Typography>

                <Typography 
                    variant="body2" 
                    sx={{ 
                        fontSize: '1rem', 
                        marginY: 1 
                        }}
                >
                    <strong>Local:</strong> {event.location}
                </Typography>

                <Typography 
                    variant="body2" 
                    sx={{ 
                        fontSize: '1rem', 
                        marginY: 1 
                        }}
                >
                    <strong>Descrição:</strong> {event.description}
                </Typography>

                <Box 
                    display="flex" 
                    alignItems="center" 
                    sx={{ marginY: 1 }}
                >
                    <AvatarGroup 
                        max={4} 
                        sx={{ '& .MuiAvatar-root': { 
                            width: 32, 
                            height: 32, 
                            fontSize: 14, 
                            margin: '-4px' 
                            } 
                            }}
                    >
                    {event.members.map((member, index) => (
                        <Avatar 
                            key={index} 
                            alt={member.name} 
                            src={member.avatar} 
                        />
                    ))}
                    </AvatarGroup>

                    <Typography 
                        variant="body2" 
                        color="textSecondary" 
                        ml={1} 
                        sx={{ fontSize: '1rem' }}
                    >
                    Fulano E +{event.members.length - 4} Pessoas
                    </Typography>

                </Box>

                </CardContent>

            </Card>
            
            </Link>
    );
};

export default CardLider;
