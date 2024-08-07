import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuLateral from './menu_lateral';

function Menu_Superior({ backgroundColor }) {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
      setMenuOpen(!isMenuOpen);
    };
  
    const handleCloseMenu = () => {
      setMenuOpen(false);
    };
  
    return (
        <Box 
          sx={{ 
            pt: 2, 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            px: 2, 
            backgroundColor,
            width: '100%' // Ajustando para ocupar 100% da largura
          }}
        >
          <IconButton 
            edge="start" 
            color="inherit" 
            aria-label="menu" 
            onClick={handleMenuClick} 
            sx={{ 
              position: 'relative', 
              top: '-10px' 
            }}
          >
            <MenuIcon sx={{ fontSize: 40 }} /> 
          </IconButton>

          <IconButton 
            edge="start" 
            color="inherit" 
            aria-label="account" 
            sx={{ 
              position: 'relative', 
              top: '-10px' ,
              mr: 1
            }}
            
          >
            <AccountCircleIcon sx={{ fontSize: 40 }} /> 
          </IconButton>
        
        <MenuLateral 
          open={isMenuOpen} 
          onClose={handleCloseMenu} 
        />
      </Box>
    );
}

export default Menu_Superior;
