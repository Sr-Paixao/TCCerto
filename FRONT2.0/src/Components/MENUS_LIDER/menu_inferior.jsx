import React from 'react';
import { Link } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';

function Menu_Inferior({ value, onChange, routes }) {
    const activeColor = '#07382E';
    
    

    return (
        <BottomNavigation
            value={value}
            onChange={onChange}
            showLabels
            sx={{ 
                position: 'fixed', 
                bottom: 0, 
                left: 0, 
                right: 0, 
                backgroundColor: '#E3FAF4' 
            }}
        >
            <BottomNavigationAction 
                label="Home" 
                value="home" 
                icon={<HomeIcon sx={{ fontSize: 35 }} />}
                component={Link}
                // to={routes.home}
                sx={{ 
                    color: value === 'home' ? activeColor : 'inherit',
                    '&.Mui-selected': {
                        color: activeColor,
                    }
                }}
            />
            <BottomNavigationAction 
                label="Progresso" 
                value="progresso" 
                icon={<SchoolRoundedIcon sx={{ fontSize: 35 }} />} 
                component={Link}
                // to={routes.progresso}
                sx={{ 
                    color: value === 'progresso' ? activeColor : 'inherit',
                    '&.Mui-selected': {
                        color: activeColor,
                    }
                }}
            />
            <BottomNavigationAction 
                label="Equipe" 
                value="equipe" 
                icon={<GroupIcon sx={{ fontSize: 35 }} />} 
                component={Link}
                // to={routes.equipe}
                sx={{ 
                    color: value === 'equipe' ? activeColor : 'inherit',
                    '&.Mui-selected': {
                        color: activeColor,
                    }
                }}
            />
        </BottomNavigation>
    );
}

export default Menu_Inferior;
