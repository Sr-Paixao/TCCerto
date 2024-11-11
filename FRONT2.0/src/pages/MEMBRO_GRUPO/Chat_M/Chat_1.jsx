import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Avatar, TextField, Paper, Popover, Box, Divider } from '@mui/material';
import { ArrowBack, MoreVert, Search, Image, Delete, Close, AttachFile, Send, Mic, InsertDriveFile, MusicNote, CameraAlt, Poll, Photo, PlayCircleOutline } from '@mui/icons-material';

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

function MessageBubble({ type, text, timestamp, sender, senderAvatar, imageUrl }) {
    const messageStyles = {
        text: {
            backgroundColor: '#c5e1a5',
            padding: '10px',
            borderRadius: '12px',
            maxWidth: '70%',
            marginBottom: '8px',
        },
        audio: {
            backgroundColor: '#a5d6a7',
            padding: '10px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            maxWidth: '70%',
            marginBottom: '8px',
        },
        image: {
            backgroundColor: '#a5d6a7',
            padding: '10px',
            borderRadius: '12px',
            maxWidth: '70%',
            marginBottom: '8px',
        },
    };

    return (
        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '10px' }}>
            <Box style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
                <Avatar src={senderAvatar} alt={sender} style={{ marginRight: '8px', width: 24, height: 24 }} />
                <Typography variant="caption" style={{ fontWeight: 'bold' }}>{sender}</Typography>
            </Box>
            <Box style={messageStyles[type]}>
                {type === 'text' && <Typography>{text}</Typography>}
                {type === 'audio' && (
                    <Box style={{ display: 'flex', alignItems: 'center' }}>
                        <PlayCircleOutline style={{ marginRight: '8px' }} />
                        <Typography>00:30</Typography>
                    </Box>
                )}
                {type === 'image' && <img src={imageUrl} alt="User upload" style={{ width: '100%', borderRadius: '8px' }} />}
            </Box>
            <Typography variant="caption" style={{ alignSelf: 'flex-end', color: 'gray' }}>{timestamp}</Typography>
        </Box>
    );
}

function ChatInput() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleAttachClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

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
                <Mic style={{ color: 'white' }} />
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
            <IconButton color="inherit" onClick={handleAttachClick}>
                <AttachFile style={{ color: 'white' }} />
            </IconButton>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                PaperProps={{
                    style: {
                        backgroundColor: '#0f4032',
                        color: 'white',
                        borderRadius: '12px',
                        padding: '10px',
                        display: 'flex',
                        justifyContent: 'space-around',
                        width: '100%',
                        maxWidth: '350px',
                        margin: '0 auto',
                        marginBottom: '15px',
                    },
                }}
            >
                <IconButton color="inherit" style={{ display: 'flex', flexDirection: 'column' }}>
                    <InsertDriveFile style={{ color: 'white' }} />
                    <Typography variant="caption">DOCUMENTO</Typography>
                </IconButton>
                <IconButton color="inherit" style={{ display: 'flex', flexDirection: 'column' }}>
                    <MusicNote style={{ color: 'white' }} />
                    <Typography variant="caption">ÁUDIO</Typography>
                </IconButton>
                <IconButton color="inherit" style={{ display: 'flex', flexDirection: 'column' }}>
                    <CameraAlt style={{ color: 'white' }} />
                    <Typography variant="caption">CÂMERA</Typography>
                </IconButton>
                <IconButton color="inherit" style={{ display: 'flex', flexDirection: 'column' }}>
                    <Poll style={{ color: 'white' }} />
                    <Typography variant="caption">ENQUETE</Typography>
                </IconButton>
                <IconButton color="inherit" style={{ display: 'flex', flexDirection: 'column' }}>
                    <Photo style={{ color: 'white' }} />
                    <Typography variant="caption">GALERIA</Typography>
                </IconButton>
            </Popover>
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
            <Box style={{ flexGrow: 1, padding: '10px', backgroundColor: '#e0f2f1', overflowY: 'auto' }}>
                <Typography variant="caption" style={{ display: 'block', textAlign: 'center', margin: '10px 0', color: 'gray' }}>ONTEM</Typography>
                <MessageBubble type="text" sender="Bento" text="Olá! Tudo bem?" timestamp="07:00" senderAvatar="bento-avatar.jpg" />
                <MessageBubble type="audio" sender="Claudia" timestamp="07:10" senderAvatar="claudia-avatar.jpg" />
                <MessageBubble type="image" sender="Beatriz" imageUrl="image-url.jpg" timestamp="07:20" senderAvatar="beatriz-avatar.jpg" />
                <Typography variant="caption" style={{ display: 'block', textAlign: 'center', margin: '10px 0', color: 'gray' }}>HOJE</Typography>
                <MessageBubble type="text" sender="Samuel" text="Esta é uma mensagem de teste." timestamp="08:15" senderAvatar="samuel-avatar.jpg" />
            </Box>
            <ChatInput />
        </div>
    );
}

export default ChatScreen;
