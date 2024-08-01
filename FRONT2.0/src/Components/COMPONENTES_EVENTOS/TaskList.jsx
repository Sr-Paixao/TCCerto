import React, { useState } from 'react';
import {
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse,
    IconButton,
    Avatar,
    Checkbox,
    Menu,
    MenuItem,
} from '@mui/material';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';

export default function TaskList({ assignedUsers, setAssignedUsers }) {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (user) => {
        const index = assignedUsers.indexOf(user);
        if (index === -1) {
            setAssignedUsers([...assignedUsers, user]);
        } else {
            const updatedUsers = [...assignedUsers];
            updatedUsers.splice(index, 1);
            setAssignedUsers(updatedUsers);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const renderAvatars = () => {
        if (assignedUsers.length === 0) {
            return null;
        } else if (assignedUsers.length === 1) {
            return (
                <Avatar
                    alt={assignedUsers[0]}
                    src={`https://source.unsplash.com/32x32/?${assignedUsers[0]}`}
                    sx={{ width: 24, height: 24, marginLeft: 10 }}
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
                            sx={{ width: 24, height: 24, ml: -1 }}
                        />
                    ))}
                </>
            );
        }
    };

    const renderSummary = () => {
        if (assignedUsers.length === 0) {
            return "Ninguém atribuído";
        } else if (assignedUsers.length <= 3) {
            return assignedUsers.join(", ");
        } else {
            return `${assignedUsers[0]} e +${assignedUsers.length - 1} pessoas`;
        }
    };

    const getAllUsers = () => {
        return ['João', 'Maria', 'Carlos', 'Ana', 'Pedro'];
    };

    return (
        <List sx={{ width: '100%' }} component="nav" aria-labelledby="task-list-header">
            <ListItemButton onClick={handleClick} sx={{ pr: -0 }}>
                <ListItemIcon sx={{ mr: -3 }}>
                    <GroupOutlinedIcon sx={{ color: '#07382E' }} />
                </ListItemIcon>
                <ListItemText primary="Convidar:" primaryTypographyProps={{ fontWeight: 'bold' }} />
                {renderAvatars()}
                <ListItemText
                    primary={renderSummary()}
                    primaryTypographyProps={{ variant: 'body2', fontSize: '0.79rem' }}
                    sx={{ marginLeft: 1 }}
                />
                <IconButton>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {getAllUsers().map((user, index) => (
                        <ListItemButton key={index} sx={{ pl: 4 }}>
                            <Checkbox checked={assignedUsers.includes(user)} onClick={() => handleMenuItemClick(user)} />
                            <Avatar alt={user} src={`https://source.unsplash.com/32x32/?${user}`} />
                            <ListItemText primary={user} />
                        </ListItemButton>
                    ))}
                </List>
            </Collapse>
            <Menu anchorEl={anchorEl} open={openMenu} onClose={handleClose} MenuListProps={{ 'aria-labelledby': 'user-list-menu' }}>
                {getAllUsers().map((user, index) => (
                    <MenuItem key={index} onClick={() => handleMenuItemClick(user)}>
                        <Checkbox checked={assignedUsers.includes(user)} />
                        <ListItemText primary={user} />
                    </MenuItem>
                ))}
            </Menu>
        </List>
    );
}
