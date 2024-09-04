import React, { useState } from 'react';
import { List, ListItemButton, ListItemIcon, ListItemText, IconButton, Collapse, Box } from '@mui/material';
import CustomTriangleIcon from '../../img/prioridade.svg';
import PrioridadeAltaIcon from '../../img/PRIORIDADE_alta.png';
import PrioridadeMediaIcon from '../../img/PRIORIDADE_média.png';
import PrioridadeBaixaIcon from '../../img/PRIORIDADE_baixa.png';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


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
        mt:2,
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
                    <img 
                        src={CustomTriangleIcon} 
                        alt="Etapa" 
                        style={{ width: '30px', height: '30px' }}
                    />
                </ListItemIcon>
                <ListItemText 
                    primary="Etapa:" 
                    primaryTypographyProps={{ fontWeight: 'bold' }} 
                />
                <ListItemText 
                    primary={prioridade || "Selecionar prioridade"} 
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
                    <ListItemButton sx={{ pl: 4 }} onClick={() => handleEtapaChange("Documentacao")}>
                        <ListItemIcon>
                            <img src={EtapaDocumentacao} alt="Etapa Documentação" style={{ width: '30px', height: '26px' }} />
                        </ListItemIcon>
                        <ListItemText primary="Documentacao" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => handleEtapaChange("Prática")}>
                        <ListItemIcon>
                            <img src={EtapaPratica} alt="Prática" style={{ width: '30px', height: '26px' }} />
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
