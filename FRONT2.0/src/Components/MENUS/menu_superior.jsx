import React, { useState } from 'react';
import { Box, IconButton, useMediaQuery, useTheme, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import MenuLateral from './menu_lateral';

function Menu_Superior({ backgroundColor = '#E2F8F4', interfaceType, profileRoute }) {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const navigate = useNavigate();

    const handleMenuClick = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleCloseMenu = () => {
        setMenuOpen(false);
    };

    const handleProfileClick = () => {
        navigate(profileRoute); // Redireciona para a rota de perfil específica
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

                <Avatar 
                    sx={{ cursor: 'pointer' }}
                    onClick={handleProfileClick} 
                />

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
