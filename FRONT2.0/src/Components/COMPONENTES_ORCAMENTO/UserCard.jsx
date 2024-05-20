import React from 'react';
import { Box, Typography, TextField, Avatar } from '@mui/material';

const UserCard = ({ user, onUpdate }) => {
  const handleRoleChange = (event) => {
    onUpdate(user.id, event.target.value, user.hours);
  };

  const handleHoursChange = (event) => {
    onUpdate(user.id, user.role, event.target.value);
  };

  const handleKeyPress = (event) => {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  };

  return (
    <Box 
      display="flex" 
      alignItems="center" 
      padding={2} 
      boxShadow={1} 
      borderRadius={2} 
      bgcolor="#ffffff" 
      mb={2}
      sx={{ 
        width: '100%',
        border: '1px solid #e0e0e0',
        '&:hover': {
          boxShadow: 3
        }
      }}
    >
      <Avatar 
        sx={{ 
          width: 56, 
          height: 56, 
          bgcolor: "#cfd8dc" 
          }}
      >
        {user.name[0]}
      </Avatar>

      <Box ml={2} flexGrow={1}>
        <Typography variant="h6">
          {user.name}
        </Typography>

        <TextField 
          fullWidth 
          variant="standard" 
          value={user.role}
          onChange={handleRoleChange}
          InputProps={{ readOnly: false }}
          placeholder="Função do Membro"
          sx={{ fontSize: 14 }}
        />
      </Box>

      <Box 
        display="flex" 
        alignItems="center" 
        ml={2} 
        p={1} 
        borderRadius={2} 
        bgcolor="rgba(126, 200, 181, 0.35)"
      >
        <TextField 
          variant="standard" 
          value={user.hours} 
          onChange={handleHoursChange}
          onKeyPress={handleKeyPress}
          InputProps={{ readOnly: false }}
          sx={{ 
            width: 50, 
            textAlign: 'center', 
            '& .MuiInputBase-input': {
              textAlign: 'center',
            }
          }}
        />
        <Typography ml={1}>
          hs
        </Typography>
      </Box>
    </Box>
  );
}

export default UserCard;
