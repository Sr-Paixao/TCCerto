import React, { useState } from 'react';
import { List, ListItemButton, ListItemIcon, ListItemText, IconButton, Collapse, Box } from '@mui/material';
import QueueOutlinedIcon from '@mui/icons-material/QueueOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';

const SelecionarEtapa = ({ etapa, setEtapa }) => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    const handleEtapaChange = (novaEtapa) => {
        setEtapa(novaEtapa);
        setOpen(false);  
    };

    return (
        <Box
            sx={{ 
                mt: 2,
                width: '103%', 
                boxShadow: '2px 0px 12px 5px rgba(0, 0, 0, 0.2)', 
                borderRadius: '5px', 
                padding: '1px', 
                marginBottom: '10px' 
            }}
        >
            <List component="nav" aria-labelledby="select-personalizado-header">
                <ListItemButton onClick={handleToggle}>
                    <ListItemIcon>
                    <QueueOutlinedIcon style={{ width: '30px', height: '30px', color: '#07382E', }} />
                    </ListItemIcon>
                    <ListItemText 
                        primary="Etapa:" 
                        primaryTypographyProps={{ fontWeight: 'bold' }} 
                    />
                    <ListItemText 
                        primary={etapa || "Selecionar Etapa"} 
                        primaryTypographyProps={{
                            variant: 'body2', 
                            fontSize: '0.79rem',
                            fontWeight: 'bold'
                        }}
                    />
                    <IconButton>
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </IconButton>
                </ListItemButton>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }} onClick={() => handleEtapaChange("Documentação")}>
                            <ListItemIcon>
                                <DescriptionIcon style={{ 
                                    width: '30px', 
                                    height: '26px',
                                    color: '#07382E' }} />
                            </ListItemIcon>
                            <ListItemText primary="Documentação" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} onClick={() => handleEtapaChange("Prática")}>
                            <ListItemIcon>
                                <PersonIcon style={{ width: '30px', height: '26px',
                                color: '#07382E',
                                 }} />
                            </ListItemIcon>
                            <ListItemText primary="Prática" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
        </Box>
    );
};

export default SelecionarEtapa;
