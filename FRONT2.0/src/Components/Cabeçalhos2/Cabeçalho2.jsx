import React from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Cabecalho2({ icon, text, iconSize, handleBack }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            {handleBack && (
                <IconButton 
                    onClick={handleBack}
                    sx={{ 
                        alignSelf: 'flex-start',
                        // marginBottom: '10px',
                        marginLeft: '-10%', mb: 3
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
                <div style={{ marginRight: '8px', mb: 5 }}>
                    {React.cloneElement(icon, { 
                        style: { 
                            fontSize: iconSize || 'inherit', 
                            color: '#07382E',
                            

                        } 
                    })}
                </div>
                <Typography
                    component="h1"
                    variant="h6"
                    sx={{
                        color: '#07382E',
                        fontSize: '200%',
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
