import React from 'react';
import { Link } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import GroupIcon from '@mui/icons-material/Group';
import { styled } from '@mui/material/styles';

// Estilizando o BottomNavigationAction
const CustomBottomNavigationAction = styled(BottomNavigationAction)(({ theme }) => ({
    '&.Mui-selected': {
        color: '#07382E', // Cor personalizada para o item selecionado
    },
    '& .MuiBottomNavigationAction-label': {
        fontSize: 14,
    }
}));

function Menu_Inferior({ value, onChange, interfaceType }) {
    const routes = {
        Lider_Grupo: {
            home: '/Index',
            progresso: '/Central_Progresso',
            equipe: '/Geral_Equipe'
        }
        //,
        // Membro_Grupo: {
        //     home: '/Home3',
        //     progresso: '/novo_progresso',
        //     equipe: '/Nova_Equipe'
        // },
        // Orientador: {
        //     home: '/Home4',
        //     progresso: '/progresso4',
        //     equipe: '/Equipe4'
        // }
    };

    const selectedRoutes = routes[interfaceType] || {};

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
            <CustomBottomNavigationAction 
                label="Home" 
                value="home" 
                icon={<HomeIcon sx={{ fontSize: 35 }} />}
                component={Link}
                to={selectedRoutes.home || '/'}
            />
            <CustomBottomNavigationAction 
                label="Progresso" 
                value="progresso" 
                icon={<SchoolRoundedIcon sx={{ fontSize: 35 }} />} 
                component={Link}
                to={selectedRoutes.progresso || '/'}
            />
            <CustomBottomNavigationAction 
                label="Equipe" 
                value="equipe" 
                icon={<GroupIcon sx={{ fontSize: 35 }} />} 
                component={Link}
                to={selectedRoutes.equipe || '/'}
            />
        </BottomNavigation>
    );
}

export default Menu_Inferior;
