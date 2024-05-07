import React from 'react';
import Button from '@mui/material/Button';

const GreenButton = ({ onClick, children }) => {
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
                backgroundColor: "#FFFFFF",
                color: "#07382E",
                borderColor: "#07382E",
                "&:hover": { 
                    backgroundColor: "#07382E", 
                    color: "#FFFFFF"
                }
            }}
            onClick={onClick}
        >
            {children}
        </Button>
    );
};

export default GreenButton;
