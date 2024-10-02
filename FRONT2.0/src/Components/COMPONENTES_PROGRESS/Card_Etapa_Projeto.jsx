import React, { useState } from 'react';
import { Button, Box, Typography, IconButton } from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom'; 

const EtapaButton = ({ icon: Icon, label, editPath }) => {
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate(); 

    const handleClick = () => {
        setChecked(!checked);
    };

    const handleEditClick = (e) => {
        e.stopPropagation(); 
        navigate('/Edt_Etapa'); 
    };

    return (
        <Box sx={{ mb: 1, width: '100%' }}>
            <Button
                variant="outlined"
                fullWidth
                onClick={handleClick}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: '2px 0px 12px 5px rgba(0, 0, 0, 0.2)',
                    borderRadius: '5px',
                    padding: '10px',
                    backgroundColor: '#fff',
                    color: '#07382E',
                    borderColor: 'transparent',
                    '&:focus-visible': {
                        outline: 'none',
                    },
                    '&:hover': {
                        backgroundColor: '#f0f0f0',
                        borderColor: 'transparent',
                    },
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Icon sx={{ fontSize: '2.0rem', mr: 1 }} />
                    <Typography variant="button" sx={{ fontWeight: 'bold' }}>
                        {label}
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton onClick={handleEditClick}>
                        <EditIcon sx={{ fontSize: '1.5rem', color: '#07382E' }} />
                    </IconButton>
                    {checked ? (
                        <CheckCircleOutlineIcon sx={{ fontSize: '2.0rem', ml: 1 }} />
                    ) : (
                        <RadioButtonUncheckedIcon sx={{ fontSize: '2.0rem', ml: 1 }} />
                    )}
                </Box>
            </Button>
        </Box>
    );
};

export default EtapaButton;
