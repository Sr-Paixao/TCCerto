import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuLateral from './menu_lateral';


function Menu_Superior({ backgroundColor }) {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Define o breakpoint para dispositivos móveis

    const handleMenuClick = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleCloseMenu = () => {
        setMenuOpen(false);
    };

    const navigate = useNavigate();
    const handlePerfilClick = () => {
        navigate('/Perfil_L');
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
                width: '100%', 
            }}
        >
            <Box sx={{ flexGrow: 1 }}> 
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleMenuClick}
                    sx={{
                        top: isMobile ? '-10px' : '0', 
                    }}
                >
                    <MenuIcon sx={{ fontSize: isMobile ? '40px' : '40px' }} /> 
                </IconButton>
            </Box>

            <IconButton
                edge="end"
                color="inherit"
                aria-label="account"
                sx={{
                    top: isMobile ? '-10px' : '0', 
                }}
            >
                <AccountCircleIcon sx={{ fontSize: isMobile ? '40px' : '40px' }} 
                onClick={handlePerfilClick}/> 
            </IconButton>

            <MenuLateral
                open={isMenuOpen}
                onClose={handleCloseMenu}
            />
        </Box>
    );
}

export default Menu_Superior;
