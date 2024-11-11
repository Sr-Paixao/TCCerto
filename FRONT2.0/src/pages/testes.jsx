// import React, { useState } from 'react';
// import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Avatar, TextField, Paper, Popover } from '@mui/material';
// import { ArrowBack, MoreVert, Search, Image, Delete, Close, AttachFile, Send, Mic, InsertDriveFile, MusicNote, CameraAlt, Poll, Photo } from '@mui/icons-material';

// function ChatHeader() {
//     const [anchorEl, setAnchorEl] = useState(null);

//     const handleMenuOpen = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleMenuClose = () => {
//         setAnchorEl(null);
//     };

//     return (
//         <AppBar position="static" style={{ backgroundColor: '#0f4032' }}>
//             <Toolbar>
//                 <IconButton edge="start" color="inherit">
//                     <ArrowBack />
//                 </IconButton>
//                 <Avatar src="logo-url.jpg" alt="Bom Café" style={{ marginRight: 10 }} />
//                 <Typography variant="h6" style={{ flexGrow: 1 }}>
//                     BOM CAFÉ
//                 </Typography>
//                 <IconButton edge="end" color="inherit" onClick={handleMenuOpen}>
//                     <MoreVert />
//                 </IconButton>
//                 <Menu
//                     anchorEl={anchorEl}
//                     open={Boolean(anchorEl)}
//                     onClose={handleMenuClose}
//                     PaperProps={{
//                         style: {
//                             backgroundColor: '#0f4032',
//                             color: 'white',
//                             borderRadius: '12px',
//                             padding: '10px',
//                         },
//                     }}
//                 >
//                     <MenuItem onClick={handleMenuClose}>
//                         <Search style={{ marginRight: 10 }} /> PESQUISA
//                     </MenuItem>
//                     <MenuItem onClick={handleMenuClose}>
//                         <Image style={{ marginRight: 10 }} /> MÍDIA, LINKS E DOCS
//                     </MenuItem>
//                     <MenuItem onClick={handleMenuClose}>
//                         <Delete style={{ marginRight: 10 }} /> LIMPAR CONVERSA
//                     </MenuItem>
//                     <MenuItem onClick={handleMenuClose} style={{ justifyContent: 'center' }}>
//                         <Close />
//                     </MenuItem>
//                 </Menu>
//             </Toolbar>
//         </AppBar>
//     );
// }

// function ChatInput() {
//     const [anchorEl, setAnchorEl] = useState(null);

//     const handleAttachClick = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleClose = () => {
//         setAnchorEl(null);
//     };

//     const open = Boolean(anchorEl);

//     return (
//         <Paper
//             style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 padding: '10px',
//                 position: 'fixed',
//                 bottom: 0,
//                 left: 0,
//                 right: 0,
//                 backgroundColor: '#0f4032',
//             }}
//             elevation={3}
//         >
//             <IconButton color="inherit">
//                 <Mic style={{ color: 'white' }} /> {/* Substituição do emoji pelo microfone */}
//             </IconButton>
//             <TextField
//                 variant="outlined"
//                 placeholder="Digite uma mensagem"
//                 fullWidth
//                 InputProps={{
//                     style: {
//                         color: 'white',
//                         backgroundColor: '#244e42',
//                         borderRadius: '20px',
//                     },
//                 }}
//             />
//             <IconButton color="inherit" onClick={handleAttachClick}>
//                 <AttachFile style={{ color: 'white' }} />
//             </IconButton>
//             <Popover
//                 open={open}
//                 anchorEl={anchorEl}
//                 onClose={handleClose}
//                 anchorOrigin={{
//                     vertical: 'top',
//                     horizontal: 'center',
//                 }}
//                 transformOrigin={{
//                     vertical: 'bottom',
//                     horizontal: 'center',
//                 }}
//                 PaperProps={{
//                     style: {
//                         backgroundColor: '#0f4032',
//                         color: 'white',
//                         borderRadius: '12px',
//                         padding: '10px',
//                         display: 'flex',
//                         justifyContent: 'space-around',
//                         width: '100%', // Ajuste para ocupar a largura completa
//                         maxWidth: '350px',
//                         margin: '0 auto', // Centralizar horizontalmente
//                         marginBottom: '15px', // Adicionar espaço entre o popover e o input
//                     },
//                 }}
//             >
//                 <IconButton color="inherit" style={{ display: 'flex', flexDirection: 'column' }}>
//                     <InsertDriveFile style={{ color: 'white' }} />
//                     <Typography variant="caption">DOCUMENTO</Typography>
//                 </IconButton>
//                 <IconButton color="inherit" style={{ display: 'flex', flexDirection: 'column' }}>
//                     <MusicNote style={{ color: 'white' }} />
//                     <Typography variant="caption">ÁUDIO</Typography>
//                 </IconButton>
//                 <IconButton color="inherit" style={{ display: 'flex', flexDirection: 'column' }}>
//                     <CameraAlt style={{ color: 'white' }} />
//                     <Typography variant="caption">CÂMERA</Typography>
//                 </IconButton>
//                 <IconButton color="inherit" style={{ display: 'flex', flexDirection: 'column' }}>
//                     <Poll style={{ color: 'white' }} />
//                     <Typography variant="caption">ENQUETE</Typography>
//                 </IconButton>
//                 <IconButton color="inherit" style={{ display: 'flex', flexDirection: 'column' }}>
//                     <Photo style={{ color: 'white' }} />
//                     <Typography variant="caption">GALERIA</Typography>
//                 </IconButton>
//             </Popover>
//             <IconButton color="inherit">
//                 <Send style={{ color: 'white' }} />
//             </IconButton>
//         </Paper>
//     );
// }

// function ChatScreen() {
//     return (
//         <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
//             <ChatHeader />
//             {/* Aqui você pode adicionar o componente de mensagens */}
//             <div style={{ flexGrow: 1, padding: '10px', backgroundColor: '#e0f2f1' }}>
//                 {/* Área de mensagens */}
//             </div>
//             <ChatInput />
//         </div>
//     );
// }

// export default ChatScreen;


import React from 'react';
import { Box, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import SchoolIcon from '@mui/icons-material/School';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SettingsIcon from '@mui/icons-material/Settings';

function Sidebar() {
  const [selected, setSelected] = React.useState('home');

  const menuItems = [
    { icon: <HomeIcon />, name: 'home' },
    { icon: <PeopleIcon />, name: 'people' },
    { icon: <ChatIcon />, name: 'chat' },
    { icon: <SchoolIcon />, name: 'education' },
    { icon: <CalendarTodayIcon />, name: 'calendar' },
    { icon: <CheckCircleIcon />, name: 'checklist' },
    { icon: <HourglassEmptyIcon />, name: 'hourglass' },
    { icon: <AttachMoneyIcon />, name: 'money' },
    { icon: <SettingsIcon />, name: 'settings' },
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#285246',
        width: '60px',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '10px',
        paddingBottom: '10px',
      }}
    >
      {menuItems.map((item) => (
        <IconButton
          key={item.name}
          onClick={() => setSelected(item.name)}
          sx={{
            color: selected === item.name ? 'white' : '#285246',
            backgroundColor: selected === item.name ? '#1b3c33' : 'transparent',
            marginBottom: '10px',
            borderRadius: '50%',
            '&:hover': {
              backgroundColor: '#d9f2e6',
            },
            width: '40px',
            height: '40px',
          }}
        >
          {item.icon}
        </IconButton>
      ))}
    </Box>
  );
}

export default Sidebar;
