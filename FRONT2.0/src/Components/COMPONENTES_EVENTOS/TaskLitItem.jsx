import React from 'react';
import { List, ListItemButton, ListItemIcon, ListItemText, Collapse, Avatar, Box, Typography } from '@mui/material';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AvatarList from './AvatarList';

const TaskListItem = ({ users, open, handleClick }) => {
  const primaryUser = users[0];
  const additionalUsers = users.length > 1 ? `+${users.length - 1} Pessoas` : '';

  return (
    <List component="nav" aria-labelledby="task-list-header" sx={{ width: '100%' }}>
      <ListItemButton onClick={handleClick} sx={{ pr: -1, py: 0.5 }}> {/* Ajustando padding vertical */}
        <ListItemIcon sx={{ minWidth: 30 }}>
          <GroupOutlinedIcon sx={{ color: '#07382E', fontSize: '1.2rem' }} />
        </ListItemIcon>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 'bold', marginRight: 1 }}>
            Atribuído:
          </Typography>
          <AvatarList users={users.slice(0, 3)} />
          <Typography variant="body2" sx={{ marginLeft: 1 }}>
            {primaryUser} {additionalUsers}
          </Typography>
        </Box>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {users.map((user, index) => (
            <ListItemButton key={index} sx={{ pl: 4 }}>
              <Avatar alt={user} src={`https://source.unsplash.com/32x32/?${user}`} sx={{ width: 24, height: 24 }} />
              <ListItemText primary={user} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </List>
  );
};

export default TaskListItem;
