import React, { useState } from 'react';
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuLateral from './menu_lateral';

function Menu_Superior({ backgroundColor = '#E2F8F4', interfaceType }) {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleMenuClick = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleCloseMenu = () => {
        setMenuOpen(false);
    };

    return (
        <Box>
            <Box 
                sx={{
                    height: '64px', // Altura do Menu_Superior
                    display: 'block', // Garante que o espaçamento seja considerado
                }}
            />

            {/* Menu Superior */}
            <Box 
                sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    px: 2, 
                    backgroundColor,
                    width: '100%',
                    height: '64px', // Altura do menu
                    position: 'fixed', 
                    top: 0, 
                    left: 0, 
                    right: 0,
                    zIndex: 1200, // Garante que o menu superior fique acima de outros componentes
                    borderBottom: '1px solid #ddd', // Linha de separação
                }}
            >
                <IconButton 
                    edge="start" 
                    color="inherit" 
                    aria-label="menu" 
                    onClick={handleMenuClick} 
                    aria-expanded={isMenuOpen}
                >
                    <MenuIcon sx={{ fontSize: 35 }} />
                </IconButton>

                <IconButton 
                    edge="end" 
                    color="inherit" 
                    aria-label="account"
                >
                    <AccountCircleIcon sx={{ fontSize: 35 }} />
                </IconButton>
            
                <MenuLateral 
                    open={isMenuOpen} 
                    onClose={handleCloseMenu} 
                    interfaceType={interfaceType} 
                    isMobile={isMobile} 
                />
            </Box>
        </Box>
    );
}

export default Menu_Superior;
