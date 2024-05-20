import React from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Cabecalho2({ icon, text, iconSize, handleBack, avatar, avatarSize }) {
    const size = avatarSize || iconSize || 40; 

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            {handleBack && (
                <IconButton 
                    onClick={handleBack}
                    sx={{ 
                        alignSelf: 'flex-start',
                        marginLeft: '-5%', 
                        mb: 3
                    }}
                >
                    <ArrowBackIcon 
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

export default Cabecalho2;
