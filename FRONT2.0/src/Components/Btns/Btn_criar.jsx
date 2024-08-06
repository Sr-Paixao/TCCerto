import React from 'react';
import { styled } from '@mui/system';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const StyledFab = styled(Fab)(({ theme }) => ({
    backgroundColor: '#07382E',
    color: '#FFFFFF',
    '&:hover': {
        backgroundColor: '#045d56',
    },
    position: 'fixed',
    bottom: theme.spacing(8),
    right: theme.spacing(3),
    zIndex: 1000,
}));

const Btn_criar = ({ onClick }) => {
    return (
        <StyledFab onClick={onClick}>
            <AddIcon />
        </StyledFab>
    );
};

export default Btn_criar;
