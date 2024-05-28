import React, { useState } from 'react';
import { List, ListItemButton, ListItemIcon, ListItemText, IconButton, Collapse, Box } from '@mui/material';
import CustomTriangleIcon from '../../img/prioridade.svg';
import PrioridadeAltaIcon from '../../img/PRIORIDADE_alta.png';
import PrioridadeMediaIcon from '../../img/PRIORIDADE_média.png';
import PrioridadeBaixaIcon from '../../img/PRIORIDADE_baixa.png';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


const SelectPersonalizado = ({ prioridade, setPrioridade }) => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    const handlePrioridadeChange = (novaPrioridade) => {
        setPrioridade(novaPrioridade);
        setOpen(false);  // Isso irá fechar o menu automaticamente após a seleção
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
                        alt="Prioridade" 
                        style={{ width: '30px', height: '30px' }}
                    />
                </ListItemIcon>
                <ListItemText 
                    primary="Prioridade:" 
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
                    <ListItemButton sx={{ pl: 4 }} onClick={() => handlePrioridadeChange("Alta")}>
                        <ListItemIcon>
                            <img src={PrioridadeAltaIcon} alt="Alta" style={{ width: '30px', height: '26px' }} />
                        </ListItemIcon>
                        <ListItemText primary="Alta" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => handlePrioridadeChange("Média")}>
                        <ListItemIcon>
                            <img src={PrioridadeMediaIcon} alt="Média" style={{ width: '30px', height: '26px' }} />
                        </ListItemIcon>
                        <ListItemText primary="Média" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => handlePrioridadeChange("Baixa")}>
                        <ListItemIcon>
                            <img src={PrioridadeBaixaIcon} alt="Baixa" style={{ width: '30px', height: '26px' }} />
                        </ListItemIcon>
                        <ListItemText primary="Baixa" />
                    </ListItemButton>
                </List>
            </Collapse>
        </List>
        </Box>
    );
};

export default SelectPersonalizado;
