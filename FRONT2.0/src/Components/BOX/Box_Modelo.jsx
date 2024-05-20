import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const DownloadBox = ({ handleDownload }) => {
    return (
        <Box 
            sx={{ 
                mt:2,
                width: '100%', 
                boxShadow: '2px 0px 12px 5px rgba(0, 0, 0, 0.2)', 
                borderRadius: '5px', 
                padding: '10px', 
                marginBottom: '10px' 
            }}
        >
            <IconButton 
                onClick={() => handleDownload(1)}
            >
                <FileDownloadOutlinedIcon 
                    sx={{ 
                        color: '#07382E' 
                    }} 
                />
            </IconButton>
        </Box>
    );
}

export default DownloadBox;
