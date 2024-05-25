import React from 'react';
import { Link } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import GroupIcon from '@mui/icons-material/Group';

function Menu_Inferior({ value, onChange }) {
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
                backgroundColor:'#E3FAF4' 
            }}
        >
            <BottomNavigationAction 
                label="Home" 
                value="home" 
                icon={<HomeIcon sx={{ fontSize: 35 }} />}
                component={Link}
                to="/Index"
            />
            <BottomNavigationAction 
                label="Progresso" 
                value="progresso" 
                icon={<TimelineIcon sx={{ fontSize: 35 }} />} 
                component={Link}
                to="/progresso"
            />
            <BottomNavigationAction 
                label="Equipe" 
                value="equipe" 
                icon={<GroupIcon sx={{ fontSize: 35 }} />} 
                component={Link}
                to="/Geral_Equipe"
            />
        </BottomNavigation>
    );
}

export default Menu_Inferior;