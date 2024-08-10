import React, { useState } from 'react';
import { Avatar, Checkbox, Collapse, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const TaskList = ({ assignedUsers, handleMenuItemClick }) => {
    const [open, setOpen] = useState(false);

    const renderSummary = () => {
        if (assignedUsers.length === 0) {
            return "Ninguém atribuído";
        } else if (assignedUsers.length <= 3) {
            return assignedUsers.join(", ");
        } else {
            return `${assignedUsers[0]} e +${assignedUsers.length - 1} `;
        }
    };

    const handleListClick = () => {
        setOpen(!open);
    };

    const handleUserClick = () => {
        // handle user click logic here
    };

    const handleUserListClick = () => {
        // handle user list click logic here
    };

    const renderAvatars = () => {
        if (assignedUsers.length === 0) {
            return null;
        } else if (assignedUsers.length === 1) {
            return (
                <Avatar 
                    alt={assignedUsers[0]} 
                    src={`https://source.unsplash.com/32x32/?${assignedUsers[0]}`} 
                    sx={{
                        width: 24, 
                        height: 24, 
                        marginLeft: 1 
                    }} 
                />
            );
        } else {
            return (
                <>
                    {assignedUsers.slice(0, 3).map((user, index) => (
                        <Avatar 
                            key={index} 
                            alt={user} 
                            src={`https://source.unsplash.com/32x32/?${user}`} 
                            sx={{ 
                                width: 24, 
                                height: 24, 
                                ml: -1 
                            }} 
                        />
                    ))}
                </>
            );
        }
    };

    const summary = assignedUsers.length === 0 ? "Nenhum atribuído" : renderSummary();

    const getAllUsers = () => {
        const allUsers = ['João', 'Maria', 'Carlos', 'Ana', 'Pedro'];
        return allUsers;
    };

    return (
        <List 
            sx={{ width: '100%' }} 
            component="nav" 
            aria-labelledby="task-list-header"
        >
            <ListItemButton 
                onClick={handleListClick} 
                sx={{ pr: 0 }}
            >
                <ListItemIcon 
                    sx={{ mr: -3 }}
                >
                    <GroupOutlinedIcon 
                        sx={{ color: '#07382E' }} 
                    />
                </ListItemIcon>

                <ListItemText 
                    primary="Atribuir:"
                    primaryTypographyProps={{ fontWeight: 'bold' }} 
                />
                {renderAvatars()}
                <ListItemText 
                    primary={summary} 
                    primaryTypographyProps={{ 
                        variant: 'body2', 
                        fontSize: '0.79rem' 
                    }} 
                    sx={{ marginLeft:1 }} 
                />
                <IconButton> 
                    {open ? <ExpandLess /> : <ExpandMore />} 
                </IconButton>
            </ListItemButton>

            <Collapse in={open} 
                timeout="auto" 
                unmountOnExit
            >
                <List 
                    component="div" 
                    disablePadding
                >
                    {assignedUsers.length === 0 ? (
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText 
                                primary="Nenhum atribuído" 
                            />
                        </ListItemButton>
                    ) : (
                        getAllUsers().map((user, index) => (
                            <ListItemButton 
                                key={index} 
                                sx={{ pl: 4 }} 
                                onClick={() => handleMenuItemClick(user)}
                            >
                                <Checkbox 
                                    checked={assignedUsers.includes(user)} 
                                />
                                <Avatar 
                                    alt={user} 
                                    src={`https://source.unsplash.com/32x32/?${user}`} 
                                />
                                <ListItemText primary={user} />
                            </ListItemButton>
                        ))
                    )}
                </List>
            </Collapse>
        </List>
    );
};

export default TaskList;
