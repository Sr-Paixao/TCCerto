import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Avatar, TextField, Paper } from '@mui/material';
import { ArrowBack, MoreVert, Search, Image, Delete, Close, AttachFile, Send, EmojiEmotions } from '@mui/icons-material';

function ChatHeader() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" style={{ backgroundColor: '#0f4032' }}>
        <Toolbar>
            <IconButton edge="start" color="inherit">
            <ArrowBack />
            </IconButton>
            <Avatar src="logo-url.jpg" alt="Bom Café" style={{ marginRight: 10 }} />
            <Typography variant="h6" style={{ flexGrow: 1 }}>
            BOM CAFÉ
            </Typography>
            <IconButton edge="end" color="inherit" onClick={handleMenuOpen}>
            <MoreVert />
            </IconButton>
            <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
                style: {
                backgroundColor: '#0f4032',
                color: 'white',
                borderRadius: '12px',
                padding: '10px',
                },
            }}
            >
            <MenuItem onClick={handleMenuClose}>
                <Search style={{ marginRight: 10 }} /> PESQUISA
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Image style={{ marginRight: 10 }} /> MÍDIA, LINKS E DOCS
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Delete style={{ marginRight: 10 }} /> LIMPAR CONVERSA
            </MenuItem>
            <MenuItem onClick={handleMenuClose} style={{ justifyContent: 'center' }}>
                <Close />
            </MenuItem>
            </Menu>
        </Toolbar>
        </AppBar>
    );
    }

    function ChatInput() {
    return (
        <Paper
        style={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#0f4032',
        }}
        elevation={3}
        >
        <IconButton color="inherit">
            <EmojiEmotions style={{ color: 'white' }} />
        </IconButton>
        <TextField
            variant="outlined"
            placeholder="Digite uma mensagem"
            fullWidth
            InputProps={{
            style: {
                color: 'white',
                backgroundColor: '#244e42',
                borderRadius: '20px',
            },
            }}
        />
        <IconButton color="inherit">
            <AttachFile style={{ color: 'white' }} />
        </IconButton>
        <IconButton color="inherit">
            <Send style={{ color: 'white' }} />
        </IconButton>
        </Paper>
    );
    }

    function ChatScreen() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <ChatHeader />
        {/* Aqui você pode adicionar o componente de mensagens */}
        <div style={{ flexGrow: 1, padding: '10px', backgroundColor: '#e0f2f1' }}>
            {/* Área de mensagens */}
        </div>
        <ChatInput />
        </div>
    );
}

export default ChatScreen;
