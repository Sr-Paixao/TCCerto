import React from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function Cabecalho3({ icon, text, iconSize, handleBack, avatar, avatarSize }) {
    const size = avatarSize || iconSize || 40; 

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            {handleBack && (
                <IconButton 
                    onClick={handleBack}
                    sx={{ 
                        alignSelf: 'flex-end',
                        marginRight: '-5%', 
                        mb: 3
                    }}
                >
                    <CloseIcon 
                        sx={{ 
                            fontSize: 40, 
                            color: '#07382E' 
                        }} 
                    /> 
                </IconButton>
            )}
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ marginRight: '8px', marginBottom: '5px' }}>
                    {avatar ? (
                        <img 
                            src={avatar} 
                            alt="avatar" 
                            style={{ 
                                width: size, 
                                height: size, 
                                objectFit: 'contain'
                            }} 
                        />
                    ) : (
                        React.cloneElement(icon, { 
                            style: { 
                                fontSize: size, 
                                color: '#07382E'
                            } 
                        })
                    )}
                </div>
                <Typography
                    component="h1"
                    variant="h6"
                    sx={{
                        color: '#07382E',
                        fontSize: '200%',
                        textAlign: 'CENTER',
                        mb: 5,
                        mt: 4
                    }}
                >
                    {text}
                </Typography>
            </div>
        </div>
    );
}

export default Cabecalho3;
