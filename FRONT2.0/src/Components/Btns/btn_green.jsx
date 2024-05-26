import React from 'react';
import Button from '@mui/material/Button';

const GreenButton = ({ onClick, children, href, disabled }) => {
    return (
        <Button
            type="submit"
            fullWidth
            variant="outlined"
            sx={{
                mt: 2,
                mb: 2,
                maxWidth: '600px',
                fontSize: '100%',
                backgroundColor: disabled ? '#f0f0f0' : '#FFFFFF',
                color: disabled ? '#b0b0b0' : '#07382E',
                borderColor: "#07382E",
                "&:hover": { 
                    backgroundColor: disabled ? '#f0f0f0' : "#07382E", 
                    color: disabled ? '#b0b0b0' : "#FFFFFF"
                }
            }}
            onClick={onClick}
            href={href}
            disabled={disabled}
        >
            {children}
        </Button>
    );
};

export default GreenButton;
