import React from 'react';
import Button from '@mui/material/Button';

const RedButton = ({ onClick, children }) => {
    return (
        <Button
        type="submit"
        fullWidth
        variant="outlined"
        sx={{
            mt: 2,
            mb: 5,
            maxWidth: '600px',
            fontSize: '100%',
            backgroundColor: 'transparent',
            color: '#FF0000',
            borderColor: '#FF0000',
            '&:hover': {
            backgroundColor: '#FF0000',
            color: '#FFFFFF',
            borderColor: 'transparent'
            }
        }}
        onClick={onClick}
        >
        {children}
        </Button>
    );
    };

export default RedButton;
