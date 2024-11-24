import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Avatar, TextField, Paper, Popover, Box, Divider } from '@mui/material';
import { ArrowBack, MoreVert, Search, Image, Delete, Close, AttachFile, Send, Mic, InsertDriveFile, MusicNote, CameraAlt, Poll, Photo, PlayCircleOutline } from '@mui/icons-material';

// Cabeçalho do Chat
function ChatHeader() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

      // POP-UP 
        const [openPopup, setOpenPopup] = useState(false);
        const navigate = useNavigate();
    
        const handleOpenPopup = () => {
            setOpenPopup(true);
        };
        
        const handleClosePopup = () => {
            setOpenPopup(false);
        };

    return (
        <AppBar position="static" style={{ backgroundColor: '#0f4032' }}>
            <Toolbar>
                <IconButton edge="start" color="inherit"
                    onClick={() => navigate('/Home2')}>
                    <ArrowBack />
                </IconButton>
                <Avatar src="logo-url.jpg" alt="Equipe" style={{ marginRight: 10 }} />
                <Typography variant="h6" style={{ flexGrow: 1 }}
                onClick={() => navigate('/Perfil_Chat')}>
                    Nome Equipe
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
                    <MenuItem onClick={() => navigate('/Perfil_Chat')}>
                        <Image style={{ marginRight: 10 }}/> MÍDIA, LINKS E DOCS
                    </MenuItem>
                    <MenuItem>
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

// Balões de Mensagem
function MessageBubble({ type, text, timestamp, sender, senderAvatar, imageUrl, isSender }) {
    const messageStyles = {
        container: {
            display: 'flex',
            flexDirection: isSender ? 'row-reverse' : 'row',
            alignItems: 'flex-start',
            marginBottom: '10px',
        },
        bubble: {
            backgroundColor: isSender ? '#dcf8c6' : '#ffffff',
            color: '#000',
            padding: '10px',
            borderRadius: '12px',
            maxWidth: '70%',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
            wordWrap: 'break-word',
        },
        timestamp: {
            fontSize: '10px',
            color: 'gray',
            marginTop: '4px',
            alignSelf: isSender ? 'flex-end' : 'flex-start',
        },
        avatar: {
            width: 24,
            height: 24,
            margin: isSender ? '0 0 0 8px' : '0 8px 0 0',
        },
    };

    return (
        <Box style={messageStyles.container}>
            <Avatar src={senderAvatar} alt={sender} style={messageStyles.avatar} />
            <Box>
                <Box style={messageStyles.bubble}>
                    {type === 'text' && <Typography>{text}</Typography>}
                    {type === 'audio' && (
                        <Box style={{ display: 'flex', alignItems: 'center' }}>
                            <PlayCircleOutline style={{ marginRight: '8px' }} />
                            <Typography>00:30</Typography>
                        </Box>
                    )}
                    {type === 'image' && (
                        <img
                            src={imageUrl}
                            alt="User upload"
                            style={{ width: '100%', borderRadius: '8px' }}
                        />
                    )}
                </Box>
                <Typography style={messageStyles.timestamp}>{timestamp}</Typography>
            </Box>
        </Box>
    );
}

// Rótulos de Data (ONTEM/HOJE)
function DateLabel({ text }) {
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            margin: '15px 0',
        },
        label: {
            backgroundColor: '#e0e0e0',
            color: '#4a4a4a',
            padding: '4px 12px',
            borderRadius: '12px',
            fontSize: '12px',
            fontWeight: 'bold',
        },
    };

    return (
        <div style={styles.container}>
            <span style={styles.label}>{text.toUpperCase()}</span>
        </div>
    );
}

// Entrada de Mensagem
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

// Tela Principal do Chat
function ChatScreen() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <ChatHeader />
            <Box style={{ flexGrow: 1, padding: '10px', backgroundColor: '#e0f2f1', overflowY: 'auto' }}>
                <DateLabel text="ontem" />
                <MessageBubble
                    type="text"
                    sender="Bento"
                    text="Olá! Tudo bem?"
                    timestamp="07:00"
                    senderAvatar="bento-avatar.jpg"
                    isSender={false}
                />
                <MessageBubble
                    type="audio"
                    sender="Claudia"
                    timestamp="07:10"
                    senderAvatar="claudia-avatar.jpg"
                    isSender={false}
                />
                <MessageBubble
                    type="image"
                    sender="Beatriz"
                    imageUrl="image-url.jpg"
                    timestamp="07:20"
                    senderAvatar="beatriz-avatar.jpg"
                    isSender={false}
                />
                <DateLabel text="hoje" />
                <MessageBubble
                    type="text"
                    sender="Samuel"
                    text="Esta é uma mensagem enviada."
                    timestamp="08:15"
                    senderAvatar="samuel-avatar.jpg"
                    isSender={true}
                />
            </Box>
            <ChatInput />
        </div>
            
    );
}

export default ChatScreen;
