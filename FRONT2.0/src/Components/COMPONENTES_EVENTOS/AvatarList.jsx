import React from 'react';
import { Avatar } from '@mui/material';

const AvatarList = ({ users }) => {
  if (users.length === 0) {
    return null;
  }

  return (
    <>
      {users.slice(0, 3).map((user, index) => (
        <Avatar
          key={index}
          alt={user}
          src={`https://source.unsplash.com/32x32/?${user}`}
          sx={{ width: 24, height: 24, ml: index ? -1 : 0 }}
        />
      ))}
    </>
  );
};

export default AvatarList;
