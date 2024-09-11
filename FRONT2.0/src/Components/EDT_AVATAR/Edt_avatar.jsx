import React from 'react';
import { Box, Avatar, IconButton } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

const AvatarUpload = ({ avatarSrc, handleAvatarChange }) => {
  return (
    <Box sx={{ position: 'relative', width: 150, height: 150 }}>
      <Avatar
        alt="img grupo"
        src={avatarSrc}
        sx={{ width: 150, height: 150, border: '2px solid #07382E' }}
      />
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="raised-button-file"
        type="file"
        onChange={handleAvatarChange}
      />
      <label htmlFor="raised-button-file">
        <IconButton
          component="span"
          sx={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            backgroundColor: '#07382E',
            borderRadius: '50%',
            p: 1.5,
          }}
        >
          <PhotoCameraIcon sx={{ color: 'white', fontSize: 30 }} />
        </IconButton>
      </label>
    </Box>
  );
};

export default AvatarUpload;
