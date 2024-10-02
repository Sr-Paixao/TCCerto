import React, { useState, useEffect } from 'react';
import { Drawer, List, ListItem, ListItemAvatar, Avatar, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Link, useLocation } from 'react-router-dom'; 
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';
import TCCERTOImage from '../../img/logo.svg';

function MenuLateral({ open, onClose, interfaceType }) {
  const location = useLocation(); // Hook para capturar a rota atual
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    // Atualize o selectedIndex com base na localização atual (rota)
    const currentPath = location.pathname;
    const index = menuItems.findIndex(item => item.path === currentPath);
    if (index !== -1) {
      setSelectedIndex(index);
    }
  }, [location.pathname]); // Atualiza sempre que a rota mudar

  const routes = {
    Lider_Grupo: {
      tarefas: '/Central_Tarefas',
      eventos: '/Eventos',
      orcamento: '/orcamento',
      modelo: '/Modelo',
      configuracoes: '/config'
    },
    Membro_Grupo: {
      tarefas: '/Membro_Tarefas',
      eventos: '/Membro_Eventos',
      orcamento: '/Membro_Orcamento',
      modelo: '/Membro_Modelo',
      configuracoes: '/Membro_Config'
    }
  };

  const selectedRoutes = routes[interfaceType] || {};

  const menuItems = [
    {
      icon: selectedIndex === 0 ? <TaskAltOutlinedIcon sx={{ color: '#07382E' }} /> : <TaskAltOutlinedIcon />,
      text: "Tarefas",
      path: selectedRoutes.tarefas || '/Central_Tarefas'
    },
    {
      icon: selectedIndex === 1 ? <EventAvailableRoundedIcon sx={{ color: '#07382E' }} /> : <CalendarTodayOutlinedIcon />,
      text: "Eventos",
      path: selectedRoutes.eventos || '/Eventos'
    },
    {
      icon: selectedIndex === 2 ? <MonetizationOnIcon sx={{ color: '#07382E' }} /> : <MonetizationOnOutlinedIcon />,
      text: "Orçamento",
      path: selectedRoutes.orcamento || '/orcamento'
    },
    {
      icon: selectedIndex === 3 ? <DescriptionIcon sx={{ color: '#07382E' }} /> : <DescriptionOutlinedIcon />,
      text: "Modelo",
      path: selectedRoutes.modelo || '/Modelo'
    },
    {
      icon: selectedIndex === 5 ? <SettingsIcon sx={{ color: '#07382E' }} /> : <SettingsOutlinedIcon />,
      text: "Configurações",
      path: selectedRoutes.configuracoes || '/config'
    }
  ];

  return (
    <Drawer
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          backgroundColor: '#105F4F',
          borderTopRightRadius: '16px',
          height: '100vh',
        },
        '& .MuiList-root': {
          height: 'calc(100% - 56px)',
        },
        '& .MuiListItem-root': {
          bgcolor: '#105F4F',
          '&:hover': {
            bgcolor: '#157A6E',
          },
        },
        '& .MuiListItem-root.Mui-selected': {
          bgcolor: '#157A6E',
        },
        '& .MuiListItemIcon-root': {
          minWidth: '40px',
          color: 'white',
        },
        '& .MuiListItemText-primary': {
          fontSize: '1.2rem',
          fontWeight: 'bold',
          color: 'white',
        },
        '& .Mui-selected .MuiListItemText-primary': {
          color: '#07382E',
        },
      }}
    >
      <List sx={{ height: '100%' }}>
        <ListItem
          disablePadding
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '10%'
          }}
        >
          <ListItemAvatar
            sx={{
              marginLeft: '15px',
              width: '60px',
              height: '60px'
            }}
          >
            <Avatar
              sx={{
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Avatar
                alt="TCCERTO"
                src={TCCERTOImage}
                sx={{
                  width: '90%',
                  height: '80%'
                }}
              />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="TCCERTO"
            sx={{
              marginLeft: "5%"
            }}
          />
        </ListItem>
        <Divider
          sx={{
            marginTop: '10%'
          }}
        />

        {menuItems.map((item, index) => (
          <ListItem
            key={index}
            button
            selected={selectedIndex === index}
            component={Link}
            to={item.path}
          >
            <ListItemIcon sx={{ fontSize: '2rem' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default MenuLateral;
