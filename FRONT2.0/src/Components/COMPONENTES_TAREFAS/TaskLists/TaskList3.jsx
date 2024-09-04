import React from 'react';
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Collapse } from '@mui/material';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';

const TaskList3 = () => {
    const completedBy = "João"; 
    const completionDate = "14/04/2024"; 
    const assignedTo = "Maria"; 

    return (
        <List sx={{ width: '100%' }}>
        <ListItem>
            <ListItemAvatar>
            <HowToRegOutlinedIcon 
                sx={{ 
                    color: '#07382E',
                    fontSize: '220%' 
                    }} 
            />
            </ListItemAvatar>

            <ListItemText
            primary={<span 
                style={{ 
                    fontWeight: 'bold' ,
                }}
                >
                    Concluído por:
                    </span>}
            primaryTypographyProps={{ 
                variant: 'body2', 
                fontSize: '100%'
            }}
            />
        </ListItem>

        <ListItem>
            <Avatar 
            alt={completedBy} 
            src={
                `https://source.unsplash.com/32x32/?${completedBy}`
            } 
            />
            <ListItemText
            primary={
                <>
                <span>{completedBy}</span>
                {completionDate ? (
                    <span 
                        style={{ 
                            marginLeft: '4.3rem',
                            fontSize: '100%' 
                        }}
                    >
                    em: 
                    {completionDate}
                    </span>
                ) : (
                    <span 
                    style={{ 
                        color: 'red', 
                        // fontWeight: 'bold', 
                        marginLeft: '4.3rem', 
                        fontSize: '90%'
                    }}
                    >
                        NÃO CONCLUÍDA
                        </span>
                )}
                </>
            }
            primaryTypographyProps={{ 
                variant: 'body2', 
                fontSize: '0.9rem', 
                display: 'flex', 
                alignItems: 'center' }}
                sx={{ marginLeft: '0.5rem' }}
            />
        </ListItem>

        <ListItem>
            <Avatar 
                alt={assignedTo} 
                src={
                    `https://source.unsplash.com/32x32/?${assignedTo}`
                    } 
            />
            <ListItemText
            primary={
                <>
                <span>{assignedTo}</span>
                <span 
                    style={{ 
                        color: 'red', 
                        fontWeight: 'bold', 
                        marginLeft: '4.3rem',
                        fontSize: '90%' 
                        }}
                >
                        NÃO CONCLUÍDA
                </span>
                </>
            }
            primaryTypographyProps={{ 
                variant: 'body2', 
                fontSize: '0.9rem', 
                display: 'flex', 
                alignItems: 'center' 
            }}
                sx={{ marginLeft: '0.5rem' }}
            />
        </ListItem>

        <Collapse 
        in={true} 
        timeout="auto" 
        unmountOnExit
        >
            <List component="div" disablePadding>
            {/* Aqui você pode adicionar mais detalhes da tarefa, se necessário */}
            </List>
        </Collapse>
        </List>
    );
};

export default TaskList3;
